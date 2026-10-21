# Table des redirections de l'ancien site Webflow

Établie le 21 octobre 2026, mise à jour le même jour (décisions d'Akelia : pages /ville et /conseil-chauffage redirigées vers /devis en attendant d'être recréées ; redirection de /devis/bourdeaux-pac-aa-toulouse confirmée). Ancien site : https://www.akelia.fr (Webflow), hors ligne. **Aucune redirection n'est mise en œuvre** : ce fichier sert à l'étape de publication.

## Sources et méthode

- **Point de départ : le plan du site** de l'export, `Données webflow/ancien test /www.akelia.fr/sitemap.xml.rss` (127 adresses, dates jusqu'au 27 août 2026).
- Les adresses de l'export **absentes du plan du site** ont été ajoutées quand l'export contient une vraie page à cette adresse (`/entreprise`, `/devis/bourdeaux-pac-aa-toulouse`, deux articles publiés le 1er septembre 2026).
- Les pages capturées « Not Found » par l'aspirateur de site ne sont **pas** d'anciennes adresses : elles sont listées à part, en fin de fichier.
- **Articles** (`/post/<slug>`) : vérifiés un par un. Pour chacun, la page `dist/post/<slug>/index.html` existe, et son `<h1>` est identique au titre (colonne Name) du CMS Webflow (`Données webflow/CMS/Akelia - Blog Posts - ….csv`). Résultat : 101 sur 101.
- Le dépôt contient 102 articles. Le 102e (`chaudiere-a-cogeneration-fonctionnement-avantages-et-inconvenients-pour-les-particuliers`) était un **brouillon** sur Webflow (Draft = true) : il n'a jamais eu d'adresse publique et n'est pas construit aujourd'hui.

## Décompte

| Mention | Nombre |
|---|---|
| identique | 105 |
| redirigée vers | 15 |
| à créer | 11 |
| supprimée volontairement | 0 |
| **Total** | **131** |

Aucune adresse n'est classée « supprimée volontairement » : aucune suppression n'a été décidée.

## Table

| Ancienne adresse | Mention | Nouvelle adresse | Source | Remarque |
|---|---|---|---|---|
| `/` | identique | `/` | plan du site |  |
| `/qui-sommes-nous` | identique | `/qui-sommes-nous` | plan du site |  |
| `/mentions-legales` | identique | `/mentions-legales` | plan du site | contenu à compléter (état des lieux) |
| `/devis-akelia` | redirigée vers | `/devis` | plan du site |  |
| `/aides-renovation-energetique` | redirigée vers | `/aides-renovation` | plan du site |  |
| `/solutions/pompe-a-chaleur-air-eau` | identique | `/solutions/pompe-a-chaleur-air-eau` | plan du site |  |
| `/solutions/climatisation-reversible-pac-air-air` | à créer | /solutions/climatisation-reversible-pac-air-air (même adresse) | plan du site | page du gabarit à porter ; tant qu’elle n’existe pas, l’adresse répond 404 |
| `/solutions/pac-geothermique` | à créer | /solutions/pac-geothermique (même adresse) | plan du site | page du gabarit à porter ; tant qu’elle n’existe pas, l’adresse répond 404 |
| `/solutions/chaudiere-biomasse-bois-ou-pellets` | à créer | /solutions/chaudiere-biomasse-bois-ou-pellets (même adresse) | plan du site | page du gabarit à porter ; tant qu’elle n’existe pas, l’adresse répond 404 |
| `/solutions/chaudiere-gaz-condensation` | à créer | /solutions/chaudiere-gaz-condensation (même adresse) | plan du site | page du gabarit à porter ; tant qu’elle n’existe pas, l’adresse répond 404 |
| `/solutions/isolation-thermique-par-l-exterieur-ite` | à créer | /solutions/isolation-thermique-par-l-exterieur-ite (même adresse) | plan du site | page du gabarit à porter ; tant qu’elle n’existe pas, l’adresse répond 404 |
| `/solutions/isolation-thermique-par-linterieur-iti` | à créer | /solutions/isolation-thermique-par-linterieur-iti (même adresse) | plan du site | page du gabarit à porter ; tant qu’elle n’existe pas, l’adresse répond 404 |
| `/solutions/isolation-thermique-toiture-comble` | à créer | /solutions/isolation-thermique-toiture-comble (même adresse) | plan du site | page du gabarit à porter ; tant qu’elle n’existe pas, l’adresse répond 404 |
| `/solutions/menuiseries-fenetres-volets` | à créer | /solutions/menuiseries-fenetres-volets (même adresse) | plan du site | page du gabarit à porter ; tant qu’elle n’existe pas, l’adresse répond 404 |
| `/solutions/ventilation-vmc-simple-et-double-flux` | à créer | /solutions/ventilation-vmc-simple-et-double-flux (même adresse) | plan du site | page du gabarit à porter ; tant qu’elle n’existe pas, l’adresse répond 404 |
| `/solutions/panneaux-photovoltaiques` | à créer | /solutions/panneaux-photovoltaiques (même adresse) | plan du site | page du gabarit à porter ; tant qu’elle n’existe pas, l’adresse répond 404 |
| `/solutions/renovation-energetique-globale` | à créer | /solutions/renovation-energetique-globale (même adresse) | plan du site | page du gabarit à porter ; tant qu’elle n’existe pas, l’adresse répond 404 |
| `/ville/bordeaux` | redirigée vers | `/devis` | plan du site | sujet multiple dans l'export (PAC air-eau et air-air, climatisation, chauffe-eau) : pas de page solution unique ; page à recréer après la publication, la redirection sera alors retirée |
| `/ville/lille` | redirigée vers | `/devis` | plan du site | sujet multiple dans l'export (PAC air-eau et air-air, climatisation, chauffe-eau) : pas de page solution unique ; page à recréer après la publication, la redirection sera alors retirée |
| `/ville/lyon` | redirigée vers | `/devis` | plan du site | sujet multiple dans l'export (PAC air-eau et air-air, climatisation, chauffe-eau) : pas de page solution unique ; page à recréer après la publication, la redirection sera alors retirée |
| `/ville/marseille` | redirigée vers | `/devis` | plan du site | sujet multiple dans l'export (PAC air-eau et air-air, climatisation, chauffe-eau) : pas de page solution unique ; page à recréer après la publication, la redirection sera alors retirée |
| `/ville/montpellier` | redirigée vers | `/devis` | plan du site | sujet multiple dans l'export (PAC air-eau et air-air, climatisation, chauffe-eau) : pas de page solution unique ; page à recréer après la publication, la redirection sera alors retirée |
| `/ville/nantes` | redirigée vers | `/devis` | plan du site | sujet multiple dans l'export (PAC air-eau et air-air, climatisation, chauffe-eau) : pas de page solution unique ; page à recréer après la publication, la redirection sera alors retirée |
| `/ville/nice` | redirigée vers | `/devis` | plan du site | sujet multiple dans l'export (PAC air-eau et air-air, climatisation, chauffe-eau) : pas de page solution unique ; page à recréer après la publication, la redirection sera alors retirée |
| `/ville/paris` | redirigée vers | `/devis` | plan du site | sujet multiple dans l'export (PAC air-eau et air-air, climatisation, chauffe-eau) : pas de page solution unique ; page à recréer après la publication, la redirection sera alors retirée |
| `/ville/strasbourg` | redirigée vers | `/devis` | plan du site | sujet multiple dans l'export (PAC air-eau et air-air, climatisation, chauffe-eau) : pas de page solution unique ; page à recréer après la publication, la redirection sera alors retirée |
| `/ville/toulouse` | redirigée vers | `/devis` | plan du site | sujet multiple dans l'export (PAC air-eau et air-air, climatisation, chauffe-eau) : pas de page solution unique ; page à recréer après la publication, la redirection sera alors retirée |
| `/conseil-chauffage/bourdeaux` | redirigée vers | `/devis` | plan du site | sujet multiple (chauffage et climatisation, étude payante) : pas de page solution unique ; page à recréer après la publication, la redirection sera alors retirée |
| `/entreprise` | redirigée vers | `/rejoindre-le-collectif` | export (page valide), hors plan du site | même rôle : recrutement des artisans (question 299 de l’inventaire) |
| `/devis/bourdeaux-pac-aa-toulouse` | redirigée vers | `/devis` | export (page valide), hors plan du site | tunnel de devis PAC air-air → le formulaire de devis ; confirmé par Akelia le 21 octobre 2026 |
| `/post/ameliorer-le-dpe-de-votre-logement-guide-complet-des-travaux-et-solutions-pour-une-renovation-energetique-efficace` | identique | `/post/ameliorer-le-dpe-de-votre-logement-guide-complet-des-travaux-et-solutions-pour-une-renovation-energetique-efficace` | plan du site | page présente, titre identique |
| `/post/autoconsommation-collective-solaire-comment-vendre-son-electricite-a-ses-voisins` | identique | `/post/autoconsommation-collective-solaire-comment-vendre-son-electricite-a-ses-voisins` | plan du site | page présente, titre identique |
| `/post/borne-de-recharge-en-copropriete-comparatif-des-solutions` | identique | `/post/borne-de-recharge-en-copropriete-comparatif-des-solutions` | plan du site | page présente, titre identique |
| `/post/chauffage-le-plus-ecologique-comparatif-co2-pm-et-nox-2026` | identique | `/post/chauffage-le-plus-ecologique-comparatif-co2-pm-et-nox-2026` | plan du site | page présente, titre identique |
| `/post/chauffe-eau-electrique-vs-thermodynamique-quel-choix-pour-votre-maison` | identique | `/post/chauffe-eau-electrique-vs-thermodynamique-quel-choix-pour-votre-maison` | plan du site | page présente, titre identique |
| `/post/choisir-la-meilleure-pompe-a-chaleur-pour-votre-maison-guide-complet` | identique | `/post/choisir-la-meilleure-pompe-a-chaleur-pour-votre-maison-guide-complet` | plan du site | page présente, titre identique |
| `/post/choisir-son-isolation-murale-ite-ou-iti-le-comparatif-technique` | identique | `/post/choisir-son-isolation-murale-ite-ou-iti-le-comparatif-technique` | plan du site | page présente, titre identique |
| `/post/comment-ameliorer-le-dpe-dun-studio` | identique | `/post/comment-ameliorer-le-dpe-dun-studio` | plan du site | page présente, titre identique |
| `/post/comment-ameliorer-simplement-le-dpe-dun-logement-avec-un-chauffe-eau-thermodynamique` | identique | `/post/comment-ameliorer-simplement-le-dpe-dun-logement-avec-un-chauffe-eau-thermodynamique` | plan du site | page présente, titre identique |
| `/post/comment-bien-dimensionner-sa-climatisation-pompe-a-chaleur-air-air-pour-un-confort-thermique-optimal` | identique | `/post/comment-bien-dimensionner-sa-climatisation-pompe-a-chaleur-air-air-pour-un-confort-thermique-optimal` | plan du site | page présente, titre identique |
| `/post/comment-bien-dimensionner-sa-pompe-a-chaleur-guide-complet` | identique | `/post/comment-bien-dimensionner-sa-pompe-a-chaleur-guide-complet` | plan du site | page présente, titre identique |
| `/post/comment-choisir-entre-climatisation-gainable-et-multi-split-le-guide-complet` | identique | `/post/comment-choisir-entre-climatisation-gainable-et-multi-split-le-guide-complet` | plan du site | page présente, titre identique |
| `/post/comment-choisir-la-climatisation-ideale-pour-votre-magasin` | identique | `/post/comment-choisir-la-climatisation-ideale-pour-votre-magasin` | plan du site | page présente, titre identique |
| `/post/comment-entretenir-sa-pompe-a-chaleur-guide-complet` | identique | `/post/comment-entretenir-sa-pompe-a-chaleur-guide-complet` | plan du site | page présente, titre identique |
| `/post/comment-financer-une-pompe-a-chaleur-les-aides-possibles` | identique | `/post/comment-financer-une-pompe-a-chaleur-les-aides-possibles` | plan du site | page présente, titre identique |
| `/post/comment-reduire-la-consommation-delectricite-de-sa-pompe-a-chaleur` | identique | `/post/comment-reduire-la-consommation-delectricite-de-sa-pompe-a-chaleur` | plan du site | page présente, titre identique |
| `/post/comment-reduire-le-bruit-de-sa-pompe-a-chaleur-et-climatisation-conseils-et-solutions` | identique | `/post/comment-reduire-le-bruit-de-sa-pompe-a-chaleur-et-climatisation-conseils-et-solutions` | plan du site | page présente, titre identique |
| `/post/comment-regler-la-temperature-dune-pompe-a-chaleur-avec-la-loi-deau` | identique | `/post/comment-regler-la-temperature-dune-pompe-a-chaleur-avec-la-loi-deau` | plan du site | page présente, titre identique |
| `/post/comprendre-les-differences-entre-dpe-audit-energetique-et-etude-thermique` | identique | `/post/comprendre-les-differences-entre-dpe-audit-energetique-et-etude-thermique` | plan du site | page présente, titre identique |
| `/post/comprendre-les-indicateurs-de-performance-des-pompes-a-chaleur-cop-scop-et-etas` | identique | `/post/comprendre-les-indicateurs-de-performance-des-pompes-a-chaleur-cop-scop-et-etas` | plan du site | page présente, titre identique |
| `/post/devenir-autonome-en-energie-en-associant-pompe-a-chaleur-et-panneaux-solaires` | identique | `/post/devenir-autonome-en-energie-en-associant-pompe-a-chaleur-et-panneaux-solaires` | plan du site | page présente, titre identique |
| `/post/electricite-ou-gaz-comment-choisir-la-meilleure-source-denergie-pour-votre-logement` | identique | `/post/electricite-ou-gaz-comment-choisir-la-meilleure-source-denergie-pour-votre-logement` | plan du site | page présente, titre identique |
| `/post/est-ce-quune-climatisation-consomme-beaucoup-delectricite` | identique | `/post/est-ce-quune-climatisation-consomme-beaucoup-delectricite` | plan du site | page présente, titre identique |
| `/post/est-ce-quune-climatisation-est-mauvaise-pour-lenvironnement-solutions-et-gestes-responsables` | identique | `/post/est-ce-quune-climatisation-est-mauvaise-pour-lenvironnement-solutions-et-gestes-responsables` | plan du site | page présente, titre identique |
| `/post/est-il-interessant-de-remplacer-sa-chaudiere-a-fioul-par-une-pompe-a-chaleur` | identique | `/post/est-il-interessant-de-remplacer-sa-chaudiere-a-fioul-par-une-pompe-a-chaleur` | plan du site | page présente, titre identique |
| `/post/etancheite-a-lair-comment-traquer-et-traiter-les-fuites` | identique | `/post/etancheite-a-lair-comment-traquer-et-traiter-les-fuites` | plan du site | page présente, titre identique |
| `/post/faq-pompes-a-chaleur-les-11-questions-a-se-poser-avant-dinstaller-une-pompe-a-chaleur` | identique | `/post/faq-pompes-a-chaleur-les-11-questions-a-se-poser-avant-dinstaller-une-pompe-a-chaleur` | plan du site | page présente, titre identique |
| `/post/fonctionnement-des-pompes-a-chaleur-aerothermiques-en-periode-de-grand-froid` | identique | `/post/fonctionnement-des-pompes-a-chaleur-aerothermiques-en-periode-de-grand-froid` | plan du site | page présente, titre identique |
| `/post/gestionnaire-denergie-hems-comment-piloter-sa-maison-pour-reduire-de-30-sa-facture` | identique | `/post/gestionnaire-denergie-hems-comment-piloter-sa-maison-pour-reduire-de-30-sa-facture` | plan du site | page présente, titre identique |
| `/post/guide-du-photovoltaique-reglementation-aides-financieres-autoconsommation-et-revente-du-surplus` | identique | `/post/guide-du-photovoltaique-reglementation-aides-financieres-autoconsommation-et-revente-du-surplus` | plan du site | page présente, titre identique |
| `/post/installer-des-panneaux-solaires-est-il-toujours-rentable-retour-sur-investissement-opportunites-avantages-et-inconvenients` | identique | `/post/installer-des-panneaux-solaires-est-il-toujours-rentable-retour-sur-investissement-opportunites-avantages-et-inconvenients` | plan du site | page présente, titre identique |
| `/post/installer-une-climatisation-en-appartement-guide-complet-et-reglementations` | identique | `/post/installer-une-climatisation-en-appartement-guide-complet-et-reglementations` | plan du site | page présente, titre identique |
| `/post/installer-une-pompe-a-chaleur-dans-une-maison-mal-isolee-est-ce-le-bon-choix` | identique | `/post/installer-une-pompe-a-chaleur-dans-une-maison-mal-isolee-est-ce-le-bon-choix` | plan du site | page présente, titre identique |
| `/post/installer-une-pompe-a-chaleur-en-appartement-est-ce-possible-guide-complet` | identique | `/post/installer-une-pompe-a-chaleur-en-appartement-est-ce-possible-guide-complet` | plan du site | page présente, titre identique |
| `/post/integrer-la-recuperation-deau-de-pluie-dans-lhabitat-techniques-de-filtration-cuves-et-regles-sanitaires` | identique | `/post/integrer-la-recuperation-deau-de-pluie-dans-lhabitat-techniques-de-filtration-cuves-et-regles-sanitaires` | plan du site | page présente, titre identique |
| `/post/isolation-thermique-ete-et-hiver-quel-est-le-meilleur-materiau-pour-votre-maison` | identique | `/post/isolation-thermique-ete-et-hiver-quel-est-le-meilleur-materiau-pour-votre-maison` | plan du site | page présente, titre identique |
| `/post/isolation-thermique-pourquoi-elle-est-indispensable-ete-comme-hiver-et-quels-travaux-prioriser` | identique | `/post/isolation-thermique-pourquoi-elle-est-indispensable-ete-comme-hiver-et-quels-travaux-prioriser` | plan du site | page présente, titre identique |
| `/post/la-technologie-inverter-pour-pompes-a-chaleur-fonctionnement-avantages-et-couts` | identique | `/post/la-technologie-inverter-pour-pompes-a-chaleur-fonctionnement-avantages-et-couts` | plan du site | page présente, titre identique |
| `/post/lentretien-de-la-vmc-pourquoi-une-installation-non-entretenue-detruit-votre-qualite-dair-et-fait-exploser-votre-facture` | identique | `/post/lentretien-de-la-vmc-pourquoi-une-installation-non-entretenue-detruit-votre-qualite-dair-et-fait-exploser-votre-facture` | plan du site | page présente, titre identique |
| `/post/lerreur-que-tout-le-monde-fait-avec-sa-vmc-video` | identique | `/post/lerreur-que-tout-le-monde-fait-avec-sa-vmc-video` | plan du site | page présente, titre identique |
| `/post/les-differences-entre-les-pompes-a-chaleur-haute-et-basse-temperature` | identique | `/post/les-differences-entre-les-pompes-a-chaleur-haute-et-basse-temperature` | plan du site | page présente, titre identique |
| `/post/les-plus-grosses-erreurs-quand-on-fait-des-travaux-de-renovation-energetique` | identique | `/post/les-plus-grosses-erreurs-quand-on-fait-des-travaux-de-renovation-energetique` | plan du site | page présente, titre identique |
| `/post/les-pompes-a-chaleurs-sont-telles-vraiment-economique` | identique | `/post/les-pompes-a-chaleurs-sont-telles-vraiment-economique` | plan du site | page présente, titre identique |
| `/post/mon-systeme-de-chauffage-est-il-compatible-avec-une-pompe-a-chaleur-comment-verifier-et-adapter-son-installation` | identique | `/post/mon-systeme-de-chauffage-est-il-compatible-avec-une-pompe-a-chaleur-comment-verifier-et-adapter-son-installation` | plan du site | page présente, titre identique |
| `/post/optimisez-votre-confort-thermique-comparatif-des-meilleures-pompes-a-chaleur-et-climatisation-en-2025` | identique | `/post/optimisez-votre-confort-thermique-comparatif-des-meilleures-pompes-a-chaleur-et-climatisation-en-2025` | plan du site | page présente, titre identique |
| `/post/ou-installer-sa-climatisation-reversible-guide-complet-pour-optimiser-confort-et-performance` | identique | `/post/ou-installer-sa-climatisation-reversible-guide-complet-pour-optimiser-confort-et-performance` | plan du site | page présente, titre identique |
| `/post/ou-installer-sa-pompe-a-chaleur-pour-une-configuration-optimale-le-guide` | identique | `/post/ou-installer-sa-pompe-a-chaleur-pour-une-configuration-optimale-le-guide` | plan du site | page présente, titre identique |
| `/post/peut-on-chauffer-toute-la-france-au-bois-video` | identique | `/post/peut-on-chauffer-toute-la-france-au-bois-video` | export et CMS (publié le 1er septembre 2026), hors plan du site | page présente, titre identique |
| `/post/poele-a-granules-ou-pompe-a-chaleur-air-air-quel-systeme-choisir-pour-votre-logement` | identique | `/post/poele-a-granules-ou-pompe-a-chaleur-air-air-quel-systeme-choisir-pour-votre-logement` | plan du site | page présente, titre identique |
| `/post/pompe-a-chaleur-air-air-vs-air-eau-guide-complet-pour-faire-le-bon-choix` | identique | `/post/pompe-a-chaleur-air-air-vs-air-eau-guide-complet-pour-faire-le-bon-choix` | plan du site | page présente, titre identique |
| `/post/pompe-a-chaleur-air-eau-reversible-fonctionnement-avantages-et-couts-pour-un-confort-toute-lannee` | identique | `/post/pompe-a-chaleur-air-eau-reversible-fonctionnement-avantages-et-couts-pour-un-confort-toute-lannee` | plan du site | page présente, titre identique |
| `/post/pompe-a-chaleur-en-panne-10-problemes-frequents-et-solutions-pour-les-resoudre` | identique | `/post/pompe-a-chaleur-en-panne-10-problemes-frequents-et-solutions-pour-les-resoudre` | plan du site | page présente, titre identique |
| `/post/pompe-a-chaleur-est-elle-vraiment-adaptee-a-tous-les-logements` | identique | `/post/pompe-a-chaleur-est-elle-vraiment-adaptee-a-tous-les-logements` | plan du site | page présente, titre identique |
| `/post/pompe-a-chaleur-et-chauffe-eau-quelles-sont-les-meilleurs-solutions-pour-la-production-deau-chaude` | identique | `/post/pompe-a-chaleur-et-chauffe-eau-quelles-sont-les-meilleurs-solutions-pour-la-production-deau-chaude` | plan du site | page présente, titre identique |
| `/post/pompe-a-chaleur-et-location-droits-obligations-et-aides-pour-les-locataires-et-proprietaires` | identique | `/post/pompe-a-chaleur-et-location-droits-obligations-et-aides-pour-les-locataires-et-proprietaires` | plan du site | page présente, titre identique |
| `/post/pompe-a-chaleur-geothermique-tout-ce-que-vous-devez-savoir` | identique | `/post/pompe-a-chaleur-geothermique-tout-ce-que-vous-devez-savoir` | plan du site | page présente, titre identique |
| `/post/pompe-a-chaleur-haute-temperature-avantages-inconvenients-et-applications` | identique | `/post/pompe-a-chaleur-haute-temperature-avantages-inconvenients-et-applications` | plan du site | page présente, titre identique |
| `/post/pompe-a-chaleur-les-cas-ou-son-installation-est-deconseillee` | identique | `/post/pompe-a-chaleur-les-cas-ou-son-installation-est-deconseillee` | plan du site | page présente, titre identique |
| `/post/pompe-a-chaleur-ou-chaudiere-quel-systeme-choisir-pour-alimenter-un-plancher-chauffant-en-2025` | identique | `/post/pompe-a-chaleur-ou-chaudiere-quel-systeme-choisir-pour-alimenter-un-plancher-chauffant-en-2025` | plan du site | page présente, titre identique |
| `/post/pompe-a-chaleur-vs-chaudiere-a-biomasse-quel-systeme-choisir-pour-votre-maison` | identique | `/post/pompe-a-chaleur-vs-chaudiere-a-biomasse-quel-systeme-choisir-pour-votre-maison` | plan du site | page présente, titre identique |
| `/post/pompe-a-chaleur-vs-chaudiere-a-gaz-condensation-guide-complet-pour-faire-le-bon-choix` | identique | `/post/pompe-a-chaleur-vs-chaudiere-a-gaz-condensation-guide-complet-pour-faire-le-bon-choix` | plan du site | page présente, titre identique |
| `/post/pompe-a-chaleur-vs-radiateurs-electriques-quel-systeme-choisir` | identique | `/post/pompe-a-chaleur-vs-radiateurs-electriques-quel-systeme-choisir` | plan du site | page présente, titre identique |
| `/post/pompes-a-chaleur-pourquoi-tant-davis-negatifs-etat-de-la-situation` | identique | `/post/pompes-a-chaleur-pourquoi-tant-davis-negatifs-etat-de-la-situation` | plan du site | page présente, titre identique |
| `/post/pourquoi-il-est-indispensable-que-vous-installiez-une-vmc-chez-vous` | identique | `/post/pourquoi-il-est-indispensable-que-vous-installiez-une-vmc-chez-vous` | plan du site | page présente, titre identique |
| `/post/pourquoi-la-moisissure-sinstalle-chez-vous-et-comment-la-stopper-video` | identique | `/post/pourquoi-la-moisissure-sinstalle-chez-vous-et-comment-la-stopper-video` | plan du site | page présente, titre identique |
| `/post/pourquoi-la-vmc-est-le-parent-pauvre-de-la-renovation-energetique-et-pourquoi-il-faut-changer-de-paradigme` | identique | `/post/pourquoi-la-vmc-est-le-parent-pauvre-de-la-renovation-energetique-et-pourquoi-il-faut-changer-de-paradigme` | plan du site | page présente, titre identique |
| `/post/prix-du-kwh-quelle-energie-est-la-moins-chere-en-2026-video` | identique | `/post/prix-du-kwh-quelle-energie-est-la-moins-chere-en-2026-video` | plan du site | page présente, titre identique |
| `/post/prix-installation-dune-climatisation-reversible-en-2025-guide-complet-et-aides-financieres` | identique | `/post/prix-installation-dune-climatisation-reversible-en-2025-guide-complet-et-aides-financieres` | plan du site | page présente, titre identique |
| `/post/puits-canadien-et-puits-provencal-rafraichir-sa-maison-sans-climatisation-grace-au-sol` | identique | `/post/puits-canadien-et-puits-provencal-rafraichir-sa-maison-sans-climatisation-grace-au-sol` | plan du site | page présente, titre identique |
| `/post/quel-climatiseur-choisir-guide-complet` | identique | `/post/quel-climatiseur-choisir-guide-complet` | plan du site | page présente, titre identique |
| `/post/quel-systeme-de-chauffage-a-le-meilleur-rendement` | identique | `/post/quel-systeme-de-chauffage-a-le-meilleur-rendement` | export et CMS (publié le 1er septembre 2026), hors plan du site | page présente, titre identique |
| `/post/quel-systeme-de-chauffage-choisir-pour-une-maison-neuve-re2020` | identique | `/post/quel-systeme-de-chauffage-choisir-pour-une-maison-neuve-re2020` | plan du site | page présente, titre identique |
| `/post/quel-systeme-de-chauffage-choisir-pour-une-renovation` | identique | `/post/quel-systeme-de-chauffage-choisir-pour-une-renovation` | plan du site | page présente, titre identique |
| `/post/quel-systeme-de-chauffage-est-le-plus-rentable-comparatif-complet-sur-10-15-30-et-plus` | identique | `/post/quel-systeme-de-chauffage-est-le-plus-rentable-comparatif-complet-sur-10-15-30-et-plus` | plan du site | page présente, titre identique |
| `/post/quel-systeme-de-chauffage-pour-un-plancher-chauffant` | identique | `/post/quel-systeme-de-chauffage-pour-un-plancher-chauffant` | plan du site | page présente, titre identique |
| `/post/quel-type-de-pompe-chaleur-pour-chez-soi-guide-complet` | identique | `/post/quel-type-de-pompe-chaleur-pour-chez-soi-guide-complet` | plan du site | page présente, titre identique |
| `/post/quelle-place-prend-une-pompe-a-chaleur-ou-une-climatisation-dimensions-et-espace-necessaire-par-modele` | identique | `/post/quelle-place-prend-une-pompe-a-chaleur-ou-une-climatisation-dimensions-et-espace-necessaire-par-modele` | plan du site | page présente, titre identique |
| `/post/quelle-pompe-a-chaleur-hybride-choisir` | identique | `/post/quelle-pompe-a-chaleur-hybride-choisir` | plan du site | page présente, titre identique |
| `/post/quelles-demarches-avant-dinstaller-une-pompe-a-chaleur-guide-complet` | identique | `/post/quelles-demarches-avant-dinstaller-une-pompe-a-chaleur-guide-complet` | plan du site | page présente, titre identique |
| `/post/quelles-sont-les-regions-adaptees-aux-pompes-a-chaleur` | identique | `/post/quelles-sont-les-regions-adaptees-aux-pompes-a-chaleur` | plan du site | page présente, titre identique |
| `/post/quels-chauffages-dappoint-choisir-avec-une-pompe-a-chaleur-le-poele-est-il-la-meilleure-solution` | identique | `/post/quels-chauffages-dappoint-choisir-avec-une-pompe-a-chaleur-le-poele-est-il-la-meilleure-solution` | plan du site | page présente, titre identique |
| `/post/quels-radiateurs-sont-compatibles-avec-une-pompe-a-chaleur-air-eau` | identique | `/post/quels-radiateurs-sont-compatibles-avec-une-pompe-a-chaleur-air-eau` | plan du site | page présente, titre identique |
| `/post/quest-ce-que-le-cop-des-pompes-a-chaleur-guide-complet-pour-optimiser-votre-efficacite-energetique` | identique | `/post/quest-ce-que-le-cop-des-pompes-a-chaleur-guide-complet-pour-optimiser-votre-efficacite-energetique` | plan du site | page présente, titre identique |
| `/post/quest-ce-quune-pompe-a-chaleur-basse-temperature` | identique | `/post/quest-ce-quune-pompe-a-chaleur-basse-temperature` | plan du site | page présente, titre identique |
| `/post/rafraichir-une-maison-sans-surconsommer-la-strategie-combinee-de-larchitecture-passive-et-de-la-renovation` | identique | `/post/rafraichir-une-maison-sans-surconsommer-la-strategie-combinee-de-larchitecture-passive-et-de-la-renovation` | plan du site | page présente, titre identique |
| `/post/rafraichissement-dappartement-des-ecogestes-strategiques-a-la-pompe-a-chaleur-reversible` | identique | `/post/rafraichissement-dappartement-des-ecogestes-strategiques-a-la-pompe-a-chaleur-reversible` | plan du site | page présente, titre identique |
| `/post/renovation-energetique-la-methode-akelia-pour-diviser-vos-factures-par-cinq` | identique | `/post/renovation-energetique-la-methode-akelia-pour-diviser-vos-factures-par-cinq` | plan du site | page présente, titre identique |
| `/post/renovation-thermique-reussir-lite-et-les-ponts-thermiques` | identique | `/post/renovation-thermique-reussir-lite-et-les-ponts-thermiques` | plan du site | page présente, titre identique |
| `/post/rentabilite-des-pompes-a-chaleur-guide-complet-pour-maximiser-votre-retour-sur-investissement` | identique | `/post/rentabilite-des-pompes-a-chaleur-guide-complet-pour-maximiser-votre-retour-sur-investissement` | plan du site | page présente, titre identique |
| `/post/solaire-en-copropriete-le-guide-de-lautoconsommation-collective` | identique | `/post/solaire-en-copropriete-le-guide-de-lautoconsommation-collective` | plan du site | page présente, titre identique |
| `/post/stockage-photovoltaique-batterie-physique-vs-batterie-virtuelle-le-match-de-lautonomie-et-des-couts-caches` | identique | `/post/stockage-photovoltaique-batterie-physique-vs-batterie-virtuelle-le-match-de-lautonomie-et-des-couts-caches` | plan du site | page présente, titre identique |
| `/post/tout-comprendre-sur-laide-financiere-maprimerenov-et-comment-lobtenir` | identique | `/post/tout-comprendre-sur-laide-financiere-maprimerenov-et-comment-lobtenir` | plan du site | page présente, titre identique |
| `/post/tout-savoir-pour-obtenir-la-prime-de-renovation-certificats-deconomies-denergie-cee` | identique | `/post/tout-savoir-pour-obtenir-la-prime-de-renovation-certificats-deconomies-denergie-cee` | plan du site | page présente, titre identique |
| `/post/tout-savoir-sur-leco-pret-a-taux-zero-pour-financez-vos-travaux-de-renovation-energetique-en-2025` | identique | `/post/tout-savoir-sur-leco-pret-a-taux-zero-pour-financez-vos-travaux-de-renovation-energetique-en-2025` | plan du site | page présente, titre identique |
| `/post/tout-savoir-sur-les-controles-de-lanah-apres-travaux-de-renovation-energetique` | identique | `/post/tout-savoir-sur-les-controles-de-lanah-apres-travaux-de-renovation-energetique` | plan du site | page présente, titre identique |
| `/post/tout-savoir-sur-les-pompes-a-chaleur-hybrides-fonctionnement-avantages-et-installation` | identique | `/post/tout-savoir-sur-les-pompes-a-chaleur-hybrides-fonctionnement-avantages-et-installation` | plan du site | page présente, titre identique |
| `/post/travaux-de-renovation-energetique-dans-quel-ordre-les-effectuer-guide-complet` | identique | `/post/travaux-de-renovation-energetique-dans-quel-ordre-les-effectuer-guide-complet` | plan du site | page présente, titre identique |
| `/post/triple-vitrage-vs-double-vitrage-lequel-choisir-selon-lorientation-de-vos-fenetres` | identique | `/post/triple-vitrage-vs-double-vitrage-lequel-choisir-selon-lorientation-de-vos-fenetres` | plan du site | page présente, titre identique |
| `/post/v2l-v2h-v2g-comment-alimenter-votre-maison-avec-la-batterie-de-votre-voiture-electrique` | identique | `/post/v2l-v2h-v2g-comment-alimenter-votre-maison-avec-la-batterie-de-votre-voiture-electrique` | plan du site | page présente, titre identique |
| `/post/vagues-de-chaleur-en-milieu-urbain-comment-lutter-durablement-contre-lilot-de-chaleur` | identique | `/post/vagues-de-chaleur-en-milieu-urbain-comment-lutter-durablement-contre-lilot-de-chaleur` | plan du site | page présente, titre identique |
| `/post/voiture-electrique-et-photovoltaique-comment-creer-sa-propre-station-service-solaire` | identique | `/post/voiture-electrique-et-photovoltaique-comment-creer-sa-propre-station-service-solaire` | plan du site | page présente, titre identique |

## Redirections provisoires (décision d'Akelia, 21 octobre 2026)

Les 10 pages **/ville/…** et **/conseil-chauffage/bourdeaux** n'ont pas d'équivalent sur le nouveau site.
- **Sujet**, lu dans l'export : chaque page /ville est titrée « Installation pompe à chaleur & climatisation à <ville> » et traite à la fois des PAC air-eau et air-air, de la climatisation et des chauffe-eau. La page /conseil-chauffage vend une étude « chauffage et climatisation ». Aucune n'a de sujet unique : toutes sont redirigées vers **/devis**.
- **Provisoire** : ces pages seront recréées après la publication, et la redirection sera alors retirée.
- Les décomptes de mots par page (« pompe à chaleur » 22 fois, « climatisation » 13 à 16, « chauffe-eau » 10 ou 11, « air/air » 5 ou 6, « air/eau » 4 ou 5) sont dans `inventaire-charte.md`.

## Adresses liées dans l'export mais introuvables (statut inconnu)

Les dix pages `/ville/…` et un article lient ces quatre adresses, environ 40 fois chacune. Elles ne figurent ni dans le plan du site ni dans l'export. Je ne peux pas savoir si elles répondaient (le site est hors ligne).

| Adresse liée | Équivalent proposé, si elle a existé |
|---|---|
| `/installation-de-pompe-a-chaleur-air-eau` | `/solutions/pompe-a-chaleur-air-eau` |
| `/installation-de-pompe-a-chaleur-air-air-climatisation-reversible` | `/solutions/climatisation-reversible-pac-air-air` |
| `/installation-dun-chauffe-eau-thermodynamique` | `/solutions/chauffe-eau-thermodynamique` (page à écrire) |
| `/entretien-dune-pompe-a-chaleur-et-dune-climatisation-guide-complet` | `/post/comment-entretenir-sa-pompe-a-chaleur-guide-complet` |

## Adresses de l'export qui ne sont pas d'anciennes pages

- **Capturées « Not Found » par l'aspirateur** (le site les renvoyait déjà en 404) :
  - `/a-propos`, `/blog`, `/contact`, `/politique-de-confidentialite`, `/devis/nathan.boyer@akelia.fr` ;
  - les 103 adresses d'articles de `Données webflow/listeURL.txt` (fichiers `akelia_site_complet/post_*.html`), toutes « Not Found ».
  - Ces 103 adresses ne correspondent à aucun article du CMS : c'est une liste qui n'a jamais été en ligne.
  - Rien à rediriger. À noter :
    - `/blog` existe désormais sur le nouveau site ;
    - `/politique-de-confidentialite` n'existe ni sur l'ancien ni sur le nouveau site, ce qui est à vérifier avant la mise en ligne, puisque le site collecte des coordonnées (formulaire de devis).
- **Artefacts techniques**, qui ne sont pas des pages : `/_downloads` (index produit par l'aspirateur) et `/cdn-cgi/l/email-protection` (Cloudflare).
- **Collections du CMS sans page dans le plan du site** : « ville d'intervention » (108 communes), « Services » (`pac-aa`, `pac-ae`, `premium`), « Entreprises », « Marques », « Avis », « Auteurs », « Blog catégories ». Aucune page de ces collections n'apparaît dans le plan du site ni dans l'export : je les considère comme non publiées. Si l'une d'elles avait une page modèle, ses adresses manquent ici.
