// =========================================================================
// DONNÉES STRUCTURÉES (src/utils/seo.ts)
// -------------------------------------------------------------------------
// Fonctions communes pour le JSON-LD (schema.org) des pages.
// =========================================================================

/** Texte d'un bloc <script type="application/ld+json">. « < » est
 *  neutralisé : un titre contenant « </script> » ne peut pas fermer la
 *  balise. */
export const jsonLdTexte = (objet: unknown) => JSON.stringify(objet).replace(/</g, '\\u003c');

/** Une étape de fil d'Ariane : nom affiché et adresse relative (/blog…). */
export interface EtapeFilAriane {
  nom: string;
  url: string;
}

/** JSON-LD BreadcrumbList à partir des étapes, de l'accueil à la page
 *  courante (incluse). `site` : origine du site, pour des adresses
 *  absolues. */
export function filArianeJsonLd(etapes: EtapeFilAriane[], site: URL) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: etapes.map((etape, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: etape.nom,
      item: new URL(etape.url, site).href,
    })),
  };
}
