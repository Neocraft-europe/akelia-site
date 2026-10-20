/**
 * Telechargement des images du blog depuis l'ancien CDN Webflow.
 *
 * A lancer une seule fois, depuis la racine du projet :
 *     node scripts/telecharger-images-blog.mjs
 *
 * Le script lit scripts/images-blog.json, qui fait la correspondance entre
 * chaque adresse Webflow et le nom de fichier local attendu par les articles,
 * puis depose les images dans src/assets/blog/.
 *
 * Il peut etre relance sans risque : une image deja presente est ignoree.
 * Aucune dependance a installer, fetch est integre a Node 22.
 */

import { readFile, mkdir, writeFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const FICHIER_CORRESPONDANCE = 'scripts/images-blog.json';
const DOSSIER_DESTINATION = 'src/assets/blog';
const ESSAIS_MAX = 3;

/** Vrai si le fichier existe deja sur le disque. */
async function existe(chemin) {
  try {
    await access(chemin);
    return true;
  } catch {
    return false;
  }
}

/** Telecharge une adresse et renvoie son contenu, avec quelques tentatives. */
async function telecharger(url) {
  let derniereErreur;
  for (let essai = 1; essai <= ESSAIS_MAX; essai += 1) {
    try {
      const reponse = await fetch(url);
      if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`);
      return Buffer.from(await reponse.arrayBuffer());
    } catch (erreur) {
      derniereErreur = erreur;
      // petite pause croissante avant de retenter
      await new Promise((r) => setTimeout(r, 500 * essai));
    }
  }
  throw derniereErreur;
}

const correspondance = JSON.parse(await readFile(FICHIER_CORRESPONDANCE, 'utf8'));
await mkdir(DOSSIER_DESTINATION, { recursive: true });

let telechargees = 0;
let ignorees = 0;
const echecs = [];

for (const [index, image] of correspondance.entries()) {
  const destination = join(DOSSIER_DESTINATION, image.fichier);
  const avancement = `[${index + 1}/${correspondance.length}]`;

  if (await existe(destination)) {
    ignorees += 1;
    continue;
  }

  try {
    const contenu = await telecharger(image.url);
    await writeFile(destination, contenu);
    telechargees += 1;
    console.log(`${avancement} ${image.fichier} (${(contenu.length / 1024).toFixed(0)} Ko)`);
  } catch (erreur) {
    echecs.push({ fichier: image.fichier, url: image.url, raison: erreur.message });
    console.error(`${avancement} ECHEC ${image.fichier} : ${erreur.message}`);
  }
}

console.log('');
console.log(`Telechargees : ${telechargees}`);
console.log(`Deja presentes : ${ignorees}`);
console.log(`Echecs : ${echecs.length}`);

if (echecs.length > 0) {
  await writeFile('scripts/images-blog-echecs.json', JSON.stringify(echecs, null, 2));
  console.log('');
  console.log('La liste des echecs est dans scripts/images-blog-echecs.json.');
  console.log('Relancer le script retentera uniquement ces images.');
  process.exitCode = 1;
}
