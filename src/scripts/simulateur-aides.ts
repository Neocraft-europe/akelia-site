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
// - evaluerAide : le verdict d'une aide selon le statut et les travaux ;
// - construireResultat : le bloc « Votre résultat » à afficher.
// =========================================================================

import {
  aidesNationales,
  departements,
  mentionObligatoire,
  noteOutreMer,
  regions,
  textesDepartement,
  textesRegion,
  type AideNationale,
  type Departement,
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

export function evaluerAide(aide: AideNationale, statut: Statut, travaux: Travaux[]): Evaluation {
  const regleStatut = aide.statuts[statut];
  if (regleStatut.verdict === 'non') return { verdict: 'non', texte: regleStatut.texte };

  const regles: Regle[] = travaux.map((t) => aide.travaux[t]);
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
  /** Paragraphes affichés une fois la ligne dépliée. */
  explications: string[];
  /** Liste à puces facultative (conditions principales). */
  conditions?: string[];
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
  resume.append(el('span', 'text-base leading-snug font-semibold text-texte', ligne.nom));
  const droite = el('span', 'flex flex-col items-end text-right leading-tight');
  droite.append(el('span', 'text-base font-bold text-texte', style.libelle));
  if (ligne.montantMax) {
    droite.append(el('span', 'text-base font-bold whitespace-nowrap text-texte', `jusqu'à ${formatEuros.format(ligne.montantMax)}`));
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
  ligne.explications.forEach((texte) => contenu.append(el('p', 'text-base text-texte', texte)));
  if (ligne.conditions?.length) {
    const liste = el('ul', 'list-disc space-y-1 pl-5 text-base text-texte');
    ligne.conditions.forEach((c) => liste.append(el('li', '', c)));
    contenu.append(liste);
  }
  details.append(contenu);
  li.append(details);
  return li;
}

/** Les lignes des aides nationales (aides accessibles d'abord). */
function lignesNationales(statut: Statut, travaux: Travaux[]): Ligne[] {
  const lignes = aidesNationales.map((aide) => {
    const evaluation = evaluerAide(aide, statut, travaux);
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
  const titre = el('h4', 'mt-5 mb-2 text-base font-bold tracking-wide text-nuit-900 uppercase', texte);
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
export function construireResultat(statut: Statut, travaux: Travaux[], departement: Departement) {
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
  fragment.append(el('p', 'mt-3 rounded-bloc bg-creme p-3 text-base font-semibold text-texte', mentionObligatoire));

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
    ['Aides nationales', 'resultat-nationales', lignesNationales(statut, travaux)],
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
