// =========================================================================
// LOGIQUE DU SIMULATEUR D'AIDES (src/scripts/simulateur-aides.ts)
// -------------------------------------------------------------------------
// Calcul et affichage du résultat. Exécuté uniquement dans le navigateur du
// visiteur : les réponses au simulateur ne sont ni envoyées ni enregistrées
// (pas de serveur, pas de cookie, pas de stockage).
// Les autres scripts du simulateur :
// - simulateur-etapes.ts     : une question à la fois, barre de progression ;
// - simulateur-estimation.ts : formulaire « Obtenir une estimation précise »
//   (le SEUL envoi de données, et seulement si la personne le remplit).
//
// Ce fichier ne contient AUCUN montant ni aucune règle d'éligibilité :
// tout vient de src/data/aides.ts. Pour changer un chiffre ou une phrase,
// c'est ce fichier-là qu'il faut modifier.
//
// Ce fichier fournit :
// - departementDepuisCodePostal : le département à partir du code postal ;
// - estEnIleDeFrance, tranchesDeRevenus : les quatre tranches de revenu
//   fiscal de référence du foyer (question 3) ;
// - evaluerAide : le verdict d'une aide (CEE, Éco-PTZ, TVA) selon le
//   statut et les travaux ;
// - lignesMaPrimeRenov : MaPrimeRénov', UNE LIGNE PAR POSTE choisi, dans
//   l'un des trois cas (aidé seul / rénovation d'ampleur seulement / non
//   éligible), plus la ligne de la rénovation d'ampleur (20 octobre 2026) ;
// - construireResultat : le bloc « Votre résultat » à afficher.
// =========================================================================

import {
  aidesNationales,
  calendrierPassoires,
  departements,
  ecretementGeste,
  mentionObligatoire,
  mprAmpleur,
  mprGesteConditions,
  mprParGeste,
  mprStatuts,
  noteOutreMer,
  plafondsPour,
  postesDesEquipements,
  postesDesTravaux,
  regions,
  textesDepartement,
  textesRegion,
  type AideNationale,
  type Departement,
  type Equipement,
  type Poste,
  type Profil,
  type Regle,
  type Statut,
  type StatutRegion,
  type Travaux,
  type Verdict,
} from '../data/aides';

// -------------------------------------------------------------------------
// LIBELLÉS ET STYLES DES VERDICTS
// Le verdict est toujours écrit en toutes lettres (jamais signalé par la
// seule couleur). Couleurs de la charte uniquement.
// -------------------------------------------------------------------------
const STYLE_VERDICT: Record<Verdict, { libelle: string; classes: string }> = {
  oui: { libelle: 'Oui', classes: 'border-succes-600 bg-succes-50' },
  'sous-conditions': { libelle: 'Sous conditions', classes: 'border-action-500 bg-action-50' },
  'a-verifier': { libelle: 'À vérifier', classes: 'border-nuit-700 bg-creme' },
  non: { libelle: 'Non', classes: 'border-creme-fonce bg-creme' },
};

/** Ordre de préférence quand plusieurs travaux sont cochés. */
const RANG_VERDICT: Record<Verdict, number> = { oui: 3, 'sous-conditions': 2, 'a-verifier': 1, non: 0 };

const formatEuros = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });

// -------------------------------------------------------------------------
// CODE POSTAL → DÉPARTEMENT
// - Métropole : les 2 premiers chiffres (01 à 95).
// - Corse : 200xx et 201xx → 2A (Corse-du-Sud), 202xx à 206xx → 2B.
// - Outre-mer : les 3 premiers chiffres (971 à 976).
// Renvoie null si le code ne correspond à aucun département.
// -------------------------------------------------------------------------
export function departementDepuisCodePostal(codePostal: string): Departement | null {
  if (!/^\d{5}$/.test(codePostal)) return null;
  let numero = codePostal.slice(0, 2);
  if (numero === '20') numero = Number(codePostal.slice(2, 3)) <= 1 ? '2A' : '2B';
  if (numero === '97') numero = codePostal.slice(0, 3);
  return departements.find((d) => d.numero === numero) ?? null;
}

// -------------------------------------------------------------------------
// FOYER ET REVENUS (question 3, 20 octobre 2026)
// Les plafonds dépendent du nombre de personnes et de l'Île-de-France
// (d'après le code postal). Outre-mer : table hors Île-de-France.
// -------------------------------------------------------------------------
export const estEnIleDeFrance = (departement: Departement) => departement.region === 'ile-de-france';

const formatNombre = new Intl.NumberFormat('fr-FR', { maximumFractionDigits: 0 });
const euro = (montant: number) => `${formatNombre.format(montant)} €`;

/** Les quatre tranches de revenu fiscal de référence, en toutes lettres
 *  (« entre 22 260 € et 31 185 € »), pour le foyer saisi. */
export function tranchesDeRevenus(personnes: number, idf: boolean): Record<Profil, string> {
  const [tresModeste, modeste, intermediaire] = plafondsPour(personnes, idf);
  return {
    'tres-modeste': `jusqu’à ${euro(tresModeste)}`,
    modeste: `entre ${euro(tresModeste + 1)} et ${euro(modeste)}`,
    intermediaire: `entre ${euro(modeste + 1)} et ${euro(intermediaire)}`,
    superieur: `plus de ${euro(intermediaire)}`,
  };
}

/** Libellé du profil dans les phrases du résultat. */
const LIBELLE_PROFIL: Record<Profil, string> = {
  'tres-modeste': 'revenus très modestes',
  modeste: 'revenus modestes',
  intermediaire: 'revenus intermédiaires',
  superieur: 'revenus supérieurs',
};

const dateLongue = (iso: string) =>
  new Intl.DateTimeFormat('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(`${iso}T00:00:00Z`))
    .replace(/^1 /, '1er ');

// -------------------------------------------------------------------------
// ÉVALUATION D'UNE AIDE
// 1. Si le statut est exclu (verdict 'non' pour ce statut), l'aide est
//    refusée, avec l'explication du statut.
// 2. Sinon, on retient la règle la plus favorable parmi les travaux cochés
//    (« oui » avant « sous conditions » avant « à vérifier » avant « non »,
//    puis le montant le plus élevé).
// 3. Si le statut est seulement « sous conditions » (par exemple la prime
//    CEE pour un locataire), un « oui » devient « sous conditions ».
// -------------------------------------------------------------------------
export interface Evaluation {
  verdict: Verdict;
  texte: string;
  montantMax?: number;
  precisionStatut?: string;
}

export function evaluerAide(aide: AideNationale, statut: Statut, travaux: Travaux[], equipement?: Equipement): Evaluation {
  const regleStatut = aide.statuts[statut];
  if (regleStatut.verdict === 'non') return { verdict: 'non', texte: regleStatut.texte };

  // « Chauffage » : la règle de l'équipement choisi, s'il en a une.
  const regles: Regle[] = travaux.map((t) => (t === 'chauffage' && equipement && aide.equipements?.[equipement]) || aide.travaux[t]);
  const meilleure = regles.reduce((a, b) => {
    if (RANG_VERDICT[b.verdict] !== RANG_VERDICT[a.verdict]) return RANG_VERDICT[b.verdict] > RANG_VERDICT[a.verdict] ? b : a;
    return (b.montantMax ?? 0) > (a.montantMax ?? 0) ? b : a;
  });

  let verdict = meilleure.verdict;
  if (regleStatut.verdict === 'sous-conditions' && verdict === 'oui') verdict = 'sous-conditions';

  return {
    verdict,
    texte: meilleure.texte,
    montantMax: verdict === 'non' ? undefined : meilleure.montantMax,
    precisionStatut: regleStatut.texte,
  };
}

// -------------------------------------------------------------------------
// CONSTRUCTION DE L'AFFICHAGE DU RÉSULTAT
// Les éléments sont créés un par un (createElement + textContent) : aucun
// texte n'est interprété comme du HTML.
//
// ORDRE (demandé) :
// 1. la mention « Estimation indicative… » (sans renvoi vers un service
//    externe : le seul appel à l'action est le bouton du point 2) ;
// 2. le bouton « Obtenir vos aides réelles » (unique, taille normale) ;
// 3. la liste des aides, en LIGNES DÉPLIABLES COMPACTES :
//    - aides nationales (avec montant), puis aide régionale et aide
//      départementale (oui / non / à vérifier, JAMAIS de montant) ;
//    - chaque ligne : nom, verdict, montant éventuel, flèche ;
//    - tout est fermé au départ ; ouvrir une ligne referme celle qui était
//      ouverte (une seule ouverte à la fois).
// Titres : « Votre résultat » (h3), puis « Aides nationales » et « Aides de
// votre région et de votre département » (h4).
// -------------------------------------------------------------------------
function el<K extends keyof HTMLElementTagNameMap>(balise: K, classes = '', texte?: string) {
  const element = document.createElement(balise);
  if (classes) element.className = classes;
  if (texte !== undefined) element.textContent = texte;
  return element;
}

/** Groupe des lignes dépliables : un seul nom pour toutes, pour que le
 *  navigateur n'en garde qu'une ouverte (attribut « name » des <details>). */
const NOM_GROUPE_LIGNES = 'simulateur-aides';

/** Contenu d'une ligne dépliable. */
interface Ligne {
  nom: string;
  verdict: Verdict;
  montantMax?: number;
  /** À la place d'un montant : « jusqu'à 80 % des travaux » (rénovation
   *  d'ampleur, qui n'a pas de forfait). */
  mention?: string;
  /** Paragraphes affichés une fois la ligne dépliée. */
  explications: string[];
  /** Liste à puces facultative (conditions principales). */
  conditions?: string[];
  /** Paragraphes affichés APRÈS la liste des conditions. */
  suite?: string[];
}

/**
 * UNE ligne dépliable : rectangle compact (bordure de la couleur du verdict).
 * Ligne fermée : [nom] [verdict + montant] [flèche], 48px de haut minimum.
 */
function ligneDepliable(ligne: Ligne) {
  const style = STYLE_VERDICT[ligne.verdict];
  const li = el('li', `rounded-bloc border-2 ${style.classes}`);
  const details = el('details', 'group');
  details.setAttribute('name', NOM_GROUPE_LIGNES);
  details.dataset.ligneAide = '';

  const resume = el(
    'summary',
    'grid min-h-12 cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-x-3 px-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nuit-900 [&::-webkit-details-marker]:hidden',
  );
  resume.append(el('span', 'text-corps leading-snug font-semibold text-texte', ligne.nom));
  const droite = el('span', 'flex flex-col items-end text-right leading-tight');
  droite.append(el('span', 'text-corps leading-tight font-bold text-texte', style.libelle));
  if (ligne.montantMax) {
    droite.append(el('span', 'text-corps leading-tight font-bold whitespace-nowrap text-texte', `jusqu'à ${formatEuros.format(ligne.montantMax)}`));
  } else if (ligne.mention) {
    droite.append(el('span', 'text-corps leading-tight font-bold whitespace-nowrap text-texte', ligne.mention));
  }
  resume.append(droite);
  // Flèche : pivote quand la ligne est ouverte
  const fleche = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  fleche.setAttribute('viewBox', '0 0 24 24');
  fleche.setAttribute('fill', 'none');
  fleche.setAttribute('stroke', 'currentColor');
  fleche.setAttribute('stroke-width', '2.5');
  fleche.setAttribute('aria-hidden', 'true');
  fleche.setAttribute('class', 'size-5 shrink-0 text-nuit-900 transition-transform group-open:rotate-180 motion-reduce:transition-none');
  const trait = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  trait.setAttribute('d', 'M6 9l6 6 6-6');
  trait.setAttribute('stroke-linecap', 'round');
  trait.setAttribute('stroke-linejoin', 'round');
  fleche.append(trait);
  resume.append(fleche);
  details.append(resume);

  const contenu = el('div', 'space-y-2 border-t border-creme-fonce px-3 py-3');
  ligne.explications.forEach((texte) => contenu.append(el('p', 'text-corps text-texte', texte)));
  if (ligne.conditions?.length) {
    const liste = el('ul', 'list-disc space-y-1 pl-5 text-corps text-texte');
    ligne.conditions.forEach((c) => liste.append(el('li', '', c)));
    contenu.append(liste);
  }
  ligne.suite?.forEach((texte) => contenu.append(el('p', 'text-corps text-texte', texte)));
  details.append(contenu);
  li.append(details);
  return li;
}

/** Les réponses au simulateur. */
export interface Reponses {
  statut: Statut;
  departement: Departement;
  personnes: number;
  profil: Profil;
  travaux: Travaux[];
  /** Réponse à « Quel équipement ? » (seulement si « Chauffage » est coché). */
  equipement?: Equipement;
}

/** Postes forfaitaires du barème (les seuls « aidés seuls »). */
const postesForfaitaires = (Object.keys(mprParGeste) as Poste[]).filter((p) => mprParGeste[p].cas === 'aide-seul');

/**
 * Les postes du barème désignés par les réponses.
 * - « Je ne sais pas encore » (travaux) : les postes encore aidés seuls ;
 * - Chauffage, « Je ne sais pas encore » (équipement) : les deux
 *   chauffages qui ouvrent un forfait, et une ligne qui renvoie au reste
 *   (`autresChauffages`).
 */
export function postesChoisis(travaux: Travaux[], equipement?: Equipement): { postes: Poste[]; autresChauffages: boolean } {
  if (travaux.includes('ne-sait-pas')) return { postes: postesForfaitaires, autresChauffages: false };
  const postes: Poste[] = [];
  let autresChauffages = false;
  for (const t of travaux) {
    if (t === 'ne-sait-pas') continue;
    if (t !== 'chauffage') postes.push(postesDesTravaux[t]);
    else if (equipement && equipement !== 'ne-sait-pas') postes.push(postesDesEquipements[equipement]);
    else {
      postes.push(...(Object.values(postesDesEquipements) as Poste[]).filter((p) => mprParGeste[p].cas === 'aide-seul'));
      autresChauffages = true;
    }
  }
  return { postes: [...new Set(postes)], autresChauffages };
}

const NOM_AMPLEUR = 'MaPrimeRénov’ : rénovation d’ampleur';

/** Une ligne MaPrimeRénov' pour un poste : l'un des trois cas. */
function ligneGeste(poste: Poste, profil: Profil, precisions: string[]): Ligne {
  const cas = mprParGeste[poste];
  const nom = `MaPrimeRénov’ : ${cas.nom}`;
  if (cas.cas === 'non-eligible') return { nom, verdict: 'non', explications: [cas.motif] };
  if (cas.cas === 'ampleur-seulement') {
    return {
      nom,
      verdict: 'sous-conditions',
      explications: [
        `Plus aidé seul par MaPrimeRénov’ depuis le ${dateLongue(cas.depuis)}.`,
        ...(cas.precision ? [cas.precision] : []),
        `Il reste aidé dans une rénovation d’ampleur, sans montant forfaitaire : voir la ligne « ${NOM_AMPLEUR} ».`,
        ...precisions,
      ],
    };
  }
  // Aidé seul : un forfait, sauf pour les revenus supérieurs.
  if (profil === 'superieur') {
    return {
      nom,
      verdict: 'non',
      explications: [
        `Aucun forfait pour les ${LIBELLE_PROFIL.superieur} dans le parcours par geste.`,
        `Pour vous, MaPrimeRénov’ passe par une rénovation d’ampleur : ${mprAmpleur.taux.superieur} % du montant HT des travaux, sous réserve que votre logement en remplisse les conditions (voir la ligne « ${NOM_AMPLEUR} »).`,
      ],
    };
  }
  const forfait = cas.forfaits[profil];
  return {
    nom,
    verdict: 'oui',
    montantMax: forfait,
    explications: [
      `Aidé seul : forfait de ${euro(forfait)} pour des ${LIBELLE_PROFIL[profil]}, pour une dépense éligible plafonnée à ${euro(cas.plafondDepenseHT)} HT.`,
      ...(cas.condition ? [cas.condition] : []),
      `Avec les primes CEE, le total ne pourra pas dépasser ${ecretementGeste.mprEtCee[profil]} % du montant TTC de vos travaux.`,
      ecretementGeste.toutesAides,
      ...precisions,
    ],
    conditions: mprGesteConditions,
    suite: [
      `Logements classés F ou G : leur exclusion du parcours par geste est repoussée au ${dateLongue(calendrierPassoires.exclusionGeste)}, et l’obligation de DPE pour ce parcours au ${dateLongue(calendrierPassoires.obligationDpe)}.`,
    ],
  };
}

/** La ligne qui renvoie aux autres chauffages (équipement inconnu). */
function ligneAutresChauffages(): Ligne {
  const chauffages = Object.values(postesDesEquipements) as Poste[];
  const noms = (cas: 'aide-seul' | 'ampleur-seulement' | 'non-eligible') =>
    chauffages.filter((p) => mprParGeste[p].cas === cas).map((p) => mprParGeste[p].nom.toLowerCase());
  return {
    nom: 'MaPrimeRénov’ : les autres chauffages',
    verdict: 'sous-conditions',
    explications: [
      `Seuls ces équipements ouvrent un forfait : ${noms('aide-seul').join(', ')}.`,
      `Aidés seulement dans une rénovation d’ampleur : ${noms('ampleur-seulement').join(', ')}.`,
      `Non éligibles : ${noms('non-eligible').join(', ')}.`,
    ],
  };
}

/** La ligne de la rénovation d'ampleur : un taux, jamais un forfait, et
 *  ses conditions TOUJOURS écrites avant le reste (« sous réserve… »). */
function ligneAmpleur(profil: Profil, outreMer: boolean, precisions: string[]): Ligne {
  if (outreMer) {
    return { nom: NOM_AMPLEUR, verdict: 'non', explications: ['La rénovation d’ampleur MaPrimeRénov’ est réservée aux logements de France métropolitaine.'] };
  }
  const taux = mprAmpleur.taux[profil];
  return {
    nom: NOM_AMPLEUR,
    verdict: 'sous-conditions',
    mention: `jusqu’à ${taux} %`,
    explications: [`${taux} % du montant HT des travaux pour des ${LIBELLE_PROFIL[profil]}, sous réserve que votre logement remplisse ces conditions :`],
    conditions: mprAmpleur.conditions,
    suite: [
      `Dépense éligible plafonnée à ${euro(mprAmpleur.plafondsDepenseHT.deuxClasses)} HT pour un gain de 2 classes, ${euro(mprAmpleur.plafondsDepenseHT.troisClassesEtPlus)} HT pour 3 classes ou plus.`,
      `Plafond total, toutes aides comprises : ${mprAmpleur.ecretement[profil]} % du montant TTC des travaux (à ne pas confondre avec le taux de l’aide, ${mprAmpleur.taux[profil]} %).`,
      `Accompagnateur Rénov’ : pris en charge à ${mprAmpleur.accompagnateur.taux[profil]} %, dans la limite de ${euro(mprAmpleur.accompagnateur.plafondTTC)} TTC.`,
      mprAmpleur.nonCumulCee,
      ...precisions,
    ],
  };
}

/** MaPrimeRénov' : une ligne par poste choisi, puis la rénovation d'ampleur. */
export function lignesMaPrimeRenov(r: Reponses): Ligne[] {
  const statut = mprStatuts[r.statut];
  if (statut.verdict === 'non') return [{ nom: 'MaPrimeRénov’', verdict: 'non', explications: [statut.texte] }];
  // Bailleur : l'engagement de location est rappelé sur chaque ligne.
  const precisions = r.statut === 'proprietaire-bailleur' ? [statut.texte] : [];
  const { postes, autresChauffages } = postesChoisis(r.travaux, r.equipement);
  const outreMer = r.departement.numero.length === 3;
  // Outre-mer : le guide Anah renvoie à un guide spécialisé, dont le
  // barème n'est pas dans ce simulateur. Aucun montant, aucun verdict
  // tranché : « à vérifier », avec une phrase explicite (décision du 20
  // octobre 2026 : pas de barème outre-mer, le collectif n'y est pas).
  // ⚠️ À ROUVRIR si Akelia recrute des artisans ultramarins.
  if (outreMer) {
    return [
      ...postes.map((poste) => ({
        nom: `MaPrimeRénov’ : ${mprParGeste[poste].nom}`,
        verdict: 'a-verifier' as const,
        explications: ['Les montants outre-mer suivent un barème distinct, que ce simulateur ne couvre pas. Rapprochez-vous de l’Anah.'],
      })),
      ligneAmpleur(r.profil, true, precisions),
    ];
  }
  return [
    ...postes.map((poste) => ligneGeste(poste, r.profil, precisions)),
    ...(autresChauffages ? [ligneAutresChauffages()] : []),
    ligneAmpleur(r.profil, false, precisions),
  ];
}

/** Les lignes des autres aides nationales (CEE, Éco-PTZ, TVA ; aides
 *  accessibles d'abord). */
function lignesNationales(statut: Statut, travaux: Travaux[], equipement?: Equipement): Ligne[] {
  const lignes = aidesNationales.map((aide) => {
    const evaluation = evaluerAide(aide, statut, travaux, equipement);
    const explications = [evaluation.texte];
    if (evaluation.precisionStatut && evaluation.verdict !== 'non') explications.push(evaluation.precisionStatut);
    explications.push(aide.nature + (aide.nomCourt ? ` : ${aide.nom}.` : '.'));
    return {
      nom: aide.nomCourt ?? aide.nom,
      verdict: evaluation.verdict,
      montantMax: evaluation.montantMax,
      explications,
      conditions: evaluation.verdict !== 'non' ? aide.conditions : undefined,
    } satisfies Ligne;
  });
  return [...lignes.filter((l) => l.verdict !== 'non'), ...lignes.filter((l) => l.verdict === 'non')];
}

/** Les lignes locales : région, département, et note outre-mer si besoin. */
function lignesLocales(departement: Departement): Ligne[] {
  const region = regions.find((r) => r.id === departement.region);
  const verdictRegion: Record<StatutRegion, Verdict> = { oui: 'oui', non: 'non', inconnu: 'a-verifier' };
  const lignes: Ligne[] = [
    region
      ? {
          nom: `Région ${region.nom}`,
          verdict: verdictRegion[region.statut],
          explications: [textesRegion[region.statut].replace('{dispositif}', region.dispositif ?? '')],
        }
      : { nom: 'Région', verdict: 'a-verifier', explications: [textesRegion['outre-mer']] },
    {
      nom: `Département : ${departement.nom} (${departement.numero})`,
      verdict: departement.statut === 'oui' ? 'oui' : departement.statut === 'non' ? 'non' : 'a-verifier',
      explications: [textesDepartement[departement.statut]],
    },
  ];
  if (departement.numero.length === 3) {
    lignes.push({ nom: 'Outre-mer : règles spécifiques', verdict: 'a-verifier', explications: [noteOutreMer] });
  }
  return lignes;
}

/** Titre de groupe de lignes (h4). */
function titreGroupe(texte: string, id: string) {
  const titre = el('h4', 'mt-5 mb-2 text-corps font-bold tracking-wide text-nuit-900 uppercase', texte);
  titre.id = id;
  return titre;
}

/**
 * Bloc complet du résultat : titre et « Recommencer », mention, bouton
 * « Obtenir vos aides réelles », lignes des aides.
 * Les boutons portent data-simulateur-recommencer et data-simulateur-contact :
 * c'est le script des étapes qui les relie (retour à la question 1, et
 * passage au formulaire de contact).
 */
export function construireResultat(reponses: Reponses) {
  const { statut, travaux, departement } = reponses;
  const fragment = document.createDocumentFragment();

  // --- En-tête : titre et « Recommencer »
  const entete = el('div', 'flex flex-wrap items-center justify-between gap-x-4 gap-y-1');
  entete.append(el('h3', 'text-h3 text-texte', 'Votre résultat'));
  const recommencer = el('button', 'min-h-11 rounded-bloc px-3 font-semibold text-nuit-900 underline underline-offset-4 hover:bg-creme focus-visible:outline-2 focus-visible:outline-nuit-900', 'Recommencer');
  recommencer.type = 'button';
  recommencer.dataset.simulateurRecommencer = '';
  entete.append(recommencer);
  fragment.append(entete);

  // --- 1. Mention, EN PREMIER (aucun lien vers un service externe)
  fragment.append(el('p', 'mt-3 rounded-bloc bg-creme p-3 text-corps font-semibold text-texte', mentionObligatoire));
  // Rappel de la situation retenue (20 octobre 2026) : le lecteur voit sur
  // quoi repose le calcul de MaPrimeRénov'.
  const tranche = tranchesDeRevenus(reponses.personnes, estEnIleDeFrance(departement))[reponses.profil];
  fragment.append(
    el(
      'p',
      'mt-3 text-corps text-texte',
      `Calcul pour un foyer de ${reponses.personnes} personne${reponses.personnes > 1 ? 's' : ''}${estEnIleDeFrance(departement) ? ' en Île-de-France' : ''}, revenu fiscal de référence ${tranche} : ${LIBELLE_PROFIL[reponses.profil]}.`,
    ),
  );

  // --- 2. BOUTON UNIQUE vers le formulaire de contact, juste sous la
  //        mention et AVANT la liste, pour être vu sans défiler. Taille
  //        normale (44px de haut minimum, largeur du texte), pas pleine
  //        largeur. Il ne s'ajoute pas en dessous : il remplace le résultat
  //        par le formulaire, dans le même bloc (voir simulateur-etapes.ts,
  //        attribut data-simulateur-contact).
  const contact = el('button', 'mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-bloc bg-action-500 px-5 py-2 text-corps font-semibold text-texte shadow-legere hover:bg-action-600 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-nuit-900', 'Obtenir vos aides réelles');
  contact.type = 'button';
  contact.dataset.simulateurContact = '';
  const flecheContact = el('span', '', '→');
  flecheContact.setAttribute('aria-hidden', 'true');
  contact.append(flecheContact);
  fragment.append(contact);

  // --- 3. Lignes dépliables
  const groupes: [string, string, Ligne[]][] = [
    ['Aides nationales', 'resultat-nationales', [...lignesMaPrimeRenov(reponses), ...lignesNationales(statut, travaux, reponses.equipement)]],
    ['Aides de votre région et de votre département', 'resultat-locales', lignesLocales(departement)],
  ];
  groupes.forEach(([titre, id, lignes]) => {
    const groupe = el('section');
    groupe.setAttribute('aria-labelledby', id);
    groupe.append(titreGroupe(titre, id));
    const liste = el('ul', 'grid gap-2');
    lignes.forEach((ligne) => liste.append(ligneDepliable(ligne)));
    groupe.append(liste);
    fragment.append(groupe);
  });

  // Une seule ligne ouverte à la fois, aussi dans les navigateurs qui ne
  // gèrent pas encore l'attribut « name » des <details>.
  const toutesLesLignes = Array.from(fragment.querySelectorAll<HTMLDetailsElement>('details[data-ligne-aide]'));
  toutesLesLignes.forEach((details) => {
    details.addEventListener('toggle', () => {
      if (!details.open) return;
      toutesLesLignes.forEach((autre) => { if (autre !== details) autre.open = false; });
    });
  });


  return fragment;
}
