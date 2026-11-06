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
  });
  for (const s of r.sources || []) if (!/^https?:\/\//.test(s.url || '')) err(id, `source sans lien valide : ${s.name}`);
  if (r.cuisine === 'Marocaine' && (r.sources || []).length < 2) warn(id, 'moins de 2 sources');
  if (!r.photo) warn(id, 'pas de crédit photo');
  console.log(`${id} : ${(r.ingredients || []).reduce((a, g) => a + g.items.length, 0)} ingrédients, ${(r.steps || []).length} étapes, ${(r.steps || []).filter(s => s.timer).length} minuteurs, ${(r.sources || []).length} sources`);
}
for (const [k, v] of Object.entries(ING)) if (v.file && !fs.existsSync(path.join(APP, 'img', 'ing', v.file))) { errors++; console.log(`ERREUR  banque : photo introuvable pour ${k} (${v.file})`); }
console.log(`\n${R.length} recettes, ${Object.values(ING).filter(v => v.file).length} photos d'ingrédients, ${errors} erreur(s), ${warns} avertissement(s)`);
process.exit(errors ? 1 : 0);
