/* Cache hors ligne. Fichier modèle : build.sh en tire sw.js avec la liste des fichiers et deux numéros de version.
   L'appli (page, recettes) passe par le réseau d'abord, pour recevoir les nouvelles recettes ; les photos restent
   en cache tant qu'elles ne changent pas, pour ne pas tout retélécharger à chaque nouvelle recette. */
const SHELL = 'recettes-app-20261107010305', IMG = 'recettes-img-4612dc3b08', FONTS = 'recettes-polices';
const SHELL_FILES = ["./","index.html","recettes.js","manifest.webmanifest","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png"];
const IMG_FILES = ["img/min/baghrir.jpg","img/min/bissara.jpg","img/min/burger.jpg","img/min/cake-marocain.jpg","img/min/chakchouka.jpg","img/min/couscous.jpg","img/min/dchicha.jpg","img/min/harcha.jpg","img/min/harira.jpg","img/min/kefta.jpg","img/min/khobz.jpg","img/min/lentilles.jpg","img/min/loubia.jpg","img/min/malwi.jpg","img/min/maqarouna.jpg","img/min/msemen-cuisson.jpg","img/min/msemen-etaler.jpg","img/min/msemen.jpg","img/min/omelette.jpg","img/min/pastilla.jpg","img/min/pates-thon-tomate.jpg","img/min/poisson-frit.jpg","img/min/rfissa.jpg","img/min/rghayef.jpg","img/min/riz-saute-oeufs.jpg","img/min/salade-pois-chiches-thon.jpg","img/min/sandwich-poisson.jpg","img/min/soupe-lentilles-corail.jpg","img/min/spaghetti-aglio-olio.jpg","img/min/tajine-poisson.jpg","img/min/tajine-poulet.jpg","img/min/tajine-pruneaux.jpg","img/min/the-menthe.jpg","img/min/zaalouk.jpg","img/ing/agneau.jpg","img/ing/ail.jpg","img/ing/amandes.jpg","img/ing/anis.jpg","img/ing/aubergine.jpg","img/ing/basilic.jpg","img/ing/beurre.jpg","img/ing/boeuf-hache.jpg","img/ing/boeuf.jpg","img/ing/cannelle.jpg","img/ing/carotte.jpg","img/ing/celeri.jpg","img/ing/cerfeuil.jpg","img/ing/cheddar.jpg","img/ing/chou.jpg","img/ing/ciboulette.jpg","img/ing/citron-confit.jpg","img/ing/citron.jpg","img/ing/concentre-tomate.jpg","img/ing/confiture.jpg","img/ing/coriandre.jpg","img/ing/cornichons.jpg","img/ing/courge.jpg","img/ing/courgette.jpg","img/ing/couscous.jpg","img/ing/cumin.jpg","img/ing/curcuma.jpg","img/ing/eau.jpg","img/ing/estragon.jpg","img/ing/farine.jpg","img/ing/fenugrec.jpg","img/ing/feves-seches.jpg","img/ing/fleur-oranger.jpg","img/ing/fromage-rape.jpg","img/ing/gingembre.jpg","img/ing/haricots-blancs.jpg","img/ing/harissa.jpg","img/ing/huile-olive.jpg","img/ing/huile.jpg","img/ing/jben.jpg","img/ing/ketchup.jpg","img/ing/khlii.jpg","img/ing/khobz.jpg","img/ing/lait.jpg","img/ing/laitue.jpg","img/ing/lentilles-corail.jpg","img/ing/lentilles.jpg","img/ing/levure-boulangere.jpg","img/ing/levure-chimique.jpg","img/ing/macaronis.jpg","img/ing/mayonnaise.jpg","img/ing/menthe.jpg","img/ing/merlan.jpg","img/ing/miel.jpg","img/ing/moutarde.jpg","img/ing/msemen.jpg","img/ing/navet.jpg","img/ing/nigelle.jpg","img/ing/noix-de-muscade.jpg","img/ing/oeuf.jpg","img/ing/oignon-rouge.jpg","img/ing/oignon-vert.jpg","img/ing/oignon.jpg","img/ing/olives.jpg","img/ing/orge-concassee.jpg","img/ing/origan.jpg","img/ing/pain-burger.jpg","img/ing/paprika.jpg","img/ing/persil.jpg","img/ing/piment-cayenne.jpg","img/ing/piment-vert.jpg","img/ing/pois-chiches.jpg","img/ing/poisson.jpg","img/ing/poivre.jpg","img/ing/poivron-vert.jpg","img/ing/poivron.jpg","img/ing/pomme-de-terre.jpg","img/ing/poulet.jpg","img/ing/pruneaux.jpg","img/ing/ras-el-hanout.jpg","img/ing/riz.jpg","img/ing/safran.jpg","img/ing/sardine.jpg","img/ing/sel.jpg","img/ing/semoule.jpg","img/ing/sesame.jpg","img/ing/smen.jpg","img/ing/spaghetti.jpg","img/ing/sucre-glace.jpg","img/ing/sucre-vanille.jpg","img/ing/sucre.jpg","img/ing/the-vert.jpg","img/ing/thon.jpg","img/ing/thym.jpg","img/ing/tomate.jpg","img/ing/tomates-pelees.jpg","img/ing/vermicelles.jpg"];
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
