"""Transforme recherche/<slug>.json en recettes/<slug>.js, avec la photo et ses crédits.
Usage : python3 -I outils/integrer.py <slug> [<slug> ...]"""
import json, sys, os, re

APP = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PHOTOS = {  # slug -> (fichier dans img/, modification faite)
    "couscous-sept-legumes": ("couscous.jpg", "réduite"),
    "tajine-poulet-citron-olives": ("tajine-poulet.jpg", "réduite"),
    "harira": ("harira.jpg", "réduite"),
    "pastilla-poulet": ("pastilla.jpg", "réduite"),
    "tajine-kefta-oeufs": ("kefta.jpg", "recadrée et réduite"),
    "msemen": ("msemen.jpg", "réduite"),
}
credits = {c["file"]: c for c in json.load(open(os.path.join(APP, "img", "credits.json"), encoding="utf-8"))}
STEP_PHOTOS = {  # slug -> {index d'étape (0 = première): (fichier, texte alternatif)}
    "msemen": {4: ("msemen-etaler.jpg", "Mains qui étirent la pâte à msemen sur un plan huilé"),
               10: ("msemen-cuisson.jpg", "Msemen en train de cuire sur une grande plaque")},
}

# Formes singulier / pluriel des ingrédients comptés à la pièce (pour que « 1 tomate mûre » et « 3 tomates mûres » s'accordent)
FORMS = {
    "couscous-sept-legumes": {"oignon": ("gros oignon (environ 200 g)", "gros oignons (environ 200 g chacun)"),
        "tomates-rapees": ("tomate mûre", "tomates mûres"), "petits-oignons": ("petit oignon", "petits oignons"),
        "tomates-quartiers": ("petite tomate", "petites tomates"), "piments": ("piment vert", "piments verts")},
    "harira": {"oignon": ("gros oignon", "gros oignons"),
        "celeri": ("branche de céleri avec ses feuilles", "branches de céleri avec leurs feuilles"),
        "citron": ("citron, en quartiers", "citrons, en quartiers")},
    "pastilla-poulet": {"oeufs": ("œuf", "œufs"),
        "feuilles-tour": ("feuille de warqa ou de brick, pour le tour", "feuilles de warqa ou de brick, pour le tour"),
        "feuilles-fond": ("feuille de warqa ou de brick, pour le fond", "feuilles de warqa ou de brick, pour le fond"),
        "feuilles-dessus": ("feuille de warqa ou de brick, pour le dessus", "feuilles de warqa ou de brick, pour le dessus"),
        "jaune": ("jaune d'œuf", "jaunes d'œufs")},
    "tajine-kefta-oeufs": {"oignon-kefta": ("petit oignon, râpé", "petits oignons, râpés"),
        "oignon-sauce": ("oignon moyen, haché finement", "oignons moyens, hachés finement"),
        "ail": ("gousse d'ail, écrasée", "gousses d'ail, écrasées"), "oeufs": ("œuf", "œufs")},
    "tajine-poulet-citron-olives": {"poulet": ("poulet halal, fermier (beldi) de préférence", "poulets halal, fermiers (beldi) de préférence"),
        "ail": ("gousse d'ail, écrasée ou râpée", "gousses d'ail, écrasées ou râpées"),
        "oignons": ("oignon moyen (jaune, blanc ou rouge)", "oignons moyens (jaunes, blancs ou rouges)"),
        "citron-confit": ("citron confit", "citrons confits")},
}
# Dans les étapes : « {{id}} nom » devient « {{id:full}} », qui affiche la quantité ET le nom bien accordé
TEXT_FIXES = {
    "couscous-sept-legumes": [("{{oignon}} gros oignon", "{{oignon:full}}"), ("{{tomates-rapees}} tomates", "{{tomates-rapees:full}}"),
        ("{{tomates-quartiers}} petites tomates", "{{tomates-quartiers:full}}"), ("{{petits-oignons}} petits oignons", "{{petits-oignons:full}}"),
        ("{{piments}} piments verts", "{{piments:full}}")],
    "harira": [("{{oignon}} gros oignon", "{{oignon:full}}"), ("{{celeri}} branche de céleri avec ses feuilles", "{{celeri:full}}"),
        ("{{citron}} citron coupé en quartiers", "{{citron:full}}")],
    "pastilla-poulet": [("{{oeufs}} œufs", "{{oeufs:full}}"), ("{{feuilles-tour}} feuilles", "{{feuilles-tour:full}}"),
        ("{{feuilles-fond}} feuilles beurrées", "{{feuilles-fond:full}}, beurrées,"), ("{{jaune}} jaune d'œuf", "{{jaune:full}}"),
        ("{{feuilles-dessus}} feuilles", "{{feuilles-dessus:full}}")],
    "tajine-poulet-citron-olives": [("{{ail}} gousses d'ail écrasées", "{{ail:full}}"), ("{{oignons}} oignons", "{{oignons:full}}"),
        ("{{citron-confit}} citron confit", "{{citron-confit:full}}")],
}
FULL_ALL = {"tajine-kefta-oeufs"}  # cette recette écrit {{id}} là où il faut la quantité suivie du nom

# Corrections de la contre-vérification indépendante du 6 novembre 2026 (recherche/verification.json)
def rep(obj, key, old, new):
    assert old in obj[key], f"texte introuvable pour la correction : {old[:60]}"
    obj[key] = obj[key].replace(old, new)

def corriger(slug, r):
    ing = {it["id"]: it for g in r["ingredients"] for it in g["items"]}
    if slug == "couscous-sept-legumes":
        rep(r["secrets"][5], "text", "une bande de tissu mouillée scellée avec de la pâte", "une bande de tissu enduite d'une pâte légère de farine et d'eau")
        r["secrets"][7]["source"] = "Taste of Maroc, guide de la vapeur et recette du couscous bidaoui ; Bladi.net"
        r["secrets"][2]["text"] = "Persil et coriandre cuisent ficelés en bouquet dans le bouillon ; Nargisse Benkabbou retire le sien (coriandre seule) avant d'ajouter les premiers légumes, Cooking with Alia avant de servir."
    elif slug == "tajine-poulet-citron-olives":
        r["secrets"][0]["text"] = "Le m'qalli repose sur deux épices maîtresses, le safran et le gingembre, et se reconnaît à sa sauce jaune."
        r["secrets"][12]["text"] += " Les autorités sanitaires déconseillent toutefois de rincer la volaille crue, car les éclaboussures propagent les bactéries : si tu gardes ce geste, fais-le sans éclabousser et nettoie évier et plan de travail juste après."
    elif slug == "harira":
        i = next(k for k, v in enumerate(r["variants"]) if v.startswith("Harira fassia"))
        r["variants"][i] = r["variants"][i].replace(" ni piment de la Jamaïque (kababa)", " ni piment de la Jamaïque")
        assert "kababa" not in r["variants"][i]
        j = next(k for k, v in enumerate(r["variants"]) if v.startswith("Harira oujdia"))
        r["variants"][j] = "Harira oujdia (Oujda) : préparée avec un levain pétri la veille et beaucoup de persil, de coriandre et de céleri (Aujourd'hui le Maroc, repris par Yabiladi) ; selon Rachida, très parfumée au carvi et au piment de la Jamaïque, et certaines familles ajoutent des fèves sèches aux pois chiches — Gâteau et cuisine Rachida."
    elif slug == "tajine-kefta-oeufs":
        r["steps"][8]["text"] += " Pour une femme enceinte, un jeune enfant ou une personne âgée ou fragile, laisse cuire quelques minutes de plus, jusqu'à ce que le jaune soit pris."
    elif slug == "msemen":
        r["time"]["cook"] = 60
        rep(r["steps"][9], "text", "jusqu'à ce qu'il double de taille, environ 18 cm de côté,", "jusqu'à environ 18 cm de côté, un peu plus du double du carré plié,")
        rep(r["secrets"][7], "text", "Juste après la cuisson, fais", "Une à deux minutes après la cuisson, fais")
    elif slug == "pastilla-poulet":
        rep(r, "tagline", "le grand sucré-salé né à Fès", "le grand sucré-salé de la cuisine fassie")
        assert ing["sucre-glace"]["q"] == 40
        ing["sucre-glace"]["q"] = 60
        r["discrepancies"].append("Contre-vérification : sucre glace des amandes porté de 40 g à 60 g (17 %), plus proche des sources marocaines (15 % chez Femmes du Maroc, 21 % chez Chhiwat, 40 % chez Lalla Moulati).")
    # sources ajoutées par la contre-vérification, et résumé
    v = VERIF.get(slug)
    if v:
        known = {x["url"] for x in r.get("sources", [])}
        for sa in v.get("sources_ajoutees", []):
            if sa["url"] not in known:
                r.setdefault("sources", []).append({"name": sa["name"], "url": sa["url"].split(" ; ")[0], "used_for": "Contre-vérification : " + sa["ce_qu_elle_confirme"]})
        n = len(v.get("corrections", []))
        r.setdefault("discrepancies", []).append(f"Contre-vérifiée le 6 novembre 2026 par une seconde recherche indépendante : verdict « {v['verdict']} », {n} correction(s) appliquée(s).")

VERIF = {}
_vf = os.path.join(APP, "recherche", "verification.json")
if os.path.exists(_vf):
    VERIF = {x["slug"]: x for x in json.load(open(_vf, encoding="utf-8"))["recettes"]}

def photo_for(fname, modified):
    c = credits[fname]
    return {"author": c["author"], "license": c["license"], "license_url": c["license_url"],
            "page": c["page"], "modified": modified}

for slug in sys.argv[1:]:
    src = os.path.join(APP, "recherche", slug + ".json")
    raw = open(src, encoding="utf-8").read().strip()
    if raw.startswith("```"):
        raw = raw.split("\n", 1)[1].rsplit("```", 1)[0]
    r = json.loads(raw)
    r["slug"] = slug
    # « 800 g d'oignons » plutôt que « 800 g oignons » : on ajoute « de » / « d' » devant les quantités avec unité
    for g in r["ingredients"]:
        for it in g["items"]:
            n = it.get("name", "")
            if it.get("u") and it.get("q") is not None and not n.lower().startswith(("de ", "d'", "d’", "du ", "des ")):
                it["name"] = ("d'" if n[:1].lower() in "aeiouyéèêâîôûh" else "de ") + n
    r["cuisine"] = "Marocaine"
    for g in r["ingredients"]:
        for it in g["items"]:
            if it["id"] in FORMS.get(slug, {}):
                it["name"], it["pl"] = FORMS[slug][it["id"]]
    for st in r["steps"]:
        txt = st["text"]
        for old, new in TEXT_FIXES.get(slug, []):
            txt = txt.replace(old, new)
        if slug in FULL_ALL:
            txt = re.sub(r"\{\{([a-z0-9-]+)\}\}", r"{{\1:full}}", txt)
        st["text"] = txt
    corriger(slug, r)
    fname, mod = PHOTOS[slug]
    r["img"] = "img/" + fname
    r["photo"] = photo_for(fname, mod)
    for idx, (sf, alt) in STEP_PHOTOS.get(slug, {}).items():
        c = credits[sf]
        r["steps"][idx]["img"] = {"src": "img/" + sf, "alt": alt,
            "credit": f"Photo de l'étape « {r['steps'][idx]['title']} » : {c['author']}, Wikimedia Commons, licence {c['license']} (réduite)."}
    out = os.path.join(APP, "recettes", slug + ".js")
    with open(out, "w", encoding="utf-8") as f:
        f.write(f"/* Recette : {r['title']}. Sources et vérification dans le champ sources / discrepancies. */\n")
        f.write("window.RECETTES = window.RECETTES || [];\n")
        f.write("window.RECETTES.push(" + json.dumps(r, ensure_ascii=False, indent=1) + ");\n")
    print("ok :", out, "|", len(r["steps"]), "étapes,", sum(len(g["items"]) for g in r["ingredients"]), "ingrédients,", len(r.get("sources", [])), "sources")
