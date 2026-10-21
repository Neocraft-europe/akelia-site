// =========================================================================
// UTILITAIRES DE TEXTE (src/utils/texte.ts)
// =========================================================================

/**
 * Convertit les **passages en gras** d'une ligne de l'encart « En bref »
 * en balises <strong>. Les caractères HTML sont neutralisés AVANT la
 * conversion : le contenu vient d'un fichier Markdown, il ne doit pas
 * pouvoir injecter de balise dans la page.
 * À utiliser avec set:html.
 */
export function grasEnHtml(ligne: string): string {
  const neutralise = ligne
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return neutralise.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

/**
 * Date en toutes lettres, à la française : « 6 janvier 2025 »,
 * « 1er juin 2026 ». Fuseau UTC : les dates du frontmatter (« 2026-06-01 »)
 * sont lues à minuit UTC ; sans cela, elles reculeraient d'un jour sur un
 * fuseau à l'ouest de Greenwich.
 */
export function dateEnFrancais(date: Date): string {
  const texte = date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  return texte.replace(/^1 /, '1er ');
}

/** Montant en euros à la française, espaces insécables compris :
 *  11000 → « 11 000 € ». */
export const euros = (montant: number) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(montant);

/** Pourcentage à la française, espace insécable compris : 5.5 → « 5,5 % ». */
export const pourcent = (taux: number) => `${String(taux).replace('.', ',')} %`;

// --- TEXTES MIS EN FORME DES PAGES SOLUTIONS --------------------------------

/** Classes d'un lien dans un texte mis en forme. */
const CLASSES_LIEN =
  'font-semibold text-nuit-900 underline underline-offset-4 hover:text-vert-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nuit-900';

/**
 * Une ligne de texte en HTML : caractères HTML neutralisés, puis
 * **gras** et [lien](/adresse). Seules les adresses INTERNES (« / ») sont
 * acceptées : un lien externe reste du texte. À utiliser avec set:html.
 */
export function ligneEnHtml(ligne: string): string {
  return grasEnHtml(ligne).replace(
    /\[([^\]]+)\]\((\/[^)\s"]*)\)/g,
    `<a href="$2" class="${CLASSES_LIEN}">$1</a>`,
  );
}

/** Un bloc d'un texte mis en forme : paragraphe ou liste à puces. */
export type BlocDeTexte = { type: 'paragraphe'; html: string } | { type: 'liste'; elements: string[] };

/**
 * Découpe un texte des fichiers src/data/solutions/ en blocs :
 *   - une ligne qui commence par « - » : élément de liste (les lignes qui
 *     se suivent forment une seule liste) ;
 *   - toute autre ligne non vide : un paragraphe.
 * Chaque ligne passe par ligneEnHtml().
 */
export function blocsDeTexte(texte: string): BlocDeTexte[] {
  const blocs: BlocDeTexte[] = [];
  for (const brute of texte.split('\n')) {
    const ligne = brute.trim();
    if (!ligne) continue;
    if (ligne.startsWith('- ')) {
      const dernier = blocs.at(-1);
      const html = ligneEnHtml(ligne.slice(2));
      if (dernier?.type === 'liste') dernier.elements.push(html);
      else blocs.push({ type: 'liste', elements: [html] });
    } else {
      blocs.push({ type: 'paragraphe', html: ligneEnHtml(ligne) });
    }
  }
  return blocs;
}

/** Identifiant d'un parcours de travaux : (« travaux », « Rénovation »)
 *  → « travaux-renovation ». Sert d'ancre au sommaire. */
export const idParcours = (prefixe: string, nom: string) =>
  `${prefixe}-${nom
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`;

/** Nombre de mots d'un texte mis en forme, pour les contrôles de longueur
 *  à la construction (pages solutions) : les « ** » ne comptent pas, ni
 *  les tirets de liste (un « mot » contient au moins une lettre ou un
 *  chiffre). Partagé le 21 octobre 2026 entre le gabarit des solutions et
 *  ParcoursAkelia, qui comptaient chacun de leur côté. */
export const nombreDeMots = (texte: string) =>
  texte.replace(/\*\*/g, '').split(/\s+/).filter((m) => /[\p{L}\d]/u.test(m)).length;
