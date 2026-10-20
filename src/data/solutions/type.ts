// =========================================================================
// TYPE D'UNE PAGE SOLUTION (src/data/solutions/type.ts)
// -------------------------------------------------------------------------
// Créé le 19 octobre 2026. UN gabarit (src/pages/solutions/[slug].astro),
// UN fichier de données par solution (src/data/solutions/<slug>.ts, export
// par défaut). La structure est donc identique sur les 21 pages : le
// lecteur peut comparer les solutions entre elles.
// Ajouter une solution = copier pompe-a-chaleur-air-eau.ts, le remplir,
// déposer ses images dans src/assets/solutions/<slug>/. Le gabarit trouve
// le fichier tout seul.
//
// BLOCS FACULTATIFS (marqués « ? ») : absents, ils ne laissent ni titre
// orphelin ni section vide. `faq` vide : ni section ni JSON-LD FAQPage.
//
// TEXTES MIS EN FORME (champs marqués « texte mis en forme ») : voir
// blocsDeTexte() dans src/utils/texte.ts :
//   - une ligne qui commence par « - » : élément de liste ;
//   - toute autre ligne : un paragraphe ;
//   - **gras** et [lien](/adresse-interne) dans le texte.
//
// Écarts au type du ticket du 19 octobre 2026 (voir inventaire-charte.md) :
//   - `nomDefini` et `questionPourVous` ajoutés : les titres « Tout ce que
//     vous devez savoir sur … », « Notre avis sur … » et « … est-elle
//     faite pour chez vous ? » s'accordent avec le nom (la pompe, le poêle,
//     les panneaux) : le gabarit ne peut pas le deviner ;
//   - `introPourVous` ajouté (phrase d'introduction des cas) ;
//   - les indicateurs de `performances` ont une précision sous la valeur
//     (« Excellent rendement », « Lié aux fluides frigorigènes ») ;
//   - les zones de `region` portent la couleur de la carte (`couleur`,
//     les cartes n'utilisent pas toutes les mêmes) et, en option, les
//     régions concernées (`regions`) : la légende ne repose pas sur la
//     couleur seule ;
//   - `icone` et `equipementSimulateur` sont typés (noms d'Icone.astro,
//     valeurs du simulateur) : une faute de frappe casse la construction
//     au lieu d'afficher une case vide.
// =========================================================================

import type { ImageMetadata } from 'astro';
import type { NomIcone } from '../../components/aides/Icone.astro';
import type { Travaux } from '../aides';

/** Un indicateur de performance : la valeur, et une précision dessous. */
export interface Indicateur {
  valeur: string;
  precision?: string;
}

export interface Solution {
  /** Adresse : /solutions/<slug>. Doit exister dans src/data/menu.ts
   *  (vérifié à la construction). */
  slug: string;
  /** « Pompe à chaleur air-eau » : surtitre, fil d'Ariane. */
  nom: string;
  /** Avec son article, en minuscule : « la pompe à chaleur air-eau ». */
  nomDefini: string;
  /** Rubrique du fil d'Ariane : titre du groupe du méga-menu
   *  (« Pompes à chaleur »), vérifié à la construction. */
  rubrique: string;

  // --- En-tête ---------------------------------------------------------
  /** Le h1. */
  promesse: string;
  /** 3 ou 4 points à coche. */
  arguments: string[];
  image: ImageMetadata;
  imageAlt: string;
  chiffreCle?: { valeur: string; libelle: string };

  // --- En bref ---------------------------------------------------------
  /** 4 ou 5 lignes de résumé. **gras** accepté. */
  enBref: string[];

  // --- Tout ce que vous devez savoir -----------------------------------
  pointsForts: { titre: string; texte: string; icone: NomIcone }[];
  inconvenients: { titre: string; texte: string; icone: NomIcone }[];
  /** Une ligne par paire ; `valeur` sur plusieurs lignes : « \n ». */
  caracteristiques: { libelle: string; valeur: string }[];
  performances: {
    /** A à G, échelle Akelia. */
    efficacite: Indicateur;
    /** A à G, échelle Akelia. */
    impact: Indicateur;
    /** Consommation évitée (« +70 % ») : JAMAIS « autonomie ». */
    economieEnergie: Indicateur;
    /** « 2,5 / 5 ». */
    complexite: Indicateur;
  };
  adapteAuBien: { titre: string; texte: string; icone: NomIcone }[];
  /** Absent sur les menuiseries : le bloc disparaît entièrement. */
  region?: {
    carte: ImageMetadata;
    carteAlt: string;
    zones: {
      niveau: 'optimale' | 'interessante' | 'a-etudier' | 'deconseillee';
      /** Couleur de la zone SUR LA CARTE (« #f9ac00 »). */
      couleur: string;
      titre: string;
      /** Régions concernées, lues sur la carte. */
      regions?: string;
      /** Texte mis en forme. */
      texte: string;
    }[];
  };

  // --- Travaux -----------------------------------------------------------
  /** Un parcours : affiché directement. Deux ou plus : en onglets. */
  parcours: {
    /** « Rénovation », « Neuf »… */
    nom: string;
    /** 1 à 5 (demi-points acceptés). */
    difficulte: number;
    /** « Moyen », « Simple »… */
    difficulteTexte: string;
    etapes: { titre: string; image: ImageMetadata; imageAlt: string }[];
  }[];

  // --- Avis et cas ---------------------------------------------------------
  /** Une sous-partie par entrée, titre en h3. Texte mis en forme. */
  avis: { titre: string; texte: string }[];
  /** Titre de la section des cas, accordé : « La pompe à chaleur air-eau
   *  est-elle faite pour chez vous ? » */
  questionPourVous: string;
  introPourVous?: string;
  /** Titre en h3 « Cas n° 1 — … ». Texte mis en forme. */
  cas: { numero: number; titre: string; texte: string }[];

  // --- Aides, articles, FAQ -------------------------------------------------
  /** Case pré-cochée dans le simulateur. */
  equipementSimulateur: Travaux;
  /** Pour articlesPertinents() : termes PRÉCIS (voir src/utils/blog.ts). */
  motsClesArticles: string[];
  /** Vide : ni section ni JSON-LD. Questions et réponses écrites par
   *  Akelia, jamais inventées. */
  faq: { question: string; reponse: string }[];
  seo: { titre: string; description: string };
}
