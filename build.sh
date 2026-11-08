#!/bin/bash
# Construit la version à héberger : miniatures (img/min), traductions (i18n/<langue>.js), recettes.js, index.html et sw.js.
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

# 2. Traductions des recettes (anglais, arabe, russe) : seulement les textes encore à jour par rapport au français
python3 -I outils/traduction.py construire

# 3. recettes.js : banque d'ingrédients, crédits des photos, puis toutes les recettes
{
  echo "/* Fichier généré par build.sh : modifier plutôt recettes/*.js et img/ing/banque.json */"
  if [ -f img/ing/banque.json ]; then printf 'window.INGREDIENTS = '; cat img/ing/banque.json; echo ';'; fi
  python3 -I outils/photos.py
  for f in recettes/*.js; do cat "$f"; echo; done
} > recettes.js

# 4. index.html
VERSION=$(date +%Y%m%d%H%M%S)
I18NV=$(cat i18n/*.js | md5 -q | cut -c1-10)
SITE="https://chenano.github.io/recettes-maison/"
{
  echo '<!doctype html>'
  echo '<html lang="fr">'
  echo '<head>'
  echo '<meta charset="utf-8">'
  echo '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
  echo '<meta name="description" content="Les vraies recettes marocaines, avec leurs secrets : pas à pas, minuteurs, liste de courses. En français, anglais, arabe et russe. Sans compte, même hors ligne.">'
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
  # langue choisie avant le premier affichage : même règle que initialLang() dans app.html ; la page reste cachée
  # (au plus 6 s) le temps de charger la traduction, pour ne pas montrer d'abord le français
  cat <<'EOS'
<script>
(function () {
  try {
    var d = document.documentElement, L = ['fr', 'en', 'ar', 'ru'], l = null;
    var m = location.search.match(/[?&]lang=([a-z]{2})/);
    if (m && L.indexOf(m[1]) >= 0) l = m[1];
    if (!l) { try { l = JSON.parse(localStorage.getItem('recettes-maison-langue')); } catch (e) {} if (L.indexOf(l) < 0) l = null; }
    if (!l) {
      var used = ['recettes-maison-v1', 'recettes-maison-favoris', 'recettes-maison-courses', 'recettes-maison-ui'].some(function (k) { return localStorage.getItem(k) != null; });
      if (used) l = 'fr';
      else {
        var n = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
        for (var i = 0; i < n.length && !l; i++) { var c = String(n[i]).slice(0, 2).toLowerCase(); if (L.indexOf(c) >= 0) l = c; }
      }
    }
    if (l && l !== 'fr') { d.lang = l; d.dir = l === 'ar' ? 'rtl' : 'ltr'; d.className += ' i18n-wait'; setTimeout(function () { d.classList.remove('i18n-wait'); }, 6000); }
  } catch (e) {}
})();
</script>
EOS
  echo '<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}.i18n-wait body{visibility:hidden}</style>'
  echo '</head>'
  echo '<body>'
  sed "s/__I18NV__/$I18NV/g; s/__VERSION__/$VERSION/g" app.html
  echo '</body>'
  echo '</html>'
} > index.html

# 5. sw.js : l'appli (réseau d'abord), les photos (gardées tant qu'elles ne changent pas) et les traductions déjà utilisées
SHELL_FILES=$( { echo "./"; echo "index.html"; echo "recettes.js"; echo "i18n/interface.js"; echo "manifest.webmanifest"; for f in icons/*.png; do echo "$f"; done; } | sed 's/.*/"&"/' | paste -sd, - )
# installées d'avance : miniatures et photos d'ingrédients ; les grandes photos se gardent dès qu'on ouvre la recette
PRE=(img/min/*.jpg img/ing/*.jpg)
IMGS=(img/*.jpg img/etapes/*.jpg "${PRE[@]}")
IMG_FILES=$(printf '%s\n' "${PRE[@]}" | sed 's/.*/"&"/' | paste -sd, - )
IMGV=$(cat "${IMGS[@]}" | md5 -q | cut -c1-10)
sed "s/__VERSION__/$VERSION/; s/__IMGV__/$IMGV/; s/__I18NV__/$I18NV/; s|__SHELL__|$SHELL_FILES|; s|__IMGS__|$IMG_FILES|" sw.template.js > sw.js
echo "OK : $(ls recettes/*.js | wc -l | tr -d ' ') recette(s), ${#IMGS[@]} photo(s), index.html, recettes.js, i18n, sw.js (version $VERSION, photos $IMGV, langues $I18NV)"
