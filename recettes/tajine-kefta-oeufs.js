/* Recette : Tajine de kefta aux œufs. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "tajine-kefta-oeufs",
 "title": "Tajine de kefta aux œufs",
 "darija": "Tajine kefta mkaouara bel bid",
 "arabic": "طاجين الكفتة بالبيض",
 "tagline": "De petites boulettes aux herbes et au cumin qui mijotent dans une sauce tomate relevée, des œufs au jaune coulant, et du khobz pour tout saucer.",
 "category": "Tajine",
 "occasion": "Repas familial simple et rapide, à partager autour du tajine",
 "region": "Maroc (aucune région d'origine précise dans les sources consultées)",
 "servings": 4,
 "servings_label": "personnes",
 "time": {
  "prep": 25,
  "cook": 50,
  "rest": 0
 },
 "difficulty": "Facile",
 "equipment": [
  "Tajine en terre ou en céramique, de taille moyenne à grande",
  "Diffuseur de chaleur si tu ne cuisines pas au gaz",
  "Ou une sauteuse profonde avec couvercle",
  "Râpe à gros trous",
  "Grand saladier",
  "Cuillère en bois"
 ],
 "ingredients": [
  {
   "group": "Kefta (boulettes)",
   "items": [
    {
     "id": "viande",
     "q": 450,
     "u": "g",
     "name": "de viande hachée halal (bœuf, agneau ou un mélange des deux)",
     "note": "pas trop maigre : 15 à 20 % de matière grasse",
     "canon": "boeuf-hache"
    },
    {
     "id": "oignon-kefta",
     "q": 1,
     "u": "",
     "name": "petit oignon, râpé",
     "pl": "petits oignons, râpés",
     "canon": "oignon"
    },
    {
     "id": "persil-kefta",
     "q": 3,
     "u": "c. à s.",
     "name": "de persil plat haché",
     "canon": "persil"
    },
    {
     "id": "coriandre-kefta",
     "q": 3,
     "u": "c. à s.",
     "name": "de coriandre fraîche hachée",
     "canon": "coriandre"
    },
    {
     "id": "paprika-kefta",
     "q": 1,
     "u": "c. à c.",
     "name": "de paprika doux",
     "canon": "paprika"
    },
    {
     "id": "cumin-kefta",
     "q": 1,
     "u": "c. à c.",
     "name": "de cumin moulu",
     "canon": "cumin"
    },
    {
     "id": "sel-kefta",
     "q": 1,
     "u": "c. à c.",
     "name": "de sel fin",
     "canon": "sel"
    },
    {
     "id": "poivre-kefta",
     "q": 0.5,
     "u": "c. à c.",
     "name": "de poivre noir moulu",
     "canon": "poivre"
    },
    {
     "id": "piment-kefta",
     "q": 1,
     "u": "pincée",
     "name": "de piment de Cayenne",
     "canon": "piment-cayenne"
    }
   ]
  },
  {
   "group": "Sauce tomate",
   "items": [
    {
     "id": "tomates",
     "q": 1,
     "u": "kg",
     "name": "de tomates fraîches bien mûres",
     "canon": "tomate"
    },
    {
     "id": "huile",
     "q": 3,
     "u": "c. à s.",
     "name": "d'huile d'olive",
     "canon": "huile-olive"
    },
    {
     "id": "oignon-sauce",
     "q": 1,
     "u": "",
     "name": "oignon moyen, haché finement",
     "pl": "oignons moyens, hachés finement",
     "canon": "oignon"
    },
    {
     "id": "ail",
     "q": 4,
     "u": "",
     "name": "gousse d'ail, écrasée",
     "pl": "gousses d'ail, écrasées",
     "canon": "ail"
    },
    {
     "id": "paprika-sauce",
     "q": 1.5,
     "u": "c. à c.",
     "name": "de paprika doux",
     "canon": "paprika"
    },
    {
     "id": "cumin-sauce",
     "q": 1.5,
     "u": "c. à c.",
     "name": "de cumin moulu",
     "canon": "cumin"
    },
    {
     "id": "sel-sauce",
     "q": 1.5,
     "u": "c. à c.",
     "name": "de sel fin",
     "note": "à ajuster en goûtant",
     "canon": "sel"
    },
    {
     "id": "poivre-sauce",
     "q": 0.25,
     "u": "c. à c.",
     "name": "de poivre noir moulu",
     "canon": "poivre"
    },
    {
     "id": "piment-sauce",
     "q": 1,
     "u": "pincée",
     "name": "de piment de Cayenne",
     "note": "ou 2 petits piments forts entiers",
     "canon": "piment-cayenne"
    },
    {
     "id": "persil-sauce",
     "q": 2,
     "u": "c. à s.",
     "name": "de persil plat haché",
     "canon": "persil"
    },
    {
     "id": "coriandre-sauce",
     "q": 2,
     "u": "c. à s.",
     "name": "de coriandre fraîche hachée",
     "canon": "coriandre"
    },
    {
     "id": "eau",
     "q": null,
     "u": "",
     "name": "eau",
     "note": "seulement si la sauce attache",
     "canon": "eau"
    }
   ]
  },
  {
   "group": "Finition et service",
   "items": [
    {
     "id": "oeufs",
     "q": 4,
     "u": "",
     "name": "œuf",
     "note": "fermiers (beldi) de préférence",
     "pl": "œufs",
     "canon": "oeuf"
    },
    {
     "id": "sel-oeufs",
     "q": null,
     "u": "",
     "name": "sel fin",
     "note": "une petite pincée sur chaque œuf",
     "canon": "sel"
    },
    {
     "id": "coriandre-deco",
     "q": 1,
     "u": "c. à c.",
     "name": "de coriandre fraîche ciselée",
     "canon": "coriandre"
    },
    {
     "id": "khobz",
     "q": null,
     "u": "",
     "name": "khobz (pain marocain)",
     "note": "à volonté, pour saucer",
     "canon": "khobz"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Pétris la kefta",
   "text": "Dans un saladier, mets {{viande:full}}, {{oignon-kefta:full}}, {{persil-kefta:full}} et {{coriandre-kefta:full}}. Ajoute {{paprika-kefta:full}}, {{cumin-kefta:full}}, {{sel-kefta:full}}, {{poivre-kefta:full}} et {{piment-kefta:full}}. Pétris à la main 1 à 2 minutes, juste assez pour bien répartir les épices, sans tasser. N'ajoute ni œuf ni chapelure.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Roule de petites boulettes",
   "text": "Forme des boulettes de la taille d'une cerise, environ 2,5 cm de diamètre. Pose-les sur une assiette, couvre et garde-les au frais pendant que tu prépares la sauce.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Râpe les tomates",
   "text": "Coupe {{tomates:full}} en deux. Râpe-les côté chair sur les gros trous de la râpe, au-dessus d'un saladier. Jette la peau qui te reste dans la main.",
   "timer": null,
   "img": {
    "src": "img/etapes/tomate-rapee.jpg",
    "alt": "Tomate râpée sur une râpe",
    "caption": "Râper la tomate",
    "w": 1000,
    "h": 667,
    "credit": "Photo de l'étape « Râpe les tomates » : Another Pint Please..., Flickr, licence CC BY-NC-SA 2.0 (réduite)."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Fais revenir l'oignon et l'ail",
   "text": "Pose le tajine sur feu moyen-doux (sur un diffuseur si tu ne cuisines pas au gaz ; au gaz sans diffuseur, la flamme ne doit pas toucher le fond), ou prends une sauteuse, et chauffe {{huile:full}}. Ajoute {{oignon-sauce:full}} et laisse-le ramollir quelques minutes en remuant. Ajoute {{ail:full}} et remue 1 à 2 minutes, jusqu'à ce qu'il embaume, sans le laisser brûler.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Fais mijoter la sauce",
   "text": "Verse les tomates râpées avec leur jus. Ajoute {{paprika-sauce:full}}, {{cumin-sauce:full}}, {{sel-sauce:full}}, {{poivre-sauce:full}}, {{piment-sauce:full}}, {{persil-sauce:full}} et {{coriandre-sauce:full}}. Porte à frémissement, couvre et laisse mijoter à feu doux en remuant de temps en temps.",
   "timer": {
    "min": 25,
    "label": "Sauce tomate",
    "done": "Regarde la sauce : elle doit être épaisse et parfumée."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Vérifie la sauce",
   "text": "Écrase les morceaux de tomate avec le dos d'une cuillère. La sauce est prête quand elle est épaisse et parfumée. Si elle attache, ajoute un peu d'{{eau:full}} ; si elle est encore liquide, prolonge la cuisson, car tout dépend de la maturité des tomates. Goûte et rectifie le sel.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Poche les boulettes",
   "text": "Dépose les boulettes crues une à une dans la sauce, en laissant un peu d'espace entre elles. Couvre et laisse frémir à feu doux. Coupe une boulette pour vérifier qu'elle est cuite à cœur, mais ne prolonge pas : trop cuites, elles durcissent.",
   "timer": {
    "min": 10,
    "label": "Boulettes",
    "done": "Coupe une boulette : si elle est cuite à cœur, passe tout de suite aux œufs."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Casse les œufs",
   "text": "Creuse un petit nid dans la sauce, entre les boulettes, pour chaque œuf. Casse {{oeufs:full}} un par un dans les nids, sans crever les jaunes. Sale légèrement chaque œuf ({{sel-oeufs:full}}).",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Fais prendre les œufs",
   "text": "Remets le couvercle et laisse cuire à feu doux. C'est prêt quand le blanc est pris et que le jaune reste coulant. Retire aussitôt du feu. Pour une femme enceinte, un jeune enfant ou une personne âgée ou fragile, laisse cuire quelques minutes de plus, jusqu'à ce que le jaune soit pris.",
   "timer": {
    "min": 5,
    "label": "Œufs",
    "done": "Blanc pris, jaune encore coulant : coupe le feu tout de suite. Pour une femme enceinte, un jeune enfant ou une personne âgée ou fragile, prolonge de quelques minutes, jusqu'à ce que le jaune soit pris."
   }
  },
  {
   "phase": "Service",
   "title": "Sers dans le tajine",
   "text": "Parsème {{coriandre-deco:full}}. Pose le tajine au milieu de la table et sers tout de suite, dans le plat de cuisson. Chacun se sert à la main avec des morceaux de {{khobz:full}}, en trempant le pain dans la sauce et le jaune.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "L'assaisonnement classique de la kefta repose au minimum sur le paprika, le cumin, l'oignon et les herbes fraîches.",
   "source": "Taste of Maroc (Christine Benlafquih), recette de kefta"
  },
  {
   "text": "Pas d'œuf ni de chapelure dans la kefta : c'est un écart à la tradition marocaine.",
   "source": "Taste of Maroc (Christine Benlafquih)"
  },
  {
   "text": "Prends une viande pas trop maigre (15 à 20 % de gras) : un peu de gras est nécessaire pour la texture et le goût classiques de la kefta.",
   "source": "My Moroccan Food (Nargisse Benkabbou) ; Taste of Maroc, recette de kefta"
  },
  {
   "text": "Pour Fatéma Hal, ce plat a le parfum du Maroc : persil, coriandre, menthe et cumin. Le cumin, qu'elle juge parfois écrasant, ne trouve grâce selon elle que dans ce tajine.",
   "source": "TelQuel, « À la recherche du goût perdu », Fatéma Hal"
  },
  {
   "text": "Les boulettes se font traditionnellement toutes petites (taille d'une cerise, environ 2,5 cm) ; plus elles sont petites, plus elles cuisent vite.",
   "source": "Taste of Maroc ; My Moroccan Food ; MarocMama"
  },
  {
   "text": "Coupe les tomates en deux, râpe-les et jette la peau, plutôt que de les peler et les hacher : la cuisson est un peu plus courte.",
   "source": "Taste of Maroc ; Cooking With Alia ; MarocMama"
  },
  {
   "text": "Préfère des tomates fraîches bien mûres : en conserve, le goût est un peu métallique. Le temps de réduction dépend beaucoup de leur maturité et de leur jus.",
   "source": "MarocMama (Amanda Mouttaki) ; Taste of Maroc"
  },
  {
   "text": "Fais d'abord réduire la sauce, puis poche les boulettes crues dedans juste le temps de les cuire : trop cuites, elles deviennent dures.",
   "source": "Taste of Maroc ; My Moroccan Food"
  },
  {
   "text": "Laisse un peu d'espace entre les boulettes pour qu'elles s'imprègnent de sauce.",
   "source": "MarocMama"
  },
  {
   "text": "Les œufs vont à la toute fin, dans de petits nids, avec une pincée de sel sur chacun, couvercle fermé : 4 à 5 minutes suffisent pour un blanc pris et un jaune coulant.",
   "source": "Amour de cuisine ; My Moroccan Food"
  },
  {
   "text": "Choisis des œufs fermiers (beldi) si tu peux.",
   "source": "Taste of Maroc"
  },
  {
   "text": "Tajine en terre : utilise toujours un diffuseur sur une source de chaleur autre que le gaz ; au gaz sans diffuseur, la flamme ne doit pas toucher le fond.",
   "source": "Taste of Maroc ; MarocMama"
  },
  {
   "text": "Si la sauce est trop acide, une pincée de sucre la corrige.",
   "source": "Amour de cuisine"
  }
 ],
 "mistakes": [
  "Mettre de l'œuf ou de la chapelure dans la kefta : ce n'est pas la tradition marocaine.",
  "Prendre une viande trop maigre : il faut un peu de gras pour la texture et le goût.",
  "Trop pétrir ou tasser la viande : travaille-la juste assez pour mélanger.",
  "Faire de grosses boulettes : traditionnellement, elles sont petites et cuisent plus vite.",
  "Laisser brûler l'ail au début de la sauce.",
  "Ajouter les boulettes avant que la sauce ait épaissi.",
  "Prolonger la cuisson des boulettes : elles durcissent.",
  "Serrer les boulettes les unes contre les autres : elles prennent moins la sauce.",
  "Crever les jaunes en cassant les œufs.",
  "Oublier le couvercle ou laisser les œufs trop longtemps : le jaune n'est plus coulant.",
  "Poser un tajine en terre sur une plaque électrique ou vitrocéramique sans diffuseur."
 ],
 "serving": "Sers aussitôt, dans le tajine ou la sauteuse de cuisson posé au milieu de la table. La tradition est de manger ensemble directement dans le plat, à la main, avec des morceaux de khobz pour attraper les boulettes, la sauce et le jaune coulant (Taste of Maroc, Amour de cuisine, My Moroccan Food). Un thé à la menthe l'accompagne bien (Taste of Maroc, Cooking With Alia).",
 "variants": [
  "Version de Fès sans tomate (Zette Guinaudeau-Franc, Traditional Moroccan Cooking: Recipes from Fez) : boulettes de kefta déjà pochées, cuites dans du beurre et de l'eau avec sel et piment soudania jusqu'à ce que l'eau s'évapore presque, puis œufs cassés dessus juste avant de servir. Aucune tomate dans la partie visible de la recette (aperçu ckbk).",
  "Olives vertes dénoyautées ajoutées en fin de cuisson, juste pour les réchauffer ; sale alors moins la sauce (Taste of Maroc).",
  "Poivron vert haché avec l'oignon et une feuille de laurier dans la sauce (Taste of Maroc).",
  "Menthe fraîche hachée dans la kefta (My Moroccan Food ; facultative chez Taste of Maroc, qui la conseille avec l'agneau).",
  "Une pointe de curcuma ou de cannelle dans la kefta (facultatives chez Taste of Maroc ; cannelle chez Cooking With Alia, épisode 372).",
  "Ail dans la kefta (Cooking With Alia, MarocMama, Amour de cuisine).",
  "Kefta assaisonnée laissée reposer 30 minutes, couverte, avant de façonner (Cooking With Alia, épisode 372).",
  "Sauce au curcuma et au paprika fort « soudaniya » (MarocMama).",
  "Concentré de tomate délayé dans de l'eau ajouté à la sauce, boulettes mijotées 40 minutes (Cooking With Alia, épisode 023).",
  "Boulettes dorées à la poêle avant d'aller dans la sauce, pour plus de goût et une meilleure tenue (MarocMama ; Amour de cuisine quand elle a le temps).",
  "Jaune bien cuit (MarocMama), œufs battus versés sur la sauce, ou pas d'œufs du tout : ils restent facultatifs (MarocMama, Taste of Maroc).",
  "Avec des légumes : petits pois (MarocMama, Amour de cuisine), aubergine en dés et harissa (My Moroccan Food), courgette ou poivron (Amour de cuisine).",
  "Plus de sauce : augmente la sauce tomate de moitié (Taste of Maroc).",
  "Autres viandes halal : poulet ou dinde hachés (Taste of Maroc, MarocMama), avec du gingembre pour le poulet (Cooking With Alia).",
  "Tomates en conserve pour dépanner (pelées chez My Moroccan Food, en morceaux chez Amour de cuisine)."
 ],
 "sources": [
  {
   "name": "Taste of Maroc (Christine Benlafquih), « Classic Moroccan Meatball Tagine with Tomato Sauce – Kefta Mkaoura »",
   "url": "https://tasteofmaroc.com/moroccan-meatball-tagine-tomato-sauce/",
   "used_for": "Recette de base : proportions de la kefta et de la sauce, ordre des étapes, feu moyen-doux, temps de préparation et de cuisson ; boulettes traditionnellement petites, pas d'œuf ni de chapelure, tomates râpées, œufs sans crever les jaunes, œufs beldi, diffuseur, service en commun avec du pain, thé à la menthe, variantes."
  },
  {
   "name": "Taste of Maroc (Christine Benlafquih), « Moroccan Kefta Recipe »",
   "url": "https://tasteofmaroc.com/moroccan-kefta-recipe/",
   "used_for": "Assaisonnement minimum de la kefta (paprika, cumin, oignon, herbes fraîches), utilité d'un peu de gras, menthe facultative, kefta sans ail."
  },
  {
   "name": "My Moroccan Food (Nargisse Benkabbou), « KEFTA Meatballs and Eggs Tagine (Shakshuka) »",
   "url": "https://www.mymoroccanfood.com/home/kefta-meatballs-and-eggs-tagine-shakshuka",
   "used_for": "Boulettes de 2,5 cm gardées au frais, sauce réduite 25 min à couvert à feu doux, boulettes 7 à 9 min, œufs 4 à 5 min à couvert (blanc pris, jaune coulant), pain trempé dans le jaune."
  },
  {
   "name": "My Moroccan Food (Nargisse Benkabbou), « Kefta – Moroccan minced meat »",
   "url": "https://www.mymoroccanfood.com/home/kefta-moroccan-minced-meat-55678",
   "used_for": "Kefta : viande à 15–20 % de gras, oignon râpé, persil, coriandre, menthe, paprika, cumin, sel, poivre, Cayenne."
  },
  {
   "name": "Cooking With Alia, « 023 – Tajine of Kefta with Eggs »",
   "url": "https://www.cookingwithalia.com/tajine-of-kefta-with-eggs/",
   "used_for": "Tomates coupées en deux et râpées sans la peau, oignon râpé, feu moyen, œufs 5 min à couvert, pain et thé à la menthe ; variante au concentré de tomate."
  },
  {
   "name": "Cooking With Alia, « 372 – Tagine of Meatballs and Eggs »",
   "url": "https://www.cookingwithalia.com/372-tagine-of-meatballs-and-eggs/",
   "used_for": "1 kg de tomates râpées sur les gros trous, sauce réduite 20 à 25 min avant les boulettes, cuillère en bois ; variantes cannelle et repos de 30 min."
  },
  {
   "name": "MarocMama (Amanda Mouttaki), « Kefta Tagine with Eggs in Tomato Sauce »",
   "url": "https://marocmama.com/moroccan-kefta-and-eggs-tagine/",
   "used_for": "Tomates fraîches râpées (la conserve donne un goût métallique), petites boulettes qui cuisent plus vite, espace entre les boulettes, diffuseur sur plaque électrique, khobz ; variantes (boulettes dorées, curcuma, paprika soudaniya, jaune dur, petits pois)."
  },
  {
   "name": "TelQuel, « À la recherche du goût perdu, le tagine de kefta aux œufs par Fatéma Hal » (introduction seule lisible)",
   "url": "https://telquel.ma/2021/04/20/a-la-recherche-du-gout-perdu-le-tagine-de-kefta-aux-oeufs-par-fatema-hal_1719115",
   "used_for": "Plat simple, rapide et traditionnel selon Fatéma Hal ; parfum persil, coriandre, menthe et cumin ; place du cumin dans ce tajine."
  },
  {
   "name": "Amour de cuisine (Soulef Zaoui), « Tajine de kefta aux œufs (kefta mkawra) »",
   "url": "https://www.amourdecuisine.fr/article-tajine-de-kefta-aux-oeufs.html",
   "used_for": "Source maghrébine non marocaine : nids pour les œufs, pincée de sel sur chaque œuf, cuisson couverte jusqu'au blanc pris, ne pas tasser la viande, pincée de sucre si la sauce est acide, manger à la main avec du pain, sens de « mkawra » (les boulettes)."
  },
  {
   "name": "Zette Guinaudeau-Franc, Traditional Moroccan Cooking: Recipes from Fez, « Tagine with Kefta and Eggs » (aperçu ckbk)",
   "url": "https://app.ckbk.com/recipe/trad59138c14s001r002/tagine-with-kefta-and-eggs",
   "used_for": "Variante de Fès au beurre et au piment soudania (aperçu partiel)."
  },
  {
   "name": "My Moroccan Food, page « About »",
   "url": "https://www.mymoroccanfood.com/about",
   "used_for": "Vérification : Nargisse Benkabbou a grandi dans une famille marocaine, autrice de « Casablanca », ancienne cheffe exécutive à Marrakech."
  },
  {
   "name": "Cooking With Alia, page « About »",
   "url": "https://www.cookingwithalia.com/about/",
   "used_for": "Vérification : Alia partage la cuisine marocaine avec laquelle elle a grandi."
  },
  {
   "name": "Taste of Maroc, page « About »",
   "url": "https://tasteofmaroc.com/about/",
   "used_for": "Vérification : Christine Benlafquih a vécu à Casablanca, experte cuisine marocaine d'About.com de 2008 à 2016."
  },
  {
   "name": "Amour de cuisine, page « About the author »",
   "url": "https://www.amourdecuisine.fr/en/about-the-author",
   "used_for": "Vérification : Soulef Zaoui a des racines algériennes et vit en Angleterre, donc source non comptée comme marocaine."
  },
  {
   "name": "Bladi.net (portail des Marocains du monde), « Boulettes de kefta aux oeufs »",
   "url": "https://www.bladi.net/recettes/boulettes-de-kefta-aux-oeufs.html",
   "used_for": "Contre-vérification : Boulettes « grosseur de billes » mises crues dans la sauce tomate (ail, cumin, poivre, paprika doux, persil), sauce réduite, œufs cassés dessus à la fin, à couvert, servi chaud."
  },
  {
   "name": "MWN Lifestyle, Ihab Ou-ouda, « Easy Kefta Tagine Recipe: A Simple Moroccan Classic », 29 janvier 2026",
   "url": "https://mwnlifestyle.com/2026/01/29/easy-kefta-tagine-recipe-a-simple-moroccan-classic/",
   "used_for": "Contre-vérification : Kefta sans œuf, sans chapelure et sans ail (oignon râpé, persil, coriandre, cumin, paprika) ; boulettes crues pochées à couvert dans la sauce ; œufs entre les boulettes, à couvert, jusqu'à blanc pris et jaune encore tendre ; pain marocain pour saucer."
  },
  {
   "name": "Institut Pasteur, fiche « Salmonellose »",
   "url": "https://www.pasteur.fr/fr/centre-medical/fiches-maladies/salmonellose",
   "used_for": "Contre-vérification : Les personnes les plus vulnérables (personnes âgées, malades, nourrissons, femmes enceintes) devraient éviter les œufs crus ou peu cuits."
  }
 ],
 "discrepancies": [
  "Tomates : râpées sans la peau (Cooking With Alia, MarocMama, option chez Taste of Maroc), pelées et hachées (Taste of Maroc) ou en conserve (My Moroccan Food, Amour de cuisine). Retenu : tomates fraîches râpées.",
  "Ail dans la kefta : oui chez Cooking With Alia, MarocMama et Amour de cuisine ; non chez Taste of Maroc (y compris sa recette de kefta de base) et My Moroccan Food. Retenu : pas d'ail dans la kefta, ail dans la sauce comme dans toutes les sauces sauf Cooking With Alia 023.",
  "Boulettes : crues dans la sauce (Taste of Maroc, My Moroccan Food, Cooking With Alia, Amour de cuisine) ou dorées d'abord (MarocMama). Retenu : crues.",
  "Ordre et durées : sauce réduite d'abord (15 min chez Amour de cuisine, 20 à 25 min chez Cooking With Alia 372, 25 min chez My Moroccan Food, 30 à 60 min chez Taste of Maroc), puis boulettes 7 à 9 min (My Moroccan Food) ou 10 à 15 min (Taste of Maroc) ; ailleurs, boulettes cuites 30 à 40 min dans la sauce (MarocMama, Cooking With Alia 023). Retenu : sauce 25 min, puis boulettes 10 min pour qu'elles restent tendres.",
  "Œufs : jaune coulant (My Moroccan Food, Amour de cuisine), jaune qui commence à prendre (Taste of Maroc) ou jaune dur (MarocMama). Retenu : environ 5 min à couvert, jaune coulant (4 à 5 min chez My Moroccan Food, 5 min chez Cooking With Alia 023).",
  "Herbes de la kefta : persil et coriandre (Taste of Maroc, My Moroccan Food) ou persil seul (Cooking With Alia, MarocMama, Amour de cuisine). Retenu : persil et coriandre, ce qui rejoint Fatéma Hal (TelQuel).",
  "Quantités d'épices très variables (paprika de la kefta de 0,5 à 2 c. à c., cumin de la sauce de 0,25 à 1,5 c. à c.). Retenu : les proportions de Taste of Maroc, la recette la plus détaillée, pour 450 g de viande et environ 1 kg de tomates (2 lb chez Taste of Maroc, 1 kg chez Cooking With Alia 372) ; poivre de la kefta à 0,5 c. à c. comme My Moroccan Food et Cooking With Alia.",
  "Oignon de la kefta râpé (My Moroccan Food, Cooking With Alia, option chez Taste of Maroc) ou coupé en dés (MarocMama). Retenu : râpé.",
  "Oignon dans la sauce : oui (Taste of Maroc, Cooking With Alia, MarocMama, Amour de cuisine), non (My Moroccan Food). Retenu : oui.",
  "Huile : de 2 c. à s. (My Moroccan Food, Cooking With Alia) à 60 ml (Taste of Maroc). Retenu : 3 c. à s., le haut de la fourchette de MarocMama et d'Amour de cuisine.",
  "Piment : facultatif chez Taste of Maroc, une pincée de Cayenne chez My Moroccan Food, piment fort au goût dans la kefta chez Cooking With Alia. Retenu : une pincée dans la kefta et une dans la sauce.",
  "Nombre d'œufs : 4 pour 4 personnes (Taste of Maroc, My Moroccan Food), 3 chez Cooking With Alia, MarocMama et Amour de cuisine (3 portions chez Amour de cuisine). Retenu : 4.",
  "Poivron vert et laurier : seulement chez Taste of Maroc, donc mis en variante.",
  "Ustensile : tajine en terre traditionnel (Taste of Maroc, MarocMama) ou poêle et sauteuse (My Moroccan Food, Amour de cuisine, Cooking With Alia). Les deux sont donnés.",
  "Amour de cuisine figure parmi les exemples de sources, mais son autrice (Soulef Zaoui) a des racines algériennes : elle n'est pas comptée comme source marocaine.",
  "Contre-vérifiée le 6 novembre 2026 par une seconde recherche indépendante : verdict « conforme », 1 correction(s) appliquée(s).",
  "Relue le 8 novembre 2026 pendant la traduction : 2 précision(s) apportée(s) après vérification des sources."
 ],
 "unverified": [
  "Choumicha : le site officiel choumicha.ma était inaccessible le 2026-11-06 (erreur Cloudflare 525, avec WebFetch et dans le navigateur). Aucune de ses recettes n'a pu être lue ; les extraits de moteur de recherche (« Tajine de tomate au khliï et aux œufs », page « La tomate » qui cite les tajines aux œufs et aux boulettes de kefta) ne sont pas utilisés.",
  "Fatéma Hal : seule l'introduction de l'article de TelQuel est lisible ; la suite (diaspora.telquel.ma) renvoie une erreur 404. Ses quantités et sa méthode ne sont pas connues.",
  "Paula Wolfert : sa recette n'a été vue que dans des reproductions de tiers (JustAPinch, d'après « Couscous and Other Good Food from Morocco » : boulettes de 2,5 cm dorées d'abord, cannelle dans la sauce, sauce réduite 30 min, œufs 5 min ; projet étudiant de l'université de Guelph, d'après « The Food of Morocco » : crème fraîche dans la kefta, concentré de tomate, sucre, œufs 5 à 6 min). Non vérifié sur les livres.",
  "Façonner les boulettes avec les mains mouillées : vu seulement dans la reproduction JustAPinch de la recette de Paula Wolfert.",
  "Poser le tajine chaud sur une planche ou un torchon plié pour qu'il ne fende pas, et le laisser reposer 3 à 5 min : vu seulement dans le projet étudiant de Guelph.",
  "Version de Fès (Guinaudeau-Franc) : la liste d'ingrédients est coupée sur ckbk, donc l'absence totale de tomate n'est pas confirmée.",
  "Région d'origine du plat : aucune source consultée ne la donne (MarocMama l'a appris à Essaouira, ce qui ne prouve pas une origine).",
  "Nom arabe « طاجين الكفتة بالبيض » : traduction directe de « tajine kefta bel bid », employée par Sada El Balad (site égyptien), pas trouvée dans une source marocaine primaire.",
  "Graphie « bel bid » : reprise de la demande ; non vérifiée dans une source marocaine."
 ],
 "cuisine": "Marocaine",
 "rayon": "Tajines",
 "pairs": [
  "khobz"
 ],
 "img": "img/kefta.jpg",
 "photo": {
  "author": "Mzximvs VdB from Brussels, belgium",
  "license": "CC BY-SA 2.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/2.0",
  "page": "https://commons.wikimedia.org/wiki/File:Tajine_kefta_(8348397161).jpg",
  "modified": "recadrée et réduite"
 }
});
