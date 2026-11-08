"""Traductions des recettes en anglais (en), arabe (ar) et russe (ru). Le français reste la langue source.

Usage :
  python3 -I outils/traduction.py extraire [slug ...]              écrit traductions/fr/<slug>.json (les textes à traduire)
  python3 -I outils/traduction.py valider <langue> <fichier> [slug] contrôle une traduction brute ({clé: texte}) sans l'enregistrer
  python3 -I outils/traduction.py importer <langue> <fichier> [slug] la contrôle puis l'enregistre dans traductions/<langue>/<slug>.json
  python3 -I outils/traduction.py corriger <langue> <slug> <fichier> applique des corrections {clé: texte} à une traduction enregistrée
  python3 -I outils/traduction.py construire                        écrit i18n/<langue>.js avec les seules traductions à jour
  python3 -I outils/traduction.py etat                              couverture de chaque langue et traductions périmées
  python3 -I outils/traduction.py rafraichir <langue> <slug> <clés> rattache des clés au français actuel (retouche de forme relue à la main)

Une traduction enregistrée garde, pour chaque clé, le texte français qu'elle traduit. Si ce texte change ensuite
dans la recette, la clé est « périmée » : l'appli affiche alors le français à sa place, et `etat` la signale.
"""
import json, os, re, sys

APP = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TR = os.path.join(APP, "traductions")
LANGUES = ("en", "ar", "ru")
RX_PH = re.compile(r"\{\{([a-z0-9-]+)(:full)?\}\}")
RX_NUM = re.compile(r"\d+(?:[.,]\d+)?|[½¼¾⅓⅔⅛⅜⅝⅞]")
RX_AR = re.compile(r"[؀-ۿ]")
RX_RU = re.compile(r"[Ѐ-ӿ]")
RX_ARABIC_DIGITS = re.compile(r"[٠-٩۰-۹]")
RX_FR_MOTS = re.compile(r"\b(le|la|les|des|du|une|est|avec|pour|dans|sur|et|puis|ou|qui|que)\b", re.I)


_RECETTES = {}
_LIRE = """const fs=require('fs'),vm=require('vm'),path=require('path');const out={};
for(const f of process.argv.slice(1)){const ctx={window:{}};vm.createContext(ctx);vm.runInContext(fs.readFileSync(f,'utf8'),ctx);
for(const r of ctx.window.RECETTES||[])out[r.slug]=r;}process.stdout.write(JSON.stringify(out));"""


def recette(slug):
    """Lit les recettes avec Node : certains fichiers sont du JavaScript écrit à la main, pas du JSON."""
    if not _RECETTES:
        import subprocess
        d = os.path.join(APP, "recettes")
        fichiers = [os.path.join(d, f) for f in sorted(os.listdir(d)) if f.endswith(".js")]
        res = subprocess.run(["node", "-e", _LIRE] + fichiers, capture_output=True, text=True, check=True)
        _RECETTES.update(json.loads(res.stdout))
    return _RECETTES[slug]


def slugs():
    return sorted(f[:-3] for f in os.listdir(os.path.join(APP, "recettes")) if f.endswith(".js"))


def unites(r):
    """Tous les textes d'une recette qu'un cuisinier lit, sous des clés stables. Les sources, les écarts entre
    sources et les points non vérifiés (dossier de vérification) restent en français."""
    u = {}

    def put(k, v):
        if isinstance(v, str) and v.strip():
            u[k] = v

    for k in ("title", "darija", "tagline", "region", "occasion", "img_alt", "serving", "pairs_label"):
        put(k, r.get(k))
    for i, n in enumerate(r.get("notes") or []):
        put(f"notes.{i}.title", n.get("title"))
        put(f"notes.{i}.text", n.get("text"))
        for j, x in enumerate(n.get("items") or []):
            put(f"notes.{i}.items.{j}", x)
    for gi, g in enumerate(r["ingredients"]):
        put(f"ing.{gi}.group", g.get("group"))
        for it in g["items"]:
            for f in ("name", "pl", "note"):
                put(f"ing.{it['id']}.{f}", it.get(f))
    for i, e in enumerate(r.get("equipment") or []):
        put(f"equipment.{i}", e)
    for i, st in enumerate(r["steps"]):
        put(f"steps.{i}.title", st.get("title"))
        put(f"steps.{i}.dur", st.get("dur"))
        if isinstance(st.get("text"), list):
            for j, x in enumerate(st["text"]):
                put(f"steps.{i}.text.{j}", x)
        else:
            put(f"steps.{i}.text", st.get("text"))
        tp = st.get("tip")
        if isinstance(tp, dict):
            put(f"steps.{i}.tip.l", tp.get("l"))
            put(f"steps.{i}.tip.t", tp.get("t"))
        else:
            put(f"steps.{i}.tip", tp)
        if st.get("timer"):
            put(f"steps.{i}.timer.label", st["timer"].get("label"))
            put(f"steps.{i}.timer.done", st["timer"].get("done"))
        if st.get("img"):
            put(f"steps.{i}.img.alt", st["img"].get("alt"))
            put(f"steps.{i}.img.caption", st["img"].get("caption"))
    for i, s in enumerate(r.get("secrets") or []):
        if isinstance(s, str):
            put(f"secrets.{i}", s)
        else:
            put(f"secrets.{i}.text", s.get("text"))
            put(f"secrets.{i}.source", s.get("source"))
    for i, x in enumerate(r.get("mistakes") or []):
        put(f"mistakes.{i}", x)
    for i, x in enumerate(r.get("variants") or []):
        put(f"variants.{i}", x)
    return u


def ingredients(r):
    return {it["id"]: it for g in r["ingredients"] for it in g["items"]}


def comptable(it):
    """Ingrédient compté à la pièce (2 oignons, 3 œufs) : son nom change avec le nombre."""
    q = it.get("q")
    return isinstance(q, (int, float)) and not it.get("u") and not (it.get("fixed") and q <= 1)


def formes(lang, it):
    """Clés de formes exigées pour un ingrédient compté, en plus de « name »."""
    if not comptable(it):
        return []
    return ["pl", "pl5"] if lang == "ru" else ["pl"]


def extraire(liste):
    os.makedirs(os.path.join(TR, "fr"), exist_ok=True)
    for slug in liste:
        r = recette(slug)
        ing = {i: {"q": it.get("q"), "u": it.get("u", ""), "fr": it["name"] + (f" / {it['pl']}" if it.get("pl") else ""),
                   "formes": formes("ru", it) and "compté à la pièce : donner les formes du pluriel"}
               for i, it in ingredients(r).items()}
        for v in ing.values():
            if not v["formes"]:
                del v["formes"]
        out = {"_slug": slug, "_ingredients": ing, "textes": unites(r)}
        with open(os.path.join(TR, "fr", slug + ".json"), "w", encoding="utf-8") as f:
            json.dump(out, f, ensure_ascii=False, indent=1)
            f.write("\n")
        print(f"{slug} : {len(out['textes'])} textes, {sum(len(v) for v in out['textes'].values())} caractères")


def nombres(s):
    return {x.replace(",", ".") for x in RX_NUM.findall(RX_PH.sub(" ", s))}


def controler(lang, slug, brut):
    """Renvoie (erreurs, avertissements) pour une traduction brute {clé: texte}."""
    r = recette(slug)
    fr, ing = unites(r), ingredients(r)
    err, warn = [], []
    if not isinstance(brut, dict):
        return ["le fichier doit contenir un objet JSON {clé: texte}"], []
    attendues = set(fr)
    for i, it in ing.items():
        for f in formes(lang, it):
            attendues.add(f"ing.{i}.{f}")
    for k in sorted(attendues - set(brut)):
        err.append(f"clé manquante : {k}")
    for k in sorted(set(brut) - attendues):
        err.append(f"clé inconnue : {k}")
    for k, t in brut.items():
        if k not in attendues:
            continue
        if not isinstance(t, str) or not t.strip():
            err.append(f"{k} : texte vide")
            continue
        src = fr.get(k)
        if "{{" in RX_PH.sub("", t) or "}}" in RX_PH.sub("", t):
            err.append(f"{k} : accolades mal formées")
        if RX_ARABIC_DIGITS.search(t):
            err.append(f"{k} : chiffres arabes orientaux ; écrire les chiffres 0-9")
        if lang == "ar" and not RX_AR.search(t) and len(t) > 40:
            err.append(f"{k} : pas de texte arabe")
        if lang == "ru" and not RX_RU.search(t) and len(t) > 40:
            err.append(f"{k} : pas de texte russe")
        if lang == "en" and len(RX_FR_MOTS.findall(t)) >= 3:
            warn.append(f"{k} : du français semble rester ({t[:70]}…)")
        if src is None:
            continue
        ids_fr = {m.group(1) for m in RX_PH.finditer(src)}
        ids_t = {m.group(1) for m in RX_PH.finditer(t)}
        for i in sorted(ids_t - set(ing)):
            err.append(f"{k} : {{{{{i}}}}} ne correspond à aucun ingrédient")
        for i in sorted(ids_fr - ids_t):
            if i in ing and isinstance(ing[i].get("q"), (int, float)):
                err.append(f"{k} : {{{{{i}}}}} a disparu (la quantité ne s'afficherait plus)")
        for i in sorted((ids_t - ids_fr) & set(ing)):
            warn.append(f"{k} : {{{{{i}}}}} ajouté (absent du français)")
        if lang == "ru":
            for m in RX_PH.finditer(t):
                if m.group(2) and m.group(1) in ing and comptable(ing[m.group(1)]):
                    warn.append(f"{k} : {{{{{m.group(1)}:full}}}} sur un ingrédient compté : vérifier l'accord (sinon « … ({{{{{m.group(1)}}}}} шт.) »)")
        manquants = nombres(src) - nombres(t)
        if lang == "ar" and manquants & {"1", "2"}:
            # en arabe, 1 et 2 s'écrivent souvent sans chiffre (ساعة، ساعتان) : la relecture vérifie qu'ils sont bien là
            warn.append(f"{k} : 1 ou 2 écrit en toutes lettres ? ({', '.join(sorted(manquants & {'1', '2'}))})")
            manquants = manquants - {"1", "2"}
        if manquants:
            err.append(f"{k} : nombre(s) absent(s) de la traduction : {', '.join(sorted(manquants))}")
        ajoutes = nombres(t) - nombres(src)
        if ajoutes:
            warn.append(f"{k} : nombre(s) en plus : {', '.join(sorted(ajoutes))}")
        if len(src) > 30 and not (0.35 * len(src) <= len(t) <= 3 * len(src)):
            warn.append(f"{k} : longueur inhabituelle ({len(t)} contre {len(src)} en français)")
    return err, warn


def lire_brut(fichier):
    with open(fichier, encoding="utf-8") as f:
        d = json.load(f)
    if isinstance(d, dict) and "textes" in d and isinstance(d["textes"], dict):
        d = d["textes"]
    return d


def slug_de(fichier, slug):
    return slug or os.path.splitext(os.path.basename(fichier))[0]


def attendues(lang, slug):
    """Clés qu'une traduction complète doit avoir : les textes français et les formes des ingrédients comptés."""
    r = recette(slug)
    a = set(unites(r))
    for i, it in ingredients(r).items():
        for f in formes(lang, it):
            a.add(f"ing.{i}.{f}")
    return a


def enregistrer(lang, slug, brut, ancien=None, garder=()):
    """Enregistre la traduction avec, pour chaque clé, le français qu'elle traduit. Les clés de « garder » conservent
    le français de l'ancien enregistrement : une correction d'une clé ne rend pas « à jour » une autre clé périmée."""
    r = recette(slug)
    fr, ing = unites(r), ingredients(r)
    out = {}
    for k, t in brut.items():
        if ancien and k in garder and k in ancien:
            src = ancien[k]["fr"]
        elif k in fr:
            src = fr[k]
        else:  # forme ajoutée (pluriel) : elle dépend du nom français de l'ingrédient
            i = k.split(".")[1]
            src = ing[i]["name"] + (f" / {ing[i]['pl']}" if ing[i].get("pl") else "")
        out[k] = {"fr": src, "t": t}
    os.makedirs(os.path.join(TR, lang), exist_ok=True)
    with open(os.path.join(TR, lang, slug + ".json"), "w", encoding="utf-8") as f:
        json.dump({"_slug": slug, "_langue": lang, "textes": out}, f, ensure_ascii=False, indent=1)
        f.write("\n")


def afficher(slug, err, warn):
    for e in err:
        print(f"ERREUR  {slug} : {e}")
    for w in warn:
        print(f"attention {slug} : {w}")
    print(f"{slug} : {len(err)} erreur(s), {len(warn)} avertissement(s)")


def charger(lang, slug):
    p = os.path.join(TR, lang, slug + ".json")
    if not os.path.exists(p):
        return None
    return json.load(open(p, encoding="utf-8"))["textes"]


def a_jour(lang, slug):
    """Textes traduits encore valables, et clés périmées ou manquantes."""
    d = charger(lang, slug)
    if d is None:
        return {}, None
    r = recette(slug)
    fr, ing = unites(r), ingredients(r)
    ok, perimees = {}, []
    for k, v in d.items():
        if k in fr:
            src = fr[k]
        elif re.fullmatch(r"ing\.[a-z0-9-]+\.(pl|pl5)", k):
            i = k.split(".")[1]
            if i not in ing or not comptable(ing[i]):
                continue  # forme devenue inutile (ingrédient retiré ou plus compté à la pièce)
            src = ing[i]["name"] + (f" / {ing[i]['pl']}" if ing[i].get("pl") else "")
        else:
            continue  # texte retiré de la recette française (par exemple une photo d'étape enlevée) : on l'ignore
        if v["fr"] == src:
            ok[k] = v["t"]
        else:
            perimees.append(k)
    manquantes = [k for k in fr if k not in ok and k not in perimees]
    return ok, perimees + manquantes


def construire():
    os.makedirs(os.path.join(APP, "i18n"), exist_ok=True)
    noms = {}
    p = os.path.join(TR, "ingredients.json")
    if os.path.exists(p):
        noms = json.load(open(p, encoding="utf-8"))
    for lang in LANGUES:
        rec, n_ok, n_per = {}, 0, 0
        for slug in slugs():
            ok, rest = a_jour(lang, slug)
            if ok:
                rec[slug] = ok
                n_ok += 1
            if rest:
                n_per += len(rest)
        data = {"lang": lang, "recettes": rec, "ingredients": {k: v[lang] for k, v in noms.items() if v.get(lang)}}
        with open(os.path.join(APP, "i18n", lang + ".js"), "w", encoding="utf-8") as f:
            f.write("/* Fichier généré par outils/traduction.py construire : modifier plutôt traductions/ */\n")
            f.write("window.I18N_DATA = " + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n")
        print(f"i18n/{lang}.js : {n_ok} recette(s) traduite(s), {n_per} texte(s) encore en français")


def etat():
    total = 0
    for lang in LANGUES:
        for slug in slugs():
            ok, rest = a_jour(lang, slug)
            if rest is None:
                print(f"{lang} {slug} : pas traduite")
                total += 1
            elif rest:
                print(f"{lang} {slug} : {len(rest)} texte(s) à traduire de nouveau : {', '.join(rest[:6])}{' …' if len(rest) > 6 else ''}")
                total += 1
    print("toutes les recettes sont traduites et à jour" if not total else f"{total} recette(s) à traduire ou à mettre à jour")
    return total


if __name__ == "__main__":
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    cmd = a[0]
    if cmd == "extraire":
        extraire(a[1:] or slugs())
    elif cmd in ("valider", "importer"):
        lang, fichier = a[1], a[2]
        assert lang in LANGUES, f"langue inconnue : {lang}"
        slug = slug_de(fichier, a[3] if len(a) > 3 else None)
        brut = lire_brut(fichier)
        err, warn = controler(lang, slug, brut)
        afficher(slug, err, warn)
        if cmd == "importer":
            if err:
                sys.exit(f"{slug} : non enregistrée, corriger d'abord les erreurs")
            enregistrer(lang, slug, brut)
            print(f"enregistrée : traductions/{lang}/{slug}.json")
        sys.exit(1 if err else 0)
    elif cmd == "corriger":
        lang, slug, fichier = a[1], a[2], a[3]
        d = charger(lang, slug)
        assert d is not None, f"pas de traduction {lang} pour {slug}"
        att = attendues(lang, slug)
        brut = {k: v["t"] for k, v in d.items() if k in att}  # les textes retirés du français sont abandonnés
        corr = lire_brut(fichier)
        for k, t in corr.items():
            assert k in att, f"clé inconnue dans les corrections : {k}"
            brut[k] = t
        err, warn = controler(lang, slug, brut)
        afficher(slug, err, warn)
        if err:
            sys.exit(f"{slug} : corrections non appliquées")
        enregistrer(lang, slug, brut, ancien=d, garder=set(brut) - set(corr))
        print(f"{len(corr)} correction(s) appliquée(s) : traductions/{lang}/{slug}.json")
    elif cmd == "rafraichir":
        # après une retouche du français qui ne change pas le sens (relue à la main) : la traduction reste valable
        lang, slug, cles = a[1], a[2], a[3:]
        d = charger(lang, slug)
        assert d is not None and cles, "usage : rafraichir <langue> <slug> <clé> [<clé> ...]"
        for k in cles:
            assert k in d, f"clé absente de la traduction : {k}"
        brut = {k: v["t"] for k, v in d.items() if k in attendues(lang, slug)}
        enregistrer(lang, slug, brut, ancien=d, garder=set(brut) - set(cles))
        print(f"{len(cles)} clé(s) rattachée(s) au français actuel : traductions/{lang}/{slug}.json")
    elif cmd == "construire":
        construire()
    elif cmd == "etat":
        sys.exit(1 if etat() else 0)
    else:
        sys.exit(__doc__)
