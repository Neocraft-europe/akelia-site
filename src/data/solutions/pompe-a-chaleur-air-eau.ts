// =========================================================================
// SOLUTION : POMPE À CHALEUR AIR-EAU
// (src/data/solutions/pompe-a-chaleur-air-eau.ts)
// -------------------------------------------------------------------------
// Porté le 19 octobre 2026 depuis https://www.akelia.fr/solutions/pompe-a-chaleur-air-eau
// (Webflow, publié le 7 octobre 2026). Texte d'origine CORRIGÉ (fautes,
// accords, titre « air-air », textes alternatifs) mais NON TRANCHÉ : les
// chiffres qui se contredisent ou que rien ne justifie sont repris tels
// quels et listés dans inventaire-charte.md (« Pages solutions : le
// gabarit »). Ne pas les modifier sans réponse.
// Seuls les textes alternatifs sont rédigés par nous, sans aucun chiffre.
// 20 octobre 2026 : caractéristiques remises en chiffres clés (mêmes
// valeurs, découpées), conditions en liste de contrôle (intitulés du
// ticket), zones de la carte en départements (PROPOSITION À VALIDER, voir
// plus bas).
// Images : src/assets/solutions/pompe-a-chaleur-air-eau/ (reprises de
// l'ancien site, basse définition : voir la question en attente).
// =========================================================================

import type { Solution } from './type';
import entete from '../../assets/solutions/pompe-a-chaleur-air-eau/entete.jpg';
import renovation1 from '../../assets/solutions/pompe-a-chaleur-air-eau/renovation-1-controle.png';
import renovation2 from '../../assets/solutions/pompe-a-chaleur-air-eau/renovation-2-retrait.png';
import renovation3 from '../../assets/solutions/pompe-a-chaleur-air-eau/renovation-3-installation.png';
import renovation4 from '../../assets/solutions/pompe-a-chaleur-air-eau/renovation-4-mise-en-service.png';
import neuf1 from '../../assets/solutions/pompe-a-chaleur-air-eau/neuf-1-etude.png';
import neuf2 from '../../assets/solutions/pompe-a-chaleur-air-eau/neuf-2-reseau.png';
import neuf3 from '../../assets/solutions/pompe-a-chaleur-air-eau/neuf-3-groupe-exterieur.png';
import neuf4 from '../../assets/solutions/pompe-a-chaleur-air-eau/neuf-4-mise-en-service.png';

const PAC_AIR_AIR = '/solutions/climatisation-reversible-pac-air-air';

const solution: Solution = {
  slug: 'pompe-a-chaleur-air-eau',
  nom: 'Pompe à chaleur air-eau',
  nomDefini: 'la pompe à chaleur air-eau',
  possessif: 'ses',
  rubrique: 'Pompes à chaleur',

  // --- En-tête -------------------------------------------------------------
  promesse: 'Votre allié confort !',
  arguments: [
    'Produit 3 à 4 fois plus d’énergie qu’elle n’en consomme',
    'Il n’existe pas de chauffage plus écologique',
    'Polyvalente : chauffage, eau chaude sanitaire et rafraîchissement',
    // 20 octobre 2026 : plus aucun montant d'aide (l'ancien total
    // additionnait des CEE sans barème officiel). Les montants :
    // src/data/aides.ts.
    'Quatre aides cumulables : MaPrimeRénov’, prime CEE, TVA à 5,5 % et éco-PTZ',
  ],
  image: entete,
  imageAlt: 'Unité extérieure d’une pompe à chaleur air-eau fixée sur la façade d’une maison',
  chiffreCle: { valeur: 'Plus de 200 000', libelle: 'installations par an' },

  // --- Tout ce que vous devez savoir ------------------------------------------
  // 20 octobre 2026 (reprise du design) : une phrase de 15 mots au plus par
  // point, COUPÉE dans le texte d'origine (rien d'ajouté). Le détail reste
  // dans « Notre avis ».
  pointsForts: [
    { icone: 'feuille', titre: 'Énergie décarbonée', texte: 'En utilisant les calories de l’air, vous réduisez drastiquement votre empreinte CO₂.' },
    { icone: 'chauffe-eau', titre: 'Solution 3-en-1', texte: 'Elle peut souvent produire votre eau chaude sanitaire et assurer un rafraîchissement par le sol.' },
    { icone: 'chauffage', titre: 'Chauffage « basse consommation »', texte: 'Idéale pour les émetteurs doux, elle offre une chaleur constante et homogène.' },
    { icone: 'avantage', titre: 'Rentabilité immédiate', texte: 'Divisez vos factures par 3 ou 4.' },
  ],
  inconvenients: [
    { icone: 'prix', titre: 'Investissement initial élevé', texte: 'C’est le système le mieux doté en aides, ce qui réduit le reste à charge.' },
    { icone: 'technicien', titre: 'Entretien rigoureux', texte: 'Un entretien tous les deux ans est obligatoire pour préserver le compresseur.' },
    { icone: 'son', titre: 'Nuisances sonores', texte: 'L’unité extérieure doit être placée stratégiquement.' },
    { icone: 'engrenage', titre: 'Réparabilité moyenne', texte: 'En raison du coût des pièces détachées et de leur disponibilité dans le temps.' },
  ],
  // Valeurs de l'ancienne page, découpées sans être recalculées. La tuile
  // « Aides » lit son montant dans le barème (20 octobre 2026).
  // 20 octobre 2026 : « ≃ 90 à 130 » devient « 90–130 » (exemple du
  // ticket) pour tenir sur une ligne.
  caracteristiques: {
    enGrand: [
      { nombre: '90–130', unite: '€/m²', libelle: 'coût d’installation' },
      { nombre: '20–25', unite: 'ans', libelle: 'de durée de vie', precision: 'si elle est entretenue' },
      // TUILE D'AIDE (21 octobre 2026) : montant, libellé et précision lus
      // dans le barème (src/data/aides.ts) par le gabarit, jamais écrits ici.
      { aide: 'maprimerenov' },
      { nombre: '5–6', unite: 'ans', libelle: 'pour la rentabiliser, avec aides', precision: 'sans les aides : ≃ 9 à 10 ans' },
    ],
    autres: [
      // « Indice de réparabilité* » : l'astérisque renvoyait à une note
      // absente de l'ancienne page. Retiré (question en attente).
      { libelle: 'Indice de réparabilité', valeur: '69/100 (réparabilité moyenne)' },
    ],
  },
  performances: {
    efficacite: { valeur: 'A', precision: 'Excellent rendement' },
    impact: { valeur: 'B', precision: 'Lié aux fluides frigorigènes' },
    // 21 octobre 2026 : « +70 % » contredisait « 3 à 4 fois moins » ; le
    // signe était faux, pas le chiffre (décision d'Akelia).
    energie: { mesure: 'economie', valeur: '−70 %', precision: 'd’énergie consommée par rapport à une chaudière' },
    complexite: { note: 2.5, precision: 'Dépend du projet' },
  },
  // Intitulés : ceux du ticket du 20 octobre 2026. Explications : textes
  // d'origine COUPÉS à ce qu'ils ajoutent à l'intitulé, ou supprimés quand
  // ils le répètent (reprise du design, 20 octobre 2026).
  introConditions: 'Pour installer une pompe à chaleur air-eau chez vous, il faut :',
  conditions: [
    // Icônes : src/components/icones-solutions/ (21 octobre 2026).
    { icone: 'BienLogement', condition: 'une maison ou un appartement équipé d’une chaudière', explication: 'Idéal aussi en maison ou appartement neuf.' },
    { icone: 'BienEspace', condition: 'un extérieur et un espace intérieur (cellier, garage)' },
    { icone: 'BienIsolation', condition: 'une isolation moyenne à bonne, au moins deux postes isolés', explication: 'Par exemple fenêtres et combles, pour garantir la rentabilité.' },
    { icone: 'BienReseau', condition: 'des radiateurs à eau ou un plancher chauffant', explication: 'Obligatoire : existants, ou à installer pendant les travaux.' },
  ],
  // ⚠️ DÉPARTEMENTS : PROPOSITION DU 20 OCTOBRE 2026, À VALIDER PAR
  // AKELIA (liste en clair dans inventaire-charte.md, « Pages solutions :
  // carte, lisibilité et mise en page »). Déduite des régions écrites dans
  // la légende, pas de l'ancienne image. Couverture : les 96 départements.
  region: {
    zones: [
      {
        niveau: 1, titre: 'Région optimale', regions: 'Ouest, Centre et Bassin parisien',
        texte: 'Sûrement la meilleure solution, avec un besoin de chauffage relativement important et des hivers tempérés. Rentabilité maximale.',
        departements: [
          '22', '29', '35', '56', // Bretagne
          '44', '49', '53', '72', '85', // Pays de la Loire
          '14', '27', '50', '61', '76', // Normandie
          '18', '28', '36', '37', '41', '45', // Centre-Val de Loire
          '75', '77', '78', '91', '92', '93', '94', '95', // Île-de-France
          '16', '17', '79', '86', // Poitou-Charentes
          '60', // Oise
        ],
      },
      {
        niveau: 2, titre: 'Région intéressante', regions: 'Sud-Ouest, pourtour méditerranéen, vallée du Rhône et Corse',
        texte: `Elle sera très performante dans ces régions. Elle est cependant limitée sur l’aspect climatisation (réservée au plancher chauffant), ce qui peut être une contrainte dans ces régions aux étés de plus en plus chauds. [La PAC air-air peut avoir plus de sens](${PAC_AIR_AIR}).`,
        departements: [
          '09', '24', '31', '32', '33', '40', '46', '47', '64', '65', '81', '82', // Sud-Ouest
          '06', '11', '13', '30', '34', '66', '83', '84', // pourtour méditerranéen
          '07', '26', '69', // vallée du Rhône
          '2A', '2B', // Corse
        ],
      },
      {
        niveau: 3, titre: 'Région à étudier', regions: 'Nord, Nord-Est, Massif central et Alpes',
        texte: 'Très intéressante économiquement et écologiquement, car le besoin de chauffage est important, mais uniquement si le bien est bien isolé. Sinon, les solutions biomasse ou gaz restent pour le moment plus intéressantes.',
        departements: [
          '02', '59', '62', '80', // Nord
          '08', '10', '51', '52', '54', '55', '57', '67', '68', '88', // Grand Est
          '21', '25', '39', '58', '70', '71', '89', '90', // Bourgogne-Franche-Comté
          '03', '12', '15', '19', '23', '42', '43', '48', '63', '87', // Massif central
          '01', '04', '05', '38', '73', '74', // Alpes
        ],
      },
    ],
  },

  // --- Travaux -------------------------------------------------------------------
  parcours: [
    {
      nom: 'Rénovation',
      difficulte: 2.5,
      etapes: [
        { titre: 'Contrôle de l’installation existante', image: renovation1, imageAlt: 'Coupe d’une maison : la chaudière au fioul et le circuit de chauffage existants sont contrôlés' },
        { titre: 'Retrait de l’ancien système', image: renovation2, imageAlt: 'Chaufferie après le démontage de l’ancienne chaudière, avec la cuve à fioul et un diable' },
        { titre: 'Installation et raccordement de la pompe à chaleur', image: renovation3, imageAlt: 'Coupe d’une maison rénovée : la pompe à chaleur air-eau est installée et raccordée au circuit de chauffage' },
        { titre: 'Mise en service et réglages', image: renovation4, imageAlt: 'Unité extérieure de la pompe à chaleur en fonctionnement' },
      ],
    },
    {
      nom: 'Neuf',
      difficulte: 1,
      etapes: [
        { titre: 'Étude thermique et conception des réseaux', image: neuf1, imageAlt: 'Maison neuve en coupe, avec la pompe à chaleur air-eau et son circuit de chauffage' },
        { titre: 'Installation de l’unité intérieure et du réseau de chauffage', image: neuf2, imageAlt: 'Plancher chauffant en cours de pose dans une pièce neuve' },
        { titre: 'Installation du groupe extérieur et raccordements', image: neuf3, imageAlt: 'Groupe extérieur de la pompe à chaleur posé contre la façade et raccordé' },
        { titre: 'Mise en service et réglages', image: neuf4, imageAlt: 'Thermostat d’ambiance réglé sur 20,5 °C' },
      ],
    },
  ],

  // --- L'avis Akelia -------------------------------------------------------------
  // 21 octobre 2026 (troisième passe) : 60 mots au plus. « Grand froid et
  // prix de l'électricité » : texte d'Akelia, mot pour mot. Les deux autres
  // sous-parties : puces complétées depuis le texte de l'ancienne page
  // (Données webflow) quand elles ne se comprenaient plus seules. « La
  // panne principale » : mot d'origine, rétabli (hiérarchie de gravité,
  // pas une fréquence). Plafond porté à 70 mots (passe mobile).
  // 20 octobre 2026 (refonte) : TROIS sous-parties (40 mots au plus à
  // l'époque, 70 aujourd'hui), titres du ticket. Texte d'origine COUPÉ, rien d'ajouté. « Isolation
  // obligatoire » est retiré d'ici : le cas 4 (passoire thermique) le dit
  // déjà. La PAC hybride passe dans le cas 4.
  avis: [
    {
      titre: 'Pourquoi c’est la solution de référence',
      texte: `- **Économique** : elle consomme 4 à 5 fois moins d’énergie que les autres systèmes, en utilisant les calories gratuites de l’air.
- **Écologique** : en France, l’électricité est décarbonée : c’est la référence absolue.
- **Confort** : chaleur homogène, optimale sur plancher chauffant.
- **Neuf** : la solution reine pour répondre aux exigences de la RE2020.`,
    },
    {
      titre: 'Grand froid et prix de l’électricité',
      texte: `Par −20 °C, elle produit encore deux fois ce qu’elle consomme. Les modèles actuels tiennent le grand froid : aucune région française ne lui est fermée.
Si elle paraît moins rentable, c’est la fiscalité, pas la machine. L’électricité est plus taxée que le gaz ou le fioul, un écart qui pourrait se réduire.
La vraie limite n’est pas le climat, c’est l’isolation. Dans une passoire thermique, elle perd tout son intérêt.`,
    },
    {
      titre: 'Réparabilité : peut mieux faire',
      texte: `- **Durée de vie** : 20 à 25 ans, avec un entretien rigoureux.
- **Le point noir, le compresseur** : c’est la panne principale et la pièce la plus coûteuse à remplacer (2 000 à 4 000 €).
- **Pièces détachées** : même les grandes marques ne les garantissent pas au-delà de 10 ans, pour un appareil qui en dure 20.`,
    },
  ],

  // --- Est-elle faite pour chez vous ? ------------------------------------------
  questionPourVous: 'La pompe à chaleur air-eau est-elle faite pour chez vous ?',
  // VERDICTS ET TITRES : fixés par Akelia le 20 octobre 2026 (titres :
  // situations adressées au lecteur). Le cas 3 passe de « Plutôt non » à
  // « Oui, sous conditions » : son texte dit qu'il y a mieux si le budget
  // suit, pas que la PAC air-eau ne marche pas. Le paragraphe de l'avis sur
  // la PAC hybride est versé dans le cas 4.
  cas: [
    {
      verdict: 'oui',
      titre: 'Votre logement est isolé, avec des radiateurs à eau ou un plancher chauffant',
      texte: `Que ce soit pour une construction neuve (RE2020) ou une rénovation thermique réussie, c’est le meilleur choix, à la fois économique et écologique.
- **Rentabilité** : investissement rentabilisé en 9 ou 10 ans, sans aides. Elle apporte une forte plus-value immobilière et un excellent DPE.
- **Autonomie** : couplée à des panneaux photovoltaïques et à une batterie, vous devenez quasi indépendant du réseau électrique.
- **Condition** : un dimensionnement précis par un expert est nécessaire pour garantir le meilleur rendement en région froide.`,
    },
    {
      verdict: 'sous-conditions',
      titre: 'Vous habitez dans le sud, avec des étés très chauds',
      texte: `Si vos hivers sont doux et vos étés caniculaires, la PAC air-eau est pertinente, mais attention au confort d’été :
- **Limite** : le rafraîchissement n’est possible qu’avec un plancher chauffant réversible et une PAC air-eau réversible.
- **L’alternative** : si vous n’avez pas de plancher chauffant, ou si votre logement monte trop en température, une PAC air-air sera souvent plus efficace pour supporter les canicules.`,
    },
    {
      verdict: 'sous-conditions',
      titre: 'Vous habitez une région froide et votre budget le permet',
      texte: `Souvent oubliée, la géothermie est pourtant la solution la plus stable et la plus rentable à long terme.
- **Le point fort** : contrairement à la PAC air-eau, son rendement (COP) reste identique qu’il fasse +10 °C ou −20 °C dehors. Vous ne dépendez pas de la météo. Elle est très intéressante dans les régions aux hivers froids.
- **Contrainte** : étude et investissement initial plus lourds, mais rentabilité record sur quelques années. Consultez [notre page dédiée à la géothermie](/solutions/pac-geothermique).`,
    },
    {
      verdict: 'plutot-non',
      titre: 'Votre logement est une passoire thermique (F ou G)',
      texte: `Notre conseil est toujours le même : isolez d’abord. C’est la seule vraie façon de réduire sa consommation d’énergie et de devenir autonome.
- **Exceptions** : si l’isolation est impossible (copropriété, patrimoine classé…), un artisan Akelia peut étudier une solution spécifique (avec ou sans appoint).
- **La PAC hybride, un « pansement » peu efficace** : nous ne la recommandons que très rarement. Elle évite d’investir dans l’isolation, avec deux énergies, deux abonnements, deux entretiens et un risque de panne doublé.`,
    },
    {
      verdict: 'non',
      titre: 'Vous n’avez ni radiateurs à eau ni plancher chauffant',
      texte: `Si vous souhaitez réduire vos factures en remplaçant, par exemple, des radiateurs électriques peu économes (même les plus modernes), la PAC air-eau n’est pas une solution : elle nécessite un circuit d’eau (radiateurs ou plancher).
- **Solution** : tournez-vous vers la [PAC air-air](${PAC_AIR_AIR}), facile à installer et très rentable également.`,
    },
  ],

  // --- Aides, articles, FAQ ------------------------------------------------------
  equipementSimulateur: 'pac-air-eau',
  motsClesArticles: ['air-eau', 'air/eau', 'pompe à chaleur', 'plancher chauffant', 'loi d’eau'],
  // Vide tant qu'Akelia n'a pas écrit ses questions-réponses (ticket du
  // 19 octobre 2026) : la section et son JSON-LD n'apparaissent pas.
  faq: [],
  seo: {
    titre: 'Pompe à chaleur air-eau : avantages, limites, travaux et aides | Akelia',
    description: 'Pompe à chaleur air-eau : points forts et limites, travaux en rénovation et dans le neuf, régions adaptées et notre avis. Estimez vos aides et trouvez un artisan Akelia près de chez vous.',
  },
};

export default solution;
