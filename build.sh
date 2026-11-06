#!/bin/bash
# Construit la version à héberger : recettes.js (toutes les recettes), index.html et sw.js.
set -euo pipefail
cd "$(dirname "$0")"
{ echo "/* Fichier généré par build.sh : modifier plutôt recettes/*.js */"; for f in recettes/*.js; do cat "$f"; echo; done; } > recettes.js
VERSION=$(date +%Y%m%d%H%M%S)
{
  echo '<!doctype html>'
  echo '<html lang="fr">'
  echo '<head>'
  echo '<meta charset="utf-8">'
  echo '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
  echo '<meta name="theme-color" content="#2B49B8">'
  echo '<meta name="apple-mobile-web-app-capable" content="yes">'
  echo '<meta name="mobile-web-app-capable" content="yes">'
  echo '<meta name="apple-mobile-web-app-title" content="Recettes">'
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
FILES=$( { echo "./"; echo "index.html"; echo "recettes.js"; echo "manifest.webmanifest"; ls img/*.jpg icons/*.png; } | sed 's/.*/"&"/' | paste -sd, - )
sed "s/__VERSION__/$VERSION/; s|__FILES__|$FILES|" sw.template.js > sw.js
echo "OK : $(ls recettes/*.js | wc -l | tr -d ' ') recette(s), index.html, recettes.js, sw.js (version $VERSION)"
