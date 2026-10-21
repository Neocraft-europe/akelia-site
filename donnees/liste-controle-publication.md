# Liste de contrôle de publication

Créée le 21 octobre 2026. Chaque point doit être réglé **avant la mise en ligne**. Le détail et l'historique de chacun sont dans `inventaire-charte.md` (référence entre parenthèses). Un point réglé est coché et daté, jamais effacé.

## Compte à rebours

- [ ] **Entrées de menu menant à une page inexistante (404) : 20 au 21 octobre 2026, à ramener à 0.**
  - Mesure : l'avertissement de `npm run build` « N entrées de menu mènent à une page inexistante (404) », émis par `src/pages/solutions/[slug].astro`. Il liste les adresses.
  - Le compteur baisse d'une unité à chaque page solution portée.
  - Ne **jamais** le faire taire en marquant les entrées « à venir » (décision d'Akelia, 21 octobre 2026).
  - Section « Sauvegarde des images et généralisation du gabarit », question H-B.

## Pages et adresses

- [ ] Mettre en œuvre les redirections de **`donnees/redirections.md`** : 15 redirections, dont 11 provisoires vers /devis (pages /ville et /conseil-chauffage), à retirer quand ces pages seront recréées.
- [ ] Supprimer **`/test-charte`** (page de test, question 242).
- [ ] **`/services`** : changer d'abord les deux liens qui y mènent (pied de page, et le bloc `MethodeFacons.astro` de la page d'accueil), puis décider de son sort. Section « Inventaire, redirections et relecture de code ».
- [ ] Créer une **politique de confidentialité**. Elle n'existe ni sur l'ancien ni sur le nouveau site, alors que /devis et le simulateur collectent des coordonnées, transmises à Web3Forms (opérateur établi hors de l'Union européenne). Questions 233 et G3.

## Contenu à confirmer par Akelia

- [ ] **Délai de rappel « sous 48 heures »**, partout sur le site (réponse D3 / E1).
- [ ] **Arrêté correctif du 14 août 2026** (TVA des PAC air/air), connu par SYNASAV seulement : à confirmer sur Légifrance (question C1).

## Fonctionnement

- [ ] **Envoi réel des formulaires** (/devis et simulateur) : tester depuis un navigateur ordinaire, puis vérifier la réception des deux e-mails. Les envois depuis le Codespace sont bloqués par Web3Forms (questions 232 et 239).
- [ ] `npm run build` **sans aucun avertissement**. Aujourd'hui, seul reste celui du compte à rebours ci-dessus.
