"""Montre une recette telle que l'appli l'affiche dans une langue, pour un nombre de parts donné :
liste des ingrédients et texte des étapes, avec les quantités recalculées (mêmes règles que app.html).
Usage : python3 -I outils/rendu.py <langue: fr|en|ar|ru> <slug> [parts ...]   (par défaut : 1, la recette, le double)
Sert aux traducteurs et aux relecteurs pour vérifier l'accord des noms avec les nombres."""
import json, math, os, re, subprocess, sys

APP = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FR8 = ['', '⅛', '¼', '⅜', '½', '⅝', '¾', '⅞']
UNITS = {
    "fr": {"g": "g", "kg": "kg", "ml": "ml", "l": "l", "cs": "c. à s.", "cc": "c. à c.", "pincee": {"one": "pincée", "other": "pincées"}, "botte": {"one": "botte", "other": "bottes"}},
    "en": {"g": "g", "kg": "kg", "ml": "ml", "l": "l", "cs": "tbsp", "cc": "tsp", "pincee": {"one": "pinch", "other": "pinches"}, "botte": {"one": "bunch", "other": "bunches"}},
    "ru": {"g": "г", "kg": "кг", "ml": "мл", "l": "л", "cs": "ст. л.", "cc": "ч. л.", "pincee": {"one": "щепотка", "few": "щепотки", "many": "щепоток", "other": "щепотки"},
           "botte": {"one": "пучок", "few": "пучка", "many": "пучков", "other": "пучка"}},
    "ar": {"g": "غ", "kg": "كغ", "ml": "مل", "l": "ل", "cs": {"one": "ملعقة كبيرة", "few": "ملاعق كبيرة", "other": "ملعقة كبيرة"},
           "cc": {"one": "ملعقة صغيرة", "few": "ملاعق صغيرة", "other": "ملعقة صغيرة"}, "pincee": {"one": "رشة", "few": "رشات", "other": "رشة"},
           "botte": {"one": "حزمة", "few": "حزم", "other": "حزمة"}},
}
UKEY = {"c. à s.": "cs", "c. à c.": "cc", "pincée": "pincee", "pincées": "pincee", "botte": "botte", "bottes": "botte"}
RX_PH = re.compile(r"\{\{([a-z0-9-]+)(:full)?\}\}")


def cat(lang, x):
    """Catégorie du pluriel (règles CLDR, comme Intl.PluralRules)."""
    entier = float(x).is_integer()
    n = int(x) if entier else None
    if lang == "ru":
        if not entier:
            return "other"
        if n % 10 == 1 and n % 100 != 11:
            return "one"
        if 2 <= n % 10 <= 4 and not 12 <= n % 100 <= 14:
            return "few"
        return "many"
    if lang == "ar":
        if not entier:
            return "other"
        if n == 0:
            return "zero"
        if n == 1:
            return "one"
        if n == 2:
            return "two"
        if 3 <= n % 100 <= 10:
            return "few"
        if 11 <= n % 100 <= 99:
            return "many"
        return "other"
    return "one" if x <= 1 else "other"


def form(f, x, lang):
    if isinstance(f, str):
        return f
    if lang in ("fr", "en"):
        return f["other"] if x > 1 else f["one"]
    c = cat(lang, x)
    return f.get(c, f["other"])


def frac(x, den):
    e = max(1, round(x * den))
    step = 8 // den
    w, r = e // den, (e % den) * step
    return (str(w) if w else "") + FR8[r] if r else str(w)


def shown(x):
    den = 4 if x < 1 else 2
    return max(1, round(x * den)) / den


def scaled(it, mult):
    if it.get("q") is None:
        return None
    q = it["q"] if it.get("fixed") else it["q"] * mult
    if it.get("round") == "up":
        q = math.ceil(q - 1e-9)
    return q


def dec(x, lang):
    s = str(round(x * 100) / 100)
    if s.endswith(".0"):
        s = s[:-2]
    return s if lang == "en" else s.replace(".", ",")


def fmtq(it, mult, lang):
    q = scaled(it, mult)
    if q is None:
        return ""
    u = it.get("u") or ""
    un = UNITS[lang]
    if u == "kg":
        q, u = q * 1000, "g"
    if u == "l":
        q, u = q * 1000, "ml"
    if u in ("g", "ml"):
        st = 1 if q < 20 else 5 if q < 500 else 10 if q < 1000 else 50
        q = max(st, round(q / st) * st)
        return f"{dec(q / 1000, lang)} {un['kg'] if u == 'g' else un['l']}" if q >= 1000 else f"{q} {un[u]}"
    if u in ("c. à s.", "c. à c."):
        return f"{frac(q, 8)} {form(un[UKEY[u]], max(1, round(q * 8)) / 8, lang)}"
    fr = lambda x: frac(x, 4 if x < 1 else 2)
    if u in UKEY:
        return f"{fr(q)} {form(un[UKEY[u]], shown(q), lang)}"
    return f"{fr(q)} {u}" if u else fr(q)


def item_name(it, mult, lang):
    q = scaled(it, mult)
    if q is None or it.get("u"):
        return it["name"]
    x = shown(q)
    if lang == "ru":
        c = cat("ru", x)
        return it["name"] if c == "one" else (it.get("pl5") or it.get("pl") or it["name"]) if c == "many" else (it.get("pl") or it["name"])
    if lang == "ar":
        return (it.get("pl") or it["name"]) if cat("ar", x) == "few" else it["name"]
    return it["pl"] if it.get("pl") and x > 1 else it["name"]


def charger(slug):
    lire = ("const fs=require('fs'),vm=require('vm');const c={window:{}};vm.createContext(c);"
            "vm.runInContext(fs.readFileSync(process.argv[1],'utf8'),c);process.stdout.write(JSON.stringify(c.window.RECETTES[0]));")
    out = subprocess.run(["node", "-e", lire, os.path.join(APP, "recettes", slug + ".js")], capture_output=True, text=True, check=True).stdout
    return json.loads(out)


def main():
    lang, slug = sys.argv[1], sys.argv[2]
    r = charger(slug)
    tr = {}
    if lang != "fr":
        p = os.path.join(APP, "traductions", lang, slug + ".json")
        if os.path.exists(p):
            tr = {k: v["t"] for k, v in json.load(open(p, encoding="utf-8"))["textes"].items()}
    T = lambda k, d: tr.get(k, d)
    items = {}
    for g in r["ingredients"]:
        for it in g["items"]:
            x = dict(it)
            if lang != "fr" and f"ing.{it['id']}.name" in tr:
                x["name"] = tr[f"ing.{it['id']}.name"]
                x["pl"] = tr.get(f"ing.{it['id']}.pl")
                x["pl5"] = tr.get(f"ing.{it['id']}.pl5")
            items[it["id"]] = x
    parts = [float(p) for p in sys.argv[3:]] or [1, r["servings"], 2 * r["servings"]]
    for n in parts:
        mult = n / r["servings"]
        print(f"===== {slug} [{lang}] pour {n:g} (recette : {r['servings']})")
        for it in items.values():
            q = fmtq(it, mult, lang)
            print(f"  • {q + ' ' if q else ''}{item_name(it, mult, lang)}")
        for i, st in enumerate(r["steps"]):
            texts = st["text"] if isinstance(st["text"], list) else [st["text"]]
            for j, t in enumerate(texts):
                key = f"steps.{i}.text.{j}" if isinstance(st["text"], list) else f"steps.{i}.text"
                src = T(key, t)
                def rep(m):
                    it = items.get(m.group(1))
                    if not it:
                        return m.group(0)
                    q = fmtq(it, mult, lang)
                    if not q:
                        return item_name(it, mult, lang)
                    return f"[{q}] {item_name(it, mult, lang)}" if m.group(2) else f"[{q}]"
                print(f"  {i + 1}{'.' + str(j + 1) if len(texts) > 1 else ''}. {RX_PH.sub(rep, src)}")


if __name__ == "__main__":
    main()
