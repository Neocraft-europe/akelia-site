# Inventaire de la charte graphique — ancien site Webflow Akelia

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
| G. Section Méthode | Titre « Votre logement autonome » et textes des 4 étapes (étape 7) ; introduction (étape 19) ; titre du bloc (étape 19), citations (étape 18), textes et boutons des 2 blocs (étapes 22 à 24) | « Étape X sur 4 » (ajout de l'étape 7) |
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

*Bloc 1 : les 4 étapes* (`MethodeEtapes.astro`)
- Titre (h2) : « Votre logement autonome »
- Introduction *(fournie à l'étape 19)* : « Changer sa chaudière avant d'isoler, c'est payer une pompe à chaleur trop grosse pour rien. L'ordre compte autant que les travaux. »
- Au-dessus de chaque titre, à partir de 768px : « Étape 1 sur 4 » … « Étape 4 sur 4 » *(rédigé par Claude)*
- 1 · « Étudier la situation » — « Analyser les qualités et les faiblesses de votre habitat pour établir un plan précis, adapté à votre logement et à votre budget. »
- 2 · « Isoler et ventiler » — « C'est l'étape la plus importante : moins votre maison perd de chaleur, moins elle a besoin d'énergie. Et une fois le logement rendu étanche, il lui faut une ventilation efficace pour éviter l'humidité. »
- 3 · « Produire de l'énergie » — « Identifier ce que votre logement peut produire — ensoleillement, surface de toiture, orientation — avant de choisir vos équipements. »
- 4 · « S'équiper » — « Une fois le bien isolé et la production connue, choisir le système adapté : chauffage, thermostat, borne de recharge, batterie, domotique. »

*Bloc 2 : deux blocs côte à côte* (`MethodeFacons.astro`, version statique de l'étape 22 ; tout est fourni : citations à l'étape 18, titre à l'étape 19, textes et boutons à l'étape 22)
- Titre (h2) : « Vous pilotez, ou on pilote ? »
- Bloc 1 (fond blanc), titre en citation : « « Je veux rénover, mais je ne sais pas par où commencer » » — texte : « Un architecte ou un spécialiste du collectif prend tout en charge : l'audit, l'ordre des travaux, la coordination des artisans, le suivi du chantier. Un seul interlocuteur, du début à la fin. » — bouton : « Demander un accompagnement → » (vers `/devis`)
- Bloc 2 (fond bleu nuit), titre en citation : « « Je sais ce que je veux, il me faut le bon artisan » » — texte *(fourni à l'étape 24)* : « Vous avez déjà votre idée : isoler les combles, changer les fenêtres, remplacer la chaudière. Vous travaillez en direct avec l'artisan Akelia de votre secteur, sans intermédiaire ni centre d'appel. Il vient chez vous, il chiffre, il réalise. » — bouton : « Voir nos solutions → » (vers `/services`)
- La flèche « → » des boutons est décorative (non lue par les lecteurs d'écran), comme sur le bouton du hero.

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

47. **⚠️ Section Collectif haute sur téléphone** : 2 391px à 375px, soit 2,94 écrans d'iPhone X (812px), mais **3,58 écrans d'iPhone SE (667px)**. Pistes de réduction (**aucune appliquée**), avec le gain estimé :
    - (a) **Texte des engagements repliable** sur téléphone (le titre reste visible, le texte s'ouvre au toucher) : environ −1 000px. Gain maximal, mais une action en plus pour un public senior, et contraire au principe « tout visible » retenu à l'étape 22.
    - (b) **Espacement des lignes réduit** sur téléphone (24px → 16px en haut et en bas de chaque ligne, 12px → 8px entre titre et texte) : environ −100px, sans rien perdre en contenu.
    - (c) **Icônes masquées** sur téléphone, titre sur toute la largeur : environ −60 à −110px (les titres de 2 lignes passent souvent sur une ligne, comme « Un interlocuteur unique, responsable de votre chantier. »).
    - (d) **Titre h2 réduit** sur téléphone (2.5rem → 2rem, comme le h1 l'est déjà) : environ −40px ici, mais à décider pour tout le site, toutes les sections ayant le même h2.
    - (e) **Paragraphe 2 retiré ou raccourci** sur téléphone : environ −220px, mais c'est un changement de texte, à votre main.
    Recommandation : (b) + (c), environ −200px (≈ 2 190px, sous 3 écrans de 812px), sans toucher au texte ni ajouter d'interaction. Laquelle appliquer, ou garder tel quel ?
48. **Deux traits noirs en bas de la section Collectif** : le trait de fin de liste et, 40 à 80px plus bas, le trait de fin de section (séparation avec les articles). Visible sur `1280-collectif.png`. Garder (choix appliqué : la liste reste un ensemble fermé), ou retirer le trait de fin de liste ?
49. **Section des articles à migrer** vers la charte (déjà dans « Restant à faire ») : elle suit maintenant la section Collectif, blanche, et contraste par sa palette Tailwind par défaut. À traiter dans une prochaine étape ?
50. **Paragraphe 3 mis en avant** (semi-gras, barre orange) : initiative de mise en page, non demandée. Le garder, ou le remettre au même style que les deux premiers ?

37. **Contour bleu nuit autour des grands numéros orange** : ajouté pour la lisibilité (orange seul sur blanc : 1,94:1, sous les 3:1 recommandés même pour un très grand texte). Les numéros sont décoratifs pour les lecteurs d'écran (le rang est annoncé par la liste et par « Étape X sur 4 »), mais un visiteur senior doit pouvoir les lire. Garder le contour (choix appliqué), ou orange pur ? Retirer le contour se fait en supprimant deux classes dans `MethodeEtape.astro`.
38. **Section Méthode plus haute sur téléphone** : +192px à 375px (2 433px au total, environ 3 écrans). Acceptable ? Sinon, pistes : numéros à 3.5rem (56px) sur téléphone (environ −60px), ou icônes masquées sur téléphone (sans gain de hauteur, mais un en-tête plus aéré).
46. **Libellé « Demander un accompagnement » sur deux lignes** sur téléphone (depuis l'étape 24, il tient sur une ligne dès 768px) (bouton de 66px de haut, lisible). Accepter, ou raccourcir sur petit écran (par exemple « Être accompagné ») ?
43. **⚠️ Enchaînement sur téléphone** (toujours valable à l'étape 23 ; la bande est maintenant blanche) : seulement 44px entre le bloc bleu nuit (en bas de la pile) et la section bleu nuit des aides. Pistes (a), (b), (c) détaillées aux étapes 20 et 22 ; recommandation : (b), marge basse doublée sur téléphone. Laquelle appliquer ?
44. *(Sans objet depuis l'étape 22 : l'écran partagé est abandonné.)*
45. *(Sans objet depuis l'étape 22.)*
41. *(Réglée à l'étape 20 : la demande fixe le panneau gauche en clair et le droit en bleu nuit.)* **Quelle carte en bleu nuit ?** Le fond sombre attire l'œil en premier. Il a été mis sur la carte 1 (« Je veux rénover… », accompagnement complet), qui est aussi la première lue. Un visiteur pourrait y voir l'offre « principale ». Garder (choix appliqué), ou mettre la carte 2 en bleu nuit ? Inverser aussi l'ordre éloignerait la carte sombre de la section des aides (voir l'étape 19).
42. **Barre orange de la citation sur la carte blanche** : 1,94:1, décorative. La garder orange sur les deux cartes, comme demandé à l'étape 18 (choix appliqué), ou la passer en bleu nuit sur la carte blanche (13,18:1), au risque de casser la symétrie des deux citations ?
39. **Titre « Votre logement autonome »** *(introduction remplacée à l'étape 19 ; seul le titre reste en question)* : il parle encore de la méthode, alors que l'introduction et le bloc suivant parlent maintenant au visiteur. Le reprendre, ou le garder ?
40. **Textes à valider** : le tableau « Origine des textes », en tête de fichier, liste ce que vous n'avez pas fourni (notamment toutes les phrases de `aides.ts`, les questions et les messages d'erreur du simulateur). Merci de les valider ou de fournir vos versions. Si votre rappel voulait dire autre chose, merci de préciser.

33. **30 000 € ou 32 000 € ?** Le texte fourni dit « plus de 30 000 € », alors que le simulateur affiche « jusqu'à 32 000 € » pour MaPrimeRénov' rénovation d'ampleur. Ce n'est pas faux (32 000 est bien « plus de 30 000 »), mais le montant n'est plus relié à `aides.ts` : si le barème baisse sous 30 000 €, l'accroche ne suivra pas. Garder 30 000 € en dur (choix appliqué), ou revenir au montant lu dans les données ?
34. **« L'État les verse »** : « les » n'a plus d'antécédent clair, puisque le mot « aides » a disparu du titre (le titre parle de « 30 000 € » qu'on « rapporte »). Un lecteur comprend, mais la phrase pourrait être « L'État verse ces aides pour isoler… ». Garder le texte tel quel (choix appliqué) ou ajuster ? À noter aussi : « l'État » ne verse pas les primes CEE (fournisseurs d'énergie) ni les aides régionales.
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
