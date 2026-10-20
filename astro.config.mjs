// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
// Moteur Markdown par défaut d'Astro 7 (installé avec Astro, rien à
// ajouter) : importé ici seulement pour lui passer des réglages.
import { satteri } from '@astrojs/markdown-satteri';
import { tableauxDefilants, schemasDefilants, imagesHtml } from './src/utils/plugins-markdown.mjs';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    // Pas de coloration syntaxique : les seuls blocs de code des articles
    // sont des schémas en texte brut. Shiki leur imposait un fond sombre
    // (#24292e, en style en ligne) ; leur style est dans global.css.
    syntaxHighlight: false,
    // Articles de blog (voir src/utils/plugins-markdown.mjs) :
    // - tableaux dans un cadre qui défile horizontalement sur téléphone ;
    // - schémas (<pre>) atteignables au clavier pour les faire défiler ;
    // - images des <figure> HTML optimisées comme les images Markdown.
    // rawHtml : le HTML écrit dans le Markdown est lu comme de vraies
    // balises (sinon les plugins ne voient pas les <img> des figures).
    processor: satteri({
      hastPlugins: [tableauxDefilants, schemasDefilants, imagesHtml],
      features: { rawHtml: true }
    })
  }
});
