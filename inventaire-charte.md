# Inventaire de la charte graphique — ancien site Webflow Akelia

> **Dernière tâche (14 octobre 2026) : refonte de la section Cas types** (violet, 6 onglets, deux paragraphes et un bouton par onglet, illustrations agrandies ; section en fin de fichier, questions 160 à 165 ; ⚠️ `neuf.png` manquant, question 161). Plus tôt le même jour : badge pleine largeur et illustrations réduites sur téléphone (questions 157 à 159), avancement automatique des étapes de la Méthode au défilement (questions 152 à 156), badge compact et illustrations en pleine largeur sur téléphone (questions 148 à 151 ; ⚠️ section « Fonctionnement » à 1 795px de haut sur téléphone, question 149), badge vert, textes raccourcis, étapes élargies, animation réparée (questions 144 à 147), étiquette pâle et agrandissement des illustrations (questions 141 à 143), corrections de « Fonctionnement » (questions 135 à 140), puis raccourcis du Hero sous le schéma et création du bandeau (questions 123 à 134).
>
> Statut : **étape 25 terminée** : nouvelle **section « Collectif »** sur l'accueil (après le simulateur, avant les articles), fond blanc, 5 engagements en liste « fiche technique », apparition en fondu échelonnée. Captures dans `captures/etape-25/`. ⚠️ Hauteur à 375px : 2 391px, soit 2,94 écrans d'iPhone X (812px) mais **3,58 écrans d'iPhone SE (667px)** : pistes de réduction à la question 47 (non appliquées). **Étape 24** : texte du bloc 2 allongé, blocs de même hauteur et **boutons alignés** (flex + `mt-auto`) à partir de 768px. Captures dans `captures/etape-24/`. **Étape 23** : phrase du bloc 2 reformulée (« Vous travaillez en direct avec l'artisan Akelia de votre secteur. »), fond de la section « Vous pilotez… » passé en blanc. **Étape 22** : bloc « Vous pilotez, ou on pilote ? » revenu à une **version statique** : deux blocs qui se touchent (blanc / bleu nuit), tout visible, un bouton dans chacun (« Demander un accompagnement » → `/devis`, « Voir nos solutions » → `/services`). Captures dans `captures/etape-22/`. ⚠️ Enchaînement serré avec la section des aides sur téléphone (question 43, toujours ouverte). **Étape 21** : l'animation d'apparition de la section Méthode (étapes et écran partagé) se rejoue à chaque retour à l'écran, après une sortie complète ; le schéma du hero reste à animation unique. **Étape 20** : Bloc « Vous pilotez, ou on pilote ? » transformé en **écran partagé interactif** : panneau gauche blanc, panneau droit bleu nuit, « ou » à cheval sur la séparation ; le panneau survolé, touché ou atteint au clavier passe à 65 %. Introduction de la méthode sur toute la largeur. Captures dans `captures/etape-20/`. ⚠️ À arbitrer : enchaînement serré avec la section des aides sur téléphone (question 43). **Origine de chaque texte (fourni par vous ou rédigé par Claude) : voir le tableau « Origine des textes » juste en dessous.** **Les textes exacts de toutes les phrases du simulateur sont dans la section suivante (« Textes du simulateur d'aides et de la section Méthode : version en vigueur »)**, réécrite à chaque modification. ⚠️ Toujours bloquant : la clé Web3Forms (question 20).

## Textes du simulateur d'aides et de la section Méthode : version en vigueur

> **Section de référence pour la relecture.** Elle contient le texte exact de TOUTES les phrases du simulateur, y compris chaque phrase de `src/data/aides.ts`. Elle est **réécrite à chaque modification** (dernière mise à jour : étape 24, le 9 octobre 2026). La partie D est extraite automatiquement du fichier de données, sans recopie à la main. Les guillemets « » délimitent chaque texte. Aucune de ces phrases ne contient de lien ni de numéro vers un service externe.

### Origine des textes (à lire en premier)

Réponse aux rappels des étapes 18 à 24 : **tous les textes du simulateur et de `src/data/aides.ts` figurent mot pour mot dans les parties A à F ci-dessous.** Contrôle automatique (étape 20 ; `aides.ts` n'a pas changé depuis l'étape 18) : les 79 textes de `aides.ts` (tous ceux de plus de 20 caractères) ont été extraits du fichier et cherchés dans cette section : **0 absent**. Trois d'entre eux ne s'affichent pas sur le site comme des phrases et ne figurent qu'ici : les noms de sources « Anah, Les aides financières en 2026 (édition septembre 2026) » et « service-public.gouv.fr, MaPrimeRénov' », et le nom de département « Territoire de Belfort », affiché dans « Département : Territoire de Belfort (90) ».

Les textes **que vous n'avez pas fournis** (rédigés par Claude) sont à valider. Le tableau dit lesquels :

| Partie | Fournis par vous | **Non fournis : rédigés par Claude, à valider** |
|---|---|---|
| A. Colonne de gauche du simulateur | Tout (étape 17) | — |
| B. Titre et questions | « Estimez vos aides » (demandé à l'étape 15 ; origine exacte non retrouvée, à confirmer) | **Tout le reste** : progression, titres des 3 questions, phrases d'aide, réponses proposées, boutons, messages d'erreur |
| C. Résultat | La mention « Estimation indicative… » (étape 16), le bouton « Obtenir vos aides réelles » | « Votre résultat », « Recommencer », les 2 titres de groupe, les verdicts (« Oui », « Sous conditions », « À vérifier », « Non »), « jusqu'à X € » |
| D. Phrases des aides (`aides.ts`) | — | **Tout** : noms courts, natures, conditions, phrases par statut, par travaux, région, département, outre-mer (rédigées à partir des sources officielles, étapes 12 à 16) |
| E. Formulaire de contact | Titre, texte d'introduction, bouton « Recevoir mon estimation », mention sur les coordonnées | « ← Revenir à mes résultats », étiquettes, erreurs, « Envoi en cours… », message de succès ; les messages d'échec sont repris de `/devis` |
| F. Sans JavaScript | — | La phrase entière |
| G. Section Méthode | Titre, introduction, titres, sous-textes et détails des 4 étapes (13 octobre 2026) ; « Deux façons de faire » : tout (13 octobre 2026) | « Étape X sur 4 », phrase d'aide « Cliquez / Touchez une étape : le schéma change. », annotations et descriptions du schéma |
| H. Section Collectif | Tout (étape 25) | — |

### A. Colonne de gauche (texte fourni à l'étape 17, sur fond bleu nuit)
- Titre, en UNE phrase continue, blanc, « plus de 30 000 € » en orange et en gras : « Votre maison peut vous rapporter **plus de 30 000 €**. Il suffit de la rénover. »
- « L'État les verse pour isoler, chauffer, produire votre énergie. Vous ne les remboursez pas. Votre maison vaut plus cher et vos factures baissent. »
- Accroche, plus grande et en gras : « Et vous n'avez presque rien à faire. »
- « On monte votre dossier, on dépose les demandes, on suit les versements. »

### B. Colonne de droite : titre et questions
- Titre : « Estimez vos aides »
- Progression : « Question 1 sur 3 », « Question 2 sur 3 », « Question 3 sur 3 », puis « Questionnaire terminé » au résultat et au formulaire de contact
- Question 1 : « Vous êtes » · aide : « Touchez votre réponse : la question suivante s'affiche automatiquement. » · réponses : « Propriétaire occupant », « Propriétaire bailleur », « Locataire »
- Question 2 : « Votre code postal » · aide : « 5 chiffres, par exemple 31000. Il sert seulement à trouver votre département. »
- Question 3 : « Vos travaux » · aide : « Plusieurs choix possibles. » · réponses : « Isolation », « Fenêtres et volets », « Chauffage », « Ventilation », « Panneaux photovoltaïques », « Je ne sais pas encore »
- Boutons : « ← Retour », « Suivant », « Voir mes aides »
- Erreurs : « Choisissez votre situation. » · « Saisissez un code postal à 5 chiffres. » · « Ce code postal ne correspond à aucun département français. » · « Cochez au moins une case. »

### C. Résultat (dans l'ordre d'affichage)
1. « Votre résultat » · bouton « Recommencer »
2. Mention : « Estimation indicative. Les aides évoluent régulièrement et dépendent de critères précis : revenus, logement, nature des travaux. »
3. Bouton : « Obtenir vos aides réelles → » (le seul appel à l'action du résultat, placé AVANT la liste depuis l'étape 17)
4. Titre de groupe « AIDES NATIONALES », puis une ligne par aide : [nom] · [verdict : « Oui », « Sous conditions », « À vérifier » ou « Non »] · [« jusqu'à X € » si un montant existe] · flèche. Une fois dépliée : la phrase de l'aide, la phrase liée au statut (sauf si le verdict est « Non »), la liste des conditions principales (sauf si « Non »), puis « [nature de l'aide]. », par exemple « Prime de l'État (Anah). ». Pour la prime CEE, la ligne affiche « Prime CEE » et l'explication se termine par « Prime des fournisseurs d'énergie : Prime CEE (certificats d'économies d'énergie). »
5. Titre de groupe « AIDES DE VOTRE RÉGION ET DE VOTRE DÉPARTEMENT », puis :
   - ligne « Région [nom] » (en outre-mer : « Région »), verdict « Oui » / « Non » / « À vérifier », phrase de la partie D (« Phrases de la ligne Région ») ;
   - ligne « Département : [nom] ([numéro]) », verdict « À vérifier » (tous les départements sont « inconnu »), phrase de la partie D (« Département ») ;
   - en outre-mer seulement : ligne « Outre-mer : règles spécifiques », verdict « À vérifier », note outre-mer de la partie D.

### D. Phrases des aides (`src/data/aides.ts`, extraites du fichier)

**MaPrimeRénov' par geste** — nature : « Prime de l'État (Anah) » — montant maximum : 11 000 €

*Conditions principales* (affichées dans la ligne dépliée) :
- « Logement construit depuis au moins 15 ans, occupé en résidence principale. »
- « Travaux réalisés par un professionnel RGE, demande déposée avant les travaux. »
- « Ménages aux revenus très modestes, modestes ou intermédiaires (revenus supérieurs exclus). »

*Selon le statut* :

| Statut | Verdict | Phrase affichée |
|---|---|---|
| Propriétaire occupant | oui | « Ouvert aux propriétaires occupants. » |
| Propriétaire bailleur | oui | « Ouvert aux propriétaires bailleurs, qui s'engagent à louer le logement en résidence principale pendant au moins 6 ans. » |
| Locataire | non | « Réservé aux propriétaires : en tant que locataire, vous ne pouvez pas en bénéficier. Votre propriétaire, lui, le peut. » |

*Selon les travaux* :

| Travaux | Verdict | Montant affiché | Phrase affichée |
|---|---|---|---|
| Chauffage | oui | jusqu'à 11 000 € | « Oui pour une pompe à chaleur : jusqu'à 11 000 € pour une pompe à chaleur géothermique et jusqu'à 5 000 € pour une pompe à chaleur air/eau, selon vos revenus. Les ménages aux revenus les plus élevés n'y ont pas droit. » |
| Isolation | non | — | « L'isolation n'est plus financée seule par MaPrimeRénov' depuis le 1er septembre 2026. Elle peut l'être dans une rénovation d'ampleur. » |
| Fenêtres et volets | non | — | « Les fenêtres ne sont plus financées seules par MaPrimeRénov' depuis le 1er septembre 2026. Elles peuvent l'être dans une rénovation d'ampleur. » |
| Ventilation | non | — | « La ventilation n'est plus financée seule par MaPrimeRénov' depuis le 1er septembre 2026. » |
| Panneaux photovoltaïques | non | — | « Les panneaux photovoltaïques ne font pas partie des travaux financés par MaPrimeRénov'. » |
| Je ne sais pas encore | sous conditions | jusqu'à 11 000 € | « Seulement pour l'installation d'une pompe à chaleur : jusqu'à 11 000 € selon vos revenus. » |

**MaPrimeRénov' rénovation d'ampleur** — nature : « Prime de l'État (Anah) » — montant maximum : 32 000 €

*Conditions principales* (affichées dans la ligne dépliée) :
- « Logement classé E, F ou G, construit depuis au moins 15 ans, occupé en résidence principale. »
- « Projet global : au moins 2 travaux d'isolation et un gain d'au moins 2 classes énergétiques. »
- « Accompagnateur Rénov' et rendez-vous préalable avec un conseiller France Rénov' obligatoires. »
- « En maison individuelle, pas de chauffage au gaz ou au fioul après les travaux. »

*Selon le statut* :

| Statut | Verdict | Phrase affichée |
|---|---|---|
| Propriétaire occupant | oui | « Ouvert aux propriétaires occupants. » |
| Propriétaire bailleur | oui | « Ouvert aux propriétaires bailleurs, qui s'engagent à louer le logement en résidence principale pendant au moins 6 ans. » |
| Locataire | non | « Réservé aux propriétaires : en tant que locataire, vous ne pouvez pas en bénéficier. » |

*Selon les travaux* :

| Travaux | Verdict | Montant affiché | Phrase affichée |
|---|---|---|---|
| Isolation | sous conditions | jusqu'à 32 000 € | « Possible dans un projet de rénovation globale : jusqu'à 32 000 € selon vos revenus et le gain énergétique obtenu (de 10 % à 80 % du montant des travaux). » |
| Fenêtres et volets | sous conditions | jusqu'à 32 000 € | « Possible si le changement des fenêtres fait partie d'un projet de rénovation globale : jusqu'à 32 000 € selon vos revenus. » |
| Chauffage | sous conditions | jusqu'à 32 000 € | « Possible si le chauffage fait partie d'un projet de rénovation globale avec isolation : jusqu'à 32 000 € selon vos revenus. » |
| Ventilation | sous conditions | jusqu'à 32 000 € | « Possible si la ventilation fait partie d'un projet de rénovation globale avec isolation : jusqu'à 32 000 € selon vos revenus. » |
| Panneaux photovoltaïques | à vérifier | — | « La prise en compte des panneaux photovoltaïques dans une rénovation d'ampleur n'a pas pu être confirmée : nous le vérifions avec vous. » |
| Je ne sais pas encore | sous conditions | jusqu'à 32 000 € | « Possible pour un projet de rénovation globale avec isolation : jusqu'à 32 000 € selon vos revenus et le gain énergétique obtenu. » |

**Prime CEE (certificats d'économies d'énergie)** (nom affiché dans la ligne : « Prime CEE ») — nature : « Prime des fournisseurs d'énergie » — montant maximum : aucun (pas de montant affiché)

*Conditions principales* (affichées dans la ligne dépliée) :
- « Logement construit depuis plus de 2 ans. »
- « Offre du fournisseur acceptée avant de signer le devis (ou au plus tard 14 jours après). »
- « Travaux réalisés par un professionnel RGE. Primes plus élevées pour les revenus modestes. »

*Selon le statut* :

| Statut | Verdict | Phrase affichée |
|---|---|---|
| Propriétaire occupant | oui | « Ouvert aux propriétaires occupants. » |
| Propriétaire bailleur | oui | « Ouvert aux propriétaires bailleurs. » |
| Locataire | sous conditions | « Possible pour les locataires selon les primes proposées. Renseignez-vous aussi auprès de votre propriétaire. » |

*Selon les travaux* :

| Travaux | Verdict | Montant affiché | Phrase affichée |
|---|---|---|---|
| Isolation | oui | — | « Oui, l'isolation fait partie des travaux couverts. Montant variable selon le fournisseur d'énergie et vos revenus. » |
| Fenêtres et volets | oui | — | « Oui, les travaux d'isolation du logement, dont les fenêtres, sont couverts. Montant variable selon le fournisseur et vos revenus. » |
| Chauffage | oui | — | « Oui, notamment avec les primes « coup de pouce » pour remplacer une chaudière au fioul, au gaz ou au charbon. Montant variable selon le fournisseur et vos revenus. » |
| Ventilation | à vérifier | — | « La prise en charge de la ventilation seule n'a pas pu être confirmée : nous le vérifions avec vous. » |
| Panneaux photovoltaïques | à vérifier | — | « La prise en charge des panneaux photovoltaïques n'a pas pu être confirmée : à vérifier. » |
| Je ne sais pas encore | oui | — | « Oui pour la plupart des travaux d'économies d'énergie (isolation, chauffage). Montant variable selon le fournisseur et vos revenus. » |

**Éco-prêt à taux zéro** — nature : « Prêt sans intérêts, accordé par une banque » — montant maximum : 50 000 €

*Conditions principales* (affichées dans la ligne dépliée) :
- « Sans condition de revenus, mais accordé par la banque selon votre capacité de remboursement. »
- « Logement achevé depuis plus de 2 ans, occupé (ou destiné à être loué) en résidence principale. »
- « Remboursement sur 15 ans au plus (20 ans pour une rénovation globale). »

*Selon le statut* :

| Statut | Verdict | Phrase affichée |
|---|---|---|
| Propriétaire occupant | oui | « Ouvert aux propriétaires occupants. » |
| Propriétaire bailleur | oui | « Ouvert aux propriétaires bailleurs, si le logement est loué en résidence principale. » |
| Locataire | non | « Réservé aux propriétaires : en tant que locataire, vous ne pouvez pas en bénéficier. » |

*Selon les travaux* :

| Travaux | Verdict | Montant affiché | Phrase affichée |
|---|---|---|---|
| Isolation | oui | jusqu'à 50 000 € | « Oui : jusqu'à 15 000 € pour un seul type de travaux, 30 000 € pour trois, et 50 000 € pour une rénovation globale. » |
| Fenêtres et volets | oui | jusqu'à 7 000 € | « Oui : jusqu'à 7 000 € pour les fenêtres seules, davantage si elles sont combinées à d'autres travaux. » |
| Chauffage | oui | jusqu'à 15 000 € | « Oui, pour un chauffage performant (pas pour une chaudière au gaz) : jusqu'à 15 000 € seul, davantage combiné à d'autres travaux. » |
| Ventilation | à vérifier | — | « La ventilation seule n'a pas pu être confirmée parmi les travaux finançables : nous le vérifions avec vous. » |
| Panneaux photovoltaïques | à vérifier | — | « Les panneaux photovoltaïques n'ont pas pu être confirmés parmi les travaux finançables : à vérifier. » |
| Je ne sais pas encore | oui | jusqu'à 50 000 € | « Oui pour des travaux d'économies d'énergie : jusqu'à 50 000 € selon l'ampleur du projet. » |

**TVA à 5,5 %** — nature : « Taux réduit appliqué directement sur la facture de l'artisan » — montant maximum : aucun (pas de montant affiché)

*Conditions principales* (affichées dans la ligne dépliée) :
- « Logement achevé depuis plus de 2 ans (résidence principale ou secondaire). »
- « Appliquée directement par l'artisan sur le devis et la facture. »

*Selon le statut* :

| Statut | Verdict | Phrase affichée |
|---|---|---|
| Propriétaire occupant | oui | « Ouvert aux propriétaires occupants. » |
| Propriétaire bailleur | oui | « Ouvert aux propriétaires bailleurs. » |
| Locataire | oui | « Ouvert aussi aux locataires. » |

*Selon les travaux* :

| Travaux | Verdict | Montant affiché | Phrase affichée |
|---|---|---|---|
| Isolation | oui | — | « Oui, l'isolation thermique bénéficie de la TVA à 5,5 %. » |
| Fenêtres et volets | oui | — | « Oui, les fenêtres isolantes bénéficient de la TVA à 5,5 % (travaux d'isolation thermique). » |
| Chauffage | oui | — | « Oui pour un chauffage économe ou renouvelable, dont les pompes à chaleur. Une chaudière au gaz reste à 20 %. » |
| Ventilation | oui | — | « Oui, la ventilation bénéficie de la TVA à 5,5 %. » |
| Panneaux photovoltaïques | à vérifier | — | « Le taux de TVA des panneaux photovoltaïques relève de règles spécifiques non vérifiées ici : à vérifier avec votre artisan. » |
| Je ne sais pas encore | oui | — | « Oui pour l'isolation, le chauffage économe, la ventilation et l'eau chaude. » |

**Textes fixes** (même fichier) :
- Mention obligatoire : « Estimation indicative. Les aides évoluent régulièrement et dépendent de critères précis : revenus, logement, nature des travaux. »
- Note outre-mer : « En outre-mer, les aides suivent des règles spécifiques (la rénovation d'ampleur MaPrimeRénov' ne s'y applique pas, et les montants peuvent différer). Les résultats ci-dessous sont donnés pour la métropole : nous vérifions votre situation avec vous. »
- Département « oui » : « Votre département propose une aide à la rénovation. Nous vérifions avec vous les conditions. »
- Département « non » : « Aucune aide départementale identifiée. D'autres aides locales peuvent exister dans votre secteur : nous les vérifions avec vous. »
- Département « inconnu » : « Des aides locales existent peut-être dans votre secteur. Nous les vérifions avec vous. »

**Aides régionales** (aucun montant) :

| Région | Statut | Dispositif | Source | Vérifiée le |
|---|---|---|---|---|
| Auvergne-Rhône-Alpes | inconnu | — | https://www.auvergnerhonealpes.fr/aides | 2026-10-08 |
| Bourgogne-Franche-Comté | oui | « Effilogis » | https://www.bourgognefranchecomte.fr/node/375 | 2026-10-08 |
| Bretagne | inconnu | — | https://www.bretagne.bzh/aides/ | 2026-10-08 |
| Centre-Val de Loire | oui | « Centre-Val de Loire Rénovation (prêt rénovation) » | https://renovation.centre-valdeloire.fr/votre-projet/financement/pret-renovation/ | 2026-10-08 |
| Corse | oui | « Aide à la rénovation énergétique de l'AUE (Agence d'urbanisme et d'énergie de la Corse) » | https://www.aue.corsica/L-AUE-facilite-la-renovation-energetique-de-votre-logement-individuel-_a1007.html | 2026-10-08 |
| Grand Est | oui | « Climaxion (dont le service Oktave) » | https://www.climaxion.fr/particuliers-coproprietes | 2026-10-08 |
| Hauts-de-France | oui | « Aide à la rénovation énergétique des logements (AREL) » | https://www.hautsdefrance.fr/aide-la-renovation-energetique-la-region-ouvre-la-plateforme-de-demande-en-ligne/ | 2026-10-08 |
| Île-de-France | non | — | https://www.iledefrance.fr/chauffages | 2026-10-08 |
| Normandie | oui | « Chèque éco-énergie Normandie » | https://www.normandie.fr/idee-action-cheque-eco-energie-normandie-aide-travaux | 2026-10-08 |
| Nouvelle-Aquitaine | oui | « Aide à l'accompagnement de la rénovation énergétique (audit, accompagnement des travaux, maîtrise d'œuvre) » | https://les-aides.nouvelle-aquitaine.fr/economies-denergie | 2026-10-08 |
| Occitanie | inconnu | — | https://renovoccitanie.laregion.fr/renover-son-bien | 2026-10-08 |
| Pays de la Loire | oui | « Aide régionale aux économies d'énergie pour les particuliers (AREEP) » | https://www.paysdelaloire.fr/les-aides/aide-regionale-aux-economies-denergie-pour-les-particuliers-areep | 2026-10-08 |
| Provence-Alpes-Côte d'Azur | oui | « Chèque énergie durable » | https://www.maregionsud.fr/aides-et-appels-a-projets/detail/cheque-energie-durable | 2026-10-08 |

Phrases de la ligne « Région » :
- « oui » : « Votre région propose une aide à la rénovation : {dispositif}. Nous vérifions avec vous les conditions. »
- « non » : « Aucune aide régionale identifiée pour les particuliers. D'autres aides locales peuvent exister dans votre secteur : nous les vérifions avec vous. »
- « inconnu » : « Des aides locales existent peut-être dans votre secteur. Nous les vérifions avec vous. »
- « outre-mer » : « Des aides locales existent peut-être dans votre secteur. Nous les vérifions avec vous. »

### E. Formulaire de contact (remplace le résultat dans le même bloc)
- « ← Revenir à mes résultats »
- Titre : « Obtenir une estimation précise de vos aides »
- « Un artisan du collectif étudie votre situation et vous indique les montants exacts auxquels vous avez droit. »
- Étiquettes : « Prénom », « E-mail », « Téléphone »
- Bouton : « Recevoir mon estimation » ; pendant l'envoi : « Envoi en cours… »
- Erreurs : « Indiquez votre prénom. » · « Indiquez une adresse e-mail valide, par exemple jean.dupont@exemple.fr. » · « Indiquez un numéro de téléphone (10 chiffres). »
- Succès : « Merci ! Votre demande a bien été envoyée. Un artisan du collectif vous recontacte très vite. »
- Échecs : le message renvoyé par Web3Forms, à défaut « Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer. » · serveur injoignable : « Impossible de joindre le serveur. Veuillez vérifier votre connexion et réessayer. »
- Mention : « Vos coordonnées servent uniquement à vous recontacter au sujet de votre projet. Elles ne sont ni revendues ni utilisées à d'autres fins. Vous pouvez demander leur suppression à tout moment. »
- Champs techniques Web3Forms : sujet « Demande d'estimation des aides (simulateur Akelia) », expéditeur « Akelia Simulateur »

### F. Sans JavaScript
- « Le simulateur a besoin de JavaScript pour fonctionner. Pour connaître les aides auxquelles vous avez droit, contactez-nous : nous étudions votre projet avec vous. » (le lien porte sur « contactez-nous : nous étudions votre projet avec vous », vers `/devis`). Depuis l'étape 17, le message est sur fond blanc pour rester lisible sur le fond bleu nuit.

### G. Section Méthode (page d'accueil, juste après le hero)

*Bloc 1 : les 4 étapes et le schéma évolutif* (`MethodeEtapes.astro`, `src/data/methode.ts` ; **textes fournis le 13 octobre 2026**, repris mot pour mot)
- Titre (h2) : « Le secret d'une rénovation rentable : faire les choses dans l'ordre. »
- Introduction : « Changer sa chaudière avant d'isoler, c'est acheter une pompe à chaleur trop puissante pour rien. Découvrez les 4 étapes incontournables pour investir au bon endroit. »
- Phrase d'aide au-dessus des onglets *(rédigée par Claude, à valider)* : « Cliquez sur une étape : le schéma change. » (à la souris) ou « Touchez une étape : le schéma change. » (au doigt)
- Au-dessus du titre de chaque panneau : « Étape 1 sur 4 » … « Étape 4 sur 4 » *(rédigé par Claude)*
- 1 · « Audit de la situation » — sous-texte « Comprendre avant d'agir » — détail : « Analyser les qualités et les faiblesses de votre habitat pour établir un plan précis, adapté à votre logement et à votre budget. »
- 2 · « Isoler et ventiler » — sous-texte « Réduire les besoins » — détail : « C'est l'étape la plus importante : moins votre maison perd de chaleur, moins elle a besoin d'énergie. Et une fois le logement rendu étanche, il lui faut une ventilation efficace pour éviter l'humidité. »
- 3 · « Produire de l'énergie » — sous-texte « Ce que votre toit peut donner » — détail : « Identifier ce que votre logement peut produire — ensoleillement, surface de toiture, orientation — avant de choisir vos équipements. »
- 4 · « S'équiper » — sous-texte « Le bon matériel, bien dimensionné » — détail : « Une fois le bien isolé et la production connue, choisir le système adapté : chauffage, thermostat, borne de recharge, batterie, domotique. »
- Annotations du schéma *(rédigées par Claude)* : « déperditions », « caméra thermique », « VMC », « isolant », « panneaux solaires », « pompe à chaleur », « radiateur », « thermostat », « borne ».
- Descriptions du schéma pour les lecteurs d'écran *(rédigées par Claude, une par état, dans `src/data/methode.ts`, champ `schema`)*.

*Section « Deux façons de faire »* (`MethodeFacons.astro`, refonte du 13 octobre 2026 ; **tout est fourni** ce jour-là, repris tel quel ; les anciens textes longs sont supprimés)
- Titre (h2) : « Deux façons de faire » (remplace « Vous pilotez, ou on pilote ? »)
- Option 1, citation : « « Je veux rénover, mais je ne sais pas par où commencer » » — texte : « Un spécialiste du collectif coordonne tout, du premier rendez-vous à la fin du chantier. » — lien : « Demander un accompagnement → » (vers `/devis`)
- Option 2, citation : « « Je sais ce que je veux, il me faut le bon artisan » » — texte : « Vous travaillez en direct avec l'artisan Akelia de votre secteur. Il vient chez vous, il chiffre, il réalise. » — lien : « Voir nos solutions → » (vers `/services`)
- Texte alternatif de l'illustration : « Maison en cours de rénovation, avec échafaudage, matériaux d'isolation et panneaux solaires prêts à être posés. »
- La flèche « → » des liens est décorative (non lue par les lecteurs d'écran).

### H. Section Collectif (page d'accueil, après le simulateur, avant les articles)

*Tous les textes sont fournis (étape 25), repris mot pour mot* (`Collectif.astro`). Seule retouche, typographique : espace insécable avant les trois « : », pour ne jamais laisser le signe seul en début de ligne.
- Titre (h2) : « La force d'un réseau national, le sérieux d'un artisan local. »
- Paragraphe 1 : « Avec Akelia, vous bénéficiez du meilleur des deux mondes : la force d'un collectif national et l'engagement d'une entreprise artisanale proche de chez vous. »
- Paragraphe 2 : « Derrière la marque Akelia, des entreprises artisanales indépendantes unissent leur savoir-faire et leurs exigences pour vous offrir un accompagnement fiable, de votre premier contact jusqu'à l'entretien de vos installations. »
- Paragraphe 3 (semi-gras, barre orange à gauche) : « Pas d'intermédiaire, pas de prestataire anonyme. Un interlocuteur identifié, des engagements clairs et un suivi dans la durée. »
- Intertitre (h3) : « Avec Akelia, vos travaux en toute confiance »
- 1 · « Un interlocuteur unique, responsable de votre chantier. » — « Vous traitez directement avec l'artisan qui réalise vos travaux. Sur un projet qui mobilise plusieurs corps de métier, un accompagnateur du collectif coordonne l'ensemble. Dans les deux cas, une seule personne connaît votre dossier et s'engage à vos côtés. »
- 2 · « Un artisan proche de chez vous. » — « Des entreprises implantées localement, à moins de 30 minutes de votre domicile, pour privilégier la proximité, faciliter les échanges et vous apporter une réponse rapide lorsque vous en avez besoin. »
- 3 · « Un suivi qui ne s'arrête pas à la fin du chantier. » — « Votre installation est réalisée, puis entretenue par la même entreprise. Et si une panne survient, vous savez qui contacter : votre artisan reste votre interlocuteur pour le dépannage. »
- 4 · « Un devis clair, détaillé et sans surprise. » — « Nature des travaux, montant des aides estimées et reste à charge : vous disposez d'une vision précise du coût de votre projet avant de vous engager. Tout est expliqué, tout est écrit. »
- 5 · « Des professionnels assurés et certifiés RGE. » — « Chaque entreprise du réseau dispose de sa propre assurance décennale et de la qualification RGE requise pour les travaux concernés, afin de vous apporter des garanties concrètes et de faciliter l'accès aux aides auxquelles vous pouvez prétendre. »

---

## Source analysée

- Fichier : `Données webflow/akelia_site_complet/assets/akelia.webflow.shared.215291576.css` (12 145 lignes). Il existe 3 copies identiques dans le dossier Webflow.
- Le socle Webflow (reset avant `:root` et classes `.w-*`) est exclu. Seuls les styles propres au site sont comptés : 1 654 règles.
- Les pages HTML exportées ne contiennent aucun CSS inline coloré ni chargement de police web.
- Breakpoints Webflow : `max-width` 991 / 767 / 479 px. Webflow part du grand écran, Tailwind part du mobile.

---

## 1. Couleurs

Le chiffre « Occ. » compte les occurrences de la couleur et de ses variantes transparentes.

### Couleurs structurantes

| Hex | Occ. | Rôle observé | Nom proposé |
|---|---|---|---|
| `#22323e` (+ variantes à 99, e6, f2, fa) | ≈ 55 | Fond du footer, de la nav et des menus ; texte des h2/h3 | `--color-marque-900` |
| `#f8ab01` | ≈ 50 | Accent : bordure et texte des CTA (`.cta`, 114 boutons), mises en avant | `--color-action-500` |
| `#e69e00` | 1 | Texte du `.cta` (orange plus foncé) | `--color-action-600` |
| `#000` | 51 | Texte principal (body, h1) **et** 29 bordures | `--color-texte` |
| `#fff` | 35 | Fond de page, texte sur fond sombre | `--color-fond` / `--color-texte-inverse` |
| `#5dcefb` | 21 | Accent secondaire : sous-titres, liens blog, CTA « autre article » | `--color-secondaire-400` |
| `#0093ce` | 1 | Survol de ce même CTA | `--color-secondaire-600` |
| `#38adec` (+ alpha) | 16 | Bleu des mots en gras, `.button-2`, fonds teintés | `--color-secondaire-500` |
| `#e2f4f8` (+ alpha 4d) | 17 | Fonds de section clairs | `--color-secondaire-50` |
| `#1da30f` | 7 | Boutons de validation : « Suivant », envoi, téléphone | `--color-succes-600` |
| `#ff0256` | 6 | Mots soulignés en rose, mauvaises notes | `--color-alerte-500` |
| `#fff3cd` | 10 | Fonds de cartes service et d'encarts « En bref » | `--color-action-50` |

### Couleurs secondaires et quasi-doublons à fusionner

| Groupe | Couleurs trouvées | Proposition |
|---|---|---|
| Doublon exact dans les variables Webflow | `--bleu-clair-pale` et `--bleu-pale_service`, toutes deux `#e2f4f8` | Une seule variable |
| Bleu nuit | `#22323e`, `#202c52` (sous-menu de la nav) | Garder `#22323e` |
| Bleus vifs | `#5dcefb`, `#38adec`, `#00c6ff`, `#4287ac` | Deux teintes au maximum (400 et 500) |
| Bleus pâles | `#e2f4f8`, `#f0f7ff`, `#eff6ff`, `#cde2ff`, `#d2e2e9` | `secondaire-50` et `secondaire-100` |
| Oranges et ors | `#f8ab01`, `#ffa900`, `#e69e00`, `#f7b844` (tél. du header, footer), `#eebe30`, `#ba8a34` et `#ddb365` (footer, icône du menu) | `action-400/500/600` ; `#ba8a34` et `#ddb365` à trancher |
| Crèmes | `#fff3cd`, `#fff2cc`, `#fcf1e1`, `#faf1ca`, `#fbfce6` | `action-50` et `action-100` |
| Verts | `#1da30f`, `#05b11c`, `#339b31`, `#6aa84f`, `#5cc56a`, `#81e28e`, `#155e1e` | `succes-600`, avec éventuellement `succes-400` |
| Verts pâles | `#e8f5e9`, `#edf5e2`, `#ccffdc` | `succes-50` |
| Rouges et roses | `#ff0256`, `#ff0206`, `#fc3131`, `#ca0808`, `#ee4842`, `#ee4f4f` | `alerte-500` et `alerte-700` ; `#fc3131` pour les erreurs de formulaire |
| Rose pâle | `#fce4ec` (2) | `alerte-50` |
| Gris de texte secondaire | `#333`, `#383838`, `#494949`, `#535353`, `#555`, `#5f5c5c`, `#616060`, `#807878`, `#818080`, `#858585`, `#8a8a8a`, `#8d8686`, `#a09d9d`, `#a8a8a8`, `#b3b1aa` (5) | Trois teintes : `neutre-700`, `neutre-500`, `neutre-400` |
| Gris de bordure | `#adabab`, `#b9b4b4`, `#bdbdbd`, `#c2c2c2`, `#d1d1d1`, `#d8d8d8` | `--color-bordure` ≈ `#d1d1d1` |
| Gris de fond | `#f3f3f5` (champs de formulaire), `#f8f8f8`, `#fafafa`, `#f1f1f1`, `#e9e9e9` | `neutre-50` et `neutre-100` |
| Couleurs isolées (1 occurrence) | `#a881b6`, `#b66b76`, `#7f944c`, `#3f2594` (frise chronologique), `#0030d8`, `#6faebb`, `#977` | À ne pas intégrer à la charte |

**Bordures :** 29 bordures sont en noir pur (`1px solid #000`, avec des variantes à .5, 1.5 et 2px). Proposition : les passer à `--color-bordure`. C'est un changement visuel, à valider.

---

## 2. Typographie

**Famille :** aucune police web n'est chargée (ni Google Fonts, ni Typekit, ni `@font-face` hors icônes Webflow). Tout le site utilise la pile système :

```
system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif
```

Proposition : `--font-base` avec cette pile, sauf si la refonte adopte une vraie police de marque.

**Graisses :** 400 (44), 500 (29), 600 (22), 300 (21), 200 (13), 700 (5), 800 (1), 100 (1).

Point d'attention : le texte courant est en **300** et 13 textes sont en **200**. Avec une police système, le rendu varie selon l'appareil : Segoe UI n'a pas de graisse 200, par exemple. Recommandation : se limiter à 300, 400, 500, 600 et 700.

### Échelle observée

| Élément | Bureau | ≤ 767 px | ≤ 479 px | Graisse | Couleur |
|---|---|---|---|---|---|
| Texte courant (`body`) | **1.16rem** / interligne 1.875rem | — | 1rem | 300 | `#000` |
| h1 | 3rem / 3rem | 2.3rem / 2.8rem | — | 400 | `#000` |
| h1 de l'accueil | 2.8rem / 3.3rem | — | 2.2rem | 500 | — |
| h2 (balise) | 2rem / 2.5rem | — | 2rem | 400 | bleu nuit |
| **Titres de section** (classes) | **3 à 3.5rem** / 3rem | 2.5 à 2.8rem | 2.5rem | 500 à 600 | — |
| h3 | 24px / 30px (valeur du socle Webflow) | — | 1.5rem / 1.8rem | 500 | bleu nuit |
| h4 | 1.4rem / 2rem | — | — | 400 | — |
| Petit texte | .9rem (9 fois) et .8rem (14 fois) | | | | |

Tailles les plus fréquentes : 1rem (≈ 80 fois en comptant les media queries), .8, 1.5, .9, 1.1, 2, 3, 2.5, 3.5, 1.8 et 4rem. Il reste aussi quelques valeurs en px (20, 35, 42 px).

**Incohérence à trancher :** les titres de section (3 à 3.5rem) sont **plus grands que le h1** (3rem).

### Échelle proposée

| Variable | Valeur |
|---|---|
| `--text-display` | 3.5rem (hero, gros titres de section) |
| `--text-h1` | 3rem |
| `--text-h2` | 2rem, ou 2.5rem si les titres de section deviennent des h2 |
| `--text-h3` | 1.5rem |
| `--text-h4` | 1.25 à 1.4rem |
| `--text-corps` | 1.125rem, interligne 1.75 (arrondi de 1.16rem) |
| `--text-base` | 1rem |
| `--text-petit` | .9rem |
| `--text-legende` | .8rem |

Chaque taille aura son interligne via `--text-h1--line-height` (syntaxe Tailwind v4).

---

## 3. Espacements

Valeurs individuelles les plus fréquentes dans les marges, paddings et gaps :

| Valeur | Occ. | | Valeur | Occ. |
|---|---|---|---|---|
| 10px | 254 | | 30px | 35 |
| 20px | 209 | | 80px | 24 |
| 5px | 156 | | 100px | 24 |
| 40px | 75 | | 25px | 21 |
| 15px | 74 | | 8px | 15 |
| 16px | 61 (gap par défaut de Webflow) | | 50px | 12 |
| 60px | 37 | | 120 et 140px | 8 et 6 |

**L'échelle réelle est un multiple de 5px :** 5, 10, 15, 20, 30, 40, 60, 80, 100, 120.

### Proposition en deux couches

- **Base Tailwind :** `--spacing: 0.3125rem` (soit 5px). On aurait alors `p-1` = 5px, `p-2` = 10, `p-4` = 20, `p-8` = 40, `p-12` = 60, `p-16` = 80, `p-20` = 100. Cette base s'applique aussi aux largeurs et hauteurs Tailwind (`w-*`, `h-*`). L'alternative est de garder la base de 4px de Tailwind, qui retombe moins bien sur ces valeurs.
- **Noms par rôle :** `--spacing-section` (80px, 40px sur mobile), `--spacing-bloc` (40px), `--spacing-gouttiere` (20px).
- **Conteneurs :** `max-width` vaut 1250px (15 fois) ou 1400px (14 fois). D'où `--container-site: 1250px` et `--container-large: 1400px`.
- **Breakpoints :** les équivalents Tailwind des seuils Webflow seraient `--breakpoint-sm: 30rem`, `--breakpoint-md: 48rem` et `--breakpoint-lg: 62rem` (480, 768 et 992 px).

---

## 4. Arrondis et ombres

### Rayons de bordure

Observés : 10px (≈ 22), 5px (14), 15px (≈ 16), 25px (10), 20px (10), 3px (7), 8px (≈ 8, celui des CTA), 6px (5), 4px (4), 30px (4), 7px (2), 40px (2). Il y a aussi des cercles (50, 100, 200px, 100 %).

| Variable | Valeur | Valeurs Webflow fusionnées |
|---|---|---|
| `--radius-petit` | 5px | 3 à 6px |
| `--radius-bouton` | 8px | 7 et 8px |
| `--radius-carte` | 10px | — |
| `--radius-bloc` | 15px | 12 à 17px |
| `--radius-section` | 25px | 20 à 30px |
| `--radius-pilule` | 9999px | 40, 50, 100, 200px, 100 % |

### Ombres

Environ 30 ombres distinctes, toutes en noir avec transparence. Elles se ramènent à 4 usages :

| Usage observé | Exemples | Proposition |
|---|---|---|
| Assombrir un bouton au survol (ce n'est pas vraiment une ombre) | `inset 0 0 5px 100px #00000026`, 7 fois | Remplacer par un `hover:` sur la couleur 600, ou `--inset-shadow-assombrir` |
| Carte légère | `0 2px 5px #0003`, `0 2px 5px 1px #00000026`, `2px 2px 2px 2px #0000000d` | `--shadow-legere: 0 2px 5px #00000026` |
| Carte, bloc de blog | `0 0 11px 1px #00000029`, `0 2px 11px #00000047` | `--shadow-carte: 0 2px 11px #00000029` |
| Survol d'une carte | `0 2px 11px 5px #0000004d`, `0 0 8px 7px #0000001f` | `--shadow-elevee: 0 4px 12px 4px #0000004d` |
| CTA enfoncé au survol | `inset 0 0 5px 6px #0000001a, 0 2px 5px 3px #00000040` | `--inset-shadow-presse` |

---

## Fichier cible du bloc `@theme`

- Le bloc sera écrit dans **`src/styles/global.css`**, juste après `@import "tailwindcss";`. Pour l'instant, le fichier ne contient que cette ligne.
- Il est importé dans `src/layouts/Layout.astro` (ligne 7 : `import '../styles/global.css';`).
- Le plugin `@tailwindcss/vite` (v4.3) est branché dans `astro.config.mjs`.
- Seule `src/pages/aides-renovation.astro` n'importe pas encore `Layout`, car elle ne contient qu'une ligne de commentaire.

## Récapitulatif : décisions prises et contenu du `@theme`

> Mis à jour le 8 octobre 2026, à la fin de l'étape 16 (titre, suppression des renvois vers France Rénov', hauteur automatique).

Les sections 1 à 4 ci-dessus décrivent l'**ancien site** et les propositions initiales. Ce qui fait foi désormais est le tableau ci-dessous, qui reprend exactement ce qui est écrit dans `src/styles/global.css`.

### Décisions validées

| # | Sujet | Décision |
|---|---|---|
| 1 | Police | Source Sans 3 (Google Fonts), graisses 400, 600 et 700, avec une pile système de secours. L'import est placé **avant** `@import "tailwindcss"`. |
| 2 | Graisses | 100, 200 et 300 abandonnées. Texte courant en **400** (au lieu de 300) : décision d'accessibilité pour un public senior. |
| 3 | Couleurs | Fusions de l'inventaire appliquées, nommage par rôle. Couleurs à occurrence unique exclues. **Bordures noires conservées** (choix volontaire). |
| 4 | Titres | Inversion corrigée : le h1 est le plus grand titre de page. `display` (3.5rem) est réservé au hero. |
| 5 | Texte courant | 1.125rem, interligne 1.75, graisse 400, noir sur blanc. |
| 6 | Espacement | Base Tailwind de 4px conservée (`--spacing` non redéfini). Seuls trois espacements nommés sont ajoutés. |
| 7 | Conteneurs et breakpoints | Comme proposé dans l'inventaire. |
| 8 | Arrondis et ombres | Comme proposé dans l'inventaire. |
| 9 | Survol des boutons *(étape 2)* | Ajout de `action-600` et `secondaire-600`, malgré la règle de l'occurrence unique : elles sont indispensables pour que les boutons réagissent au survol. |
| 10 | Titres sur mobile *(étape 2)* | En dessous de 768px (md) : h1 à 2.2rem et display à ~~2.4rem~~ **1.75rem** (réduit à l'étape 5). **Le texte courant reste à 1.125rem sur tous les écrans** (accessibilité). |
| 11 | Graisses des composants *(étape 2)* | `font-medium`, `font-extrabold` et `font-black` migrées vers 400, 600 ou 700 selon le contexte. |

### Contenu effectif du `@theme`

**Police**

| Variable | Valeur | Classe |
|---|---|---|
| `--font-base` | `"Source Sans 3", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` | `font-base` |
| `--font-weight-thin`, `--font-weight-extralight`, `--font-weight-light` | `initial` (supprimées) | — |

**Couleurs**

| Variable | Valeur | Usage |
|---|---|---|
| `--color-marque-900` | `#22323e` | Fond du header, de la nav et du footer |
| `--color-action-50` | `#fff3cd` | Fond crème : cartes service, encarts « En bref » |
| `--color-action-100` | `#fcf1e1` | Fond pêche : tableaux, blocs avantages |
| `--color-action-400` | `#f7b844` | Téléphone du header, contact du footer |
| `--color-action-500` | `#f8ab01` | Boutons et bordures des CTA |
| `--color-action-600` | `#e69e00` | Survol des boutons action *(étape 2)* |
| `--color-secondaire-50` | `#e2f4f8` | Fond de section clair |
| `--color-secondaire-100` | `#cde2ff` | Fond bleu plus soutenu (encadrés) |
| `--color-secondaire-400` | `#5dcefb` | Sous-titres, boutons du blog |
| `--color-secondaire-500` | `#38adec` | Mots en gras, boutons secondaires |
| `--color-secondaire-600` | `#0093ce` | Survol des boutons secondaires *(étape 2)* |
| `--color-succes-50` | `#e8f5e9` | Fond de message de confirmation |
| `--color-succes-600` | `#1da30f` | Boutons « Suivant », « Envoyer », téléphone |
| `--color-alerte-50` | `#fce4ec` | Fond d'encart d'avertissement |
| `--color-alerte-500` | `#ff0256` | Mots soulignés en rose, mauvaises notes |
| `--color-alerte-600` | `#fc3131` | Messages d'erreur des formulaires |
| `--color-alerte-700` | `#ca0808` | Points négatifs importants |
| `--color-neutre-50` | `#f3f3f5` | Fond des champs de formulaire |
| `--color-neutre-100` | `#e9e9e9` | Fond gris clair : cartes, survols |
| `--color-neutre-400` | `#b3b1aa` | Textes très secondaires |
| `--color-neutre-500` | `#818080` | Dates, légendes |
| `--color-neutre-700` | `#535353` | Texte secondaire lisible |
| `--color-bordure` | `#000` | Bordure standard (noire) |
| `--color-bordure-douce` | `#d1d1d1` | Bordure grise de séparation |
| `--color-fond` | `#fff` | Fond des pages |
| `--color-texte` | `#000` | Texte courant |
| `--color-texte-inverse` | `#fff` | Texte sur fond foncé |

**Tailles de texte**

| Variable | Taille | Interligne | Graisse | Usage |
|---|---|---|---|---|
| `--text-display` | 3.5rem (**1.75rem** sous 768px, depuis l'étape 5) | 1.1 | 700 | Hero uniquement |
| `--text-h1` | 3rem (**2.2rem** sous 768px) | 1.15 | 700 | Titre principal (`<h1>`) |
| `--text-h2` | 2.5rem | 1.2 | 600 | Titres de section (`<h2>`) |
| `--text-h3` | 1.5rem | 1.3 | 600 | Sous-titres (`<h3>`) |
| `--text-h4` | 1.25rem | 1.4 | 600 | Petits titres (`<h4>`) |
| `--text-corps` | 1.125rem | 1.75 | 400 | Texte courant |
| `--text-petit` | 0.9rem | 1.5 | — | Texte secondaire |
| `--text-legende` | 0.8rem | 1.4 | — | Légendes, dates |

Ces valeurs sont aussi appliquées automatiquement (bloc `@layer base`) au `body` et aux balises h1 à h4, sans classe à ajouter.

**Réduction mobile** *(étape 2)* : sous 768px, `@layer base` redéfinit `--text-display` et `--text-h1` sur `:root`, via `@variant max-md`. La réduction s'applique donc aux balises `<h1>` comme aux classes `text-h1` et `text-display`. Les autres tailles, dont `--text-corps`, ne changent pas.

**Espacements, conteneurs, breakpoints**

| Variable | Valeur | Classe d'exemple |
|---|---|---|
| `--spacing-section` | 5rem (80px) | `py-section` |
| `--spacing-bloc` | 2.5rem (40px) | `gap-bloc`, `mt-bloc` |
| `--spacing-gouttiere` | 1.25rem (20px) | `px-gouttiere` |
| `--container-site` | 78.125rem (1250px) | `max-w-site` |
| `--container-large` | 87.5rem (1400px) | `max-w-large` |
| `--breakpoint-sm` | 30rem (480px) | `sm:` |
| `--breakpoint-md` | 48rem (768px) | `md:` |
| `--breakpoint-lg` | 62rem (992px) | `lg:` |

`xl:` et `2xl:` gardent les valeurs par défaut de Tailwind.

**Arrondis et ombres**

| Variable | Valeur | Classe |
|---|---|---|
| `--radius-petit` | 5px | `rounded-petit` |
| `--radius-bouton` | 8px | `rounded-bouton` |
| `--radius-carte` | 10px | `rounded-carte` |
| `--radius-bloc` | 15px | `rounded-bloc` |
| `--radius-section` | 25px | `rounded-section` |
| `--radius-pilule` | 9999px | `rounded-pilule` |
| `--shadow-legere` | `0 2px 5px #00000026` | `shadow-legere` |
| `--shadow-carte` | `0 2px 11px #00000029` | `shadow-carte` |
| `--shadow-elevee` | `0 4px 12px 4px #0000004d` | `shadow-elevee` |
| `--inset-shadow-assombrir` | `inset 0 0 0 100px #00000026` | `inset-shadow-assombrir` |
| `--inset-shadow-presse` | `inset 0 0 5px 6px #0000001a` | `inset-shadow-presse` |

### Écarts par rapport à l'inventaire initial

- **Couleurs écartées** car à occurrence unique : aucune parmi celles qui étaient proposées. `#e69e00` et `#0093ce`, d'abord écartées, ont été réintégrées à l'étape 2 (décision 9).
- **Ors du footer** (`#ba8a34`, `#ddb365`) non intégrés : ils étaient « à trancher ».
- **`succes-400`** (marqué « éventuellement ») non créé.
- **`--color-bordure-douce` ajouté** (`#d1d1d1`) pour regrouper les 6 gris de bordure, puisque `--color-bordure` reste noir.
- **Graisse des titres** choisie par Claude : 700 pour display et h1, 600 pour h2 à h4.
- **Réduction des titres sur mobile** : ajoutée à l'étape 2 (décision 10).
- **Palette Tailwind par défaut conservée** (`slate`, `emerald`…), car les composants existants l'utilisent.

### Points ouverts

**Réglés à l'étape 2**

| Sujet | Ce qui a été fait |
|---|---|
| `package.json` corrompu (ligne 17 : `par   },`) | Ligne restaurée : `"tailwindcss": "^4.3.3"`, d'après `package-lock.json`. Le JSON est valide et `npm install` passe. |
| `src/content/config.ts` à l'ancien format | Remplacé par `src/content.config.ts`, avec un loader `glob()` sur `src/content/blog`. Imports `z` depuis `astro/zod` et `glob` depuis `astro/loaders`. `z.string().url()` devient `z.url()` (Zod 4). Le schéma est inchangé. |
| Code du blog lié à l'ancien format | `post.slug` devient `post.id` (`blog/index.astro`, `blog/[slug].astro`, `ArticleList.astro`). `post.render()` devient `render(post)`. L'import de `blogCategories` pointe vers `../content.config`. |
| `<body>` de `Layout.astro` | Classes `bg-white text-slate-900` retirées (il reste `flex min-h-screen flex-col`). Les couleurs viennent maintenant de `@layer base`. |
| Survol des boutons orange et bleus | `action-600` et `secondaire-600` ajoutées. |
| Titres sur mobile | Réduction du h1 et du display sous 768px. |
| Graisses 500, 800 et 900 dans les composants | Migrées : voir le détail ci-dessous. Il ne reste plus aucune classe `font-medium`, `font-extrabold`, `font-black` ni de graisse fine dans `src/`. |
| Vérification des breakpoints | Faite : voir le compte rendu ci-dessous. Rien n'a été corrigé, en attente de votre accord. |
| Serveur de dev | `astro dev` démarre et `/test-charte` s'affiche (HTTP 200). |

**Détail de la migration des graisses**

| Avant | Après | Où |
|---|---|---|
| `font-extrabold` (800) | `font-bold` (700) | Les h1 de `index`, `services`, `blog`, `blog/[slug]`, `devis` et `mentions-legales` |
| `font-black` (900) | `font-bold` (700) | Logo « Akelia » du Header |
| `font-medium` (500) | `font-semibold` (600) | Bouton d'envoi et messages de retour du formulaire (`devis`), liens « Lire l'article » (`blog`, `ArticleList`), catégorie d'article (`blog/[slug]`) |
| `font-medium` (500) | `font-normal` (400) | Les 4 liens secondaires du haut du Header (Tous nos services, Aides rénovation, Blog, Qui sommes-nous). Les menus principaux, juste en dessous, sont déjà en 600 : ces liens gardent un poids plus léger. |

**Compte rendu des breakpoints** (non corrigé, en attente de votre accord)

Méthode : 6 pages, chacune en deux versions (anciens et nouveaux breakpoints), capturées à 375, 560, 800, 1000 et 1280 px. Les captures sont **identiques au pixel près à 375, 800 et 1280 px**. Les écarts n'apparaissent que dans les deux bandes de largeur concernées.

*Entre 480 et 639 px* (grands téléphones, désormais en mode `sm:`) :

| Page | Ce qui bouge |
|---|---|
| Accueil | Le titre du hero passe de `text-4xl` à `text-6xl` et prend 2 lignes au lieu d'une. Le texte du hero s'aligne à gauche au lieu d'être centré. Les deux boutons passent côte à côte au lieu d'être empilés. |
| Services | Les cartes passent sur **2 colonnes** au lieu d'une. Elles deviennent étroites (≈ 240px) : les titres et les textes se coupent sur 4 à 5 lignes. |
| Devis | Le titre grossit. E-mail et téléphone passent côte à côte : le champ e-mail devient trop étroit et l'exemple `jean.dupont@example.com` est coupé. |
| Mentions légales, article de blog | Marges intérieures plus larges (`sm:px-*`) et titre plus grand : colonne de texte plus étroite, page plus longue. |
| Header | Le bouton « Obtenir un devis » est un peu plus grand. Pas de casse. |

*Entre 992 et 1023 px* (petits ordinateurs, désormais en mode `lg:`) :

| Page | Ce qui bouge |
|---|---|
| Toutes | Le Header passe en **version bureau** : les liens et le méga-menu sur deux lignes remplacent le burger. À 1000px, les deux lignes tiennent. Mais la fin du menu est inconnue (Header tronqué) et les panneaux déroulants font jusqu'à 890px de large : un débordement est possible, à vérifier une fois le Header réparé. |
| Accueil, blog | Les grilles d'articles passent à 3 colonnes : cartes plus étroites, textes coupés sur plus de lignes. |
| Toutes | Marges latérales `lg:px-8` appliquées plus tôt. Pas de casse. |

~~À trancher : la grille à 2 colonnes des services et les champs côte à côte du devis sont trop serrés entre 480 et 640px.~~ **Réglé à l'étape 3** : ces classes sont passées de `sm:` à `md:`.

**Réglés à l'étape 3**

| Sujet | Ce qui a été fait |
|---|---|
| Champs du blog incohérents avec le schéma | Les pages sont alignées sur le schéma : `publishDate` devient `pubDate`, et `image` devient `coverImage` (`blog/index.astro`, `blog/[slug].astro`). Les images passent par le composant `<Image>` d'Astro (WebP, comme dans `ArticleList`). Le Layout reçoit `coverImage.src` pour l'image Open Graph. |
| Image vide `pompe-a-chaleur.jpg` | Remplacée par une **image provisoire** : un rectangle uni `secondaire-50` (`#e2f4f8`) de 1200×675 px. ⚠️ **La vraie image reste à fournir.** |
| Grilles trop serrées entre 480 et 640px | `sm:grid-cols-2` devient `md:grid-cols-2` pour la grille des services (`services/index.astro`) et pour les champs e-mail et téléphone (`devis.astro`). Vérifié : 1 colonne à 560px, 2 colonnes à 800px. |
| Vulnérabilités npm | `npm audit fix` appliqué : 5 paquets mis à jour dans `package-lock.json` (dont `sharp` 0.35.5, `http-cache-semantics` 4.3.0, `source-map-js` 1.2.2). `npm audit` : 0 vulnérabilité. `package.json` est inchangé. Le site compile (8 pages). |
| **Header tronqué** | `src/components/Header.astro` est **entièrement réécrit** (l'ancienne version n'a pas été restaurée). Toutes les pages répondent à nouveau (HTTP 200) et le build passe. |

**Le nouveau Header**

- *(Depuis l'étape 9 : à partir de 1280px.)* **Ordinateur (à partir de 992px)**, sur deux lignes :
  - en haut, le logo, les liens secondaires et le bouton « Obtenir un devis » ;
  - en dessous, le méga-menu à 3 entrées.
- *(Remplacé à l'étape 8 par un comportement hybride : survol à la souris, clic au toucher.)* **Ouverture du méga-menu au clic, et non au survol** : un menu au survol se referme dès que la souris glisse et ne fonctionne pas sur tablette. Un seul panneau est ouvert à la fois. On le ferme par un nouveau clic, la touche Échap ou un clic ailleurs.
- **Panneaux en pleine largeur** : ils ne débordent plus, même à 992px (vérifié). Le risque de débordement de l'ancien menu (panneaux de 890px) est donc écarté.
- *(Depuis l'étape 9 : sous 1280px.)* **Mobile et tablette (sous 992px)** : un bouton « Menu », avec l'icône et le mot écrit, ouvre un tiroir latéral depuis la droite. Il contient :
  - les 3 entrées en accordéon (`<details>`, qui fonctionne sans JavaScript) ;
  - les liens secondaires ;
  - un bouton « Obtenir un devis » fixé en bas.
- **Fermeture du tiroir** : bouton « Fermer », clic sur le fond assombri, touche Échap, ou passage de l'écran au-delà de 992px.
- **Focus clavier** : il va sur « Fermer » à l'ouverture et revient sur « Menu » à la fermeture.
- **Zones cliquables** : 44px minimum, mesurées dans le navigateur à 320, 375, 800, 992 et 1280px. Le plus petit élément fait 44px sur ordinateur et 48px sur mobile.
- **Aucun débordement horizontal** de 320 à 1280px.
- **Sous 360px de large**, le bouton du haut affiche « Devis » pour tenir sur une ligne. Les lecteurs d'écran annoncent toujours « Obtenir un devis ».
- **Couleurs** : uniquement celles de la charte (`marque-900`, `action-500/600`, `secondaire-50`, `neutre-700`, `bordure-douce`, `fond`, `texte`, `texte-inverse`). Aucune couleur Tailwind par défaut (vérifié).
- **Accessibilité** :
  - lien d'évitement « Aller au contenu » ;
  - attributs `aria-expanded` et `aria-controls` sur les boutons ;
  - lien de la page en cours signalé par `aria-current="page"` (en gras et souligné) ;
  - animations désactivées si le système le demande (`motion-reduce`).
- **Menu modifiable en un seul endroit** : le tableau `menuSolutions` en tête du fichier alimente à la fois le menu ordinateur et le tiroir mobile.
- *(Rétabli en partie à l'étape 8 : « Rénovation globale » revient comme lien direct.)* **Retiré par rapport à l'ancien Header** : « Nos villes » et « Rénovation globale », qui ne figuraient pas dans la structure demandée.

**Réalisé à l'étape 4 : section hero de l'accueil**

Le nouveau composant `src/components/Hero.astro` est appelé par `src/pages/index.astro` et remplace l'ancien hero (« L'énergie durable, simplifiée. »).

| Élément | Choix |
|---|---|
| Contenu | Le texte exact fourni : h1 de 17 mots, sous-titre, bouton « Obtenir un devis » vers `/devis`, 8 raccourcis. Aucun texte ajouté. |
| Structure « technique et clair » | Deux blocs nettement séparés. **Bloc 1** : le message, sur fond blanc avec un fin quadrillage façon plan technique (lignes `neutre-100` tous les 2rem, purement décoratif). **Bloc 2** : les raccourcis, sur un bandeau `marque-900` avec des tuiles blanches. Aucune photo. |
| Titre | `text-display`. Ses lignes sont limitées à environ 24 caractères (`max-w-[24ch]`) et équilibrées par le navigateur (`text-balance`). Une barre orange décorative le précède. **Aucun mot souligné**, pour éviter la confusion avec un lien. |
| Lignes du titre (mesuré) | **4 lignes** de 800 à 1440px. Sur mobile, 7 lignes à 375px et 8 à 320px avec l'ancien display mobile (2.4rem). Voir l'étape 5 pour les nouvelles mesures. |
| Mise en page | Empilée jusqu'à 1279px. À partir de 1280px (`xl:`), titre à gauche, sous-titre et bouton dans une colonne de droite. Entre 992 et 1279px, la colonne du titre aurait été trop étroite (6 lignes). |
| Sous-titre | Taille `h4` en graisse 400, couleur `neutre-700` (contraste élevé). |
| Bouton | `action-500`, survol `action-600`, texte noir, 56px de haut. Pleine largeur sur téléphone. |
| Raccourcis | 2 colonnes sur téléphone, 4 sur tablette et petit ordinateur (4×2), **8 en une ligne à partir de 1280px**. Chaque tuile est entièrement cliquable et mesure au moins 128px de haut. |
| Survol et focus | **Survol** : fond `action-50` et cadre orange de 4px. **Focus clavier** : contour orange décalé. |
| Icônes | 8 SVG au trait dessinés à la main (grille 24×24, trait de 1.75, couleur `marque-900`), sans aucune dépendance. Pour modifier une icône, il suffit d'éditer le tableau `raccourcis`. |
| Contrôles | Aucun débordement horizontal de 320 à 1440px. Aucune couleur Tailwind par défaut. Le site compile (8 pages). |

**Réalisé à l'étape 5 : titre du hero sur mobile, et règle de compte rendu**

- **Règle permanente** ajoutée dans `CLAUDE.md` (nouvelle section « Compte rendu ») : tout est consigné dans ce fichier, y compris les questions, dans la section « Questions en attente de réponse » ci-dessous.
- **`--text-display` sous 768px : 2.4rem → 1.75rem.**
  - 1.9rem a d'abord été essayé : à 320×568, le bas du bouton dépassait encore de 7px.
  - On est donc **descendu à 1.75rem, la limite basse autorisée**.
- **Rien d'autre n'a changé** : ni le texte du titre, ni `--text-h1` (2.2rem sur mobile), ni `--text-corps` (1.125rem sur tous les écrans). Au-delà de 768px, le display reste à 3.5rem.

**Mesures**

Relevées dans Chromium sur la page d'accueil, en haut de page, sans défilement. La hauteur d'écran est celle des téléphones courants à chaque largeur.

*À 1.9rem (premier essai, non retenu) :*

| Écran | Lignes du titre | Bouton « Obtenir un devis » | Premières tuiles |
|---|---|---|---|
| 320×568 (iPhone SE 1re gén.) | 7 | ❌ partiellement visible (bas à 575px, dépasse de 7px) | ❌ hors écran |
| 375×667 (iPhone SE 2/3) | 5 | ✅ visible en entier | ✅ visibles (107px) |
| 414×736 (iPhone 8 Plus) | 5 | ✅ visible en entier | ✅ visibles (176px) |

*À 1.75rem (valeur retenue) :*

| Écran | Lignes du titre | Bouton « Obtenir un devis » | Premières tuiles |
|---|---|---|---|
| 320×568 (iPhone SE 1re gén.) | 7 | ✅ visible en entier (bas à 557px, 11px de marge) | ❌ hors écran (69px plus bas) |
| 375×667 (iPhone SE 2/3) | 5 | ✅ visible en entier | ✅ partiellement visibles (120px : icônes et libellés de la 1re rangée) |
| 375×812 (iPhone X à 13 mini) | 5 | ✅ visible en entier | ✅ visibles (265px) |
| 414×736 (iPhone 8 Plus) | 4 | ✅ visible en entier | ✅ visibles (220px) |
| 414×896 (iPhone 11 / XR) | 4 | ✅ visible en entier | ✅ visibles (380px) |

⚠️ **Limite de la mesure** : ces hauteurs sont celles de la fenêtre du navigateur de test. Sur un vrai téléphone, la barre d'adresse et la barre d'outils du navigateur prennent souvent 80 à 130px. À 320px de large, le bouton sera donc probablement caché par ces barres, malgré le passage à 1.75rem. À 375px, il devrait rester visible, avec moins de marge.

**Réalisé à l'étape 6 : hero compacté sur mobile, et réponses aux questions**

*Réponses reçues (questions de l'étape 5)*

| # | Question | Décision |
|---|---|---|
| 1 | Hero sur petit écran | Garder `--text-display` à **1.75rem** (pas plus bas). Resserrer les marges verticales et les tuiles du hero **sur mobile uniquement**. Rien ne change à partir de 768px. |
| 2 | URL « Qui sommes-nous » | Garder **`/qui-sommes-nous`**, l'adresse du site en production. Aucune redirection à prévoir. ⚠️ **Correction d'une erreur de Claude** : `/a-propos` n'a jamais existé. Le fichier `a-propos.html` de l'export Webflow est une page « Not Found » capturée par l'aspirateur de site, et les pages de l'export renvoient 59 fois vers `qui-sommes-nous.html`. |
| 3 | Bouton devis en double | **Garder les deux** (Header et hero) : c'est l'action principale du site, à deux moments différents du parcours. |

*Modifications dans `src/components/Hero.astro`* (sous 768px uniquement ; les valeurs d'origine sont rétablies par les classes `md:`)

| Élément | Avant (mobile) | Après (mobile) | À partir de 768px |
|---|---|---|---|
| Marge au-dessus du contenu | 40px (`py-bloc`) | 16px (`pt-4`) | inchangé (`md:py-section`, 80px) |
| Barre orange | 8px de haut + 24px dessous | 6px + 12px | inchangé (`md:h-2 md:mb-6`) |
| Titre → sous-titre | 32px (`mt-8`) | 12px (`mt-3`) | inchangé (`md:mt-8`) |
| Sous-titre → bouton | 24px (`mt-6`) | 16px (`mt-4`) | inchangé (`md:mt-6`) |
| Sous le bouton | 40px (`py-bloc`) | 24px (`pb-6`) | inchangé |
| Au-dessus des tuiles | 40px (`py-bloc`) | 16px (`py-4`) | inchangé (`md:py-bloc`) |
| Hauteur des tuiles | 128px (`min-h-32`) | **80px** (`min-h-20`) | inchangé (`md:min-h-32`) |
| Contenu des tuiles | icône 40px, espacement 12px, marge 16px | icône 32px, espacement 4px, marge 8/12px, interligne resserré | inchangé |

Note : une tuile dont le libellé passe sur 2 lignes (« Climatisation réversible », « Panneaux photovoltaïques »…) mesure **92px** sur téléphone, et pas 80px. Toute sa rangée prend alors cette hauteur. À 320px, même « Fenêtres et volets » passe sur 2 lignes, donc toutes les tuiles font 92px.

Contrôle de non-régression : à 800px et 1280px, la hauteur du hero (968px et 652px) et celle des tuiles (132px) sont **identiques** aux mesures de l'étape 4. Le site compile (8 pages).

*Mesures* : `--text-display` à 1.75rem. **La hauteur disponible correspond à l'écran moins 120px**, pour simuler les barres du navigateur mobile. Mesures prises dans Chromium, en haut de la page d'accueil.

| Écran | Hauteur disponible | Lignes du titre | Bouton « Obtenir un devis » entièrement visible ? | 1re rangée de raccourcis |
|---|---|---|---|---|
| 320×568 | 448px | 7 | ❌ **Non** : bas du bouton à 491px, 43px de trop | ❌ **Non visible** : commence à 531px, 83px trop bas |
| 375×667 | 547px | 5 | ✅ Oui (bas à 401px, 146px de marge) | ✅ **Entièrement visible** : 80px de haut (441 à 521px), 26px de marge |
| 414×736 | 616px | 4 | ✅ Oui (bas à 370px, 246px de marge) | ✅ **Entièrement visible** : 80px de haut (410 à 490px), 126px de marge |

**Bilan** : l'objectif est atteint à 375px et à 414px. **Il ne l'est pas à 320px**, ni pour le bouton ni pour les raccourcis (voir la question 4).

**Réalisé à l'étape 7 : section 2 de l'accueil, « Méthode »**

*Fichiers*

| Fichier | Rôle | Lignes |
|---|---|---|
| `src/components/Methode.astro` | Assemble les deux blocs. Appelé dans `index.astro` juste après `<Hero />`. | 23 |
| `src/components/MethodeEtapes.astro` | Bloc 1 « Votre logement autonome » : les 4 étapes | 122 |
| `src/components/MethodeFacons.astro` | Bloc 2 « Deux façons de travailler avec nous » : les 2 cartes | 68 |

Découpage en deux sous-composants : un seul fichier aurait dépassé 150 lignes.

*Choix de conception*

| Élément | Choix |
|---|---|
| Contenu | Les textes exacts fournis (2 titres h2, l'introduction, 4 étapes, 2 cartes). Seul ajout : la mention « Étape X sur 4 » au-dessus de chaque titre d'étape. |
| Séparation des blocs | **Bloc 1** sur fond blanc (`fond`). **Bloc 2** sur fond `secondaire-50`, encadré de traits noirs de 2px en haut et en bas. |
| « L'ordre est le message » | (1) Liste numérotée `<ol>`, que les lecteurs d'écran annoncent comme une séquence de 4 éléments. (2) Grandes pastilles numérotées de 48px, chiffre blanc sur `marque-900`. (3) Une ligne bleu nuit de 4px relie les pastilles : **verticale** sur téléphone et tablette (lecture de haut en bas), **horizontale** à partir de 992px (lecture de gauche à droite). Elle s'arrête à l'étape 4. (4) Mention « Étape X sur 4 ». |
| Cartes des étapes | Fond blanc, cadre noir de 2px, icône au trait de 40px (`marque-900`), titre en `text-h4`, texte en `text-corps`. |
| Les 2 façons de travailler | Liste `<ul>` non ordonnée (options équivalentes). Cartes **strictement identiques** : même cadre, même taille, même style d'icône, aucun badge. Empilées sur téléphone, côte à côte et à hauteur égale à partir de 768px. |
| Icônes | 6 SVG au trait dessinés à la main, dans le style du Hero (24×24, trait de 1.75). **Étapes** : loupe sur une maison, maison à double paroi traversée d'un courant d'air, soleil et panneau, thermostat à molette. **Cartes** : deux personnes, boussole. |
| Contrôles | Aucune couleur Tailwind par défaut. Aucun débordement horizontal de 320 à 1280px. Le site compile (8 pages). |

*Mesures de la section complète (blocs 1 et 2)*

| Largeur | Bloc 1 (étapes) | Bloc 2 (façons) | **Total** | Lignes des h2 |
|---|---|---|---|---|
| 320px | 2 050px | 1 176px | **3 226px** | 2 et 3 |
| **375px** | 1 738px | 909px | **2 647px** | 2 et 2 |
| 414px | 1 581px | 877px | 2 458px | 2 et 2 |
| 800px | 1 235px | 647px | 1 882px | 1 et 1 |
| 992px | 846px | 616px | 1 462px | 1 et 1 |
| 1280px | 783px | 553px | 1 336px | 1 et 1 |

**À 375px, la section mesure 2 647px**, soit environ **4,8 écrans** de hauteur utile (667 − 120 = 547px). C'est excessif : le lecteur doit faire défiler longtemps avant la suite de la page.

Causes principales, à 375px :
- la colonne de 72px réservée aux pastilles et à la ligne réduit la largeur du texte à environ 230px, d'où des cartes de 290 à 416px de haut ;
- le h2 reste à 2.5rem sur mobile (seuls h1 et display sont réduits) ;
- les deux cartes du bloc 2 sont empilées.

*Pistes de réduction (aucune appliquée)*. Les gains sont estimés pour 375px, sur le total de 2 647px.

| # | Piste | Gain estimé | Contrepartie |
|---|---|---|---|
| A | Sur téléphone, **placer la pastille dans l'en-tête de la carte**, à côté de l'icône, au lieu d'une colonne à gauche. La ligne verticale reste, plus fine, le long du bord gauche. | 300 à 400px | La progression reste visible, mais moins spectaculaire. |
| B | Sur téléphone, **supprimer la ligne « Étape X sur 4 »**, redondante avec la pastille, et placer l'icône à côté du titre | ≈ 120px | Perte d'un repère de séquence. |
| C | Sur téléphone, **réduire `--text-h2` à 2rem**, comme le h1 et le display sont déjà réduits | ≈ 40 à 60px | Décision de charte globale : tous les h2 du site sont concernés. |
| D | Sur téléphone, **réduire les marges intérieures** des cartes (20px → 16px) et l'espace entre les étapes (32px → 24px) | ≈ 80px | Blocs un peu plus serrés. |
| E | **Raccourcir les textes**, notamment l'étape 2 (2 phrases, la plus longue) | variable | Décision éditoriale. |

En combinant A, B et D, la section passerait à environ 2 000 à 2 150px à 375px, soit environ 3,7 à 3,9 écrans.

*Remarque à 992px* : les 4 étapes tiennent côte à côte, mais dans des colonnes étroites (208px). Elles comptent environ 20 caractères par ligne et 519px de haut. C'est lisible, mais une mise en colonnes à partir de 1280px seulement (`xl:`) donnerait des lignes plus longues entre 992 et 1279px, au prix d'un affichage vertical sur cette plage.

**Réalisé à l'étape 8 : réponses aux questions 4 à 6, et reprise du Header**

*Réponses reçues*

| # | Question | Décision | Appliqué |
|---|---|---|---|
| 4 | Hero à 320px | **(a) Accepter la situation.** Aucune des pistes b à e. Raison : appareils de 2016 devenus marginaux ; tous les leviers restants dégraderaient l'expérience de la majorité. | Rien à faire. **Question close.** |
| 5 | Section « Méthode » trop haute | **A + B + D**, sur téléphone uniquement. Ni C (`--text-h2` inchangé) ni E (textes inchangés). | ✅ Voir ci-dessous |
| 6 | Étapes en colonnes | `lg:` devient **`xl:`** : étapes empilées jusqu'à 1279px, en ligne à partir de 1280px. Des colonnes de 208px avec 20 caractères par ligne sont illisibles pour un public senior. | ✅ Vérifié : 1 colonne à 1100 et 1279px, 4 colonnes à 1280px |

*Section « Méthode » : ce qui a changé*

Trois mises en page selon la largeur :

| Largeur | Pastille | Ligne de liaison | « Étape X sur 4 » | Marge intérieure des cartes | Espace entre étapes |
|---|---|---|---|---|---|
| Téléphone (< 768px) | **Dans l'en-tête de la carte** (40px), puis icône (32px) et titre sur la même ligne | **Fine (2px)**, le long du bord gauche | **Supprimée** | **16px** | **24px** |
| Tablette et petit ordinateur (768 à 1279px) | Colonne à gauche (48px), comme avant | Épaisse (4px), verticale | Affichée | 20px | 32px |
| Grand écran (≥ 1280px) | Au-dessus de la carte | Épaisse, horizontale | Affichée | 20px | 40px |

Nouveau sous-composant `src/components/MethodeEtape.astro` (72 lignes), qui affiche une étape. `MethodeEtapes.astro` serait sinon passé à 151 lignes ; il en fait maintenant 106.

*Mesures de la section « Méthode »* (blocs 1 et 2)

| Largeur | Avant (étape 7) | **Après (étape 8)** | Écart |
|---|---|---|---|
| 320px | 3 226px | **2 746px** | −480px |
| **375px** | 2 647px | **2 210px** | **−437px (−17 %)** |
| 414px | 2 458px | **2 147px** | −311px |
| 800px | 1 882px | 1 882px | inchangé (mise en page tablette identique) |
| 992px | 1 462px | 1 819px | +357px : les étapes sont désormais empilées (question 6) |
| 1280px | 1 336px | 1 336px | inchangé |

À 375px, la section représente encore environ **4 écrans** de hauteur utile (547px), contre 4,8 auparavant. Le gain réel (−437px) est **un peu inférieur à l'estimation** de l'étape 7 (2 000 à 2 150px visés). L'écart vient surtout du bloc 2 « Deux façons de travailler », que les pistes A, B et D ne touchent pas : il mesure 909px à lui seul.

*Header : ce qui a changé* (le Header reste blanc ; le tiroir mobile n'a pas changé)

| Demande | Réalisation | Vérifié dans le navigateur |
|---|---|---|
| 1. Onglet actif | Plus de fond bleu pâle. Fond blanc, **soulignement orange de 4px** (`action-500`) et **graisse 600**. Onglets fermés en graisse 400. Une copie invisible du libellé en 600 réserve la largeur : les onglets ne bougent pas quand la graisse change. | Fond transparent sur le blanc du Header, soulignement 4px `#f8ab01`, graisse 600. Largeurs identiques ouvert et fermé (216, 315, 214px). |
| 2. Panneau | Même fond blanc, **sans ombre ni arrondi**. Il part exactement du bas du Header (il recouvre son trait gris) et occupe toute la largeur. **Trait noir de 2px** en bas. Le soulignement de l'onglet touche le haut du panneau, qui forme un bloc continu avec lui. | Ombre `none`, arrondi 0, panneau de 0 à 1280px, haut à 121px pour un bas du Header à 122px (bordure recouverte), trait bas de 2px noir. |
| 3. Survol hybride | Media query `(hover: hover) and (pointer: fine)`. **Souris** : ouverture au survol de l'entrée, fermeture 200ms après sa sortie, et un clic souris ne referme pas le panneau. **Tactile** : ouverture et fermeture au toucher. **Clavier** : Entrée et Espace ouvrent ou ferment, Échap ferme et rend le focus au bouton, et le panneau se ferme quand le focus quitte le menu. | Survol : ouvert. Souris descendue dans le panneau : reste ouvert. Sortie : encore ouvert à 100ms, fermé à 300ms. Passage d'une entrée à l'autre : bascule. Tactile (1180px, `isMobile`) : media false, toucher = ouvre, 2e toucher = ferme. Clavier : OK. |
| 4. Images | 10 bannières sur 10 trouvées et copiées dans `src/assets/menu/`, affichées avec `<Image>` d'Astro : optimisées, `alt=""` car décoratives, hauteur limitée à 96px. Un emplacement vide (sans image générique) est prévu si une image manque. | Les 4 images du panneau « Chauffage » se chargent, en 273×93px. |
| 5. Liens directs *(« Maison autonome » retiré à l'étape 9)* | « Rénovation globale » → `/solutions/renovation-energetique-globale` et « Maison autonome » → `/qui-sommes-nous`, après les 3 entrées. Même style que les onglets : soulignement orange au survol et sur la page en cours. | Présents. ⚠️ Problème de largeur : voir la question 7. |
| Contraintes | Couleurs du `@theme` uniquement, cibles de 44px minimum. | Plus petit élément cliquable du Header : 44px. |

*Origine des images du méga-menu*

| Sous-catégorie | Fichier dans `src/assets/menu/` | Source dans `Données webflow/` |
|---|---|---|
| Isolation | `isolation.png` | `akelia_site_complet/assets/` |
| Menuiseries | `menuiseries.png` | `akelia_site_complet/assets/` |
| Ventilation | `ventilation.png` | `akelia_site_complet/assets/` |
| Pompes à chaleur | ~~`pompes-a-chaleur.jpg`~~ → **`pompes-a-chaleur.webp`** (étape 9) | ~~`akelia_site_complet/assets/`~~ → **`ancien test /test_accueil_akelia/assets/`** |
| Chaudières | `chaudieres.png` | **`ancien test /images_akelia/`** ⚠️ |
| Appoint | `appoint.png` | `akelia_site_complet/assets/` |
| Eau chaude sanitaire | `eau-chaude-sanitaire.png` | **`ancien test /images_akelia/`** ⚠️ |
| Production d'électricité | `production-electricite.png` | `akelia_site_complet/assets/` |
| Borne de recharge | `borne-de-recharge.png` | `akelia_site_complet/assets/` |
| Système de gestion | `systeme-de-gestion.png` | `akelia_site_complet/assets/` |

- ⚠️ Pour Chaudières et Eau chaude sanitaire, les fichiers de `akelia_site_complet/assets/` ne sont pas des images. Ce sont des messages d'erreur XML de 243 octets : le téléchargement avait échoué. Les vraies images (PNG 350×120) ont été retrouvées dans le dossier `ancien test /images_akelia/`.
- ⚠️ **Ces 10 images sont des illustrations générées par IA**, et non des photos réelles. Les noms d'origine de plusieurs d'entre elles contiennent « Gemini_Generated_Image ». **L'image des pompes à chaleur affiche une fausse marque, « Heat Fullm »**, sur l'appareil. Elles sont reprises telles quelles, comme demandé (voir la question 9).

**Réalisé à l'étape 9 : réponses aux questions 7 à 10**

*Réponses reçues*

| # | Question | Décision | Appliqué |
|---|---|---|---|
| 9 | Image des pompes à chaleur (fausse marque « Heat Fullm ») | **Prioritaire : la remplacer** par une autre image de pompe à chaleur sans marque visible, trouvée dans les dossiers Webflow. À défaut, laisser l'emplacement vide. Les 9 autres images sont conservées : ce sont des illustrations d'équipements, elles ne trompent personne. | ✅ Remplacée (voir ci-dessous) |
| 7 | Menu sur 2 lignes entre 992 et 1 104px | **Option (b)** : le menu complet ne s'affiche qu'à partir de **1280px** (`xl:`), avec le bouton « Menu » et le tiroir en dessous. Raison : des libellés coupés sur deux lignes font négligé, et sur tablette en paysage le tiroir est plus confortable au doigt. | ✅ |
| 8 | Liens directs dans le tiroir | Ajouter « Rénovation globale » au tiroir, **après les 3 accordéons et avant les liens secondaires**. | ✅ |
| 10 | « Maison autonome » et « Qui sommes-nous » vers la même page | **Retirer « Maison autonome »** du menu et du tiroir, pour l'instant. Il sera remis quand il aura sa propre page. Il ne reste qu'un lien direct : « Rénovation globale ». | ✅ |

*Question 9 : remplacement de l'image des pompes à chaleur*

- **Recherche** : toutes les images de `Données webflow/` (y compris `ancien test /`) dont le nom évoque une pompe à chaleur, une PAC ou la climatisation. Après dédoublonnage, **76 images** ont été passées en revue à l'œil, et les meilleures candidates examinées en taille réelle.
- **Écartées** : toutes les images avec une marque, un logo ou une plaque de marque visible (dont une planche de logos Bosch, LG, Daikin…). Ont aussi été écartées celles où l'appareil n'est pas l'élément principal (scènes de salon, techniciens, schémas), ainsi que les deux versions de l'image « Heat Fullm ».
- **Retenue** : `ancien test /test_accueil_akelia/assets/68a46e080c169b2883deccc0_Pompe-a__-chaleur-air_eau-re__versible-.webp`, en 630×477. C'est une unité extérieure murale, sur un bardage blanc, avec ses tuyaux de cuivre et un petit écran : **aucune marque, aucun logo, aucun texte lisible**. Son nom d'origine (« Pompe à chaleur air-eau réversible ») correspond à la sous-catégorie.
- **Fichiers** : `src/assets/menu/pompes-a-chaleur.webp` est ajouté, `src/assets/menu/pompes-a-chaleur.jpg` (l'image « Heat Fullm ») est **supprimé**, et l'import est mis à jour dans le Header.
- **Vérifié** : dans le panneau, la bannière (273×93px, recadrée au centre) montre l'unité sans aucune marque.
- Comme les 9 autres, cette image est **probablement générée par IA** : elle a le même style et provient du même site.

*Question 7 : menu ordinateur à partir de 1280px*

Dans `Header.astro`, toutes les classes `lg:` (992px) du Header sont passées en `xl:` (1280px) : liens secondaires du haut, menu ordinateur, bouton « Menu », tiroir. Le script qui ferme le tiroir quand l'écran s'élargit passe aussi de `62rem` à `80rem`.

Contrôle du basculement :

| Largeur | Bouton « Menu » | Menu ordinateur | Liens secondaires du haut | Hauteur du Header | Débordement |
|---|---|---|---|---|---|
| 375px | visible | masqué | masqués | 73px | aucun |
| 992px | visible | masqué | masqués | 73px | aucun |
| 1100px | visible | masqué | masqués | 73px | aucun |
| **1279px** | **visible** | **masqué** | masqués | 73px | aucun |
| **1280px** | **masqué** | **visible**, 4 entrées sur **1 ligne** (48px) | visibles | 122px | aucun |
| 1440px | masqué | visible, 1 ligne | visibles | 122px | aucun |

- **Tiroir et changement de taille** : un tiroir ouvert à 1279px se ferme automatiquement quand la fenêtre passe à 1280px, et le défilement de la page est rétabli.
- **Tablettes en paysage de 1280px ou plus** (par exemple un iPad Pro 12,9″ à 1366px) : le menu ordinateur s'y affiche. Il s'ouvre au toucher, puisque la media query `(hover: hover) and (pointer: fine)` est fausse sur un écran tactile.

*Questions 8 et 10 : liens directs*

- **`liensDirects`** ne contient plus que « Rénovation globale » → `/solutions/renovation-energetique-globale`. Un commentaire dans le code explique pourquoi « Maison autonome » a été retiré.
- **Dans le tiroir**, « Rénovation globale » est placé après les 3 accordéons et avant les liens secondaires. Il a le même cadre que les accordéons (56px de haut), avec une flèche au lieu du chevron, car il ouvre directement une page.
- **Ordre du tiroir, vérifié** : Isolation et menuiseries, Chauffage, climatisation et eau chaude, Autonomie énergétique, puis **Rénovation globale**, puis Aides rénovation, Blog et conseils, Qui sommes-nous. Plus petit élément cliquable : 48px.
- **« Maison autonome »** n'apparaît plus nulle part dans le site.

**Réalisé à l'étape 10 : illustration SVG du hero (`SchemaMaison.astro`)**

*Fichiers*
- `src/components/SchemaMaison.astro` est **créé** (422 lignes, dont l'essentiel en SVG, en commentaires et en CSS d'animation). Le SVG est écrit directement dans le composant (inline).
- `src/components/Hero.astro` : le schéma est intégré.
  - **À partir de 1280px** (`xl:`), le texte occupe 7/12 de la largeur à gauche et le schéma 5/12 à droite, centrés verticalement. Le sous-titre et le bouton passent **sous le titre** : ils étaient auparavant dans une colonne de droite.
  - **En dessous de 1280px**, le schéma se place **après le bouton**, qui reste donc le plus haut possible. Sa largeur est limitée à 42rem sur tablette.

*Le dessin*
- **Vue** : maison à 2 niveaux, toit à deux pans, en perspective cavalière (façade avant de face, façade latérale qui fuit vers la droite). Le terrain est figuré par un simple trait.
- **Coupe** : la moitié gauche de la façade avant et du pan de toit avant est ouverte. On y voit deux pièces superposées (rez-de-chaussée et étage), le plancher, le mur du fond et les combles sous la toiture.
- **8 équipements**, chacun dans un `<g>` avec un identifiant en français :

| N° | Identifiant | Représentation |
|---|---|---|
| 1 | `isolation-combles` | Couche hachurée sur le plancher des combles |
| 2 | `isolation-murs` | Double trait hachuré sur les parois coupées (angle gauche et bord de la coupe) |
| 3 | `menuiseries` | 2 fenêtres en façade et 1 en façade latérale, en double trait |
| 4 | `ventilation` | Caisson VMC dans les combles, gaines en pointillés vers les deux niveaux, sortie en toiture |
| 5 | `pompe-a-chaleur` | Unité extérieure au pied de la façade latérale, et radiateur dans la pièce du rez-de-chaussée |
| 6 | `panneaux-photovoltaiques` | 6 panneaux sur le pan de toit avant |
| 7 | `chauffe-eau` | Ballon dans le local technique du rez-de-chaussée |
| 8 | `borne-de-recharge` | Borne sur le côté, et voiture en quelques traits |

- **Annotations** :
  - repères numérotés : cercle orange `action-500`, chiffre `marque-900`, trait de rappel fin `neutre-500` ;
  - légende en HTML sous le schéma, sur 2 colonnes ;
  - **3 cotes** à flèches : largeur de façade 9,50 m, hauteur des murs 5,60 m, hauteur au faîtage 8,20 m ;
  - **2 annotations « manuscrites »** : « R ≥ 7 » près des combles, et « local technique ».
- **Style** :
  - trait uniquement, fond transparent (le quadrillage du hero reste visible), aucun dégradé ni ombre ;
  - hachures fines à 45° pour les parois isolées ;
  - seule exception aux « traits seuls » : l'intérieur des cercles des repères est blanc, pour que le chiffre reste lisible par-dessus les traits.
- **Accessibilité** :
  - `<title>` et `<desc>` décrivent la maison et les 8 équipements ;
  - la légende est une liste `<ol>` lisible par les lecteurs d'écran ;
  - **chaque ligne de légende est atteignable au clavier** (`tabindex="0"`) : le focus met en évidence l'équipement, comme le survol.

*Épaisseurs de trait : un choix technique*
- Le dessin change de taille avec l'écran (largeur du viewBox : 820). Pour obtenir 2, 1,5 et 1px à l'écran, la solution habituelle (`vector-effect: non-scaling-stroke`) a été **testée puis écartée** : combinée à l'animation de tracé, elle fait apparaître le trait entier ou à moitié selon la taille d'affichage, au lieu de le dessiner progressivement.
- Les épaisseurs sont donc des **variables CSS** (`--t-structure`, `--t-equip`, `--t-fin`), réglées pour 3 plages : téléphone, tablette (`md:`) et grand écran (`xl:`).
- **Mesuré** : 2,0 / 1,5 / 1,0px à l'écran à 375, 768 et 1280px.

*Animations* (aucune en boucle)

| Animation | Réalisation | Vérifié dans le navigateur |
|---|---|---|
| 1. Tracé à l'arrivée | `stroke-dasharray` et `stroke-dashoffset` sur chaque contour du bâtiment (`pathLength="1"`), en 1,2s. Déclenché par un `IntersectionObserver` quand 30 % du schéma est visible, **une seule fois**. | Schéma hors écran au chargement : contours invisibles. Après défilement : tracé en cours à 0,6s (capture), terminé ensuite. Après remontée et retour : pas de nouvelle animation. |
| 2. Apparition des équipements | Fondu de 0,3s, démarré à 1,2s, **80ms d'écart**, dans l'ordre de la méthode (variable `--rang`). Les cotes apparaissent en dernier. | Ordre observé : isolation des combles → isolation des murs → menuiseries → ventilation → panneaux photovoltaïques → pompe à chaleur → chauffe-eau → borne de recharge. |
| 3. Survol | Survol (souris) ou focus clavier d'un repère du schéma ou d'une ligne de légende : l'équipement passe en `action-500`, trait doublé, hachures orange. **Sans transition.** CSS pur (`:has()`), sans JavaScript. | À 375, 768 et 1280px : seul l'équipement visé passe en orange, les autres restent en bleu nuit. Tout revient à l'état normal quand la souris s'éloigne. Le focus clavier sur une ligne de légende fonctionne aussi. |
| Réduire les animations | `prefers-reduced-motion: reduce` : le script ne lance rien, et le CSS force l'état final. | 0 animation active, tout est visible immédiatement. |
| Sans JavaScript | L'état final est l'état par défaut. | Tout est visible. |

- **JavaScript** : environ 15 lignes, en script `is:inline` placé juste après le schéma, pour s'exécuter avant le premier affichage, sans clignotement. Aucune dépendance.
- **Écart avec la règle « 100 % Tailwind »** : les animations, le survol `:has()` et les épaisseurs de trait sont dans un bloc `<style>` du composant. Ils utilisent uniquement les variables du `@theme` (`--color-marque-900`, `--color-neutre-500`, `--color-action-500`, `--color-fond`, `--font-base`). Tailwind ne permet pas d'exprimer proprement ces animations SVG. La légende, elle, est entièrement en classes Tailwind.

*Version mobile (moins de 768px)*

Les cotes et les annotations manuscrites sont masquées, et les repères sont agrandis (×2,1). La légende reste affichée, sur 2 colonnes.

*Lisibilité mesurée* (après le redémarrage du serveur, voir l'incident ci-dessous)

| Largeur | Taille du schéma | Repères (diamètre, chiffre) | Traits à l'écran | Cotes | Légende |
|---|---|---|---|---|---|
| 375px | 335×192px | 22px, chiffre 12,9px | 2,0 / 1,5 / 1,0px | masquées | 8 lignes de 44px (bloc de 188px), libellés sur 2 lignes pour la plupart |
| 768px | 672×385px | 21px, chiffre 12,3px | 2,0 / 1,5 / 1,0px | visibles, texte 14,8px | 8 lignes de 44px, sur 1 ligne chacune |
| 1280px | 488×279px | 22px, chiffre 12,9px | 2,0 / 1,5 / 1,0px | visibles, texte **10,7px** (petit) | 8 lignes de 44px |

Appréciation (captures) :
- **375px** : le dessin reste compréhensible (maison, coupe, toit solaire, unité extérieure, voiture) et les repères sont nets. En revanche, les petits détails (gaines de la VMC, radiateur) sont minuscules.
- **768px** : c'est la meilleure lisibilité, avec cotes et annotations lisibles.
- **1280px** : le schéma est lisible, mais les textes des cotes sont petits (10,7px). Ils ont été agrandis en cours de route : le texte des cotes passe de 15 à 18 unités du dessin (8,9px → 10,7px), et les repères de ×1,2 à ×1,45 (chiffres de 10,7px → 12,9px).

*Hauteur du hero et visibilité sans défiler* (hauteur disponible sur mobile = écran − 120px)

| Écran | Hero avant | **Hero après** | Bouton « Obtenir un devis » entièrement visible ? | 1re rangée de raccourcis |
|---|---|---|---|---|
| 320×568 (448px dispo) | — | 1 296px | non (déjà le cas avant, situation acceptée à la question 4) | non visible |
| **375×667 (547px dispo)** | **778px** | **1 194px (+416px)** | ✅ **Oui** : bas à 401px, inchangé | ❌ **Plus visible** : elle commence à 857px, contre 441px avant (entièrement visible jusque-là) |
| 414×736 (616px dispo) | — | 1 174px | ✅ Oui (bas à 370px) | ❌ Plus visible (849px) |
| 768×1024 (904px dispo) | 968px | 1 594px (+626px) | ✅ Oui (bas à 599px) | ❌ Plus visible (1 345px, contre 719px avant) |
| 1280×800 (écran d'ordinateur, sans déduction) | 652px | 882px (+230px) | ✅ Oui (bas à 710px, contre 480px avant) | ❌ Plus visible (830px pour 800px d'écran, contre 600px avant) |

**Bilan** : le bouton reste visible partout où il l'était. En revanche, **le schéma repousse les raccourcis hors de l'écran à toutes les largeurs**. Solutions proposées (aucune appliquée) : voir la question 11.

*Incident pendant les mesures* : le serveur de développement avait gardé en cache une ancienne version du style du composant (Vite). Le navigateur recevait donc l'ancienne CSS alors que le fichier était à jour. Le serveur a été redémarré, puis toutes les mesures et captures de cette étape ont été refaites : les chiffres ci-dessus portent sur la version finale.

**Réalisé à l'étape 11 : réponses aux questions 11 à 14 sur le schéma**

*Réponses reçues*

| # | Question | Décision | Appliqué |
|---|---|---|---|
| 11 | Position du schéma | **Option (a)** : sous 1280px, le schéma passe **après le bandeau des raccourcis**, toujours dans le hero. Raison : les raccourcis mènent directement aux pages de vente et doivent rester visibles sans défiler. À partir de 1280px, rien ne change (schéma à droite du texte). | ✅ |
| 12 | Cotes | **Retirer les chiffres** (9,50 m, 5,60 m, 8,20 m), garder les traits de cote et leurs flèches. Des dimensions inventées posent le même problème que la fausse marque de l'étape 9. **« R ≥ 7 » est conservé** : c'est une exigence réelle. | ✅ |
| 13 | Annotations manuscrites | **Source Sans 3 italique** : une police d'écriture système donne un rendu différent, et donc incontrôlable, sur chaque appareil. | ✅ |
| 14 | Navigation clavier | **Un seul arrêt de tabulation** pour le schéma, puis navigation entre les repères avec les flèches. | ✅ |
| — | Sections 3 à 6 de l'accueil | Ne pas les coder : leur contenu arrivera dans le prochain ticket. | En attente |

*Q11 : nouvelle structure du hero* (`Hero.astro`)
- **Ordre des blocs, dans le code comme à l'écran sous 1280px** :
  1. le message (titre, sous-titre, bouton) ;
  2. les raccourcis ;
  3. le schéma, sur le même fond quadrillé que le message.
- **À partir de 1280px** : la section devient une grille. Le message et le schéma occupent la même case, le schéma étant aligné sur la colonne de droite (5/12) et centré verticalement. Les raccourcis passent sur la 2e ligne. Le conteneur du schéma laisse passer les clics (`pointer-events-none`, puis `auto` sur le schéma) : vérifié, le bouton du message et les lignes de légende restent cliquables.
- **Ordre au clavier** : bouton du hero → 8 raccourcis → légende du schéma → suite de la page. À partir de 1280px, la légende est visuellement à côté du texte mais arrive après les raccourcis au clavier. Cet ordre reste logique : le contenu principal d'abord, l'illustration ensuite.

Mesures, avec le schéma placé après les raccourcis :

| Écran | Hauteur disponible | Hero | Bouton entièrement visible ? | 1re rangée de raccourcis | Position du schéma |
|---|---|---|---|---|---|
| 320×568 | 448px (écran − 120) | 1 320px | non (bas à 491px, situation acceptée à la question 4) | non visible (531px) | sous les raccourcis |
| **375×667** | **547px** (écran − 120) | 1 218px | ✅ oui (bas à 401px) | ✅ **entièrement visible** (441 à 521px, marge de 26px), comme avant l'ajout du schéma | sous les raccourcis (873px) |
| 414×736 | 616px (écran − 120) | 1 198px | ✅ oui (bas à 370px) | ✅ entièrement visible (410 à 490px) | sous les raccourcis |
| 768×1024 | 904px (écran − 120) | 1 634px | ✅ oui (bas à 599px) | ✅ entièrement visible (719 à 851px) | sous les raccourcis |
| 1279×800 | 800px (ordinateur, sans déduction) | 1 626px | ✅ oui | partiellement visible (commence à 719px) | sous les raccourcis |
| 1280×800 | 800px | 882px | ✅ oui (bas à 710px) | non visible (830px), **inchangé par rapport à l'étape 10, comme demandé** | à droite du texte |
| 1440×900 | 900px | 882px | ✅ oui | partiellement visible (70px sur 132px) | à droite du texte |

*Q12 : cotes*
- Les 3 textes de cote sont **supprimés**. Les 3 traits de cote, leurs flèches et les traits d'attache sont conservés. Vérifié : 0 texte, 3 cotes à flèches.
- Un commentaire dans le code explique pourquoi il n'y a pas de chiffres.

*Q13 : annotations*
- « R ≥ 7 » et « local technique » sont en **Source Sans 3 italique** (`var(--font-base)`).
- Le **fichier italique 400 est ajouté à l'import Google Fonts** dans `src/styles/global.css` : `ital,wght@0,400;0,600;0,700;1,400`. Sans lui, le navigateur aurait fabriqué un faux italique en penchant la police droite. Il n'est téléchargé que par les pages qui l'utilisent. Vérifié : italique 400 chargé.
- « local technique » est passé de 14 à 18 unités du dessin (taille de « R ≥ 7 ») et placé sous la ligne du terrain. Il était presque illisible à 1280px.

*Q14 : clavier* (technique du « tabindex mobile »)
- **Tabulation** : seule la première ligne de légende a `tabindex="0"`, les autres ont `tabindex="-1"`. Il n'y a donc **qu'un seul arrêt de tabulation**, entre le dernier raccourci et la suite de la page.
- **Flèches** : → et ↓ passent au repère suivant, ← et ↑ au précédent (en boucle) ; Début et Fin vont au premier et au dernier. Les flèches ne font pas défiler la page. La ligne qui a le focus met en évidence son équipement en orange.
- **Mémoire de position** : la dernière ligne consultée garde `tabindex="0"`, donc Maj+Tab y revient.
- **Lecteurs d'écran** : un texte masqué à l'écran (« utilisez les flèches pour passer d'un repère à l'autre ») est relié à la liste par `aria-describedby`.
- Ce comportement est actif même quand « réduire les animations » est activé.
- Vérifié à 375 et 1280px : la séquence Tab, la navigation avec ↓ ↓ → ↑ Fin Début ←, la sortie par Tab et le retour par Maj+Tab fonctionnent.

*Correction annexe : débordement à 320px*
- Le déplacement du schéma a fait apparaître un **débordement horizontal de 1px à 320px** : le mot « photovoltaïques » de la légende était plus large que sa colonne.
- **Correction** : légende resserrée sur téléphone (`px-1`, `gap-x-2` ; inchangée à partir de 768px), et césure automatique (`hyphens-auto`) en dernier recours.
- **Résultat** : le mot tient entier à 375px. À 320px seulement, il est coupé en « photovol-taïques ». Aucun débordement de 320 à 1440px.

*Serveur de dev* : redémarré après chaque modification du `<style>` du composant, à cause du cache déjà signalé à l'étape 10. Toutes les mesures ci-dessus portent sur la version finale.

**Réalisé à l'étape 12 : simulateur d'éligibilité aux aides (section 4 de l'accueil)**

*1. Vérification des données nationales* (le 8 octobre 2026)

**Sources consultées :**
- **Anah, « Les aides financières en 2026 », édition septembre 2026** (PDF de 65 pages, lu en entier sur les parties utiles). C'est la source principale : guide officiel à destination des professionnels, publié après le décret n° 2026-822 du 25 août 2026, dont il intègre les changements au 1er septembre 2026. URL : `https://www.anah.gouv.fr/sites/default/files/2026-08/202609_guide-aides-financieres_WEB.pdf`
- **service-public.gouv.fr**, fiche MaPrimeRénov' (`/particuliers/vosdroits/F35083`, page vérifiée par l'administration le 1er septembre 2026). Elle n'a été lue qu'à travers un résumé automatique (voir les limites ci-dessous).
- **Annuaire service-public.gouv.fr** (fiche d'un Espace conseil France Rénov', mise à jour le 9 février 2026), pour le lien et le téléphone France Rénov'.
- **Presse spécialisée** (selectra, argile.ai, tpeactu…), consultée seulement pour situer le décret, jamais comme source de chiffres.
- **france-renov.gouv.fr** n'a pas pu être consulté directement (erreur de certificat de l'outil de lecture). Aucune donnée n'en est tirée.

**Ce qui a été relevé :**

| Aide | Ce qui a été vérifié (source : guide Anah de septembre 2026, sauf mention) |
|---|---|
| **MaPrimeRénov' par geste** | **Depuis le 1er septembre 2026, recentrée sur le chauffage décarboné.** Restent éligibles : pompe à chaleur air/eau (5 000 / 4 000 / 3 000 € selon que les revenus sont très modestes, modestes ou intermédiaires), PAC géothermique ou solarothermique (11 000 / 9 000 / 6 000 €), raccordement à un réseau de chaleur (1 200 / 800 / 400 €), audit énergétique (500 / 400 / 300 €, lié à un geste de travaux), dépose de cuve à fioul (1 200 / 800 / 400 €). **Revenus supérieurs : non éligibles.** Ne sont plus financés : isolation, fenêtres, ventilation, autres chauffages (poêles, chaudières biomasse), chauffe-eau thermodynamiques et solaires. Logement de plus de 15 ans, résidence principale, artisan RGE. |
| **MaPrimeRénov' rénovation d'ampleur** | Logement **classé E, F ou G**, de plus de 15 ans, en résidence principale. Au moins **2 gestes d'isolation** et un gain d'au moins **2 classes**. **Accompagnateur Rénov' obligatoire**, et rendez-vous préalable avec un conseiller France Rénov'. Taux : **80 % / 60 % / 45 % / 10 %** (très modestes, modestes, intermédiaires, supérieurs) du montant HT, plafonné à **30 000 € HT** (gain de 2 classes) ou **40 000 € HT** (3 classes ou plus). **Maximum : 32 000 €.** Depuis le 1er septembre 2026, en maison individuelle : plus de chauffage au gaz ou au fioul après travaux. |
| **CEE (primes énergie)** | Primes des fournisseurs d'énergie. **Pas de montant fixe** : il varie selon le fournisseur, les travaux et les revenus (bonus « coup de pouce » pour les ménages modestes). Bénéficiaires : propriétaires occupants, propriétaires bailleurs, et **locataires « selon les aides »**. Logement de plus de 2 ans. L'offre doit être acceptée avant la signature du devis, ou au plus tard 14 jours après. Travaux : chauffage (« coup de pouce » pour remplacer une chaudière au fioul, au gaz ou au charbon) et rénovation du bâti. Nouveau au 1er septembre 2026 : bonus pour les chauffe-eau thermodynamiques et solaires. |
| **Éco-PTZ** | Prêt **sans condition de ressources**, accordé par la banque selon la capacité de remboursement. Propriétaires occupants et bailleurs (logement loué en résidence principale), SCI. Logement achevé depuis plus de 2 ans, en résidence principale. Plafonds : **15 000 €** pour une action seule (7 000 € pour les parois vitrées), **25 000 €** pour 2 actions, **30 000 €** pour 3 actions, **50 000 €** pour la performance globale ou avec MaPrimeRénov'. Remboursement sur 15 ans, ou 20 ans pour 50 000 €. Pas de chaudière au gaz. |
| **TVA à 5,5 %** | Pour les travaux d'isolation thermique, de chauffage, de ventilation et d'eau chaude sanitaire (arrêté du 4 décembre 2024). **Depuis le 1er septembre 2026 : aussi les pompes à chaleur air-air.** Chaudière au gaz : 20 %. Bénéficiaires : propriétaires occupants et bailleurs, **locataires**, occupants à titre gratuit, SCI. Logement achevé depuis plus de 2 ans, résidence principale ou secondaire. Appliquée directement par l'artisan. |

**Droits selon le statut :**

| Aide | Propriétaire occupant | Propriétaire bailleur | Locataire |
|---|---|---|---|
| MaPrimeRénov' par geste | Oui (selon revenus) | Oui (engagement de location 6 ans) | **Non** |
| MaPrimeRénov' rénovation d'ampleur | Oui (selon revenus) | Oui (engagement de location 6 ans) | **Non** |
| CEE | Oui | Oui | **Selon les aides** |
| Éco-PTZ | Oui | Oui (logement loué en résidence principale) | **Non** |
| TVA à 5,5 % | Oui | Oui | **Oui** |

**France Rénov'** : annuaire des conseillers à `https://france-renov.gouv.fr/preparer-projet/trouver-conseiller` (URL relevée sur l'annuaire officiel de service-public.gouv.fr), téléphone **0 808 800 700**.

**Points non clairs ou non vérifiés** (affichés « à vérifier » dans le simulateur quand ils le concernent) :
- **Exception « logements F et G jusqu'au 31 décembre 2027 »** : mentionnée par la presse à propos du décret, mais **absente du guide de l'Anah**. D'après la presse, elle ne concerne que les travaux restés éligibles au parcours par geste (les pompes à chaleur), et ne change donc rien pour l'isolation. **Non vérifiée sur le texte du décret.** Elle n'est pas utilisée dans le simulateur.
- **Chauffe-eau solaire par geste** : le résumé de la fiche service-public le cite parmi les travaux encore éligibles, alors que le guide de l'Anah et la presse l'excluent (sauf peut-être en outre-mer). C'est une **contradiction non tranchée**, sans effet sur le simulateur, qui ne propose pas ce choix.
- **Panneaux photovoltaïques** : aucune source officielle consultée ne couvre leur cas (prime à l'autoconsommation, TVA spécifique). Ils sont « à vérifier » pour toutes les aides, sauf MaPrimeRénov' par geste (non, car absents de la liste des travaux éligibles).
- **Ventilation seule** : prise en charge par l'éco-PTZ et les CEE **non confirmée** (« à vérifier »).
- **Fenêtres et CEE** : le guide parle de « rénovation du bâti » sans lister les fenêtres. Affiché « oui ». **À confirmer** sur la liste des opérations standardisées (ecologie.gouv.fr).
- **Plafonds de revenus** : non repris, puisque le simulateur ne demande pas les revenus. Les résultats disent « selon vos revenus ».
- **Outre-mer** : le guide ne couvre que la métropole. Pour un code postal 971 à 976, une note s'affiche (« règles spécifiques, à vérifier »).
- **Saint-Pierre-et-Miquelon (975)** et les collectivités d'outre-mer : ce ne sont pas des départements. Le simulateur répond « aucun département français ».
- **Limite de l'outil** : la fiche service-public a été lue à travers un résumé automatique, et non mot à mot.

*2. Fichier de données : `src/data/aides.ts`*
- **5 aides nationales** : MaPrimeRénov' par geste, MaPrimeRénov' rénovation d'ampleur, prime CEE, éco-PTZ, TVA à 5,5 %. Chacune a :
  - un nom, une nature et un montant maximum (`null` pour les CEE et la TVA) ;
  - ses conditions et ses droits **par statut** et **par type de travaux**, avec un verdict, une phrase et un montant éventuel ;
  - ses sources et sa date de vérification (2026-10-08).
- **101 départements** (01 à 95, 2A, 2B, 971 à 974, 976), **tous à « inconnu »**.
- Textes fixes : les 3 phrases départementales demandées, la mention obligatoire, la note outre-mer, le lien et le téléphone France Rénov'.
- **Mode d'emploi en tête de fichier**, pour mettre à jour un montant sans toucher au reste.
- **Aucun chiffre dans le code du simulateur** : tout est lu dans ce fichier.

*3. Simulateur : fichiers et fonctionnement*
- `src/components/SimulateurAides.astro` : la section, le formulaire et le message pour les navigateurs sans JavaScript.
- `src/scripts/simulateur-aides.ts` : la logique et l'affichage du résultat. Le code postal donne le département : 2 premiers chiffres, Corse 200xx et 201xx → 2A, 202xx à 206xx → 2B, outre-mer sur 3 chiffres. Pour chaque aide, le verdict retenu est le plus favorable parmi les travaux cochés, en tenant compte du statut.
- `src/pages/index.astro` : `<SimulateurAides />` placé après `<Methode />`.
- **Les 3 questions sont affichées ensemble** :
  - le statut, sous forme de 3 grandes cases ;
  - le code postal, avec un clavier chiffré sur téléphone (les lettres et espaces sont retirés) ;
  - les travaux, en 6 cases à cocher. « Je ne sais pas encore » est exclusif : le cocher décoche les autres, et inversement.
- **Résultat** :
  - la mention obligatoire en tête, encadrée, en texte courant et en gras ;
  - les « Aides nationales », une carte par aide : verdict en toutes lettres (« oui », « sous conditions », « à vérifier », « non ») et non par la seule couleur, montant maximum s'il existe, explication, précision liée au statut, conditions repliables ;
  - les « Aides locales » : département, phrase selon son statut, lien vers l'annuaire France Rénov' et téléphone, **sans aucun montant** ;
  - le bouton « Obtenir un devis » vers `/devis`, et « Modifier mes réponses ».
- **Aucune collecte** :
  - le formulaire n'a pas d'adresse d'envoi et son envoi est bloqué ;
  - aucun cookie ni stockage ;
  - le résultat est construit élément par élément, sans interpréter de HTML.
- **Sans JavaScript**, le formulaire reste masqué et un message renvoie vers `/aides-renovation` (voir la question 17).
- **Erreurs** : chaque champ manquant ou invalide affiche un message en toutes lettres, en rouge foncé et en gras, et le focus va sur le premier champ en erreur.
- **Accessibilité** : le focus est placé sur le résultat après le calcul, pour qu'un lecteur d'écran le lise.

*Tests dans le navigateur*

| Cas testé | Résultat obtenu |
|---|---|
| **Propriétaire occupant**, 31000, chauffage + isolation | MaPrimeRénov' par geste : oui, jusqu'à 11 000 € · rénovation d'ampleur : sous conditions, jusqu'à 32 000 € · CEE : oui · éco-PTZ : oui, jusqu'à 50 000 € · TVA 5,5 % : oui · Haute-Garonne : « À vérifier auprès de France Rénov'… » |
| **Propriétaire bailleur**, mêmes réponses | Mêmes verdicts, avec en plus l'engagement « louer le logement en résidence principale pendant au moins 6 ans » (MaPrimeRénov') et « si le logement est loué en résidence principale » (éco-PTZ) |
| **Locataire**, mêmes réponses | MaPrimeRénov' par geste : **non** (« Votre propriétaire, lui, le peut ») · rénovation d'ampleur : **non** · CEE : **sous conditions** · éco-PTZ : **non** · TVA 5,5 % : **oui** |
| Occupant, ventilation | par geste : non · ampleur : sous conditions · CEE : à vérifier · éco-PTZ : à vérifier · TVA : oui |
| Occupant, panneaux photovoltaïques | par geste : non · toutes les autres : à vérifier |
| Occupant, fenêtres | par geste : non · ampleur : sous conditions · CEE : oui · éco-PTZ : oui, jusqu'à 7 000 € · TVA : oui |
| Occupant, « Je ne sais pas encore » | par geste : sous conditions, jusqu'à 11 000 € · ampleur : sous conditions, jusqu'à 32 000 € · CEE : oui · éco-PTZ : oui, jusqu'à 50 000 € · TVA : oui |
| Codes postaux | 20000 → Corse-du-Sud (2A) · 20200 → Haute-Corse (2B) · 01000 → Ain · 97400 → La Réunion + note outre-mer · 00000, 98000 (Monaco), 97500 → « ne correspond à aucun département français » · 2100 → « Saisissez un code postal à 5 chiffres » · collage de « 31 000 » → 31000 |
| Formulaire vide | 3 messages d'erreur, focus sur la 1re question, aucun résultat affiché |
| Réseau et stockage | **0 requête** vers l'extérieur pendant tous les tests, 0 cookie, 0 donnée stockée |
| Sans JavaScript | Formulaire masqué, message « Le simulateur a besoin de JavaScript… » avec lien vers la page des aides |

*Mesures*

| Largeur | Section sans résultat | Du haut de la section au bouton « Voir mes aides » | Résultat seul | Section avec résultat |
|---|---|---|---|---|
| **375px** | **1 122px** | **1 080px** : ✅ moins de 2 écrans utiles (2 × 547 = 1 094px), mais avec 14px de marge seulement | 2 388px (5 cartes) | 3 550px |
| 768px | — | — | — | 3 082px |
| 1280px | — | — | — | 3 071px |

- Pour tenir en 2 écrans à 375px, les travaux sont passés sur **2 colonnes dès le téléphone** et l'espace entre les questions est resserré. **Contrepartie** : « Panneaux photovoltaïques » se coupe en « photovol-taïques » sur 3 lignes dans sa case.
- Cases de choix et boutons : 56px, liens et « Voir les conditions » : 44 à 48px. Seul l'intitulé « 2. Votre code postal » mesure 28px, mais ce n'est pas une zone à toucher : le champ lui-même fait 56px.
- Aucun débordement horizontal de 320 à 1280px.
- **Vérification des types non faite** : `astro check` demande l'installation d'un paquet supplémentaire, et TypeScript n'est pas installé dans le projet. Le build, lui, passe (8 pages).

*Choix rédactionnels de Claude* (voir la question 15) : titre de section « Avez-vous droit à des aides ? », phrase d'introduction, libellé du bouton « Voir mes aides » (bleu nuit, pour le distinguer du bouton orange « Obtenir un devis »), intitulés des verdicts et toutes les phrases d'explication du fichier de données.

**Réalisé à l'étape 13 : refonte de l'interface du simulateur**

La logique et les données (`src/data/aides.ts`, fonctions de calcul) **ne changent pas**. Seule l'interface est reprise.

*Fichiers*

| Fichier | Rôle | Lignes |
|---|---|---|
| `src/components/SimulateurAides.astro` | Réécrit : la section en deux moitiés (accroche + simulateur), le message sans JavaScript, le démarrage des scripts | 81 |
| `src/components/SimulateurQuestions.astro` | **Créé** : barre de progression, les 3 questions empilées, boutons Retour / Suivant, zone du résultat | 166 |
| `src/components/SimulateurEstimation.astro` | **Créé** : bloc « Obtenir une estimation précise de vos aides » (formulaire Web3Forms) | 82 |
| `src/scripts/simulateur-aides.ts` | Repris : calcul inchangé, nouvel affichage du résultat (cartes compactes, aides refusées repliées, « Recommencer ») | 243 |
| `src/scripts/simulateur-etapes.ts` | **Créé** : une question à la fois, progression, focus, clavier | 237 |
| `src/scripts/simulateur-estimation.ts` | **Créé** : vérification des champs et envoi Web3Forms | 112 |

*Ce qui a été fait*

| Demande | Réalisation |
|---|---|
| 1. Disposition | À partir de **1024px** (`min-[64rem]:`) : accroche à gauche (elle reste en vue pendant qu'on répond), simulateur à droite, en deux moitiés. En dessous : empilé, le texte puis le simulateur. Vérifié : empilé à 1023px, côte à côte à 1024px. |
| 2. Une question à la fois | Q1 (statut) : un clic ou un toucher fait passer seul à Q2, après 0,35s pour voir la réponse cochée. Q2 (code postal) : bouton « Suivant ». Q3 (travaux) : bouton « Voir mes aides ». « ← Retour » à partir de Q2, réponses conservées. **Transition** : fondu et léger glissement de 0,3s, supprimés si « réduire les animations » est activé (vérifié : `transition-property: none`). |
| 3. Barre de progression | « Question X sur 3 » en texte courant gras, et une barre de **12px de haut**, cerclée de bleu nuit (2px), remplie en orange (33 %, 67 %, 100 %). Rôle `progressbar` pour les lecteurs d'écran. Au résultat : « Questionnaire terminé ». |
| 4. Hauteur stable | Les 3 questions sont **empilées dans la même case** d'une grille : la case prend la hauteur de la plus longue (Q3), à toutes les largeurs, sans calcul en JavaScript. Les questions inactives sont invisibles : ni affichées, ni atteignables au clavier, ni lues. Les zones d'erreur (une ligne réservée) et les boutons restent toujours en place. **Sur téléphone, les deux boutons sont empilés** : côte à côte, « Voir mes aides » (plus long que « Suivant ») passait à la ligne et faisait grandir le bloc de 68px à Q3. |
| 5. Résultat | Il **remplace les questions dans le même bloc**, avec un bouton « Recommencer » qui vide les réponses et revient à Q1. **Cartes réduites** au nom de l'aide, au verdict et au montant ; l'explication, la précision liée au statut et les conditions sont sous « Pourquoi ? » (dépliable). **Aides refusées repliées** sous « Voir les aides auxquelles vous n'avez pas droit (N) ». La mention obligatoire reste visible en tête. Le département et le lien France Rénov' sont inchangés. Le bouton « Obtenir un devis » devient un lien secondaire, « Obtenir un devis pour vos travaux », car l'appel à l'action principal est maintenant le bloc d'estimation (voir la question 23). |
| 6. Appel à l'action final | Bloc distinct, sur **fond bleu nuit et texte blanc**, affiché seulement après le résultat (masqué de nouveau par « Recommencer »). Titre, texte et bouton exacts demandés ; champs prénom, e-mail et téléphone (56px de haut, saisie automatique du navigateur possible). **Mention obligatoire** en texte courant (1.125rem), blanc, sous le formulaire. |
| Envoi Web3Forms | **Même méthode que `/devis`** : envoi des champs à `https://api.web3forms.com/submit`, champs cachés `access_key`, `subject` et `from_name`, piège à robots `botcheck`. Pendant l'envoi : bouton désactivé et « Envoi en cours… ». En cas de succès : message de confirmation et formulaire vidé. En cas d'erreur : message renvoyé par Web3Forms, ou message par défaut ; serveur injoignable : message dédié. **Ajout** : avant l'envoi, vérification des 3 champs, avec un message en toutes lettres sous chaque champ. **Données envoyées (vérifié)** : `access_key, subject, from_name, prenom, email, telephone`, et rien d'autre. Les réponses au simulateur ne sont **pas** jointes (voir la question 21). |
| Clavier | Tab, puis Entrée pour valider à chaque question. À Q1, les **flèches changent la réponse sans changer de question**, et Entrée valide. Focus : sur le champ à Q2 (on peut taper tout de suite), sur le titre de la question à Q1 et Q3, sur le résultat quand il s'affiche, sur le titre de Q1 après « Recommencer ». Vérifié : depuis Q1, Tab n'atteint pas le champ de Q2, qui est invisible. |
| Sans JavaScript | Simulateur masqué ; message avec lien vers l'**annuaire France Rénov'** (`https://france-renov.gouv.fr/preparer-projet/trouver-conseiller`), et non plus vers `/aides-renovation`. Vérifié. |
| Contraintes | Couleurs du `@theme` uniquement (vérifié), cibles de 44px minimum (cases et boutons de 56px, liens et « Pourquoi ? » de 44 à 48px), mobile d'abord, aucun débordement de 320 à 1280px. |

*Mesures de hauteur* (le bloc du simulateur, puis la section entière)

| Largeur | Q1 | Q1 avec erreur | Q2 | Q2 avec erreur longue | Q3 | Q3 avec erreur | Stable ? | Section pendant les questions |
|---|---|---|---|---|---|---|---|---|
| 320px | 782 | 782 | 782 | 782 | 782 | 782 | ✅ | 1 343px |
| **375px** | **771** | 771 | **771** | 771 | **771** | 771 | ✅ | **1 269px** |
| 414px | 771 | 771 | 771 | 771 | 771 | 771 | ✅ | 1 269px |
| 768px | 523 | 523 | 523 | 523 | 523 | 523 | ✅ | 927px |
| 1024px | 576 | 576 | 576 | 576 | 576 | 576 | ✅ | 738px |
| 1280px | 534 | 534 | 534 | 534 | 534 | 534 | ✅ | 696px |

**Au résultat, à 375px** :

| Cas | Bloc du simulateur (résultat) | Bloc d'estimation | Section entière |
|---|---|---|---|
| Locataire, chauffage + isolation (2 aides affichées, 3 repliées) | 1 405px | 918px | **2 862px** |
| Propriétaire occupant, chauffage + isolation (5 aides affichées, aucune repliée) | 1 817px | 918px | **3 274px** |

Pour comparaison, avant cette étape, le résultat seul (locataire) mesurait 2 388px à 375px. Il en fait maintenant 1 405px, à cas comparable.

*Tests de l'envoi* : la réponse de Web3Forms a été simulée dans le navigateur de test, aucun envoi réel n'a eu lieu.
- **Succès** : message « Merci !… » et formulaire vidé.
- **Refus** : message renvoyé par Web3Forms affiché tel quel.
- **Serveur injoignable** : « Impossible de joindre le serveur… ».
- **Champs vides** : 3 messages d'erreur, focus sur « Prénom », aucun envoi.

*Textes exacts écrits par Claude à cette étape* (les textes imposés par la demande sont signalés « imposé »)

Accroche :
- Titre (h2) : « Avez-vous droit à des aides ? » *(repris de l'étape 12)*
- Texte : « Répondez à trois questions et découvrez, en une minute, les aides nationales auxquelles vous pouvez prétendre pour vos travaux, et si votre département en propose. »
- Encadré avec un cadenas : « Vos réponses restent sur votre appareil : elles ne sont ni enregistrées ni envoyées. »

Questions :
- Progression : « Question 1 sur 3 », « Question 2 sur 3 », « Question 3 sur 3 », puis « Questionnaire terminé ».
- Titres : « Vous êtes », « Votre code postal », « Vos travaux ».
- Aides sous les titres : « Touchez votre réponse : la question suivante s'affiche automatiquement. » · « 5 chiffres, par exemple 31000. Il sert seulement à trouver votre département. » · « Plusieurs choix possibles. »
- Boutons : « ← Retour », « Suivant », « Voir mes aides ».
- Erreurs : « Choisissez votre situation. » · « Saisissez un code postal à 5 chiffres. » · « Ce code postal ne correspond à aucun département français. » · « Cochez au moins une case. » *(nouveau, plus court, pour tenir sur une ligne)*

Résultat :
- « Votre résultat » · « Recommencer » · « Aides nationales » · « Aides locales » · « Pourquoi ? » · « Conditions principales : » · « Voir les aides auxquelles vous n'avez pas droit (N) » · « Aucune aide nationale ne correspond à votre situation pour ces travaux. » · « Trouver un conseiller France Rénov' » · « Ou par téléphone : 0 808 800 700 » · « Obtenir un devis pour vos travaux ».
- Les phrases d'explication des aides sont inchangées (`src/data/aides.ts`, étape 12).

Sans JavaScript :
- « Le simulateur a besoin de JavaScript pour fonctionner. Pour connaître les aides auxquelles vous avez droit, contactez un conseiller France Rénov' près de chez vous. » (le lien porte sur la fin de la phrase)

Bloc d'estimation :
- Titre : « Obtenir une estimation précise de vos aides » *(imposé)*
- Texte : « Un artisan du collectif étudie votre situation et vous indique les montants exacts auxquels vous avez droit. » *(imposé)*
- Bouton : « Recevoir mon estimation » *(imposé)*
- Mention : « Vos coordonnées servent uniquement à vous recontacter au sujet de votre projet. Elles ne sont ni revendues ni utilisées à d'autres fins. Vous pouvez demander leur suppression à tout moment. » *(imposé)*
- Étiquettes : « Prénom », « E-mail », « Téléphone ».
- Erreurs : « Indiquez votre prénom. » · « Indiquez une adresse e-mail valide, par exemple jean.dupont@exemple.fr. » · « Indiquez un numéro de téléphone (10 chiffres). »
- Envoi : « Envoi en cours… ».
- Succès : « Merci ! Votre demande a bien été envoyée. Un artisan du collectif vous recontacte très vite. » *(adapté du message de `/devis` : « Nos experts reviendront vers vous très vite »)*
- Échecs : « Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer. » et « Impossible de joindre le serveur. Veuillez vérifier votre connexion et réessayer. » *(identiques à `/devis`)*
- Champs techniques Web3Forms : sujet « Demande d'estimation des aides (simulateur Akelia) », expéditeur « Akelia Simulateur ».

**Réalisé à l'étape 14 : textes de l'accroche, enchaînement résultat → contact, hauteur commune**

*Ce qui a été fait*

| Demande | Réalisation |
|---|---|
| 1. Colonne de gauche | Texte exact repris (voir la liste complète plus bas). **Montant** : « Jusqu'à 32 000 € » en gras sur un aplat orange avec texte noir (contraste très élevé), en 2.5rem sur téléphone et 3rem à partir de 768px. Puis « d'aides pour vos travaux » en taille h3 en dessous. La taille display (3.5rem) n'a pas été utilisée : la charte la réserve au titre du hero (voir la question 27). **Le montant est lu dans `src/data/aides.ts`** (maximum de MaPrimeRénov' rénovation d'ampleur). ⚠️ Un premier calcul prenait le plus élevé de toutes les aides et affichait « 50 000 € » : c'est l'éco-PTZ, **un prêt et non une aide**. Corrigé. **Trois points** avec une coche verte dans un cercle ; la partie avant le tiret est en gras pour être repérée en balayant. **Phrase finale** en 16px (`text-base`, la taille minimale de la charte), en gris foncé. |
| 2. Enchaînement | Ordre du résultat : titre et « Recommencer », aides nationales, aides locales, **mention obligatoire**, puis **un bouton unique « Obtenir vos aides réelles »** (orange, pleine largeur). Le bouton **remplace le résultat par le formulaire de contact, dans le même bloc**. En haut du formulaire, « ← Revenir à mes résultats » fait l'inverse, et le résultat est retrouvé tel quel. Le lien secondaire « Obtenir un devis pour vos travaux » de l'étape 13 est **retiré** (« bouton unique »), ce qui règle la question 23. Le formulaire de contact garde prénom, e-mail, téléphone, l'envoi Web3Forms et la mention sur les coordonnées. Il passe sur fond blanc, puisqu'il est désormais à l'intérieur du bloc. |
| 3. Hauteur commune | Les 3 panneaux (questions, résultat, contact) sont empilés dans la même case. Le script **mesure, à la largeur actuelle, 21 résultats possibles** (3 statuts × chacun des 5 travaux seuls, tous les travaux, « Je ne sais pas encore »), avec le nom de département le plus long. Un élément invisible prend la hauteur du plus long, ce qui donne au bloc une hauteur fixe. La mesure est refaite si la largeur du bloc change, et quand les polices sont chargées. **Exceptions assumées** : la note outre-mer (971 à 976) n'est pas comptée, et déplier « Pourquoi ? » ou la liste des aides refusées agrandit le bloc, puisque c'est la personne qui le demande. |
| Correction d'un défaut | En CSS, un élément rendu visible le reste même dans un parent invisible. **La question 3 et ses boutons restaient donc affichés par-dessus le résultat.** Désormais, en quittant les questions, plus aucune question ni aucun bouton n'est marqué actif. |
| Phrase de `aides.ts` corrigée | « Elle peut l'être dans une rénovation d'ampleur (voir ci-dessous). » devient « Elle peut l'être dans une rénovation d'ampleur. » La carte « rénovation d'ampleur » est maintenant **au-dessus** des aides refusées : « ci-dessous » était devenu faux. |

*Mesures de hauteur* : bloc du simulateur · section entière. Une case vide signifie la même valeur que la ligne « Q1 ».

| Étape | 320px | **375px** | 414px | 768px | 1024px | 1280px |
|---|---|---|---|---|---|---|
| Q1 | 1 924 · 2 698 | **1 861 · 2 572** | 1 759 · 2 439 | 1 447 · 2 032 | 1 669 · 1 831 | 1 574 · 1 736 |
| Q2 | = | **=** | = | = | = | = |
| Q3 | = | **=** | = | = | = | = |
| Résultat (occupant, 5 travaux, 04) | = | **=** | = | = | = | = |
| Contact | = | **=** | = | = | = | = |
| Contact avec 3 erreurs | = | **=** | = | = | = | = |
| Contact après envoi réussi | = | **=** | = | = | = | = |
| Retour au résultat | = | **=** | = | = | = | = |
| Résultat (locataire, chauffage, 31) | = | **=** | = | = | = | = |
| Résultat outre-mer (bailleur, 974) | 2 223 · 2 998 ⚠️ | **2 129 · 2 840 ⚠️** | 1 995 · 2 675 ⚠️ | 1 621 · 2 206 ⚠️ | 1 905 · 2 067 ⚠️ | 1 716 · 1 878 ⚠️ |

✅ **La hauteur est identique** entre questions, résultat et contact, à toutes les largeurs, sauf pour un code postal d'outre-mer (exception prévue).

⚠️ **Contrepartie importante** : la hauteur commune est celle du résultat le plus long. **À 375px, le bloc mesure 1 861px dès la question 1**, alors que les 3 questions n'occupent qu'environ 770px. Il reste donc **environ 1 100px vides** sous les réponses de la question 1, soit 2 écrans de téléphone. À 1280px : 1 574px de bloc pour environ 530px de questions. Voir la question 24.

*Parcours au clavier* (375px, vérifié)
1. Q1 : Espace coche la réponse, sans changer de question ; Entrée passe à Q2, avec le focus dans le champ du code postal.
2. Q2 : saisie, puis Entrée → Q3. Q3 : Tab, Espace, Entrée → résultat, avec le focus sur le résultat.
3. Tab ×8 → bouton « Obtenir vos aides réelles » ; Entrée → formulaire de contact, avec le focus sur son titre.
4. Maj+Tab → « ← Revenir à mes résultats » ; Entrée → résultat, avec le focus remis sur « Obtenir vos aides réelles ».
5. Entrée → contact ; Tab → champs prénom, e-mail, téléphone, puis bouton « Recevoir mon estimation », puis **directement la suite de la page**. Aucun élément du résultat ni des questions, tous deux invisibles, n'est atteint.

*Envoi (réponse Web3Forms simulée)* : succès → message de confirmation, sans changement de hauteur du bloc.

*Textes exacts de TOUTES les phrases du simulateur*

Rappel : à l'étape 13, seuls les textes de l'interface avaient été listés, pas les phrases de `src/data/aides.ts`. Cette liste-ci est complète. Elle a été extraite directement des fichiers. Les guillemets « » délimitent chaque texte.

**A. Colonne de gauche** (texte fourni, repris mot pour mot)
- Titre : « Jusqu'à 32 000 € » (montant lu dans `aides.ts`), puis « d'aides pour vos travaux »
- « Les aides existent, mais elles dépendent de votre situation, de votre logement et de vos travaux. Trois questions suffisent pour savoir où vous en êtes. »
- « **Artisans certifiés RGE** — sans cette certification, aucune aide n'est versée »
- « **Dossier monté avec vous** — vous ne remplissez pas les formulaires seul »
- « **Aides nationales et locales** — on regarde aussi ce que propose votre territoire »
- « Trois questions, une réponse immédiate. Rien n'est enregistré. »

**B. Questions** (`SimulateurQuestions.astro`, `simulateur-etapes.ts`)
- Progression : « Question 1 sur 3 », « Question 2 sur 3 », « Question 3 sur 3 », « Questionnaire terminé »
- Q1 : titre « Vous êtes » · aide « Touchez votre réponse : la question suivante s'affiche automatiquement. » · réponses « Propriétaire occupant », « Propriétaire bailleur », « Locataire »
- Q2 : titre « Votre code postal » · aide « 5 chiffres, par exemple 31000. Il sert seulement à trouver votre département. »
- Q3 : titre « Vos travaux » · aide « Plusieurs choix possibles. » · réponses « Isolation », « Fenêtres et volets », « Chauffage », « Ventilation », « Panneaux photovoltaïques », « Je ne sais pas encore »
- Boutons : « ← Retour », « Suivant », « Voir mes aides »
- Erreurs : « Choisissez votre situation. » · « Saisissez un code postal à 5 chiffres. » · « Ce code postal ne correspond à aucun département français. » · « Cochez au moins une case. »

**C. Résultat** (`simulateur-aides.ts`)
- « Votre résultat » · « Recommencer » · « Aides nationales » · « Aides locales »
- Carte d'une aide : « [nom de l'aide] : [verdict] », avec le verdict parmi « oui », « sous conditions », « à vérifier », « non » ; montant « jusqu'à [montant] » ; bouton « Pourquoi ? » ; dans le dépliant : la phrase de l'aide, la phrase liée au statut, « Conditions principales : » et la liste des conditions, puis la nature de l'aide (voir D).
- « Voir les aides auxquelles vous n'avez pas droit ([nombre]) »
- « Aucune aide nationale ne correspond à votre situation pour ces travaux. »
- Département : « [nom] ([numéro]) », puis la phrase selon son statut (voir D)
- « Trouver un conseiller France Rénov' » (lecteurs d'écran : « (nouvel onglet) ») · « Ou par téléphone : 0 808 800 700 »
- Mention (voir D), puis bouton « Obtenir vos aides réelles → »

**D. Phrases des aides** (`src/data/aides.ts`, extraites du fichier)

**MaPrimeRénov' par geste** — nature : « Prime de l'État (Anah) » — montant maximum : 11 000 €

*Conditions principales* (affichées sous « Pourquoi ? ») :
- « Logement construit depuis au moins 15 ans, occupé en résidence principale. »
- « Travaux réalisés par un professionnel RGE, demande déposée avant les travaux. »
- « Ménages aux revenus très modestes, modestes ou intermédiaires (revenus supérieurs exclus). »

*Selon le statut* :

| Statut | Verdict | Phrase affichée |
|---|---|---|
| Propriétaire occupant | oui | « Ouvert aux propriétaires occupants. » |
| Propriétaire bailleur | oui | « Ouvert aux propriétaires bailleurs, qui s'engagent à louer le logement en résidence principale pendant au moins 6 ans. » |
| Locataire | non | « Réservé aux propriétaires : en tant que locataire, vous ne pouvez pas en bénéficier. Votre propriétaire, lui, le peut. » |

*Selon les travaux* :

| Travaux | Verdict | Montant affiché | Phrase affichée |
|---|---|---|---|
| Chauffage | oui | jusqu'à 11 000 € | « Oui pour une pompe à chaleur : jusqu'à 11 000 € pour une pompe à chaleur géothermique et jusqu'à 5 000 € pour une pompe à chaleur air/eau, selon vos revenus. Les ménages aux revenus les plus élevés n'y ont pas droit. » |
| Isolation | non | — | « L'isolation n'est plus financée seule par MaPrimeRénov' depuis le 1er septembre 2026. Elle peut l'être dans une rénovation d'ampleur. » |
| Fenêtres et volets | non | — | « Les fenêtres ne sont plus financées seules par MaPrimeRénov' depuis le 1er septembre 2026. Elles peuvent l'être dans une rénovation d'ampleur. » |
| Ventilation | non | — | « La ventilation n'est plus financée seule par MaPrimeRénov' depuis le 1er septembre 2026. » |
| Panneaux photovoltaïques | non | — | « Les panneaux photovoltaïques ne font pas partie des travaux financés par MaPrimeRénov'. » |
| Je ne sais pas encore | sous conditions | jusqu'à 11 000 € | « Seulement pour l'installation d'une pompe à chaleur : jusqu'à 11 000 € selon vos revenus. » |

**MaPrimeRénov' rénovation d'ampleur** — nature : « Prime de l'État (Anah) » — montant maximum : 32 000 €

*Conditions principales* (affichées sous « Pourquoi ? ») :
- « Logement classé E, F ou G, construit depuis au moins 15 ans, occupé en résidence principale. »
- « Projet global : au moins 2 travaux d'isolation et un gain d'au moins 2 classes énergétiques. »
- « Accompagnateur Rénov' et rendez-vous préalable avec un conseiller France Rénov' obligatoires. »
- « En maison individuelle, pas de chauffage au gaz ou au fioul après les travaux. »

*Selon le statut* :

| Statut | Verdict | Phrase affichée |
|---|---|---|
| Propriétaire occupant | oui | « Ouvert aux propriétaires occupants. » |
| Propriétaire bailleur | oui | « Ouvert aux propriétaires bailleurs, qui s'engagent à louer le logement en résidence principale pendant au moins 6 ans. » |
| Locataire | non | « Réservé aux propriétaires : en tant que locataire, vous ne pouvez pas en bénéficier. » |

*Selon les travaux* :

| Travaux | Verdict | Montant affiché | Phrase affichée |
|---|---|---|---|
| Isolation | sous conditions | jusqu'à 32 000 € | « Possible dans un projet de rénovation globale : jusqu'à 32 000 € selon vos revenus et le gain énergétique obtenu (de 10 % à 80 % du montant des travaux). » |
| Fenêtres et volets | sous conditions | jusqu'à 32 000 € | « Possible si le changement des fenêtres fait partie d'un projet de rénovation globale : jusqu'à 32 000 € selon vos revenus. » |
| Chauffage | sous conditions | jusqu'à 32 000 € | « Possible si le chauffage fait partie d'un projet de rénovation globale avec isolation : jusqu'à 32 000 € selon vos revenus. » |
| Ventilation | sous conditions | jusqu'à 32 000 € | « Possible si la ventilation fait partie d'un projet de rénovation globale avec isolation : jusqu'à 32 000 € selon vos revenus. » |
| Panneaux photovoltaïques | à vérifier | — | « La prise en compte des panneaux photovoltaïques dans une rénovation d'ampleur n'a pas pu être confirmée : à vérifier auprès de France Rénov'. » |
| Je ne sais pas encore | sous conditions | jusqu'à 32 000 € | « Possible pour un projet de rénovation globale avec isolation : jusqu'à 32 000 € selon vos revenus et le gain énergétique obtenu. » |

**Prime CEE (certificats d'économies d'énergie)** — nature : « Prime des fournisseurs d'énergie » — montant maximum : aucun (pas de montant affiché)

*Conditions principales* (affichées sous « Pourquoi ? ») :
- « Logement construit depuis plus de 2 ans. »
- « Offre du fournisseur acceptée avant de signer le devis (ou au plus tard 14 jours après). »
- « Travaux réalisés par un professionnel RGE. Primes plus élevées pour les revenus modestes. »

*Selon le statut* :

| Statut | Verdict | Phrase affichée |
|---|---|---|
| Propriétaire occupant | oui | « Ouvert aux propriétaires occupants. » |
| Propriétaire bailleur | oui | « Ouvert aux propriétaires bailleurs. » |
| Locataire | sous conditions | « Possible pour les locataires selon les primes proposées. Renseignez-vous aussi auprès de votre propriétaire. » |

*Selon les travaux* :

| Travaux | Verdict | Montant affiché | Phrase affichée |
|---|---|---|---|
| Isolation | oui | — | « Oui, l'isolation fait partie des travaux couverts. Montant variable selon le fournisseur d'énergie et vos revenus. » |
| Fenêtres et volets | oui | — | « Oui, les travaux d'isolation du logement, dont les fenêtres, sont couverts. Montant variable selon le fournisseur et vos revenus. » |
| Chauffage | oui | — | « Oui, notamment avec les primes « coup de pouce » pour remplacer une chaudière au fioul, au gaz ou au charbon. Montant variable selon le fournisseur et vos revenus. » |
| Ventilation | à vérifier | — | « La prise en charge de la ventilation seule n'a pas pu être confirmée : à vérifier auprès de votre artisan ou de France Rénov'. » |
| Panneaux photovoltaïques | à vérifier | — | « La prise en charge des panneaux photovoltaïques n'a pas pu être confirmée : à vérifier. » |
| Je ne sais pas encore | oui | — | « Oui pour la plupart des travaux d'économies d'énergie (isolation, chauffage). Montant variable selon le fournisseur et vos revenus. » |

**Éco-prêt à taux zéro** — nature : « Prêt sans intérêts, accordé par une banque » — montant maximum : 50 000 €

*Conditions principales* (affichées sous « Pourquoi ? ») :
- « Sans condition de revenus, mais accordé par la banque selon votre capacité de remboursement. »
- « Logement achevé depuis plus de 2 ans, occupé (ou destiné à être loué) en résidence principale. »
- « Remboursement sur 15 ans au plus (20 ans pour une rénovation globale). »

*Selon le statut* :

| Statut | Verdict | Phrase affichée |
|---|---|---|
| Propriétaire occupant | oui | « Ouvert aux propriétaires occupants. » |
| Propriétaire bailleur | oui | « Ouvert aux propriétaires bailleurs, si le logement est loué en résidence principale. » |
| Locataire | non | « Réservé aux propriétaires : en tant que locataire, vous ne pouvez pas en bénéficier. » |

*Selon les travaux* :

| Travaux | Verdict | Montant affiché | Phrase affichée |
|---|---|---|---|
| Isolation | oui | jusqu'à 50 000 € | « Oui : jusqu'à 15 000 € pour un seul type de travaux, 30 000 € pour trois, et 50 000 € pour une rénovation globale. » |
| Fenêtres et volets | oui | jusqu'à 7 000 € | « Oui : jusqu'à 7 000 € pour les fenêtres seules, davantage si elles sont combinées à d'autres travaux. » |
| Chauffage | oui | jusqu'à 15 000 € | « Oui, pour un chauffage performant (pas pour une chaudière au gaz) : jusqu'à 15 000 € seul, davantage combiné à d'autres travaux. » |
| Ventilation | à vérifier | — | « La ventilation seule n'a pas pu être confirmée parmi les travaux finançables : à vérifier auprès de votre banque ou de France Rénov'. » |
| Panneaux photovoltaïques | à vérifier | — | « Les panneaux photovoltaïques n'ont pas pu être confirmés parmi les travaux finançables : à vérifier. » |
| Je ne sais pas encore | oui | jusqu'à 50 000 € | « Oui pour des travaux d'économies d'énergie : jusqu'à 50 000 € selon l'ampleur du projet. » |

**TVA à 5,5 %** — nature : « Taux réduit appliqué directement sur la facture de l'artisan » — montant maximum : aucun (pas de montant affiché)

*Conditions principales* (affichées sous « Pourquoi ? ») :
- « Logement achevé depuis plus de 2 ans (résidence principale ou secondaire). »
- « Appliquée directement par l'artisan sur le devis et la facture. »

*Selon le statut* :

| Statut | Verdict | Phrase affichée |
|---|---|---|
| Propriétaire occupant | oui | « Ouvert aux propriétaires occupants. » |
| Propriétaire bailleur | oui | « Ouvert aux propriétaires bailleurs. » |
| Locataire | oui | « Ouvert aussi aux locataires. » |

*Selon les travaux* :

| Travaux | Verdict | Montant affiché | Phrase affichée |
|---|---|---|---|
| Isolation | oui | — | « Oui, l'isolation thermique bénéficie de la TVA à 5,5 %. » |
| Fenêtres et volets | oui | — | « Oui, les fenêtres isolantes bénéficient de la TVA à 5,5 % (travaux d'isolation thermique). » |
| Chauffage | oui | — | « Oui pour un chauffage économe ou renouvelable, dont les pompes à chaleur. Une chaudière au gaz reste à 20 %. » |
| Ventilation | oui | — | « Oui, la ventilation bénéficie de la TVA à 5,5 %. » |
| Panneaux photovoltaïques | à vérifier | — | « Le taux de TVA des panneaux photovoltaïques relève de règles spécifiques non vérifiées ici : à vérifier avec votre artisan. » |
| Je ne sais pas encore | oui | — | « Oui pour l'isolation, le chauffage économe, la ventilation et l'eau chaude. » |

**Textes fixes** (même fichier) :
- Mention obligatoire : « Estimation indicative. Les aides évoluent régulièrement et dépendent de critères précis (revenus, logement, nature des travaux). Seul un conseiller France Rénov' ou votre artisan peut confirmer vos droits. »
- Note outre-mer : « En outre-mer, les aides suivent des règles spécifiques (la rénovation d'ampleur MaPrimeRénov' ne s'y applique pas, et les montants peuvent différer). Les résultats ci-dessous sont donnés pour la métropole : à vérifier auprès de France Rénov'. »
- Département « oui » : « Votre département propose une aide à la rénovation. Conditions à vérifier auprès de France Rénov'. »
- Département « non » : « Aucune aide départementale identifiée. Votre région, intercommunalité ou commune peut en proposer. »
- Département « inconnu » : « À vérifier auprès de France Rénov', qui recense les aides de votre territoire. »
- Téléphone affiché : « Ou par téléphone : 0 808 800 700 »

**E. Formulaire de contact** (`SimulateurEstimation.astro`, `simulateur-estimation.ts`)
- « ← Revenir à mes résultats »
- Titre : « Obtenir une estimation précise de vos aides » *(fourni à l'étape 13)*
- « Un artisan du collectif étudie votre situation et vous indique les montants exacts auxquels vous avez droit. » *(fourni)*
- Étiquettes : « Prénom », « E-mail », « Téléphone »
- Bouton : « Recevoir mon estimation » *(fourni)* ; pendant l'envoi : « Envoi en cours… »
- Erreurs : « Indiquez votre prénom. » · « Indiquez une adresse e-mail valide, par exemple jean.dupont@exemple.fr. » · « Indiquez un numéro de téléphone (10 chiffres). »
- Succès : « Merci ! Votre demande a bien été envoyée. Un artisan du collectif vous recontacte très vite. »
- Échecs : le message renvoyé par Web3Forms, à défaut « Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer. » · serveur injoignable : « Impossible de joindre le serveur. Veuillez vérifier votre connexion et réessayer. »
- Mention : « Vos coordonnées servent uniquement à vous recontacter au sujet de votre projet. Elles ne sont ni revendues ni utilisées à d'autres fins. Vous pouvez demander leur suppression à tout moment. » *(fournie)*
- Champs techniques Web3Forms : sujet « Demande d'estimation des aides (simulateur Akelia) », expéditeur « Akelia Simulateur »

**F. Sans JavaScript**
- « Le simulateur a besoin de JavaScript pour fonctionner. Pour connaître les aides auxquelles vous avez droit, contactez un conseiller France Rénov' près de chez vous. » (le lien porte sur la fin de la phrase)

**Réalisé à l'étape 15 : accroche, résultat en lignes dépliables, aides régionales**

*Ce qui a été fait*

| Demande | Réalisation |
|---|---|
| 1. Colonne de gauche | Contenu **intégralement remplacé** par le texte fourni (voir la section « Textes du simulateur » en tête de fichier, partie A). « 32 000 € » est en très gros (2.5rem sur téléphone, 3rem à partir de 768px), en gras, noir sur aplat orange ; le chiffre est lu dans `aides.ts` (maximum de MaPrimeRénov' rénovation d'ampleur). La phrase finale est en gras. **« Rien n'est enregistré » est supprimé**, ainsi que les trois points avec une coche de l'étape 14. |
| 2. Colonne de droite | Seul le titre « Estimez vos aides » se trouve au-dessus du formulaire. Les deux colonnes sont indépendantes. |
| 3. Résultat en lignes | **Une ligne par aide** : nom, verdict, montant éventuel (« jusqu'à X € »), flèche, dans un rectangle compact (coins de 5px, bordure de la couleur du verdict, 48px de haut au minimum). **Tout est fermé au départ.** **Une seule ligne ouverte à la fois**, grâce à l'attribut `name` des balises `<details>` et à un script de secours pour les anciens navigateurs. Vérifié : clic sur la ligne 1, puis sur la ligne 3 → seule la 3 reste ouverte ; nouveau clic sur la 3 → tout est fermé. **Ordre** : mention (avec le lien France Rénov') → lignes → bouton « Obtenir vos aides réelles ». Vérifié : « titre → mention → aides nationales → aides de votre région et de votre département → bouton ». Les anciennes grandes cartes, le « Pourquoi ? » et le repli des aides refusées sont supprimés : les aides refusées sont de simples lignes « Non », placées après les autres. Nom court ajouté dans les données pour la prime CEE (« Prime CEE ») ; le nom complet est rappelé dans l'explication. |
| 4. Contact | Fonctionnement de l'étape 14 conservé : le bouton **remplace** le résultat par le formulaire, dans le même bloc, et « ← Revenir à mes résultats » ramène au résultat **avec les lignes ouvertes conservées**. Vérifié à la souris et au clavier. |
| 5. Hauteur | Hauteur commune calculée sur **l'état le plus haut**. Le script mesure 63 résultats possibles (3 statuts × 7 choix de travaux × 3 départements types : nom le plus long, Gironde pour le dispositif régional au nom le plus long, La Réunion pour l'outre-mer). Chacun est mesuré toutes lignes fermées, puis avec sa ligne la plus longue ouverte. La mesure prend environ 0,3s sur un ordinateur ; elle est refaite si la largeur change. **Ouvrir une ligne, afficher une erreur ou envoyer le formulaire ne change pas la hauteur** (vérifié). |
| 6. Aides régionales | **13 régions de métropole** ajoutées dans `src/data/aides.ts`, avec le statut, le nom du dispositif, la source et la date de vérification (voir la partie D de la section « Textes »). **Aucun montant.** Chaque département de métropole est rattaché à sa région (96 départements). Les **départements restent tous à « inconnu »**. Outre-mer : région non traitée, affichée « À vérifier ». |

*Recherche des aides régionales* (le 8 octobre 2026 : recherche ciblée sur le domaine officiel de chaque région, puis consultation de la page quand c'était possible)

| Région | Statut retenu | Ce qui a été trouvé | Niveau de confiance |
|---|---|---|---|
| Auvergne-Rhône-Alpes | inconnu | Un prêt réservé aux entreprises, et un soutien aux plateformes territoriales de rénovation (accompagnement). Rien de confirmé pour les travaux des particuliers. La page des aides n'a pas pu être lue. | faible |
| Bourgogne-Franche-Comté | oui : Effilogis | Page Effilogis sur le site de la Région, mais **conditions détaillées datées de 2022**. Le maintien en 2026 n'est pas confirmé. | moyen |
| Bretagne | inconnu | Aucune aide régionale aux travaux des particuliers trouvée. La page du programme « Énergie Solidaire Bretagne » n'a pas pu être lue (erreur 403). | faible |
| Centre-Val de Loire | oui : Centre-Val de Loire Rénovation (prêt rénovation) | Service régional et prêt rénovation (c'est un **prêt**, pas une subvention). | bon |
| Corse | oui : aide de l'AUE | Aide de l'Agence d'Urbanisme et d'Énergie, établissement de la Collectivité de Corse. Source : site de l'AUE (`aue.corsica`), et non le site de la Collectivité. | bon |
| Grand Est | oui : Climaxion (dont le service Oktave) | Page Climaxion « Particuliers & copropriétés ». **L'ouverture en 2026 n'est pas précisée.** | moyen |
| Hauts-de-France | oui : AREL | Aide à la rénovation énergétique des logements, plateforme de demande en ligne. | bon |
| Île-de-France | **non** | Pas d'aide directe aux particuliers ; l'aide aux chauffages au fioul, au bois ou au charbon est fermée depuis le 24 janvier 2025. La Région soutient les copropriétés dégradées. | bon |
| Normandie | oui : Chèque éco-énergie Normandie | Plafonds de revenus 2026 mentionnés. | bon |
| Nouvelle-Aquitaine | oui : aide à l'accompagnement de la rénovation | Aides à l'audit, à l'accompagnement et à la maîtrise d'œuvre, **pas aux travaux eux-mêmes**. | bon |
| Occitanie | inconnu | Rénov'Occitanie ne vise que les copropriétés ; aucune aide pour les maisons individuelles trouvée. | moyen |
| Pays de la Loire | oui : AREEP | Aide régionale aux économies d'énergie pour les particuliers (revenus très modestes). | bon |
| Provence-Alpes-Côte d'Azur | oui : Chèque énergie durable | Isolation des combles perdus. | bon |

**Limite** : les pages ont souvent été lues à travers un résumé automatique de l'outil de recherche, et non mot à mot.

*Mesures de hauteur* (bloc du simulateur · section entière) : à chaque largeur, **la même valeur à toutes les étapes**. Les étapes testées : Q1, Q2, Q3, résultat (occupant, 5 travaux, 33), résultat avec chaque ligne ouverte tour à tour, contact, contact avec 3 erreurs, contact après envoi, retour au résultat, résultat outre-mer (locataire, 974).

| Largeur | Bloc | Section | Stable ? |
|---|---|---|---|
| 320px | 2 099px | 2 905px | ✅ |
| **375px** | **1 797px** | **2 512px** | ✅ |
| 414px | 1 666px | 2 350px | ✅ |
| 768px | 1 365px | 1 982px | ✅ |
| 1024px | 1 528px | 1 737px | ✅ |
| 1280px | 1 437px | 1 646px | ✅ |

⚠️ **Le vide sous les questions demeure.** Contenus mesurés à 375px :
- **questions** : environ 650px ;
- **formulaire de contact** : 942px ;
- **résultat, toutes lignes fermées** : 1 016 à 1 088px ;
- **résultat avec une ligne MaPrimeRénov' ouverte** : jusqu'à 1 677px (explication, précision liée au statut, 3 ou 4 conditions).

La hauteur étant calée sur cet état, **il reste environ 1 000px vides sous la question 1** sur téléphone. Les lignes compactes ont réduit le résultat fermé, mais une ligne ouverte reste longue. Voir la question 31.

*Parcours testés*
- **Souris** : lignes (ouverture exclusive), « Obtenir vos aides réelles » → formulaire, « Revenir à mes résultats » → résultat.
- **Clavier** : à l'affichage du résultat, le focus est sur le résultat. Tab → « Recommencer » → lien France Rénov' → les lignes. Entrée ouvre une ligne ; Tab puis Entrée sur la suivante ouvre celle-ci et referme la précédente. Tab jusqu'à « Obtenir vos aides réelles », puis Entrée → formulaire, avec le focus sur son titre. Maj+Tab → « Revenir à mes résultats », puis Entrée → résultat, avec le focus remis sur « Obtenir vos aides réelles » et la ligne ouverte conservée.

**Réalisé à l'étape 16 : titre de l'accroche, suppression des renvois vers France Rénov', hauteur automatique**

| Demande | Réalisation |
|---|---|
| 1. Titre de gauche | Une phrase : « **Plus de 32 000 €** d'aides possibles sur vos travaux ». « Plus de 32 000 € » est en très gros (2.5rem sur téléphone, 3rem à partir de 768px), en gras, noir sur aplat orange ; la suite est plus petite (taille h3), sur la ligne suivante. Si « Plus de 32 000 € » ne tient pas sur une ligne (petit téléphone), chaque ligne garde son aplat, et le montant ne se coupe jamais (espace insécable). Le montant est toujours lu dans `aides.ts`. Les 3 paragraphes suivants sont repris tels quels. |
| 2. Plus aucun renvoi vers France Rénov' | **Supprimés** : le lien « Trouver un conseiller France Rénov' » et le numéro 0 808 800 700 du résultat ; les constantes du lien et du téléphone dans `aides.ts` ; le lien du message sans JavaScript. **Reformulés**, sans renvoi : la mention (texte fourni), les phrases des lignes région et département (« Des aides locales existent peut-être dans votre secteur. Nous les vérifions avec vous. », etc.), la note outre-mer, et trois phrases « à vérifier auprès de France Rénov' » d'aides nationales (désormais « nous le vérifions avec vous »). **Message sans JavaScript** : invitation à nous contacter, avec un lien vers `/devis`. Le seul appel à l'action du résultat est « Obtenir vos aides réelles ». |
| Vérification | **Aucune occurrence de `france-renov.gouv.fr`** dans `src/`, `public/`, la configuration et le site compilé (`dist/`). Dans la page, aucun lien dans le résultat, et aucun texte « France Rénov' » affiché, sauf la condition légale décrite ci-dessous. Restent hors du site : l'export Webflow de l'ancien site (archive, non modifiée, 8 fichiers), et ce fichier `inventaire-charte.md`, qui cite les sources consultées aux étapes 12 à 15. |
| 3. Hauteur automatique | **La hauteur fixe est supprimée** (fini la mesure des 63 résultats et l'élément invisible de calage). Les panneaux et questions inactifs sont **retirés de la mise en page** ; plus de zone d'erreur réservée ; les boutons inutiles (question 1) ne prennent plus de place. **Transition douce** : à chaque changement de contenu, la hauteur du bloc glisse de l'ancienne à la nouvelle valeur en 0,3s, puis redevient automatique. Relevé à 375px, de la question 3 au résultat : 731 → 776 → 809 → 835 → … → 967px en une vingtaine d'images. Le contenu qui arrive apparaît en fondu (règle CSS `@starting-style`). **Réduire les animations** : aucune transition, ni sur le bloc ni sur les questions (vérifié). |

*Mesures du bloc à 375px* (après la fin de l'animation)

| Étape | Bloc | Section entière | Vide sous le contenu |
|---|---|---|---|
| Question 1 | **411px** | 1 104px | 0px |
| Question 2 | **415px** | 1 108px | 0px |
| Question 2, avec erreur | 454px | 1 147px | 0px |
| Question 3 | **731px** | 1 424px | 0px |
| Résultat (occupant, isolation + chauffage, 31), lignes fermées | **1 021px** | 1 714px | 0px |
| Résultat, une ligne ouverte | 1 538px | 2 231px | 0px |
| Formulaire de contact | **1 002px** | 1 695px | 0px |
| Formulaire avec 3 erreurs | 1 203px | 1 896px | 0px |
| Retour au résultat | 1 021px | 1 714px | 0px |

Avant cette étape, le bloc mesurait 1 797px à toutes les étapes, soit environ 1 000px de vide à la question 1. **Il n'y a plus aucun espace vide inutile** : le bas du contenu touche la marge intérieure du bloc à chaque étape. Le contrôle a d'abord signalé des valeurs négatives sur le résultat, mais elles venaient du contenu des lignes fermées, que le navigateur garde positionné tout en le masquant. Vérifié : la hauteur de défilement du bloc est égale à sa hauteur visible, donc rien ne déborde et rien n'est coupé.

Mêmes mesures aux autres largeurs (question 1 / question 3 / résultat fermé / contact) : 320px : 435 / 742 / 1 137 / 1 096 · 414px : 411 / 731 / 986 / 970 · 768px : 411 / 483 / 908 / 869 · 1280px : 411 / 494 / 908 / 869. Aucun débordement horizontal.

*Note sur « Plus de 32 000 € »* : la question 28 portait sur l'ancienne phrase (« … MaPrimeRénov' et prime CEE cumulées »), désormais remplacée. La nouvelle, « Plus de 32 000 € d'aides possibles », est cohérente avec les sources : 32 000 € est le maximum de MaPrimeRénov' rénovation d'ampleur seule, et des aides régionales peuvent s'y ajouter (par exemple le chèque éco-énergie Normandie). Elle suppose toutefois un ménage aux revenus très modestes, un logement classé E, F ou G et un gain d'au moins 3 classes. L'éco-PTZ (jusqu'à 50 000 €), cité dans le paragraphe suivant, est un prêt.

**Réalisé à l'étape 17 : fond bleu nuit, nouvelle accroche, bouton remonté (9 octobre 2026)**

| Demande | Réalisation |
|---|---|
| 1. Texte de la colonne de gauche | **Remplacé intégralement** par le texte fourni (voir la partie A en tête de fichier). Le titre est **une seule phrase**, d'un seul bloc, à la même taille que l'ancien chiffre (2.5rem sur téléphone, 3rem à partir de 768px ; tailles réduites des titres sur mobile selon `global.css`). « plus de 30 000 € » est seulement en orange et en gras : **plus d'aplat**, plus de découpage en deux blocs. Le montant ne se coupe pas (espaces insécables). « Et vous n'avez presque rien à faire. » est en taille h3 (1.5rem), en gras, séparé par une marge plus grande. **Plus aucune mention du RGE** dans cette colonne. Le montant est désormais **écrit en dur** (« 30 000 € », texte fourni) : il n'est plus lu dans `aides.ts` (voir la question 33). |
| 2. Fond de la section | Section en **`bg-marque-900`** (bleu nuit). Textes de gauche et titre « Estimez vos aides » (posé sur le fond sombre, au-dessus du bloc) en **`text-texte-inverse`**. « plus de 30 000 € » en **`text-action-500`**. Le bloc du simulateur reste **sur fond blanc** (inchangé), ce qui le détache. Le message « sans JavaScript » reçoit un fond blanc (sinon texte noir sur bleu nuit, illisible). La bordure noire du bas de section est conservée. |
| 3. Bouton « Obtenir vos aides réelles » | **Déplacé** juste après la mention « Estimation indicative… » et **avant** la liste. Ordre vérifié dans la page : « Votre résultat / Recommencer » → mention → bouton → aides nationales → aides de votre région et de votre département. **Taille normale** : largeur du texte (251px), **47,5px de haut** (minimum 44px garanti par `min-h-11`), texte en taille courante (1.125rem) au lieu de h4, au lieu de 56px de haut en pleine largeur. **Un seul bouton** dans le résultat (compté : 1). Le focus revient toujours sur ce bouton quand on clique « Revenir à mes résultats » (même attribut `data-simulateur-contact`). |

*Mesures (Chromium, page d'accueil)*

| Largeur | Titre | Colonne de gauche | Section, question 1 | Section, résultat (occupant, 31000, isolation + chauffage, lignes fermées) |
|---|---|---|---|---|
| **375px** | 5 lignes | 561px | **1 133px** (1 104px à l'étape 16) | **1 696px** (1 714px à l'étape 16) |
| 1280px | 3 lignes | 366px | 620px | 1 104px |

À 375px, la colonne de gauche passe de ~590px (avec l'ancien texte) à 561px. Le gain sur le résultat vient du bouton plus petit. À 375px, **le bouton apparaît environ 290px sous le haut du bloc**, contre plus de 1 000px avant : on le voit dès l'arrivée sur le résultat.

*Contrastes (WCAG 2.1)*

| Couple | Rapport | Niveau |
|---|---|---|
| Texte blanc sur bleu nuit `#22323e` (textes de gauche, « Estimez vos aides ») | **13,18:1** | AAA |
| Orange `#f8ab01` sur bleu nuit (« plus de 30 000 € », 2.5rem gras) | **6,79:1** | AAA pour un grand texte (≥ 4,5:1), AA pour un texte courant |
| Texte noir sur orange (bouton « Obtenir vos aides réelles ») | **10,82:1** | AAA |
| Texte noir sur orange foncé `#e69e00` (bouton au survol) | **9,26:1** | AAA |
| Bloc blanc sur bleu nuit (séparation du bloc) | 13,18:1 | largement au-dessus des 3:1 demandés pour un élément graphique |

Aucun élément cliquable n'est posé directement sur le fond bleu nuit (tous sont dans le bloc blanc), donc aucun contour de focus bleu nuit sur bleu nuit.

*Fichiers modifiés* : `src/components/SimulateurAides.astro` (fond, textes, `noscript`, import de `aides.ts` retiré), `src/scripts/simulateur-aides.ts` (position et taille du bouton, commentaires), commentaires de `src/scripts/simulateur-etapes.ts` et `src/components/SimulateurQuestions.astro`.

*Remarque* : la consigne de vérification était coupée après « Vérifie les contrastes sur ». Les contrastes ont été vérifiés sur tous les couples de couleurs de la section (tableau ci-dessus) ; si un autre élément était visé, merci de le préciser (question 36).

**Réalisé à l'étape 18 : section Méthode, textes, grands numéros, animation d'entrée (9 octobre 2026)**

| Demande | Réalisation |
|---|---|
| 1. Bloc « deux façons » | Titre et textes **remplacés intégralement** (voir la partie G en tête de fichier). Titre h2 : « Vous voulez tout refaire ? Ou juste une chose ? », avec des espaces insécables avant les « ? ». Les **titres des cartes sont traités en citation** : **barre orange (action-500) de 4px à gauche**, retrait de 16px, taille h3, guillemets « » d'origine (avec des espaces insécables, pour qu'un guillemet ne reste jamais seul en bout de ligne). Pas d'italique, moins lisible pour un public senior. Les **deux cartes sont strictement identiques** (même cadre, même icône au trait, même citation), et aucune n'est marquée comme recommandée. Les icônes de l'ancienne version (deux personnes, boussole) sont conservées. |
| 2. Design des 4 étapes | Les **numéros sont l'élément dominant** : chiffres gras en **orange action-500**, placés en grand dans l'en-tête de chaque carte. Ils font **72px sur téléphone, 96px à partir de 768px et 112px à partir de 1280px**. Les pastilles bleu nuit de 48px sont supprimées. **Contour bleu nuit de 2px autour du chiffre** : sans lui, l'orange sur blanc n'a que 1,94:1 de contraste et le chiffre « bave » pour un œil fatigué ; avec lui, la forme du chiffre se lit nettement (voir la question 37). **En-tête** : le numéro, puis « Étape X sur 4 » et le titre côte à côte avec l'icône à droite, sous 1280px (pour limiter la hauteur) ; au-dessus de 1280px, dans les 4 colonnes étroites, le numéro et l'icône, puis l'étape et le titre en dessous. **Ligne de liaison** : 4px bleu nuit, dessinée derrière les cartes, visible seulement entre deux cartes, à la hauteur des numéros. Elle est verticale sous 1280px et horizontale au-delà. C'est un pseudo-élément de la liste : elle n'est jamais lue ni comptée comme une étape. Fond blanc conservé pour ce bloc, `secondaire-50` pour le bloc des cartes. |
| 3. Animation | **Même technique que `SchemaMaison.astro`** : petit script `is:inline` placé juste après les deux blocs (dans `Methode.astro`), qui met `data-etat="attente"` puis `data-etat="anime"` ; toutes les animations sont en CSS ; aucune dépendance. **Étapes** : fondu et glissement de 16px, 0,4s chacune, **120ms d'écart**, dans l'ordre. **Ligne** : tracée en 0,76s à vitesse constante (3 × 120ms + 0,4s, soit la durée totale d'apparition des étapes), de haut en bas ou de gauche à droite. **Deux cartes** : fondu seul, 0,4s, **80ms d'écart**. **Déclenchement** : IntersectionObserver, à **30 % du bloc visible**, puis l'observateur est arrêté, donc **une seule fois**. **Aucune boucle.** |

*Adaptation du déclenchement à 30 %* : sur téléphone, le bloc des étapes mesure 1 446px pour un écran de 812px, il ne peut donc jamais être visible à 30 % de sa hauteur. Il s'animerait quand même au bout d'un moment, mais très tard. Le script déclenche donc aussi dès que le bloc **occupe 30 % de la hauteur de l'écran**. Sur ordinateur, c'est la règle des 30 % du bloc qui joue.

*Vérifications (Chromium, page d'accueil)*

| Contrôle | Résultat |
|---|---|
| Au chargement, en haut de page | Les deux blocs sont en attente : cartes invisibles, ligne non tracée. |
| Arrivée sur le bloc des étapes, 200ms après | Étapes 1 et 2 visibles, 3 à 97 %, 4 à 74 % ; ligne tracée à 77 % (375px) et 70 % (1280px). Le bloc des cartes, pas encore à l'écran, attend. |
| Après 1,5s | Tout est visible, la ligne est entière, **0 animation en cours**. |
| **Remonter en haut puis redescendre** | `data-etat` reste « anime », toutes les opacités à 1, **0 animation en cours** : **rien ne se rejoue** (vérifié à 375 et 1280px). |
| **`prefers-reduced-motion: reduce`** | Aucun `data-etat` posé ; **tout est visible dès le chargement** (opacités à 1, ligne entière, aucune transformation) ; 0 animation à tout moment. Le CSS force aussi l'état final, au cas où. |
| **Sans JavaScript** | Même résultat : tout est visible dès le chargement, ligne entière. |
| Débordement horizontal | Aucun, aux 3 largeurs. |

Remarque : pendant l'animation, la ligne se voit brièvement à travers une carte encore en train d'apparaître (moins de 0,3s, carte semi-transparente). C'est inévitable si la ligne se trace en même temps que les cartes apparaissent ; le rendu final n'est pas concerné.

*Hauteurs de la section (bloc étapes + bloc cartes)*

| Largeur | Étapes avant → après | Cartes avant → après | **Section entière avant → après** |
|---|---|---|---|
| **375px** | 1 302 → **1 446px** | 940 → **987px** | 2 241 → **2 433px** (+192px) |
| **768px** | 1 235 → **1 315px** | 647 → **727px** | 1 882 → **2 041px** (+159px) |
| **1280px** | 783 → **813px** | 553 → **553px** | 1 336 → **1 365px** (+29px) |

Les grands numéros ajoutent de la hauteur à chaque carte, d'où l'augmentation sur téléphone et tablette. Pour la limiter, sous 1280px le titre est placé à côté du numéro, et non dessous. Une première version, avec le numéro seul sur sa ligne, mesurait 1 574px à 375px et 1 561px à 768px. Les titres en citation, plus longs que les anciens, font passer chaque carte sur une ligne de plus.

*Fichiers modifiés* : `src/components/Methode.astro` (script et styles d'animation), `src/components/MethodeEtapes.astro` (ligne de liaison, commentaires), `src/components/MethodeEtape.astro` (en-tête avec grand numéro, pastilles supprimées), `src/components/MethodeFacons.astro` (textes, citations, animation).

**Réalisé à l'étape 19 : introduction de la méthode, bloc « Vous pilotez, ou on pilote ? » en opposition (9 octobre 2026)**

| Demande | Réalisation |
|---|---|
| 1. Introduction de la méthode | Remplacée mot pour mot : « Changer sa chaudière avant d'isoler, c'est payer une pompe à chaleur trop grosse pour rien. L'ordre compte autant que les travaux. » Le style ne change pas (texte courant, gris foncé `neutre-700`). |
| 2. Titre du bloc | « Vous pilotez, ou on pilote ? », avec une espace insécable avant le « ? ». |
| 3. Opposition des deux cartes | **Carte 1** (« Je veux rénover… ») sur **fond bleu nuit** `marque-900`, texte blanc. **Carte 2** (« Je sais ce que je veux… ») sur **fond blanc**, texte noir. **Même taille** (grille, hauteur égale à partir de 768px : 549 × 285px chacune à 1280px, 308 × 455px à 768px), même cadre noir de 2px, même marge intérieure, mêmes tailles de texte : aucune n'est marquée comme recommandée. **Séparateur** : un « **ou** » en gras, taille h3, noir, dans un **rond blanc de 64px cerclé de noir**, posé sur le fond de la section (pas sur une carte), donc lisible pareil à côté des deux cartes. Une **ligne noire de 2px** part de chaque côté du rond : verticale entre les cartes à partir de 768px, horizontale sur téléphone (cartes empilées). Le « ou » est un vrai texte, lu par les lecteurs d'écran entre les deux citations. La liste `<ul>` est remplacée par une simple grille, pour que le « ou » ne soit pas annoncé comme une 3e option. **Icônes supprimées** (silhouettes et boussole). **Citations** : l'élément le plus visible de chaque carte, en gras, 1.5rem sur téléphone et **1.875rem (30px) à partir de 768px**, avec une barre orange de 6px à gauche (au lieu de 4px). **Textes des cartes inchangés**, à un détail près : une espace insécable avant le « : » de la carte 1, car à 1280px une ligne commençait par « : l'audit ». |
| Animation | Inchangée (même mécanisme qu'à l'étape 18). Le « ou » apparaît entre les deux cartes (à 40ms, les cartes à 0 et 80ms). Vérifié de nouveau, à 375 et 1280px : en attente au chargement ; tout est visible après l'arrivée à l'écran, avec 0 animation en cours ; **rien ne se rejoue** après être remonté puis redescendu ; avec « réduire les animations » et sans JavaScript, tout est visible dès le chargement. |

*Contrastes (WCAG 2.1)*

| Élément | Rapport | Verdict |
|---|---|---|
| Texte et guillemets blancs sur la carte bleu nuit (citation et paragraphe ; les guillemets font partie du texte) | **13,18:1** | AAA |
| Barre orange sur la carte bleu nuit | **6,79:1** | Largement au-dessus des 3:1 demandés pour un élément graphique |
| Bord de la carte bleu nuit sur le fond de la section (`secondaire-50`) | **11,63:1** | Le bord se lit par le changement de fond. Le cadre noir de 2px se voit peu sur le bleu nuit (1,59:1), mais il n'est pas nécessaire et il garde aux deux cartes un cadre identique. |
| Texte noir sur la carte blanche | 21:1 | AAA |
| Cadre noir de la carte blanche sur le fond de la section | 18,53:1 | Net. La carte blanche seule sur le bleu pâle n'aurait que 1,13:1 : c'est le cadre qui la détache. |
| Barre orange sur la carte blanche | 1,94:1 | Faible, mais purement décorative : la citation reste lisible sans elle (voir la question 42). |
| « ou » noir sur rond blanc ; lignes noires sur le fond | 21:1 ; 18,53:1 | AAA |

*Enchaînement avec la section des aides (bleu nuit)* : **les deux aplats sombres ne se touchent pas.** Entre le bas de la carte bleu nuit et le début de la section des aides, il reste une **bande bleu pâle de 82px** à 768 et 1280px (marge basse de la section, puis le trait noir de 2px). Sur téléphone, la carte bleu nuit est la première de la pile : 394px la séparent de la section suivante, et c'est la carte blanche qui est en bas. Sur la capture à 1280px (`jonction-1280.png`, ci-dessous), la transition se lit bien : bleu pâle, carte sombre et carte blanche, bande bleu pâle, puis grand aplat bleu nuit. **Aucune correction appliquée.** Si l'enchaînement vous paraît encore lourd, la piste la plus simple est d'inverser les deux cartes (la blanche à gauche, la bleu nuit à droite), sans changer l'écart. Le grand bleu nuit de la section des aides arriverait alors en diagonale, et non sous la carte sombre.

*Capture à 1280px* : enregistrée hors du projet, dans le dossier temporaire de la session (`scratchpad/jonction-1280.png`). Elle montre le bloc entier et le haut de la section des aides. Elle est également affichée dans le terminal.

*Hauteur du bloc « Vous pilotez, ou on pilote ? »*

| Largeur | Étape 18 | **Étape 19** |
|---|---|---|
| 375px | 987px | **923px** (−64px) |
| 768px | 727px | **707px** (−20px) |
| 1280px | 553px | **537px** (−16px) |

Le retrait des icônes compense largement le « ou » et les citations plus grandes. Section Méthode entière (étapes + ce bloc) : 2 368px à 375px, 2 021px à 768px, 1 350px à 1280px. Aucun débordement horizontal.

*Fichiers modifiés* : `src/components/MethodeFacons.astro` (titre, opposition des cartes, « ou », icônes retirées, espace insécable), `src/components/MethodeEtapes.astro` (introduction), `src/components/Methode.astro` (commentaires).

**Réalisé à l'étape 20 : introduction pleine largeur, écran partagé interactif (9 octobre 2026)**

*La demande reçue s'arrêtait à « Vérifie le comportement à la souris, au toucher et ». J'ai supposé « et au clavier » et vérifié les trois (voir le tableau ci-dessous). Si une autre vérification était prévue, merci de la préciser (question 45).*

| Demande | Réalisation |
|---|---|
| 1. Introduction | La limite `max-w-[60ch]` est retirée : la phrase occupe toute la largeur du conteneur. À 1280px, elle tient sur une ligne, et le bloc des étapes passe de 813 à 781px. |
| 2. Écran partagé | **Un seul bloc** : un cadre noir de 2px, coins arrondis à l'extérieur seulement. Les deux panneaux **se touchent** : la séparation est la frontière nette entre le blanc et le bleu nuit, sans bordure arrondie entre eux. **Panneau gauche** : fond blanc, texte noir, « Je veux rénover… ». **Panneau droit** : fond bleu nuit, texte blanc, « Je sais ce que je veux… ». L'ordre des fonds est **inversé** par rapport à l'étape 19, comme demandé. Mêmes marges, mêmes tailles de texte : **strictement équivalents**. **Icônes** : il n'y en a plus. **Citations** : toujours visibles en entier, dans tous les états (vérifié sur les captures, y compris dans le panneau réduit à 35 %). Gras, 1.5rem, puis 1.875rem à partir de 992px, avec une barre orange de 6px. **« ou »** : un rond blanc de 64px cerclé de noir, en gras 1.5rem, **centré sur la séparation**, à cheval sur les deux fonds. Il suit la séparation quand elle se déplace. Sur téléphone, il est à cheval sur la jonction des deux panneaux empilés. C'est un vrai texte, lu entre les deux citations. |
| Largeurs | Gérées par `flex-grow` : 1/1 au repos (**50/50**), 13/7 quand un panneau est ouvert (**65/35**). **Transition de 300ms**. Mesuré à 1280px : 603/603 au repos, puis 755/451 (le cadre et les marges comptent). |
| Comportement | **Souris** (`hover: hover` et `pointer: fine`, 768px et plus) : au repos, seules les deux citations sont visibles. Le survol agrandit le panneau et **révèle son texte** ; quitter le bloc ramène à 50/50. **Écran tactile** (768px et plus) : toucher un panneau l'agrandit ; un seul est ouvert à la fois. Toucher l'autre bascule, toucher à nouveau le même ou ailleurs dans la page referme. **Clavier** : les deux panneaux sont atteints par Tab (`tabindex="0"`), et le focus agrandit le panneau. Le contour de focus est dessiné à l'intérieur du panneau, en bleu nuit sur le blanc et en orange sur le bleu nuit. Quitter le bloc au clavier ramène à 50/50. **Moins de 768px** : pas d'écran partagé. Les panneaux sont empilés en pleine largeur, textes entièrement visibles, aucune interaction ; l'opposition se fait par les fonds seuls. |
| Jamais de texte caché sans moyen de le voir | **Sans JavaScript** : 50/50, les deux textes visibles. **Tablette tactile, au repos** : les **deux textes restent visibles**. C'est un choix (voir la question 44) : un visiteur senior qui ne pense pas à toucher voit tout. Seul le texte du panneau **réduit** s'efface quand l'autre est ouvert. **Souris** : les textes ne sont masqués au repos que là où le survol est possible, et le clavier les révèle aussi. Un texte « masqué » est seulement transparent : il reste lu par les lecteurs d'écran. |
| Hauteur stable | Premier essai : la hauteur du bloc changeait selon le panneau survolé (270 → 370px à 1280px, 304 → 492px à 768px). Tout le bas de la page aurait bougé sous la souris. **Correction** : un texte masqué est sorti du flux (il n'allonge plus le panneau), et le script mesure la hauteur des 3 états (repos, gauche, droite) pour fixer le bloc à la plus grande. Hauteur recalculée au redimensionnement et après le chargement des polices. **Vérifié : hauteur identique dans tous les états**, à 768, 1024 et 1280px. Conséquence visible : au repos, en mode souris, les panneaux gardent un espace vide sous la citation, la place du texte qui se révélera (voir la capture `1280-souris-repos.png`). |
| Animation | Transition de 300ms sur la largeur et sur l'apparition du texte. Vérifié : 120ms après le survol, les largeurs sont à mi-chemin (462/744). **« Réduire les animations »** : changement instantané (largeurs finales 20ms après le survol). Aucune boucle. **Apparition à l'arrivée à l'écran** (étape 18) : conservée pour les deux panneaux et le « ou ». Vérifiée de nouveau : une seule fois, rien ne se rejoue après être remonté puis redescendu ; avec « réduire les animations » et sans JavaScript, tout est visible dès le chargement. |

*Vérifications détaillées (Chromium)*

| Situation | Largeurs (gauche/droite) | Textes visibles | Hauteur du bloc |
|---|---|---|---|
| Souris 1280px, repos | 603 / 603 | aucun (citations seules) | 270px |
| Souris, survol gauche | 755 / 451 | gauche | 270px |
| Souris, survol droite | 451 / 755 | droite | 270px |
| Souris, sortie du bloc | 603 / 603 | aucun | 270px |
| Clavier, Tab sur le 1er panneau | 755 / 451 | gauche | 270px |
| Clavier, Tab sur le 2e panneau | 451 / 755 | droite | 270px |
| Clavier, Tab suivant (sortie, vers le simulateur) | 603 / 603 | aucun | 270px |
| Tactile 1024px, repos | 490 / 490 | **les deux** | 370px |
| Toucher gauche | 608 / 372 | gauche | 370px |
| Toucher droite | 372 / 608 | droite | 370px |
| Retoucher droite | 490 / 490 | les deux | 370px |
| Toucher ailleurs | 490 / 490 | les deux | 370px |
| Souris 768px (survol gauche / droite) | 442/282, 282/442 | celui survolé | 304px |
| Sans JavaScript, 1280px | 603 / 603 | les deux | 301px |
| 375px (empilé) | 331 / 331 (pleine largeur) | les deux | 667px |

Le tactile a été simulé dans Chromium (`hover: none`, `pointer: coarse`, touchers réels). **À confirmer sur une vraie tablette.**

*Contrastes*

| Élément | Rapport |
|---|---|
| Texte et guillemets blancs sur bleu nuit | 13,18:1 (AAA) |
| Barre orange sur bleu nuit | 6,79:1 |
| Barre orange sur blanc | 1,94:1, décorative (question 42) |
| « ou » noir sur rond blanc | 21:1 ; le cadre noir du rond sur le bleu nuit fait 1,59:1, mais c'est le rond blanc lui-même qui se détache (13,18:1) |
| Contour de focus bleu nuit sur le panneau blanc ; orange sur le panneau bleu nuit | 13,18:1 ; 6,79:1 |
| Cadre noir du bloc sur le fond de la section | 18,53:1 |

*Enchaînement avec la section des aides (bleu nuit)*

| Largeur | Écart entre le bas du panneau bleu nuit et la section des aides |
|---|---|
| 1280px | 84px de bleu pâle, puis un trait noir |
| 768px | 84px |
| **375px** | **44px seulement** |

À 768 et 1280px, **pas d'aplat continu** : une bande bleu pâle de 84px sépare le panneau sombre (à droite, sur la moitié de la largeur) du grand bleu nuit de la section suivante. Voir la capture `captures/etape-20/1280-enchainement-section-aides.png`.

**⚠️ Sur téléphone, c'est limite** : le panneau bleu nuit est le 2e de la pile, donc en bas du bloc. Il n'est séparé de la section bleu nuit que par **44px** de bleu pâle (40px de marge et le trait noir). Ce n'est pas un aplat continu, mais l'œil voit presque deux grands blocs sombres à la suite. **Rien n'est appliqué.** Pistes (question 43) :
- (a) **sur téléphone seulement, mettre le panneau sombre en premier** (`order`). Le bas du bloc devient blanc, et l'écart entre les deux bleu nuit passe à environ 400px. Inconvénient : l'ordre visuel ne suit plus l'ordre de lecture (« Je sais ce que je veux » serait lu en second mais vu en premier) ;
- (b) **marge basse de 80px au lieu de 40px sur téléphone** (`pb-section`). Simple, et l'écart double. Le bloc s'allonge de 40px ;
- (c) **sur téléphone, panneau droit sur un fond moins sombre que le bleu nuit**, par exemple `secondaire-100` (texte noir). Mais l'opposition clair/sombre, qui est le seul moyen de l'exprimer sur mobile, serait affaiblie.
Recommandation de Claude : **(b)**, qui ne touche ni l'ordre ni l'opposition.

*Hauteurs*

| Largeur | Bloc « Vous pilotez… » (étape 19 → étape 20) | Section Méthode entière |
|---|---|---|
| 375px | 923 → **887px** | 2 332px |
| 768px | 707 → **556px** (souris) | 1 871px |
| 1024px (tactile) | — | bloc à 622px |
| 1280px | 537 → **522px** | 1 303px |

Aucun débordement horizontal.

*Captures* (dossier `captures/etape-20/` du projet, à supprimer quand vous les aurez vues ; le dossier n'est pas utilisé par le site) : `1280-souris-repos.png`, `1280-survol-gauche.png`, `1280-survol-droite.png`, `1280-clavier-focus-gauche.png`, `1280-enchainement-section-aides.png`, `1024-tactile-repos.png`, `1024-tactile-droite.png`, `375-empile.png`.

*Fichiers modifiés* : `src/components/MethodeFacons.astro` (réécrit : écran partagé, script et styles), `src/components/MethodeEtapes.astro` (introduction pleine largeur). Ajout : `captures/etape-20/` (8 images).

**Réalisé à l'étape 21 : animation de la section Méthode rejouée à chaque retour (9 octobre 2026)**

| Demande | Réalisation |
|---|---|
| Relancer à chaque retour | Dans `Methode.astro`, l'IntersectionObserver **n'est plus déconnecté**. Chaque bloc (les 4 étapes, l'écran partagé des deux options) a un indicateur « armé » : vrai au chargement, mis à faux au déclenchement. |
| Condition anti-clignotement | Le bloc n'est **réarmé que s'il a complètement quitté l'écran** (plus aucun pixel visible, `isIntersecting` faux). Tant qu'il reste un morceau visible, rien ne se relance, même en repassant sous le seuil de 30 % puis au-dessus. |
| Réinitialisation propre | À la sortie complète, le bloc repasse en `data-etat="attente"` : éléments invisibles, ligne non tracée. Cela ne se voit pas, puisqu'il est hors écran. Au retour, à 30 % visible (ou 30 % de la hauteur de l'écran sur téléphone, comme avant), le script remet « attente », force le navigateur à l'appliquer, puis passe à « anime » : les animations CSS repartent du début. |
| Bloc des deux options | Même comportement : son apparition en fondu (deux panneaux et « ou ») se rejoue aussi. L'interaction de l'écran partagé (survol, toucher, clavier) n'est pas touchée. |
| Inchangé | **« Réduire les animations »** : le script ne fait rien, tout est affiché immédiatement. **Sans JavaScript** : état final par défaut. **Schéma du hero** (`SchemaMaison.astro`) : non modifié, son animation reste unique. |

*Vérifications (Chromium, 1280 × 900 et 375 × 812)* : un compteur relève chaque démarrage d'animation (5 par passage pour les étapes : 4 cartes + la ligne ; 3 pour les options : 2 panneaux + le « ou »).

| Scénario | Étapes | Options | Schéma du hero |
|---|---|---|---|
| 1re descente | 5 démarrages, « anime » | 3 démarrages | 18 (1280px) / 17 (375px) démarrages au total, une seule fois |
| Remontée tout en haut | remis en « attente » | remis en « attente » | reste « anime », **0 nouveau démarrage** |
| 2e descente | **5 nouveaux démarrages** : l'animation se rejoue | **3 nouveaux** | 0 nouveau |
| 12 va-et-vient autour du seuil de 30 % (de −120 à +90px) | **0 démarrage** | 0 | 0 |
| 12 va-et-vient au bord (20 à 60px du bloc visibles) | **0 démarrage** | 0 | 0 |
| Réduire les animations (descente, remontée, redescente) | 0 démarrage, tout visible | 0, tout visible | — |
| Sans JavaScript | tout visible | tout visible | — |

*Limite à connaître* : si le visiteur sort le bloc **entièrement** de l'écran, puis le fait revenir de quelques pixels seulement (moins de 30 %), ce petit morceau visible reste vide (cartes en attente) jusqu'à ce que le seuil soit atteint. C'est le même comportement qu'à la toute première arrivée, et il ne produit pas de clignotement.

*Fichiers modifiés* : `src/components/Methode.astro` (script et commentaires), commentaires de `src/components/MethodeEtapes.astro` et `src/components/MethodeFacons.astro`. `SchemaMaison.astro` n'a pas été touché.

**Réalisé à l'étape 22 : bloc « Vous pilotez, ou on pilote ? » statique et cliquable (9 octobre 2026)**

| Demande | Réalisation |
|---|---|
| Annulation de l'écran partagé | **Tout est retiré** : expansion au survol, au toucher et au focus, script, styles, hauteur figée, séparateur « ou ». Plus aucune icône. Le composant ne contient plus aucun JavaScript. |
| Structure | Deux blocs **côte à côte à partir de 768px** (grille 50/50, même hauteur), **empilés** en dessous. Les deux blocs **se touchent** et forment un ensemble : un seul cadre noir de 2px, coins arrondis seulement à l'extérieur. **Tout est visible en permanence.** C'est une liste `<ul>` de deux éléments (deux options équivalentes). |
| Textes | Remplacés mot pour mot (voir la partie G en tête de fichier). Deux changements par rapport à avant : « du début à la fin » au lieu de « du premier appel à la fin des travaux », et « Rien de plus. » supprimé. L'espace avant le « : » du bloc 1 reste insécable. |
| Opposition | Uniquement par les fonds : **bloc 1 blanc** (texte noir), **bloc 2 bleu nuit** (texte blanc). Même marge (24px sur téléphone, 32px à 768px, 40px à partir de 992px), mêmes tailles de texte, boutons de même hauteur : aucun n'est mis en avant. Les citations gardent leur barre orange de 6px et restent l'élément le plus visible (gras, 1.5rem, puis 1.875rem à partir de 992px). |
| Boutons | Placés **juste sous le texte**, pas poussés en bas du bloc. **48px de haut** (44px minimum demandés), texte 1.125rem gras. **Bloc blanc** : bouton bleu nuit, texte blanc. **Bloc bleu nuit** : bouton **orange**, texte noir, qui ressort nettement. Pleine largeur sur téléphone, largeur du texte à partir de 480px. Contour de focus de 4px, décalé de 2px : bleu nuit sur le bloc blanc, **blanc** sur le bloc bleu nuit. Lien vers `/devis` et `/services` : les deux pages existent. |
| Animation | Conservée : fondu des deux blocs, 80ms d'écart, **rejoué à chaque retour à l'écran** après une sortie complète (étape 21). |

*Bouton « Demander un accompagnement » sur deux lignes* : à 375px et à 768px, le libellé ne tient pas sur une ligne dans la largeur du bloc. Le bouton fait alors **66px** de haut, avec un texte centré et un interligne resserré. À 1280px, il tient sur une ligne (48px). La largeur des blocs ne permet pas mieux sans raccourcir le libellé (question 46).

*Contrastes du bloc bleu nuit* (le public est senior)

| Élément | Rapport | Verdict |
|---|---|---|
| Citation, guillemets et texte blancs sur bleu nuit | **13,18:1** | AAA |
| Barre orange de la citation sur bleu nuit | 6,79:1 | Au-dessus des 3:1 demandés pour un élément graphique |
| Bouton orange sur bleu nuit (bord du bouton) | **6,79:1** | Le bouton se détache nettement |
| Texte noir sur bouton orange | **10,82:1** ; au survol (orange foncé) : 9,26:1 | AAA |
| Contour de focus blanc sur bleu nuit | 13,18:1 | Net |
| Cadre noir de l'ensemble sur le fond de la section | 18,53:1 | — |

Bloc blanc : texte noir 21:1, bouton bleu nuit sur blanc 13,18:1, texte blanc sur le bouton 13,18:1, contour de focus bleu nuit 13,18:1. La barre orange sur blanc reste à 1,94:1, décorative (question 42).

*Accès aux boutons (Chromium)*

| Moyen | Vérification | Résultat |
|---|---|---|
| **Clavier** (1280px) | Tab depuis le titre du bloc : 1er arrêt « Demander un accompagnement » (contour bleu nuit), 2e arrêt « Voir nos solutions » (contour blanc). Entrée sur chacun. | → `/devis`, puis → `/services` |
| **Souris** (1280px) | Clic sur « Demander un accompagnement » | → `/devis` |
| **Doigt** (tablette 1024 × 768 simulée, écran tactile) | Toucher « Voir nos solutions » | → `/services` |
| Taille de la cible | 48px de haut à 1280px, 48 à 66px sur téléphone et tablette, pleine largeur sur téléphone | Au-dessus des 44px |

*Hauteurs*

| Largeur | Ensemble des deux blocs | Section entière (avec le titre) | Étape 20 (section) |
|---|---|---|---|
| **375px** | 796px (452 + 340, empilés) | **1 016px** | 887px |
| **768px** | 425px | **677px** | 556px |
| **1280px** | 342px | **594px** | 522px |

La hausse vient des boutons et du texte du bloc 1, désormais toujours visible. Aucun débordement horizontal.

*Enchaînement avec la section des aides (bleu nuit)*
- **768 et 1280px : pas d'aplat continu.** 84px de bleu pâle séparent le bloc bleu nuit, qui n'occupe que la moitié droite, de la section des aides (capture `1280-bloc-et-section-aides.png`).
- **⚠️ 375px : le problème signalé à l'étape 20 demeure.** Le bloc bleu nuit est le 2e de la pile, donc en bas. Il n'est séparé de la section des aides que par **44px** de bleu pâle et un trait noir (capture `375-bloc-et-section-aides.png`). Ce n'est pas un aplat continu, mais deux grands blocs sombres se suivent de très près. **Rien n'est appliqué.** Pistes (question 43) : (a) mettre le bloc bleu nuit en premier sur téléphone seulement ; (b) **doubler la marge basse de la section sur téléphone** (80px au lieu de 40px) ; (c) un fond moins sombre pour le bloc 2 sur téléphone. Recommandation de Claude : **(b)**.

*Captures* (dossier `captures/etape-22/`, à supprimer après examen ; les captures de l'étape 20, devenues obsolètes, ont été supprimées) : `1280-bloc-et-section-aides.png`, `375-bloc-et-section-aides.png`, `1280-clavier-focus-bouton-2.png`.

*Fichiers modifiés* : `src/components/MethodeFacons.astro` (réécrit, sans script), `src/components/Methode.astro` (commentaires).

**Réalisé à l'étape 23 : reformulation du bloc 2, fond blanc (9 octobre 2026)**

| Demande | Réalisation |
|---|---|
| 1. Phrase du bloc 2 | « Vous avez déjà votre idée. On vous met en relation avec l'artisan qu'il faut près de chez vous. » est remplacée par « **Vous avez déjà votre idée. Vous travaillez en direct avec l'artisan Akelia de votre secteur.** » (vérifié dans la page). « En direct » reprend le sous-titre du hero (« Avec un artisan local du collectif Akelia, en direct et sans sous-traitance. »). « Mise en relation » ou « met en relation » n'apparaît plus nulle part sur le site (seul un commentaire de code l'emploie, pour expliquer le choix de « en direct »). |
| 2. Fond de la section | `bg-secondaire-50` remplacé par **`bg-fond` (blanc)** (vérifié : `rgb(255, 255, 255)`). **Traits noirs du haut et du bas conservés.** La hauteur ne change pas (594px à 1280px). |

*Le bloc blanc reste-t-il distinct du fond, lui aussi blanc ?* **Oui.** Capture : `captures/etape-23/1280-section-fond-blanc.png`. Le bloc blanc est délimité par le **cadre noir de 2px** de l'ensemble (21:1 sur le blanc), qui fait le tour des deux blocs. Le bloc se lit comme une carte posée sur la page, exactement comme les 4 cartes d'étapes juste au-dessus (même cadre noir, même fond blanc). L'ensemble reste cohérent. Le contraste entre les deux options y gagne : blanc contre bleu nuit, sans le bleu pâle intermédiaire. **Aucune correction nécessaire.**

*Effets secondaires à connaître*
- La section des étapes et celle-ci sont maintenant **toutes deux blanches**. Seul le trait noir horizontal du haut de la section « Vous pilotez… » les sépare, ce qui reste net sur la capture. Si une séparation plus marquée était souhaitée (non appliqué) : une marge un peu plus grande au-dessus du titre « Vous pilotez… », ou un fond très légèrement teinté pour la section des étapes.
- **Sur téléphone**, la bande de 44px entre le bloc bleu nuit et la section des aides est désormais **blanche** au lieu de bleu pâle. Le contraste avec les deux bleu nuit est plus franc, mais la bande reste étroite : la question 43 reste ouverte.

*Fichiers modifiés* : `src/components/MethodeFacons.astro` (texte du bloc 2, fond de la section, commentaires), `src/components/Methode.astro` (commentaires). Ajout : `captures/etape-23/1280-section-fond-blanc.png`.

**Réalisé à l'étape 24 : équilibre des deux blocs, boutons alignés (9 octobre 2026)**

| Demande | Réalisation |
|---|---|
| 1. Texte du bloc 2 | Remplacé mot pour mot (voir la partie G en tête de fichier), avec une espace insécable avant le « : ». Le bloc 2 passe de 2 à 4 lignes à 1280px, comme le bloc 1 (3 lignes). |
| 2. Alignement | Chaque bloc est une **colonne flex** (`flex flex-col`), et le bouton a **`mt-auto`** : il est poussé en bas du bloc. Les deux blocs sont dans une grille à deux colonnes, donc de **même hauteur**. Résultat : les deux boutons sont **toujours sur la même ligne**, quelle que soit la longueur future des textes. Un écart minimum de 24px est garanti entre le texte et le bouton (`mb-6` sur le texte). À partir de 480px, le bouton garde la largeur de son texte (`sm:self-start`) au lieu de s'étirer. |
| Même hauteur de bouton à 768px | À l'étape 22, « Demander un accompagnement » passait sur 2 lignes à 768px (66px de haut contre 48px) : les boutons auraient eu le même bas, mais pas le même haut. **Correction** : marges du bloc à 28px (au lieu de 32px) entre 768 et 991px, et marges intérieures du bouton à 16px (au lieu de 20px). Le libellé tient alors sur une ligne dès 768px : **les deux boutons font 48px partout à partir de 768px**. ⚠️ Il ne reste qu'environ 4px de marge à 768px : un libellé plus long reviendrait sur 2 lignes à cette largeur (les bas resteraient alignés). |

*Mesures (Chromium)*

| Largeur | Blocs (largeur × hauteur) | Boutons : haut depuis le haut du bloc / hauteur | Alignés | Section |
|---|---|---|---|---|
| **1280px** | 603 × 369 / 603 × 369 | 281px / 48px — 281px / 48px | **Oui, au pixel près** (haut et bas) | 625px |
| 1024px | 490 × 400,5 / 490 × 400,5 | 312,5 / 48 — 312,5 / 48 | **Oui** | 657px |
| **768px** | 362 × 427 / 362 × 427 | 351 / 48 — 351 / 48 | **Oui** | 683px |
| **375px** | 331 × 452 / 331 × 466 (empilés) | Pleine largeur ; 32px sous chaque bouton | Sans objet : les blocs sont l'un sous l'autre | 1 142px |

Sur téléphone, les blocs empilés ont chacun la hauteur de leur contenu (il n'y a pas de ligne commune à partager). « Demander un accompagnement » y reste sur 2 lignes (66px, question 46).

*Effet visible* : le bloc 1 ayant désormais le texte le plus court, c'est lui qui montre un espace (56px) entre son texte et son bouton, contre 24px dans le bloc 2. L'écart est modéré, et c'est la conséquence voulue de l'alignement des boutons (captures `1280-blocs-alignes.png`, `768-blocs-alignes.png`).

*Captures* (dossier `captures/etape-24/`) : `1280-blocs-alignes.png`, `768-blocs-alignes.png`, `375-blocs-alignes.png`. Aucun débordement horizontal.

*Fichiers modifiés* : `src/components/MethodeFacons.astro` (texte du bloc 2, colonne flex, bouton en `mt-auto`, marges à 768px, commentaires).

**Étape 25 (11 octobre 2026) : section « Collectif » de l'accueil**

*Demande* : nouvelle section après le simulateur d'aides et avant les articles, textes fournis, fond blanc, 5 engagements lisibles en diagonale, pas de 5 cartes identiques, apparition en fondu échelonnée de 80ms rejouée à chaque passage.

*Ce qui a été fait*

| Élément | Choix |
|---|---|
| Fichiers | `src/components/Collectif.astro` (section, introduction, données des 5 engagements, script et CSS d'animation) et `src/components/CollectifEngagement.astro` (une ligne d'engagement). Branchée dans `src/pages/index.astro` entre `<SimulateurAides />` et les articles. |
| Fond | **Blanc** (`bg-fond`). En haut, le trait noir de 2px qui ferme déjà le simulateur sert de séparation. En bas, la section porte elle aussi un trait noir de 2px (`border-b-2`), car la section des articles qui suit est blanche. |
| Introduction | Téléphone et tablette : titre puis 3 paragraphes. À partir de 992px : titre à gauche (5/12), paragraphes à droite (7/12). Le 3e paragraphe (« Pas d'intermédiaire… ») est mis en avant : semi-gras, barre orange de 6px à gauche (même motif que les citations « Vous pilotez… »). |
| Engagements : mise en page | **Liste « fiche technique »** et non des cartes : une ligne par engagement, filets gris entre les lignes, trait noir en haut et en bas de la liste. À partir de 768px, trois colonnes alignées : **icône \| titre \| texte**. Les 5 titres forment donc une colonne à gauche qu'on parcourt de haut en bas sans lire le reste. Sur téléphone : icône et titre côte à côte, texte en dessous sur toute la largeur. |
| Hiérarchie titre / texte | Titre en **gras 700, noir**, 1.25rem (1.5rem à partir de 992px). Texte en 1.125rem (taille courante, non réduite), **gris foncé** `neutre-700` (7,6:1 sur blanc, largement lisible) : il se lit, mais passe après le titre. Balises : `<h3>` pour l'intertitre, `<h4>` pour chaque engagement (navigation par titres possible au lecteur d'écran), `<ul>` pour la liste (engagements sans ordre de priorité, donc pas de numéros, pour ne pas faire doublon avec les grands numéros de la Méthode). |
| Icônes | Une icône au trait bleu nuit par engagement, même style que la Méthode (trait 1.75) : personne, repère de carte, clé à molette, devis, bouclier coché. Décoratives (`aria-hidden`). |
| Animation | Fondu seul de 0,4s, 80ms d'écart (dernier engagement visible à 720ms). Même mécanisme que la Méthode : déclenchement à 30 % de la liste visible ou quand elle occupe 30 % de l'écran ; rejouée à chaque passage, seulement après une sortie complète de l'écran. Attribut propre (`data-collectif-apparition`) pour ne pas interférer avec le script de la Méthode. Sans JavaScript : tout visible. « Réduire les animations » : aucune animation, tout visible. Aucune boucle. |
| Charte | 100 % classes Tailwind issues du `@theme` (`bg-fond`, `text-texte`, `text-neutre-700`, `text-marque-900`, `border-bordure`, `border-bordure-douce`, `border-action-500`, `text-h2/h3/h4`, `text-corps`, `max-w-site`, `px-gouttiere`, `py-bloc`, `py-section`, `gap-bloc`, `mt-bloc`). Aucune couleur Tailwind par défaut. Seul CSS hors classes : les images clés de l'animation (durées et délais), comme dans `Methode.astro`. |

*Vérifications (Chromium, dev server)*

| Largeur | Hauteur de la section | Équivalent en écrans | Hauteur des 5 lignes d'engagement | Débordement horizontal |
|---|---|---|---|---|
| **375px** | **2 391px** | 2,94 écrans de 812px (iPhone X à 15) — **3,58 écrans de 667px (iPhone SE)** | 337 / 259 / 275 / 275 / 338px | Aucun |
| **768px** | 1 787px | 1,99 écran de 900px | 255 / 225 / 193 / 193 / 256px | Aucun |
| **1280px** | 1 384px | 1,54 écran de 900px | 192 / 162 / 162 / 162 / 162px | Aucun |

Animation testée : la liste passe en « attente » au chargement, en « anime » à l'arrivée à l'écran (fin à 720ms), puis revient en « attente » après une sortie complète ; avec « Réduire les animations », rien n'est caché ni animé.

*Captures* (dossier `captures/etape-25/`, header collant et barre d'outils Astro masqués pour la capture) : `1280-collectif.png`, `375-collectif.png` (section entière), `768-collectif.png` absent volontairement (non demandé), et `375-` / `768-` / `1280-transition-simulateur.png` (bas du simulateur et haut de la section, pour juger l'enchaînement).

*Enchaînement avec le simulateur* : **aucun problème constaté**. Le passage du bleu nuit au blanc, souligné par le trait noir de 2px, est net à toutes les largeurs ; 40px (téléphone) à 80px (768px et plus) de blanc avant le titre. Seul point à surveiller : la section des **articles** qui suit utilise encore la palette Tailwind par défaut (`slate`, `emerald`) et n'a pas de trait de séparation propre ; c'est le trait du bas de la section Collectif qui fait la séparation (voir la question 49).

**Restant à faire**

| Sujet | État |
|---|---|
| **Sections 3 et 6 de la page d'accueil** | En attente de leur contenu (la section 4, le simulateur, et la section 5, le collectif, sont faites) |
| Statut des 101 départements dans `src/data/aides.ts` (tous à « inconnu ») | Ticket séparé de collecte |
| Page `/aides-renovation` quasiment vide | Voir la question 17 |
| **Clé Web3Forms** (formulaire d'estimation et `/devis`) | Bloquant pour recevoir les demandes : voir la question 20 |
| Points « à vérifier » du simulateur (photovoltaïque, ventilation, décret) | Voir la question 18 |
| Lien « Maison autonome » à remettre dans le menu et le tiroir quand sa page existera | En attente de la page |
| Images du méga-menu : illustrations générées par IA (sans fausse marque depuis l'étape 9), conservées en attendant de vraies photos | À remplacer à terme, non urgent |
| **Vraie image** de l'article « Comprendre le fonctionnement d'une Pompe à Chaleur » (`src/content/blog/pompe-a-chaleur.jpg`) | Image provisoire en place, à remplacer |
| **Pages solutions** : aucune page `/solutions/...` n'existe encore dans le projet Astro (voir la liste ci-dessous) | À créer |
| Page `/qui-sommes-nous`, liée par le Header et le Footer, inexistante dans le projet Astro (URL validée à l'étape 6, sans redirection) | À créer |
| Les autres composants (Footer, pages, `ArticleList`, et la section « Actualités & Conseils » de l'accueil, désormais sous la section « Méthode ») utilisent encore la palette Tailwind par défaut (`emerald`, `slate`) | À migrer vers la charte |
| Page `src/pages/test-charte.astro` (adresse `/test-charte`) | Temporaire, à supprimer avant la mise en ligne |

### Pages solutions liées par le Header et le Hero

Les 8 raccourcis du hero pointent tous vers des URLs déjà listées ci-dessous. Deux d'entre elles sont en attente : `/solutions/chauffe-eau-thermodynamique` et `/solutions/borne-de-recharge`.

**En attente** : solutions absentes de l'ancien site, pour lesquelles l'URL a été créée.

| Lien du menu | URL |
|---|---|
| Poêle à granulés ou à bois | `/solutions/poele-a-granules-ou-a-bois` |
| Radiateurs | `/solutions/radiateurs` |
| Chauffe-eau électrique | `/solutions/chauffe-eau-electrique` |
| Chauffe-eau thermodynamique | `/solutions/chauffe-eau-thermodynamique` |
| Chauffe-eau solaire | `/solutions/chauffe-eau-solaire` |
| Borne de recharge | `/solutions/borne-de-recharge` |
| Batterie | `/solutions/batterie` |
| Thermostat et domotique | `/solutions/thermostat-et-domotique` |
| *(lien secondaire)* Qui sommes-nous | `/qui-sommes-nous` |

**À migrer** : ces pages existent sur l'ancien site (`solutions_<slug>.html`) et gardent le même slug, mais n'existent pas encore dans le projet Astro.

| Lien du menu | URL |
|---|---|
| Toit et combles | `/solutions/isolation-thermique-toiture-comble` |
| Isolation par l'intérieur | `/solutions/isolation-thermique-par-linterieur-iti` |
| Isolation par l'extérieur | `/solutions/isolation-thermique-par-l-exterieur-ite` |
| Fenêtres et volets | `/solutions/menuiseries-fenetres-volets` |
| VMC simple et double flux | `/solutions/ventilation-vmc-simple-et-double-flux` |
| Climatisation réversible | `/solutions/climatisation-reversible-pac-air-air` |
| Pompe à chaleur air-eau | `/solutions/pompe-a-chaleur-air-eau` |
| Pompe à chaleur géothermique | `/solutions/pac-geothermique` |
| Chaudière gaz à condensation | `/solutions/chaudiere-gaz-condensation` |
| Chaudière bois et pellets | `/solutions/chaudiere-biomasse-bois-ou-pellets` |
| Panneaux photovoltaïques | `/solutions/panneaux-photovoltaiques` |

Également à migrer, lié depuis l'étape 8 par le lien direct « Rénovation globale » du menu : `/solutions/renovation-energetique-globale`.

### Fichiers modifiés

**Étape 1**
- `src/styles/global.css` : import de la police, bloc `@theme`, styles de base (`@layer base`).
- `src/pages/test-charte.astro` : page de vérification visuelle (`noindex`).

**Étape 2**
- `package.json` : ligne 17 réparée.
- `src/content.config.ts` : créé. `src/content/config.ts` est supprimé.
- `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro`, `src/components/ArticleList.astro` : passage à `post.id` et `render(post)`, nouvel import, graisses.
- `src/layouts/Layout.astro` : classes du `<body>` retirées.
- `src/components/Header.astro`, `src/pages/index.astro`, `src/pages/services/index.astro`, `src/pages/devis.astro`, `src/pages/mentions-legales.astro` : graisses.
- `src/styles/global.css` : `action-600`, `secondaire-600`, réduction mobile du h1 et du display, commentaires.
- `src/pages/test-charte.astro` : les deux nouvelles couleurs et un exemple de bouton secondaire.

**Étape 3**
- `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro` : passage à `pubDate` et `coverImage`, composant `<Image>`.
- `src/content/blog/pompe-a-chaleur.jpg` : image provisoire (rectangle uni).
- `src/pages/services/index.astro`, `src/pages/devis.astro` : `sm:grid-cols-2` devient `md:grid-cols-2`.
- `package-lock.json` : `npm audit fix`.
- `src/components/Header.astro` : réécriture complète.

**Étape 4**
- `src/components/Hero.astro` : créé.
- `src/pages/index.astro` : l'ancien hero est remplacé par `<Hero />`.

**Étape 5**
- `CLAUDE.md` : ajout de la section « Compte rendu ».
- `src/styles/global.css` : `--text-display` passe de 2.4rem à 1.75rem sous 768px (bloc « RÉDUCTION DES GRANDS TITRES SUR MOBILE »).

**Étape 6**
- `src/components/Hero.astro` : marges verticales et tuiles resserrées sous 768px.

**Étape 7**
- `src/components/Methode.astro`, `src/components/MethodeEtapes.astro`, `src/components/MethodeFacons.astro` : créés.
- `src/pages/index.astro` : ajout de `<Methode />` après `<Hero />`.

**Étape 8**
- `src/components/MethodeEtapes.astro` : 3 mises en page (téléphone, tablette, `xl:`), pistes A, B et D.
- `src/components/MethodeEtape.astro` : créé (affichage d'une étape).
- `src/components/Header.astro` : onglet actif, panneau, survol hybride, images, liens directs.
- `src/assets/menu/` : 10 images du méga-menu.

**Étape 9**
- `src/assets/menu/pompes-a-chaleur.webp` : ajouté. `src/assets/menu/pompes-a-chaleur.jpg` : supprimé.
- `src/components/Header.astro` : `lg:` passe en `xl:` (menu ordinateur à partir de 1280px), « Rénovation globale » est ajouté au tiroir, « Maison autonome » est retiré, et l'import de l'image des pompes à chaleur est mis à jour.

**Étape 10**
- `src/components/SchemaMaison.astro` : créé.
- `src/components/Hero.astro` : intégration du schéma (colonne de droite à partir de 1280px, sous le bouton en dessous), sous-titre et bouton sous le titre à partir de 1280px, commentaire « 2.4rem » corrigé en « 1.75rem ».

**Étape 11**
- `src/components/Hero.astro` : section en grille ; le schéma devient un 3e bloc, après les raccourcis sous 1280px et superposé à droite du message à partir de 1280px.
- `src/components/SchemaMaison.astro` : chiffres des cotes retirés, annotations en Source Sans 3 italique, « local technique » agrandi, navigation clavier par flèches (un seul arrêt de tabulation), légende resserrée sur téléphone.
- `src/styles/global.css` : ajout de l'italique 400 à l'import Google Fonts.

**Étape 12**
- `src/data/aides.ts` : créé (données et règles du simulateur).
- `src/scripts/simulateur-aides.ts` : créé (logique et affichage).
- `src/components/SimulateurAides.astro` : créé (section et formulaire).
- `src/pages/index.astro` : ajout de `<SimulateurAides />` après `<Methode />`.

**Étape 13**
- `src/components/SimulateurAides.astro` : réécrit (deux moitiés, accroche, message sans JavaScript vers France Rénov').
- `src/components/SimulateurQuestions.astro`, `src/components/SimulateurEstimation.astro` : créés.
- `src/scripts/simulateur-etapes.ts`, `src/scripts/simulateur-estimation.ts` : créés.
- `src/scripts/simulateur-aides.ts` : affichage du résultat repris (cartes compactes, aides refusées repliées, « Recommencer ») ; l'ancienne fonction de formulaire est retirée, et le calcul est inchangé.

**Étape 14**
- `src/components/SimulateurAides.astro` : nouvelle colonne de gauche (montant lu dans `aides.ts`, trois points avec une coche).
- `src/components/SimulateurQuestions.astro` : 3 panneaux empilés (questions, résultat, contact).
- `src/components/SimulateurEstimation.astro` : devient le 3e panneau du bloc, sur fond blanc, avec « Revenir à mes résultats ».
- `src/scripts/simulateur-etapes.ts` : changement de panneau, élément invisible qui fixe la hauteur (mesure de 21 résultats), correction de la question 3 qui restait visible.
- `src/scripts/simulateur-aides.ts` : ordre du résultat (mention, puis bouton « Obtenir vos aides réelles ») ; lien « Obtenir un devis » retiré.
- `src/data/aides.ts` : « (voir ci-dessous) » retiré d'une phrase sur l'isolation.

**Étape 15**
- `src/data/aides.ts` : 13 régions (statut, dispositif, source, date), région de chaque département, phrases de la ligne « Région », nom court « Prime CEE ».
- `src/scripts/simulateur-aides.ts` : résultat en lignes dépliables compactes (une seule ouverte à la fois), dans l'ordre mention → lignes → bouton, avec les lignes région et département.
- `src/scripts/simulateur-etapes.ts` : mesure de l'état le plus haut (63 résultats, ligne la plus longue ouverte).
- `src/components/SimulateurAides.astro` : nouvelle accroche, titre « Estimez vos aides ».

**Étape 16**
- `src/components/SimulateurAides.astro` : titre « Plus de 32 000 € d'aides possibles sur vos travaux » ; message sans JavaScript vers `/devis`.
- `src/data/aides.ts` : constantes du lien et du téléphone France Rénov' supprimées ; mention, phrases région, département, outre-mer et trois phrases « à vérifier » reformulées sans renvoi.
- `src/scripts/simulateur-aides.ts` : lien et téléphone retirés du résultat.
- `src/scripts/simulateur-etapes.ts` : hauteur fixe supprimée, transition douce de la hauteur.
- `src/components/SimulateurQuestions.astro`, `src/components/SimulateurEstimation.astro` : panneaux, questions et boutons inactifs retirés de la mise en page, zones d'erreur sans hauteur réservée, apparition en fondu.

**Étape 17**
- `src/components/SimulateurAides.astro` : section sur fond bleu nuit, nouvelle accroche (montant « 30 000 € » écrit en dur), titre « Estimez vos aides » en blanc, message sans JavaScript sur fond blanc.
- `src/scripts/simulateur-aides.ts` : bouton « Obtenir vos aides réelles » placé entre la mention et la liste, en taille normale.
- `src/scripts/simulateur-etapes.ts`, `src/components/SimulateurQuestions.astro` : commentaires mis à jour.

**Étape 18**
- `src/components/Methode.astro` : script d'animation (IntersectionObserver, une seule fois) et styles CSS globaux des animations.
- `src/components/MethodeEtapes.astro` : ligne de liaison en pseudo-élément de la liste, animable.
- `src/components/MethodeEtape.astro` : grand numéro orange dans l'en-tête de carte, pastilles supprimées.
- `src/components/MethodeFacons.astro` : nouveaux titre et textes, titres en citation, apparition en fondu.

**Étape 19**
- `src/components/MethodeFacons.astro` : titre « Vous pilotez, ou on pilote ? », carte bleu nuit et carte blanche, séparateur « ou », icônes supprimées.
- `src/components/MethodeEtapes.astro` : nouvelle introduction.
- `src/components/Methode.astro` : commentaires.

**Étape 20**
- `src/components/MethodeFacons.astro` : écran partagé interactif (panneaux, « ou », script du mode souris/tactile/clavier, hauteur stable, styles).
- `src/components/MethodeEtapes.astro` : introduction sans limite de largeur.
- `captures/etape-20/` : captures d'écran pour validation (temporaire).

**Étape 21**
- `src/components/Methode.astro` : observateur conservé, réarmement après sortie complète de l'écran, animation rejouée.
- `src/components/MethodeEtapes.astro`, `src/components/MethodeFacons.astro` : commentaires.

**Étape 22**
- `src/components/MethodeFacons.astro` : réécrit en version statique (deux blocs, deux boutons, plus de script).
- `src/components/Methode.astro` : commentaires.
- `captures/etape-22/` : captures pour validation (temporaire) ; `captures/etape-20/` supprimé.

**Étape 23**
- `src/components/MethodeFacons.astro` : « Vous travaillez en direct avec l'artisan Akelia de votre secteur. », fond de section blanc.
- `src/components/Methode.astro` : commentaires.
- `captures/etape-23/` : capture pour validation (temporaire).

**Étape 24**
- `src/components/MethodeFacons.astro` : nouveau texte du bloc 2, boutons poussés en bas (flex + `mt-auto`), libellé sur une ligne dès 768px.
- `captures/etape-24/` : captures pour validation (temporaire).

**Étape 25**
- `src/components/Collectif.astro` (nouveau) : section Collectif, données des 5 engagements, script et CSS d'animation.
- `src/components/CollectifEngagement.astro` (nouveau) : une ligne d'engagement (icône, titre, texte).
- `src/pages/index.astro` : import et insertion de `<Collectif />` entre le simulateur et les articles.
- `captures/etape-25/` : captures et mesures pour validation (temporaire).

### Questions en attente de réponse

*Questions 51 à 67 : refonte visuelle de la page d'accueil (12 octobre 2026), détail dans la section « Refonte visuelle de la page d'accueil » en fin de fichier.*

*Questions 68 à 80 : refonte « alan.com » de la page d'accueil (12 octobre 2026), détail dans la section « Refonte « alan.com » de la page d'accueil » en fin de fichier.*

*Questions 81 à 84 : ajout de 4 couleurs de fond (12 octobre 2026), détail dans la section « Ajout de 4 couleurs de fond à la charte » en fin de fichier.*

*Questions 85 à 89 : refonte du Hero (12 octobre 2026), détail dans la section « Refonte du Hero » en fin de fichier.*

*Questions 90 à 94 : corrections du Hero (12 octobre 2026), détail dans la section « Corrections du Hero » en fin de fichier.*

*Questions 95 à 102 : refonte de la section Méthode avec schéma évolutif (13 octobre 2026), détail dans la section « Refonte de la section Méthode : schéma évolutif » en fin de fichier. La question 98 est réglée ; la question 103 s'ajoute (correction de la caméra thermique).*

95. **⚠️ Couleurs des étapes : une version FONCÉE de chaque teinte a été ajoutée à la charte.** Les teintes claires (bruyère, argile, lichen, brume) sont invisibles en trait fin sur fond blanc (contraste 1,3:1 à 1,4:1) : un filet latéral ou un tracé de schéma dans ces teintes ne se verrait pas. Règle appliquée : la teinte CLAIRE colore le fond de l'onglet actif, le fond du panneau de texte et les surfaces du schéma (isolant, panneaux solaires, soleil) ; la teinte FONCÉE, de la même famille, colore le filet latéral, la pastille numérotée et tous les traits du schéma. Nouvelles variables : `bruyere-fonce` #765580, `argile-fonce` #a04e2c, `lichen-fonce` #58682a, `brume-fonce` #36648a (5,8:1 à 6,3:1 sur blanc). D'accord avec ce principe ?
96. *(Mise à jour le 13 octobre 2026 : la section suivante n'est plus sur fond argile, l'inconvénient signalé ci-dessous a disparu.)* **Attribution des couleurs aux étapes** : 1 Audit = bruyère (mauve), 2 Isoler = argile (terre cuite, chaleur), 3 Produire = lichen (vert-jaune), 4 S'équiper = brume (bleu). Inconvénient : la section suivante « Vous pilotez… » est sur fond argile, la même famille que l'étape 2. Une autre répartition ?
97. **Schéma en coupe 2D, et non en perspective comme celui du hero.** La consigne demandait « le même style » que `SchemaMaison.astro` : mêmes épaisseurs de trait, bleu nuit, hachures à 45°, annotations en italique, cotes sans chiffres. Mais la maison est dessinée en coupe verticale de face, et non en perspective : c'est la seule vue où l'isolant des combles ET celui des murs, la VMC et ses gaines se lisent clairement. Conséquence : les panneaux solaires sont vus par la tranche, sur le pan droit du toit (3 modules quadrillés, remplis de la teinte lichen). Faut-il une vue en perspective, comme le hero ?
98. *(Réglée le 13 octobre 2026 : la caméra thermique et sa visée n'apparaissent plus qu'à l'état 1 ; les cotes restent sur les 4 états. Voir « Correction : caméra thermique ».)*
99. **Sur téléphone, le schéma est petit** (335 × 209px) et ses annotations sont masquées (environ 9px, illisibles). Après avoir touché une étape, le schéma est **sous les 4 onglets** : il peut être hors de l'écran, et l'utilisateur ne voit pas le changement. Options : faire défiler doucement jusqu'au schéma après chaque toucher (sur téléphone uniquement), ou laisser tel quel. Je n'ai rien fait automatiquement : un défilement non demandé peut désorienter. Votre choix ?
100. **Phrase d'aide ajoutée au-dessus des étapes** (« Cliquez sur une étape : le schéma change. », « Touchez… » sur écran tactile). Ce n'était pas demandé, mais c'est l'indice le plus franc pour un public senior, en plus du curseur, du chevron, de l'ombre et du survol. La garder ? Texte à valider.
101. **Hauteur fixe du panneau de texte.** Les 4 textes n'ont pas la même longueur : sans précaution, la page sautait de 31px (1280px) à 63px (375px) à chaque changement d'étape. Les 4 panneaux sont maintenant superposés et la case prend la hauteur du plus long. Conséquence visible : sur téléphone, sous les textes courts (étapes 1, 3, 4), le panneau garde un vide d'environ 2 lignes. D'accord ?
102. **Le Hero n'a pas été modifié** : le séparateur demandé entre le bandeau et la Méthode est une ombre intérieure douce en haut de la section Méthode (dégradé bleu nuit à 25 %, 14px). Pas de trait : la charte interdit les bordures noires depuis octobre 2026. Plus marqué ?
103. **Maison décentrée à partir de l'état 2.** Sans la caméra, la gauche du schéma est vide dès l'état 2, alors que la droite porte le soleil, la pompe à chaleur et la borne. La maison paraît décalée vers la gauche (capture `captures/methode-camera/1280-schema-etat-2.png`). Je n'ai pas déplacé la maison : elle doit rester au même endroit dans les 4 états pour qu'on voie la construction. Si le déséquilibre gêne, une piste serait de déplacer la borne ou la pompe à chaleur à gauche de la maison. À faire ?

*Questions 104 à 107 : animation d'entrée du schéma de la Méthode et refonte de « Deux façons de faire » (13 octobre 2026), détail dans la section du même nom en fin de fichier.*

104. **Fond crème FONCÉ (#ece7dd), et non crème.** Le crème (#f7f4ee) est trop proche du blanc de la Méthode, juste avant : écart OKLab de 3,3, celui qui rendait la page uniforme avant l'ajout des 4 teintes. Le crème foncé, déjà dans la charte (`creme-fonce`), s'écarte de 7,2 du blanc et de 5,7 du brume des Cas types, dans la fourchette des autres sections voisines (5,5 à 10). Texte 13,3:1. Le garder ?
105. **⚠️ Marges verticales réduites pour cette section seulement** : 48px, puis 64px à partir de 768px, au lieu de 72 et 120px partout ailleurs. Sans cela, la section mesurait 808px à 1280px, **plus que l'ancienne (777px)** : les marges de 2 × 120px pesaient plus que le texte supprimé. C'est une exception au rythme vertical de la page d'accueil. D'accord ?
106. **Illustration agrandie de 20 %.** `travaux.png` (2752 × 1536) a un fond transparent et de larges marges vides autour du dessin (environ 15 % de chaque côté). Affiché tel quel, le dessin paraissait petit. Il est agrandi de 20 % ; le surplus transparent est coupé, sans débordement de la page. Le dessin occupe ainsi environ 520px de large à 1280px. Mieux : recadrer le fichier lui-même au plus près du dessin.
107. **Titre placé au-dessus des options**, dans la colonne de droite, à partir de 1024px. Sur téléphone, il est centré en haut de la section, au-dessus de l'illustration. La demande ne précisait pas sa place. D'accord ?

*Questions 108 à 113 : refonte de la section Cas types (13 octobre 2026), détail dans la section « Refonte de la section Cas types » en fin de fichier.*

108. *(Réglée le 13 octobre 2026 : les 3 cas manquants ont été fournis, et les 2 premiers étoffés.)* **⚠️ DEMANDE REÇUE COUPÉE : merci de renvoyer la suite.** Le message s'arrête après « MAISON », au début du 3e cas. Manquent :
    - titres, contraintes et solutions de **Maison moderne**, **Appartement** et **Changement d'équipement** ;
    - peut-être d'autres consignes : étiquettes, illustrations, vérifications demandées…
    En attendant, ces 3 cas affichent des **textes provisoires rédigés par Claude** à partir des anciens textes (marqués `provisoire: true` dans `src/data/cas-types.ts`, recopiés plus bas dans la section « Refonte de la section Cas types »). À remplacer dès réception.
109. *(Réglée le 13 octobre 2026 : étiquettes supprimées.)* **⚠️ Les étiquettes flottantes chiffrées posent le même problème que l'encart « gain » supprimé.** Vous avez retiré « Ce que vous y gagnez » parce qu'un gain est impossible à chiffrer honnêtement. Or plusieurs étiquettes sur les illustrations sont des promesses chiffrées de même nature : « Facture ÷ 4 », « PAC ÷ 2 vs gaz », « 85 % autoconsommé », « 6 kWc ». Je les ai **gardées**, puisque la partie reçue de la demande n'en parlait pas (voir aussi la question 68). Les retirer, ou les remplacer par des faits non chiffrés (« Isolation perspirante », « Travaux sans AG ») ?
110. *(Sans objet : fond prune, bloc dérivé du fond.)* **Bloc de contenu en nuit-700, et non blanc.** Un grand bloc blanc aurait dilué la rupture sombre demandée. Le nuit-700 se distingue du fond par sa teinte (1,33:1 entre les deux fonds, comme les cartes du bandeau du Collectif) ; les deux encarts, en nuit-900, se détachent à leur tour du bloc. Le préférez-vous blanc ?
111. *(Réglée : nouvelles illustrations PNG transparentes.)* **Illustrations à fond crème sur fond bleu nuit.** Les 5 images (`pierre.jpg`, etc.) ont un fond crème clair : sur le bleu nuit, chacune forme un grand rectangle clair coupé par le bord gauche de l'écran (capture `captures/cas-types/1280-onglet-1.png`). Le contraste est fort, et l'effet de « fenêtre » n'est pas désagréable. Mais des illustrations sur fond transparent ou sombre s'intégreraient mieux. Les faire refaire ?
112. *(Sans objet : les Cas types sont en prune.)* **Deux sections bleu nuit sur la page.** Les Cas types et le Collectif sont maintenant tous deux en bleu nuit, séparés par le simulateur d'aides (lichen). Ils ne sont pas voisins, la règle « deux sections voisines n'ont jamais la même couleur » est donc respectée. Mais la page a deux grandes masses sombres rapprochées. À surveiller sur la page entière.
113. *(Sans objet depuis le 14 octobre 2026 : les encarts des Cas types sont supprimés, `vert-clair` n'est plus utilisé.)* **Nouvelle couleur `vert-clair` (#8fd1b0)** pour le libellé et le filet de « Ce qu'on fait à la place » : les verts existants (vert-400, vert-600) sont trop sombres sur le bleu nuit. 8,2:1 sur nuit-900. D'accord ?

*Question 114 : état des lieux des illustrations (13 octobre 2026), détail dans la section du même nom en fin de fichier.*

114. *(Réglée le 13 octobre 2026 : références des cas types passées en `.png`, carte du Collectif masquée en attendant `carte.png`. Reste ouverte : l'image de partage `/images/og-default.jpg`, voir la question 117.)*

*Questions 115 à 117 : correction des références aux illustrations (13 octobre 2026), détail dans la section du même nom en fin de fichier.*

115. *(Réglée le 13 octobre 2026 : fond transparent utilisé, sur fond prune ; voir la question 120.)* **⚠️ Les nouveaux dessins ne tiennent sur le bleu nuit que grâce à un fond crème « accidentel ».** Le cadre de l'image a un fond crème foncé (#ece7dd), prévu à l'origine pour un emplacement vide. Il passe derrière les PNG transparents (78 à 87 % de pixels transparents) et sert aujourd'hui de « feuille » au dessin. Simulations faites (captures, sans modifier le code) :
    - **sans ce fond** (`simulation-sans-fond-cas-1.png`, `-4.png`) : le dessin ne disparaît pas, car ses traits ont un halo blanc et ses surfaces sont remplies de blanc. Il s'affiche « en négatif », avec des taches blanches floues (toit et pied de la maison en pierre). Lisible, mais sale. **Déconseillé** ;
    - **dessin inversé** par filtre CSS (`simulation-inverse-cas-1.png`) : les remplissages blancs deviennent des taches noires. **À écarter** ;
    - **fond clair assumé** (état actuel) : propre et lisible. C'est la solution que je recommande, à condition de l'assumer comme choix de dessin (une « feuille » claire posée sur le bleu nuit, coupée par le bord gauche de l'écran) et de choisir sa teinte : crème foncé, crème ou blanc ?
    - Solution de fond, si l'on veut des dessins directement sur le bleu nuit : faire **produire des versions « négatives »** (traits clairs, sans remplissage blanc, sur fond transparent).
    Aucune de ces solutions n'est appliquée. Votre choix ?
116. *(Réglée : l'image garde ses proportions, rien n'est rogné.)* **⚠️ 43 % de chaque dessin est rogné.** Le cadre de l'image fait 688 × 672px (presque carré, 42rem de haut à partir de 950px), alors que les dessins sont en paysage (2752 × 1536). Avec `object-cover`, seuls 57 % de leur largeur sont visibles. Exemple : la maison en pierre perd son appentis à gauche et le portail à droite. Les anciennes images étaient composées pour ce cadrage serré ; ces plans d'architecte, non. Proposition, non appliquée : donner au cadre les proportions du dessin (capture `simulation-proportions-cas-1.png`). Le dessin est alors entier, mais paraît plus petit, et la section raccourcit (gain non mesuré). À appliquer ?
117. **Image de partage manquante** (signalée, non corrigée, comme demandé). `src/layouts/Layout.astro`, ligne 24, utilise `/images/og-default.jpg` par défaut. Ce fichier n'existe pas (pas de dossier `public/images/`). Les aperçus de lien (réseaux sociaux, messageries) n'ont donc pas d'image. À déposer : `public/images/og-default.jpg`, 1200 × 630px de préférence.

*Questions 118 à 122 : corrections de la section Cas types (13 octobre 2026), détail dans la section du même nom en fin de fichier.*

118. *(Réglée le 14 octobre 2026 : prune jugé trop terne, remplacé par le violet ; voir la question 160.)* **Fond PRUNE (#3d2c40), à valider.** Teintes essayées sur le vrai rendu (captures `captures/cas-types-fond/essai-…`) : prune, moka (#3e3229), brique (#6b3424), aubergine (#5e4462). La prune l'emporte :
    - famille de la bruyère, déjà dans la charte ;
    - texte blanc à 12,9:1 ;
    - les touches orange des dessins restent visibles (sur la brique, elles disparaissent) ;
    - nettement distincte du bleu nuit du Collectif, du blanc, du crème foncé et du lichen ;
    - ni bleu nuit, ni vert sapin.
    Le moka est la 2e option, plus chaude.
119. **⚠️ Phrases ajoutées aux deux premiers cas : à valider.** Vous avez demandé de développer « dans le même esprit » les textes validés. J'ai gardé vos deux phrases et ajouté deux phrases par encart (le texte exact est plus bas, dans la section « Corrections de la section Cas types »). Points de fond à vérifier par un professionnel :
    - « Avant la première réglementation thermique, en 1974, les murs… étaient souvent montés sans aucun isolant » ;
    - l'avis de l'architecte des Bâtiments de France sur menuiseries, enduits et toiture (vrai en abords de monument historique et en site patrimonial remarquable) ;
    - les isolants cités (fibre de bois, chanvre et chaux, liège).
120. **⚠️ Lisibilité des dessins sur fond foncé : elle ne vient PAS de l'encre.** Mesure : l'encre des dessins (gris-bleu foncé) contraste à 1,35:1 seulement avec la prune (de 1,0:1 à 1,7:1 pour toutes les teintes foncées essayées). L'encre seule serait donc invisible, quelle que soit la teinte. Les dessins restent lisibles grâce à leurs **halos et remplissages blancs** : ils apparaissent en traits clairs, comme à la craie. Défauts visibles :
    - taches blanches floues par endroits (toit de la maison en pierre, toit de la maison à toit plat, reflet en bas de l'appartement) ;
    - les cotes les plus fines s'effacent.
    Pour un rendu net, il faudrait des versions **dessinées pour fond sombre** : traits clairs, sans remplissage ni halo. Les commander ?
121. *(Mise à jour le 14 octobre 2026 : l'écart est réduit à 38px à 1280px, de 1 192 à 1 230px, et à 106px à 375px, de 1 470 à 1 576px.)* **⚠️ La hauteur de la section change d'un onglet à l'autre.** Les textes étoffés sont plus longs que l'illustration réduite : la section fait de 1 364 à 1 458px à 1280px, et de 1 710 à 1 899px à 375px. La page « saute » donc de 94px (189px sur téléphone) au changement d'onglet. Avant, la grande image fixait la hauteur. Correction possible, non appliquée car non demandée : superposer les 5 panneaux, comme pour la Méthode, la hauteur devenant celle du plus long. À faire ?
122. **⚠️ Le dessin du 3e cas ne correspond plus à son libellé.** `moderne.png` montre une maison contemporaine à toit plat, avec panneaux solaires, pompe à chaleur et borne : précisément le type RT 2012 / RE 2020 que vous avez écarté. Pour « Années 1995 à 2012 », il faudrait un pavillon à toit en pente, typique de cette période. Le texte alternatif décrit honnêtement le dessin actuel. Faire refaire le dessin ?

*Questions 123 à 134 : raccourcis du Hero sous le schéma et bandeau « Comment ça se passe ? » (14 octobre 2026), détail dans la section du même nom en fin de fichier.*

123. *(Réglée le 14 octobre 2026 : la mention devient un badge orange à texte bleu nuit.)* **Couleur du surtitre : orange FONCÉ (action-600), pas action-500.** Vous avez demandé action-500 « ou une couleur qui la détache franchement ». Mesure sur le blanc :
    - action-500 (#f0920f) : **2,4:1**. C'est illisible, sous le minimum d'accessibilité (3:1 pour un texte de cette taille en gras) ;
    - **action-600 (#d17f08) : 3,1:1**, retenu. C'est le minimum, sans marge ;
    - argile-fonce (#a04e2c, terre cuite) : 5,8:1. Plus sûr pour un public senior, mais moins « orange ».
    Garder action-600, ou passer à argile-fonce ?
124. **« Rénovation globale » n'est pas plus large sur grand écran.** En 3 colonnes, une case de 2 ou 3 colonnes de large laisse un trou en bas de la grille (8 raccourcis restants : 3 + 3 + 2). Elle est donc :
    - sur grand écran : une case comme les autres, mais sur fond bleu nuit, avec la mention « L'offre complète » (grille 3 × 3 pleine) ;
    - sur téléphone et tablette : sur toute la largeur.
    Ça vous convient ?
125. **La ventilation n'a pas de raccourci.** Aucune des 9 pages demandées ne la concerne. Elle ne s'allume donc qu'avec « Rénovation globale ». Faut-il ajouter un 10e raccourci « Ventilation » ? Il faudrait alors revoir la grille : 10 cases ne tombent juste ni en 2, ni en 3 colonnes sans la case large.
126. **Écart dans la consigne 1.5 :** « les cinq autres équipements » en cite **sept** (isolation des combles, isolation des murs, menuiseries, ventilation, photovoltaïque, chauffe-eau, borne). Les sept restent visibles en permanence. À confirmer.
127. **Numéros des repères supprimés.** Sans la légende, les numéros 1 à 8 ne renvoyaient plus à rien. Les cercles numérotés sont devenus des **pastilles orange pleines** au bout des traits de rappel : l'aspect « plan annoté » reste, sans numéro orphelin. Sinon, on peut supprimer pastilles et traits de rappel. Votre préférence ?
128. **⚠️ Textes rédigés par Claude, à valider :**
    - la phrase d'aide sous « Par où voulez-vous commencer ? » : « Survolez une solution pour la voir sur le schéma. » (souris) / « Touchez une solution pour la voir sur le schéma, touchez-la à nouveau pour ouvrir sa page. » (écran tactile). Sans elle, un premier toucher qui n'ouvre rien ressemble à un lien cassé ;
    - la mention « L'offre complète » sous « Rénovation globale » ;
    - la nouvelle description du schéma pour les lecteurs d'écran (balise `<desc>`).
129. *(Réglée le 14 octobre 2026 : argile refusée, remplacée par la brume ; voir la question 137.)* **Fond du bandeau « Comment ça se passe ? » : argile** (#f1dace, rose terre cuite pâle). Justification dans la section en fin de fichier. L'autre candidat sérieux est la **brume** (#ccdce8, bleu ardoise pâle) : un peu plus contrastée avec le blanc (1,40:1 contre 1,34:1), mais froide. Valider l'argile ?
130. *(Sans objet depuis le 14 octobre 2026 : la vidéo est abandonnée au profit de deux illustrations.)* **La vidéo n'existe pas.** Aucun fichier dans `public/videos/` (le dossier n'existe pas). Un **emplacement vide** (cadre blanc translucide, 4:3) est affiché à la place. Il faut fournir 3 fichiers :
    - `comment-ca-marche.webm` ;
    - `comment-ca-marche.mp4` ;
    - `comment-ca-marche.jpg` : l'image fixe, affichée avant le chargement et si « réduire les animations » est activé. Ce nom n'était pas dans la demande, je l'ai choisi.
    Format conseillé : **4:3 (1440 × 1080)**, muette, en boucle, quelques secondes, quelques centaines de Ko si possible. Qui la produit ?
    En attendant, faut-il **masquer le cadre vide** et laisser les étapes seules en pleine largeur ? Le cadre vide fait inachevé.
131. *(Sans objet depuis le 14 octobre 2026 : le double toucher est supprimé, un seul toucher ouvre la page.)* **⚠️ Double toucher : risque pour les lecteurs d'écran sur mobile.** VoiceOver (iPhone) et TalkBack (Android) activent un lien par un double-tap, que le site peut prendre pour un toucher du doigt. Leurs utilisateurs devraient alors activer deux fois chaque raccourci. **Non testable ici : à vérifier sur un vrai téléphone, lecteur d'écran allumé.** Si c'est gênant, deux solutions :
    - réserver le double toucher aux tablettes ;
    - ouvrir le lien dès le premier toucher sur téléphone.
132. **Les 9 pages de destination n'existent pas encore** (aucun dossier `src/pages/solutions/` : erreur 404). C'était déjà le cas des 8 anciens raccourcis. La nouvelle page `/solutions/renovation-energetique-globale` s'ajoute à la liste.
133. **Hauteurs sur téléphone (375px)** :
    - Hero : **1 254px**, soit 1,5 écran d'iPhone X. Les raccourcis commencent à 937px, donc **sous la ligne de flottaison**. Avant : 1 029px pour le Hero seul, et 1 453px avec l'ancien bandeau ;
    - bandeau « Comment ça se passe ? » : **1 195px**.
    Acceptable ?
134. *(Sans objet depuis le 14 octobre 2026 : le nouveau texte de l'étape 1 ne parle plus d'appel.)* **Étape 1 : « Un formulaire en ligne ou un appel »**, mais le site n'affiche **aucun numéro de téléphone** (aucun lien `tel:`). Faut-il en ajouter un, ici ou dans l'en-tête ? Ou retirer « ou un appel » ?

*Questions 135 à 140 : corrections de la section « Fonctionnement » et du badge du Hero (14 octobre 2026), détail dans la section du même nom en fin de fichier.*

135. **Raccourcis de même hauteur : sur grand écran, ils font tous 78px.** Ils prennent la hauteur du plus haut, « Rénovation globale », qui tient sur 3 lignes : « Rénovation / globale / L'offre complète ». Sur téléphone et tablette, ils font tous 58px. Pour revenir à 58px sur grand écran, deux possibilités :
    - masquer la mention « L'offre complète » à partir de 1280px ;
    - mettre « Rénovation globale » sur toute la largeur. La grille aurait alors un trou (question 124).
    Garder 78px ?
136. **La maison de `chantier.png` est coupée au bord droit du dessin.** Elle continue hors de l'image : le fichier est opaque sur toute la hauteur de son bord droit. J'ai traité la coupe ainsi :
    - sur téléphone et tablette, l'image va jusqu'au bord de l'écran : la coupe se confond avec lui ;
    - à partir de 1024px, le bord droit s'efface en fondu sur ses 20 % derniers.
    Coller l'image au bord de l'écran sur grand écran l'éloignerait des étapes, de 355px à 1920px de large. Si le fondu ne vous plaît pas : faire reprendre le dessin pour que la maison soit entière ?
137. **Fond de la section : brume** (#ccdce8, bleu ardoise pâle). Justification dans la section en fin de fichier. À valider.
138. **Illustrations petites sur téléphone** : 160 et 180px de large côte à côte. À cause des marges transparentes des PNG, la femme ne mesure qu'environ 115px de large. La variante « une illustration au-dessus des étapes, l'autre en dessous » les montre deux fois plus grandes, mais la section passe de 1 287 à **1 754px** de haut. Capture : `captures/fonctionnement/375-variante-dessus-dessous.png`. Garder le côte à côte ?
139. **Taille du texte du badge : 18px** (1.125rem), contre 19,2px pour l'ancien surtitre. Avec le padding, le badge tient sur une ligne à 1280px (512px de large). En 19,2px, il frôlait la largeur de la colonne. Sur téléphone, il passe sur 2 lignes. D'accord ?
140. **Nom du fichier** : le composant s'appelle toujours `CommentCaMarche.astro`, même si le titre est devenu « Fonctionnement ». Le renommer ?

*Questions 141 à 143 : badge pâle et agrandissement des illustrations (14 octobre 2026), détail dans la section du même nom en fin de fichier.*

141. *(Sans objet depuis le 14 octobre 2026 : nouvelle répartition 25 / 50 / 25 avec débordement ; voir la question 145.)* **Les deux consignes sur les illustrations se contredisent à 1280px.** J'ai appliqué la répartition 30 / 40 / 30 : chaque illustration fait **339px de large**. Mais à cette largeur, la hauteur ne peut pas approcher celle des étapes, à cause des proportions des dessins :
    - femme au fauteuil : **379px de haut**, soit 54 % des 4 étapes (702px) ;
    - artisans : **288px de haut**, soit 41 %, car le dessin est plus large que haut.
    Pour atteindre environ 600px de haut, la femme devrait faire 540px de large, soit 45 % de la section, et empiéterait sur les étapes. Trois pistes, **non appliquées** :
    - a) laisser les illustrations déborder de leur colonne vers les bords de l'écran. Peu de gain à 1280px : la marge extérieure ne fait que 35px ;
    - b) raccourcir les étapes, avec des textes plus courts : la taille du texte courant est fixe, pour l'accessibilité ;
    - c) passer à 35 / 30 / 35 : les étapes, plus étroites, deviendraient encore plus hautes.
    Ma recommandation : garder 30 / 40 / 30. Les personnages sont déjà 1,4 fois plus grands qu'avant pour la femme, grâce au recadrage, et la section reste équilibrée (capture `1280-section.png`). Votre avis ?
142. **⚠️ Aucune marge regagnée en bas du Hero à 1280px : la dernière rangée de raccourcis finit toujours à 889px.** Ce n'est pas l'étiquette qui fixe la hauteur du Hero sur grand écran, mais la **colonne de droite** (schéma et raccourcis), plus haute que la colonne de texte. L'étiquette pâle a d'ailleurs la même hauteur que l'orange : 51px, padding conservé comme demandé. Pistes pour regagner de la marge, **non appliquées** :
    - a) ramener les raccourcis de 78 à 58px sur grand écran (question 135) : **−60px**, dernière rangée à 829px ;
    - b) réduire l'espace entre le schéma et le titre « Par où voulez-vous commencer ? », 32px aujourd'hui : −16px ;
    - c) supprimer la phrase d'aide « Survolez une solution… » : environ −25px.
143. *(Réglée le 14 octobre 2026 : version compacte sur téléphone, voir la question 148.)* **Sur téléphone, l'étiquette fait 72px de haut, sur 2 lignes.** Pour la ramener à une ligne, il faudrait un texte d'environ 13px, trop petit. Garder ?

*Questions 144 à 147 : badge vert, textes raccourcis, étapes élargies et illustrations débordantes (14 octobre 2026), détail dans la section du même nom en fin de fichier.*

144. **Contraste du badge vert : 5,8:1** (crème #f7f4ee sur vert-600 #2a6b4f). C'est au-dessus du minimum pour un texte courant (4,5:1), mais en dessous du niveau renforcé (7:1). Le texte fait 18px en gras, juste sous le seuil du « grand texte » (18,66px en gras). Si vous voulez le niveau renforcé :
    - texte blanc pur : 6,3:1, toujours sous 7:1 ;
    - vert plus foncé : vert-800 (#1e5c45) donne 7,2:1 avec le crème (mesuré).
    Garder vert-600 ?
145. **Illustrations à 1280px : la femme fait 403px de haut, les artisans 287px**, pour un bloc d'étapes de **548px**. Les étapes, plus larges, sont devenues moins hautes : 548px contre 702px. La femme atteint ainsi 74 % de leur hauteur (54 % avant), les artisans 52 % (41 % avant). Le débordement ne fait gagner que peu de largeur à 1280px : la marge extérieure ne fait que 35px. Il compte vraiment à partir de 1440px, où la femme atteint 505px de haut. Agrandir encore les artisans couperait l'artisan de droite. Ça vous convient ?
146. **Part coupée par le bord de l'écran** : 12 % de la largeur de `contact.png`, à gauche, soit les feuilles et une partie du pot de la plante ; 6 % de `chantier.png`, à droite, soit le bord de la maison, déjà coupé dans le dessin. Au-delà de 1920px, la largeur est plafonnée et les illustrations ne touchent plus le bord. Couper davantage la plante pour agrandir la femme ?
147. *(Sans objet depuis le 14 octobre 2026 : nouvelle disposition mobile.)* **Sur téléphone, rien ne change pour les illustrations** : elles occupaient déjà toute la largeur de l'écran. La section passe de 1 293 à 1 202px de haut grâce aux textes raccourcis.

*Questions 148 à 151 : badge compact et illustrations en pleine largeur sur téléphone (14 octobre 2026), détail dans la section du même nom en fin de fichier.*

148. **Le badge ne tient pas sur une seule ligne à 375px, même en 14px.** Mesures :
    - il faudrait **361px** de texte, pour **311px** disponibles une fois le padding retiré ;
    - pour tenir, le texte devrait descendre à environ 12px, trop petit.
    Solution appliquée : le texte est coupé **volontairement après le tiret**, sur téléphone seulement :
    - ligne 1 : « Collectif d'artisans locaux — » ;
    - ligne 2 : « en direct, sans sous-traitance. »
    Le badge mesure maintenant **212 × 51px**, contre **335 × 70px** : il ne prend plus que 57 % de la largeur. Le titre commence 107px sous le haut du Hero (le badge précédent faisait 19px de plus). D'accord avec cette coupure ?
149. *(Réglée le 14 octobre 2026 : illustrations réduites, section ramenée à 1 418px.)* **Hauteur de la section « Fonctionnement » à 375px : 1 795px**, contre 1 202px avec les illustrations côte à côte : **+593px**, soit **2,2 écrans d'iPhone X** (812px). Pistes de réduction, **non appliquées** :
    - a) plafonner la femme à 80 % de la largeur (300px) : environ −85px. Elle reste deux fois plus grande qu'avant ;
    - b) réduire l'espace au-dessus et au-dessous des illustrations (32 et 40px aujourd'hui) : environ −30px ;
    - c) réduire la marge verticale de la section sur téléphone (72px en haut et en bas) : −24 à −48px ;
    - d) plafonner aussi les artisans à 90 % de la largeur : environ −30px. Mais leur maison coupée ne toucherait plus le bord droit de l'écran.
    Toutes ensemble : environ −170 à −195px, soit à peu près 1 600 à 1 625px. Ce sont des estimations, non mesurées.
150. *(Sans objet depuis le 14 octobre 2026 : la tablette suit la nouvelle règle, voir la question 158.)* **Tablette (768 à 1023px) : la section mesure 1 887px à 768px.** La pleine largeur y aurait donné des dessins démesurés : 858px de haut pour la femme. J'ai donc plafonné les largeurs :
    - femme : 448px de large (28rem), collée au bord gauche, 501px de haut ;
    - artisans : 576px de large (36rem), collés au bord droit, 490px de haut.
    Ce plafond n'était pas demandé. Le garder, ou le réduire encore ?
151. *(Réglée le 14 octobre 2026 : plus aucun débordement sous 1024px.)* **Plus de débordement au-delà des bords sur téléphone** : chaque illustration va exactement d'un bord à l'autre de l'écran, sans être coupée. La femme est entière, plante comprise. Les artisans sont coupés seulement là où le dessin l'était déjà. Faut-il quand même les faire déborder, comme sur grand écran ?

*Questions 152 à 156 : avancement automatique des étapes de la Méthode au défilement (14 octobre 2026), détail dans la section du même nom en fin de fichier.*

152. **Tranches calées sur le SCHÉMA, pas sur toute la section.** La section mesure 1 316px à 1280px, mais le schéma n'en occupe que 466px, à 483px du haut. Découpée sur toute la section autour du centre de l'écran :
    - l'étape 2 serait arrivée quand seul le haut du schéma était visible ;
    - la fin de l'étape 4 se serait jouée schéma à moitié sorti.
    Les 4 tranches couvrent donc la fenêtre où **au moins la moitié du schéma est visible**, sous l'en-tête collant. Valider ce choix ?
153. *(Mise à jour le 14 octobre 2026 : seuils resserrés dans la fenêtre où le schéma est entier, 64 à 96px par étape à 1280 × 900, voir la question 173.)* **Rythme : environ 180 à 200px de défilement par étape** à 1280 × 900, soit un cran et demi de molette (un cran = 120px dans le navigateur de test). Sur téléphone : 180 à 200px aussi, soit un petit glissement du doigt. Plus lent, il faudrait que les changements se fassent avec un schéma en partie caché. Plus rapide, on sauterait des étapes. Le rythme vous convient-il ?
154. **En arrivant par le bas de la section** (en remontant la page), l'étape 4 s'affiche directement, puis on redescend 3, 2, 1 en remontant. C'est la même règle dans les deux sens : l'étape dépend seulement de la position du schéma. D'accord ?
155. **Cas limite au clavier.** Si un visiteur a mis le focus sur un onglet avec Tab, puis fait défiler la page à la souris, l'étape change mais le focus reste sur l'ancien onglet. Rien ne casse : Tab et les flèches repartent de l'onglet actif. Rappel, inchangé : quand le focus est SUR un onglet, les flèches haut et bas changent d'étape au lieu de faire défiler la page. C'est le modèle « onglets » du W3C, et cela compte comme un choix manuel qui suspend l'avancement. Acceptable ?
156. **À tester sur de vrais appareils** : défilement au doigt sur iPhone et Android, et défilement « avec élan » (le doigt lâche, la page continue). En simulation, le glissé du doigt fonctionne : 285px parcourus pour un geste de 300px, sans aucun blocage. Mais l'élan des vrais téléphones ne se simule pas.

*Questions 157 à 159 : badge pleine largeur et illustrations réduites sur téléphone (14 octobre 2026), détail dans la section du même nom en fin de fichier.*

157. *(Sans objet depuis le 14 octobre 2026 : le badge n'est plus en pleine largeur, c'est une étiquette orange pâle alignée à gauche.)* **Badge pleine largeur : texte CENTRÉ.** Centré, il répond au bouton « Obtenir un devis » juste en dessous, centré lui aussi, et les deux lignes courtes s'équilibrent au milieu. Aligné à gauche, il laisserait un grand vide à droite de chaque ligne. Différence restante avec le bouton : les coins. Le badge garde ses 28px, ce qui en fait une pilule sur 51px de haut ; le bouton a des coins de 10px. Aligner les coins du badge sur ceux du bouton, sur téléphone ?
158. **Tablette (768 à 1023px) : même réduction que sur téléphone.** Ce n'était pas explicitement demandé. Illustrations centrées, plafonnées à 272 × 304px (femme) et 320 × 272px (artisans), nettement plus petites que le bloc des étapes (728 × 485px). Section : 1 473px à 768px, contre 1 887px. D'accord ?
159. **Le bord coupé de `chantier.png` est visible sur téléphone.** L'image est maintenant centrée : la coupe de la maison tombe au milieu de l'écran, et non plus au bord. Elle s'efface en fondu (12 % du bord droit), comme sur grand écran, mais le fondu reste perceptible. Voir le bas de `captures/mobile-v5/375-section.png`. Si ça gêne, le seul vrai remède est un dessin où la maison est entière (question 136).

*Questions 160 à 165 : refonte de la section Cas types (violet, 6 onglets, deux paragraphes, boutons, illustrations agrandies, 14 octobre 2026), détail dans la section du même nom en fin de fichier.*

160. **Fond violet #5a2d82, à valider.** Contrastes : voir la section en fin de fichier. Deux variantes calculées :
    - **#4c2a85**, plus bleutée : texte blanc à 10,6:1 ;
    - **#622e8f**, encore plus vive : texte blanc à 9,1:1. Mais l'onglet survolé descend à 6,0:1, et le bouton orange à 3,1:1 contre le bloc, juste au-dessus du minimum.
    #5a2d82 est le compromis : franc, sans fragiliser aucun contraste.
161. *(Remplacée le 14 octobre 2026 par la question 170 : l'illustration attendue s'appelle désormais `cas-neuf.png`, en 3D ; `moderne.png` n'est plus utilisé.)* **⚠️ `neuf.png` manque** (onglet « Construction de maison neuve »). Un emplacement vide de 573 × 430px s'affiche à sa place à 1280px, et de 335 × 251px à 375px. Son texte alternatif est à rédiger d'après le dessin. **Suggestion** : `moderne.png` montre une maison contemporaine à toit plat, avec panneaux solaires, pompe à chaleur et borne. C'est exactement une maison neuve, et cela réglerait aussi la question 122 (dessin qui ne correspond pas aux « Années 1995 à 2012 »). Il faudrait alors un nouveau dessin pour le 3e onglet, un pavillon à toit en pente. Utiliser `moderne.png` pour le neuf ?
162. **⚠️ Bouton de l'onglet « Appartement » : libellé non fourni.** J'ai mis « Demander un audit de mon appartement », sur le modèle des autres. À valider ou remplacer.
163. **Hauteur des illustrations par rapport au bloc de texte**, à 1280px (texte : 491 à 523px) :
    - maison ancienne : 482px (92 %) ;
    - chaufferie : 529px (101 %) ;
    - pavillon : 406px (83 %) ;
    - appartement : 417px (80 %) ;
    - maison à toit plat : seulement **347px (66 %)**, car le dessin est très allongé (1,65 fois plus large que haut).
    Pour l'agrandir encore, il faudrait que l'illustration déborde de sa colonne. Acceptable ?
164. *(Sans objet depuis le 14 octobre 2026 : les dessins au trait ne sont plus utilisés dans les Cas types, voir les illustrations 3D. Le défaut équivalent des nouvelles images est la question 168.)* **Les halos blancs des dessins se voient davantage** (rappel de la question 120). Agrandis, les dessins montrent mieux leurs taches blanches floues, par exemple sur le toit de la maison ancienne (`captures/cas-types-violet/1280-onglet-1.png`). Des versions dessinées pour fond sombre restent la vraie solution.
165. **Onglets en 3 × 2 à partir de 1024px** (non demandé). Sur une seule ligne libre, la 2e rangée ne contenait que « Changement d'équipement ». Désormais : 3 onglets de largeur égale par rangée. Sous 1024px : inchangé, ligne qui défile sur téléphone et retour à la ligne centré sur tablette. D'accord ?

*Questions 166 et 167 : badge du Hero devenu une étiquette discrète orange pâle (14 octobre 2026), détail dans la section « Badge du Hero : étiquette discrète orange pâle à toutes les largeurs » en fin de fichier.*

166. **Taille du badge à partir de 768px : 16px** (18px pour l'ancien badge vert). « Un peu plus grand » que les 14px du téléphone : est-ce que 16px convient, ou faut-il 17-18px ?
167. **Pas de filet autour de l'étiquette.** Une version « orange pâle avec filet » avait été écartée plus tôt, jugée pas assez visible. Faut-il ajouter un filet fin `action-500` si l'étiquette paraît trop effacée ?

*Questions 168 à 172 : illustrations 3D des Cas types (14 octobre 2026), détail dans la section « Illustrations 3D des Cas types » en fin de fichier.*

168. **⚠️ `cas-annees70.png` : fond blanc résiduel dans l'échafaudage.** Le détourage n'a pas retiré le fond pris entre les montants et les croisillons : 2 à 3 zones blanches opaques, sous le plancher, à droite (bien visibles sur `captures/cas-types-3d/1280-onglet-2.png`). Je n'ai pas modifié le fichier. Deux options : (a) **refaire l'export** chez l'illustrateur (recommandé, propre) ; (b) je rends transparents ces pixels blancs dans une copie, par traitement automatique (risque d'attaquer le blanc des pulls et de la fenêtre, à contrôler). Laquelle ?
169. **`cas-recent.png` : maison coupée net en haut et à gauche.** Le mur et le toit touchent le bord du fichier (coin haut gauche opaque). Ce n'est pas un rectangle blanc, mais sur le violet la maison s'arrête sur deux bords droits, comme découpée (`captures/cas-types-3d/1280-onglet-3.png`). Les deux autres images sont entières. L'accepter tel quel, ou demander un export avec la maison entière ?
170. **Trois onglets sans illustration** (Appartement, Construction neuve, Changement d'équipement) : emplacements vides, comme demandé. Conséquence : **Appartement et Changement d'équipement perdent leur dessin au trait**, ils en avaient un jusqu'ici. Noms attendus : `cas-appartement.png`, `cas-neuf.png`, `cas-equipement.png`. Les textes alternatifs de ces trois onglets sont vides : à me fournir avec les images (ou je les rédige d'après les images).
171. **Fichiers orphelins** : `appartement.png` et `technique.png` sont toujours dans `src/assets/illustrations/`, mais plus utilisés nulle part. ⚠️ `pierre.png`, `annees70.png` et `moderne.png` **n'existaient déjà plus** dans le dossier (et n'ont jamais été commités) : il n'y a rien à signaler les concernant. Supprimer `appartement.png` et `technique.png` ?
172. **Deux styles d'illustration sur la page d'accueil.** Les Cas types passent en 3D, mais « Deux façons de faire » (`travaux.png`) et « Fonctionnement » (`contact.png`, `chantier.png`) gardent des dessins au trait. Faut-il prévoir des versions 3D de ces trois-là ?

*Questions 173 à 176 : badge à 90 %, seuils de la Méthode, toucher unique sur les raccourcis du Hero (14 octobre 2026), détail dans la section « Badge à 90 %, seuils de la Méthode et raccourcis tactiles » en fin de fichier.*

173. ✅ *Réglée le 15 octobre 2026 par la « piste collante » (voir la section « Badge sans coupure forcée et rythme de la Méthode »). Reste ouvert pour les écrans bas : question 186.* **⚠️ Étapes de la Méthode rapides sur ordinateur.** À 1280 × 900, le schéma (466px de haut) n'est entièrement visible que pendant **312px de défilement**. Pour que les 4 étapes y soient vues, chacune n'a que 64 à 96px, soit **moins d'un cran de molette** (environ 100 à 120px). Un cran peut donc faire passer deux étapes d'un coup, l'intermédiaire ne s'affichant qu'un instant. Sur téléphone, c'est plus confortable (96 à 172px). Il n'y a pas de seuil qui résolve les deux à la fois : soit des étapes plus espacées (le schéma sort de l'écran), soit un schéma entier (étapes rapprochées). Pour avoir les deux, il faudrait un **schéma « collant »** (il reste fixé à l'écran pendant que les étapes défilent), ce qui modifie la mise en page. À envisager ?
174. **L'étape 2 arrive un peu PLUS TARD qu'avant**, contrairement à « décaler les quatre seuils vers le haut ». Avant, elle se déclenchait quand le bas du schéma était encore sous l'écran : l'étape 1 n'était donc **jamais** vue avec le schéma entier à 1280 × 900. Les étapes 3 et 4 arrivent bien plus tôt (l'étape 4 : haut du schéma à 92px sous l'en-tête, au lieu d'être déjà en partie caché). D'accord ?
175. **Écran d'ordinateur bas (1280 × 720)** : le schéma n'est entier que pendant 132px. Les 4 changements ont bien lieu schéma entier, mais l'étape 1 n'est vue entière que 16px et l'étape 4, 28px. Acceptable ?
176. ✅ *Réglée le 15 octobre 2026 : le `<br>` est supprimé, le texte coule librement.* **Coupure forcée du badge sur téléphone gardée** (après « locaux — »). Elle servait à éviter que le badge s'étire ; avec une largeur fixe de 90 %, elle ne sert plus qu'à la lecture (« Collectif d'artisans locaux » / « en direct, sans sous-traitance. »). La garder ou laisser le texte couler librement ?

*Questions 177 à 199 (185 à 187 : badge et rythme de la Méthode ; 188 à 199 : Cas types ; 15 octobre 2026) : refonte complète des Cas types (14 octobre 2026, soir), détail dans la section « Refonte complète des Cas types : une couleur par onglet » en fin de fichier.*

177. **⚠️ Bouton dérivé du fond, pas orange.** Le texte foncé sur l'orange ne fait que 6,87:1, sous les 7:1 demandés, et l'orange sur les fonds pâles ne se détache qu'à 2:1 environ. Le bouton reprend donc la couleur du texte (fond foncé sur les fonds pâles, blanc sur les fonds foncés). Conséquence : il a le même style que l'onglet actif. Garder ainsi, ou revenir à l'orange avec un texte noir (8,8:1) ?
178. ✅ *Réglée le 15 octobre 2026 : les 6 illustrations sont livrées et affichées, les images de secours sont retirées du code, les textes alternatifs sont rédigés (voir la question 182).* ⚠️ Reste ouvert : **`aides.jpg` a disparu du dossier**, et le simulateur d'aides affiche donc un emplacement vide. Est-ce voulu ? Faut-il un nouveau fichier ? ✅ *Réglée le 15 octobre 2026 : `aides.jpg` est abandonnée, remplacée par le bandeau `bandeau-aides.png` ; l'emplacement vide est supprimé (voir « Simulateur d'aides : nouveaux textes et bandeau »).*
179. ✅ *Réglée le 15 octobre 2026* : `appartement.png` est maintenant la nouvelle illustration 3D (artisan, fenêtre, caisson de ventilation). Son texte alternatif est réécrit.
180. ✅ *Réglée le 15 octobre 2026* : contrastes mesurés. Deux survols étaient sous 7:1 sur le vert « Maison neuve » (onglet : 6,18:1 ; bouton : 5,81:1). Ils sont corrigés (voir la section « Suite et fin de la refonte des Cas types »).
181. **Capture à 1280px de l'onglet 2** : l'illustration affichée n'est pas `cas-annees70.png`. Un fichier semble avoir été ajouté ou modifié pendant le travail : à confirmer. ✅ *Confirmé le 15 octobre 2026* : les nouveaux fichiers ont été déposés à 19 h 33, deux minutes après ces captures (19 h 31).
182. **Textes alternatifs des 6 illustrations rédigés par moi**, d'après les fichiers (`src/data/cas-types.ts`). Ils décrivent ce qu'on voit, sans interpréter. À relire. Exemple : « Un artisan agenouillé raccorde les tuyaux en cuivre d'une pompe à chaleur extérieure avec une clé, ses caisses à outils posées au sol. »
183. **Survol différent sur les fonds foncés** (Bâti ancien, Maison neuve). Pour rester au-dessus de 7:1, le survol d'un onglet inactif y ASSOMBRIT le fond, au lieu de l'éclaircir. Le bouton survolé ne se grise que de 5 %, et il se souligne, sur tous les fonds, pour que le survol reste visible. Cela convient-il ?
184. ✅ *Réglée le 15 octobre 2026 : panneaux superposés, hauteur identique pour les 6 onglets (voir « Cas types : onglets centrés, superposés à l'illustration »).* **Hauteur de la section à 1280px : de 1 096 à 1 323px selon l'onglet.** Les illustrations n'ont pas le même rapport hauteur/largeur, et leur largeur est fixe : la section « saute » donc de 227px au changement d'onglet. La page sous la section bouge. Faut-il fixer une hauteur commune (la plus grande, 1 323px), au prix d'un vide sous les illustrations les plus basses ?
185. **Badge : un tiret peut se retrouver en début de ligne.** Les espaces autour de « — » sont des espaces ordinaires, comme demandé. Aux largeurs testées (320, 360, 375 et 414px), la coupure tombe après « — » ou après « direct, », jamais avant le tiret. Mais sur un écran d'une autre largeur, ou avec une police plus grande, la ligne pourrait commencer par « — ». En typographie française, on lie d'ordinaire le tiret au mot qui le précède par une espace insécable. En ajouter une entre « locaux » et « — » ?
186. **Méthode sur écran bas (1280 × 720, 1024 × 600…)** : les colonnes (713px de haut à 1280px) ne tiennent pas dans les 598px visibles sous l'en-tête. Il n'y a donc ni piste ni collage, et la section garde sa hauteur d'avant (1 316px). Les seuils sont plus espacés (20, 45 et 70 % au lieu de 15, 40 et 65 %), mais l'écart entre deux étapes reste de 44px, car la fenêtre où le schéma est entier ne fait que 132px. Faut-il réduire le schéma sur ces écrans pour que le collage puisse s'y appliquer ?
187. **Méthode sur téléphone : pendant le collage, les étapes (au-dessus du schéma) sont hors de l'écran.** On voit le schéma se construire, avec « Étape n sur 4 » et le texte de l'étape, mais pas la liste des 4 étapes. Faire coller aussi la liste en version compacte (4 pastilles numérotées) ?
188. ✅ *Réglée le 15 octobre 2026 : plafond supprimé, dessin calé à gauche sous les onglets (voir « Cas types : illustration adossée aux onglets »).* **⚠️ Cas types à 1280px : plafond de hauteur et chevauchement incompatibles.** Avec un dessin plafonné à 120 % du texte le plus haut, soit 437px de haut, les dessins ne font que 350 à 490px de large. Calés à droite et coupés par le bord de l'écran, ils ne remontent pas jusque sous les onglets : il reste 110 à 250px de vide entre les deux. Pour qu'ils passent sous les onglets ET soient coupés par le bord, il faudrait environ 600px de large, donc 600 à 750px de haut, soit 1,7 à 2 fois le texte. À 1024px, le chevauchement se fait bien, car le texte, plus étroit, est plus haut. Que privilégier ? (a) garder le plafond de 120 %, sans chevauchement à 1280px (état actuel) ; (b) relever le plafond, par exemple à 160 %, pour un chevauchement partiel ; (c) faire passer le dessin sous les onglets sans qu'il atteigne le bord de l'écran.
189. **Cas types sur téléphone : vide sous les panneaux les plus courts.** Avec la hauteur figée (1 356px à 375px, celle de l'onglet « Années 50 à 90 »), les panneaux plus courts laissent 18 à 37px de vide en bas de la section (contenus mesurés : 782 à 819px). C'est faible, et c'est le prix de la hauteur stable : pas d'action proposée.
190. **Demande reçue tronquée.** Le message s'arrêtait sur « Si après le calage à gauche l'illustration n'atteint plus le… ». J'en ai déduit que l'illustration devait atteindre le bord droit de l'écran, et c'est le cas : elle y est coupée de 24px. Si la fin de la phrase disait autre chose, merci de me la renvoyer.
191. ✅ *Réglée le 15 octobre 2026 : plafond de 120 % rétabli, section revenue à 889px (voir « Cas types : plafond de hauteur rétabli »).* **Cas types à 1280px : la section remonte à 1 213px**, contre 889px avec le plafond de 120 %. La hauteur est celle du dessin le plus haut, « Années 50 à 90 », qui fait 709px. Elle est stable d'un onglet à l'autre, mais les dessins moins hauts (513px pour « Années 1995 à 2012 ») laissent une bande vide au-dessus et au-dessous. Acceptable, ou faut-il plafonner la hauteur, par exemple à 600px, quitte à rétrécir un peu « Années 50 à 90 » ?
192. *Remplacée le 15 octobre 2026 par la question 193 (mise en page simplifiée).* **Cas types à 1024px : le rapport de 1,2 n'est tenu que pour « Années 50 à 90 ».** Au plafond (538px de haut), les 5 autres dessins, plus larges, dépasseraient le bord de l'écran de 46 à 106px, au lieu de 24px au maximum. Leur largeur est donc limitée à leur case, et leur hauteur réduite d'autant : rapport de 0,89 à 1,06 avec le texte le plus haut (398 à 474px de haut). Ils atteignent alors le bord de l'écran, coupés de 24px. J'ai fait passer la limite de 24px avant le rapport de 1,2. Si c'est le rapport qui doit primer, il suffit d'enlever la limite, mais les dessins seront alors coupés jusqu'à 106px.
193. *Sans objet depuis le 15 octobre 2026 (illustration en couche absolue).* **Cas types à 1024px : illustrations plus petites.** La colonne de droite ne fait plus que 332px de large, car les 3 colonnes sont désormais séparées par 2 × 40px. Les dessins y sont limités en largeur : 297 à 412px de haut, soit 0,71 à 0,99 fois le texte le plus haut, au lieu de 1,2. À 1280px, le plafond de 1,2 est atteint pour les 6 dessins. Pour les agrandir à 1024px, on pourrait réduire les écarts à 1,5rem, ou la colonne d'onglets à 13rem. À faire ?
194. *Sans objet depuis le 15 octobre 2026 (hauteur désormais à 140 % du bloc de contenu).* **Taille du dessin à 1280px : 399px de haut, contre 437px avant.** La règle est inchangée (120 % du texte le plus haut). Mais la colonne de texte, un peu plus large (445px de texte au lieu de 425px), rend le texte le plus haut moins haut : 333px au lieu de 364px. Si c'est la taille de 437px qui comptait, on peut passer le plafond à 130 %, ou rétrécir la colonne de texte. À arbitrer.
195. **⚠️ Cas types : l'illustration n'est PAS coupée par les bords haut et bas de la section.** À 140 % du bloc texte + onglets (386px à 1280px), elle fait 540px de haut et dépasse de 77px au-dessus et au-dessous du bloc, comme demandé. Mais les bords de la section sont plus loin : au-dessus du bloc, il y a le titre, le sous-titre et la marge haute (383px) ; au-dessous, la marge basse (120px). Résultat : le dessin finit **306px sous le haut de la section** et **43px au-dessus de son bas**. Rien n'est coupé, ni en haut ni en bas ; seuls les dessins larges sont coupés à droite par le bord de l'écran. Pour qu'il soit coupé en bas comme chez Alan : (a) réduire la marge basse de la section à environ 40px à partir de 1024px ; (b) passer à environ 170 % ; (c) caler le dessin en bas du bloc plutôt qu'au centre. Pour le haut, il faudrait un dessin d'environ 1 000px qui passerait derrière le titre : déconseillé. Que choisir ?
196. **Cas types à 1024px : le haut du dessin frôle le sous-titre.** Le dessin commence à 280px, et la 2e ligne du sous-titre (« toute faite. ») se termine vers 300px, mais plus à gauche. Sur la capture `1024-onglet-5.png`, la casquette arrive juste à droite de « méthode », sans le toucher. À 1280px, l'écart est d'environ 20px. À surveiller si le sous-titre s'allonge.
197. *Remplacée le 15 octobre 2026 par la question 199 (illustration centrée).* **Cas types : dessins larges réduits en hauteur.** Calé à droite, sans toucher les onglets, le dessin dispose de 480px de large à 1280px, et de 352px à 1024px, plus 24px qui dépassent du bord de l'écran. Les dessins plus larges que cette place, à 140 % de hauteur, sont réduits pour ne pas passer sous les onglets.
    - À 1280px : 4 dessins sur 6 font 452 à 515px de haut au lieu de 540px. Seuls « Années 50 à 90 » et « Maison neuve » gardent les 140 %.
    - À 1024px : tous font 337 à 466px de haut au lieu de 583px.
    Pour les garder plus grands, il faudrait accepter qu'ils dépassent davantage du bord de l'écran (par exemple 80px), ou rétrécir la colonne d'onglets. À arbitrer.
198. **Autres « maison » de la section.** Je n'ai modifié que « le reste de la maison » → « le reste du logement » (onglet Modernisation, qui vaut aussi pour un appartement). J'ai laissé « Votre maison a du cachet » (Bâti ancien), « ces maisons peu ou pas isolées » (Années 50 à 90), « une maison très économe » et « Construction de maison neuve » (Maison neuve). Ce sont bien des maisons. Mais un appartement des années 50 à 90 pourrait aussi se reconnaître dans l'onglet 2 : faut-il écrire « ces logements peu ou pas isolés » ?
199. **⚠️ Cas types centrés : les dessins sont nettement plus petits, surtout à 1024px.** Pour tenir centrés avec 40px de chaque côté, les dessins ne peuvent pas dépasser 440px de large à 1280px, et 312px à 1024px. Seul « Années 50 à 90 », étroit, garde sa taille de 140 % (540px de haut à 1280px).
    - À 1280px : les 5 autres font 394 à 469px de haut au lieu de 540px (de −13 à −27 %).
    - À 1024px : tous font 280 à 387px de haut au lieu de 583px (jusqu'à −52 %). Ce n'est plus « légèrement ».
    Pistes :
    - (a) réduire la respiration à 1,5rem de chaque côté : +32px de large ;
    - (b) réduire la colonne d'onglets de 15rem à 13rem : +16px de large ;
    - (c) à 1024px seulement, rétrécir la colonne de texte ;
    - (d) accepter la taille actuelle.
    Que choisir ?
200. *Mise à jour le 15 octobre 2026 (textes raccourcis) : le titre dit désormais « Augmentez la valeur de votre bien de plus de 32 000 € ». Ce n'est plus un montant d'AIDES, mais un gain de VALEUR du bien. Or le résultat du simulateur affiche « MaPrimeRénov' rénovation d'ampleur : jusqu'à 32 000 € », un plafond d'aide. Le visiteur risque de confondre les deux. Quelle source chiffre la plus-value à 32 000 € ?* **⚠️ Montant du simulateur passé de 30 000 à 32 000 € : chiffre NON CONFIRMÉ par une source officielle.** Le titre affiche désormais « plus de 32 000 € » (demande du 15 octobre 2026). Aucune source (ANAH, service-public.fr, barèmes MaPrimeRénov' 2026) n'a été vérifiée pour ce montant. Le montant maximal calculé par le simulateur (`src/data/aides.ts`) n'a PAS été modifié et peut ne pas correspondre au titre. Quelle source confirme 32 000 € ? Faut-il aligner `src/data/aides.ts` ?
201. *Sans objet depuis le 15 octobre 2026 (phrase supprimée par les textes raccourcis).* **« l'État finance cette transformation »** (nouveau paragraphe) : comme pour l'ancienne question 34, les primes CEE sont versées par les fournisseurs d'énergie et les aides locales par les collectivités, pas par l'État. Texte appliqué mot pour mot. Le garder ou nuancer (« les pouvoirs publics », « ces aides financent… ») ?
202. *Mise à jour le 15 octobre 2026 : voir la question 206 pour le nouveau texte.* **« Votre maison vaut plus qu'avant sans que vous ayez à rembourser » / « se transforment directement en plus-value immobilière »** : affirmations fortes, non sourcées (la plus-value dépend du marché et du DPE). Risque de promesse jugée trompeuse ? Texte appliqué tel quel.
203. ✅ *Réglée le 15 octobre 2026 : le fichier est déposé (1500 × 496) et s'affiche (captures `captures/simulateur-lagon/`).* **`bandeau-aides.png` pas encore déposé** au moment du travail (15 octobre 2026) : le rendu avec l'image n'a pas pu être vérifié (recadrage, taille, contraste sur le fond lichen). À recapturer après dépôt.
204. *Sans objet depuis le 15 octobre 2026 (au soir) : fond passé en blanc, voir la question 211.* **Fond « lagon » (#bce8ea, turquoise pâle) à valider** pour le Simulateur d'aides, à la place du lichen. Pourquoi lui, et les autres teintes testées : voir la section « Simulateur d'aides : textes raccourcis, équilibre et fond lagon ». Il est un peu plus vif que les autres fonds clairs de la page. Si vous le trouvez trop vif, je propose une version plus douce, #c5e6e3 (écart avec la brume : 3,0 au lieu de 3,5). Valider ou demander l'autre teinte ?
205. **Colonne de gauche « collante »** (à partir de 1024px, sur un écran d'au moins 800px de haut) : pendant le défilement du résultat, le texte et le bandeau restent à l'écran. Contrepartie : en haut de la section, sur un écran large, le titre de gauche peut se retrouver jusqu'à 40px plus bas que « Estimez vos aides » à droite. Le garder ? L'autre possibilité était de placer le bandeau à cheval sur les deux colonnes, en bas de la section : je ne l'ai pas retenue, car le bandeau perdrait son lien avec le texte et le résultat (930px) le repousserait loin du titre.
206. **« sans sortir d'argent de votre poche (jusqu'à 90 % du prix des travaux) »** : les deux affirmations se contredisent en partie. Si les aides couvrent au plus 90 %, il reste au moins 10 % à payer, et l'avance des travaux avant le versement des aides n'est pas évoquée. Le taux de 90 % n'est pas vérifié non plus (les plafonds de MaPrimeRénov' rénovation d'ampleur dépendent des revenus et changent chaque année). Texte appliqué mot pour mot. Le garder ou nuancer (« presque sans sortir d'argent ») ?
207. **Bande claire sous les personnages de `collectif.png` : OUI, elle se remarque** sur le bleu nuit. C'est une tache blanc cassé irrégulière, au sol, sous la camionnette (la plus visible, environ 330 × 40px à 1280px), devant l'atelier et sous l'artisan accroupi. Sur ce fond sombre, elle se lit comme une flaque de lumière plutôt que comme un sol. Le code ne peut pas la retirer proprement (elle est au milieu du dessin, pas en bord d'image). Solutions : (a) faire retoucher le PNG en supprimant le sol clair (ou en le passant en ombre sombre semi-transparente) ; (b) la garder telle quelle. Captures : `captures/collectif-bandeau/1280-collectif.png`, `375-collectif.png`. Quel choix ?
208. **L'atelier et la camionnette sont bleu nuit, comme le fond.** Ils restent lisibles (leur bleu est un peu plus clair et leurs reliefs sont éclairés), mais leurs contours se fondent en partie dans la section, surtout le toit de l'atelier et l'arrière de la camionnette. Acceptable, ou faut-il une version de l'illustration avec des bâtiments plus clairs ?
209. **Bandeau petit sur téléphone** : à 375px, il fait 117px de haut (120 % de la largeur, 10 % coupés de chaque côté), et les personnages ne font qu'environ 40px. Le grossir davantage obligerait à couper l'atelier et la camionnette. Le garder ainsi, ou l'agrandir (par exemple 150 % : 146px de haut, atelier et camionnette coupés en partie) ?
210. **Carte de France du Collectif supprimée du code** (`carte.png`, jamais livrée, et ses deux étiquettes « 30 min de chez vous » et « Artisans certifiés RGE ») : le bandeau prend sa place sous le texte. Confirmer que la carte est abandonnée. Si elle revient, où la placer par rapport au bandeau ?
211. **Section Simulateur d'aides en blanc : la question 204 (fond lagon) est sans objet.** Une conséquence : la section blanche est désormais encadrée de deux sections sombres (Cas types, Collectif) : la rupture est nette et le simulateur ressort bien. Mais la page compte maintenant deux sections blanches (Méthode et Simulateur), séparées par trois autres sections : aucun problème de voisinage. À valider à l'œil.
212. **Collectif à 1280px : le bandeau remonté frôle la ligne des engagements.** Pour placer le bouton dans le creux des collines, le haut du dessin (sapins de gauche, toit de l'atelier, haut de la camionnette) monte jusqu'à environ 15px sous la ligne « Un interlocuteur unique · … » ; il ne la recouvre pas (la boîte du bandeau commence 5px au-dessus du bas de la liste, mais cette bande est transparente). Le toit de l'atelier et la camionnette arrivent aussi plus haut que le bas du bouton, de part et d'autre de celui-ci. Acceptable à l'œil (`captures/collectif-remonte/1280-collectif.png`), ou faut-il ajouter 16 à 24px entre la liste et le bouton pour aérer ?
213. **Phrase du Hero « Recevez plus de 32 000 € d'aides » : montant ET formulation à confirmer.** (a) Le montant n'est toujours confirmé par aucune source officielle (question 200). (b) Le Hero dit « **plus de** 32 000 € d'aides », alors que le résultat du simulateur affiche « MaPrimeRénov' rénovation d'ampleur : **jusqu'à** 32 000 € », un plafond ; et le titre de la section aides parle de 32 000 € de **valeur** du bien, pas d'aides. Trois sens pour le même chiffre sur la page. Le visiteur qui obtient moins au simulateur peut se sentir trompé. Garder « plus de », passer à « jusqu'à », ou changer de chiffre ?
214. **Articles (blanc) → pied de page (crème #f7f4ee) : la limite est faible.** Contraste blanc / crème : 1,07:1. La bande crème se voit sur un écran bien réglé (capture `captures/corrections-accueil/1280-transition-articles-pied.png`), mais elle peut disparaître sur un écran clair ou en plein soleil. Solutions : (a) garder ainsi ; (b) passer le pied de page en crème foncé (#ece7dd, plus marqué) ; (c) ajouter un filet crème foncé en haut du pied de page. Lequel ?
215. **Cas types sur téléphone : vide au-dessus de l'illustration selon l'onglet.** Pour que la section ne change pas de hauteur d'un onglet à l'autre, la place réservée à l'illustration est celle de la plus haute (415px à 375px, onglet « Années 50-90 »). Les autres dessins sont posés en bas de cette place, contre les onglets : il reste jusqu'à environ 115px de vide sous le sous-titre (72px avec « Bâti ancien »). Acceptable, ou préférez-vous une hauteur qui varie selon l'onglet (la page bouge alors quand on change d'onglet) ?
216. **Pied de page : coordonnées et médiateur à fournir.** Il faut (a) le numéro de téléphone, (b) l'adresse e-mail de contact, (c) le médiateur de la consommation retenu (nom et adresse de son site). Ce dernier est obligatoire pour vendre à des particuliers (Code de la consommation, art. L612-1). En attendant, le pied de page affiche « Téléphone : à venir », « E-mail : à venir » et « Médiation de la consommation : à venir », sans lien. Il suffit de remplir les constantes `TELEPHONE`, `EMAIL` et `MEDIATEUR` en tête de `src/components/Footer.astro`. Les mentions « à venir » peuvent-elles rester visibles d'ici là, ou faut-il masquer ces lignes ?
217. **Pied de page : trois liens mènent à des pages inexistantes (404).** `/qui-sommes-nous` (Qui sommes-nous), `/entreprise` (Rejoindre le collectif) et `/politique-confidentialite` (Politique de confidentialité). La politique de confidentialité est **obligatoire** (RGPD), puisque les formulaires de devis et d'estimation collectent des données personnelles. Il faut la rédiger : responsable du traitement, finalités, base légale, durées de conservation, destinataires (artisans du collectif), droits des personnes et contact. Qui fournit le texte ?
218. **Pied de page : phrase sous le logo à valider.** J'ai écrit : « Le collectif d'artisans locaux de la rénovation énergétique. » Elle n'était pas demandée et reprend le vocabulaire de la section Collectif. La garder, la changer, ou la supprimer ?
219. **Menu : « Construction neuve » mène à une page inexistante (404).** Le lien `/solutions/construction-neuve` est en place dans le menu ordinateur et dans le tiroir mobile, mais la page n'existe pas encore. Qui fournit le contenu, et quand ?
220. **Menu à 1280px : une 6e entrée ne tiendrait plus en 1280px tout juste.** Il reste 114px libres à droite de « Construction neuve ». Une entrée courte de plus (« Maison autonome », environ 140px) ne tiendrait pas. Si une autre entrée doit s'ajouter, il faudra choisir : afficher le menu ordinateur seulement à partir de 1440px, ou raccourcir « Chauffage, climatisation et eau chaude » (315px de large à lui seul) en « Chauffage et eau chaude ». Rien à décider tant qu'il n'y a pas de 6e entrée.
221. **Code mort de l'accueil : quelles suppressions valider ?** Liste complète dans « Vérification et nettoyage de la page d'accueil », point 1. Rien n'a été supprimé. Répondre par élément (ou « tout »).
222. **SEO : quel title et quelle meta description pour l'accueil ?** Trois propositions de chaque, dans « Vérification et nettoyage », point 4a. Aucune n'utilise le montant de 32 000 € (non confirmé, question 213).
223. **Image de partage absente.** Toutes les pages pointent vers `/images/og-default.jpg`, qui n'existe pas (le dossier `public/images/` n'existe pas). Un partage sur Facebook, LinkedIn ou WhatsApp s'affiche donc sans image. Il faut une image de 1 200 × 630px (JPG, moins de 300 Ko). La faire à partir d'une illustration existante (`collectif.png` par exemple) avec le logo, ou en fournir une ?
224. **Données structurées schema.org absentes.** Aucun balisage JSON-LD sur le site. Pour une entreprise locale, je propose un bloc `Organization` dès maintenant (nom, URL, logo, YouTube dans `sameAs`), puis `LocalBusiness` (ou `HomeAndConstructionBusiness`) quand l'adresse, le téléphone (question 216) et la zone d'intervention seront connus. Valider l'ajout, et préciser : y a-t-il une adresse postale du collectif à publier ?
225. **Contrastes sous 7:1 sur du texte de taille courante.** Liste dans « Vérification et nettoyage », point 3. Le plus gênant : **les paragraphes de « Fonctionnement »** (texte-doux sur brume, **5,07:1**), qui sont du vrai texte courant. Les autres sont des boutons, des surtitres, un badge ou le pied de page (entre 4,70 et 6,87:1). Tous dépassent 4,5:1 (niveau AA). Lesquels faut-il remonter à 7:1 ?
226. **Deux zones cliquables sous 44px.** (a) Le lien « Lire la suite → » des cartes d'articles : 85 × **22px**. (b) Le lien « Blog » du pied de page : **30** × 44px (assez haut, trop étroit). Correction proposée : (a) `min-h-11 inline-flex items-center` ; (b) une largeur minimale de 44px (`min-w-11`) sur les liens du pied de page. Cela touche l'affichage : à valider.
227. **Captures non commitées.** Le commit « Page d'accueil terminée » ne contient PAS les nouveaux dossiers de `captures/` (78 Mo de PNG, utiles seulement pour la vérification). Ils restent sur le disque, non suivis. Faut-il les ajouter à `.gitignore`, les commiter quand même, ou les supprimer ? (12 captures plus anciennes sont déjà dans le dépôt.)
228. **URL du site non déclarée.** `astro.config.mjs` n'a pas d'option `site`. La balise canonique et les URL de partage utilisent donc l'adresse de secours écrite dans le layout : `https://akelia.fr`. Est-ce bien le domaine définitif ? Si oui, je propose de le déclarer dans `astro.config.mjs` (`site: 'https://akelia.fr'`), ce qui permettra aussi un plan du site (sitemap).
229. **Tailles de texte et couleurs hors jetons sur l'accueil.** Valeurs entre crochets : `text-[1.5rem]` et `text-[1.75rem]` (titres des étapes de la Méthode), `text-[1.25rem]` (MethodeEtape), `text-[0.875rem]` (badge du Hero), `text-[clamp(1.5rem,2.5vw,2rem)]` (titres des panneaux Cas types). La taille Tailwind par défaut `text-base` (16px) est aussi utilisée dans Header, Footer, Hero et SimulateurQuestions. Couleurs : `hover:text-[#ff0000]` (rouge YouTube, pied de page) et deux ombres en `#1d2b3640` (bleu nuit à 25 %, MethodeEtapes et SimulateurQuestions). Faut-il créer des jetons (`--text-etape`, `--text-badge`, `--color-youtube`, `--shadow-interieure`…) et remplacer ces valeurs ? Le rendu ne changerait pas.
230. **Cas types : délai au clic sur réseau lent.** Les illustrations des onglets inactifs ne se chargent plus qu'au survol, au focus ou au clic de leur onglet. Mesures (pire cas : clic sans survol préalable, comme au doigt) :
   - réseau local : 12 à 25 ms ;
   - 4G (9 Mb/s) : 100 à 180 ms, **masqués** par le fondu de 0,4 s du panneau ;
   - **3G lente (1,6 Mb/s, 300 ms de latence) : 1,6 s**, pendant lesquelles un fond neutre occupe la place de l'image (capture `captures/nettoyage-seo/375-cas-types-attente-3g.png`).

   J'ai **gardé** l'optimisation : le délai n'est pas perceptible en 4G ni en wifi, et sur ordinateur le survol lance le chargement avant le clic. Sur une connexion très lente, l'attente se voit. Compromis possible : précharger les 5 autres images une fois la section affichée et la page chargée (pendant les temps morts du navigateur). Elles ne seraient alors économisées que pour ceux qui ne s'arrêtent pas sur la section. Garder tel quel, ajouter ce préchargement, ou revenir à l'ancien comportement ?
231. **Logo pour les données structurées.** Il n'existe aucun logo Akelia dans le projet. Le balisage LocalBusiness utilise provisoirement le favicon en 180 × 180 (`apple-touch-icon.png`). Google recommande un logo carré d'au moins 112 × 112px, sur fond uni. Fournir le logo officiel (PNG ou SVG) ?

232. **⚠️ Envoi réel des formulaires non confirmé : test à faire depuis votre navigateur.** Web3Forms (protégé par Cloudflare) refuse les envois venant de l'adresse IP de ce Codespace, hébergé dans un centre de données Azure : réponse 403 « This method is not allowed. Use our API in client side […] (Pro plan is required) ». Le navigateur de test passe par la même IP, donc ses envois sont bloqués (erreur CORS dans la console). **Aucun message de test n'est parti.** Ce n'est pas un problème du code. À faire : ouvrir le site dans votre propre navigateur (port 4321 transféré par Codespaces, ou version en ligne), envoyer une demande depuis /devis et une depuis le simulateur, puis vérifier la réception. Voir la section « Clé Web3Forms ». Pouvez-vous confirmer que les deux mails arrivent ?

233. **Données hors Union européenne (Web3Forms, Inde) : à mentionner dans la politique de confidentialité.** Le site n'a pas encore de page « Politique de confidentialité ». Il faudra y indiquer que les formulaires (/devis et simulateur) transmettent nom ou prénom, e-mail, téléphone (et le type de travaux et le message pour /devis) à Web3Forms, dont l'opérateur est établi en Inde, hors UE. Il faudra aussi y préciser la base du transfert (par exemple des clauses contractuelles types). Faut-il la rédiger, ou envisager un service établi dans l'UE ?

234. **Texte affiché sous le formulaire du simulateur** : « Vos coordonnées servent uniquement à vous recontacter au sujet de votre projet… ». Il ne dit pas que les données passent par un prestataire hors UE. Faut-il y ajouter un lien vers la future politique de confidentialité ?

235. **⚠️ Consigne du point 4 (« Équilibre des colonnes ») coupée.** Le texte reçu s'arrête à : « Après ces suppressions, la colonne « Nous contacter » ne contient plus qu'un lien et le bloc YouTube, et la colonne « Informations légales ». La suite manque, donc **rien n'a été fait pour le point 4**. Mesures actuelles : à 1280px, les 4 colonnes partagent une grille de 252px de haut, mais le contenu de « Nous contacter » s'arrête vers 140px et celui d'« Informations légales » vers 120px, contre 252px pour « Navigation ». Pouvez-vous renvoyer la fin de la consigne ?

236. **« Nous contacter » en lien : alignement avec les titres des autres colonnes.** Le lien a le style des liens de navigation, comme demandé (texte normal, non gras, 44px de haut). Les autres colonnes commencent par un titre en gras. Conséquences visibles à 1280px : « Nous contacter » n'est pas en gras, alors qu'il occupe la place d'un titre, et son texte est environ 10px plus bas que « Navigation » et « Informations légales », car il est centré dans ses 44px. Capture : `captures/pied-de-page/corrections-1280.png`. Garder ainsi, le passer en gras (style titre, mais cliquable), ou remonter le lien de 10px ?

237. **« Rénovation énergétique » ailleurs sur le site** : liste dans la section « Pied de page : contact, médiation, phrase sous le logo ». Trancher au cas par cas.

238. **/devis : entrée « Autre projet » gardée.** Elle existait avant la refonte (valeur envoyée « Autre demande », libellé « Autre projet ») et ne figure pas dans la nouvelle liste. Comme demandé, elle n'est pas supprimée : elle est placée en dernier, après « Je ne sais pas encore » (valeur envoyée désormais : « Autre projet »). Les deux se recoupent en partie. La garder, ou la supprimer ?

239. **/devis : réception de l'e-mail non vérifiée.** Comme pour la question 232, Web3Forms refuse les envois depuis le Codespace. Le contenu envoyé a été contrôlé en interceptant la requête dans le navigateur (voir la section « /devis : choix du type de projet »). À vérifier dans votre boîte : le sujet doit être « Demande de devis Akelia : <projet> », et le corps doit contenir une ligne « Type de projet ».

240. *(Réglée le 17 octobre 2026 : tous les champs de /devis portent un nom en français, voir « /devis : refonte de la page ».)* **/devis : noms techniques des autres champs dans l'e-mail.** Web3Forms affiche le nom de chaque champ tel quel. Le type de projet s'appelle désormais « Type de projet », mais les autres champs restent `name`, `email`, `phone` et `message`. Faut-il les renommer en français (« Nom », « Téléphone », « Détails du projet ») ? L'e-mail serait plus lisible. Attention : Web3Forms utilise le champ `email` pour l'adresse de réponse, celui-là doit garder son nom.

241. *(Réglée le 19 octobre 2026 : la page est réécrite entièrement. Voir « /aides-renovation : création de la page ».)* **⚠️ /aides-renovation est cassée et en ligne.** Le fichier ne contient que 40 caractères (« --- » puis « // ===… », en-tête jamais fermé). La page publiée affiche ce texte brut sur fond blanc, sans en-tête, sans pied de page, sans titre. Or le menu, le pied de page et l'accueil y renvoient (3 liens par page, sur toutes les pages). Que faire en attendant la vraie page : la retirer et masquer les liens, ou rediriger vers la section simulateur de l'accueil (`/#simulateur-titre`) ?

242. **/test-charte : à supprimer avant la mise en ligne ?** Elle porte `noindex, nofollow` et aucun lien n'y mène, donc Google ne devrait pas l'indexer. Mais elle reste publique pour qui connaît l'adresse, et son commentaire indique « PAGE TEMPORAIRE : à supprimer avant la mise en ligne ». Je recommande de la supprimer (ou de l'exclure de la version de production). D'accord ?

243. **Mentions légales incomplètes (obligation légale, LCEN).** Manquent : adresse du siège (seulement « France »), SIREN ou RCS, capital, numéro de TVA, nom d'une personne physique comme directeur de la publication, nom, adresse et téléphone de l'hébergeur. L'adresse contact@akelia.fr y figure, mais elle n'est pas confirmée : le pied de page a `EMAIL = null`. Pouvez-vous fournir ces informations ?

244. **Article de blog provisoire.** Image de couverture unie (bleu pâle, aucun dessin), date du 15 janvier 2025, titre « … en 2025 », affirmation « diviser vos factures de chauffage par 3 » non sourcée. ⚠️ Dans l'en-tête de l'article, `videoEmbedUrl` pointe vers une vidéo YouTube sans rapport (`dQw4w9WgXcQ`, le célèbre « Rickroll »). Elle n'est pas affichée aujourd'hui, mais le serait si l'intégration vidéo était branchée. Supprimer l'article, ou le réécrire ?

245. **Recommandations de l'état des lieux** (détail dans la section « État des lieux des pages », fin de fichier) : /aides-renovation à refaire entièrement ; /services à refaire entièrement ; /blog à compléter ; /blog/[slug] à refaire (gabarit) ; /mentions-legales à compléter ; /devis à compléter ; /test-charte à supprimer. Quelle page voulez-vous traiter en premier ?

246. **/devis : « huit services » ou neuf entrées ?** La consigne parle de « huit services » avec un « ordre inchangé ». La liste actuelle compte 7 équipements, plus « Je ne sais pas encore » et « Autre projet », soit 9 entrées. Je n'ai rien retiré. Faut-il supprimer l'une des deux dernières (voir aussi la question 238) ?

247. *(Réglée le 17 octobre 2026 : exclusivité confirmée et étendue aux projets d'ensemble, voir « /devis : exclusivité des choix et encart ».)* **/devis : « Je ne sais pas encore » rendu exclusif.** Avec les cases à cocher, on pourrait cocher « Je ne sais pas encore » en même temps que « Pompe à chaleur ». J'ai repris la règle du simulateur : cocher cette case décoche les autres, et inversement. Pas demandé : à garder ?

248. *(Mise à jour le 17 octobre 2026 : avec la règle d'exclusivité, seuls les équipements peuvent encore être cochés à plusieurs ; la règle « même groupe → consigne du groupe » ne joue donc plus qu'entre équipements.)* **/devis : consigne du champ « Précisions » quand plusieurs cases du même groupe sont cochées.** La consigne dit : « plusieurs cases cochées → texte générique ». J'ai fait une exception : si toutes les cases cochées sont du **même groupe** (par exemple Isolation + Fenêtres et volets, ou Pompe à chaleur + Chauffe-eau), c'est la consigne du groupe qui s'affiche, puisqu'elle s'applique aux deux. Dès que les groupes diffèrent, c'est la générique. « Climatisation réversible » est rangée avec la pompe à chaleur et le chauffe-eau. « Je ne sais pas encore » et « Autre projet » donnent la générique. D'accord ?

249. **/devis : phrase du lien vers la politique de confidentialité.** Ajoutée à la fin de la mention : « Pour en savoir plus, consultez notre politique de confidentialité. » (*rédigée par Claude*). ⚠️ **La page /politique-confidentialite n'existe pas encore (404)** : le lien est mort tant qu'elle n'est pas rédigée (voir aussi les questions 233 et 234 : le transfert hors UE vers Web3Forms n'est toujours pas mentionné).

250. **/devis : phrase « Plusieurs choix possibles. » ajoutée sous « Type de projet »** (reprise du simulateur), pour signaler qu'on peut cocher plusieurs cases. La garder ?

251. **/devis : champs vides retirés de l'e-mail.** Pour un e-mail lisible, les champs facultatifs laissés vides (Adresse, E-mail, Précisions, Vous êtes) ne sont pas envoyés. L'artisan ne voit donc pas de ligne « Adresse : » vide. D'accord ? Par ailleurs, quand un e-mail est saisi, un champ `replyto` est ajouté : l'artisan peut répondre directement au client depuis sa messagerie. Cette ligne `replyto` apparaîtra probablement dans le corps de l'e-mail (à vérifier à la réception réelle).

252. **/devis sans JavaScript : comportement de Web3Forms à vérifier.** Avant, sans JavaScript, le formulaire s'envoyait vers /devis en GET (les coordonnées se retrouvaient dans l'adresse de la page, et rien n'était transmis). Il est maintenant posté directement à Web3Forms (`action` + `method="POST"`), après vérification des champs obligatoires par le navigateur. Deux points non vérifiables depuis le Codespace (question 232) : Web3Forms affiche sa propre page de confirmation (en anglais) ; et les cases cochées partent en plusieurs champs « Type de projet » portant le même nom : on ne sait pas si Web3Forms les garde tous ou seulement le dernier. Ce cas est rare (JavaScript désactivé).

253. *(Mise à jour le 17 octobre 2026 : l'illustration est réduite à 224 × 494px sur téléphone et 288 × 635px à partir de 1024px, voir « /devis : encart de sélection et netteté de l'illustration ». Reste à trancher : la garder sur téléphone, et le texte alternatif vide.)* **/devis : illustration `devis.png` décorative.** Le fichier est présent (artisan au téléphone, presse-papiers à la main). Je l'ai déclaré décoratif (`alt=""`) : il n'apporte pas d'information que le texte ne donne pas déjà. Il est recadré automatiquement sur la zone dessinée et plafonné à 384px de large. Sur téléphone, il arrive tout en bas de la page, après l'encart (hauteur de la page à 375px : 5 448px, formulaire vide). Le garder sur téléphone, le réduire, ou le masquer sous 1024px ?

254. **/devis : réception réelle toujours non vérifiée** (même blocage que les questions 232 et 239). Sujet attendu : « Demande de devis Akelia : Rénovation globale, Pompe à chaleur, Borne de recharge ». Corps attendu : une ligne par champ, avec des noms en français (« Type de projet », « Précisions », « Nom », « Téléphone », « Code postal », « Adresse », « E-mail », « Vous êtes »). La question 240 (noms de champs en français) est réglée.

255. **/devis : « Autre projet » traité comme un équipement.** La nouvelle règle ne dit rien de cette case. Je l'ai rangée avec les équipements : elle se cumule avec eux (« Isolation, Autre projet »), et cocher « Rénovation globale » ou « Construction neuve » la décoche. Elle pourrait aussi être exclusive de tout, comme « Je ne sais pas encore ». Votre choix ? (Voir aussi les questions 238 et 246 : faut-il la garder ?)

256. *(Sans objet depuis le 17 octobre 2026 : l'encart a été entièrement refait, avec les étoiles et la note.)* **/devis : encart « Comment nous choisissons nos artisans » : il était présent.** Vérifié le 17 octobre 2026 : il figurait dans le code et dans le HTML servi par le serveur de développement, et il apparaissait sur les captures précédentes (`captures/devis-refonte/vide-1280.png`). Si vous ne le voyiez pas, deux explications possibles : une version en ligne ou en cache antérieure à la refonte, ou un encart blanc trop discret, qui se confondait avec les étapes. Il est désormais en bleu nuit plein (voir la section). Si vous ne le voyez toujours pas, de quelle adresse s'agit-il : le port 4321 du Codespace, ou une version publiée ?

257. **⚠️ /devis : seuil de sélection passé de 4,3 à 4,5.** La consigne précédente disait « notées 4,3 ou plus » ; la nouvelle dit « 4,5 ». J'ai appliqué **4,5** partout sur la page (le grand chiffre et la phrase). Aucune autre page ne cite de note (vérifié dans `src/`). Pouvez-vous confirmer que **4,5 est bien le seuil réellement appliqué** au recrutement des artisans ? Une note affichée doit être vérifiable : sur quelle plateforme d'avis est-elle mesurée (Google, autre) ? Faut-il le préciser dans l'encart ou dans une future page « Qui sommes-nous » ?

258. **/devis : titre de l'encart masqué à l'écran.** La nouvelle consigne ne mentionne plus le titre « Comment nous choisissons nos artisans ». Je l'ai gardé **pour les lecteurs d'écran seulement** (h3 `sr-only`) : il annonce le sujet de l'encart et garde la structure des titres de la colonne. À l'écran, l'encart commence directement par les étoiles et « 4,5 ». Le remettre à l'écran, au-dessus des étoiles ?

259. *(Réglé le 17 octobre 2026 : le brouillon reste non publié, il est exclu de toutes les listes ; voir « Blog : page d'entrée, pages de catégorie et pagination ».)* **Blog : l'article brouillon est justement l'un des trois à vérifier.** Le seul article marqué `brouillon: true` est `chaudiere-a-cogeneration-fonctionnement-avantages-et-inconvenients-pour-les-particuliers`, celui que le ticket désignait pour contrôler le tableau de prix. Comme demandé, il n'est pas publié : `/post/chaudiere-a-cogeneration-…` n'existe pas (101 pages). J'ai contrôlé les tableaux sur un autre article : `/post/chauffage-le-plus-ecologique-comparatif-co2-pm-et-nox-2026` (4 tableaux). Aucun autre article ne pointe vers le brouillon (vérifié). Le brouillon est-il voulu ? Sinon, il suffit de passer `brouillon: false` dans son fichier.

260. **Blog : comptes du ticket différents de ce que contiennent les fichiers.** Tableaux : **17 articles** (le ticket en annonçait 28). Figures : **18 `<figure>` réparties dans 6 articles** (le ticket parlait de 18 articles), dont 15 avec une légende. Liens internes : **78** (75 vers `/post/…` et 3 autres, voir la question 261), pour 85 annoncés. Rien ne semble manquer : les 102 fichiers sont bien là. Mais si vous attendiez davantage de tableaux ou de figures, un export Webflow a peut-être été incomplet.

261. *(Réglé le 17 octobre 2026 : les deux liens pointent maintenant vers des articles existants. ⚠️ Le second est à rebasculer vers `/solutions/climatisation-reversible-pac-air-air` quand cette page existera, voir la question 277.)* **Blog : 2 liens internes d'articles mènent à des pages inexistantes.** Tous les liens `/post/…` mènent à un article existant. Restent :
    - `/installation-dun-chauffe-eau-thermodynamique` (dans `pompe-a-chaleur-et-chauffe-eau-quelles-sont-les-meilleurs-solutions-pour-la-production-deau-chaude`) : ancienne page Webflow, absente du nouveau site ;
    - `/solutions/climatisation-reversible-pac-air-air` (dans `quelles-sont-les-regions-adaptees-aux-pompes-a-chaleur`) : page solution prévue, pas encore créée (le menu y pointe aussi).

    À corriger dans les articles, ou par des redirections au moment de la mise en ligne ?

262. **⚠️ Blog : barre finale des adresses, à régler selon l'hébergeur.** Astro produit `dist/post/<slug>/index.html`. La balise canonique pointe vers `/post/<slug>`, sans barre finale, comme sur Webflow. Certains hébergeurs servent `/post/<slug>` directement. D'autres le redirigent vers `/post/<slug>/`, et la canonique ne correspondrait alors plus à l'adresse servie. Où le site sera-t-il hébergé ? Selon la réponse : réglage `build.format: 'file'` d'Astro (fichiers `post/<slug>.html`) ou réglage de l'hébergeur. Rien n'a été changé pour l'instant.

263. **Blog : images des figures affichées à leur taille réelle, pas sur toute la largeur.** Le ticket demandait l'image sur toute la largeur de la colonne. Or 12 des 14 images de figure font 340 à 450px de large, pour une colonne de 540px : étirées, elles seraient floues (même défaut que `devis.png`). Elles s'affichent donc à leur taille réelle, centrées, légende centrée. Elles occupent toute la largeur sur téléphone, et les deux images de 1920px la remplissent à toutes les tailles. Pour qu'elles remplissent la colonne sur ordinateur, il faudrait les fournir en 1 100px de large au moins. D'accord ?

264. **Blog : textes de l'appel à l'action et des articles liés (*rédigés par Claude*).** Bloc bleu nuit en bas de chaque article : surtitre « Votre projet », titre « Un artisan du collectif étudie votre projet », phrase « Il vous rappelle sous 24 à 48 heures, se déplace gratuitement et vous remet un devis détaillé. », bouton « Demander un devis gratuit ». Titre de la section des articles liés : « À lire aussi ». Également « Publié le » devant la date. À valider ou à remplacer.

265. **Blog : contenu des articles à reprendre (rien n'a été modifié dans les 102 fichiers).**
    - ~~**11 articles commencent leurs intertitres au niveau h3**~~ *(réglé le 17 octobre 2026 : défaut de conversion corrigé dans les fichiers livrés ; plus aucun saut de niveau dans le corps des articles vérifiés, voir « Blog : vérification des titres h2 restaurés »).*
    - **Encart « En bref »** : certaines lignes sont des intertitres (« **Les 3 facteurs déterminants :** », « **Conditions de réussite :** ») ou des listes numérotées (« **1. Isolation :** »). Comme demandé, chaque ligne devient une puce : ces intertitres ont donc aussi une puce. Faut-il une convention dans le frontmatter (par exemple, une ligne qui se termine par « : » devient un sous-titre sans puce) ?
    - Coquilles repérées en passant : « vous avez toujours des de l'humidité » (article VMC, description et chapeau), « Surement », « voit leur efficacité », etc. Une relecture serait utile.

266. **Blog : import d'une dépendance d'Astro dans la configuration.** Le moteur Markdown d'Astro 7 s'appelle Sätteri. Pour lui passer les deux plugins (tableaux, images des figures), `astro.config.mjs` importe `@astrojs/markdown-satteri`. Ce paquet est **installé avec Astro** (aucun ajout à `package.json`), mais il n'est pas déclaré comme dépendance directe du projet. Si une future version d'Astro le renommait, la compilation échouerait avec un message clair. L'alternative, les plugins rehype classiques, aurait exigé d'installer `@astrojs/markdown-remark`, une seconde dépendance. D'accord avec ce choix ?

267. **⚠️ /devis : les deux colonnes commencent à 992px, pas à 1024px.** En relisant `global.css` pour ce ticket, j'ai vu que le point de rupture `lg:` de la charte vaut **992px** (repris de Webflow), et non 1024px comme dans Tailwind par défaut. Les comptes rendus /devis du 17 octobre disent « à partir de 1024px » : c'est en réalité **à partir de 992px**. Le rendu entre 992 et 1023px n'a pas été vérifié. Garder 992px (cohérent avec le reste du site) ?

268. **npm audit : 2 alertes « modérées », non corrigées.** Elles concernent `postcss-selector-parser`, utilisé par `@tailwindcss/typography` **uniquement à la compilation**, sur notre propre CSS. Rien n'arrive dans le site publié, et le risque (lenteur sur un sélecteur CSS piégé) ne concerne pas ce projet. Le correctif proposé (`npm audit fix --force`) ferait redescendre le module à la version 0.5.4, très ancienne : je ne l'ai pas appliqué. À surveiller lors des mises à jour.

269. *(Réglé le 17 octobre 2026 : les 27 articles sans h2 ou avec un ou deux h2 venaient d'un défaut de conversion, corrigé dans les fichiers livrés. Il reste exactement les 6 articles vidéo sans sommaire. Voir « Blog : vérification des titres h2 restaurés ».)* **Blog : 33 articles sans sommaire, et non 6.** La règle demandée (titres h2 seuls, sommaire seulement à partir de 3) écarte :
    - les **6 articles vidéo**, sans aucun titre (prévu) ;
    - **27 articles longs** (900 à 3 750 mots), dont les grandes parties sont écrites en **h3** : 11 n'ont aucun h2 (de 8 à 20 h3), 16 n'ont qu'un ou deux h2 (de 8 à 22 h3). Exemples : `pompe-a-chaleur-geothermique-tout-ce-que-vous-devez-savoir` (3 070 mots, 0 h2, 20 h3), `poele-a-granules-ou-pompe-a-chaleur-air-air-quel-systeme-choisir-pour-votre-logement` (3 752 mots, 1 h2, 13 h3), `chauffage-le-plus-ecologique-comparatif-co2-pm-et-nox-2026` (0 h2, 12 h3).

    Ils s'affichent en une colonne centrée, sans sommaire, alors que ce sont souvent les plus longs. Deux solutions :
    - **(a) corriger le contenu** : passer leurs `###` en `##` (et `####` en `###`). Cela règle aussi la hiérarchie sautée (question 265). Recommandé, mais il faut relire chaque article : dans les 16 articles qui ont déjà 1 ou 2 h2, les h3 ne sont pas tous des grandes parties ;
    - **(b) adapter la règle** : prendre les h3 quand l'article a moins de 3 h2. Rapide, mais le sommaire atteindrait 20 entrées pour certains articles.

    Rien n'a été changé en attendant votre choix. La liste complète des 33 articles se trouve dans la section « Blog : largeur de lecture, sommaire et cartes cliquables ».

270. **Blog : petit appel à l'action sur téléphone fusionné avec le grand.** Le ticket demandait, sur téléphone, de placer le bloc « Demander un devis » + « Akelia, le collectif d'artisans locaux » à la fin de l'article, avant les articles liés. Or le grand bloc bleu nuit « Un artisan du collectif étudie votre projet », avec son bouton « Demander un devis gratuit », s'y trouve déjà : deux boutons « devis » se seraient suivis. Sur téléphone et tablette (et sur les articles sans sommaire), le lien « Akelia, le collectif d'artisans locaux » est donc ajouté **sous le bouton du grand bloc**, au lieu d'un second bloc. Sur ordinateur, le petit bloc est bien dans la colonne collante, sous le sommaire. Préférez-vous les deux blocs séparés ?

271. **Blog : l'article « long avec tableaux » du ticket n'a pas de tableau.** `/post/quel-systeme-de-chauffage-est-le-plus-rentable-comparatif-complet-sur-10-15-30-et-plus` ne contient aucun tableau Markdown : ses comparatifs sont **deux images** de 1 920px (affichées sur 700px, lisibles). Les tableaux ont été vérifiés sur `chauffage-le-plus-ecologique-comparatif-co2-pm-et-nox-2026` (4 tableaux) et `stockage-photovoltaique-…` (1 tableau). Des tableaux en image ne sont pas lus par les lecteurs d'écran ni par Google : à reconvertir en vrais tableaux ?

272. *(Réglé le 17 octobre 2026 : plus de gras sur l'entrée active sous 992px ; 5/5, 6/6 et 9/9 titres à 89px. Voir « Blog : correctifs 272, 273 et 274 ».)* **Blog, téléphone : le lien actif du sommaire passe en gras et peut prendre une ligne de plus, ce qui décale l'article pendant le défilement.** Le sommaire replié (`<details>`) est placé **au-dessus** du texte. Quand on l'ouvre et qu'on clique une entrée, les liens deviennent actifs tour à tour pendant le défilement doux ; si l'intitulé en gras passe à la ligne, le sommaire grandit de 22px et tout l'article descend. Le titre visé s'arrête alors **à 111px au lieu de 89px** (il reste visible sous l'en-tête de 73px), mais il est sous la ligne de lecture : **c'est la partie précédente qui reste en surbrillance**. Constaté sur `renovation-thermique-reussir-lite-et-les-ponts-thermiques` (entrées 2, 3 et 4, à 375px). Avec « réduire les animations », pas de souci (89px, bon lien actif). Recensement à 375px : **19 articles** ont au moins un intitulé qui change de nombre de lignes en gras (liste dans « Blog : vérification des titres h2 restaurés »). Sur ordinateur, même phénomène dans 18 articles, mais **sans effet** sur le texte (colonne séparée) : seul le sommaire bouge d'une ligne. **Aucun code modifié** (ticket de vérification). Corrections possibles : (a) réserver la largeur du gras (pseudo-élément invisible `content: attr(data-texte)` en gras, technique classique) ; (b) ne plus mettre en gras, garder seulement le trait orange et la couleur `texte` ; (c) ne pas mettre à jour le lien actif tant que le `<details>` est ouvert au-dessus du texte. Je recommande (a), qui ne change rien au rendu. Laquelle ?

273. *(Réglé le 17 octobre 2026. Cause : la **conversion**, pas le contenu : l'ancienne conversion aplatissait les schémas sur une seule ligne de code en ligne. Fichiers réimportés (v3) : 18 schémas en vrais blocs de code, qui défilent dans leur cadre ; débordement 0px sur les 101 articles. Voir « Blog : correctifs 272, 273 et 274 ».)* **Blog : 4 articles débordent horizontalement à cause de tableaux dessinés en caractères (« ┌───┐ ») écrits en code en ligne.** Une ligne Markdown entre accents graves simples contient tout un tableau en dessin de caractères (1 426 caractères pour l'article ITE), sans retour à la ligne possible. Résultat : la page devient plus large que l'écran. **Ce défaut existait déjà dans les fichiers précédents** (vérifié dans `akelia-blog-102-articles.zip`) ; il n'avait pas été vu car les articles concernés n'étaient pas dans l'échantillon mesuré. Débordement mesuré :
    - `renovation-thermique-reussir-lite-et-les-ponts-thermiques` : **+605px à 375px, +88px à 1440px** ;
    - `rafraichissement-dappartement-des-ecogestes-strategiques-a-la-pompe-a-chaleur-reversible` : +394px à 375px ;
    - `isolation-thermique-pourquoi-elle-est-indispensable-ete-comme-hiver-et-quels-travaux-prioriser` : +231px à 375px ;
    - `rafraichir-une-maison-sans-surconsommer-la-strategie-combinee-de-larchitecture-passive-et-de-la-renovation` : +77px à 375px.

    Trois autres articles contiennent aussi ces caractères sans déborder (`gestionnaire-denergie-hems-…`, `renovation-energetique-la-methode-akelia-…`, `v2l-v2h-v2g-…`). Ces « tableaux » sont illisibles sur une ligne et ne sont pas lus correctement par les lecteurs d'écran. Recommandé : **les reconvertir en vrais tableaux Markdown dans la conversion** (comme pour la question 271). Rustine possible côté code en attendant : autoriser la coupure du code en ligne dans `.prose` (`overflow-wrap: anywhere`), vérifiée : plus de débordement, mais le dessin reste illisible. Aucun code modifié.

274. *(Réglé le 17 octobre 2026 : seule la liste des parties défile, le bouton et le lien restent entiers jusqu'à 1024 × 500. Voir « Blog : correctifs 272, 273 et 274 ».)* **Blog, 1024px : sur un écran de moins de 725px de haut, le petit appel à l'action n'est accessible qu'en faisant défiler le bloc collant.** Le bloc (sommaire de 7 entrées + bouton + lien) mesure **604px** sur `pompe-a-chaleur-geothermique-tout-ce-que-vous-devez-savoir`. Il **ne dépasse jamais l'écran** (plafond de hauteur respecté, défilement interne), mais : à **1024 × 768**, tout tient (bas du bloc à 701px) ; à **1024 × 700**, le bouton est visible, le lien « Akelia, le collectif… » est coupé ; à **1024 × 600**, le bouton est caché sous le pli du bloc. Acceptable selon moi (le grand appel à l'action reste en fin d'article et 768px est le cas courant). Faut-il, sous une certaine hauteur d'écran, sortir l'appel à l'action du bloc défilant pour le garder toujours visible ?

275. **Blog : la livraison du 17 octobre ne change pas que les h2.** Comparaison fichier par fichier avec `akelia-blog-102-articles.zip` (version précédente) : frontmatter **identique** dans les 102 fichiers, 116 images inchangées, 151 lignes `##` ajoutées. Mais aussi : **31 sous-titres `###` réapparaissent** (24 dans `choisir-la-meilleure-pompe-a-chaleur-…`, les noms de marques : Daikin, Atlantic, Mitsubishi…, et 7 dans 6 autres articles, par exemple « FAQ : Tout savoir sur le pilotage intelligent ») ; et dans `pompe-a-chaleur-et-chauffe-eau-quelles-s…`, le h3 « Tableau comparatif des différentes solutions » est **remplacé** par un h2 « Comparaison des solutions pour la production d'eau chaude ». Ce sont visiblement d'autres titres perdus par l'ancienne conversion : simple information, rien à faire si c'est voulu.

276. **Blog : coquille dans un titre h2 restauré.** `renovation-thermique-reussir-lite-et-les-ponts-thermiques`, ligne 149 : « Retours **d mexpérience** et écueils de chantier » (au lieu de « d'expérience »). Le titre apparaît aussi dans le sommaire. C'est la seule occurrence de ce genre dans les 102 fichiers (recherche faite). Non corrigé (contenu livré tel quel) : faut-il le corriger dans la source de la conversion, ou je le corrige directement dans le fichier ?

277. *(Close le 17 octobre 2026, sans modification : le rappel reste valable. Le lien sera rebasculé vers la page solution quand elle existera.)* **À FAIRE quand la page solution existera : rebasculer un lien d'article.** Dans `src/content/blog/quelles-sont-les-regions-adaptees-aux-pompes-a-chaleur.md`, le lien « La PAC air-air peut avoir plus de sens » menait à `/solutions/climatisation-reversible-pac-air-air` (page pas encore créée). Il pointe provisoirement vers `/post/pompe-a-chaleur-air-air-vs-air-eau-guide-complet-pour-faire-le-bon-choix`. À remettre vers la page solution dès qu'elle sera publiée.

278. **Blog : la répartition par catégorie du ticket est décalée d'un article.** Le ticket annonçait Chauffage 57 et Conseils 12. Les pages compilées donnent **Chauffage 58** et **Conseils 11** (total 101 dans les deux cas). Le seul brouillon, `chaudiere-a-cogeneration-…`, est classé dans `autre` (Conseils), pas dans le chauffage. Conséquences :
    - Chauffage : 58 articles, toujours **5 pages** (12 + 12 + 12 + 12 + 10) ;
    - Conseils : 11 articles, **une seule page** ;
    - pages de suite des catégories : **5** (4 pour Chauffage, 1 pour Rénovation énergétique), et non 9 comme annoncé. Avec 12 articles par page, aucune autre catégorie ne dépasse une page.

    Rien à corriger dans le code. Le brouillon doit-il plutôt être classé dans le chauffage ? Cela ne changerait rien tant qu'il reste un brouillon.

279. *(Close le 17 octobre 2026 : forme actuelle validée, sans modification.)* **Blog : où placer « — page N » dans le title ?** Le ticket demande « le même title avec « — page N » ». Je l'ai placé **avant le nom de marque** : « Guides et conseils en rénovation énergétique — page 2 | Akelia » et « Chauffage — page 3 | Guides Akelia ». C'est la forme habituelle (la marque reste en fin de title). Préférez-vous « … | Akelia — page 2 » ?

280. *(Close le 17 octobre 2026 : `aria-current="true"` validé, sans modification.)* **Blog : la catégorie en cours, sur les pages 2 et suivantes, porte `aria-current="true"` et non `"page"`.** Sur `/blog/chauffage/page/3`, le lien « Chauffage » de la barre mène à `/blog/chauffage`, qui n'est pas la page affichée. `aria-current="page"` y serait faux pour les lecteurs d'écran. Il porte donc `aria-current="true"` (« élément en cours dans un ensemble »), avec **exactement le même style** (fond plein bleu nuit). Sur la page 1, c'est bien `aria-current="page"`. D'accord ?

281. *(Réglé le 17 octobre 2026 : l'article à la une est retiré de la liste paginée de /blog. Voir « Blog : article à la une retiré de la liste de /blog ».)* **Blog : l'article mis en avant apparaît aussi plus loin dans la liste.** L'article « à la une » (`installer-des-panneaux-solaires-est-il-toujours-rentable-…`, 1er juillet 2026) n'est pas parmi les 12 plus récents : il n'est donc **pas répété sur la page 1**. Il figure à sa place chronologique, en page 2, pour que la liste de /blog contienne bien les 101 articles. S'il devenait un jour l'un des 12 plus récents, il serait retiré de la grille de la page 1 (11 cartes + la grande), pour éviter de l'afficher deux fois sur la même page. Cela vous convient-il ?

282. **⚠️ /aides-renovation : contradictions entre le texte fourni et `src/data/aides.ts` (à trancher avant mise en ligne).** Le texte est repris mot pour mot, mais il contredit sur plusieurs points les données du simulateur, vérifiées le 8 octobre 2026 (guide Anah de septembre 2026, décret n° 2026-822) :
    - **MaPrimeRénov' par geste** : selon `aides.ts`, depuis le 1er septembre 2026, seuls le chauffage décarboné (pompes à chaleur air/eau et géothermiques, réseau de chaleur), l'audit et la dépose de cuve à fioul sont financés. Le texte liste encore l'isolation, les fenêtres simple vitrage, la VMC double flux, les poêles et les chauffe-eau. Résultat : sur la même page, le simulateur répond « non » pour l'isolation par geste et le texte dit « oui » ;
    - **MaPrimeRénov' par geste** : `aides.ts` exclut les revenus supérieurs (profil Rose). Le texte ne le dit pas (le profil Rose reste valable pour le Parcours Accompagné) ;
    - **Éco-PTZ** : `aides.ts` indique un remboursement sur 15 ans (20 ans seulement pour 50 000 €). « Ce qu'il faut retenir » dit « jusqu'à 50 000 € sur une durée de 20 ans », ce qui reste juste pour le plafond de 50 000 € ;
    - **Éco-PTZ, assainissement non collectif, 10 000 €** : ce plafond n'est pas dans le barème Anah de `aides.ts`. Je l'ai ajouté depuis le texte, sans source ;
    - **Prime CEE, « plus de 7 500 € »** : aucune source officielle. Le simulateur n'affiche volontairement aucun montant CEE. Le montant est ajouté à `aides.ts` (`ceeMontantMisEnAvant`) avec la mention « NON CONFIRMÉ » ;
    - **Climatisations réversibles** : `aides.ts` les dit à 5,5 % « depuis le 1er septembre 2026 », sans critères ; le texte parle de l'« Été 2026 », avec des critères.
    - **« Montants vérifiés le 19 octobre 2026 »** : la date est affichée en bas de page, comme demandé. **Je n'ai fait aucune vérification sur une source officielle ce jour-là.** Tant que les points ci-dessus ne sont pas tranchés, cette mention promet plus qu'elle ne garantit. Qui vérifie, et faut-il corriger le texte ou `aides.ts` ?
283. **/aides-renovation : le texte collé s'arrête avant la fin.** La section « Les aides locales » n'a pas de « Comment en bénéficier ? » : le texte s'arrête sur « Cumul : … plafond de financement global. ». Le ticket demande pourtant les quatre sous-parties pour chaque aide. La sous-partie n'est **pas** affichée (rien inventé). L'ancienne page Webflow (`Données webflow/ancien test /www.akelia.fr/aides-renovation-energetique.html`) en avait une, en trois points : sites officiels (mairie, métropole, département), ANIL/ADIL, conseiller France Rénov'. Faut-il la reprendre telle quelle, ou fournir un autre texte ?
284. **/aides-renovation : climatisations réversibles, trois critères et non quatre.** Le ticket annonce « quatre critères ». Le texte en donne trois : la classe énergétique (A++ en mono-split **ou** A+ en multi-split), la connexion Wi-Fi et les normes F-Gas. Présenter quatre critères laisserait croire qu'il faut à la fois A++ et A+. L'encadré montre donc **trois puces**, la première avec ses deux branches. D'accord ?
285. **/aides-renovation : h1.** Le ticket donne « Tout savoir sur les aides à la rénovation énergétique ». Le texte fourni dit « Tout savoir sur les aides à la rénovation énergétique : le guide complet ». J'ai repris le texte, au mot près. Faut-il garder la forme courte ?
286. **/aides-renovation : petits écarts de forme dans « Ce qu'il faut retenir ».** Les montants viennent de `aides.ts` et sont mis en forme par `euros()` et `pourcent()` (`src/utils/texte.ts`). Résultat : « TVA 5.5% » devient « TVA 5,5 % », comme partout ailleurs dans le texte. Les espaces des montants sont insécables. Les émojis ✅ et ⚠️ sont remplacés par des icônes. D'accord ?
287. **/aides-renovation : textes ajoutés, absents du texte fourni.** Titres « Ce qui se cumule avec quoi », « Les démarches, dans l’ordre », « À lire aussi » ; libellés « Se cumule avec », « Exception », « Point de non-retour », « Délai : plusieurs semaines à plusieurs mois » ; libellés du bandeau (« TVA à taux réduit », « MaPrimeRénov’ », « Prime CEE », « Éco-PTZ »). Phrase sur Akelia, à la fin des aides locales : « L’artisan du collectif monte avec vous votre dossier de demande d’aides. Akelia, elle, ne verse aucune aide et n’est pas un organisme public. » Ces textes sont-ils à valider ?
288. **/aides-renovation : « Nouveauté Été 2026 » déplacée.** Dans le texte, ce passage figure dans la liste « Chauffage et Eau Chaude », entre les pompes à chaleur et les chaudières. Il est affiché en encadré **après** les vignettes de ce groupe, pour ne pas couper la grille en deux. D'accord ?
289. **/aides-renovation : six illustrations à livrer**, dans `src/assets/illustrations/` : `aides-entete.png`, `aides-tva.png`, `aides-eco-ptz.png`, `aides-cee.png`, `aides-maprimerenov.png` et `aides-locales.png`. Aucune n'existe : rien ne s'affiche, et il ne reste aucun emplacement vide. Dès qu'un fichier est déposé, il apparaît sans toucher au code. Format conseillé : PNG à fond transparent. L'en-tête est affiché sur 384px au plus. Les illustrations de section le sont sur 112 à 144px, et masquées sous 480px.
290. **/aides-renovation : le lien « Akelia, le collectif d'artisans locaux » mène à `/qui-sommes-nous`, qui n'existe pas** (même lien que dans les articles, voir la question 217). Le texte d'origine disait « En savoir plus sur Akelia le collectif d'artisans locaux » ; j'ai suivi le libellé du ticket.
291. **/aides-renovation : textes de moins de 18px qui restent.** Tous sont des éléments de navigation ou des doublons décoratifs, aucun n'est du texte courant :
    - fil d'Ariane et liens du sommaire (16px, composants communs aux articles) ;
    - surtitres (13,6px, classe `surtitre` de la charte) ;
    - pastilles des cumuls et légende des couleurs des pastilles (16px, masquées aux lecteurs d'écran : la phrase dessous dit la même chose) ;
    - date et « Lire la suite » des cartes d'article (14,4px, `CarteArticle.astro`).
    Faut-il les passer à 18px ?
292. *(Contournée le 19 octobre 2026 : les cartes pointent provisoirement vers les catégories du blog, libellé « Voir les guides → ». **À REBASCULER vers /solutions/… quand ces pages existeront**, comme la question 277. Voir « /qui-sommes-nous : en-tête, rythme et entrée artisans ».)* **⚠️ /qui-sommes-nous : les quatre cartes « domaines d'expertise » mènent à des pages inexistantes (404).** Les adresses sont lues dans le menu (`src/data/menu.ts`), comme demandé. Les trois rubriques n'ont pas de page d'accueil propre : chaque carte pointe donc vers la **première solution de sa rubrique**.
    - « Isoler votre enveloppe » → `/solutions/isolation-thermique-toiture-comble` ;
    - « Chauffer & Climatiser » → `/solutions/climatisation-reversible-pac-air-air`. ⚠️ C'est la première du menu, mais un choix discutable pour une carte « Chauffer » ;
    - « Devenir Autonome » → `/solutions/panneaux-photovoltaiques` ;
    - « Rénover Globalement » → `/solutions/renovation-energetique-globale`.
    **Aucune page `/solutions/…` n'existe encore** : les quatre répondent 404, exactement comme les liens du menu. Faut-il créer des pages de rubrique (par exemple `/solutions/isolation`), ou masquer ces liens en attendant ?
293. **Pages /ville/<ville> à recréer.** L'ancien site avait dix pages de secteur : Paris, Lyon, Marseille, Toulouse, Bordeaux, Lille, Nantes, Nice, Strasbourg et Montpellier (`/ville/<ville>`). Ce seraient les vraies cibles de « Découvrir les artisans de mon secteur » (en-tête de /qui-sommes-nous) et de « Trouver mon artisan local » (bandeau de fin). **En attendant, les deux liens pointent vers /devis**, via la constante `LIEN_ARTISANS_SECTEUR` de la page : une seule ligne à changer. Faut-il refaire ces pages, et sous quelle adresse ?
294. **Incohérence de distance : 30 km ou 30 minutes ?** /qui-sommes-nous dit « à moins de 30 km » (`distanceMaxKm`, `src/data/collectif.ts`). La section Collectif de l'accueil dit « À moins de 30 minutes », un libellé écrit en dur dans `Collectif.astro`. Laquelle est juste ? Une fois tranché, l'accueil pourra lire `collectif.ts`.
295. **« Note Google certifiée »** (critère « Preuve sociale » du texte fourni) : Google ne certifie pas les notes. Le mot « certifiée » peut être vu comme une allégation trompeuse, et la note minimale porte déjà ce risque (d'où la mention obligatoire). Faut-il écrire « vérifiée » ou « Note Google de 4,5/5 minimum » ?
296. **Le h1 de /qui-sommes-nous** (« La force d’un réseau national, le sérieux d’un artisan local. ») est **identique au h2 de la section Collectif de l'accueil**. Ce n'est pas gênant pour le référencement (un h2 sur une autre page), mais la phrase se lit deux fois en parcourant le site. On garde ?
297. **/devis : « note minimale exigée » passe de 16 à 18px.** La rangée étoiles + note + mention est désormais un composant commun (`NoteMinimale.astro`), en texte courant : la mention obligatoire gagne en lisibilité. D'accord ?
298. **Netteté de `collectif.png` sur écran haute résolution.** Le fichier source fait 1800px de large. À 1440px, l'en-tête l'affiche sur 1272px :
    - écran standard (×1) : le navigateur charge la variante de 1280px, l'image est nette ;
    - écran haute résolution (×2) : il faudrait 2544px ; le navigateur charge la plus grande variante possible (1800px, le fichier source), soit 1,42 pixel d'image par pixel CSS. Elle sera un peu moins piquante sur Mac Retina ou iPad.
    Pouvez-vous fournir `collectif.png` en **2600px de large** ou plus ? Les variantes se mettront à jour seules, sans toucher au code.
299. **Ancienne adresse `/entreprise`.** Le pied de page pointait vers `/entreprise` (« Rejoindre le collectif »), sans doute l'adresse de l'ancien site. Il pointe désormais vers `/rejoindre-le-collectif`. Faut-il une redirection 301 de `/entreprise` vers `/rejoindre-le-collectif` (une ligne dans `astro.config.mjs`), pour ne pas perdre d'éventuels liens entrants ?
300. *(En grande partie réglée le 19 octobre 2026 : la FAQ « Combien coûte le partenariat ? » et le tableau comparatif disent ni droit d'entrée, ni redevance, un prix par rendez-vous ou un budget publicitaire piloté. Restent à préciser, si vous le souhaitez : durée d'engagement et conditions de sortie.)* **/rejoindre-le-collectif : rien sur les conditions pour l'artisan.** Cotisation, commission, durée d'engagement, exclusivité : c'est la première question qu'un artisan se posera. La page n'en dit rien, faute d'information. À fournir ?
301. **/rejoindre-le-collectif : la mention sur les données est celle de /devis, mot pour mot**, comme demandé. Elle dit « au sujet de votre projet », alors qu'un artisan envoie une candidature. Faut-il écrire « au sujet de votre candidature » ?
302. *(En partie sans objet depuis le 19 octobre 2026 : la page est refaite avec le texte fourni, et le bandeau porte le texte du ticket, sans note Google.)* **/rejoindre-le-collectif et bandeau « Vous êtes artisan ? » : textes corrigés, à valider** (détail dans la section du 19 octobre, § 4). J'ai retiré les promesses qu'on ne peut pas tenir à coup sûr :
    - « elle a sa place dans le collectif » devient « présentez-la : nous étudions chaque candidature ». Il n'y a qu'une place par métier et par secteur : elle peut être prise ;
    - j'ai ajouté l'assurance décennale, qui fait partie des critères d'entrée ;
    - aucun volume de chantiers ni délai de réponse n'est promis.
303. *(Mise à jour du 19 octobre 2026, 2e version : la section du formulaire est maintenant bleu nuit.)* *(Réglée pour /rejoindre-le-collectif : la section du formulaire est désormais blanche. Reste /devis.)* **Pied de page collé au fond crème sur /rejoindre-le-collectif (et déjà sur /devis).** Les deux pages ont un fond crème, comme le pied de page : rien ne les sépare. Faut-il un filet ou un fond différent pour le pied de page ?
304. *(Toujours ouverte. Depuis le 19 octobre 2026, le parcours est la colonne « Ce qui se passe ensuite », à droite du formulaire.)* **/rejoindre-le-collectif, « Le parcours » : un délai par étape rassurerait beaucoup.** Le texte n'en donne aucun : les quatre intitulés sont affichés seuls (Dépôt de candidature → Entretien → Réservation du secteur → Lancement de l'acquisition). Pouvez-vous donner un ordre de grandeur pour chaque étape, par exemple « réponse sous 48 h », « entretien dans la semaine » ?
305. *(Réglée le 19 octobre 2026 : champ supprimé.)* **/rejoindre-le-collectif : le formulaire demande encore la « Note Google actuelle ».** Le ticket demande à la fois « aucune mention de note sur la page » et « formulaire inchangé ». J'ai suivi la seconde consigne : le champ (facultatif) est conservé, et c'est la seule mention de note de la page. Mais la page dit que la note n'est pas un critère : la demander peut laisser croire le contraire. Faut-il retirer ce champ ?
306. *(Réglée le 19 octobre 2026 : le critère est retiré et devient une phrase à part sous les critères. Voir « /rejoindre-le-collectif : critère « Créateur d’entreprise » ».)* **/rejoindre-le-collectif : le critère « Créateur d’entreprise : Qui a les capacités et souhaite se développer rapidement. »** est repris mot pour mot. Deux remarques :
    - la phrase n'a pas de sujet (« Qui a… ») ;
    - surtout, elle s'accorde mal avec l'introduction (« des entreprises structurées et reconnues sur leur territoire ») et avec les deux critères précédents (RGE à jour, structure équipée). Un créateur d'entreprise est-il vraiment éligible, et à quelles conditions ?
307. *(En partie réglée : le prix est désormais expliqué dans la FAQ. Reste la promesse de « flux régulier », voir la question 309.)* **/rejoindre-le-collectif : promesses à confirmer.** « Un flux régulier de rendez-vous pré-qualifiés » et « Nous vous trouvons des projets qualifiés » sont des engagements de résultat. Rien sur la page n'en fixe le volume ni le prix : la question 300 (cotisation, commission, engagement) devient centrale sur une page de vente. Un artisan qui candidate voudra le savoir avant l'entretien.
308. **/rejoindre-le-collectif : `rejoindre-collectif.png` à livrer**, dans `src/assets/illustrations/`. C'est la seule illustration de la page : à droite du titre à partir de 992px, sous le bouton en dessous. Tant qu'il manque, rien ne s'affiche et il ne reste aucun emplacement vide (vérifié). Mise en page testée avec une copie provisoire de `collectif.png`, retirée ensuite : captures `captures/rejoindre-le-collectif/entete-avec-image-provisoire-{375,1024,1440}.png`. Format conseillé : PNG à fond transparent, 1400px de large au moins, sujet pensé pour un fond bleu nuit (la colonne fait environ 520px de large à 1440px).
309. **/rejoindre-le-collectif : « un flux régulier de rendez-vous » et formule « prix par rendez-vous ».** L'introduction promet un flux **régulier**. Si l'artisan paie au rendez-vous, il voudra savoir combien de rendez-vous par mois il peut attendre, ou à défaut si un volume minimum est garanti. Faut-il nuancer (« un flux de rendez-vous ») ou donner un ordre de grandeur ?
310. **/rejoindre-le-collectif : le tableau comparatif généralise.** Il ne nomme personne : ce sont des modèles, pas des entreprises, comme demandé. Mais des cases comme « la plateforme fixe les prix », « marge prise sur le chantier » ou « contact souvent partagé » restent des affirmations sur des pratiques de marché. Elles doivent être exactes pour la plupart des acteurs de chaque modèle : la publicité comparative doit rester objective et vérifiable. Une relecture par quelqu'un qui connaît ces modèles de l'intérieur serait prudente.
311. **/rejoindre-le-collectif : seuil des deux colonnes de la candidature, 992px ou 1024px ?** Vous avez demandé 1024px. J'ai repris le seuil `lg:` du site, qui vaut **992px** (`--breakpoint-lg`, global.css) : c'est celui de /devis, dont le commentaire dit pourtant « à partir de 1024px ». Entre 992 et 1023px, la page affiche donc déjà les deux colonnes (formulaire de 520px environ, étiquettes sur une ligne). Si vous voulez exactement 1024px, il faut le changer sur les deux pages, ou ajouter un seuil propre à ces deux formulaires.
312. **/rejoindre-le-collectif : « Vous êtes ici » ne peut pas être « en petit ».** La règle des 18px minimum l'empêche. La mention est donc à 18px (`text-corps`), comme le libellé de l'étape. Elle s'en distingue par la graisse (normale au lieu de semi-gras) et par la couleur (orange clair `action-300`, 8,00:1). Si vous voulez qu'elle soit plus discrète, il faudrait la passer en 16px : c'est une exception à la règle à valider.
313. **/solutions/pompe-a-chaleur-air-eau : contradictions de chiffres à trancher.** Je n'ai rien changé : chaque valeur est affichée telle quelle. Détail et emplacements dans « Pages solutions : le gabarit », § 5.
    - **Économie d'énergie** : « 3 à 4 fois » (en-tête, points forts, performances, « +70 % ») contre « 4 à 5 fois moins d'énergie que les autres systèmes » (Notre avis).
    - **Rentabilité** : « Rentabilité immédiate » (points forts) contre 5 à 6 ans avec aides et 9 à 10 ans sans aides (caractéristiques, cas n° 1).
    - **Aides** : « plus de 11 000 € » (en-tête) et « CEE ≃ 6 500 € », « MaPrimeRénov’ ≃ 5 000 € » (caractéristiques) contre `aides.ts`. Pour la CEE, `aides.ts` dit « montant variable » ; pour MaPrimeRénov’, il donne 5 000 € au plus pour une PAC air-eau, réservés aux revenus très modestes, et 0 € pour les revenus supérieurs. Le simulateur de la même page affiche les montants de `aides.ts`.
    - **« Le système le mieux doté en aides »** (inconvénients) : d'après `aides.ts`, la PAC géothermique est mieux aidée (MaPrimeRénov’ jusqu'à 11 000 € contre 5 000 €).
314. **/solutions/pompe-a-chaleur-air-eau : affirmations chiffrées sans justification dans le texte.** Faut-il les garder, les sourcer ou les retirer ?
    - « Plus de 200 000 installations par an » (chiffre clé de l'en-tête) : ni source ni année.
    - « Indice de réparabilité : 69/100 » : l'astérisque renvoyait à une note absente. L'indice officiel français est noté sur 10 : un « 69/100 » risque d'être pris pour lui.
    - « Coût d'installation ≃ 90 à 130 € / m² » : on ne sait pas de quels m² il s'agit (surface habitable ?).
    - « Compresseur : 2 000 à 4 000 € en moyenne ».
    - « L'électricité est actuellement deux fois plus chère » : plus chère que quoi ? Probablement le gaz.
    - « COP de 2 même à −20 °C ».
    - « Pièces non garanties au-delà de 10 ans » ; « des appareils qui coûtent une dizaine de milliers d'euros ».
    - Cas n° 3 (géothermie) : le « COP identique à +10 °C et à −20 °C » et la « rentabilité record sur quelques années », qui contredit « la plus rentable à long terme » juste au-dessus.
    - Affirmations absolues sans chiffre : « il n'existe pas de chauffage plus écologique », « vous ne trouverez tout simplement pas mieux ». Elles sont discutables face à la géothermie, et l'impact environnemental de la page est noté B, pas A.
315. **/solutions/pompe-a-chaleur-air-eau : deux affirmations qui se contredisent sans chiffre.**
    - « Il n'y a aucune région en France où une pompe à chaleur n'est pas concurrentielle » (Notre avis) contre « Région à étudier : sinon, les solutions biomasse ou gaz restent plus intéressantes » (carte).
    - Le simulateur, pré-coché sur « Chauffage », annonce MaPrimeRénov’ « jusqu'à 11 000 € ». C'est le plafond de la PAC géothermique : pour une PAC air-eau, c'est 5 000 €. Le simulateur ne distingue pas les deux. Faut-il ajouter une précision sous le simulateur sur les pages PAC, ou une option dans `aides.ts` ?
316. **/solutions/pompe-a-chaleur-air-eau : couleurs de la carte des régions.** Sur la carte de l'ancien site, **orange = optimale, rouge = intéressante, vert = à étudier**. Le rouge et le vert y disent donc l'inverse de ce qu'ils évoquent, et ce sont justement les deux couleurs que les daltoniens confondent. J'ai ajouté les régions en toutes lettres dans la légende, lues sur la carte (« Ouest, Centre et Bassin parisien »…), et décrit la carte dans son texte alternatif. Faut-il redessiner les cartes des pages solutions avec une palette fixe par niveau ? Vérifiez aussi le découpage des régions que j'ai lu.
317. **/solutions/… : images en basse définition.** L'image d'en-tête fait 516 × 387 px, la carte 450 × 484 px, les 8 illustrations d'étapes 300 × 300 px. Elles ne sont jamais agrandies (affichées à leur taille au plus), mais elles restent petites sur grand écran. Avez-vous les originaux en plus grand ?
318. **/solutions/pompe-a-chaleur-air-eau : le h1 « Votre allié confort ! » ne contient pas le nom de la solution.** Le nom est dans le surtitre et le `<title>`. Pour le référencement, un h1 du type « Pompe à chaleur air-eau : votre allié confort » serait plus fort. Faut-il en faire une règle des 21 pages ? Le sous-titre « Économique et écologique » de l'ancienne page n'a pas de champ dans le type : il n'est pas repris.
319. **ParcoursAkelia : délais.** L'ancien bloc disait « rappel sous 24 heures (hors week-ends et jours fériés) » et « date d'intervention sous deux semaines ». J'ai repris « 24 à 48 heures », comme /devis et le bas des articles, et retiré les deux semaines : ce délai est intenable pour une isolation par l'extérieur. Est-ce le bon choix ?
320. **Pages solutions : textes de moins de 18 px venus des composants communs.** Le contenu propre de la page est entièrement à 18 px ou plus. Restent en dessous, comme sur toutes les autres pages du site :
    - les surtitres (`surtitre`, 13,6 px en majuscules : nom de la solution, « Votre projet », catégories des cartes) ;
    - le fil d'Ariane, les liens du sommaire et les petits textes d'aide du simulateur (16 px) ;
    - la date et « Lire la suite » des cartes d'articles (14,4 px).

    Faut-il les passer à 18 px sur tout le site ?














90. **⚠️ Maison retournée « pignon sur rue » pour corriger la coupe.** Le défaut du mur gauche venait du principe même du dessin, pas d'un tracé :
    - dans l'ancienne version, le faîtage était parallèle à la façade ;
    - la coupe dans le plan de la façade ne traversait donc jamais le rampant du toit ;
    - le mur coupé s'arrêtait à l'égout, avec rien au-dessus : il « flottait ».

    En tournant la maison, pignon face au lecteur, la même coupe traverse le mur, les planchers, l'isolant et le rampant. On obtient une vraie coupe de bâtiment, isolation en L continue. C'est un changement de l'orientation du dessin, que vous aviez demandé de ne pas changer à l'étape précédente : à valider. Les 8 repères, les cotes, les hachures et « R ≥ 7 » sont gardés.
91. **Grand écran : deux colonnes égales** (le texte occupait 5/12). Avec le titre agrandi (77px à 1280px), une colonne de 5/12 donnait 5 lignes de titre ; en demi-colonne, il en fait 4. Conséquence : le schéma mesure **581 × 344px** à 1280px, contre 678 × 402px à l'étape précédente, mais toujours plus que l'original (environ 490 × 280px). Sa légende revient à 2 colonnes à partir de 1280px : en 4 colonnes, « photovoltaïques » se coupait sur 3 lignes. Préférez-vous un titre sur 5 lignes et un schéma plus grand ?
92. **Bandeau des solutions sur fond brume** (#ccdce8). Le bleu ardoise pâle s'accorde avec les icônes bleu nuit. La même teinte est utilisée plus bas par les Cas types, sans être voisine. Crème, ou une autre teinte, plutôt ?
93. **Contour de focus des tuiles passé en bleu nuit** (il était orange). Sur le fond clair, l'orange n'atteignait que 1,7:1, sous le minimum de 3:1 pour un indicateur de focus. Le bleu nuit fait 10,3:1. Le survol garde l'anneau orange.
94. **Petits changements dans le schéma**, liés à la nouvelle orientation :
    - le radiateur de la pompe à chaleur est maintenant à l'étage, contre le mur gauche ;
    - la fenêtre du rez-de-chaussée sur le mur latéral est supprimée : elle était juste derrière l'unité extérieure.

    D'accord ?

85. **⚠️ Les 8 raccourcis ne sont plus visibles sans défiler**, ni sur téléphone ni sur ordinateur. C'était une exigence des premières étapes : ce sont des pages de vente.
    - **Sur téléphone**, c'est la conséquence directe du nouvel ordre demandé (le schéma passe avant) : le bandeau commence à 1 075px du haut de la page, environ 1,3 écran plus bas.
    - **Sur ordinateur (1280 × 800)**, le bandeau commence à 872px, juste sous le pli. Ce sont les 120px de marge haute et basse qui le repoussent. Avec 64px, il dépasserait d'environ 40px en bas de l'écran.

    Garder tel quel (choix appliqué), ou réduire les marges du Hero sur ordinateur ?
86. **Barre orange au-dessus du titre : supprimée.** Raison : le nouveau titre est court et se suffit. Sur fond blanc, le seul orange du bloc est alors le bouton « Obtenir un devis », qui capte toute l'attention. La barre faisait un deuxième point orange qui lui faisait concurrence, et rappelait le gabarit précédent. La remettre ?
87. *(Sans objet depuis les corrections du Hero : le titre a maintenant une taille fluide, clamp(2.8rem, 6vw, 5rem).)* **Taille du titre sur téléphone relevée** : le jeton `text-display` passe de 1.75rem à **2.5rem** sous 768px (il n'est utilisé que par le Hero). L'ancienne réduction avait été faite pour le titre de 17 mots ; le nouveau titre de 9 mots tient sur 3 lignes à 375px. Sur ordinateur, la taille ne change pas (3.5rem). D'accord ?
88. **Schéma redessiné : à valider.** Le principe est gardé (plan au trait, coupe, 8 repères, cotes sans chiffres, hachures, « R ≥ 7 »). Le dessin est entièrement refait, avec une vraie perspective et des équipements détaillés (détail dans la section « Refonte du Hero »). Des éléments à retirer ou à ajouter ? Par exemple, la voiture est maintenant dessinée en entier, et la maison a gagné une porte, une gouttière et des tuiles.
89. *(Mise à jour par les corrections du Hero : 4 colonnes de 768 à 1279px, 2 à partir de 1280px, voir la question 91.)* **Légende du schéma sur 4 colonnes** à partir de 768px (2 avant), pour suivre le schéma plus large sans allonger le Hero. Les libellés ne changent pas. Sur ordinateur, « Panneaux photovoltaïques » tient sur 2 lignes. D'accord ?

81. **Les 4 teintes retenues vous conviennent-elles ?** Argile #f1dace, brume #ccdce8, lichen #e0e6d0, bruyère #e4d8e6. Captures : `captures/couleurs/1280-page-entiere.png`. Si l'une paraît trop marquée ou trop pâle, je peux la régler sans perdre le contraste de 7:1 : la marge est large (11,6:1 au minimum).
82. **`vert-800` (#1e5c45) n'est plus utilisé.** Ce vert foncé avait été ajouté pour les Cas types à la refonte « alan.com ». Les Cas types sont maintenant sur fond brume, comme demandé (« une nouvelle teinte claire »). Je l'ai gardé dans `global.css`, puisque la consigne était de ne rien retirer. Le supprimer ?
83. **Liens et surtitres en vert-600 sur les nouveaux fonds** : 4,52:1 (brume) à 4,95:1 (lichen). C'est conforme au minimum AA de 4,5:1 pour un texte courant, mais juste. Concerné aujourd'hui : « Le blog » et « Tous les articles » sur bruyère (4,61:1). Le montant « plus de 30 000 € » sur lichen (4,95:1) est un très grand texte : sans risque. Faut-il viser plus large pour un public senior, avec un vert plus foncé réservé au texte ?
84. *(Sans objet depuis le 13 octobre 2026 : la section, devenue « Deux façons de faire », a ses propres marges réduites et un fond crème foncé.)* **Bloc « Vous pilotez… » détaché de la Méthode.** Il avait une marge du haut réduite, car il prolongeait la Méthode sur le même fond. Sur son propre fond argile, c'est une section à part : il a maintenant les marges complètes (72px, puis 120px), et la Méthode aussi. La page gagne environ 130px à 1280px. D'accord ?

68. **⚠️ Chiffres des étiquettes flottantes à faire valider avant la mise en ligne.** Ils ont été posés tels que fournis, mais ce sont des **promesses chiffrées** affichées en gros sur l'accueil. Un chiffre non justifiable relève des pratiques commerciales trompeuses. Points précis :
    - « **Facture ÷ 4** » (années 50 à 90) et « **PAC ÷ 2 vs gaz** » (équipement) : sur quelle base ? Ce n'est vrai que dans certains cas. Un « jusqu'à » serait plus sûr.
    - « **6 kWc** » et « **85 % autoconsommé** » (années 2000) : le texte du panneau ne parle pas de photovoltaïque. Ce sont des chiffres d'un cas particulier, présentés comme une généralité.
    - « **15 ans d'installation** » (équipement) : le sens est ambigu (durée de vie de l'appareil ? ancienneté de l'artisan ? garantie ?).
    - « **Murs de 60 cm** » (pierre) : l'ancienne phrase de situation (supprimée) disait 50 cm. Plus de contradiction visible, mais à confirmer.
    - « **Travaux sans AG** » (appartement) : **risque de contresens**. Changer ses fenêtres ou toucher à la façade demande souvent l'accord de l'assemblée générale. L'ancien encart (supprimé) le disait. Proposition : « Travaux privatifs sans AG ».
69. **⚠️ Deux sections dépassent 3 paragraphes** (comptage demandé). Je n'ai coupé que ce que la demande listait :
    - **Méthode** : l'introduction, les 4 phrases d'étapes (des éléments de liste, pas des paragraphes), puis le bloc « Vous pilotez, ou on pilote ? » avec **2 paragraphes longs** (37 et 45 mots). Ce bloc n'était pas cité dans la demande. Faut-il réduire chaque bloc à une phrase, ou le supprimer ?
    - **Simulateur d'aides** : **4 paragraphes** dans la colonne de gauche (accroche, « L'État les verse… », « Et vous n'avez presque rien à faire. », « On monte votre dossier… »), en plus du simulateur. Proposition : garder l'accroche et « Et vous n'avez presque rien à faire. », supprimer les deux autres. Lesquels garder ?
70. **⚠️ Image à 50 % de la hauteur de la section : atteint sur ordinateur, pas sur téléphone.** À 1280px : 51 % pour les Cas types, le Simulateur et le Collectif. À 375px : **24 %, 20 % et 24 %**. Pour atteindre 50 % sur téléphone, il faudrait des images d'environ 900px de haut, soit un cadrage vertical qui couperait la moitié des illustrations (elles sont au format 16/9). Hauteur appliquée sur téléphone : 75 % de la largeur de l'écran. Accepter, ou fournir des versions verticales des illustrations pour le téléphone ?
71. **Sections sans grande image** : **Méthode** (aucune illustration fournie), **Hero** (le schéma SVG interactif, non modifié et pas en débord), **Articles** (vignettes des articles seulement). Faut-il une illustration pour la Méthode ?
72. *(Mise à jour le 12 octobre 2026 : le Hero est refait. Sur téléphone, 40px en haut et 48px en bas, voir la question 85.)* **Hero sur téléphone : marges verticales gardées serrées** (16px et 24px au lieu des 72px demandés). Elles avaient été voulues pour que le bouton et les raccourcis restent visibles sans défiler. Avec 72px, le bouton descend d'environ 100px. Seul l'ordinateur passe à 120px. Appliquer 72px quand même ?
73. **Pas d'étiquettes sur l'image des aides** : la demande n'en fournit pas pour cette image, et je n'invente pas de chiffres. Lesquelles mettre ?
74. **Cas types : surtitre de période retiré** (« Avant 1948 », « 1950 – 1990 »…) pour s'en tenir aux deux encarts. **Le titre du panneau est gardé** : c'est un titre, pas un paragraphe, et il structure la page pour les lecteurs d'écran. Remettre la période, ou retirer aussi le titre ?
75. **Méthode : icônes des étapes supprimées** (« rien d'autre » que le titre et le numéro). Les grands numéros passent en **orange** (2,38:1 sur blanc, décoratifs et masqués aux lecteurs d'écran : le rang est annoncé par la liste). Le filigrane crème foncé disparaissait presque sur le blanc. D'accord ?
76. **Simulateur : colonne de gauche plus « collante »** (sticky). Avec l'image de 44rem, elle est plus haute que l'écran, et le maintien à l'écran n'avait plus d'effet. D'accord ?
77. *(Sans objet depuis l'ajout des couleurs du 12 octobre 2026 : le bloc est redevenu blanc, sur fond argile.)* **Bloc « Je veux rénover… » passé en crème** (il était blanc). Sur le nouveau fond blanc de la Méthode, il aurait disparu. D'accord ?
78. *(Sans objet depuis l'ajout des couleurs : le filet est revenu au vert-600, sur le bloc blanc du panneau.)* **Filet de l'encart vert « Ce que vous y gagnez » éclairci** (vert-400 au lieu de vert-600), car le vert-600 ne se voyait pas sur le vert foncé de la section. Le libellé orange « L'erreur qui coûte cher » reste à 2,77:1 (question 55, toujours ouverte).
79. **Hero non animé** : il est déjà à l'écran au chargement. L'animer retarderait l'affichage du titre principal (mesure de vitesse LCP de Google). Le bandeau des 8 solutions n'est pas animé non plus. Les animer quand même ?
80. **Collectif : les 5 engagements tiennent sur une ligne à partir de 1280px seulement.** En dessous, la ligne ne tient pas : les titres passent à la ligne, centrés, sans point médian (sinon des lignes commenceraient par « · »). D'accord ?

51. **⚠️ Fichier `akelia-cas-types-v2.md` introuvable.** Je l'ai cherché dans le projet et sur toute la machine, sans résultat. Les textes des 5 cas types (période, titre, situation, piège, gain) sont donc des **brouillons rédigés par Claude, NON VALIDÉS**, rangés dans `src/data/cas-types.ts` pour être faciles à remplacer. Seuls les libellés des onglets viennent de la demande. Merci de déposer le fichier à la racine du projet (ou de coller les textes) : je reprendrai les versions courtes mot pour mot.
52. *(Réglée le 12 octobre 2026 : les 7 illustrations sont branchées, voir « Illustrations de la page d'accueil branchées ».)* **⚠️ Les 7 illustrations sont absentes** (`src/assets/illustrations/` n'existait pas). Les emplacements sont vides, sur fond creme-fonce : 5 dans les cas types, 1 (la carte) dans le Collectif. Il suffit de déposer les fichiers avec les noms prévus (`pierre.jpg`, `annees70.jpg`, `moderne.jpg`, `technique.jpg`, `appartement.jpg`, `carte.jpg`) : ils seront pris en compte automatiquement et convertis en WebP, sans toucher au code.
53. *(Réglée le 12 octobre 2026 : `aides.jpg` est sous l'accroche, dans la colonne de gauche du simulateur.)* **Où placer `aides.jpg` ?** La demande la liste, mais ne dit pas où la mettre, et le simulateur doit « garder sa mise en page actuelle ». Elle n'est donc placée nulle part. Faut-il la mettre dans la colonne de gauche du simulateur, sous l'accroche ?
54. *(Sans objet depuis la refonte « alan.com » du 12 octobre 2026 : une couleur différente par section.)* **⚠️ Alternance des fonds contradictoire.** La demande veut que « chaque section se distingue de la précédente », mais fixe Méthode, Cas types et Simulateur en crème, à la suite. Avec le bloc « Vous pilotez, ou on pilote ? » (non cité, laissé dans la Méthode), cela donne **4 blocs crème d'affilée** (environ 2 950px à 1280px). Sur téléphone, le schéma de la maison (crème, en bas du hero) enchaîne en plus directement sur la Méthode (crème). J'ai appliqué la liste à la lettre. Proposition : passer les Cas types en **blanc**, ce qui crée une coupure nette entre Méthode et Simulateur. Il faudrait alors donner aux onglets inactifs et au panneau un fond crème au lieu du blanc. Laquelle choisir ?
55. **⚠️ Contraste du libellé « L'erreur qui coûte cher »** : action-600 (#d17f08) sur action-50 (#fdf0e0) = **2,77:1**, sous le minimum de 4,5:1 pour un petit texte (public senior). Appliqué tel que demandé. Pistes : un orange plus foncé réservé au texte (par exemple #9a5a00, environ 5:1), ou un libellé en couleur texte avec seulement la bordure orange. Le libellé vert (5,59:1) est conforme.
56. **Anciens jetons gardés pour `SchemaMaison.astro`.** Le schéma ne doit pas être modifié, mais il utilise `marque-900`, `neutre-500`, `rounded-petit` et `rounded-pilule`. Les supprimer aurait cassé son affichage. Je les ai donc gardés dans `global.css`, dans un bloc « réservé à SchemaMaison », à ne pas utiliser ailleurs. `marque-900` prend la valeur du nouveau bleu nuit (#1d2b36), `neutre-500` garde #818080, et les deux arrondis gardent 5px et 9999px. Cela vous va, ou faut-il plutôt adapter le schéma ?
57. **Deux couleurs ajoutées hors de la liste fournie** : `nuit-filet` (#35495a, la couleur des filets du Collectif donnée dans la demande, transformée en jeton) et `texte-inverse` (#fff, gardé pour le texte blanc sur fond sombre). D'accord ?
58. **Champs de formulaire** (code postal, prénom, e-mail, téléphone) : le cadre noir de 2px est remplacé par un filet de 1px en texte-doux (7:1), pour que le champ reste repérable (règle d'accessibilité : 3:1 minimum pour le contour d'un champ). En cas d'erreur, le cadre passe à 2px rouge. Les grandes cases de choix du simulateur gardent un cadre de 2px crème foncé, très pâle (1,23:1, à peu près comme avant). Une fois cochées, elles passent en vert (cadre vert-600, fond vert-50) au lieu du bleu nuit. Valider ?
59. *(Sans objet depuis la refonte « alan.com » : seuls les 5 titres courts restent, sur une ligne.)* **Collectif : intertitre « Avec Akelia, vos travaux en toute confiance » retiré** de l'affichage, car la demande décrit la section sans lui. Il est remplacé par un titre « Nos 5 engagements » lu seulement par les lecteurs d'écran (pour garder la hiérarchie des titres). Les engagements suivent aussi le **nouvel ordre** de la demande : interlocuteur, 30 minutes, RGE, devis, suivi. Avant, le suivi venait en 3e et le RGE en 5e. Les textes sont inchangés. Remettre l'intertitre visible ?
60. *(Sans objet depuis la refonte « alan.com » : Collectif à 1 006px à 375px.)* **Hauteur sur téléphone (375px)** : Collectif **2 632px** (contre 2 391px avant), soit 3,2 écrans d'iPhone X. La carte (format 4/3) et les titres plus grands ajoutent de la hauteur. Pistes : masquer la carte sur téléphone (environ −290px), ou réduire la marge entre l'introduction et les engagements.
61. *(Sans objet depuis la refonte « alan.com » : le panneau n'a plus de bloc blanc ni de marge intérieure.)* **Marge intérieure du panneau des cas types** : 40px demandés. Appliqués à partir de 768px, mais **24px sur téléphone**, car 40px laissaient environ 255px de largeur de texte à 375px. D'accord ?
62. **Montant « plus de 30 000 € » passé en vert** (vert-600, 5,77:1 sur le crème). L'orange sur le nouveau fond crème du simulateur ne serait lisible qu'à 2,17:1, et la palette réserve le vert aux chiffres. D'accord ?
63. **Section des articles : textes retouchés** (initiative) : « Actualités & Conseils » devient « Actualités et conseils », « réduire votre empreinte énergétique » devient « réduire votre consommation d'énergie », et j'ai ajouté le surtitre « Le blog ». La catégorie s'affiche toujours sous sa forme technique (« systeme-de-chauffage »). Ce défaut existait déjà : faut-il un libellé lisible ?
64. **Autres pages (devis, blog, article, mentions légales, services)** : je les ai converties mécaniquement à la nouvelle palette et à l'arrondi unique, pour qu'il ne reste aucune couleur slate ou emerald dans `src/`. Elles n'ont **pas** été redessinées (tailles de texte Tailwind par défaut, mise en page d'origine). Leur refonte est-elle prévue ?
65. **Titres des 4 étapes** : la taille n'était pas précisée. J'ai mis 1.5rem en graisse 900, car à la taille h3 (jusqu'à 2.4rem), « Isoler et ventiler » ne tenait pas dans une colonne étroite. D'accord ?
66. *(Réglée le 12 octobre 2026 : le Hero passe sur fond blanc, le quadrillage est supprimé.)* **Quadrillage du hero conservé** : le fond est crème et les lignes creme-fonce, tous les 2rem. Le garder, ou passer à un crème uni ?
67. *(Réglée le 12 octobre 2026 : chaque illustration a maintenant un texte alternatif descriptif.)* **Illustrations décoratives** : celles des cas types ont un texte alternatif vide (l'onglet et le titre disent déjà de quel logement il s'agit). La carte de France a le texte alternatif « Carte de France des artisans du collectif Akelia », à ajuster selon ce qu'elle montre vraiment.

47. *(Sans objet depuis la refonte visuelle du 12 octobre 2026 : section Collectif refaite, voir la question 60.)* **⚠️ Section Collectif haute sur téléphone** : 2 391px à 375px, soit 2,94 écrans d'iPhone X (812px), mais **3,58 écrans d'iPhone SE (667px)**. Pistes de réduction (**aucune appliquée**), avec le gain estimé :
    - (a) **Texte des engagements repliable** sur téléphone (le titre reste visible, le texte s'ouvre au toucher) : environ −1 000px. Gain maximal, mais une action en plus pour un public senior, et contraire au principe « tout visible » retenu à l'étape 22.
    - (b) **Espacement des lignes réduit** sur téléphone (24px → 16px en haut et en bas de chaque ligne, 12px → 8px entre titre et texte) : environ −100px, sans rien perdre en contenu.
    - (c) **Icônes masquées** sur téléphone, titre sur toute la largeur : environ −60 à −110px (les titres de 2 lignes passent souvent sur une ligne, comme « Un interlocuteur unique, responsable de votre chantier. »).
    - (d) **Titre h2 réduit** sur téléphone (2.5rem → 2rem, comme le h1 l'est déjà) : environ −40px ici, mais à décider pour tout le site, toutes les sections ayant le même h2.
    - (e) **Paragraphe 2 retiré ou raccourci** sur téléphone : environ −220px, mais c'est un changement de texte, à votre main.
    Recommandation : (b) + (c), environ −200px (≈ 2 190px, sous 3 écrans de 812px), sans toucher au texte ni ajouter d'interaction. Laquelle appliquer, ou garder tel quel ?
48. *(Sans objet depuis la refonte visuelle du 12 octobre 2026 : tous les traits noirs sont supprimés.)* **Deux traits noirs en bas de la section Collectif** : le trait de fin de liste et, 40 à 80px plus bas, le trait de fin de section (séparation avec les articles). Visible sur `1280-collectif.png`. Garder (choix appliqué : la liste reste un ensemble fermé), ou retirer le trait de fin de liste ?
49. *(Sans objet depuis la refonte visuelle du 12 octobre 2026 : section des articles migrée vers la nouvelle palette.)* **Section des articles à migrer** vers la charte (déjà dans « Restant à faire ») : elle suit maintenant la section Collectif, blanche, et contraste par sa palette Tailwind par défaut. À traiter dans une prochaine étape ?
50. *(Sans objet depuis la refonte « alan.com » : la phrase choc est seule, centrée, sans barre.)* **Paragraphe 3 mis en avant** (semi-gras, barre orange) : initiative de mise en page, non demandée. Le garder, ou le remettre au même style que les deux premiers ?

37. *(Sans objet depuis la refonte visuelle du 12 octobre 2026 : les grands numéros orange sont remplacés par des numéros en filigrane.)* **Contour bleu nuit autour des grands numéros orange** : ajouté pour la lisibilité (orange seul sur blanc : 1,94:1, sous les 3:1 recommandés même pour un très grand texte). Les numéros sont décoratifs pour les lecteurs d'écran (le rang est annoncé par la liste et par « Étape X sur 4 »), mais un visiteur senior doit pouvoir les lire. Garder le contour (choix appliqué), ou orange pur ? Retirer le contour se fait en supprimant deux classes dans `MethodeEtape.astro`.
38. *(Sans objet depuis la refonte visuelle du 12 octobre 2026 : la section Méthode est refaite, hauteurs remesurées.)* **Section Méthode plus haute sur téléphone** : +192px à 375px (2 433px au total, environ 3 écrans). Acceptable ? Sinon, pistes : numéros à 3.5rem (56px) sur téléphone (environ −60px), ou icônes masquées sur téléphone (sans gain de hauteur, mais un en-tête plus aéré).
46. **Libellé « Demander un accompagnement » sur deux lignes** sur téléphone (depuis l'étape 24, il tient sur une ligne dès 768px) (bouton de 66px de haut, lisible). Accepter, ou raccourcir sur petit écran (par exemple « Être accompagné ») ?
43. *(Sans objet depuis la refonte visuelle du 12 octobre 2026 : le simulateur est désormais sur fond crème, plus bleu nuit.)* **⚠️ Enchaînement sur téléphone** (toujours valable à l'étape 23 ; la bande est maintenant blanche) : seulement 44px entre le bloc bleu nuit (en bas de la pile) et la section bleu nuit des aides. Pistes (a), (b), (c) détaillées aux étapes 20 et 22 ; recommandation : (b), marge basse doublée sur téléphone. Laquelle appliquer ?
44. *(Sans objet depuis l'étape 22 : l'écran partagé est abandonné.)*
45. *(Sans objet depuis l'étape 22.)*
41. *(Réglée à l'étape 20 : la demande fixe le panneau gauche en clair et le droit en bleu nuit.)* **Quelle carte en bleu nuit ?** Le fond sombre attire l'œil en premier. Il a été mis sur la carte 1 (« Je veux rénover… », accompagnement complet), qui est aussi la première lue. Un visiteur pourrait y voir l'offre « principale ». Garder (choix appliqué), ou mettre la carte 2 en bleu nuit ? Inverser aussi l'ordre éloignerait la carte sombre de la section des aides (voir l'étape 19).
42. **Barre orange de la citation sur la carte blanche** : 1,94:1, décorative. La garder orange sur les deux cartes, comme demandé à l'étape 18 (choix appliqué), ou la passer en bleu nuit sur la carte blanche (13,18:1), au risque de casser la symétrie des deux citations ?
39. *(Sans objet depuis la refonte visuelle du 12 octobre 2026 : titre remplacé par « Dans le désordre, vous payez deux fois. ».)* **Titre « Votre logement autonome »** *(introduction remplacée à l'étape 19 ; seul le titre reste en question)* : il parle encore de la méthode, alors que l'introduction et le bloc suivant parlent maintenant au visiteur. Le reprendre, ou le garder ?
40. **Textes à valider** : le tableau « Origine des textes », en tête de fichier, liste ce que vous n'avez pas fourni (notamment toutes les phrases de `aides.ts`, les questions et les messages d'erreur du simulateur). Merci de les valider ou de fournir vos versions. Si votre rappel voulait dire autre chose, merci de préciser.

33. **30 000 € ou 32 000 € ?** Le texte fourni dit « plus de 30 000 € », alors que le simulateur affiche « jusqu'à 32 000 € » pour MaPrimeRénov' rénovation d'ampleur. Ce n'est pas faux (32 000 est bien « plus de 30 000 »), mais le montant n'est plus relié à `aides.ts` : si le barème baisse sous 30 000 €, l'accroche ne suivra pas. Garder 30 000 € en dur (choix appliqué), ou revenir au montant lu dans les données ?
34. *Sans objet depuis le 15 octobre 2026 (texte remplacé ; voir la question 201).* **« L'État les verse »** : « les » n'a plus d'antécédent clair, puisque le mot « aides » a disparu du titre (le titre parle de « 30 000 € » qu'on « rapporte »). Un lecteur comprend, mais la phrase pourrait être « L'État verse ces aides pour isoler… ». Garder le texte tel quel (choix appliqué) ou ajuster ? À noter aussi : « l'État » ne verse pas les primes CEE (fournisseurs d'énergie) ni les aides régionales.
35. **Titre de gauche en `<p>`** : comme avant, la grande phrase est un paragraphe stylé, et le seul titre de section (`<h2>`) reste « Estimez vos aides ». Faut-il plutôt faire de l'accroche le `<h2>` de la section (meilleur pour le référencement et les lecteurs d'écran) ?
36. **Consigne de vérification incomplète** : le message s'arrêtait à « Vérifie les contrastes sur ». Tous les couples de la section ont été vérifiés (voir l'étape 17). Un élément précis était-il visé ?

32. **Seule mention restante de France Rénov'** : dans les conditions de MaPrimeRénov' rénovation d'ampleur (visibles en dépliant la ligne), « Accompagnateur Rénov' et rendez-vous préalable avec un conseiller France Rénov' obligatoires. ». Ce n'est ni un lien ni un renvoi, mais une **condition légale** (guide de l'Anah) : la retirer rendrait la liste des conditions inexacte. La garder, ou la reformuler, par exemple « Accompagnement obligatoire et rendez-vous préalable avec un conseiller public obligatoire » ?
25. *(Sans objet depuis l'étape 17 : la phrase sur le RGE est retirée.)* **« Mais rien n'est versé si l'artisan n'est pas certifié RGE »** : exact pour MaPrimeRénov', les primes CEE et l'éco-PTZ, mais la TVA à 5,5 % s'applique sans artisan RGE. Nuancer, ou garder ?
29. **Aides régionales à confirmer** : Bourgogne-Franche-Comté (conditions de 2022), Grand Est (ouverture 2026 non précisée), et Auvergne-Rhône-Alpes, Bretagne et Occitanie à « inconnu ».
30. **Éco-PTZ affiché « Oui · jusqu'à 50 000 € »** comme une aide, alors que c'est un prêt : le signaler dès la ligne fermée ?
27. *(Sans objet depuis l'étape 17 : le chiffre fait partie d'une phrase continue, à la taille du titre.)* **Taille du chiffre** : 2.5rem et 3rem (taille h1), et non la taille display réservée au hero. Passer en display ?
17. **Page `/aides-renovation` quasiment vide** (liée par le Header, le Footer et le tiroir) : faut-il la créer ?
18. **Points « à vérifier » des aides nationales** : recherche complémentaire ?
20. **Clé Web3Forms manquante** ⚠️ : aucune demande n'arrive tant que la vraie clé n'est pas renseignée.
21. **Joindre les réponses du simulateur à la demande de contact ?**

### Questions résolues (étape 16)

28. **Phrase du « 32 000 € »** : remplacée par « Plus de 32 000 € d'aides possibles sur vos travaux » (voir la note de l'étape 16).
31. **Vide sous les questions** : résolu, la hauteur fixe est supprimée et le bloc s'ajuste au contenu.

<details><summary>Détail des questions telles qu'elles avaient été posées à l'étape 15</summary>

28. ⚠️ **« 32 000 € — le montant d'aides obtenu sur une rénovation complète, MaPrimeRénov' et prime CEE cumulées »** : la phrase est à valider, sur deux points.
    - **Le calcul** : d'après le guide de l'Anah (septembre 2026), 32 000 € est le maximum de **MaPrimeRénov' rénovation d'ampleur seule** (80 % de 40 000 € HT de travaux, ménages aux revenus très modestes, gain d'au moins 3 classes). Ce n'est pas un cumul avec la prime CEE. De plus, le guide présente la prime CEE « rénovation d'ampleur » comme réservée à « certains bénéficiaires non éligibles aux aides de l'Anah » (résidences secondaires, logements de moins de 15 ans). Je n'ai donc **pas trouvé de source** selon laquelle ces deux aides se cumulent pour atteindre 32 000 €. D'autres primes CEE pourraient se cumuler avec MaPrimeRénov' : ce point n'est pas vérifié.
    - **Le mot « obtenu »** laisse entendre un cas réel. Si ce montant a été obtenu sur un chantier Akelia, cela peut être indiqué ; sinon, une formulation comme « jusqu'à 32 000 € avec MaPrimeRénov' pour une rénovation complète » serait exacte.
25. **« Mais rien n'est versé si l'artisan n'est pas certifié RGE »** : exact pour MaPrimeRénov', les primes CEE et l'éco-PTZ. Mais la TVA à 5,5 % s'applique sans artisan RGE, d'après le guide de l'Anah, et le simulateur la présente comme une aide. Faut-il nuancer (« aucune aide de l'État n'est versée ») ou garder la phrase ?
29. **Aides régionales à confirmer** (voir l'étape 15) :
    - Bourgogne-Franche-Comté : Effilogis, conditions de 2022 ;
    - Grand Est : ouverture de Climaxion en 2026 non précisée ;
    - Auvergne-Rhône-Alpes, Bretagne et Occitanie : « inconnu ».
    Faut-il garder ces statuts, ou passer les incertains à « inconnu » par prudence ?
30. **Éco-prêt à taux zéro** : la ligne affiche « Oui · jusqu'à 50 000 € » comme les aides. C'est un prêt à rembourser, ce que précise l'explication dépliée (« Prêt sans intérêts, accordé par une banque »). Faut-il le signaler dès la ligne fermée, par exemple « Prêt · jusqu'à 50 000 € » ?
31. **Vide sous les questions (environ 1 000px à 375px)** : il vient de la hauteur commune calée sur le résultat avec une ligne ouverte. Options :
    - (a) **hauteur calée sur le résultat lignes fermées** : environ 1 090px de contenu au lieu de 1 680px, soit environ 600px de vide de moins ; ouvrir une ligne agrandirait alors le bloc, mais c'est la personne qui le demande ;
    - (b) **explications dépliées plus courtes**, par exemple sans la liste des conditions : environ 300 à 400px de moins ;
    - (c) **(a) + (b)** ;
    - (d) **garder tel quel**.
    Le résultat fermé (environ 1 050px) restera de toute façon plus haut que les questions (650px) sur téléphone : un peu de vide est inévitable avec une hauteur commune.
27. **Taille du chiffre** : 2.5rem sur téléphone et 3rem à partir de 768px (taille h1), et non la taille display (3.5rem), réservée au hero par la charte. Passer en display ?
17. **Page `/aides-renovation` quasiment vide** (liée par le Header, le Footer et le tiroir) : faut-il la créer ?
18. **Points « à vérifier » des aides nationales** : recherche complémentaire (décret n° 2026-822, fiches CEE, photovoltaïque) ?
20. **Clé Web3Forms manquante** ⚠️ : aucune demande n'arrive tant que la vraie clé n'est pas renseignée.
21. **Joindre les réponses du simulateur à la demande de contact ?** Aujourd'hui, seuls le prénom, l'e-mail et le téléphone sont envoyés.

</details>

### Questions résolues (étape 15)

15. **Textes à relire** : ils figurent désormais dans une section dédiée en tête de fichier, réécrite à chaque modification (« Textes du simulateur d'aides : version en vigueur »).
24. **Espace vide** : remplacée par la question 31 (le vide demeure, avec de nouvelles mesures).
26. **« Dossier monté avec vous »** : engagement confirmé par le nouveau texte fourni (« nous montons le dossier avec vous »).

<details><summary>Détail des questions telles qu'elles avaient été posées à l'étape 14</summary>

24. **Hauteur commune : beaucoup d'espace vide sur les questions** ⚠️ (mesures de l'étape 14). Pour que le bloc ne grandisse pas à l'arrivée du résultat, il a la hauteur du résultat le plus long. À 375px, cela laisse **environ 1 100px vides sous la question 1** (bloc de 1 861px pour environ 770px de contenu), et environ 1 000px à 1280px. Le visiteur voit une grande carte presque vide. Options :
    - (a) **Hauteur commune entre questions et contact seulement** (environ 770px à 375px, sans vide), et laisser le bloc grandir **une seule fois**, à l'arrivée du résultat, en ramenant le haut du bloc à l'écran. *Recommandation de Claude* : c'est le seul saut, il est attendu (on vient de cliquer « Voir mes aides »), et il ne fait pas « sauter » la lecture en cours.
    - (b) **Résultat plus compact**, pour réduire le maximum : le nom de l'aide et le verdict cliquables pour déplier l'explication (sans ligne « Pourquoi ? » séparée), et une carte de département plus courte. Gain estimé : 300 à 400px. Il resterait environ 700px de vide.
    - (c) **Garder tel quel.**
25. **« Artisans certifiés RGE — sans cette certification, aucune aide n'est versée »** : d'après le guide de l'Anah, le recours à un professionnel RGE est obligatoire « pour tous les dispositifs quand cette qualification existe » (MaPrimeRénov', CEE, éco-PTZ). En revanche, **la TVA à 5,5 % n'exige pas d'artisan RGE** dans les conditions du guide, et le simulateur la présente comme une aide. La phrase est donc un peu trop absolue. Proposition : « sans cette certification, les aides de l'État ne sont pas versées ». La garder telle quelle ?
26. **« Dossier monté avec vous — vous ne remplissez pas les formulaires seul »** : c'est un engagement de service. Pouvez-vous confirmer qu'il est bien proposé par tous les artisans du collectif ?
27. **Taille du montant** : utilisée en 2.5rem sur téléphone et 3rem à partir de 768px (taille h1), avec un aplat orange. La taille display (3.5rem) est réservée au titre du hero dans la charte. Faut-il passer le montant en display, au risque qu'il rivalise avec le titre principal de la page ?
15. **Textes à relire** : la liste complète est désormais dans l'étape 14 (parties A à F), y compris toutes les phrases sur MaPrimeRénov'.
17. **Page `/aides-renovation` quasiment vide** (liée par le Header, le Footer et le tiroir) : faut-il la créer ?
18. **Points « à vérifier »** du simulateur : recherche complémentaire (texte du décret n° 2026-822, fiches CEE, photovoltaïque) ?
20. **Clé Web3Forms manquante** ⚠️ : aucune demande n'arrive tant que la vraie clé n'est pas renseignée (formulaire de contact du simulateur et `/devis`).
21. **Joindre les réponses du simulateur à la demande de contact ?** Aujourd'hui, seuls le prénom, l'e-mail et le téléphone sont envoyés. Les textes « Rien n'est enregistré » et « Vos coordonnées servent uniquement… » devraient alors être revus.

</details>

### Questions résolues (étape 14)

22. **Espace vide aux questions 1 et 2** : remplacée par la question 24 (l'espace vide est maintenant dû à la hauteur commune avec le résultat).
23. **Lien « Obtenir un devis »** : retiré, car la demande prévoit un bouton unique « Obtenir vos aides réelles ».

<details><summary>Détail des questions 15 à 23 telles qu'elles avaient été posées à l'étape 13</summary>

15. **Textes rédigés par Claude** (étapes 12 et 13 : voir les listes exactes ci-dessus et les phrases de `src/data/aides.ts`) : à relire, en particulier les phrases sur MaPrimeRénov', qui engagent le site.
17. **Page `/aides-renovation` quasiment vide** : le message sans JavaScript du simulateur ne renvoie plus vers elle (il renvoie vers l'annuaire France Rénov'), mais elle reste liée par le Header, le Footer et le tiroir mobile. Faut-il la créer maintenant ?
18. **Points « à vérifier »** du simulateur : voulez-vous une recherche complémentaire (texte du décret n° 2026-822 sur Légifrance, fiches CEE ventilation et fenêtres, photovoltaïque) ?
20. **Clé Web3Forms manquante** ⚠️ : le formulaire d'estimation, comme celui de `/devis`, contient la valeur d'exemple `YOUR_ACCESS_KEY_HERE`. **En l'état, aucune demande n'arrive** : la personne voit le message d'erreur de Web3Forms. Il faut la clé d'accès du compte Web3Forms d'Akelia. Faut-il aussi la regrouper en un seul endroit, pour ne pas avoir à la copier dans deux fichiers ?
21. **Joindre les réponses du simulateur à la demande d'estimation ?** Aujourd'hui, seuls le prénom, l'e-mail et le téléphone sont envoyés. Joindre le statut, le code postal et les travaux aiderait l'artisan, mais il faudrait alors modifier deux textes qui promettent le contraire : l'encadré « Vos réponses restent sur votre appareil : elles ne sont ni enregistrées ni envoyées », et la mention « Vos coordonnées servent uniquement… ».
22. **Espace vide aux questions 1 et 2 sur téléphone** : la hauteur étant calée sur la question 3 (6 cases sur une colonne), il reste environ 350px vides sous les 3 réponses de la question 1 à 375px. Option : passer les travaux sur 2 colonnes dès le téléphone, ce qui économise environ 200px. Contrepartie : « photovoltaïques » serait coupé en deux (comme à l'étape 12). Garder tel quel ?
23. **Lien « Obtenir un devis »** : il est passé au rang de lien secondaire en bas du résultat, puisque le bloc d'estimation est désormais l'action principale. Le garder ainsi, le supprimer, ou le remettre en bouton ?

</details>

### Questions résolues (étape 13)

16. **Résultat long sur téléphone** : traité par la refonte (aides refusées repliées, cartes réduites, explication dépliable). À cas comparable, le résultat passe de 2 388px à 1 405px à 375px.
19. **Marge de hauteur du formulaire** : sans objet, puisqu'il n'y a plus qu'une question à la fois.

<details><summary>Détail des questions 15 à 19 telles qu'elles avaient été posées à l'étape 12</summary>

15. **Textes du simulateur rédigés par Claude** : le titre « Avez-vous droit à des aides ? », l'introduction (« Trois questions, une réponse immédiate. Rien n'est enregistré ni envoyé : tout se passe sur votre appareil. »), le bouton « Voir mes aides » et toutes les phrases d'explication de `src/data/aides.ts`. Merci de les relire, en particulier les phrases sur MaPrimeRénov', qui engagent le site.
16. **Résultat long sur téléphone** : 2 388px à 375px (5 cartes d'aides, soit plus de 4 écrans). Options :
    - (a) **replier les aides auxquelles la personne n'a pas droit** (« non ») sous « Voir les aides non accessibles » ;
    - (b) **raccourcir chaque carte** : n'afficher que le verdict et le montant, l'explication restant dépliable ;
    - (c) **accepter**.
17. **La page `/aides-renovation` est quasiment vide** : son fichier ne contient qu'un début de commentaire inachevé, et la page affiche ce texte brut. Or le message affiché sans JavaScript renvoie vers elle. Faut-il la créer maintenant, ou renvoyer en attendant vers une autre page (par exemple l'annuaire France Rénov') ?
18. **Points « à vérifier »** (voir l'étape 12) : voulez-vous que je recherche le texte du décret n° 2026-822 sur Légifrance, et les fiches CEE (ventilation, fenêtres) et photovoltaïques, pour remplacer le plus possible de « à vérifier » par des réponses sûres ?
19. **Marge de hauteur du formulaire** : il tient en 2 écrans à 375px avec seulement 14px de marge. Tout ajout de texte (une question, une aide) le ferait dépasser. Est-ce acceptable ?

</details>

### Questions résolues (étape 11)

11. **Position du schéma** : option (a), après les raccourcis sous 1280px.
12. **Cotes** : chiffres retirés, traits conservés, « R ≥ 7 » gardé.
13. **Annotations manuscrites** : Source Sans 3 italique.
14. **Navigation clavier** : un seul arrêt de tabulation, flèches entre les repères.

<details><summary>Détail des questions 11 à 14 telles qu'elles avaient été posées</summary>

11. **Le schéma repousse les raccourcis hors de l'écran** (à 375px, la 1re rangée passe de 441px à 857px pour 547px disponibles, et c'est pareil aux autres largeurs). Le bouton reste visible. Solutions possibles :
    - (a) **Sur mobile et tablette, placer le schéma après le bandeau des raccourcis**, toujours dans le hero. Les raccourcis retrouvent leur place (visibles à 375px) et le schéma arrive juste en dessous. *Recommandation de Claude.*
    - (b) **Replier la légende sur mobile** (« Voir la légende des repères ») : environ 150px de gagnés. C'est insuffisant à lui seul, et le lecteur doit toucher pour comprendre les numéros.
    - (c) **Sur ordinateur, réduire la marge verticale du hero** (80px → 40px en haut et en bas) : à 1280×800, la rangée de raccourcis pourrait redevenir visible (environ 750px au lieu de 830px), à vérifier.
    - (d) **Accepter** : le schéma est l'élément qui aide à se projeter, et les raccourcis arrivent après un court défilement.
12. **Cotes du schéma (9,50 m, 5,60 m, 8,20 m)** : ce sont des valeurs **fictives**, choisies pour le style « plan technique ». Faut-il les garder, mettre des dimensions types réalistes que vous fournirez, ou retirer les chiffres en ne gardant que les traits de cote ? Pour information, « R ≥ 7 » correspond bien à la résistance thermique minimale couramment exigée pour l'isolation des combles perdus dans les aides à la rénovation (en m²·K/W).
13. **Annotations « manuscrites »** : elles utilisent une police d'écriture du système (Segoe Print sous Windows, Bradley Hand sous Mac), donc leur rendu varie selon l'appareil. Sur les appareils qui n'en ont pas, l'italique de secours peut paraître banal. Faut-il les garder ainsi, ou passer en Source Sans 3 italique, identique partout ?
14. **Légende au clavier** : les 8 lignes de légende sont atteignables avec la touche Tab (exigence d'accessibilité dès qu'un élément réagit). Cela ajoute 8 arrêts de tabulation entre le bouton « Obtenir un devis » et les raccourcis. Est-ce acceptable, ou faut-il ne garder qu'un seul arrêt (le schéma entier), à parcourir avec les flèches ?

</details>

### Questions résolues (étape 9)

7. **Menu sur 2 lignes entre 992 et 1 104px** : option (b), menu ordinateur à partir de 1280px.
8. **Liens directs dans le tiroir** : « Rénovation globale » ajouté après les accordéons.
9. **Image des pompes à chaleur** : remplacée par une image sans marque. Les 9 autres sont conservées.
10. **« Maison autonome »** : retiré du menu et du tiroir, en attendant sa propre page.

<details><summary>Détail des questions 7 à 10 telles qu'elles avaient été posées</summary>

7. **Le menu principal ne tient pas sur une ligne entre 992 et environ 1 104px de large.** Avec les 2 liens directs, les 5 entrées ont besoin de 1 064px, et le Header n'en offre que 952 à 992px. Entre 992 et 1 104px, chaque libellé passe donc sur 2 lignes (par exemple « Isolation et / menuiseries »). Cela reste lisible et cliquable, mais c'est moins net. À partir d'environ 1 104px, tout tient sur une ligne. Resserrer les marges intérieures, les espacements et les chevrons ne ferait gagner qu'environ 74px, ce qui ne suffit pas. Options :
   - (a) **accepter** les libellés sur 2 lignes entre 992 et 1 104px (situation actuelle) ;
   - (b) **afficher le menu « ordinateur » à partir de 1280px seulement** (`xl:`), avec le bouton « Menu » et le tiroir en dessous. Les tablettes en paysage (1024 à 1180px) utiliseraient alors le tiroir, souvent plus confortable au doigt ;
   - (c) entre 992 et 1279px, **déplacer « Rénovation globale » et « Maison autonome » sur la première ligne**, à côté des liens secondaires. Cela tiendrait de justesse (environ 950px pour 952 disponibles), à vérifier ;
   - (d) **raccourcir un libellé**, par exemple « Chauffage, climatisation et eau chaude », qui fait 315px à lui seul.
8. **Tiroir mobile sans les 2 liens directs** : comme demandé, le tiroir n'a pas changé. « Rénovation globale » et « Maison autonome » sont donc absents sur téléphone et tablette. Faut-il les y ajouter ?
9. **Images du méga-menu générées par IA** : faut-il les garder en attendant de vraies photos ? L'image des pompes à chaleur affiche une fausse marque, « Heat Fullm », qui pourrait surprendre un visiteur attentif. Faut-il la remplacer en priorité ?
10. **« Maison autonome » et « Qui sommes-nous »** pointent tous deux vers `/qui-sommes-nous`, sous deux libellés différents. Est-ce voulu, ou « Maison autonome » doit-il avoir sa propre page ?

</details>

### Questions résolues (étapes 6 et 8)

4. **Hero à 320px** : réponse (a), situation acceptée. Close à l'étape 8.
5. **Section « Méthode » trop haute** : A + B + D appliqués à l'étape 8.
6. **Étapes en colonnes** : passage à `xl:` à l'étape 8.

<details><summary>Détail des questions 4 à 6 telles qu'elles avaient été posées</summary>

*Les questions 1 à 3 (étape 5) ont reçu une réponse : voir le tableau « Réponses reçues » de l'étape 6.*

4. **Hero à 320px de large : objectif non atteint.**
   - **Ce qu'il faudrait gagner** : avec 448px disponibles, le bouton dépasse de 43px et la 1re rangée de raccourcis commence 83px trop bas. Pour en voir ne serait-ce que le haut, il faut gagner **au moins 84px** de hauteur.
   - **Pourquoi les marges ne suffisent pas** : à 320px, le titre fait 7 lignes (environ 216px) et le sous-titre 3 lignes (environ 84px). Les marges verticales restantes du hero ne totalisent plus qu'environ 100px. Les supprimer presque toutes collerait les blocs les uns aux autres, ce qui contredit la direction « blocs nettement séparés ».
   - **Pistes possibles**, aucune appliquée sans votre accord. Elles doivent être combinées pour atteindre 84px :
     - (a) **Accepter** la situation à 320px (iPhone SE de 1re génération, 2016, devenu rare) ;
     - (b) **sous-titre en taille texte courant** (`text-corps`, 1.125rem au lieu de 1.25rem) sur mobile : gain estimé d'environ 28px (une ligne de moins à 320px) ;
     - (c) **Header plus bas sur mobile** (64px au lieu de 72px) : gain d'environ 8px. Cela touche le Header, et non le hero ;
     - (d) **titre plus court**, uniquement sous 360px de large : c'est le seul levier qui libère vraiment de la place (gain de 60 à 90px), mais il modifie le texte, que vous avez demandé de garder exact ;
     - (e) **règle dédiée aux écrans de moins de 360px** : un display à 1.5rem uniquement sur ces écrans. Cela contredit la consigne de ne pas descendre sous 1.75rem.
5. **Section « Méthode » trop haute sur téléphone** (2 647px à 375px, environ 4,8 écrans) : quelles pistes appliquer parmi A à E (voir l'étape 7) ? Recommandation de Claude : **A + B + D**, qui ne touchent ni aux textes ni à la charte globale.
6. **Étapes à 992px** : garder 4 colonnes dès 992px (colonnes étroites), ou ne passer en ligne qu'à partir de 1280px ?

</details>

### Questions résolues (étape 5)

1. **Hero sur très petit écran (320px de large)** : même à 1.75rem, le titre fait 7 lignes, les raccourcis sont hors écran et, sur un vrai téléphone, le bouton sera probablement caché par les barres du navigateur. Ces écrans sont devenus rares (iPhone SE de 1re génération, 2016). Faut-il :
   - (a) accepter la situation telle quelle ;
   - (b) prévoir une version plus courte du titre, uniquement sur très petit écran ;
   - (c) réduire l'espace au-dessus du titre (barre orange et marge haute) sur mobile pour gagner environ 40px ?
2. **URL de la page « Qui sommes-nous »** : garder `/qui-sommes-nous` (utilisée aujourd'hui par le Header et le Footer), ou reprendre `/a-propos` (l'URL de l'ancien site, meilleure pour le référencement existant) ? Dans les deux cas, une redirection depuis l'autre adresse est à prévoir.
3. **Bouton « Obtenir un devis » en double sur mobile** : il apparaît à la fois dans le Header et dans le hero, l'un au-dessus de l'autre. Faut-il garder les deux (conversion maximale), ou masquer celui du Header sur la page d'accueil ?

*Réponses données à l'étape 6 : 1 → resserrer les marges et les tuiles sur mobile (pas l'option du titre plus court) ; 2 → `/qui-sommes-nous` ; 3 → garder les deux boutons.*

### Lancement du serveur de développement (9 octobre 2026)

- Demande : `npm run dev`. Ce script exécute `astro dev` ; le serveur a été lancé en arrière-plan avec `astro dev --background`, comme le demande CLAUDE.md.
- Résultat : Astro v7.3.4 tourne sur http://localhost:4321/. La page d'accueil répond (code 200) et les journaux ne montrent aucune erreur.
- Commandes utiles : `npx astro dev status`, `npx astro dev logs`, `npx astro dev stop`.
- Aucun problème rencontré, aucune décision à arbitrer.

### Point de sauvegarde Git avant refonte visuelle (12 octobre 2026)

- Commit créé : `0b3202d70448a4ad3f1099f6ebb0bf7e50483935` (court : `0b3202d`), intitulé « Avant refonte visuelle », sur la branche `main`.
- Contenu : toutes les modifications non enregistrées (12 fichiers modifiés ou supprimés, dont `src/content/config.ts` remplacé par `src/content.config.ts`) et tous les fichiers non suivis (composants, styles, données, `package.json`, `Données webflow/` d'environ 54 Mo, `captures/`, `public/`, etc.). Aucun fichier sensible (`.env`, clés) n'a été détecté ; `node_modules/`, `dist/` et `.astro/` restent exclus par `.gitignore`.
- Pour revenir à cet état : `git checkout 0b3202d -- .` (ou `git reset --hard 0b3202d` pour tout annuler).
- Rien n'a été poussé vers un dépôt distant.
- Arbitrage possible : le dossier `Données webflow/` (54 Mo) est désormais versionné ; à retirer du dépôt s'il ne doit pas y figurer.

---

## Refonte visuelle de la page d'accueil (12 octobre 2026)

Point de départ : commit `0b3202d` « Avant refonte visuelle » (voir ci-dessus). Les questions ouvertes sont les n° 51 à 67 de « Questions en attente de réponse ». Les n° 37, 38, 39, 43, 47, 48 et 49 sont devenues sans objet.

### 1. Nouvelle charte (`src/styles/global.css`)

**Couleurs** : toutes les anciennes couleurs sont remplacées.

| Jeton | Valeur | Rôle |
|---|---|---|
| `nuit-900` | #1d2b36 | fond sombre, texte fort |
| `nuit-700` | #2b3f4e | fonds sombres secondaires, survol des boutons verts |
| `nuit-filet` | #35495a | filets du Collectif (**ajouté**, question 57) |
| `action-500` | #f0920f | orange : boutons et accents |
| `action-600` | #d17f08 | survol, libellé de l'encart orange |
| `action-50` | #fdf0e0 | fond de l'encart orange |
| `vert-600` | #2a6b4f | surtitres, chiffres, icônes de la méthode |
| `vert-400` | #4f9e7d | hachures, variantes (pas encore utilisé) |
| `vert-50` | #e9f3ee | fond de l'encart vert |
| `creme` | #f7f4ee | fond de section alternatif |
| `creme-fonce` | #ece7dd | filets doux, chiffres en filigrane, emplacements d'image |
| `fond` | #ffffff | |
| `texte` | #16212a | |
| `texte-doux` | #4c5a64 | texte secondaire |
| `texte-inverse` | #fff | texte sur fond sombre (**gardé**, question 57) |
| `succes-*`, `alerte-*` | inchangés | formulaires |

- **Supprimés** : `marque-*`, `secondaire-*`, `neutre-*`, `bordure`, `bordure-douce`, `action-100`, `action-400`. Seule exception : `marque-900` et `neutre-500`, gardés pour `SchemaMaison.astro` uniquement (question 56).
- **Arrondis** : une seule valeur, `--radius-bloc: 10px`. Les cercles utilisent `rounded-full`. `radius-petit` et `radius-pilule` restent définis pour le schéma seul (question 56).
- **Typographie** : h2 = `clamp(2.1rem, 4.4vw, 3.4rem)`, interligne 1.08, graisse 900 ; h3 = `clamp(1.7rem, 3vw, 2.4rem)`, interligne 1.1, graisse 900. La graisse **900 est ajoutée** à l'import Google Fonts (sinon le navigateur l'aurait simulée).
- **Surtitre** : nouvelle classe `surtitre` (0.85rem, graisse 700, lettres espacées de 0.14em, majuscules, vert-600). Une classe de couleur posée à côté l'emporte (ex. `surtitre text-action-500` dans le Collectif).
- **Remplacement des anciens noms dans tout `src/`** (sauf le schéma) : `marque-900` → `nuit-900`, `secondaire-50/100` → `creme`, `neutre-700/500` → `texte-doux`, `neutre-50` → `creme`, `bordure-douce` → `creme-fonce`, `rounded-petit/bouton/carte/section` → `rounded-bloc`, `rounded-pilule` → `rounded-full`.
- `src/pages/test-charte.astro` est mis à jour avec la nouvelle palette, l'arrondi unique, la graisse 900 et le surtitre.

### 2. Alternance des fonds (appliquée à la lettre, voir la question 54)

Hero (message et schéma) **crème**, avec le quadrillage gardé en creme-fonce · bandeau des 8 solutions **bleu nuit** · Méthode (4 étapes et « Vous pilotez, ou on pilote ? ») **crème** · Cas types **crème** · Simulateur **crème** · Collectif **bleu nuit** · Articles **blanc** · pied de page **crème**.

### 3. Section Méthode (`MethodeEtapes.astro`, `MethodeEtape.astro`, `Methode.astro`, `MethodeFacons.astro`)

Textes exacts :
- Titre h2 : « Dans le désordre, vous payez deux fois. »
- Introduction (toute la largeur, taille h4, texte-doux) : « Changer sa chaudière avant d'isoler, c'est acheter une pompe à chaleur trop grosse pour rien. L'ordre compte autant que les travaux. »
- Titres des étapes : « Étudier », « Isoler et ventiler », « Produire », « S'équiper ». Les textes des étapes sont inchangés.

Mise en page :
- Grille de 4 colonnes à partir de 1000px, étapes empilées en dessous.
- Chaque étape est un bloc blanc sans bordure, arrondi 10px.
- Numéro de 8.5rem, graisse 900, creme-fonce, en haut à droite (décalé de −28px en haut et −12px à droite, coupé par le bord du bloc), derrière le contenu.
- Icône vert-600 de 38px au-dessus du titre. Titre en 1.5rem, graisse 900 (question 65).
- **Supprimés** : les pastilles et numéros orange cerclés, la ligne de liaison (et son animation), la mention « Étape X sur 4 ».
- Animation d'apparition conservée : fondu et glissement, 120ms d'écart, rejouée à chaque retour à l'écran.
- « Vous pilotez, ou on pilote ? » : fond crème, marge du haut réduite (32px, puis 48px) car il prolonge la section. Cadre noir et traits noirs supprimés. Les deux blocs (blanc, bleu nuit) se distinguent par leur fond.

### 4. Section Cas types (nouveau : `src/components/CasTypes.astro`, `src/data/cas-types.ts`)

Placée entre la Méthode et le Simulateur.

Textes exacts fournis :
- Titre h2 : « Chaque maison a son piège. »
- Introduction : « Reconnaissez la vôtre : ce qu'il ne faut surtout pas faire, et ce que vous avez à y gagner. »
- Onglets : Maison en pierre | Années 50 à 90 | Années 2000 | Équipement à changer | Appartement.
- Libellés d'encart : « L'erreur qui coûte cher », « Ce que vous y gagnez ».

**Textes PROVISOIRES rédigés par Claude** (fichier source introuvable, question 51) :

| Onglet | Surtitre | Titre | Situation | L'erreur qui coûte cher | Ce que vous y gagnez |
|---|---|---|---|---|---|
| Maison en pierre | Avant 1948 | Des murs épais qui doivent respirer | Des murs en pierre de 50 cm : la maison reste fraîche l'été, mais les pièces sont longues à chauffer l'hiver. | Couvrir les murs d'un isolant étanche ou d'un enduit ciment : l'humidité reste prisonnière de la pierre, les murs se dégradent et la maison devient plus froide. | Des isolants qui laissent passer la vapeur d'eau, des combles traités, des fuites d'air colmatées : le confort revient sans abîmer le bâti. |
| Années 50 à 90 | 1950 – 1990 | Le pavillon qui chauffe la rue | Peu ou pas d'isolant, des fenêtres souvent d'origine : une grande partie de la chaleur s'échappe par le toit, les murs et les vitres. | Changer d'abord la chaudière pour une pompe à chaleur : calculée pour une maison qui fuit, elle sera trop puissante, plus chère, et fonctionnera mal une fois la maison isolée. | Isoler d'abord, puis choisir un chauffage à la taille de la maison isolée : des factures nettement plus basses et un équipement plus petit, donc moins cher. |
| Années 2000 | 2000 – 2012 | Isolée, mais pas tout à fait | La maison respecte les normes de son époque : isolation correcte, double vitrage. Mais le chauffage vieillit et consomme plus que prévu. | Croire qu'il n'y a plus rien à faire sur l'isolation, ou ajouter des équipements sans vérifier la ventilation : condensation et air intérieur dégradé. | Compléter l'isolation là où elle manque, puis passer à un chauffage et à une eau chaude plus sobres, bien dimensionnés. |
| Équipement à changer | Chaudière ou chauffe-eau en fin de vie | La panne qui oblige à décider vite | Votre chaudière ou votre chauffe-eau lâche, ou va bientôt lâcher. Il faut une solution rapidement, souvent en plein hiver. | Remplacer dans l'urgence sans regarder l'isolation : un appareil calculé sur les besoins actuels sera surdimensionné dès les premiers travaux. | Un équipement choisi en tenant compte des travaux à venir : vous ne payez pas deux fois, et vous gardez l'accès aux aides. |
| Appartement | En copropriété | Vous ne décidez pas seul | Les murs, la toiture et parfois le chauffage sont communs : une partie des travaux passe par l'assemblée générale de la copropriété. | Lancer des travaux chez vous sans savoir ce que la copropriété prévoit, ou sans l'accord nécessaire pour toucher aux fenêtres ou à la façade. | Agir dès maintenant sur ce qui vous appartient (fenêtres, ventilation, chauffage individuel, eau chaude) et préparer le reste avec le syndic. |

Mise en page et fonctionnement :
- **Onglets** :
  - fond blanc, texte doux, arrondi 10px, padding 16px 24px, hauteur mesurée de 55px ;
  - onglet actif en bleu nuit, texte blanc, soulignement orange de 3px (ombre intérieure en bas, qui suit l'arrondi) ;
  - rangée défilable au doigt sur téléphone (926px de contenu pour 375px d'écran, barre de défilement masquée, accroche sur chaque onglet).
- **Panneau** : un seul à la fois, bloc blanc.
  - À partir de 950px : 2 colonnes, l'illustration à gauche sur toute la hauteur (object-fit: cover, arrondi 10px), le contenu à droite avec 40px de marge intérieure.
  - Sous 950px : l'illustration au format 16/10 au-dessus, 24px de marge intérieure sur téléphone (question 61).
  - Contenu : surtitre, h3, situation en 1.12rem texte-doux, encart orange (fond action-50, bordure gauche orange de 4px, libellé en petites majuscules action-600), encart vert (fond vert-50, bordure gauche vert-600 de 4px, libellé vert-600).
  - Pas de lien « voir le détail ».
- **Transition** : fondu et glissement de 0,3 s (`@starting-style`), supprimée si « réduire les animations » est activé.
- **Accessibilité** : modèle d'onglets du W3C (tablist, tab, tabpanel, aria-selected). Les flèches, Début et Fin changent d'onglet, et seul l'onglet actif est dans l'ordre de tabulation.
- **Sans JavaScript** : la rangée d'onglets est masquée et les 5 panneaux s'affichent les uns sous les autres.
- Vérifié automatiquement : clic, flèche droite (avec retour au premier onglet après le dernier), affichage sans JavaScript.

### 5. Section Collectif (`Collectif.astro`, `CollectifEngagement.astro`)

- Fond bleu nuit, texte blanc. Plus aucun trait noir.
- **En haut**, en 2 colonnes à partir de 950px :
  - à gauche : surtitre « Le collectif » en orange, titre h2 « La force d'un réseau national, le sérieux d'un artisan local. », puis les 3 paragraphes d'introduction, inchangés (le 3e garde le semi-gras et la barre orange) ;
  - à droite : emplacement de `carte.jpg` au format 4/3 (vide pour l'instant).
- **Les 5 engagements** :
  - liste numérotée en 1 colonne, 2 colonnes à partir de 800px, 3 à partir de 1150px ;
  - chaque bloc a un filet `nuit-filet` en haut et en bas, avec 24px entre deux rangées ;
  - numéro « 01 » à « 05 » en orange (petit, gras), titre en graisse 900, texte en blanc à 75 % (8,79:1) ;
  - icônes supprimées.
- Titres raccourcis : « Un interlocuteur unique », « À moins de 30 minutes », « Assurés et certifiés RGE », « Un devis sans surprise », « Un suivi après le chantier ». Les textes sont inchangés. L'ordre a changé et l'intertitre visible a été retiré (question 59).
- L'animation d'apparition est conservée (fondu, 80ms d'écart).

### 6. Simulateur d'aides (couleurs seulement : logique et mise en page inchangées)

- Fond crème (au lieu du bleu nuit), sans trait noir.
- Accroche en texte foncé, en graisse 900 à partir de 768px.
- Montant en vert-600 (question 62).
- Bloc du simulateur blanc avec ombre, sans cadre noir.
- Barre de progression : fond creme-fonce, sans cadre.
- Bouton « Retour » : fond crème (au lieu du cadre bleu nuit).
- Cases de choix et champs : voir la question 58.
- Encadré de la mention obligatoire du résultat : fond crème (au lieu du cadre noir).
- Verdict « À vérifier » : bordure nuit-700 (au lieu du bleu ciel).

### 7. Header, articles, pied de page, autres pages

- **Header et méga-menu** : couleurs seulement (bleu nuit, crème au survol, texte-doux). Le trait noir de 2px sous le méga-menu est remplacé par un filet creme-fonce et une ombre.
- **Articles** (accueil) :
  - fond blanc, surtitre « Le blog », h2 « Actualités et conseils », phrase « Nos derniers guides pour réduire votre consommation d'énergie. », lien « Tous les articles → » en vert (question 63) ;
  - cartes crème sans bordure, catégorie en surtitre, titres en graisse 900.
- **Pied de page** : fond crème, plus de couleurs slate ni emerald.
- **Pages devis, blog, article, mentions légales, services** : conversion mécanique des couleurs et des arrondis (question 64).
- **Accident corrigé en cours de route** : le premier remplacement automatique a transformé `secondaire-500` en `creme0` (le motif `secondaire-50` était trouvé à l'intérieur de `secondaire-500`). Cela touchait un verdict du simulateur et `test-charte.astro`. Les deux sont corrigés et `test-charte.astro` a été restauré puis refait. Une recherche finale confirme qu'aucun nom cassé ne subsiste.

### 8. Ce qui n'a pas changé

- `SchemaMaison.astro` : **aucune modification** (vérifié avec `git diff`).
- Le Header garde sa structure, ses scripts et son méga-menu.
- La logique du simulateur (`src/scripts/`, `src/data/aides.ts`) est inchangée. Seules des chaînes de classes de couleur ont été modifiées dans `simulateur-aides.ts`.
- Les animations d'apparition (Méthode, Collectif, schéma) et les transitions du simulateur sont conservées.

### 9. Images

- `src/assets/illustrations/` est **vide** : les 7 fichiers manquent (question 52).
- `src/data/illustrations.ts` retrouve les fichiers automatiquement (`import.meta.glob`) dès qu'ils sont déposés.
- Les images sont affichées avec `<Image>` d'Astro, en WebP, aux largeurs 480, 800 et 1200 px, avec chargement différé.
- Tant qu'un fichier manque, l'emplacement est vide, sur fond creme-fonce.
- `aides.jpg` n'est placée nulle part (question 53).

### 10. Vérifications

**Hauteur des sections** (mesurée avec Chromium, animations réduites) :

| Section | 375px | 1280px |
|---|---|---|
| Hero (message, 8 solutions, schéma) | 1 216 | 880 |
| Méthode : 4 étapes | 1 592 | 719 |
| Méthode : « Vous pilotez, ou on pilote ? » | 1 064 | 596 |
| Cas types (1er onglet, sans image) | 1 300 | 1 000 |
| Simulateur (question 1) | 1 017 | 636 |
| Collectif | 2 632 | 1 342 |
| Articles | 790 | 831 |

- Aucun défilement horizontal, ni à 375px ni à 1280px, et aucune erreur dans la console.
- La hauteur des Cas types dépend de l'onglet affiché et changera avec les vrais textes et les images.
- **Bordures noires de 2px** : il n'en reste aucune dans `src/`. Les seules bordures de 2px restantes sont colorées : l'orange des pastilles du schéma et du titre de groupe du méga-menu, les verdicts du simulateur (vert, orange, nuit-700, crème), les messages de succès et d'erreur, le rouge des champs en erreur, et le cadre crème foncé ou vert des cases de choix.
- **Couleurs Tailwind par défaut** : aucune occurrence de `slate-*`, `emerald-*`, `gray-*`, `zinc-*`, `bg-white` ou `text-white` dans `src/` (le mot « slate » n'apparaît plus que dans le commentaire du Header qui les interdit).
- **Build de production** (`astro build`) : réussi, sans erreur.

**Contrastes calculés** :

| Couple | Contraste | Remarque |
|---|---|---|
| Texte / bouton orange | 6,87:1 | |
| Blanc / nuit-900 | 14,47:1 | |
| Orange / nuit-900 | 6,08:1 | |
| Texte-doux / crème | 6,48:1 | |
| Texte-doux / blanc | 7,11:1 | |
| Vert-600 / crème | 5,77:1 | |
| Vert-600 / vert-50 | 5,59:1 | |
| Blanc à 75 % / nuit-900 | 8,79:1 | |
| **Action-600 / action-50** | **2,77:1** | **insuffisant**, question 55 |

**Captures** (`captures/refonte-visuelle/`) :
- 1280px : `1280-1-hero-titre.png` à `1280-7-articles-titre.png`, une par section ;
- 375px : `375-methode-titre.png`, `375-facons-titre.png`, `375-cas-titre.png` (onglet « Années 50 à 90 » actif), `375-collectif-titre.png`, `375-articles-titre.png` et `375-page-entiere.png`.

L'en-tête collant et la barre d'outils d'Astro sont masqués sur les captures.

### 11. Fichiers

- **Créés** : `src/components/CasTypes.astro`, `src/data/cas-types.ts`, `src/data/illustrations.ts`, `captures/refonte-visuelle/`.
- **Modifiés** :
  - `src/styles/global.css`, `src/pages/index.astro`, `src/pages/test-charte.astro` ;
  - composants `Hero`, `Methode`, `MethodeEtapes`, `MethodeEtape`, `MethodeFacons`, `Collectif`, `CollectifEngagement`, `SimulateurAides`, `SimulateurQuestions`, `SimulateurEstimation`, `Header`, `ArticleList`, `Footer` ;
  - scripts `simulateur-aides.ts` et `simulateur-estimation.ts` (le second n'a eu que le changement d'arrondi) ;
  - pages `devis`, `blog/index`, `blog/[slug]`, `mentions-legales`, `services/index`.
- **Rien n'est commité** : tout se compare au commit `0b3202d`.
stop 
## Illustrations de la page d'accueil branchées (12 octobre 2026)

Tâche : brancher les 7 illustrations aux emplacements prévus, avec le composant `<Image>` d'Astro (WebP, plusieurs tailles), et un texte alternatif descriptif pour chacune. **Tâche interrompue à votre demande (« stop »), puis reprise et terminée dans la refonte « alan.com » ci-dessous** (vérifications et mesures comprises).

**Fichiers déplacés.** Les images n'étaient pas dans `src/assets/illustrations/`, contrairement à ce qu'indiquait la demande. Elles étaient dans `src/assets/menu/illustrations/`, avec l'extension `.jpeg`, à côté d'un dossier vide `accueil/`. Je les ai déplacées dans `src/assets/illustrations/` et renommées en `.jpg`, les noms attendus par le code. Le dossier vide a été supprimé. Les 7 fichiers font 1600 × 893 (format 16/9), de 650 à 765 Ko chacun.

**Placement** (identique à la demande) :

| Fichier | Emplacement |
|---|---|
| `pierre.jpg` | Cas types, onglet « Maison en pierre » |
| `annees70.jpg` | Cas types, onglet « Années 50 à 90 » |
| `moderne.jpg` | Cas types, onglet « Années 2000 » |
| `technique.jpg` | Cas types, onglet « Équipement à changer » |
| `appartement.jpg` | Cas types, onglet « Appartement » |
| `carte.jpg` | Collectif |
| `aides.jpg` | Simulateur d'aides, colonne de gauche, sous l'accroche (la proposition de la question 53) |

**Textes alternatifs** (les illustrations des cas types n'ont plus un alt vide) :

| Image | Texte alternatif |
|---|---|
| pierre | Maison ancienne en pierre aux murs épais, toit de tuiles orange et petite dépendance accolée. |
| annees70 | Pavillon des années 1970 avec garage, une partie du toit ouverte pour montrer l'isolant posé dans les combles. |
| moderne | Maison des années 2000 équipée de panneaux solaires sur le toit, d'une pompe à chaleur en façade et d'une borne de recharge. |
| technique | Chaufferie vue en coupe : l'ancienne chaudière, grisée, et le nouvel appareil de chauffage, en orange, raccordé au réseau de tuyaux. |
| appartement | Appartement vu en coupe dans un immeuble : murs isolés par l'intérieur, gaines de ventilation au plafond et fenêtre en cours de remplacement. |
| carte | Carte de France parsemée de maisons et de camionnettes d'artisans, reliées entre elles : le réseau Akelia couvre tout le territoire. |
| aides | Une maison, des piles de pièces, un dossier de demande d'aides et une facture d'énergie qui baisse. |

Les textes des cas types sont dans `src/data/cas-types.ts` (champ `alt`), les deux autres directement dans `Collectif.astro` et `SimulateurAides.astro`.

**Carte de France** : le cadre 4/3 rognait les bords de l'image et coupait la Corse. Il est passé en 16/9 (depuis remplacé par l'image en débord, voir la refonte ci-dessous).

**Poids** (mesuré après la refonte, sur le build de production) :
- Fichiers d'origine : **4,97 Mo** de JPEG au total. Ils ne sont jamais envoyés au navigateur.
- Astro produit 4 versions WebP par image (480, 800 et 1200px de large, plus une à la taille d'origine) : **871 Ko** sur le disque pour les 28 fichiers.
- **Réellement téléchargé** en parcourant toute la page d'accueil (écran de densité 1, onglet des cas types par défaut) : **86 Ko d'illustrations à 1280px** (pierre 20 Ko, aides 26 Ko, carte 39 Ko) et **35 Ko à 375px** (10 à 13 Ko par image). Sur un téléphone à écran haute densité, le navigateur choisit des versions plus grandes, d'environ 25 à 60 Ko chacune.
- Les 4 autres cas types ne se chargent qu'à l'ouverture de leur onglet (10 à 70 Ko chacun, selon l'écran).
- Toutes les images sont en chargement différé (`loading="lazy"`) : aucune n'est téléchargée avant d'approcher de l'écran.
- HTML de la page d'accueil : 101 321 octets avant, **99 948 octets** après la refonte (moins de texte, malgré le balisage des images).

**Emplacements vides** : vérifiés dans le navigateur, à 1280px et à 375px. **Aucun emplacement d'image vide.** Les 7 images s'affichent. Les seules images non chargées sont celles des onglets fermés, ce qui est voulu.


## Refonte « alan.com » de la page d'accueil (12 octobre 2026)

Principe demandé : chaque section = une couleur de fond pleine largeur + 3 lignes de texte au plus + une grande image. **Les questions ouvertes sont les n° 68 à 80** de « Questions en attente de réponse ». Les questions 50, 52, 53, 54, 59, 60, 61 et 67 sont réglées ou sans objet.

### 1. Couleurs de fond, une par section

| # | Section | Fond | Vérifié dans le navigateur |
|---|---|---|---|
| 1 | Hero | crème #f7f4ee | oui (fond des blocs internes) |
| 2 | Bandeau des 8 solutions | bleu nuit #1d2b36 | rgb(29, 43, 54) |
| 3 | Méthode (4 étapes + « Vous pilotez… ») | blanc | rgb(255, 255, 255) |
| 4 | Cas types | vert foncé #1e5c45, textes blancs | rgb(30, 92, 69) |
| 5 | Simulateur d'aides | orange pâle #fdf0e0 | rgb(253, 240, 224) |
| 6 | Collectif | bleu nuit #1d2b36 | rgb(29, 43, 54) |
| 7 | Articles | blanc | rgb(255, 255, 255) |

- **Aucune section n'a la même couleur que sa voisine** (vérifié à 1280px et à 375px). Les deux balises `<section>` de la Méthode (les étapes et « Vous pilotez… ») sont toutes deux blanches : elles forment une seule section visuelle.
- Pied de page : crème, après les articles blancs.
- Nouveau jeton `vert-800` (#1e5c45) dans `global.css`. Le crème, le bleu nuit et l'orange pâle (`action-50`) existaient déjà.

### 2. Suppressions de texte

- **Méthode** : les 4 paragraphes descriptifs sont remplacés par les phrases fournies, mot pour mot (« On regarde avant de proposer. », « L'étape qui change tout. », « Ce que votre toit peut donner. », « Le bon matériel, bien dimensionné. »). Les icônes au trait sont aussi supprimées (question 75). Les anciens textes restent dans l'historique git (commit `0b3202d`, `MethodeEtapes.astro`).
- **Cas types** : phrase de situation et surtitre de période supprimés. Chaque encart est réduit à **une phrase**. Ces textes restent des brouillons non validés (question 51).
- **Collectif** : les 2 paragraphes d'introduction et les textes des 5 engagements sont supprimés. Restent la phrase choc et les 5 titres courts, sur une ligne, séparés par des points médians (question 80). Le composant `CollectifEngagement.astro` n'avait plus d'usage : il est supprimé.

**Textes supprimés, recopiés ici pour ne pas les perdre** (`cas-types.ts` n'a jamais été commité) :

*Cas types (période · situation · piège · gain, avant réduction) :*
- **Maison en pierre** · Avant 1948 · « Des murs en pierre de 50 cm : la maison reste fraîche l'été, mais les pièces sont longues à chauffer l'hiver. » · « Couvrir les murs d'un isolant étanche ou d'un enduit ciment : l'humidité reste prisonnière de la pierre, les murs se dégradent et la maison devient plus froide. » · « Des isolants qui laissent passer la vapeur d'eau, des combles traités, des fuites d'air colmatées : le confort revient sans abîmer le bâti. »
- **Années 50 à 90** · 1950 – 1990 · « Peu ou pas d'isolant, des fenêtres souvent d'origine : une grande partie de la chaleur s'échappe par le toit, les murs et les vitres. » · « Changer d'abord la chaudière pour une pompe à chaleur : calculée pour une maison qui fuit, elle sera trop puissante, plus chère, et fonctionnera mal une fois la maison isolée. » · « Isoler d'abord, puis choisir un chauffage à la taille de la maison isolée : des factures nettement plus basses et un équipement plus petit, donc moins cher. »
- **Années 2000** · 2000 – 2012 · « La maison respecte les normes de son époque : isolation correcte, double vitrage. Mais le chauffage vieillit et consomme plus que prévu. » · « Croire qu'il n'y a plus rien à faire sur l'isolation, ou ajouter des équipements sans vérifier la ventilation : condensation et air intérieur dégradé. » · « Compléter l'isolation là où elle manque, puis passer à un chauffage et à une eau chaude plus sobres, bien dimensionnés. »
- **Équipement à changer** · Chaudière ou chauffe-eau en fin de vie · « Votre chaudière ou votre chauffe-eau lâche, ou va bientôt lâcher. Il faut une solution rapidement, souvent en plein hiver. » · « Remplacer dans l'urgence sans regarder l'isolation : un appareil calculé sur les besoins actuels sera surdimensionné dès les premiers travaux. » · « Un équipement choisi en tenant compte des travaux à venir : vous ne payez pas deux fois, et vous gardez l'accès aux aides. »
- **Appartement** · En copropriété · « Les murs, la toiture et parfois le chauffage sont communs : une partie des travaux passe par l'assemblée générale de la copropriété. » · « Lancer des travaux chez vous sans savoir ce que la copropriété prévoit, ou sans l'accord nécessaire pour toucher aux fenêtres ou à la façade. » · « Agir dès maintenant sur ce qui vous appartient (fenêtres, ventilation, chauffage individuel, eau chaude) et préparer le reste avec le syndic. »

*Nouvelles phrases des encarts (une phrase chacun, rédigées par Claude, à valider) :*

| Cas | L'erreur qui coûte cher | Ce que vous y gagnez |
|---|---|---|
| Pierre | Un isolant étanche ou un enduit ciment emprisonne l'humidité dans la pierre. | Des isolants perspirants : le confort revient sans abîmer les murs. |
| Années 50 à 90 | Installer une pompe à chaleur avant d'isoler, c'est la payer trop grosse. | Isoler d'abord, puis chauffer avec un appareil plus petit et moins cher. |
| Années 2000 | Croire que l'isolation est terminée et oublier la ventilation. | Compléter l'isolation, puis passer à un chauffage plus sobre. |
| Équipement | Remplacer dans l'urgence par un appareil trop gros une fois la maison isolée. | Un équipement choisi pour les travaux à venir : vous ne payez pas deux fois. |
| Appartement | Lancer des travaux sans savoir ce que prévoit la copropriété. | Agir sur ce qui vous appartient, et préparer le reste avec le syndic. |

*Collectif, introduction supprimée :* « Avec Akelia, vous bénéficiez du meilleur des deux mondes : la force d'un collectif national et l'engagement d'une entreprise artisanale proche de chez vous. » · « Derrière la marque Akelia, des entreprises artisanales indépendantes unissent leur savoir-faire et leurs exigences pour vous offrir un accompagnement fiable, de votre premier contact jusqu'à l'entretien de vos installations. »

*Collectif, textes des 5 engagements supprimés :*
1. Un interlocuteur unique : « Vous traitez directement avec l'artisan qui réalise vos travaux. Sur un projet qui mobilise plusieurs corps de métier, un accompagnateur du collectif coordonne l'ensemble. Dans les deux cas, une seule personne connaît votre dossier et s'engage à vos côtés. »
2. À moins de 30 minutes : « Des entreprises implantées localement, à moins de 30 minutes de votre domicile, pour privilégier la proximité, faciliter les échanges et vous apporter une réponse rapide lorsque vous en avez besoin. »
3. Assurés et certifiés RGE : « Chaque entreprise du réseau dispose de sa propre assurance décennale et de la qualification RGE requise pour les travaux concernés, afin de vous apporter des garanties concrètes et de faciliter l'accès aux aides auxquelles vous pouvez prétendre. »
4. Un devis sans surprise : « Nature des travaux, montant des aides estimées et reste à charge : vous disposez d'une vision précise du coût de votre projet avant de vous engager. Tout est expliqué, tout est écrit. »
5. Un suivi après le chantier : « Votre installation est réalisée, puis entretenue par la même entreprise. Et si une panne survient, vous savez qui contacter : votre artisan reste votre interlocuteur pour le dépannage. »

### 3. Images en débord

- Nouvelles classes `deborde-gauche` et `deborde-droite` dans `global.css`. L'image s'élargit jusqu'au bord de l'écran, puis 5rem au-delà : elle est **coupée par le bord de l'écran**, quelle que soit sa largeur. La section porte `overflow-x-clip`, qui coupe ce qui dépasse sans créer de défilement horizontal.
- Plus d'arrondi, de cadre ni d'ombre sur les images.
- **Cas types** : image à gauche, coupée par le bord gauche. 42rem de haut à partir de 950px.
- **Simulateur** : image sous l'accroche, coupée par le bord gauche, 44rem de haut à partir de 1024px. Cadrage décalé à gauche pour garder la maison entière.
- **Collectif** : carte au format 16/9 (rien n'est rogné), coupée par le bord droit.
- Sur téléphone, les images font 75 % de la largeur de l'écran en hauteur (28rem au plus).
- **Part de l'image dans la hauteur de la section** :

| Section | 1280px | 375px |
|---|---|---|
| Cas types | 51 % | 24 % |
| Simulateur | 51 % | 20 % |
| Collectif | 51 % | 24 % |

  Objectif de 50 % atteint sur ordinateur, pas sur téléphone (question 70).

### 4. Étiquettes flottantes

- Nouvelle classe `etiquette` dans `global.css` : pastille blanche, arrondi 10px, ombre douce, texte gras de 1rem.
- 2 étiquettes par image : les 5 cas types (textes fournis, dans `cas-types.ts`, champ `etiquettes`) et la carte. Elles sont à cheval sur les bords de l'image, côté texte (le côté opposé au débord) : la 1re en haut, la 2e sur le bord du bas.
- **Pas d'étiquettes sur l'image des aides** : aucune n'est fournie (question 73).
- **Chiffres à faire valider** : question 68.

### 5. Animations

- Nouveau composant `src/components/AnimationScenes.astro`, placé en tête de la page. Les styles sont dans `global.css` (« ANIMATION D'ENTRÉE DES SECTIONS »).
- Sur chaque `<section data-scene>` :
  - le titre (`data-scene-titre`) : fondu + montée de 20px, 0,5 s ;
  - l'image (`data-scene-image`) : fondu + montée de 30px, 0,5 s, 150 ms après ;
  - les étiquettes (`data-scene-etiquette`) : rebond, en dernier (à 550 ms), 100 ms d'écart entre elles.
- Déclenchement à 25 % de la section visible, ou quand la section occupe 25 % de la hauteur de l'écran (pour les sections plus hautes que l'écran du téléphone).
- **Se rejoue** à chaque passage, **seulement** si la section a complètement quitté l'écran entre-temps.
- **Réduire les animations** : le script ne fait rien et le CSS force l'état final. Rien n'est caché, rien ne bouge.
- Sans JavaScript, ou dans un navigateur sans IntersectionObserver : rien n'est caché.
- Sections animées : Méthode (les deux blocs), Cas types, Simulateur, Collectif, Articles. Le Hero et le bandeau ne le sont pas (question 79).
- L'apparition des étapes et des deux blocs « Vous pilotez… » (script de `Methode.astro`) est conservée. Celle des engagements du Collectif est supprimée avec eux.
- Changement d'onglet dans les Cas types : le panneau garde son fondu, et ses étiquettes rebondissent à nouveau.

### 6. Espace

- Nouveaux jetons `--spacing-scene` (72px) et `--spacing-scene-large` (120px), appliqués avec `py-scene md:py-scene-large` à toutes les sections, sauf exceptions :
  - la Méthode a moins d'espace entre ses deux blocs, qui forment une seule section (72px en haut des étapes, 72px en bas de « Vous pilotez… », puis 120px à partir de 768px) ;
  - le Hero passe à 120px sur ordinateur, mais garde 16px et 24px sur téléphone (question 72) ;
  - le bandeau des solutions n'est pas modifié.

### 7. Titres

- Nouveau jeton `text-titre` : `clamp(2.4rem, 5vw, 3.8rem)`, graisse 900, interligne 1.05.
- Appliqué, centré, avec `max-w-[20ch]` (20 caractères par ligne au plus) et `text-balance`, aux titres de la Méthode (les deux blocs), des Cas types et du Collectif. Les introductions sous ces titres sont aussi centrées.

### 8. Vérifications

- **Build de production** (`astro build`) : réussi, sans erreur. `astro check` n'a pas été lancé : il demande d'installer `@astrojs/check` et `typescript`, ce que je n'ai pas fait sans votre accord.
- **Navigateur** (Chromium sans interface, piloté directement, sur le build de production) :
  - aucun défilement horizontal, ni à 1280px ni à 375px ;
  - aucun emplacement d'image vide ;
  - animations : avant d'entrer à l'écran, le titre des Cas types est à opacité 0. Chaque section passe en « anime » à son arrivée. Après retour en haut de page, les sections sorties de l'écran sont remises à zéro, celles encore visibles ne le sont pas ;
  - réduire les animations : 25 éléments animables, 0 invisible.
- **Paragraphes par section** (balises `<p>` visibles, hors titres et hors texte réservé aux lecteurs d'écran) :

| Section | Paragraphes de texte | Détail | Statut |
|---|---|---|---|
| Hero | 1 | sous-titre | OK |
| Bandeau | 0 | libellés des tuiles | OK |
| Méthode | 1 + 4 phrases d'étape + 2 | introduction, 4 phrases de liste, 2 paragraphes longs dans « Vous pilotez… » | **dépasse**, question 69 |
| Cas types | 3 | introduction + 2 encarts d'une phrase (plus les libellés d'encart et les 2 étiquettes) | OK |
| Simulateur | 4 | colonne de gauche (plus les textes du simulateur) | **dépasse**, question 69 |
| Collectif | 1 | phrase choc (plus le surtitre, la ligne des engagements et les 2 étiquettes) | OK |
| Articles | 1 | introduction (plus le surtitre et les extraits des articles) | OK |

- **Hauteurs** : à 1280px, Méthode 677 + 705, Cas types 1 310, Simulateur 1 389, Collectif 1 419, Articles 911 (page de 7 411px). À 375px, Méthode 1 231 + 1 104, Cas types 1 193, Simulateur 1 403, Collectif **1 006** (contre 2 632 avant), Articles 854 (page de 8 255px).
- **Contrastes calculés** : blanc sur vert-800 7,86:1 ; blanc à 85 % sur vert-800 6,22:1 ; texte sur orange pâle 14,56:1 ; texte-doux sur orange pâle 6,34:1 ; vert-600 (montant) sur orange pâle 5,65:1 ; grands numéros orange sur blanc 2,38:1 (décoratifs, question 75). Le contour de focus des onglets et des panneaux passe au **blanc** sur le vert.
- **Captures** (`captures/refonte-alan/`) :
  - pleines pages : `1280-page-entiere.png` et `375-page-entiere.png` ;
  - une capture par section : `1280-section-1.png` à `1280-section-8.png` et `375-section-1.png` à `375-section-8.png` (1 Hero, 2 bandeau, 3 étapes, 4 « Vous pilotez… », 5 Cas types, 6 Simulateur, 7 Collectif, 8 Articles) ;
  - `mesures.json` : toutes les mesures brutes.

  Elles sont prises avec « réduire les animations » activé (tout est visible d'un coup) et l'en-tête collant remis dans le flux.

### 9. Fichiers

- **Créés** : `src/components/AnimationScenes.astro`, `captures/refonte-alan/`.
- **Déplacés** : les 7 illustrations, de `src/assets/menu/illustrations/*.jpeg` vers `src/assets/illustrations/*.jpg`.
- **Supprimé** : `src/components/CollectifEngagement.astro`.
- **Modifiés** : `src/styles/global.css`, `src/pages/index.astro`, `src/data/cas-types.ts`, et les composants `Hero`, `Methode`, `MethodeEtapes`, `MethodeEtape`, `MethodeFacons`, `CasTypes`, `SimulateurAides` et `Collectif`.
- **Rien n'est commité.**
- Le serveur de développement tourne en arrière-plan (`astro dev`, http://localhost:4321). Pour l'arrêter : `astro dev stop`.


## Ajout de 4 couleurs de fond à la charte (12 octobre 2026)

Demande : 4 teintes claires et douces pour les fonds de section pleine largeur, pour que la page ne soit plus uniformément crème. Contraintes : s'accorder avec l'orange et le bleu nuit, être nettement différentes entre elles, offrir au moins 7:1 avec le texte #16212a, sans vert sapin ni orange vif. **Rien d'existant n'a été modifié** dans la charte (orange, bleu nuit, crème, neutres). Questions ouvertes : n° 81 à 84. Les questions 77 et 78 sont sans objet.

### 1. Les 4 teintes retenues (`src/styles/global.css`, bloc `@theme`, « FONDS DE SECTION CLAIRS »)

| Nom (classe) | Code | Description | Section |
|---|---|---|---|
| `argile` (`bg-argile`) | **#f1dace** | rose terre cuite pâle, chaud | « Vous pilotez, ou on pilote ? » |
| `brume` (`bg-brume`) | **#ccdce8** | bleu ardoise pâle, froid, cousin du bleu nuit | Cas types |
| `lichen` (`bg-lichen`) | **#e0e6d0** | vert-gris pâle tirant sur le jaune (aucun rapport avec le vert sapin) | Simulateur d'aides |
| `bruyere` (`bg-bruyere`) | **#e4d8e6** | mauve grisé pâle | Articles |

**Méthode de choix** : les teintes ont été calculées dans l'espace OKLCH. Clarté de 0,885 à 0,915, saturation faible (0,024 à 0,030, donc douce), et teintes réparties autour du cercle : chaud, froid, vert-jaune, mauve. Chaque section se distingue ainsi de ses voisines par la teinte, pas seulement par la clarté.

**Contrastes calculés** (WCAG) :

| Fond | Texte #16212a | Texte-doux #4c5a64 | Bleu nuit | Vert-600 | Orange #f0920f | Blanc |
|---|---|---|---|---|---|---|
| argile #f1dace | **12,19:1** | 5,30:1 | 10,79:1 | 4,72:1 | 1,77:1 | 1,34:1 |
| brume #ccdce8 | **11,65:1** | 5,07:1 | 10,32:1 | 4,52:1 | 1,70:1 | 1,40:1 |
| lichen #e0e6d0 | **12,76:1** | 5,55:1 | 11,30:1 | 4,95:1 | 1,86:1 | 1,28:1 |
| bruyère #e4d8e6 | **11,88:1** | 5,17:1 | 10,52:1 | 4,61:1 | 1,73:1 | 1,38:1 |

- Le texte principal dépasse partout **7:1**, le minimum demandé. Le texte secondaire passe le minimum AA de 4,5:1.
- L'orange n'est jamais utilisé en texte sur ces fonds : seulement en barres décoratives et en fonds de bouton, avec du texte foncé.
- Le blanc des blocs intérieurs se détache par la clarté (1,28 à 1,40:1, à peu près comme le blanc sur le crème avant). Vérifié à l'œil sur les captures.

**Écart de couleur entre sections voisines** (distance OKLab ×100 ; pour repère, crème contre blanc = 3,3, la différence que vous trouviez trop faible) :

| Passage | Écart |
|---|---|
| Méthode (blanc) → Vous pilotez (argile) | 10,1 |
| argile → Cas types (brume) | 5,7, de chaud à froid |
| brume → Simulateur (lichen) | 5,5, de bleu à vert-jaune |
| lichen → Collectif (bleu nuit) | 63,5 |
| bleu nuit → Articles (bruyère) | 61,5 |
| bruyère → pied de page (crème) | 7,7 |

**Fond des illustrations** : elles ont toutes un fond crème d'environ #f7f1e8 (mesuré dans les fichiers). Les deux sections à grande image ont reçu des teintes qui s'en distinguent : brume à 8,3 d'écart, lichen à 5,1 (teinte nettement différente). L'argile, trop proche du crème des images (6,0, de teinte voisine), est sur la section sans image.

### 2. Attribution aux sections

| # | Section | Fond | Vérifié dans le navigateur |
|---|---|---|---|
| 1 | Hero | crème (inchangé) | fond des blocs internes |
| 2 | Bandeau des 8 solutions | bleu nuit (inchangé) | rgb(29, 43, 54) |
| 3 | Méthode | blanc | rgb(255, 255, 255) |
| 4 | Vous pilotez, ou on pilote ? | argile | rgb(241, 218, 206) |
| 5 | Cas types | brume | rgb(204, 220, 232) |
| 6 | Simulateur d'aides | lichen | rgb(224, 230, 208) |
| 7 | Collectif | bleu nuit (inchangé) | rgb(29, 43, 54) |
| 8 | Articles | bruyère | rgb(228, 216, 230) |
| — | Pied de page | crème (inchangé) | |

**Aucune section n'a la même couleur que sa voisine**, à 1280px comme à 375px.

### 3. Blocs intérieurs en blanc

- **Vous pilotez…** : le bloc de gauche passe de crème à **blanc**. Le bloc bleu nuit ne change pas.
- **Cas types** :
  - le texte du panneau (titre et deux encarts) est maintenant dans un **bloc blanc**, arrondi 10px, avec 24px de marge intérieure sur téléphone et 40px à partir de 768px ;
  - les onglets inactifs étaient déjà blancs ; l'onglet actif reste bleu nuit ;
  - les textes repassent en foncé (ils étaient blancs sur le vert) ;
  - le contour de focus repasse en bleu nuit ;
  - le filet de l'encart vert repasse au vert-600, visible sur le blanc.
- **Simulateur** : le bloc du formulaire était déjà blanc, avec une ombre.
- **Articles** : les cartes passent de crème à **blanc**. `ArticleList.astro` n'est utilisé que sur l'accueil : aucune autre page n'est touchée.
- **Les étiquettes flottantes** (blanches) restent posées sur les illustrations (crème), pas sur les fonds teintés.
- **Rien ne se confond** (vérifié sur les captures) : blocs blancs sur argile, brume, lichen et bruyère ; illustrations crème sur brume et lichen ; onglets blancs sur brume.

### 4. Autres changements

- La Méthode et « Vous pilotez… » ont maintenant chacune leurs marges complètes, car ce sont deux sections de fonds différents (question 84).
- `vert-800` n'est plus utilisé, mais il est gardé (question 82).

### 5. Vérifications

- **Build de production** (`astro build`) : réussi, sans erreur.
- **Navigateur** (build de production, Chromium) : aucun défilement horizontal, aucun emplacement d'image vide, à 1280px et à 375px.
- **Hauteurs** : page de 7 712px à 1280px et de 8 407px à 375px. Les images occupent toujours 51 % de leur section à 1280px.
- **Captures** (`captures/couleurs/`) :
  - pleines pages : `1280-page-entiere.png` (les bandes de couleur y sont nettement distinctes) et `375-page-entiere.png` ;
  - une capture par section : `1280-section-1.png` à `1280-section-8.png` et `375-section-1.png` à `375-section-8.png` ;
  - `mesures.json` : toutes les mesures brutes.

### 6. Fichiers

- **Modifiés** : `src/styles/global.css` (4 jetons ajoutés, commentaire de `vert-800`), `src/pages/index.astro`, `src/components/MethodeEtapes.astro`, `MethodeFacons.astro`, `Methode.astro`, `CasTypes.astro`, `SimulateurAides.astro` et `ArticleList.astro`.
- **Rien n'est commité.**


## Refonte du Hero (12 octobre 2026)

Questions ouvertes : n° 85 à 89. La question 66 est réglée, la question 72 mise à jour.

### 1. Fond

- **Blanc pur** (`bg-fond`). Le fond crème et le quadrillage façon papier millimétré sont supprimés.
- Vérifié dans le navigateur : fond rgb(255, 255, 255), aucune image de fond.
- Enchaînement des fonds : Hero blanc → bandeau bleu nuit → Méthode blanche. Le bandeau sépare les deux blancs.

### 2. Textes

- **Titre (h1)** : « Une maison qui consomme moins, et qui vaut plus. » (`text-display`, `max-w-[16ch]`, lignes équilibrées). Sur 3 lignes à 1280px comme à 375px.
- **Sous-titre** (l'ancien titre) : « Construire, rénover et équiper votre logement pour réduire votre consommation d'énergie et vos factures. » En taille h4, graisse normale, texte-doux (7,1:1 sur blanc).
- **Mention** : « Collectif d'artisans locaux — en direct, sans sous-traitance. » Petite taille (0.9rem), texte-doux. « sans sous-traitance. » ne se coupe pas au trait d'union.
- **Barre orange supprimée** (justification : question 86).
- La taille du titre sur téléphone passe de 1.75rem à 2.5rem (question 87).

### 3. Bouton et lien

- **Un seul bouton** : « Obtenir un devis » → `/devis`, fond orange, 56px de haut. Pleine largeur sur téléphone.
- **Lien** « Estimer mes aides » → `#simulateur-titre` :
  - texte souligné, couleur du texte, taille normale, sans fond ni cadre : nettement moins visible que le bouton ;
  - à droite du bouton à partir de 480px, dessous en dessous de 480px ;
  - 44px de haut minimum pour le doigt.
- **Ancre corrigée** : sans réglage, le titre « Estimez vos aides » arrivait sous l'en-tête collant, donc caché. L'en-tête mesure 73px jusqu'à 1279px et 122px à partir de 1280px (mesuré à 375, 768, 992, 1024, 1280 et 1440px). J'ai ajouté une marge de défilement (`scroll-mt-24`, puis `xl:scroll-mt-36`). Après un clic sur le lien, le titre s'affiche 23px sous l'en-tête (vérifié aux deux largeurs).

### 4. Schéma de la maison (`SchemaMaison.astro`)

**a) Agrandi.** À partir de 1280px, la colonne du schéma passe de 5/12 à **7/12** de la largeur : il mesure **678 × 402px** à 1280px, contre environ 490 × 280px avant, soit à peu près deux fois la surface. La légende passe sur 4 colonnes à partir de 768px (question 89).

**b) Dessin refait.** Même principe (plan technique au trait, moitié gauche ouverte en coupe), exécution reprise :
- **Perspective cohérente** : toutes les coordonnées viennent d'une seule projection oblique. La profondeur part en haut à droite. Les faces pleines (façade, pignon, toit, unités) sont remplies de blanc, ce qui masque les traits cachés.
- **Maison plus réaliste** :
  - proportions d'une maison à étage, toit à deux pans avec débords ;
  - planche de rive, faîtière, gouttière et descente, soubassement, rangs de tuiles, porte d'entrée vitrée ;
  - par la coupe : dalles d'étage et de combles en section, pignon gauche et chevrons du pan arrière vus de dessous, épaisseur du toit coupé.
- **Équipements affinés** :
  - fenêtres à double trait (dormant, deux ouvrants, vitrage, appui, linteau), dont une sur le pignon, en perspective ;
  - 6 modules photovoltaïques avec leurs cellules ;
  - caisson VMC posé sur l'isolant, avec gaines vers une bouche à l'étage et une au rez-de-chaussée, et rejet en toiture ;
  - unité extérieure de pompe à chaleur en volume (grille du ventilateur, ailettes, plots, liaisons frigorifiques) et radiateur dans le séjour ;
  - ballon d'eau chaude cerclé, avec thermostat et groupe de sécurité ;
  - borne sur pied et voiture détaillée (vitres, roues, jantes, phares).
- **Gardés** :
  - les 8 repères numérotés et leurs identifiants (`isolation-combles`, etc.) ;
  - le survol orange depuis la légende et la navigation au clavier dans la légende ;
  - les cotes, sans chiffres ;
  - les hachures d'isolation : combles, mur gauche et mur avant en coupe ;
  - les annotations « R ≥ 7 » et « local technique », agrandies à environ 16px.
- **Téléphone** : cotes et annotations masquées, repères agrandis, comme avant.
- **Texte pour les lecteurs d'écran** : mis à jour pour décrire le nouveau dessin.
- **Fabrication** : le dessin a été produit par un petit générateur Python (calcul des points), puis recopié dans le composant. On peut le retoucher à la main. L'ancien dessin reste dans git (commit `0b3202d`).
- **Charte** : les jetons « réservés à SchemaMaison » de `global.css` sont gardés (le schéma les utilise toujours). Leurs commentaires ne disent plus « à ne pas modifier ».

**c) Animation rejouée.**
- Le tracé (1,2 s) puis l'apparition des équipements (fondu, 80 ms d'écart) **se rejouent chaque fois que le schéma revient à l'écran**.
- Même règle que la Méthode : relance seulement si le schéma a **complètement** quitté l'écran entre-temps. Déclenchement à 30 % du schéma visible, ou quand il occupe 30 % de la hauteur de l'écran.
- « Réduire les animations » : rien ne bouge, tout est affiché.
- **Vérifié dans le navigateur**, aux deux largeurs :

| Étape | Résultat |
|---|---|
| Au chargement | état « anime », animation `schema-trace` en cours |
| Schéma encore en partie visible au bord de l'écran | reste « anime » : pas de relance |
| Retour sans sortie complète | pas de relance |
| Après une sortie complète | « attente » |
| Au retour | « anime » ; le tracé repart de zéro (décalage 0,986, puis 0 à la fin) ; équipements visibles |

### 5. Ordre sur téléphone (sous 1280px)

Mesuré à 375px (position depuis le haut de la page) :

| Élément | Position |
|---|---|
| Titre (avec sous-titre et mention) | 113px |
| Bouton | 464px |
| Lien | 532px |
| Schéma | 624px |
| Bandeau des 8 raccourcis | 1 075px |

L'ordre au clavier est le même. Conséquence : les raccourcis ne sont plus visibles sans défiler (question 85).

À partir de 1280px : texte à gauche, schéma à droite (centrés verticalement), bandeau dessous sur toute la largeur.

### 6. Bandeau des 8 solutions

Inchangé : fond bleu nuit, tuiles blanches, sous le Hero.

### 7. Hauteurs du Hero

| Largeur | Sans le bandeau | Bandeau | Avec le bandeau | Avant (avec le bandeau) |
|---|---|---|---|---|
| 1280px | 750px | 212px | 962px | 960px |
| 375px | 1 002px | 424px | 1 426px | 1 216px |

- Marges : 40px en haut et 48px en bas sur téléphone, 120px à partir de 768px.
- Sur téléphone, le Hero gagne 210px : le schéma et sa légende sont maintenant dans le Hero, avant le bandeau.

### 8. Vérifications

- **Build de production** (`astro build`) : réussi, sans erreur.
- **Aucun défilement horizontal** à 1280px ni à 375px. Un seul bouton orange dans le Hero.
- **Captures** (`captures/hero/`) :
  - `1280-premier-ecran.png` et `375-premier-ecran.png` : ce qu'on voit en arrivant, en-tête compris ;
  - `1280-hero-complet.png` et `375-hero-complet.png` : le Hero entier, bandeau compris ;
  - `1280-page-entiere.png` et `375-page-entiere.png` ;
  - `mesures.json` : toutes les mesures brutes.

  Les captures sont prises avec « réduire les animations » activé, donc le schéma est complet.

### 9. Fichiers

- **Modifiés** :
  - `src/components/Hero.astro` : réécrit ;
  - `src/components/SchemaMaison.astro` : dessin, script, styles et légende ;
  - `src/components/SimulateurAides.astro` : marge de défilement de l'ancre ;
  - `src/styles/global.css` : taille du display sur téléphone, commentaires ;
  - `src/pages/index.astro` : commentaire des fonds.
- **Rien n'est commité.**


## Corrections du Hero (12 octobre 2026)

Questions ouvertes : n° 90 à 94. Les questions 87 et 89 sont sans objet ou mises à jour.

### 1. Taille des textes

Deux jetons dans `src/styles/global.css` :
- **`text-display`** (titre h1) : `clamp(2.8rem, 6vw, 5rem)`, interligne 1.05, graisse 900, comme demandé. Il n'a plus de réduction à part sur téléphone : le clamp s'en charge, et le bloc « réduction mobile » ne concerne plus que le h1 standard.
- **`text-chapeau`** (nouveau, sous-titre) : `clamp(1.2rem, 1.8vw, 1.5rem)`, interligne 1.45.
- **Mention du collectif** : inchangée, 0.9rem (14,4px), texte-doux.

**Mesures** :

| | 1280px | 375px |
|---|---|---|
| Titre | 76,8px, 4 lignes, 323px de haut | 44,8px, 4 lignes, 188px de haut |
| Sous-titre | 23px, 3 lignes | 19,2px, 3 lignes |

- **Aucun débordement** du titre ni de la page, aux deux largeurs. À 375px, « consomme » tient sur la ligne.
- À 1280px, pour tenir en 4 lignes, le titre a pris la moitié de la largeur (question 91). En 5/12 (étape précédente), il faisait 5 lignes et 403px de haut.

### 2. Schéma

**b) Mur isolé à gauche : coupe refaite.** Le dessin est maintenant une vraie coupe de bâtiment (explication du choix : question 90).
- La maison est **pignon sur rue** : le faîtage part dans la profondeur.
- La moitié gauche est coupée verticalement dans le plan de la façade. La coupe montre, de bas en haut :
  - la fondation sous le mur ;
  - la dalle basse ;
  - le mur : maçonnerie et isolant extérieur hachuré ;
  - le plancher de l'étage ;
  - la dalle des combles ;
  - l'isolant des combles ;
  - le rampant du toit, épaisseur et ligne de couverture, avec son débord.
- **Le mur s'inscrit dans le volume** : l'isolant du mur monte du sol jusque sous le rampant. Le rampant repose sur le mur, et le débord de toit dépasse à l'extérieur.
- **Raccord continu** : l'isolant des combles passe sur l'arase du mur et rejoint l'isolant du mur, sans interruption. Isolation en L, comme sur un vrai détail de coupe. Les repères 1 (partie horizontale) et 2 (partie verticale) désignent chacun leur moitié du L.
- **Par la coupe**, on voit la face intérieure du mur gauche, le pignon du fond, les planchers, et le dessus de l'isolant des combles qui file vers le fond.
- **Moitié droite intacte** : façade pignon (fenêtres, porte), mur latéral (fenêtre d'étage), pan droit du toit avec les 6 modules photovoltaïques, bandeau d'égout, gouttière, faîtière, rangs de tuiles sur les deux pans.

**a) Pompe à chaleur redessinée.**
- L'unité extérieure est maintenant **face au lecteur**, posée sur plots à droite de la maison. Son ventilateur est un vrai cercle, et non plus une ellipse déformée par la perspective, ce qui la rendait floue.
- Bloc net : face avant, dessus et côté, aux mêmes épaisseurs de trait que le reste du schéma. Ventilateur circulaire avec moyeu et grille de protection (barreaux horizontaux), panneau à ailettes à droite, liaisons frigorifiques vers le mur.
- Le radiateur est à l'étage (question 94).

**Gardés** :
- les 8 repères, leurs identifiants, le survol depuis la légende et la navigation au clavier ;
- les cotes (sans chiffres) et les hachures d'isolation ;
- « R ≥ 7 », posé sur l'isolant des combles, et « local technique » ;
- l'animation de tracé, rejouée au retour à l'écran.

Le texte pour les lecteurs d'écran (`<desc>`) est mis à jour.

### 3. Bandeau des 8 solutions

- **Fond clair** : brume (#ccdce8) au lieu du bleu nuit (question 92).
- **Tuiles blanches** avec une ombre douce (`shadow-carte`).
- **Contour de focus** en bleu nuit (question 93).
- **Icônes redessinées** :
  - trait de **1.5** (au lieu de 1.75), extrémités et jonctions rondes ;
  - formes simples sur une grille de 24 × 24, même échelle optique (environ 18 × 18 au centre) ;
  - même vocabulaire : un bloc à coins arrondis par appareil, des traits courts pour les détails.

| Icône | Dessin |
|---|---|
| Isolation | maison à double paroi |
| Fenêtres et volets | fenêtre à 4 carreaux et son appui |
| Pompe à chaleur | unité arrondie avec ventilateur rond, grille et plots |
| Climatisation réversible | unité murale et 3 souffles d'air |
| Chaudière biomasse | bloc arrondi avec une flamme dans le foyer |
| Chauffe-eau | ballon en gélule avec une goutte |
| Panneaux photovoltaïques | panneau quadrillé sur pied |
| Borne de recharge | borne arrondie avec éclair, câble et prise |

### 4. Hauteurs du Hero

| Largeur | Sans le bandeau | Avec le bandeau | Étape précédente (avec le bandeau) |
|---|---|---|---|
| 1280px | 808px | 1 020px | 962px |
| 375px | 1 029px | 1 453px | 1 426px |

### 5. Vérifications

- **Build de production** (`astro build`) : réussi, sans erreur.
- **Navigateur** (build de production, Chromium) : aucun débordement horizontal ; titre et sous-titre aux tailles demandées (mesurées) ; fond du bandeau rgb(204, 220, 232) ; ombre des tuiles présente ; trait des icônes à 1.5.
- **Captures** (`captures/hero-corrections/`) :
  - `1280-hero.png` et `375-hero.png` : le Hero entier, bandeau compris ;
  - `gros-plan-schema.png` : le schéma en double résolution ;
  - `gros-plan-mur-gauche.png` : la coupe du mur gauche, du sol au rampant ;
  - `gros-plan-pompe-a-chaleur.png` : l'unité extérieure ;
  - `1280-bandeau.png` et `375-bandeau.png` : le bandeau et les nouvelles icônes ;
  - `mesures.json` : toutes les mesures brutes.

### 6. Fichiers

- **Modifiés** :
  - `src/styles/global.css` : `text-display`, nouveau `text-chapeau`, commentaires ;
  - `src/components/Hero.astro` : tailles de texte, colonnes, bandeau, icônes ;
  - `src/components/SchemaMaison.astro` : dessin, description, légende ;
  - `src/pages/index.astro` : commentaire des fonds.
- **Rien n'est commité.**

---

## Refonte de la section Méthode : schéma évolutif (13 octobre 2026)

Demande : refaire entièrement la section Méthode. Deux colonnes : les 4 étapes en onglets à gauche, un schéma de maison qui évolue à droite, le texte de l'étape active en dessous. **Les questions ouvertes sont les n° 95 à 102** de « Questions en attente de réponse ». Les textes exacts figurent dans la partie G de « Textes du simulateur d'aides et de la section Méthode ».

### 1. Ce qui a été fait

**Fond et séparateur**
- Section sur fond **blanc**.
- Séparateur avec le bandeau du Hero : **ombre intérieure douce** en haut de la section (bleu nuit à 25 %, 14px), sans trait (question 102).

**En-tête**
- Titre et introduction fournis, repris mot pour mot. Titre centré, `text-titre`, 24 caractères par ligne au plus : 3 lignes à 1280px, 5 lignes à 375px.

**Structure**
- **À partir de 1024px** : deux colonnes, **35 % / 65 %** (401px et 745px mesurés à 1280px).
- **En dessous de 1024px** : tout s'empile. D'abord les 4 étapes, puis le schéma, puis le texte.
- L'**étape 1** est active au chargement.

**Les onglets (colonne de gauche)**
- Chaque onglet montre : une **pastille numérotée**, une **icône**, le **titre**, le **sous-texte** et un **chevron dans un rond**. Pas de texte long.
- **Ligne verticale** reliant les 4 pastilles. Chaque segment se remplit (0,4s) quand l'étape du dessous est atteinte. Le segment est en dégradé, de la couleur d'une étape à celle de la suivante.
- **Indices de clic, volontairement francs** :
  - curseur « main » (vérifié : `cursor: pointer`) ;
  - chaque étape a l'aspect d'une **carte-bouton** : coins arrondis, ombre portée ;
  - **chevron** dans un rond : → à côté du schéma (grand écran), ↓ quand le schéma est en dessous ;
  - **survol marqué** : anneau épais de 3px dans la couleur de l'étape, ombre plus forte, décalage de 4px vers la droite, chevron qui se remplit de la couleur de l'étape (capture `1280-survol-etape-2.png`) ;
  - **phrase d'aide** au-dessus des onglets, avec une icône de main : « Cliquez sur une étape : le schéma change. » (« Touchez… » sur écran tactile). Ajout non demandé (question 100).
- **Inactif** : fond blanc. La couleur de l'étape n'apparaît que dans le **filet latéral** (6px) et le contour de la pastille.
- **Actif** : **fond plein** de la teinte claire de l'étape, pastille pleine, chevron sur fond bleu nuit.
- **Étapes franchies** (avant l'étape active) : pastille pleine.

**Couleurs des étapes et lien avec le schéma** (questions 95 et 96)

| Étape | Teinte claire (fond actif, surfaces du schéma) | Teinte foncée (filet, pastille, traits du schéma) |
|---|---|---|
| 1. Audit | bruyère #e4d8e6 | `bruyere-fonce` #765580 |
| 2. Isoler et ventiler | argile #f1dace | `argile-fonce` #a04e2c |
| 3. Produire | lichen #e0e6d0 | `lichen-fonce` #58682a |
| 4. S'équiper | brume #ccdce8 | `brume-fonce` #36648a |

- **Vérification automatique** : pour chaque étape, la couleur du filet de l'onglet et celle des traits du schéma ont été lues dans le navigateur. Elles sont **identiques**, pour les 4 étapes : rgb(118, 85, 128), rgb(160, 78, 44), rgb(88, 104, 42), rgb(54, 100, 138).
- Le panneau de texte, sous le schéma, reprend aussi la teinte claire et le filet foncé de l'étape active.

**Le schéma évolutif** (`src/components/MethodeSchema.astro`, nouveau fichier)
- **Un seul SVG** en ligne : la **même maison**, vue en **coupe verticale** (question 97).
  - Structure en bleu nuit : terrain, semelles, murs, dalle basse, plancher d'étage, plancher des combles, toit à deux pans avec débords.
  - Mêmes épaisseurs qu'au hero : environ 2px pour la structure, 1,5px pour les équipements, 1px pour les cotes et rappels.
- **Les éléments s'accumulent** d'un état à l'autre :
  - **État 1, audit** : cotes (largeur, hauteur des murs, hauteur du toit), caméra thermique sur trépied avec sa visée (état 1 seulement), **zones de déperdition** (hachures légères sur le toit et les murs, flèches ondulées de chaleur qui s'échappe).
  - **État 2, isoler et ventiler** : isolant continu en coupe, en L, des combles jusqu'au pied des murs. Il est rempli de la teinte argile et hachuré à 45°. S'ajoutent la VMC (caisson dans les combles, sortie en toiture), ses gaines en pointillé, une bouche à l'étage et une au rez-de-chaussée, avec des flèches de flux d'air. **Les zones de déperdition disparaissent.**
  - **État 3, produire** : 3 modules photovoltaïques quadrillés sur le pan droit du toit, le soleil, 3 rayons en pointillé vers les modules.
  - **État 4, s'équiper** : unité extérieure de pompe à chaleur (ventilateur, grille, plots), liaisons à travers le mur, radiateur au rez-de-chaussée, thermostat sur le mur du séjour (avec ses ondes), borne de recharge sur pied avec son câble.
  - *(Corrigé le même jour : la caméra et sa visée n'apparaissent qu'à l'état 1, voir « Correction : caméra thermique ».)* Les cotes restent sur les 4 états.
- **Annotations** en italique, dans la couleur de l'étape : « déperditions », « caméra thermique », « VMC », « isolant », « panneaux solaires », « pompe à chaleur », « radiateur », « thermostat », « borne ». Elles sont masquées sous 768px, comme au hero.
- **Transition** :
  - les éléments qui apparaissent : fondu de 0,4s, et leurs traits se dessinent en 0,4s (capture à mi-parcours : `1280-transition-1-vers-2.png`) ;
  - les éléments qui disparaissent : fondu de 0,4s.
  - Pas de personnage, pas d'animation en boucle.
- **Lecteurs d'écran** : le schéma a un titre et une description, mise à jour à chaque étape (4 descriptions dans `src/data/methode.ts`).

**Icônes des 4 étapes** (même style que le bandeau du Hero : grille de 24 × 24, trait 1,5, jonctions rondes, bleu nuit)

| Étape | Dessin |
|---|---|
| Audit | maison, loupe posée dessus (avec un « + »), règle graduée en bas |
| Isoler et ventiler | coupe de paroi en 3 couches (isolant en zigzag), flèche et volute de flux d'air |
| Produire | soleil rayonnant et panneau incliné quadrillé |
| S'équiper | unité de pompe à chaleur (ventilateur, grille, plots) et thermostat rond |

**Comportement**
- **Clic ou toucher** sur une étape : elle devient active, le schéma et le texte changent.
- **Clavier** : modèle d'onglets du W3C, orientation verticale. Flèches haut et bas (gauche et droite aussi), Début et Fin. Un seul onglet dans l'ordre de tabulation. Vérifié : depuis l'étape 4, ↑ active l'étape 3 ; Début ramène à l'étape 1.
- **Hauteur stable** : les 4 textes sont superposés, la section ne change pas de hauteur d'une étape à l'autre (question 101).
- **Sans JavaScript** : les onglets sont masqués. La section passe sur une colonne : le schéma à l'**état 4**, puis les 4 étapes et leurs textes les uns sous les autres, chacun dans sa couleur (`1280-sans-js.png`, `375-sans-js.png`).
- **« Réduire les animations »** : changement instantané, sans fondu ni tracé, ni glissement des cartes au survol.

**« Vous pilotez, ou on pilote ? »**
- Déjà une section indépendante sur fond argile : **non modifiée**, à traiter séparément comme demandé. Seuls les commentaires de `Methode.astro` le précisent.

### 2. Mesures

| Largeur | Hauteur de la section (avec JS) | Sans JS | Schéma |
|---|---|---|---|
| 1280px | **1 316px** | 2 237px | 745 × 466px |
| 375px | **1 692px** | 1 836px | 335 × 209px |

- La hauteur de l'ancienne section n'a pas été remesurée avant la refonte : pas de comparaison chiffrée.
- Aucun débordement horizontal aux deux largeurs.
- Aucune erreur dans la console.
- Hauteur identique aux 4 étapes.

### 3. Vérifications

- **Build de production** (`astro build`) : réussi, sans erreur.
- **Navigateur** (Chromium, build de production) : captures, mesures, clavier et couleurs. Les mesures brutes sont dans `captures/methode/mesures.json`.
- **Clic compris au premier regard ?** Oui, à mon avis, par l'accumulation d'indices : aspect de carte-bouton avec ombre, chevron dans un rond, phrase d'aide avec une main, curseur, survol très marqué. L'onglet actif se distingue nettement des autres par son fond plein. Ce jugement reste à confirmer par un test avec une ou deux personnes du public visé.
- **Captures** (`captures/methode/`) :
  - `1280-schema-etat-1.png` à `1280-schema-etat-4.png` : les 4 états du schéma ;
  - `1280-section-etape-1.png`, `1280-section-etape-4.png`, `375-section-etape-1.png`, `375-section-etape-4.png` : la section complète (pendant les captures, l'en-tête collant a été rendu statique pour ne pas recouvrir la section) ;
  - `1280-survol-etape-2.png`, `375-survol-etape-2.png` : survol d'un onglet ;
  - `1280-focus.png`, `375-focus.png` : focus clavier ;
  - `1280-transition-1-vers-2.png` : transition à mi-parcours ;
  - `1280-sans-js.png`, `375-sans-js.png` : rendu sans JavaScript.

### 4. Problèmes rencontrés et corrigés

- **Teintes claires invisibles en trait** : d'où les 4 teintes foncées ajoutées à la charte (question 95).
- **Motifs et pointes de flèche** : un motif de hachures ou une pointe de flèche SVG ne prend pas la couleur de l'élément qui l'utilise. Il y a donc un motif et une pointe par couleur d'étape.
- **Chevauchement** : un escalier et une porte intérieurs, dessinés d'abord pour lire les deux niveaux, se superposaient au radiateur et au thermostat. Ils ont été retirés.
- **Saut de page** à chaque changement d'étape, dû aux textes de longueurs différentes : corrigé par la superposition des panneaux (question 101).

### 5. Fichiers

- **Nouveaux** :
  - `src/components/MethodeSchema.astro` : le schéma évolutif ;
  - `src/data/methode.ts` : textes, couleurs, icônes et descriptions des 4 étapes.
- **Réécrits** :
  - `src/components/MethodeEtapes.astro` : la section, les onglets et leur script ;
  - `src/components/MethodeEtape.astro` : un onglet, avec la ligne verticale.
- **Modifiés** :
  - `src/styles/global.css` : 4 couleurs `…-fonce` ;
  - `src/components/Methode.astro` : commentaires seulement.
- **Rien n'est commité.**

---

## Correction : caméra thermique (13 octobre 2026)

Demande : la caméra thermique est un outil de diagnostic. Elle et sa visée n'apparaissent **que sur l'état 1** (Audit) et disparaissent dès l'état 2, en même temps que les zones de déperdition. La règle « les éléments s'accumulent » ne s'applique pas à elle. Les **cotes** restent sur les 4 états. Cela règle la question 98.

### Ce qui a été fait

- `src/components/MethodeSchema.astro` :
  - la caméra (trépied, boîtier, objectif, écran), sa visée en pointillé et l'annotation « caméra thermique » sont passées dans le groupe des zones de déperdition (`data-perte`), visible à l'état 1 seulement ;
  - les cotes restent seules dans leur groupe (`data-des="1"`), visible sur les 4 états ;
  - mêmes transitions qu'avant : fondu de 0,4s à la disparition ; en revenant à l'étape 1, la caméra réapparaît en fondu ;
  - commentaires mis à jour.
- `src/data/methode.ts` : descriptions du schéma pour les lecteurs d'écran, ajustées pour rester exactes :
  - état 2 : « La caméra thermique et les zones de déperdition ont disparu ; les cotes restent. » (au lieu de « Les zones de déperdition ont disparu. ») ;
  - état 4 : « les cotes, l'isolation, la ventilation et les panneaux sont conservés. » (au lieu de « tout ce qui précède est conservé. »).
- Sans JavaScript, le schéma reste à l'état 4 : sans caméra, avec les cotes.
- Rien d'autre n'a changé.

### Vérifications

- **Build de production** : réussi, sans erreur.
- **Contrôle automatique** (Chromium, build de production, 1280px) : opacité du groupe de la caméra, de la visée et des cotes, lue dans le navigateur à chaque état :

| État | Caméra | Visée | Cotes |
|---|---|---|---|
| 1. Audit | visible | visible | visible |
| 2. Isoler et ventiler | masquée | masquée | visible |
| 3. Produire | masquée | masquée | visible |
| 4. S'équiper | masquée | masquée | visible |
| Retour à l'état 1 | visible | visible | visible |
| Sans JavaScript (état 4) | masquée | — | visible |

- **Captures** (`captures/methode-camera/`) : `1280-schema-etat-1.png` à `1280-schema-etat-4.png`. La caméra n'est visible que sur la première. Mesures brutes : `mesures.json`.
- **Point d'attention** : la maison paraît décalée vers la gauche à partir de l'état 2 (question 103).

### Fichiers

- Modifiés : `src/components/MethodeSchema.astro`, `src/data/methode.ts`.
- **Rien n'est commité.**

---

## Animation d'entrée du schéma de la Méthode et refonte de « Deux façons de faire » (13 octobre 2026)

Deux demandes : animer le schéma de la Méthode à l'arrivée de la section ; refaire la section « Vous pilotez, ou on pilote ? », plus courte, plus légère, avec moins de texte. **Les questions ouvertes sont les n° 104 à 107** de « Questions en attente de réponse ». Les questions 84 et 96 sont mises à jour (sans objet ou inconvénient levé). Textes exacts : partie G de « Textes du simulateur d'aides et de la section Méthode ».

### Partie 1 : animation d'entrée du schéma de la Méthode

**Ce qui a été fait** (`src/components/MethodeSchema.astro`)
- Même mécanique que `SchemaMaison.astro` (hero) et `Methode.astro`.
- **Déclenchement** : 30 % de la section visible, ou la section occupe 30 % de la hauteur de l'écran (sur téléphone, la section est plus haute que l'écran).
- **Déroulé** :
  1. la maison (terrain, murs, planchers, toit) se dessine en 1,2s, comme un crayon ;
  2. les éléments de l'étape active apparaissent ensuite en fondu de 0,3s, couche par couche (120ms d'écart).
- **Rejeu** : à chaque retour de la section à l'écran, mais seulement après une sortie **complète** de l'écran. Un petit défilement au bord ne relance rien.
- **Pas de conflit avec le changement d'étape** : 2s après l'entrée, le schéma passe à l'état « fini ». Le fondu et le tracé de 0,4s du changement d'étape fonctionnent comme avant.
- **Réduire les animations, ou navigateur sans IntersectionObserver** : rien n'est caché, rien ne bouge.

**Vérifications** (Chromium, build de production, 1280px ; valeurs de `data-entree` relevées dans le navigateur)

| Moment | État |
|---|---|
| Au chargement, section hors écran | attente (dessin caché) |
| 1er passage, 250ms après l'arrivée | anime (tracé en cours) |
| 2,2s plus tard | fini |
| Défilement de 600px puis retour, sans quitter la section | fini (**pas de rejeu**) |
| Retour en haut de page (section entièrement sortie) | attente (réarmé) |
| 2e passage, 250ms après l'arrivée | anime (**rejoué**) |
| Clic sur l'étape 2 après l'entrée | tracé de 0,4s actif (`ms-trace`), puis éléments visibles |
| « Réduire les animations » | aucun attribut : dessin affiché immédiatement |

- Captures : `captures/deux-facons/schema-passage-1-a-250ms.png`, `schema-passage-1-fin.png`, `schema-passage-2-a-250ms.png` (maison en cours de tracé au 2e passage).

### Partie 2 : « Deux façons de faire » (ex-« Vous pilotez, ou on pilote ? »)

**Ce qui a été fait** (`src/components/MethodeFacons.astro`, réécrit)
- **Titre** : « Deux façons de faire ».
- **Structure** :
  - à partir de 1024px : illustration à gauche (45 %), titre puis les deux options à droite (55 %) ;
  - en dessous : titre centré, illustration, puis les deux options empilées (question 107).
- **Illustration** :
  - `travaux.png` était **déjà déposé** dans `src/assets/illustrations/` : il est affiché avec `<Image>` d'Astro, converti en WebP (480, 800 et 1200px de large) ;
  - aucun cadre, arrondi ni ombre ;
  - texte alternatif fourni, repris tel quel ;
  - le fichier a un **fond transparent** (et non blanc) : le dessin se pose directement sur le fond de la section ;
  - agrandi de 20 % pour compenser ses marges transparentes (question 106) ;
  - si le fichier venait à manquer, un emplacement vide de même proportion le remplace.
- **Options** :
  - textes courts fournis, repris sans les rallonger ; les anciens textes longs sont supprimés ;
  - la **citation domine** : `text-h3`, graisse 900, 38px à 1280px, 27px à 375px, avec la barre orange de 6px conservée à gauche ;
  - **bloc bleu nuit et cartes supprimés** : les deux options sont à égalité, séparées par un trait horizontal fin (bleu nuit à 20 %) ;
  - **liens soulignés** à la place des boutons : texte foncé semi-gras, soulignement orange de 2px (4px au survol), 44px de haut pour le doigt, contour de focus bleu nuit.
- **Fond** : **crème foncé** (`creme-fonce`, #ece7dd) à la place de l'argile (question 104). Le commentaire de `argile` dans `global.css` est mis à jour : il ne sert plus de fond de section.
- **Marges verticales réduites** à 48 et 64px (question 105).
- **Animation** (mécanisme `data-apparition` de `Methode.astro`) :
  - l'illustration, puis la citation 1, puis la citation 2 apparaissent en fondu avec une montée de 16px, en 0,5s, à **200ms d'écart**, comme un dialogue ;
  - le titre suit l'animation commune des sections ;
  - rejoué à chaque passage, après sortie complète de l'écran ;
  - rien ne bouge si « réduire les animations » est activé.
  - Capture à mi-parcours : `apres-1280-animation-350ms.png`.

**Mesures** (Chromium, build de production)

| Largeur | Avant | Après | Écart |
|---|---|---|---|
| 1280px | 777px | **680px** | −97px (−12 %) |
| 375px | 1 144px | **935px** | −209px (−18 %) |

- **Première version : 808px à 1280px, plus haute que l'ancienne.** Les marges de 2 × 120px pesaient plus que le texte supprimé, et le titre et les citations agrandies occupent de la place. D'où la réduction des marges et de l'écart entre les options. Gain final : nettement plus courte sur téléphone (−18 %), plus modérément à 1280px (−12 %).
- Aucun débordement horizontal, aucune erreur dans la console. Illustration : 619 × 344px à 1280px (dessin agrandi compris), 402 × 224px à 375px.

**Captures** (`captures/deux-facons/`) :
- `avant-1280.png`, `avant-375.png` : l'ancienne version, capturée avant modification ;
- `apres-1280.png`, `apres-375.png` : la nouvelle version ;
- mesures brutes : `mesures.json`.

### Fichiers

- **Modifiés** :
  - `src/components/MethodeSchema.astro` : animation d'entrée ;
  - `src/components/MethodeFacons.astro` : réécrit ;
  - `src/components/Methode.astro` : animation « facons » (200ms, montée) et commentaires ;
  - `src/pages/index.astro` : commentaire de la liste des fonds ;
  - `src/styles/global.css` : commentaires de `argile` et `creme-fonce`.
- **Rien n'est commité.**

---

## Refonte de la section Cas types (13 octobre 2026)

⚠️ **La demande a été reçue coupée** après « MAISON », au début du 3e cas (question 108). Tout ce qui était lisible a été fait. Les 3 derniers cas affichent des textes provisoires. **Les questions ouvertes sont les n° 108 à 113.**

### 1. Ce qui a été fait

**Fond : rupture sombre**
- Fond **bleu nuit** (`nuit-900`, #1d2b36), textes en blanc.
- Contrastes mesurés sur les couleurs réelles du navigateur et calculés :

| Élément | Couleurs | Contraste |
|---|---|---|
| Titre, introduction | blanc sur nuit-900 | 14,5:1 |
| Onglet inactif | blanc sur nuit-700 | 10,9:1 |
| Onglet inactif au survol | blanc sur nuit-filet | 9,3:1 |
| Onglet actif | texte (#16212a) sur blanc | 16,3:1 |
| Titre et textes du bloc | blanc sur nuit-700 / nuit-900 | 10,9:1 / 14,5:1 |
| Libellé « Les contraintes » | orange action-500 sur nuit-900 | 6,1:1 |
| Libellé « Ce qu'on fait à la place » | vert-clair #8fd1b0 sur nuit-900 | 8,2:1 |
| Contour de focus des onglets | blanc sur nuit-900 | 14,5:1 |

- **Bloc de contenu en nuit-700** (question 110). Les deux encarts sont en nuit-900, avec un filet de 4px à gauche (orange, puis vert clair).
- **Onglets** :
  - inactifs : fond nuit-700, texte blanc ; au survol, fond nuit-filet ;
  - actif : fond blanc, texte noir, soulignement orange de 3px ;
  - contour de focus blanc (il était bleu nuit, invisible sur ce fond).

**Titre et introduction** (fournis, repris mot pour mot)
- Titre (h2) : « Chaque maison a ses spécificités. »
- Introduction : « Une maison en pierre ne se rénove pas comme un pavillon des années 70. Nous partons de votre bâti, pas d'une méthode toute faite. »
- L'introduction est en blanc plein, comme celle du Collectif. Elle était en texte doux sur le brume.

**Les 5 onglets, renommés et réordonnés** (vérifié dans le navigateur, dans cet ordre)
1. Bâti ancien et historique (ex « Maison en pierre »)
2. Années 50 à 90
3. Maison moderne (ex « Années 2000 »)
4. Appartement (remonté)
5. Changement d'équipement (ex « Équipement à changer »)

Les identifiants techniques suivent : `bati-ancien`, `annees-50-90`, `moderne`, `appartement`, `equipement`. Les illustrations, textes alternatifs et étiquettes restent attachés à leur cas.

**Nouvelle structure de chaque cas**
- Encart « Ce que vous y gagnez » **supprimé**.
- Encart « L'erreur qui coûte cher » **remplacé** par deux encarts : « LES CONTRAINTES » et « CE QU'ON FAIT À LA PLACE ».
- Champs de `src/data/cas-types.ts` : `piege` et `gain` deviennent `contraintes` et `solution`. Un champ `provisoire` marque les textes en attente.

**Contenus**
- **Fournis, repris mot pour mot** (espaces insécables ajoutées devant « : ») :
  - Bâti ancien et historique : « Des murs qui doivent respirer » ; contraintes et solution fournies ;
  - Années 50 à 90 : « Le cas le plus simple, et le plus rentable » ; contraintes et solution fournies.
- **PROVISOIRES, rédigés par Claude** (demande coupée, question 108) :
  - **Maison moderne** — titre « Isolée, mais pas tout à fait » (ancien titre).
    - Contraintes : « L'isolation est souvent correcte, mais la ventilation est sous-dimensionnée et le chauffage reste électrique ou au gaz. »
    - Solution : « Vérifier la ventilation, compléter l'isolation là où elle manque, puis passer à un chauffage plus sobre et étudier le solaire. »
  - **Appartement** — titre « Vous ne décidez pas seul » (ancien titre).
    - Contraintes : « Les murs extérieurs, la toiture et le chauffage collectif dépendent de la copropriété. »
    - Solution : « Agir sur ce qui vous appartient (fenêtres, isolation par l'intérieur, ventilation) et préparer le reste avec le syndic. »
  - **Changement d'équipement** — titre « La panne qui oblige à décider vite » (ancien titre).
    - Contraintes : « Une chaudière en panne ne laisse pas le temps d'isoler d'abord. »
    - Solution : « Choisir un appareil dimensionné pour la maison une fois isolée : vous ne payez pas deux fois. »

**Anciens textes supprimés** (pour mémoire ; ils étaient déjà provisoires, rédigés par Claude)

| Ancien onglet | Ancien titre | « L'erreur qui coûte cher » | « Ce que vous y gagnez » |
|---|---|---|---|
| Maison en pierre | Des murs épais qui doivent respirer | Un isolant étanche ou un enduit ciment emprisonne l'humidité dans la pierre. | Des isolants perspirants : le confort revient sans abîmer les murs. |
| Années 50 à 90 | Le pavillon qui chauffe la rue | Installer une pompe à chaleur avant d'isoler, c'est la payer trop grosse. | Isoler d'abord, puis chauffer avec un appareil plus petit et moins cher. |
| Années 2000 | Isolée, mais pas tout à fait | Croire que l'isolation est terminée et oublier la ventilation. | Compléter l'isolation, puis passer à un chauffage plus sobre. |
| Équipement à changer | La panne qui oblige à décider vite | Remplacer dans l'urgence par un appareil trop gros une fois la maison isolée. | Un équipement choisi pour les travaux à venir : vous ne payez pas deux fois. |
| Appartement | Vous ne décidez pas seul | Lancer des travaux sans savoir ce que prévoit la copropriété. | Agir sur ce qui vous appartient, et préparer le reste avec le syndic. |

**Inchangé** :
- les illustrations et leur débordement à gauche (question 111) ;
- les étiquettes flottantes (question 109) ;
- les animations d'entrée et de changement d'onglet ;
- le clavier (flèches, Début, Fin) ;
- le rendu sans JavaScript (5 panneaux les uns sous les autres).

### 2. Mesures et vérifications

- **Build de production** : réussi, sans erreur.
- **Navigateur** (Chromium, build de production) : aucun débordement horizontal, aucune erreur dans la console.
- **Hauteur de la section** : 1 338px à 1280px, 1 489px à 375px. Ancienne hauteur non mesurée avant la modification.
- **Captures** (`captures/cas-types/`) :
  - `1280-onglet-1.png` à `1280-onglet-5.png` : les 5 cas à 1280px ;
  - `375-onglet-1.png` : téléphone ;
  - `1280-focus-onglet.png`, `375-focus-onglet.png` : focus clavier ;
  - mesures brutes : `mesures.json`.

### 3. Fichiers

- **Modifiés** :
  - `src/data/cas-types.ts` : ordre, libellés, nouveaux champs, textes ;
  - `src/components/CasTypes.astro` : fond, titre, introduction, onglets, bloc, encarts, commentaires ;
  - `src/styles/global.css` : nouvelle couleur `vert-clair`, commentaires de `brume` et `vert-800` ;
  - `src/pages/index.astro` : commentaire de la liste des fonds.
- **Rien n'est commité.**

---

## État des lieux des illustrations (13 octobre 2026)

Demande : lister les fichiers de `src/assets/illustrations/` et les références du code, et repérer celles qui pointent vers un fichier absent. **Aucune correction faite**, à la demande. Question ouverte : n° 114.

### Fichiers présents dans `src/assets/illustrations/`

| Fichier | Taille | Date |
|---|---|---|
| `aides.jpg` | 765 Ko | 12 oct. 18:28 |
| `annees70.png` | 489 Ko | 13 oct. 14:45 |
| `appartement.png` | 581 Ko | 13 oct. 14:45 |
| `moderne.png` | 557 Ko | 13 oct. 14:45 |
| `pierre.png` | 600 Ko | 13 oct. 14:45 |
| `technique.png` | 506 Ko | 13 oct. 14:45 |
| `travaux.png` | 679 Ko | 13 oct. 14:14 |

Le dossier n'est pas suivi par git : impossible de retrouver l'historique des fichiers. En début de séance, il contenait `pierre.jpg`, `annees70.jpg`, `moderne.jpg`, `technique.jpg`, `appartement.jpg` et `carte.jpg`. Les 5 premiers ont été remplacés par des `.png` à 14:45 ; `carte.jpg` a disparu.

### Références dans le code

Toutes passent par `illustration(nom)` (`src/data/illustrations.ts`), qui cherche le nom EXACT, extension comprise.

| Fichier du code | Ligne | Nom référencé | Existe ? |
|---|---|---|---|
| `src/data/cas-types.ts` (Bâti ancien et historique) | 55 | `pierre.jpg` | ❌ non (il y a `pierre.png`) |
| `src/data/cas-types.ts` (Années 50 à 90) | 65 | `annees70.jpg` | ❌ non (il y a `annees70.png`) |
| `src/data/cas-types.ts` (Maison moderne) | 77 | `moderne.jpg` | ❌ non (il y a `moderne.png`) |
| `src/data/cas-types.ts` (Appartement) | 89 | `appartement.jpg` | ❌ non (il y a `appartement.png`) |
| `src/data/cas-types.ts` (Changement d'équipement) | 101 | `technique.jpg` | ❌ non (il y a `technique.png`) |
| `src/components/Collectif.astro` | 44 | `carte.jpg` | ❌ non (aucun fichier « carte ») |
| `src/components/SimulateurAides.astro` | 33 | `aides.jpg` | ✅ oui |
| `src/components/MethodeFacons.astro` | 35 | `travaux.png` | ✅ oui |

- Le commentaire d'en-tête de `src/data/illustrations.ts` (lignes 4 à 6) liste encore les anciens noms en `.jpg` et `carte.jpg`.
- **Conséquence** : pas d'erreur de build. `illustration()` renvoie « rien » et le composant affiche un emplacement vide :
  - les 5 cas types : emplacement crème foncé, sans image ;
  - la carte du Collectif : rien du tout (`{carte && …}`), mais les 2 étiquettes flottantes restent affichées seules.
- **Fichiers orphelins** : les 5 `.png` des cas types ne sont référencés nulle part (seulement sous leur ancien nom en `.jpg`).

### Hors du dossier des illustrations (vérifié au passage)

- `src/components/Header.astro` : 10 images de `src/assets/menu/`, toutes présentes.
- `src/content/blog/comprendre-pompe-a-chaleur.md` : `./pompe-a-chaleur.jpg`, présent.
- `src/layouts/Layout.astro`, ligne 24 : image de partage par défaut `/images/og-default.jpg`. **Absente** (`public/images/` n'existe pas) : ce n'est pas une illustration de la page, mais les aperçus de lien (réseaux sociaux, messageries) pointent vers un fichier introuvable.
- `public/favicon.svg` : présent.

---

## Correction des références aux illustrations (13 octobre 2026)

Suite de l'état des lieux (question 114, désormais réglée). **Questions ouvertes : n° 115 à 117.**

### 1. Ce qui a été fait

**Références des cas types** (`src/data/cas-types.ts`)
- Les 5 images passent en `.png` : `pierre.png`, `annees70.png`, `moderne.png`, `appartement.png`, `technique.png`.
- Le commentaire d'en-tête de `src/data/illustrations.ts` est mis à jour :
  - liste des fichiers réels ;
  - `carte.png` attendue ;
  - rappel : le nom doit correspondre exactement, extension comprise.

**Carte du Collectif** (`src/components/Collectif.astro`)
- Le code attend maintenant `carte.png`.
- **Tant que le fichier est absent, tout le bloc de la carte est omis** : ni image, ni emplacement crème, ni les deux étiquettes flottantes. La section se termine après la ligne des engagements.
  - Vérifié dans le navigateur, à 1280px et à 375px : 0 étiquette, 0 image, 0 bloc crème.
  - Hauteur de la section : 646px à 1280px, 706px à 375px.
- Quand `carte.png` sera déposée, le bloc réapparaîtra **avec les proportions du nouveau fichier**, lues automatiquement (avant : 16/9 fixe, celui de l'ancienne carte). Les étiquettes reviendront avec lui.
- ⚠️ Le texte alternatif décrit l'ancienne carte (« Carte de France parsemée de maisons et de camionnettes d'artisans… ») : à revoir avec la nouvelle.

**Image de partage** : signalée, non corrigée (question 117).

### 2. Vérification du style des nouveaux PNG sur le bleu nuit

**Mesures sur les fichiers** (réduits à 400px de large) :

| Fichier | Taille | Pixels transparents |
|---|---|---|
| `pierre.png` | 2752 × 1536 | 78 % |
| `annees70.png` | 2752 × 1536 | 79 % |
| `moderne.png` | 2752 × 1536 | 78 % |
| `appartement.png` | 2752 × 1536 | 83 % |
| `technique.png` | 2752 × 1536 | 87 % |

Ce sont bien des fonds **transparents**, pas blancs. Mais les traits ont un **halo blanc** et les surfaces des bâtiments sont **remplies de blanc**.

**Constats** :
1. **Lisibilité des traits** : aujourd'hui, ils sont lisibles **uniquement grâce au fond crème foncé du cadre**, prévu pour l'emplacement vide, qui passe derrière le PNG transparent.
   - Sans ce fond, le dessin à l'encre bleu nuit ne disparaît pas : les halos et les remplissages blancs le détachent. Mais il apparaît « en négatif », avec des taches blanches floues.
   - Détail et solutions : question 115.
2. **Débordement à gauche** : il fonctionne visuellement. On voit un rectangle crème coupé par le bord gauche de l'écran, comme une feuille de plan posée sur le bleu nuit.
3. **Rognage** : 43 % de la largeur de chaque dessin est coupé, à cause du cadre presque carré (question 116).
4. **Étiquettes flottantes blanches** : lisibles sur les 5 cas (texte noir sur blanc, ombre portée). Elles se détachent du bleu nuit comme du crème.

### 3. Vérifications

- **Build de production** : réussi, sans erreur.
- **Les 5 onglets à 1280px** : chaque image se charge (`img.complete`, largeur réelle 768px, versions WebP générées).
  - `cas-panneau-bati-ancien` → `pierre…webp` ✅
  - `cas-panneau-annees-50-90` → `annees70…webp` ✅
  - `cas-panneau-moderne` → `moderne…webp` ✅
  - `cas-panneau-appartement` → `appartement…webp` ✅
  - `cas-panneau-equipement` → `technique…webp` ✅
  - **Aucun emplacement vide.**
- **Captures** (`captures/illustrations/`) :
  - `1280-cas-1.png` à `1280-cas-5.png` : les 5 cas types ;
  - `375-cas-1.png` : téléphone ;
  - `1280-collectif.png`, `375-collectif.png` : le Collectif sans carte ;
  - simulations, **non appliquées** : `simulation-sans-fond-cas-1.png` et `-4.png`, `simulation-inverse-cas-1.png` et `-4.png`, `simulation-proportions-cas-1.png` ;
  - mesures brutes : `mesures.json`, `transparence.json`.

### 4. Fichiers

- **Modifiés** :
  - `src/data/cas-types.ts` : 5 extensions ;
  - `src/data/illustrations.ts` : commentaire d'en-tête ;
  - `src/components/Collectif.astro` : `carte.png`, bloc conditionnel, proportions lues dans le fichier, commentaires.
- **Rien n'est commité.**

---

## Corrections de la section Cas types (13 octobre 2026)

**Questions ouvertes : n° 118 à 122.** Réglées ou sans objet : 108 à 112, 115, 116. La 113 (`vert-clair`) reste ouverte.

### 1. Ce qui a été fait

**Couleur de fond : PRUNE** (#3d2c40, nouvelle couleur `prune` dans `global.css`) (question 118)
- Le bleu nuit est abandonné.
- Les nuances de la section sont **dérivées de la seule teinte de fond** (variables CSS dans `CasTypes.astro`) : changer `--cas-fond` suffit à tout recolorer.
  - bloc de contenu et onglets inactifs : fond + 8 % de blanc ;
  - survol des onglets : + 16 % de blanc ;
  - encarts : fond + 25 % de noir.
- **Contrastes mesurés** sur les couleurs affichées par le navigateur :

| Élément | Contraste |
|---|---|
| Texte blanc sur le fond (titre, introduction) | 12,9:1 |
| Texte blanc sur le bloc et les onglets inactifs | 10,3:1 |
| Texte blanc sur un onglet survolé | 8,2:1 |
| Texte blanc dans les encarts | 16,7:1 |
| Libellé orange « Les contraintes » | 7,0:1 |
| Libellé vert clair « Ce que l'on fait » | 9,5:1 |
| Bloc contre le fond (différence de teinte) | 1,25:1 |

- **Teintes essayées**, sur le vrai rendu : prune, moka, brique, aubergine. Captures dans `captures/cas-types-fond/`.

**Étiquettes flottantes : supprimées** (balisage et champ `etiquettes` de `src/data/cas-types.ts`). La classe `etiquette` de `global.css` reste : elle sert à la carte du Collectif.

**Illustrations**
- **Plus de débordement à gauche** : l'image reste dans la grille.
- **Taille divisée par deux** : 573 × 320px à 1280px, contre un cadre de 688 × 672px avant.
- **Dessin entier** : il garde ses proportions (2752 × 1536). Les 43 % rognés auparavant sont visibles.
- **Fond transparent** utilisé : les PNG le sont bien (78 à 87 % de pixels transparents, mesurés à l'étape précédente). Plus de fond crème derrière, ni de cadre.
- **Lisibilité sur la prune** : voir la question 120. Les dessins se lisent grâce à leurs halos blancs, pas grâce à leur encre.
- **Textes alternatifs réécrits** d'après les nouveaux dessins : ils décrivaient les anciens JPEG.

**Renommages**
- 3e cas : onglet « Années 1995 à 2012 », titre « Isolée, mais pas performante » ; identifiant `annees-1995-2012`. Le dessin ne correspond pas (question 122).
- 4e cas : titre « Ce que vous pouvez décider seul ».
- 5e cas : titre « Ne pas figer quinze ans d'erreur ».
- 2e encart : « CE QUE L'ON FAIT ».

**Textes étoffés** (3 à 4 phrases par encart). Textes exacts, extraits du fichier de données :

**1. Bâti ancien et historique** — « Des murs qui doivent respirer » (`pierre.png`)
- Les contraintes — *fourni* : « Souvent en secteur protégé : l'isolation par l'extérieur est refusée par les Bâtiments de France. Et un mur ancien, pierre ou brique, évacue l'humidité à travers son épaisseur. » — **ajouté par Claude, à valider** : « Sans fondations étanches, l'eau du sol remonte souvent dans le bas des murs. Les menuiseries, les enduits et la toiture sont, eux aussi, soumis à l'avis de l'architecte des Bâtiments de France. »
- Ce que l'on fait — *fourni* : « Isolation par l'intérieur en matériaux perspirants, après diagnostic d'humidité. Jamais de polystyrène ni d'enduit ciment, qui emprisonnent l'eau dans le mur. » — **ajouté par Claude, à valider** : « Fibre de bois, chanvre et chaux, ou liège : ces isolants laissent passer la vapeur d'eau tout en gardant la chaleur. À l'extérieur, les enduits sont refaits à la chaux et les fenêtres remplacées dans le respect du style d'origine, pour obtenir l'accord des Bâtiments de France. »
- Texte alternatif *(rédigé par Claude, d'après le dessin)* : « Dessin au trait d'une maison ancienne en pierre, au toit de tuiles et aux volets de bois, prolongée par un mur et un portail en arc. »

**2. Années 50 à 90** — « Le cas le plus simple, et le plus rentable » (`annees70.png`)
- Les contraintes — *fourni* : « Peu ou pas d'isolant, menuiseries d'origine, pas de ventilation mécanique. Rien de bloquant techniquement. » — **ajouté par Claude, à valider** : « Avant la première réglementation thermique, en 1974, les murs en parpaing ou en brique creuse étaient souvent montés sans aucun isolant. Le chauffage d'origine, au fioul, au gaz ou par convecteurs électriques, arrive souvent en bout de course. »
- Ce que l'on fait — *fourni* : « Combles, murs, menuiseries, ventilation, puis chauffage. Dans cet ordre : une pompe à chaleur posée sur une maison qui fuit sera trop grosse et ne tiendra pas ses promesses. » — **ajouté par Claude, à valider** : « Les murs s'isolent le plus souvent par l'extérieur, ce qui traite la plupart des ponts thermiques sans réduire la surface habitable. Une ventilation mécanique adaptée évite ensuite que la maison, devenue étanche, ne garde l'humidité. »
- Texte alternatif *(rédigé par Claude, d'après le dessin)* : « Dessin au trait d'un pavillon avec garage, toit ouvert sur la charpente, échafaudage, échelle et rouleaux d'isolant au pied du mur. »

**3. Années 1995 à 2012** — « Isolée, mais pas performante » (`moderne.png`)
- Les contraintes *(fourni)* : « L'isolation d'origine respecte les normes de son époque, mais elle est loin des exigences actuelles. La ventilation est souvent sous-dimensionnée, voire absente dans les premières années. Le chauffage, gaz ou électrique, arrive en fin de vie. Et l'étanchéité à l'air n'était pas encore un sujet sur cette génération. »
- Ce que l'on fait *(fourni)* : « On commence par mesurer ce qui manque réellement, plutôt que de refaire ce qui tient encore. Un renfort des combles coûte peu et rapporte beaucoup sur ces maisons. On remet la ventilation à niveau, puis on remplace le chauffage fossile par une pompe à chaleur, qui sera bien dimensionnée puisque le bâti est correct. Le photovoltaïque vient ensuite, calculé sur vos besoins futurs. »
- Texte alternatif *(rédigé par Claude, d'après le dessin)* : « Dessin au trait d'une maison à toit plat, avec des panneaux solaires en cours de pose, une pompe à chaleur au pied de la façade et une borne de recharge. »

**4. Appartement** — « Ce que vous pouvez décider seul » (`appartement.png`)
- Les contraintes *(fourni)* : « La façade, la toiture et les colonnes de ventilation sont des parties communes : toute intervention passe par l'assemblée générale. Une pompe à chaleur avec unité extérieure est rarement acceptée, pour des raisons d'aspect et de bruit. Et si le chauffage est collectif, vous ne décidez pas de votre installation. »
- Ce que l'on fait *(fourni)* : « On traite d'abord ce qui relève de vous seul : isolation par l'intérieur des murs donnant sur l'extérieur, remplacement des menuiseries si le règlement le permet, et ventilation. Quand la colonne commune ne peut pas être modifiée, on pose une VMC double flux compacte dans le logement, avec des sorties courtes en façade. Cette solution reste un second choix : si une rénovation globale de l'immeuble est envisageable, elle sera toujours plus efficace et moins coûteuse. »
- Texte alternatif *(rédigé par Claude, d'après le dessin)* : « Dessin au trait d'un appartement vu de dessus, cloisons ouvertes : isolant posé contre un mur, fenêtre déposée, panneaux d'isolant et outils au sol. »

**5. Changement d'équipement** — « Ne pas figer quinze ans d'erreur » (`technique.png`)
- Les contraintes *(fourni)* : « Une chaudière qui lâche en plein hiver ne laisse pas le temps d'isoler d'abord. Et une pompe à chaleur décevante est rarement défaillante : elle est surdimensionnée, mal réglée, ou raccordée à des radiateurs incompatibles avec une basse température. Ce que vous installez maintenant restera quinze ans. »
- Ce que l'on fait *(fourni)* : « On diagnostique l'existant avant de chiffrer quoi que ce soit : dimensionnement, réglages, émetteurs, état de l'isolation. Si un réglage suffit, on vous le dit, même quand ça nous fait perdre une vente. Si le remplacement s'impose, l'appareil est calculé sur la maison telle qu'elle sera après travaux, pas telle qu'elle est aujourd'hui. »
- Texte alternatif *(rédigé par Claude, d'après le dessin)* : « Dessin au trait d'une chaufferie : ancienne chaudière, ballon d'eau chaude, pompe à chaleur, tuyauterie en cuivre et outils posés au sol. »

### 2. Mesures et vérifications

- **Build de production** : réussi, sans erreur. Aucun débordement horizontal, aucune erreur dans la console.
- **Les 5 onglets à 1280px**, vérifiés un par un dans le navigateur :
  - bon libellé et bon titre ;
  - libellés « Les contraintes » et « Ce que l'on fait » ;
  - image chargée, 573 × 320px ;
  - 0 étiquette.
- **Hauteur de la section** (elle varie selon l'onglet, question 121) :

| Onglet | 1280px | 375px |
|---|---|---|
| 1. Bâti ancien et historique | 1 458px | 1 899px |
| 2. Années 50 à 90 | 1 458px | 1 836px |
| 3. Années 1995 à 2012 | 1 395px | 1 773px |
| 4. Appartement | 1 458px | 1 899px |
| 5. Changement d'équipement | 1 364px | 1 710px |

- Pour comparaison, la version précédente (bleu nuit, grande image, textes courts) faisait 1 338px à 1280px et 1 489px à 375px. La section est donc **plus haute** qu'avant, malgré l'image réduite de moitié : les textes ont doublé ou triplé de longueur.
- **Lisibilité des illustrations sur le nouveau fond** : traits clairs nets sur les 5 cas, avec des défauts (question 120). Sur téléphone, le dessin est petit : environ 200px de large utiles dans une image de 335 × 187px, à cause des marges transparentes du PNG.
- **Captures** (`captures/cas-types-prune/`) :
  - `1280-cas-1.png` à `1280-cas-5.png` ;
  - `375-cas-1.png` ;
  - mesures brutes : `mesures.json`.

### 3. Fichiers

- **Modifiés** :
  - `src/data/cas-types.ts` : textes, renommages, alternatives, suppression des étiquettes ;
  - `src/components/CasTypes.astro` : couleurs dérivées, illustration dans la grille, libellé d'encart, commentaires ;
  - `src/styles/global.css` : nouvelle couleur `prune`, commentaire de `vert-clair` ;
  - `src/pages/index.astro` : commentaire de la liste des fonds.
- **Rien n'est commité.**

## Raccourcis du Hero sous le schéma et bandeau « Comment ça se passe ? » (14 octobre 2026)

**Questions ouvertes : n° 123 à 134** (« Questions en attente de réponse »). ⚠️ Bloquant pour le rendu final : la vidéo n'existe pas (question 130).

### 1. Ce qui a été fait

**Partie 1 : Hero**

*1.1 Déplacement des raccourcis*
- Le bandeau pleine largeur des raccourcis (fond brume), sous le Hero, est **supprimé**.
- Les raccourcis sont **dans le Hero, sous le schéma**, dans la colonne de droite.
- Ils ont un titre : « Par où voulez-vous commencer ? » (balise h2, 20px, gras).
- Sous le titre, une phrase d'aide qui change selon l'appareil (question 128) :
  - souris : « Survolez une solution pour la voir sur le schéma. » ;
  - écran tactile : « Touchez une solution pour la voir sur le schéma, touchez-la à nouveau pour ouvrir sa page. »

*1.2 Forme des raccourcis*
- Icône au trait à gauche (les icônes de l'ancien bandeau), libellé à droite.
- Fond clair : brume à 45 %, avec un filet brume et des coins arrondis.
- Hauteur : **58px** mesurés (minimum fixé à 48px, au-delà des 44px demandés).
- Disposition :
  - téléphone : 2 colonnes ;
  - tablette (768 à 1279px) : 4 colonnes, le schéma y occupe toute la largeur ;
  - grand écran (1280px et plus) : 3 colonnes.
- Survol, focus clavier ou toucher : fond orange pâle et anneau orange, comme l'équipement allumé sur le schéma.
- Focus clavier : contour bleu nuit en plus.
- Téléphone : icône de 20px et marges resserrées. « photovoltaïques » tient ainsi entier sur une ligne à 375px (au premier essai, le mot était coupé en « photovol-taïques »).

*1.3 « Rénovation globale »*
- Lien : `/solutions/renovation-energetique-globale`, **en premier**.
- Fond bleu nuit, texte blanc, icône orange (une maison avec une coche), mention « L'offre complète ».
- Pleine largeur sur téléphone et tablette ; une case comme les autres sur grand écran, pour garder une grille 3 × 3 sans trou (question 124).

*1.4 Interaction avec le schéma*
- Le survol, le focus clavier ou le toucher d'un raccourci allume le ou les équipements correspondants **en orange, trait doublé** :

| Raccourci | Équipements allumés |
|---|---|
| Rénovation globale | **tous**, avec la pompe à chaleur parmi les trois chauffages |
| Isolation | isolation des combles + isolation des murs |
| Fenêtres et volets | menuiseries |
| Pompe à chaleur | pompe à chaleur (qui apparaît) |
| Climatisation réversible | climatisation (qui apparaît) |
| Chaudière biomasse | chaudière biomasse (qui apparaît) |
| Chauffe-eau | chauffe-eau |
| Panneaux photovoltaïques | panneaux photovoltaïques |
| Borne de recharge | borne de recharge |

- La ventilation n'a pas de raccourci : elle ne s'allume qu'avec « Rénovation globale » (question 125).
- **Écran tactile** :
  - un premier toucher allume l'équipement sans ouvrir le lien ;
  - un second toucher sur le même raccourci ouvre la page ;
  - toucher un autre raccourci allume l'autre ;
  - toucher ailleurs éteint le schéma.
  - Souris, stylet et clavier ouvrent le lien dès le premier clic.
- **Effet sur la navigation (vérifié)** :
  - le script n'intercepte que le clic. Il ne touche jamais au début du toucher, donc il **ne peut pas bloquer le défilement** ;
  - un retour arrière depuis la page ouverte remet le schéma au repos ;
  - risque à vérifier pour les lecteurs d'écran sur mobile : question 131.
- Mécanisme :
  - le Hero pose l'attribut `data-allume` sur le schéma, avec les identifiants des équipements, ou « tout » ;
  - le schéma réagit en CSS ;
  - chaque raccourci porte la liste de ses équipements (champ `equipements` du tableau `raccourcis` de `Hero.astro`).
- Sans JavaScript : les liens fonctionnent normalement et le schéma reste au repos.

*1.5 Équipements masqués par défaut*
- **Deux équipements dessinés** dans `SchemaMaison.astro` :
  - **climatisation réversible** :
    - unité extérieure compacte (un ventilateur, une grille), au même endroit que celle de la pompe à chaleur, puisque les deux ne sont jamais affichées ensemble ;
    - ses liaisons vers la maison ;
    - une unité murale (split) à l'étage, avec trois souffles d'air ;
  - **chaudière biomasse** à granulés, dans le local technique :
    - bandeau de commande, porte vitrée avec une flamme, tiroir à cendres ;
    - conduit de fumée qui traverse les planchers et sort au-dessus du toit, avec son chapeau ;
    - radiateur à l'étage, le même que celui de la pompe à chaleur.
- **Pompe à chaleur, climatisation et biomasse sont masquées par défaut.** Au survol de son raccourci, chacune apparaît seule ; les deux autres restent masquées (vérifié dans le navigateur, voir les mesures).
- Les **sept** autres équipements restent visibles en permanence (question 126).
- **Légende numérotée sous le schéma : supprimée**, avec sa navigation au clavier par flèches. Les raccourcis la remplacent.
- Repères : les cercles numérotés sont devenus des pastilles orange pleines (question 127).
- La description du schéma pour les lecteurs d'écran est réécrite (question 128).

*1.6 Le collectif en surtitre*
- « Collectif d'artisans locaux — en direct, sans sous-traitance. » est passé **au-dessus du h1**, aligné à gauche.
- Style mesuré : **19,2px (1.2rem), graisse 700**, contre 14,4px en graisse normale avant.
- **Couleur : orange foncé action-600** (#d17f08), pas action-500. L'orange des boutons n'atteint que 2,4:1 sur le blanc ; action-600 atteint 3,1:1 (question 123).

*Autre réglage*
- Grand écran : marges verticales du Hero ramenées de 120 à 64px.
- Avec 120px, la dernière rangée de raccourcis passait sous le bas d'un écran de 1280 × 900. Elle finit maintenant à 849px : le Hero entier, raccourcis compris, tient dans le premier écran.

**Partie 2 : bandeau « Comment ça se passe ? »** (nouveau composant `CommentCaMarche.astro`)

*Contenu*
- Placé juste après le Hero, à la place de l'ancien bandeau des solutions.
- Titre « Comment ça se passe ? » et les 3 étapes, **textes fournis repris mot pour mot** :
  1. « Vous nous contactez » — « Un formulaire en ligne ou un appel. Vous décrivez votre projet, même vaguement : on est là pour le préciser avec vous. »
  2. « L'artisan Akelia le plus proche de chez vous vous contacte » — « Sous 24 heures. C'est une entreprise du collectif implantée dans votre secteur qui vous rappelle, pas un centre d'appel. Vos coordonnées ne sortent jamais du réseau : aucun démarchage, aucune revente. »
  3. « Il vient chez vous et chiffre les travaux » — « Visite sur place gratuite, puis un devis détaillé : nature des travaux, aides estimées, reste à charge. »
- Pastilles numérotées : cercle blanc cerclé d'orange, chiffre bleu nuit. Un filet orange clair relie les pastilles.
- Les lecteurs d'écran entendent « Étape 1 : … ».

*Disposition*
- À partir de 1024px : vidéo à gauche ; titre et étapes à droite.
- En dessous : titre, vidéo, puis étapes.

*Vidéo*
- Balise `<video>` avec `autoplay muted loop playsinline`, `preload="metadata"` et un `poster` (image fixe).
- Sources : WebM d'abord (plus léger), MP4 ensuite.
- Décorative : masquée aux lecteurs d'écran, les étapes disent tout.
- « Réduire les animations » activé :
  - la vidéo est masquée par CSS et l'image fixe affichée à sa place, même sans JavaScript ;
  - un petit script la met en pause et coupe son préchargement ;
  - si le réglage change pendant la visite, le site suit.
- Fichiers attendus dans `public/videos/` : `comment-ca-marche.webm`, `comment-ca-marche.mp4`, `comment-ca-marche.jpg`.
- **Ces fichiers n'existent pas.** La présence des trois est vérifiée à la construction du site ; sans eux, un **emplacement vide** 4:3 (blanc à 50 %) est affiché. Il suffit de les déposer et de reconstruire (question 130).

*Fond : argile (#f1dace)*. Justification :
- **Il tranche** avec les deux fonds blancs qui encadrent la section (Hero et Méthode) : c'est une teinte pleine, pas un blanc cassé.
- **Il est chaud.** La section parle de contact humain et de proximité, et doit recevoir des personnages illustrés. Le rose terre cuite le dit mieux qu'un bleu ou un vert.
- **Il n'est le fond d'aucune autre section** : rien ne fait doublon avec le crème foncé, la prune, le lichen, le bleu nuit ou la bruyère plus bas.
- **Il accompagne l'orange de la marque** (pastilles, bouton) sans le concurrencer.
- **Lisibilité** : texte 12,2:1 ; texte secondaire 5,3:1.
- Candidat écarté : la brume, plus froide (question 129).

**Ordre et fonds de la page d'accueil** (commentaire de `index.astro` mis à jour) :
1. Hero : blanc ;
2. **Comment ça se passe ? : argile** ;
3. Méthode : blanc ;
4. Deux façons de faire : crème foncé ;
5. Cas types : prune ;
6. Simulateur : lichen ;
7. Collectif : bleu nuit ;
8. Articles : bruyère.

### 2. Mesures et vérifications

- **Build de production** : réussi, sans erreur.
- **Navigateur** (Chromium, build de production, animations réduites) :
  - aucun débordement horizontal ;
  - aucune erreur dans la console.
  - `astro check` n'a pas été lancé : il demande l'installation d'un paquet supplémentaire (`@astrojs/check`), non installé.

| Mesure | 1280px | 375px |
|---|---|---|
| **Hauteur du Hero** | **791px** | **1 254px** |
| **Hauteur du bandeau « Comment ça se passe ? »** | **773px** | **1 195px** |
| Schéma | 581 × 344px | 335 × 198px |
| Raccourcis | 186px de large ; 78px de haut (1re rangée) et 58px | 58px de haut (9 sur 9) |
| Bas de la dernière rangée de raccourcis | 849px (écran : 900px) | 1 279px (écran : 812px) |
| Surtitre | 19,2px, 700, rgb(209, 127, 8), au-dessus du titre | idem |

- Pour comparaison, le Hero d'avant (captures `hero-corrections`) mesurait :
  - à 1280px : 808px seul, 1 020px avec le bandeau ;
  - à 375px : 1 029px seul, 1 453px avec le bandeau.
- **Allumage au survol** (1280px) : pour chaque raccourci testé, le navigateur rapporte l'attribut posé, les équipements visibles et ceux en orange :
  - « Pompe à chaleur », « Climatisation réversible », « Chaudière biomasse » : l'équipement apparaît seul parmi les trois, en orange ;
  - « Isolation » : les deux isolants en orange ;
  - « Rénovation globale » : **8 équipements en orange** (les 7 permanents et la pompe à chaleur), climatisation et biomasse masquées.
  - Focus clavier sur « Chaudière biomasse » : même allumage qu'au survol.
- **Au repos** : 7 équipements visibles (les 3 chauffages masqués).
- **Tactile** (simulé dans Chromium : écran tactile, mode mobile, 375px) :
  - 1er toucher sur « Pompe à chaleur » : aucune ouverture, pompe à chaleur allumée ;
  - toucher sur « Chaudière biomasse » : bascule vers la biomasse ;
  - toucher ailleurs : schéma éteint ;
  - 1er toucher sur « Borne » : allumée, pas d'ouverture ;
  - 2e toucher : la page `/solutions/borne-de-recharge` s'ouvre ;
  - retour arrière (testé sur le serveur de développement) : schéma au repos.
  - Le dernier raccourci en bas de l'écran laisse **le schéma entièrement visible** en haut (de 168 à 367px) : on voit l'équipement s'allumer.
  - Le défilement par glissé n'a pas pu être simulé : le navigateur de test ne défile pas, même hors des raccourcis. **À confirmer sur un vrai téléphone**, comme la question 131.
- **Captures** (`captures/hero-raccourcis/`) :
  - `1280-hero.png`, `375-hero.png` : le Hero, raccourcis sous le schéma ;
  - `1280-ecran-arrivee.png` : le premier écran à 1280 × 900 ;
  - `1280-survol-pompe-a-chaleur.png`, `1280-survol-climatisation.png`, `1280-survol-chaudiere-biomasse.png`, `1280-survol-isolation.png` : un raccourci survolé, équipement allumé ;
  - `1280-survol-renovation-globale.png` : tous les équipements allumés ;
  - `375-toucher-pac.png`, `375-toucher-borne.png` : toucher sur téléphone ;
  - `1280-bandeau-comment-ca-se-passe.png`, `375-bandeau-comment-ca-se-passe.png` : le nouveau bandeau (emplacement vidéo vide) ;
  - mesures brutes : `mesures.json`, `tactile.json`.

### 3. Fichiers

- **Créé** : `src/components/CommentCaMarche.astro`.
- **Modifiés** :
  - `src/components/Hero.astro` : surtitre, raccourcis sous le schéma, 9e raccourci, script d'allumage, marges ;
  - `src/components/SchemaMaison.astro` : climatisation et biomasse, 3 équipements masqués, règles d'allumage `data-allume`, légende et navigation clavier supprimées, repères en pastilles, description ;
  - `src/pages/index.astro` : nouveau bandeau, commentaire des fonds ;
  - commentaires seulement : `src/components/MethodeEtapes.astro`, `src/components/MethodeEtape.astro`, `src/data/methode.ts` (ils parlaient de l'ancien bandeau).
- **Rien n'est commité.**

## Corrections de la section « Fonctionnement » et badge du Hero (14 octobre 2026)

**Questions ouvertes : n° 135 à 140.**
- Réglées : 123 (couleur du surtitre), 129 (fond argile).
- Sans objet : 130 (vidéo).
- Toujours ouvertes : 124 à 128 et 131 à 134. La 128 ne porte plus sur la vidéo ; la 133 est mise à jour plus bas.

### 1. Ce qui a été fait

**1. Badge du collectif (Hero)**
- « Collectif d'artisans locaux — en direct, sans sous-traitance. » est désormais une **étiquette** :
  - fond orange action-500, texte bleu nuit, graisse 700 ;
  - contraste mesuré : **6,1:1**, alors que l'orange sur blanc n'atteignait que 2,4:1 ;
  - coins très arrondis (28px) ;
  - padding : 12 × 24px à partir de 768px, 10 × 20px sur téléphone ;
  - aligné à gauche, au-dessus du h1.
- Texte en 18px (question 139). Le badge tient sur 1 ligne à 1280px et sur 2 lignes à 375px.
- Les coins sont arrondis à 28px plutôt qu'en pilule parfaite. Sur deux lignes, une pilule aurait des bouts démesurés.

**2. Raccourcis de même hauteur**
- Grille en `auto-rows-fr` : toutes les rangées prennent la hauteur de la plus haute.
- Mesuré : **les 9 raccourcis ont la même hauteur à toutes les largeurs testées** :
  - 78px à 1280 et 1920px (calés sur « Rénovation globale », sur 3 lignes : question 135) ;
  - 58px à 1024, 768 et 375px.
- « Rénovation globale » garde son fond bleu nuit.

**3. Titre** : « Comment ça se passe ? » devient **« Fonctionnement »**.

**4. Quatrième étape** (texte fourni, repris mot pour mot) : « Les travaux démarrent » — « Votre artisan réalise le chantier et reste votre interlocuteur ensuite, pour l'entretien comme pour le dépannage. »

**5. Animation des étapes**
- Nouvel attribut `data-scene-etape`, ajouté au système d'animation existant (`global.css`, `AnimationScenes.astro`).
- Chaque étape apparaît par un fondu avec une montée de 16px, en 0,5 s. La première part 200 ms après le titre, puis une toutes les 150 ms.
- Vérifié dans le navigateur, animations actives :
  - délais lus : 200, 350, 500 et 650 ms ;
  - les 4 étapes sont invisibles avant l'arrivée et visibles 1,35 s après ;
  - l'animation est remise à zéro après une sortie complète de l'écran, puis rejouée au retour.
- « Réduire les animations » : rien n'est caché, rien ne bouge (règle CSS et script existants, étendus à `data-scene-etape`).

**6. Illustrations à la place de la vidéo**
- La balise `<video>`, l'image fixe, le script de pause et le contrôle des fichiers de `public/videos/` sont supprimés.
- `contact.png` et `chantier.png` sont affichés avec `<Image>` d'Astro : WebP, 4 tailles, chargement différé.
- Ils sont retrouvés par `src/data/illustrations.ts`. Si un fichier manque, un emplacement vide s'affiche.
- Fond transparent vérifié dans les fichiers : 63 % de pixels transparents pour `contact.png`, 45 % pour `chantier.png`.
- Ni cadre, ni arrondi, ni ombre.
- Textes alternatifs : ceux que vous avez fournis, mot pour mot.
- **Mise en page** :
  - à partir de 1024px : 3 colonnes (1 / 1,4 / 1). `contact.png` à gauche, le titre et les 4 étapes au centre, `chantier.png` à droite. Les deux illustrations sont posées en bas, sur la même ligne, comme sur un sol ;
  - en dessous de 1024px : titre, puis **les deux illustrations côte à côte**, puis les étapes.
  - La variante « une au-dessus, une en dessous » a été essayée : elle ajoute 467px à 375px (question 138).
- **Bord droit de `chantier.png`** (la maison est coupée dans le dessin, question 136) :
  - sous 1024px, l'image va jusqu'au bord de l'écran ;
  - à partir de 1024px, son bord droit s'efface en fondu.

**7. Couleur : brume** (#ccdce8, bleu ardoise pâle, déjà dans la charte). Justification, d'après les dominantes des illustrations :
- **bleu nuit** (fauteuil, camionnette, rives du toit) : c'est un cousin foncé de la brume, il s'y détache nettement (10,3:1) sans heurt de teinte ;
- **crème** (pull, isolant, murs) : il est plus clair que la brume et ressort en clair. Sur un fond crème, argile ou crème foncé, il se serait fondu dans le décor ;
- **orange** (pot, tuiles, pantalon, pastilles) : c'est la couleur opposée du bleu sur le cercle chromatique, il vibre sur la brume ;
- **contraste avec le blanc** du Hero et de la Méthode : 1,40:1, le plus fort des fonds pâles de la charte (argile : 1,34:1, lichen : 1,28:1) ;
- **lisibilité** : texte 11,7:1, texte secondaire 5,1:1 ;
- **aucune autre section** n'a ce fond. Il n'est plus utilisé que par l'onglet actif de l'étape 4 de la Méthode, une petite surface dans la section suivante ;
- **teintes écartées** :
  - lichen : déjà le fond du simulateur, et son vert jaunâtre contrarie l'orange ;
  - bruyère : déjà le fond des articles ;
  - bleu nuit : le fauteuil et la camionnette s'y perdraient.

### 2. Mesures et vérifications

- **Build de production** : réussi. Aucune erreur dans la console, aucun débordement horizontal, à 375, 768, 1024, 1280 et 1920px. Les 2 images sont chargées à chaque largeur.

| Mesure | 1920px | 1280px | 1024px | 768px | 375px |
|---|---|---|---|---|---|
| **Hauteur de la section « Fonctionnement »** | 1 009px | **1 009px** | 1 090px | 1 280px | **1 287px** |
| Hauteur du Hero | 831px | 831px | 1 584px | 1 400px | 1 275px |
| Hauteur des 9 raccourcis | 78px (×9) | 78px (×9) | 58px (×9) | 58px (×9) | 58px (×9) |
| Illustrations (largeur affichée) | 332 / 332px | 332 / 332px | 266 / 266px | 348 / 368px | 160 / 180px |
| Colonne des étapes | 466px | 466px | 372px | pleine largeur | pleine largeur |

- **Hero** :
  - 1280px : 831px, contre 791px avant (badge plus haut, raccourcis de 78px). La dernière rangée de raccourcis finit maintenant à 889px, contre 849px. Sur un écran de 900px, elle tient encore, de justesse ;
  - 375px : 1 275px, contre 1 254px.
- **Section** à 375px : 1 287px, contre 1 195px pour la version à 3 étapes avec vidéo. Cette version occupe 1,6 écran d'iPhone X (question 133).
- **Captures** (`captures/fonctionnement/`) :
  - `1280-section.png`, `375-section.png`, ainsi que `1024-section.png` et `1920-section.png` ;
  - `1280-hero.png`, `375-hero.png` : le Hero avec le badge ;
  - `375-variante-dessus-dessous.png` : la variante écartée (question 138) ;
  - mesures brutes : `mesures.json`.

### 3. Fichiers

- **Modifiés** :
  - `src/components/CommentCaMarche.astro` : réécrit ;
  - `src/components/Hero.astro` : badge, `auto-rows-fr` ;
  - `src/styles/global.css` : animation `data-scene-etape` ;
  - `src/pages/index.astro` : commentaires.
- **Images utilisées** : `src/assets/illustrations/contact.png` et `chantier.png`, non modifiées.
- **Rien n'est commité.**

## Étiquette pâle du Hero et agrandissement des illustrations (14 octobre 2026)

**Questions ouvertes : n° 141 à 143.** La question 135 (raccourcis de 78px sur grand écran) reste ouverte, et elle est liée à la 142.

### 1. Ce qui a été fait

**1. Étiquette du collectif (Hero)**
- L'orange plein action-500 est abandonné : c'était la couleur du bouton « Obtenir un devis » juste en dessous, et les deux se concurrençaient.
- Nouveau style :
  - fond **action-50** (#fdf0e0) ;
  - **filet orange action-500 de 1,5px** ;
  - texte **bleu nuit, graisse 700**, contraste mesuré **12,9:1** ;
  - coins très arrondis (28px) et padding conservés : 12 × 24px à partir de 768px, 10 × 20px sur téléphone ;
  - alignée à gauche, au-dessus du h1.
- L'orange plein reste réservé au bouton. Capture : `1280-hero.png`.

**2. Illustrations agrandies**
- **Recadrage sur la zone dessinée.** Les PNG ont de larges marges transparentes autour du dessin :
  - `contact.png` : la zone dessinée fait 851 × 951 pixels sur 1200 × 1200 ;
  - `chantier.png` : 1154 × 981.
  - Chaque image est placée dans un cadre aux proportions de cette zone, puis agrandie pour la remplir. Les marges transparentes débordent du cadre et sont coupées.
  - Les fichiers ne sont pas modifiés. ⚠️ Si un PNG est remplacé, il faut remesurer sa zone dessinée : tableau `cadrages` dans `CommentCaMarche.astro`.
- **À partir de 1024px** :
  - trois colonnes **30 / 40 / 30** ;
  - illustrations **centrées verticalement sur le bloc des étapes**, et non plus posées en bas ;
  - fondu du bord droit de `chantier.png` conservé.
- **Sur téléphone** :
  - toujours côte à côte au-dessus des étapes ;
  - elles vont maintenant jusqu'aux deux bords de l'écran, avec 8px entre elles ;
  - la colonne des artisans est un peu plus large (5/9 contre 4/9), car leur dessin est plus large que haut : les deux ont ainsi presque la même hauteur.

### 2. Mesures (Chromium, build de production)

Tailles des **cadres** (le dessin les remplit) :

| | 1280px | 375px |
|---|---|---|
| Femme au fauteuil | **339 × 379px** (28 % de la largeur utile ; 30 % des colonnes) | **165 × 185px** |
| Artisans | **339 × 288px** | **202 × 171px** |
| Bloc des 4 étapes | 452 × 702px | 335 × 856px |
| Centre vertical : illustrations / étapes | 569 / 570px (alignés) | — |

- **Avant** cet agrandissement :
  - à 1280px : femme d'environ 235px de large dans une image de 332px, artisans d'environ 320px ;
  - à 375px : femme d'environ 115px, artisans d'environ 170px.
- **Gain** :
  - femme : × 1,4 sur grand écran et sur téléphone ;
  - artisans : × 1,1 sur grand écran, × 1,2 sur téléphone. Ils remplissaient déjà presque toute leur image.
- **Hauteur visée non atteinte à 1280px** : 379 et 288px contre 702px pour les étapes (question 141).

**Hauteurs surveillées** :

| Mesure | Avant | Maintenant |
|---|---|---|
| Hero à 1280px | 831px | **831px** |
| Bas de la dernière rangée de raccourcis (écran de 900px) | 889px | **889px** (question 142) |
| Étiquette à 1280px | environ 49px (non mesurée ; calcul : 24px de padding et une ligne de 24,75px, sans filet) | 51px, 1 ligne, 514px de large |
| Hero à 375px | 1 275px | 1 277px (filet de l'étiquette) |
| **Section « Fonctionnement » à 375px** | 1 287px | **1 293px** (+6px) |
| Section « Fonctionnement » à 1280px | 1 009px | 1 040px |

- À 375px, la section ne prend que 6px : les illustrations se sont élargies mais ne sont presque pas plus hautes que leurs anciennes images carrées. Aucune piste de réduction n'est nécessaire.
- Aucun débordement horizontal, aucune erreur dans la console, aux 5 largeurs testées (375, 768, 1024, 1280, 1920).
- Les 9 raccourcis ont toujours la même hauteur à toutes les largeurs.

**Captures** (`captures/fonctionnement-v2/`) :
- `1280-section.png`, `375-section.png`, ainsi que `1024-section.png` et `1920-section.png` ;
- `1280-hero.png`, `375-hero.png` : le Hero avec l'étiquette pâle ;
- mesures : `cadres.json` (tailles des cadres, étapes, étiquette, Hero : **valeurs de référence**) et `mesures.json`.
- ⚠️ Dans `mesures.json` :
  - le champ `imgs` mesure les images agrandies, débordement transparent compris, et non ce qu'on voit ;
  - le champ `badge.lignes` est faussé par le filet. Utiliser `cadres.json`.

### 3. Fichiers

- **Modifiés** :
  - `src/components/Hero.astro` : style de l'étiquette ;
  - `src/components/CommentCaMarche.astro` : grille 30 / 40 / 30, recadrage, centrage vertical, mise en page mobile.
- **Rien n'est commité.**

## Badge vert, textes raccourcis, étapes élargies et animation réparée (14 octobre 2026)

**Questions ouvertes : n° 144 à 147.**
- Sans objet : 134 (l'étape 1 ne parle plus d'appel), 141 (nouvelle répartition).
- La 143 (badge sur 2 lignes sur téléphone) reste valable.

### 1. Ce qui a été fait

**1. Badge du Hero : vert foncé**
- Style :
  - fond **vert-600** (#2a6b4f) ;
  - texte **crème** (#f7f4ee), graisse 700 ;
  - coins arrondis à 28px ;
  - padding inchangé : 12 × 24px à partir de 768px, 10 × 20px sur téléphone ;
  - aligné à gauche, au-dessus du h1.
- Le filet orange de la version pâle est supprimé.
- **Contraste mesuré : 5,8:1**. C'est au-dessus du minimum d'accessibilité pour un texte courant (4,5:1), mais pas au niveau renforcé (question 144).
- Commentaire de vert-600 dans `global.css` mis à jour.

**2. Textes des étapes** (fournis, repris mot pour mot) :
1. « Contactez-nous » — « Via le formulaire en ligne, décrivez votre projet, même succinctement. »
2. « L'artisan Akelia le plus proche de chez vous vous contacte » — « Sous 24 heures, une entreprise du collectif implantée dans votre secteur vous rappelle. Vos coordonnées ne sortent jamais du réseau. »
3. « Chiffrage des travaux » — « Un artisan se déplace chez vous gratuitement et vous propose un devis détaillé : nature des travaux, aides estimées, reste à charge. »
4. « Les travaux démarrent » — « Votre artisan réalise le chantier et reste votre interlocuteur ensuite, pour l'entretien comme pour le dépannage. »

**3. Mise en page**

*a) Colonne des étapes élargie*
- Nouvelle répartition **25 / 50 / 25** à partir de 1024px.
- À 1280px, la colonne passe de 452 à **565px**. Lignes par texte : 2, 3, 2, 2. Avant, avec les anciens textes : 3, 5, 2, 3 (comptées sur la capture `captures/fonctionnement-v2/1280-section.png`).

*b) Illustrations débordantes*
- Même principe que `deborde-gauche` / `deborde-droite` : l'illustration s'élargit au-delà de sa colonne, vers l'extérieur, jusqu'au bord de l'écran et au-delà. La section coupe ce qui dépasse (`overflow-x-clip`), sans défilement horizontal.
- Les classes de `global.css` n'ont pas été reprises telles quelles : elles font sortir 5rem (80px) de l'écran, soit 22 % de la femme et 24 % des artisans. Cela aurait coupé le fauteuil et l'artisan de droite.
- Deux classes propres à la section (`deborde-contact`, `deborde-chantier`, dans `CommentCaMarche.astro`) dosent la part coupée :
  - **12 % de `contact.png`, à gauche** : la plante. Le fauteuil commence à 16 % du dessin ;
  - **6 % de `chantier.png`, à droite** : le bord de la maison, déjà coupé dans le dessin. L'artisan de droite s'arrête à 91 % de la largeur.
- **Largeur plafonnée** : 32rem pour la femme, 44rem pour les artisans. Sur les très grands écrans, la marge extérieure est énorme (355px à 1920px) : sans plafond, la femme ferait 724px de large.
- Le fondu du bord droit de `chantier.png` est réduit à ses 12 % derniers.
- Sur téléphone : inchangé. Les illustrations vont déjà d'un bord à l'autre de l'écran.

*c) Animation des étapes : elle existait, mais se jouait hors de la vue*
- **Cause, mesurée** : l'animation partait avec celle de la section, quand 25 % de la section était visible. À ce moment, les 4 étapes étaient **toutes sous le bas de l'écran** :
  - à 1280 × 900 : première étape à 907px ;
  - à 375 × 812 : première étape à 971px.
  - Le temps d'y arriver en défilant, l'animation était finie.
- **Correction** (dans `AnimationScenes.astro`) : chaque étape a désormais **son propre déclenchement** :
  - elle part quand 30 % d'elle est visible, dans les 90 % supérieurs de l'écran ;
  - les étapes qui arrivent ensemble, par exemple après un saut direct à la section, partent avec **150 ms d'écart** ;
  - en défilant, chacune part à son arrivée ;
  - toutes sont remises à zéro quand la section a complètement quitté l'écran.
- **Amplitude augmentée** : montée de **40px** (16px avant), durée 0,7 s (0,5 s avant), courbe qui démarre vite et ralentit à la fin.
- « Réduire les animations » : inchangé, tout est visible et immobile.

### 2. Vérifications et mesures (Chromium, build de production)

**Animation des étapes** (`captures/fonctionnement-v3/animation.json` et `animation-saut.json`)
- **Défilement progressif**, 40px toutes les 40 ms :
  - chaque étape démarre alors qu'elle est **à l'écran** : son haut se trouve entre 768 et 814px sur un écran de 900px, et entre 674 et 694px sur 812px ;
  - opacité de 0 au départ, de 1 une seconde après, pour les 4 étapes, à 1280 comme à 375px.
- **Rejeu** :
  - après un retour en haut de page, les 4 étapes sont remises à zéro (opacité 0) ;
  - au second passage, elles se rejouent toutes, aux deux largeurs.
- **Saut direct à la section** : décalages lus de **0, 150, 300 et 450 ms**. 250 ms après le saut :
  - étape 1 : opacité 0,76, encore 10px de montée ;
  - étape 2 : 0,25 et 30px ;
  - étapes 3 et 4 : pas encore parties.
  - Capture : `1280-animation-en-cours.png`.
- **Animations réduites** : 4 étapes à opacité 1, aucune animation.

**Hauteurs et tailles**

| Mesure | 1280px | 375px |
|---|---|---|
| **Hauteur de la section « Fonctionnement »** | **886px** (1 040px avant) | **1 202px** (1 293px avant) |
| Bloc des 4 étapes | 565 × 548px | 335 × 765px |
| Femme au fauteuil (cadre visible) | 361 × 403px, dont 43px hors écran | 165 × 185px |
| Artisans | 338 × 287px, dont 20px hors écran | 202 × 171px |
| Badge | 512 × 49px, 1 ligne | 335 × 70px, 2 lignes |
| Hero / bas de la dernière rangée de raccourcis | 831px / 889px (inchangés) | 1 275px |

- Autres largeurs (`illustrations.json`) :
  - **1440px** : femme 452 × 505px, artisans 423 × 359px, étapes 548px de haut ;
  - **1920px** : femme 512 × 572px (plafond atteint, ne touche plus le bord), artisans 678 × 577px, étapes 577px ;
  - **1024px** : femme 280 × 312px, artisans 262 × 222px, étapes 452px de large.
- Aucun débordement horizontal, aux 5 largeurs.

**Captures** (`captures/fonctionnement-v3/`) :
- `1280-section.png`, `375-section.png`, ainsi que `1024-section.png` et `1920-section.png` ;
- `1280-hero.png`, `375-hero.png` : le Hero avec le badge vert ;
- `1280-animation-en-cours.png` : les étapes en train d'apparaître ;
- mesures : `mesures.json` (Hero, badge), `illustrations.json` (cadres, étapes, lignes), `animation.json`, `animation-saut.json`.

### 3. Fichiers

- **Modifiés** :
  - `src/components/Hero.astro` : badge vert ;
  - `src/components/CommentCaMarche.astro` : textes, grille 25 / 50 / 25, débordement des illustrations ;
  - `src/components/AnimationScenes.astro` : déclenchement propre à chaque étape ;
  - `src/styles/global.css` : animation des étapes (40px, 0,7 s, `data-visible`), commentaire de vert-600.
- **Rien n'est commité.**

## Badge compact et illustrations en pleine largeur sur téléphone (14 octobre 2026)

**Questions ouvertes : n° 148 à 151.**
- Réglée : 143 (badge sur 2 lignes larges).
- Sans objet : 147.

### 1. Ce qui a été fait

**1. Badge du Hero sous 768px**
- Texte de **14px** (18px avant).
- Padding de **6 × 14px** (10 × 20px avant).
- Espace sous le badge : 16px (20px avant).
- La ligne unique est impossible à 375px (question 148). Le texte est donc coupé **après le tiret**, uniquement sous 768px (`<br>` masqué au-delà) : deux lignes courtes.
- Mesures à 375px : badge de **212 × 51px**, contre 335 × 70px. Il ne prend plus que 57 % de la largeur et ne touche plus le bord droit.
- **À partir de 768px : rien ne change.** Vérifié à 768 et 1280px : 512 × 49px, 18px, une ligne, padding de 12 × 24px.

**2. Illustrations sous 1024px**
- Une seule colonne, **dans l'ordre du parcours** :
  1. le titre ;
  2. `contact.png` (on appelle) ;
  3. les 4 étapes ;
  4. `chantier.png` (les travaux démarrent).
- L'ordre du code est le même : les lecteurs d'écran et la navigation au clavier suivent le même parcours.
- **Téléphone** : chaque illustration occupe **toute la largeur de l'écran**, d'un bord à l'autre (question 151).
- **Tablette** (768 à 1023px) : largeur plafonnée (question 150) :
  - femme : 448px, collée au bord gauche ;
  - artisans : 576px, collés au bord droit.
- **À partir de 1024px : rien ne change.** Vérifié à 1280px : section de 886px, femme de 361 × 403px, artisans de 338 × 287px, comme avant.
- Défaut trouvé et corrigé pendant la vérification :
  - à 768px, l'illustration des artisans avait une **largeur de 0px** ;
  - cause : la marge automatique qui la colle à droite empêchait le cadre de prendre la largeur de la colonne, et son image est en position absolue ;
  - correction : ajout de `md:w-full`.

### 2. Mesures (Chromium, build de production)

| Mesure | 320px | 375px | 768px | 1280px |
|---|---|---|---|---|
| **Section « Fonctionnement »** | 1 840px | **1 795px** (1 202px avant) | 1 887px | 886px (inchangé) |
| Femme au fauteuil | 320 × 358px | **375 × 419px** (165 × 185px avant) | 448 × 501px | 361 × 403px |
| Artisans | 320 × 272px | **375 × 319px** (202 × 171px avant) | 576 × 490px | 338 × 287px |
| Badge | 212 × 51px, 2 lignes | **212 × 51px**, 2 lignes (335 × 70px avant) | 512 × 49px, 1 ligne | 512 × 49px, 1 ligne |
| Hero | 1 444px | **1 252px** (1 275px avant) | 1 400px | 831px |

- **À 375px, la section augmente de 593px** : 2,2 écrans d'iPhone X. Pistes de réduction à la question 149.
- Les illustrations sont 2,3 fois plus larges qu'avant pour la femme et 1,9 fois pour les artisans.
- Aucun débordement horizontal, aux 4 largeurs.

**Captures** (`captures/mobile-v4/`) :
- `375-section.png` : la section sur téléphone ;
- `375-hero.png` : le Hero avec le badge compact ;
- `375-arrivee-ecran.png` : le premier écran du téléphone ;
- `768-section.png`, `768-hero.png`, `1280-section.png`, `1280-hero.png` : contrôle que la tablette et le grand écran sont conformes ;
- mesures brutes : `mesures.json`.

### 3. Fichiers

- **Modifiés** :
  - `src/components/Hero.astro` : badge compact sous 768px ;
  - `src/components/CommentCaMarche.astro` : une colonne sous 1024px, largeurs, ordre.
- **Rien n'est commité.**

## Avancement automatique des étapes de la Méthode au défilement (14 octobre 2026)

**Questions ouvertes : n° 152 à 156.**

### 1. Ce qui a été fait

Tout est dans le script de `src/components/MethodeEtapes.astro`. Le principe est décrit en tête du fichier.

**Principe**
- En descendant dans la section, l'étape active passe de 1 à 2, 3, puis 4, **exactement comme un clic** : la même fonction `activer()` est appelée, sans déplacer le focus. Le schéma (avec son tracé rapide), la ligne des onglets et le texte suivent.
- En remontant, l'étape redescend.
- **Le défilement n'est jamais touché** :
  - l'écouteur de défilement est déclaré « passive » : le navigateur sait d'avance qu'il ne peut pas bloquer le défilement ;
  - aucun `preventDefault`, aucune position fixe, aucun défilement provoqué par le script, aucun focus déplacé ;
  - le calcul est fait au plus une fois par image affichée (`requestAnimationFrame`) ;
  - l'écouteur n'est actif que lorsque la section est à l'écran : il est posé et retiré par un IntersectionObserver.

**Tranches** (question 152)
- La traversée commence quand la moitié du schéma est entrée par le bas de l'écran.
- Elle finit quand la moitié du schéma a disparu sous l'en-tête collant (`#site-header`) : 122px de haut à 1280px, 72px sur téléphone.
- Elle est découpée en 4 tranches égales.
- Calcul : progression = (hauteur d'écran − h/2 − haut du schéma) ÷ (hauteur d'écran − bas de l'en-tête). Étape = 1 + partie entière de (progression × 4), entre 1 et 4.
- **Deux réglages corrigés pendant la mise au point** :
  - première version (de 80 % du schéma entré à 20 % sorti) : 155px par étape seulement, un cran de molette suffisait presque à sauter une étape ;
  - deuxième version : l'en-tête collant n'était pas compté. À l'étape 4, une bonne partie du schéma était cachée sous lui.

**Zone morte**
- Une frontière n'est franchie qu'à 4 % de la traversée au-delà, soit 31px à 1280 × 900 et environ 30px à 375 × 812, dans un sens comme dans l'autre.
- Il faut donc revenir d'environ 60px en arrière pour retrouver l'étape précédente. Arrêté pile sur une frontière, l'étape ne clignote pas.

**Clic**
- Un clic sur une étape, ou les flèches du clavier dans les onglets, **suspend** l'avancement automatique.
- La suspension dure jusqu'à ce que la section ait **complètement** quitté l'écran. L'avancement reprend au passage suivant.

**Réglages**
- « Réduire les animations » : aucun avancement automatique. L'étape 1 reste affichée, seuls les clics changent l'étape. Le réglage est relu à chaque défilement : s'il change pendant la visite, le site suit.
- Sans JavaScript : rien ne change, puisque tout est dans le script. Les 4 étapes restent les unes sous les autres, schéma complet.

### 2. Ce qui se passe en défilant (mesuré, build de production)

Positions données par rapport à l'écran. L'en-tête collant cache le haut de l'écran : 122px à 1280px, 72px à 375px.

**À 1280 × 900, en descendant lentement** (20px toutes les 40 ms) :
1. **Étape 1** : active à l'arrivée de la section. Elle le reste pendant que le titre, l'introduction, puis le schéma entrent par le bas.
2. **Étape 2** : quand le haut du schéma arrive à **423px**. Le schéma est alors entièrement visible (de 423 à 889px).
3. **Étape 3** : **180px de défilement plus loin**, haut du schéma à 243px.
4. **Étape 4** : **200px plus loin**, haut du schéma à 43px. Ses 79 premiers pixels sont sous l'en-tête, la maison et les équipements sont visibles.
5. L'étape 4 reste active jusqu'à la sortie de la section, puis dans la section suivante.

**À 1280 × 900, en remontant** : étape 3 quand le haut du schéma redescend à 127px, étape 2 à 327px, étape 1 à 507px. Chaque retour arrive environ 80px plus bas qu'à la descente : c'est la zone morte (2 × 31px), plus le pas de 20px du test.

**À 375 × 812** :
- en descendant : étape 2 quand le haut du schéma est à 491px (schéma de 209px de haut, entièrement visible), étape 3 à 291px, étape 4 à 111px. L'écart entre deux étapes est de 180 à 200px de défilement ;
- en remontant : étape 3 à 198px, étape 2 à 378px, étape 1 à 558px.

**Zone morte vérifiée** :
- allers-retours de 10 à 40px autour de la frontière 1 → 2 : l'étape passe à 2 au premier franchissement, puis ne revient plus à 1 en oscillant ;
- elle ne revient à 1 qu'à 90px en arrière, aux deux largeurs.

**Clic qui fige le choix**
- Test : clic sur l'étape 3 dans la section, puis traversée complète vers le bas et retour vers le haut, sans sortir de la section. **L'étape 3 reste affichée en permanence**, aux deux largeurs.
- Ensuite : sortie complète (retour en haut de page), puis nouveau passage. L'avancement reprend : 1, 2, 3, 4.
- À 375px, l'étape 3 choisie reste affichée pendant le tout premier instant du retour, tant que la section n'est pas encore à l'écran. Elle repasse à 1 dès que la section entre dans l'écran, avant que le schéma soit visible.

**Défilement jamais entravé** (Chromium ; la page était espionnée pour relever chaque écouteur posé et chaque appel à `preventDefault`) :
- **Molette** : 8 crans de 120px pendant la traversée, **120px parcourus à chaque cran**, changements d'étape compris.
- **Clavier**, focus sur la page :
  - Flèche bas : 40px ;
  - Page suivante : 787px ;
  - Espace : 787px ;
  - Page précédente : −787px.
  - Valeurs normales du navigateur.
- **Doigt** (375px, écran tactile simulé) : un glissé de 300px fait défiler **285px**, sans blocage. L'élan des vrais téléphones ne se simule pas (question 156).
- **Écouteurs de défilement** : tous « passive ».
- **`preventDefault`** : **aucun appel** sur la molette, le toucher, le défilement ou le clavier pendant tous les tests. Seul cas existant, inchangé : les flèches quand le focus est sur un onglet (modèle « onglets », question 155).

**Réduire les animations** : traversée complète de la section, **seule l'étape 1 est vue**. Un clic sur l'étape 2 l'affiche bien.

### 3. Captures

`captures/methode-defilement/` : les 4 états à 1280 et 375px, chacun pris au milieu de sa tranche, 2,5 s après l'arrivée (fin de l'animation d'entrée du schéma) :
- `1280-etape-1.png` à `1280-etape-4.png` ;
- `375-etape-1.png` à `375-etape-4.png` ;
- mesures brutes : `mesures.json`, avec les descentes, les montées, la zone morte, les tests d'entrave, les écouteurs et le clic.

### 4. Fichiers

- **Modifié** : `src/components/MethodeEtapes.astro` (script et commentaire d'en-tête).
- **Rien n'est commité.**

## Badge pleine largeur et illustrations réduites sur téléphone (14 octobre 2026)

**Questions ouvertes : n° 157 à 159.**
- Réglées : 149 (hauteur de la section), 151 (débordement sur téléphone).
- Sans objet : 150 (tablette).

### 1. Ce qui a été fait

**1. Badge du Hero sous 768px**
- **Toute la largeur du conteneur** (`block w-full`), comme le bouton « Obtenir un devis ».
- **Texte centré** (question 157).
- Taille et padding inchangés : 14px, 6 × 14px.
- La coupure après le tiret est conservée : « Collectif d'artisans locaux — » / « en direct, sans sous-traitance. »
- À partir de 768px : inchangé. Le badge épouse le texte, aligné à gauche : `md:inline-block md:w-auto md:text-left`.

**2. Illustrations de « Fonctionnement » sous 1024px**
- Disposition conservée : `contact.png`, puis les 4 étapes, puis `chantier.png`.
- **Taille fortement réduite**, sur la base d'une hauteur d'environ la moitié de la largeur de l'écran :
  - `contact.png` : 45 % de la largeur de l'écran, 17rem au plus ;
  - `chantier.png` : 54 %, 20rem au plus.
  - Les deux ont ainsi presque la même hauteur.
- **Plus de débordement** : les deux images restent dans le conteneur, centrées.
- Le fondu du bord droit de `chantier.png` s'applique désormais **à toutes les tailles** : centrée, la coupe de la maison tomberait sinon net au milieu de l'écran (question 159).
- La tablette suit la même règle (question 158).
- **À partir de 1024px : rien ne change.** Vérifié à 1280px : femme 361 × 403px, débordant de 43px à gauche ; artisans 338 × 287px ; section de 886px.

### 2. Mesures (Chromium, build de production)

| Mesure | 320px | 375px | 768px | 1280px |
|---|---|---|---|---|
| **Section « Fonctionnement »** | 1 519px | **1 418px** | 1 473px | 886px (inchangé) |
| Femme au fauteuil | 144 × 161px | **169 × 189px** | 272 × 304px | 361 × 403px |
| Artisans | 173 × 147px | **203 × 172px** | 320 × 272px | 338 × 287px |
| Bloc des 4 étapes | 280 × 919px | **335 × 765px** | 728 × 485px | 565 × 548px |
| Badge | 280 × 51px | **335 × 51px**, pleine largeur | 512 × 49px | 512 × 49px |
| Hero | 1 444px | 1 252px | 1 400px | 831px |

- **Section à 375px : 1 418px**, soit :
  - 377px de moins qu'avec les illustrations en pleine largeur (1 795px) ;
  - 216px de plus qu'avec les illustrations côte à côte (1 202px) : c'est le prix de la disposition dessus / dessous.
  - 1,75 écran d'iPhone X.
- Les illustrations ont retrouvé à peu près leur taille côte à côte : 165 × 185px et 202 × 171px à l'époque. Elles sont nettement plus petites que le bloc des étapes : 189 et 172px de haut, contre 765px.
- Le Hero ne change pas de hauteur : le badge pleine largeur a la même hauteur qu'avant (51px).
- Aucun débordement horizontal, aux 4 largeurs.

**Captures** (`captures/mobile-v5/`) :
- `375-hero.png`, `375-section.png` ;
- contrôles : `768-hero.png`, `768-section.png`, `1280-hero.png`, `1280-section.png`, `375-arrivee-ecran.png` ;
- mesures brutes : `mesures.json`.

### 3. Fichiers

- **Modifiés** :
  - `src/components/Hero.astro` : badge pleine largeur sous 768px ;
  - `src/components/CommentCaMarche.astro` : tailles, centrage, fondu à toutes les tailles.
- **Rien n'est commité.**

## Refonte de la section Cas types : violet, 6 onglets, paragraphes, boutons (14 octobre 2026)

**Questions ouvertes : n° 160 à 165.**
- Réglée : 118 (prune).
- Sans objet : 113 (`vert-clair`).
- Mise à jour : 121 (hauteur variable).
- Toujours ouvertes : 120 (halos des dessins, voir la 164) et 122 (dessin du 3e cas, voir la 161).

### 1. Ce qui a été fait

**1. Couleur : violet #5a2d82** (nouvelle couleur `violet` de `global.css`)
- Même famille que le prune, mais teinte **franche** : son intensité (chroma, mesurée en oklab) est 0,139, contre 0,042 pour le prune. Il est 3,3 fois plus coloré.
- Les nuances restent **dérivées automatiquement** de `--cas-fond` dans `CasTypes.astro` :
  - bloc de contenu et onglets inactifs : fond + 8 % de blanc ;
  - onglet survolé : + 16 % de blanc.
- Les encarts, plus foncés, ont disparu avec les nouveaux textes.
- `prune` et `vert-clair` restent dans la charte, inutilisés.
- **Contrastes**, mesurés sur les couleurs rendues par le navigateur :

| Élément | Couleurs | Contraste |
|---|---|---|
| Titre, sous-titre (blanc sur le fond) | #ffffff / #5a2d82 | **9,85:1** |
| Paragraphes (blanc sur le bloc) | #ffffff / #663e8c | **7,98:1** |
| Onglet inactif (blanc sur le bloc) | #ffffff / #663e8c | **7,98:1** |
| Onglet survolé | #ffffff / #724f97 | **6,40:1** |
| Onglet actif (texte noir sur blanc) | #16212a / #ffffff | 16,3:1 |
| Bouton : texte noir sur orange | #16212a / #f0920f | 6,87:1 |
| Bouton orange contre le bloc (repérage du bouton, 3:1 demandés) | #f0920f / #663e8c | **3,35:1** |
| Onglet actif blanc contre le fond | #ffffff / #5a2d82 | 9,85:1 |
| Bloc contre le fond (différence de teinte) | #663e8c / #5a2d82 | 1,23:1 |
| *Pour mémoire : blanc sur l'ancien prune* | #ffffff / #3d2c40 | 12,9:1 |

- Le contraste du texte baisse forcément par rapport au prune, puisqu'une couleur plus vive est plus claire. Il reste au-dessus du niveau renforcé (7:1) pour tout le texte courant.

**2. Sixième onglet**
- « Construction de maison neuve », identifiant `neuf`, en 5e position, avant « Changement d'équipement ».
- Illustration prévue : `src/assets/illustrations/neuf.png`. **Fichier absent** : emplacement vide de mêmes proportions (4:3), repérable dans le code par `data-illustration-absente="neuf.png"` (question 161). Il suffit de déposer le fichier et de reconstruire le site.

**3. Titre et sous-titre** (fournis) :
- titre : « Chaque maison a ses spécificités » (le point final de l'ancien titre a disparu) ;
- sous-titre : « Nous partons toujours de l'état initial, pas d'une méthode toute faite. »

**4. Textes** (fournis, repris mot pour mot dans `src/data/cas-types.ts`)
- Chaque onglet a **deux paragraphes suivis** : la situation, puis ce que fait Akelia.
- Supprimés :
  - les encarts « Les contraintes » et « Ce que l'on fait », avec leurs libellés en majuscules et leurs filets colorés ;
  - les titres de panneau (« Des murs qui doivent respirer », etc.) ;
  - les phrases ajoutées par Claude le 13 octobre (question 119, sans objet).
- Seule retouche typographique : espaces insécables avant « : » et « ! ».

| Onglet | Bouton |
|---|---|
| 1. Bâti ancien et historique | « Demander un audit de mon bâti ancien » |
| 2. Années 50 à 90 | « Demander un audit énergétique » |
| 3. Années 1995 à 2012 | « Demander un audit d'optimisation » |
| 4. Appartement | « Demander un audit de mon appartement » — **rédigé par Claude, non fourni (question 162)** |
| 5. Construction de maison neuve | « Obtenir une étude pour mon projet neuf » |
| 6. Changement d'équipement | « Obtenir une étude personnalisée » |

**5. Boutons**
- Un par onglet, en bas du panneau, vers `/devis`.
- Bouton principal orange, texte noir, flèche, **48px de haut minimum**.
- Pleine largeur sur téléphone ; ils passent à 2 lignes à 375px, 69px de haut.
- Contour de focus blanc, visible sur le violet.

**6. Illustrations agrandies**
- Recadrées sur leur **zone dessinée**, comme dans « Fonctionnement » : les PNG font 2752 × 1536, mais le dessin n'occupe que 55 à 73 % de leur largeur.
- La zone est désormais **mesurée automatiquement à la construction du site** (`zoneDessinee()`, `src/data/illustrations.ts`, avec sharp) : rien à remesurer si un dessin est remplacé.
- Chaque dessin occupe toute la largeur de sa colonne (573px à 1280px, contre environ 330px de dessin utile avant).

**Autre changement** : à partir de 1024px, les onglets sont en grille de 3 × 2 (question 165).

### 2. Mesures (Chromium, build de production)

| Onglet | Section à 1280px | Illustration à 1280px | Bloc de texte | Section à 375px | Illustration à 375px |
|---|---|---|---|---|---|
| 1. Bâti ancien | 1 223px | 573 × 482px | 523px | 1 548px | 335 × 282px |
| 2. Années 50 à 90 | 1 192px | 573 × 406px | 491px | 1 504px | 335 × 237px |
| 3. Années 1995 à 2012 | 1 223px | 573 × 347px | 523px | 1 470px | 335 × 203px |
| 4. Appartement | 1 223px | 573 × 417px | 523px | 1 542px | 335 × 244px |
| 5. Maison neuve | 1 192px | vide, 573 × 430px | 491px | 1 549px | vide, 335 × 251px |
| 6. Changement d'équipement | **1 230px** | 573 × 529px | 523px | **1 576px** | 335 × 309px |

- **Hauteur avec le plus long des onglets** (« Changement d'équipement ») : **1 230px à 1280px** et **1 576px à 375px**.
- Avant cette refonte : 1 458px et 1 899px au plus. La section est donc plus basse : textes plus courts, et plus de titre de panneau.
- Pour chaque onglet, vérifié dans le navigateur :
  - aucun titre de panneau, 2 paragraphes, un bouton vers `/devis` de 48px de haut ;
  - aucun débordement horizontal ;
  - aucune erreur dans la console.

**Captures** (`captures/cas-types-violet/`) :
- `1280-onglet-1.png` à `1280-onglet-6.png` ;
- `375-onglet-1.png` : la section à 375px ;
- `375-onglet-5.png` : l'onglet de la maison neuve, avec son emplacement vide ;
- mesures brutes : `mesures.json`.

### 3. Incident pendant le travail

- Une commande de remplacement automatique a **tronqué `CasTypes.astro`** : une recherche du mot « style » s'est arrêtée sur le commentaire d'en-tête au lieu de la balise.
- Le fichier n'étant pas dans git, il a été **réécrit en entier**. La rangée d'onglets et le script des onglets ont été repris mot pour mot de la version lue juste avant.
- Vérifications après coup :
  - les 6 onglets, un par un : clic, panneau affiché, textes et boutons ;
  - le clavier (`captures/cas-types-violet/clavier.txt`) : flèches droite et gauche, avec retour au début après le 6e et à la fin avant le 1er, Début, Fin, puis Tab qui mène au panneau. À chaque fois : un seul onglet dans l'ordre de tabulation, le focus sur l'onglet actif, le bon panneau affiché.

### 4. Fichiers

- **Modifiés** :
  - `src/data/cas-types.ts` : réécrit (6 cas, nouveaux champs `situation`, `approche`, `bouton`) ;
  - `src/components/CasTypes.astro` : réécrit ;
  - `src/data/illustrations.ts` : mesure automatique de la zone dessinée ;
  - `src/styles/global.css` : couleur `violet`, commentaires de `prune` et `vert-clair` ;
  - `src/pages/index.astro` : commentaire des fonds.
- **Attendu** : `src/assets/illustrations/neuf.png`.
- **Rien n'est commité.**

## Badge du Hero : étiquette discrète orange pâle à toutes les largeurs (14 octobre 2026)

Demande : sur téléphone, le badge vert plein en pleine largeur écrasait le titre et se lisait comme un titre. Il devient une étiquette discrète inspirée d'akelia.fr. Le traitement est **le même à toutes les largeurs**, simplement un peu plus grand à partir de 768px. Cette version **remplace** les badges vert-600 décrits dans les trois sections « Badge… » ci-dessus.

### 1. Ce qui a été fait

- **Fond** : `action-50` (#fdf0e0), très pâle.
- **Texte** : graisse 600 (`font-semibold`, contre 700 avant), en orange foncé `action-800` (#9a5a00).
- **Forme** : coins arrondis `rounded-lg` (8px). Ce n'est plus une pilule, parce que le texte passe sur deux lignes sur téléphone.
- **Largeur** : `inline-block`, la largeur suit le contenu. Le badge est aligné à gauche à toutes les largeurs. Le `block w-full text-center` sous 768px est supprimé.
- **Taille** :
  - sous 768px : texte de 14px, padding de 4 × 12px ;
  - à partir de 768px : texte de 16px (18px avant), padding de 6 × 14px (12 × 24px avant).
- **Coupure volontaire après le tiret, conservée sur téléphone** (`<br class="md:hidden">`) :
  - premier essai sans elle : le navigateur coupait après « en direct, » ;
  - la première ligne occupait alors presque toute la largeur, et le badge s'étirait à ~335px ;
  - avec la coupure, le badge fait ~200px de large à 375px.
- « sans sous-traitance » reste insécable (`whitespace-nowrap`).

### 2. Contraste (décision)

| Texte sur action-50 (#fdf0e0) | Contraste | Verdict |
|---|---|---|
| action-600 (#d17f08), demandé au départ | **2,77:1** (mesure confirmée) | insuffisant |
| **action-800 (#9a5a00)**, retenu | **4,88:1** | conforme AA (≥ 4,5:1) |

- Nouvelle couleur `--color-action-800: #9a5a00` dans `global.css`. Elle est **réservée au texte de ce badge**, ce que dit son commentaire.
- Le commentaire de `vert-600` ne mentionne plus le badge. vert-600 reste utilisé ailleurs (bouton de devis.astro, surtitres, Méthode).

### 3. Captures (`captures/hero-badge/`)

Chromium sans interface, serveur de dev :

- `375-hero.png` : le badge tient sur deux lignes courtes, il est aligné à gauche, la largeur suit le texte (~200 × 47px) et il est nettement plus discret que le titre ;
- `1280-hero.png` : le badge tient sur une ligne (~430 × 34px), au-dessus du titre.

Les dimensions sont estimées sur les captures, pas mesurées dans le DOM.

### 4. Fichiers

- `src/components/Hero.astro` : classes du badge, commentaire d'en-tête et commentaire du badge réécrits ;
- `src/styles/global.css` : ajout d'`action-800`, commentaire de `vert-600`.
- **Rien n'est commité.**

### 5. À arbitrer

- **Question 166** : la taille à partir de 768px est de 16px, contre 18px pour l'ancien badge vert. Est-ce que « un peu plus grand » convient ainsi, ou faut-il 17-18px ?
- **Question 167** : l'en-tête du Hero écartait autrefois la version « orange pâle action-50 avec filet », jugée pas assez visible. La version retenue n'a pas de filet. Faut-il ajouter un filet fin `action-500` si l'étiquette paraît trop effacée à l'écran ?

## Illustrations 3D des Cas types (14 octobre 2026)

Demande : trois illustrations 3D, à fond transparent, remplacent les dessins au trait dans la section Cas types.

### 1. Ce qui a été fait

| Onglet | Avant | Maintenant | Texte alternatif |
|---|---|---|---|
| Bâti ancien et historique | `pierre.png` | **`cas-ancien.png`** | fourni : « Un artisan posant un panneau d'isolant contre un mur en pierre ancienne, vu de l'intérieur. » |
| Années 50 à 90 | `annees70.png` | **`cas-annees70.png`** | fourni : « Deux artisans isolant par l'extérieur la façade d'un pavillon des années 70, depuis un échafaudage. » |
| Années 1995 à 2012 | `moderne.png` | **`cas-recent.png`** | fourni : « Un artisan installant une pompe à chaleur contre la façade d'une maison des années 2000. » |
| Appartement | `appartement.png` | `cas-appartement.png` (**attendu**, emplacement vide) | vide, à rédiger |
| Construction de maison neuve | `neuf.png` (attendu) | `cas-neuf.png` (**attendu**, emplacement vide) | vide, à rédiger |
| Changement d'équipement | `technique.png` | `cas-equipement.png` (**attendu**, emplacement vide) | vide, à rédiger |

- **Aucun changement de mise en page.** Le composant affichait déjà les images sans cadre, arrondi ni ombre, posées sur le violet. Vérifié dans le navigateur : sur le conteneur de l'image, `border-radius: 0`, `box-shadow: none`, fond transparent.
- **Recadrage automatique conservé** (`zoneDessinee()`, `src/data/illustrations.ts`). Les PNG 3D font 1200 × 1200px, dont 28 à 38 % de pixels transparents. La zone réellement dessinée est mesurée à la construction du site, et elle remplit la largeur de la colonne (573px à 1280px).
- Dès qu'un fichier `cas-appartement.png`, `cas-neuf.png` ou `cas-equipement.png` est déposé dans `src/assets/illustrations/`, il s'affiche sans toucher au code. Il faudra seulement ajouter son texte alternatif dans `src/data/cas-types.ts`.

### 2. Fichiers orphelins (non supprimés, comme demandé)

- `src/assets/illustrations/appartement.png` et `technique.png` : présents, plus utilisés nulle part (vérifié par recherche dans `src/`).
- `pierre.png`, `annees70.png`, `moderne.png` : **déjà absents du dossier** avant cette tâche, et absents de Git. Rien à faire.

### 3. Vérification (`captures/cas-types-3d/`)

Chromium sans interface, serveur de dev, fenêtre de 1280px, animations réduites. L'en-tête collant et la barre d'outils d'Astro sont masqués pour les captures.

- `1280-onglet-1.png` (Bâti ancien) : ✅ l'image se détache nettement du violet, sans aucun rectangle blanc.
- `1280-onglet-2.png` (Années 50 à 90) : ⚠️ l'image se détache bien, **mais du fond blanc résiduel reste pris dans l'échafaudage**, sous le plancher et à droite (question 168). Il n'y a pas de rectangle blanc autour de l'image : le contour est propre.
- `1280-onglet-3.png` (Années 1995 à 2012) : ✅ aucun blanc résiduel. ⚠️ **La maison est coupée net en haut et à gauche**, au bord du fichier (question 169).
- Analyse des fichiers : les 4 coins sont transparents pour `cas-ancien` et `cas-annees70`. Pour `cas-recent`, le coin haut gauche est opaque (le mur de la maison). Blanc pur opaque : 0,19 % des pixels (ancien), 2,93 % (années 70, dont l'échafaudage, mais aussi les pulls et la fenêtre), 0,73 % (récent).
- Les trois onglets vides affichent bien l'emplacement vide, avec les nouveaux noms (attribut `data-illustration-absente`).
- Textes alternatifs relus dans le DOM : conformes, mot pour mot.

### 4. Fichiers

- `src/data/cas-types.ts` : noms d'images, textes alternatifs, commentaires.
- `src/data/illustrations.ts` : liste des fichiers en commentaire.
- `src/components/CasTypes.astro` : commentaires seulement.
- Nouvelles captures : `captures/cas-types-3d/`.
- **Rien n'est commité.**

### 5. À arbitrer

Questions 168 à 172, dans « Questions en attente de réponse » : blanc résiduel de `cas-annees70.png`, maison coupée dans `cas-recent.png`, onglets désormais vides, suppression des orphelins, mélange 3D / dessins au trait sur la page.

## Badge à 90 %, seuils de la Méthode et raccourcis tactiles (14 octobre 2026)

### 1. Badge du Hero sur téléphone (`src/components/Hero.astro`)

- **Sous 768px** : `block w-[90%] text-left`. Le badge prend 90 % de la largeur du conteneur, et le texte est aligné à gauche. Les 10 % manquants créent le décalage voulu avec le titre.
- **À partir de 768px** : inchangé (`md:inline-block md:w-auto`, la largeur suit le texte).
- Fond `action-50`, texte `action-800`, `rounded-lg` : inchangés.
- Mesuré à 375px : badge de **301,5px pour un conteneur de 335px (90,0 %)**, `text-align: left`.
- La coupure forcée après « locaux — » est gardée (question 176).

### 2. Seuils de la Méthode (`src/components/MethodeEtapes.astro`)

**Diagnostic** (mesures dans le navigateur) :

- La traversée allait de « moitié du schéma entrée par le bas » à « moitié sortie sous l'en-tête ».
- À 1280 × 900, le schéma n'est **entièrement visible** que sur 40 % de cette traversée (de 30 % à 70 %).
- Les anciens seuils (25 %, 50 %, 75 %, plus 4 % de zone morte) tombaient à 29 %, 54 % et 79 % :
  - l'étape 4 se déclenchait schéma déjà en partie sorti ;
  - l'étape 2 se déclenchait avant que le schéma soit entier. L'étape 1 n'était donc jamais vue avec le schéma entier.
- Répartir simplement les seuils sur les deux premiers tiers de la traversée (17 %, 33 %, 50 %) n'aurait pas suffi : l'étape 2 serait arrivée encore plus tôt, schéma toujours incomplet.

**Correction** :

- Les seuils sont calculés dans la **fenêtre où le schéma est entièrement visible**, mesurée en direct (hauteur du schéma, de l'écran et de l'en-tête collant).
- Ils sont répartis sur les **deux premiers tiers de cette fenêtre** : étape 2 à 15 %, étape 3 à 40 %, étape 4 à 65 %. L'étape 4 reste ensuite affichée, schéma entier, sur le dernier tiers.
- **Zone morte** réduite de 4 % à 2 % de la traversée (16px à 1280 × 900), car les tranches sont plus courtes.
- **Écran bas** : si la fenêtre fait moins de 30 % de la traversée, elle est élargie autour du milieu.

**Moment où chaque étape s'active** (défilement simulé vers le bas par pas de 4px, positions dans l'écran) :

| Écran | Étape 1 | Étape 2 | Étape 3 | Étape 4 | Défilement avec schéma entier, étapes 1 / 2 / 3 / 4 |
|---|---|---|---|---|---|
| 1280 × 900 (en-tête : 122px) | dès l'arrivée | haut du schéma à 370px, bas à 836px | haut à 290px | haut à 214px, bas à 680px | 64 / 80 / 76 / 96px |
| 1280 × 720 | dès l'arrivée | haut à 238px | haut à 190px | haut à 146px | 16 / 48 / 44 / 28px |
| 375 × 667 (en-tête : 73px) | dès l'arrivée | haut à 385px, bas à 594px | haut à 289px | haut à 193px, bas à 402px | 72 / 96 / 96 / 124px |
| 375 × 812 | dès l'arrivée | haut à 506px | haut à 374px | haut à 242px | 96 / 132 / 132 / 172px |

En mots : l'étape 1 est affichée dès que la section arrive. L'étape 2 s'active **dès que le bas du schéma est entièrement entré** dans l'écran, juste au-dessus du bord bas. Les étapes 3 et 4 suivent à intervalles réguliers pendant que le schéma remonte. **L'étape 4 s'active quand le schéma est à peu près au milieu de la zone visible**, avec encore 90 à 120px de marge sous l'en-tête. ✅ Dans les 4 formats, **les 3 changements ont lieu schéma entier**, et chacune des 4 étapes est vue avec le schéma entier.

Le reste est inchangé : défilement jamais intercepté, suspension après un clic, rien si « réduire les animations » est activé.

### 3. Raccourcis du Hero sur écran tactile (`src/components/Hero.astro`)

- **Supprimé** : l'interception du premier toucher (allumage seul, ouverture au second toucher). Sont aussi supprimés l'extinction au toucher ailleurs et l'attribut `data-actif`, avec ses classes, qui ne servait qu'à cela.
- **Un seul toucher ouvre la page**, comme n'importe quel lien.
- **Allumage du schéma** gardé au survol à la souris et au focus clavier. Le faux survol déclenché par le doigt est toujours ignoré.
- **Phrase d'aide** : la version tactile (« Touchez une solution… ») est supprimée. La phrase « Survolez une solution pour la voir sur le schéma. » est masquée sur écran tactile (`pointer-coarse:hidden`) : sur tactile, il n'y a aucune phrase d'aide.

### 4. Vérifications (`captures/corrections-hero-methode/`)

Chromium sans interface, serveur de dev.

- `375-hero.png` : badge à 90 %, texte à gauche, décalage visible avec le titre (qui occupe 100 %).
- `375-hero-raccourcis.png` : en simulation tactile (iPhone 13, `pointer: coarse`), aucune phrase d'aide sous « Par où voulez-vous commencer ? ».
- **Simulation tactile** : un seul toucher (`tap`) sur « Isolation » ouvre directement `/solutions/isolation-thermique-par-l-exterieur-ite`. ✅
- **Souris (1280px)** : le survol d'« Isolation » allume toujours le schéma (`data-allume="isolation-combles isolation-murs"`), et la phrase « Survolez… » est affichée. ✅
- **Méthode** : voir le tableau ci-dessus.
- **Non testé** : vrai téléphone, et lecteurs d'écran (VoiceOver, TalkBack). La suppression du double toucher règle d'ailleurs le risque signalé à la question 131.

### 5. Fichiers

- `src/components/Hero.astro` : badge, phrase d'aide, script d'allumage, commentaires.
- `src/components/MethodeEtapes.astro` : calcul des seuils, zone morte, commentaires.
- **Rien n'est commité.**

### 6. À arbitrer

Questions 173 à 176 : étapes rapides sur ordinateur (piste du schéma collant), étape 2 un peu plus tardive, écran bas, coupure du badge.

## Refonte complète des Cas types : une couleur par onglet (14 octobre 2026, soir)

⚠️ *Tâche interrompue le 14 octobre 2026 (limite d'utilisation atteinte), puis **terminée le 15 octobre 2026** : voir la section « Suite et fin de la refonte des Cas types » plus bas.*

### 1. Ce qui a été fait

- **`src/styles/global.css`** : 6 couleurs `--color-cas-ancien`, `-annees50`, `-annees95`, `-appartement`, `-neuf`, `-modernisation`, valeurs de la demande, sans ajustement. `violet` est marqué « plus utilisé ».
- **`src/data/cas-types.ts`** : réécrit. Contient la teinte, le libellé complet, le libellé court, le paragraphe, les 2 points, le bouton, et des images par ordre de préférence (voir la question 178). Le 6e onglet devient « Modernisation » (id `modernisation`).
- **`src/components/CasTypes.astro`** : réécrit.
  - À partir de 1024px : une grille de 3 colonnes (33 / 19 / 48 %, 2rem d'écart). Les panneaux reprennent les colonnes de la grille (subgrid), et les onglets se posent dans la colonne du centre.
  - Sous 1024px : onglets en 2 colonnes, libellés courts, puis texte, puis illustration.
  - Couleur de fond : `data-teinte` sur la section, transition de 0,4 s. Les nuances (filet, survol, onglet actif, bouton) sont dérivées par `color-mix` de `--cas-fond` et `--cas-texte`.
  - Panneau : fondu et montée en 0,4 s (`@starting-style`).
  - Si « réduire les animations » est activé : changement instantané.
  - Uniquement au clic. Clavier : flèches dans les 4 sens, Début, Fin.
  - Illustration : `lg:deborde-droite`, section en `overflow-x-clip`.

### 2. Contrastes (texte de la section sur son fond ; c'est aussi celui de l'onglet actif et du bouton, aux couleurs inversées)

| Onglet | Fond | Texte | Contraste |
|---|---|---|---|
| Bâti ancien | #1a2b4a | blanc | 14,11:1 ✅ |
| Années 50 à 90 | #fdf0e3 | #16212a | 14,59:1 ✅ |
| Années 1995 à 2012 | #e8f4f0 | #16212a | 14,50:1 ✅ |
| Appartement | #ede8f7 | #16212a | 13,61:1 ✅ |
| Maison neuve | #1e5c45 | blanc | 7,86:1 ✅ (le plus juste) |
| Modernisation | #fde8e0 | #16212a | 13,85:1 ✅ |

Orange #f0920f avec le texte #16212a : 6,87:1 ❌, d'où la question 177.

### 3. Mesures (Chromium, animations réduites, `captures/cas-types-refonte/`)

| Écran | Onglet | Hauteur de la section | Illustration |
|---|---|---|---|
| 1280 | 1 à 6 | 1 096 à 1 323px (onglet 2 : 1 323px, onglet 3 : 1 096px) | de 699 à 1 360px, coupée à 1 280px : **581px visibles = 45,4 % de la largeur** ✅ |
| 375 | 1 et 2 | 1 304 et 1 356px | pleine largeur du contenu (335px), sans débordement |

- **Défilement horizontal : aucun** (`scrollWidth` = largeur de la fenêtre, à 1280px et à 375px). ✅
- Couleur de fond relevée pour chaque onglet : conforme.
- Captures : `1280-onglet-1.png` à `1280-onglet-6.png`, `375-onglet-1.png`, `375-onglet-2.png`. Seule `1280-onglet-2.png` a été relue visuellement ; **les 7 autres restent à relire**. Sur cette capture, l'onglet « Bâti ancien » apparaît survolé, parce que la souris est restée dessus après le clic précédent.

### 4. Reste à faire

- Relire les captures, et en particulier vérifier la grille à 1024px.
- Mesurer le contraste des nuances dérivées (question 180).
- Rédiger les textes alternatifs des nouvelles illustrations dès leur livraison.
- **Rien n'est commité.**

## Suite et fin de la refonte des Cas types (15 octobre 2026)

Reprise de la tâche interrompue la veille. Questions ouvertes : 177, 178 (`aides.jpg`), 182, 183 et 184.

### 1. Ce qui a été fait

- **Les 6 illustrations demandées sont arrivées** dans `src/assets/illustrations/` (déposées le 14 octobre à 19 h 33, juste après les captures de la veille). Elles font toutes 1 200 × 1 200px, sur fond transparent. Ce sont des illustrations 3D : des artisans en casquette orange, avec les matériaux de chaque cas.
- **`src/data/cas-types.ts`** :
  - un seul fichier par cas ; les images de secours `cas-ancien`, `cas-annees70` et `cas-recent` sont retirées, et ces fichiers n'existent plus ;
  - les 6 textes alternatifs sont rédigés, après avoir regardé chaque image :

| Onglet | Fichier | Texte alternatif |
|---|---|---|
| Bâti ancien et historique | `maisonancienne.png` | Un artisan agenouillé, une scie à la main, à côté d'une pile de panneaux d'isolant, d'un seau d'enduit et d'une truelle. |
| Années 50 à 90 | `annee5090.png` | Un artisan sur un échafaudage reçoit un épais panneau d'isolant que lui tend un collègue resté au sol ; d'autres panneaux sont empilés au pied de l'échafaudage. |
| Années 1995 à 2012 | `annee9512.png` | Un artisan agenouillé raccorde les tuyaux en cuivre d'une pompe à chaleur extérieure avec une clé, ses caisses à outils posées au sol. |
| Appartement | `appartement.png` | Un artisan, tournevis en main, pose la main sur une fenêtre double vitrage neuve, à côté d'un caisson de ventilation compact. |
| Construction de maison neuve | `maisonneuve.png` | Un artisan et une cliente penchés sur le plan d'une maison étalé sur des tréteaux, entourés de panneaux solaires et d'un panneau d'isolant. |
| Modernisation | `modernisation.png` | Deux artisans au travail : l'un raccorde une borne de recharge électrique, l'autre tient un panneau solaire. |

- **`src/components/CasTypes.astro`** : nouveaux survols sur les 2 fonds foncés, et bouton souligné au survol (voir le point 2).
- **`src/data/illustrations.ts`** : commentaire d'en-tête mis à jour (liste des fichiers, `aides.jpg` signalé absent).
- `astro build` : réussi, sans erreur.

### 2. Contrastes (tous les couples texte/fond, minimum 7:1)

Texte courant, onglet actif et bouton (mêmes couleurs, inversées) :

| Onglet | Fond | Texte | Contraste |
|---|---|---|---|
| Bâti ancien | #1a2b4a | blanc | 14,11:1 ✅ |
| Années 50 à 90 | #fdf0e3 | #16212a | 14,59:1 ✅ |
| Années 1995 à 2012 | #e8f4f0 | #16212a | 14,50:1 ✅ |
| Appartement | #ede8f7 | #16212a | 13,61:1 ✅ |
| Maison neuve | #1e5c45 | blanc | 7,86:1 ✅ |
| Modernisation | #fde8e0 | #16212a | 13,85:1 ✅ |

Nuances dérivées, mesurées dans le navigateur, en survolant :

| Onglet | Onglet inactif survolé | Bouton survolé | Filet des onglets inactifs (pas un texte, minimum 3:1) |
|---|---|---|---|
| Bâti ancien | 16,81:1 ✅ | 12,71:1 ✅ | 4,91:1 ✅ |
| Années 50 à 90 | 11,74:1 ✅ | 9,27:1 ✅ | 4,08:1 ✅ |
| Années 1995 à 2012 | 11,62:1 ✅ | 9,17:1 ✅ | 4,04:1 ✅ |
| Appartement | 10,99:1 ✅ | 8,77:1 ✅ | 3,95:1 ✅ |
| Maison neuve | 11,34:1 ✅ (avant : 6,18:1 ❌) | 7,23:1 ✅ (avant : 5,81:1 ❌) | 3,50:1 ✅ |
| Modernisation | 11,17:1 ✅ | 8,88:1 ✅ | 3,98:1 ✅ |

**Correction apportée** : sur le vert « Maison neuve », éclaircir le fond pour le survol faisait tomber le texte blanc sous 7:1. Sur les 2 fonds foncés, le survol d'un onglet assombrit donc le fond (20 % de noir), et le bouton survolé ne se grise que de 5 % (au lieu de 18 %). Pour que le survol du bouton reste visible, il se souligne aussi, sur tous les fonds (question 183).

### 3. Mesures (Chromium, animations réduites)

| Écran | Onglet | Hauteur de la section | Illustration |
|---|---|---|---|
| 1280 | 1 Bâti ancien | 1 180px | cadre de 699 à 1 360px, coupé à 1 280px : 581px visibles (45,4 % de la largeur) |
| 1280 | 2 Années 50 à 90 | 1 323px | idem |
| 1280 | 3 Années 1995 à 2012 | 1 096px | idem |
| 1280 | 4 Appartement | 1 155px | idem |
| 1280 | 5 Maison neuve | 1 209px | idem |
| 1280 | 6 Modernisation | 1 113px | idem |
| 1024 | 1 et 5 | 1 033 et 1 057px | cadre de 566 à 1 104px, coupé à 1 024px : 458px visibles (44,7 %) |
| 375 | 1 et 2 | 1 304 et 1 356px | pleine largeur du contenu (335px), sans débordement |

- **Illustration coupée par le bord droit** : oui, à 1280 et à 1024px (80px coupés). ✅
- **Défilement horizontal : aucun** (`scrollWidth` = largeur de la fenêtre, à 1280, 1024 et 375px). ✅
- **Taille** : la partie visible fait 45,4 % de la largeur à 1280px ; le cadre entier (coupé compris) en fait 51,6 %. À 1024px, la partie visible fait 44,7 %, juste sous les 45 % demandés.
- **La hauteur varie selon l'onglet** (227px d'écart à 1280px) : question 184.
- **Grille à 1024px vérifiée** : les 3 colonnes tiennent ; « Années 1995 à 2012 » passe sur 2 lignes dans les onglets, sans gêne.

### 4. Captures (`captures/cas-types-illustrations/`, relues une à une)

- `1280-onglet-1.png` à `1280-onglet-6.png` : les 6 onglets ;
- `1280-onglet-5-survol-bouton.png` : bouton survolé sur le vert (souligné) ;
- `1024-onglet-1.png`, `1024-onglet-5.png` ;
- `375-onglet-1.png`, `375-onglet-2.png`.

L'en-tête collant du site et la barre d'outils d'Astro sont masqués sur ces captures, pour ne pas cacher le titre. Les captures de la veille (`captures/cas-types-refonte/`) montrent encore les anciennes images : elles sont périmées.

### 5. Reste à faire

- Relire les textes alternatifs (question 182).
- Trancher les questions 177, 183 et 184, et le sort de `aides.jpg` (question 178).
- **Rien n'est commité.**

## Badge sans coupure forcée et rythme de la Méthode (15 octobre 2026)

Deux corrections. Questions ouvertes : 185, 186 et 187. Les questions 173 et 176 sont réglées.

### 1. Badge du Hero (`src/components/Hero.astro`)

- **`<br class="md:hidden">` supprimé.** La phrase coule librement et passe à la ligne là où la place manque.
- **Ce qui est conservé** :
  - largeur de 90 %, texte aligné à gauche ;
  - fond action-50, texte action-800 ;
  - « sans sous-traitance. » groupé (`whitespace-nowrap`).
- **Vérifié** : le badge ne contient aucun autre `<br>`, ni `&nbsp;`, ni espace insécable. Le HTML rendu est exactement : `Collectif d'artisans locaux — en direct, <span class="whitespace-nowrap">sans sous-traitance.</span>`.
- **Coupures observées** (captures `captures/methode-rythme/320-badge.png`, `360-badge.png`, `375-badge.png` et `414-badge.png`) :
  - 375px : « Collectif d'artisans locaux — en direct, » / « sans sous-traitance. » ;
  - 320px : « Collectif d'artisans locaux — en » / « direct, sans sous-traitance. ».
- **Risque** : un tiret pourrait se retrouver en début de ligne (question 185).

### 2. Rythme de la Méthode (`src/components/MethodeEtapes.astro`)

**Pourquoi la marge seule ne suffisait pas.** Sans rien qui reste fixé à l'écran, le schéma n'est entier que pendant « hauteur visible − hauteur du schéma », soit 312px à 1280 × 900, quelle que soit la hauteur de la section. Une marge en plus aurait allongé la section sans rien changer au rythme des étapes (c'était déjà la question 173).

**Ce qui a été fait : une « piste collante ».**
- Un élément vide `[data-methode-piste]`, sous les colonnes, allonge la section de **30 %**.
- Pendant ce surplus de défilement, les colonnes restent **collées à l'écran** (`position: sticky`), centrées sous l'en-tête :
  - à partir de 1024px : les deux colonnes, étapes et schéma ;
  - sous 1024px : seulement le schéma et son texte.
- **Rien n'est bloqué** : la page défile toujours au rythme de la molette ou du doigt, et aucun `preventDefault` n'est ajouté.
- **Conditions** : le collage ne s'applique que si ce qui colle tient dans la hauteur visible, avec 16px de marge. Il est désactivé si « réduire les animations » est activé, et sans JavaScript.
- Les réglages sont recalculés au redimensionnement, puis quand les polices et les images sont chargées.
- **Seuils écartés** : étape 2 à 20 % de la fenêtre où le schéma est entier, étape 3 à 45 %, étape 4 à 70 % (avant : 15, 40 et 65 %).
- **Zone morte** : toujours 2 % de la traversée.
- Calcul de la progression : il est repris sur la grille, qui, elle, ne colle pas. Sans piste, il donne exactement le même résultat qu'avant.

### 3. Mesures (Chromium, balayage du défilement par pas de 4px, positions en `scrollY`)

| Écran | Hauteur de la section | Piste | Schéma entier de… à… | Étape 2 | Étape 3 | Étape 4 | Écart entre étapes |
|---|---|---|---|---|---|---|---|
| 1280 × 900 | **1 711px** (avant 1 316, +30 %) | 331px (+48 d'écart) | 1 887 → 2 595 (**708px**, avant 312) | 2 055 | 2 231 | 2 407 | **176px** (avant 76 à 80) |
| 1024 × 768 | 1 595px (avant ≈ 1 227) | 320px | 2 677 → 3 357 (680px) | 2 833 | 3 005 | 3 177 | 172px |
| 375 × 667 | **2 200px** (avant 1 692, +30 %) | 468px | 3 372 → 4 264 (892px) | 3 572 | 3 796 | 4 020 | **224px** (avant 96) |
| 1280 × 720 | 1 316px (inchangée) | aucune : les colonnes ne tiennent pas | 2 067 → 2 199 (132px) | 2 095 | 2 139 | 2 183 | 44px (question 186) |

- **L'étape 4 se déclenche toujours avec le schéma entier**, à toutes les tailles. À 1280 × 900, elle reste ensuite affichée, schéma entier, pendant 188px.
- **L'étape 1** est vue avec le schéma entier pendant 168px avant le passage à l'étape 2 (1280 × 900).
- **En remontant**, les étapes redescendent de 4 à 1 aux mêmes endroits, à la zone morte près : 2 358, 2 182 et 2 002 à 1280 × 900.
- **Défilement horizontal : aucun**, à toutes les tailles.
- **Captures** (`captures/methode-rythme/`) : `<taille>-etape-2.png` à `-etape-4.png` pour chaque taille, et les badges. Relues : étapes 2 et 4 à 1280 × 900 (colonnes collées, schéma entier), étape 3 à 375 × 667, badges à 375 et 320px.
- `astro build` : réussi.

### 4. Reste à faire

- Questions 185 (tiret du badge), 186 (écrans bas) et 187 (étapes hors de l'écran sur téléphone pendant le collage).
- Rien n'est commité.

## Cas types : onglets centrés, superposés à l'illustration (15 octobre 2026)

Questions ouvertes : **188** (taille du dessin contre chevauchement, à trancher) et 189. La question 184 (hauteur variable) est réglée.

### 1. Ce qui a été fait (`src/components/CasTypes.astro`)

- **Grille à partir de 1024px**, de 3 colonnes : texte | onglets (15rem) | reste.
  - Les deux colonnes latérales sont égales, donc les onglets sont au **centre exact** de la page.
  - **L'illustration occupe la même case que les onglets**, plus la colonne de droite. Elle commence sous les onglets et s'étend jusqu'au bord de l'écran (`deborde-droite`), qui la coupe (80px hors écran).
  - Les onglets sont au-dessus (`z-index`), avec un **fond plein**, la couleur de la section sans transparence. Les contrastes sont inchangés.
  - Les panneaux reprennent les colonnes de la grille (`subgrid`). **Aucune position absolue.**
- **Taille de l'illustration** :
  - la case ne pèse pas sur la hauteur de la rangée (`contain: size`) ;
  - le dessin y est calé à droite, à une hauteur de **120 % du bloc de texte le plus haut des 6** (variable `--cas-dessin`, posée par le script, recalculée au redimensionnement).
  - Voir la question 188 : ce plafond empêche le chevauchement à 1280px.
- **Hauteur stable** : les 6 panneaux sont **superposés** dans la même case, comme le texte de la Méthode.
  - Les panneaux inactifs sont en `visibility: hidden`, donc masqués aussi pour les lecteurs d'écran et hors de l'ordre de tabulation.
  - La section prend la hauteur du plus haut.
  - S'applique à toutes les largeurs.
- **Transition** : le nouveau panneau arrive en fondu avec une légère montée (0,4 s), et l'ancien disparaît d'un coup, pour ne pas mélanger deux textes. Tout est instantané si « réduire les animations » est activé.
- **Sous 1024px** : pas de superposition avec l'illustration. Ordre : onglets en 2 colonnes, puis texte, puis illustration.
- **Sans JavaScript** :
  - pas d'onglets ;
  - chaque panneau sur 2 colonnes égales (texte, illustration), les 6 les uns sous les autres ;
  - vérifié : pas de défilement horizontal.
- `astro build` : réussi.

### 2. Mesures (Chromium, animations réduites)

| Écran | Hauteur de la section | Centre des onglets | Défilement horizontal |
|---|---|---|---|
| 1280 | **889px pour les 6 onglets** (avant : 1 096 à 1 323px) | **640px = centre exact** (onglets de 520 à 760px) | aucun (`scrollWidth` = 1 280) |
| 1024 | **932px pour les 2 onglets testés** | **512px = centre exact** (de 392 à 632px) | aucun (1 024) |
| 375 | **1 356px pour les 2 onglets testés** | pleine largeur, 2 colonnes | aucun (375) |

**Hauteur du dessin et du texte :**

| Écran | Texte le plus haut | Dessin | Dessin / texte le plus haut |
|---|---|---|---|
| 1280 | 364px | 437px de haut, de 353 à 488px de large selon l'onglet | 1,20 |
| 1024 | 448px | 538px | 1,20 |

**Chevauchement avec les onglets :**
- **à 1024px : oui.** Le dessin commence à 578px (onglet 1) ou 670px (onglet 2), sous la colonne d'onglets qui s'arrête à 632px ;
- **à 1280px : non.** Les dessins commencent entre 872 et 1 007px, et les onglets s'arrêtent à 760px (question 188).

À 1280px, la section passe de 1 096–1 323px à 889px : le dessin n'écrase plus le texte.

### 3. Captures (`captures/cas-types-superposition/`)

- `1280-onglet-1.png` à `1280-onglet-6.png` ;
- `1024-onglet-1.png`, `1024-onglet-2.png` ;
- `375-onglet-1.png`, `375-onglet-2.png`.

Relues : 1280 onglets 2 et 3, 1024 onglet 1, 375 onglet 2. L'en-tête collant et la barre d'outils d'Astro sont masqués sur les captures.

Problème rencontré : le serveur de développement servait une ancienne version du style de la section (cache de Vite). Il a fallu le redémarrer avant les mesures.

### 4. Reste à faire

- Trancher la question 188. Un seul réglage (`1.2` dans le script, et le calage à droite) suffira à appliquer le choix.
- Rien n'est commité.

## Cas types : illustration adossée aux onglets (15 octobre 2026)

Questions ouvertes : 190 (demande tronquée) et 191 (hauteur de la section). La question 188 est réglée.

### 1. Ce qui a été fait (`src/components/CasTypes.astro`, à partir de 1024px)

- **Calage à gauche** : l'illustration est dans la colonne de droite, tirée de **3rem (48px) vers la gauche**, sous la colonne d'onglets. Les onglets restent au-dessus, avec leur fond plein.
- **Débordement réduit** : l'illustration s'étire jusqu'au bord droit de l'écran, plus **24px coupés** par ce bord (avant : 80px). La classe `deborde-droite` n'est plus utilisée ici : même calcul, avec un dépassement de 1,5rem au lieu de 5rem.
- **Plafond de 120 % supprimé** : le script `hauteurDessin` et la variable `--cas-dessin` sont retirés. La hauteur découle de la largeur, selon les proportions du dessin.
- **Hauteur toujours stable** : la rangée commune prend la hauteur du plus haut des 6 dessins.
- **Sans JavaScript** : panneaux sur 2 colonnes, sans débordement.
- Sous 1024px : inchangé.
- `astro build` : réussi.

### 2. Mesures (Chromium, animations réduites)

| Écran | Hauteur de la section (tous les onglets testés) | Onglets | Dessin | Chevauchement | Coupé par le bord | Défilement horizontal |
|---|---|---|---|---|---|---|
| 1280 | **1 213px** (stable) | 520 → 760px, centre 640px | de 732px à 1 304px (572px de large ; 513 à 709px de haut) | 28px | 24px | aucun |
| 1024 | **1 034px** (stable) | 392 → 632px, centre 512px | de 604px à 1 048px (444px de large ; 454 et 550px de haut) | 28px | 24px | aucun |
| 375 | 1 356px (stable) | 2 colonnes | pleine largeur du contenu | — | — | aucun |

- **Chevauchement de 28px.** Le cadre commence 48px avant la colonne de droite, mais l'écart entre les colonnes en absorbe 20. Les dessins étant recadrés au plus près de leurs pixels non transparents, ce sont bien 28px de dessin qui passent sous les onglets : par exemple, à 1280px, le bord de la pompe à chaleur de « Années 1995 à 2012 » et l'ouvrier de gauche de « Années 50 à 90 ». Pour un chevauchement plus marqué, il suffit d'augmenter `--cas-chevauchement`.

### 3. Captures (`captures/cas-types-superposition/`, remplacées)

- `1280-onglet-1.png` à `1280-onglet-6.png` ;
- `1024-onglet-1.png`, `1024-onglet-2.png` ;
- `375-onglet-1.png`, `375-onglet-2.png`.

Relues : 1280 onglets 2 et 3, 1024 onglet 2.

Problème rencontré à nouveau : le serveur de développement servait un style périmé. Il a fallu le redémarrer avant de mesurer.

### 4. Reste à faire

- Questions 190 et 191.
- Rien n'est commité.

## Cas types : plafond de hauteur rétabli (15 octobre 2026)

Question ouverte : 192. La question 191 est réglée.

### 1. Ce qui a été fait (`src/components/CasTypes.astro`, à partir de 1024px)

- **Plafond rétabli** : le script `hauteurDessin` pose `--cas-dessin`, égal à 120 % du bloc de texte le plus haut des 6. Il est recalculé au redimensionnement et quand les polices sont chargées. La largeur découle de cette hauteur.
- **Ce qui reste en place** :
  - le calage à **gauche**, avec le décalage de 3rem sous les onglets ;
  - au plus **24px** coupés par le bord droit ;
  - la **hauteur stable**. La case de l'illustration ne pèse plus sur la hauteur de la rangée (`container-type: size`, qui inclut `contain: size`).
- **Ajout** : la largeur du dessin est limitée à sa case (unités `cqw`, rapport largeur/hauteur passé au cadre dans `--cas-ratio`). Ainsi, le dessin ne dépasse jamais de plus de 24px le bord de l'écran. Cette limite ne joue qu'à 1024px (question 192).
- `astro build` : réussi.

### 2. Mesures (Chromium, animations réduites)

**1280px** : section de **889px pour les 6 onglets**. Texte le plus haut : 364px. Onglets de 520 à 760px, centre 640px.

| Onglet | Dessin (haut × de… à…) | Dessin / texte le plus haut | Chevauchement | Bord droit de l'écran |
|---|---|---|---|---|
| 1 Bâti ancien | 437px, de 732 à 1 159px | **1,20** | 28px | non atteint (121px avant) |
| 2 Années 50 à 90 | 437px, de 732 à 1 085px | **1,20** | 28px | non atteint |
| 3 Années 1995 à 2012 | 437px, de 732 à 1 220px | **1,20** | 28px | non atteint |
| 4 Appartement | 437px, de 732 à 1 175px | **1,20** | 28px | non atteint |
| 5 Maison neuve | 437px, de 732 à 1 142px | **1,20** | 28px | non atteint |
| 6 Modernisation | 437px, de 732 à 1 206px | **1,20** | 28px | non atteint |

**1024px** : section de **932px pour les 6 onglets**. Texte le plus haut : 448px. Onglets de 392 à 632px, centre 512px.

| Onglet | Dessin | Dessin / texte le plus haut | Chevauchement | Bord droit |
|---|---|---|---|---|
| 1 | 454px, de 604 à 1 048px | 1,01 (limité en largeur) | 28px | coupé de 24px |
| 2 | 538px, de 604 à 1 038px | **1,20** | 28px | coupé de 14px |
| 3 | 398px | 0,89 (limité) | 28px | coupé de 24px |
| 4 | 438px | 0,98 (limité) | 28px | coupé de 24px |
| 5 | 474px | 1,06 (limité) | 28px | coupé de 24px |
| 6 | 409px | 0,91 (limité) | 28px | coupé de 24px |

**375px** : section de 1 356px pour les 2 onglets testés (inchangée).

**Défilement horizontal : aucun**, à 1280, 1024 et 375px, pour tous les onglets testés.

### 3. Captures (`captures/cas-types-plafond/`)

- `1280-onglet-1.png` à `1280-onglet-6.png` ;
- `1024-onglet-1.png` à `1024-onglet-6.png` ;
- `375-onglet-1.png`, `375-onglet-2.png`.

Relues : 1280 onglets 2 et 5, 1024 onglet 1. Les onglets 1, 2 et 5 demandés sont dans le dossier, aux deux largeurs.

### 4. Reste à faire

- Question 192.
- Rien n'est commité.

## Cas types : trois colonnes séparées, sans chevauchement ni débordement (15 octobre 2026)

Questions ouvertes : 193 et 194. La question 192 est remplacée par la 193.

### 1. Ce qui a été fait (`src/components/CasTypes.astro`, à partir de 1024px)

- **Chevauchement abandonné** : le décalage de 3rem vers la gauche est supprimé.
- **Débordement supprimé** : l'illustration reste dans sa colonne (la 3e) ; rien n'est coupé par le bord de l'écran.
- **Trois colonnes nettement séparées** : texte et bouton | onglets (15rem) | illustration, avec **2,5rem d'écart** entre chaque. Les colonnes latérales sont égales : les onglets restent au **centre exact**.
- **Taille** : toujours le plafond de **120 % du bloc de texte le plus haut** (script `hauteurDessin`). Si la colonne est trop étroite, la largeur est limitée à la colonne et la hauteur réduite d'autant (`cqw`, `--cas-ratio`). Le dessin est centré dans sa colonne.
- **Alignement vertical** : texte, onglets et illustration sont **calés en haut** de la rangée, et commencent à la même hauteur. L'illustration ne dépasse plus au-dessus des onglets.
- **Hauteur stable** : panneaux toujours superposés ; la rangée prend la hauteur du plus haut des éléments des 6 panneaux.
- Sous 1024px : inchangé.
- `astro build` : réussi.

**Problème rencontré et corrigé** : le `z-index` des onglets avait d'abord été retiré, car il ne servait plus au chevauchement. Or les panneaux couvrent les 3 colonnes et viennent après les onglets dans la page. Sans lui, ils recouvraient les onglets et **interceptaient les clics** : la vérification automatique n'arrivait plus à cliquer. Le `z-index` est rétabli et commenté.

### 2. Mesures (Chromium, animations réduites)

| Écran | Hauteur de la section | Texte | Onglets | Illustration | Haut des 3 colonnes |
|---|---|---|---|---|---|
| 1280 | **903px pour les 6 onglets** (avant : 889px) | 35 → 480px ; le plus haut : 333px | 520 → 760px, **centre 640px** | entre 800 et 1 245px ; **399px de haut = 1,20 × 333px** pour les 6 | **382px pour les trois** ✅ |
| 1024 | **900px pour les 6 onglets** | 20 → 352px ; le plus haut : 417px | 392 → 632px, **centre 512px** | entre 672 et 1 004px ; 297 à 412px de haut (limitée par la colonne, question 193) | **363px pour les trois** ✅ |
| 375 | 1 356px (inchangée) | — | — | — | — |

- **Chevauchement : aucun.**
  - À 1280px : texte jusqu'à 480px, onglets de 520 à 760px, illustration à partir de 800px. Il y a 40px de vide entre chaque colonne.
  - À 1024px : 352 / 392–632 / 672px. Même chose.
- **Débordement : aucun.** L'illustration finit au plus à 1 245px (le contenu s'arrête à 1 260px) à 1280px, et à 1 004px (contenu jusqu'à 1 004px) à 1024px.
- **Défilement horizontal : aucun** (`scrollWidth` = largeur de la fenêtre, à 1280, 1024 et 375px).

### 3. Captures (`captures/cas-types-trois-colonnes/`)

- `1280-onglet-1.png` à `1280-onglet-6.png` ;
- `1024-onglet-1.png` à `1024-onglet-6.png` ;
- `375-onglet-1.png`, `375-onglet-2.png`.

Les onglets 1, 2 et 6 demandés y sont, aux deux largeurs. Relues : 1280 onglet 1, 1024 onglet 6.

### 4. Reste à faire

- Questions 193 et 194.
- Rien n'est commité.

## Cas types : illustration en débordement vertical, façon alan.com (15 octobre 2026)

Questions ouvertes : **195** (pas de coupe en haut ni en bas) et 196. Les questions 193 et 194 sont sans objet.

### 1. Ce qui a été fait (`src/components/CasTypes.astro`, à partir de 1024px)

- **L'illustration est une couche en position absolue**, hors flux : elle ne pèse plus sur la hauteur de la section.
  - **Référence** : le panneau (`position: relative`), qui a exactement la boîte du bloc texte + onglets.
  - **Hauteur** : **140 %** de ce bloc (`top: -20%`, `height: 140%`), centrée dessus. Elle dépasse donc de 20 % en haut et en bas.
  - **Horizontalement** : elle commence 1,5rem avant le bord droit des onglets (léger chevauchement) et va jusqu'au bord droit de l'écran. Le dessin est calé à gauche ; s'il est plus large que la place, il est coupé par le bord de l'écran.
- **Les onglets restent au-dessus** (`z-index: 1`, fond plein).
- **Grille** : texte | onglets (15rem) | espace libre (2,5rem d'écart). Les onglets restent au **centre exact** ; la 3e colonne n'a plus de contenu.
- **Section coupée** : `overflow: clip` à partir de 1024px (classe `lg:overflow-clip`), plutôt que `overflow: hidden`. Le rendu est le même, mais avec `hidden` la section devenait une zone défilable : son contenu dépasse de 58px, et un focus clavier ou un `scrollIntoView` aurait pu la faire glisser. Vérifié : avec `clip`, forcer `scrollLeft` ou `scrollTop` reste sans effet (0).
- **Supprimé** :
  - le script `hauteurDessin` et la variable `--cas-dessin` (plafond de 120 %) ;
  - la limite de largeur (`--cas-ratio`, `cqw`).
- Sous 1024px : inchangé (illustration dans le flux, sous le texte).
- `astro build` : réussi.

### 2. Mesures (Chromium, animations réduites)

| Écran | Hauteur de la section | Bloc texte + onglets | Dessin | Onglets | Chevauchement |
|---|---|---|---|---|---|
| 1280 | **889px pour les 6 onglets** ✅ | 386px (haut à 383px du haut de la section) | **540px = 1,40 × 386**, de 77px au-dessus à 77px au-dessous du bloc ; de 736px vers la droite (jusqu'à 1 171 à 1 338px selon le dessin) | 520 → 760px, **centre 640px** | 24px |
| 1024 | **900px pour les onglets 1, 2 et 5** | 417px | 583px = 1,40 × 417 ; de 608px vers la droite (1 078 à 1 178px) | 392 → 632px, **centre 512px** | 24px |
| 375 | 1 356px (inchangée) | — | dans le flux | — | — |

**Coupe par les bords :**
- **À droite** (bord de l'écran) : oui, pour les dessins larges. À 1280px, c'est le cas de « Années 1995 à 2012 » (jusqu'à 1 338px), « Appartement » (1 284px) et « Modernisation » (1 322px) ; à 1024px, des 3 onglets mesurés.
- **En haut et en bas : NON.** Le dessin finit à 306px du haut de la section et à 43px de son bas, à 1280px (question 195).

**Défilement :**
- **Défilement horizontal parasite : aucun** (`scrollWidth` de la page = largeur de la fenêtre, à 1280, 1024 et 375px).
- **Défilement vertical parasite : aucun.** La section mesure exactement sa hauteur (`scrollHeight` = `clientHeight`), et la page n'est pas allongée par le dessin.

### 3. Captures (`captures/cas-types-debordement/`)

- `1280-onglet-1.png` à `1280-onglet-6.png` ;
- `1024-onglet-1.png`, `1024-onglet-2.png`, `1024-onglet-5.png` ;
- `375-onglet-1.png`, `375-onglet-2.png`.

Relues : 1280 onglet 2, 1024 onglet 5.

### 4. Reste à faire

- Trancher la question 195.
- Rien n'est commité.

## Cas types : titre « Chaque projet… » et illustration calée à droite (15 octobre 2026)

Questions ouvertes : 195 (toujours ouverte : pas de coupe en haut ni en bas), 197 et 198.

### 1. Titre et textes

- **Titre** : « Chaque maison a ses spécificités » → **« Chaque projet a ses spécificités »**. Une espace insécable relie « a » et « ses » : sans elle, la coupure tombait en « Chaque projet a / ses spécificités ». Le titre se lit maintenant « Chaque projet / a ses spécificités » à 1280, 1024 et 375px.
- **Autres « maison » de la section** (`src/data/cas-types.ts`) : un seul texte modifié, celui de l'onglet Modernisation (« …communique bien avec le reste ~~de la maison~~ **du logement**. »). Les autres sont laissés tels quels (question 198). L'origine de cette modification est notée en tête du fichier.
- Commentaires mis à jour (`CasTypes.astro`, `cas-types.ts`).

### 2. Position de l'illustration (`src/components/CasTypes.astro`, à partir de 1024px)

- **Toujours en position absolue, hors flux, à 140 % du bloc texte + onglets.** Seule la position horizontale a changé.
- **Couche** : elle va du bord droit des onglets + **2,5rem** (le même écart qu'entre le texte et les onglets) jusqu'au bord droit de l'écran.
- **Dessin** : calé à **droite** dans cette couche. Il dépasse de **24px** le bord de l'écran, qui le coupe.
- **Plus aucun chevauchement** : la largeur du dessin est limitée à celle de la couche (+ 24px). Un dessin plus large voit sa hauteur réduite d'autant (`--cas-ratio`, `cqw`, `cqh`), pour ne jamais passer sous les onglets (question 197).
- Commentaire du `z-index` des onglets mis à jour : il ne sert plus qu'à les garder au-dessus des panneaux, qui sinon intercepteraient les clics.
- `astro build` : réussi.

### 3. Mesures (Chromium, animations réduites)

| Écran | Onglet | Hauteur de la section | Espace onglets → dessin | Dessin (haut) | Dépassement à droite |
|---|---|---|---|---|---|
| 1280 | 1 Bâti ancien | 889px | 40px | 515px | 24px |
| 1280 | **2 Années 50 à 90** | 889px | **109px** (dessin étroit, calé à droite) | 540px | 24px |
| 1280 | 3 | 889px | 40px | 452px | 24px |
| 1280 | 4 | 889px | 40px | 497px | 24px |
| 1280 | **5 Maison neuve** | 889px | **40px** | 538px | 24px |
| 1280 | 6 | 889px | 40px | 464px | 24px |
| 1024 | 1 à 6 | **900px** | **40px** pour les 6 | 337 à 466px | 24px |

- **Hauteur de la section inchangée** : 889px à 1280px et 900px à 1024px, comme avant cette correction, et stable sur les 6 onglets. 375px : 1 356px, inchangée.
- **Espace onglets → dessin** : au moins 40px partout, soit le même écart (2,5rem) qu'entre le texte et les onglets. Aucun contact.
- **Défilement horizontal : aucun** (1280, 1024, 375px).
- **Coupe en haut et en bas : toujours non.** Le dessin finit à 306px et plus du haut de la section, et à 43px et plus de son bas (question 195, toujours ouverte).

### 4. Captures (`captures/cas-types-cale-droite/`)

- `1280-onglet-1.png` à `1280-onglet-6.png` ;
- `1024-onglet-1.png` à `1024-onglet-6.png` ;
- `375-onglet-1.png`, `375-onglet-2.png`.

Les onglets 2 et 5 demandés y sont, aux deux largeurs. Relues : 1280 onglets 2 et 5, 1024 onglet 2, 375 onglet 1.

### 5. Reste à faire

- Questions 195, 197 et 198.
- Rien n'est commité.

## Cas types : illustration centrée dans l'espace libre à droite (15 octobre 2026)

Questions ouvertes : **199** (taille des dessins), 195 (toujours ouverte : pas de coupe en haut ni en bas) et 198. La question 197 est remplacée par la 199.

### 1. Ce qui a été fait (`src/components/CasTypes.astro`, à partir de 1024px)

- **Seul l'ancrage horizontal change.** La couche absolue couvre exactement l'espace libre, du bord droit des onglets (`left: calc(50% + 7.5rem)`) au bord droit de l'écran (`right: -marge-ecran`). Le dessin y est **centré**, en flexbox (`justify-content: center`).
  - C'est équivalent au « left à mi-chemin + translate de −50 % » suggéré, mais plus simple, car la couche sert aussi de conteneur de requête pour limiter la taille.
- **Respiration** : 2,5rem de chaque côté (padding de la couche), le même écart qu'entre le texte et les onglets. Le dessin ne touche donc jamais les onglets, ni le bord de l'écran. Plus aucun débordement à droite.
- **Taille** :
  - celle d'avant (140 % du bloc texte + onglets) si elle tient ;
  - sinon, le dessin est **réduit** (et non décalé), selon sa largeur disponible (`100cqw / --cas-ratio`). Voir la question 199.
- **Inchangé** :
  - position absolue, hors flux ;
  - débordement vertical à 140 %, coupe par la section (`overflow: clip`) ;
  - hauteur de la section fixée par le texte et les onglets, et stable ;
  - sous 1024px.
- `astro build` : réussi.

### 2. Mesures (Chromium, animations réduites)

| Écran | Onglet | Hauteur de la section | Onglets → dessin | Dessin → bord de l'écran | Dessin (haut × large) |
|---|---|---|---|---|---|
| 1280 | **1** Bâti ancien | 889px | **40px** | **40px** | 450 × 440px |
| 1280 | **2** Années 50 à 90 | 889px | **42px** | **42px** | 540 × 436px |
| 1280 | 3 | 889px | 40px | 40px | 394 × 440px |
| 1280 | 4 | 889px | 40px | 40px | 434 × 440px |
| 1280 | **5** Maison neuve | 889px | **40px** | **40px** | 469 × 440px |
| 1280 | 6 | 889px | 40px | 40px | 405 × 440px |
| 1024 | **1** | 900px | **40px** | **40px** | 319 × 312px |
| 1024 | **2** | 900px | **40px** | **40px** | 387 × 312px |
| 1024 | 3 | 900px | 40px | 40px | 280 × 312px |
| 1024 | 4 | 900px | 40px | 40px | 308 × 312px |
| 1024 | **5** | 900px | **40px** | **40px** | 333 × 312px |
| 1024 | 6 | 900px | 40px | 40px | 288 × 312px |

- **Les deux distances sont égales** (au pixel près) pour les 6 onglets, aux deux largeurs.
- **Hauteur de la section inchangée** : 889px à 1280px, 900px à 1024px, et 1 356px à 375px.
- **Défilement horizontal : aucun** (1280, 1024, 375px).
- **Coupe en haut et en bas : toujours non** (question 195). Le dessin le plus haut, celui de l'onglet 2, s'arrête à 43px du bas de la section.

### 3. Captures (`captures/cas-types-centre/`)

- `1280-onglet-1.png` à `1280-onglet-6.png` ;
- `1024-onglet-1.png` à `1024-onglet-6.png` ;
- `375-onglet-1.png`, `375-onglet-2.png`.

Relues : 1280 onglet 1, 1024 onglet 5.

### 4. Reste à faire

- Questions 199, 195 et 198.
- Rien n'est commité.

## Cas types : un titre par onglet (15 octobre 2026)

Aucune nouvelle question. Questions toujours ouvertes sur la section : 195, 198 et 199.

### 1. Ce qui a été fait

- **`src/data/cas-types.ts`** : nouveau champ `titre`, avec les 6 titres **fournis, repris mot pour mot, ponctuation comprise** :

| Onglet | Titre |
|---|---|
| Bâti ancien et historique | Préserver le charme, moderniser le confort. |
| Années 50 à 90 | De la passoire thermique à l'indépendance énergétique |
| Années 1995 à 2012 | Moderniser vos équipements pour faire des économies |
| Appartement | Rénover malin, sans fâcher le syndic. |
| Construction de maison neuve | Concevoir une maison qui vous rend indépendant |
| Modernisation | Moderniser intelligemment vos équipements |

- **`src/components/CasTypes.astro`** : un `<h3>` en haut de la colonne de texte de chaque panneau, au-dessus du paragraphe.
  - Style : `text-h3` (taille h3, graisse 900, `text-balance`), dans la couleur de texte de la section (héritée, elle change selon l'onglet).
  - Espace de 1,25rem (`mt-5`) avant le paragraphe.
- Cela revient sur la décision du 14 octobre 2026 (« les titres de panneau sont supprimés : le libellé de l'onglet suffit »). Commentaires mis à jour.
- **Contraste** : le titre a la couleur du texte courant sur le même fond, donc les mêmes contrastes (de 7,86:1 à 14,59:1).
- `astro build` : réussi.

### 2. Hauteur de la section (Chromium, animations réduites)

| Écran | Avant | Après | Écart | Stable sur les onglets mesurés ? |
|---|---|---|---|---|
| 1280 | 889px | **983px** | +94px | ✅ oui, 983px pour les 6 |
| 1024 | 900px | **1 021px** | +121px | ✅ oui, 1 021px pour les 6 |
| 375 | 1 356px | **1 466px** | +110px | ✅ oui, 1 466px pour les 2 mesurés |

- C'est le panneau le plus haut qui fixe la hauteur (panneaux superposés) : à 1280px, « Années 1995 à 2012 », dont le titre fait 3 lignes (bloc de texte de 479px).
- **Illustration** : toujours centrée, à 40px des onglets et 40px du bord de l'écran, aux deux largeurs. Sa taille ne change pas, car elle est limitée par la largeur (question 199).
- **Défilement horizontal : aucun** (1280, 1024, 375px).

### 3. Captures (`captures/cas-types-titres/`)

- `1280-onglet-1.png` à `1280-onglet-6.png` ;
- `1024-onglet-1.png` à `1024-onglet-6.png` ;
- `375-onglet-1.png`, `375-onglet-2.png`.

Relues : 1280 onglet 3 (titre de 3 lignes), 375 onglet 2.

### 4. Reste à faire

- Rien n'est commité.

## Cas types : titres de panneau allégés (15 octobre 2026)

Aucune nouvelle question.

### 1. Ce qui a été fait

- **Titres des panneaux** (`src/components/CasTypes.astro`) : `text-h3` (graisse 900, jusqu'à 38px) est remplacé par :
  - **graisse 500** (`font-medium`) ;
  - **taille** `clamp(1.5rem, 2.5vw, 2rem)` : 32px à 1280px et au-delà, réduite proportionnellement en dessous (25,6px à 1024px), et 24px au minimum (375px) ;
  - **interligne 1,25** ;
  - `text-balance` et couleur héritée de la section, inchangés.
- **Police** (`src/styles/global.css`) : **la graisse 500 de Source Sans 3 n'était pas chargée** (seulement 400, 600, 700 et 900). Sans elle, le navigateur aurait affiché une graisse voisine. Elle est ajoutée à l'import Google Fonts. Vérifié : `document.fonts.check('500 32px "Source Sans 3"')` = vrai. Les commentaires de la charte (graisses disponibles, classe `font-medium`) sont mis à jour.
- Le titre (32px, 500) reste nettement plus visible que le paragraphe (18px, 400).
- `astro build` : réussi.

### 2. Mesures (Chromium, animations réduites)

| Écran | Taille / interligne | Lignes par titre | Hauteur de la section | Avant (titres en 900) | Stable ? |
|---|---|---|---|---|---|
| 1280 | 32px / 40px | **2 pour les 6** ✅ (3 au plus avant) | **936px** | 983px | ✅ 936px pour les 6 |
| 1024 | 25,6px / 32px | 2 pour les 6 | **984px** | 1 021px | ✅ 984px pour les 6 |
| 375 | 24px / 30px | 2 pour les 6 | **1 436px** | 1 466px | ✅ 1 436px pour les 6 |

- **Défilement horizontal : aucun** (1280, 1024, 375px).

### 3. Captures (`captures/cas-types-titres-alleges/`)

- `1280-onglet-1.png` à `1280-onglet-6.png` ;
- `375-onglet-1.png`, `375-onglet-2.png`.

Relues : 1280 onglet 3 (le titre le plus long, sur 2 lignes), 375 onglet 1.

Remarque : sur une première série de captures à 375px, l'image n'apparaissait pas, car elle était encore en chargement différé (`loading="lazy"`) au moment de la capture. Avec un chargement forcé, elle s'affiche normalement. C'était un artefact du script de capture, pas un défaut du site.

### 4. Reste à faire

- Rien n'est commité.

## Simulateur d'aides : nouveaux textes et bandeau (15 octobre 2026)

Questions ouvertes : **n° 200 à 203** (« Questions en attente de réponse »). ⚠️ Le montant de 32 000 € n'est pas confirmé par une source officielle (question 200).

### 1. Ce qui a été fait (`src/components/SimulateurAides.astro`)

- **Titre** : « Votre maison peut vous rapporter **plus de 32 000 €**. Il suffit de la rénover. » Une seule phrase continue ; le montant reste en vert-600 (espaces insécables, il ne se coupe pas). **30 000 → 32 000 €.**
- **Paragraphe** remplacé mot pour mot (« Votre maison possède une valeur insoupçonnée… sans que vous ayez à rembourser. »).
- **Sous-titre accentué** (`text-h3`, comme l'ancienne accroche) : « Et en plus on s'occupe de tout : montage du dossier, dépôt des demandes et sécurisation des versements. »
- **Supprimés** : « L'État les verse pour isoler, chauffer… », « Et vous n'avez presque rien à faire. », « On monte votre dossier… ». La question 34 (« L'État les verse ») devient sans objet.
- **Bloc beige vide supprimé** : l'emplacement de `aides.jpg` (fond `bg-creme-fonce`, 28rem / 44rem de haut, classe `deborde-gauche`) est retiré, ainsi que toute référence à `aides.jpg` dans `src/` (composant et commentaire de `src/data/illustrations.ts`). Vérifié : `grep aides.jpg src` ne renvoie rien. La question 178 est réglée.
- **Bandeau `bandeau-aides.png`** sous le texte de la colonne de gauche, sur toute sa largeur :
  - aucun cadre, arrondi, ombre ni fond : il se pose sur le lichen ;
  - recadré automatiquement sur la zone dessinée (`zoneDessinee`, `styleCadre`, `styleRecadrage` de `src/data/illustrations.ts`, mesure à la construction du site) ;
  - **fichier absent : rien n'est rendu** (pas de bloc de remplacement, contrairement aux autres illustrations) ; la colonne s'arrête après le sous-titre ;
  - texte alternatif fourni, repris mot pour mot ; optimisé en WebP (480 à 1600px), chargement différé, animation d'entrée `data-scene-image`.

### 2. Vérification (Chromium, page d'accueil, `bandeau-aides.png` ABSENT)

| Écran | Hauteur de la section | Colonne de gauche | Dernier élément de la colonne | Image dans la section | Défilement horizontal |
|---|---|---|---|---|---|
| 1280 | **843px** | 603px | le sous-titre | 0 | aucun |
| 375 | **1 348px** | 721px | le sous-titre | 0 | aucun |

- **Aucun emplacement vide** : les seuls éléments `bg-creme-fonce` restants sont la barre de progression du simulateur et l'état survol d'un bouton.
- À 1280px, la section est désormais plus courte, car c'est le simulateur (colonne de droite) qui fixe sa hauteur ; il reste environ 240px de lichen sous le sous-titre, que le bandeau remplira.
- Captures : `captures/simulateur-bandeau/1280-section.png`, `375-section.png`, `mesures.json`. Sur la capture à 375px, l'en-tête collant et la barre d'outils d'Astro passent par-dessus la section : artefact de la capture, pas un défaut du site.
- Non vérifié : `astro build` (pas lancé) et le rendu avec l'image (question 203).

### 3. Reste à faire

- Déposer `bandeau-aides.png` dans `src/assets/illustrations/`, puis recapturer (aucune modification de code nécessaire).
- Confirmer le montant de 32 000 € (question 200).
- Rien n'est commité.

## Simulateur d'aides : textes raccourcis, équilibre et fond lagon (15 octobre 2026)

Questions ouvertes : **n° 200 (mise à jour), 204, 205 et 206** (« Questions en attente de réponse »). Les questions 201 et 203 sont réglées ou sans objet.

### 1. Textes (`src/components/SimulateurAides.astro`)

- **Titre** : « Augmentez la valeur de votre bien de **plus de 32 000 €**. » Le montant est en vert-600 et ne se coupe pas (espaces insécables).
- **Paragraphe** : « Offrez-vous plus de confort… (jusqu'à 90 % du prix des travaux). », repris mot pour mot. Une espace insécable est ajoutée dans « 90 % ».
- **Sous-titre** : « On s'occupe de tout : montage du dossier, dépôt des demandes et sécurisation des versements. »
  - **Taille** : `text-h3` (4 lignes) passe à `text-corps font-semibold`, soit la taille du texte courant en graisse 600, et `mt-6` passe à `mt-4`. La couleur `text-texte` (foncée) le distingue du paragraphe (`text-texte-doux`).
  - Résultat : 2 lignes à 1280px, 3 lignes à 375px.
- Les anciens textes sont supprimés.

### 2. Équilibre avec le formulaire : ce qui a été fait

Hauteurs mesurées (Chromium, animations réduites, bandeau affiché) :

| Écran | État | Colonne gauche | Simulateur (droite) | Écart | Section |
|---|---|---|---|---|---|
| 1280 | Question 1 | 587px | 476px | gauche +111 | 827px |
| 1280 | Question 2 | 587px | 412px | gauche +175 | 827px |
| 1280 | Question 3 | 587px | 559px | gauche +28 | 827px |
| 1280 | **Résultat** | 587px | **929px** | **droite +342** | 1 169px |
| 1024 | Question 1 | 589px | 483px | gauche +106 | 829px |
| 1024 | Résultat | 589px | 945px | droite +356 | 1 185px |
| 375 (empilé) | Question 1 | 591px | 451px | — | 1 218px |
| 375 (empilé) | Résultat | 591px | 1 029px | — | 1 796px |

Constats :
- Avec les textes courts, la colonne de gauche ne dépasse plus que de **28 à 175px** pendant les questions (106 à 111px à la question 1). Ce n'est plus « nettement plus haut ».
- À l'**état résultat**, c'est l'**inverse** : le simulateur dépasse de 342px, et un grand vide se forme sous le bandeau.

Décisions :
- **Bandeau non réduit** (152px de haut à 1280px, 123px à 1024px, 87px à 375px). Le réduire aurait à peine réduit l'écart aux questions, et l'aurait creusé à l'état résultat.
- **Bandeau non placé à cheval** sur les deux colonnes : il perdrait son lien avec le texte et serait repoussé sous le résultat, à 930px du titre.
- **Colonne de gauche collante** (`.accroche-colonne`, `<style>` du composant). Elle s'applique à partir de 1024px, et seulement si l'écran fait au moins 800px de haut. Elle se place à 7rem du haut de l'écran (10rem à partir de 1280px), sous l'en-tête collant. Quand le visiteur fait défiler le résultat, le texte et le bandeau restent à l'écran. Vérifié à 1280 × 900, au bas du résultat : colonne de 160 à 747px à l'écran (`captures/simulateur-lagon/1280-resultat-bas-ecran.png`). Sur un écran plus bas, la colonne ne suit pas le défilement, comme avant. Contrepartie : question 205.
- **Téléphone et tablette** (sous 1024px) : les colonnes sont empilées, la question de l'équilibre ne se pose pas.

### 3. Couleur de fond : lagon (#bce8ea)

Ajoutée à la charte (`--color-lagon`, `src/styles/global.css`) ; le lichen y reste (fond de l'onglet actif de l'étape 3 de la Méthode).

**Pourquoi une teinte FROIDE** : la crème de l'illustration (maison, isolant) a la même luminosité que n'importe quel fond clair (1,00 à 1,03:1). Elle ne peut donc ressortir que par la teinte. Sur un fond froid, la crème chaude se détache, l'orange (tuiles, pièces) vibre, car c'est la couleur opposée du turquoise, et le bleu nuit reste net.

**Teintes testées** (captures dans le dossier temporaire, non conservées) :
- **#d3e9ee** (turquoise grisé) et **#dbe8f4** (bleu ciel) : trop proches de la brume de « Fonctionnement » ;
- **#dfe3f3** (pervenche) : trop proche de la lavande de l'onglet « Appartement » (écart 2,4) et de la bruyère des articles (2,8) ;
- **#d4d8f9** (pervenche plus franche) : correcte, mais proche de la bruyère (3,3) et de la brume (3,1) ;
- **#bce8ea (lagon)** : retenue.

Une recherche systématique sur des teintes claires (hors vert jaunâtre, contrastes imposés) montre que la page couvre déjà presque toute la gamme des pastels. Les teintes plus éloignées de tout étaient trop saturées (menthe ou cyan vifs).

**Contrastes du lagon (WCAG)** :

| Élément | Contraste |
|---|---|
| Texte #16212a | **12,35:1** |
| Texte-doux #4c5a64 (paragraphe) | **5,37:1** (AA) |
| Montant en vert-600 #2a6b4f (très grand texte gras) | **4,79:1** (AA et AAA grand texte) : vert-600 conservé, il rappelle la flèche verte de l'illustration |
| Bloc blanc du simulateur | 1,32:1 (lichen : 1,28:1), plus l'ombre `shadow-carte` : il se détache nettement |

**Écart avec les autres fonds (OKLab ×100 ; à titre de repère, crème contre blanc : 3,3)** :

| Fond | Écart |
|---|---|
| Collectif, juste après (nuit-900) | 62,0 |
| Cas types, juste avant, onglet par défaut (Bâti ancien, #1a2b4a) | 61,2 |
| Cas types, Maison neuve | 47,5 |
| Cas types, Années 50 à 90 | 8,8 |
| Cas types, Modernisation | 8,3 |
| Cas types, Appartement | 6,6 |
| Cas types, Années 1995 à 2012 | 6,6 |
| Bruyère (articles) | 6,1 |
| Crème foncé (« Deux façons de faire ») | 6,0 |
| Lichen | 5,2 |
| Brume (« Fonctionnement », loin dans la page) | 3,5 |

### 4. Vérification

- Captures (`captures/simulateur-lagon/`) :
  - `1280-question-1.png`, `1280-question-2.png`, `1280-question-3.png`, `1280-resultat.png`, `1280-resultat-bas-ecran.png` ;
  - `375-question-1.png` à `375-resultat.png`, et `375-resultat-bas-ecran.png` ;
  - `mesures.json`.
- L'en-tête n'est plus collant pendant la capture, pour qu'il ne masque pas la section. Sur `1280-resultat.png`, le titre de gauche est 40px plus bas que « Estimez vos aides » : c'est l'effet collant, avec la page défilée jusqu'au haut de la section (question 205).
- Défilement horizontal : aucun (1280, 1024, 375px).
- `astro build` : réussi.
- Le dossier `captures/simulateur-avant-equilibre/` (premières mesures, fond lichen) a été supprimé ; ses mesures sont celles du tableau ci-dessus (identiques).

### 5. Reste à faire

- Arbitrer les questions 200, 204, 205 et 206.
- Rien n'est commité.


## Collectif : bandeau illustré et bouton ; Simulateur d'aides en blanc (15 octobre 2026)

Questions ouvertes : **n° 207 à 211** (« Questions en attente de réponse »). La question 204 (fond lagon) est sans objet. ⚠️ La bande claire sous les personnages **se remarque** sur le bleu nuit (question 207).

### 1. Bandeau illustré (`src/components/Collectif.astro`)

- **Fichier** : `src/assets/illustrations/collectif.png`, 1800 × 595, fond transparent. Absent au début du travail, il est arrivé pendant celui-ci. Zone dessinée mesurée automatiquement : x 0 à 1799, y 69 à 534 (le dessin occupe toute la largeur ; 69px vides en haut et 60px en bas sont retirés par le recadrage).
- **Position** : sous le texte, HORS du conteneur de la section : il occupe toute la largeur, à toutes les largeurs d'écran. Ce n'est pas une colonne.
- **Débordement léger** : 120 % de la largeur de la section sous 768px (10 % coupés de chaque côté) et 106 % à partir de 768px (3 % de chaque côté). La section garde `overflow-x-clip` : la partie hors de l'écran est coupée, sans défilement horizontal.
- **Aucun cadre, aucun arrondi, aucune ombre, aucun fond** : il se pose sur le bleu nuit.
- **Recadrage** : mêmes fonctions que les autres illustrations (`zoneDessinee`, `styleCadre`, `styleRecadrage`, `src/data/illustrations.ts`).
- **Fichier manquant** : rien n'est affiché, et la marge du bas de la section revient sous le bouton (aucun emplacement vide).
- **Texte alternatif** : celui fourni, mot pour mot.
- **Marges** : 48px entre le bouton et le bandeau (56px à partir de 768px). Sous le bandeau, la marge de bas de section habituelle (72px, puis 120px).
- **Carte de France supprimée** : le bloc `carte.png` (fichier jamais livré, donc jamais affiché) et ses deux étiquettes flottantes sont retirés du code (question 210).

### 2. Bouton

- « Trouver un artisan près de chez moi » → `/devis`, centré, sous la ligne des engagements, au-dessus du bandeau (40px au-dessus).
- Orange principal (`bg-action-500`, survol `action-600`), texte foncé (6,9:1), comme les autres boutons orange du site. **Hauteur mesurée : 56px** (48px minimum demandé), largeur 326px, aux deux tailles d'écran.
- Contour de focus **blanc** (le contour bleu nuit des autres boutons serait invisible sur ce fond). Orange sur bleu nuit : 6,1:1.
- Il fait partie du bloc d'en-tête animé : il apparaît avec le titre.

### 3. Animation

- Le bandeau porte `data-scene-etape` : il démarre à **son** arrivée à l'écran (30 % de lui visible dans les 90 % supérieurs de l'écran). Avec le déclenchement de la section (`data-scene-image`), il se serait animé hors de la vue : à 1280 × 800, il est encore sous le bas de l'écran quand le titre s'anime.
- Règle propre dans `global.css` (`.bandeau-collectif`) : fondu et **légère montée de 30px** (comme les autres images, au lieu des 40px des étapes), 0,6 s, avec **250 ms de retard** : il part toujours après le titre, même quand les deux arrivent ensemble.
- Rejoué à chaque passage, après sortie complète de la section (mécanisme existant des étapes).
- Vérifié (Chromium, 1280 × 800) : titre visible et bandeau encore caché sous l'écran ; bandeau animé (`scene-montee-image`, retard 0,25 s) une fois à l'écran ; remis à zéro après retour en haut de page. Avec « réduire les animations » : tout est visible et immobile.

### 4. Simulateur d'aides en blanc

- Fond de la section : `bg-lagon` → `bg-fond` (blanc). La couleur `--color-lagon` reste dans la charte, inutilisée.
- **Bloc du simulateur** (`SimulateurQuestions.astro`) : blanc sur blanc, il se détache par un **filet de 1px crème foncé** et une **ombre plus ample** (`0 14px 40px -10px`, bleu nuit à 25 %, au lieu de `shadow-carte`). Fond du bloc gardé blanc : les réponses (cartes blanches bordées de crème foncé) restent nettes. Vérifié sur les captures : le bloc se distingue clairement.
- Contrastes sur blanc : montant en vert-600 6,3:1 ; paragraphe (texte-doux) 7,1:1.
- **Enchaînement** : Cas types (sombre, onglet par défaut #1a2b4a) → Simulateur (blanc) → Collectif (bleu nuit). Les deux ruptures sont nettes (captures `1280-transition-cas-types.png` et `1280-transition-collectif.png`). Le bandeau `bandeau-aides.png` se pose bien sur le blanc.
- Commentaires mis à jour : `SimulateurAides.astro`, `index.astro` (liste des couleurs de la page).

### 5. Mesures et vérification

Chromium, animations réduites, en-tête rendu non collant pendant la capture.

| Écran | Section Collectif | Bandeau (l × h) | Section Simulateur | Page d'accueil (hauteur totale) | Défilement horizontal |
|---|---|---|---|---|---|
| 1280px | **1 149px** | 1 357 × 351px | 827px | **7 781px** | aucun (1280 = 1280) |
| 375px | **966px** | 450 × 117px | 1 220px | **10 118px** | aucun (375 = 375) |

`astro build` : réussi.

Captures (`captures/collectif-bandeau/`) : `1280-collectif.png`, `375-collectif.png`, `1280-simulateur.png`, `375-simulateur.png`, `1280-transition-cas-types.png`, `1280-transition-collectif.png`, les mêmes en 375, et `mesures.json`.

### 6. Fichiers modifiés

- `src/components/Collectif.astro` : bouton, bandeau, suppression de la carte et des étiquettes, en-tête mis à jour.
- `src/styles/global.css` : règle d'animation `.bandeau-collectif`.
- `src/components/SimulateurAides.astro` : fond blanc.
- `src/components/SimulateurQuestions.astro` : filet et ombre du bloc.
- `src/pages/index.astro` : commentaire des couleurs.

### 7. Reste à faire

- Arbitrer les questions 207 à 211 (en priorité la 207 : bande claire).
- Rien n'est commité.


## Collectif : bandeau remonté sous le bouton (16 octobre 2026)

Question ouverte : **n° 212** (« Questions en attente de réponse »).

### Demande

Réduire fortement le vide entre le bouton « Trouver un artisan près de chez moi » et le dessin : le bouton doit se trouver dans le creux entre les deux collines vertes, légèrement au-dessus de la tête de la femme qui porte l'échelle. Le dessin peut affleurer le bas du bouton sans jamais le recouvrir.

### Repères mesurés dans `collectif.png` (1800 × 595)

- Haut de la zone recadrée : y = 69.
- Casquette de la femme à l'échelle : haut à **y = 201**, x ≈ 940 à 1010 (juste à droite du centre).
- Creux entre les deux collines : x ≈ 925, y ≈ 262 (le centre de l'image, x = 900, tombe dedans ; le bouton est centré, et le bandeau aussi, donc le centre du bouton tombe sur x = 900 à toutes les largeurs).
- Cible retenue : bas du bouton à y ≈ 190, soit **121px d'image sous le haut du recadrage** (11px au-dessus de la casquette).

### Ce qui a été fait (`src/components/Collectif.astro`)

- **Marge supérieure du bandeau, par palier** :
  - à partir de 768px : `md:-mt-[7.1vw]` (au lieu de 56px). 7,1vw = 121/1800 × 106vw (largeur du bandeau) : la marge suit exactement l'échelle du dessin, donc le bouton reste au même endroit du paysage à toutes les largeurs de 768px et plus (vérifié à 1280 et 1024) ;
  - sous 768px : `mt-1` (4px, au lieu de 48px). Sur téléphone, le bouton (326px) couvre presque toute la largeur de l'écran : une marge négative ferait passer le bouton sur le toit de l'atelier et sur la camionnette. Le dessin vient donc **affleurer** le bas du bouton, sans chevauchement.
- **Ordre d'empilement** : le conteneur du texte (titre, engagements, bouton) porte `relative z-10` : le bouton passe au-dessus du bandeau (qui vient après dans la page et est lui-même positionné/animé). Le dessin ne recouvre jamais le bouton.
- Rien d'autre ne change (largeurs 120 % / 106 %, recadrage, animation, texte alternatif, fichier manquant : la section se termine toujours après le bouton, la marge négative étant portée par le bloc du bandeau qui n'est alors pas affiché).

### Vérification (Chromium, animations réduites, en-tête non collant pendant la capture)

| Écran | Section Collectif (avant → après) | Bouton (h × l) | Bas du bouton → haut du bandeau | Bouton cliquable (5 points testés) | Défilement horizontal |
|---|---|---|---|---|---|
| 1280px | 1 149px → **1 002px** (−147) | 56 × 326 | **−91px** (chevauchement, bouton au-dessus) | oui | aucun |
| 1024px | (non mesurée avant) → **959px** | 56 × 326 | **−73px** | oui | aucun |
| 375px | 966px → **922px** (−44) | 56 × 326 | **+4px** (affleurement) | oui | aucun |

- « Cliquable » : `document.elementFromPoint` aux quatre coins (5px en retrait) et au centre du bouton renvoie bien le lien, aux trois largeurs : aucune partie du dessin ne passe par-dessus.
- À l'œil : à 1280 et 1024, le bouton est posé dans le creux des collines, sa bordure basse juste au-dessus de la casquette de la femme à l'échelle ; les sapins centraux passent derrière lui. À 375, le dessin commence juste sous le bouton.
- Captures : `captures/collectif-remonte/1280-collectif.png`, `1024-collectif.png`, `375-collectif.png` (la barre d'outils du serveur de développement Astro apparaît en bas des captures : elle n'existe pas sur le site publié).

### Reste à faire

- Arbitrer la question 212 (espace entre les engagements et le haut du dessin à 1280px).
- Rien n'est commité.


## Corrections de la page d'accueil (16 octobre 2026)

Questions ouvertes : **n° 213 à 215** (« Questions en attente de réponse »). ⚠️ Le montant de 32 000 € de la nouvelle phrase du Hero n'est pas confirmé et sa formulation (« plus de ») contredit le simulateur (« jusqu'à ») : question 213.

### 1. Hero : phrase sur les aides (`Hero.astro`, `global.css`)

- Ajoutée sous « Obtenir un devis » et « Estimer mes aides » (16px d'écart) : « Recevez plus de 32 000 € d'aides pour réaliser votre projet. » Le montant est insécable.
- Style : taille du texte courant (`text-corps`, 18px), graisse 600.
- **Couleur retenue : `--color-corail: #d9304a`** (nouvelle, ajoutée au `@theme`), un rouge corail vif.
  - **Contraste sur le blanc du Hero : 4,70:1** (minimum demandé : 4,5:1). Vérifié dans le navigateur : rgb(217, 48, 74), 18px, 600.
  - Contraste avec l'orange du bouton (#f0920f) : 1,97:1. Ce sont deux teintes nettement distinctes (rouge rosé et orange) : la phrase tranche sans concurrencer le bouton, qui reste plus grand, plein et plus lumineux.
  - Teintes écartées : #e8445a (3,88:1), #e03c52 (4,25:1) et #e0394f (4,31:1) étaient plus vives, mais sous 4,5:1 ; #cf3350 (4,95:1) était plus terne. `alerte-500` (#ff0256) n'atteint pas 4,5:1 et `alerte-700` (#ca0808) se lirait comme un message d'erreur.
- Captures : `captures/corrections-accueil/375-hero.png`, `375-hero-texte.png`, `1280-hero.png`. À 375px, la phrase tient sur deux lignes.

### 2. Méthode : rythme de l'étape 2 (`MethodeEtapes.astro`)

- Seuils passés de **20, 45 et 70 %** à **20, 50 et 72 %** de la fenêtre où le schéma est entier. La zone morte de 2 % reste inchangée.
- Part de la fenêtre pour chaque étape : étape 2, **30 %** (25 % avant) ; étape 3, 22 % (25 % avant) ; étape 4, 28 % (30 % avant).
- **Déclenchements mesurés** (Chromium, défilement par pas de 4px, animations actives) :

| Écran | Fenêtre « schéma entier » | Étape 2 | Étape 3 | Étape 4 | Schéma entier au déclenchement |
|---|---|---|---|---|---|
| 1280 × 900 | 704px | à 23 % (164px) | à 53 % (376px) | à 76 % (532px) | oui, aux 3 seuils |
| 375 × 812 | 1 036px | à 22 % | à 53 % | à 75 % | oui, aux 3 seuils |

  - L'étape 1 s'affiche dès l'arrivée de la section.
  - À 1280 × 900, l'étape 2 reste affichée pendant **212px** de défilement (contre environ 176px avant), l'étape 3 pendant 156px. L'étape 4 dispose encore de 172px avec le schéma entier.
  - Le léger décalage entre seuil et déclenchement (+2 à 3 %) correspond à la zone morte et au pas de mesure.
- **L'étape 4 se déclenche toujours schéma entier** : la correction précédente est conservée.

### 3. Cas types sur téléphone (`CasTypes.astro`)

- Sous 1024px, nouvel ordre : titre, sous-titre, **illustration**, onglets, texte, bouton. Mesures à 375px (haut de chaque élément, en px depuis le haut de la page) : titre 5 617, sous-titre 5 722, illustration 5 890, onglets 6 265, texte 6 457, bouton 6 853.
- Technique : l'illustration est dans chaque panneau. Sous 1024px, le bloc a donc 3 rangées (illustration, onglets, texte). Chaque panneau couvre les 3 (`subgrid`), avec son illustration en rangée 1 et son texte en rangée 3. Les onglets sont en rangée 2, au-dessus des panneaux (`z-index`), sinon les clics seraient interceptés. L'écart est de 32px entre l'illustration, les onglets et le texte.
- **Hauteur de section stable** : 1 480px sur les 6 onglets, tous cliqués et vérifiés (onglet sélectionné, hauteur). Voir la question 215 sur le vide au-dessus des dessins plus petits.
- À partir de 1024px et sans JavaScript : rien ne change.
- Captures : `375-cas-types.png` (onglet 1) et `375-cas-types-onglet4.png`.

### 4. Section aides sur téléphone (`SimulateurAides.astro`)

- Sous 1024px, nouvel ordre : titre, **illustration**, paragraphe, sous-titre, simulateur. Mesures à 375px : titre 7 097, illustration 7 230, paragraphe 7 341, sous-titre 7 578, simulateur 7 704.
- Technique : le bandeau est placé juste après le titre dans le code, et la colonne passe en flex. À partir de 1024px, il repasse sous le texte (`order-last`, 40px au-dessus). L'écart est de 24px sous le titre et de 24px avant le paragraphe.
- Grand écran : rendu inchangé, et la colonne d'accroche reste collante.
- Capture : `375-aides.png`.

### 5. Articles : fond blanc (`index.astro`, `ArticleList.astro`)

- Fond de la section : `bg-bruyere` → `bg-fond` (blanc). La couleur bruyère reste dans la charte. La bruyère foncée sert toujours à la Méthode.
- Les cartes d'articles étaient blanches sans bordure : elles auraient disparu sur le blanc. Elles reçoivent donc un **filet de 1px crème foncé** (`border-creme-fonce`), comme le bloc du simulateur. L'ombre au survol est conservée. `ArticleList` n'est utilisé que sur la page d'accueil.
- Enchaînements :
  - **Collectif (bleu nuit) → Articles (blanc)** : rupture nette.
  - **Articles (blanc) → pied de page (crème)** : ⚠️ deux fonds clairs qui se suivent, avec une distinction faible (1,07:1). Signalé : question 214.
- Captures : `1280-articles.png`, `1280-transition-collectif-articles.png`, `1280-transition-articles-pied.png`. Section : 912px de haut à 1280px.
- Remarque : l'image de l'article de démonstration est un emplacement bleu pâle (pas d'image dans le contenu). Cela n'a rien à voir avec ce travail.

### 6. Collectif : animation plus rapide (`global.css`)

- Retard du bandeau : **250 ms → 100 ms** après le titre quand les deux arrivent ensemble.
- Le déclenchement propre du bandeau est **conservé** : il s'anime quand 30 % de lui est visible dans les 90 % supérieurs de l'écran. Le passer sur le déclenchement de la section (25 % de la section visible) le ferait s'animer hors de la vue : à 1280 × 900, quand le titre s'anime, le haut du bandeau est encore environ 300px sous le bas de l’écran (calcul : déclenchement à 225px de section visible, bandeau à 531px du haut de la section). Quand titre et bandeau arrivent ensemble à l'écran, le bandeau part donc 100 ms après le titre. Sinon, il part 100 ms après son arrivée.

### 7. Vérification

- `astro build` : réussi (8 pages).
- Aucun défilement horizontal à 375px (largeur de défilement = 375).
- Remarque technique : le serveur de développement servait une ancienne version du CSS de `CasTypes.astro` après modification. Il a fallu le relancer (`astro dev stop` puis `astro dev --background`). Si un changement n'apparaît pas, relancer le serveur.
- Captures dans `captures/corrections-accueil/`.

### 8. Fichiers modifiés

- `src/components/Hero.astro` : phrase sur les aides.
- `src/styles/global.css` : couleur `--color-corail` ; retard du bandeau du Collectif.
- `src/components/MethodeEtapes.astro` : seuils et commentaire d'en-tête.
- `src/components/CasTypes.astro` : ordre sur téléphone (CSS) et commentaire d'en-tête.
- `src/components/SimulateurAides.astro` : position du bandeau.
- `src/pages/index.astro` : fond de la section articles et liste des couleurs.
- `src/components/ArticleList.astro` : filet des cartes.

### 9. Reste à faire

- Arbitrer les questions 213 (montant et formulation de la phrase du Hero), 214 (limite articles / pied de page) et 215 (vide au-dessus des illustrations des Cas types sur téléphone).
- Rien n'est commité.

## Collectif : nouvelle phrase, engagements rapprochés, bandeau animé à son entrée (16 octobre 2026)

Aucune nouvelle question. La question 212 (espace entre les engagements et le haut du dessin à 1280px) reste ouverte : l'écart n'a pas changé (environ 15px, voir le point 4).

### 1. Paragraphe (`Collectif.astro`)

- Ancien texte : « Pas d'intermédiaire, pas de prestataire anonyme. Un interlocuteur identifié, des engagements clairs et un suivi dans la durée. »
- Nouveau texte : « Ici, pas d'intermédiaire, de sous-traitance ou de franchise. Vous travaillez directement avec l'artisan local de notre collectif le plus proche de chez vous. Ce qui vous garantit : » (espace insécable avant « : »).
- Les cinq engagements ne changent pas et suivent immédiatement.
- Le paragraphe passe de 2 à 3 lignes à 1280px et de 4 à 5 lignes à 375px (largeur maximale de 50 caractères, inchangée).

### 2. Engagements rapprochés du paragraphe

- Espace entre le paragraphe et la liste : **40px → 16px** (`mt-10` → `mt-4`). Le paragraphe et la liste se lisent comme un seul bloc.
- L'espace entre la liste et le bouton (40px) ne change pas.

### 3. Animation du bandeau : déclenchement à l'entrée de son haut (`AnimationScenes.astro`, `Collectif.astro`)

- **Constat** : le bandeau avait déjà son propre déclenchement (`data-scene-etape`), mais avec le réglage des étapes de « Fonctionnement » : 30 % de lui visible dans les 90 % supérieurs de l'écran. Il est bas sur téléphone (117px à 375px). Mesure avant correction à 375 × 812 : il ne partait qu'avec **100px de ses 117px déjà à l'écran**. On le voyait donc arriver vide, puis apparaître alors qu'il était presque entier à l'écran.
- **Correction** : nouvel attribut `data-declenchement="entree"`, posé sur le bandeau. L'élément est observé avec un seuil de 0, sans marge : il part dès que **son haut** entre dans l'écran. Les étapes de « Fonctionnement » gardent leur réglage. La remise à zéro (quand la section a complètement quitté l'écran) et le retard de 100 ms après le titre ne changent pas.
- **Ce réglage s'applique aussi en grand écran** (un seul déclenchement pour toutes les largeurs). À 1280 × 900, le bandeau part aussi dès que son haut entre dans l'écran (avant : 30 % de ses 351px visibles).

### 4. Vérification

- Mesure à 375 × 812, défilement lent (5px toutes les 50 ms, environ 100px/s), position du haut du bandeau par rapport au bas de l'écran :
  - de -60px à 0px (encore sous l'écran) : pas déclenché, opacité 0 ;
  - **déclenché dès l'entrée de son haut** (entre 0 et 5px dans l'écran) ;
  - à 15px dans l'écran : opacité 0,59, en pleine montée ;
  - à 30px dans l'écran : opacité 1, animation terminée.
  - Le bandeau s'anime donc **sous les yeux** : il monte en fondu pendant qu'il entre par le bas de l'écran, et rien ne s'anime hors de la vue (le titre de la section est animé bien avant).
- 1280 × 900 : déclenché quand son haut entre dans l'écran.
- Mise en page à 1280px : le bas du bouton reste dans le creux des collines, au-dessus de la casquette de la femme à l'échelle. Le paragraphe a une ligne de plus (+28px), mais l'espace sous lui a perdu 24px : le bloc ne bouge presque pas. Le haut des sapins reste environ 15px sous la ligne des engagements (question 212).
- `astro build` : réussi (8 pages).
- Captures : `captures/collectif-texte/375-collectif.png` et `captures/collectif-texte/1280-collectif.png` (le menu fixe du site recouvre le haut de la section sur les captures : c'est normal).

### 5. Fichiers modifiés

- `src/components/Collectif.astro` : phrase, `mt-4` sur la liste, `data-declenchement="entree"` sur le bandeau, commentaires.
- `src/components/AnimationScenes.astro` : second observateur (seuil 0) pour `data-declenchement="entree"`, en-tête documenté.

### 6. Reste à faire

- Arbitrer les questions 212 à 215.
- Rien n'est commité.

## Refonte du pied de page (16 octobre 2026)

Questions ouvertes : **n° 216 à 218** (« Questions en attente de réponse »). ⚠️ Trois liens mènent à des pages inexistantes (question 217). Le téléphone, l'e-mail et le médiateur sont à fournir (question 216).

### 1. Ce qui a été fait (`src/components/Footer.astro`, réécrit)

- **Fond crème conservé** (`bg-creme`).
- **Mise en page** : 4 colonnes à partir de 1024px. Entre 640 et 1023px, 2 colonnes. En dessous, tout est empilé. Les colonnes, dans l'ordre :
  1. **Akelia** (lien vers l'accueil), une phrase courte (question 218) et le **bouton orange « Obtenir un devis »** (→ /devis), au même style que celui de l'en-tête (48px de haut).
  2. **Navigation** : Services, Aides rénovation, Blog, Qui sommes-nous, Rejoindre le collectif (→ /entreprise).
  3. **Nous contacter** : téléphone et e-mail, en attente (« à venir »). Puis **Nous retrouver** : YouTube.
  4. **Informations légales** : Mentions légales, Politique de confidentialité (→ /politique-confidentialite), Médiation de la consommation (en attente).
- **Ligne du bas**, séparée par un filet crème foncé : « © 2026 Akelia. Tous droits réservés. » (année calculée), et, discret, en petit texte gris : « Site réalisé par Neocraft » (→ https://ncraft.fr/, nouvel onglet).
- **YouTube** : logo en SVG intégré dans la page (bleu nuit, rouge YouTube au survol). Le lien mène à https://www.youtube.com/@Akelia-NC et s'ouvre dans un nouvel onglet (`rel="noopener noreferrer"`). Le lecteur d'écran annonce « Akelia sur YouTube (s'ouvre dans un nouvel onglet) » (`aria-label`). Zone cliquable : **48 × 48px**.
- **Public senior** : tous les liens font **44px de haut au moins** (mesuré : 44px, 48px pour le bouton et YouTube), en taille de texte normale. Contour de focus bleu nuit sur tous les liens.
- Accessibilité : la navigation est une balise `<nav>` titrée « Navigation ». Les titres de colonne sont des `<h2>`. Les liens qui ouvrent un nouvel onglet le signalent aux lecteurs d'écran.

### 2. Décisions prises

- **« Mentions légales » est placé dans la colonne « Informations légales »**, avec la politique de confidentialité et la médiation, et non dans « Navigation ». Le lien est bien présent.
- Libellés modifiés par rapport à l'ancien pied de page : « Aides » → « Aides rénovation », « L'équipe » → « Qui sommes-nous ». Le logo texte « AKELIA » devient « Akelia », comme dans l'en-tête.
- **Coordonnées et médiateur en attente** : trois constantes en tête du composant (`TELEPHONE`, `EMAIL`, `MEDIATEUR`). Tant qu'elles valent `null`, la ligne affiche « … : à venir » en gris, sans lien. Une fois remplies, la ligne devient un lien : `tel:` pour le téléphone, `mailto:` pour l'e-mail, et le site du médiateur dans un nouvel onglet.

### 3. Liens vers des pages inexistantes (vérifiés : statut HTTP)

| Lien | Page | Statut |
|---|---|---|
| Qui sommes-nous | `/qui-sommes-nous` | **404** (n'existe pas encore) |
| Rejoindre le collectif | `/entreprise` | **404** (sera créée plus tard) |
| Politique de confidentialité | `/politique-confidentialite` | **404** (page obligatoire à rédiger) |

Les autres liens répondent (200) : `/`, `/devis`, `/services`, `/aides-renovation`, `/blog`, `/mentions-legales`. Les liens externes (YouTube, ncraft.fr) n'ont pas été appelés.

### 4. Vérification

- Captures : `captures/pied-de-page/1280-pied.png` et `captures/pied-de-page/375-pied.png`. Sur la capture à 375px, l'en-tête fixe du site recouvre le milieu du pied de page : c'est un effet de la capture, il n'apparaît pas à l'écran.
- Hauteur du pied de page : 457px à 1280px, 1 153px à 375px.
- Aucun défilement horizontal à 375px.
- Corrigé pendant la vérification : l'espace manquant dans « Site réalisé par Neocraft ». À 1280px, la ligne « Médiation de la consommation : à venir » passait à la ligne ; la dernière colonne a été élargie.
- `astro build` : réussi (8 pages).

### 5. Reste à faire

- Fournir le téléphone, l'e-mail et le médiateur (question 216).
- Créer `/politique-confidentialite` (obligatoire), `/qui-sommes-nous` et `/entreprise` (question 217).
- Valider la phrase sous le logo (question 218).
- Rien n'est commité.

## Menu principal : entrée « Construction neuve » (16 octobre 2026)

Questions ouvertes : **n° 219 et 220** (« Questions en attente de réponse »). ⚠️ La page `/solutions/construction-neuve` **n'existe pas encore** (404, question 219).

### 1. Ce qui a été fait (`src/components/Header.astro`, `src/styles/global.css`)

- Nouvelle entrée dans la liste `liensDirects`, juste **après « Rénovation globale »** : « Construction neuve » → `/solutions/construction-neuve`, avec un drapeau `enAvant: true`. C'est un lien direct, sans méga-menu.
- **Menu ordinateur** (à partir de 1280px) : étiquette verte.
  - Fond **vert-50** (#e9f3ee), texte **vert-600** (#2a6b4f), graisse 600.
  - Coins arrondis **8px** (`rounded-lg`, comme le badge du Hero).
  - 44px de haut. 16px d'écart avec « Rénovation globale » (12px de marge + 4px d'écart de la liste).
  - Au survol : fond **vert-100** (#d6eadf), nouvelle couleur ajoutée à la charte (`global.css`), réservée à ce survol.
  - Page en cours : texte souligné.
  - Contour de focus bleu nuit, comme le reste du menu.
- **Tiroir mobile** : même traitement dans le bloc des liens directs, après « Rénovation globale ». Fond vert-50, texte vert-600, coins 8px, survol vert-100, flèche verte. Il garde la même hauteur (56px) et la même largeur que ses voisins.

### 2. Contraste (calcul WCAG)

| Texte | Fond | Contraste |
|---|---|---|
| vert-600 #2a6b4f | vert-50 #e9f3ee (repos) | **5,59:1** ✅ |
| vert-600 #2a6b4f | vert-100 #d6eadf (survol) | **5,04:1** ✅ |

Les deux dépassent 4,5:1 : **aucun vert plus foncé n'a été nécessaire**. Valeurs relevées dans le navigateur : fond rgb(233, 243, 238), texte rgb(42, 107, 79), graisse 600, arrondi 8px ; au survol, rgb(214, 234, 223).

### 3. Le menu tient-il sur une ligne à 1280px ?

**Oui.** Les 5 entrées sont alignées à la même hauteur. « Construction neuve » se termine à 1 131px, et le conteneur à 1 245px : il reste **114px** libres. Il n'y a aucun défilement horizontal. Une 6e entrée ne tiendrait pas : voir la question 220 (solutions proposées, non appliquées).

### 4. Vérification

- Captures dans `captures/construction-neuve/` : `1280-header.png`, `1280-header-survol.png` et `375-tiroir.png` (tiroir ouvert).
- Remarque visuelle : à 1280px, l'étiquette (44px) occupe presque toute la hauteur de la ligne du menu (48px). Elle arrive à 2px du filet sous l'en-tête. C'est acceptable à l'œil (voir la capture).
- `/solutions/construction-neuve` : **404**.
- `astro build` : réussi (8 pages).

### 5. Reste à faire

- Créer la page Construction neuve (question 219).
- Rien n'est commité.

## Vérification et nettoyage de la page d'accueil (16 octobre 2026)

Périmètre : `src/pages/index.astro`, `src/layouts/Layout.astro` et les composants, données et scripts de l'accueil. Les autres pages (blog, devis, services, mentions légales) n'ont pas été touchées.

Questions ouvertes : **n° 221 à 229** (« Questions en attente de réponse »).

**Commit : `e10b02a` (point 7).**

### 1. Code mort (RIEN N'A ÉTÉ SUPPRIMÉ : à valider, question 221)

**Composants** : les 17 composants de `src/components/` sont tous importés et utilisés. Rien à supprimer. `CollectifEngagement.astro` avait déjà été supprimé lors d'une tâche précédente (suppression incluse dans ce commit).

**Couleurs du `@theme` inutilisées sur TOUT le site** (ni classe, ni `var()`, hors page de démonstration de la charte) :

| Couleur | Valeur | Historique |
|---|---|---|
| `prune` | #3d2c40 | Fond des Cas types du 13 au 14 octobre 2026 |
| `violet` | #5a2d82 | Fond des Cas types ensuite, remplacé par une couleur par onglet |
| `lagon` | #bce8ea | Fond du Simulateur d'aides le 15 octobre 2026 |
| `vert-800` | #1e5c45 | Doublon exact de `cas-neuf`, qui est utilisé |
| `vert-clair` | #8fd1b0 | Libellés sur fond sombre, encarts supprimés le 14 octobre 2026 |

**Couleurs inutilisées sur l'accueil, mais utilisées ailleurs** (à garder) : `alerte-500` et `alerte-600` (seulement dans la page `test-charte`), `vert-400` (devis et `test-charte`), `nuit-filet` (seulement dans `test-charte`).

**Couleurs que la demande citait, mais qui SONT utilisées** (à garder) : `argile`, `lichen`, `bruyere`, `brume` et leurs variantes `-fonce` servent aux 4 onglets de la Méthode (`src/data/methode.ts`) ; `brume` est aussi le fond de « Fonctionnement » et le filet des raccourcis du Hero.

**Autres jetons du `@theme` inutilisés** :
- `--container-large` (classe `max-w-large`) : utilisé nulle part.
- `--radius-petit` (classe `rounded-petit`) : utilisé nulle part.
- `--spacing-section` (`py-section`, `mt-section`) : seulement dans `test-charte`.
- `--inset-shadow-assombrir` : seulement dans `test-charte`.

**Classes CSS globales** (`global.css`) :
- `@utility etiquette` : utilisée nulle part.
- Règles `[data-scene-etiquette]` (animation « rebond », 3 sélecteurs) : plus aucun élément ne porte cet attribut depuis la suppression des étiquettes de la carte du Collectif. Un commentaire le signale désormais dans `global.css`.
- `surtitre`, `deborde-gauche`, `deborde-droite` : utilisées.

**Attributs `data-` sans objet** (posés, mais lus par aucun script ni aucun CSS) :
- `data-hero` (section du Hero) ;
- `data-cas-section` (section Cas types : le script la trouve par `previousElementSibling`) ;
- `data-estimation` (`SimulateurEstimation.astro`) ;
- `data-mega-panneau` (panneaux du méga-menu, trouvés par `aria-controls`) ;
- `data-erreur` (posé par `simulateur-etapes.ts` sur un groupe de champs en erreur, sans style associé) ;
- `data-illustration-absente` (Cas types) : il ne sert qu'au débogage, en affichant le nom du fichier manquant. Je recommande de le garder.

**Scripts** : les 3 scripts de `src/scripts/` sont importés par `SimulateurAides.astro`. Aucun script mort.

**Illustrations** (`src/assets/illustrations/`) : les 11 fichiers sont tous référencés (`illustrations.ts` et les composants). Les 10 images du méga-menu (`src/assets/menu/`) sont toutes référencées par `Header.astro`.

### 2. Cohérence

- **Couleurs Tailwind par défaut** (`gray`, `blue`, `white`, `black`…) : **aucune** sur l'accueil et ses composants.
- **Couleurs hors `@theme`** : `hover:text-[#ff0000]` (rouge YouTube, pied de page) et deux ombres `#1d2b3640`. **Tailles de texte hors jetons** : 5 valeurs entre crochets et `text-base`. Détail et proposition : question 229 (non appliqué : à valider).
- **Commentaires corrigés** (sans effet sur l'affichage) :
  - `index.astro` : la liste des fonds annonçait « Cas types : violet » et « Simulateur entre deux sections sombres ». Elle dit maintenant : une couleur par onglet, bleu nuit profond pour « Bâti ancien ».
  - `global.css` et `AnimationScenes.astro` : `data-scene-etiquette` signalé comme inutilisé.
  - `Layout.astro` : commentaire des favicons.

### 3. Accessibilité (mesurée dans le navigateur, à 1280 et 375px)

- **Titres** : **un seul h1** (« Une maison qui consomme moins, et qui vaut plus. »), **aucun niveau sauté**. Plan : h1, puis un h2 par section, puis des h3. Le pied de page a 4 h2 (Navigation, Nous contacter, Nous retrouver, Informations légales).
- **Images** : toutes ont un attribut alt. Les 13 illustrations ont un alt descriptif. Les 10 images du méga-menu ont `alt=""` : elles sont décoratives, le titre de colonne juste dessous dit la même chose. Les deux schémas SVG (`SchemaMaison`, `MethodeSchema`) ont `role="img"`, un titre et une description. Remarque : l'image de l'article de démonstration a pour alt le titre de l'article, ce qui fait doublon avec le titre de la carte (à revoir avec le contenu du blog).
- **Zones cliquables sous 44px** : « Lire la suite → » (85 × 22px) et « Blog » dans le pied de page (30px de large). Question 226. Les boutons radio du simulateur (24px) sont dans des étiquettes cliquables de 519 × 56px : conforme. Le lien d'évitement (1px) est volontairement caché tant qu'il n'a pas le focus.
- **Texte de taille courante sous 7:1** (tous au-dessus de 4,5:1) :

| Texte | Couleurs | Contraste |
|---|---|---|
| Hero : « Recevez plus de… » | corail sur blanc, 18px, 600 | 4,70:1 |
| Hero : badge du collectif | action-800 sur action-50 | 4,88:1 |
| **« Fonctionnement » : paragraphes des étapes** | **texte-doux sur brume, 18px** | **5,07:1** |
| Menu : « Construction neuve » | vert-600 sur vert-50 | 5,59:1 |
| Collectif : surtitre « Le collectif » | orange sur bleu nuit, 13,6px gras | 6,08:1 |
| Articles : surtitre « Le blog » | vert-600 sur blanc, 13,6px gras | 6,34:1 |
| Pied de page : phrase, « à venir », copyright | texte-doux sur crème | 6,48:1 |
| En-tête : bouton « Obtenir un devis » | texte sur orange | 6,87:1 |

  Le grand texte « plus de 32 000 € » (vert-600 sur blanc, 6,34:1) est conforme : le seuil AAA pour le grand texte est 4,5:1. Question 225.
- **Limite de la mesure** : seuls les éléments visibles au chargement sont mesurés. Les onglets inactifs (Méthode, Cas types) et les étapes suivantes du simulateur n'ont pas été mesurés. Les contrastes des 6 fonds des Cas types sont documentés dans `global.css` (tous au-dessus de 7:1).

### 4. SEO de l'accueil

**a) Balises actuelles** :
- title : « Akelia - Expert Rénovation Énergétique & Solutions Durables » ;
- description : « Accélérez votre transition écologique avec Akelia. Pompes à chaleur, isolation, panneaux solaires et bornes de recharge pour particuliers et professionnels. »

Elles ne parlent ni des artisans, ni des aides. **Propositions (non appliquées, question 222)** :

| | Title (60 max) | Car. |
|---|---|---|
| T1 | Rénovation énergétique : artisans locaux et aides \| Akelia | 58 |
| T2 | Rénovation énergétique : vos artisans, vos aides \| Akelia | 57 |
| T3 | Artisans en rénovation énergétique, aides gérées \| Akelia | 57 |

| | Meta description (155 max) | Car. |
|---|---|---|
| D1 | Rénovez avec un artisan local Akelia : rénovation énergétique, devis gratuit à domicile, et nous montons votre dossier d'aides à votre place. | 141 |
| D2 | Rénovation énergétique avec l'artisan Akelia le plus proche : isolation, chauffage, solaire. Estimez vos aides en ligne, on monte le dossier pour vous. | 151 |
| D3 | Collectif d'artisans locaux de la rénovation énergétique. Estimez vos aides en ligne : nous montons le dossier et sécurisons les versements. | 140 |

Les promesses reprennent des textes déjà présents sur la page : « Un artisan se déplace chez vous gratuitement » (Fonctionnement) et « On s'occupe de tout : montage du dossier, dépôt des demandes et sécurisation des versements » (Simulateur). Ma préférence : **T1 + D2** (le mot-clé en tête, une description concrète).

**b) Balises de partage** : Open Graph (`og:locale` fr_FR, `og:type`, `og:title`, `og:description`, `og:url`, `og:site_name`, `og:image`) et Twitter Card (`summary_large_image`, titre, description, image) sont **présentes**. ⚠️ **L'image `/images/og-default.jpg` est absente** (question 223). Il manque aussi `og:image:width`, `og:image:height` et `og:image:alt` : à ajouter avec l'image.

**c) Données structurées** : ⚠️ **aucun balisage schema.org** (ni `Organization`, ni `LocalBusiness`) sur le site. Question 224.

**d) Canonique et langue** : `<link rel="canonical">` présent, il vaut `https://akelia.fr/` (adresse de secours, voir la question 228). `<html lang="fr">` présent. `<meta name="robots" content="index, follow">` présent.

### 5. Favicon (fait)

- Constat : l'ancien `favicon.svg` n'était pas un losange bleu. C'était **le logo Astro par défaut** (noir, ou blanc en mode sombre), comme `favicon.ico`. Aucun logo Akelia n'existe dans le projet : le losange a été dessiné à partir de la description.
- **`public/favicon.svg`** (réécrit) : carré de 32 × 32, coins arrondis à 6, fond **orange action-500** (#f0920f). Losange plein **bleu nuit nuit-900** (#1d2b36), centré, de 20px de diagonale (62 % de la largeur), aux angles légèrement adoucis. J'ai choisi le bleu nuit plutôt que le blanc : 6,1:1 sur l'orange, contre 2,2:1 pour le blanc, donc bien plus lisible à 16px.
- **`public/apple-touch-icon.png`** (nouveau) : 180 × 180, même dessin, carré plein sans arrondi (iOS arrondit lui-même les icônes) et sans transparence.
- **`public/favicon.ico`** (remplacé) : 32 × 32, même dessin. Il remplace le logo Astro pour les navigateurs qui demandent `/favicon.ico` d'office.
- **Déclarés dans `Layout.astro`** : `favicon.ico` (32px), `favicon.svg` (préféré par les navigateurs récents) et `apple-touch-icon.png`.
- Aperçu dans une barre d'onglets simulée, à 16px : `captures/favicon/onglets-16px.png`. Le carré orange ressort nettement entre les onglets gris.

### 6. Performance de l'accueil (`astro build`, version de production)

Mesuré dans le navigateur. Poids **non compressés** : le serveur de test ne compresse pas, et un hébergeur avec gzip ou brotli divisera par environ 5 le HTML, le CSS et le JS.

| | Chargement initial | Après défilement complet |
|---|---|---|
| 1280px | **511 Ko** (10 requêtes) | **1 080 Ko** (19 requêtes) |
| 375px | **334 Ko** (8 requêtes) | **687 Ko** (18 requêtes) |

Répartition à 1280px : images 766 Ko, HTML 162 Ko, CSS 77 Ko, police 44 Ko, JS 31 Ko.

Ressources les plus lourdes (1280px) :
1. **HTML de la page : 162 Ko** (31 Ko compressé). Il contient les deux schémas SVG en ligne, les 6 panneaux des Cas types et le simulateur.
2. `travaux.webp` (Deux façons de faire) : 122 Ko. Il est chargé dès le départ à 1280px : Chrome charge les images différées situées à moins d'environ 1 250px de l'écran.
3. `annee5090.webp` 105 Ko, `modernisation.webp` 93 Ko, `maisonneuve.webp` 87 Ko, `annee9512.webp` 78 Ko, `collectif.webp` 73 Ko, `maisonancienne.webp` 63 Ko.
4. `global.css` : 58 Ko (+ 18 Ko de CSS propre à l'accueil).
5. Police Source Sans 3 (Google Fonts) : 29 à 44 Ko.
6. Script du simulateur : 31 Ko.

Toutes les illustrations sont converties en WebP, en plusieurs largeurs, et chargées en différé. Les PNG sources (9,5 Mo) ne sont jamais envoyés au navigateur. Pistes, si besoin : charger les illustrations des onglets Cas types seulement au clic (environ 300 Ko économisés au défilement), et héberger la police sur le site au lieu de Google Fonts.

`astro build` : réussi (8 pages).

### 7. Sauvegarde

- Commit « Page d'accueil terminée » sur `main` : **`e10b02a`** (`e10b02a2b0fa2750f6d104974dad8183f3746bc3`). Cette ligne a été ajoutée après le commit : elle n'est pas dans le commit.
- **Contenu** : tout le code source modifié depuis 0b3202d (composants, pages, styles, scripts, données, illustrations, favicons, `inventaire-charte.md`).
- **Exclu** : les nouveaux dossiers de `captures/` (78 Mo de PNG de vérification), laissés non suivis. Question 227.
- Note : les autres pages (blog, devis, services, mentions légales, test-charte) avaient des modifications en attente, faites lors de tâches précédentes (styles de la charte). Elles sont incluses dans le commit telles quelles : je ne les ai pas modifiées aujourd'hui.

## Nettoyage, SEO, contraste et chargement des Cas types (16 octobre 2026)

Réponses aux questions 221, 222, 224 (en partie), 225, 226 et 227, et à la question 213 pour la phrase du Hero. Questions ouvertes : **n° 223 (image de partage), 228, 229, 230 et 231**, ainsi que 216 (téléphone, adresse) pour les données structurées.

**Commit : `fac748d` (point 10).**

### 1. Suppressions validées (question 221)

`src/styles/global.css` :
- couleurs supprimées : `prune`, `violet`, `lagon`, `vert-800`, `vert-clair` (avec leurs blocs de commentaires) ;
- `--container-large` (et sa mention `max-w-large` dans le commentaire des conteneurs) ;
- `--radius-petit` : son commentaire le disait « réservé à SchemaMaison.astro », mais ce fichier ne l'utilisait plus ;
- `@utility etiquette` ;
- règles `[data-scene-etiquette]` (masquage, animation, réduction des animations) et l'animation `scene-rebond`, devenue inutile. Un commentaire note la suppression.

Gardés : `--spacing-section` et `--inset-shadow-assombrir` (page `test-charte`).

Attributs supprimés : `data-hero` (`Hero.astro`), `data-cas-section` (`CasTypes.astro`), `data-estimation` (`SimulateurEstimation.astro`), `data-mega-panneau` (`Header.astro`), `data-erreur` (`simulateur-etapes.ts` : la ligne qui le posait ; `aria-invalid` est conservé). Gardé : `data-illustration-absente`.

Commentaire mis à jour : `cas-neuf` ne renvoie plus à `vert-800`.

### 2. SEO (question 222)

- **Title** : « Rénovation énergétique : artisans locaux et aides | Akelia » (58 caractères).
- **Description** : « Rénovation énergétique avec l'artisan Akelia le plus proche : isolation, chauffage, solaire. Estimez vos aides en ligne, on monte le dossier pour vous. » (151 caractères).
- Vérifié dans le HTML produit par `astro build`.

### 3. Données structurées LocalBusiness (question 224)

- Bloc JSON-LD dans le `<head>` de l'accueil seulement. `Layout.astro` reçoit pour cela un emplacement `<slot name="head" />` : chaque page peut désormais y ajouter ses propres balises.
- Contenu :
  - `@type` : LocalBusiness ;
  - `additionalType` : HomeAndConstructionBusiness (entreprise du bâtiment) ;
  - `knowsAbout` : « Rénovation énergétique » ;
  - `name`, `description` ;
  - `areaServed` : pays, France ;
  - `url` : https://akelia.fr/ ;
  - `logo` et `image` ;
  - `sameAs` : la chaîne YouTube ;
  - `@id` : https://akelia.fr/#entreprise.
- ⚠️ **EN ATTENTE : `telephone` et `address`** (question 216). Sans adresse, Google n'affiche pas de fiche enrichie. Le balisage reste valide et lisible par les moteurs.
- ⚠️ **Logo provisoire** : `apple-touch-icon.png` (le favicon en 180px), faute de logo (question 231).
- Les URL dépendent du domaine `https://akelia.fr`, qui reste à confirmer (question 228).

### 4. Zones cliquables (question 226)

- « Lire la suite → » (`ArticleList.astro`) : `inline-flex min-h-11 items-center`, plus un contour de focus. Mesuré : **44px** de haut (22px avant).
- Liens du pied de page (`Footer.astro`) : `min-w-11` ajouté à la classe commune. « Blog » mesure **44 × 44px** (30px de large avant).

### 5. Montant du Hero (question 213, en partie)

- « Recevez **plus de** 32 000 € d'aides… » devient « Recevez **jusqu'à** 32 000 € d'aides pour réaliser votre projet. » C'est la même promesse que le résultat du simulateur.
- Reste ouvert : le montant n'est toujours confirmé par aucune source officielle. Et le titre de la section aides (« Augmentez la valeur de votre bien de plus de 32 000 € ») utilise le même chiffre dans un autre sens (valeur du bien) : non modifié, ce n'était pas demandé.

### 6. Image de partage : RAPPEL (question 223)

⚠️ **`/images/og-default.jpg` est toujours absente** (le dossier `public/images/` n'existe pas). Toutes les pages y renvoient (`og:image`, `twitter:image`).

**À fournir** : une image de **1 200 × 630px** (rapport 1,91:1), en JPG, de préférence sous 300 Ko. Le texte important doit rester dans la zone centrale, car certains réseaux recadrent en carré. Elle sera à déposer dans **`public/images/og-default.jpg`**. Il faudra ensuite ajouter `og:image:width`, `og:image:height` et `og:image:alt` dans `Layout.astro`.

### 7. Captures hors du dépôt (question 227)

- `.gitignore` : ajout de `captures/`.
- Les 12 captures déjà suivies (`captures/etape-22/`…) sont retirées de l'index Git (`git rm --cached`). **Tous les fichiers restent sur le disque.**

### 8. Contraste de « Fonctionnement » (question 225, pour ces paragraphes)

- Les paragraphes des 4 étapes passent de `texte-doux` (#4c5a64) à **`nuit-700` (#2b3f4e)**, une couleur qui existe déjà dans la charte. Aucune nouvelle couleur.
- Contraste sur la brume (#ccdce8), fond inchangé : **5,07:1 → 7,78:1**. Couleur relevée dans le navigateur : rgb(43, 63, 78).
- Les autres textes sous 7:1 (liste de la question 225 : badge et phrase du Hero, surtitres, bouton de l'en-tête, « Construction neuve », pied de page) **n'ont pas été modifiés**. La question reste ouverte pour eux.

### 9. Chargement des illustrations des Cas types

- **Principe** : le script des onglets s'exécute juste après la section, avant que le navigateur ne télécharge les images (chargement différé). Il range `srcset` et `src` des 5 images inactives dans `data-srcset` et `data-src`. L'image se charge quand son onglet est survolé, reçoit le focus ou est cliqué. Sans JavaScript, toutes les images se chargent comme avant.
- **Pas de vide** : le cadre de chaque image a déjà sa taille (rapport de la zone dessinée). Pendant le chargement, il affiche un fond neutre dérivé de la couleur de la section (`--cas-survol`, coins arrondis), retiré à l'arrivée de l'image.
- **Hauteur de la section stable**, mesurée sur les 6 onglets : **968px à 1280px** et **1 480px à 375px**, identique avant et après chaque chargement.
- **Délai au clic** : voir la question 230. Il est imperceptible en 4G et en wifi, et atteint 1,6 s en 3G lente, avec le fond neutre visible. Optimisation **gardée**.
- **Poids de la page après défilement complet** (non compressé) :

| | Avant | Après | Économie |
|---|---|---|---|
| 1280px | 1 080 Ko (19 requêtes) | **677 Ko** (14 requêtes) | −403 Ko |
| 375px | 687 Ko (18 requêtes) | **455 Ko** (13 requêtes) | −232 Ko |

  Chargement initial : inchangé (513 Ko à 1280px, 335 Ko à 375px). Au défilement, seule l'illustration du premier onglet (`maisonancienne.webp`) est chargée.

### 10. Vérification et commit

- `astro build` : réussi (8 pages).
- Captures pleine page : `captures/nettoyage-seo/1280-pleine-page.png` (7 998px de haut) et `375-pleine-page.png` (11 186px). Toutes les sections s'affichent normalement après les suppressions.
- Aucune erreur dans la console, aucun défilement horizontal (largeur de défilement = largeur d'écran).
- Captures du chargement des Cas types en 3G lente : `375-cas-types-attente-3g.png` (fond neutre) et `375-cas-types-charge-3g.png`.
- Commit « Nettoyage et SEO » : **`fac748d`** (`fac748db11e0fc1854763b27e4551348650bc6f6`). Cette ligne a été ajoutée après le commit.

## Favicon : lettre A à la place du losange (16 octobre 2026)

Demande : remplacer le losange (dessiné d'après une description, il ne correspond à aucun logo) par la lettre A, plus reconnaissable. Cette section remplace le dessin décrit au point 5 de « Vérification et nettoyage de la page d'accueil ».

### Ce qui a été fait

- **`public/favicon.svg`** (réécrit) : carré 32 × 32, coins arrondis à 6, fond **orange action-500** (#f0920f, conservé). **A majuscule bleu nuit nuit-900** (#1d2b36), centré, de 5,5 à 26,5 en hauteur : **21 unités sur 32, soit 65 %**, et 20 unités de large.
  - **Tracé vectoriel** (`<path>` avec `fill-rule="evenodd"`), aucune balise texte : le rendu ne dépend d'aucune police.
  - **Graisse épaisse, formes simples** : sommet plat de 5 unités, jambages de 5 unités à l'horizontale (environ 4,7 en épaisseur réelle), barre de 3,5 unités, évidement triangulaire au-dessus de la barre. Angles vifs, sans empattement.
- **`public/apple-touch-icon.png`** (refait) : 180 × 180, même dessin, **carré plein sans arrondi**, sans transparence (fond orange).
- **`public/favicon.ico`** (refait) : 32 × 32, même dessin (PNG encapsulé dans l'ICO).
- **Rendu** : les deux images sont produites à partir du SVG avec `sharp` (déjà présent dans `node_modules`), donc strictement identiques au SVG. Le script de génération n'a pas été ajouté au projet.
- **Couleur** : bleu nuit gardé, comme demandé : 6,1:1 sur l'orange, contre 2,2:1 pour le blanc.
- `src/layouts/Layout.astro` : commentaire mis à jour (« lettre A bleu nuit » au lieu de « losange bleu nuit »). Déclarations des icônes inchangées.

### Vérification

- Aperçu en barre d'onglets simulée, icône à **16px** : `captures/favicon/onglets-16px.png` (taille réelle) et `captures/favicon/onglets-16px-zoom3.png` (agrandi 3 fois, sans lissage). Icône seule à 16px agrandie 10 fois : `captures/favicon/icone-16px-zoom10.png`.
- Constat : **le A se lit nettement à 16px**. Les deux jambages, la barre et le petit évidement triangulaire restent distincts (l'évidement fait environ 2px de large à cette taille). Le carré orange ressort entre les onglets gris.
- `favicon.ico` vérifié en extrayant son image : c'est bien le A.
- ⚠️ La barre d'onglets est **simulée** (image composée), pas une capture d'un vrai navigateur : le lissage d'un navigateur réel peut différer légèrement.

### Points à arbitrer

- La question 231 (logo officiel pour les données structurées) reste ouverte : `apple-touch-icon.png`, désormais le A, sert toujours de logo provisoire dans le balisage LocalBusiness.

## Clé Web3Forms (16 octobre 2026)

Demande : installer la vraie clé Web3Forms à la place de `YOUR_ACCESS_KEY_HERE`, la ranger à un seul endroit, puis tester les deux formulaires. Questions ouvertes : **n° 232 à 234**.

### Ce qui a été fait

- **Nouveau fichier `src/data/web3forms.ts`** : il contient `CLE_WEB3FORMS` (`08e77810-e615-4993-8675-2212b8e486e0`) et `ADRESSE_WEB3FORMS` (`https://api.web3forms.com/submit`). C'est le **seul endroit** à modifier si la clé change.
  - J'ai choisi une constante plutôt qu'une variable d'environnement. La clé Web3Forms n'est pas un secret : elle figure de toute façon dans le HTML de la page (champ caché `access_key`). Une variable d'environnement compliquerait le déploiement (variable à déclarer chez l'hébergeur) sans rien protéger.
- **`src/pages/devis.astro`** : importe la clé (`value={CLE_WEB3FORMS}`) et l'adresse d'envoi.
- **`src/components/SimulateurEstimation.astro`** : importe la clé. La constante locale et l'avertissement « valeur d'exemple » sont supprimés. **`src/scripts/simulateur-estimation.ts`** importe l'adresse d'envoi.
- `YOUR_ACCESS_KEY_HERE` n'apparaît plus nulle part dans `src/`. Après `astro build`, la clé est présente dans `dist/index.html` et `dist/devis/index.html`.

### Vérifications

| Point | /devis | Simulateur (estimation) |
|---|---|---|
| Piège anti-robots `botcheck` | ✅ présent, case masquée (`display: none`) | ✅ présent, case masquée (`display: none`, hors tabulation) |
| Sujet (`subject`) | « Nouvelle demande de devis sur Akelia » | « Demande d'estimation des aides (simulateur Akelia) » |
| Nom d'expéditeur (`from_name`) | **« Akelia Devis »** (avant : « Akelia Contact ») | « Akelia Simulateur » |
| Message de succès | « Merci ! Votre demande a bien été envoyée. Nos experts reviendront vers vous très vite. » | « Merci ! Votre demande a bien été envoyée. Un artisan du collectif vous recontacte très vite. » |
| Erreur renvoyée par Web3Forms | « Votre demande n'a pas pu être envoyée. Veuillez réessayer dans quelques minutes. » | idem |
| Serveur injoignable | « Impossible de joindre le serveur. Veuillez vérifier votre connexion et réessayer. » | idem |

- **Nom d'expéditeur modifié** : « Akelia Contact » ne disait pas d'où venait la demande. Il devient « Akelia Devis », pour faire pendant à « Akelia Simulateur ». Sujets et expéditeurs sont maintenant distincts et explicites.
- **Message d'erreur modifié (les deux formulaires)** : auparavant, le message renvoyé par Web3Forms s'affichait tel quel, en anglais (par exemple « Invalid access key »). Le visiteur voit désormais toujours la phrase française ci-dessus. Le message d'origine part dans la console (`console.error('Web3Forms :', …)`) pour le diagnostic. J'avais d'abord ajouté « ou nous appeler directement », puis je l'ai retiré : le numéro de téléphone n'est pas encore fourni (pied de page, « À FOURNIR »).
- **Échec simulé** (réponse 400 « Invalid access key » imposée dans le navigateur de test) : le message français s'affiche sur les deux formulaires. Captures : `captures/web3forms/devis-echec.png`, `captures/web3forms/simulateur-echec.png`.

### ⚠️ Test d'envoi réel : impossible depuis le Codespace

- Envoi réel tenté depuis Chromium (Playwright), sur /devis puis dans le simulateur (parcours complet : statut, code postal 31000, travaux, résultat, « Obtenir vos aides réelles »). Données de test : nom ou prénom « TEST Claude (à ignorer) », e-mail boyernathan.tls@gmail.com, téléphone 06 00 00 00 00.
- **Résultat : les deux envois sont bloqués**, et **aucun mail n'est parti**. Console : « Access to fetch at 'https://api.web3forms.com/submit' […] blocked by CORS policy ». Le visiteur voit « Impossible de joindre le serveur… » (captures `devis-reel.png` et `simulateur-reel.png`).
- **Cause** : la même requête faite avec `curl` reçoit un 403 de Web3Forms : « This method is not allowed. Use our API in client side or contact support with server IP address (Pro plan is required) ». Web3Forms traite l'IP du Codespace (centre de données Azure) comme un serveur. La réponse de refus n'ayant pas d'en-tête CORS, le navigateur ne peut pas la lire.
- **Conséquence** : je ne peux confirmer ni le message de succès réel, ni l'acceptation par Web3Forms. Le code est le même que lors de l'échec simulé, et la clé est bien envoyée. Le test est à refaire depuis un navigateur sur une connexion ordinaire (question 232).

### Données hors Union européenne

- **Web3Forms est exploité par une société établie en Inde, hors UE.** Toutes les données saisies dans les deux formulaires transitent par ce service : nom ou prénom, e-mail, téléphone, ainsi que le type de travaux et le message pour /devis. **Il faudra le mentionner dans la politique de confidentialité** (question 233). La mention figure aussi en commentaire dans `src/data/web3forms.ts`.

## Pied de page : contact, médiation, phrase sous le logo (16 octobre 2026)

Fichier modifié : `src/components/Footer.astro`. Questions ouvertes : **n° 235 à 237**. ⚠️ **La consigne reçue était coupée au point 4** (« Équilibre des colonnes ») : seuls les points 1 à 3 ont été faits (question 235).

### 1. Colonne « Nous contacter »

- Lignes « Téléphone : à venir » et « E-mail : à venir » **supprimées**.
- Les constantes **`TELEPHONE` et `EMAIL` sont gardées**, avec leur mécanisme. Dès que l'une d'elles est renseignée, sa ligne (lien `tel:` ou `mailto:`) réapparaît sous « Nous contacter ». Si les deux valent `null`, aucune liste vide n'est produite.
- Le titre « Nous contacter » (`<h2>`) est remplacé par un **lien vers /devis**, même libellé, avec la classe commune `lien` des liens de navigation : 44px de haut minimum (mesuré : 44px), même style au survol (vert-600, souligné) et même contour de focus (bleu nuit, 2px). Capture du focus : `captures/pied-de-page/corrections-focus-1280.png`.
- « Nous retrouver » et le lien YouTube : inchangés.
- Point à arbitrer : le lien n'est pas en gras et sa ligne de texte est un peu plus basse que les titres des autres colonnes (question 236).

### 2. Médiation de la consommation : supprimée

- Ligne « Médiation de la consommation : à venir » et constante `MEDIATEUR` **supprimées**.
- **Précision à retenir, pour que la question ne soit pas reposée** : **Akelia ne contractualise pas avec le client final.** Le contrat de travaux est conclu **entre le particulier et l'artisan**. L'obligation d'adhérer à un médiateur de la consommation pèse donc **sur l'artisan**, pas sur Akelia. Le site d'Akelia n'a pas à afficher de médiateur. Cette précision figure aussi en commentaire en tête de `Footer.astro`.

### 3. Phrase sous le logo

- Avant : « Le collectif d'artisans locaux de la rénovation énergétique. »
- Après : « **Le collectif d'artisans locaux de l'efficience énergétique.** »
- Raison : l'activité dépasse la rénovation (construction neuve, production d'énergie, bornes de recharge).

### Autres textes qui réduisent l'activité à la « rénovation » (NON modifiés, à trancher)

Recherche dans `src/` (pages, composants, données). Seuls les textes visibles ou lus par les moteurs de recherche sont listés.

| # | Fichier | Texte actuel | Où il apparaît | Remarque |
|---|---|---|---|---|
| a | `src/pages/index.astro`, l. 42 | « Rénovation énergétique : artisans locaux et aides \| Akelia » | Titre de l'onglet et de Google, page d'accueil | Le plus visible. Attention au référencement : « rénovation énergétique » est la requête la plus recherchée, « efficience énergétique » l'est beaucoup moins. |
| b | `src/pages/index.astro`, l. 43 | « Rénovation énergétique avec l'artisan Akelia le plus proche : isolation, chauffage, solaire. […] » | Description sous le lien dans Google | Même remarque. |
| c | `src/pages/index.astro`, l. 31 | « Collectif d'artisans locaux de la rénovation énergétique : isolation, chauffage, solaire. […] » | Données structurées (LocalBusiness) | Formulation identique à l'ancienne phrase du pied de page : candidat évident. |
| d | `src/pages/index.astro`, l. 32 | `knowsAbout: 'Rénovation énergétique'` | Données structurées | Pourrait devenir une liste (rénovation énergétique, construction neuve, production d'énergie, bornes de recharge). |
| e | `src/pages/mentions-legales.astro`, l. 7 | « Consultez les mentions légales d'Akelia, spécialiste de la rénovation énergétique. » | Description Google | |
| f | `src/pages/devis.astro`, l. 7 | « Demande de devis gratuit \| Akelia Rénovation Énergétique » | Titre de l'onglet | « Akelia Rénovation Énergétique » y est présenté comme un nom. |
| g | `src/pages/devis.astro`, l. 8 | « Obtenez un devis gratuit et personnalisé pour vos travaux de rénovation énergétique : pompe à chaleur, isolation, panneaux solaires. » | Description Google | |
| h | `src/pages/services/index.astro`, l. 39 | « Nos Services de Rénovation Énergétique \| Akelia » | Titre de l'onglet, page Services | |
| i | `src/pages/blog/index.astro`, l. 12 | « Blog & Conseils Rénovation Énergétique \| Akelia » | Titre de l'onglet, page Blog | |
| j | `src/components/MethodeEtapes.astro`, l. 120 | « Le secret d'une rénovation rentable : faire les choses dans l'ordre » | Titre de la section Méthode | Sans « énergétique », mais la méthode décrite vise surtout la rénovation. |
| k | `src/components/Header.astro` l. 178, `Footer.astro` l. 37 | « Aides rénovation » (lien vers `/aides-renovation`) | Menu et pied de page | Les aides (MaPrimeRénov'…) concernent bien la rénovation : à garder probablement. |

**Non listés, car corrects tels quels** : « Rénovation énergétique globale » (formulaire /devis, l. 75, et carte « Rénovation Énergétique Globale » de `services/index.astro`, l. 27) et le lien « Rénovation globale » du menu et du Hero, qui désignent une prestation précise. Également les noms officiels de dispositifs régionaux dans `src/data/aides.ts`, et `src/pages/test-charte.astro`, page de test.

### Vérification

- Captures : `captures/pied-de-page/corrections-1280.png`, `corrections-800.png`, `corrections-375.png`.
- Hauteur du pied de page : 457px à 1280px, 648px à 800px, 1 033px à 375px. Aucune erreur dans la console.

## /devis : choix du type de projet (16 octobre 2026)

Fichier modifié : `src/pages/devis.astro`. Questions ouvertes : **n° 238 à 240**.

### Liste déroulante remplacée par de grandes cases

- **Décision** : la liste déroulante (`<select>`) est remplacée par des **boutons radio en grandes cases**, entièrement cliquables. Raison : les options d'une liste déroulante native ne peuvent pas être mises en valeur (ni filet, ni fond fiables selon le navigateur), et leur hauteur n'est pas réglable, donc les 44px ne peuvent pas être garantis. C'est le même modèle que les choix du simulateur (`SimulateurQuestions.astro`).
- **Ordre** :
  1. Rénovation globale
  2. Construction neuve
  3. Petite phrase « Ou un équipement en particulier : » (*rédigée par Claude, à valider*), puis : Isolation, Pompe à chaleur, Panneaux photovoltaïques, Fenêtres et volets, Chauffe-eau, Borne de recharge, Climatisation réversible, Je ne sais pas encore, **Autre projet** (question 238).
- **Disposition** : 2 colonnes à partir de 640px, 1 colonne en dessous. Les deux projets principaux forment une rangée à part, au-dessus des services.
- **Choix obligatoire** : `required` sur le groupe. Sans choix, le navigateur bloque l'envoi et affiche son message (vérifié : aucun envoi).
- **Clavier** : modèle radio standard. Tab entre dans le groupe, les flèches changent de choix, le contour de focus bleu nuit entoure la case.

### Mise en valeur des deux projets principaux

| Élément | Services | Rénovation globale, Construction neuve |
|---|---|---|
| Filet | 1px `texte-doux` (7,11:1 sur blanc) | **2px bleu nuit `nuit-900`** (12,9:1 sur leur fond) |
| Fond | blanc | **orange pâle `action-50`** |
| Texte | normal | **semi-gras** ; `texte` sur `action-50` : **14,56:1** |
| Coché | cadre vert-600 2px (filet + `ring` de 1px, sans décalage), fond `vert-50`, semi-gras | idem (cadre vert-600 2px, fond `vert-50`) |

- Contraste du cadre coché : vert-600 sur vert-50, **5,59:1** (plus de 3:1 requis pour un élément graphique). Texte coché : 14,41:1.
- **Zone cliquable** : chaque case mesure **56px de haut** (305 × 56 à 1280px, 293 × 56 à 375px), pour 44px demandés.
- Aucune nouvelle couleur : uniquement des jetons existants.

### Transmission dans l'e-mail

- Le champ s'appelle **« Type de projet »** (attribut `name`). Web3Forms reprend ce nom tel quel dans le corps du mail : la ligne lue sera « Type de projet : Construction neuve ». Avant, le champ s'appelait `service`.
- **Le sujet inclut le projet** : « **Demande de devis Akelia : Construction neuve** » (ajouté par le script au moment de l'envoi). L'ancien sujet fixe « Nouvelle demande de devis sur Akelia » reste dans le HTML, en secours si le script ne s'exécute pas.
- **Contrôle du contenu envoyé** (requête interceptée dans le navigateur de test, aucun envoi réel) :
  ```
  access_key = 08e77810-e615-4993-8675-2212b8e486e0
  subject = Demande de devis Akelia : Construction neuve
  from_name = Akelia Devis
  name = Test
  email = t@exemple.fr
  phone = 0600000000
  Type de projet = Construction neuve
  message =
  ```
  Le message de succès s'affiche ensuite normalement.
- **Réception réelle non vérifiée** : Web3Forms bloque le Codespace (question 239).

### Vérification

- Captures pleine page : `captures/devis/projet-1280.png` et `captures/devis/projet-375.png`. Détail du choix (Construction neuve cochée, survol de Borne de recharge) : `captures/devis/projet-coche-1280.png`. Focus clavier : `captures/devis/projet-focus-1280.png`.
- Pas de défilement horizontal (largeur de défilement = largeur d'écran, à 1280 et 375px). Aucune erreur dans la console.
- La barre sombre visible au milieu de la capture à 375px est la **barre d'outils du serveur de développement Astro**, absente du site publié.
- À 375px, les 11 cases empilées allongent le formulaire d'environ 650px.
- Mise à jour de la liste « Rénovation énergétique » (question 237) : l'option « Rénovation énergétique globale » de /devis n'existe plus, elle s'appelle désormais « Rénovation globale ».

## État des lieux des pages (16 octobre 2026)

Demande : faire le point sur les 8 pages, **sans rien modifier**. Aucun fichier du site n'a été touché. Seuls ce compte rendu et les captures ont été écrits. Questions ouvertes : **n° 241 à 245**.

Captures : `captures/etat-des-lieux/<page>-1280.png` et `<page>-375.png` (pleine page, barre d'outils Astro retirée). Pages : `accueil`, `devis`, `services`, `aides-renovation` (1280 seulement : page vide), `mentions-legales`, `blog`, `blog-article`, `test-charte`.

### Constats communs

- **En-tête et pied de page** : toutes les pages sauf /aides-renovation et /test-charte utilisent `Layout.astro`, donc l'en-tête et le pied de page refaits. Ils sont à jour.
- **Liens morts présents sur toutes ces pages** (en-tête et pied de page) : les **21 pages `/solutions/…`** du menu (isolation, PAC, chauffe-eau, photovoltaïque, borne, rénovation globale, construction neuve…), **/qui-sommes-nous** (3 liens par page), **/entreprise** (« Rejoindre le collectif ») et **/politique-confidentialite**. S'y ajoute **/aides-renovation**, qui existe mais est cassée (3 liens par page).
- **Pages qui pointent vers chaque page** (en-tête et pied de page compris) :

| Page | Liens entrants |
|---|---|
| /devis | toutes les pages (bouton de l'en-tête, pied de page, « Nous contacter ») ; 14 liens sur l'accueil |
| /services | **pied de page seulement** (absente du menu de l'en-tête) ; 2 liens sur l'accueil |
| /aides-renovation | toutes les pages (menu, pied de page) ; 3 liens sur l'accueil |
| /mentions-legales | pied de page de toutes les pages |
| /blog | toutes les pages (menu « Blog et conseils », pied de page) ; 4 liens sur l'accueil |
| /blog/comprendre-pompe-a-chaleur | /blog et l'accueil (section articles) |
| /test-charte | aucune |

- **Pages d'avant la refonte** : /devis (hors choix du projet), /services, /mentions-legales, /blog et l'article reprennent le style du premier jet. Elles utilisent bien les couleurs de la charte (renommées : `texte`, `texte-doux`, `vert-600`, `creme`…), mais pas ses **jetons de mise en page et de typographie** : `max-w-7xl`, `max-w-3xl`, `px-4 sm:px-6 lg:px-8` au lieu de `max-w-site` et `px-gouttiere` ; `text-3xl sm:text-4xl`, `text-xl`, `text-sm`, `text-xs` au lieu de `text-h1`, `text-h3`, `text-corps`. Du texte à 14px et 12px, sous les 16px minimum de la charte. Toutes s'adaptent au téléphone, sans défilement horizontal (vérifié à 375px).
- **Image de partage** : toujours absente (`/images/og-default.jpg` n'existe pas, question 117).

### /devis

1. **Contenu** : titre « Demandez votre devis gratuit », phrase d'introduction, formulaire (nom, e-mail, téléphone, type de projet en 11 cases, détails du projet, bouton). Environ 80 mots hors formulaire. Hauteur : 1 916px à 1280px, 2 881px à 375px. **Contenu réel** ; l'envoi est relié à Web3Forms.
2. **Visuel** : carte blanche sur fond crème. Choix du projet refait aujourd'hui selon la charte. Le reste date d'avant la refonte : étiquettes en 14px (`text-sm`), titre `text-3xl/4xl`, **bouton d'envoi vert-600** alors que l'action principale du site est orange (`action-500`, comme « Obtenir un devis »), messages d'erreur en couleurs Tailwind par défaut (`rose-50`, `rose-800`) et non `alerte-*`. Pas de message d'erreur sous chaque champ : ce sont les bulles du navigateur (le formulaire du simulateur a des messages en toutes lettres). Responsive : oui.
3. **Liens** : aucun lien propre à la page (en-tête et pied de page seulement).
4. **SEO** : title « Demande de devis gratuit | Akelia Rénovation Énergétique » ; description « Obtenez un devis gratuit et personnalisé pour vos travaux de rénovation énergétique : pompe à chaleur, isolation, panneaux solaires. » **Spécifiques** à la page (voir la question 237, « rénovation énergétique »).
5. **Manque** : mention d'information RGPD sous le formulaire (le simulateur en a une), avec lien vers la politique de confidentialité et mention du transfert hors UE (question 233) ; bouton orange ; étiquettes en 16px ; messages d'erreur par champ ; noms de champs en français (question 240) ; « 24 à 48 heures » à confirmer.

### /services

1. **Contenu** : titre « Nos Services », une phrase, **5 cartes** (Systèmes de Chauffage, Chauffe-eau Écologique, Production d'Électricité, Rénovation Énergétique Globale, Voitures Électriques). Chaque carte a une ligne de description et un lien « Demander un devis pour ce service → ». Environ 110 mots. 1 313px à 1280px, 2 682px à 375px. **Contenu provisoire** (premier jet généré) : aucune image, descriptions d'une ligne, « bornes de recharge ultra-rapides » discutable pour un domicile.
2. **Visuel** : **avant la refonte**. Cartes blanches génériques, majuscules à chaque mot (« Systèmes de Chauffage »), titres `text-xl`. Les liens de carte font **36px de haut** (moins des 44px requis) en 14px. Responsive : oui (3, 2 puis 1 colonne).
3. **Liens** : 5 × /devis, tous sans le type de projet (le formulaire ne se pré-remplit pas). Rien vers les pages `/solutions/…` du menu.
4. **SEO** : title « Nos Services de Rénovation Énergétique | Akelia » ; description « Découvrez l'ensemble des solutions Akelia : pompes à chaleur, chauffe-eau thermodynamique, panneaux photovoltaïques et bornes pour véhicules électriques. » Spécifiques.
5. **Manque** : la page fait doublon avec le menu à 3 rubriques et les 21 pages `/solutions/…` prévues, dont les catégories sont différentes (5 ici, 3 rubriques dans le menu). Isolation, menuiseries et construction neuve sont absentes. À refaire entièrement, ou à supprimer au profit des pages solutions.

### /aides-renovation

1. **Contenu** : **vide et cassé**. Le fichier ne contient que « --- » puis « // ================================= » : l'en-tête de code n'est jamais fermé. La page affiche ce texte brut en haut à gauche, police par défaut du navigateur, sans en-tête ni pied de page.
2. **Visuel** : aucun (HTML de 55 octets, sans CSS). Capture : `aides-renovation-1280.png`.
3. **Liens** : aucun. **Liens entrants : toutes les pages** (menu « Aides rénovation », pied de page, accueil). C'est le lien cassé le plus visible du site.
4. **SEO** : **aucun title, aucune description, aucune balise robots**. Google pourrait l'indexer en l'état.
5. **Manque** : tout. Le contenu existe en partie ailleurs : `src/data/aides.ts` contient toutes les aides (nationales, régionales) utilisées par le simulateur. Question 241.

### /mentions-legales

1. **Contenu** : 4 parties (Présentation du site, Hébergement, Propriété intellectuelle, Données personnelles et RGPD). Environ 170 mots. 1 714px à 1280px, 2 725px à 375px. **Contenu provisoire et juridiquement insuffisant** : « Siège social : France », « SAS au capital variable » (non vérifié), directeur de la publication « Direction de la communication Akelia » (il faut une personne physique), hébergeur non nommé (« infrastructures cloud »), pas de SIREN ou RCS, « Dernière mise à jour : Février 2025 ». Elle présente Akelia comme « experte en rénovation et efficacité énergétique ». Question 243.
2. **Visuel** : avant la refonte, mais sobre et lisible (carte blanche sur crème, titres `text-xl`, date en 14px). Responsive : oui.
3. **Liens** : aucun propre à la page. contact@akelia.fr est écrit en texte, sans lien.
4. **SEO** : title « Mentions Légales | Akelia » ; description « Consultez les mentions légales d'Akelia, spécialiste de la rénovation énergétique. » Spécifiques.
5. **Manque** : les informations légales (question 243) ; la partie RGPD devrait renvoyer vers une vraie politique de confidentialité (page absente, lien du pied de page en 404) et mentionner Web3Forms (question 233).

### /blog

1. **Contenu** : titre « Nos guides & conseils », une phrase, **une seule carte d'article**. Environ 60 mots. 1 350px à 1280px, 1 837px à 375px. **Provisoire** : un seul article, lui-même provisoire (voir ci-dessous).
2. **Visuel** : avant la refonte. La catégorie s'affiche **sous son nom technique** : « SYSTEME-DE-CHAUFFAGE » (sans accent, avec tirets). Description de la carte en 14px, date et « Lire l'article » en **12px** ; « Lire l'article » ne fait que **16px de haut**. L'image de couverture est un aplat bleu pâle uni. Responsive : oui.
3. **Liens** : 2 × /blog/comprendre-pompe-a-chaleur.
4. **SEO** : title « Blog & Conseils Rénovation Énergétique | Akelia » ; description « Guides, aides financières (MaPrimeRénov', CEE) et conseils techniques pour réussir votre transition énergétique. » Spécifiques.
5. **Manque** : de vrais articles ; libellés lisibles pour les catégories (6 sont prévues dans `content.config.ts`) ; tailles de texte et zones cliquables de la charte ; page vide de secours s'il n'y a aucun article.

### /blog/[slug] (un seul article : /blog/comprendre-pompe-a-chaleur)

1. **Contenu** : « Comprendre le fonctionnement d'une Pompe à Chaleur en 2025 » : lien retour, titre, date (15 janvier 2025), catégorie, image, un intertitre, un paragraphe, une liste de 3 points, une phrase finale. Environ 100 mots. 1 728px à 1280px, 2 377px à 375px. **Provisoire** (question 244) ; image de couverture **unie** (1 200 × 675, une seule couleur).
2. **Visuel** : **gabarit défaillant**. Le texte de l'article utilise les classes `prose`, mais le module Tailwind correspondant (`@tailwindcss/typography`) **n'est pas installé** : ces classes n'ont aucun effet. Conséquences visibles :
   - l'intertitre h2 de l'article fait **54px**, plus grand que le titre de la page (h1 à 36px) ; le h3 fait 38px ;
   - la **liste n'a plus de puces**, et il n'y a pas d'espace entre les paragraphes et les intertitres ;
   - « Retour aux articles » ne fait que 20px de haut, en 14px.

   Responsive : oui.
3. **Liens** : /blog (retour). Pages entrantes : /blog et l'accueil.
4. **SEO** : title construit (« <titre de l'article> | Blog Akelia ») et description reprise de l'article : **spécifiques**, générés à partir du contenu. Type `article` et image de partage : la couverture.
5. **Manque** : styles du texte d'article (installer le module typographique ou écrire les styles), affichage de la vidéo prévu dans le schéma mais non branché, libellé de catégorie, appel à l'action en fin d'article (devis ou simulateur), vrai contenu.

### /test-charte

- **À quoi elle sert** : page de vérification de la charte. Elle affiche toutes les couleurs du bloc `@theme` de `global.css`, les tailles de texte, les graisses, les arrondis, les ombres et des exemples de boutons. Elle n'utilise pas `Layout.astro` (ni en-tête, ni pied de page). 5 090px à 1280px, 7 341px à 375px.
- **Indexation** : elle porte `<meta name="robots" content="noindex, nofollow">` et **aucune page n'y renvoie**. Google ne devrait donc pas l'indexer, mais **elle est accessible à quiconque connaît l'adresse**. Son commentaire dit : « PAGE TEMPORAIRE : à supprimer avant la mise en ligne ».
- Elle n'est plus à jour : les couleurs ajoutées depuis (argile, brume, lichen, bruyère et leurs teintes foncées, couleurs des cas types, action-800, vert-100…) n'y figurent pas.
- **Recommandation : la supprimer avant la mise en ligne** (question 242). Elle n'a plus d'utilité maintenant que la charte est appliquée sur l'accueil.

### Recommandation par page

| Page | Recommandation | En bref |
|---|---|---|
| / (accueil) | Acceptable en l'état | Déjà traitée ; reste les liens morts communs. |
| /devis | **À compléter** | Formulaire fonctionnel ; mention RGPD, bouton orange, tailles de texte, erreurs par champ. |
| /services | **À refaire entièrement** (ou supprimer) | Contenu générique, catégories incohérentes avec le menu. |
| /aides-renovation | **À refaire entièrement** — urgent | Page cassée, liée depuis toutes les pages. |
| /mentions-legales | **À compléter** | Informations légales obligatoires manquantes. |
| /blog | **À compléter** | Gabarit à aligner sur la charte, catégories lisibles, vrais articles. |
| /blog/[slug] | **À refaire** (gabarit) et contenu à remplacer | Styles d'article cassés (`prose` sans module), article provisoire. |
| /test-charte | **À supprimer** | Page de travail, publique bien que non indexée. |

Pages **manquantes** liées depuis le site : /qui-sommes-nous, /entreprise, /politique-confidentialite et les 21 pages `/solutions/…`.

## /devis : refonte de la page (17 octobre 2026)

Fichier modifié : `src/pages/devis.astro` (réécrit). Questions ouvertes : **n° 246 à 254**. Réglée : **240** (noms des champs en français). Captures : `captures/devis-refonte/`.

### 1. Mise en page

- **Titre** : « Demandez votre devis gratuit » (`text-h2` sur téléphone, `text-h1` à partir de 768px, comme le titre du simulateur). **Sous-titre** : « Un artisan du collectif vous rappelle sous 24 à 48 heures. » (`text-chapeau`).
- **Conteneur** : `max-w-site`, `px-gouttiere`, `py-scene` (`md:py-scene-large`), fond crème. En-tête et pied de page complets (Layout).
- **À partir de 1024px** : deux colonnes 60 / 40 (`3fr / 2fr`). À gauche, le formulaire sur une carte blanche ; à droite, la réassurance. **En dessous de 1024px** : formulaire, puis réassurance.
- La carte du formulaire ne s'étire pas à la hauteur de la colonne de droite (`self-start`) : sinon, après l'envoi, la confirmation restait dans une grande carte blanche vide (défaut vu sur la première capture, corrigé).

### 2. Champs, dans l'ordre

| # | Champ | Obligatoire | Nom envoyé | Détail |
|---|---|---|---|---|
| 1 | Type de projet | oui, au moins un | `Type de projet` | **Cases à cocher**, mêmes grandes cases qu'avant (56px). Ordre inchangé : Rénovation globale, Construction neuve, « Ou un équipement en particulier : », puis les 9 entrées (question 246). « Je ne sais pas encore » est exclusif (question 247). |
| 2 | Précisions sur votre projet (facultatif) | non | `Précisions` | Zone de texte, consigne adaptée (point 3). |
| 3 | Nom | oui | `Nom` | `autocomplete="name"` |
| 4 | Téléphone | oui | `Téléphone` | 10 chiffres au moins, espaces acceptés (même règle que le simulateur). |
| 5 | Code postal | oui | `Code postal` | 5 chiffres exactement, clavier numérique. |
| 6 | Adresse (facultatif) | non | `Adresse` | |
| 7 | E-mail (facultatif) | non | `E-mail` | Vérifié seulement s'il est rempli. |
| 8 | Vous êtes (facultatif) | non | `Vous êtes` | Boutons radio : Propriétaire occupant, Propriétaire bailleur, Locataire. 3 colonnes à partir de 640px (1 colonne entre 1024 et 1279px, où la colonne du formulaire est étroite). |

- Les champs obligatoires n'ont plus d'astérisque : seuls les facultatifs portent « (facultatif) », en gris (`texte-doux`), comme demandé.
- **Supprimé** : le champ e-mail obligatoire d'avant (il devient facultatif), les placeholders d'exemple (« Ex: Jean Dupont »…).

### 3. Consigne adaptée du champ « Précisions »

- Affichée **sous l'étiquette** (`<p id="consigne-precisions">`, reliée au champ par `aria-describedby`), jamais en placeholder.
- Groupes : Rénovation globale et Construction neuve → « Année de construction, surface, mode de chauffage actuel, travaux déjà réalisés… » ; Isolation, Fenêtres et volets → « Surface concernée, type de murs, isolation déjà en place… » ; Pompe à chaleur, Chauffe-eau, Climatisation réversible → « Surface à chauffer, mode de chauffage actuel, nombre de pièces… » ; Panneaux photovoltaïques → « Orientation et surface du toit, consommation annuelle… » ; Borne de recharge → « Type de véhicule, emplacement souhaité, distance au tableau électrique… ».
- Rien de coché, groupes différents, « Je ne sais pas encore » ou « Autre projet » → « Décrivez votre projet en quelques mots. » Exception pour plusieurs cases d'un même groupe : question 248.
- **Sans JavaScript** : la consigne générique est écrite dans le HTML, elle reste affichée.
- Vérifié dans le navigateur, pour chaque groupe (voir « Vérification »).

### 4. Colonne de réassurance

- Titre (h2) « Ce qui se passe ensuite », puis les 3 étapes fournies, numérotées **dans le style de « Fonctionnement »** : pastille blanche cerclée d'orange, chiffre bleu nuit, filet orange entre les pastilles, texte `text-corps` en `nuit-700`. « Étape N : » est lu par les lecteurs d'écran.
- Encart distinct : cadre bleu nuit de 2px sur fond blanc, titre (h3) « Comment nous choisissons nos artisans », texte « Nous ne retenons que des entreprises notées 4,3 ou plus, certifiées RGE et assurées. »
- **Illustration `devis.png`** : le fichier est présent dans `src/assets/illustrations/` (déposé le 17 octobre 2026). Recadrée automatiquement sur sa zone dessinée (`zoneDessinee`), 384px de large au plus, centrée, optimisée en WebP. **Si le fichier manque, rien n'est affiché** (aucun emplacement vide). Texte alternatif vide : question 253.

### 5. Après l'envoi

- En cas de succès, le formulaire est **masqué** (`hidden`) et le bloc de confirmation prend sa place, dans la même carte : coche verte (`succes-600` sur `succes-50`), « **Merci, votre demande est partie.** » (h2), « L'artisan Akelia le plus proche de chez vous vous rappelle sous 24 à 48 heures. »
- Le **focus** est placé sur ce bloc (`tabindex="-1"`), qui est aussi ramené au milieu de l'écran. La colonne de réassurance reste affichée.
- En cas d'échec : message en toutes lettres au-dessus du bouton (cadre `alerte-700`, fond `alerte-50`), focus dessus, formulaire conservé. Textes inchangés : « Votre demande n'a pas pu être envoyée. Veuillez réessayer dans quelques minutes. » / « Impossible de joindre le serveur. Veuillez vérifier votre connexion et réessayer. »

### 6. Corrections de style

- **Bouton d'envoi orange** `action-500` (survol `action-600`), texte noir, 56px de haut : identique au bouton du simulateur.
- **Étiquettes en 18px** (`text-corps`, gras ; mesuré : 18px). Plus aucun `text-sm` sur la page.
- **Messages d'erreur sous chaque champ**, en toutes lettres, rouge foncé `alerte-700` en gras (`role="alert"`) ; le champ fautif prend un cadre rouge de 2px (`aria-invalid`). Le focus va au premier champ en erreur. L'erreur d'un champ s'efface dès qu'on le corrige. Plus de couleurs `rose-*`.
  - « Choisissez au moins un type de projet. » · « Indiquez votre nom. » · « Indiquez un numéro de téléphone (10 chiffres). » · « Indiquez un code postal de 5 chiffres, par exemple 31000. » · « Indiquez une adresse e-mail valide, par exemple jean.dupont@exemple.fr, ou laissez ce champ vide. » (*rédigés par Claude, sur le modèle du simulateur*)
- Le script désactive les bulles du navigateur (`novalidate` ajouté par le script). Sans JavaScript, ces bulles restent le seul contrôle (question 252).
- Jetons de la charte : `max-w-site`, `px-gouttiere`, `py-scene`, `text-corps`, `text-h2/h1/h3/h4`, `text-chapeau`, `rounded-bloc`, `shadow-legere`.

### 7. Mention sur les données

Sous le bouton, comme dans le simulateur, en texte courant : « Vos coordonnées servent uniquement à vous recontacter au sujet de votre projet. Elles ne sont ni revendues ni utilisées à d'autres fins. Vous pouvez demander leur suppression à tout moment. Pour en savoir plus, consultez notre politique de confidentialité. » ⚠️ **Le lien /politique-confidentialite mène à une page qui n'existe pas encore** (question 249).

### 8. Envoi (Web3Forms)

- Les cases cochées sont réunies **sur une seule ligne**, séparées par des virgules : « Type de projet : Rénovation globale, Pompe à chaleur, Borne de recharge ». Elles ne partent pas en plusieurs champs du même nom, que Web3Forms pourrait mal afficher.
- **Sujet** : « Demande de devis Akelia : » suivi des projets choisis. Le sujet fixe « Nouvelle demande de devis sur Akelia » reste dans le HTML pour l'envoi sans JavaScript.
- Champs vides retirés, `replyto` ajouté si un e-mail est saisi (question 251).
- **Contenu intercepté dans le navigateur de test** (réponse de Web3Forms simulée, **aucun envoi réel**), dans l'ordre :
  ```
  access_key     = 08e77810-e615-4993-8675-2212b8e486e0
  subject        = Demande de devis Akelia : Rénovation globale, Pompe à chaleur, Borne de recharge
  from_name      = Akelia Devis
  Type de projet = Rénovation globale, Pompe à chaleur, Borne de recharge
  Précisions     = Maison de 1975, 120 m², chaudière fioul.
  Nom            = TEST Claude
  Téléphone      = 06 00 00 00 00
  Code postal    = 31000
  E-mail         = test@exemple.fr
  Vous êtes      = Propriétaire occupant
  replyto        = test@exemple.fr
  ```
  (Adresse laissée vide : non envoyée. `botcheck` non cochée : non envoyée.)

### 9. Vérification (Chromium, serveur de développement)

- **Captures** : `captures/devis-refonte/vide-1280.png`, `vide-375.png` (formulaire vide) ; `envoye-1280.png`, `envoye-375.png` (après l'envoi) ; `erreurs-1280.png` (envoi à vide) ; `rempli-1280.png` ; `focus-1280.png`. Le bandeau d'en-tête qui apparaît au milieu de certaines captures pleine page vient de la capture elle-même : l'en-tête reste collé en haut de l'écran pendant le défilement.
- **Le message remplace bien le formulaire** : après l'envoi, le formulaire est `hidden` (affichage `none`) à 1280 et 375px, le focus est sur `devis-confirmation`, et la colonne de réassurance est toujours visible.
- **Envoi à vide** : 4 messages s'affichent (type de projet, nom, téléphone, code postal), pas d'erreur sur l'e-mail facultatif, et le focus va sur la première case de projet. Aucun envoi.
- **Consignes** : chaque groupe affiche son texte. Isolation + Fenêtres → texte « enveloppe » ; + Pompe à chaleur → générique ; « Autre projet » → générique. Cocher « Je ne sais pas encore » décoche les autres cases.
- **Parcours clavier** (Tab depuis la première case) : les 11 cases de projet une à une, Précisions, Nom, Téléphone, Code postal, Adresse, E-mail, groupe « Vous êtes » (un seul arrêt, flèches pour changer), bouton « Envoyer ma demande », lien « politique de confidentialité », puis le pied de page. La touche Espace coche une case. Contour de focus bleu nuit visible sur chaque case et chaque champ.
- **Pas de défilement horizontal** à 1280 et 375px. Aucune erreur dans la console. Hauteur de la page : 2 713px à 1280px, 5 448px à 375px (formulaire vide).
- `astro check` non lancé : le paquet `@astrojs/check` n'est pas installé (son installation demandait une confirmation interactive).
- Envoi réel non testé : Web3Forms bloque le Codespace (question 254).

## /devis : exclusivité des choix et encart (17 octobre 2026)

Fichier modifié : `src/pages/devis.astro`. Questions ouvertes : **n° 255 et 256**. Réglée : **247**. Mise à jour : **248**. Captures : `captures/devis-exclusivite/`.

### 1. Règle d'exclusivité des cases « Type de projet »

**Principe** : soit un projet d'ensemble, soit un ou plusieurs équipements, jamais les deux.

- Chaque case porte une nature (`data-nature`) : `ensemble` (Rénovation globale, Construction neuve), `equipement` (les 7 équipements **et « Autre projet »**, question 255), `exclusif` (Je ne sais pas encore).
- Règle appliquée par le script quand une case est **cochée** : toutes les autres cases sont décochées, **sauf** si la case cochée et l'autre case sont deux équipements. Cela donne exactement :
  - Rénovation globale et Construction neuve s'excluent l'une l'autre ;
  - cocher l'une d'elles décoche tous les équipements et « Je ne sais pas encore » ;
  - cocher un équipement décoche les deux projets d'ensemble et « Je ne sais pas encore » ;
  - les équipements se cumulent entre eux ;
  - « Je ne sais pas encore » décoche tout le reste.
- Décocher une case ne touche pas aux autres.
- Le décochage est immédiat et visible (le cadre vert disparaît), **sans message**.
- **Sans JavaScript** : les cases restent librement cochables. On peut donc envoyer « Rénovation globale » et « Isolation » ensemble. C'est acceptable, comme vous l'avez indiqué. La règle est aussi décrite en commentaire en tête du fichier.

### 2. Consigne du champ « Précisions »

Aucun changement de code nécessaire : la consigne se calcule toujours d'après les cases réellement cochées, après application de la règle.
- Un projet d'ensemble ne peut plus être combiné : il affiche toujours « Année de construction, surface, mode de chauffage actuel, travaux déjà réalisés… ».
- Entre équipements : même groupe → consigne du groupe (Isolation + Fenêtres → « Surface concernée… » ; Pompe à chaleur + Chauffe-eau + Climatisation → « Surface à chauffer… ») ; groupes différents → générique (Isolation + Pompe à chaleur, Panneaux + Borne) ; avec « Autre projet » → générique.
- « Je ne sais pas encore » seul, ou plus rien de coché → générique.

### 3. Encart « Comment nous choisissons nos artisans »

- **Constat** : il était **présent** dans le code et dans le HTML rendu (question 256). En revanche, il était **peu distinct** des étapes : fond blanc, cadre bleu nuit fin, même taille de texte que les étapes, rien qui le signale comme un argument plutôt qu'une étape.
- **Correction appliquée** :
  - **fond bleu nuit plein** (`nuit-900`), texte blanc : 14,47:1 ;
  - **icône de bouclier coché, orange** (`action-500`, 6,1:1 sur bleu nuit, plus de 3:1 requis pour une icône), à la place d'un numéro : décorative, ignorée des lecteurs d'écran ;
  - **écart de 3,5rem** au-dessus (2,5rem avant), ombre légère.
- Contenu inchangé : titre h3 « Comment nous choisissons nos artisans », texte « Nous ne retenons que des entreprises notées 4,3 ou plus, certifiées RGE et assurées. »
- Captures de la colonne de réassurance : `captures/devis-exclusivite/reassurance-1280.png` et `reassurance-375.png`. L'encart est visible et se détache nettement des trois étapes.

### 4. Vérification (Chromium, serveur de développement)

**Toutes les paires** : pour chacune des 11 cases A, puis chacune des 10 autres cases B, on coche A puis B et on relève les cases cochées. **110 combinaisons, 0 écart** avec la règle attendue :

| On coche A, puis B | Résultat |
|---|---|
| projet d'ensemble, puis l'autre projet d'ensemble | seul B reste coché |
| projet d'ensemble, puis équipement (ou « Autre projet ») | seul l'équipement reste coché |
| projet d'ensemble, puis « Je ne sais pas encore » | seul « Je ne sais pas encore » reste coché |
| équipement, puis projet d'ensemble | seul le projet d'ensemble reste coché |
| équipement, puis autre équipement | **les deux restent cochés** |
| équipement, puis « Je ne sais pas encore » | seul « Je ne sais pas encore » reste coché |
| « Je ne sais pas encore », puis n'importe quelle case | seule cette case reste cochée |

**Scénarios plus longs** (cases cochées ⇒ consigne affichée) :
- Isolation → Fenêtres → Rénovation globale ⇒ Rénovation globale seule ; consigne « Année de construction… ».
- Pompe à chaleur → Chauffe-eau → Climatisation ⇒ les trois ; « Surface à chauffer… ».
- Isolation → Pompe à chaleur → Borne → Je ne sais pas encore ⇒ Je ne sais pas encore seule ; générique.
- Je ne sais pas encore → Isolation ⇒ Isolation seule ; « Surface concernée… ».
- Autre projet → Isolation ⇒ les deux ; générique. Autre projet → Rénovation globale ⇒ Rénovation globale seule.
- Rénovation globale cochée puis décochée ⇒ plus rien de coché ; générique.

**Clavier** (Tab pour se déplacer, Espace pour cocher) : même comportement qu'à la souris. Espace sur Rénovation globale coche la case ; Tab, Espace sur Construction neuve décoche Rénovation globale ; Tab, Espace sur Isolation décoche Construction neuve ; Espace sur Isolation, Tab, Espace sur Pompe à chaleur laisse les deux cochés ; Maj+Tab jusqu'à Rénovation globale, Espace : seule elle reste. **Le focus reste sur la case où l'on a appuyé** : le décochage des autres ne le déplace pas. La consigne se met à jour à chaque fois.

**Contenu envoyé après la nouvelle règle** (requête interceptée, aucun envoi réel ; on a cliqué Rénovation globale, puis Isolation, puis Pompe à chaleur) :
```
access_key     = 08e77810-e615-4993-8675-2212b8e486e0
subject        = Demande de devis Akelia : Isolation, Pompe à chaleur
from_name      = Akelia Devis
Type de projet = Isolation, Pompe à chaleur
Nom            = TEST Claude
Téléphone      = 06 00 00 00 00
Code postal    = 31000
```
Rénovation globale, décochée par le clic sur Isolation, n'est pas envoyée. Confirmation affichée à la place du formulaire. Aucune erreur dans la console.

## /devis : encart de sélection et netteté de l'illustration (17 octobre 2026)

Fichier modifié : `src/pages/devis.astro`. Questions ouvertes : **n° 257 et 258**. Mises à jour : **253** et **256** (sans objet). Captures : `captures/devis-encart/reassurance-1280.png` et `reassurance-375.png` (écran haute résolution simulé, ×2).

### 1. Encart « sélection des artisans » refait

- **Contenu, dans cet ordre à l'écran** :
  - une rangée de **5 étoiles pleines orange** (`action-500`), 28px chacune ;
  - à droite, **« 4,5 »** en très grand, très gras (`text-display`, poids 900 : **76,8px à 1280px, 44,8px à 375px**) ;
  - sous les étoiles : **« note minimale exigée »**, en 16px semi-gras, blanc ;
  - en dessous, en texte courant (18px), centré : « Nous ne retenons dans le collectif que des entreprises notées 4,5 ou plus, certifiées RGE et assurées. »
- **Style** : fond bleu nuit plein (`nuit-900`), tout centré, ombre légère, 3,5rem sous les étapes. Rien à voir avec les pastilles numérotées au-dessus.
- **« note minimale exigée » : obligatoire.** Elle évite que la note soit prise pour une moyenne d'avis clients. Elle est en **16px**, le minimum de la charte, et non en 14px, pour rester lisible. En semi-gras, blanc sur bleu nuit : 14,5:1. La raison est écrite en commentaire dans le code, pour que personne ne la supprime.
- **Lecteurs d'écran** :
  - les étoiles sont décoratives (`aria-hidden`) ;
  - le code place « 4,5 » avant « note minimale exigée » (`flex-row-reverse` remet les étoiles à gauche à l'écran) ;
  - lecture vérifiée (arbre d'accessibilité) : titre « Comment nous choisissons nos artisans » (masqué à l'écran, question 258), « 4,5 », « note minimale exigée », puis la phrase.
- **Seuil** : 4,5 au lieu de 4,3 (question 257).

**Contrastes de l'encart** (fond `nuit-900` #1d2b36, calcul WCAG) :

| Élément | Couleur | Contraste | Seuil requis |
|---|---|---|---|
| « 4,5 », « note minimale exigée », phrase | blanc #ffffff | **14,47:1** | 4,5:1 (texte), 7:1 visé sur le site |
| Étoiles (décoratives) | orange `action-500` #f0920f | **6,08:1** | 3:1 (élément graphique) |
| Encart sur le fond de page | `nuit-900` sur `creme` #f7f4ee | ≈ 13,2:1 | — |

### 2. Illustration floue : cause et correction

**Diagnostic** :
- **Fichier source** : `devis.png`, **2048 × 2048px**, fond transparent. **Zone dessinée** : 813 × 1794px seulement (le personnage n'occupe que 40 % de la largeur).
- Le recadrage automatique remplit le cadre avec la zone dessinée. L'image entière est donc affichée **2,52 fois plus large que le cadre** : pour un cadre de 384px, l'image faisait **967px de large** à l'écran.
- Or l'attribut `sizes` annonçait **384px**, la largeur du cadre. Le navigateur choisissait donc une variante d'environ **400px** (800px sur écran 2x) et l'**étirait 2,4 à 2,5 fois** : c'était la cause du flou.
- Variantes générées avant : 400, 600 et 800px seulement.

**Correction** :
- `sizes` est désormais **calculé d'après le recadrage** : largeur du cadre × (largeur du fichier ÷ largeur de la zone dessinée). Cela donne `(min-width: 1024px) 726px, 565px`. Le calcul se refait seul si le fichier est remplacé.
- **Variantes WebP** : 600, 900, 1 200, 1 600 et 2 048px (vérifiées dans `dist/` après `astro build` : 22 à 104 ko).
- **Taille d'affichage réduite** : cadre de **288 × 635px** à partir de 1024px (au lieu de 384 × 847) et de **224 × 494px** en dessous. Le personnage est très haut (rapport 1 : 2,2) : à 384px de large, il dépassait 840px de haut.
- **Définition suffisante, sans agrandissement** : le dessin fait 813px de large dans le fichier. Il faut 576px sur un écran 2x à 288px, 672px sur un téléphone 3x à 224px. Seul un écran 3x en grand format (rare) demanderait 864px, soit 6 % d'agrandissement, invisible. **Le fichier source suffit, inutile de le regénérer** pour ces tailles. Pour l'afficher plus grand, il faudrait un fichier où le personnage occupe plus de place (moins de marge transparente) ou une image plus grande.

**Mesures dans le navigateur** (variante réellement chargée) :

| Écran | Cadre affiché | Image entière à l'écran | Variante WebP chargée | Pixels nécessaires |
|---|---|---|---|---|
| 1280px, écran classique (1x) | 288 × 635px | 726px | **900w** | 726 |
| 1280px, haute résolution (2x) | 288 × 635px | 726px | **1600w** | 1 452 |
| 375px, téléphone 2x | 224 × 494px | 564px | **1200w** | 1 129 |
| 375px, téléphone 3x | 224 × 494px | 564px | **2048w** | 1 693 |

Dans tous les cas, la variante chargée est **au moins aussi large** que ce qu'affiche l'écran : plus aucun agrandissement, l'image est nette (voir les captures en ×2).

### 3. Vérification

- Captures ×2 de la colonne de réassurance à 1280 et 375px : encart et illustration visibles et nets.
- Encart : 462px de large à 1280px, 335px à 375px. Étoiles, « 4,5 » et « note minimale exigée » tiennent sur une rangée à 375px.
- `astro build` sans erreur. Aucune erreur dans la console.

## Blog : import des 102 articles Webflow et gabarit d'article (17 octobre 2026)

Questions ouvertes : **n° 259 à 268**. Captures : `captures/blog-articles/`.

### 1. Lecture préalable (constats)

- Collections : **`src/content.config.ts`** (pas de `src/content/config.ts`). Ancien schéma en anglais (`title`, `pubDate`, `category`…), incompatible avec les 102 fichiers.
- `src/content/blog/` : 102 articles + l'article de démonstration `comprendre-pompe-a-chaleur.md` et son image `pompe-a-chaleur.jpg`. `src/assets/blog/` : 116 images.
- `Layout.astro` accepte : `title`, `description`, `image` (chemin, rendu absolu avec akelia.fr), `canonicalURL`, `type` (`website` | `article`), et un emplacement `head` pour les balises propres à la page (JSON-LD).
- Jetons `@theme` relevés : couleurs `nuit-900/700`, `action-50/500/600/800`, `vert-50/100/400/600`, `creme`, `creme-fonce`, `fond`, `texte`, `texte-doux`, `texte-inverse`, `succes-*`, `alerte-*`… ; tailles `text-display`, `text-chapeau`, `text-h1` à `text-h4`, `text-titre`, `text-corps` (18px), `text-petit`, `text-legende` ; espacements `gouttiere`, `scene`, `scene-large`, `section`, `bloc` ; `max-w-site` ; `rounded-bloc`, `rounded-pilule` ; ombres `legere`, `carte`, `elevee` ; points de rupture **sm 480px, md 768px, lg 992px** (voir la question 267).
- Frontmatter réel des articles (3 relus) : conforme au schéma du ticket. Le chapeau est un bloc de texte d'un seul paragraphe (aucun gras dans les chapeaux). Les 18 figures sont du **HTML brut** dans le Markdown.

### 2. Route déplacée

- `src/pages/blog/[slug].astro` → **`src/pages/post/[slug].astro`** (`git mv`, réécrit). `src/pages/blog/index.astro` reste à `/blog`.
- Article de démonstration **supprimé**, ainsi que son image `pompe-a-chaleur.jpg` (rien d'autre ne l'utilisait).
- Liens vers les articles mis à jour : accueil (`ArticleList.astro`) et `/blog` pointent désormais vers `/post/<slug>`. Adresse construite à un seul endroit : `urlArticle()` dans `src/utils/blog.ts`.

### 3. Module typographique

- `npm install -D @tailwindcss/typography` (0.5.20) : **seule dépendance ajoutée**. Déclaré dans `global.css` par `@plugin "@tailwindcss/typography";`, juste après `@import "tailwindcss";`.
- Le gabarit applique **`prose prose-lg`** : corps de 18px sur tous les écrans (le réglage de base du module, 16px, était sous le minimum de la charte).

**Correspondance retenue, jetons `@theme` → variables du module** (toutes en `var(--color-…)`, aucune valeur en dur) :

| Variable du module | Jeton | Contraste sur blanc | Remarque |
|---|---|---|---|
| `--tw-prose-body` | `texte` | 16,34:1 | texte courant |
| `--tw-prose-headings` | `texte` | 16,34:1 | titres |
| `--tw-prose-lead` | `texte` | 16,34:1 | |
| `--tw-prose-links` | `nuit-900` | 14,47:1 | liens soulignés ; `vert-600` au survol. **vert-600 écarté pour les liens : 6,34:1, sous les 7:1 du site** |
| `--tw-prose-bold` | `texte` | 16,34:1 | |
| `--tw-prose-counters` | `texte-doux` | 7,11:1 | numéros des listes |
| `--tw-prose-bullets` | `vert-600` | 6,34:1 | puces (décoratives) |
| `--tw-prose-hr` | `creme-fonce` | 1,23:1 | séparateur décoratif |
| `--tw-prose-quotes` | `texte` | 16,34:1 | citations |
| `--tw-prose-quote-borders` | `action-500` | — | filet de citation (décoratif) |
| `--tw-prose-captions` | `texte-doux` | 7,11:1 | légendes des figures |
| `--tw-prose-code`, `--tw-prose-pre-code` | `texte` | 16,34:1 | |
| `--tw-prose-pre-bg` | `creme` | — | fond des blocs de code |
| `--tw-prose-th-borders` | `texte-doux` | 7,11:1 | filet sous l'en-tête des tableaux |
| `--tw-prose-td-borders` | `creme-fonce` | 1,23:1 | filets entre lignes (discrets, décoratifs) |

Compléments dans `global.css` (section « TYPOGRAPHIE DES ARTICLES DE BLOG ») : liens soulignés avec contour de focus bleu nuit ; figures (image arrondie, jamais agrandie, centrée ; légende 16px centrée) ; cadre défilant des tableaux (filet `creme-fonce`, en-tête sur fond `creme`, largeur minimale 32rem, contour de focus).

**Mesures dans le navigateur** (version de production) :

| | 375px | 1440px |
|---|---|---|
| h1 (titre de l'article) | 35px | 48px |
| h2 | 30px | 30px |
| h3 | 24px | 24px |
| h4 | 20px | 20px |
| Corps | **18px** | **18px** |
| Chapeau | 20px | 20px |
| Largeur de la colonne | 335px | **540px** |
| Caractères par ligne (mesurés) | 43 à 44 | **70 à 71** |

Hiérarchie h1 > h2 > h3 > h4 respectée (c'était l'inverse avant). Colonne : **60ch** (65ch donnait 76 à 77 caractères par ligne). Débordement horizontal de la page : 0px sur les trois articles, aux deux largeurs.

### 4. Schéma de la collection

Remplacé par celui du ticket, champ pour champ. Seul écart : `z` est importé de **`astro/zod`**, et non de `astro:content`, car cet import est **obsolète dans Astro 7.3** (il sera supprimé dans une version future). Les 102 fichiers passent la validation.

### 5. Catégories en toutes lettres

- **`src/data/categories-blog.ts`** : table `CATEGORIES_BLOG` du ticket et fonction **`libelleCategorie(identifiant)`**, qui renvoie « Conseils » pour un identifiant inconnu.
- Utilisée partout où une catégorie s'affiche : surtitre des cartes (accueil, /blog, articles liés), fil d'Ariane, étiquette de l'article, `article:section`.
- **Vérifié sur les 108 pages compilées** : aucun identifiant technique dans le texte visible. Le mot « chauffe-eau » n'apparaît que dans son sens ordinaire (menu, textes). Surtitres et fils d'Ariane n'affichent que : Chauffage, Rénovation énergétique, Conseils, Production d'énergie, Mobilité électrique, Eau chaude sanitaire.

### 6. Utilitaires

- **`src/utils/texte.ts`** : `grasEnHtml()` (code du ticket : HTML neutralisé, puis `**…**` → `<strong>`) et `dateEnFrancais()` (« 6 janvier 2025 », « **1er** juin 2026 », lue en UTC pour ne pas reculer d'un jour).
- **`src/utils/blog.ts`** : `urlArticle()`, `articlesPublies()` (brouillons exclus, du plus récent au plus ancien), `articlesLies()`.
- **`src/utils/plugins-markdown.mjs`** : deux plugins du moteur Markdown (voir le point 8).

### 7. Gabarit d'article (`src/pages/post/[slug].astro`)

De haut en bas, dans une colonne de 60ch centrée :
1. **Fil d'Ariane** `<nav aria-label="Fil d'Ariane">` : Accueil › Blog › catégorie. Liens de 44px de haut.
2. **Surtitre de catégorie**, **h1** (`titre`), puis « Publié le **<time>** » et, si `dateMaj`, « · Mis à jour le **<time>** ».
3. **Chapeau** en `text-chapeau` (20px), normal, aligné à gauche.
4. **Vidéo OU couverture**, jamais les deux :
   - vidéo : `<iframe loading="lazy">` sur **youtube-nocookie.com** (pas de cookie YouTube avant lecture), titre « Vidéo : <titre> », conteneur à `aspect-ratio: videoProportion`. Les vidéos plus hautes que du 16:9 (1:1 et 5:4) sont plafonnées à **420px** et centrées. Mesuré sur l'article VMC : 420 × 420px à 1440px, 335 × 335px à 375px ;
   - couverture : `<Image>` avec `imageAlt`, `loading="eager"`, `fetchpriority="high"`, WebP de 400 à 1 400px, `sizes` réglé sur la colonne (540px).
5. **« En bref »** (94 articles) : encart vert pâle (`vert-50`), filet vert de 6px à gauche, coins arrondis, titre h2 « En bref » (20px, très gras), liste à puces vertes, chaque ligne passée dans `grasEnHtml`. Texte : 14,41:1.
6. **Corps** : `<Content />` dans `prose prose-lg max-w-none`.
7. **Sources** (si présentes) : h2 « Sources », liste de liens. Les liens externes portent `rel="nofollow noopener" target="_blank"` et la mention « (nouvel onglet) » pour les lecteurs d'écran. Les liens internes (`/…`) n'ont ni l'un ni l'autre (vérifié dans le HTML produit).
8. **Appel à l'action** vers /devis : bloc bleu nuit, surtitre orange, bouton orange, dans le style de la section Collectif de l'accueil (textes : question 264).
9. **Articles liés** (« À lire aussi », fond crème, 3 cartes) : les 3 plus récents de la même catégorie, sans l'article courant ni les brouillons, complétés au besoin par les articles d'importance la plus élevée. Ils utilisent la **carte de l'accueil**, sortie dans `src/components/CarteArticle.astro` (rendu identique). Deux retouches sur cette carte : son image devient décorative (`alt=""`, puisque le titre de la carte suit juste en dessous), et « Lire la suite » précise le titre de l'article aux lecteurs d'écran.

`getStaticPaths` part de `articlesPublies()` : **101 pages**, le brouillon est exclu.

### 8. Tableaux et figures : le moteur Markdown d'Astro 7

- Astro 7 utilise un nouveau moteur Markdown, **Sätteri**. Les plugins rehype classiques demanderaient d'installer `@astrojs/markdown-remark`. J'ai donc écrit **deux plugins au format Sätteri**, sans dépendance (`src/utils/plugins-markdown.mjs`, déclarés dans `astro.config.mjs`, question 266) :
  - **tableaux** : chaque `<table>` est enveloppé dans `<div class="tableau-defilant" role="region" tabindex="0" aria-label="Tableau">`. Sur téléphone, c'est ce cadre qui défile, pas la page. Mesuré à 375px : cadre de 333px, tableaux de 512 et 661px qui défilent dedans, page sans débordement ;
  - **images des figures** : ⚠️ **elles étaient cassées**. Les `<img src="../../assets/blog/…">` écrits en HTML ne passaient pas par Astro et pointaient vers une adresse inexistante. Le plugin les déclare comme images locales : Astro les optimise alors comme les images Markdown (WebP, largeur et hauteur). Il faut pour cela l'option **`features: { rawHtml: true }`**, qui fait lire le HTML du Markdown comme de vraies balises. Vérifié : **0 image introuvable** sur les 108 pages.
- Taille d'affichage des figures : question 263.

### 9. SEO de la page d'article (généré par le gabarit)

- `<title>` : `titreSeo` s'il existe, sinon `titre` (sans suffixe « | Akelia », comme demandé). Description : `description`.
- Canonique : `https://akelia.fr/post/<slug>`, sans barre finale (question 262).
- Open Graph et Twitter : titre, description, **image de couverture optimisée en JPEG de 1 200px**, en adresse absolue (`https://akelia.fr/_astro/….jpg`). Plus `article:published_time`, `article:modified_time` et `article:section`.
- **JSON-LD Article** : headline, description, image, datePublished, dateModified (`dateMaj`, sinon date de publication), author et publisher (Organisation Akelia), mainEntityOfPage.
- **JSON-LD VideoObject** si `videoYoutube` : name, description, thumbnailUrl (miniature YouTube et couverture), uploadDate (date de publication), embedUrl (youtube-nocookie). Présent sur les **8** articles vidéo.
- Les `<` des textes sont neutralisés dans le JSON-LD (un titre ne peut pas fermer la balise `<script>`).
- Vérifié sur les 101 pages : toutes ont le JSON-LD Article et l'image de partage optimisée.

### 10. Autres fichiers adaptés

- `src/components/ArticleList.astro` (accueil) : nouveaux champs, brouillons exclus, carte commune.
- `src/pages/blog/index.astro` : adaptée **a minima** au nouveau schéma (cartes communes, `/post/…`, catégories lisibles, brouillons exclus). Sa refonte est un ticket à part.

### 11. Vérification

- **`npm run build` : sans erreur ni avertissement**, 108 pages, dont **101 pages d'articles**.
- Articles examinés à 375 et 1440px (version de production, `astro preview`) :
  - **tableaux** : `/post/chauffage-le-plus-ecologique-comparatif-co2-pm-et-nox-2026`, à la place du brouillon (question 259) : 4 tableaux lisibles, défilant dans leur cadre sur téléphone ;
  - **figures** : `/post/quelles-sont-les-regions-adaptees-aux-pompes-a-chaleur` : deux cartes (430 et 450px, 335px sur téléphone), légendes plus petites, grises, centrées. Les trois paragraphes « Région optimale / intéressante / … » sous la carte sont du texte gras normal ;
  - **vidéo verticale sans texte** : `/post/lerreur-que-tout-le-monde-fait-avec-sa-vmc-video` : la page ne paraît pas cassée (fil d'Ariane, titre, dates, chapeau, vidéo carrée centrée de 420px, appel à l'action, 3 articles liés). Pas d'encart « En bref » (l'article n'en a pas).
- **Liens internes** : 6 vrais clics d'article à article dans le corps des textes, tous en 200 sur la bonne page. Contrôle de tous les liens des 108 pages : **tous les liens `/post/…` mènent à une page existante**. Liens morts restants : ceux de l'en-tête et du pied de page (pages `/solutions/…`, `/qui-sommes-nous`, `/entreprise`, `/politique-confidentialite`, déjà connus) et 2 liens dans les articles (question 261).
- Aucune erreur dans la console.
- Captures : `captures/blog-articles/` : `tableau-375.png`, `tableau-1440.png`, `figure-375.png`, `figure-1440.png`, `video-375.png`, `video-1440.png` (pleine page) ; `zoom-tableau-*.png`, `zoom-figure-*.png`, `zoom-enbref-*.png` (détails). Sur les détails, l'en-tête collé en haut de l'écran recouvre parfois le haut de la zone capturée.

### 12. Reste à faire sur le blog

- **Ticket suivant (non commencé, comme demandé)** : refonte de la page /blog et filtres par catégorie ; remontée automatique d'articles par thème sur les pages solutions ; sitemap.xml et robots.txt.
- Décider du brouillon (question 259) et de la barre finale selon l'hébergeur (question 262).
- Corriger ou rediriger les 2 liens internes morts (question 261) ; prévoir des redirections pour les autres anciennes adresses Webflow hors `/post/`, s'il y en a.
- Contenu : intertitres h3 de 11 articles, lignes-titres de « En bref », relecture des coquilles (question 265).
- Images de figure en meilleure définition, si elles doivent remplir la colonne (question 263).
- Données structurées : ajouter le logo d'Akelia à `publisher` (question 231 : aucun logo fourni) ; un `BreadcrumbList` pour le fil d'Ariane pourrait suivre.
- Image de partage par défaut du site, toujours absente (`/images/og-default.jpg`, question 117). Les articles, eux, ont la leur.
- `test-charte` ne montre pas les styles des articles (sans importance si la page est supprimée, question 242).

## Blog : largeur de lecture, sommaire et cartes cliquables (17 octobre 2026)

Fichiers modifiés : `src/pages/post/[slug].astro`, `src/components/CarteArticle.astro`, `src/styles/global.css`, `src/layouts/Layout.astro` (une classe). Questions ouvertes : **n° 269 à 271**. Captures : `captures/blog-lecture/`.

### 1. Lecture préalable

- Carte d'article : **`src/components/CarteArticle.astro`**, la seule. Elle sert à l'accueil (`ArticleList.astro`), à /blog et aux articles liés.
- En-tête collant (`#site-header`, `sticky top-0`), **mesuré dans le navigateur** : **73px sous 1280px** (une ligne), **122px à partir de 1280px** (la 2e ligne du menu apparaît à `xl:`). Un décalage fixe de 7rem aurait été faux sous 1280px. Les deux valeurs sont dans une variable unique, **`--hauteur-entete`** (`global.css`, `@layer base`), qu'utilisent le décalage des ancres et la position du sommaire collant. ⚠️ À mettre à jour si l'en-tête change de hauteur.
- Rappel : `lg:` vaut **992px** dans cette charte (question 267).

### 2. Largeur de lecture : trois zones

- **Zone 1, en-tête** : conteneur de 56rem centré, contenu aligné à gauche. Fil d'Ariane, catégorie, h1 (30 caractères par ligne au plus), dates, chapeau (60ch au plus), puis la vidéo ou la couverture (jusqu'à 896px de large, `sizes` mis à jour, variantes jusqu'à 1 800px).
- **Zone 2, corps** : conteneur de 72rem. À partir de 992px, grille `16rem | 1fr`, 3rem d'écart. Colonne de droite plafonnée à **70ch**, calculés à 20px, soit **700px**. En dessous de 992px : une colonne. Sans sommaire : une seule colonne centrée de 70ch.
- **Zone 3, articles liés** : inchangée.
- **Taille du texte** : `prose prose-lg lg:prose-xl` : **18px** sur téléphone et tablette, **20px** à partir de 992px. Titres à partir de 992px : h2 36px, h3 30px, h4 25px (h1 48px). Tableaux : 16px, puis 18px.

**Mesures (version de production)** :

| Article | 375px | 1024px | 1440px |
|---|---|---|---|
| quel-systeme-de-chauffage-est-le-plus-rentable… (sommaire) | 335px, 18px | **680px**, 20px | **700px**, 20px |
| quelles-sont-les-regions-adaptees… (sommaire) | 335px, 18px | **680px**, 20px | **700px**, 20px |
| lerreur-que-tout-le-monde-fait-avec-sa-vmc-video (sans sommaire) | 335px, 18px | 700px, 20px | 700px, 20px |

À 1440px, la colonne de texte mesure **700px** (fourchette demandée : 680 à 740px). À 375px : toute la largeur moins les gouttières de 20px. À 1024px avec sommaire : 680px (la colonne est limitée par la place disponible). Débordement horizontal : **0px** partout.

### 3. Sommaire

- Titres : `const { Content, headings } = await render(article)`, puis seulement les **h2** (`depth === 2`). Lien vers `#${titre.slug}`. Sommaire affiché à partir de **3** entrées, sinon ni sommaire ni colonne de gauche (questions 269 et 271).
- **Ordinateur (à partir de 992px)** : `<aside>` à gauche, dont le bloc intérieur est **collant** (`top: hauteur de l'en-tête + 1,5rem`, soit 97px sous 1280px et 146px au-delà) et plafonné à la hauteur de l'écran (`max-h: 100vh − en-tête − 3rem`, défilement interne si besoin). Contenu :
  - `<nav aria-label="Sommaire de l'article">`, titre « Sommaire » en surtitre gris (petites majuscules espacées) ;
  - `<ol>` sans numéros, filet crème à gauche, liens en 16px, `texte-doux` (7,11:1). Les intitulés passent à la ligne sans être tronqués. Chaque lien fait au moins **44px** de haut ;
  - **partie en cours** : `aria-current="location"` sur le lien, d'où texte `texte`, gras, **trait orange** (`action-500`) à gauche, par-dessus le filet crème ;
  - puis le **petit appel à l'action** : bouton orange pleine largeur « Demander un devis » (/devis) et lien discret « Akelia, le collectif d'artisans locaux » (/qui-sommes-nous, ⚠️ page inexistante pour l'instant).
- **Téléphone et tablette (sous 992px)** : `<details>` **replié**, juste après « En bref ». Intitulé « Sommaire », **chevron de la charte** (celui du menu mobile, qui pivote à l'ouverture ; flèche du navigateur masquée), fond crème une fois ouvert. Le petit appel à l'action n'y figure pas (question 270).
- **Suivi de la lecture** (script de la page, chargé seulement si l'article a un sommaire) :
  - un **IntersectionObserver** surveille les h2 du corps, dans la zone qui va du haut de l'écran jusqu'à la « ligne de lecture » (bas de l'en-tête + 2rem) ;
  - à chaque entrée ou sortie d'un titre, la partie active est recalculée : c'est le dernier h2 passé au-dessus de la ligne ;
  - aucun défilement détourné, aucune animation : seul l'attribut `aria-current` change ;
  - l'observateur est recréé si la fenêtre change de taille (la hauteur de l'en-tête change à 1280px) ; `scrollend` recalcule en fin de défilement.
  - **Deux défauts trouvés et corrigés pendant la vérification** :
    1. les id des titres gardent leurs accents (« systèmes »), que `lien.hash` renvoie encodés : la comparaison se fait maintenant sur l'identifiant décodé ;
    2. avec une simple ligne surveillée, un défilement doux rapide la « sautait », et le lien actif restait sur la partie précédente. La zone surveillée va désormais du haut de l'écran à la ligne.
- **Décalage des ancres** : `.prose :is(h2, h3) { scroll-margin-top: calc(var(--hauteur-entete) + 1rem) }`.
- **« Réduire les animations »** : `<html>` portait `scroll-smooth`, et la règle CSS de secours était écrasée par cette classe. Elle devient **`motion-safe:scroll-smooth`** (`Layout.astro`) : plus de défilement doux pour ceux qui l'ont désactivé, **sur tout le site**. Le lien actif continue d'être mis en valeur.

### 4. Carte d'article entièrement cliquable (`CarteArticle.astro`)

- Le **seul lien** est celui du titre. Son pseudo-élément `after:absolute after:inset-0` couvre la carte (`relative` sur `<article>`). Le lecteur d'écran n'annonce que le titre, et le texte reste sélectionnable (`user-select: auto`, vérifié).
- « Lire la suite → » devient un `<span>` (masqué aux lecteurs d'écran), simple mention visuelle.
- **Survol de la carte** (`group-hover`) ou **focus clavier** (`focus-within` / `group-focus-within`) : ombre `shadow-carte`, titre en `vert-600`, image légèrement agrandie, « Lire la suite » souligné.
- **Contour de focus porté par la carte entière** : `has-focus-visible:outline-2 outline-offset-2 outline-nuit-900`. Le contour propre au lien est retiré (`outline-none`), puisque c'est la carte qui le porte.
- Aucun autre lien dans la carte. Règle notée en commentaire : tout lien ajouté devra porter `relative z-10`.
- Un seul composant, modifié une fois : l'accueil, /blog et les articles liés en profitent.

### 5. Vérification

- `npm run build` : sans erreur ni avertissement, **108 pages, dont 101 articles**.
- **Sommaire, 22 clics** (5 et 6 entrées, à 1440px et 1024px, avec et sans « réduire les animations ») : **chaque titre s'arrête 16px sous l'en-tête** (138px pour un en-tête de 122px, 89px pour 73px), jamais caché. Le lien cliqué devient la partie active.
- **Défilement à la main** : le lien actif suit (aucun avant le premier h2, puis chaque partie à son passage).
- Sommaire du téléphone : replié au chargement ; ouvert puis cliqué, le titre arrive à 89px, sous l'en-tête de 73px.
- `scroll-behavior` mesuré : `smooth` par défaut, `auto` avec « réduire les animations ».
- **Figures** (article des régions) : cartes de 430 et 450px à 1024 et 1440px (taille réelle), 335px à 375px. Légendes en 16px sur la largeur de la colonne, centrées.
- **Tableaux** : à 375px, cadres de 333px qui défilent (tableaux de 512 et 661px) ; à 1024 et 1440px, 698px, un seul défile encore (746px). Page jamais plus large que l'écran.
- **Article vidéo** : pas de colonne de gauche ni de sommaire, une colonne centrée de 700px, grand appel à l'action en fin d'article avec le lien vers le collectif.
- **/blog, clics** sur une carte : sur l'image, dans le vide à droite du titre, sur la date, sur le résumé, sur « Lire la suite » : **5 sur 5 mènent au bon article**.
- **/blog, touche Tab** : 49 arrêts sur des cartes en 60 pressions, **un seul arrêt par carte**, **tous avec un contour visible** (2px plein, bleu nuit) sur la carte entière, ombre et titre vert. Capture : `blog-focus-clavier.png`.
- Captures : `long-*.png`, `figure-*.png`, `video-*.png` (375, 1024, 1440, pleine page) ; `sommaire-collant-1440.png`, `sommaire-collant-1024.png`, `sommaire-mobile-ouvert-375.png`, `tableau-375.png`, `tableau-1440.png`, `carte-survol.png`, `blog-focus-clavier.png`.

### 6. Articles sans sommaire (6)

**Vidéo seule, aucun titre (6)** :
- `lerreur-que-tout-le-monde-fait-avec-sa-vmc-video`
- `les-plus-grosses-erreurs-quand-on-fait-des-travaux-de-renovation-energetique`
- `peut-on-chauffer-toute-la-france-au-bois-video`
- `pourquoi-la-moisissure-sinstalle-chez-vous-et-comment-la-stopper-video`
- `prix-du-kwh-quelle-energie-est-la-moins-chere-en-2026-video`
- `quel-systeme-de-chauffage-a-le-meilleur-rendement`

**Mise à jour du 17 octobre 2026** : les **11 articles « aucun h2 »** et les **16 articles « un ou deux h2 seulement »** relevés ici n'étaient pas un choix éditorial mais un **défaut de conversion** (les titres de niveau 2 qui introduisaient directement un sous-titre de niveau 3 étaient supprimés). Les fichiers ont été remplacés : ces 27 articles ont désormais un sommaire. Question 269 réglée. Détail : « Blog : vérification des titres h2 restaurés ».

## Blog : vérification des titres h2 restaurés (17 octobre 2026)

Contexte : les 102 fichiers de `src/content/blog/` ont été remplacés ; la conversion précédente supprimait les h2 suivis directement d'un h3. Ticket de **vérification** : **aucun code modifié**. Questions ouvertes : **n° 272 à 275**. Questions 265 (premier point) et 269 réglées. Captures : `captures/blog-sommaire-h2/`.

### 1. Contenu livré

- 614 lignes `##` au total (463 avant), 1 493 `###`. Comparaison avec l'ancienne version (`akelia-blog-102-articles.zip`) : frontmatter identique, 116 images inchangées. Différences autres que les h2 : question 275.

### 2. Compilation

- `npm run build` : **108 pages, dont 101 articles**, sans erreur ni avertissement.
`*-1440.png` (sommaire collant avec partie active, h2 et h3 visibles) et `*-375-sommaire.png` (sommaire du téléphone ouvert) pour les trois articles ; `geothermique-collant-1024x600.png`, `-1024x700.png`, `-1024x768.png`, `-1024x900.png`.

## Blog : correctifs 272, 273 et 274 (17 octobre 2026)

Fichiers modifiés : `src/content/blog/*.md` (réimport v3), `astro.config.mjs`, `src/utils/plugins-markdown.mjs`, `src/styles/global.css`, `src/pages/post/[slug].astro`. Questions 272, 273 et 274 réglées ; nouvelle question **n° 276** (coquille). Captures : `captures/blog-correctifs-272-274/`.

### 1. Réimport des articles (question 273)

- `rm src/content/blog/*.md` puis `unzip -o akelia-blog-102-articles-v3.zip -d .`. Avant d'écraser, comparaison avec l'archive : mêmes 102 noms, **frontmatter identique**. Les deux fichiers de `scripts/` (aussi dans l'archive) sont **identiques** aux nôtres. Toujours 614 h2.
- **Cause du débordement : la conversion, pas le contenu.** L'ancienne conversion aplatissait les 18 schémas dessinés en caractères (8 articles) sur une seule ligne de code en ligne. Ce sont maintenant de vrais blocs de code (```` ``` ````). Plus aucune ligne de code en ligne ne contient ces dessins.
- **Coloration syntaxique désactivée** (`markdown.syntaxHighlight: false`, `astro.config.mjs`). Constat mesuré : Astro passait les blocs dans Shiki, thème **github-dark**, avec un **fond #24292e en style en ligne**. Impossible d'avoir le fond crème sans `!important`. Les seuls blocs de code du blog sont des schémas en texte brut : la coloration ne servait à rien. Les blocs sortent maintenant en `<pre><code>` simples.
- **Nouveau plugin `schemasDefilants`** (`plugins-markdown.mjs`) : chaque `<pre>` reçoit `role="region" tabindex="0" aria-label="Schéma"`, comme les tableaux, pour défiler au clavier (Shiki ajoutait `tabindex="
### 3. Articles avec et sans sommaire (pages compilées)

- **95 avec sommaire, 6 sans**. Les 6 sans sont **exactement** les 6 articles vidéo attendus (liste dans « Blog : largeur de lecture… », partie 6). Aucun article inattendu.

### 4. Trois articles qui n'avaient pas de sommaire

Mesures dans Chromium (version de production, `astro preview`), à 1440 × 900 et 375 × 812 :

| Article | h2 / entrées | h3 | Sommaire = h2 de la page | Hiérarchie (corps) | Suivi au défilement | Clics |
|---|---|---|---|---|---|---|
| `renovation-thermique-reussir-lite-et-les-ponts-thermiques` | 5 / 5 | 10 | oui (ordre, texte, ancre) | h1 > h2 > h3, aucun saut | 59 et 92 positions, 0 erreur | 1440 : 5/5 à 138px (en-tête 122px). 375 : 2/5 à 89px, **3/5 à 111px** (question 272) |
| `pompe-a-chaleur-geothermique-tout-ce-que-vous-devez-savoir` | 7 / 7 | 20 | oui | h1 > h2 > h3, aucun saut | 69 et 104 positions, 0 erreur | 1440 : 7/7 à 138px. 375 : 7/7 à 89-90px (en-tête 73px) |
| `comprendre-les-differences-entre-dpe-audit-energetique-et-etude-thermique` | 7 / 7 | 22 | oui | h1 > h2 > h3, aucun saut | 62 et 87 positions, 0 erreur | 1440 : 7/7 à 138-139px. 375 : 7/7 à 89-90px |

- **Hiérarchie à l'écran** : h1 48px > h2 36px > h3 30px à 1440 ; h1 35px > h2 30px > h3 24px à 375. Un seul h1 par page.
- **Suivi de lecture** : défilement par pas de 250px du haut au bas de la page ; à chaque pas, le lien actif est bien le dernier h2 passé sous la ligne de lecture (aucun avant le premier h2).
- **Clics** : le titre s'arrête 16px sous l'en-tête, jamais dessous. Le lien cliqué devient actif à la fin du défilement doux (sur les longs trajets, ce défilement prend jusqu'à 1,5 à 3 s). Exception : question 272.
- **Débordement horizontal** : 0 sur l'article géothermie et l'article DPE ; **+88px / +605px sur l'article ITE**, à cause d'un tableau en dessin de caractères (question 273, défaut antérieur).

### 5. Bloc collant à 1024px (géothermie, 7 entrées)

| Écran | Haut du bloc | Bas du bloc | Contenu | Défilement interne |
|---|---|---|---|---|
| 1024 × 900 | 97px | 701px | 604px | non, tout tient |
| 1024 × 768 | 97px | 701px | 604px | non, tout tient |
| 1024 × 700 | 97px | 676px | 604px | oui : lien « collectif » coupé |
| 1024 × 600 | 97px | 576px | 604px | oui : bouton « Demander un devis » sous le pli |

Le bloc ne dépasse jamais l'écran. Il faut au moins **725px** de haut pour tout voir sans défilement interne (question 274).

### 6. Recensements sur les 101 articles

- **Intitulés du sommaire qui changent de nombre de lignes en gras** (question 272), à 375px (19 articles) : `chauffage-le-plus-ecologique-comparatif-co2-pm-et-nox-2026`, `chauffe-eau-electrique-vs-thermodynamique-…`, `comment-ameliorer-simplement-le-dpe-dun-logement-avec-un-chauffe-eau-thermodynamique`, `comment-regler-la-temperature-dune-pompe-a-chaleur-avec-la-loi-deau`, `electricite-ou-gaz-comment-choisir-…` (3 entrées), `est-il-interessant-de-remplacer-sa-chaudiere-a-fioul-…`, `gestionnaire-denergie-hems-…`, `installer-des-panneaux-solaires-est-il-toujours-rentable-…`, `isolation-thermique-ete-et-hiver-quel-est-le-meilleur-materiau-…`, `mon-systeme-de-chauffage-est-il-compatible-…`, `ou-installer-sa-pompe-a-chaleur-…`, `pompe-a-chaleur-air-air-vs-air-eau-…`, `pourquoi-la-vmc-est-le-parent-pauvre-…`, `quel-systeme-de-chauffage-pour-un-plancher-chauffant`, `renovation-thermique-reussir-lite-et-les-ponts-thermiques` (2 entrées), `rentabilite-des-pompes-a-chaleur-…`, `solaire-en-copropriete-…`, `tout-savoir-sur-les-pompes-a-chaleur-hybrides-…`, `v2l-v2h-v2g-…`. À 1440px : 18 articles, sans effet sur le texte.
- **Débordement horizontal** : 4 articles à 375px, 1 à 1440px (question 273). Tous les autres : 0.

### 7. Captures (`captures/blog-sommaire-h2/`)

0"`, qui disparaissait avec lui). Note technique : avec Sätteri, les nœuds sont en lecture seule. Il faut un `ctx.setProperty(nœud, 'role', …)` **par attribut** ; remplacer `properties` d'un bloc ne fait rien.
- ⚠️ **Cache d'Astro** : après une modification d'un plugin Markdown, `npm run build` réutilise le rendu en cache des articles inchangés (`node_modules/.astro/data-store.json` et `.astro/data-store.json`). Il a fallu supprimer ces deux fichiers pour que le plugin s'applique. À savoir pour toute modification future des plugins.
- **Styles des schémas** (`global.css`, section typographique, juste avant les tableaux), commentaire en place :
  - `overflow-x: auto`, `white-space: pre`, `overflow-wrap: normal`, `word-break: normal`, redits explicitement (une coupure détruirait le dessin) ;
  - police à chasse fixe (`--font-mono` de Tailwind), **15px** quelle que soit la taille du texte, interligne 1,5 ;
  - fond `creme`, texte `texte`, filet `creme-fonce`, coins `--radius-bloc`, contour de focus bleu nuit.

**Mesures** (Chromium, version de production) :
- **18 schémas sur 8 articles**, tous à **15px**, police `ui-monospace`, fond `rgb(247, 244, 238)` (crème), `overflow-x: auto`, `white-space: pre`, `overflow-wrap: normal`.
- À **375px** : cadre de 333px, les 18 défilent dans leur cadre (contenu de 544 à 1 075px). À **1440px** : cadre de 698px, 11 défilent (contenu jusqu'à 1 075px), 7 tiennent entiers.
- **Clavier** : Tab jusqu'au schéma, flèche droite ×3 : le cadre défile de 120px.
- **Débordement horizontal de la page : 0px sur les 101 articles, à 375 et à 1440px.** Cela inclut les 4 articles relevés à la question 273, dont l'article ITE, qui débordait de 605px (375) et 88px (1440).

### 2. Pas de gras sur l'entrée active, sous 992px (question 272)

- `[slug].astro` : la constante commune `classesLienSommaire` n'a plus `aria-[current=location]:font-bold`. Une nouvelle constante, `classesLienSommaireOrdinateur`, l'ajoute. Elle sert **seulement** dans la colonne de gauche (992px et plus). Le commentaire demandé est placé au-dessus de cette constante.
- Sur téléphone et tablette, l'entrée active est signalée par la couleur `texte` (au lieu de `texte-doux`) et par le trait orange.

**Mesures** : chaque entrée cliquée après retour en haut de page, sommaire du téléphone ouvert.

| Article | 375px (en-tête 73px) | 1440px (en-tête 122px) |
|---|---|---|
| `renovation-thermique-reussir-lite-et-les-ponts-thermiques` | **5/5 à 89px**, lien actif juste, graisse 400 | 5/5 à 138px, graisse 700 |
| `electricite-ou-gaz-comment-choisir-…` | **6/6 à 89px**, graisse 400 | 6/6 à 138px, graisse 700 |
| `quel-systeme-de-chauffage-pour-un-plancher-chauffant` | **9/9 à 89px**, graisse 400 | 9/9 à 138px, graisse 700 |

Une entrée qui devient active ne change plus de hauteur (0 cas sur les trois articles, aux deux largeurs).

### 3. Bloc collant : seule la liste défile (question 274)

- `[slug].astro` : le bloc collant devient une **colonne flexible** (`flex flex-col`). Sa hauteur maximale ne change pas (écran − en-tête − 3rem), mais il **ne défile plus lui-même** :
  - le `<nav>` est une colonne flexible avec `min-h-0` ;
  - le titre « Sommaire » et le bloc d'appel à l'action ont `shrink-0` ;
  - c'est la **liste `<ol>`** qui porte `overflow-y: auto` et `min-h-0`, plutôt que le `<nav>` entier : ainsi le titre « Sommaire » reste fixe, comme sur le schéma du ticket.

  Commentaire en place, avec la raison du `min-h-0`.
- **Dégradés** : classe `sommaire-defilant` (`global.css`), technique « ombres de défilement » en CSS seul. Deux caches couleur `fond` suivent le contenu ; deux ombres légères (`nuit-900` à 18 %) restent fixées au cadre. L'ombre du haut n'apparaît qu'après un défilement, celle du bas que s'il reste des entrées ; rien quand tout tient.
- Effet de bord : le `pr-2` du bloc (place pour la barre de défilement) a disparu, donc la liste est un peu plus large. Sur les trois articles mesurés, aucun intitulé ne change plus de nombre de lignes en gras à 1440px.

**Mesures** sur `pompe-a-chaleur-geothermique-tout-ce-que-vous-devez-savoir` (7 entrées), 1024px de large :

| Écran | Bloc | Liste | Entrées entières visibles | Bouton « Demander un devis » | Lien « collectif » |
|---|---|---|---|---|---|
| 1024 × 900 | 97–693px | 404px, ne défile pas | 7 | 589–637px, entier | 649–693px, entier |
| 1024 × 768 | 97–693px | 404px, ne défile pas | 7 | entier | entier |
| 1024 × 700 | 97–676px | 387px, **défile** | 6 | 572–620px, **entier** | 632–676px, entier |
| 1024 × 600 | 97–576px | 287px, **défile** | 4 | 472–520px, **entier** | 532–576px, entier |
| 1024 × 500 | 97–476px | 187px, **défile** | 3 | 372–420px, **entier** | 432–476px, entier |

Le bloc ne déborde jamais lui-même. Captures : `collant-1024x*.png`, et `collant-1024x600-milieu.png` (liste défilée à mi-course, avec les dégradés en haut et en bas).

### 4. Vérification finale

- `npm run build` : **108 pages, dont 101 articles**, sans erreur ni avertissement.
- **95 articles avec sommaire, 6 sans** : les 6 articles vidéo, inchangés.
- **Débordement horizontal : 0px sur les 101 articles, à 375 et 1440px.**
- Captures (`captures/blog-correctifs-272-274/`) : `schema-ite-375.png`, `schema-ite-375-clavier.png`, `schema-ite-1440.png`, `sommaire-mobile-actif-375.png`, `collant-1024x900.png` à `collant-1024x500.png`, `collant-1024x600-milieu.png`.

## Blog : page d'entrée, pages de catégorie et pagination (17 octobre 2026)

Questions 259 et 261 réglées. Nouvelles questions : **n° 277 à 281**. Captures : `captures/blog-listes/`.

### 1. Fichiers

| Fichier | Rôle |
|---|---|
| `src/data/categories-blog.ts` | Table des catégories : `libelle`, **`adresse`** (courte), **`description`** (chapeau et méta-description), dans l'ordre de la barre. Nouvelles fonctions **`urlCategorie(id)`** (→ `/blog/chauffage`) et **`categorieDepuisAdresse('chauffage')`** (→ `systeme-de-chauffage`). Commentaire : **« page » est une adresse réservée**. Un garde-fou fait échouer la compilation si une catégorie prend « page » ou si deux catégories ont la même adresse. |
| `src/utils/blog.ts` | `ARTICLES_PAR_PAGE` (12), **`urlListeBlog(categorie, numero)`** (seule fabrique des adresses de liste), `pagesDeListe()` (pages statiques à partir de `paginate()`), `articleALaUne()`. |
| `src/utils/seo.ts` (nouveau) | `jsonLdTexte()` (sorti du gabarit d'article) et `filArianeJsonLd()` (JSON-LD BreadcrumbList). |
| `src/pages/blog/[...page].astro` (nouveau) | **Une seule route** pour /blog, /blog/page/N, /blog/<catégorie> et /blog/<catégorie>/page/N. |
| `src/pages/blog/index.astro` | **Supprimé** (remplacé par la route ci-dessus). |
| `src/components/BarreCategories.astro` (nouveau) | Barre des sept liens. |
| `src/components/Pagination.astro` (nouveau) | Précédent / numéros / Suivant. |
| `src/components/CarteArticleUne.astro` (nouveau) | Grande carte de l'article mis en avant. `CarteArticle.astro` n'est **pas modifié**. |
| `src/components/FilAriane.astro` (nouveau) | Fil d'Ariane commun aux articles et aux listes. |
| `src/layouts/Layout.astro` | Nouvelle prop **`indexable`** (par défaut `true`) : `false` donne `<meta name="robots" content="noindex, follow">`. |
| `src/pages/post/[slug].astro` | Fil d'Ariane via `FilAriane.astro` ; **la catégorie y devient un lien** vers sa page ; **JSON-LD BreadcrumbList** ajouté. |
| 2 articles | Liens morts corrigés (partie 6). |

### 2. Routage

- `paginate()` d'Astro ne sait produire que `/blog/2` (paramètre `[...page]`) ou `/blog/1` (paramètre `[page]`), jamais `/blog/chauffage/page/2`. Solution retenue : une route à paramètre « reste » unique, **`[...page]`**, qui reçoit tout ce qui suit /blog (`chauffage/page/2`). `pagesDeListe()` appelle `paginate()` (découpage par 12, numéros, total), puis remplace le paramètre et les adresses `page.url` (current, prev, next, first, last) par celles de `urlListeBlog()`. Le paramètre doit s'appeler `page` : `paginate()` l'exige.
- Adresses sans barre finale, comme les articles (même remarque d'hébergement que la question 262).
- Aucune adresse de catégorie écrite en dur : tout passe par `urlCategorie()` et `urlListeBlog()`.

### 3. Pages

- **/blog, page 1** : pas de fil d'Ariane. h1 « Guides et conseils ». Chapeau rédigé par moi : « Pompes à chaleur, isolation, solaire, aides financières : les guides des artisans Akelia pour préparer vos travaux et faire baisser vos factures. » (sert aussi de méta-description : **à relire**). Puis la barre des catégories, l'article à la une, les 12 cartes et la pagination.
- **/blog, pages 2 à 9** : fil d'Ariane « Accueil › Blog › Page N », mention « Page N sur 9 » sous le chapeau, pas d'article à la une.
- **Catégories** : fil d'Ariane « Accueil › Blog › Chauffage » (sur les pages suivantes, Chauffage devient un lien, puis « Page N »). h1 = libellé, chapeau = description. Pas d'article à la une.
- **En-tête** sur fond crème, liste sur fond blanc. Conteneur `max-w-site`, gouttières de la charte.
- **Barre des catégories** : pilules (`rounded-pilule`), 44px de haut, libellé et nombre (« Chauffage 58 », le nombre étant lu « 58 articles »). Catégorie en cours : fond plein `nuit-900`, texte blanc. Sous 768px, la barre défile dans son cadre ; **à partir de 768px, elle passe à la ligne** (les sept liens font 1 279px : ils ne tiennent pas sur une ligne, même dans les 1 250px du site).
- **Article à la une** : le plus récent d'importance 5, aujourd'hui `installer-des-panneaux-solaires-est-il-toujours-rentable-…`. Carte pleine largeur, image au-dessus sous 768px, à gauche à partir de 768px. Entièrement cliquable, avec le même principe que les petites cartes. Titre en h2 (les cartes de la grille aussi).
- **Grille** : 1, 2 (768px), 3 (992px) colonnes, `CarteArticle.astro` inchangé (titres en h2).
- **Pagination** (`<nav aria-label="Pagination">`) : liens de 44 × 44px au moins. Page en cours : texte sur fond bleu nuit, `aria-current="page"`, **pas un lien**. Les numéros affichés sont la première page, la dernière, la page en cours et ses voisines, avec des points de suspension pour les trous :
  - à partir de 480px : « ← Précédent 1 … 4 [5] 6 … 9 Suivant → » ;
  - sur téléphone : « ← 1 … [5] … 9 → ». « Précédent » et « Suivant » sont réduits à leur flèche, le mot restant lu par les lecteurs d'écran. Sinon la barre ne tient pas dans 335px avec des cibles de 44px.
  - Pas de page précédente ou suivante : case vide de même taille, pour garder les numéros centrés.
  - **Une seule page : pas de pagination du tout** (vérifié sur Eau chaude, Mobilité électrique, Production d'énergie et Conseils).

### 4. SEO

| Page | title | robots | canonique | prev / next | BreadcrumbList |
|---|---|---|---|---|---|
| /blog | Guides et conseils en rénovation énergétique \| Akelia | index, follow | /blog | next | non |
| /blog/page/2 | Guides et conseils en rénovation énergétique — page 2 \| Akelia | **noindex, follow** | /blog/page/2 | prev + next | non |
| /blog/chauffage | Chauffage \| Guides Akelia | index, follow | /blog/chauffage | next | Accueil › Blog › Chauffage |
| /blog/chauffage/page/3 | Chauffage — page 3 \| Guides Akelia | **noindex, follow** | elle-même | prev + next | idem |
| /blog/eau-chaude | Eau chaude sanitaire \| Guides Akelia | index, follow | elle-même | aucun | Accueil › Blog › Eau chaude sanitaire |
| article | (inchangé) | index, follow | (inchangé) | — | **Accueil › Blog › catégorie › titre de l'article** (nouveau) |

- Méta-description des catégories = leur description (vérifiée dans le HTML).
- Pas de CollectionPage ni d'ItemList.
- Position de « — page N » : question 279.

### 5. Liens vers le blog

- En-tête (« Blog et conseils »), pied de page (« Blog ») et accueil (« Tous les articles ») pointaient déjà vers `/blog` : rien à changer.
- **Aucune adresse de catégorie technique** (`systeme-de-chauffage`, `voiture-electrique`, `chauffe-eau`, `autre`…) dans les liens des 127 pages compilées (recherche faite).
- Ajout : dans chaque article, la catégorie du fil d'Ariane est désormais un lien vers sa page (101 nouveaux liens internes vers les catégories).

### 6. Liens morts corrigés dans les articles

- `pompe-a-chaleur-et-chauffe-eau-quelles-sont-les-meilleurs-solutions-pour-la-production-deau-chaude.md` : `/installation-dun-chauffe-eau-thermodynamique` → `/post/chauffe-eau-electrique-vs-thermodynamique-quel-choix-pour-votre-maison`. ⚠️ Le ticket nommait le fichier `…-pour-votre-logement.md`, qui n'existe pas. Le vrai nom finit par `…-pour-la-production-deau-chaude.md` ; c'est le seul fichier qui contenait ce lien.
- `quelles-sont-les-regions-adaptees-aux-pompes-a-chaleur.md` : `/solutions/climatisation-reversible-pac-air-air` → `/post/pompe-a-chaleur-air-air-vs-air-eau-guide-complet-pour-faire-le-bon-choix`. **À rebasculer vers la page solution quand elle existera** (question 277).
- Les deux articles cibles existent et sont publiés.

### 7. Vérification

**Compilation** : `npm run build`, sans erreur ni avertissement, **127 pages** :

| Pages | Nombre |
|---|---|
| Articles (/post/…) | 101 |
| /blog et /blog/page/2 à /9 | 9 |
| Pages 1 des catégories | 6 |
| Pages suivantes des catégories (Chauffage 2 à 5, Rénovation énergétique 2) | **5** (et non 9 : question 278) |
| Pages du site : /, /aides-renovation, /devis, /mentions-legales, /services, /test-charte | 6 |
| **Total** | **127** |

**Mesures dans le navigateur** (Chromium, version de production), à 375, 768 et 1440px, sur /blog, /blog/page/5, /blog/chauffage, /blog/chauffage/page/3 et /blog/eau-chaude :
- **Débordement horizontal : 0px** partout.
- ⚠️ **Défaut trouvé et corrigé pendant la vérification** : la page débordait de **867px à 375px** (474px à 768px). Les textes « sr-only » (« articles ») de la barre sont en position absolue ; le cadre défilant n'étant pas positionné, ils en sortaient. Corrigé par `relative` sur le cadre (commentaire en place).
- **Barre** : à 375px, cadre de 375px pour 1 279px de contenu, elle défile ; à 768 et 1440px, passage à la ligne. Liens de 44px. Catégorie en cours sur fond `rgb(29, 43, 54)` (nuit-900), `aria-current="page"` en page 1, `"true"` au-delà (question 280).
- **Grille** : 1 colonne à 375px, 2 à 768px, 3 à 1440px. Cartes par page : 12, sauf /blog/page/9 (5) et /blog/eau-chaude (2).
- **Article à la une** : seulement sur la page 1 de /blog ; image au-dessus à 375px, à gauche à 768 et 1440px.
- **Pagination**, page en cours entre crochets :
  - à 375px : « ← [1] 9 → », « ← 1 [5] 9 → » (avec « … » visuels) ;
  - à 768px et plus : « Précédent 1 4 [5] 6 9 Suivant ».

  Aucun élément sous 44px. La page en cours n'est jamais un lien. **Absente** sur /blog/eau-chaude.
- **Parcours par « Suivant »**, en cliquant jusqu'à la dernière page de chaque liste :
  - **/blog/chauffage** : 5 pages, **58 cartes, 58 uniques, 0 doublon**. Toutes les cartes de la page 5 portent bien « Chauffage » ;
  - **/blog** : 9 pages, **101 cartes, 101 uniques, 0 doublon** (plus l'article à la une en page 1, présent aussi en page 2, question 281) ;
  - Rénovation énergétique 21 (2 pages), Conseils 11, Production d'énergie 6, Mobilité électrique 3, Eau chaude 2 : 0 doublon ;
  - **la réunion des six catégories est identique aux 101 articles de /blog**.
- **Clavier sur /blog**, Tab depuis le h1, à 375 et 1440px : **barre ×7 → article à la une ×1 → cartes ×12 (un arrêt par carte) → pagination** (2 arrêts à 375px, 3 à 1440px) → pied de page. **Contour de 2px bleu nuit à chaque arrêt**, sur la carte entière pour les cartes. À 375px, le cadre de la barre défile tout seul jusqu'au lien qui reçoit le focus (862px pour « Mobilité électrique »).
- **Liens morts** : 12 945 liens internes (et ancres) vérifiés sur les 127 pages. **0 lien mort**, hors pages encore absentes : `/solutions/…` (21 adresses du menu), `/qui-sommes-nous`, `/entreprise`, `/politique-confidentialite`.
- Captures (`captures/blog-listes/`) : `<page>-<largeur>.png` et `<page>-<largeur>-entiere.png` pour les 5 pages aux 3 largeurs ; `barre-focus-375.png`.

## Blog : article à la une retiré de la liste de /blog (17 octobre 2026)

Question 281 réglée ; questions 277, 279 et 280 closes sans modification.

- **Problème** : l'article à la une s'affichait en grande carte en haut de la page 1 de /blog, puis réapparaissait dans la grille de la page 2, à sa place chronologique.
- **Correction** (`src/utils/blog.ts`, `pagesDeListe()`) : pour la liste générale (sans catégorie), l'article renvoyé par `articleALaUne()` est retiré de la liste passée à `paginate()`. Un commentaire explique pourquoi. Les pages de catégorie ne changent pas : l'article y garde sa place chronologique.
- `src/pages/blog/[...page].astro` : la précaution précédente (retirer l'article de la grille de la page 1 s'il s'y trouvait) devient inutile et est supprimée ; la grille affiche `page.data` tel quel.
- La barre des catégories affiche toujours « Tous les articles 101 » : c'est le nombre d'articles du blog, l'article à la une compris.

**Vérification** :
- `npm run build` : sans erreur ni avertissement, **127 pages** (inchangé). /blog : **9 pages** (8 × 12 + 4) ; `/blog/page/9` compte **4 cartes**.
- Parcours de /blog en cliquant « Suivant » jusqu'au bout : **100 cartes, 100 uniques, 0 doublon**. L'article à la une (`installer-des-panneaux-solaires-est-il-toujours-rentable-…`) n'apparaît dans **aucune** grille de /blog.
- Catégories inchangées : Chauffage 58 (5 pages), Rénovation énergétique 21 (2 pages), Conseils 11, Production d'énergie 6, Mobilité électrique 3, Eau chaude 2. Aucun doublon. L'article à la une figure toujours dans **Production d'énergie**, sa catégorie. La réunion des six catégories compte 101 articles, soit les 100 de la liste de /blog plus l'article à la une.


## /aides-renovation : création de la page (19 octobre 2026)

Question 241 réglée. **Questions ouvertes : n° 282 à 291** (« Questions en attente de réponse »). ⚠️ La question 282 est à trancher avant la mise en ligne : le texte fourni contredit sur plusieurs points les données vérifiées du simulateur, et la page affiche « Montants vérifiés le 19 octobre 2026 » sans qu'aucune vérification sur source officielle ait été faite ce jour-là.

### 1. Déroulé
- **Texte absent du ticket** : le ticket annonçait le texte en fin de message, mais il n'y figurait pas. Question posée ; le texte a été collé ensuite et repris **mot pour mot**. Il s'arrête avant le « Comment en bénéficier ? » des aides locales (question 283).
- L'ancien fichier (40 caractères, en-tête jamais fermé) est remplacé entièrement.

### 2. Fichiers
| Fichier | Changement |
|---|---|
| `src/pages/aides-renovation.astro` | Page réécrite (7 zones, voir § 3). |
| `src/components/Sommaire.astro` | **Nouveau.** Sommaire sorti de `post/[slug].astro` : forme `colonne` (collante, 992px et plus, avec un emplacement pour l'appel à l'action) et forme `replie` (`<details>`, sous 992px), pastille de couleur en option, script de suivi de la lecture. Le script suit les titres visés par les liens, où qu'ils soient dans la page, au lieu des seuls h2 du corps d'article. |
| `src/pages/post/[slug].astro` | Utilise `Sommaire.astro` ; plus de sommaire ni de script en double. Rendu inchangé (vérifié, § 5). |
| `src/components/Simulateur.astro` | **Nouveau.** Le simulateur seul : message sans JavaScript, `SimulateurQuestions.astro` et démarrage des scripts. |
| `src/components/SimulateurAides.astro` | Section de l'accueil : utilise `Simulateur.astro`. Rendu inchangé. |
| `src/components/aides/Icone.astro`, `Encadre.astro`, `Vignettes.astro`, `Etapes.astro` | **Nouveaux.** Ce sont, dans l'ordre : les pictogrammes au trait, les encadrés « À noter », « Attention », « Vigilance » et « L'avantage », la grille de vignettes de travaux et les étapes numérotées (style /devis). |
| `src/utils/blog.ts` | **Nouveau : `articlesPertinents(publies, motsCles, nombre, exclure)`** (§ 4). |
| `src/utils/texte.ts` | Nouveaux : `euros()` (« 11 000 € ») et `pourcent()` (« 5,5 % »). |
| `src/data/aides.ts` | Nouvelle partie « CHIFFRES MIS EN AVANT SUR LA PAGE /aides-renovation » (ci-dessous). |
| `src/styles/global.css` | 4 couleurs des profils MaPrimeRénov' ; classe `ancre-sommaire` (décalage des ancres sous l'en-tête, hors articles). |

**Ajouts dans `src/data/aides.ts`**, tous commentés :
- `dateVerificationPage = '2026-10-19'` : affichée en bas de page, « Montants vérifiés le 19 octobre 2026. » ;
- `tauxTva` : `reduit` 5,5 et `intermediaire` 10. **Le 10 % est un ajout** : il n'existait pas dans le fichier ;
- `mprGesteMax` : **lu** dans l'aide `maprimerenov-geste`, qui vaut 11 000 € (rien d'ajouté) ;
- `mprAmpleurTauxMax = 80` : **ajout**. Le taux n'existait qu'en commentaire ;
- `ceeMontantMisEnAvant = 7500` : **ajout**, repris du texte, **NON CONFIRMÉ** (question 282). Le simulateur, lui, n'affiche toujours aucun montant CEE ;
- `ecoPtzMax` : **lu** dans l'aide `eco-ptz`, qui vaut 50 000 € (rien d'ajouté) ;
- `plafondsEcoPtz` : les 6 plafonds, avec leurs libellés du texte. **Ajout** : la ligne « Assainissement non collectif, 10 000 € » n'est pas dans le barème Anah (question 282).

### 3. La page, de haut en bas
1. **En-tête** : fil d'Ariane, h1, les deux paragraphes. L'illustration `aides-entete.png` se place à droite à partir de 768px, au-dessus en dessous ; elle est absente pour l'instant, donc une seule colonne sans emplacement vide. Dessous, le **bandeau des 4 chiffres clés**, lus dans `aides.ts` : 5,5 % · jusqu'à 11 000 € · plus de 7 500 € · jusqu'à 50 000 €. Il compte 2 colonnes sur téléphone et 4 à partir de 768px.
2. **Simulateur** sur fond crème, titre « Estimez vos aides en trois questions » (`Simulateur.astro`, le même que l'accueil).
3. **Ce qu'il faut retenir** : l'encart vert du blog, en plus large, sur deux colonnes à partir de 768px. La **mise en garde** est détachée dessous : fond alerte-50, filet rouge de 2px, icône. Le sommaire replié (sous 992px) vient juste après.
4. **Ce qui se cumule avec quoi** : une carte par aide (1, 2 puis 3 colonnes), avec une légende des couleurs. Les pastilles (fond pâle, point foncé, nom écrit) sont décoratives : la phrase du ticket est écrite dessous. Le **Parcours Accompagné** se détache : fond orange pâle, filet orange en tirets, étiquette « Exception », pastille CEE barrée.
5. **Frise des démarches** : 7 étapes, verticale sous 992px, horizontale au-delà. L'étape 4 a une pastille orange pleine et l'étiquette « Point de non-retour ». « Ne signez aucun devis avant cette étape. » s'affiche en bandeau d'alerte : entre les étapes 4 et 5 en vertical ; en horizontal, sous la frise, à cheval sur les colonnes 4 et 5, avec un trait rouge en tirets à la frontière. Les étapes 6 et 7 portent « Délai : plusieurs semaines à plusieurs mois ».
6. **Les cinq aides**, dans l'ordre du texte. À partir de 992px, le sommaire collant est à gauche : 5 entrées avec une pastille de couleur (pas d'émoji), puis « Contacter votre artisan » (vers /devis) et « Akelia, le collectif d'artisans locaux ». Chaque aide comporte :
   - un bandeau de titre (fond pâle et filet de sa couleur, h2) ;
   - les sous-parties en h3 ;
   - les travaux en vignettes : 2 colonnes, puis 3 à partir de 768px ;
   - « Comment en bénéficier » en étapes numérotées, style /devis ;
   - les encadrés sortis du texte.
   
   Les cas particuliers :
   - **TVA** : encadré des climatisations réversibles, avec les critères en liste et la conséquence « 20 % sur le matériel » / « 10 % sur la pose » en gros, sur fond d'alerte ;
   - **MaPrimeRénov'** : les deux parcours en deux blocs, et les 4 profils en pastilles colorées ;
   - **Éco-PTZ** : plafonds en tableau léger, lus dans `aides.ts`.
   
   La phrase sur Akelia termine la section des aides locales.
7. **À lire aussi** : 4 cartes (`CarteArticle.astro`) ; puis l'appel à l'action de fin d'article ; puis « Montants vérifiés le 19 octobre 2026. ».

**Couleurs des sections** : prises dans la charte, avec la teinte foncée pour les pastilles, filets et icônes, et la teinte pâle pour les fonds.
- TVA : brume ;
- Éco-PTZ : lichen ;
- CEE : argile ;
- MaPrimeRénov' : vert ;
- aides locales : bruyère.

**SEO** :
- title « Aides rénovation énergétique 2026 : le guide complet | Akelia » ;
- description propre à la page (le taux de TVA y est lu dans `aides.ts`) ;
- canonique `https://akelia.fr/aides-renovation` ;
- `index, follow` ;
- fil d'Ariane « Accueil › Aides rénovation » et JSON-LD BreadcrumbList ;
- pas de FAQPage.

### 4. `articlesPertinents()` (src/utils/blog.ts)
Elle est écrite pour resservir telle quelle sur les 21 pages /solutions/…, sans aucun champ à remplir dans les articles.
- **Recherche** : chaque mot-clé est cherché dans le titre (6 points), la description (2) et le chapeau (1). Les accents et les majuscules sont ignorés, et le mot-clé doit commencer un mot.
- **Comptage** : la présence compte, pas le nombre d'occurrences. Un long chapeau qui répète un mot ne l'emporte donc pas sur un titre qui le contient.
- **Tri** : score décroissant, puis importance, puis date (le plus récent d'abord). Un article sans aucun point est exclu.

Mots-clés de la page : MaPrimeRénov, CEE, certificats d'économies d'énergie, prime énergie, éco-prêt, éco-PTZ, prêt à taux zéro, Anah, aides financières.

Résultat : **les 4 articles attendus, en tête**. Dans l'ordre : CEE (22 points), Éco-PTZ (19), contrôles de l'Anah (9), MaPrimeRénov' (9). Le suivant n'a que 6 points. ℹ️ Le slug du 4e article cité dans le ticket est tronqué : le vrai est `tout-savoir-sur-les-controles-de-lanah-apres-travaux-de-renovation-energetique`.

### 5. Vérification
- **`npm run build`** : sans erreur ni avertissement, 127 pages. `dist/aides-renovation/index.html` fait 140 Ko : la page n'est plus un fichier cassé.
- **375, 768, 1024 et 1440px** (Chromium) :
  - **débordement horizontal 0px** aux 4 largeurs ;
  - **aucune cible cliquable sous 44px** ;
  - texte courant à 18px ou plus. Exceptions, toutes de navigation ou décoratives : question 291.
  
  Captures dans `captures/aides-renovation/` : `aides-<largeur>.png` (page entière) et `<zone>-<largeur>.png`.
- **Simulateur, même saisie sur l'accueil et sur la page** : propriétaire occupant, 31000, chauffage et isolation. **Résultats identiques au caractère près** (comparaison du texte : `true`). Captures : `simulateur-accueil.png` et `simulateur-aides.png`. Le résultat obtenu :
  - MaPrimeRénov' par geste : Oui, jusqu'à 11 000 € ;
  - rénovation d'ampleur : Sous conditions, jusqu'à 32 000 € ;
  - CEE : Oui ;
  - Éco-PTZ : Oui, jusqu'à 50 000 € ;
  - TVA à 5,5 % : Oui ;
  - Occitanie et Haute-Garonne : À vérifier.
- **Sommaire** : à 1440, 1024 et 375px, chaque lien amène son titre **16px sous l'en-tête collant**, et l'entrée cliquée devient l'entrée active (`aria-current`). Le bloc collant tient à 146px du haut à 1440px et à 97px à 1024px. Le même test sur un article (MaPrimeRénov', 7 entrées) donne le même résultat : l'extraction du composant n'a rien cassé.
- **Montants du bandeau** : `grep` sur la page ne trouve **aucune** occurrence de `11000`, `7500`, `50000` ni `50 000`. Le bandeau n'utilise que `pourcent(tauxTva.reduit)`, `euros(mprGesteMax)`, `euros(ceeMontantMisEnAvant)` et `euros(ecoPtzMax)`, et les plafonds de l'Éco-PTZ que `plafondsEcoPtz`. Les seules occurrences restantes de « 11 000 », « 7 500 », « 5,5 » et « 80 % » sont dans les **paragraphes rédigés**, comme le prévoit le ticket.
- **Contrastes (WCAG)** :
  - profils MaPrimeRénov' : Bleu #1f4e9c, texte blanc **7,99:1** ; Jaune #f5c518, texte foncé **10,02:1** (en blanc, il ne ferait que 1,63:1) ; Violet #6a3d9a, texte blanc **7,64:1** ; Rose #f6b8cf, texte foncé **9,86:1** ;
  - couleurs des sections, teinte foncée sur blanc et texte sur teinte pâle : brume 6,27:1 et 11,65:1 ; lichen 6,13:1 et 12,76:1 ; argile 5,80:1 et 12,19:1 ; vert 6,34:1 et 14,41:1 ; bruyère 6,21:1 et 11,88:1. Les teintes foncées ne portent jamais de texte, seulement des pastilles, filets et icônes (3:1 exigé) ;
  - encadrés et alertes : texte sur alerte-50 13,58:1 ; texte sur action-50 14,56:1 ; texte sur orange (« Point de non-retour ») 6,87:1, en gras.

## /qui-sommes-nous : création de la page (19 octobre 2026)

La page n'existait pas : liée depuis le menu, le tiroir mobile et le pied de page de toutes les pages, elle répondait 404. Elle est créée à l'adresse de l'ancien site. Le texte fourni est repris **mot pour mot**. **Questions ouvertes : n° 292 à 297.** ⚠️ Les quatre cartes « domaines d'expertise » mènent à des 404 (question 292).

### 1. Fichiers
| Fichier | Changement |
|---|---|
| `src/pages/qui-sommes-nous.astro` | **Nouveau.** 6 sections (§ 2). |
| `src/data/collectif.ts` | **Nouveau.** `noteMinimale = 4.5` (seuil, pas une moyenne), `distanceMaxKm = 30`, `noteEnTexte` (« 4,5 »). |
| `src/components/NoteMinimale.astro` | **Nouveau.** Étoiles orange, note en très grand et « note minimale exigée » (obligatoire), sortis de /devis. |
| `src/pages/devis.astro` | Utilise `NoteMinimale.astro`. La phrase « notées 4,5 ou plus » lit `noteEnTexte`. La mention passe de 16 à 18px (question 297). |
| `src/data/menu.ts` | **Nouveau.** Données du menu (`menuSolutions`, `liensDirects`, `liensSecondaires`) sorties de `Header.astro`, pour que la page lise les adresses des rubriques au lieu de les recopier. Le menu est inchangé. |
| `src/components/Header.astro` | Importe ses données depuis `src/data/menu.ts`. |
| `src/components/aides/Icone.astro` | 4 icônes de plus : `technicien`, `repere`, `prix`, `valorisation`. |
| `src/components/Footer.astro` | Commentaire : /qui-sommes-nous n'est plus une page manquante. |

### 2. La page
1. **En-tête** (blanc) :
   - fil d'Ariane, h1, accroche en `text-chapeau` (la note y est lue dans `collectif.ts`) ;
   - bouton orange « Obtenir mon devis » (/devis) et lien souligné « Découvrir les artisans de mon secteur » (/devis, provisoire, question 293) ;
   - `collectif.png` à droite à partir de 768px, sous le texte en dessous, recadré sur sa zone dessinée ; rien s'il manque.
2. **Le concept** (crème) :
   - surtitre, h2, colonne plafonnée à 70 caractères, texte à 20px à partir de 768px ;
   - les deux phrases-clés en gras bleu nuit, avec un surligneur orange pâle sur le bas des lettres : pas d'encadré, pas de soulignement qu'on prendrait pour un lien. Texte sur le surlignage : 10,07:1.
3. **Les quatre engagements** (blanc) : grille de 1 colonne, puis 2 à partir de 768px, avec de grands écarts (56px, puis 80px). Ni cadre ni fond de carte. Chaque engagement a une icône au trait dans une pastille vert pâle, un h3 et un paragraphe. Les 30 km sont lus dans `collectif.ts`.
4. **L'exigence du réseau** : bloc bleu nuit arrondi. À gauche, le h2, l'introduction et les trois critères (intitulé en gras, coche orange) ; à droite à partir de 992px, `NoteMinimale` dans un cadre fin.
5. **Les domaines d'expertise** (crème) : 4 cartes de 1, 2 puis 4 colonnes, entièrement cliquables (même technique que `CarteArticle.astro`). Chaque carte montre une icône, le titre (le lien), la phrase, le détail entre parenthèses et « Voir les solutions → ». Adresses lues dans `src/data/menu.ts` (question 292).
6. **Bandeau de conclusion** : bleu nuit, pleine largeur, h2, les deux phrases et le bouton orange « Trouver mon artisan local » (/devis, provisoire, question 293).

**SEO** :
- title « Collectif d'artisans RGE en rénovation énergétique | Akelia » ;
- description propre, qui lit 30 km et 4,5 dans `collectif.ts` ;
- canonique `https://akelia.fr/qui-sommes-nous` ;
- `index, follow` ;
- fil d'Ariane « Accueil › Qui sommes-nous » et JSON-LD BreadcrumbList ;
- pas de sommaire.

### 3. Vérification
- **`npm run build`** : sans erreur ni avertissement. `/qui-sommes-nous/index.html` est généré.
- **Depuis le menu et le pied de page** (accueil, 1440px), un clic sur « Qui sommes-nous » mène à `/qui-sommes-nous` : **HTTP 200**, avec le bon h1.
- **375, 768, 1024 et 1440px** (Chromium) :
  - **débordement horizontal 0px** ;
  - toutes les cibles font 44px ou plus. Les titres des 4 cartes d'expertise ne mesurent que 28px de haut, mais leur zone cliquable couvre toute la carte (253 à 320px de haut), vérifié aux coins et au centre de chaque carte ;
  - texte courant à 18px ou plus. Seuls restent plus petits le fil d'Ariane (16px), le surtitre (13,6px) et les libellés du méga-menu (14,4px), tous existants.
  
  Captures : `captures/qui-sommes-nous/page-<largeur>.png`.
- **Contrastes** :
  - bloc bleu nuit et bandeau de fin : texte blanc sur nuit-900 **14,47:1** ; étoiles et coches orange sur nuit-900 **6,08:1** (éléments non textuels, 3:1 exigé) ;
  - bouton orange (texte foncé) **6,87:1** ;
  - texte secondaire sur blanc 7,11:1 ;
  - icônes vert-600 sur vert-50 5,59:1.
- **Liens d'expertise** : les quatre répondent **404** (aucune page `/solutions/…` n'existe, question 292). Les liens vers `/` et `/devis` répondent 200.
- **Note 4,5 et 30 km**, source unique `src/data/collectif.ts` :
  - `grep` sur `src/` (hors articles) : plus aucune occurrence de « 4,5 » ni de « 30 km » dans le texte affiché. Il ne reste que des commentaires et des rapports de contraste (« 14,5:1 ») ;
  - lecteurs de ces valeurs : `NoteMinimale.astro` (/devis et /qui-sommes-nous), la phrase sous la note sur /devis, l'accroche, l'engagement « réactivité locale », le critère « Preuve sociale » et la description SEO ;
  - pages construites : `text-display leading-none">4,5` sur /devis comme sur /qui-sommes-nous, et une mention « note minimale exigée » sur chacune.

## /qui-sommes-nous : en-tête, rythme et entrée artisans (19 octobre 2026)

**Questions ouvertes : n° 298 à 303** (nouvelles) ; 293, 294, 295 et 296 restent ouvertes ; la 292 est contournée provisoirement.

### 1. En-tête refait
- **Bandeau crème pleine largeur** (d'un bord à l'autre de l'écran) ; le texte reste dans `max-w-site`.
- **h1 en `text-display` à partir de 992px** (`text-h1` en dessous). Les deux appels à l'action restent sous le texte, avant l'image.
- **`collectif.png` sous le texte**, sur la largeur de la colonne (1200px au plus). Il déborde légèrement, comme sur l'accueil : 120 % de la colonne sous 768px, 106 % au-delà. La section porte `overflow-x-clip` : pas de défilement horizontal. La petite vignette de droite est supprimée.
- **Alignement : les deux ont été essayés.** Captures `captures/qui-sommes-nous/entete-gauche-{375,1024,1440}.png` et `entete-centre-{375,1024,1440}.png`. **Retenu : centré à partir de 768px, aligné à gauche en dessous.** Sur ordinateur, le texte centré s'équilibre au-dessus du grand bandeau symétrique, comme la section Collectif de l'accueil. Sur téléphone, six lignes de chapeau centrées se lisent mal. Le réglage est la constante `ALIGNEMENT_ENTETE` de la page.
- **`sizes` recalculé** : l'image s'affiche trois fois plus large qu'avant. Valeur : `(min-width: 1280px) 1272px, (min-width: 768px) calc((100vw - 2.5rem) * 1.06), calc((100vw - 2.5rem) * 1.2)`. Variantes générées : 640, 960, 1280, 1600 et 1800px (1800 = largeur du fichier, rien au-delà). La zone dessinée couvre toute la largeur du fichier : le recadrage n'agrandit pas l'image horizontalement.
- **Variante réellement chargée** (largeur mesurée du fichier téléchargé, Chromium) :

| Écran | Variante chargée | Largeur affichée | Pixels d'image par pixel CSS |
|---|---|---|---|
| 1440px, ×1 | 1280px | 1272px | 1,01 : **nette** |
| 1440px, ×2 | 1800px (la plus grande) | 1272px (2544px écran) | 1,42 : limite du fichier source (question 298) |
| 1024px, ×1 | 1280px | 1043px | 1,23 |
| 375px, ×3 | 1280px | 402px (1206px écran) | 3,18 |

### 2. Bandeau de chiffres (sous l'en-tête, fond blanc)
Trois chiffres lus dans `src/data/collectif.ts` :
- « 4,5 / 5 », note minimale exigée ;
- « 30 km », votre artisan au plus loin ;
- « 1 seul », artisan par métier et par secteur.

Mise en forme : nombre très gros, libellé dessous, filet orange à gauche. 1 colonne sous 480px, 3 au-delà.

### 3. Rythme
- **Fonds, de haut en bas** : crème (en-tête), blanc (chiffres), crème (concept), blanc (engagements), **bleu nuit** (exigence, devenue une section pleine largeur), crème (domaines), crème foncé (artisans), **bleu nuit** (conclusion). La suite demandée « blanc / crème / blanc / bleu nuit / crème / bleu nuit » s'applique à partir du bandeau de chiffres.
- **Engagements numérotés 01 à 04** : en très gros (80 puis 96px), orange à 25 %, derrière le titre. Les numéros sont décoratifs (`aria-hidden`), et la liste est un `<ol>`.
- **Concept** : 2rem entre les paragraphes (`space-y-8`).
- **Espacement vertical des sections : +25 %** (4,5rem devient 5,625rem, 7,5rem devient 9,375rem).

### 4. Entrée pour les artisans
- **Bandeau « Vous êtes artisan ? »**, entre les domaines et la conclusion. Fond crème foncé (texte 13,3:1) et bouton **bleu nuit** (texte blanc 14,47:1) au lieu d'orange : on voit tout de suite qu'il ne s'adresse pas au même lecteur. Texte corrigé (question 302) : « Nous ne retenons qu’une seule entreprise par métier et par secteur. Si la vôtre est certifiée RGE, assurée en décennale, notée 4,5/5 ou plus sur Google et qu’elle pose avec ses propres équipes, présentez-la : nous étudions chaque candidature. » Le nombre et la note sont lus dans `collectif.ts`.
- **Nouvelle page `/rejoindre-le-collectif`** (`src/pages/rejoindre-le-collectif.astro`), sur la disposition de /devis :
  - fil d'Ariane « Accueil › Qui sommes-nous › Rejoindre le collectif » et BreadcrumbList ;
  - h1 « Rejoindre le collectif Akelia », puis un chapeau : « Vous êtes artisan de la rénovation énergétique ? Présentez votre entreprise : nous revenons vers vous pour étudier votre candidature. » ;
  - à droite (1024px et plus), les **critères d'entrée** dans un bloc bleu nuit (intro et 3 critères lus dans `collectif.ts`, les mêmes que /qui-sommes-nous, mot pour mot). Dessous, **« Ce que le collectif vous apporte »**, trois points tirés du texte existant, sans promesse de volume :
    - « Des achats mutualisés : la force du réseau vous permet d’acheter vos matériaux au meilleur prix. » ;
    - « La gestion des aides de l’État : le collectif met en commun ses outils pour monter les dossiers d’aides de vos clients (MaPrimeRénov’, CEE…). » ;
    - « Des chantiers, sans commerciaux : les demandes de devis des particuliers de votre secteur vous arrivent directement, sans intermédiaire, et sans concurrence d’une autre entreprise du collectif sur votre métier. ».
- **Formulaire** : même mécanique Web3Forms que /devis. Sans JavaScript, le navigateur vérifie les champs puis poste le formulaire. Avec JavaScript :
  - messages d'erreur en toutes lettres sous chaque champ ;
  - envoi en arrière-plan ;
  - la confirmation remplace le formulaire.
  
  Champs : entreprise, contact, téléphone, code postal et métier (obligatoires) ; note Google (facultative, de 0 à 5, virgule acceptée) et message (facultatif). Sujet propre : « Candidature artisan Akelia : <métier>, <entreprise> (<code postal>) » ; expéditeur « Akelia Candidature artisan ». La mention sur les données est celle de /devis (question 301).
- **Pied de page** : le lien existant « Rejoindre le collectif » (colonne Navigation) pointait vers `/entreprise` (404). Il pointe désormais vers `/rejoindre-le-collectif` (question 299).
- `src/data/web3forms.ts` : commentaire mis à jour (trois formulaires).

### 5. Liens d'expertise provisoires
Les quatre cartes pointent vers les catégories du blog. Les adresses sont données par `urlCategorie()`, jamais écrites en dur :
- Isoler votre enveloppe : `/blog/renovation-energetique` ;
- Chauffer & Climatiser : `/blog/chauffage` ;
- Devenir Autonome : `/blog/production-energie` ;
- Rénover Globalement : `/blog/renovation-energetique`.

Le libellé devient « Voir les guides → ». **À REBASCULER vers les pages /solutions/… quand elles existeront** (même point que la question 277). Les adresses définitives sont dans `src/data/menu.ts` : première solution de chaque rubrique, et « Rénovation globale ».

### 6. Propositions de texte : toutes retenues
| Où | Ancien texte | Nouveau texte |
|---|---|---|
| Accroche | « Akelia est le collectif qui redonne le pouvoir aux véritables entreprises artisanales. Fini les intermédiaires et les plateformes déshumanisées. Passez en direct avec un expert de votre région, noté 4,5/5 minimum, pour une rénovation performante et un investissement rentable. » | « Akelia est le collectif qui redonne le pouvoir aux vraies entreprises artisanales. Pas d’intermédiaire, pas de plateforme : vous parlez directement à un artisan de votre région, noté 4,5/5 minimum. » |
| Titre section 3 | « Ce que notre collectif change pour votre maison » | « Ce que ça change, concrètement » |
| Titre section 5 | « Une maîtrise complète de votre performance énergétique » | « De l’isolation à l’autonomie » |
| 2e engagement | « Une réactivité locale (à moins de 30 km) » | « Votre artisan est à moins de 30 km » |

### 7. `src/data/collectif.ts`
Ajouts :
- `parMetierEtSecteur` : `nombre` 1 et ses formes « 1 seul », « un seul », « une seule », à changer ensemble ;
- `introCriteres` : la phrase « Nous ne gardons qu’un seul expert… », construite avec `parMetierEtSecteur` ;
- `criteresEntree` : les 3 critères, la note y est lue.

Ces données sont lues par /qui-sommes-nous (bandeau de chiffres, section exigence, bandeau artisans) et par /rejoindre-le-collectif (critères, description SEO).

### 8. Vérification
- **`npm run build`** : sans erreur ni avertissement. `/rejoindre-le-collectif/index.html` est générée.
- **Le bouton « Rejoindre le collectif »** de /qui-sommes-nous mène à `/rejoindre-le-collectif` : HTTP 200.
- **Liens internes depuis /qui-sommes-nous** :
  - **contenu de la page : 6 liens, 0 en erreur** ;
  - en-tête du site : 21 liens /solutions/… en 404, communs à tout le site (pages pas encore créées) ;
  - pied de page : 1 lien en 404, `/politique-confidentialite`, commun à tout le site.
- **375, 768, 1024 et 1440px**, sur les deux pages : **débordement horizontal 0px**. Texte courant à 18px ou plus. Restent plus petits le fil d'Ariane (16px), le surtitre (13,6px) et le méga-menu (14,4px), comme avant. Éléments de moins de 44px de haut, tous justifiés :
  - les titres des cartes d'expertise : leur zone cliquable couvre toute la carte ;
  - les étiquettes de champ : le champ dessous fait 56px, comme sur /devis ;
  - le lien « politique de confidentialité » : il est dans une phrase, et les liens en ligne sont exemptés (WCAG 2.5.8).
  
  Captures : `captures/qui-sommes-nous/page-<largeur>.png` et `captures/rejoindre-le-collectif/page-<largeur>.png`.
- **Formulaire de candidature** (Chromium, requête interceptée, **aucun envoi réel**) :
  - envoi à vide : 5 messages d'erreur, aucune requête, focus sur « Nom de l’entreprise » ;
  - envoi rempli : `POST https://api.web3forms.com/submit` avec `access_key` (08e77810…), `subject` = « Candidature artisan Akelia : Chauffagiste, Thermique Garonne SARL (31000) », `from_name` = « Akelia Candidature artisan », Entreprise, Contact, Téléphone, Code postal, Métier, Note Google = 4,8, Message ;
  - la confirmation s'affiche et le formulaire est masqué.
  
  Le sujet de /devis reste « Demande de devis Akelia : … » (champ caché : « Nouvelle demande de devis sur Akelia »).
- **« 4,5 », « 30 km », « un seul / une seule / 1 seul »** : `grep` sur `src/pages` et `src/components` ne les trouve plus dans aucun texte affiché, seulement dans des commentaires. La seule occurrence restante, la description SEO de /rejoindre-le-collectif, a été corrigée pour lire `parMetierEtSecteur.feminin`. Toutes les valeurs viennent de `src/data/collectif.ts` (`noteMinimale = 4.5`, `distanceMaxKm = 30`, `parMetierEtSecteur`).

## /rejoindre-le-collectif : la page de vente (19 octobre 2026)

La page minimale devient une page de vente destinée aux entreprises du bâtiment. Le texte fourni est repris **mot pour mot**, et les émojis sont remplacés par des icônes de la charte. Le formulaire est **inchangé** ; il passe en bas de page. **Questions ouvertes : n° 304 à 307.** Les 300 et 301 restent ouvertes, la 302 est en partie sans objet, la 303 est réglée pour cette page.

### 1. Fichiers
| Fichier | Changement |
|---|---|
| `src/pages/rejoindre-le-collectif.astro` | Page refaite (8 sections, § 2). Le formulaire et son script sont repris **à l'identique**, sans retouche. Le bloc bleu nuit des critères et le bloc « Ce que le collectif vous apporte » sont supprimés : le premier est développé en section 5, le second n'est pas dans le texte fourni. |
| `src/components/SchemaPartenaire.astro` | **Nouveau.** Schéma de fonctionnement en SVG (§ 3). |
| `src/data/collectif.ts` | `criteresEntree` et `introCriteres` ne servent plus qu'à /qui-sommes-nous (commentaire « ne pas fusionner »). Nouvelle fonction `majuscule()` (« un seul » → « Un seul »). Rien d'autre ne change : `noteMinimale` est toujours lu par /devis et par « L'élite de l'artisanat local ». |
| `src/pages/qui-sommes-nous.astro` | Bandeau « Vous êtes artisan ? » : nouveau texte, sans la note. « une seule » est toujours lu dans `collectif.ts`. |
| `src/components/FilAriane.astro` | Option `fond="sombre"` : liens blancs (14,47:1), séparateurs blancs à 75 % (décoratifs), contour de focus blanc. |
| `src/components/aides/Vignettes.astro` | Option `colonnes="1-2"` : 1 colonne sur téléphone, 2 à partir de 768px, nom du métier plus grand (20px, gras) et précision dessous (18px, texte secondaire). |
| `src/components/aides/Icone.astro` | 2 icônes de plus : `calendrier` et `plan`. |
| `src/styles/global.css` | **Nouvelle couleur `action-300` (#f7b455)** : orange clair réservé au texte sur fond bleu nuit, à 8,00:1 contre 6,08:1 pour l'orange principal. |

### 2. La page, de haut en bas
1. **En-tête bleu nuit**, pour qu'on distingue au premier coup d'œil une page B2B :
   - fil d'Ariane clair, h1 (`text-display` à partir de 992px) ;
   - **juste dessous, la phrase « Tout en restant 100 % maître de vos prix, de vos devis et de vos marges. »** en `text-chapeau`, semi-gras, orange clair `action-300` ;
   - l'introduction, puis les 3 arguments sur 3 colonnes à partir de 768px, chacun avec son icône orange clair : calendrier, étiquette de prix, repère ;
   - le bouton orange « Devenir partenaire », qui mène à `#candidature`.
2. **Schéma de fonctionnement** (blanc) : `SchemaPartenaire.astro`.
3. **Les règles du jeu ont changé** (crème) :
   - les 3 constats, numérotés 01 à 03 comme les engagements de /qui-sommes-nous (orange à 25 %, derrière le titre) ;
   - **la phrase de bascule sort des blocs** : pleine largeur, 24 à 36px, gras bleu nuit, sous un filet orange de 4px.
4. **Fonctionnement** (blanc) : le paragraphe, puis « Tout en garantissant » et 3 cartes à filet orange en haut (Zéro sous-traitance, Exclusivité territoriale, Liberté de fonctionnement).
5. **Pour qui ?** (crème) :
   - la phrase d'introduction ;
   - **Critères d'éligibilité** : les 4 du texte, chacun avec son icône, **aucune note Google**. Ils sont rangés dans la page (`criteresEligibilite`), pas dans `collectif.ts` : ils ne servent qu'ici ;
   - **Métiers éligibles** : les 5 métiers en vignettes (1, puis 2 colonnes), le métier en titre et la précision entre parenthèses dessous.
6. **Le parcours** (blanc) : 4 étapes dans le style de la Méthode de l'accueil. Pastille numérotée cerclée de la couleur de l'étape (bruyère, argile, lichen, brume), carte blanche à filet de la même couleur, ombre, icône. Verticale sous 992px, horizontale au-delà. **Aucun délai** : le texte n'en donne pas (question 304).
7. **FAQ** (crème) : 3 `<details>`, le premier ouvert, chevron de la charte. Le texte affiché et le JSON-LD `FAQPage` sont tirés **du même tableau** `faq` : ils ne peuvent pas diverger.
8. **Déposer votre candidature** (blanc) : `id="candidature"` avec le décalage sous l'en-tête collant (classe `ancre-sommaire`), titre, puis le formulaire inchangé dans une colonne de 48rem. Le fond blanc détache enfin le pied de page crème.

**« Un seul / une seule … par corps de métier »** (argument « Exclusivité de secteur », 2e réponse de la FAQ) : la forme écrite est lue dans `parMetierEtSecteur` (`collectif.ts`).

**SEO** :
- title « Devenir partenaire : artisans RGE en rénovation énergétique | Akelia » ;
- description tournée vers l'artisan ;
- canonique `https://akelia.fr/rejoindre-le-collectif`, `index, follow` ;
- fil d'Ariane et BreadcrumbList inchangés ;
- **JSON-LD FAQPage** pour les 3 questions. Pas de Product ni d'Offer.

### 3. Le schéma de fonctionnement (`SchemaPartenaire.astro`)
- **SVG dessiné à la main**, avec du vrai texte : il reste net à toutes les tailles. Chaque case est un `<g data-temps="1…4">`, prêt pour une animation future.
- **Temps 1 et 2 (Akelia)** : cases bleu nuit, texte blanc (14,47:1).
- **Temps 3 et 4 (l'artisan)** : nettement détachés, après un trait vertical en tirets et un écart double. Cases orange pâle à filet orange épais, texte foncé (14,56:1). La flèche qui franchit la séparation est orange.
- **Mention « Aucun intermédiaire entre vous et le client »** sous une accolade orange qui embrasse les temps 3 et 4.
- **Deux dessins** : horizontal à partir de 992px, vertical en dessous. Le vertical mesure 340 unités de large. À 375px il s'affiche sur 335px : texte courant 19 unités = **18,7px**, titres 23 unités = 22,7px.
- **Lecteurs d'écran** : dessins masqués (`aria-hidden`) et remplacés par une liste ordonnée `sr-only` qui reprend les quatre temps et la mention.
- Captures : `captures/rejoindre-le-collectif/schema-375.png` (×2) et `schema-1440.png`.

### 4. Vérification
- **`npm run build`** : sans erreur ni avertissement.
- **Formulaire** (Chromium, requête interceptée, **aucun envoi réel**) :
  - envoi à vide : 5 erreurs, aucune requête, focus sur « Nom de l’entreprise » ;
  - envoi rempli : `POST https://api.web3forms.com/submit`, **même sujet qu'avant** : « Candidature artisan Akelia : Chauffagiste, Thermique Garonne SARL (31000) ». Autres champs : `from_name` « Akelia Candidature artisan », Entreprise, Contact, Téléphone, Code postal, Métier, Note Google = 4,8, Message ;
  - la confirmation s'affiche et le formulaire est masqué.
- **Bouton « Devenir partenaire »** : il mène à `#candidature`. Le champ « Nom de l’entreprise » arrive **sous** l'en-tête collant :
  - à 375px : en-tête jusqu'à 73px, titre à 137px, champ de 310 à 366px ;
  - à 1440px : en-tête jusqu'à 122px, titre à 202px, champ de 381 à 437px.
- **375, 768, 1024 et 1440px** : **débordement horizontal 0px** sur /rejoindre-le-collectif et /qui-sommes-nous. Texte courant à 18px ou plus. Seuls restent plus petits le fil d'Ariane (16px), le surtitre (13,6px) et le méga-menu, comme sur tout le site. Les éléments sous 44px sont les étiquettes de champ (champs de 56px), le lien dans la mention sur les données (lien en ligne, exempté) et les titres des cartes de /qui-sommes-nous (carte entière cliquable).
- **Contrastes de l'en-tête bleu nuit** :
  - h1, introduction et arguments en blanc : 14,47:1 (arguments à 90 % : plus de 11:1) ;
  - **phrase orange en `action-300` : 8,00:1**. L'orange principal ne faisait que 6,08:1 : conforme AA, mais sous les 7:1 visés pour le texte ;
  - icônes `action-300` : 8,00:1 ;
  - bouton orange : texte foncé 6,87:1.
- **FAQ** :
  - au chargement, seule la première question est ouverte ;
  - au clavier (Entrée, Entrée, Espace sur chaque question), elle se referme et les deux autres s'ouvrent ;
  - JSON-LD `FAQPage` = texte affiché, **identique au caractère près** pour les 3 questions et les 3 réponses (comparaison faite dans la page) ;
  - types JSON-LD de la page : BreadcrumbList et FAQPage.
- **Recherches (`grep`)** :
  - « 4,5 » : plus aucune occurrence dans le texte des pages ni des composants (restent des commentaires et des rapports de contraste) ;
  - « un seul / une seule … par métier / corps de métier » : seulement dans deux commentaires ;
  - mentions de « note » dans le texte visible de /rejoindre-le-collectif : **une seule**, l'étiquette du champ facultatif « Note Google actuelle » du formulaire conservé (question 305).
- **Bandeau de /qui-sommes-nous** (page construite) : « Vous êtes artisan ? Nous ne retenons qu’une seule entreprise par métier et par secteur. Si la vôtre est certifiée RGE, assurée en décennale et qu’elle pose avec ses propres équipes, présentez-la : nous étudions chaque candidature. »

## /rejoindre-le-collectif : la page de vente, 2e version (19 octobre 2026)

Ticket révisé. Il complète la version précédente : illustration de l'en-tête, nouvelle section « En quoi c'est différent » avec tableau comparatif, fonctionnement réécrit, 4e question de FAQ (le prix), champ « Note Google » supprimé et fonds réordonnés. Le texte fourni est repris **mot pour mot**, et **aucun concurrent n'est nommé**.

**Questions** :
- 300, 303 et 307 : en grande partie réglées ;
- 305 : réglée ;
- 304 (délais du parcours) et 306 (« Créateur d'entreprise ») : toujours ouvertes ;
- 308 à 310 : nouvelles.

### 1. Ce qui change
| Où | Changement |
|---|---|
| En-tête (bleu nuit) | **`rejoindre-collectif.png`** à droite du texte à partir de 992px, sous le bouton en dessous (`order-last`). Les arguments et le bouton passent sous la grille, sur toute la largeur. Fichier absent : rien, une seule colonne (vérifié : aucune image hors celles du menu dans la page construite). `sizes` calculé sur la zone dessinée (≈ 520px à 1280px et plus, 44vw de 992 à 1279px, pleine largeur en dessous). |
| **3. En quoi c'est différent** (crème, nouvelle) | Surtitre « En quoi c’est différent », h2 « Ni une plateforme, ni une agence de leads, ni une franchise. », le tableau, puis la ligne « Vous restez une entreprise indépendante, avec un canal d’acquisition en plus. » en grand (24 à 36px, gras, filet orange). Détail au § 2. |
| 4. Règles du jeu | Fond blanc (au lieu de crème). |
| 5. Fonctionnement | Fond crème. Paragraphe remplacé par les **deux paragraphes réécrits** du texte (mutualisation ; aides). |
| 6. Pour qui ? | Fond blanc ; pastilles des icônes en vert pâle. |
| 7. Parcours | Fond crème. Toujours **aucun délai** (question 304). |
| 8. FAQ | Fond blanc, **4 questions** (« Combien coûte le partenariat ? » ajoutée en 2e position, comme dans le texte), cartes crème. JSON-LD FAQPage tiré du même tableau. |
| 9. Candidature | Fond **bleu nuit** : il referme la page comme l'en-tête l'ouvre et se détache du pied de page crème. Titre blanc. **Champ « Note Google » supprimé**, ainsi que son contrôle dans le script. Restent : entreprise, contact, téléphone, code postal, métier (obligatoires) et message (facultatif). Sujet inchangé : « Candidature artisan Akelia : <métier>, <entreprise> (<code postal>) ». |

Inchangés depuis la version précédente, et conformes au ticket :
- le bandeau « Vous êtes artisan ? » de /qui-sommes-nous (texte vérifié dans la page construite) ;
- les deux listes de critères séparées ;
- `noteMinimale`, lu par /devis et par « L'élite de l'artisanat local » ;
- le schéma SVG ;
- l'ancre `#candidature` ;
- le SEO (title, description, canonique, BreadcrumbList, FAQPage ; ni Product ni Offer).

### 2. Le tableau comparatif
- **Données** : un seul tableau `comparatif` (7 lignes × 4 modèles) dans la page, qui alimente les deux rendus. Texte du ticket mot pour mot. « — » est annoncé « sans objet » aux lecteurs d'écran.
- **À partir de 992px** : vrai `<table>`, avec un titre réservé aux lecteurs d'écran (`<caption>`), des en-têtes de colonnes (`th scope="col"`) et des en-têtes de lignes (`th scope="row"`). **Colonne Akelia détachée** : en-tête orange plein, cellules sur fond orange pâle, filets orange de 3px sur les côtés et en bas, texte en semi-gras. Les autres colonnes sont en texte secondaire. Le tableau est enveloppé dans un cadre `overflow-x-auto`, comme les tableaux des articles. À 1024 et 1440px, il tient en largeur : rien ne défile (vérifié).
- **Sous 992px** : **une carte par modèle**, 1 colonne puis 2 à partir de 768px. Chaque ligne devient une paire libellé / valeur (`<dl>`). **La carte Akelia vient en dernier**, en pleine largeur, avec un fond orange pâle, un filet orange de 3px, une ombre et une coche.
- **Défilement horizontal** à 375, 768, 1024 et 1440px : **aucun**. Les seuls éléments comptés par le test étaient des textes `sr-only` de 1px. Captures : `captures/rejoindre-le-collectif/comparatif-{375,768,1024,1440}.png` (375px en ×2).

### 3. Vérification
- **`npm run build`** : sans erreur ni avertissement.
- **Formulaire** (Chromium, requête interceptée, **aucun envoi réel**) :
  - envoi à vide : 5 erreurs, aucune requête, focus sur « Nom de l’entreprise » ;
  - envoi rempli : `POST https://api.web3forms.com/submit` avec `access_key` (08e77810…), `subject` = « Candidature artisan Akelia : Chauffagiste, Thermique Garonne SARL (31000) », `from_name` = « Akelia Candidature artisan », Entreprise, Contact, Téléphone, Code postal, Métier, Message. **Plus de champ Note Google** ;
  - la confirmation s'affiche et le formulaire est masqué.
- **« Devenir partenaire »** : le champ « Nom de l’entreprise » arrive sous l'en-tête collant, à 311px pour un en-tête de 73px (375px de large), à 382px pour un en-tête de 122px (1440px de large).
- **375, 768, 1024 et 1440px** : **débordement horizontal 0px**. Cibles et textes comme avant : étiquettes au-dessus de champs de 56px, lien en ligne, fil d'Ariane 16px, surtitre 13,6px.
- **Schéma à 375px** : texte à 18,7px (capture `schema-375.png`).
- **Contrastes** :
  - en-tête bleu nuit : blanc 14,47:1 ; **phrase orange en `action-300` 8,00:1** ; bouton orange, texte foncé 6,87:1 ;
  - **colonne Akelia du tableau** : texte sur orange pâle **14,56:1**, en-tête texte foncé sur orange plein **6,87:1** (20px gras, gros texte) ;
  - coche de la carte Akelia (`action-800`) 4,88:1 (non textuel) ;
  - le filet orange sur blanc (2,38:1) est décoratif : la colonne se distingue aussi par son fond ;
  - autres colonnes : 7,11:1 ;
  - titre du formulaire, blanc sur bleu nuit : 14,47:1.
- **FAQ** :
  - au chargement, seule la 1re question est ouverte ;
  - au clavier (Entrée, Espace, Entrée, Espace sur chaque question), elle se referme et les 3 autres s'ouvrent ;
  - **JSON-LD FAQPage = texte affiché, identique pour les 4 questions et les 4 réponses** ;
  - types JSON-LD : BreadcrumbList et FAQPage.
- **Recherches** :
  - mot « note » dans la page construite (texte visible et JSON-LD) : **aucune occurrence** ;
  - **37 noms d'acteurs du marché** recherchés (énergéticiens, plateformes de travaux, enseignes, franchises de menuiserie) : **aucun trouvé**.
- **Bandeau « Vous êtes artisan ? »** de /qui-sommes-nous : « Nous ne retenons qu’une seule entreprise par métier et par secteur. Si la vôtre est certifiée RGE, assurée en décennale et qu’elle pose avec ses propres équipes, présentez-la : nous étudions chaque candidature. » (« une seule » est lu dans `collectif.ts`).

## /rejoindre-le-collectif : critère « Créateur d’entreprise » (19 octobre 2026)

**Question 306 réglée.** Ce 4e critère décrivait un profil, pas une garantie. Il contredisait aussi l'introduction placée juste au-dessus : « des entreprises structurées et reconnues sur leur territoire ».

### 1. Ce qui change (`src/pages/rejoindre-le-collectif.astro`, section « Pour qui ? »)
- **Critères d'éligibilité : 3 au lieu de 4.** Garanties légales, Capacité d’exécution et Engagement qualité, textes inchangés. `criteresEligibilite[3]` est retiré. L'icône `avantage` est **conservée** : elle sert encore à l'étape 4 du parcours (« Lancement de l’acquisition ») et aux encadrés « L'avantage » (`Encadre.astro`, /aides-renovation).
- **Mise en page** : les critères ne sont plus dans une colonne à côté des métiers. Ils forment une grille de **3 cartes**, 1 colonne sur téléphone et 3 à partir de 768px : pastille d'icône vert pâle, intitulé en h4, texte dessous. Les « Métiers éligibles » passent dessous, sur toute la largeur (vignettes 1 puis 2 colonnes, inchangées).
- **Phrase pour les créateurs**, juste sous les critères et avant « Métiers éligibles » (constante `CREATEURS` dans la page) : « **Vous créez votre entreprise ?** Présentez-vous quand même : nous étudions les candidatures de structures récentes qui ont les capacités de se développer vite. »
  - simple paragraphe, ni carte ni alerte : filet orange de 4px à gauche, début en gras ;
  - 18px sur téléphone, 20px à partir de 768px ;
  - plafonnée à 62 caractères par ligne.

### 2. Vérification
- **`npm run build`** : sans erreur ni avertissement.
- **Grille des 3 critères** (Chromium) :
  - 375px : 1 colonne, cartes de 335px ;
  - 768px : 3 colonnes de 227 × 308px ;
  - 1024px : 3 colonnes de 312 × 245px ;
  - 1440px : 3 colonnes de 387 × 245px.
  
  À partir de 768px, les trois cartes sont **sur une seule rangée, à la même hauteur**. **Débordement horizontal 0px** aux 4 largeurs.
- **Contrastes sur le fond de section (blanc)** :
  - texte de la phrase : **16,34:1** ;
  - **filet en `action-600` (#d17f08) : 3,11:1**, au-dessus du seuil de 3:1 des éléments graphiques. L'orange principal `action-500` n'aurait fait que 2,38:1 : c'est pourquoi je ne l'ai pas utilisé.
- Captures : `captures/rejoindre-le-collectif/pour-qui-{375,768,1024,1440}.png`.

## /rejoindre-le-collectif : le parcours rejoint le formulaire (19 octobre 2026)

La section « Le parcours » disparaît. Ses 4 étapes deviennent la colonne « Ce qui se passe ensuite », à droite du formulaire de candidature, sur le modèle de la colonne de réassurance de /devis. **La page passe de 8 à 7 sections**, plus le schéma placé sous l'en-tête. **Questions ouvertes : n° 304 (toujours ouverte), 311 et 312** (« Questions en attente de réponse »).

### 1. Ce qui change (`src/pages/rejoindre-le-collectif.astro`)
- **Section « Le parcours » supprimée**, avec son commentaire.
  - `parcours` devient une simple liste de 4 libellés, inchangés : Dépôt de candidature · Entretien · Réservation du secteur · Lancement de l’acquisition.
  - Les icônes et les quatre couleurs d'étape (bruyère, argile, lichen, brume) sont abandonnées.
- **« Déposer votre candidature »** (bleu nuit) :
  - le conteneur passe de 48rem à la largeur du site (`max-w-site`) ;
  - **deux colonnes à partir de `lg:`**, même grille que /devis : `minmax(0,3fr)` pour le formulaire, `minmax(0,2fr)` pour le parcours, soit 60/40, avec un écart de 3,5rem. ⚠️ `lg:` vaut 992px, pas 1024px : voir la question 311 ;
  - en dessous de ce seuil : le formulaire d'abord, le parcours ensuite (ordre du code) ;
  - **le formulaire n'a pas changé** : mêmes champs, même script, même sujet ;
  - la carte blanche garde `self-start` : après l'envoi, elle se réduit à la confirmation (300px de haut à 1440px) au lieu de s'étirer.
- **Le parcours** (`<aside>`) : titre h3 « Ce qui se passe ensuite » en blanc, puis une `<ol>` verticale. Ni carte, ni ombre, ni fond.
  - Les pastilles font 40px, cerclées de 2px d'orange `action-500`, avec le chiffre en blanc.
  - Un filet vertical de 2px les relie, en `action-500` plein. Sur /devis, il est à 60 % d'opacité : ici, la transparence l'aurait fondu dans le bleu nuit.
  - Les libellés sont en blanc, semi-gras, `text-corps` (18px).
  - **Étape 1** : pastille orange pleine, chiffre foncé, et à côté la mention « Vous êtes ici » en `action-300`, graisse normale (voir la question 312). L'élément de liste porte `aria-current="step"`. Les lecteurs d'écran entendent « Étape 1 : Dépôt de candidature, Vous êtes ici ».
  - **Aucun délai** (question 304).
- **FAQ : blanc → crème.** Sans la section crème du parcours, « Pour qui ? » (blanc) aurait été suivie de la FAQ (blanc). Ses `<details>` passent en conséquence de crème à blanc (filet `creme-fonce` conservé). Suite des fonds vérifiée dans le navigateur :
  - **bleu nuit · blanc · crème · blanc · crème · blanc · crème · bleu nuit**, puis le pied de page crème ;
  - jamais deux sections de même couleur côte à côte.
- **Commentaire d'en-tête de la page** mis à jour (liste des sections).
- **`Icone.astro` : aucune suppression.** Les icônes de l'ancien parcours servent encore ailleurs :
  - `audit` : critères de la page, /aides-renovation, `methode.ts` ;
  - `technicien` : critères de la page, /qui-sommes-nous ;
  - `repere` : arguments de l'en-tête, /qui-sommes-nous ;
  - `avantage` : `Encadre.astro`.

  `calendrier` et `plan` n'étaient pas utilisées par le parcours : elles servent aux arguments de l'en-tête et aux métiers.
- L'ancre `#candidature` et la classe `ancre-sommaire` sont inchangées.

### 2. Vérification
- **`npm run build`** : sans erreur.
- **Envoi intercepté** (Chromium, requête vers Web3Forms détournée, **aucun envoi réel**). Contenu reçu :
  ```
  access_key  08e77810-e615-4993-8675-2212b8e486e0
  subject     Candidature artisan Akelia : chauffagiste, Test SARL (31000)
  from_name   Akelia Candidature artisan
  Entreprise  Test SARL
  Contact     Jean Test
  Téléphone   0612345678
  Code postal 31000
  Métier      chauffagiste
  Message     Message de test
  ```
  `botcheck` n'est pas envoyé (case non cochée). Le sujet a la même forme qu'avant.
- **Après l'envoi** : le formulaire est masqué et la confirmation s'affiche à sa place. **La colonne du parcours reste affichée.**
- **Bouton « Devenir partenaire »** (1440px) : le bas de l'en-tête collant est à 122px. Le haut du champ « Nom de l’entreprise » est à 420px : **il est sous l'en-tête, pas caché dessous**.
- **Aux 4 largeurs** :

  | Largeur | Disposition | Carte du formulaire | Parcours | Champ Téléphone |
  |---|---|---|---|---|
  | 375px | parcours sous le formulaire | 335px | 335px | 293px |
  | 768px | parcours sous le formulaire | 728px | 728px | 311px |
  | 1024px | côte à côte | 557px | 371px | 225px |
  | 1440px | côte à côte | 692px | 462px | 293px |

  - **Débordement horizontal : 0px** aux 4 largeurs.
  - **Aucune cible de moins de 44px** dans la section. Seule exception : le lien « politique de confidentialité », qui est un lien dans une phrase (exempté), comme sur /devis.
  - **Aucun texte de moins de 18px** dans la section candidature et la FAQ.
- **À 1024px, rien n'est comprimé** : toutes les étiquettes tiennent sur une ligne (31,5px de haut, comme aux autres largeurs). Téléphone et code postal restent côte à côte, à 225px chacun, ce qui suffit pour 10 chiffres et 5 chiffres. Les champs gardent 56px de haut.
- **Contrastes sur bleu nuit (`nuit-900`, #1d2b36)** :
  - pastilles cerclées et filet `action-500` : **6,08:1** (3:1 exigé pour un élément non textuel) ;
  - texte blanc (libellés, chiffres, titre) : **14,47:1** (7:1 visé) ;
  - « Vous êtes ici » en `action-300` : **8,00:1** ;
  - chiffre foncé (`texte`) sur la pastille orange pleine : **6,87:1**.
- Captures : `captures/rejoindre-le-collectif/candidature-{375,768,1024,1440}.png` et `candidature-apres-envoi-1440.png`.

## Pages solutions : le gabarit, sur la PAC air-eau (19 octobre 2026)

Une seule page construite, à valider avant les autres : **/solutions/pompe-a-chaleur-air-eau**. Questions ouvertes : **n° 313 à 320** (« Questions en attente de réponse »). ⚠️ Les contradictions de chiffres (313) et les chiffres sans justification (314) sont **affichés tels quels**, en attente de votre choix.

### 1. Périmètre : les 21 adresses du menu et leur état

Les adresses sont celles de l'ancien site, sans changement (`src/data/menu.ts`). Le ticket parle de 20 pages : le menu compte 21 adresses, parce que « Rénovation globale » et « Construction neuve » sont des liens directs.

| Adresse | Rubrique | Ancien site | État au 19 octobre 2026 |
|---|---|---|---|
| /solutions/pompe-a-chaleur-air-eau | Pompes à chaleur | existe | **fait (gabarit)** |
| /solutions/climatisation-reversible-pac-air-air | Pompes à chaleur | existe | à porter |
| /solutions/pac-geothermique | Pompes à chaleur | existe | à porter |
| /solutions/isolation-thermique-toiture-comble | Isolation | existe | à porter |
| /solutions/isolation-thermique-par-linterieur-iti | Isolation | existe | à porter |
| /solutions/isolation-thermique-par-l-exterieur-ite | Isolation | existe | à porter |
| /solutions/menuiseries-fenetres-volets | Menuiseries | existe | à porter (sans `region`) |
| /solutions/ventilation-vmc-simple-et-double-flux | Ventilation | existe | à porter |
| /solutions/chaudiere-gaz-condensation | Chaudières | existe | à porter |
| /solutions/chaudiere-biomasse-bois-ou-pellets | Chaudières | existe | à porter |
| /solutions/panneaux-photovoltaiques | Production d'électricité | existe | à porter |
| /solutions/renovation-energetique-globale | lien direct | existe | à porter ⚠️ hors méga-menu : le contrôle de rubrique du gabarit devra l'accepter |
| /solutions/poele-a-granules-ou-a-bois | Appoint | n'existe pas | à écrire |
| /solutions/radiateurs | Appoint | n'existe pas | à écrire |
| /solutions/chauffe-eau-electrique | Eau chaude sanitaire | n'existe pas | à écrire |
| /solutions/chauffe-eau-thermodynamique | Eau chaude sanitaire | n'existe pas | à écrire |
| /solutions/chauffe-eau-solaire | Eau chaude sanitaire | n'existe pas | à écrire |
| /solutions/borne-de-recharge | Borne de recharge | n'existe pas | à écrire |
| /solutions/batterie | Système de gestion | n'existe pas | à écrire |
| /solutions/thermostat-et-domotique | Système de gestion | n'existe pas | à écrire |
| /solutions/construction-neuve | lien direct | n'existe pas | à écrire ⚠️ même remarque que la rénovation globale |

Vérifié : la PAC air-eau répond 200 ; les 20 autres adresses du menu répondent 404, comme prévu.

### 2. Architecture

- **Un gabarit** : `src/pages/solutions/[slug].astro`. Il crée une page par fichier de `src/data/solutions/` (sauf `type.ts`).
- **Un fichier de données par solution**, avec un type partagé : `src/data/solutions/type.ts`, et `src/data/solutions/pompe-a-chaleur-air-eau.ts`.
- **Images** dans `src/assets/solutions/<slug>/`.
- **Contrôles à la construction**, qui arrêtent le build avec un message clair :
  - le nom du fichier doit être le slug ;
  - l'adresse doit exister dans `menu.ts` ;
  - la rubrique doit être le titre du groupe du méga-menu.
- **Écarts au type du ticket** (justifiés dans `type.ts`) :
  - `nomDefini` (« la pompe à chaleur air-eau ») et `questionPourVous` : les titres s'accordent avec le nom, le gabarit ne peut pas le deviner ;
  - `introPourVous`, facultatif ;
  - les performances ont une `precision` sous la valeur (« Excellent rendement ») ;
  - les zones de région ont une `couleur` (celle de la carte) et des `regions` (texte), pour ne pas reposer sur la couleur seule ;
  - `icone` est typé avec les noms d'`Icone.astro`, et `equipementSimulateur` avec les valeurs du simulateur.
- **Textes mis en forme** (avis, cas, zones) : une ligne « - » donne un élément de liste, `**gras**` met en gras, `[lien](/adresse)` crée un lien interne. Le découpage est fait par `blocsDeTexte()` dans `src/utils/texte.ts`, et l'affichage par `TexteMisEnForme.astro`.

**Nouveaux composants**
- `src/components/ParcoursAkelia.astro` : « Comment ça se passe avec Akelia », 4 étapes en h3, texte générique (« votre projet », « votre installation », jamais « appareil »).
- `src/components/solutions/EchelleAkelia.astro` : la phrase sur l'échelle Akelia, identique partout.
- `src/components/solutions/TravauxSolution.astro` : les parcours de travaux. Avec un seul parcours, pas d'onglets.
- `src/components/solutions/TexteMisEnForme.astro`.

**Composants modifiés**
- **`Sommaire.astro`** :
  - entrées de second niveau (`niveau: 2`, en retrait) ;
  - un titre visé qui n'est pas affiché (onglet inactif) est ignoré par le suivi ;
  - l'événement `sommaire:maj` relance le calcul de la partie active.
- **`Simulateur.astro` et `SimulateurQuestions.astro`** : prop `travauxPrecoches`. « Recommencer » remet la case cochée, puisque c'est l'état d'origine du formulaire.
- **`FilAriane.astro`** : seule la dernière étape porte `aria-current="page"`. Une rubrique sans page peut ainsi figurer au milieu, en texte simple.
- **`Icone.astro`** : 3 icônes ajoutées (`feuille`, `son`, `engrenage`).

**Onglets des travaux** : même modèle que les Cas types de l'accueil.
- Rôles W3C tablist / tab / tabpanel.
- Navigation au clavier : flèches, Début, Fin ; un seul onglet dans l'ordre de tabulation.
- Onglet actif plein (bleu nuit), inactifs au filet.
- Je n'ai **pas** refactorisé `CasTypes.astro` pour le partager : son script est mêlé aux couleurs de section et au chargement différé des illustrations de l'accueil. Seul le principe est repris.
- Sans JavaScript, les parcours s'affichent les uns sous les autres.
- Un clic du sommaire sur « Neuf » active l'onglet avant de descendre. La page ouverte directement sur `#travaux-neuf` affiche aussi le bon onglet.

### 3. La page, de haut en bas

1. **En-tête (crème)** :
   - fil d'Ariane « Accueil › Pompes à chaleur › Pompe à chaleur air-eau » ; la rubrique n'a pas de page, le JSON-LD BreadcrumbList la saute ;
   - surtitre, h1, 4 arguments à coche verte, bouton « Obtenir un devis » ;
   - image et carte blanche du chiffre clé à cheval sur son bas : à droite à partir de 992 px, dessous en dessous.
2. **Corps (blanc)** : à partir de 992 px, sommaire collant à gauche (bouton devis, lien collectif). « En bref » (encart vert des articles), puis le sommaire replié sur téléphone et tablette.
3. **Tout ce que vous devez savoir** :
   - points forts (filet vert) et inconvénients (filet orange foncé) côte à côte dès 768 px ;
   - caractéristiques en paires libellé / valeur ;
   - 4 indicateurs de performance : échelle A à G dessinée, jauge sur 5 pour la complexité, puis la phrase de l'échelle Akelia ;
   - « Est-ce adapté à votre bien ? » (4 cartes à icône) ;
   - « Est-ce adapté à votre région ? » : carte et légende. Le bloc entier disparaît si `region` manque.
4. **Les travaux à réaliser** : onglets Rénovation / Neuf. Chaque parcours commence par un h3 et son niveau de difficulté en grand (note, jauge, qualificatif), puis ses 4 étapes numérotées et illustrées :
   - sous 768 px, une étape par ligne, image à gauche ;
   - 2 colonnes jusqu'à 1279 px ;
   - 4 colonnes au-delà.
5. **Notre avis** : 4 sous-parties en vrais h3.
6. **Est-elle faite pour chez vous ?** : introduction, puis 5 cas en h3 « Cas n° X — … » avec une pastille numérotée bleu nuit.
7. **Les aides pour ce projet** : le simulateur, « Chauffage » pré-coché, puis le lien vers /aides-renovation.
8. **Comment ça se passe avec Akelia** (`ParcoursAkelia`).
9. **FAQ** : `faq` est vide, donc **ni titre ni JSON-LD FAQPage** (vérifié dans le HTML : un seul JSON-LD, le BreadcrumbList).
10. **À lire aussi (crème)** : 3 articles choisis par `articlesPertinents()` avec les mots-clés « air-eau », « air/eau », « pompe à chaleur », « plancher chauffant » et « loi d’eau ». Sortie actuelle :
    - « Pompe à chaleur ou chaudière pour un plancher chauffant » ;
    - « Régler la température avec la loi d’eau » ;
    - « Quels radiateurs sont compatibles avec une PAC air-eau ».

    L'ancienne liste de liens « Les questions que vous vous posez » n'est pas reprise telle quelle : c'est cette section qui la remplace.
11. **Appel à l'action final (bleu nuit)**, même texte que le bas des articles.

Suite des fonds : crème · blanc · crème · bleu nuit · pied de page crème.

### 4. Corrections faites d'autorité

**Titres**
- H2 « Tout ce que vous devez savoir sur la Pompe à chaleur **air-air** » devient « … sur la pompe à chaleur air-eau ».
- « Impacts environnementales » devient « Impact environnemental ».
- « Autonomie énergétique » devient « **Économie d’énergie** ».
- « Rentabilité immédiates » devient « Rentabilité immédiate ».
- « Pertinent même par grand froid » devient « Pertinente… » (la PAC).
- « Cas N°3 », « Cas N°5 » deviennent « Cas n° 3 », « Cas n° 5 », sur le même modèle que les autres.
- « Passoires thermique » devient « Passoires thermiques ».
- « Logements non équipés d'émetteur hydraulique (ex radiateur électrique) » devient « Logements sans émetteurs hydrauliques (radiateurs électriques, par exemple) ».
- « Travaux d'installation de l'unité intérieur » devient « Installation de l'unité intérieure… ».
- « Etude thermique » devient « Étude thermique ».

**Fautes de frappe et d'orthographe**
- rafraichissement → rafraîchissement
- éléctricité decarbonné → électricité décarbonée
- disponibilitées → disponibilité
- notamment dû au cout → notamment en raison du coût
- extérieure / intérieure → extérieur / intérieur (un espace)
- conccurentiel → concurrentielle
- region ou une pompe → région où une pompe
- autre solution → autres solutions
- deux fois plus cher → plus chère
- taxe → taxes
- appareilles → appareils
- coutent → coûtent
- future → futur
- constructions neuves → construction neuve
- certain modèle permette → certains modèles permettent
- permet également produire → permet également de produire
- reste plus intéressante → restent plus intéressantes
- Surement → Sûrement
- intéressant → intéressante (la PAC)
- peu économe → peu économes
- double point final supprimé
- espace manquante après « sonores : »
- CO2 → CO₂
- °C avec espace insécable

**Autres corrections**
- Émojis remplacés par des icônes de la charte (☀️, 💶, 🟢…).
- Astérisque orpheline de « Indice de réparabilité* » retirée (question 314).
- Lien « Consultez notre page dédiée à la géothermie », qui n'avait pas de lien : relié à /solutions/pac-geothermique, en 404 pour l'instant.

**Textes alternatifs**
- L'image d'en-tête « … adossé à une maison » devient « Unité extérieure d’une pompe à chaleur air-eau fixée sur la façade d’une maison ».
- Les 8 étapes sont décrites d'après ce que montre l'image (par exemple « Chaufferie après le démontage de l’ancienne chaudière, avec la cuve à fioul et un diable »).
- La carte est décrite avec ses régions.
- Les icônes (« Icon… ») ne sont pas reprises : elles sont remplacées par des icônes décoratives.

**ParcoursAkelia** : texte rendu générique. « Votre appareil » devient « votre installation », et « Notre équipe vient installer votre appareil » devient « L’équipe de l’artisan réalise les travaux ». Délais : question 319. Les 4 photos de l'ancien bloc ne sont pas reprises : elles montrent une pompe à chaleur et des tenues d'une entreprise nommée.

**Rédigé par nous, sans aucun chiffre** : « En bref » (5 lignes tirées de la page), les textes alternatifs, le titre et la description SEO (l'ancienne page n'avait pas de description), et les régions de la légende, lues sur la carte.

### 5. Contradictions de chiffres relevées (rien tranché)

| Sujet | Valeur | Où |
|---|---|---|
| Économie d'énergie | « Produit 3 à 4 fois plus d’énergie qu’elle n’en consomme » | En-tête, argument 1 |
| | « Divisez vos factures par 3 ou 4 » | Points forts, « Rentabilité immédiate » |
| | « +70 % », « 3 à 4 fois moins d’énergie consommée » | Performances, Économie d'énergie |
| | « Elle consomme **4 à 5 fois** moins d’énergie que les autres systèmes » | Notre avis, « Pourquoi c’est la solution de référence ? », Économique |
| Rentabilité | « Rentabilité **immédiate** » | Points forts |
| | « Avec aides ≃ 5 à 6 ans, sans aides ≃ 9 à 10 ans » | Caractéristiques, Temps moyen pour rentrer dans ses frais |
| | « Investissement rentabilisé en 9 ou 10 ans, sans aides » | Cas n° 1 |
| Aides | « plus de 11 000 € d’aides » | En-tête, argument 4 |
| | « CEE ≃ 6 500 € », « MaPrimeRénov’ ≃ 5 000 € » (total 11 500 €) | Caractéristiques |
| | CEE « montant variable » ; MaPrimeRénov’ PAC air-eau 5 000 € au plus, et 0 € pour les revenus supérieurs | `src/data/aides.ts`, affiché par le simulateur de la page |
| | « le système le mieux doté en aides » | Inconvénients, mais la PAC géothermique est mieux aidée d'après `aides.ts` |

Le délai de rentabilité (5-6 ans / 9-10 ans) est cohérent entre les caractéristiques et le cas n° 1 ; c'est « immédiate » qui le contredit. Les chiffres sans justification sont listés à la question 314.

### 6. Vérification

- **`npm run build`** : sans erreur. La page est générée à /solutions/pompe-a-chaleur-air-eau.
- **Menu** : 200 pour la PAC air-eau, 404 pour les 20 autres adresses (attendu).
- **375, 768, 1024 et 1440 px** :
  - débordement horizontal 0 px ;
  - aucune cible de moins de 44 px dans la page, sauf les boutons radio du simulateur (24 px), dont la cible réelle est l'étiquette entière (56 px) ;
  - contenu propre de la page à 18 px au moins. Les composants communs en dessous sont listés à la question 320.
- **Étapes des travaux** : à 375 px, sur 2 colonnes, « raccordement » se coupait en plein mot. Corrigé (une étape par ligne sous 768 px, plus de césure automatique).
- **Onglets au clavier** : flèche droite, flèche gauche (en boucle), Fin, Début, flèches bas et haut fonctionnent. Le focus suit, un seul onglet est à `tabindex=0`, et Tab mène au panneau.
- **Simulateur** :
  - la case « Chauffage » est cochée à l'arrivée (sur l'accueil : aucune case) ;
  - avec la même saisie (propriétaire occupant, 31000, chauffage), le **résultat est identique au caractère près** à celui de l'accueil ;
  - « Recommencer » laisse la case cochée.
- **Sommaire (1440 px)** : pour chacune des 7 entrées testées, le titre s'arrête à 138 px, sous l'en-tête (bas à 122 px), et l'entrée devient active. « Neuf » et « Rénovation » activent leur onglet. Le suivi au défilement fonctionne aussi. Une ouverture directe sur `#travaux-neuf` affiche l'onglet Neuf.
- **FAQ vide** : ni titre « Questions fréquentes », ni JSON-LD FAQPage.
- **Captures** : `captures/solutions/pac-air-eau-{375,768,1024,1440}.png`. Les 4 images de l'onglet « Neuf », masqué, ne se chargent qu'à son ouverture.

### 7. Pour les pages suivantes

1. Copier `src/data/solutions/pompe-a-chaleur-air-eau.ts` sous le nom du slug.
2. Remplir le fichier, déposer les images dans `src/assets/solutions/<slug>/`.
3. Laisser `faq: []` tant que vous n'avez pas écrit les questions.
4. Pour « Rénovation globale » et « Construction neuve », qui ne sont pas dans le méga-menu, le contrôle de rubrique du gabarit devra être élargi aux `liensDirects`.

## Diagnostic « toutes les pages sont vides » (19 octobre 2026)

**Résultat : je n'ai pas pu reproduire le symptôme. Aucune correction n'est faite.**

### 1. Préproduction (`rm -rf .astro node_modules/.astro dist`, `npm run build`, `astro preview`)
- **Build** : code de sortie 0, 130 pages, aucun avertissement ni erreur dans le journal.
- **HTML produit complet** :
  - `dist/index.html` : 171 Ko ;
  - `dist/devis/index.html` : 57 Ko ;
  - `dist/solutions/pompe-a-chaleur-air-eau/index.html` : 122 Ko.
- **Affichage dans Chromium** (/, /devis, /solutions/pompe-a-chaleur-air-eau) : pages pleines (5 515, 2 046 et 13 744 caractères de texte visibles), `body` et `main` visibles, feuilles CSS chargées. **Console : aucune erreur, aucun avertissement, aucune requête en échec.** La capture de l'accueil est normale.

### 2. Serveur de développement
- Un `astro dev` lancé hors de cette session tournait sur le port 4321 (terminal pts/2, démarré à 19 h 28). Je ne l'ai pas arrêté.
- Les 3 pages y répondent 200 avec un HTML complet (326 Ko, 187 Ko et 249 Ko), et s'affichent pleines dans Chromium, sans erreur en console.
- ⚠️ J'ai exécuté le `rm -rf .astro node_modules/.astro dist` demandé **pendant** que ce serveur tournait. S'il affiche des pages vides depuis, le redémarrer.

### 3. Les pistes du ticket
- **Contrôles de construction** : ils sont dans `getStaticPaths()` de `src/pages/solutions/[slug].astro`. Ils ne s'exécutent donc qu'une fois, à la génération des chemins, et seulement pour /solutions/…, pas au rendu des autres pages. Une erreur arrêterait le build avec un message, et le build passe.
- **`Icone.astro`** : les icônes sont lues dans un objet typé. Un nom inconnu casserait la vérification de types, pas le rendu, et les 3 nouvelles icônes sont bien définies.
- **`global.css` et `Layout.astro` : pas touchés** par le ticket des pages solutions. Leur diff (201 lignes et 12 lignes) date de tickets antérieurs.
- **`Sommaire.astro`** : niveau 2 et événement `sommaire:maj` testés, sans effet sur l'affichage.
- `Sommaire`, `Simulateur`, `FilAriane` et `Icone` sont des fichiers **non suivis par git** (`??`) : `git diff` ne peut pas montrer ce qui a changé. Le dernier commit (`fac748d`) ne les contient pas.

### 4. Pourquoi le build est passé
D'après ce que j'ai observé, il est passé parce que les pages ne sont pas vides, en préproduction comme en développement.

### 5. Contrôle ajouté : vérification du site produit
- **Fichier** : `scripts/verifier-build.mjs`.
- **Lancement** : automatiquement par `npm run build`, dont le script devient `astro build && node scripts/verifier-build.mjs` dans `package.json`.
- **Pages témoins** : /, /devis, /aides-renovation, /blog et /solutions/pompe-a-chaleur-air-eau.
- **Le build échoue (code 1)** si l'une d'elles :
  - manque ;
  - pèse moins de 20 000 octets (/devis, la plus légère, en fait environ 57 000) ;
  - n'a pas de `<main>`, de `<h1>` ou de feuille de style.
- **Vérifié** :
  - build normal : « ✓ 5 pages témoins complètes », code 0 ;
  - /devis remplacée par `<html></html>` : 4 problèmes listés, code 1 (fichier restauré ensuite).
- **Limite** : ce contrôle détecte un HTML vide ou tronqué. Il ne voit pas une page complète que le CSS ou un script masquerait à l'écran. Pour cela, il faudrait un test dans un navigateur (Playwright).

### Questions en attente de réponse (diagnostic)
- **D1.** Sur quelle adresse et dans quel navigateur voyez-vous les pages vides ? Une capture ou le contenu de la console m'aideraient.
- **D2.** Le problème persiste-t-il après un redémarrage du serveur de développement (`astro dev stop`, puis `astro dev --background`) et un rechargement forcé (Ctrl+Maj+R) ?

---

## Commit « Pages aides, qui-sommes-nous, rejoindre-le-collectif, gabarit solutions » (20 octobre 2026)

- Tout le travail en cours a été ajouté (`git add -A`) puis poussé sur `origin/main`, **sauf** les trois archives `akelia-blog-102-articles*.zip` (≈ 700 Ko chacune, à la racine) : ce sont des livraisons sources du blog, déjà extraites dans `src/content/` et `src/assets/blog/`. Elles restent sur le disque, hors commit.
- Relu avant validation : la clé Web3Forms (`src/data/web3forms.ts`) part dans le dépôt ; elle n'est pas un secret (prévue pour figurer dans le HTML). `captures/` reste ignoré par `.gitignore`.

### Questions en attente de réponse (commit)

- Faut-il ajouter `*.zip` au `.gitignore`, ou supprimer ces archives du disque ?
