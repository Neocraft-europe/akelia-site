// =========================================================================
// ILLUSTRATIONS DE LA PAGE D'ACCUEIL (src/data/illustrations.ts)
// -------------------------------------------------------------------------
// Les illustrations sont déposées dans src/assets/illustrations/ :
//   maisonancienne.png, annee5090.png, annee9512.png, appartement.png,
//   maisonneuve.png, modernisation.png (cas types, 3D, livrées le
//   14 octobre 2026 ; voir src/data/cas-types.ts), travaux.png (« Deux
//   façons de faire »),
//   bandeau-aides.png (simulateur d'aides, 3:1, fond transparent ; rien
//   n'est affiché tant qu'il manque), contact.png et chantier.png
//   (« Fonctionnement »), collectif.png (Collectif, bandeau 1800 × 595,
//   fond transparent, livré le 15 octobre 2026 ; il remplace carte.png,
//   jamais livrée).
// ⚠️ Le nom doit correspondre EXACTEMENT, extension comprise : remplacer
// un .jpg par un .png impose de changer le nom dans le code.
//
// Ce fichier les retrouve AUTOMATIQUEMENT : il suffit de déposer un fichier
// dans le dossier, sans toucher au code. Tant qu'un fichier manque,
// `illustration()` renvoie undefined et le composant affiche un emplacement
// vide (fond creme-fonce).
// Les images sont ensuite optimisées en WebP par le composant <Image>
// d'Astro (astro:assets).
// =========================================================================

import type { ImageMetadata } from 'astro';
import sharp from 'sharp';
import path from 'node:path';

const fichiers = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/illustrations/*.{jpg,jpeg,png,webp}',
  { eager: true },
);

/** Renvoie l'image `nom` (ex. « pierre.jpg ») si elle existe, sinon undefined. */
export function illustration(nom: string): ImageMetadata | undefined {
  return fichiers[`../assets/illustrations/${nom}`]?.default;
}

// -------------------------------------------------------------------------
// ZONE DESSINÉE D'UNE ILLUSTRATION (14 octobre 2026)
// Les PNG à fond transparent ont souvent de larges marges vides autour du
// dessin (27 à 45 % de la largeur pour les cas types, 29 % pour contact.png). Pour afficher le
// dessin en grand, on recadre sur la zone réellement dessinée : le
// rectangle qui contient tous les pixels non transparents (opacité > 10
// sur 255). Mesurée AU MOMENT DE LA CONSTRUCTION DU SITE (sharp), une fois
// par fichier : rien à remesurer à la main si une image est remplacée.
// Les fichiers ne sont jamais modifiés.
// Renvoie undefined si le fichier manque.
// -------------------------------------------------------------------------
export interface ZoneDessinee {
  /** Coin haut gauche de la zone, en pixels du fichier. */
  x: number;
  y: number;
  /** Largeur et hauteur de la zone. */
  l: number;
  h: number;
  /** Largeur et hauteur du fichier entier. */
  largeur: number;
  hauteur: number;
}

const zones = new Map<string, Promise<ZoneDessinee | undefined>>();

async function mesurerZone(nom: string): Promise<ZoneDessinee | undefined> {
  if (!illustration(nom)) return undefined;
  const fichier = path.join(process.cwd(), 'src', 'assets', 'illustrations', nom);
  const { data, info } = await sharp(fichier).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: largeur, height: hauteur, channels } = info;
  let minX = largeur, minY = hauteur, maxX = -1, maxY = -1;
  for (let y = 0; y < hauteur; y++) {
    for (let x = 0; x < largeur; x++) {
      if (data[(y * largeur + x) * channels + channels - 1] > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  // Image entièrement transparente : on garde le fichier entier.
  if (maxX < 0) return { x: 0, y: 0, l: largeur, h: hauteur, largeur, hauteur };
  return { x: minX, y: minY, l: maxX - minX + 1, h: maxY - minY + 1, largeur, hauteur };
}

/** Zone dessinée de l'image `nom` (ex. « annee5090.png »), ou undefined. */
export function zoneDessinee(nom: string): Promise<ZoneDessinee | undefined> {
  if (!zones.has(nom)) zones.set(nom, mesurerZone(nom));
  return zones.get(nom)!;
}

/** Style du cadre : proportions de la zone dessinée. */
export const styleCadre = (z: ZoneDessinee) => `aspect-ratio: ${z.l} / ${z.h}`;

/** Style de l'image, agrandie et décalée pour que la zone remplisse le cadre
 *  (le cadre doit être en position relative, avec overflow-hidden). */
export const styleRecadrage = (z: ZoneDessinee) =>
  `width: ${((z.largeur / z.l) * 100).toFixed(2)}%; max-width: none; left: ${((-z.x / z.l) * 100).toFixed(2)}%; top: ${((-z.y / z.h) * 100).toFixed(2)}%`;
