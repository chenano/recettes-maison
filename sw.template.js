/* Cache hors ligne. Fichier modèle : build.sh en tire sw.js avec la liste des fichiers et un numéro de version. */
const CACHE = 'recettes-__VERSION__';
const FILES = [__FILES__];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === self.location.origin) {
    const fresh = req.mode === 'navigate' || /\/$|\.html$|recettes\.js$/.test(url.pathname);
    if (fresh) {
      /* page et recettes : réseau d'abord (pour recevoir les nouvelles recettes), cache si hors ligne */
      e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r; })
        .catch(() => caches.match(req).then(r => r || caches.match('index.html'))));
    } else {
      e.respondWith(caches.match(req).then(r => r || fetch(req).then(r2 => { const cp = r2.clone(); caches.open(CACHE).then(c => c.put(req, cp)); return r2; })));
    }
    return;
  }
  if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.open(CACHE).then(c => c.match(req).then(r => r || fetch(req).then(r2 => { c.put(req, r2.clone()); return r2; }))));
  }
});
