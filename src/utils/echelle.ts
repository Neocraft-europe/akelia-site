// =========================================================================
// ÉCHELLE DE DIFFICULTÉ ET DES NOTES (src/utils/echelle.ts)
// -------------------------------------------------------------------------
// 20 octobre 2026 (refonte des pages solutions). Cinq jetons de couleur,
// du vert (1) au rouge (5) : --color-difficulte-1 à 5 (global.css, avec les
// contrastes mesurés). Une note intermédiaire (2,5 / 5) ou une lettre (A à
// G) prend une couleur MÉLANGÉE entre ses deux voisins (color-mix), sur la
// même échelle.
// La couleur ne porte jamais seule l'information : la note et le mot sont
// toujours écrits à côté.
// =========================================================================

/** Classes de fond des cinq niveaux, ÉCRITES EN ENTIER : Tailwind ne crée
 *  les variables --color-difficulte-… que s'il trouve ces classes. */
export const FONDS_DIFFICULTE = ['bg-difficulte-1', 'bg-difficulte-2', 'bg-difficulte-3', 'bg-difficulte-4', 'bg-difficulte-5'] as const;

/** Couleur CSS d'une note de 1 à 5 (bornée), demi-points compris. */
export function couleurEchelle(note: number): string {
  const n = Math.min(5, Math.max(1, note));
  const bas = Math.floor(n);
  const part = n - bas;
  if (part < 0.001) return `var(--color-difficulte-${bas})`;
  const haut = bas + 1;
  return `color-mix(in srgb, var(--color-difficulte-${bas}) ${Math.round((1 - part) * 100)}%, var(--color-difficulte-${haut}))`;
}

/** Lettre A à G → position sur l'échelle de 1 à 5 (A = 1, G = 5). */
export function noteDeLettre(lettre: string): number {
  const rang = 'ABCDEFG'.indexOf(lettre.trim().toUpperCase());
  return rang === -1 ? NaN : 1 + (rang * 4) / 6;
}

/** Le mot de la difficulté. VOCABULAIRE FIGÉ pour les 20 pages :
 *  « simple » (1 à 1,5), « moyen » (2 à 3), « difficile » (3,5 à 5). */
export function motDifficulte(note: number): 'simple' | 'moyen' | 'difficile' {
  if (note <= 1.5) return 'simple';
  if (note <= 3) return 'moyen';
  return 'difficile';
}

/** 2.5 → « 2,5 ». */
export const noteEnTexte = (note: number) => String(note).replace('.', ',');
