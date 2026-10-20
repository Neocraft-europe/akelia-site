// =========================================================================
// CONFIGURATION DES COLLECTIONS DE CONTENU ASTRO (src/content.config.ts)
// -------------------------------------------------------------------------
// Schéma du blog remplacé le 17 octobre 2026 : il correspond exactement au
// frontmatter des 102 articles importés de Webflow (src/content/blog/).
// `z` est importé de « astro/zod » : l'import depuis « astro:content » est
// obsolète dans Astro 7 (il sera supprimé dans une version future).
// =========================================================================

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Les articles de blog, importés depuis l'ancien site Webflow.
 * Le helper « image » demandé en argument du schéma permet à Astro de
 * résoudre les chemins relatifs vers src/assets/blog/ et d'optimiser
 * automatiquement chaque couverture (conversion WebP, srcset, dimensions).
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      // Titre affiché en h1 sur la page de l'article
      titre: z.string(),
      // Méta-description pour les moteurs de recherche et les réseaux sociaux
      description: z.string(),
      // Titre réservé aux moteurs quand il doit être plus court que le titre affiché
      titreSeo: z.string().optional(),
      datePublication: z.coerce.date(),
      dateMaj: z.coerce.date().optional(),
      categorie: z.enum([
        'systeme-de-chauffage',
        'renovation-energetique',
        'systeme-de-production-denergie',
        'chauffe-eau',
        'voiture-electrique',
        'autre',
      ]),
      image: image(),
      imageAlt: z.string(),
      // Note éditoriale de 1 à 5 : sert à choisir les articles mis en avant
      importance: z.number().int().min(1).max(5).optional(),
      // Identifiant YouTube, présent sur 8 articles seulement
      videoYoutube: z.string().optional(),
      // Proportion d'origine de la vidéo : « 16 / 9 » pour les vidéos
      // classiques, « 1 / 1 » ou « 5 / 4 » pour les formats verticaux
      videoProportion: z.string().default('16 / 9'),
      brouillon: z.boolean().default(false),
      // Chapeau d'introduction, affiché entre le titre et la couverture
      chapeau: z.string(),
      // Encart « En bref » : une entrée par ligne de l'encart.
      // Seul le gras, noté **comme ceci**, y est reconnu.
      enBref: z.array(z.string()).default([]),
      sources: z
        .array(z.object({ libelle: z.string(), lien: z.string() }))
        .default([]),
    }),
});

export const collections = { blog };
