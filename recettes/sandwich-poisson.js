/* Recette : Sandwich de sardines à la chermoula. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "sandwich-poisson",
 "title": "Sandwich de sardines à la chermoula",
 "darija": "Sardine mzeouej",
 "arabic": "سندويتش السردين",
 "tagline": "Un des casse-croûte de rue les plus populaires du Maroc : des sardines farcies à la chermoula, frites et glissées encore chaudes dans un demi-pain, avec de la tomate, de l'oignon et de la harissa.",
 "category": "Sandwich",
 "occasion": "Casse-croûte de rue, à manger sur le pouce (Morocco World News ; Taste of Maroc)",
 "region": "Tout le Maroc, surtout les villes côtières ; les sardines farcies frites se vendent aussi, parfois seulement certains jours, à Jemaa el-Fna à Marrakech et dans la médina de Fès (Taste of Maroc). À Marrakech, on trouve aussi un sandwich de kefta de sardines, le hout quari (MarocMama, Halal Xplorer) ; dans le Nord, des bocadillos au poisson (Morocco World News).",
 "servings": 4,
 "servings_label": "sandwichs",
 "time": {
  "prep": 25,
  "cook": 20,
  "rest": 30,
  "rest_label": "Marinade"
 },
 "difficulty": "Moyen",
 "equipment": [
  "Le matériel de la recette du poisson frit de l'application (friteuse ou poêle profonde, couvercle, écumoire, papier absorbant)",
  "Râpe (pour les tomates)",
  "Couteau à pain",
  "Planche à découper",
  "Petits bols pour la garniture"
 ],
 "ingredients": [
  {
   "group": "Sardines",
   "items": [
    {
     "id": "sardines",
     "q": null,
     "u": "",
     "name": "sardines farcies à la chermoula",
     "note": "à préparer et à frire avec la recette du poisson frit de l'application (partie sardines)",
     "recipe": "poisson-frit",
     "canon": "sardine"
    }
   ]
  },
  {
   "group": "Pain",
   "items": [
    {
     "id": "pain",
     "q": 2,
     "u": "",
     "name": "petit pain rond",
     "pl": "petits pains ronds",
     "note": "khobz ; un demi-pain par sandwich",
     "recipe": "khobz",
     "canon": "khobz"
    }
   ]
  },
  {
   "group": "Garniture",
   "items": [
    {
     "id": "tomate",
     "q": null,
     "u": "",
     "name": "tomates bien mûres",
     "note": "râpées",
     "canon": "tomate"
    },
    {
     "id": "oignon",
     "q": null,
     "u": "",
     "name": "oignon",
     "note": "haché finement",
     "canon": "oignon"
    },
    {
     "id": "sel",
     "q": null,
     "u": "",
     "name": "sel",
     "canon": "sel"
    },
    {
     "id": "poivre",
     "q": null,
     "u": "",
     "name": "poivre noir moulu",
     "canon": "poivre"
    },
    {
     "id": "harissa",
     "q": null,
     "u": "",
     "name": "harissa",
     "note": "selon ton goût",
     "canon": "harissa"
    },
    {
     "id": "olives",
     "q": null,
     "u": "",
     "name": "olives vertes",
     "note": "dénoyautées, en rondelles ; facultatif",
     "canon": "olives"
    },
    {
     "id": "citron",
     "q": null,
     "u": "",
     "name": "citron",
     "note": "en quartiers",
     "canon": "citron"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Prépare les sardines farcies",
   "text": "Prépare les {{sardines}} avec la recette du poisson frit de l'application, en ne prenant que des sardines : écaille-les, vide-les, ouvre-les, prépare la chermoula et colle les sardines deux par deux. Avant de toucher le poisson cru, mets un peu de chermoula de côté pour la sauce.",
   "timer": null,
   "tip": "Prends de petites sardines bien fraîches, achetées le jour même."
  },
  {
   "phase": "Préparation",
   "title": "Laisse mariner au frais",
   "text": "Couvre les sardines farcies et mets-les au réfrigérateur au moins 30 minutes. Pendant ce temps, prépare la garniture.",
   "timer": {
    "min": 30,
    "label": "Marinade",
    "done": "La marinade est prête. Prépare la friture."
   }
  },
  {
   "phase": "Préparation",
   "title": "Râpe les tomates",
   "text": "Coupe les {{tomate}} en deux et retire les graines. Râpe la chair jusqu'à obtenir une pulpe et jette la peau. Assaisonne de {{sel}} et de {{poivre}}.",
   "timer": null,
   "tip": "La râpe marche mieux avec des tomates très mûres.",
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
   "title": "Hache l'oignon",
   "text": "Pèle l'{{oignon}} et hache-le finement.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Fais frire les sardines",
   "text": "Fais frire les sardines comme dans la recette du poisson frit de l'application : farinées juste avant, dans une huile bien chaude qui ne fume pas, par petites quantités, environ 3 minutes par face, jusqu'à ce qu'elles soient bien dorées.",
   "timer": {
    "min": 3,
    "label": "Une face",
    "done": "Retourne les sardines, puis relance 3 minutes pour l'autre face."
   },
   "tip": "Ne quitte pas la poêle des yeux. Si l'huile prend feu : jamais d'eau ; glisse le couvercle, coupe le feu si c'est sans danger, ne déplace pas la poêle et appelle sans attendre les pompiers, même si le feu semble éteint."
  },
  {
   "phase": "Cuisson",
   "title": "Égoutte les sardines",
   "text": "Pose les sardines sur du papier absorbant pour enlever l'excès d'huile.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Ouvre les pains",
   "text": "Il faut un demi-pain par sandwich, soit {{pain:full}} en tout. Coupe chaque pain en deux, puis ouvre chaque moitié en poche, sans la déchirer.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Garnis les sandwichs",
   "text": "Dans chaque poche, mets un peu de tomate râpée et d'oignon haché, de la {{harissa}} selon ton goût et quelques {{olives}}. Glisse les sardines encore chaudes. Ajoute un filet de jus de {{citron}} et, si tu en as gardé, un peu de chermoula.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Mange aussitôt",
   "text": "Mange tout de suite, tant que les sardines sont chaudes. Ne garde pas un sandwich plus de 2 heures hors du réfrigérateur, ou plus d'1 heure s'il fait plus de 32 °C.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Les sardines farcies frites sont un des plats de rue les plus classiques du Maroc, même loin de la côte, parfois seulement certains jours : on les trouve à Jemaa el-Fna à Marrakech et dans la vieille médina de Fès.",
   "source": "Taste of Maroc (Nada Kiffa, native de Casablanca) ; Morocco World News (2013, d'après CNN : la sardine, plat de rue de base, est le plus souvent frite ; farcie d'une chermoula piquante, elle fait « un savoureux sandwich »)"
  },
  {
   "text": "Au Maroc, la sardine se prépare de bien des façons, mais la friture reste la plus populaire.",
   "source": "Morocco World News, 27 mai 2013 (d'après CNN) ; Taste of Maroc (sardines farcies frites, plat de rue emblématique)"
  },
  {
   "text": "Un demi petit pain suffit : glisse-y les sardines farcies.",
   "source": "Morocco World News, 30 juillet 2021 (« dans un demi petit pain ») ; MarocMama et Halal Xplorer (sandwich de sardines dans du pain frais)"
  },
  {
   "text": "On les mange avec une salade tomate-oignon : dans le sandwich, la tomate râpée et l'oignon haché jouent ce rôle.",
   "source": "Morocco World News, 2021 (salade marocaine tomate-oignon) ; Taste of Maroc (salade concombre, tomate, oignon) ; MarocMama et Halal Xplorer (tomate et oignon cru dans le sandwich de Marrakech)"
  },
  {
   "text": "La harissa accompagne les sardines frites et le sandwich de sardines de Marrakech ; mets-en selon ton goût.",
   "source": "Taste of Maroc (sardines frites servies avec de la harissa) ; MarocMama et Halal Xplorer (harissa dans le sandwich de sardines de Marrakech)"
  },
  {
   "text": "Les olives vont bien avec le poisson frit, et les olives vertes dans le sandwich.",
   "source": "Choumicha (friture servie avec des olives m'chermlines) ; MarocMama (olives vertes en rondelles) ; Halal Xplorer (olives hachées)"
  },
  {
   "text": "Garde de côté un peu de chermoula propre, avant de toucher le poisson cru, pour en mettre dans le pain : jamais celle qui a servi à mariner.",
   "source": "Taste of Maroc (Nada Kiffa en garde un peu pour servir avec le poisson) ; FDA (éviter que les bactéries du poisson cru passent aux aliments prêts à manger)"
  },
  {
   "text": "Les petites sardines fraîches sont les meilleures : moins de 15 cm, brillantes et fermes.",
   "source": "Taste of Maroc ; Choumicha, « La sardine, un trésor de bienfaits »"
  },
  {
   "text": "Les sardines collées deux par deux s'appellent « mzeouej », les « mariées ».",
   "source": "Taste of Maroc (Nada Kiffa) ; SBS (Ellie Bouhadana : « mzeouejim », mariés)"
  },
  {
   "text": "Les sardines farcies se mangent chaudes de préférence, mais aussi tièdes ou froides.",
   "source": "Bladi, « Sardines farcies » (de préférence chaudes) ; Taste of Maroc (chaudes, tièdes ou à température ambiante) ; Morocco World News, 2021 (froides ou chaudes)"
  }
 ],
 "mistakes": [
  "Mettre dans le pain une chermoula qui a touché le poisson cru (FDA ; Taste of Maroc).",
  "Laisser un sandwich plus de 2 heures hors du réfrigérateur, ou plus d'1 heure s'il fait plus de 32 °C (FDA).",
  "Prendre des sardines qui ne sont pas du jour : la sardine est très fragile (Choumicha ; FDA pour les signes de fraîcheur).",
  "Râper des tomates fermes : la râpe marche mieux avec des tomates très mûres (Taste of Maroc).",
  "Oublier les règles de la friture : huile qui fume, poêle remplie à plus d'un tiers, poisson mouillé, eau sur de l'huile en feu. Tout est dans la recette du poisson frit de l'application (gouvernement du Québec ; pompiers du Cambridgeshire ; USFA ; SFDA)."
 ],
 "serving": "Mange le sandwich tout de suite, quand les sardines sont encore chaudes (Bladi : les sardines farcies se mangent de préférence chaudes). Morocco World News propose de glisser les sardines farcies dans un demi petit pain et de les accompagner d'une boisson, ou de les servir avec la salade marocaine tomate-oignon. Taste of Maroc ajoute du citron et de la harissa. Ne le garde pas plus de 2 heures hors du réfrigérateur (FDA).",
 "variants": [
  "Hout quari de Marrakech : sardines hachées avec du ras el hanout, du smen et de la coriandre, façonnées en boulettes, grillées ou poêlées, puis servies dans du pain avec une sauce tomate crue, de l'oignon cru, de la harissa et des olives vertes ; le pain est parfois beurré de beurre clarifié et chacun compose son sandwich (MarocMama ; Halal Xplorer). Choumicha fait aussi une kefta de sardines, avec graisse de rognons (halal), oignon, herbes et épices, en brochettes grillées au charbon.",
  "Kefta de sardines en sauce : la kefta de sardine se vend toute prête au marché aux poissons (Taste of Maroc) ; Choumicha la cuit en boulettes avec des olives vertes, et à Marrakech les boulettes de sardines se font en tajine (Le360).",
  "Sardines grillées d'Essaouira : marinées à la chermoula, grillées au feu, servies avec du pain et des olives (Morocco World News Lifestyle, 2024).",
  "Bocadillo au poisson dans le Nord : avec des sardines ou un autre poisson blanc pêché du jour (Morocco World News, 2021).",
  "Sans pain : les sardines farcies avec la salade tomate-oignon (Morocco World News, 2021), ou avec des haricots blancs à la tomate et des salades (Taste of Maroc)."
 ],
 "sources": [
  {
   "name": "Morocco World News, Larbi Arbaoui, « CNN's 10 street food to try in Morocco », 27 mai 2013",
   "url": "https://www.moroccoworldnews.com/2013/05/141164/cnns-10-street-food-to-try-in-morocco/",
   "used_for": "D'après CNN : la sardine est un plat de rue de base au Maroc ; la friture est la façon la plus populaire de la cuisiner ; farcie d'une chermoula piquante, elle fait « un savoureux sandwich » (10 dirhams en 2013)."
  },
  {
   "name": "Morocco World News, « Five Street Foods in Morocco That Are Uniquely Moroccan », 30 juillet 2021 (signé « michael-sauers » sur moroccoworldnews.com, Majda Bouzaroita sur la copie de MWN Lifestyle)",
   "url": "https://www.moroccoworldnews.com/2021/07/56553/five-street-foods-in-morocco-that-are-uniquely-moroccan/",
   "used_for": "Sardines farcies frites, servies froides ou chaudes, avec la salade tomate-oignon ou glissées dans un demi petit pain ; bocadillos au poisson (sardines ou poisson blanc) dans le Nord ; la note de « gingembre » n'est pas reprise (voir les écarts)."
  },
  {
   "name": "MWN Lifestyle, Majda Bouzaroita, « Five Street Foods in Morocco That Are Uniquely Moroccan », 30 juillet 2021 (copie du même article)",
   "url": "https://mwnlifestyle.com/?p=4788",
   "used_for": "Contrôle du texte précédent : mêmes phrases sur les sardines farcies et le demi petit pain."
  },
  {
   "name": "MWN Lifestyle, Majda Bouzaroita, « Moroccan Street Foods That Will Make You Swoon », 27 septembre 2024",
   "url": "https://mwnlifestyle.com/?p=4998",
   "used_for": "Sardines d'Essaouira marinées à la chermoula, grillées, servies avec du pain et des olives (variante)."
  },
  {
   "name": "Taste of Maroc, Nada Kiffa, « Moroccan Stuffed Fried Sardines with Chermoula », mise à jour du 24 octobre 2017 (copie archivée du 5 août 2026)",
   "url": "https://web.archive.org/web/20260805192917/https://tasteofmaroc.com/moroccan-stuffed-sardines/",
   "used_for": "Sardines farcies frites : un des exemples les plus classiques de la cuisine de rue marocaine, même loin de la côte (Jemaa el-Fna, médina de Fès) ; noms mzeouej, machrouk, ʿachiq w maʿchouq ; petites sardines fraîches ; service chaud, tiède ou à température ambiante avec citron et harissa, salades et haricots blancs."
  },
  {
   "name": "Taste of Maroc, Christine Benlafquih, « Moroccan Sardine Balls Recipe – Fish Meatballs in Tomato Sauce », mise à jour du 13 octobre 2020 (copie archivée du 11 mai 2026)",
   "url": "https://web.archive.org/web/20260511111912/https://tasteofmaroc.com/moroccan-sardine-fish-balls-in-tomato-sauce/",
   "used_for": "Kefta de sardine vendue toute prête au marché aux poissons ; tomates coupées en deux, épépinées et râpées en pulpe, ce qui marche mieux avec des tomates très mûres."
  },
  {
   "name": "Taste of Maroc, Nada Kiffa, « Chermoula Recipe », mise à jour du 17 février 2020 (copie archivée du 27 août 2026)",
   "url": "https://web.archive.org/web/20260827184612/https://tasteofmaroc.com/moroccan-chermoula-recipe/",
   "used_for": "Chermoula servie aussi en condiment avec le poisson ; en commentaire, Nada Kiffa en garde un peu de côté pour servir."
  },
  {
   "name": "Choumicha, « Brochettes de kefta de sardines » (copie archivée du 20 mai 2026)",
   "url": "https://web.archive.org/web/20260520225405/https://choumicha.ma/recette/1122-brochettes-de-kefta-de-sardines.html",
   "used_for": "Kefta de sardines (filets hachés, graisse de rognons, oignon, ail, coriandre, persil, poivre, gingembre, piment doux, cumin, piment fort, sel), reposée 1 h au frais et grillée au charbon (variante)."
  },
  {
   "name": "Choumicha, « Boulettes de sardines aux olives vertes » (copie archivée du 21 mai 2026)",
   "url": "https://web.archive.org/web/20260521072648/https://choumicha.ma/recette/287-boulettes-de-sardines-aux-olives-vertes.html",
   "used_for": "Boulettes de sardines mijotées avec des olives vertes et des tomates (variante)."
  },
  {
   "name": "Choumicha, « Friture de poissons m'chermel » et « La sardine, un trésor de bienfaits » (copies archivées des 10 juillet et 21 mai 2026)",
   "url": "https://web.archive.org/web/20260710200559/https://www.choumicha.ma/recette/143-friture-de-poissons-m-chermel.html",
   "used_for": "Poisson frit servi avec citron et olives m'chermlines ; sardines de moins de 15 cm, très fragiles, à manger le jour même."
  },
  {
   "name": "Bladi.net, « Sardines farcies »",
   "url": "https://www.bladi.net/sardines-farcies.html",
   "used_for": "Sardines farcies frites à manger de préférence chaudes, avec du citron."
  },
  {
   "name": "Le360, Hajar Toufik, « Vidéo. À Marrakech, un ftour sans sardines a un goût d'inachevé », 24 avril 2021",
   "url": "https://fr.le360.ma/societe/video-a-marrakech-un-ftour-sans-sardines-a-un-gout-dinacheve-237451/",
   "used_for": "À Marrakech, les sardines se mangent au moins deux fois par semaine pendant le ramadan : grillées, au four ou en boulettes en tajine. L'article ne parle pas de sandwich."
  },
  {
   "name": "MarocMama, Amanda Mouttaki (organise des visites culinaires à Marrakech et Essaouira), « Moroccan Fish Recipe: Hout Quari » (date non affichée)",
   "url": "https://marocmama.com/moroccan-fish-recipe-hout-quari/",
   "used_for": "Hout quari : sandwich de boulettes de sardines de Marrakech, servi avec oignon cru, sauce tomate crue (tomate râpée, coriandre, sel, poivre), harissa, olives vertes en rondelles et smen ; recette maison au ras el hanout et au smen, grillée environ 5 min par face ou poêlée (variante)."
  },
  {
   "name": "MarocMama, Amanda Mouttaki, « Savoring the Streets: Discovering the Best Street Food in Morocco » (© 2022)",
   "url": "https://marocmama.com/moroccan-street-food/",
   "used_for": "Sandwichs de sardines (hout quari) : sardines grillées ou frites dans du pain, avec tomates et olives."
  },
  {
   "name": "Halal Xplorer, « Hout Quari: The Moroccan Big Mac in Marrakech », 14 décembre 2021",
   "url": "https://halalxplorer.com/hout-quari-the-moroccan-big-mac-in-marrakech/",
   "used_for": "Sardines hachées servies à part avec sauce tomate, oignon cru, harissa et olives hachées ; pain frais beurré de beurre clarifié ; chacun compose son sandwich ; dans des échoppes de quartier de Marrakech."
  },
  {
   "name": "SBS Food, Ellie Bouhadana, « Moroccan Stuffed Sardines », 28 novembre 2023",
   "url": "https://www.sbs.com.au/food/the-cook-up-with-adam-liaw/recipe/moroccan-stuffed-sardines/20a8iwequ",
   "used_for": "Nom « mzeouejim » (mariés) ; tomates râpées assaisonnées de sel et de poivre, servies avec les sardines et du citron."
  },
  {
   "name": "FDA (États-Unis), « Selecting and Serving Fresh and Frozen Seafood Safely », contenu à jour au 5 mars 2024",
   "url": "https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely",
   "used_for": "Éviter que les bactéries du poisson cru passent aux aliments prêts à manger ; jamais plus de 2 h hors du réfrigérateur, 1 h au-dessus de 90 °F (32 °C)."
  },
  {
   "name": "Hespress FR, Mohamed Jaouad El Kanabi, « Crise et prix du poisson : l'océan déserte les assiettes », 6 septembre 2024",
   "url": "https://fr.hespress.com/384961-crise-et-prix-du-poisson-locean-deserte-les-assiettes.html",
   "used_for": "Contre-vérification : « Le thon, la sardine, le merlan et tant d'autres variétés auparavant omniprésentes » sont devenus des produits de luxe pour nombre de Marocains ; le kilo de sardines était « autrefois à la portée de tous ». Article cité dans les écarts du sandwich mais absent de ses sources. Lu avec l'outil de lecture web (curl refusé, 403)."
  },
  {
   "name": "Al Jazeera, Meryem Taidi, « الأجود عالميا.. سردين المغرب ثروة اقتصادية وثقافة غذاء », 21 février 2021",
   "url": "https://www.aljazeera.net/ebusiness/2021/2/21/%D8%A7%D9%84%D8%A3%D8%AC%D9%88%D8%AF-%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A7-%D8%B3%D8%B1%D8%AF%D9%8A%D9%86-%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D8%AB%D8%B1%D9%88%D8%A9",
   "used_for": "Contre-vérification : « ويعد السردين أساسيا في الأسواق المغربية » : la sardine est un produit de base des marchés marocains ; les petits poissons pélagiques font plus de 80 % des captures."
  },
  {
   "name": "Lalla Moulati (lalamoulati.net, Maroc), « سردين معمر بحشوة ساهلة ومقلي مقرمش وجد شهي », 16 novembre 2017",
   "url": "https://www.lalamoulati.net/93278.html",
   "used_for": "Contre-vérification : Source marocaine de plus pour les sardines farcies frites : farcies (poivron, sel, poivre, citron, coriandre, paprika, harissa, concentré de tomate, huile d'olive), farinées, frites dans une huile bien chaude, servies avec des rondelles de citron. Elle ne parle pas de sandwich."
  }
 ],
 "discrepancies": [
  "Choix de la version : sardines farcies à la chermoula, frites, dans un demi petit pain. Pourquoi : (1) la sardine est le poisson le plus abondant des côtes marocaines (Choumicha), bon marché et abondante (Taste of Maroc) et un produit de base des marchés (Al Jazeera, 2021), même si son prix a beaucoup monté (Le360, 2021 ; Hespress, 2024) ; (2) la friture est sa préparation la plus populaire et, farcie d'une chermoula piquante, elle fait « un savoureux sandwich » (Morocco World News 2013, d'après CNN) ; (3) Taste of Maroc en fait un des plats de rue les plus classiques, vendu même loin de la mer (Marrakech, Fès), et Morocco World News (2021) la conseille dans un demi petit pain. Le sandwich de kefta de sardines (hout quari) existe, mais les sources le situent à Marrakech (MarocMama, Halal Xplorer) et Halal Xplorer le dit difficile à trouver ; les sardines grillées d'Essaouira se servent avec du pain et des olives, sans sandwich décrit (MWN Lifestyle, 2024), et les bocadillos au poisson sont surtout dans le Nord (Morocco World News, 2021). Ces versions sont dans les variantes.",
  "Pain : « un demi petit pain » (Morocco World News, 2021) ; pita ou petit pain ferme (MarocMama, pour le hout quari) ; pain frais beurré de beurre clarifié (Halal Xplorer, hout quari). Retenu : un demi petit pain rond (khobz) par sandwich.",
  "Garniture : salade tomate-oignon (Morocco World News 2021 ; Taste of Maroc, avec concombre) ou sauce de tomate crue râpée avec oignon cru (MarocMama ; Halal Xplorer ; tomate râpée chez SBS). Retenu : tomate râpée assaisonnée et oignon haché, faciles à mettre dans le pain. Harissa (Taste of Maroc, MarocMama, Halal Xplorer), olives (Choumicha, MarocMama, Halal Xplorer) et citron (Choumicha, Taste of Maroc, Bladi) ajoutés.",
  "Chaud ou froid : de préférence chaudes (Bladi) ; chaudes, tièdes ou à température ambiante (Taste of Maroc) ; froides ou chaudes (Morocco World News, 2021). Retenu : chaudes, juste après la friture.",
  "Morocco World News (2021) parle d'un goût fort d'ail et de gingembre. Le gingembre n'apparaît dans aucune chermoula de sardines frites lue (Choumicha, Bladi, Cooking With Alia), sauf en option (1 c. à c.) dans la recette de chermoula de Taste of Maroc ; on le trouve chez Hassan M'Souli (SBS) et dans la kefta de sardines de Choumicha. Non retenu.",
  "Prix : 10 dirhams en 2013 (Morocco World News, d'après CNN), environ 20 à 25 dirhams pour les sandwichs de rue en 2021 (Morocco World News, pour les bocadillos). Non utilisé dans la recette.",
  "Temps : ceux de la recette du poisson frit de l'application (préparation 25 min, cuisson 20 min, marinade 30 min), car c'est elle qui fait l'essentiel du travail. Le temps d'assemblage n'est chiffré par aucune source.",
  "Contre-vérifiée le 7 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 13 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Nom du sandwich en darija et en arabe : aucune source ne donne de nom pour le sandwich lui-même. « Sardine mzeouej » est le nom des sardines farcies (Taste of Maroc) ; « سندويتش السردين » est une simple description.",
  "Nombre de sardines par sandwich : aucune source fiable. Un site de voyage (visiearth.pages.dev) parle de 3 à 4 sardines, sans source vérifiable : non retenu. À adapter à la taille du pain.",
  "Quantités de tomate, d'oignon, de harissa et d'olives par sandwich : non chiffrées par les sources, donc laissées « selon ton goût ».",
  "Ouvrir le demi-pain en poche : c'est la lecture de « glisser les sardines dans un demi petit pain » (Morocco World News) ; le geste n'est pas décrit.",
  "Version de Medium (« Eat like a local: the best street food in Marrakesh ») : boulettes de sardines mêlées de graisse de mouton, frites, avec sauce tomate et olives vertes. Page refusée (403), vue seulement dans un résumé de moteur de recherche : non utilisée.",
  "Sandwich de sardines grillées d'Essaouira (avec harissa et citron confit, environ 15 dirhams) et sandwich de sardines en filets de Rabat : vus seulement dans des résumés de recherche (nomadotravel.app, tripranger.com), pages non ouvertes : non utilisés.",
  "Article de TelQuel sur la cuisine de rue (11 novembre 2025) : accès refusé (403), non contourné.",
  "Sens du mot « quari » dans « hout quari » : non expliqué par les sources.",
  "Le quota de recherches web de la session a été épuisé en cours de travail : pas d'autres recherches possibles sur Le360, Hespress ou Lalla Moulati au sujet du sandwich."
 ],
 "cuisine": "Marocaine",
 "rayon": "Poissons",
 "pairs": [
  "poisson-frit",
  "khobz"
 ],
 "pairs_label": "Les recettes utilisées",
 "img_alt": "Sandwich de sardines dans un petit pain, avec de la salade",
 "img": "img/sandwich-poisson.jpg",
 "photo": {
  "author": "bobjudge",
  "license": "CC BY 2.0",
  "license_url": "https://creativecommons.org/licenses/by/2.0/",
  "page": "https://www.flickr.com/photos/8286199@N08/3444731119",
  "modified": "réduite"
 }
});
