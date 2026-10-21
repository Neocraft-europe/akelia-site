// =========================================================================
// CALIBRAGE DES ICÔNES DES PAGES SOLUTIONS (src/components/icones-solutions/trait.ts)
// -------------------------------------------------------------------------
// 21 octobre 2026. Les huit icônes partagent LE MÊME viewBox et LA MÊME
// épaisseur de trait : c'est ce qui garantit un trait apparent identique.
// viewBox de 20 unités (les tracés Tabler, dessinés sur 24, gardent leur
// marge de 2) : à 88px d'affichage, 1 unité = 4,4px, donc un trait de
// 0,625 unité = 2,75px (cible du ticket : 2,5 à 3px).
// Un élément agrandi ou réduit par `transform` (assemblage de tracés
// Tabler) prend `trait(échelle)` : son trait apparent ne change pas.
// =========================================================================

export const VIEWBOX = '2 2 20 20';
export const TRAIT = 0.625;
/** Épaisseur à donner à un groupe dessiné à l'échelle `echelle`. */
export const trait = (echelle = 1) => +(TRAIT / echelle).toFixed(4);
