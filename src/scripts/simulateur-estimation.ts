// =========================================================================
// FORMULAIRE « OBTENIR UNE ESTIMATION PRÉCISE DE VOS AIDES »
// (src/scripts/simulateur-estimation.ts)
// -------------------------------------------------------------------------
// C'est le SEUL endroit du simulateur où des données quittent l'appareil,
// et uniquement si la personne remplit et envoie ce formulaire : prénom,
// e-mail et téléphone. Les réponses au simulateur (statut, code postal,
// travaux) ne sont PAS jointes.
//
// Envoi : service Web3Forms, avec exactement la même méthode que le
// formulaire de la page /devis (src/pages/devis.astro) :
// - envoi des champs du formulaire à https://api.web3forms.com/submit ;
// - bouton désactivé et « Envoi en cours… » pendant l'envoi ;
// - message de confirmation en cas de succès (formulaire vidé), message
//   d'erreur sinon (erreur renvoyée par Web3Forms, ou serveur injoignable).
// Différence : les champs sont vérifiés avant l'envoi, avec des messages en
// toutes lettres sous chaque champ (comme pour les questions du simulateur).
// =========================================================================

import { ADRESSE_WEB3FORMS } from '../data/web3forms';

// Messages : mêmes formulations que la page /devis, adaptées à l'estimation.
const MESSAGES = {
  envoi: 'Envoi en cours…',
  succes: 'Merci ! Votre demande a bien été envoyée. Un artisan du collectif vous recontacte très vite.',
  erreur: "Votre demande n'a pas pu être envoyée. Veuillez réessayer dans quelques minutes.",
  injoignable: 'Impossible de joindre le serveur. Veuillez vérifier votre connexion et réessayer.',
  prenom: 'Indiquez votre prénom.',
  email: 'Indiquez une adresse e-mail valide, par exemple jean.dupont@exemple.fr.',
  telephone: 'Indiquez un numéro de téléphone (10 chiffres).',
};

// Styles des messages de retour (couleurs de la charte, texte lisible).
const CLASSES_RETOUR = 'rounded-bloc border-2 p-4 text-corps font-semibold text-texte';
const CLASSES_SUCCES = `${CLASSES_RETOUR} border-succes-600 bg-succes-50`;
const CLASSES_ECHEC = `${CLASSES_RETOUR} border-alerte-700 bg-alerte-50`;

export function initialiserEstimation() {
  const formulaire = document.querySelector<HTMLFormElement>('[data-estimation-formulaire]');
  const retour = document.querySelector<HTMLElement>('[data-estimation-retour]');
  const bouton = formulaire?.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (!formulaire || !retour || !bouton) return;

  /** Affiche ou efface le message d'erreur d'un champ. */
  function erreurChamp(nom: string, message: string | null) {
    const champ = formulaire!.querySelector<HTMLInputElement>(`[name="${nom}"]`);
    const zone = document.getElementById(`estimation-erreur-${nom}`);
    if (!champ || !zone) return;
    zone.textContent = message ?? '';
    if (message) champ.setAttribute('aria-invalid', 'true');
    else champ.removeAttribute('aria-invalid');
  }

  /** Vérifie les 3 champs ; renvoie le premier champ en erreur, ou null. */
  function verifier(): HTMLInputElement | null {
    const donnees = new FormData(formulaire!);
    const prenom = String(donnees.get('prenom') ?? '').trim();
    const email = String(donnees.get('email') ?? '').trim();
    const chiffresTelephone = String(donnees.get('telephone') ?? '').replace(/\D/g, '');
    const erreurs: [string, string | null][] = [
      ['prenom', prenom ? null : MESSAGES.prenom],
      ['email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? null : MESSAGES.email],
      ['telephone', chiffresTelephone.length >= 10 ? null : MESSAGES.telephone],
    ];
    erreurs.forEach(([nom, message]) => erreurChamp(nom, message));
    const premiere = erreurs.find(([, message]) => message);
    return premiere ? formulaire!.querySelector<HTMLInputElement>(`[name="${premiere[0]}"]`) : null;
  }

  // Effacer l'erreur d'un champ dès qu'on le corrige.
  formulaire.querySelectorAll<HTMLInputElement>('input:not([type="hidden"]):not([name="botcheck"])').forEach((champ) => {
    champ.addEventListener('input', () => erreurChamp(champ.name, null));
  });

  formulaire.addEventListener('submit', async (evenement) => {
    evenement.preventDefault();
    retour.hidden = true;

    const champEnErreur = verifier();
    if (champEnErreur) {
      champEnErreur.focus();
      return;
    }

    const texteInitial = bouton.textContent;
    bouton.disabled = true;
    bouton.textContent = MESSAGES.envoi;

    try {
      const reponse = await fetch(ADRESSE_WEB3FORMS, { method: 'POST', body: new FormData(formulaire) });
      const resultat = await reponse.json();
      if (reponse.ok && resultat.success) {
        retour.className = CLASSES_SUCCES;
        retour.textContent = MESSAGES.succes;
        formulaire.reset();
      } else {
        retour.className = CLASSES_ECHEC;
        // Message de Web3Forms (en anglais) gardé pour la console seulement.
        console.error('Web3Forms :', resultat.message);
        retour.textContent = MESSAGES.erreur;
      }
    } catch {
      retour.className = CLASSES_ECHEC;
      retour.textContent = MESSAGES.injoignable;
    } finally {
      bouton.disabled = false;
      bouton.textContent = texteInitial;
      retour.hidden = false;
      // Le message est annoncé (role="status") ; on y place aussi le focus
      // pour qu'il soit vu même s'il est en bas de l'écran.
      retour.focus();
    }
  });
}
