// =========================================================================
// CONFIGURATION DE LA COLLECTION CONTENT ASTRO (src/content/config.ts)
// Objectif : Typage strict Zod pour le CMS Markdown local et optimisation d'images
// =========================================================================

import { defineCollection, z } from 'astro:content';

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
  // Type de collection basé sur le contenu textuel/markdown
  type: 'content',
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
      videoEmbedUrl: z.string().url().optional(),
    }),
});

// Exportation de la configuration des collections
export const collections = {
  blog: blogCollection,
};
