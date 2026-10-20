// =========================================================================
// FONCTIONS DU BLOG (src/utils/blog.ts)
// -------------------------------------------------------------------------
// Lecture de la collection « blog » : articles publiés (sans brouillons),
// adresse d'un article, articles liés, pages de liste (/blog et
// catégories) et leur pagination.
// =========================================================================

import { getCollection, type CollectionEntry } from 'astro:content';
import type { GetStaticPathsResult, Page, PaginateFunction } from 'astro';
import { urlCategorie, type CategorieBlog } from '../data/categories-blog';

export type Article = CollectionEntry<'blog'>;

/** Adresse d'un article. Héritée de Webflow : /post/<slug>, sans barre
 *  finale. Ne pas la changer (85 liens internes et le référencement). */
export const urlArticle = (article: Article) => `/post/${article.id}`;

/** Articles publiés (brouillons exclus), du plus récent au plus ancien. */
export async function articlesPublies(): Promise<Article[]> {
  const tous = await getCollection('blog', ({ data }) => !data.brouillon);
  return tous.sort((a, b) => b.data.datePublication.valueOf() - a.data.datePublication.valueOf());
}

/**
 * Les `nombre` articles liés à `article` : les plus récents de la même
 * catégorie ; s'il en manque, complétés par les articles d'importance la
 * plus élevée (à importance égale, le plus récent). L'article lui-même et
 * les brouillons sont exclus.
 */
export function articlesLies(article: Article, publies: Article[], nombre = 3): Article[] {
  const autres = publies.filter((a) => a.id !== article.id); // déjà triés par date
  const memeCategorie = autres.filter((a) => a.data.categorie === article.data.categorie).slice(0, nombre);
  if (memeCategorie.length === nombre) return memeCategorie;
  const complement = autres
    .filter((a) => !memeCategorie.includes(a))
    .sort((a, b) => (b.data.importance ?? 0) - (a.data.importance ?? 0)); // tri stable : la date départage
  return [...memeCategorie, ...complement.slice(0, nombre - memeCategorie.length)];
}

// --- ARTICLES PERTINENTS POUR UN SUJET -------------------------------------

/** Texte sans accents, sans majuscules, apostrophes et tirets changés en
 *  espaces : « MaPrimeRénov' » → « maprimerenov ». */
const normaliser = (texte: string) =>
  texte
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[’'‑–—-]/g, ' ');

/** Poids d'un mot-clé selon l'endroit où il est trouvé. Le titre compte
 *  bien plus que le reste : un article qui parle d'une aide dans son titre
 *  est un article SUR cette aide ; une mention dans le chapeau peut n'être
 *  qu'une allusion. */
const POIDS = { titre: 6, description: 2, chapeau: 1 } as const;

/**
 * Les `nombre` articles les plus pertinents pour une liste de mots-clés,
 * sans aucun champ à remplir dans les articles. Sert à la page
 * /aides-renovation et servira aux pages /solutions/….
 *
 * - Chaque mot-clé est cherché dans le titre, la description et le
 *   chapeau, sans tenir compte des accents ni des majuscules. Il doit
 *   commencer un mot : « aide » trouve « aides », pas « laide ».
 * - Un mot-clé rapporte des points UNE fois par champ (présence, pas
 *   nombre d'occurrences) : un long chapeau qui répète un mot ne l'emporte
 *   pas sur un titre qui le contient.
 * - Mettre les termes PRÉCIS (« éco-prêt », « CEE ») plutôt que des mots
 *   courants (« travaux ») : chaque mot-clé pèse autant que les autres.
 * - Classement : score décroissant, puis importance (1 à 5), puis date
 *   (le plus récent d'abord). Articles sans aucun point exclus.
 * `exclure` : identifiants à écarter (l'article en cours, par exemple).
 */
export function articlesPertinents(
  publies: Article[],
  motsCles: string[],
  nombre = 3,
  exclure: string[] = [],
): Article[] {
  const motifs = motsCles.map((mot) => new RegExp(`(^|[^a-z0-9])${normaliser(mot).trim().replace(/\s+/g, '\\s+')}`));
  const score = ({ data }: Article) => {
    const champs = { titre: normaliser(data.titre), description: normaliser(data.description), chapeau: normaliser(data.chapeau) };
    let total = 0;
    for (const motif of motifs) {
      for (const champ of Object.keys(POIDS) as (keyof typeof POIDS)[]) {
        if (motif.test(champs[champ])) total += POIDS[champ];
      }
    }
    return total;
  };
  return publies
    .filter((a) => !exclure.includes(a.id))
    .map((article) => ({ article, points: score(article) }))
    .filter(({ points }) => points > 0)
    .sort(
      (a, b) =>
        b.points - a.points ||
        (b.article.data.importance ?? 0) - (a.article.data.importance ?? 0) ||
        b.article.data.datePublication.valueOf() - a.article.data.datePublication.valueOf(),
    )
    .slice(0, nombre)
    .map(({ article }) => article);
}

// --- PAGES DE LISTE -------------------------------------------------------

/** Nombre d'articles par page de liste (/blog et catégories). */
export const ARTICLES_PAR_PAGE = 12;

/**
 * Adresse d'une page de liste :
 *   /blog, /blog/page/2…                    (tous les articles)
 *   /blog/chauffage, /blog/chauffage/page/2… (une catégorie)
 * La page 1 n'a jamais de « /page/1 ». Sans barre finale.
 */
export function urlListeBlog(categorie: CategorieBlog | undefined, numero = 1): string {
  const base = categorie ? urlCategorie(categorie) : '/blog';
  return numero > 1 ? `${base}/page/${numero}` : base;
}

/**
 * Pages statiques d'une liste d'articles, pour getStaticPaths() de
 * src/pages/blog/[...page].astro. Le découpage (12 par page, numéros,
 * total) vient de paginate() d'Astro. Mais paginate() ne sait pas
 * construire « /blog/chauffage/page/2 » : la route est un paramètre
 * « reste » unique ([...page]) qui reçoit tout ce qui suit /blog. On
 * remplace donc le paramètre et les adresses (page.url) par celles de
 * urlListeBlog().
 */
export function pagesDeListe(
  paginate: PaginateFunction,
  articles: Article[],
  categorie?: CategorieBlog,
): GetStaticPathsResult {
  // Liste générale (/blog) : l'article à la une est RETIRÉ de la liste
  // paginée. Il est déjà affiché en grande carte au-dessus de la grille de
  // la page 1 ; laissé à sa place chronologique, il réapparaissait dans la
  // grille de la page 2, ce qui ressemblait à un bug. /blog pagine donc
  // 100 articles. Les pages de catégorie n'ont pas d'article à la une :
  // l'article y garde sa place chronologique.
  if (!categorie) {
    const aLaUne = articleALaUne(articles);
    articles = articles.filter((a) => a.id !== aLaUne?.id);
  }
  return paginate(articles, { pageSize: ARTICLES_PAR_PAGE, props: { categorie } }).map(({ props }) => {
    const page = props.page as Page<Article>;
    const { currentPage: n, lastPage: dernier } = page;
    const url = (numero: number) => urlListeBlog(categorie, numero);
    page.url = {
      ...page.url,
      current: url(n),
      prev: n > 1 ? url(n - 1) : undefined,
      next: n < dernier ? url(n + 1) : undefined,
      first: n > 1 ? url(1) : undefined,
      last: n < dernier ? url(dernier) : undefined,
    };
    // « /blog/chauffage/page/2 » → paramètre « chauffage/page/2 » ;
    // « /blog » → undefined (la page /blog elle-même).
    return { params: { page: url(n).replace(/^\/blog\/?/, '') || undefined }, props };
  });
}

/** Article mis en avant sur /blog : le plus récent d'importance 5.
 *  `publies` est déjà trié du plus récent au plus ancien. */
export function articleALaUne(publies: Article[]): Article | undefined {
  return publies.find((a) => a.data.importance === 5);
}

