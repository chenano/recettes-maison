/* Contrôle de toutes les recettes de recettes.js. Usage : node outils/verifier.js */
const fs = require('fs'), path = require('path'), vm = require('vm');
const APP = path.dirname(__dirname);
const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(APP, 'recettes.js'), 'utf8'), ctx);
const R = ctx.window.RECETTES || [];
const ING = ctx.window.INGREDIENTS || {};
const SLUGS = new Set(R.map(r => r.slug));
const UNITS = new Set(['', 'g', 'kg', 'ml', 'l', 'c. à s.', 'c. à c.', 'pincée', 'pincées', 'botte', 'bottes']);
let errors = 0, warns = 0;
const err = (r, m) => { errors++; console.log(`ERREUR  ${r}: ${m}`); };
const warn = (r, m) => { warns++; console.log(`attention ${r}: ${m}`); };
const slugs = new Set();
for (const r of R) {
  const id = r.slug || '(sans slug)';
  if (slugs.has(id)) err(id, 'slug en double'); slugs.add(id);
  for (const k of ['title', 'tagline', 'category', 'cuisine', 'servings', 'servings_label', 'time', 'difficulty', 'img', 'ingredients', 'steps']) if (r[k] == null) err(id, `champ manquant : ${k}`);
  if (!fs.existsSync(path.join(APP, r.img || ''))) err(id, `photo introuvable : ${r.img}`);
  if (!fs.existsSync(path.join(APP, String(r.img || '').replace(/^img\//, 'img/min/')))) err(id, `miniature introuvable pour ${r.img} (lancer build.sh)`);
  for (const p of r.pairs || []) if (!SLUGS.has(p)) warn(id, `accompagnement absent de l'appli : ${p}`);
  if (!(r.servings > 0)) err(id, 'servings doit être > 0');
  for (const k of ['prep', 'cook']) if (!(Number.isFinite(r.time && r.time[k]) && r.time[k] >= 0)) err(id, `time.${k} invalide`);
  const ids = new Set();
  for (const g of r.ingredients || []) for (const it of g.items || []) {
    if (!it.id) err(id, `ingrédient sans id : ${it.name}`);
    if (ids.has(it.id)) err(id, `id en double : ${it.id}`); ids.add(it.id);
    if (!UNITS.has(it.u || '')) err(id, `unité inconnue « ${it.u} » (${it.id})`);
    if (!(it.q === null || it.q === undefined || (typeof it.q === 'number' && it.q > 0))) err(id, `quantité invalide (${it.id}) : ${it.q}`);
    if (!it.name) err(id, `nom manquant (${it.id})`);
    if (it.canon && Object.keys(ING).length && !ING[it.canon]) err(id, `ingrédient « ${it.canon} » absent de la banque (${it.id})`);
    if (it.canon && ING[it.canon] && !ING[it.canon].file) warn(id, `pas de photo pour l'ingrédient « ${it.canon} » (${it.id})`);
    if (!it.canon) warn(id, `ingrédient sans photo ni rayon de courses (${it.id})`);
    if (it.recipe && !SLUGS.has(it.recipe)) err(id, `renvoi vers une recette absente : ${it.recipe} (${it.id})`);
  }
  (r.steps || []).forEach((st, i) => {
    const texts = Array.isArray(st.text) ? st.text : [st.text];
    for (const t of texts) {
      if (typeof t !== 'string' || !t.trim()) err(id, `étape ${i + 1} : texte vide`);
      for (const m of String(t).matchAll(/\{\{([^}:]+)(:full)?\}\}/g)) if (!ids.has(m[1])) err(id, `étape ${i + 1} : {{${m[1]}}} ne correspond à aucun ingrédient`);
      if (/\{\{|\}\}/.test(String(t).replace(/\{\{[a-z0-9-]+(:full)?\}\}/g, ''))) err(id, `étape ${i + 1} : accolades mal formées`);
    }
    if (st.timer) {
      if (!(typeof st.timer.min === 'number' && st.timer.min > 0)) err(id, `étape ${i + 1} : minuteur invalide`);
      if (!st.timer.label || !st.timer.done) err(id, `étape ${i + 1} : minuteur sans libellé ou sans message`);
    }
    if (st.jump != null && !(r.steps[st.jump])) err(id, `étape ${i + 1} : renvoi vers une étape inexistante`);
    if (st.img && !fs.existsSync(path.join(APP, st.img.src))) err(id, `étape ${i + 1} : photo introuvable (${st.img.src})`);
  });
  for (const s of r.sources || []) if (!/^https?:\/\//.test(s.url || '')) err(id, `source sans lien valide : ${s.name}`);
  if (r.cuisine === 'Marocaine' && (r.sources || []).length < 2) warn(id, 'moins de 2 sources');
  if (!r.photo) warn(id, 'pas de crédit photo');
  console.log(`${id} : ${(r.ingredients || []).reduce((a, g) => a + g.items.length, 0)} ingrédients, ${(r.steps || []).length} étapes, ${(r.steps || []).filter(s => s.timer).length} minuteurs, ${(r.sources || []).length} sources`);
}
for (const [k, v] of Object.entries(ING)) if (v.file && !fs.existsSync(path.join(APP, 'img', 'ing', v.file))) { errors++; console.log(`ERREUR  banque : photo introuvable pour ${k} (${v.file})`); }

/* ---------- langues : textes de l'interface, dictionnaire, traductions des recettes ---------- */
const IC = { window: {} }; vm.createContext(IC);
vm.runInContext(fs.readFileSync(path.join(APP, 'i18n', 'interface.js'), 'utf8'), IC);
const UIT = IC.window.UI_TXT || {}, DICO = IC.window.DICO || {};
const LG = ['en', 'ar', 'ru'];
for (const l of LG) {
  const L = UIT[l] || {};
  for (const k of Object.keys(UIT.fr || {})) {
    if (!(k in L)) err('interface', `${l} : texte manquant « ${k} »`);
    else if (typeof L[k] !== typeof UIT.fr[k]) err('interface', `${l} : « ${k} » n'a pas le même type qu'en français`);
  }
  for (const k of Object.keys(L)) if (!(k in (UIT.fr || {}))) warn('interface', `${l} : texte en trop « ${k} »`);
}
// valeurs des recettes que l'appli traduit avec le dictionnaire (catégories, cuisines, niveaux, rayons…)
const need = { category: new Set(), cuisine: new Set(), difficulty: new Set(), rest: new Set(), phase: new Set(), modified: new Set(['réduite']), aisle: new Set(), servings: new Set(), rayon: new Set() };
for (const r of R) {
  need.category.add(r.category); need.cuisine.add(r.cuisine); need.difficulty.add(r.difficulty); need.servings.add(r.servings_label);
  if (r.time && r.time.rest) need.rest.add(r.time.rest_label || 'Repos');
  (r.steps || []).forEach(s => { if (s.phase) need.phase.add(s.phase); });
  if (r.photo && r.photo.modified) need.modified.add(r.photo.modified);
  (Array.isArray(r.rayons) && r.rayons.length ? r.rayons : [r.rayon || (r.cuisine === 'Marocaine' ? 'Plats' : "D'ailleurs")]).forEach(x => need.rayon.add(x));
}
for (const v of Object.values(ING)) { if (v.aisle) need.aisle.add(v.aisle); if (v.file && v.modified) need.modified.add(v.modified); }
for (const [kind, vals] of Object.entries(need)) for (const v of vals) {
  const e = DICO[kind] && DICO[kind][v];
  for (const l of LG) if (!e || !e[l]) err('dictionnaire', `${kind} « ${v} » : pas de traduction « ${l} » dans i18n/interface.js`);
}
// traductions des recettes (fichiers construits par outils/traduction.py) : repères valables et couverture
for (const l of LG) {
  const p = path.join(APP, 'i18n', l + '.js');
  if (!fs.existsSync(p)) { warn('langues', `i18n/${l}.js absent (lancer build.sh)`); continue; }
  const C = { window: {} }; vm.createContext(C); vm.runInContext(fs.readFileSync(p, 'utf8'), C);
  const D = C.window.I18N_DATA || {}, TR = D.recettes || {};
  if (D.lang !== l) err('langues', `i18n/${l}.js : langue « ${D.lang} » au lieu de « ${l} »`);
  let n = 0;
  for (const r of R) {
    const tr = TR[r.slug];
    if (!tr) { warn(r.slug, `pas encore traduite en « ${l} » : elle s'affiche en français`); continue; }
    n++;
    const ids = new Set((r.ingredients || []).flatMap(g => g.items.map(i => i.id)));
    for (const [k, v] of Object.entries(tr)) {
      for (const m of String(v).matchAll(/\{\{([^}:]+)(:full)?\}\}/g)) if (!ids.has(m[1])) err(r.slug, `${l} ${k} : {{${m[1]}}} ne correspond à aucun ingrédient`);
      if (/\{\{|\}\}/.test(String(v).replace(/\{\{[a-z0-9-]+(:full)?\}\}/g, ''))) err(r.slug, `${l} ${k} : accolades mal formées`);
    }
  }
  const noms = D.ingredients || {}, sans = Object.keys(ING).filter(k => ING[k].file && !noms[k]);
  if (sans.length) warn('langues', `${l} : ${sans.length} ingrédient(s) sans nom traduit (${sans.slice(0, 8).join(', ')}${sans.length > 8 ? '…' : ''})`);
  console.log(`langue ${l} : ${n}/${R.length} recettes traduites`);
}
console.log(`\n${R.length} recettes, ${Object.values(ING).filter(v => v.file).length} photos d'ingrédients, ${errors} erreur(s), ${warns} avertissement(s)`);
process.exit(errors ? 1 : 0);
