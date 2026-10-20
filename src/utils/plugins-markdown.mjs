// =========================================================================
// PLUGINS DU MOTEUR MARKDOWN (src/utils/plugins-markdown.mjs)
// -------------------------------------------------------------------------
// Format : plugins « hast » de Sätteri, le moteur Markdown par défaut
// d'Astro 7. Les plugins rehype classiques exigeraient d'installer
// @astrojs/markdown-remark : ceux-ci n'ajoutent aucune dépendance.
// Déclarés dans astro.config.mjs, avec l'option rawHtml (voir plus bas).
// =========================================================================

/**
 * TABLEAUX DÉFILANTS
 * Enveloppe chaque <table> dans
 *   <div class="tableau-defilant" role="region" tabindex="0" aria-label="Tableau">
 * pour qu'un tableau large défile dans son cadre sur téléphone, au lieu de
 * faire déborder la page (styles : global.css, « TYPOGRAPHIE DES
 * ARTICLES »). role="region" + aria-label : le cadre, atteignable au
 * clavier, est annoncé par les lecteurs d'écran.
 */
export const tableauxDefilants = {
  name: 'tableaux-defilants',
  element: {
    filter: ['table'],
    visit(noeud, ctx) {
      ctx.wrapNode(noeud, {
        type: 'element',
        tagName: 'div',
        properties: { className: ['tableau-defilant'], role: 'region', tabIndex: 0, ariaLabel: 'Tableau' },
        children: [],
      });
    },
  },
};

/**
 * SCHÉMAS EN TEXTE BRUT (blocs de code ```)
 * Les 18 blocs de code des articles sont des schémas dessinés en
 * caractères (« ┌───┐ »), plus larges qu'un téléphone : ils défilent dans
 * leur cadre (styles : global.css, « TYPOGRAPHIE DES ARTICLES »). Comme
 * pour les tableaux, le cadre doit être atteignable au clavier pour
 * défiler avec les flèches, et annoncé par les lecteurs d'écran :
 *   <pre tabindex="0" role="region" aria-label="Schéma">
 */
export const schemasDefilants = {
  name: 'schemas-defilants',
  element: {
    filter: ['pre'],
    visit(noeud, ctx) {
      // Les nœuds sont en lecture seule : un ctx.setProperty par attribut.
      ctx.setProperty(noeud, 'role', 'region');
      ctx.setProperty(noeud, 'tabIndex', 0);
      ctx.setProperty(noeud, 'ariaLabel', 'Schéma');
    },
  },
};

/**
 * IMAGES ÉCRITES EN HTML DANS LE MARKDOWN
 * Les 18 figures importées de Webflow sont du HTML brut :
 *   <figure><img src="../../assets/blog/…"><figcaption>…</figcaption></figure>
 * Astro n'optimise d'office que les images Markdown (![…](…)). Sans ce
 * plugin, le chemin relatif restait tel quel dans la page et l'image était
 * introuvable (404). Ici, chaque <img> au chemin relatif est déclaré comme
 * image locale : Astro la traite alors comme une image Markdown (WebP,
 * largeur et hauteur, fichier dans /_astro/).
 * Nécessite features.rawHtml dans astro.config.mjs : sans cette option, le
 * HTML brut reste un bloc de texte opaque, sans balise <img> visible.
 */
export const imagesHtml = {
  name: 'images-html',
  element: {
    filter: ['img'],
    visit(noeud, ctx) {
      const src = noeud.properties?.src;
      if (typeof src === 'string' && src.startsWith('.')) ctx.data.astro?.localImagePaths.add(decodeURI(src));
    },
  },
};
