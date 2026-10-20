// =========================================================================
// EXIGENCES DU COLLECTIF (src/data/collectif.ts)
// -------------------------------------------------------------------------
// Créé le 19 octobre 2026. Chiffres et critères affichés à plusieurs
// endroits du site (/devis, /qui-sommes-nous, /rejoindre-le-collectif) :
// ils se changent ICI, une seule fois.
// =========================================================================

/** Note Google minimale exigée pour entrer dans le collectif (sur 5).
 *  ⚠️ C'est un SEUIL, pas une moyenne d'avis : partout où elle s'affiche,
 *  la mention « note minimale exigée » doit l'accompagner. */
export const noteMinimale = 4.5;

/** Distance maximale entre l'artisan et le chantier, en kilomètres. */
export const distanceMaxKm = 30;

/** Note à la française : 4.5 → « 4,5 ». */
export const noteEnTexte = String(noteMinimale).replace('.', ',');

/** Nombre d'entreprises retenues par métier et par secteur, et ses
 *  formes écrites. ⚠️ Si le nombre change, changer les QUATRE valeurs
 *  ensemble (elles servent dans des phrases différentes). */
export const parMetierEtSecteur = {
  nombre: 1,
  /** Bandeau de chiffres : « 1 seul ». */
  chiffre: '1 seul',
  /** « Nous ne gardons qu'un seul expert… » */
  masculin: 'un seul',
  /** « Nous ne retenons qu'une seule entreprise… » */
  feminin: 'une seule',
};

/** Première lettre en majuscule : « un seul » → « Un seul ». */
export const majuscule = (texte: string) => texte.charAt(0).toUpperCase() + texte.slice(1);

/** Phrase d'introduction des critères d'entrée (section « L'élite de
 *  l'artisanat local » de /qui-sommes-nous, seulement). */
export const introCriteres = `Nous ne gardons qu’${parMetierEtSecteur.masculin} expert par métier et par secteur. Pour intégrer Akelia, l’entreprise doit prouver son excellence :`;

/** Les trois critères de la section « L'élite de l'artisanat local » de
 *  /qui-sommes-nous (texte fourni le 19 octobre 2026, mot pour mot),
 *  adressés aux PARTICULIERS.
 *  ⚠️ Ce ne sont PAS les critères d'éligibilité des artisans : ceux de
 *  /rejoindre-le-collectif sont une autre liste, sans note Google, dans
 *  la page elle-même. Deux promesses, deux lecteurs : ne pas fusionner. */
export const criteresEntree = [
  { titre: 'Preuve sociale :', texte: `Note Google certifiée de ${noteEnTexte}/5 minimum.` },
  { titre: 'Fiabilité :', texte: 'Certifications RGE validées et assurances décennales à jour.' },
  { titre: 'Philosophie :', texte: 'Une entreprise ancrée localement, qui privilégie ses propres équipes de pose.' },
];
