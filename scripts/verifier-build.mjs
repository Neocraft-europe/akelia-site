// =========================================================================
// VÉRIFICATION DU SITE PRODUIT (scripts/verifier-build.mjs)
// -------------------------------------------------------------------------
// Ajouté le 19 octobre 2026, après le signalement « toutes les pages sont
// vides » : `astro build` réussit dès que le rendu ne lève pas d'erreur,
// même si une page sort vide. Ce script, lancé juste après par
// `npm run build`, contrôle quelques PAGES TÉMOINS dans dist/ et fait
// échouer la construction (code de sortie 1) si l'une d'elles :
//   - manque ;
//   - pèse moins de TAILLE_MIN octets ;
//   - n'a pas de <main>, de <h1> ou de feuille de style.
// Ajouter une page témoin : une ligne dans TEMOINS.
// =========================================================================

import { readFileSync, statSync } from 'node:fs';

const TAILLE_MIN = 20_000; // octets ; la plus petite page témoin (/devis) en fait environ 57 000

const TEMOINS = [
  'dist/index.html',
  'dist/devis/index.html',
  'dist/aides-renovation/index.html',
  'dist/blog/index.html',
  'dist/solutions/pompe-a-chaleur-air-eau/index.html',
];

const erreurs = [];
for (const fichier of TEMOINS) {
  let html;
  try {
    html = readFileSync(fichier, 'utf8');
  } catch {
    erreurs.push(`${fichier} : fichier absent`);
    continue;
  }
  const taille = statSync(fichier).size;
  if (taille < TAILLE_MIN) erreurs.push(`${fichier} : ${taille} octets, moins que le minimum de ${TAILLE_MIN}`);
  if (!/<main[\s>]/.test(html)) erreurs.push(`${fichier} : pas de <main>`);
  if (!/<h1[\s>]/.test(html)) erreurs.push(`${fichier} : pas de <h1>`);
  if (!/<link[^>]+rel="stylesheet"|<style[\s>]/.test(html)) erreurs.push(`${fichier} : aucune feuille de style`);
}

if (erreurs.length) {
  console.error(`\n✘ Vérification du site produit : ${erreurs.length} problème(s)\n  ${erreurs.join('\n  ')}\n`);
  process.exit(1);
}
console.log(`✓ Vérification du site produit : ${TEMOINS.length} pages témoins complètes.`);
