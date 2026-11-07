# Recettes de la maison

Application web de recettes, pensée pour le téléphone. Elle a des vraies photos des plats et des ingrédients, des quantités ajustables, un mode pas à pas avec les ingrédients de chaque étape, des minuteurs, des favoris et une liste de courses par rayon. L'écran reste allumé pendant la cuisson et, une fois installée, l'appli marche hors ligne.

## L'ouvrir

**Lien de l'application : https://chenano.github.io/recettes-maison/** (sans compte ni mot de passe). Sur l'iPhone : ouvre-la dans Safari, touche Partager (sous « … » sur les iOS récents), puis ajoute-la à l'écran d'accueil ; elle marche ensuite hors ligne.

- **Sur ce Mac, ou sur l'iPhone s'il est sur le même Wi-Fi** : lance `./lancer-en-local.sh`. L'adresse à taper sur l'iPhone s'affiche. Le serveur ne tourne que tant que la fenêtre est ouverte (Ctrl+C pour l'arrêter). En local (http), l'installation hors ligne et l'écran allumé ne sont pas disponibles.
- **En ligne** : le site est publié par GitHub Pages depuis la branche `main` du dépôt https://github.com/chenano/recettes-maison ; chaque envoi (push) met le site à jour en une à deux minutes.

## Ce que fait l'appli

- **Accueil** : recherche (plat, ingrédient, nom arabe), catégories avec photo (tajines, plats, poissons, soupes, salades, pains, douceurs, boissons, d'ailleurs), filtre « Vite fait » et rangée « Soir de fatigue ? Prêt en 30 min », recette du jour, carte « Reprendre la recette » quand une cuisson est en cours, favoris.
- **Recette** : grande photo, temps, niveau, nombre de personnes réglable dès 1 (toutes les quantités, y compris dans le texte des étapes, sont recalculées), onglets Ingrédients, Étapes, Secrets et Infos. Les ingrédients ont chacun leur photo. Un bouton les envoie dans la liste de courses.
- **Pas à pas** : une étape par écran, avec en haut les ingrédients de l'étape (photo et quantité) et, quand il y en a une, une vraie photo du geste (râper la tomate, étirer la pâte, cuire le malwi au feu de bois…). Les minuteurs sonnent et vibrent, un glissement passe à l'étape suivante, et l'écran reste allumé. À la fin, un écran « Bon appétit ».
- **Liste de courses** : articles rangés par rayon (légumes, herbes, boucherie, épices…), à cocher, à partager par message.
- **Mode sombre** automatique, selon le réglage du téléphone.

## Ajouter une recette

1. Demande-la à Claude. Il la recherche dans au moins trois sources, dont au moins deux marocaines (pour un plat d'ailleurs : des sources de son pays d'origine), puis une seconde recherche indépendante la contre-vérifie.
2. Le résultat brut va dans `recherche/<nom>.json`, et la contre-vérification dans `recherche/verification-<nom>.json`.
3. `python3 -I outils/integrer.py <nom>` écrit `recettes/<nom>.js`. Il ajoute la photo et ses crédits, applique les corrections de la contre-vérification, relie chaque ingrédient à sa photo et fixe la catégorie.
4. `./build.sh` régénère les miniatures (`img/min/`), `recettes.js`, `index.html` et `sw.js`.
5. `node outils/verifier.js` contrôle toutes les recettes. Il vérifie les champs, unités et minuteurs, les quantités reliées aux étapes, les photos d'ingrédients et les renvois entre recettes.

Format d'une recette : voir `recettes/double-cheeseburger-smash.js`. Dans le texte d'une étape, `{{id}}` affiche la quantité de l'ingrédient `id` (adaptée au nombre de parts), et `{{id:full}}` affiche la quantité suivie du nom. Le champ `canon` d'un ingrédient renvoie à sa photo dans `img/ing/banque.json`.

## Vérification des recettes

Chaque recette marocaine vient de plusieurs sources : cheffes et chefs marocains, médias et sites marocains, livres de référence. Une seconde recherche indépendante la contre-vérifie ensuite (`recherche/verification*.json`). Dans l'application, la rubrique « Comment la recette a été vérifiée » (onglet Infos) liste les choix faits entre les sources et ce qui n'a pas pu être confirmé.

## Photos

Les photos viennent de Wikimedia Commons et de Flickr (trouvées avec Openverse). Leurs licences sont libres (CC0, CC BY, CC BY-SA, domaine public) ou non commerciales (CC BY-NC, CC BY-NC-SA) : l'application est gratuite et sans publicité. Aucune image n'est générée par une IA. Chaque photo a été choisie à la main parmi plusieurs candidates. Les marques visibles sont recadrées hors de l'image. Quand une photo ne montre pas exactement la recette (une variante, un plat proche), son texte alternatif le dit.
- Plats : `img/`, crédits dans `img/credits.json`.
- Gestes des étapes : `img/etapes/`, crédits dans `img/etapes/credits.json`.
- Ingrédients : `img/ing/`, carrés de 240 px, crédits et rayons dans `img/ing/banque.json`.

Les crédits de chaque recette (plat et ingrédients) sont dans son onglet Infos.

## Fichiers

- `app.html` : l'application (source).
- `recettes/` : une recette par fichier.
- `index.html`, `recettes.js`, `sw.js`, `img/min/` : générés par `build.sh`.
- `manifest.webmanifest`, `icons/` : installation sur l'écran d'accueil.
- `recherche/` : résultats bruts des recherches et des contre-vérifications, avec leurs sources.
- `outils/` : intégration et contrôle des recettes.
