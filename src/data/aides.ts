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
// BARÈME AU 20 OCTOBRE 2026 (refonte du 20 octobre 2026). Sources :
// - Anah, « Les aides financières en 2026 », édition septembre 2026 (guide
//   à destination des professionnels) : barème par geste, rénovation
//   d'ampleur, écrêtement, plafonds de ressources 2026 ;
// - arrêté du 25 août 2026 (barème MaPrimeRénov' au 1er septembre 2026) ;
// - economie.gouv.fr, « Ce qui change en septembre 2026 » ;
// - arrêté du 13 juillet 2026 (TVA à 5,5 % des pompes à chaleur air/air).
// Le détail de la vérification est dans inventaire-charte.md (« Refonte du
// barème des aides »).
//
// STRUCTURE DEPUIS LE 20 OCTOBRE 2026 : MaPrimeRénov' n'est plus une
// « aide » comme les autres (une règle par case cochée) : son barème
// dépend du POSTE de travaux et du PROFIL de revenus. Voir « MAPRIMERÉNOV' »
// plus bas : mprParGeste (un cas par poste), mprAmpleur, ecretement,
// plafondsRessources. Les autres aides nationales (CEE, Éco-PTZ, TVA)
// gardent la forme AideNationale.
// =========================================================================


// -------------------------------------------------------------------------
// VOCABULAIRE COMMUN (ne pas modifier sans modifier aussi le simulateur)
// -------------------------------------------------------------------------

/** Les 3 réponses possibles à la question « Vous êtes ». */
export type Statut = 'proprietaire-occupant' | 'proprietaire-bailleur' | 'locataire';

/** Les réponses possibles à la question « Vos travaux » : la liste
 *  principale, puis le groupe « Autres démarches » (dépose de cuve, audit,
 *  réseau de chaleur, ajoutés le 20 octobre 2026). */
export type Travaux =
  | 'isolation'
  | 'fenetres'
  | 'chauffage'
  | 'ventilation'
  | 'photovoltaique'
  | 'ne-sait-pas'
  | 'depose-cuve-fioul'
  | 'audit'
  | 'reseau-chaleur';

/** Sous-question « Quel équipement ? », posée quand « Chauffage » est
 *  coché (20 octobre 2026). */
export type Equipement =
  | 'pac-air-eau'
  | 'pac-geothermique'
  | 'pac-air-air'
  | 'bois-biomasse'
  | 'chaudiere-gaz'
  | 'chauffe-eau-thermodynamique'
  | 'chauffe-eau-solaire'
  | 'ne-sait-pas';

/** Profil de revenus MaPrimeRénov' (Bleu, Jaune, Violet, Rose sur la page
 *  /aides-renovation). Le simulateur le déduit du foyer et du revenu
 *  fiscal de référence : la personne ne choisit jamais une couleur. */
export type Profil = 'tres-modeste' | 'modeste' | 'intermediaire' | 'superieur';

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
  /**
   * Quand « Chauffage » est coché : règle propre à un équipement, qui
   * REMPLACE la règle `travaux.chauffage` (20 octobre 2026 : sans elle, une
   * chaudière gaz recevait le « oui » général du chauffage).
   */
  equipements?: Partial<Record<Equipement, Regle>>;
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
  // MaPrimeRénov' (par geste et rénovation d'ampleur) n'est plus dans ce
  // tableau depuis le 20 octobre 2026 : voir « MAPRIMERÉNOV' » plus bas.
  // TVA des pompes à chaleur air/air : voir `tvaPacAirAir`, plus bas.

  // =======================================================================
  // 3. CEE : CERTIFICATS D'ÉCONOMIES D'ÉNERGIE (« primes énergie »)
  // Primes versées par les fournisseurs d'énergie. Montant variable selon le
  // fournisseur, les travaux et les revenus : AUCUN MONTANT AFFICHÉ.
  // Il n'existe AUCUN barème officiel en euros : l'État fixe des volumes en
  // kWh cumac, et le montant dépend du signataire choisi par le client.
  // Aucune valeur en euros ne doit apparaître, ni ici ni sur les pages.
  // « Coup de pouce Chauffage » : réservé depuis le 1er septembre 2026 aux
  // pompes à chaleur disposant d'un agrément officiel.
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
        verdict: 'sous-conditions',
        texte: "Possible selon l'équipement. La prime « Coup de pouce Chauffage » est réservée, depuis le 1er septembre 2026, aux pompes à chaleur disposant d'un agrément officiel. Il n'existe pas de barème officiel en euros : le montant dépend du fournisseur que vous choisissez.",
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
      // Autres démarches (20 octobre 2026) : non confirmé par les sources du
      // barème, donc « à vérifier », sans rien supposer.
      'depose-cuve-fioul': {
        verdict: 'a-verifier',
        texte: "La prise en charge de la dépose d'une cuve à fioul par une prime CEE n'a pas pu être confirmée : nous le vérifions avec vous.",
      },
      audit: {
        verdict: 'a-verifier',
        texte: "La prise en charge d'un audit énergétique par une prime CEE n'a pas pu être confirmée : nous le vérifions avec vous.",
      },
      'reseau-chaleur': {
        verdict: 'a-verifier',
        texte: "La prise en charge d'un raccordement à un réseau de chaleur par une prime CEE n'a pas pu être confirmée : nous le vérifions avec vous.",
      },
    },
    // CHAUDIÈRE GAZ : PLUS DE PRIME CEE (21 octobre 2026, vérifié par
    // Akelia). La fiche BAR-TH-106 « Chaudière individuelle à haute
    // performance énergétique », qui portait les chaudières gaz à
    // condensation, a été supprimée au 1er janvier 2024 par l'arrêté du
    // 4 octobre 2023 (Journal officiel du 6 octobre 2023). Sans cette règle,
    // la chaudière gaz recevait la règle générale « chauffage » (« sous
    // conditions »). Elle n'ouvre donc plus droit à aucune aide du barème
    // (ni MaPrimeRénov', ni CEE, ni éco-PTZ, ni TVA à 5,5 %).
    equipements: {
      'chaudiere-gaz': {
        verdict: 'non',
        texte: "Non. Les chaudières au gaz ne sont plus aidées par les primes CEE depuis le 1er janvier 2024 (suppression de la fiche BAR-TH-106).",
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
      // Autres démarches (20 octobre 2026) : non confirmé, « à vérifier ».
      'depose-cuve-fioul': {
        verdict: 'a-verifier',
        texte: "La dépose d'une cuve à fioul n'a pas pu être confirmée parmi les travaux finançables : nous le vérifions avec vous.",
      },
      audit: {
        verdict: 'a-verifier',
        texte: "L'audit énergétique seul n'a pas pu être confirmé parmi les dépenses finançables : nous le vérifions avec vous.",
      },
      'reseau-chaleur': {
        verdict: 'a-verifier',
        texte: "Le raccordement à un réseau de chaleur n'a pas pu être confirmé parmi les travaux finançables : nous le vérifions avec vous.",
      },
    },
    // Même information que la règle « chauffage » ci-dessus, appliquée à
    // l'équipement choisi.
    equipements: {
      'chaudiere-gaz': {
        verdict: 'non',
        texte: "L'Éco-PTZ finance un chauffage performant, pas une chaudière au gaz.",
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
  // sanitaire (arrêté du 4 décembre 2024). Chaudière au gaz : TVA à 20 %.
  // POMPES À CHALEUR AIR/AIR : à 5,5 % depuis le 18 juillet 2026. Texte
  // et références : `tvaPacAirAir`, juste après ce tableau.
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
        texte: "Oui pour un chauffage économe ou renouvelable, dont les pompes à chaleur. Une climatisation réversible fixe (pompe à chaleur air/air) y a droit depuis le 18 juillet 2026, sous des critères techniques stricts. Une chaudière au gaz reste à 20 %.",
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
      // Autres démarches (20 octobre 2026) : non confirmé, « à vérifier ».
      'depose-cuve-fioul': {
        verdict: 'a-verifier',
        texte: "Le taux de TVA de la dépose d'une cuve à fioul n'a pas pu être confirmé : à vérifier avec votre artisan.",
      },
      audit: {
        verdict: 'a-verifier',
        texte: "Le taux de TVA d'un audit énergétique n'a pas pu être confirmé ici : à vérifier avec le professionnel.",
      },
      'reseau-chaleur': {
        verdict: 'a-verifier',
        texte: "Le taux de TVA d'un raccordement à un réseau de chaleur n'a pas pu être confirmé : à vérifier.",
      },
    },
    // Équipement choisi (mêmes informations que la règle « chauffage »).
    equipements: {
      'chaudiere-gaz': { verdict: 'non', texte: 'Une chaudière au gaz reste à la TVA à 20 %.' },
      'pac-air-air': {
        verdict: 'sous-conditions',
        texte: "Depuis le 18 juillet 2026, une pompe à chaleur air/air fixe, dans un logement achevé depuis plus de deux ans, bénéficie de la TVA à 5,5 % si elle atteint le niveau de performance exigé (par exemple A++ en monosplit, A+ en multisplit jusqu'à 12 kW) et dispose d'un réseau numérique pour son pilotage et sa maintenance. Sinon : 20 % sur la fourniture, 10 % sur la pose.",
      },
    },
    sources: [SOURCE_ANAH],
    dateVerification: '2026-10-08',
  },
];


// -------------------------------------------------------------------------
// TVA À 5,5 % DES POMPES À CHALEUR AIR/AIR (texte du 20 octobre 2026)
// -------------------------------------------------------------------------
// Affiché tel quel par /aides-renovation (section TVA) : une seule source.
//
// BASES LÉGALES :
// - arrêté du 13 juillet 2026 (NOR CPPE2619005A), pris en application de
//   l'article 92 de la loi de finances pour 2026, insérant un 1° bis à
//   l'article 30-0 D ter de l'annexe IV du CGI : 5,5 % depuis le 18
//   juillet 2026 ;
// - arrêté correctif du 14 août 2026, applicable au 10 septembre 2026 :
//   restreint les seuils de 145 % / 250 % aux appareils de plus de 12 kW
//   HORS toiture (d'où la ligne propre aux appareils en toiture).
//   ⚠️ CONNU PAR UNE SOURCE PROFESSIONNELLE (SYNASAV, « TVA 5,5 % PAC
//   air/air : correction des critères au-delà de 12 kW »), PAS PAR
//   LÉGIFRANCE : Akelia le confirme sur Légifrance avant la mise en ligne.
//
// TAUX DE REPLI (vérifié par Akelia le 20 octobre 2026) : fourniture à
// 20 %, pose à 10 %. Source : BOFiP BOI-TVA-LIQ-30-20-90-20, version du 9
// septembre 2026, § 50, 80 et 100. La pompe à chaleur air/air figure
// nommément dans la liste des gros équipements de l'article 30-00 A de
// l'annexe IV du CGI (« système de climatisation : tous les systèmes de
// climatisation, ainsi que les pompes à chaleur de type air/air »), ce qui
// exclut sa fourniture du taux réduit. Logement achevé depuis plus de deux
// ans : article 279-0 bis du CGI. Le client atteste sur le devis ou la
// facture que les conditions sont réunies.
//
// CONTRÔLE (avertissement à la construction, /aides-renovation) : le texte
// doit contenir « 12 kW », « 145 », « 250 », « A++ » et « A+ ».
// -------------------------------------------------------------------------
export const tvaPacAirAir = {
  intro:
    'Depuis le 18 juillet 2026, la pose d’une pompe à chaleur air/air dans un logement achevé depuis plus de deux ans bénéficie de la TVA à 5,5 %, à trois conditions :',
  conditions: [
    { texte: 'L’appareil est fixe. Les appareils mobiles restent exclus.' },
    {
      texte: 'Il atteint le niveau de performance exigé :',
      details: [
        'pour une puissance thermique nominale de 12 kW ou moins : classe A++ en monosplit, A+ en multisplit, en chauffage comme en refroidissement ;',
        'au-delà de 12 kW : efficacité énergétique saisonnière d’au moins 145 % en chauffage et 250 % en refroidissement ;',
        'pour les appareils en toiture assurant plusieurs fonctions : 130 % en chauffage et 150 % en refroidissement.',
      ],
    },
    { texte: 'Il dispose d’un réseau numérique permettant son pilotage et sa maintenance.' },
  ],
  dateDuDevis: 'Le taux applicable est celui en vigueur à la date de signature du devis.',
  repli: {
    debut: 'Si une condition manque, la TVA est de',
    fourniture: '20 % sur la fourniture',
    pose: '10 % sur la pose',
    fin: 'Dans tous les cas, le logement doit être achevé depuis plus de deux ans, et vous attestez sur le devis ou la facture que les conditions sont réunies.',
  },
  /** Mentions obligatoires (contrôle en avertissement). */
  mentionsAttendues: ['12 kW', '145', '250', 'A++', 'A+'],
};

// -------------------------------------------------------------------------
// MAPRIMERÉNOV' : BARÈME AU 20 OCTOBRE 2026
// -------------------------------------------------------------------------
// Refondu le 20 octobre 2026. Toutes les valeurs ci-dessous ont été lues
// dans le guide Anah « Les aides financières en 2026 », édition septembre
// 2026 (pages citées), le 20 octobre 2026. Aucune n'est déduite.
//
// PARCOURS PAR GESTE (page 14 et 15) : CINQ postes, et cinq seulement, sont
// encore aidés seuls. Revenus supérieurs : aucun forfait.
// Sortis du parcours par geste au 1er septembre 2026 : isolation,
// ventilation, menuiseries, bois et biomasse, pompes à chaleur dédiées à
// l'eau chaude sanitaire (chauffe-eau thermodynamiques), solaire thermique
// et hybride (sauf outre-mer). Ils restent aidés en rénovation d'ampleur.
// Jamais ou plus du tout aidés : chaudière gaz (depuis le 1er janvier
// 2025), pompe à chaleur air-air, photovoltaïque.
//
// POUR METTRE À JOUR UN FORFAIT : changer le nombre dans `forfaits`
// (euros, sans espace), puis la date en haut du fichier. Les phrases du
// simulateur sont construites à partir de ces nombres : rien d'autre à
// modifier.
// -------------------------------------------------------------------------

/** Les postes du barème. Le simulateur affiche UNE LIGNE PAR POSTE choisi. */
export type Poste =
  | 'pac-air-eau' | 'pac-geothermique' | 'reseau-chaleur' | 'depose-cuve-fioul' | 'audit'
  | 'isolation' | 'fenetres' | 'ventilation' | 'bois-biomasse'
  | 'chauffe-eau-thermodynamique' | 'chauffe-eau-solaire'
  | 'chaudiere-gaz' | 'pac-air-air' | 'photovoltaique';

/** Les trois profils qui peuvent recevoir un forfait par geste. */
export type ProfilAide = Exclude<Profil, 'superieur'>;

/**
 * Ce que MaPrimeRénov' par geste prévoit pour un poste : un des trois cas.
 * - 'aide-seul'         : forfait selon le profil, et plafond de dépense ;
 * - 'ampleur-seulement' : plus aidé seul (depuis `depuis`), mais aidé dans
 *                         une rénovation d'ampleur ;
 * - 'non-eligible'      : ni seul, ni en rénovation d'ampleur.
 *   `depuis` : date de la fin de l'aide (null : jamais aidé, ou pas de
 *   date connue) ; `motif` : la phrase AFFICHÉE au lecteur ; `raison` :
 *   la raison technique, notée pour nous, jamais affichée.
 */
export type CasGeste =
  | { cas: 'aide-seul'; nom: string; forfaits: Record<ProfilAide, number>; plafondDepenseHT: number; condition?: string }
  | { cas: 'ampleur-seulement'; nom: string; depuis: string; precision?: string }
  | { cas: 'non-eligible'; nom: string; depuis: string | null; motif: string; raison: string };

const SORTIE_DU_GESTE = '2026-09-01';

export const mprParGeste: Record<Poste, CasGeste> = {
  // --- Aidés seuls (Anah, guide septembre 2026, p. 14 et 15) ---------------
  'pac-geothermique': {
    cas: 'aide-seul', nom: 'Pompe à chaleur géothermique ou solarothermique',
    forfaits: { 'tres-modeste': 11000, modeste: 9000, intermediaire: 6000 }, plafondDepenseHT: 18000,
  },
  'pac-air-eau': {
    cas: 'aide-seul', nom: 'Pompe à chaleur air/eau',
    forfaits: { 'tres-modeste': 5000, modeste: 4000, intermediaire: 3000 }, plafondDepenseHT: 12000,
  },
  'reseau-chaleur': {
    cas: 'aide-seul', nom: 'Raccordement à un réseau de chaleur ou de froid',
    forfaits: { 'tres-modeste': 1200, modeste: 800, intermediaire: 400 }, plafondDepenseHT: 1800,
  },
  'depose-cuve-fioul': {
    cas: 'aide-seul', nom: 'Dépose d’une cuve à fioul',
    forfaits: { 'tres-modeste': 1200, modeste: 800, intermediaire: 400 }, plafondDepenseHT: 4000,
  },
  audit: {
    cas: 'aide-seul', nom: 'Audit énergétique (hors obligation réglementaire)',
    forfaits: { 'tres-modeste': 500, modeste: 400, intermediaire: 300 }, plafondDepenseHT: 800,
    condition: 'Aidé une seule fois par logement, et seulement si au moins un geste de travaux est réalisé en même temps.',
  },

  // --- Plus aidés seuls depuis le 1er septembre 2026 -------------------------
  isolation: { cas: 'ampleur-seulement', nom: 'Isolation', depuis: SORTIE_DU_GESTE },
  fenetres: { cas: 'ampleur-seulement', nom: 'Fenêtres et menuiseries', depuis: SORTIE_DU_GESTE },
  ventilation: { cas: 'ampleur-seulement', nom: 'Ventilation', depuis: SORTIE_DU_GESTE },
  'bois-biomasse': { cas: 'ampleur-seulement', nom: 'Poêle ou chaudière au bois ou aux granulés', depuis: SORTIE_DU_GESTE },
  'chauffe-eau-thermodynamique': {
    cas: 'ampleur-seulement', nom: 'Chauffe-eau thermodynamique', depuis: SORTIE_DU_GESTE,
    precision: 'Les pompes à chaleur dédiées à l’eau chaude sanitaire sont sorties du parcours par geste.',
  },
  'chauffe-eau-solaire': {
    cas: 'ampleur-seulement', nom: 'Chauffe-eau solaire', depuis: SORTIE_DU_GESTE,
    precision: 'Le solaire thermique et hybride reste aidé par geste en outre-mer.',
  },

  // --- Non éligibles ------------------------------------------------------------
  'chaudiere-gaz': {
    cas: 'non-eligible', nom: 'Chaudière gaz', depuis: '2025-01-01',
    motif: 'La chaudière gaz n’est plus financée par MaPrimeRénov’ depuis le 1er janvier 2025. Un barème qui l’indique encore est périmé.',
    raison: 'Énergie fossile : sortie du parcours par geste au 1er janvier 2025 ; en maison individuelle, exclue aussi de la rénovation d’ampleur depuis le 1er septembre 2026.',
  },
  'pac-air-air': {
    cas: 'non-eligible', nom: 'Climatisation réversible (pompe à chaleur air-air)', depuis: null,
    motif: 'La climatisation réversible n’a jamais été financée par MaPrimeRénov’. Elle peut en revanche bénéficier de la TVA à 5,5 %, sous conditions.',
    raison: 'Jamais inscrite parmi les équipements éligibles à MaPrimeRénov’.',
  },
  photovoltaique: {
    cas: 'non-eligible', nom: 'Panneaux photovoltaïques', depuis: null,
    motif: 'Les panneaux photovoltaïques ne font pas partie des travaux financés par MaPrimeRénov’.',
    raison: 'Production d’électricité : hors du champ de MaPrimeRénov’.',
  },
};

/** Conditions générales du parcours par geste (affichées sous chaque ligne
 *  « aidé seul »). Reprises de l'ancienne aide n° 1, vérifiée le 8 octobre
 *  2026. */
export const mprGesteConditions = [
  'Logement construit depuis au moins 15 ans, occupé en résidence principale.',
  'Travaux réalisés par un professionnel RGE, demande déposée avant les travaux.',
];

/** Droits selon le statut, pour les deux parcours (règle confirmée le 20
 *  octobre 2026 : bailleurs éligibles avec engagement de location, locataires
 *  exclus de MaPrimeRénov' mais pas des CEE ni de la TVA réduite). */
export const mprStatuts: Record<Statut, Regle> = {
  'proprietaire-occupant': { verdict: 'oui', texte: 'Ouvert aux propriétaires occupants.' },
  'proprietaire-bailleur': {
    verdict: 'oui',
    texte: "Ouvert aux propriétaires bailleurs, qui s'engagent à louer le logement en résidence principale pendant au moins 6 ans.",
  },
  locataire: {
    verdict: 'non',
    texte: "Réservé aux propriétaires : en tant que locataire, vous ne pouvez pas en bénéficier. Votre propriétaire, lui, le peut.",
  },
};

/** Écrêtement du parcours par geste. Sources : guide Anah, PDF p. 15 et 26 ;
 *  « MaPrimeRénov' — Le mode d'emploi », Anah, septembre 2026, fiches 01,
 *  02, 03, 05 et 07 (vérifié par Akelia le 20 octobre 2026).
 *  - MaPrimeRénov' + CEE : au plus ce pourcentage du MONTANT TTC DES
 *    TRAVAUX (formulation de l'Anah : « ne pourra pas dépasser 90 % du
 *    montant TTC de vos travaux »), et non de la « dépense éligible » ;
 *    revenus supérieurs : sans objet (aucun droit par geste).
 *  - Toutes aides : le guide ne donne PAS un taux mais une phrase, affichée
 *    telle quelle (`toutesAides`). */
export const ecretementGeste = {
  mprEtCee: { 'tres-modeste': 90, modeste: 75, intermediaire: 60 } satisfies Record<ProfilAide, number>,
  toutesAides: 'Les aides des collectivités peuvent s’ajouter : l’ensemble ne doit pas excéder le montant total des travaux.',
};

/** Calendrier des passoires F et G pour le parcours par geste. */
export const calendrierPassoires = {
  /** Leur exclusion du parcours par geste est repoussée à cette date. */
  exclusionGeste: '2027-12-31',
  /** L'obligation de DPE pour ce parcours est repoussée à cette date. */
  obligationDpe: '2028-01-01',
};

/** MaPrimeRénov' rénovation d'ampleur (guide, PDF p. 17 à 21 ; écrêtement p. 21 et 26). */
export const mprAmpleur = {
  // ⚠️ DEUX SÉRIES À NE JAMAIS CONFONDRE (rappel d'Akelia, 20 octobre
  // 2026) : `taux` est le taux de l'AIDE MaPrimeRénov' (80 / 60 / 45 /
  // 10 %, sur le HT) ; `ecretement` est le PLAFOND TOTAL de toutes les
  // aides (100 / 90 / 80 / 50 %, sur le TTC). Jamais l'un pour l'autre.
  /** TAUX DE L'AIDE : part du montant HT des travaux prise en charge, en %. */
  taux: { 'tres-modeste': 80, modeste: 60, intermediaire: 45, superieur: 10 } satisfies Record<Profil, number>,
  /** Plafonds de dépense éligible HT. */
  plafondsDepenseHT: { deuxClasses: 30000, troisClassesEtPlus: 40000 },
  /** PLAFOND TOTAL toutes aides cumulées, en % du montant TTC des travaux. */
  ecretement: { 'tres-modeste': 100, modeste: 90, intermediaire: 80, superieur: 50 } satisfies Record<Profil, number>,
  /** Conditions d'accès, affichées EN TOUTES LETTRES et précédées de
   *  « sous réserve que votre logement remplisse ces conditions » : le
   *  simulateur ne les vérifie pas. */
  conditions: [
    'Logement de 15 ans ou plus, classé E, F ou G, occupé en résidence principale au moins 8 mois par an.',
    'Un gain d’au moins 2 classes de DPE, avec au moins deux gestes d’isolation.',
    'Un Accompagnateur Rénov’ et un artisan RGE, obligatoires.',
    'En maison individuelle, depuis le 1er septembre 2026 : aucun équipement susceptible d’utiliser des combustibles fossiles installé ou conservé.',
  ],
  nonCumulCee: 'Non cumulable avec les primes CEE : l’Anah en a l’exclusivité et les valorise elle-même.',
  /** Mon Accompagnateur Rénov' : plafond TTC et part prise en charge. */
  accompagnateur: {
    plafondTTC: 2000,
    taux: { 'tres-modeste': 100, modeste: 80, intermediaire: 40, superieur: 20 } satisfies Record<Profil, number>,
  },
};

/**
 * Plafonds de revenu fiscal de référence 2026 (guide, PDF p. 7), par nombre de
 * personnes du foyer : [très modeste, modeste, intermédiaire]. Au-delà du
 * plafond « intermédiaire » : revenus supérieurs. Outre-mer : table hors
 * Île-de-France.
 * Hors Île-de-France : identique au ticket du 20 octobre 2026.
 * Île-de-France : lue dans le guide le 20 octobre 2026.
 */
export interface TablePlafonds {
  /** Foyers de 1 à 5 personnes. */
  parFoyer: [number, number, number][];
  /** À ajouter par personne au-delà de 5. */
  parPersonneEnPlus: [number, number, number];
}

export const plafondsRessources: { annee: number; horsIdf: TablePlafonds; idf: TablePlafonds } = {
  annee: 2026,
  horsIdf: {
    parFoyer: [
      [17363, 22259, 31185],
      [25393, 32553, 45842],
      [30540, 39148, 55196],
      [35676, 45735, 64550],
      [40835, 52348, 73907],
    ],
    parPersonneEnPlus: [5151, 6598, 9357],
  },
  idf: {
    parFoyer: [
      [24031, 29253, 40851],
      [35270, 42933, 60051],
      [42357, 51564, 71846],
      [49455, 60208, 84562],
      [56580, 68877, 96817],
    ],
    parPersonneEnPlus: [7116, 8663, 12257],
  },
};

/** Plafonds [très modeste, modeste, intermédiaire] pour un foyer. */
export function plafondsPour(personnes: number, idf: boolean): [number, number, number] {
  const table = idf ? plafondsRessources.idf : plafondsRessources.horsIdf;
  const n = Math.max(1, Math.round(personnes));
  if (n <= 5) return table.parFoyer[n - 1];
  const base = table.parFoyer[4];
  return [0, 1, 2].map((i) => base[i] + (n - 5) * table.parPersonneEnPlus[i]) as [number, number, number];
}

/** Ce que la question des travaux (et sa sous-question) désigne comme
 *  postes du barème. */
export const postesDesTravaux: Record<Exclude<Travaux, 'chauffage' | 'ne-sait-pas'>, Poste> = {
  isolation: 'isolation',
  fenetres: 'fenetres',
  ventilation: 'ventilation',
  photovoltaique: 'photovoltaique',
  'depose-cuve-fioul': 'depose-cuve-fioul',
  audit: 'audit',
  'reseau-chaleur': 'reseau-chaleur',
};
export const postesDesEquipements: Record<Exclude<Equipement, 'ne-sait-pas'>, Poste> = {
  'pac-air-eau': 'pac-air-eau',
  'pac-geothermique': 'pac-geothermique',
  'pac-air-air': 'pac-air-air',
  'bois-biomasse': 'bois-biomasse',
  'chaudiere-gaz': 'chaudiere-gaz',
  'chauffe-eau-thermodynamique': 'chauffe-eau-thermodynamique',
  'chauffe-eau-solaire': 'chauffe-eau-solaire',
};

/** Cases cochées d'avance pour une page /solutions/… : le poste de la
 *  page, traduit en réponses du simulateur. */
export function preselectionPour(poste: Poste): { travaux: Travaux[]; equipement?: Equipement } {
  const equipement = (Object.entries(postesDesEquipements) as [Equipement, Poste][]).find(([, p]) => p === poste)?.[0];
  if (equipement) return { travaux: ['chauffage'], equipement };
  const travaux = (Object.entries(postesDesTravaux) as [Travaux, Poste][]).find(([, p]) => p === poste)?.[0];
  return { travaux: travaux ? [travaux] : [] };
}

/** Forfait MaPrimeRénov' par geste d'un poste, pour un profil, écrit pour
 *  une tuile de chiffre clé (« 5 000 » et « € »). Les pages /solutions/…
 *  le lisent ICI : aucun montant d'aide en dur dans src/data/solutions/
 *  (règle du 20 octobre 2026). Renvoie undefined si le poste n'ouvre pas de
 *  forfait. */
export function forfaitMprEnChiffres(poste: Poste, profil: ProfilAide): { nombre: string; unite: string } | undefined {
  const cas = mprParGeste[poste];
  if (cas.cas !== 'aide-seul') return undefined;
  return { nombre: new Intl.NumberFormat('fr-FR').format(cas.forfaits[profil]), unite: '€' };
}

/** Sources de MaPrimeRénov', affichées sous le résultat. */
export const sourcesMpr: Source[] = [SOURCE_ANAH, SOURCE_SERVICE_PUBLIC_MPR];

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
export const dateVerificationPage = '2026-10-20';

/** Taux de TVA cités par la page (en %). */
export const tauxTva = {
  reduit: 5.5,
  // AJOUT du 19 octobre 2026 : taux intermédiaire, celui des radiateurs à
  // inertie d'après le texte de la page.
  intermediaire: 10,
};

// -------------------------------------------------------------------------
// PAGES /solutions/… : TUILE D'AIDE ET BANDE DES AIDES (21 octobre 2026)
// -------------------------------------------------------------------------
// Le gabarit des solutions (src/pages/solutions/[slug].astro) ne connaît
// aucune aide : il lit ici, pour le poste de la page, ce qu'il doit écrire.

/** Contenu de la tuile d'aide d'une page solution, selon le cas
 *  MaPrimeRénov' du poste (H2) :
 *  - 'forfait' : forfait par geste des revenus très modestes, en euros ;
 *  - 'ampleur' : rénovation d'ampleur seulement, « jusqu'à » le taux des
 *    revenus très modestes (aucun montant en euros : il dépend des
 *    travaux) ;
 *  - 'non-eligible' : pas de tuile d'aide possible. */
export type TuileAideCalculee =
  | { cas: 'forfait' | 'ampleur'; avant?: string; nombre: string; unite: string; libelle: string; precision: string }
  | { cas: 'non-eligible' };

export function tuileAide(poste: Poste): TuileAideCalculee {
  const cas = mprParGeste[poste];
  if (cas.cas === 'aide-seul') {
    // Plus de « ! » (21 octobre 2026) : un forfait absent est une erreur,
    // jamais une tuile vide.
    const forfait = forfaitMprEnChiffres(poste, 'tres-modeste');
    if (!forfait) throw new Error(`src/data/aides.ts : le poste « ${poste} » est « aide-seul » mais n'a pas de forfait pour les revenus très modestes.`);
    const cee = aidesOuvertes(poste).includes(NOMS_AIDES.cee);
    return { cas: 'forfait', ...forfait, libelle: 'MaPrimeRénov’', precision: `Revenus très modestes.${cee ? ' Prime CEE en plus.' : ''}` };
  }
  if (cas.cas === 'ampleur-seulement')
    return {
      cas: 'ampleur',
      avant: 'jusqu’à',
      nombre: String(mprAmpleur.taux['tres-modeste']),
      unite: '%',
      libelle: 'd’aide en rénovation d’ampleur',
      precision: 'Revenus très modestes. Non cumulable avec les CEE.',
    };
  return { cas: 'non-eligible' };
}

/** Noms des quatre aides citées par la bande des aides des pages solutions. */
export const NOMS_AIDES = {
  mpr: 'MaPrimeRénov’',
  cee: 'la prime CEE',
  ecoPtz: 'l’éco-PTZ',
  // Accesseur (et non valeur calculée à l'import) : le simulateur, qui
  // importe ce fichier, n'embarque pas ce calcul dont il ne se sert pas.
  get tva() {
    return `la TVA à ${String(tauxTva.reduit).replace('.', ',')} %`;
  },
};

/** Aides auxquelles un poste PEUT ouvrir droit (H3), dans l'ordre de
 *  NOMS_AIDES : MaPrimeRénov' (forfait par geste ou rénovation d'ampleur),
 *  puis prime CEE, éco-PTZ et TVA réduite quand leur règle pour ce poste
 *  est « oui » ou « sous conditions ». Une règle « à vérifier » ne compte
 *  PAS : on ne promet pas ce qu'on n'a pas confirmé. La règle lue est celle
 *  de l'équipement si le poste en est un (elle remplace la règle générale
 *  du chauffage), sinon celle des travaux. */
export function aidesOuvertes(poste: Poste): string[] {
  const equipement = (Object.entries(postesDesEquipements) as [Equipement, Poste][]).find(([, p]) => p === poste)?.[0];
  const travaux = (Object.entries(postesDesTravaux) as [Travaux, Poste][]).find(([, p]) => p === poste)?.[0];
  const ouverte = (id: string) => {
    const aide = aidesNationales.find((a) => a.id === id);
    if (!aide) throw new Error(`src/data/aides.ts : aide « ${id} » introuvable.`);
    const regle = (equipement && aide.equipements?.[equipement]) || aide.travaux[equipement ? 'chauffage' : travaux!];
    return regle?.verdict === 'oui' || regle?.verdict === 'sous-conditions';
  };
  return [
    ...(mprParGeste[poste].cas !== 'non-eligible' ? [NOMS_AIDES.mpr] : []),
    ...(ouverte('cee') ? [NOMS_AIDES.cee] : []),
    ...(ouverte('eco-ptz') ? [NOMS_AIDES.ecoPtz] : []),
    ...(ouverte('tva-reduite') ? [NOMS_AIDES.tva] : []),
  ];
}

/** MaPrimeRénov' par geste : le forfait le plus élevé du barème, et le
 *  poste qui le donne (pompe à chaleur géothermique, revenus très
 *  modestes). Lu dans mprParGeste : la page doit TOUJOURS dire de quel
 *  poste et de quel profil il s'agit (ce montant n'est vrai que là). */
export const mprGesteMax = (() => {
  let meilleur = { montant: 0, poste: '' as Poste };
  for (const [poste, cas] of Object.entries(mprParGeste) as [Poste, CasGeste][])
    if (cas.cas === 'aide-seul' && cas.forfaits['tres-modeste'] > meilleur.montant) meilleur = { montant: cas.forfaits['tres-modeste'], poste };
  return meilleur;
})();

/** MaPrimeRénov' rénovation d'ampleur : part maximale du montant HT des
 *  travaux prise en charge, en % (revenus très modestes). Lu dans
 *  mprAmpleur. */
export const mprAmpleurTauxMax = mprAmpleur.taux['tres-modeste'];

// Le montant CEE « mis en avant » sur la page est SUPPRIMÉ depuis le 20
// octobre 2026 : il n'existe aucun barème officiel des CEE en euros.

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
