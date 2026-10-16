// =========================================================================
// DONNÉES : LES 6 CAS TYPES DE LA PAGE D'ACCUEIL (src/data/cas-types.ts)
// -------------------------------------------------------------------------
// Utilisées par src/components/CasTypes.astro (section « Chaque projet a
// ses spécificités », un onglet par cas).
//
// Refonte complète du 14 octobre 2026 (soir) :
// - Chaque onglet a SA COULEUR DE FOND, appliquée à toute la section
//   (champ `teinte`, couleurs --color-cas-… de src/styles/global.css).
// - Libellé COMPLET (à partir de 1024px) et libellé COURT (en dessous, pour
//   tenir en 2 colonnes).
// - Un paragraphe court, une liste de 2 points, un bouton vers /devis.
// - Le 6e onglet « Changement d'équipement » devient « Modernisation ».
//
// ORIGINE DES TEXTES : libellés, paragraphes, points et boutons FOURNIS le
// 14 octobre 2026, repris mot pour mot (seules les espaces avant « : »
// sont devenues insécables, pour ne jamais passer à la ligne seules).
// Exception (15 octobre 2026) : Modernisation, « le reste de la maison »
// devient « le reste du logement » (l'onglet vaut aussi pour un
// appartement ; titre de la section passé à « Chaque projet… »).
// Textes alternatifs : voir le champ `images`.
//
// Champs :
// - id      : identifiant technique (attributs id du HTML), sans accent.
// - teinte  : nom de la couleur de fond (--color-cas-<teinte>), qui dit
//             aussi si le texte est blanc ou foncé (voir CasTypes.astro).
// - onglet  : libellé complet.
// - court   : libellé court (sous 1024px).
// - titre   : titre du panneau (h3), FOURNI le 15 octobre 2026, repris mot
//             pour mot, ponctuation comprise (certains finissent par un
//             point, d'autres non).
// - texte   : paragraphe.
// - points  : les 2 points de la liste.
// - bouton  : libellé du bouton (lien vers /devis).
// - images  : fichiers de src/assets/illustrations/, par ORDRE DE
//             PRÉFÉRENCE, chacun avec son texte alternatif : le premier
//             fichier présent est affiché ; aucun → emplacement vide.
//             Depuis le 15 octobre 2026, un seul fichier par cas : les
//             6 illustrations demandées sont livrées, les images de
//             secours ont été retirées. Textes alternatifs rédigés le
//             15 octobre 2026 d'après les fichiers livrés.
// =========================================================================

export interface ImageCas {
  fichier: string;
  alt: string;
}

export interface CasType {
  id: string;
  teinte: 'ancien' | 'annees50' | 'annees95' | 'appartement' | 'neuf' | 'modernisation';
  onglet: string;
  court: string;
  titre: string;
  texte: string;
  points: [string, string];
  bouton: string;
  images: ImageCas[];
}

export const casTypes: CasType[] = [
  {
    id: 'bati-ancien',
    teinte: 'ancien',
    onglet: 'Bâti ancien et historique',
    titre: "Préserver le charme, moderniser le confort.",
    court: 'Bâti ancien',
    texte: "Votre maison a du cachet, mais elle exige du sur-mesure. Entre l'humidité, la nécessité de laisser respirer les murs et la complexité des autorisations d'urbanisme, rien n'est simple. Nous maîtrisons ces subtilités :",
    points: ['Choix strict de matériaux perspirants.', 'Accompagnement total sur les démarches administratives.'],
    bouton: 'Demander un audit de mon bâti ancien',
    images: [
      { fichier: 'maisonancienne.png', alt: "Un artisan agenouillé, une scie à la main, à côté d'une pile de panneaux d'isolant, d'un seau d'enduit et d'une truelle." },
    ],
  },
  {
    id: 'annees-50-90',
    teinte: 'annees50',
    onglet: 'Années 50 à 90',
    titre: "De la passoire thermique à l'indépendance énergétique",
    court: 'Années 50-90',
    texte: "Souvent qualifiées de passoires thermiques, ces maisons peu ou pas isolées font exploser vos factures. Notre priorité est de traiter l'enveloppe avant tout le reste.",
    points: ['Identification précise des déperditions de chaleur.', 'Isolation massive pour retrouver un vrai confort.'],
    bouton: 'Demander un audit énergétique',
    images: [
      { fichier: 'annee5090.png', alt: "Un artisan sur un échafaudage reçoit un épais panneau d'isolant que lui tend un collègue resté au sol ; d'autres panneaux sont empilés au pied de l'échafaudage." },
    ],
  },
  {
    id: 'annees-1995-2012',
    teinte: 'annees95',
    onglet: 'Années 1995 à 2012',
    titre: "Moderniser vos équipements pour faire des économies",
    court: 'Années 95-2012',
    texte: "L'isolation de base est là, mais vos équipements vieillissent et consomment trop. L'objectif est d'optimiser le cœur de votre logement avec des systèmes performants :",
    points: ['Installation de pompe à chaleur et VMC de dernière génération.', 'Pose de panneaux photovoltaïques et bornes de recharge.'],
    bouton: "Demander un audit d'optimisation",
    images: [
      { fichier: 'annee9512.png', alt: "Un artisan agenouillé raccorde les tuyaux en cuivre d'une pompe à chaleur extérieure avec une clé, ses caisses à outils posées au sol." },
    ],
  },
  {
    id: 'appartement',
    teinte: 'appartement',
    onglet: 'Appartement',
    titre: "Rénover malin, sans fâcher le syndic.",
    court: 'Appartement',
    texte: "Règlement de copropriété, syndic, manque de place : rénover un appartement impose un cadre très strict. Nous trouvons les solutions techniques pour contourner ces contraintes :",
    points: ['Isolation et aménagement sans perte d\'espace.', 'Intégration discrète des équipements vis-à-vis du voisinage.'],
    bouton: 'Demander une visite technique',
    images: [
      { fichier: 'appartement.png', alt: "Un artisan, tournevis en main, pose la main sur une fenêtre double vitrage neuve, à côté d'un caisson de ventilation compact." },
    ],
  },
  {
    id: 'neuf',
    teinte: 'neuf',
    onglet: 'Construction de maison neuve',
    titre: "Concevoir une maison qui vous rend indépendant",
    court: 'Maison neuve',
    texte: "C'est l'opportunité de viser l'excellence thermique dès le départ. Nous concevons une maison très économe, voire passive, capable de produire sa propre énergie.",
    points: ['Dimensionnement des équipements dès la conception.', "Objectif d'autonomie énergétique : solaire, géothermie."],
    bouton: 'Obtenir une étude pour mon projet neuf',
    images: [
      { fichier: 'maisonneuve.png', alt: "Un artisan et une cliente penchés sur le plan d'une maison étalé sur des tréteaux, entourés de panneaux solaires et d'un panneau d'isolant." },
    ],
  },
  {
    id: 'modernisation',
    teinte: 'modernisation',
    onglet: 'Modernisation',
    titre: "Moderniser intelligemment vos équipements",
    court: 'Modernisation',
    texte: "Moderniser un seul système demande de la précision pour qu'il communique bien avec le reste du logement. Nous vous garantissons le bon choix et une pose experte.",
    points: ['Équipement parfaitement adapté à votre bâti actuel.', "Installation soignée, dans les règles de l'art."],
    bouton: 'Obtenir une étude personnalisée',
    images: [
      { fichier: 'modernisation.png', alt: "Deux artisans au travail : l'un raccorde une borne de recharge électrique, l'autre tient un panneau solaire." },
    ],
  },
];
