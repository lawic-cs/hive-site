# Hive · site de démonstration (MVP KEDGE Marseille)

Site statique tiré des maquettes Hive (version téléphone et version ordinateur).
Il ne demande ni installation ni serveur.

## Ouvrir le site

Double-clique sur `index.html`. Le site s'ouvre dans ton navigateur.

- Sur ordinateur (fenêtre de 1024 px ou plus), la navigation est dans la barre latérale.
- Sur téléphone ou fenêtre étroite, elle passe en barre du bas.
- Pour voir la version téléphone sur ordinateur : clic droit, « Inspecter », puis l'icône téléphone.

Les polices Outfit et Inter viennent de Google Fonts. Hors connexion, le site utilise les polices du système.

## Les pages

| Fichier | Partie du MVP | Ce qu'on peut faire |
|---|---|---|
| `index.html` | 1 · Logements | Annonces réelles de TNL Provence Immobilier et exemples fictifs, onglets « Disponibles » / « Se libèrent bientôt », filtres, tri (prix, trajet), recherche, carte (sur ordinateur) |
| `logement.html?id=…` | 1 · Fiche logement | Photos, ce que tu paies (loyer, charges, honoraires, état des lieux, dépôt), DPE et GES, équipements, avis d'élèves, « Candidater avec mon dossier », lien vers l'annonce de l'agence |
| `marche.html` | 2 · Marché entre élèves | Catégories (dont Billets), filtre par tags cumulables, mise en vente avec tags, revente de places de concert encadrée, pack logement |
| `parcours.html` | 3 · Mon parcours | Années L3, M1, césure P1 et P2, M2, jusqu'au premier emploi ; années terminées figées ; 3 options par période (haut, cible, sécurité) ; changement de métier M&A ou trading en gardant les acquis ; objectifs du semestre (les 3 prioritaires non faits, puis la liste complète avec ceux déjà faits) ; entrée en L3 ou en M1 ; échelle d'accès ; « Stage signé ? » |
| `explorer.html` | 3 · Catalogue | Filtré selon le métier visé ; filtres type, prix, format, « Fait rencontrer des pros », ajout au plan |
| `investir.html` | 4 · Découvrir l'investissement | 5 modules d'initiation, partenaires sélectionnés, mention de risque |

Le bouton « Moi » et certaines actions affichent un message « bientôt » : ce sont les écrans pas encore maquettés.

## Modifier le contenu

- **Textes des en-têtes** : directement dans chaque fichier `.html`.
- **Logements, objets, parcours, catalogue, partenaires** : dans `assets/js/data.js`. Ajouter un logement = copier un bloc `{ id: …, … }` et changer les valeurs. L'`id` sert dans l'adresse de la fiche (`logement.html?id=paradis`).
- **Parcours** : objet `parcours` de `assets/js/data.js` : expériences figées (`experiences`), années, et pour chaque métier (`ma`, `trading`) l'échelle d'accès, les 3 options par période, les acquis utiles, les objectifs du semestre (`objectifs`, par ordre de priorité) et les dates. Les objectifs déjà faits sont dans `objectifsFaits`. Pour ajouter un métier, copier le bloc `trading` et ajouter une option dans `parcours.html`.
- **Annonces d'agence** : en tête de la liste `logements` de `assets/js/data.js`, avec `agence: "tnl"`. Les photos sont chargées depuis le site de l'agence (connexion internet nécessaire). Si une photo ne charge plus, une image provisoire la remplace. Pour retirer les exemples fictifs, mettre `afficherExemples: false`.
- **Annonces du marché et leurs tags** : liste `objets` de `assets/js/data.js` (champ `tags`). Les tags proposés à la mise en vente sont dans `tagsProposes`. Un billet a en plus `date` (AAAA-MM-JJ), `prixAchat` et `places`.
- **Couleurs et polices** : variables en haut de `assets/css/hive.css` (charte V2, thème clair).
- **Photos** : dans `assets/img/`. Les deux photos actuelles sont des images provisoires en basse résolution, à remplacer par les vraies photos des logements.

## Ce qui est mémorisé

Les annonces que tu publies, les cases cochées, le niveau d'objectif, le stage ajouté, les modules terminés, les candidatures et le plan d'orientation sont gardés dans le navigateur (stockage local). Rien n'est envoyé nulle part. Pour tout remettre à zéro : vider les données du site dans le navigateur.

## À savoir avant de le montrer

- Le site ne porte aucune mention de démonstration : il sert de maquette à montrer aux élèves.

- **Toutes les données sont fictives** : logements, prix, avis, vendeurs, dates. Les noms entre crochets (`[Partenaire formation]`, `[Banque en ligne]`, `[Prix]`…) restent à remplacer.
- **Ce n'est pas encore une application** : pas de comptes, pas de base de données, pas d'envoi réel de dossier. Pour les premiers design partners, les vraies inscriptions passent par les formulaires Tally.
- **Avant de mettre en ligne** les parties logement et investissement, faire valider le cadre juridique (carte T / loi Hoguet pour être payé par les bailleurs, statut d'intermédiaire ORIAS pour présenter des partenaires financiers).

## Règles de la revente de billets (dans le site)

- Prix par place au plus égal au prix d'achat : le formulaire refuse un prix plus élevé.
- 2 annonces de billets au plus par élève, pour rester une revente occasionnelle.
- Billet nominatif : transfert uniquement par la billetterie officielle de l'organisateur.
- L'annonce disparaît après la date de l'événement.

Ces règles limitent le risque, mais une plateforme qui permet la revente de billets de façon habituelle sans l'autorisation des organisateurs reste exposée (article 313-6-2 du code pénal) : à faire valider avec l'avocat.

## Structure

```
Hive-site/
├── index.html          Logements
├── logement.html       Fiche d'un logement
├── marche.html         Marché entre élèves
├── parcours.html       Mon orientation
├── explorer.html       Catalogue du parcours
├── investir.html       Découvrir l'investissement
├── README.md
└── assets/
    ├── css/hive.css    Styles (téléphone d'abord, ordinateur à partir de 1024 px)
    ├── js/data.js      Données de démonstration
    ├── js/app.js       Navigation, listes et interactions
    └── img/            Logo et photos provisoires
```
