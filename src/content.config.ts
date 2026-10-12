// =========================================================================
// CONFIGURATION DES COLLECTIONS DE CONTENU ASTRO (src/content.config.ts)
// Objectif : Typage strict Zod pour le CMS Markdown local et optimisation d'images
// Format Content Layer (Astro v6+) : chaque collection déclare un loader.
// =========================================================================

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Définition stricte des catégories autorisées via un tuple Zod enum
export const blogCategories = [
  'voitures-electriques',
  'chauffe-eau',
  'production-electricite',
  'renovation-energetique',
  'systeme-de-chauffage',
  'autres',
] as const;

const blogCollection = defineCollection({
  // Loader : charge chaque fichier Markdown de src/content/blog.
  // L'identifiant de l'article (post.id, utilisé dans l'URL) est le nom du fichier sans extension.
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      // Titre de l'article pour SEO et affichage
      title: z.string().min(5, 'Le titre doit comporter au moins 5 caractères'),
      // Description courte pour méta description et cartes
      description: z.string().min(10, 'La description doit être explicite'),
      // Date de publication au format Date natif
      pubDate: z.date(),
      // Catégorie strictement contrôlée
      category: z.enum(blogCategories),
      // Image de couverture traitée nativement par Astro Assets (WebP, srcset, etc.)
      coverImage: image(),
      // Champ optionnel pour intégrations multimédias (YouTube ou TikTok)
      videoEmbedUrl: z.url().optional(),
    }),
});

// Exportation de la configuration des collections
export const collections = {
  blog: blogCollection,
};
