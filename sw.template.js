/* Cache hors ligne. Fichier modèle : build.sh en tire sw.js avec la liste des fichiers et deux numéros de version.
   L'appli (page, recettes) passe par le réseau d'abord, pour recevoir les nouvelles recettes ; les photos restent
   en cache tant qu'elles ne changent pas, pour ne pas tout retélécharger à chaque nouvelle recette. */
const SHELL = 'recettes-app-__VERSION__', IMG = 'recettes-img-__IMGV__', FONTS = 'recettes-polices';
const SHELL_FILES = [__SHELL__];
const IMG_FILES = [__IMGS__];
self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(SHELL); await c.addAll(SHELL_FILES);
    const ic = await caches.open(IMG);
    await Promise.all(IMG_FILES.map(async f => { try { if (!(await ic.match(f))) await ic.add(f); } catch (err) {} }));
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keep = [SHELL, IMG, FONTS];
    for (const k of await caches.keys()) if (!keep.includes(k)) await caches.delete(k);
    await self.clients.claim();
  })());
});
const putIn = (name, req, res) => { if (res && res.ok) { const cp = res.clone(); caches.open(name).then(c => c.put(req, cp)); } return res; };
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    if (req.mode === 'navigate' || /\/$|\.html$|recettes\.js$|\.webmanifest$/.test(url.pathname)) {
      e.respondWith(fetch(req).then(r => putIn(SHELL, req, r)).catch(() => caches.match(req).then(r => r || caches.match('index.html'))));
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
