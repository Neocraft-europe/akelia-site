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
// Seuls « En bref » et les textes alternatifs sont rédigés par nous, à
// partir du contenu de la page, sans aucun chiffre.
// Images : src/assets/solutions/pompe-a-chaleur-air-eau/ (reprises de
// l'ancien site, basse définition : voir la question en attente).
// =========================================================================

import type { Solution } from './type';
import entete from '../../assets/solutions/pompe-a-chaleur-air-eau/entete.jpg';
import carte from '../../assets/solutions/pompe-a-chaleur-air-eau/carte-regions.png';
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
  rubrique: 'Pompes à chaleur',

  // --- En-tête -------------------------------------------------------------
  promesse: 'Votre allié confort !',
  arguments: [
    'Produit 3 à 4 fois plus d’énergie qu’elle n’en consomme',
    'Il n’existe pas de chauffage plus écologique',
    'Polyvalente : chauffage, eau chaude sanitaire et rafraîchissement',
    'Une des solutions les plus financées : plus de 11 000 € d’aides',
  ],
  image: entete,
  imageAlt: 'Unité extérieure d’une pompe à chaleur air-eau fixée sur la façade d’une maison',
  chiffreCle: { valeur: 'Plus de 200 000', libelle: 'installations par an' },

  // --- En bref (rédigé à partir de la page, sans chiffre) -------------------
  enBref: [
    '**Le principe** : elle capte les calories de l’air extérieur pour chauffer l’eau de vos radiateurs ou de votre plancher chauffant, et souvent votre eau chaude sanitaire.',
    '**Pour quel logement** : moyennement à bien isolé, équipé de radiateurs à eau ou d’un plancher chauffant (ou prêt à l’être), avec de la place dehors et dedans.',
    '**Ses atouts** : une énergie décarbonée, une chaleur douce et homogène, et l’une des solutions les plus aidées.',
    '**Ses limites** : un investissement de départ élevé, un entretien obligatoire tous les deux ans, et une unité extérieure à placer avec soin à cause du bruit.',
    '**Notre avis** : la solution de référence pour remplacer une chaudière, à condition d’isoler d’abord. Sans radiateurs à eau, regardez plutôt la PAC air-air.',
  ],

  // --- Tout ce que vous devez savoir ------------------------------------------
  pointsForts: [
    { icone: 'feuille', titre: 'Énergie décarbonée', texte: 'En utilisant les calories de l’air, vous réduisez drastiquement votre empreinte CO₂ par rapport aux autres solutions (gaz, fioul, biomasse).' },
    { icone: 'chauffe-eau', titre: 'Solution 3-en-1', texte: 'Au-delà du chauffage, elle peut souvent produire votre eau chaude sanitaire (ECS) et assurer un rafraîchissement par le sol en été.' },
    { icone: 'chauffage', titre: 'Chauffage « basse consommation »', texte: 'Idéale pour les émetteurs doux (plancher chauffant ou radiateurs basse température), elle offre une chaleur constante et homogène.' },
    { icone: 'avantage', titre: 'Rentabilité immédiate', texte: 'Divisez vos factures par 3 ou 4. C’est l’un des meilleurs rendements du marché pour remplacer un chauffage central fossile.' },
  ],
  inconvenients: [
    { icone: 'prix', titre: 'Investissement initial élevé', texte: 'Le coût est important, proche des solutions biomasse. Cependant, c’est le système le mieux doté en aides, ce qui réduit le reste à charge.' },
    { icone: 'technicien', titre: 'Entretien rigoureux', texte: 'Un entretien tous les deux ans est obligatoire pour préserver le compresseur et garantir une durée de vie de 20 à 25 ans.' },
    { icone: 'son', titre: 'Nuisances sonores', texte: 'L’unité extérieure doit être placée stratégiquement. Le choix d’un modèle silencieux et une pose sur plots antivibratiles sont essentiels pour le voisinage.' },
    { icone: 'engrenage', titre: 'Réparabilité moyenne', texte: 'Étant un produit technologique, sa réparabilité est moyenne, notamment en raison du coût des pièces détachées et de leur disponibilité dans le temps.' },
  ],
  caracteristiques: [
    { libelle: 'Durée de vie moyenne', valeur: '≃ 20 à 25 ans (si entretenue)' },
    { libelle: 'Coût d’installation', valeur: '≃ 90 à 130 € / m²' },
    { libelle: 'Aides', valeur: 'CEE ≃ 6 500 €\nMaPrimeRénov’ ≃ 5 000 €' },
    // « Indice de réparabilité* » : l'astérisque renvoyait à une note
    // absente de l'ancienne page. Retiré (question en attente).
    { libelle: 'Indice de réparabilité', valeur: '69/100 (réparabilité moyenne)' },
    { libelle: 'Temps moyen pour rentrer dans ses frais', valeur: 'Avec aides ≃ 5 à 6 ans\nSans aides ≃ 9 à 10 ans' },
  ],
  performances: {
    efficacite: { valeur: 'A', precision: 'Excellent rendement' },
    impact: { valeur: 'B', precision: 'Lié aux fluides frigorigènes' },
    economieEnergie: { valeur: '+70 %', precision: '3 à 4 fois moins d’énergie consommée' },
    complexite: { valeur: '2,5 / 5', precision: 'Dépend du projet' },
  },
  adapteAuBien: [
    { icone: 'maison', titre: 'Logement', texte: 'Idéal en maison ou appartement neuf, ou qui possède une chaudière.' },
    { icone: 'plan', titre: 'Espace disponible', texte: 'Nécessite un espace extérieur (balcon, jardin) et un espace intérieur (cellier, garage).' },
    { icone: 'isolation', titre: 'Isolation', texte: 'Moyenne à bonne. Au moins deux éléments isolés (par exemple fenêtres et combles) pour garantir la rentabilité.' },
    { icone: 'chauffage', titre: 'Réseau hydraulique', texte: 'Obligatoire. Vous devez posséder ou prévoir des radiateurs à eau ou un plancher chauffant.' },
  ],
  // Couleurs relevées sur la carte (légende de l'ancienne page : orange =
  // optimale, rouge = intéressante, vert = à étudier). Régions lues sur la
  // carte.
  region: {
    carte,
    carteAlt: 'Carte de France des régions adaptées à la pompe à chaleur air-eau. En orange, région optimale : l’Ouest, le Centre et le Bassin parisien. En rouge, région intéressante : le Sud-Ouest, le pourtour méditerranéen, la vallée du Rhône et la Corse. En vert, région à étudier : le Nord, le Nord-Est, le Massif central et les Alpes.',
    zones: [
      { niveau: 'optimale', couleur: '#f9ac00', titre: 'Région optimale', regions: 'Ouest, Centre et Bassin parisien', texte: 'Sûrement la meilleure solution, avec un besoin de chauffage relativement important et des hivers tempérés. Rentabilité maximale.' },
      { niveau: 'interessante', couleur: '#ff2600', titre: 'Région intéressante', regions: 'Sud-Ouest, pourtour méditerranéen, vallée du Rhône et Corse', texte: `Elle sera très performante dans ces régions. Elle est cependant limitée sur l’aspect climatisation (réservée au plancher chauffant), ce qui peut être une contrainte dans ces régions aux étés de plus en plus chauds. [La PAC air-air peut avoir plus de sens](${PAC_AIR_AIR}).` },
      { niveau: 'a-etudier', couleur: '#6ca651', titre: 'Région à étudier', regions: 'Nord, Nord-Est, Massif central et Alpes', texte: 'Très intéressante économiquement et écologiquement, car le besoin de chauffage est important, mais uniquement si le bien est bien isolé. Sinon, les solutions biomasse ou gaz restent pour le moment plus intéressantes.' },
    ],
  },

  // --- Travaux -------------------------------------------------------------------
  parcours: [
    {
      nom: 'Rénovation',
      difficulte: 2.5,
      difficulteTexte: 'Moyen',
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
      difficulteTexte: 'Simple',
      etapes: [
        { titre: 'Étude thermique et conception des réseaux', image: neuf1, imageAlt: 'Maison neuve en coupe, avec la pompe à chaleur air-eau et son circuit de chauffage' },
        { titre: 'Installation de l’unité intérieure et du réseau de chauffage', image: neuf2, imageAlt: 'Plancher chauffant en cours de pose dans une pièce neuve' },
        { titre: 'Installation du groupe extérieur et raccordements', image: neuf3, imageAlt: 'Groupe extérieur de la pompe à chaleur posé contre la façade et raccordé' },
        { titre: 'Mise en service et réglages', image: neuf4, imageAlt: 'Thermostat d’ambiance réglé sur 20,5 °C' },
      ],
    },
  ],

  // --- Notre avis --------------------------------------------------------------
  avis: [
    {
      titre: 'Pourquoi c’est la solution de référence ?',
      texte: `La pompe à chaleur air-eau est aujourd’hui l’une des meilleures solutions du marché :
- **Économique** : elle consomme 4 à 5 fois moins d’énergie que les autres systèmes en utilisant les calories gratuites de l’air.
- **Écologique** : en France, grâce à l’électricité décarbonée, c’est la référence absolue. Vous ne trouverez tout simplement pas mieux.
- **Confort et polyvalence** : chaleur homogène (optimale sur plancher chauffant). Elle permet également de produire l’eau chaude sanitaire, et certains modèles permettent un rafraîchissement l’été.
- **Le chauffage du futur** : la tendance est à privilégier l’électricité (taxes, fiscalité, aides…) et son développement (énergies renouvelables, nucléaire…), au détriment des autres sources d’énergie, dont les prix pourraient augmenter.
- **Le standard de la construction neuve** : c’est la solution reine pour répondre aux exigences de la RE2020.`,
    },
    {
      titre: 'Isolation, prix de l’électricité et grand froid',
      texte: `- **Isolation obligatoire** : une PAC fonctionne extrêmement bien dans un logement isolé. Dans une passoire thermique, elle perd tout son intérêt.
- **Le paradoxe du prix** : même par grand froid, la PAC produit 2 fois plus qu’elle ne consomme. Si elle paraît parfois moins rentable que d’autres solutions, c’est uniquement parce que l’électricité est actuellement deux fois plus chère, notamment à cause de taxes plus importantes. Cela pourrait évoluer en faveur de l’électricité dans un avenir proche.
- **Pertinente même par grand froid** : les modèles actuels sont capables de restituer des COP de 2 même par grand froid (−20 °C). Il n’y a donc aucune région en France où une pompe à chaleur n’est pas concurrentielle face aux autres solutions. La seule limite est la qualité de l’isolation de votre logement.`,
    },
    {
      titre: 'PAC hybride : un « pansement » peu efficace',
      texte: `Nous ne recommandons que très rarement la PAC hybride. Pour nous, c’est un simple pansement pour éviter d’investir dans l’isolation.
- **Double contrainte** : deux énergies, deux abonnements, deux entretiens et un risque de panne doublé.
- **Notre conseil** : l’isolation sera toujours un meilleur investissement. Si cela reste trop complexe, il faudra une étude approfondie pour trancher entre une PAC (classique ou hybride), la biomasse ou une autre solution.`,
    },
    {
      titre: 'Réparabilité : peut mieux faire',
      texte: `- **Durée de vie** : très bonne (20 à 25 ans), à condition d’un entretien rigoureux.
- **Le point noir, le compresseur** : c’est la panne principale et la pièce la plus coûteuse à remplacer (2 000 à 4 000 € en moyenne).
- **Pièces détachées** : il est regrettable que même les grandes marques ne garantissent pas la disponibilité des pièces au-delà de 10 ans, pour des appareils qui durent 20 ans et coûtent une dizaine de milliers d’euros. C’est une réelle limite du système.`,
    },
  ],

  // --- Est-elle faite pour chez vous ? ------------------------------------------
  questionPourVous: 'La pompe à chaleur air-eau est-elle faite pour chez vous ?',
  introPourVous: 'Le choix d’une PAC air-eau dépend avant tout de votre isolation, de votre système de diffusion actuel (radiateurs ou plancher) et de votre besoin en confort d’été.',
  cas: [
    {
      numero: 1,
      titre: 'Logement isolé avec émetteurs hydrauliques (plancher chauffant ou radiateurs)',
      texte: `Que ce soit pour une construction neuve (RE2020) ou une rénovation thermique réussie, c’est le meilleur choix, à la fois économique et écologique.
- **Rentabilité** : investissement rentabilisé en 9 ou 10 ans, sans aides. Elle apporte une forte plus-value immobilière et un excellent DPE.
- **Autonomie** : couplée à des panneaux photovoltaïques et à une batterie, vous devenez quasi indépendant du réseau électrique.
- **Condition** : un dimensionnement précis par un expert est nécessaire pour garantir le meilleur rendement en région froide.`,
    },
    {
      numero: 2,
      titre: 'Régions chaudes (sud de la France)',
      texte: `Si vos hivers sont doux et vos étés caniculaires, la PAC air-eau est pertinente, mais attention au confort d’été :
- **Limite** : le rafraîchissement n’est possible qu’avec un plancher chauffant réversible et une PAC air-eau réversible.
- **L’alternative** : si vous n’avez pas de plancher chauffant, ou si votre logement monte trop en température, une PAC air-air sera souvent plus efficace pour supporter les canicules.`,
    },
    {
      numero: 3,
      titre: 'Régions froides et budget disponible : optez pour la géothermie',
      texte: `Souvent oubliée, la géothermie est pourtant la solution la plus stable et la plus rentable à long terme.
- **Le point fort** : contrairement à la PAC air-eau, son rendement (COP) reste identique qu’il fasse +10 °C ou −20 °C dehors. Vous ne dépendez pas de la météo. Elle est très intéressante dans les régions aux hivers froids.
- **Contrainte** : étude et investissement initial plus lourds, mais rentabilité record sur quelques années. Consultez [notre page dédiée à la géothermie](/solutions/pac-geothermique).`,
    },
    {
      numero: 4,
      titre: 'Passoires thermiques',
      texte: `Notre conseil est toujours le même : isolez d’abord. C’est la seule vraie façon de réduire sa consommation d’énergie et de devenir autonome.
- **Exceptions** : si l’isolation est impossible (copropriété, patrimoine classé…), un artisan Akelia peut étudier une solution spécifique (avec ou sans appoint).`,
    },
    {
      numero: 5,
      titre: 'Logements sans émetteurs hydrauliques (radiateurs électriques, par exemple)',
      texte: `Si vous souhaitez réduire vos factures en remplaçant, par exemple, des radiateurs électriques peu économes (même les plus modernes), la PAC air-eau n’est pas une solution : elle nécessite un circuit d’eau (radiateurs ou plancher).
- **Solution** : tournez-vous vers la [PAC air-air](${PAC_AIR_AIR}), facile à installer et très rentable également.`,
    },
  ],

  // --- Aides, articles, FAQ ------------------------------------------------------
  equipementSimulateur: 'chauffage',
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
