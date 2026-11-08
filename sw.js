/* Cache hors ligne. Fichier modèle : build.sh en tire sw.js avec la liste des fichiers et trois numéros de version.
   L'appli (page, recettes, textes de l'interface) passe par le réseau d'abord, pour recevoir les nouvelles recettes ;
   les photos restent en cache tant qu'elles ne changent pas, pour ne pas tout retélécharger à chaque nouvelle recette ;
   la traduction d'une langue (i18n/en.js, ar.js, ru.js) n'est gardée que si on l'a déjà utilisée, et reste à jour. */
const SHELL = 'recettes-app-20261108134911', IMG = 'recettes-img-1b0d8c03fa', FONTS = 'recettes-polices', LANGC = 'recettes-langues', I18NV = 'cc505f2fac';
const SHELL_FILES = ["./","index.html","recettes.js","i18n/interface.js","manifest.webmanifest","icons/apple-touch-icon.png","icons/icon-192.png","icons/icon-512.png"];
const IMG_FILES = ["img/min/baghrir.jpg","img/min/batbout.jpg","img/min/bid-maticha.jpg","img/min/biryani-poulet.jpg","img/min/bissara.jpg","img/min/briouates-kefta.jpg","img/min/burger.jpg","img/min/butter-chicken.jpg","img/min/cake-marocain.jpg","img/min/chakchouka.jpg","img/min/couscous.jpg","img/min/crepes.jpg","img/min/dchicha.jpg","img/min/escalopes-poulet-panees.jpg","img/min/falafel.jpg","img/min/frites.jpg","img/min/ghriba.jpg","img/min/gratin-dauphinois.jpg","img/min/hachis-parmentier.jpg","img/min/harcha.jpg","img/min/harira.jpg","img/min/houmous.jpg","img/min/kefta-poele.jpg","img/min/kefta.jpg","img/min/khobz.jpg","img/min/lentilles.jpg","img/min/loubia.jpg","img/min/maakouda.jpg","img/min/malwi.jpg","img/min/maqarouna.jpg","img/min/mrouzia.jpg","img/min/msemen-cuisson.jpg","img/min/msemen-etaler.jpg","img/min/msemen.jpg","img/min/omelette.jpg","img/min/pancakes.jpg","img/min/pastilla.jpg","img/min/pates-thon-tomate.jpg","img/min/poisson-frit.jpg","img/min/poulet-creme-champignons.jpg","img/min/rfissa.jpg","img/min/rghayef.jpg","img/min/riz-saute-oeufs.jpg","img/min/salade-marocaine.jpg","img/min/salade-pois-chiches-thon.jpg","img/min/sandwich-poisson.jpg","img/min/seffa-medfouna.jpg","img/min/sellou.jpg","img/min/sfenj.jpg","img/min/shawarma-poulet.jpg","img/min/soupe-lentilles-corail.jpg","img/min/spaghetti-aglio-olio.jpg","img/min/taboule.jpg","img/min/tajine-petits-pois-artichauts.jpg","img/min/tajine-poisson.jpg","img/min/tajine-poulet.jpg","img/min/tajine-pruneaux.jpg","img/min/taktouka.jpg","img/min/the-menthe.jpg","img/min/tortilla-espagnole.jpg","img/min/zaalouk.jpg","img/ing/agneau.jpg","img/ing/ail.jpg","img/ing/amandes.jpg","img/ing/anis.jpg","img/ing/artichaut.jpg","img/ing/aubergine.jpg","img/ing/badiane.jpg","img/ing/basilic.jpg","img/ing/beurre.jpg","img/ing/bicarbonate.jpg","img/ing/blanc-poulet.jpg","img/ing/boeuf-hache.jpg","img/ing/boeuf.jpg","img/ing/bouillon-volaille.jpg","img/ing/boulgour.jpg","img/ing/cannelle.jpg","img/ing/cardamome.jpg","img/ing/carotte.jpg","img/ing/carvi.jpg","img/ing/celeri.jpg","img/ing/cerfeuil.jpg","img/ing/champignons.jpg","img/ing/chapelure.jpg","img/ing/cheddar.jpg","img/ing/chou.jpg","img/ing/ciboulette.jpg","img/ing/citron-confit.jpg","img/ing/citron.jpg","img/ing/clou-girofle.jpg","img/ing/concentre-tomate.jpg","img/ing/concombre.jpg","img/ing/confiture.jpg","img/ing/coriandre.jpg","img/ing/cornichons.jpg","img/ing/courge.jpg","img/ing/courgette.jpg","img/ing/couscous.jpg","img/ing/creme-fraiche.jpg","img/ing/cumin.jpg","img/ing/curcuma.jpg","img/ing/eau.jpg","img/ing/estragon.jpg","img/ing/farine.jpg","img/ing/fenugrec.jpg","img/ing/feves-seches.jpg","img/ing/fleur-oranger.jpg","img/ing/fromage-rape.jpg","img/ing/garam-masala.jpg","img/ing/ghee.jpg","img/ing/gingembre.jpg","img/ing/haricots-blancs.jpg","img/ing/harissa.jpg","img/ing/huile-olive.jpg","img/ing/huile.jpg","img/ing/jben.jpg","img/ing/kasuri-methi.jpg","img/ing/ketchup.jpg","img/ing/khlii.jpg","img/ing/khobz.jpg","img/ing/lait.jpg","img/ing/laitue.jpg","img/ing/laurier.jpg","img/ing/lentilles-corail.jpg","img/ing/lentilles.jpg","img/ing/levure-boulangere.jpg","img/ing/levure-chimique.jpg","img/ing/macaronis.jpg","img/ing/mastic.jpg","img/ing/mayonnaise.jpg","img/ing/menthe.jpg","img/ing/merlan.jpg","img/ing/miel.jpg","img/ing/moutarde.jpg","img/ing/msemen.jpg","img/ing/navet.jpg","img/ing/nigelle.jpg","img/ing/noix-cajou.jpg","img/ing/noix-de-muscade.jpg","img/ing/oeuf.jpg","img/ing/oignon-rouge.jpg","img/ing/oignon-vert.jpg","img/ing/oignon.jpg","img/ing/olives.jpg","img/ing/orge-concassee.jpg","img/ing/origan.jpg","img/ing/pain-burger.jpg","img/ing/pain-pita.jpg","img/ing/paprika.jpg","img/ing/pate-ail-gingembre.jpg","img/ing/persil.jpg","img/ing/petits-pois.jpg","img/ing/piment-cachemire.jpg","img/ing/piment-cayenne.jpg","img/ing/piment-jamaique.jpg","img/ing/piment-vert.jpg","img/ing/pois-chiches.jpg","img/ing/poisson.jpg","img/ing/poivre.jpg","img/ing/poivron-vert.jpg","img/ing/poivron.jpg","img/ing/pomme-de-terre.jpg","img/ing/poulet.jpg","img/ing/pruneaux.jpg","img/ing/raisins-secs.jpg","img/ing/ras-el-hanout.jpg","img/ing/riz.jpg","img/ing/safran.jpg","img/ing/sardine.jpg","img/ing/sel.jpg","img/ing/semoule.jpg","img/ing/sesame.jpg","img/ing/sirop-erable.jpg","img/ing/smen.jpg","img/ing/spaghetti.jpg","img/ing/sucre-glace.jpg","img/ing/sucre-vanille.jpg","img/ing/sucre.jpg","img/ing/tahini.jpg","img/ing/the-vert.jpg","img/ing/thon.jpg","img/ing/thym.jpg","img/ing/tomate.jpg","img/ing/tomates-pelees.jpg","img/ing/vermicelles.jpg","img/ing/yaourt.jpg"];
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
