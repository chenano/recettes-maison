/* Cache hors ligne. Fichier modèle : build.sh en tire sw.js avec la liste des fichiers et trois numéros de version.
   L'appli (page, recettes, textes de l'interface) passe par le réseau d'abord, pour recevoir les nouvelles recettes ;
   les photos restent en cache tant qu'elles ne changent pas, pour ne pas tout retélécharger à chaque nouvelle recette ;
   la traduction d'une langue (i18n/en.js, ar.js, ru.js) n'est gardée que si on l'a déjà utilisée, et reste à jour. */
const SHELL = 'recettes-app-__VERSION__', IMG = 'recettes-img-__IMGV__', FONTS = 'recettes-polices', LANGC = 'recettes-langues', I18NV = '__I18NV__';
const SHELL_FILES = [__SHELL__];
const IMG_FILES = [__IMGS__];
const RX_LANG = /\/i18n\/(en|ar|ru)\.js$/;
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(SHELL); await c.addAll(SHELL_FILES);
    const ic = await caches.open(IMG);
    await Promise.all(IMG_FILES.map(async f => { try { if (!(await ic.match(f))) await ic.add(f); } catch (err) {} }));
    // langues déjà utilisées sur cet appareil : on télécharge leur nouvelle version, pour qu'elles restent disponibles hors ligne
    const lc = await caches.open(LANGC);
    const used = [...new Set((await lc.keys()).map(k => new URL(k.url).pathname).filter(p => RX_LANG.test(p)))];
    await Promise.all(used.map(async p => { try { await lc.add(`i18n/${p.split('/').pop()}?v=${I18NV}`); } catch (err) {} }));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keep = [SHELL, IMG, FONTS, LANGC];
    for (const k of await caches.keys()) if (!keep.includes(k)) await caches.delete(k);
    // anciennes versions d'une traduction : supprimées seulement quand la nouvelle est là
    const lc = await caches.open(LANGC), keys = await lc.keys();
    const fresh = new Set(keys.filter(k => new URL(k.url).searchParams.get('v') === I18NV).map(k => new URL(k.url).pathname));
    for (const k of keys) { const u = new URL(k.url); if (u.searchParams.get('v') !== I18NV && fresh.has(u.pathname)) await lc.delete(k); }
    await self.clients.claim();
  })());
});
const putIn = (name, req, res) => { if (res && res.ok) { const cp = res.clone(); caches.open(name).then(c => c.put(req, cp)); } return res; };
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    if (RX_LANG.test(url.pathname)) {
      e.respondWith(fetch(req).then(r => putIn(LANGC, req, r))
        .catch(() => caches.open(LANGC).then(c => c.match(req).then(r => r || c.match(req, { ignoreSearch: true }))))
        .then(r => r || Response.error()));
    } else if (req.mode === 'navigate' || /\/$|\.html$|recettes\.js$|interface\.js$|\.webmanifest$/.test(url.pathname)) {
      // les scripts portent leur version dans l'adresse (?v=…) : hors ligne, on prend la copie gardée, quelle que soit sa version
      e.respondWith(fetch(req).then(r => putIn(SHELL, req, r)).catch(() => caches.match(req, { ignoreSearch: true })
        .then(r => r || (req.mode === 'navigate' ? caches.match('index.html') : null)).then(r => r || Response.error())));
    } else if (/\.(jpe?g|png|webp)$/i.test(url.pathname)) {
      e.respondWith(caches.match(req).then(r => r || fetch(req).then(r2 => putIn(IMG, req, r2))));
    } else {
      e.respondWith(caches.match(req).then(r => r || fetch(req)));
    }
    return;
  }
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.open(FONTS).then(c => c.match(req).then(r => r || fetch(req).then(r2 => { if (r2.ok || r2.type === 'opaque') c.put(req, r2.clone()); return r2; }))));
  }
});
