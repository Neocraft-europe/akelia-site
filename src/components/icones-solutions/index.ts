// =========================================================================
// ICÔNES DES PAGES SOLUTIONS (src/components/icones-solutions/index.ts)
// -------------------------------------------------------------------------
// 21 octobre 2026. Pictogrammes en SVG en ligne, UN composant par icône
// (jamais d'image générée, jamais de <img>). Source : Tabler Icons, licence
// MIT (LICENSES.md), tracés recopiés et assemblés ; même viewBox et même
// trait partout (trait.ts).
// - Perf… : les quatre tuiles de performances, communes aux 20 pages ;
// - Bien… : « Est-ce adapté à votre bien ? », propres à une page, choisies
//   par leur nom dans le champ `icone` de chaque condition
//   (src/data/solutions/<slug>.ts).
// Seules PerfEfficacite et BienIsolation portent de la couleur ; les autres
// prennent la couleur du texte de leur bande (currentColor).
// =========================================================================

import BienEspace from './BienEspace.astro';
import BienIsolation from './BienIsolation.astro';
import BienLogement from './BienLogement.astro';
import BienReseau from './BienReseau.astro';

/** Icônes « adapté à votre bien », par nom (champ `icone` des conditions). */
export const ICONES_BIEN = { BienLogement, BienEspace, BienIsolation, BienReseau };
export type NomIconeBien = keyof typeof ICONES_BIEN;

export { default as PerfEfficacite } from './PerfEfficacite.astro';
export { default as PerfEnvironnement } from './PerfEnvironnement.astro';
export { default as PerfEconomie } from './PerfEconomie.astro';
export { default as PerfAutonomie } from './PerfAutonomie.astro';
export { default as PerfComplexite } from './PerfComplexite.astro';
