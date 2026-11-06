# Recettes de la maison

Application web de recettes, pensée pour le téléphone : quantités ajustables, cases à cocher, minuteurs, mode pas à pas, écran qui reste allumé, et fonctionnement hors ligne une fois installée.

## L'ouvrir

**Lien de l'application : https://chenano.github.io/recettes-maison/** (sans compte ni mot de passe). Sur l'iPhone : l'ouvrir dans Safari, puis Partager → « Sur l'écran d'accueil » ; elle marche ensuite hors ligne.

- **Sur ce Mac, ou sur l'iPhone s'il est sur le même Wi-Fi** : lance `./lancer-en-local.sh`. L'adresse à taper sur l'iPhone s'affiche. Le serveur ne tourne que tant que la fenêtre est ouverte (Ctrl+C pour l'arrêter). En local (http), l'installation hors ligne et l'écran allumé ne sont pas disponibles.
- **En ligne** : le site est publié par GitHub Pages depuis la branche `main` du dépôt https://github.com/chenano/recettes-maison ; chaque envoi (push) met le site à jour en une à deux minutes.

## Ajouter une recette

1. Demande-la à Claude.
2. Elle s'ajoute dans `recettes/<nom-de-la-recette>.js`, avec sa photo dans `img/` et ses crédits.
3. `./build.sh` régénère `recettes.js`, `index.html` et `sw.js`.
4. `node outils/verifier.js` contrôle toutes les recettes : champs, unités, minuteurs, et quantités reliées aux étapes.

Format d'une recette : voir `recettes/double-cheeseburger-smash.js`. Dans le texte d'une étape, `{{id}}` affiche la quantité de l'ingrédient `id` (adaptée au nombre de personnes), et `{{id:full}}` affiche la quantité suivie du nom.

## Vérification des recettes

Chaque recette marocaine a été rédigée à partir de 13 à 20 sources (cheffes et chefs marocains, médias et sites marocains, Royal Mansour, fiche du ministère de la Culture pour le couscous…), puis contre-vérifiée par une seconde recherche indépendante (`recherche/verification.json`) ; ses corrections sont appliquées par `outils/integrer.py`. Dans l'application, la section « Comment la recette a été vérifiée » de chaque recette liste les choix faits entre sources et ce qui n'a pas pu être confirmé.

## Photos

Toutes les photos viennent de Wikimedia Commons, sous licences libres (CC0, CC BY, CC BY-SA). L'auteur, la licence et les retouches (recadrage, réduction) sont indiqués sur chaque recette et dans `img/credits.json`.

## Fichiers

- `app.html` : l'application (source).
- `recettes/` : une recette par fichier.
- `index.html`, `recettes.js`, `sw.js` : générés par `build.sh`.
- `manifest.webmanifest`, `icons/` : installation sur l'écran d'accueil.
- `recherche/` : résultats bruts de la recherche des recettes, avec leurs sources.
