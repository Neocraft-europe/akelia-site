// =========================================================================
// DONNÉES DU MENU (src/data/menu.ts)
// -------------------------------------------------------------------------
// Sorties de Header.astro le 19 octobre 2026 : le menu (Header.astro) et
// les pages qui renvoient vers ses rubriques (/qui-sommes-nous, domaines
// d'expertise) lisent les MÊMES adresses. Une adresse se change ici, une
// seule fois.
// =========================================================================

// -------------------------------------------------------------------------
// IMAGES DU MÉGA-MENU
// Bannières 350 × 120 reprises du site Webflow d'origine, rangées dans
// src/assets/menu/. Astro les optimise automatiquement (format, poids).
// Pour changer une image : remplacer le fichier en gardant le même nom.
// -------------------------------------------------------------------------
import imgIsolation from '../assets/menu/isolation.png';
import imgMenuiseries from '../assets/menu/menuiseries.png';
import imgVentilation from '../assets/menu/ventilation.png';
import imgPompesAChaleur from '../assets/menu/pompes-a-chaleur.webp'; // unité extérieure sans marque visible
import imgChaudieres from '../assets/menu/chaudieres.png';
import imgAppoint from '../assets/menu/appoint.png';
import imgEauChaude from '../assets/menu/eau-chaude-sanitaire.png';
import imgProductionElectricite from '../assets/menu/production-electricite.png';
import imgBorneDeRecharge from '../assets/menu/borne-de-recharge.png';
import imgSystemeDeGestion from '../assets/menu/systeme-de-gestion.png';

// -------------------------------------------------------------------------
// MÉGA-MENU DES SOLUTIONS
// Chaque entrée = un bouton du menu principal.
// Chaque groupe = une colonne du panneau déroulant, avec son image
// (champ `image`, facultatif : sans image, l'espace reste vide).
// Les adresses suivent le format /solutions/nom-de-la-solution (repris de
// l'ancien site Webflow). Les liens marqués « page à créer » pointent vers
// une adresse cohérente, mais la page n'existe pas encore.
// -------------------------------------------------------------------------
export const menuSolutions = [
  {
    id: 'isolation',
    titre: 'Isolation et menuiseries',
    groupes: [
      {
        titre: 'Isolation',
        image: imgIsolation,
        liens: [
          { nom: 'Toit et combles', href: '/solutions/isolation-thermique-toiture-comble' },
          { nom: "Isolation par l'intérieur", href: '/solutions/isolation-thermique-par-linterieur-iti' },
          { nom: "Isolation par l'extérieur", href: '/solutions/isolation-thermique-par-l-exterieur-ite' },
        ],
      },
      {
        titre: 'Menuiseries',
        image: imgMenuiseries,
        liens: [
          { nom: 'Fenêtres et volets', href: '/solutions/menuiseries-fenetres-volets' },
        ],
      },
      {
        titre: 'Ventilation',
        image: imgVentilation,
        liens: [
          { nom: 'VMC simple et double flux', href: '/solutions/ventilation-vmc-simple-et-double-flux' },
        ],
      },
    ],
  },
  {
    id: 'chauffage',
    titre: 'Chauffage, climatisation et eau chaude',
    groupes: [
      {
        titre: 'Pompes à chaleur',
        image: imgPompesAChaleur,
        liens: [
          { nom: 'Climatisation réversible', href: '/solutions/climatisation-reversible-pac-air-air' },
          { nom: 'Pompe à chaleur air-eau', href: '/solutions/pompe-a-chaleur-air-eau' },
          { nom: 'Pompe à chaleur géothermique', href: '/solutions/pac-geothermique' },
        ],
      },
      {
        titre: 'Chaudières',
        image: imgChaudieres,
        liens: [
          { nom: 'Chaudière gaz à condensation', href: '/solutions/chaudiere-gaz-condensation' },
          { nom: 'Chaudière bois et pellets', href: '/solutions/chaudiere-biomasse-bois-ou-pellets' },
        ],
      },
      {
        titre: 'Appoint',
        image: imgAppoint,
        liens: [
          { nom: 'Poêle à granulés ou à bois', href: '/solutions/poele-a-granules-ou-a-bois' }, // page à créer
          { nom: 'Radiateurs', href: '/solutions/radiateurs' }, // page à créer
        ],
      },
      {
        titre: 'Eau chaude sanitaire',
        image: imgEauChaude,
        liens: [
          { nom: 'Chauffe-eau électrique', href: '/solutions/chauffe-eau-electrique' }, // page à créer
          { nom: 'Chauffe-eau thermodynamique', href: '/solutions/chauffe-eau-thermodynamique' }, // page à créer
          { nom: 'Chauffe-eau solaire', href: '/solutions/chauffe-eau-solaire' }, // page à créer
        ],
      },
    ],
  },
  {
    id: 'autonomie',
    titre: 'Autonomie énergétique',
    groupes: [
      {
        titre: "Production d'électricité",
        image: imgProductionElectricite,
        liens: [
          { nom: 'Panneaux photovoltaïques', href: '/solutions/panneaux-photovoltaiques' },
        ],
      },
      {
        titre: 'Borne de recharge',
        image: imgBorneDeRecharge,
        liens: [
          { nom: 'Borne de recharge', href: '/solutions/borne-de-recharge' }, // page à créer
        ],
      },
      {
        titre: 'Système de gestion',
        image: imgSystemeDeGestion,
        liens: [
          { nom: 'Batterie', href: '/solutions/batterie' }, // page à créer
          { nom: 'Thermostat et domotique', href: '/solutions/thermostat-et-domotique' }, // page à créer
        ],
      },
    ],
  },
];

// -------------------------------------------------------------------------
// LIENS DIRECTS DU MENU PRINCIPAL (ordinateur)
// Affichés après les 3 entrées déroulantes, sans sous-menu, dans le menu
// ordinateur ET dans le tiroir mobile.
// « Maison autonome » a été retiré : il pointait vers /qui-sommes-nous, déjà
// lié sous un autre nom. Il sera remis quand il aura sa propre page.
// -------------------------------------------------------------------------
export const liensDirects = [
  { nom: 'Rénovation globale', href: '/solutions/renovation-energetique-globale' }, // page à migrer
  // MISE EN AVANT (16 octobre 2026) : fond vert-50, texte vert-600 (5,59:1),
  // graisse 600, coins arrondis comme le badge du Hero. Page à créer.
  { nom: 'Construction neuve', href: '/solutions/construction-neuve', enAvant: true },
];

// -------------------------------------------------------------------------
// LIENS SECONDAIRES (pages d'information)
// -------------------------------------------------------------------------
export const liensSecondaires = [
  { nom: 'Aides rénovation', href: '/aides-renovation' },
  { nom: 'Blog et conseils', href: '/blog' },
  { nom: 'Qui sommes-nous', href: '/qui-sommes-nous' },
];
