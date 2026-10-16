// =========================================================================
// LES 4 ÉTAPES DE LA MÉTHODE (src/data/methode.ts)
// -------------------------------------------------------------------------
// Utilisé par MethodeEtapes.astro (onglets et textes) et MethodeSchema.astro
// (description du schéma pour les lecteurs d'écran). Textes fournis le
// 13 octobre 2026, repris mot pour mot.
//
// - titre, sousTexte : affichés dans l'onglet (colonne de gauche).
// - detail           : affiché sous le schéma quand l'étape est active.
// - teinte, fonce    : couleur de l'étape (variables de global.css).
//   La teinte claire colore le fond de l'onglet actif ; la teinte foncée
//   le filet latéral, la pastille et les éléments que l'étape ajoute au
//   schéma. ⚠️ Changer une couleur ici la change aussi sur le schéma.
// - icone            : tracés SVG sur une grille de 24 × 24, trait 1.5,
//   même style que les icônes des raccourcis du Hero (Hero.astro).
// - schema           : description de l'état du schéma, lue par les
//   lecteurs d'écran à la place du dessin.
// =========================================================================

export interface EtapeMethode {
  id: string;
  titre: string;
  sousTexte: string;
  detail: string;
  teinte: string;
  fonce: string;
  icone: string;
  schema: string;
}

export const etapesMethode: EtapeMethode[] = [
  {
    id: 'audit',
    titre: 'Audit de la situation',
    sousTexte: 'Comprendre avant d’agir',
    detail:
      'Analyser les qualités et les faiblesses de votre habitat pour établir un plan précis, adapté à votre logement et à votre budget.',
    teinte: 'var(--color-bruyere)',
    fonce: 'var(--color-bruyere-fonce)',
    // Maison, loupe posée dessus, règle graduée en bas.
    icone: `
      <path d="M2.5 11 9 5.5l6.5 5.5" />
      <path d="M4 9.8V17h5" />
      <circle cx="15" cy="14" r="4.25" />
      <path d="m18.1 17.1 3.4 3.4" />
      <path d="M13.2 14h3.6M15 12.2v3.6" />
      <path d="M2.5 20.5h10M4.5 20.5V19M7.5 20.5v-1M10.5 20.5V19" />
    `,
    schema:
      'Étape 1, audit : la maison vue en coupe, sans aucun équipement. Des flèches de cotation mesurent la largeur, la hauteur des murs et celle du toit. À gauche, une caméra thermique sur trépied vise le mur. Des hachures signalent les zones où la chaleur s’échappe : le toit et les deux murs.',
  },
  {
    id: 'isoler',
    titre: 'Isoler et ventiler',
    sousTexte: 'Réduire les besoins',
    detail:
      'C’est l’étape la plus importante : moins votre maison perd de chaleur, moins elle a besoin d’énergie. Et une fois le logement rendu étanche, il lui faut une ventilation efficace pour éviter l’humidité.',
    teinte: 'var(--color-argile)',
    fonce: 'var(--color-argile-fonce)',
    // Coupe de paroi : maçonnerie, isolant en zigzag, parement ; flux d'air.
    icone: `
      <path d="M3.5 3.5v17M7.5 3.5v17M12 3.5v17" />
      <path d="m7.5 5.5 4.5 2.25-4.5 2.25 4.5 2.25-4.5 2.25 4.5 2.25-4.5 2.25" />
      <path d="M15 8h5.5M18.5 6l2 2-2 2" />
      <path d="M15 16h3.5a2 2 0 1 0-2-2" />
    `,
    schema:
      'Étape 2, isoler et ventiler : la même maison, avec un isolant épais sur le plancher des combles et sur les murs, par l’extérieur. Une ventilation mécanique (VMC) est posée dans les combles, avec ses gaines vers les pièces et une sortie sur le toit. La caméra thermique et les zones de déperdition ont disparu ; les cotes restent.',
  },
  {
    id: 'produire',
    titre: 'Produire de l’énergie',
    sousTexte: 'Ce que votre toit peut donner',
    detail:
      'Identifier ce que votre logement peut produire — ensoleillement, surface de toiture, orientation — avant de choisir vos équipements.',
    teinte: 'var(--color-lichen)',
    fonce: 'var(--color-lichen-fonce)',
    // Soleil et panneau incliné quadrillé.
    icone: `
      <circle cx="6" cy="6" r="2.5" />
      <path d="M6 1.5v.75M6 9.75v.75M1.5 6h.75M9.75 6h.75M2.8 2.8l.55.55M8.65 8.65l.55.55M2.8 9.2l.55-.55M8.65 3.35l.55-.55" />
      <path d="M9.5 12.5h11.5l-3 8H6.5Z" />
      <path d="M8 16.5h11.5M13.3 12.5l-2.1 8M17.2 12.5l-2.1 8" />
    `,
    schema:
      'Étape 3, produire : l’isolation et la ventilation restent en place. Des panneaux photovoltaïques sont posés sur le pan droit du toit, et des rayons de soleil les atteignent.',
  },
  {
    id: 'equiper',
    titre: 'S’équiper',
    sousTexte: 'Le bon matériel, bien dimensionné',
    detail:
      'Une fois le bien isolé et la production connue, choisir le système adapté : chauffage, thermostat, borne de recharge, batterie, domotique.',
    teinte: 'var(--color-brume)',
    fonce: 'var(--color-brume-fonce)',
    // Unité de pompe à chaleur (ventilateur, grille, plots) et thermostat rond.
    icone: `
      <rect x="2" y="9" width="14" height="10" rx="1.75" />
      <circle cx="7" cy="14" r="2.75" />
      <path d="M11.5 12h2M11.5 14h2M11.5 16h2M5 19v1.5M13 19v1.5" />
      <circle cx="19" cy="6" r="3.25" />
      <path d="m19 6 1.4-1.4" />
    `,
    schema:
      'Étape 4, s’équiper : les cotes, l’isolation, la ventilation et les panneaux sont conservés. S’ajoutent une pompe à chaleur, avec son unité extérieure posée à droite de la maison et un radiateur au rez-de-chaussée, un thermostat sur le mur du séjour et une borne de recharge au bout du terrain.',
  },
];
