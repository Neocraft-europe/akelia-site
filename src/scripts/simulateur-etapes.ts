// =========================================================================
// NAVIGATION DU SIMULATEUR, UNE QUESTION À LA FOIS
// (src/scripts/simulateur-etapes.ts)
// -------------------------------------------------------------------------
// - Question 1 (statut) : un clic ou un toucher sur une réponse fait passer
//   automatiquement à la question 2. Au clavier, les flèches changent la
//   réponse SANS changer de question (sinon, parcourir les réponses ferait
//   sauter la question) ; on valide avec Entrée.
// - Question 2 (code postal) : bouton « Suivant » (ou Entrée).
// - Question 3 (travaux) : bouton « Voir mes aides » (ou Entrée).
// - « Retour » est disponible à partir de la question 2.
// - À chaque étape, le focus est placé sur la nouvelle question.
// - La barre de progression indique « Question X sur 3 ».
// - Le résultat remplace les questions dans le même bloc ; « Recommencer »
//   revient à la question 1.
// - Le bouton « Obtenir vos aides réelles » (sous la mention du résultat) remplace
//   le résultat par le formulaire de contact ; « Revenir à mes résultats »
//   fait l'inverse.
//
// HAUTEUR : le bloc s'ajuste au contenu affiché. Quand ce contenu change
// (question suivante, résultat, formulaire, erreur, ligne dépliée), la
// hauteur glisse en douceur de l'ancienne valeur à la nouvelle (0,3 s), puis
// redevient automatique. Sans animation si « réduire les animations » est
// activé sur l'appareil.
// =========================================================================

import { construireResultat, departementDepuisCodePostal } from './simulateur-aides';
import type { Statut, Travaux } from '../data/aides';

const NOMBRE_QUESTIONS = 3;
/** Délai entre le choix à la question 1 et l'affichage de la question 2 (ms) :
 *  laisse le temps de voir la réponse cochée. */
const DELAI_PASSAGE_AUTO = 350;

export function initialiserEtapes() {
  const bloc = document.querySelector<HTMLElement>('[data-simulateur-bloc]');
  const formulaire = bloc?.querySelector<HTMLFormElement>('[data-simulateur]');
  const resultat = bloc?.querySelector<HTMLElement>('[data-simulateur-resultat]');
  if (!bloc || !formulaire || !resultat) return;

  const etapes = Array.from(formulaire.querySelectorAll<HTMLElement>('[data-etape]'));
  const texteProgression = bloc.querySelector<HTMLElement>('[data-progression-texte]');
  const barreProgression = bloc.querySelector<HTMLElement>('[data-progression]');
  const remplissage = bloc.querySelector<HTMLElement>('[data-progression-barre]');
  const boutonRetour = formulaire.querySelector<HTMLButtonElement>('[data-action="retour"]');
  const boutonSuivant = formulaire.querySelector<HTMLButtonElement>('[data-action="suivant"]');
  const champCodePostal = formulaire.querySelector<HTMLInputElement>('input[name="code-postal"]');
  const casesTravaux = Array.from(formulaire.querySelectorAll<HTMLInputElement>('input[name="travaux"]'));
  const radiosStatut = Array.from(formulaire.querySelectorAll<HTMLInputElement>('input[name="statut"]'));
  const contenu = bloc.querySelector<HTMLElement>('[data-simulateur-contenu]');
  const panneaux = Array.from(bloc.querySelectorAll<HTMLElement>('[data-panneau]'));
  const titreContact = document.getElementById('estimation-titre');
  const boutonRevenir = bloc.querySelector<HTMLButtonElement>('[data-estimation-revenir]');

  let etapeCourante = 1;

  // Le bloc est masqué sans JavaScript (message <noscript> à la place).
  bloc.hidden = false;

  // -----------------------------------------------------------------------
  // PANNEAUX : un seul visible (questions, résultat ou contact)
  // -----------------------------------------------------------------------
  function afficherPanneau(nom: 'questions' | 'resultat' | 'contact') {
    panneaux.forEach((panneau) => panneau.toggleAttribute('data-actif', panneau.dataset.panneau === nom));
  }

  // -----------------------------------------------------------------------
  // HAUTEUR DU BLOC : glissement doux d'une hauteur à l'autre
  // Un « observateur de taille » prévient à chaque changement de hauteur du
  // contenu (avant l'affichage à l'écran). On replace alors le bloc à son
  // ancienne hauteur, puis on lui donne la nouvelle : la propriété CSS
  // transition-[height] fait le glissement. À la fin, la hauteur redevient
  // automatique (style.height vide).
  // -----------------------------------------------------------------------
  let hauteurPrecedente = bloc.offsetHeight;
  const bordures = () => bloc.offsetHeight - bloc.clientHeight;
  if (contenu) {
    new ResizeObserver(() => {
      const nouvelle = contenu.offsetHeight + bordures();
      if (Math.abs(nouvelle - hauteurPrecedente) < 1) return;
      if (preferenceMouvementReduit()) {
        bloc.style.height = '';
      } else {
        bloc.style.height = `${hauteurPrecedente}px`;
        void bloc.offsetHeight; // force le navigateur à prendre en compte l'ancienne hauteur
        bloc.style.height = `${nouvelle}px`;
      }
      hauteurPrecedente = nouvelle;
    }).observe(contenu);
  }
  bloc.addEventListener('transitionend', (evenement) => {
    if (evenement.target === bloc && evenement.propertyName === 'height') bloc.style.height = '';
  });

  // -----------------------------------------------------------------------
  // AFFICHAGE D'UNE ÉTAPE
  // -----------------------------------------------------------------------
  function majProgression(texte: string, valeur: number) {
    if (texteProgression) texteProgression.textContent = texte;
    barreProgression?.setAttribute('aria-valuenow', String(valeur));
    barreProgression?.setAttribute('aria-valuetext', texte);
    if (remplissage) remplissage.style.width = `${(valeur / NOMBRE_QUESTIONS) * 100}%`;
  }

  function afficherEtape(numero: number, deplacerFocus = true) {
    etapeCourante = numero;
    etapes.forEach((etape) => etape.toggleAttribute('data-actif', Number(etape.dataset.etape) === numero));
    majProgression(`Question ${numero} sur ${NOMBRE_QUESTIONS}`, numero);

    // « Retour » à partir de la question 2 ; bouton principal selon l'étape.
    // Ils restent en place (invisibles) pour que le bloc ne change pas de
    // hauteur.
    boutonRetour?.toggleAttribute('data-visible', numero > 1);
    if (boutonSuivant) {
      boutonSuivant.toggleAttribute('data-visible', numero > 1);
      boutonSuivant.textContent = numero === NOMBRE_QUESTIONS ? 'Voir mes aides' : 'Suivant';
    }

    if (!deplacerFocus) return;
    // Focus sur la nouvelle question : le champ de saisie pour le code
    // postal (on peut taper directement), sinon le titre de la question.
    const etape = etapes[numero - 1];
    const cible = numero === 2 ? champCodePostal : etape.querySelector<HTMLElement>('[data-titre-etape]');
    cible?.focus({ preventScroll: true });
  }

  // -----------------------------------------------------------------------
  // ERREURS (zone réservée dans chaque question : la hauteur ne bouge pas)
  // -----------------------------------------------------------------------
  function afficherErreur(champ: string, message: string | null) {
    const zone = document.getElementById(`erreur-${champ}`);
    const groupe = formulaire!.querySelector<HTMLElement>(`[data-champ="${champ}"]`);
    if (!zone || !groupe) return;
    zone.textContent = message ?? '';
    groupe.toggleAttribute('data-erreur', Boolean(message));
    groupe.querySelectorAll('input').forEach((input) => {
      if (message) input.setAttribute('aria-invalid', 'true');
      else input.removeAttribute('aria-invalid');
    });
  }

  // -----------------------------------------------------------------------
  // VALIDATION ET PASSAGE À L'ÉTAPE SUIVANTE
  // -----------------------------------------------------------------------
  function validerEtapeCourante() {
    const donnees = new FormData(formulaire!);

    if (etapeCourante === 1) {
      if (!donnees.get('statut')) {
        afficherErreur('statut', 'Choisissez votre situation.');
        radiosStatut[0]?.focus();
        return;
      }
      afficherErreur('statut', null);
      afficherEtape(2);
      return;
    }

    if (etapeCourante === 2) {
      const codePostal = String(donnees.get('code-postal') ?? '').trim();
      if (!departementDepuisCodePostal(codePostal)) {
        afficherErreur(
          'code-postal',
          /^\d{5}$/.test(codePostal) ? 'Ce code postal ne correspond à aucun département français.' : 'Saisissez un code postal à 5 chiffres.',
        );
        champCodePostal?.focus();
        return;
      }
      afficherErreur('code-postal', null);
      afficherEtape(3);
      return;
    }

    // Étape 3 : travaux, puis calcul du résultat
    const travaux = donnees.getAll('travaux') as Travaux[];
    if (!travaux.length) {
      // Message court : il doit tenir sur une ligne (zone réservée), même sur téléphone.
      afficherErreur('travaux', 'Cochez au moins une case.');
      casesTravaux[0]?.focus();
      return;
    }
    afficherErreur('travaux', null);
    afficherResultat(donnees.get('statut') as Statut, String(donnees.get('code-postal')), travaux);
  }

  // -----------------------------------------------------------------------
  // RÉSULTAT (remplace les questions dans le même bloc)
  // -----------------------------------------------------------------------
  function afficherResultat(statut: Statut, codePostal: string, travaux: Travaux[]) {
    const departement = departementDepuisCodePostal(codePostal);
    if (!departement) return;
    resultat!.replaceChildren(construireResultat(statut, travaux, departement));
    afficherPanneau('resultat');
    majProgression('Questionnaire terminé', NOMBRE_QUESTIONS); // le titre « Votre résultat » suit juste en dessous
    resultat!.focus({ preventScroll: true });
    remonterEnHautDuBloc();
  }

  function recommencer() {
    formulaire!.reset();
    ['statut', 'code-postal', 'travaux'].forEach((champ) => afficherErreur(champ, null));
    resultat!.replaceChildren();
    afficherPanneau('questions');
    afficherEtape(1);
    remonterEnHautDuBloc();
  }

  // -----------------------------------------------------------------------
  // CONTACT : remplace le résultat, et inversement
  // -----------------------------------------------------------------------
  function afficherContact() {
    afficherPanneau('contact');
    titreContact?.focus({ preventScroll: true });
    remonterEnHautDuBloc();
  }

  function revenirAuResultat() {
    afficherPanneau('resultat');
    // Focus sur le bouton qui avait ouvert le formulaire de contact.
    resultat!.querySelector<HTMLElement>('[data-simulateur-contact]')?.focus({ preventScroll: true });
    remonterEnHautDuBloc();
  }

  /** Ramène le haut du bloc à l'écran (le bloc est haut sur téléphone). */
  function remonterEnHautDuBloc() {
    const haut = bloc!.getBoundingClientRect().top;
    if (haut < 0 || haut > window.innerHeight / 2) {
      bloc!.scrollIntoView({ block: 'start', behavior: preferenceMouvementReduit() ? 'auto' : 'smooth' });
    }
  }

  function preferenceMouvementReduit() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // -----------------------------------------------------------------------
  // ÉCOUTEURS
  // -----------------------------------------------------------------------

  // Envoi du formulaire (bouton « Suivant » / « Voir mes aides », ou Entrée
  // dans un champ) : rien n'est envoyé, on valide seulement l'étape.
  formulaire.addEventListener('submit', (evenement) => {
    evenement.preventDefault();
    validerEtapeCourante();
  });

  // Entrée sur une réponse de la question 1 ou une case de la question 3 :
  // valide l'étape (certains navigateurs n'envoient pas le formulaire dans
  // ce cas).
  [...radiosStatut, ...casesTravaux].forEach((champ) => {
    champ.addEventListener('keydown', (evenement) => {
      if (evenement.key !== 'Enter') return;
      evenement.preventDefault();
      validerEtapeCourante();
    });
  });

  // Question 1 : passage automatique, uniquement après un clic ou un
  // toucher (pas après une flèche du clavier). On écoute « click » plutôt
  // que « change » : cliquer sur la réponse déjà cochée (après un Retour)
  // fait aussi avancer.
  let choixAuPointeur = false;
  radiosStatut.forEach((radio) => {
    radio.closest('label')?.addEventListener('pointerdown', () => { choixAuPointeur = true; });
    radio.addEventListener('change', () => afficherErreur('statut', null));
    radio.addEventListener('click', () => {
      if (!choixAuPointeur) return;
      choixAuPointeur = false;
      window.setTimeout(() => { if (etapeCourante === 1) validerEtapeCourante(); }, DELAI_PASSAGE_AUTO);
    });
  });

  // Boutons du résultat (créés à chaque calcul) : écoute « déléguée » sur
  // le panneau, qui, lui, ne change pas.
  resultat.addEventListener('click', (evenement) => {
    const cible = evenement.target as HTMLElement;
    if (cible.closest('[data-simulateur-recommencer]')) recommencer();
    else if (cible.closest('[data-simulateur-contact]')) afficherContact();
  });
  boutonRevenir?.addEventListener('click', revenirAuResultat);

  boutonRetour?.addEventListener('click', () => {
    if (etapeCourante > 1) afficherEtape(etapeCourante - 1);
  });

  // Code postal : on ne garde que les chiffres, 5 au maximum.
  champCodePostal?.addEventListener('input', () => {
    champCodePostal.value = champCodePostal.value.replace(/\D/g, '').slice(0, 5);
    afficherErreur('code-postal', null);
  });

  // « Je ne sais pas encore » est exclusif.
  casesTravaux.forEach((caseTravaux) => {
    caseTravaux.addEventListener('change', () => {
      if (!caseTravaux.checked) return;
      casesTravaux.forEach((autre) => {
        const exclusive = caseTravaux.value === 'ne-sait-pas' || autre.value === 'ne-sait-pas';
        if (autre !== caseTravaux && exclusive) autre.checked = false;
      });
      afficherErreur('travaux', null);
    });
  });

  // État de départ : question 1, sans déplacer le focus (on ne vole pas le
  // focus au chargement de la page).
  afficherEtape(1, false);
}
