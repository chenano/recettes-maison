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
    "tajine-agneau-pruneaux": ("tajine-pruneaux.jpg", "réduite"),
    "khobz": ("khobz.jpg", "recadrée et réduite"),
    "harcha": ("harcha.jpg", "réduite"),
    "rfissa-poulet": ("rfissa.jpg", "réduite"),
    "zaalouk": ("zaalouk.jpg", "réduite"),
    "the-menthe": ("the-menthe.jpg", "réduite"),
    "bissara": ("bissara.jpg", "réduite"), "dchicha": ("dchicha.jpg", "réduite"), "poisson-frit": ("poisson-frit.jpg", "réduite"),
    "sandwich-poisson": ("sandwich-poisson.jpg", "réduite"), "riz-saute-oeufs": ("riz-saute-oeufs.jpg", "réduite"),
    "salade-pois-chiches-thon": ("salade-pois-chiches-thon.jpg", "réduite"), "soupe-lentilles-corail": ("soupe-lentilles-corail.jpg", "réduite"),
    "lentilles": ("lentilles.jpg", "réduite"), "loubia": ("loubia.jpg", "réduite"), "baghrir": ("baghrir.jpg", "recadrée et réduite"),
    "cake-marocain": ("cake-marocain.jpg", "réduite"), "chakchouka": ("chakchouka.jpg", "réduite"), "malwi": ("malwi.jpg", "non modifiée"),
    "tajine-poisson": ("tajine-poisson.jpg", "non modifiée"), "rghayef": ("rghayef.jpg", "réduite"), "maqarouna": ("maqarouna.jpg", "réduite"),
    "spaghetti-aglio-olio": ("spaghetti-aglio-olio.jpg", "réduite"), "pates-thon-tomate": ("pates-thon-tomate.jpg", "réduite"),
    "omelette": ("omelette.jpg", "non modifiée"),
    "bid-maticha": ("bid-maticha.jpg", "recadrée"), "kefta-poele": ("kefta-poele.jpg", "non modifiée"),
    "salade-marocaine": ("salade-marocaine.jpg", "réduite"), "escalopes-poulet-panees": ("escalopes-poulet-panees.jpg", "non modifiée"),
    "poulet-creme-champignons": ("poulet-creme-champignons.jpg", "non modifiée"), "taboule": ("taboule.jpg", "réduite"),
    "frites": ("frites.jpg", "réduite"),
    # série du 8 novembre 2026 (20 recettes) : Commons réduites à 1280 px ; Flickr et petits originaux non modifiés
    "batbout": ("batbout.jpg", "réduite"), "sfenj": ("sfenj.jpg", "réduite"), "maakouda": ("maakouda.jpg", "non modifiée"),
    "briouates-kefta": ("briouates-kefta.jpg", "réduite"), "sellou": ("sellou.jpg", "réduite"), "ghriba": ("ghriba.jpg", "non modifiée"),
    "seffa-medfouna": ("seffa-medfouna.jpg", "réduite"), "mrouzia": ("mrouzia.jpg", "réduite"),
    "tajine-petits-pois-artichauts": ("tajine-petits-pois-artichauts.jpg", "non modifiée"), "taktouka": ("taktouka.jpg", "non modifiée"),
    "crepes": ("crepes.jpg", "réduite"), "pancakes": ("pancakes.jpg", "réduite"), "hachis-parmentier": ("hachis-parmentier.jpg", "non modifiée"),
    "gratin-dauphinois": ("gratin-dauphinois.jpg", "non modifiée"), "tortilla-espagnole": ("tortilla-espagnole.jpg", "réduite"),
    "houmous": ("houmous.jpg", "réduite"), "falafel": ("falafel.jpg", "réduite"), "shawarma-poulet": ("shawarma-poulet.jpg", "réduite"),
    "butter-chicken": ("butter-chicken.jpg", "réduite"), "biryani-poulet": ("biryani-poulet.jpg", "réduite"),
}
# pays d'origine des recettes qui ne sont pas marocaines (d'après le champ « region » de leur recherche)
CUISINE = {"riz-saute-oeufs": "Chinoise", "salade-pois-chiches-thon": "Italienne", "soupe-lentilles-corail": "Turque",
           "spaghetti-aglio-olio": "Italienne", "pates-thon-tomate": "Italienne", "omelette": "Française",
           "escalopes-poulet-panees": "Française", "poulet-creme-champignons": "Française et suisse", "taboule": "Libanaise",
           "frites": "Belge et française",
           "crepes": "Française", "pancakes": "Américaine", "hachis-parmentier": "Française", "gratin-dauphinois": "Française",
           "tortilla-espagnole": "Espagnole", "houmous": "Libanaise", "falafel": "Levantine", "shawarma-poulet": "Libanaise",
           "butter-chicken": "Indienne", "biryani-poulet": "Indienne"}
# date de la contre-vérification (deuxième série : faite le 7 novembre 2026)
SERIE2 = {"lentilles", "loubia", "bissara", "dchicha", "chakchouka", "maqarouna", "poisson-frit", "sandwich-poisson", "tajine-poisson",
          "baghrir", "cake-marocain", "malwi", "rghayef", "spaghetti-aglio-olio", "pates-thon-tomate", "omelette", "riz-saute-oeufs",
          "salade-pois-chiches-thon", "soupe-lentilles-corail",
          "bid-maticha", "kefta-poele", "salade-marocaine", "escalopes-poulet-panees", "poulet-creme-champignons", "taboule"}
SERIE4 = {"frites",  # contre-vérification faite après le 7 novembre : date lue sur le fichier de vérification
          "batbout", "sfenj", "maakouda", "briouates-kefta", "sellou", "ghriba", "seffa-medfouna", "mrouzia",
          "tajine-petits-pois-artichauts", "taktouka", "crepes", "pancakes", "hachis-parmentier", "gratin-dauphinois",
          "tortilla-espagnole", "houmous", "falafel", "shawarma-poulet", "butter-chicken", "biryani-poulet"}
# texte alternatif quand la photo ne montre pas exactement la recette (la photo du tajine aux pruneaux est un tajine de veau)
IMG_ALT = {"tajine-agneau-pruneaux": "Tajine aux pruneaux et aux amandes, dans son plat en terre",
           "khobz": "Piles de khobz ronds sur un étal de Chefchaouen",
           "the-menthe": "Théières marocaines et verre de thé à la menthe sur un plateau",
           "bissara": "Bols de bissara arrosés d'huile d'olive et de cumin, avec olives et khobz",
           "poisson-frit": "Sardines frites, farinées, disposées en rosace avec du citron",
           "sandwich-poisson": "Sandwich de sardines dans un petit pain, avec de la salade",
           "salade-pois-chiches-thon": "Salade de pois chiches au thon (photo d'une version avec carotte et fromage)",
           "dchicha": "Soupe d'orge à la tomate dans la marmite",
           "lentilles": "Lentilles aux pommes de terre et aux carottes dans un plat décoré, photographiées au Maroc",
           "loubia": "Haricots blancs en sauce tomate avec du persil, ici avec des morceaux de viande (photo prise en Tunisie)",
           "baghrir": "Baghrir posé sur un torchon, sa face criblée de petits trous",
           "cake-marocain": "Tranches de cake marocain (meskouta) sur une assiette",
           "chakchouka": "Œufs cuits dans une poêle en fonte sur des poivrons et des tomates, avec du persil",
           "malwi": "Malwi (meloui) servi sur une assiette marocaine, dans un riad de Marrakech",
           "tajine-poisson": "Tajine de poisson aux pommes de terre et aux olives vertes, en sauce tomate",
           "rghayef": "Assortiment de rghayef carrés, dorés à la poêle (la farce ne se voit pas sur la photo)",
           "maqarouna": "Gratin de macaronis à la viande hachée sous une béchamel dorée (photo d'un pastitsio grec, plat très proche)",
           "spaghetti-aglio-olio": "Spaghetti à l'ail, à l'huile d'olive et au piment rouge, avec du persil",
           "pates-thon-tomate": "Spaghetti nappés de sauce tomate au thon",
           "omelette": "Omelette roulée, jaune et sans coloration, parsemée de ciboulette",
           "bid-maticha": "Bid w maticha : œufs cuits dans une sauce tomate, servis dans un plat en terre avec du pain",
           "kefta-poele": "Boulettes de kefta cuites, sur une assiette, avec un pain rond et des coupelles de sauce et d'épices",
           "salade-marocaine": "Tomates, concombre et persil coupés en petits dés dans un saladier (photo d'une salade arabe, très proche)",
           "escalopes-poulet-panees": "Escalopes de poulet panées et dorées, avec du brocoli et des pommes de terre",
           "poulet-creme-champignons": "Émincé de volaille aux champignons à la crème, sur des tagliatelles",
           "taboule": "Taboulé au persil garni de rondelles de citron et de feuilles de laitue (photo prise en Jordanie)",
           "frites": "Frites maison dorées, coupées en gros bâtonnets, sur une assiette",
           "batbout": "Deux batbouts gonflés qui cuisent sur une plaque en fonte, au Maroc",
           "sfenj": "Sfenj en anneau, dorés et brillants, sur une assiette, à Marrakech",
           "maakouda": "Maakouda : galettes de pommes de terre aux herbes, dorées à la friture",
           "briouates-kefta": "Briouates pliées en triangle et dorées, sur une assiette blanche (la photo ne précise pas leur garniture)",
           "sellou": "Sellou moulé en dôme et décoré d'amandes, une part coupée",
           "ghriba": "Ghriba aux amandes craquelée et poudrée de sucre glace",
           "seffa-medfouna": "Seffa de vermicelles en dôme, décorée de lignes de cannelle et de sucre glace, dans un plat bleu, au Maroc",
           "mrouzia": "Mrouzia en gros plan : agneau au miel, raisins secs et amandes (photo prise au Maroc)",
           "tajine-petits-pois-artichauts": "Tajine de bœuf aux petits pois et au citron confit, servi sur de la semoule (photo d'une version sans artichauts)",
           "taktouka": "Taktouka, salade cuite de poivrons et de tomates (photographiée dans un restaurant marocain et libanais d'Honolulu)",
           "crepes": "Crêpe bretonne pliée, nappée de caramel au beurre salé et de sucre glace (une des garnitures possibles)",
           "pancakes": "Pile de pancakes américains nappés de sirop d'érable",
           "hachis-parmentier": "Hachis parmentier gratiné et entamé : la purée sur la viande hachée",
           "gratin-dauphinois": "Gratin dauphinois doré dans son plat",
           "tortilla-espagnole": "Tortilla de patatas entière et dorée, sur une assiette",
           "houmous": "Houmous à la libanaise dans un bol, avec huile d'olive, pois chiches entiers et paprika",
           "falafel": "Falafels dorés, alignés",
           "shawarma-poulet": "Chawarma de poulet roulé dans un pain lavash et coupé en deux, avec de la roquette",
           "butter-chicken": "Butter chicken (murgh makhani) dans un bol blanc, avec de la coriandre",
           "biryani-poulet": "Biryani de poulet à la hyderabadi dans une marmite en cuivre, avec du raïta"}
# rayon de l'accueil (catégories)
RAYON = {"couscous-sept-legumes": "Plats", "tajine-poulet-citron-olives": "Tajines", "harira": "Soupes",
         "pastilla-poulet": "Plats", "tajine-kefta-oeufs": "Tajines", "msemen": "Pains",
         "tajine-agneau-pruneaux": "Tajines", "khobz": "Pains", "harcha": "Pains", "rfissa-poulet": "Plats",
         "zaalouk": "Salades", "the-menthe": "Boissons",
         # novembre 2026, deuxième série (une liste = plusieurs rayons, le premier est le principal)
         "lentilles": "Plats", "loubia": "Plats", "bissara": "Soupes", "dchicha": "Soupes", "chakchouka": "Plats",
         "maqarouna": "Plats", "poisson-frit": "Poissons", "sandwich-poisson": "Poissons", "tajine-poisson": ["Poissons", "Tajines"],
         "baghrir": ["Pains", "Douceurs"], "cake-marocain": "Douceurs", "malwi": "Pains", "rghayef": "Pains",
         "spaghetti-aglio-olio": "D'ailleurs", "pates-thon-tomate": "D'ailleurs", "omelette": "D'ailleurs",
         "riz-saute-oeufs": "D'ailleurs", "salade-pois-chiches-thon": ["D'ailleurs", "Salades"],
         "soupe-lentilles-corail": ["D'ailleurs", "Soupes"],
         # troisième série : 6 recettes faciles
         "bid-maticha": "Plats", "kefta-poele": "Plats", "salade-marocaine": "Salades", "escalopes-poulet-panees": "D'ailleurs",
         "poulet-creme-champignons": "D'ailleurs", "taboule": ["D'ailleurs", "Salades"], "frites": "D'ailleurs",
         # cinquième série : 20 recettes (8 novembre 2026)
         "batbout": "Pains", "sfenj": "Douceurs", "maakouda": "Plats", "briouates-kefta": "Plats", "sellou": "Douceurs",
         "ghriba": "Douceurs", "seffa-medfouna": "Plats", "mrouzia": "Tajines", "tajine-petits-pois-artichauts": "Tajines",
         "taktouka": "Salades", "crepes": ["D'ailleurs", "Douceurs"], "pancakes": ["D'ailleurs", "Douceurs"],
         "hachis-parmentier": "D'ailleurs", "gratin-dauphinois": "D'ailleurs", "tortilla-espagnole": "D'ailleurs",
         "houmous": "D'ailleurs", "falafel": "D'ailleurs", "shawarma-poulet": "D'ailleurs", "butter-chicken": "D'ailleurs",
         "biryani-poulet": "D'ailleurs"}
# « à servir avec » : seulement quand le service de la recette (sourcé) cite l'accompagnement
PAIRS = {"harira": ["msemen", "khobz"], "tajine-poulet-citron-olives": ["khobz"], "tajine-agneau-pruneaux": ["khobz"],
         "tajine-kefta-oeufs": ["khobz"], "msemen": ["the-menthe"], "harcha": ["the-menthe"], "zaalouk": ["khobz"],
         "the-menthe": ["harcha", "msemen"], "khobz": ["tajine-kefta-oeufs", "zaalouk", "tajine-agneau-pruneaux", "the-menthe"],
         "bissara": ["khobz"], "chakchouka": ["khobz"], "tajine-poisson": ["khobz", "zaalouk"], "baghrir": ["the-menthe"],
         "cake-marocain": ["the-menthe"], "poisson-frit": ["sandwich-poisson"], "sandwich-poisson": ["poisson-frit", "khobz"],
         "lentilles": ["khobz"], "loubia": ["khobz", "poisson-frit"], "malwi": ["the-menthe"], "rghayef": ["the-menthe"],
         "kefta-poele": ["khobz", "salade-marocaine", "the-menthe"], "bid-maticha": ["khobz", "the-menthe"],
         "salade-marocaine": ["khobz"],
         # cinquième série
         "batbout": ["kefta-poele", "salade-marocaine", "taktouka"], "sfenj": ["the-menthe"], "sellou": ["the-menthe"],
         "ghriba": ["the-menthe"], "mrouzia": ["khobz"], "tajine-petits-pois-artichauts": ["khobz"],
         "taktouka": ["khobz", "salade-marocaine", "zaalouk"], "shawarma-poulet": ["frites"]}
PAIRS_LABEL = {"the-menthe": "Avec le thé", "khobz": "Avec le khobz", "poisson-frit": "En sandwich", "sandwich-poisson": "Les recettes utilisées"}
# nom du temps d'attente quand ce n'est pas un simple repos
SERV_STEP = {"briouates-kefta": 20, "ghriba": 10, "maakouda": 5}  # pas du choix des parts dans l'appli
REST_LABEL = {"rfissa-poulet": "Trempage", "khobz": "Levée", "poisson-frit": "Marinade", "sandwich-poisson": "Marinade", "tajine-poisson": "Marinade",
              "loubia": "Trempage", "frites": "Repos",  # frites : repos entre les deux cuissons (libellé court pour les cartes)
              "batbout": "Levée", "sfenj": "Levée", "crepes": "Repos", "pancakes": "Repos", "mrouzia": "Marinade",
              "butter-chicken": "Marinade", "biryani-poulet": "Marinade", "falafel": "Trempage", "shawarma-poulet": "Marinade",
              "sellou": "Beurre au frais", "houmous": "Trempage", "maakouda": "Levée"}  # sellou : le beurre clarifié durcit au frais pendant la suite de la préparation
# ingrédient qui renvoie vers une autre recette de l'application
LINKS = {"rfissa-poulet": {"msemen": "msemen"}}
credits = {c["file"]: c for c in json.load(open(os.path.join(APP, "img", "credits.json"), encoding="utf-8"))}
STEP_PHOTOS = {  # slug -> {index d'étape (0 = première): (fichier, texte alternatif)}
    "msemen": {4: ("msemen-etaler.jpg", "Mains qui étirent la pâte à msemen sur un plan huilé"),
               10: ("msemen-cuisson.jpg", "Msemen en train de cuire sur une grande plaque")},
}

# Photos des gestes (img/etapes/) : vraies photos, choisies une à une, crédits dans img/etapes/credits.json
_ec = os.path.join(APP, "img", "etapes", "credits.json")
ETAPES = {c["file"]: c for c in json.load(open(_ec, encoding="utf-8"))} if os.path.exists(_ec) else {}
TECH_RULES = [  # (motif cherché dans le titre et le texte de l'étape, photo, texte alternatif, légende) ; une fois par recette
    (r"râpe[^.]{0,60}tomate|tomates?[^.]{0,60}râp", "tomate-rapee.jpg", "Tomate râpée sur une râpe", "Râper la tomate"),
    (r"hache[^.]{0,40}(persil|coriandre|herbes)", "hacher-persil.jpg", "Persil haché au couteau sur une planche", "Hacher les herbes"),
    (r"émince[^.]{0,30}oignon", "oignon-emince.jpg", "Oignon émincé et ail écrasé sur une planche", "Émincer l'oignon"),
    (r"pétri[^.]{0,80}pâte|pâte[^.]{0,80}pétri|pétri[^.]{0,20}\d+ minutes", "petrir.jpg", "Mains qui pétrissent une pâte", "Pétrir la pâte"),
]
PAINS_SEULEMENT = {"petrir.jpg"}  # photo de pâte à pain : seulement pour les pains et galettes, jamais pour la viande
NEGATIONS = re.compile(r"ne pétri\w* pas|sans pétrir|ne pas pétrir")
EXCLUSIONS = {"oignon-emince.jpg": re.compile(r"oignons? verts?|cébette"), "hacher-persil.jpg": re.compile(r"ne hache pas|cisèle")}  # la photo montre un oignon jaune et de l'ail : pas pour les oignons verts
STEP_SPECIFIC = {  # slug -> {index d'étape (0 = première): (photo, texte alternatif, légende)}
    "couscous-sept-legumes": {6: ("couscous-keskas.jpg", "Graine de couscous dans le haut d'un couscoussier", "La graine à la vapeur"),
                              14: ("couscous-a-la-main.jpg", "Main qui roule une boulette de couscous au-dessus du plat", "À la main, on roule des boulettes")},
    "khobz": {9: ("ferran-marrakech.jpg", "Boulanger devant le four à bois, pains posés sur les planches, à Marrakech", "Le four du quartier, à Marrakech")},
    "the-menthe": {7: ("the-verser.jpg", "Homme qui verse le thé de haut dans les verres", "Verser de haut")},
    "baghrir": {2: ("baghrir-pate.jpg", "Pâte à baghrir lisse et fluide, dans son bol", "Une pâte lisse et fluide"),
                11: ("baghrir-miel.jpg", "Baghrir imbibé de beurre et de miel, ses petits trous brillants de sirop", "Les trous boivent le sirop")},
    "malwi": {4: ("msemen-etaler.jpg", "Mains huilées qui étalent une pâte très fine, au Maroc (ici pour des msemen)", "Étirer du bout des doigts"),
              11: ("meloui-cuisson.jpg", "Malwi qui cuit sur une plaque de terre bombée, au-dessus d'un feu de bois, au Maroc", "La cuisson à l'ancienne, sur le feu de bois")},
    "rghayef": {7: ("msemen-etaler.jpg", "Mains huilées qui étalent une pâte très fine, au Maroc (ici pour des msemen)", "Étirer du bout des doigts"),
                12: ("msemen-cuisson.jpg", "Galettes feuilletées carrées qui dorent sur une grande plaque", "Cuire jusqu'à ce qu'elles soient bien dorées")},
    "poisson-frit": {13: ("sardines-friture.jpg", "Sardines frites et dorées, posées sur du papier absorbant", "Égoutter sur du papier absorbant")},
    "frites": {5: ("frites-bain.jpg", "Frites encore pâles qui cuisent dans un panier plongé dans l'huile, sur le feu", "Les frites dans le bain d'huile")},
    "seffa-medfouna": {7: ("couscous-keskas.jpg", "Le haut d'un couscoussier posé sur la marmite, ici rempli de graine de couscous", "La cuisson à la vapeur du couscoussier")},
    "crepes": {9: ("crepe-cuisson.jpg", "Crêpe qui cuit sur une crêpière électrique", "La crêpe cuit en couche fine")},
    "falafel": {12: ("falafel-friture.jpg", "Falafels qui frient dans une grande poêle d'huile, à Alep (Syrie)", "La friture des falafels")},
}
def dims(path):
    import subprocess
    out = subprocess.run(["sips", "-g", "pixelWidth", "-g", "pixelHeight", path], capture_output=True, text=True).stdout
    w, h = re.findall(r"pixel(?:Width|Height): (\d+)", out)
    return int(w), int(h)
def set_step_img(r, i, fn, alt, cap):
    # photo de geste (img/etapes/) ou photo d'une autre recette réutilisée (img/, crédits dans img/credits.json)
    c, rel = (ETAPES[fn], "img/etapes/" + fn) if fn in ETAPES else (credits[fn], "img/" + fn)
    w, h = dims(os.path.join(APP, rel))
    src = "Flickr" if "flickr.com" in c["page"] else "Wikimedia Commons"
    modif = "réduite"  # même règle que outils/photos.py ; sans taille d'origine connue : « réduite »
    if c.get("orig_size"):
        ow, oh = map(int, c["orig_size"].split("x"))
        modif = "non modifiée" if (w, h) == (ow, oh) else "réduite" if abs(w / h - ow / oh) <= 0.01 * (ow / oh) else "recadrée et réduite"
    r["steps"][i]["img"] = {"src": rel, "alt": alt, "caption": cap, "w": w, "h": h,
        "credit": f"Photo de l'étape « {r['steps'][i]['title']} » : {c['author']}, {src}, licence {c['license']} ({modif})."}
def photos_des_gestes(slug, r):
    used = {st["img"]["src"].rsplit("/", 1)[-1] for st in r["steps"] if st.get("img")}
    for i, (fn, alt, cap) in STEP_SPECIFIC.get(slug, {}).items():
        set_step_img(r, i, fn, alt, cap); used.add(fn)
    for i, st in enumerate(r["steps"]):
        if st.get("img"):
            continue
        txt = (st["title"] + " " + (st["text"] if isinstance(st["text"], str) else " ".join(st["text"]))).lower()
        for rx, fn, alt, cap in TECH_RULES:
            if fn in PAINS_SEULEMENT and ("Pains" not in (RAYON.get(slug) if isinstance(RAYON.get(slug), list) else [RAYON.get(slug)]) or NEGATIONS.search(txt)):
                continue
            if fn in EXCLUSIONS and EXCLUSIONS[fn].search(txt):
                continue
            # la photo de l'oignon émincé montre aussi de l'ail : seulement pour une recette qui en contient
            if fn == "oignon-emince.jpg" and not any(it.get("canon") == "ail" for g in r["ingredients"] for it in g["items"]):
                continue
            if fn not in used and re.search(rx, txt):
                set_step_img(r, i, fn, alt, cap); used.add(fn); break

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

# Photo et rayon de chaque ingrédient : clé de la banque img/ing/banque.json
_bq = os.path.join(APP, "img", "ing", "banque.json")
BANQUE = json.load(open(_bq, encoding="utf-8")) if os.path.exists(_bq) else {}
ALIAS = {  # libellés libres donnés par la recherche -> clé de la banque
    "gingembre moulu": "gingembre", "poivre noir moulu": "poivre", "poivre noir": "poivre", "cannelle en bâton": "cannelle",
    "cannelle moulue": "cannelle", "pruneau": "pruneaux", "amande": "amandes", "graines de sésame": "sesame", "sésame": "sesame",
    "huile d'olive": "huile-olive", "huile neutre": "huile", "ras el hanout": "ras-el-hanout", "lentille": "lentilles",
    "semoule fine": "semoule", "semoule moyenne": "semoule", "levure chimique": "levure-chimique", "levure boulangère": "levure-boulangere",
    "levure de boulanger": "levure-boulangere", "eau de fleur d'oranger": "fleur-oranger", "fromage frais": "jben",
    "thé vert gunpowder": "the-vert", "thé vert": "the-vert", "menthe fraîche": "menthe", "coriandre fraîche": "coriandre",
    "persil plat": "persil", "tomates": "tomate", "oignons": "oignon", "aubergines": "aubergine", "gousse d'ail": "ail",
    "piment de cayenne": "piment-cayenne", "cumin moulu": "cumin", "paprika doux": "paprika", "nigelle": "nigelle",
    "graines de nigelle": "nigelle", "anis vert": "anis", "graines d'anis": "anis", "farine de blé": "farine", "farine blanche": "farine",
    "sel fin": "sel", "œuf": "oeuf", "œufs": "oeuf", "oeufs": "oeuf", "citron frais": "citron", "huile de tournesol": "huile",
}
BASE = {  # identifiant (ou son début) -> clé, pour les recettes sans champ « canon »
    "viande": "agneau", "huile": "huile", "oignon": "oignon", "oignons": "oignon", "petits-oignons": "oignon",
    "tomate": "tomate", "tomates": "tomate", "gingembre": "gingembre", "curcuma": "curcuma", "poivre": "poivre",
    "sel": "sel", "safran": "safran", "persil": "persil", "coriandre": "coriandre", "pois-chiches": "pois-chiches",
    "eau": "eau", "chou": "chou", "carottes": "carotte", "navets": "navet", "courge": "courge", "courgettes": "courgette",
    "piments": "piment-vert", "beurre": "beurre", "smen": "smen", "celeri": "celeri", "lentilles": "lentilles",
    "concentre": "concentre-tomate", "cannelle": "cannelle", "farine": "farine", "vermicelles": "vermicelles",
    "citron": "citron", "citron-confit": "citron-confit", "olives": "olives", "semoule": "semoule", "miel": "miel",
    "poulet": "poulet", "sucre": "sucre", "sucre-glace": "sucre-glace", "oeufs": "oeuf", "amandes": "amandes",
    "fleur-oranger": "fleur-oranger", "feuilles": "warqa", "jaune": "oeuf", "paprika": "paprika", "cumin": "cumin",
    "piment": "piment-cayenne", "ail": "ail", "khobz": "khobz", "jus": "citron",
}
OVERRIDE = {"couscous-sept-legumes": {"semoule": "couscous", "bouillon-graine": "bouillon"},
            "tajine-kefta-oeufs": {"viande": "boeuf-hache"},
            "tajine-poulet-citron-olives": {"herbes": "coriandre"}}
def canon_key(slug, it):
    if it["id"] in OVERRIDE.get(slug, {}):
        return OVERRIDE[slug][it["id"]]
    c = (it.get("canon") or "").strip()
    if c:
        k = ALIAS.get(c.lower(), c)
    else:
        parts, k = it["id"].split("-"), None
        for n in range(len(parts), 0, -1):
            k = BASE.get("-".join(parts[:n]))
            if k: break
    if k == "huile" and "olive" in it.get("name", "").lower():
        k = "huile-olive"
    return k

# Corrections des contre-vérifications des nouvelles recettes (recherche/verification-<slug>.json)
VERIF_SKIP = {  # slug -> {index de correction écartée: raison}
    "khobz": {7: "l'appli affiche désormais 315 ml, car elle arrondit à 5 ml près sous 500 ml"},
    "gratin-dauphinois": {0: "retirer la quantité de la gousse qui frotte le plat, pour éviter « ¼ gousse » pour 1 personne : elle garde plutôt une quantité fixe, 1 gousse quel que soit le nombre de personnes",
                          1: "la phrase de l'étape 4 reste donc « Coupe 1 gousse d'ail en deux »"},
}
def chemin(r, champ):
    obj, parts = r, re.findall(r"[^.\[\]]+|\[\d+\]", champ)
    for p in parts[:-1]:
        obj = obj[int(p[1:-1])] if p.startswith("[") else obj[p]
    last = parts[-1]
    return obj, (int(last[1:-1]) if last.startswith("[") else last)
def appliquer_verif(slug, r):
    fn = os.path.join(APP, "recherche", f"verification-{slug}.json")
    if not os.path.exists(fn):
        return None
    v = json.load(open(fn, encoding="utf-8"))
    n = 0
    a_retirer = []  # entrées entières à retirer (« (retirer toute l'entrée …) »), supprimées après les autres corrections
    for k, c in enumerate(v.get("corrections", [])):
        if k in VERIF_SKIP.get(slug, {}):
            continue
        obj, key = chemin(r, c["champ"])
        cur = obj[key]
        if isinstance(cur, dict) and isinstance(c["propose"], str) and c["propose"].startswith("(retirer"):
            a_retirer.append((obj, key)); n += 1
            continue
        if isinstance(cur, str):
            assert c["actuel"] in cur, f"{slug} : correction {k} introuvable dans {c['champ']} : {c['actuel'][:70]}"
            nouveau = cur.replace(c["actuel"], c["propose"], 1)
            m = re.fullmatch(r"sources\[(\d+)\]\.url", c["champ"])
            if m and nouveau == "":  # URL vidée : toute la source est retirée
                a_retirer.append((r["sources"], int(m.group(1)))); n += 1
                continue
            if isinstance(obj, list) and nouveau.strip() == "":  # élément de liste vidé (variante, erreur…) : retiré
                a_retirer.append((obj, key)); n += 1
                continue
            obj[key] = nouveau
        else:
            new = c["propose"]
            obj[key] = json.loads(new) if isinstance(new, str) and re.fullmatch(r"-?\d+(\.\d+)?|null", new.strip()) else new
        n += 1
    for obj, key in sorted(a_retirer, key=lambda t: -t[1]):
        del obj[key]
    known = {x["url"] for x in r.get("sources", [])}
    for sa in v.get("sources_ajoutees", []):
        if sa["url"] not in known:
            r.setdefault("sources", []).append({"name": sa["name"], "url": sa["url"], "used_for": "Contre-vérification : " + sa["ce_qu_elle_confirme"]})
    quand = "7 novembre 2026" if slug in SERIE2 else "6 novembre 2026"
    if slug in SERIE4:  # date réelle du fichier de contre-vérification
        import datetime
        d = datetime.date.fromtimestamp(os.path.getmtime(fn))
        mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]
        quand = f"{'1er' if d.day == 1 else d.day} {mois[d.month - 1]} {d.year}"
    r.setdefault("discrepancies", []).append(f"Contre-vérifiée le {quand} par une seconde recherche indépendante : verdict « {v['verdict']} », {n} correction(s) appliquée(s)."
        + (f" {len(VERIF_SKIP.get(slug, {}))} correction(s) proposée(s) non retenue(s) : " + " ; ".join(VERIF_SKIP[slug].values()) if VERIF_SKIP.get(slug) else ""))
    return v

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

# Notes d'ingrédients comptés à la pièce : à l'infinitif, pour rester justes quand on cuisine pour 1 (« ¾ gousse d'ail, à hacher »)
NOTE_FIXES = {
    "lentilles": {"ail": ("hachées finement", "à hacher finement"), "oignon": ("râpé", "à râper")},
    "loubia": {"ail": ("hachées finement ou pressées", "à hacher finement ou à presser"), "oignon": ("râpé", "à râper")},
    "dchicha": {"tomates": ("râpées, sans la peau", "à râper, sans la peau")},
    "chakchouka": {"poivrons": ("entiers, à griller", "à griller sans les couper"), "ail": ("hachées", "à hacher"), "oignon": ("haché", "à hacher")},
    "poisson-frit": {"ail": ("pelées", "à peler")},
    "rghayef": {"oignons": ("émincés très finement", "à émincer très finement")},
    "tajine-agneau-pruneaux": {"oignons": ("hachés finement, ou râpés", "à hacher finement, ou à râper")},
    "rfissa-poulet": {"oignons": ("émincés finement", "à émincer finement")},
    "taboule": {"tomates": ("rouges, mûres mais fermes", "bien rouge, mûre mais ferme, à choisir une à une")},
    "tajine-poulet-citron-olives": {"oignons": ("hachés finement", "à hacher finement"),
                                    "poulet": ("environ 1,5 kg, coupé en 4 à 6 morceaux", "environ 1,5 kg pièce, à couper en 4 à 6 morceaux")},
}
# Ingrédients qui se préparent entiers : quantité arrondie à l'unité supérieure (on grille un poivron entier, pas ¾)
ROUND_UP = {"chakchouka": ["poivrons"], "escalopes-poulet-panees": ["oeufs"],  # un œuf entier pour paner, même pour 1
            # épices entières : un clou, une feuille, une pincée entière, même pour 1 personne (on ne coupe pas un clou de girofle en quatre)
            "butter-chicken": ["clous", "laurier"], "biryani-poulet": ["clous", "laurier", "safran"], "couscous-sept-legumes": ["safran"],
            "tortilla-espagnole": ["oeufs"],  # pas « 1½ œuf » pour 1 personne
            "briouates-kefta": ["jaune"]}  # un jaune entier pour coller, même pour une petite fournée
def apres_verif(slug, r):
    """Ajouts faits après lecture des contre-vérifications, avec leur source."""
    if slug == "tajine-agneau-pruneaux":
        # Grantourismo : son robots.txt interdit tout le site à anthropic-ai et Claude-Web (relu le 8 novembre 2026). La source est
        # retirée avec ce qui ne reposait que sur elle ; le reste est attribué aux sources lisibles qui le disent (relu le même jour).
        r["sources"] = [x for x in r["sources"] if "grantourismo" not in x["url"]]
        it = next(i for g in r["ingredients"] for i in g["items"] if "Grantourismo" in i.get("note", ""))
        it["note"] = it["note"].replace("My Moroccan Food et Grantourismo de l'épaule", "My Moroccan Food de l'épaule")
        def sec(start):
            return next(x for x in r["secrets"] if x["text"].startswith(start))
        x = sec("Pose sur la viande un bouquet")
        rep(x, "source", " ; Grantourismo, recette de Terence Carter apprise de Jamila puis retouchée (bouquet à retirer)", "")
        x = sec("La sauce est prête quand")
        x["text"] = "La sauce est prête quand elle a réduit et qu'elle est épaisse, liée par les oignons fondus."
        x["source"] = "Choumicha (« sauce réduite ») ; Cooking with Alia (« sauce épaisse ») ; My Moroccan Food (beaucoup d'oignons pour une sauce épaisse)"
        x = sec("Choisis un morceau")
        rep(x, "source", "My Moroccan Food ; Grantourismo ;", "My Moroccan Food ;")
        x = sec("Aujourd'hui, au Maroc, on cuit souvent le tajine")
        x["text"] = "Le tajine en terre décoré sert surtout au service : réchauffe-le avant d'y dresser la viande cuite à la cocotte."
        x["source"] = "Choumicha (fiche du tajine en terre : le tajine décoré est réservé au service et réchauffé avant de dresser)"
        k = next(i for i, m in enumerate(r["mistakes"]) if m.startswith("Croire qu'au Maroc le tajine s'accompagne de couscous"))
        del r["mistakes"][k]  # seule Grantourismo disait que le couscous est un plat à part
        assert "le couscous est un plat à part" in r["serving"]
        r["serving"] = r["serving"].replace("Avec du pain pour saucer ; le couscous est un plat à part.",
                                            "Avec du pain pour saucer (Morocco World News) ; My Moroccan Food propose aussi du couscous.")
        k = next(i for i, v in enumerate(r["variants"]) if v.startswith("Amandes grillées plutôt que frites"))
        rep(r["variants"], k, "(Le360, Grantourismo)", "(Le360)")
        def dis(start):
            return next(i for i, v in enumerate(r["discrepancies"]) if v.startswith(start))
        rep(r["discrepancies"], dis("Amandes : frites"), "effilées chez Le360 et Grantourismo", "effilées chez Le360")
        rep(r["discrepancies"], dis("Curcuma (My Moroccan Food"), "Cooking with Alia en option, Grantourismo)", "Cooking with Alia en option)")
        r["discrepancies"][dis("Moment des pruneaux")] = "Moment des pruneaux : toutes les sources lisibles les cuisent à part. Retenu : à part."
        rep(r["discrepancies"], dis("Durée en cocotte"), ", au moins 2 h (Grantourismo)", "")
        r.setdefault("unverified", []).append(
            "Grantourismo (recette de Terence Carter) : son fichier robots.txt interdit tout le site aux robots d'Anthropic (relu le 8 novembre 2026). "
            "La source est retirée, avec ce qui ne reposait que sur elle : la cuisson en cocotte puis le service dans le tajine en terre, "
            "la sauce « sirupeuse » et l'idée que le couscous serait toujours un plat à part.")
    if slug == "gratin-dauphinois":  # contre-vérification : l'appli affichait « ¼ gousse d'ail » pour 1 personne
        next(it for g in r["ingredients"] for it in g["items"] if it["id"] == "ail-plat")["fixed"] = True
    for g in r["ingredients"]:
        for it in g["items"]:
            if it["id"] in ROUND_UP.get(slug, []):
                it["round"] = "up"
    for g in r["ingredients"]:
        for it in g["items"]:
            if it["id"] in NOTE_FIXES.get(slug, {}):
                old, new = NOTE_FIXES[slug][it["id"]]
                if it.get("note") != new:  # la contre-vérification a parfois déjà fait la même correction
                    assert it.get("note") == old, f"{slug} : note de {it['id']} changée : {it.get('note')}"
                    it["note"] = new
    if slug == "the-menthe":
        i = next(k for k, v in enumerate(r["variants"]) if v.startswith("Menthe pouliot"))
        r["variants"][i] += (" Pour la menthe pouliot pendant la grossesse, demande l'avis d'un professionnel de santé : son huile a servi autrefois"
                             " à provoquer l'avortement (Agence européenne des médicaments, déclaration sur la pulégone).")
        r["sources"].append({"name": "Agence européenne des médicaments (HMPC), « Public statement on the use of herbal medicinal products containing pulegone and menthofuran », révision 1",
                             "url": "https://www.ema.europa.eu/en/documents/scientific-guideline/public-statement-use-herbal-medicinal-products-containing-pulegone-and-menthofuran-revision-1_en.pdf",
                             "used_for": "L'huile de menthe pouliot a servi autrefois à provoquer les règles et l'avortement, et n'est plus utilisée ; aucune recommandation propre à la feuille en infusion (lu le 6 novembre 2026)."})

    if slug in ("spaghetti-aglio-olio", "pates-thon-tomate"):
        # Accademia Italiana della Cucina : son robots.txt interdit aux robots ses pages de recettes (« User-agent: * » puis
        # « Disallow: /it/ricette/ricetta », relu le 7 novembre 2026). Ses pages sont retirées des sources, avec ce qui ne reposait
        # que sur elles ; le reste est attribué aux sources lisibles qui le confirment (contre-vérification).
        r["sources"] = [x for x in r["sources"] if "accademiaitalianadellacucina" not in x["url"]]
        def var(start):
            return next(k for k, v in enumerate(r["variants"]) if v.startswith(start))
        def dis(start):
            return next(k for k, v in enumerate(r["discrepancies"]) if v.startswith(start))
    if slug == "spaghetti-aglio-olio":
        r["region"] = ("Italie. Attribué par tradition au Latium, il est né à Naples et en Campanie selon Turismo Roma et Reporter Gourmet ; "
                       "l'origine reste discutée entre la Toscane, Naples et Rome (Dissapore)")
        rep(r["secrets"][0], "source", "Accademia Italiana della Cucina (version napolitaine : ail et piment colorés « sans brûler », poêle écartée du feu dès que l'ail est blond), ", "")
        rep(r["secrets"][1], "source", "Accademia Italiana della Cucina (version napolitaine), ", "")
        rep(r["secrets"][4], "source", ", Accademia Italiana della Cucina (« très al dente »)", "")
        rep(r["secrets"][5], "source", ", Accademia Italiana della Cucina", "")
        rep(r["secrets"][7], "text", "et ni l'Accademia Italiana della Cucina ni Turismo Roma n'en prévoient.", "et ni Turismo Roma ni les deux recettes de Dissapore n'en prévoient.")
        rep(r["secrets"][7], "source", "Accademia Italiana della Cucina, Turismo Roma", "Turismo Roma, Dissapore")
        rep(r["secrets"][10], "source", " ; Accademia Italiana della Cucina (vermicelles à Naples)", "")
        rep(r["mistakes"], 0, "(Accademia Italiana della Cucina, Turismo Roma, Dissapore)", "(Turismo Roma, Dissapore, Giorgio Locatelli)")
        rep(r["mistakes"], 1, "(Accademia Italiana della Cucina, Turismo Roma, Antonio Carluccio)", "(Turismo Roma, Antonio Carluccio)")
        del r["variants"][var("Au poivre noir")]
        r["variants"][var("À la romaine, sans persil")] = ("Sans persil : seulement l'ail, l'huile et le piment, comme Antonio Carluccio et Giorgio Locatelli ; "
                                                           "Dissapore (2022) le juge « pas nécessaire ».")
        r["discrepancies"][dis("Pâtes pour 4")] = ("Pâtes pour 4 : 360 g (Turismo Roma, portions non précisées), 400 g (Dissapore, deux recettes), 450 g (Carluccio), "
                                                   "500 g (Locatelli). Retenu : 400 g, valeur la plus fréquente et médiane.")
        r["discrepancies"][dis("Ail : de 1 à 6")] = ("Ail : de 1 à 6 gousses pour 4. Ramenée à 400 g de pâtes, la médiane des cinq recettes lues est de 3,2 gousses "
                                                     "(contre-vérification, calcul python). Retenu : 3 gousses.")
        rep(r["discrepancies"], dis("Huile : de 60 ml"), " L'Accademia (Naples) dit « 2 verres », volume impossible à chiffrer ; elle n'est pas comptée.", "")
        rep(r["discrepancies"], dis("Coupe de l'ail"), "lamelles (Accademia, Naples ; Locatelli, environ 1 mm)", "lamelles (Locatelli, environ 1 mm)")
        rep(r["discrepancies"], dis("Couleur de l'ail"), "(Accademia, Turismo Roma, Dissapore, Locatelli)", "(Turismo Roma, Dissapore, Locatelli)")
        r["discrepancies"][dis("Moment du piment")] = ("Moment du piment : avec l'ail dès le début (Dissapore 2022 ; Carluccio) ou quand l'ail commence à dorer "
                                                       "(Turismo Roma, Dissapore 2017, Locatelli). Retenu : dès le début, plus simple ; l'autre façon, un peu plus suivie, "
                                                       "est donnée en astuce.")
        rep(r["discrepancies"], dis("Eau de cuisson dans la sauce"), "une louche (Accademia, Naples ; Dissapore)", "une louche (Dissapore)")
        r["discrepancies"][dis("Persil :")] = ("Persil : présent (Dissapore 2017 ; Turismo Roma), « pas nécessaire » (Dissapore 2022), absent (Carluccio ; Locatelli). "
                                               "Retenu : facultatif.")
        r["discrepancies"][dis("Finition :")] = "Finition : pâtes sautées dans la poêle (Turismo Roma, Dissapore, Locatelli, Carluccio). Retenu : la poêle."
        r["unverified"].append("Accademia Italiana della Cucina : son fichier robots.txt interdit aux robots ses pages de recettes (relu le 7 novembre 2026). "
                               "Ses deux recettes ont donc été retirées des sources, avec ce qui ne reposait que sur elles (variantes au poivre noir et « à la romaine », "
                               "« Rome a sa version ») ; les quantités retenues restent justifiées sans elles (contre-vérification).")
    if slug == "pates-thon-tomate":
        r["region"] = ("Toute l'Italie : recette de Bologne déposée en 2018 par l'Accademia Italiana della Cucina (Dissapore ; Il Giornale del Cibo), "
                       "versions de Rome et de Palerme (Wikipédia, Dissapore)")
        rep(r["secrets"][0], "source", "Accademia Italiana della Cucina (thon ajouté 10 minutes avant la fin)", "recette bolognaise d'après Dissapore, 2018 (thon ajouté 10 minutes avant la fin)")
        r["secrets"][1] = {"text": "Prends du thon à l'huile, de préférence à l'huile d'olive : sa chair est plus moelleuse et plus savoureuse.",
                           "source": "Dissapore (version aux tomates cerises : « consistance plus moelleuse, goût plus riche »)"}
        rep(r["secrets"][2], "source", "Accademia Italiana della Cucina ; Dissapore", "Dissapore (2018 et 2022)")
        r["secrets"][3] = {"text": "Égoutte bien le thon, puis émiette-le.", "source": "Dissapore (thon égoutté) ; recette bolognaise d'après Dissapore, 2018, et Il Giornale del Cibo (thon émietté)"}
        rep(r["secrets"][5], "source", "Accademia Italiana della Cucina ; ", "")
        r["secrets"][7] = {"text": "Le persil se met cru, sur l'assiette déjà servie.",
                           "source": "Recette bolognaise, d'après Dissapore (2018) et Il Giornale del Cibo (2019) : variante admise"}
        for k in (1, 2, 3):
            rep(r["mistakes"], k, "Accademia Italiana della Cucina, ", "")
        rep(r, "serving", "si tu aimes (Accademia Italiana della Cucina).", "si tu aimes (recette bolognaise, d'après Dissapore et Il Giornale del Cibo).")
        rep(r["variants"], var("La recette de Bologne"), "La recette de Bologne (Accademia Italiana della Cucina) :",
            "La recette de Bologne, déposée par l'Accademia Italiana della Cucina (reprise par Dissapore en 2018 et par Il Giornale del Cibo en 2019) :")
        del r["variants"][var("Au thon frais, à la sicilienne")]
        rep(r["discrepancies"], dis("Pâtes pour 4"), "320 g (Accademia, Bologne ; Dissapore)", "320 g (recette bolognaise, d'après Dissapore 2018 ; Dissapore 2022)")
        rep(r["discrepancies"], dis("Pâtes pour 4"), " ; Accademia, Sicile)", ")")
        rep(r["discrepancies"], dis("Thon : de 40"), "180 g pour 320 g à l'Accademia", "180 g pour 320 g dans la recette bolognaise d'après Dissapore 2018")
        r["discrepancies"][dis("Aromate :")] = ("Aromate : oignon (recette bolognaise, d'après Dissapore 2018 ; lectrice d'Il Giornale del Cibo) ou échalote (Dissapore 2022), "
                                                "contre ail (Dissapore, tomates cerises ; Cookist ; version romaine). Retenu : l'oignon, celui de la recette bolognaise ; "
                                                "l'ail passe en variante.")
        rep(r["discrepancies"], dis("Moment du thon"), "(Accademia, 10 minutes avant ; Cookist)", "(recette bolognaise d'après Dissapore 2018, 10 minutes avant ; Cookist)")
        rep(r["discrepancies"], dis("Moment du thon"), "les 10 minutes de l'Accademia", "les 10 minutes de la recette bolognaise")
        rep(r["discrepancies"], dis("Cuisson de la sauce"), "une demi-heure à l'Accademia (avec des tomates fraîches)", "une demi-heure dans la recette bolognaise (avec des tomates fraîches, d'après Dissapore 2018)")
        rep(r["steps"][2], "text", "émiette-le en gros morceaux", "émiette-le")
        rep(r["steps"][9], "text", ", sans en mettre trop.", ".")
        k = next(k for k, v in enumerate(r["unverified"]) if v.startswith("Nom en darija et nom en arabe"))
        r["unverified"][k] = ("Nom en darija : aucun trouvé en lettres latines dans une source, laissé vide. Nom arabe (معكرونة بالتونة) : employé par le site "
                              "marocain Lalla Moulati, dans deux articles ; pas de deuxième source indépendante.")
        rep(r["unverified"], next(k for k, v in enumerate(r["unverified"]) if v.startswith("Poids égoutté du thon")),
            "du thon de l'Accademia (« 180 g de thon à l'huile ») : non précisé par la source.", "du thon de la recette bolognaise (« 180 g de thon à l'huile », d'après Dissapore 2018) : non précisé.")
        r["unverified"].append("Accademia Italiana della Cucina : son fichier robots.txt interdit aux robots ses pages de recettes (relu le 7 novembre 2026). "
                               "Ses deux recettes ont donc été retirées des sources ; la recette bolognaise reste citée d'après ses reprises (Dissapore, Il Giornale del Cibo). "
                               "Ce qui ne reposait que sur elles a été retiré : la variante au thon frais à la sicilienne, le thon « en gros morceaux », le persil « avec mesure » "
                               "et le thon « de qualité ».")

    if slug == "taboule":
        # Taste of Beirut n'a pu être relu à la contre-vérification (site fermé, copies d'archive non ouvertes) : on retire ce qui
        # ne reposait que sur lui, et on garde ce que d'autres sources confirment (contre-vérification du 7 novembre 2026)
        r["secrets"][1] = {"text": "Prends du boulgour fin, le n° 1 : c'est le plus fin, celui du taboulé.",
                           "source": "Mama's Lebanese Kitchen (« fine cracked wheat #1 ») ; Hadia's Lebanese Cuisine ; recettelibanaise.com ; Libnanews"}
        r["secrets"][8] = {"text": "Un bon taboulé se reconnaît à son goût bien citronné.", "source": "Mama's Lebanese Kitchen"}
        assert r["secrets"][12]["text"].startswith("Joumana Accad précise ses quantités")
        del r["secrets"][12]
        rep(r["steps"][10], "text", "le taboulé doit être bien citronné, avec plus de goût de citron que d'huile.", "le taboulé doit être bien citronné.")
        k = r["mistakes"].index("Prendre du gros boulgour, celui du pilaf (Taste of Beirut).")
        r["mistakes"][k] = "Prendre du gros boulgour : il faut du boulgour fin n° 1 (Mama's Lebanese Kitchen ; Hadia's Lebanese Cuisine ; recettelibanaise.com ; Libnanews)."
        r["variants"] = [v for v in r["variants"] if not v.startswith("Boulgour trempé 5 minutes dans l'eau")]
        r["unverified"].append("Retiré faute d'avoir pu relire Taste of Beirut à la contre-vérification (site fermé, copies d'archive non rouvertes) : "
                               "« le gros boulgour sert au pilaf » (Wikipédia en anglais le dit plutôt pour les soupes), « plus de goût de citron que d'huile », "
                               "ses quantités en tasses et en onces, et le boulgour trempé 5 minutes dans l'eau ou le jus des tomates.")
    if slug == "bid-maticha":
        # même règle que la contre-vérification pour le champ region : « de tous les jours » et « tout le Maroc » ne sont dans aucune source
        rep(r, "tagline", "le plat marocain de tous les jours, à saucer avec du pain.", "un plat marocain que tout le monde sait cuisiner, à saucer avec du pain.")
        rep(r, "region", "Tout le Maroc : un plat", "Maroc : un plat")
    if slug == "salade-marocaine" and not any("hlada" in u for u in r["unverified"]):
        r["unverified"].append("« Chlada » : transcription en lettres latines du nom arabe شلاضة ; aucune source lue ne l'écrit ainsi en lettres latines.")
    if slug == "frites":
        # VLAM (« Bien de chez nous », « Lekker van bij ons ») : lu à la recherche, bloqué (403) à la contre-vérification ;
        # on retire ce qui ne reposait que sur lui (liste de la contre-vérification du 7 novembre 2026)
        it = r["ingredients"][0]["items"][0]
        assert it["id"] == "pdt"
        rep(it, "note", "type Bintje ou Agria, plutôt grosses et allongées", "type Bintje ou Agria")
        r["secrets"][0]["text"] = "Prends une pomme de terre à chair farineuse, comme la Bintje : riche en amidon, elle donne des frites dorées et croustillantes."
        k = next(k for k, v in enumerate(r["variants"]) if v.startswith("Au four"))
        r["variants"][k] = ("Au four : préchauffe le four entre 180 et 200 °C (190 °C au plus en chaleur tournante). Mélange les frites rincées et bien séchées "
                            "avec un filet d'huile (Wikipédia : 2 c. à s. pour 1 kg de pommes de terre), étale-les sur une plaque et retourne-les à mi-cuisson. "
                            "Arrête-toi au jaune doré (règlement UE 2017/2158, FSAI). Les pompiers de Cambridgeshire conseillent d'ailleurs le four, plus sûr que la casserole d'huile.")
        k = next(k for k, v in enumerate(r["variants"]) if v.startswith("À la friteuse à air"))
        r["variants"][k] = ("À la friteuse à air (Airfryer) : le règlement UE parle de 180 à 220 °C pour préchauffer un four ou une friteuse à air. Arrête-toi au jaune doré : "
                            "selon des tests de l'industrie et d'associations de consommateurs cités par l'EFSA, la friteuse à air peut donner 30 à 40 % d'acrylamide de plus qu'une friteuse à huile.")
        r["secrets"][11] = {"text": "Garde les pommes de terre au frais et dans le noir, idéalement entre 8 et 10 °C. Trop froides, elles font du sucre et brunissent vite à la friture.",
                            "source": "Apaq-W (8 à 10 °C), EFSA (sous 8 °C, plus de sucres), FSAI (8 °C ou un peu plus)"}
        r["discrepancies"][next(k for k, v in enumerate(r["discrepancies"]) if v.startswith("Conservation :"))] = (
            "Conservation : la FSA (Royaume-Uni) juge le frigo acceptable depuis le printemps 2022 (étude revue par le COT), alors que la FSAI (2009) et l'EFSA (2015) "
            "préviennent que le froid augmente les sucres et le brunissement. Retenu : endroit frais et sombre, idéalement 8 à 10 °C (Apaq-W, compatible avec la FSAI et l'EFSA), "
            "pas de frigo pour les pommes de terre à frire, en signalant l'avis de la FSA.")
        rep(r["steps"][9], "text", "Sinon, prolonge d'une minute au plus, en surveillant la couleur.", "Sinon, prolonge un peu en surveillant la couleur, et sors-les dès qu'elles sont jaune doré.")
        k = next(k for k, v in enumerate(r["discrepancies"]) if v.startswith("Durée du second bain"))
        r["discrepancies"][k] = ("Durée du second bain : 2 minutes (Wikipédia), un peu plus d'1 minute à 180 °C (Frietmuseum), « jusqu'à dorure » ailleurs. "
                                 "Retenu : 2 minutes, puis un peu plus si besoin, jusqu'au jaune doré.")
        k = next(k for k, v in enumerate(r["discrepancies"]) if v.startswith("Quantité pour 4"))
        r["discrepancies"][k] = "Quantité pour 4 : 1 kg (Cuisine Culinaire sur Chef Simon ; trois recettes VLAM lues à la recherche). Retenu : 1 kg."
        rep(r["discrepancies"], next(k for k, v in enumerate(r["discrepancies"]) if v.startswith("Reconnaissance du fritkot")), ", « depuis 2017 » selon VLAM", "")
        r["unverified"] = [u for u in r["unverified"] if not u.startswith("Four : la durée de 45 minutes")]
        r["unverified"].append("VLAM (sites « Bien de chez nous » et « Lekker van bij ons ») : lu à la recherche, mais bloqué (erreur 403) à la contre-vérification du "
                               "7 novembre 2026. Ce qui ne reposait que sur lui a été retiré : pommes de terre « grosses et allongées », papier cuisson et 45 minutes au four, "
                               "conseils de la friteuse à air, conservation « au sec », borne de 3 minutes pour le second bain, recettes de 600 et 800 g.")
    if slug == "kefta-poele":
        # seule source : Choumicha, que la contre-vérification n'a pas pu relire (site hors ligne, copies d'archive non rouvertes)
        assert r["secrets"][10]["text"].startswith("Choumicha mixe d'abord les herbes")
        del r["secrets"][10]
        r["unverified"].append("Retiré faute d'avoir pu relire Choumicha à la contre-vérification : sa façon de mixer d'abord herbes, ail, oignon et épices "
                               "en pâte avant de les travailler avec la viande (brochettes de viande hachée, n° 943).")

    if slug == "bissara":
        # mise en garde ajoutée par la contre-vérification (MedlinePlus ; OMS) : en encadré, en haut des ingrédients, pour qu'on la voie
        it = r["ingredients"][0]["items"][0]
        assert "fèves" in it["name"], it["name"]
        avert = "Attention : en cas de déficit en G6PD, les fèves peuvent provoquer une destruction des globules rouges (anémie hémolytique, appelée favisme), parfois grave : ne sers pas cette recette aux personnes concernées (MedlinePlus, Bibliothèque nationale de médecine des États-Unis ; OMS)."
        assert avert in it["note"], it["note"]
        it["note"] = it["note"].replace(" " + avert, " Favisme : lis l'encadré plus haut.")
        r.setdefault("notes", []).insert(0, {"title": "Fèves et favisme (déficit en G6PD)", "text": avert.replace("Attention : en cas", "En cas")})

    if slug == "khobz":
        # retirés : affirmations que la contre-vérification n'a pas retrouvées dans la source citée
        rep(r, "region", "(appelé aussi kesra en tamazight et agroum en tachelhit)", "(le pain se dit aussi aghroum, aɣrum, en tachelhit)")
        r["secrets"][2] = {"text": "Ni sucre ni huile, comme dans les pains de semoule et complet de Choumicha, qui n'ont que farine, levure, sel et eau.", "source": "Choumicha"}
        assert r["secrets"][11]["text"].startswith("Au Maroc, beaucoup congèlent")
        r["secrets"][11] = {"text": "Le pain que tu ne mangeras pas le jour même se congèle : laisse-le d'abord refroidir complètement, puis réchauffe-le 5 à 8 minutes au four à 170 °C.", "source": "Taste of Maroc ; MarocMama (congélation)"}
        rep(r["steps"][8], "text", " ; pas assez cuit, il reste lourd.", ".")
        it = next(x for g in r["ingredients"] for x in g["items"] if x["id"] == "levure")
        rep(it, "note", " ; un peu moins s'il fait très chaud", "")
        rep(r, "serving", ", ou passe-le directement du congélateur au four, dans un plat couvert de papier aluminium (Taste of Maroc)", " (Taste of Maroc)")
        rep(r["discrepancies"], 4, "Retenu : sans, car l'autrice de Taste of Maroc écrit que beaucoup de Marocains font le khobz sans huile et que la croûte est plus croustillante sans sucre ni huile.", "Retenu : sans, comme les pains de semoule et complet de Choumicha.")
        k8 = r["mistakes"].index("Sortir le pain trop tôt : il reste lourd (Taste of Maroc).")
        r["mistakes"][k8] = "Sortir le pain trop tôt : il doit être bien doré et sonner creux quand tu le tapotes (Taste of Maroc ; MarocMama)."
        r["mistakes"] = [m for m in r["mistakes"] if not m.startswith("Garder la même dose de levure quand il fait très chaud")]
        r["unverified"].append("Retiré à la contre-vérification, faute d'avoir retrouvé la source exacte (réponses de l'autrice de Taste of Maroc aux lecteurs, absentes des copies archivées) : « beaucoup de Marocains font le khobz sans huile », « sans sucre ni huile la croûte est plus croustillante », « pas assez cuit, il reste lourd », la congélation « même pour le lendemain », moins de levure par temps chaud, et le passage du congélateur au four sous papier aluminium. « Kesra en tamazight », écrit par Taste of Maroc seule, a aussi été retiré.")

VERIF = {}
_vf = os.path.join(APP, "recherche", "verification.json")
if os.path.exists(_vf):
    VERIF = {x["slug"]: x for x in json.load(open(_vf, encoding="utf-8"))["recettes"]}

def photo_for(fname, modified):
    c = credits[fname]
    return {"author": c["author"], "license": c["license"], "license_url": c["license_url"],
            "page": c["page"], "modified": modified}

# Relecture du 8 novembre 2026 : points relevés par les traducteurs, vérifiés sur les sources, puis corrigés exactement
# (recherche/corrections-relecture.json : {slug: {"corrections": [{champ, actuel, propose, pourquoi, sources}], "retirer_sources": [url],
#  "sources_ajoutees": [{name, url, ce_qu_elle_confirme}]}})
_rl = os.path.join(APP, "recherche", "corrections-relecture.json")
RELECTURE = json.load(open(_rl, encoding="utf-8")) if os.path.exists(_rl) else {}
def relecture(slug, r):
    d = RELECTURE.get(slug)
    if not d:
        return
    n = 0
    for c in d.get("corrections", []):
        obj, key = chemin(r, c["champ"])
        if isinstance(obj, dict) and key not in obj and c["actuel"] == "":  # champ à créer (par exemple une note d'ingrédient)
            obj[key] = ""
        cur = obj[key]
        if isinstance(cur, str):
            assert c["actuel"] in cur, f"{slug} : relecture introuvable dans {c['champ']} : {c['actuel'][:70]}"
            obj[key] = cur.replace(c["actuel"], c["propose"], 1)
        else:
            new = c["propose"]
            obj[key] = json.loads(new) if isinstance(new, str) and re.fullmatch(r"-?\d+(\.\d+)?|null", new.strip()) else new
        n += 1
    for url in d.get("retirer_sources", []):
        avant = len(r.get("sources", []))
        r["sources"] = [x for x in r.get("sources", []) if x["url"] != url]
        assert len(r["sources"]) < avant, f"{slug} : source à retirer introuvable : {url}"
        n += 1
    known = {x["url"] for x in r.get("sources", [])}
    for sa in d.get("sources_ajoutees", []):
        if sa["url"] not in known:
            r.setdefault("sources", []).append({"name": sa["name"], "url": sa["url"], "used_for": "Relecture : " + sa["ce_qu_elle_confirme"]})
    r.setdefault("discrepancies", []).append(f"Relue le 8 novembre 2026 pendant la traduction : {n} précision(s) apportée(s) après vérification des sources.")

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
    r["cuisine"] = CUISINE.get(slug, "Marocaine")
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
    appliquer_verif(slug, r)
    apres_verif(slug, r)
    relecture(slug, r)
    if slug == "tajine-agneau-pruneaux":  # Grantourismo (robots.txt) ne doit plus être cité que dans la note qui explique son retrait
        reste = json.dumps(r, ensure_ascii=False).replace("Grantourismo (recette de Terence Carter) : son fichier", "")
        assert "grantourismo" not in reste.lower(), reste[max(0, reste.lower().find("grantourismo") - 200):reste.lower().find("grantourismo") + 80]
    inconnues = []
    for g in r["ingredients"]:
        for it in g["items"]:
            k = canon_key(slug, it)
            it.pop("canon", None)
            if k:
                if BANQUE and k not in BANQUE:
                    inconnues.append(f"{it['id']} -> {k}")
                it["canon"] = k
            if it["id"] in LINKS.get(slug, {}):
                it["recipe"] = LINKS[slug][it["id"]]
    assert not inconnues, f"{slug} : ingrédients absents de la banque : {inconnues}"
    ry = RAYON[slug]
    r["rayon"] = ry[0] if isinstance(ry, list) else ry
    if isinstance(ry, list):
        r["rayons"] = ry
    if PAIRS.get(slug):
        r["pairs"] = PAIRS[slug]
    if slug in PAIRS_LABEL:
        r["pairs_label"] = PAIRS_LABEL[slug]
    if slug in REST_LABEL and r["time"].get("rest"):
        r["time"]["rest_label"] = REST_LABEL[slug]
    if slug in SERV_STEP:  # recettes de 40 ou 80 pièces : on choisit les parts par lots, jamais « ¼ œuf » pour une seule pièce
        assert r["servings"] % SERV_STEP[slug] == 0
        r["serv_step"] = SERV_STEP[slug]
    if slug in IMG_ALT:
        r["img_alt"] = IMG_ALT[slug]
    fname, mod = PHOTOS[slug]
    r["img"] = "img/" + fname
    r["photo"] = photo_for(fname, mod)
    for idx, (sf, alt) in STEP_PHOTOS.get(slug, {}).items():
        c = credits[sf]
        w, h = dims(os.path.join(APP, "img", sf))
        src = "Flickr" if "flickr.com" in c["page"] else "Wikimedia Commons"
        r["steps"][idx]["img"] = {"src": "img/" + sf, "alt": alt, "w": w, "h": h,
            "credit": f"Photo de l'étape « {r['steps'][idx]['title']} » : {c['author']}, {src}, licence {c['license']} (réduite)."}
    photos_des_gestes(slug, r)
    out = os.path.join(APP, "recettes", slug + ".js")
    with open(out, "w", encoding="utf-8") as f:
        f.write(f"/* Recette : {r['title']}. Sources et vérification dans le champ sources / discrepancies. */\n")
        f.write("window.RECETTES = window.RECETTES || [];\n")
        f.write("window.RECETTES.push(" + json.dumps(r, ensure_ascii=False, indent=1) + ");\n")
    print("ok :", out, "|", len(r["steps"]), "étapes,", sum(len(g["items"]) for g in r["ingredients"]), "ingrédients,", len(r.get("sources", [])), "sources")
