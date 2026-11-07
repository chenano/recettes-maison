#!/bin/bash
# Construit la version à héberger : miniatures (img/min), recettes.js (banque d'ingrédients + recettes), index.html et sw.js.
set -euo pipefail
cd "$(dirname "$0")"
shopt -s nullglob

# 1. Miniatures des photos de plats (accueil, listes), refaites seulement si la photo a changé
mkdir -p img/min
for f in img/*.jpg; do
  m="img/min/$(basename "$f")"
  if [ ! -f "$m" ] || [ "$f" -nt "$m" ]; then sips -Z 720 -s format jpeg -s formatOptions 70 "$f" --out "$m" >/dev/null; fi
done
for m in img/min/*.jpg; do [ -f "img/$(basename "$m")" ] || rm -f "$m"; done

# 2. recettes.js : banque des ingrédients (photos, rayons) puis toutes les recettes
{
  echo "/* Fichier généré par build.sh : modifier plutôt recettes/*.js et img/ing/banque.json */"
  if [ -f img/ing/banque.json ]; then printf 'window.INGREDIENTS = '; cat img/ing/banque.json; echo ';'; fi
  for f in recettes/*.js; do cat "$f"; echo; done
} > recettes.js

# 3. index.html
VERSION=$(date +%Y%m%d%H%M%S)
SITE="https://chenano.github.io/recettes-maison/"
{
  echo '<!doctype html>'
  echo '<html lang="fr">'
  echo '<head>'
  echo '<meta charset="utf-8">'
  echo '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
  echo '<meta name="description" content="Les vraies recettes marocaines, avec leurs secrets : pas à pas, minuteurs, liste de courses. Sans compte, même hors ligne.">'
  echo '<meta name="theme-color" content="#FAF6EF" media="(prefers-color-scheme: light)">'
  echo '<meta name="theme-color" content="#110F18" media="(prefers-color-scheme: dark)">'
  echo '<meta name="apple-mobile-web-app-capable" content="yes">'
  echo '<meta name="mobile-web-app-capable" content="yes">'
  echo '<meta name="apple-mobile-web-app-title" content="Recettes">'
  echo '<meta property="og:type" content="website">'
  echo '<meta property="og:title" content="Recettes de la maison">'
  echo '<meta property="og:description" content="Les vraies recettes marocaines, avec leurs secrets. Pas à pas, minuteurs compris.">'
  echo "<meta property=\"og:url\" content=\"$SITE\">"
  echo "<meta property=\"og:image\" content=\"${SITE}img/couscous.jpg\">"
  echo '<link rel="manifest" href="manifest.webmanifest">'
  echo '<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">'
  echo '<link rel="icon" type="image/png" href="icons/icon-192.png">'
  echo '<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}</style>'
  echo '</head>'
  echo '<body>'
  cat app.html
  echo '</body>'
  echo '</html>'
} > index.html

# 4. sw.js : l'appli (réseau d'abord) et les photos (gardées tant qu'elles ne changent pas)
SHELL_FILES=$( { echo "./"; echo "index.html"; echo "recettes.js"; echo "manifest.webmanifest"; for f in icons/*.png; do echo "$f"; done; } | sed 's/.*/"&"/' | paste -sd, - )
# installées d'avance : miniatures et photos d'ingrédients ; les grandes photos se gardent dès qu'on ouvre la recette
PRE=(img/min/*.jpg img/ing/*.jpg)
IMGS=(img/*.jpg img/etapes/*.jpg "${PRE[@]}")
IMG_FILES=$(printf '%s\n' "${PRE[@]}" | sed 's/.*/"&"/' | paste -sd, - )
IMGV=$(cat "${IMGS[@]}" | md5 -q | cut -c1-10)
sed "s/__VERSION__/$VERSION/; s/__IMGV__/$IMGV/; s|__SHELL__|$SHELL_FILES|; s|__IMGS__|$IMG_FILES|" sw.template.js > sw.js
echo "OK : $(ls recettes/*.js | wc -l | tr -d ' ') recette(s), ${#IMGS[@]} photo(s), index.html, recettes.js, sw.js (version $VERSION, photos $IMGV)"
