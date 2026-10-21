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
//
// Ticket du 20 octobre 2026 (carte, lisibilité, mise en page) :
//   - `enBref` supprimé (le bloc reste sur les articles de blog) ;
//   - `nomIndefini` ajouté : « Pour installer une pompe à chaleur air-eau
//     chez vous, il faut : » ;
//   - `caracteristiques` : quatre chiffres en grand (`enGrand`), le reste
//     en liste discrète (`autres`) ;
//   - `adapteAuBien` devient `conditions` : une liste de contrôle, sans
//     icône ;
//   - `cas` : champ `verdict` (étiquette de la carte), reprise du design ;
//   - `region` : plus d'image ni de couleur. Chaque zone donne ses
//     départements (codes INSEE) ; la carte est dessinée et coloriée par
//     CarteFrance.astro, couleurs fixées par niveau. Un code inconnu
//     arrête la construction.
//
// Refonte visuelle du 20 octobre 2026 :
//   - `performances.complexite` devient une note chiffrée (`note`, 1 à 5,
//     demi-points acceptés) : sa couleur et son mot (« simple », « moyen »,
//     « difficile ») en sont tirés (src/utils/echelle.ts) ;
//   - `parcours[].difficulteTexte` supprimé : même raison ;
//   - (illustrations par nom de fichier : abandonnées le 21 octobre, voir
//     plus bas) ;
//   - `avis` : 3 sous-parties (plafond de mots : voir plus bas) ;
//   - `cas` : 3 à 6, dont AU MOINS UN « plutot-non » ou « non »
//     (avertissement à la construction sinon). Le titre est une situation
//     adressée au lecteur (« Votre logement est… »).
//
// Deuxième passe de design du 21 octobre 2026 :
//   - ILLUSTRATIONS DES PERFORMANCES ET DES CONDITIONS : plus d'images
//     (l'ancienne convention de noms de fichier est ABANDONNÉE). Ce sont
//     des icônes SVG (src/components/icones-solutions/) : les quatre des
//     performances sont fixes, celles des conditions sont choisies par leur
//     nom (`conditions[].icone`) ; absente : substitut neutre ;
//   - `introPourVous` supprimé (la phrase d'introduction des cas) ;
//   - `parcours[].etapes[].image` facultative : les illustrations des
//     travaux seront des images générées, livrées plus tard ; absente :
//     carré neutre de même taille.
//
// Troisième passe du 21 octobre 2026 :
//   - `ChiffreCle.icone` supprimé : les caractéristiques n'ont plus
//     d'icône, le chiffre en grand est l'élément visuel ;
//   - `avis` : 60 mots au plus par sous-partie (40 le 20 octobre), puis 70
//     (passe mobile du même jour) ;
//   - `performances.economieEnergie` : consommation évitée écrite avec un
//     signe MOINS (« −70 % »), jamais « + ».
//
// Relecture de code du 21 octobre 2026 : `cas[].numero` supprimé (jamais
// lu : l'ordre du tableau fait foi).
//
// GÉNÉRALISATION DU GABARIT (21 octobre 2026, hypothèses H1 à H13 de
// inventaire-charte.md) : ce que le gabarit tenait pour acquis sur la PAC
// air-eau passe dans les données.
//   - H1 : les pages naissent des fichiers de src/data/solutions/, plus du
//     menu ; le menu n'est plus vérifié que par des avertissements ;
//   - H2 : une tuile de caractéristique peut être une TUILE D'AIDE
//     (`{ aide: 'maprimerenov' }`), calculée depuis src/data/aides.ts ;
//   - H3 : `equipementSimulateur` facultatif, `posteAides` ajouté
//     (facultatif) ; la bande des aides disparaît si la solution n'ouvre
//     droit à rien ;
//   - H4 : `possessif` ajouté (« Ses » / « Leurs » points forts…) ;
//   - H5 : `introConditions` ajouté, `nomIndefini` supprimé (il ne servait
//     qu'à cette phrase) ;
//   - H6 : `performances.economieEnergie` devient `performances.energie`,
//     avec `mesure: 'economie' | 'autonomie'` ; chaque tuile de
//     performance est facultative ;
//   - H7 : chaque tuile de caractéristique porte un nombre (erreur sinon) ;
//   - H10 : `ZoneCarte.niveau` devient un RANG (1 = le plus favorable,
//     4 au plus), le libellé est `titre` ;
//   - H13 : `etapeSuivi` ajouté (texte de l'étape 4 de ParcoursAkelia).
// =========================================================================

import type { ImageMetadata } from 'astro';
import type { NomIcone } from '../../components/aides/Icone.astro';
import type { NomIconeBien } from '../../components/icones-solutions';
import type { Poste } from '../aides';

/** Un chiffre clé des caractéristiques : même structure pour les quatre
 *  (icône, nombre et unité sur UNE ligne, libellé d'une ligne, précision
 *  facultative toujours au même endroit). */
export interface ChiffreCle {
  /** Devant le nombre, en petit (« jusqu'à ») : tuile d'aide en rénovation
   *  d'ampleur seulement, aujourd'hui. */
  avant?: string;
  /** En très gros, court pour tenir sur une ligne : « 90–130 ». */
  nombre: string;
  /** À côté du nombre, plus petit : « €/m² ». */
  unite: string;
  /** Une ligne : « coût d'installation ». */
  libelle: string;
  /** Information secondaire, plus petite : « sans les aides : ≃ 9 à 10 ans ». */
  precision?: string;
}

/** Verdict d'un cas « Est-ce fait pour chez vous ? » (étiquette colorée).
 *  VOCABULAIRE FIGÉ pour les 20 pages (libellés dans le gabarit) : « Oui,
 *  clairement », « Oui, sous conditions », « Plutôt non », « Non ». Aucune
 *  autre formulation, jamais. */
export type VerdictCas = 'oui' | 'sous-conditions' | 'plutot-non' | 'non';

/** TUILE D'AIDE (H2, 21 octobre 2026) : à la place d'un ChiffreCle, une
 *  tuile dont le contenu est LU dans src/data/aides.ts selon le cas
 *  MaPrimeRénov' du poste de la page (`posteAides`, ou à défaut
 *  `equipementSimulateur`) :
 *  - forfait par geste : le forfait des revenus très modestes, en euros ;
 *  - rénovation d'ampleur seulement : « jusqu'à » le taux des revenus très
 *    modestes, en % (aucun montant en euros) ;
 *  - non éligible : la tuile d'aide est impossible, la page DOIT fournir
 *    `siNonEligible` (une autre mesure chiffrée), sinon la construction
 *    s'arrête. */
export interface TuileAide {
  aide: 'maprimerenov';
  siNonEligible?: ChiffreCle;
}

/** RANG d'une zone sur la carte (H10, 21 octobre 2026) : 1 = la plus
 *  favorable, 4 = la moins favorable. Il fixe la couleur (CarteFrance.astro :
 *  ordre et couleurs figés) ; le LIBELLÉ est propre à chaque page (`titre`).
 *  Les zones sont données dans l'ordre des rangs, sans doublon (vérifié). */
export type NiveauZone = 1 | 2 | 3 | 4;

export interface ZoneCarte {
  niveau: NiveauZone;
  /** « Région optimale » : légende, et libellé au survol (en minuscule). */
  titre: string;
  /** Régions concernées, en toutes lettres. */
  regions?: string;
  /** Texte mis en forme. */
  texte: string;
  /** Codes INSEE (« 35 », « 2A ») : France métropolitaine seulement. */
  departements: string[];
}

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
  /** Possessif des titres (H4) : « Ses points forts », « Ses
   *  inconvénients », « Ses caractéristiques techniques », « Ses
   *  performances » ; « leurs » pour un nom pluriel (menuiseries, panneaux
   *  photovoltaïques). */
  possessif: 'ses' | 'leurs';
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

  // --- Tout ce que vous devez savoir -----------------------------------
  /** 4 au plus (les suivants ne s'affichent pas). `texte` : UNE phrase de
   *  15 mots au plus (vérifié à la construction). */
  pointsForts: { titre: string; texte: string; icone: NomIcone }[];
  inconvenients: { titre: string; texte: string; icone: NomIcone }[];
  caracteristiques: {
    /** Les QUATRE plus parlants (prix, durée de vie, aides, rentabilité) :
     *  `chiffre` en très gros, `libelle` en petit dessous, `precision`
     *  (facultative) sous le libellé. */
    /** Chaque tuile porte un NOMBRE (au moins un chiffre dans `nombre`),
     *  sinon la construction s'arrête (H7) : la nuance va dans `precision`.
     *  Une tuile peut être la tuile d'aide (TuileAide). */
    enGrand: [ChiffreCle | TuileAide, ChiffreCle | TuileAide, ChiffreCle | TuileAide, ChiffreCle | TuileAide];
    /** Le reste, en liste discrète sous les chiffres. */
    autres: { libelle: string; valeur: string }[];
  };
  /** Chaque tuile est FACULTATIVE (H6) : la rangée accepte 3 tuiles comme 4
   *  (au moins 3 attendues, avertissement sinon). */
  performances: {
    /** A à G, échelle Akelia. */
    efficacite?: Indicateur;
    /** A à G, échelle Akelia. */
    impact?: Indicateur;
    /** Troisième mesure, au choix (H6) :
     *  - 'economie' : « Économie d'énergie », consommation évitée, valeur
     *    avec un signe MOINS (« −70 % »), icône PerfEconomie ;
     *  - 'autonomie' : « Autonomie énergétique », énergie produite, valeur
     *    avec un signe PLUS (« +60 % »), icône PerfAutonomie.
     *  Signe vérifié à la construction (avertissement). */
    energie?: Indicateur & { mesure: 'economie' | 'autonomie' };
    /** Note de 1 à 5 (demi-points acceptés) : « 2,5/5 — moyen ». Comprise
     *  entre la plus petite et la plus grande note des parcours
     *  (avertissement sinon, H8). */
    complexite?: { note: number; precision?: string };
  };
  /** Phrase complète qui introduit la liste des conditions (H5) : « Pour
   *  installer une pompe à chaleur air-eau chez vous, il faut : ». */
  introConditions: string;
  /** Liste de contrôle « Pour installer … chez vous, il faut : ».
   *  `condition` : l'intitulé, qui complète la phrase (« une maison ou un
   *  appartement équipé d'une chaudière ») ; `explication` en dessous,
   *  SEULEMENT si elle ajoute quelque chose à l'intitulé. `icone` : nom
   *  d'une icône de src/components/icones-solutions/ (absente : substitut
   *  neutre). */
  conditions: { condition: string; explication?: string; icone?: NomIconeBien }[];
  /** Absent sur les menuiseries : le bloc disparaît entièrement. */
  region?: {
    /** Une zone par niveau utilisé, dans l'ordre de la légende. Un
     *  département qui n'est dans aucune zone est « non concerné ». */
    zones: ZoneCarte[];
  };

  // --- Travaux -----------------------------------------------------------
  /** Un parcours : affiché directement. Deux ou plus : en onglets.
   *  EXACTEMENT 4 étapes par parcours (avertissement sinon, H9). */
  parcours: {
    /** « Rénovation », « Neuf »… */
    nom: string;
    /** 1 à 5 (demi-points acceptés). Le mot (« moyen ») en est tiré. */
    difficulte: number;
    /** `image` absente : carré neutre de la taille finale (21 octobre 2026). */
    etapes: { titre: string; image?: ImageMetadata; imageAlt: string }[];
  }[];

  // --- Avis et cas ---------------------------------------------------------
  /** « L'avis Akelia » : 2 à 4 sous-parties (H12), titre en h3. Texte mis
   *  en forme, 70 mots au plus par sous-partie (avertissements). */
  avis: { titre: string; texte: string }[];
  /** Titre de la section des cas, accordé : « La pompe à chaleur air-eau
   *  est-elle faite pour chez vous ? » */
  questionPourVous: string;
  /** Une carte par cas, de 3 à 6 : titre en h3 (une situation adressée au
   *  lecteur), puis étiquette de verdict, puis texte mis en forme. AU MOINS
   *  UN cas négatif (« plutot-non » ou « non ») par page. */
  cas: { verdict: VerdictCas; titre: string; texte: string }[];

  // --- Aides, articles, FAQ -------------------------------------------------
  /** Poste du barème des aides (src/data/aides.ts) : le simulateur arrive
   *  avec la case et, pour un chauffage, l'équipement déjà cochés
   *  (preselectionPour). « pac-air-eau » coche « Chauffage » et « Pompe à
   *  chaleur air/eau ». */
  equipementSimulateur?: Poste;
  /** Poste du barème qui décrit les aides de la solution (H3) : texte de la
   *  bande des aides et tuile d'aide. À défaut : `equipementSimulateur`. Ni
   *  l'un ni l'autre : la solution n'a pas de poste dans le barème, la bande
   *  des aides disparaît. À renseigner seul quand le simulateur ne doit
   *  rien présélectionner. */
  posteAides?: Poste;
  /** Texte de l'étape 4 de « Votre projet, étape par étape » (H13), si le
   *  texte commun (« …vous propose un contrat d'entretien ») ne convient
   *  pas : isolation, menuiseries… */
  etapeSuivi?: { titre?: string; texte: string };
  /** Pour articlesPertinents() : termes PRÉCIS (voir src/utils/blog.ts). */
  motsClesArticles: string[];
  /** Vide : ni section ni JSON-LD. Questions et réponses écrites par
   *  Akelia, jamais inventées. */
  faq: { question: string; reponse: string }[];
  seo: { titre: string; description: string };
}
