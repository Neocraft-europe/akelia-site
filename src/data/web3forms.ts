// =========================================================================
// WEB3FORMS : ENVOI DES FORMULAIRES (src/data/web3forms.ts)
// -------------------------------------------------------------------------
// Seul endroit où figure la clé du compte Web3Forms d'Akelia. Elle est lue
// par les trois formulaires du site :
// - la page /devis (src/pages/devis.astro) ;
// - la candidature des artisans (src/pages/rejoindre-le-collectif.astro) ;
// - l'estimation du simulateur (SimulateurEstimation.astro, envoi par
//   src/scripts/simulateur-estimation.ts).
//
// Cette clé n'est pas un secret : Web3Forms la prévoit dans le HTML de la
// page (champ caché access_key). Elle permet seulement d'envoyer des
// messages vers la boîte mail du compte.
//
// ⚠️ Web3Forms est exploité par une société établie en Inde : les données
// des formulaires sortent de l'Union européenne (à mentionner dans la
// politique de confidentialité).
// =========================================================================

export const CLE_WEB3FORMS = '08e77810-e615-4993-8675-2212b8e486e0';
export const ADRESSE_WEB3FORMS = 'https://api.web3forms.com/submit';
