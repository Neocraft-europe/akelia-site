// =========================================================================
// CATÉGORIES DU BLOG (src/data/categories-blog.ts)
// -------------------------------------------------------------------------
// Seul endroit où figurent les noms affichés des catégories et leurs
// adresses. Aucun identifiant technique (« systeme-de-chauffage ») ne doit
// apparaître à l'écran ni dans une adresse : toujours passer par
// libelleCategorie() et urlCategorie().
// =========================================================================

/**
 * Correspondance entre l'identifiant technique d'une catégorie, hérité de
 * Webflow (champ `categorie` des articles), et :
 * - `libelle` : son nom affiché ;
 * - `adresse` : la fin de l'adresse de sa page, /blog/<adresse> ;
 * - `description` : chapeau de la page de catégorie et méta-description.
 * L'ordre de la table est celui de la barre de catégories de /blog.
 * Nombre d'articles publiés (17 octobre 2026) indiqué pour mémoire.
 *
 * ⚠️ « page » est une adresse RÉSERVÉE : /blog/page/2 est la page 2 de la
 * liste générale. Aucune catégorie ne peut la porter (vérifié plus bas).
 */
export const CATEGORIES_BLOG = {
  'systeme-de-chauffage': { // 57
    libelle: 'Chauffage',
    adresse: 'chauffage',
    description:
      "Pompes à chaleur, poêles, chaudières, plancher chauffant : comment choisir, dimensionner et entretenir son système de chauffage.",
  },
  'renovation-energetique': { // 21
    libelle: 'Rénovation énergétique',
    adresse: 'renovation-energetique',
    description:
      "Isolation, DPE, aides financières, ordre des travaux : les guides pour mener une rénovation qui fait vraiment baisser les factures.",
  },
  'systeme-de-production-denergie': { // 6
    libelle: "Production d'énergie",
    adresse: 'production-energie',
    description:
      "Panneaux solaires, autoconsommation, stockage, revente du surplus : produire son électricité chez soi.",
  },
  'chauffe-eau': { // 2
    libelle: 'Eau chaude sanitaire',
    adresse: 'eau-chaude',
    description:
      "Chauffe-eau thermodynamique, électrique ou solaire : comparatifs, prix et critères de choix.",
  },
  'voiture-electrique': { // 3
    libelle: 'Mobilité électrique',
    adresse: 'mobilite-electrique',
    description:
      "Bornes de recharge, recharge bidirectionnelle, copropriété : alimenter son véhicule électrique à la maison.",
  },
  'autre': { // 12
    libelle: 'Conseils',
    adresse: 'conseils',
    description:
      "Ventilation, confort d'été, humidité, erreurs à éviter : les sujets qui comptent sans entrer dans une case précise.",
  },
} as const;

export type CategorieBlog = keyof typeof CATEGORIES_BLOG;

/** Identifiants des catégories, dans l'ordre de la table. */
export const IDENTIFIANTS_CATEGORIES = Object.keys(CATEGORIES_BLOG) as CategorieBlog[];

// Garde-fou : la compilation échoue si une catégorie prend l'adresse
// réservée « page » ou si deux catégories partagent une adresse.
const adresses = IDENTIFIANTS_CATEGORIES.map((id) => CATEGORIES_BLOG[id].adresse as string);
if (adresses.includes('page') || new Set(adresses).size !== adresses.length) {
  throw new Error('categories-blog.ts : adresse de catégorie réservée (« page ») ou en double.');
}

/** Nom lisible d'une catégorie ; « Conseils » si l'identifiant est inconnu. */
export function libelleCategorie(identifiant: string | undefined): string {
  return CATEGORIES_BLOG[identifiant as CategorieBlog]?.libelle ?? CATEGORIES_BLOG.autre.libelle;
}

/** Adresse de la page d'une catégorie : /blog/<adresse>, sans barre
 *  finale (même forme que les articles). Même principe que urlArticle() :
 *  jamais d'adresse de catégorie écrite en dur dans un gabarit. */
export function urlCategorie(identifiant: CategorieBlog): string {
  return `/blog/${CATEGORIES_BLOG[identifiant].adresse}`;
}

/** Identifiant d'une catégorie à partir de son adresse courte
 *  (« chauffage » → « systeme-de-chauffage ») ; undefined si inconnue. */
export function categorieDepuisAdresse(adresse: string): CategorieBlog | undefined {
  return IDENTIFIANTS_CATEGORIES.find((id) => CATEGORIES_BLOG[id].adresse === adresse);
}
