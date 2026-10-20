// =========================================================================
// DONNÉES DU SIMULATEUR D'AIDES (src/data/aides.ts)
// -------------------------------------------------------------------------
// Ce fichier contient TOUTES les informations du simulateur : montants,
// conditions, règles d'éligibilité et liste des départements. Le code du
// simulateur (src/scripts/simulateur-aides.ts) ne contient aucun chiffre :
// il se contente de lire ce fichier.
//
// COMMENT METTRE À JOUR UN MONTANT, SANS TOUCHER AU RESTE :
// 1. Repérez l'aide concernée ci-dessous (par exemple « MaPrimeRénov' par
//    geste »).
// 2. Modifiez le nombre après « montantMax: » (en euros, sans espace ni
//    symbole : 11000 et non « 11 000 € »), ET la phrase « texte: » qui
//    l'accompagne, pour que les deux disent la même chose.
// 3. Mettez à jour « dateVerification » (format AAAA-MM-JJ) et, si besoin,
//    le lien « url » de la source.
// Gardez les guillemets, les virgules et les accolades tels quels : ils
// font partie de la structure du fichier.
//
// RÈGLE ABSOLUE DU SIMULATEUR : seules les aides NATIONALES ont un montant.
// Les aides RÉGIONALES et DÉPARTEMENTALES sont seulement « oui », « non » ou
// « inconnu », sans montant : les dispositifs locaux changent trop souvent
// pour être chiffrés sans risque.
//
// SOURCES VÉRIFIÉES LE 8 OCTOBRE 2026 :
// - Anah, « Les aides financières en 2026 », édition septembre 2026 (guide
//   à destination des professionnels, qui intègre le décret n° 2026-822 du
//   25 août 2026) ;
// - service-public.gouv.fr, fiche MaPrimeRénov' (vérifiée le 1er septembre
//   2026) ;
// Le détail de la vérification, et ce qui n'a pas pu être confirmé, est
// consigné dans inventaire-charte.md (étape 12).
// =========================================================================


// -------------------------------------------------------------------------
// VOCABULAIRE COMMUN (ne pas modifier sans modifier aussi le simulateur)
// -------------------------------------------------------------------------

/** Les 3 réponses possibles à la question « Vous êtes ». */
export type Statut = 'proprietaire-occupant' | 'proprietaire-bailleur' | 'locataire';

/** Les 6 réponses possibles à la question « Vos travaux ». */
export type Travaux =
  | 'isolation'
  | 'fenetres'
  | 'chauffage'
  | 'ventilation'
  | 'photovoltaique'
  | 'ne-sait-pas';

/**
 * Le verdict affiché pour une aide :
 * - 'oui'             → la personne y a droit (souvent selon ses revenus) ;
 * - 'sous-conditions' → possible, mais seulement si certaines conditions
 *                       sont réunies (par exemple un projet global) ;
 * - 'non'             → pas d'aide de ce type pour cette situation ;
 * - 'a-verifier'      → information non confirmée par les sources
 *                       officielles : nous le vérifions avec la personne.
 */
export type Verdict = 'oui' | 'sous-conditions' | 'non' | 'a-verifier';

/** Une règle : le verdict, la phrase affichée, et le montant éventuel. */
export interface Regle {
  verdict: Verdict;
  /** Phrase affichée à la personne. Écrire au « vous », phrase complète. */
  texte: string;
  /** Montant maximum en euros (nombre entier), ou absent s'il n'y en a pas. */
  montantMax?: number;
}

export interface Source {
  nom: string;
  url: string;
}

export interface AideNationale {
  /** Identifiant technique, sans espace ni accent (ne pas modifier). */
  id: string;
  /** Nom complet. */
  nom: string;
  /** Nom court, affiché dans la ligne du résultat si le nom complet est
   *  trop long (le nom complet est alors rappelé dans l'explication). */
  nomCourt?: string;
  /** Nature de l'aide, en quelques mots (prime, prêt, taux de TVA…). */
  nature: string;
  /** Montant maximum toutes situations confondues (en euros), ou null. */
  montantMax: number | null;
  /** Conditions générales, affichées sous le résultat (liste courte). */
  conditions: string[];
  /**
   * Droits selon le statut. Si le verdict d'un statut est 'non', l'aide est
   * refusée quels que soient les travaux, avec la phrase indiquée.
   */
  statuts: Record<Statut, Regle>;
  /**
   * Droits selon les travaux choisis. Le simulateur retient la règle la plus
   * favorable parmi les travaux cochés. 'ne-sait-pas' sert quand la personne
   * n'a pas encore choisi ses travaux.
   */
  travaux: Record<Travaux, Regle>;
  sources: Source[];
  /** Date de la dernière vérification des chiffres (AAAA-MM-JJ). */
  dateVerification: string;
}


// -------------------------------------------------------------------------
// LIENS UTILES (affichés dans le résultat)
// -------------------------------------------------------------------------

// Aucun lien ni numéro vers un service externe (France Rénov' ou autre) :
// le simulateur renvoie vers le formulaire de contact du site.

/** Mention obligatoire, affichée sous chaque résultat. Ne pas raccourcir. */
export const mentionObligatoire =
  "Estimation indicative. Les aides évoluent régulièrement et dépendent de critères précis : revenus, logement, nature des travaux.";

/** Phrase affichée quand le code postal est en outre-mer. */
export const noteOutreMer =
  "En outre-mer, les aides suivent des règles spécifiques (la rénovation d'ampleur MaPrimeRénov' ne s'y applique pas, et les montants peuvent différer). Les résultats ci-dessous sont donnés pour la métropole : nous vérifions votre situation avec vous.";


// -------------------------------------------------------------------------
// AIDES NATIONALES
// -------------------------------------------------------------------------

const SOURCE_ANAH: Source = {
  nom: "Anah, Les aides financières en 2026 (édition septembre 2026)",
  url: 'https://www.anah.gouv.fr/sites/default/files/2026-08/202609_guide-aides-financieres_WEB.pdf',
};
const SOURCE_SERVICE_PUBLIC_MPR: Source = {
  nom: "service-public.gouv.fr, MaPrimeRénov'",
  url: 'https://www.service-public.gouv.fr/particuliers/vosdroits/F35083',
};

export const aidesNationales: AideNationale[] = [
  // =======================================================================
  // 1. MAPRIMERÉNOV' PAR GESTE
  // Depuis le 1er septembre 2026 (décret n° 2026-822 du 25 août 2026), le
  // parcours par geste ne finance plus que des systèmes de chauffage
  // décarbonés : pompe à chaleur air/eau, pompe à chaleur géothermique ou
  // solarothermique, raccordement à un réseau de chaleur (et l'audit
  // énergétique ou la dépose d'une cuve à fioul).
  // Isolation, fenêtres, ventilation, poêles et chauffe-eau ne sont plus
  // financés par geste.
  // Barème (Anah, septembre 2026), revenus très modestes / modestes /
  // intermédiaires, revenus supérieurs non éligibles :
  //   PAC air/eau            5 000 € / 4 000 € / 3 000 €
  //   PAC géothermique      11 000 € / 9 000 € / 6 000 €
  //   Réseau de chaleur      1 200 € /   800 € /   400 €
  // =======================================================================
  {
    id: 'maprimerenov-geste',
    nom: "MaPrimeRénov' par geste",
    nature: "Prime de l'État (Anah)",
    montantMax: 11000,
    conditions: [
      'Logement construit depuis au moins 15 ans, occupé en résidence principale.',
      'Travaux réalisés par un professionnel RGE, demande déposée avant les travaux.',
      'Ménages aux revenus très modestes, modestes ou intermédiaires (revenus supérieurs exclus).',
    ],
    statuts: {
      'proprietaire-occupant': { verdict: 'oui', texte: 'Ouvert aux propriétaires occupants.' },
      'proprietaire-bailleur': {
        verdict: 'oui',
        texte: "Ouvert aux propriétaires bailleurs, qui s'engagent à louer le logement en résidence principale pendant au moins 6 ans.",
      },
      locataire: {
        verdict: 'non',
        texte: "Réservé aux propriétaires : en tant que locataire, vous ne pouvez pas en bénéficier. Votre propriétaire, lui, le peut.",
      },
    },
    travaux: {
      chauffage: {
        verdict: 'oui',
        montantMax: 11000,
        texte: "Oui pour une pompe à chaleur : jusqu'à 11 000 € pour une pompe à chaleur géothermique et jusqu'à 5 000 € pour une pompe à chaleur air/eau, selon vos revenus. Les ménages aux revenus les plus élevés n'y ont pas droit.",
      },
      isolation: {
        verdict: 'non',
        texte: "L'isolation n'est plus financée seule par MaPrimeRénov' depuis le 1er septembre 2026. Elle peut l'être dans une rénovation d'ampleur.",
      },
      fenetres: {
        verdict: 'non',
        texte: "Les fenêtres ne sont plus financées seules par MaPrimeRénov' depuis le 1er septembre 2026. Elles peuvent l'être dans une rénovation d'ampleur.",
      },
      ventilation: {
        verdict: 'non',
        texte: "La ventilation n'est plus financée seule par MaPrimeRénov' depuis le 1er septembre 2026.",
      },
      photovoltaique: {
        verdict: 'non',
        texte: "Les panneaux photovoltaïques ne font pas partie des travaux financés par MaPrimeRénov'.",
      },
      'ne-sait-pas': {
        verdict: 'sous-conditions',
        montantMax: 11000,
        texte: "Seulement pour l'installation d'une pompe à chaleur : jusqu'à 11 000 € selon vos revenus.",
      },
    },
    sources: [SOURCE_ANAH, SOURCE_SERVICE_PUBLIC_MPR],
    dateVerification: '2026-10-08',
  },

  // =======================================================================
  // 2. MAPRIMERÉNOV' RÉNOVATION D'AMPLEUR
  // Projet global : au moins 2 gestes d'isolation et un gain d'au moins
  // 2 classes énergétiques, logement classé E, F ou G, construit depuis au
  // moins 15 ans, résidence principale, Accompagnateur Rénov' obligatoire,
  // rendez-vous préalable avec un conseiller France Rénov' obligatoire.
  // Depuis le 1er septembre 2026 en maison individuelle : impossible de
  // conserver ou installer un chauffage au gaz ou au fioul.
  // Taux (très modestes / modestes / intermédiaires / supérieurs) :
  //   80 % / 60 % / 45 % / 10 % du montant HT des travaux, plafonné à
  //   30 000 € HT (gain de 2 classes) ou 40 000 € HT (3 classes ou plus).
  // Maximum : 80 % × 40 000 € = 32 000 €.
  // =======================================================================
  {
    id: 'maprimerenov-ampleur',
    nom: "MaPrimeRénov' rénovation d'ampleur",
    nature: "Prime de l'État (Anah)",
    montantMax: 32000,
    conditions: [
      'Logement classé E, F ou G, construit depuis au moins 15 ans, occupé en résidence principale.',
      "Projet global : au moins 2 travaux d'isolation et un gain d'au moins 2 classes énergétiques.",
      "Accompagnateur Rénov' et rendez-vous préalable avec un conseiller France Rénov' obligatoires.",
      'En maison individuelle, pas de chauffage au gaz ou au fioul après les travaux.',
    ],
    statuts: {
      'proprietaire-occupant': { verdict: 'oui', texte: 'Ouvert aux propriétaires occupants.' },
      'proprietaire-bailleur': {
        verdict: 'oui',
        texte: "Ouvert aux propriétaires bailleurs, qui s'engagent à louer le logement en résidence principale pendant au moins 6 ans.",
      },
      locataire: {
        verdict: 'non',
        texte: "Réservé aux propriétaires : en tant que locataire, vous ne pouvez pas en bénéficier.",
      },
    },
    travaux: {
      isolation: {
        verdict: 'sous-conditions',
        montantMax: 32000,
        texte: "Possible dans un projet de rénovation globale : jusqu'à 32 000 € selon vos revenus et le gain énergétique obtenu (de 10 % à 80 % du montant des travaux).",
      },
      fenetres: {
        verdict: 'sous-conditions',
        montantMax: 32000,
        texte: "Possible si le changement des fenêtres fait partie d'un projet de rénovation globale : jusqu'à 32 000 € selon vos revenus.",
      },
      chauffage: {
        verdict: 'sous-conditions',
        montantMax: 32000,
        texte: "Possible si le chauffage fait partie d'un projet de rénovation globale avec isolation : jusqu'à 32 000 € selon vos revenus.",
      },
      ventilation: {
        verdict: 'sous-conditions',
        montantMax: 32000,
        texte: "Possible si la ventilation fait partie d'un projet de rénovation globale avec isolation : jusqu'à 32 000 € selon vos revenus.",
      },
      photovoltaique: {
        verdict: 'a-verifier',
        texte: "La prise en compte des panneaux photovoltaïques dans une rénovation d'ampleur n'a pas pu être confirmée : nous le vérifions avec vous.",
      },
      'ne-sait-pas': {
        verdict: 'sous-conditions',
        montantMax: 32000,
        texte: "Possible pour un projet de rénovation globale avec isolation : jusqu'à 32 000 € selon vos revenus et le gain énergétique obtenu.",
      },
    },
    sources: [SOURCE_ANAH, SOURCE_SERVICE_PUBLIC_MPR],
    dateVerification: '2026-10-08',
  },

  // =======================================================================
  // 3. CEE : CERTIFICATS D'ÉCONOMIES D'ÉNERGIE (« primes énergie »)
  // Primes versées par les fournisseurs d'énergie. Montant variable selon le
  // fournisseur, les travaux et les revenus : AUCUN MONTANT AFFICHÉ.
  // Bénéficiaires : propriétaires occupants, bailleurs, et locataires
  // « selon les aides ». Logement de plus de 2 ans. L'offre doit être
  // acceptée avant la signature du devis (ou dans les 14 jours après).
  // =======================================================================
  {
    id: 'cee',
    nom: "Prime CEE (certificats d'économies d'énergie)",
    nomCourt: 'Prime CEE',
    nature: "Prime des fournisseurs d'énergie",
    montantMax: null,
    conditions: [
      'Logement construit depuis plus de 2 ans.',
      'Offre du fournisseur acceptée avant de signer le devis (ou au plus tard 14 jours après).',
      'Travaux réalisés par un professionnel RGE. Primes plus élevées pour les revenus modestes.',
    ],
    statuts: {
      'proprietaire-occupant': { verdict: 'oui', texte: 'Ouvert aux propriétaires occupants.' },
      'proprietaire-bailleur': { verdict: 'oui', texte: 'Ouvert aux propriétaires bailleurs.' },
      locataire: {
        verdict: 'sous-conditions',
        texte: "Possible pour les locataires selon les primes proposées. Renseignez-vous aussi auprès de votre propriétaire.",
      },
    },
    travaux: {
      isolation: {
        verdict: 'oui',
        texte: "Oui, l'isolation fait partie des travaux couverts. Montant variable selon le fournisseur d'énergie et vos revenus.",
      },
      fenetres: {
        verdict: 'oui',
        texte: "Oui, les travaux d'isolation du logement, dont les fenêtres, sont couverts. Montant variable selon le fournisseur et vos revenus.",
      },
      chauffage: {
        verdict: 'oui',
        texte: "Oui, notamment avec les primes « coup de pouce » pour remplacer une chaudière au fioul, au gaz ou au charbon. Montant variable selon le fournisseur et vos revenus.",
      },
      ventilation: {
        verdict: 'a-verifier',
        texte: "La prise en charge de la ventilation seule n'a pas pu être confirmée : nous le vérifions avec vous.",
      },
      photovoltaique: {
        verdict: 'a-verifier',
        texte: "La prise en charge des panneaux photovoltaïques n'a pas pu être confirmée : à vérifier.",
      },
      'ne-sait-pas': {
        verdict: 'oui',
        texte: "Oui pour la plupart des travaux d'économies d'énergie (isolation, chauffage). Montant variable selon le fournisseur et vos revenus.",
      },
    },
    sources: [SOURCE_ANAH],
    dateVerification: '2026-10-08',
  },

  // =======================================================================
  // 4. ÉCO-PRÊT À TAUX ZÉRO (ÉCO-PTZ)
  // Prêt sans intérêts, SANS condition de ressources, accordé par la banque
  // selon la capacité de remboursement. Logement achevé depuis plus de
  // 2 ans, résidence principale. Propriétaires occupants et bailleurs.
  // Plafonds (Anah, septembre 2026) :
  //   1 action : 15 000 € (7 000 € pour les fenêtres seules), 2 actions :
  //   25 000 €, 3 actions : 30 000 €, performance globale ou MaPrimeRénov' :
  //   50 000 €. Remboursement sur 15 ans (20 ans pour 50 000 €).
  // =======================================================================
  {
    id: 'eco-ptz',
    nom: 'Éco-prêt à taux zéro',
    nature: 'Prêt sans intérêts, accordé par une banque',
    montantMax: 50000,
    conditions: [
      'Sans condition de revenus, mais accordé par la banque selon votre capacité de remboursement.',
      'Logement achevé depuis plus de 2 ans, occupé (ou destiné à être loué) en résidence principale.',
      'Remboursement sur 15 ans au plus (20 ans pour une rénovation globale).',
    ],
    statuts: {
      'proprietaire-occupant': { verdict: 'oui', texte: 'Ouvert aux propriétaires occupants.' },
      'proprietaire-bailleur': {
        verdict: 'oui',
        texte: 'Ouvert aux propriétaires bailleurs, si le logement est loué en résidence principale.',
      },
      locataire: {
        verdict: 'non',
        texte: "Réservé aux propriétaires : en tant que locataire, vous ne pouvez pas en bénéficier.",
      },
    },
    travaux: {
      isolation: {
        verdict: 'oui',
        montantMax: 50000,
        texte: "Oui : jusqu'à 15 000 € pour un seul type de travaux, 30 000 € pour trois, et 50 000 € pour une rénovation globale.",
      },
      fenetres: {
        verdict: 'oui',
        montantMax: 7000,
        texte: "Oui : jusqu'à 7 000 € pour les fenêtres seules, davantage si elles sont combinées à d'autres travaux.",
      },
      chauffage: {
        verdict: 'oui',
        montantMax: 15000,
        texte: "Oui, pour un chauffage performant (pas pour une chaudière au gaz) : jusqu'à 15 000 € seul, davantage combiné à d'autres travaux.",
      },
      ventilation: {
        verdict: 'a-verifier',
        texte: "La ventilation seule n'a pas pu être confirmée parmi les travaux finançables : nous le vérifions avec vous.",
      },
      photovoltaique: {
        verdict: 'a-verifier',
        texte: "Les panneaux photovoltaïques n'ont pas pu être confirmés parmi les travaux finançables : à vérifier.",
      },
      'ne-sait-pas': {
        verdict: 'oui',
        montantMax: 50000,
        texte: "Oui pour des travaux d'économies d'énergie : jusqu'à 50 000 € selon l'ampleur du projet.",
      },
    },
    sources: [SOURCE_ANAH],
    dateVerification: '2026-10-08',
  },

  // =======================================================================
  // 5. TVA À 5,5 %
  // Taux réduit appliqué directement par l'artisan sur la facture (au lieu
  // de 10 % ou 20 %). Pas de montant : c'est un taux.
  // Bénéficiaires : propriétaires occupants, bailleurs, LOCATAIRES,
  // occupants à titre gratuit, SCI. Logement achevé depuis plus de 2 ans
  // (résidence principale ou secondaire).
  // Travaux : isolation thermique, chauffage et ventilation, eau chaude
  // sanitaire (arrêté du 4 décembre 2024). Depuis le 1er septembre 2026,
  // aussi les pompes à chaleur air-air. Chaudière au gaz : TVA à 20 %.
  // =======================================================================
  {
    id: 'tva-reduite',
    nom: 'TVA à 5,5 %',
    nature: "Taux réduit appliqué directement sur la facture de l'artisan",
    montantMax: null,
    conditions: [
      'Logement achevé depuis plus de 2 ans (résidence principale ou secondaire).',
      "Appliquée directement par l'artisan sur le devis et la facture.",
    ],
    statuts: {
      'proprietaire-occupant': { verdict: 'oui', texte: 'Ouvert aux propriétaires occupants.' },
      'proprietaire-bailleur': { verdict: 'oui', texte: 'Ouvert aux propriétaires bailleurs.' },
      locataire: { verdict: 'oui', texte: 'Ouvert aussi aux locataires.' },
    },
    travaux: {
      isolation: { verdict: 'oui', texte: "Oui, l'isolation thermique bénéficie de la TVA à 5,5 %." },
      fenetres: { verdict: 'oui', texte: 'Oui, les fenêtres isolantes bénéficient de la TVA à 5,5 % (travaux d\'isolation thermique).' },
      chauffage: {
        verdict: 'oui',
        texte: "Oui pour un chauffage économe ou renouvelable, dont les pompes à chaleur. Une chaudière au gaz reste à 20 %.",
      },
      ventilation: { verdict: 'oui', texte: 'Oui, la ventilation bénéficie de la TVA à 5,5 %.' },
      photovoltaique: {
        verdict: 'a-verifier',
        texte: "Le taux de TVA des panneaux photovoltaïques relève de règles spécifiques non vérifiées ici : à vérifier avec votre artisan.",
      },
      'ne-sait-pas': {
        verdict: 'oui',
        texte: "Oui pour l'isolation, le chauffage économe, la ventilation et l'eau chaude.",
      },
    },
    sources: [SOURCE_ANAH],
    dateVerification: '2026-10-08',
  },
];


// -------------------------------------------------------------------------
// CHIFFRES MIS EN AVANT SUR LA PAGE /aides-renovation (19 octobre 2026)
// -------------------------------------------------------------------------
// Les montants affichés comme des DONNÉES sur la page (bandeau des chiffres
// clés, encart « Ce qu'il faut retenir », plafonds de l'Éco-PTZ) viennent
// d'ici, jamais du fichier de la page. Les chiffres cités au fil du texte
// rédigé, eux, restent dans le texte.
// Quand un montant change : le modifier ICI, puis mettre à jour
// dateVerificationPage.
// -------------------------------------------------------------------------

const aide = (id: string) => {
  const trouvee = aidesNationales.find((a) => a.id === id);
  if (!trouvee) throw new Error(`Aide nationale inconnue : ${id}`);
  return trouvee;
};

/** Date de la dernière vérification des montants de la page
 *  /aides-renovation (AAAA-MM-JJ), affichée en bas de page. */
export const dateVerificationPage = '2026-10-19';

/** Taux de TVA cités par la page (en %). */
export const tauxTva = {
  reduit: 5.5,
  // AJOUT du 19 octobre 2026 : taux intermédiaire, celui des radiateurs à
  // inertie d'après le texte de la page.
  intermediaire: 10,
};

/** MaPrimeRénov' par geste : montant maximum (pompe à chaleur
 *  géothermique, revenus très modestes). Lu dans l'aide ci-dessus. */
export const mprGesteMax = aide('maprimerenov-geste').montantMax as number;

/** MaPrimeRénov' rénovation d'ampleur (Parcours Accompagné) : part
 *  maximale du devis prise en charge, en % (revenus très modestes).
 *  AJOUT du 19 octobre 2026 : le taux figurait seulement en commentaire
 *  (barème Anah, voir l'aide n° 2 ci-dessus). */
export const mprAmpleurTauxMax = 80;

/** Prime CEE : montant mis en avant (« plus de … € » pour les gestes les
 *  plus performants).
 *  AJOUT du 19 octobre 2026, repris du texte de la page fourni ce jour-là.
 *  ⚠️ NON CONFIRMÉ par une source officielle : les primes CEE varient
 *  selon le fournisseur ; c'est pourquoi le simulateur, lui, n'affiche
 *  toujours AUCUN montant CEE (montantMax: null ci-dessus). */
export const ceeMontantMisEnAvant = 7500;

/** Éco-PTZ : plafond le plus élevé (rénovation globale). Lu dans l'aide
 *  ci-dessus. */
export const ecoPtzMax = aide('eco-ptz').montantMax as number;

/** Éco-PTZ : plafonds selon le projet, dans l'ordre du texte de la page.
 *  Libellés repris mot pour mot du texte.
 *  AJOUT du 19 octobre 2026 : seule la ligne « assainissement non
 *  collectif » (10 000 €) ne figure pas dans le barème Anah cité en
 *  commentaire de l'aide n° 4 ; elle vient du texte de la page. */
export const plafondsEcoPtz: { libelle: string; montant: number; precision?: string }[] = [
  { libelle: 'Action seule sur les fenêtres', montant: 7000 },
  { libelle: 'Assainissement non collectif', montant: 10000 },
  { libelle: 'Une action seule (hors fenêtres)', montant: 15000 },
  { libelle: 'Bouquet de 2 travaux', montant: 25000 },
  { libelle: 'Bouquet de 3 travaux ou plus', montant: 30000 },
  { libelle: 'Rénovation globale', montant: ecoPtzMax, precision: 'pour les projets permettant un gain énergétique important' },
];


// -------------------------------------------------------------------------
// AIDES RÉGIONALES (13 régions de métropole)
// -------------------------------------------------------------------------
// Pour chaque région : existe-t-il un dispositif d'aide à la rénovation
// énergétique pour les PARTICULIERS, d'après le site officiel du conseil
// régional (ou de son organisme officiel) ?
// - 'oui'     : un dispositif existe ; son nom est indiqué ;
// - 'non'     : la source officielle indique qu'il n'y en a pas ;
// - 'inconnu' : rien de confirmé sur les sources consultées.
// AUCUN MONTANT, volontairement : les dispositifs locaux changent trop
// souvent pour être chiffrés sans risque.
//
// Pour mettre à jour une région : changez « statut », « dispositif »,
// « source » et « dateVerification » sur sa ligne, et notez-le dans
// inventaire-charte.md.
// Les régions d'outre-mer ne sont pas traitées (affichées « à vérifier »).
// -------------------------------------------------------------------------

export type IdRegion =
  | 'auvergne-rhone-alpes' | 'bourgogne-franche-comte' | 'bretagne' | 'centre-val-de-loire'
  | 'corse' | 'grand-est' | 'hauts-de-france' | 'ile-de-france' | 'normandie'
  | 'nouvelle-aquitaine' | 'occitanie' | 'pays-de-la-loire' | 'provence-alpes-cote-dazur';

export type StatutRegion = 'oui' | 'non' | 'inconnu';

export interface Region {
  id: IdRegion;
  nom: string;
  statut: StatutRegion;
  /** Nom du dispositif (seulement si statut 'oui'). */
  dispositif?: string;
  /** Page officielle consultée. */
  source: string;
  /** Date de la vérification (AAAA-MM-JJ). */
  dateVerification: string;
}

export const regions: Region[] = [
  {
    id: 'auvergne-rhone-alpes', nom: 'Auvergne-Rhône-Alpes', statut: 'inconnu',
    // Seuls un prêt réservé aux entreprises et un soutien aux plateformes
    // territoriales de rénovation ont été trouvés : rien de confirmé pour
    // les travaux des particuliers.
    source: 'https://www.auvergnerhonealpes.fr/aides', dateVerification: '2026-10-08',
  },
  {
    id: 'bourgogne-franche-comte', nom: 'Bourgogne-Franche-Comté', statut: 'oui', dispositif: 'Effilogis',
    // Page Effilogis présente sur le site de la Région ; les conditions
    // détaillées trouvées datent de 2022 (maintien en 2026 à confirmer).
    source: 'https://www.bourgognefranchecomte.fr/node/375', dateVerification: '2026-10-08',
  },
  {
    id: 'bretagne', nom: 'Bretagne', statut: 'inconnu',
    // Aucune aide régionale aux travaux des particuliers trouvée ; la page du
    // programme « Énergie Solidaire Bretagne » n'a pas pu être consultée.
    source: 'https://www.bretagne.bzh/aides/', dateVerification: '2026-10-08',
  },
  {
    id: 'centre-val-de-loire', nom: 'Centre-Val de Loire', statut: 'oui', dispositif: 'Centre-Val de Loire Rénovation (prêt rénovation)',
    source: 'https://renovation.centre-valdeloire.fr/votre-projet/financement/pret-renovation/', dateVerification: '2026-10-08',
  },
  {
    id: 'corse', nom: 'Corse', statut: 'oui', dispositif: "Aide à la rénovation énergétique de l'AUE (Agence d'urbanisme et d'énergie de la Corse)",
    // Dispositif porté par l'AUE, établissement de la Collectivité de Corse.
    source: 'https://www.aue.corsica/L-AUE-facilite-la-renovation-energetique-de-votre-logement-individuel-_a1007.html', dateVerification: '2026-10-08',
  },
  {
    id: 'grand-est', nom: 'Grand Est', statut: 'oui', dispositif: 'Climaxion (dont le service Oktave)',
    // Ouverture en 2026 non précisée sur la page consultée.
    source: 'https://www.climaxion.fr/particuliers-coproprietes', dateVerification: '2026-10-08',
  },
  {
    id: 'hauts-de-france', nom: 'Hauts-de-France', statut: 'oui', dispositif: 'Aide à la rénovation énergétique des logements (AREL)',
    source: 'https://www.hautsdefrance.fr/aide-la-renovation-energetique-la-region-ouvre-la-plateforme-de-demande-en-ligne/', dateVerification: '2026-10-08',
  },
  {
    id: 'ile-de-france', nom: 'Île-de-France', statut: 'non',
    // Pas d'aide régionale directe aux particuliers ; l'aide au remplacement
    // des chauffages au fioul, au bois ou au charbon est fermée depuis le
    // 24 janvier 2025. La Région soutient les copropriétés dégradées.
    source: 'https://www.iledefrance.fr/chauffages', dateVerification: '2026-10-08',
  },
  {
    id: 'normandie', nom: 'Normandie', statut: 'oui', dispositif: 'Chèque éco-énergie Normandie',
    source: 'https://www.normandie.fr/idee-action-cheque-eco-energie-normandie-aide-travaux', dateVerification: '2026-10-08',
  },
  {
    id: 'nouvelle-aquitaine', nom: 'Nouvelle-Aquitaine', statut: 'oui', dispositif: "Aide à l'accompagnement de la rénovation énergétique (audit, accompagnement des travaux, maîtrise d'œuvre)",
    source: 'https://les-aides.nouvelle-aquitaine.fr/economies-denergie', dateVerification: '2026-10-08',
  },
  {
    id: 'occitanie', nom: 'Occitanie', statut: 'inconnu',
    // Rénov'Occitanie ne vise que les copropriétés ; aucune aide régionale
    // pour les maisons individuelles trouvée.
    source: 'https://renovoccitanie.laregion.fr/renover-son-bien', dateVerification: '2026-10-08',
  },
  {
    id: 'pays-de-la-loire', nom: 'Pays de la Loire', statut: 'oui', dispositif: "Aide régionale aux économies d'énergie pour les particuliers (AREEP)",
    source: 'https://www.paysdelaloire.fr/les-aides/aide-regionale-aux-economies-denergie-pour-les-particuliers-areep', dateVerification: '2026-10-08',
  },
  {
    id: 'provence-alpes-cote-dazur', nom: "Provence-Alpes-Côte d'Azur", statut: 'oui', dispositif: 'Chèque énergie durable',
    source: 'https://www.maregionsud.fr/aides-et-appels-a-projets/detail/cheque-energie-durable', dateVerification: '2026-10-08',
  },
];

/**
 * Phrases affichées pour l'aide régionale.
 * {dispositif} est remplacé par le nom du dispositif.
 */
export const textesRegion: Record<StatutRegion | 'outre-mer', string> = {
  oui: 'Votre région propose une aide à la rénovation : {dispositif}. Nous vérifions avec vous les conditions.',
  non: "Aucune aide régionale identifiée pour les particuliers. D'autres aides locales peuvent exister dans votre secteur : nous les vérifions avec vous.",
  inconnu: 'Des aides locales existent peut-être dans votre secteur. Nous les vérifions avec vous.',
  'outre-mer': 'Des aides locales existent peut-être dans votre secteur. Nous les vérifions avec vous.',
};


// -------------------------------------------------------------------------
// AIDES DÉPARTEMENTALES
// -------------------------------------------------------------------------
// Pour chaque département : son numéro, son nom, et un statut :
// - 'oui'     : le département propose une aide à la rénovation ;
// - 'non'     : aucune aide départementale identifiée ;
// - 'inconnu' : pas encore vérifié.
// AUCUN MONTANT ici, volontairement (voir la règle absolue en haut).
//
// Pour mettre à jour un département : remplacez 'inconnu' par 'oui' ou
// 'non' sur sa ligne, et notez la source et la date dans inventaire-charte.md.
// État au 8 octobre 2026 : TOUS les départements sont à 'inconnu' (la
// collecte fera l'objet d'un ticket séparé).
// -------------------------------------------------------------------------

export type StatutDepartement = 'oui' | 'non' | 'inconnu';

export interface Departement {
  numero: string;
  nom: string;
  statut: StatutDepartement;
  /** Région de rattachement (métropole uniquement). */
  region?: IdRegion;
}

/** Phrases affichées selon le statut du département (texte demandé). */
export const textesDepartement: Record<StatutDepartement, string> = {
  oui: 'Votre département propose une aide à la rénovation. Nous vérifions avec vous les conditions.',
  non: "Aucune aide départementale identifiée. D'autres aides locales peuvent exister dans votre secteur : nous les vérifions avec vous.",
  inconnu: 'Des aides locales existent peut-être dans votre secteur. Nous les vérifions avec vous.',
};

export const departements: Departement[] = [
  { numero: '01', nom: 'Ain', statut: 'inconnu', region: 'auvergne-rhone-alpes' },
  { numero: '02', nom: 'Aisne', statut: 'inconnu', region: 'hauts-de-france' },
  { numero: '03', nom: 'Allier', statut: 'inconnu', region: 'auvergne-rhone-alpes' },
  { numero: '04', nom: 'Alpes-de-Haute-Provence', statut: 'inconnu', region: 'provence-alpes-cote-dazur' },
  { numero: '05', nom: 'Hautes-Alpes', statut: 'inconnu', region: 'provence-alpes-cote-dazur' },
  { numero: '06', nom: 'Alpes-Maritimes', statut: 'inconnu', region: 'provence-alpes-cote-dazur' },
  { numero: '07', nom: 'Ardèche', statut: 'inconnu', region: 'auvergne-rhone-alpes' },
  { numero: '08', nom: 'Ardennes', statut: 'inconnu', region: 'grand-est' },
  { numero: '09', nom: 'Ariège', statut: 'inconnu', region: 'occitanie' },
  { numero: '10', nom: 'Aube', statut: 'inconnu', region: 'grand-est' },
  { numero: '11', nom: 'Aude', statut: 'inconnu', region: 'occitanie' },
  { numero: '12', nom: 'Aveyron', statut: 'inconnu', region: 'occitanie' },
  { numero: '13', nom: 'Bouches-du-Rhône', statut: 'inconnu', region: 'provence-alpes-cote-dazur' },
  { numero: '14', nom: 'Calvados', statut: 'inconnu', region: 'normandie' },
  { numero: '15', nom: 'Cantal', statut: 'inconnu', region: 'auvergne-rhone-alpes' },
  { numero: '16', nom: 'Charente', statut: 'inconnu', region: 'nouvelle-aquitaine' },
  { numero: '17', nom: 'Charente-Maritime', statut: 'inconnu', region: 'nouvelle-aquitaine' },
  { numero: '18', nom: 'Cher', statut: 'inconnu', region: 'centre-val-de-loire' },
  { numero: '19', nom: 'Corrèze', statut: 'inconnu', region: 'nouvelle-aquitaine' },
  { numero: '2A', nom: 'Corse-du-Sud', statut: 'inconnu', region: 'corse' },
  { numero: '2B', nom: 'Haute-Corse', statut: 'inconnu', region: 'corse' },
  { numero: '21', nom: "Côte-d'Or", statut: 'inconnu', region: 'bourgogne-franche-comte' },
  { numero: '22', nom: "Côtes-d'Armor", statut: 'inconnu', region: 'bretagne' },
  { numero: '23', nom: 'Creuse', statut: 'inconnu', region: 'nouvelle-aquitaine' },
  { numero: '24', nom: 'Dordogne', statut: 'inconnu', region: 'nouvelle-aquitaine' },
  { numero: '25', nom: 'Doubs', statut: 'inconnu', region: 'bourgogne-franche-comte' },
  { numero: '26', nom: 'Drôme', statut: 'inconnu', region: 'auvergne-rhone-alpes' },
  { numero: '27', nom: 'Eure', statut: 'inconnu', region: 'normandie' },
  { numero: '28', nom: 'Eure-et-Loir', statut: 'inconnu', region: 'centre-val-de-loire' },
  { numero: '29', nom: 'Finistère', statut: 'inconnu', region: 'bretagne' },
  { numero: '30', nom: 'Gard', statut: 'inconnu', region: 'occitanie' },
  { numero: '31', nom: 'Haute-Garonne', statut: 'inconnu', region: 'occitanie' },
  { numero: '32', nom: 'Gers', statut: 'inconnu', region: 'occitanie' },
  { numero: '33', nom: 'Gironde', statut: 'inconnu', region: 'nouvelle-aquitaine' },
  { numero: '34', nom: 'Hérault', statut: 'inconnu', region: 'occitanie' },
  { numero: '35', nom: 'Ille-et-Vilaine', statut: 'inconnu', region: 'bretagne' },
  { numero: '36', nom: 'Indre', statut: 'inconnu', region: 'centre-val-de-loire' },
  { numero: '37', nom: 'Indre-et-Loire', statut: 'inconnu', region: 'centre-val-de-loire' },
  { numero: '38', nom: 'Isère', statut: 'inconnu', region: 'auvergne-rhone-alpes' },
  { numero: '39', nom: 'Jura', statut: 'inconnu', region: 'bourgogne-franche-comte' },
  { numero: '40', nom: 'Landes', statut: 'inconnu', region: 'nouvelle-aquitaine' },
  { numero: '41', nom: 'Loir-et-Cher', statut: 'inconnu', region: 'centre-val-de-loire' },
  { numero: '42', nom: 'Loire', statut: 'inconnu', region: 'auvergne-rhone-alpes' },
  { numero: '43', nom: 'Haute-Loire', statut: 'inconnu', region: 'auvergne-rhone-alpes' },
  { numero: '44', nom: 'Loire-Atlantique', statut: 'inconnu', region: 'pays-de-la-loire' },
  { numero: '45', nom: 'Loiret', statut: 'inconnu', region: 'centre-val-de-loire' },
  { numero: '46', nom: 'Lot', statut: 'inconnu', region: 'occitanie' },
  { numero: '47', nom: 'Lot-et-Garonne', statut: 'inconnu', region: 'nouvelle-aquitaine' },
  { numero: '48', nom: 'Lozère', statut: 'inconnu', region: 'occitanie' },
  { numero: '49', nom: 'Maine-et-Loire', statut: 'inconnu', region: 'pays-de-la-loire' },
  { numero: '50', nom: 'Manche', statut: 'inconnu', region: 'normandie' },
  { numero: '51', nom: 'Marne', statut: 'inconnu', region: 'grand-est' },
  { numero: '52', nom: 'Haute-Marne', statut: 'inconnu', region: 'grand-est' },
  { numero: '53', nom: 'Mayenne', statut: 'inconnu', region: 'pays-de-la-loire' },
  { numero: '54', nom: 'Meurthe-et-Moselle', statut: 'inconnu', region: 'grand-est' },
  { numero: '55', nom: 'Meuse', statut: 'inconnu', region: 'grand-est' },
  { numero: '56', nom: 'Morbihan', statut: 'inconnu', region: 'bretagne' },
  { numero: '57', nom: 'Moselle', statut: 'inconnu', region: 'grand-est' },
  { numero: '58', nom: 'Nièvre', statut: 'inconnu', region: 'bourgogne-franche-comte' },
  { numero: '59', nom: 'Nord', statut: 'inconnu', region: 'hauts-de-france' },
  { numero: '60', nom: 'Oise', statut: 'inconnu', region: 'hauts-de-france' },
  { numero: '61', nom: 'Orne', statut: 'inconnu', region: 'normandie' },
  { numero: '62', nom: 'Pas-de-Calais', statut: 'inconnu', region: 'hauts-de-france' },
  { numero: '63', nom: 'Puy-de-Dôme', statut: 'inconnu', region: 'auvergne-rhone-alpes' },
  { numero: '64', nom: 'Pyrénées-Atlantiques', statut: 'inconnu', region: 'nouvelle-aquitaine' },
  { numero: '65', nom: 'Hautes-Pyrénées', statut: 'inconnu', region: 'occitanie' },
  { numero: '66', nom: 'Pyrénées-Orientales', statut: 'inconnu', region: 'occitanie' },
  { numero: '67', nom: 'Bas-Rhin', statut: 'inconnu', region: 'grand-est' },
  { numero: '68', nom: 'Haut-Rhin', statut: 'inconnu', region: 'grand-est' },
  { numero: '69', nom: 'Rhône', statut: 'inconnu', region: 'auvergne-rhone-alpes' },
  { numero: '70', nom: 'Haute-Saône', statut: 'inconnu', region: 'bourgogne-franche-comte' },
  { numero: '71', nom: 'Saône-et-Loire', statut: 'inconnu', region: 'bourgogne-franche-comte' },
  { numero: '72', nom: 'Sarthe', statut: 'inconnu', region: 'pays-de-la-loire' },
  { numero: '73', nom: 'Savoie', statut: 'inconnu', region: 'auvergne-rhone-alpes' },
  { numero: '74', nom: 'Haute-Savoie', statut: 'inconnu', region: 'auvergne-rhone-alpes' },
  { numero: '75', nom: 'Paris', statut: 'inconnu', region: 'ile-de-france' },
  { numero: '76', nom: 'Seine-Maritime', statut: 'inconnu', region: 'normandie' },
  { numero: '77', nom: 'Seine-et-Marne', statut: 'inconnu', region: 'ile-de-france' },
  { numero: '78', nom: 'Yvelines', statut: 'inconnu', region: 'ile-de-france' },
  { numero: '79', nom: 'Deux-Sèvres', statut: 'inconnu', region: 'nouvelle-aquitaine' },
  { numero: '80', nom: 'Somme', statut: 'inconnu', region: 'hauts-de-france' },
  { numero: '81', nom: 'Tarn', statut: 'inconnu', region: 'occitanie' },
  { numero: '82', nom: 'Tarn-et-Garonne', statut: 'inconnu', region: 'occitanie' },
  { numero: '83', nom: 'Var', statut: 'inconnu', region: 'provence-alpes-cote-dazur' },
  { numero: '84', nom: 'Vaucluse', statut: 'inconnu', region: 'provence-alpes-cote-dazur' },
  { numero: '85', nom: 'Vendée', statut: 'inconnu', region: 'pays-de-la-loire' },
  { numero: '86', nom: 'Vienne', statut: 'inconnu', region: 'nouvelle-aquitaine' },
  { numero: '87', nom: 'Haute-Vienne', statut: 'inconnu', region: 'nouvelle-aquitaine' },
  { numero: '88', nom: 'Vosges', statut: 'inconnu', region: 'grand-est' },
  { numero: '89', nom: 'Yonne', statut: 'inconnu', region: 'bourgogne-franche-comte' },
  { numero: '90', nom: 'Territoire de Belfort', statut: 'inconnu', region: 'bourgogne-franche-comte' },
  { numero: '91', nom: 'Essonne', statut: 'inconnu', region: 'ile-de-france' },
  { numero: '92', nom: 'Hauts-de-Seine', statut: 'inconnu', region: 'ile-de-france' },
  { numero: '93', nom: 'Seine-Saint-Denis', statut: 'inconnu', region: 'ile-de-france' },
  { numero: '94', nom: 'Val-de-Marne', statut: 'inconnu', region: 'ile-de-france' },
  { numero: '95', nom: "Val-d'Oise", statut: 'inconnu', region: 'ile-de-france' },
  { numero: '971', nom: 'Guadeloupe', statut: 'inconnu' },
  { numero: '972', nom: 'Martinique', statut: 'inconnu' },
  { numero: '973', nom: 'Guyane', statut: 'inconnu' },
  { numero: '974', nom: 'La Réunion', statut: 'inconnu' },
  { numero: '976', nom: 'Mayotte', statut: 'inconnu' },
];
