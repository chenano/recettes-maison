/* Recette : Dchicha, soupe d'orge à la tomate. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "dchicha",
 "title": "Dchicha, soupe d'orge à la tomate",
 "darija": "Dchicha (h'ssoua hamra)",
 "arabic": "شوربة دشيشة الشعير",
 "tagline": "L'orge concassée qui mijote avec tomates, oignon et persil : une soupe veloutée et rassasiante, pour le petit-déjeuner, le dîner ou le ftour.",
 "category": "Soupe",
 "occasion": "Petit-déjeuner ou dîner léger ; au ftour du Ramadan, parfois à la place de la harira",
 "region": "Dans beaucoup de foyers marocains ; la dchicha fait aussi partie du ftour des provinces du Sud",
 "servings": 4,
 "servings_label": "personnes",
 "time": {
  "prep": 15,
  "cook": 45,
  "rest": 0
 },
 "difficulty": "Facile",
 "equipment": [
  "Grande marmite (3 litres au moins)",
  "Grand saladier et passoire fine, pour laver l'orge",
  "Râpe",
  "Planche et couteau",
  "Cuillère en bois",
  "Louche"
 ],
 "ingredients": [
  {
   "group": "Soupe",
   "items": [
    {
     "id": "orge",
     "q": 180,
     "u": "g",
     "name": "de dchicha d'orge (orge concassée)",
     "note": "grosse ou moyenne",
     "canon": "orge-concassee"
    },
    {
     "id": "huile",
     "q": 4,
     "u": "c. à s.",
     "name": "d'huile d'olive",
     "canon": "huile-olive"
    },
    {
     "id": "oignon",
     "q": 1,
     "u": "",
     "name": "oignon moyen",
     "pl": "oignons moyens",
     "note": "à râper",
     "canon": "oignon"
    },
    {
     "id": "tomates",
     "q": 2,
     "u": "",
     "name": "tomate bien mûre",
     "pl": "tomates bien mûres",
     "note": "à râper, sans la peau",
     "canon": "tomate"
    },
    {
     "id": "persil",
     "q": 3,
     "u": "c. à s.",
     "name": "de persil plat haché",
     "note": "ou moitié persil, moitié coriandre",
     "canon": "persil"
    },
    {
     "id": "curcuma",
     "q": 0.5,
     "u": "c. à c.",
     "name": "de curcuma",
     "canon": "curcuma"
    },
    {
     "id": "sel",
     "q": 1,
     "u": "c. à c.",
     "name": "de sel",
     "note": "à rectifier en fin de cuisson",
     "canon": "sel"
    },
    {
     "id": "poivre",
     "q": 0.5,
     "u": "c. à c.",
     "name": "de poivre noir moulu",
     "canon": "poivre"
    },
    {
     "id": "eau",
     "q": 2,
     "u": "l",
     "name": "d'eau",
     "canon": "eau"
    },
    {
     "id": "concentre",
     "q": 2,
     "u": "c. à c.",
     "name": "de concentré de tomate",
     "note": "facultatif, pour la couleur",
     "canon": "concentre-tomate"
    },
    {
     "id": "eau-chaude",
     "q": null,
     "u": "",
     "name": "eau chaude",
     "note": "pour allonger, si besoin",
     "canon": "eau"
    }
   ]
  },
  {
   "group": "Pour servir",
   "items": [
    {
     "id": "huile-service",
     "q": null,
     "u": "",
     "name": "huile d'olive",
     "note": "un filet, facultatif",
     "canon": "huile-olive"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Lave l'orge",
   "text": "Mets {{orge}} de dchicha dans un grand saladier d'eau et remue avec la main. Égoutte dans une passoire fine. Recommence jusqu'à ce que l'eau reste claire, puis laisse égoutter.",
   "timer": null,
   "tip": "La grosse dchicha garde des grains fermes sous la dent ; la moyenne donne une soupe plus fondante et cuit plus vite (Taste of Maroc)."
  },
  {
   "phase": "Préparation",
   "title": "Râpe l'oignon",
   "text": "Épluche et râpe finement {{oignon:full}}.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Râpe les tomates",
   "text": "Râpe {{tomates:full}} côté chair et jette la peau.",
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
   "phase": "Préparation",
   "title": "Hache les herbes",
   "text": "Hache finement du persil plat : il en faut {{persil}} une fois haché. Tu peux mettre moitié persil, moitié coriandre.",
   "timer": null,
   "img": {
    "src": "img/etapes/hacher-persil.jpg",
    "alt": "Persil haché au couteau sur une planche",
    "caption": "Hacher les herbes",
    "w": 803,
    "h": 1000,
    "credit": "Photo de l'étape « Hache les herbes » : katerha, Wikimedia Commons, licence CC BY 2.0 (réduite)."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Fais revenir l'oignon",
   "text": "Chauffe {{huile}} d'huile d'olive dans une grande marmite, sur feu moyen. Ajoute l'oignon râpé et remue jusqu'à ce qu'il devienne translucide.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Ajoute tomates, herbes, épices et eau",
   "text": "Ajoute les tomates râpées, le persil, {{curcuma}} de curcuma, {{sel}} de sel et {{poivre}} de poivre. Verse {{eau}} d'eau et porte à ébullition sur feu vif.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Verse l'orge",
   "text": "Dès que ça bout, verse l'orge égouttée en remuant. Si tu en mets, ajoute {{concentre}} de concentré de tomate. Baisse le feu.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Laisse mijoter en remuant",
   "text": "Laisse cuire à feu doux 30 minutes, en remuant de temps en temps pour que l'orge n'attache pas au fond. Si la soupe épaissit trop, ajoute un peu d'{{eau-chaude}}.",
   "timer": {
    "min": 30,
    "label": "Cuisson de l'orge",
    "done": "Goûte quelques grains : ils doivent être tendres."
   },
   "tip": "Ne fais pas bouillir trop fort : la soupe peut déborder."
  },
  {
   "phase": "Cuisson",
   "title": "Vérifie la cuisson",
   "text": "Goûte quelques grains : ils doivent être tendres, et la soupe veloutée, à peine épaisse. Sinon, prolonge la cuisson en remuant et goûte de nouveau : la grosse dchicha cuit plus longtemps. Rectifie le sel.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Sers aussitôt",
   "text": "Sers la soupe tout de suite, bien chaude, avec un filet d'{{huile-service}} si tu aimes. En attendant, l'orge continue de gonfler et la soupe épaissit.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Lave la dchicha dans plusieurs eaux, jusqu'à ce que l'eau ne soit plus trouble, puis égoutte-la.",
   "source": "Taste of Maroc ; Choumicha ; Lalla Moulati"
  },
  {
   "text": "La grosse orge concassée, la « dchicha », garde des grains fermes ; la moyenne (belboula) donne une soupe plus fondante. La grosse cuit plus longtemps et demande un peu plus d'eau.",
   "source": "Taste of Maroc ; Choumicha prend de la semoule d'orge moyenne"
  },
  {
   "text": "Râpe l'oignon et les tomates, et jette la peau des tomates.",
   "source": "Choumicha ; Taste of Maroc ; Cooking with Alia"
  },
  {
   "text": "Verse l'orge quand le bouillon bout.",
   "source": "Choumicha (h'ssoua hamra et h'ssoua aux crevettes) ; Lalla Moulati (2016) fait d'abord bouillir l'eau avec les aromates"
  },
  {
   "text": "Remue de temps en temps et rajoute de l'eau si elle baisse : l'orge attache au fond et peut brûler.",
   "source": "Lalla Moulati (2016) ; Choumicha ; Cooking with Alia ; Taste of Maroc"
  },
  {
   "text": "Ne fais pas bouillir trop fort : la soupe peut déborder.",
   "source": "Taste of Maroc ; Choumicha cuit à feu doux"
  },
  {
   "text": "Le concentré de tomate est facultatif, mais il donne une belle couleur et plus de goût de tomate.",
   "source": "Taste of Maroc ; Choumicha et Cooking with Alia en mettent"
  },
  {
   "text": "Pour les herbes : persil seul, ou persil et coriandre.",
   "source": "Persil : Taste of Maroc, Choumicha ; persil et coriandre : Choumicha (h'ssoua aux crevettes), Cooking with Alia"
  },
  {
   "text": "Sers la soupe dès qu'elle est prête : en attendant, l'orge gonfle et la soupe épaissit.",
   "source": "Taste of Maroc ; Choumicha (« servir la h'ssoua aussitôt »)"
  },
  {
   "text": "Un filet d'huile d'olive sur chaque bol, au moment de servir.",
   "source": "Choumicha (soupes d'orge au thym) ; MWN Lifestyle (dchicha)"
  },
  {
   "text": "Pour réchauffer, allonge avec un peu d'eau, rectifie l'assaisonnement et porte à ébullition en remuant.",
   "source": "Taste of Maroc ; USDA (les soupes se réchauffent jusqu'à pleine ébullition)"
  },
  {
   "text": "Mets les restes au réfrigérateur dans les 2 heures, en petites boîtes fermées, et mange-les dans les 3 jours.",
   "source": "ANSES (2 heures, 3 jours, petites portions) ; USDA (2 heures, 3 à 4 jours)"
  }
 ],
 "mistakes": [
  "Ne pas laver l'orge (Taste of Maroc, Choumicha et Lalla Moulati la lavent toujours).",
  "Laisser cuire sans remuer : l'orge attache et brûle au fond (Lalla Moulati ; Cooking with Alia).",
  "Cuire à feu trop fort : la soupe déborde (Taste of Maroc).",
  "Faire attendre la soupe avant de servir : elle devient trop épaisse (Taste of Maroc ; Choumicha).",
  "Réchauffer sans rajouter d'eau (Taste of Maroc).",
  "Laisser les restes plus de 2 heures à température ambiante (ANSES ; USDA)."
 ],
 "serving": "Bien chaude, tout de suite, dans des bols, avec un filet d'huile d'olive si tu aimes (Choumicha ; MWN Lifestyle). Au petit-déjeuner ou en dîner léger (Taste of Maroc), et au ftour du Ramadan, parfois à la place de la harira (Lalla Moulati ; MWN Lifestyle ; Choumicha la classe dans ses recettes de Ramadan).",
 "variants": [
  "Au lait, la h'ssoua belboula au lait (« hessoua blanche » chez Cooking with Alia) : l'orge cuit d'abord dans l'eau avec un peu d'huile d'olive, du sel, du poivre et du cumin, en remuant ; on ajoute le lait à la fin et on laisse cuire encore un peu. Lalla Moulati (2014) : 250 g d'orge, 1,5 l d'eau, 2 c. à s. d'huile, 30 min de cuisson avec du thym ajouté à mi-cuisson, puis 1/4 l de lait et 10 min. Cooking with Alia : lait ajouté après 15 min, puis 10 min, thym séché émietté dessus. Taste of Maroc : 30 à 40 min, puis lait, beurre et lait concentré non sucré, cumin au service.",
  "Avec un peu de viande halal : fais revenir de l'agneau ou du bœuf en petits dés avec l'oignon, puis laisse cuire le bouillon 15 à 20 minutes avant d'ajouter l'orge (Taste of Maroc : 85 g pour 4). Choumicha met 250 g de poitrine d'agneau pour 6, revenue 5 minutes.",
  "Aux crevettes : Choumicha fait un bouillon avec les têtes et les carapaces, fait revenir les crevettes 1 minute dans l'huile et les réserve, ajoute laurier, harissa, persil et coriandre, puis remet les crevettes dans la soupe chaude juste avant de servir. Laisse-les jusqu'à ce que leur chair soit ferme, nacrée et opaque (FDA : 63 °C à cœur). Garde les crevettes dans la partie la plus froide du réfrigérateur jusqu'à la cuisson, comme l'ANSES le recommande pour les viandes et les poissons.",
  "Aux herbes, sans tomate : l'eau bout 10 minutes avec du thym, du fliou (menthe pouliot), du céleri, de l'ail en chemise, du gingembre et du curcuma, puis on y verse la dchicha (Lalla Moulati, 2016). Choumicha fait une soupe d'orge au thym et à l'ail, avec nigelle et graines de cresson, ou avec un peu de millet.",
  "Aux légumes : navet, carottes, courgettes, chou et tomates, au ftour à la place de la harira (Lalla Moulati, 2020).",
  "Plus relevée : Taste of Maroc ajoute 1 c. à c. de gingembre moulu pour 4 ; Lalla Moulati en met aussi dans sa dchicha aux herbes.",
  "Tchicha de blé : à Ouarzazate, la tchicha est une soupe de blé (Hespress, 2021)."
 ],
 "sources": [
  {
   "name": "Choumicha Chafay, « H'ssoua hamra bel belboula » (choumicha.ma, recette n° 113), copie archivée du 17 novembre 2019",
   "url": "https://web.archive.org/web/20191117044032/https://choumicha.ma/recette/113-h-ssoua-hamra-bel-belboula.html",
   "used_for": "Source marocaine de référence pour la version tomate : pour 6, 250 g de semoule d'orge moyenne, 3 l d'eau, 8 cl d'huile d'olive, oignon et 2 tomates râpés, 1 bouquet de persil, 1 c. à café de sel, 1/2 de poivre, 250 g d'agneau ; orge lavée ; oignon translucide ; tomates, persil et orge ajoutés à l'ébullition ; feu doux en remuant jusqu'à ce que l'orge soit tendre et la soupe veloutée ; servir aussitôt ; 45 min de cuisson, 1 h au total ; classée Ramadan et fêtes."
  },
  {
   "name": "Choumicha, « H'ssoua bel belboula et crevettes » (choumicha.ma, recette n° 151), copie archivée du 23 janvier 2025",
   "url": "https://web.archive.org/web/20250123083555/https://www.choumicha.ma/recette/151-h-ssoua-bel-belboula-et-crevettes.html",
   "used_for": "Autre version à la tomate (pour 6 : 250 g d'orge moyenne, 3 l d'eau, 8 cl d'huile, tomate, 1/2 c. à s. de concentré, persil et coriandre, laurier, harissa) ; orge ajoutée après l'ébullition ; remuer ; servir aussitôt ; variante aux crevettes."
  },
  {
   "name": "Choumicha, « Soupe d'orge au thym, nigelle et cresson » (choumicha.ma, recette n° 1479), copie archivée du 5 décembre 2024",
   "url": "https://web.archive.org/web/20241205030141/https://choumicha.ma/recette/1479-soupe-dorge-au-thym-nigelle-et-cresson.html",
   "used_for": "Version blanche aux herbes : 150 g d'orge moyenne lavée, 1,5 l d'eau, ail en chemise, thym, huile d'olive ; 25 à 35 min à feu doux en remuant ; filet d'huile d'olive au service ; classée Ramadan."
  },
  {
   "name": "Choumicha, « Soupe d'orge et de millet au thym » (choumicha.ma, recette n° 1496), copie archivée du 23 janvier 2025",
   "url": "https://web.archive.org/web/20250123072838/https://www.choumicha.ma/recette/1496-soupe-dorge-et-de-millet-au-thym.html",
   "used_for": "Temps de cuisson d'une soupe d'orge moyenne (30 min, puis 5 à 10 min) ; lavage ; remuer régulièrement ; filet d'huile au service."
  },
  {
   "name": "Lalla Moulati, « شوربة الدشيشة الساخنة بالاعشاب المنسمة » (1er février 2016)",
   "url": "https://www.lalamoulati.net/34466.html",
   "used_for": "Site marocain. La « chorba » de dchicha aux herbes (thym, fliou, céleri, ail en chemise, gingembre, curcuma) ; eau portée à ébullition avec les aromates avant la dchicha ; remuer et rajouter de l'eau pour qu'elle n'attache pas et ne brûle pas ; sauce tomate ou poulet facultatifs ; classée Ramadan."
  },
  {
   "name": "Lalla Moulati, « حسوة البلبولة بالحليب بطريقة رائعة » (10 novembre 2014)",
   "url": "https://www.lalamoulati.net/8385.html",
   "used_for": "Variante au lait : 250 g de belboula lavée, 1,5 l d'eau, sel, poivre, cumin, 2 c. à s. d'huile d'olive ; 15 min, thym, 15 min en surveillant l'eau et en remuant ; 1/4 l de lait, puis 10 min."
  },
  {
   "name": "Lalla Moulati, « شوربة بديل للحريرة فرمضان بدشيشة الشعير » (29 avril 2020)",
   "url": "https://www.lalamoulati.net/233874.html",
   "used_for": "Soupe de dchicha d'orge aux légumes et à la tomate (tomates et concentré), proposée au ftour du Ramadan à la place de la harira."
  },
  {
   "name": "Taste of Maroc, Christine Benlafquih, « Moroccan Cracked Barley Soup with Tomatoes – Hssoua Belboula Hamra », mise à jour du 8 juillet 2020 (copie archivée du 24 janvier 2026)",
   "url": "https://web.archive.org/web/20260124013207/https://tasteofmaroc.com/moroccan-cracked-barley-soup-tomatoes/",
   "used_for": "Pour 4 (mesures métriques du site) : 190 g d'orge concassée, 2 l d'eau, 4 c. à s. d'huile d'olive, 85 g de viande facultative, 1 oignon râpé, 2 ou 3 tomates râpées sans peau ni pépins, 3 c. à s. de persil, 1,5 c. à c. de sel, 1 c. à c. de poivre, de gingembre et de curcuma (facultatif), 2 c. à s. de concentré (facultatif) ; la grosse orge s'appelle « dchicha » ; lavage jusqu'à ce que l'eau soit claire ; marmite de 3 l ; feu moyen, oignon translucide ; ébullition sur feu vif ; 15 min de préparation, 45 min de cuisson ; servir aussitôt car l'orge gonfle ; réchauffer avec de l'eau ; petit-déjeuner ou dîner léger."
  },
  {
   "name": "Taste of Maroc, Christine Benlafquih, « Hssoua Belboula – Moroccan Cream of Barley Soup with Milk », mise à jour du 8 juillet 2020 (copie archivée du 7 décembre 2025)",
   "url": "https://web.archive.org/web/20251207064150/http://tasteofmaroc.com/hssoua-belboula-moroccan-barley-soup-with-milk/",
   "used_for": "Variante au lait (30 à 40 min, puis lait, beurre et lait concentré non sucré) ; calibre des grains (la grosse orge cuit plus longtemps et demande plus d'eau) ; feu pas trop fort sinon ça déborde ; réchauffer doucement avec un peu d'eau ; petit-déjeuner ou dîner léger."
  },
  {
   "name": "Cooking with Alia, « Barley Tomato Soup / حساء الطماطم بالشعير » (n° 500)",
   "url": "https://www.cookingwithalia.com/500-barley-tomato-soup/",
   "used_for": "Cuisinière marocaine. Orge, huile d'olive, oignon râpé, tomates râpées sans peau, 2 c. à s. de persil et 2 de coriandre, curcuma, sel, poivre, 1 c. à s. de concentré ; environ 50 min à feu doux en remuant souvent."
  },
  {
   "name": "Cooking with Alia, « White Hessoua (Oats or Barley Milk Soup) » (n° 690)",
   "url": "https://www.cookingwithalia.com/690-white-hessoua-oats-milk-soup/",
   "used_for": "Variante au lait : orge ou avoine cuite 15 min dans l'eau avec huile et sel, lait ajouté, puis 10 min à feu moyen-doux ; thym séché émietté au service."
  },
  {
   "name": "Hespress FR, Zoubida Senoussi, « Par région, voici les traditions culinaires marocaines du ramadan », 16 avril 2021",
   "url": "https://fr.hespress.com/198966-par-region-voici-les-traditions-culinaires-marocaines-du-ramadan.html",
   "used_for": "Média marocain. La dchicha fait partie du ftour des provinces du Sud (Laâyoune-Sakia El Hamra) ; soupe d'orge au ftour à Taliouine ; tchicha (soupe de blé) à Ouarzazate, tchicha aussi à Oujda."
  },
  {
   "name": "MWN Lifestyle, Majda Bouzaroita, « 3 Alternatives to Harira for Ftour », 14 mars 2025",
   "url": "https://mwnlifestyle.com/2025/03/14/3-alternatives-to-harira-for-ftour/",
   "used_for": "Appelle « Dchicha » la soupe d'orge à la tomate, proposée au ftour à la place de la harira, servie avec un filet d'huile d'olive et des herbes (source faible : recette générique, quantités non reprises)."
  },
  {
   "name": "ANSES, « Éviter les toxi-infections alimentaires en confinement : les bonnes pratiques », 8 avril 2020",
   "url": "https://www.anses.fr/fr/actualite/eviter-toxi-infections-alimentaires-confinement-bonnes-pratiques",
   "used_for": "Source officielle (France) : plats maison pas plus de 2 h à température ambiante, consommés dans les 3 jours, répartis en petites portions pour refroidir vite ; réchauffer couvert jusqu'à ce que la vapeur s'échappe."
  },
  {
   "name": "USDA, Food Safety and Inspection Service, « Leftovers and Food Safety » (copie archivée du 3 novembre 2026)",
   "url": "https://web.archive.org/web/20261103202835/https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety",
   "used_for": "Source officielle (États-Unis) : restes au réfrigérateur dans les 2 h ; 3 à 4 jours au réfrigérateur ; soupe répartie dans de petits récipients pour refroidir vite ; soupes réchauffées jusqu'à pleine ébullition."
  },
  {
   "name": "Lalla Moulati, « من هاد اليوم بلاما تحيري فالعشا 7 انواع من الشوربات اللذيذة والمغذية وسهلة التحضير في دقائق … برعي عائلة » (3 avril 2018)",
   "url": "https://www.lalamoulati.net/120906.html",
   "used_for": "Contre-vérification : Site marocain. Parmi sept soupes pour le dîner, une « soupe de boulgour ou de dchicha » (حساء البرغل او الدشيشة) : tomate et oignon râpés, épices, eau bouillante, huile, tomate en boîte ; encore une dchicha à la tomate, sans lait (la céréale n'est pas précisée)."
  },
  {
   "name": "Choumicha, rubriques « Soupes » et « Soupes et Harira » (copies archivées de novembre 2025 à janvier 2026)",
   "url": "https://web.archive.org/web/20260115183250/https://www.choumicha.ma/c/soupes-et-harira.html",
   "used_for": "Contre-vérification : Les soupes d'orge de ces rubriques sont la h'ssoua hamra (n° 113), la h'ssoua aux crevettes (n° 151), la soupe d'orge au thym (n° 1479) et la soupe d'orge et de millet (n° 1496) ; aucune n'est au lait (rubriques soupes, soupes-2, soupes-3, soupes-et-harira, soupes-et-harira-2 et soupes-et-harira-3 relues)."
  },
  {
   "name": "FDA (Food and Drug Administration, États-Unis), « Selecting and Serving Fresh and Frozen Seafood Safely », contenu à jour au 5 mars 2024",
   "url": "https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely",
   "used_for": "Contre-vérification : La plupart des produits de la mer se cuisent à 145 °F (63 °C) à cœur ; sans thermomètre, les crevettes sont cuites quand leur chair devient ferme, nacrée et opaque (page lue le 7 novembre 2026)."
  }
 ],
 "discrepancies": [
  "Lait ou tomate : sur 12 recettes lues, 9 sont sans lait, dont 6 à la tomate (Choumicha n° 113 et 151, Taste of Maroc, Cooking with Alia n° 500, Lalla Moulati 2020, MWN Lifestyle) et 3 aux herbes (Choumicha n° 1479 et 1496, Lalla Moulati 2016) ; 3 sont au lait (Taste of Maroc, Lalla Moulati 2014, Cooking with Alia n° 690). Choumicha n'a aucune soupe d'orge au lait dans ses rubriques de soupes (copies archivées de 2025 et 2026). Quand la soupe s'appelle « dchicha », c'est toujours, dans les sources lues, une version sans lait (Lalla Moulati 2016 et 2020, et sa « soupe de boulgour ou de dchicha » à la tomate de 2018 ; MWN Lifestyle ; Taste of Maroc appelle « dchicha » la grosse orge de sa soupe à la tomate) ; les versions au lait s'appellent « h'ssoua » de belboula au lait (Lalla Moulati, Taste of Maroc) ou « hessoua blanche » (Cooking with Alia). Retenu : la version à la tomate et aux herbes ; le lait est en variante.",
  "Viande : Choumicha (agneau, ou crevettes) et Taste of Maroc (bœuf ou agneau, « facultatif ») en mettent ; Cooking with Alia, Lalla Moulati (2016 et 2020), MWN Lifestyle et les soupes au thym de Choumicha n'en mettent pas. Retenu : sans viande ; la viande est en variante.",
  "Orge par personne : 41,7 g chez Choumicha (n° 113 et 151), 47,5 g chez Taste of Maroc ; milieu 44,6 g. Retenu : 180 g pour 4 (45 g).",
  "Eau, ramenée à 180 g d'orge : 2,16 l (Choumicha), 1,89 l (Taste of Maroc), 0,5 l (Cooking with Alia, soupe très épaisse) ; médiane 2,03 l. Retenu : 2 l, puis eau chaude si la soupe épaissit.",
  "Huile, ramenée à 180 g d'orge : 57,6 ml (Choumicha), 57 ml (Taste of Maroc), 21 ml (Cooking with Alia) ; médiane 57 ml. Retenu : 4 c. à s. (60 ml).",
  "Sel et poivre, ramenés à 180 g d'orge : Choumicha 0,72 et 0,36 c. à c. ; Taste of Maroc 1,42 et 0,95 c. à c. ; milieux 1,07 et 0,65. Retenu : 1 c. à c. de sel (à rectifier) et 1/2 c. à c. de poivre.",
  "Épices : curcuma chez Taste of Maroc (facultatif, 0,95 c. à c. pour 180 g), Cooking with Alia (0,18) et Lalla Moulati (2016, « une cuillère ») ; milieu des deux mesures 0,56. Retenu : 1/2 c. à c. Gingembre : Taste of Maroc (1 c. à c.) et Lalla Moulati (« une cuillère », taille non précisée) ; quantité non confirmée, donc en variante. Cannelle et cumin : seulement MWN Lifestyle, écartés. Choumicha ne met que sel et poivre.",
  "Concentré de tomate, ramené à 180 g d'orge : 0,36 c. à s. (Choumicha n° 151), 0,72 (Cooking with Alia), 1,89 (Taste of Maroc, facultatif) ; médiane 0,72 c. à s. Retenu : 2 c. à c. (0,67 c. à s.), facultatif comme chez Taste of Maroc.",
  "Herbes : Taste of Maroc met 3 c. à s. de persil pour 190 g d'orge ; Cooking with Alia 2 c. à s. de persil et 2 de coriandre pour 250 g (2,9 c. à s. pour 180 g) ; Choumicha un bouquet de persil, ou de persil et coriandre. Retenu : 3 c. à s. de persil, ou moitié persil, moitié coriandre.",
  "Moment où l'on verse l'orge : à l'ébullition (Choumicha n° 113 et 151 ; Lalla Moulati 2016 après les aromates), après 15 à 20 min de bouillon (Taste of Maroc, dont le bouillon cuit avec la viande), dès le début (Cooking with Alia). Retenu : à l'ébullition, puisqu'il n'y a pas de viande à cuire.",
  "Durée de cuisson de l'orge : 15 min après l'avoir versée chez Taste of Maroc (45 min de cuisson en tout), 45 min de cuisson en tout chez Choumicha, environ 50 min chez Cooking with Alia, 45 à 60 min chez MWN Lifestyle ; 25 à 40 min pour les soupes d'orge blanches ou au lait (Choumicha n° 1479 et 1496, Lalla Moulati 2014, Taste of Maroc). Retenu : un minuteur de 30 min, puis goûter et prolonger si besoin (la grosse orge cuit plus longtemps, selon Taste of Maroc) ; 45 min de cuisson au total, comme Choumicha et Taste of Maroc.",
  "Tomates : râpées chez Choumicha ; râpées sans peau chez Cooking with Alia ; sans peau ni pépins chez Taste of Maroc. Retenu : râpées, peau jetée.",
  "Feu pour l'oignon : moyen chez Taste of Maroc, doux chez Choumicha. Retenu : moyen, en remuant, jusqu'à ce que l'oignon soit translucide (les deux sources).",
  "Contre-vérifiée le 7 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 9 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Aucune source ne dit clairement quelle version est la plus courante au Maroc : le choix vient du décompte des recettes lues et des noms qu'elles emploient. Le quota de recherche web était épuisé : je n'ai pas pu chercher d'article de presse marocaine sur ce point précis.",
  "Gingembre : quantité donnée par une seule source (Taste of Maroc), donc laissé en variante.",
  "MWN Lifestyle (2025) met de la cannelle et du cumin dans la dchicha, ce que les autres sources ne font pas ; le même article décrit la « hessoua » comme une soupe de pois chiches, ce qu'aucune autre source ne dit. Source jugée faible : seulement citée pour le nom et le service.",
  "Hespress (2021) cite la dchicha au ftour des provinces du Sud, sans décrire sa préparation : on ne sait pas si elle y est à la tomate ou au lait.",
  "Saison : aucune source lue ne relie clairement la dchicha à l'hiver (une page Lalla Moulati de 2019 sur la belboula aux herbes parle du froid dans son titre, mais son texte était vide).",
  "Taille des grains : « dchicha » pour la grosse orge (Taste of Maroc), « belboula » pour la semoule d'orge, moyenne chez Choumicha ; aucune source ne donne de mesure.",
  "Cooking with Alia n° 500 : le nombre de personnes n'est pas indiqué sur la page.",
  "Version au lait de Taste of Maroc : quantités en tasses, sans conversion métrique sur la page ; non reprises dans la variante.",
  "Femmes du Maroc et Bladi.net : aucune recette de soupe d'orge trouvée (recherche interne de Femmes du Maroc, liste des soupes de Bladi.net)."
 ],
 "cuisine": "Marocaine",
 "rayon": "Soupes",
 "img_alt": "Soupe d'orge à la tomate dans la marmite",
 "img": "img/dchicha.jpg",
 "photo": {
  "author": "Noureddine0101",
  "license": "CC BY-SA 3.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/3.0",
  "page": "https://commons.wikimedia.org/wiki/File:Tchicha.jpg",
  "modified": "réduite"
 }
});
