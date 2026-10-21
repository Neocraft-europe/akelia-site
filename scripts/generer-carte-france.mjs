// =========================================================================
// FOND DE CARTE DES DÉPARTEMENTS (scripts/generer-carte-france.mjs)
// -------------------------------------------------------------------------
// Créé le 20 octobre 2026. À lancer À LA MAIN, seulement pour changer de
// millésime ou de précision : `node scripts/generer-carte-france.mjs`.
// Les deux fichiers produits sont versionnés ; la construction du site
// n'appelle jamais ce script.
//
// SOURCE : IGN, ADMIN EXPRESS COG CARTO PE (« petite échelle »), édition
// 2026-01-01, couche « departement », lue sur le service WFS de la
// Géoplateforme (data.geopf.fr). Licence Ouverte 2.0 (Etalab) : voir la
// fiche https://www.data.gouv.fr/datasets/admin-express-admin-express-cog-admin-express-cog-carto-admin-express-cog-carto-pe-admin-express-cog-carto-plus-pe
// ⚠️ PAS le jeu « Contours administratifs » d'Etalab : il est sous ODbL
// (il mêle des données OpenStreetMap).
//
// TRAITEMENT : France métropolitaine seule (96 départements, Corse en 2A
// et 2B), en Lambert 93. Simplification de Douglas-Peucker SANS TROU NI
// CHEVAUCHEMENT entre départements voisins : chaque frontière commune est
// découpée en « arcs » d'un point triple à l'autre, simplifiée UNE fois,
// puis rendue aux deux départements. Les îlots de moins de SURFACE_MIN
// km² disparaissent (invisibles à 400px).
//
// PRODUIT :
//   - public/cartes/departements.svg : un <path id="d-31"> par
//     département, SANS couleur (fill hérité du <use> qui l'appelle :
//     CarteFrance.astro). Un seul fichier, mis en cache par le
//     navigateur, partagé par toutes les pages /solutions/… ;
//   - src/data/departements.ts : codes, noms officiels et cadre (viewBox)
//     de la carte. Sert au contrôle des codes à la construction.
// =========================================================================

import { writeFileSync, mkdirSync } from 'node:fs';
import { gzipSync } from 'node:zlib';

const COUCHE = 'ADMINEXPRESS-COG-CARTO-PE.2026:departement';
const URL_WFS = `https://data.geopf.fr/wfs/ows?SERVICE=WFS&VERSION=2.0.0&REQUEST=GetFeature&TYPENAMES=${COUCHE}&OUTPUTFORMAT=application/json&SRSNAME=EPSG:2154&COUNT=200`;

const TOLERANCE = 1500; // mètres : écart maximal toléré par Douglas-Peucker
const UNITE = 1000; // mètres par unité de la carte (coordonnées entières)
const SURFACE_MIN = 40; // km² : îlots plus petits supprimés

const reponse = await fetch(URL_WFS);
if (!reponse.ok) throw new Error(`WFS IGN : ${reponse.status} ${reponse.statusText}`);
const { features } = await reponse.json();
const departements = features
  .filter((f) => f.properties.code_insee.length === 2) // 971 à 976 : outre-mer, hors carte
  .sort((a, b) => a.properties.code_insee.localeCompare(b.properties.code_insee));
if (departements.length !== 96) throw new Error(`${departements.length} départements métropolitains au lieu de 96`);

// --- 1. Anneaux et voisins de chaque point -----------------------------------
const cle = ([x, y]) => `${x},${y}`;
const anneaux = []; // { code, points: [[x, y]…] } (non refermés)
for (const f of departements) {
  const polygones = f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates;
  for (const polygone of polygones)
    for (const anneau of polygone) anneaux.push({ code: f.properties.code_insee, points: anneau.slice(0, -1) });
}
const voisins = new Map();
for (const { points } of anneaux)
  points.forEach((p, i) => {
    const k = cle(p);
    if (!voisins.has(k)) voisins.set(k, new Set());
    voisins.get(k).add(cle(points[(i + points.length - 1) % points.length])).add(cle(points[(i + 1) % points.length]));
  });
// Point triple : plus de deux voisins (rencontre de trois contours, ou
// d'une frontière et du littoral).
const estJonction = (p) => voisins.get(cle(p)).size > 2;

// --- 2. Douglas-Peucker ------------------------------------------------------------
function distanceAuSegment([x, y], [x1, y1], [x2, y2]) {
  const dx = x2 - x1, dy = y2 - y1;
  const l2 = dx * dx + dy * dy;
  const t = l2 ? Math.max(0, Math.min(1, ((x - x1) * dx + (y - y1) * dy) / l2)) : 0;
  return Math.hypot(x - x1 - t * dx, y - y1 - t * dy);
}
function douglasPeucker(points) {
  if (points.length < 3) return points;
  let max = 0, indice = 0;
  for (let i = 1; i < points.length - 1; i++) {
    const d = distanceAuSegment(points[i], points[0], points.at(-1));
    if (d > max) (max = d), (indice = i);
  }
  if (max <= TOLERANCE) return [points[0], points.at(-1)];
  return [...douglasPeucker(points.slice(0, indice + 1)).slice(0, -1), ...douglasPeucker(points.slice(indice))];
}

// --- 3. Arcs : découpés aux points triples, simplifiés une seule fois --------
const arcsSimplifies = new Map(); // signature → points simplifiés
function arcSimplifie(arc) {
  const sens = `${cle(arc[0])}|${cle(arc[1])}|${cle(arc.at(-1))}`;
  if (arcsSimplifies.has(sens)) return arcsSimplifies.get(sens);
  const inverse = `${cle(arc.at(-1))}|${cle(arc.at(-2))}|${cle(arc[0])}`;
  if (arcsSimplifies.has(inverse)) return [...arcsSimplifies.get(inverse)].reverse();
  const simplifie = douglasPeucker(arc);
  arcsSimplifies.set(sens, simplifie);
  return simplifie;
}

const quantifie = ([x, y], cadre) => [Math.round((x - cadre.xmin) / UNITE), Math.round((cadre.ymax - y) / UNITE)];
const surface = (pts) => Math.abs(pts.reduce((s, [x, y], i) => { const [x2, y2] = pts[(i + 1) % pts.length]; return s + x * y2 - x2 * y; }, 0)) / 2;

const toutes = anneaux.flatMap((a) => a.points);
const cadre = {
  xmin: Math.min(...toutes.map((p) => p[0])), xmax: Math.max(...toutes.map((p) => p[0])),
  ymin: Math.min(...toutes.map((p) => p[1])), ymax: Math.max(...toutes.map((p) => p[1])),
};

const chemins = new Map(); // code → morceaux du « d »
let ilotsSupprimes = 0;
for (const { code, points } of anneaux) {
  const debut = points.findIndex(estJonction);
  let simplifie;
  if (debut === -1) {
    // Île (aucun voisin) : anneau fermé, coupé à son point le plus éloigné.
    if (surface(points) / 1e6 < SURFACE_MIN) { ilotsSupprimes++; continue; }
    const loin = points.reduce((m, p, i) => (Math.hypot(p[0] - points[0][0], p[1] - points[0][1]) > Math.hypot(points[m][0] - points[0][0], points[m][1] - points[0][1]) ? i : m), 0);
    simplifie = [...douglasPeucker(points.slice(0, loin + 1)).slice(0, -1), ...douglasPeucker([...points.slice(loin), points[0]]).slice(0, -1)];
  } else {
    const tourne = [...points.slice(debut), ...points.slice(0, debut), points[debut]];
    simplifie = [];
    let depart = 0;
    for (let i = 1; i < tourne.length; i++)
      if (i === tourne.length - 1 || estJonction(tourne[i])) {
        simplifie.push(...arcSimplifie(tourne.slice(depart, i + 1)).slice(0, -1));
        depart = i;
      }
  }
  const q = simplifie.map((p) => quantifie(p, cadre)).filter((p, i, t) => i === 0 || p[0] !== t[i - 1][0] || p[1] !== t[i - 1][1]);
  if (q.length < 3) continue;
  // Chemin relatif : « M x y l dx dy … z ».
  let d = `M${q[0][0]} ${q[0][1]}l`;
  for (let i = 1; i < q.length; i++) {
    const dx = q[i][0] - q[i - 1][0], dy = q[i][1] - q[i - 1][1];
    d += `${i > 1 && dx >= 0 ? ' ' : ''}${dx}${dy >= 0 ? ' ' : ''}${dy}`;
  }
  chemins.set(code, (chemins.get(code) ?? '') + d + 'z');
}

const largeur = Math.ceil((cadre.xmax - cadre.xmin) / UNITE);
const hauteur = Math.ceil((cadre.ymax - cadre.ymin) / UNITE);
const svg =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${largeur} ${hauteur}">` +
  `<!-- Départements de France métropolitaine. Source : IGN, ADMIN EXPRESS COG CARTO PE 2026, Licence Ouverte 2.0. Simplifié (scripts/generer-carte-france.mjs). -->` +
  departements.map((f) => `<path id="d-${f.properties.code_insee}" d="${chemins.get(f.properties.code_insee)}"/>`).join('') +
  `</svg>\n`;

mkdirSync('public/cartes', { recursive: true });
writeFileSync('public/cartes/departements.svg', svg);

const ts = `// =========================================================================
// DÉPARTEMENTS DE LA CARTE (src/data/departements.ts)
// -------------------------------------------------------------------------
// FICHIER PRODUIT par scripts/generer-carte-france.mjs : ne pas modifier à
// la main. Source : IGN, ADMIN EXPRESS COG CARTO PE 2026 (Licence Ouverte
// 2.0). France métropolitaine seule : les codes d'outre-mer (971 à 976)
// n'existent pas sur la carte et arrêtent donc la construction.
// =========================================================================

/** Cadre du fond de carte public/cartes/departements.svg. */
export const CADRE_CARTE = { largeur: ${largeur}, hauteur: ${hauteur} };

/** Code → nom officiel, dans l'ordre des codes. */
export const DEPARTEMENTS: Record<string, string> = {
${departements.map((f) => `  '${f.properties.code_insee}': ${JSON.stringify(f.properties.nom_officiel)},`).join('\n')}
};
`;
writeFileSync('src/data/departements.ts', ts);

console.log(`Arcs simplifiés : ${arcsSimplifies.size} ; îlots supprimés : ${ilotsSupprimes}`);
console.log(`public/cartes/departements.svg : ${svg.length} octets, ${gzipSync(svg, { level: 9 }).length} compressé (gzip -9)`);
