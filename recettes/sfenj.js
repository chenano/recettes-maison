/* Recette : Sfenj, beignets marocains en anneau. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "sfenj",
 "title": "Sfenj, beignets marocains en anneau",
 "darija": "sfenj",
 "arabic": "سفنج",
 "tagline": "Des beignets en anneau, croustillants dehors, légers et moelleux dedans, à manger tout chauds avec du sucre ou du miel et un thé à la menthe.",
 "category": "Douceur",
 "occasion": "Petit-déjeuner, goûter avec le thé à la menthe",
 "region": "Maroc ; aussi dans tout le Maghreb (Algérie, Tunisie, Libye)",
 "servings": 14,
 "servings_label": "beignets",
 "time": {
  "prep": 25,
  "cook": 30,
  "rest": 240,
  "rest_label": "Levée"
 },
 "difficulty": "Moyen",
 "equipment": [
  "Un grand saladier et deux petits bols",
  "Une balance de cuisine et un verre doseur",
  "Du film alimentaire ou un torchon propre",
  "Le plus sûr : une friteuse électrique avec thermostat",
  "Sinon : une casserole large et profonde, à fond épais, d'au moins 18 cm de haut, et un thermomètre de cuisson",
  "Un couvercle ou une plaque assez grand pour couvrir la casserole, toujours à portée de main",
  "Une écumoire (ou une araignée) et une fourchette",
  "Une grille garnie de papier absorbant, ou un plat garni de papier absorbant"
 ],
 "ingredients": [
  {
   "group": "Pâte",
   "items": [
    {
     "id": "levure",
     "q": 1,
     "u": "c. à s.",
     "name": "de levure boulangère sèche",
     "canon": "levure-boulangere"
    },
    {
     "id": "farine",
     "q": 500,
     "u": "g",
     "name": "de farine blanche (farine ordinaire)",
     "canon": "farine"
    },
    {
     "id": "sel",
     "q": 1,
     "u": "c. à c.",
     "name": "de sel fin",
     "canon": "sel"
    },
    {
     "id": "eau",
     "q": 400,
     "u": "ml",
     "name": "d'eau tiède",
     "note": "environ : la pâte doit être très collante ; ajoute quelques cuillères d'eau si elle ne l'est pas",
     "canon": "eau"
    }
   ]
  },
  {
   "group": "Friture",
   "items": [
    {
     "id": "huile",
     "q": null,
     "u": "",
     "name": "huile végétale de friture (par exemple tournesol)",
     "note": "assez pour 6 cm de profondeur, sans dépasser le tiers de la hauteur de la casserole",
     "canon": "huile"
    },
    {
     "id": "huile-mains",
     "q": null,
     "u": "",
     "name": "huile (pour les mains)",
     "note": "un petit bol",
     "canon": "huile"
    }
   ]
  },
  {
   "group": "Pour servir, au choix",
   "items": [
    {
     "id": "sucre",
     "q": null,
     "u": "",
     "name": "sucre en poudre ou sucre glace",
     "canon": "sucre"
    },
    {
     "id": "miel",
     "q": null,
     "u": "",
     "name": "miel",
     "canon": "miel"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Délaye la levure",
   "text": "Dans un petit bol, mélange {{levure}} de levure avec un peu d'eau tiède, prise sur les {{eau}} d'eau. Laisse reposer 10 minutes.",
   "timer": {
    "min": 10,
    "label": "Levure",
    "done": "La levure a reposé : prépare la pâte."
   },
   "tip": "Morocco World News (2022) laisse la levure au moins 10 minutes dans l'eau tiède ; My Moroccan Food, 5 à 10 minutes, jusqu'à ce qu'elle mousse."
  },
  {
   "phase": "Préparation",
   "title": "Mélange la pâte",
   "text": "Dans un grand saladier, mélange {{farine}} de farine et {{sel}} de sel. Ajoute la levure, puis verse le reste de l'eau petit à petit, en mélangeant à la main. La pâte doit être très collante, presque comme une pâte à crêpes épaisse. Si elle ne colle pas, ajoute quelques cuillères d'eau.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Pétris longuement",
   "text": "Pétris la pâte au moins 10 minutes, avec la paume de la main, dans le saladier ou sur un plan de travail fariné. Au début, elle colle beaucoup : c'est normal, ça devient plus facile après quelques minutes. Elle est prête quand elle est lisse et très élastique. Tu peux aussi utiliser un robot pétrisseur.",
   "timer": {
    "min": 10,
    "label": "Pétrissage",
    "done": "Lisse et très élastique ? Mets la pâte à lever. Sinon, pétris encore quelques minutes."
   }
  },
  {
   "phase": "Préparation",
   "title": "Laisse lever 4 heures",
   "text": "Couvre le saladier de film alimentaire ou d'un torchon propre. Laisse lever 4 heures dans un endroit tiède, jusqu'à ce que la pâte ait triplé de volume.",
   "timer": {
    "min": 240,
    "label": "Levée de la pâte",
    "done": "La pâte a triplé ? Prépare la friture. Sinon, laisse-la lever encore un peu."
   },
   "tip": "Chez Mohamed El Hadri, sfenji de la médina de Chefchaouen, la pâte se préparait la nuit et levait jusqu'au matin (Hespress)."
  },
  {
   "phase": "Cuisson",
   "title": "Prépare la friture",
   "text": "Le plus sûr est une friteuse électrique avec thermostat. Sinon, prends une casserole large et profonde, à fond épais, d'au moins 18 cm de haut. Verse l'{{huile}} sur 6 cm de profondeur, jamais plus d'un tiers de la hauteur. Tourne les poignées vers l'intérieur. Garde à portée de main un couvercle assez grand pour couvrir la casserole.",
   "timer": null,
   "tip": "La friteuse avec thermostat règle la température toute seule : c'est bien plus sûr (London Fire Brigade). Le gouvernement du Québec déconseille même de frire dans une casserole."
  },
  {
   "phase": "Cuisson",
   "title": "Chauffe l'huile à 180 °C",
   "text": "Chauffe l'huile à feu moyen-vif jusqu'à 180 °C sur le thermomètre, puis règle le feu pour garder cette température. À partir de maintenant, ne quitte plus l'huile des yeux. Si elle fume, elle est trop chaude : coupe le feu et laisse-la refroidir.",
   "timer": null,
   "tip": "Si l'huile prend feu : jamais d'eau, et ne déplace pas la casserole. Si tu peux le faire sans danger, pose vite le couvercle sur la casserole (gouvernement du Québec, USFA), puis coupe le feu (London Fire Brigade, pompiers de Cambridgeshire, gouvernement du Québec), sans te pencher au-dessus de la casserole (pompiers de Cambridgeshire). Appelle ensuite les pompiers, même si le feu semble éteint (gouvernement du Québec). Si le feu grandit, ou si tu ne peux pas approcher sans danger, n'essaie pas de l'éteindre : fais sortir tout le monde, ferme la porte et appelle les pompiers (London Fire Brigade, pompiers de Cambridgeshire, gouvernement du Québec)."
  },
  {
   "phase": "Cuisson",
   "title": "Façonne un anneau",
   "text": "Verse un peu d'{{huile-mains}} dans un petit bol et huile-toi les doigts. Prends un morceau de pâte de la taille d'un œuf. Enfonce les pouces au centre pour faire un trou, puis étire la pâte en un grand anneau, large comme un bracelet. Fais un trou bien grand : il rétrécit beaucoup à la cuisson.",
   "timer": null,
   "tip": "Beaucoup de recettes trempent les mains dans l'eau. Ici, on les huile, comme le propose aussi Morocco World News (2013) : l'eau et l'huile chaude font un mélange dangereux (London Fire Brigade)."
  },
  {
   "phase": "Cuisson",
   "title": "Plonge-le doucement",
   "text": "Fais glisser l'anneau doucement dans l'huile chaude, en le posant loin de toi. Fais-en frire 3 ou 4 à la fois au plus, selon la taille de la casserole, sans les serrer.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Fais dorer les deux faces",
   "text": "Laisse frire 1 à 2 minutes, puis retourne le sfenj avec l'écumoire. Compte encore 1 à 2 minutes, jusqu'à ce qu'il soit gonflé et bien doré des deux côtés.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Égoutte",
   "text": "Sors le sfenj avec l'écumoire ou une fourchette, jamais avec les doigts. Pose-le sur la grille garnie de papier absorbant.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Continue par fournées",
   "text": "Façonne et fais frire le reste de la pâte de la même façon, en te huilant les doigts avant chaque morceau. Garde l'huile autour de 180 °C.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Éteins le feu",
   "text": "Dès que le dernier sfenj est sorti, éteins le feu ou la friteuse. Ne laisse pas la casserole d'huile chaude sans surveillance.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Sers tout chaud",
   "text": "Sers les sfenj tout de suite, bien chauds, avec un thé à la menthe. Mange-les nature, saupoudrés de {{sucre}}, ou trempés dans le {{miel}}.",
   "timer": null,
   "tip": "S'ils ont refroidi, réchauffe-les avant de servir (My Moroccan Food)."
  }
 ],
 "secrets": [
  {
   "text": "La pâte doit être très molle et collante, presque comme une pâte à crêpes épaisse. Si elle ne colle pas, ajoute quelques cuillères d'eau.",
   "source": "My Moroccan Food (Nargisse Benkabbou) ; Bladi.net (« pâte semi-liquide, visqueuse ») ; Jewish Food Society (famille Stulman, de Rabat : « très lâche et collante »)"
  },
  {
   "text": "Pétris jusqu'à ce que la pâte soit très élastique : elle colle au début, puis devient plus facile à travailler.",
   "source": "My Moroccan Food (10 minutes) ; Jewish Food Society (15 minutes)"
  },
  {
   "text": "Laisse la pâte lever jusqu'à ce qu'elle triple : 4 heures dans un endroit tiède.",
   "source": "My Moroccan Food (4 heures) ; Morocco World News, 2022 (4 à 5 heures)"
  },
  {
   "text": "Mohamed El Hadri, sfenji à Chefchaouen à partir du milieu des années 1940, préparait sa pâte la nuit, avec de la levure, du sel et de la farine tamisée, bien pétris. Il la laissait lever dans un récipient couvert, puis faisait frire dès les premières heures du matin.",
   "source": "Hespress (Chefchaouen, 31 mai 2019)"
  },
  {
   "text": "Fais un grand trou : il rétrécit beaucoup à la friture. S'il est trop petit, tu obtiens une boule plutôt qu'un anneau.",
   "source": "Jewish Food Society (famille Stulman, de Rabat) ; My Moroccan Food (« un large anneau »)"
  },
  {
   "text": "Vérifie la température avec un thermomètre : 180 °C.",
   "source": "My Moroccan Food (180 °C) ; Jewish Food Society, deux recettes (350 °F, soit environ 177 °C)"
  },
  {
   "text": "Ne charge pas trop la casserole : 3 ou 4 sfenj à la fois, selon sa taille.",
   "source": "Jewish Food Society (3 à la fois ; 4 ou 5 chez la famille Stulman)"
  },
  {
   "text": "La pâte n'est pas sucrée : chacun choisit sa garniture, sucre, miel ou même un œuf.",
   "source": "My Moroccan Food (sfenj non sucré ; sucre, miel ou œuf au plat) ; Morocco World News, 2022 (une pincée de sucre par-dessus)"
  },
  {
   "text": "Le sfenj se mange chaud. S'il a refroidi, réchauffe-le avant de le servir.",
   "source": "My Moroccan Food ; Morocco World News, 2013 (« servez-les chauds »)"
  },
  {
   "text": "Chez le sfenji, les beignets sont enfilés sur de fines lanières de feuille de palmier, pour les emporter en grappes.",
   "source": "Hespress (Chefchaouen) ; Wikipédia (photo prise à Essaouira)"
  },
  {
   "text": "À Chefchaouen, Mohamed El Hadri faisait d'abord frire le sfenj à l'huile d'olive ; au milieu des années 1950, il est passé à l'« huile roumi », vendue en fûts.",
   "source": "Hespress (souvenirs du fils d'un sfenji de Chefchaouen)"
  },
  {
   "text": "Sors les sfenj avec une écumoire ou une fourchette, jamais avec les doigts.",
   "source": "Morocco World News, 2022 ; My Moroccan Food (écumoire)"
  }
 ],
 "mistakes": [
  "Chauffer l'huile jusqu'à ce qu'elle fume, comme le dit une ancienne recette de Bladi.net : une huile qui fume est trop chaude ; il faut couper le feu (London Fire Brigade, USFA), ou au moins le baisser (pompiers de Cambridgeshire, gouvernement du Québec), et ne jamais la laisser continuer à chauffer (gouvernement du Québec).",
  "Remplir la casserole d'huile à plus d'un tiers de sa hauteur (London Fire Brigade, pompiers de Cambridgeshire).",
  "Quitter l'huile des yeux, même quelques secondes (pompiers de Cambridgeshire, USFA, gouvernement du Québec).",
  "Laisser tomber de l'eau dans l'huile chaude : l'huile peut bouillonner et déborder (London Fire Brigade, pompiers de Cambridgeshire).",
  "Jeter de l'eau sur un feu d'huile, ou déplacer la casserole en flammes (London Fire Brigade, gouvernement du Québec, pompiers de Cambridgeshire).",
  "Se pencher au-dessus d'une casserole en feu pour atteindre les boutons (pompiers de Cambridgeshire).",
  "Mettre trop de sfenj à la fois dans l'huile (Jewish Food Society).",
  "Faire un trou trop petit : le sfenj devient une boule (Jewish Food Society).",
  "Faire une pâte trop ferme : elle doit être très collante (My Moroccan Food).",
  "Écourter la levée : la pâte doit tripler de volume (My Moroccan Food ; Morocco World News, 2022).",
  "Sortir les sfenj de l'huile avec les doigts (Morocco World News, 2022)."
 ],
 "serving": "Tout chauds, dès la sortie de l'huile (Morocco World News, 2013 ; Jewish Food Society), au petit-déjeuner ou au goûter de fin d'après-midi (Morocco World News, 2013 ; Wikipédia), avec un thé à la menthe (Morocco World News ; Hespress ; Wikipédia), ou avec un café ou une boisson au lait (Morocco World News, 2022). Nature, saupoudrés de sucre ou de sucre glace, ou trempés dans le miel (Wikipédia ; Morocco World News ; My Moroccan Food). Au Maroc, on les achète souvent tôt le matin chez le sfenji, dans les médinas (Morocco World News, 2013 ; Hespress). S'ils ont refroidi, réchauffe-les avant de servir (My Moroccan Food).",
 "variants": [
  "Sfenj matifiyya : aplati puis frit une seconde fois, parfois avec un œuf (Wikipédia). À Chefchaouen, la « sfenja matfiya » est un œuf beldi entre deux morceaux de sfenj croustillants (Hespress). La mère de Nargisse Benkabbou aime son sfenj avec un œuf au plat (My Moroccan Food).",
  "Au sirop : un sirop de sucre et d'eau, cuit jusqu'à ce qu'une goutte posée sur une assiette garde sa forme (stade « perle »), puis un peu de miel hors du feu ; on y trempe les sfenj égouttés (Bladi.net).",
  "Salés, ou nature (Bladi.net).",
  "À la cuillère : prends la pâte avec une cuillère et pousse-la dans l'huile avec une autre cuillère (Bladi.net, qui précise qu'on la façonne normalement avec les doigts).",
  "Pâte encore plus liquide, presque une pâte à frire : Bladi.net la travaille au pétrin électrique ; Morocco World News (2022) la mélange simplement à la cuillère en bois.",
  "Chez les juifs marocains, le sfenj est un classique de Hanoukka (Wikipédia ; The Nosher) : avec un zeste d'orange dans la pâte, arrosé de miel et de pistaches moulues (Jewish Food Society), ou avec du sucre dans la pâte et servi au sucre, au sucre à la cannelle ou au miel (Jewish Food Society, famille Stulman, de Rabat).",
  "Version « prestige », enrichie d'œufs, de lait tiède, de beurre fondu et d'eau de fleur d'oranger (Lalla Moulati).",
  "Ailleurs au Maghreb : khfaf ou ftayr en Algérie, sfinz en Libye (Wikipédia).",
  "Autrefois à Marrakech, à l'époque des grands-parents du chef Mustafa an-Nakir, on mangeait souvent au petit-déjeuner de la viande de tête avec du sfenj (Wikipédia)."
 ],
 "sources": [
  {
   "name": "My Moroccan Food, Nargisse Benkabbou (élevée à Bruxelles dans une famille marocaine, ancienne cheffe exécutive de L'Mida Marrakech, autrice de « Casablanca: My Moroccan Food »), « Sfenj - Moroccan Donuts », 3 juin 2016",
   "url": "https://www.mymoroccanfood.com/home/sfenj-moroccan-donuts",
   "used_for": "Source marocaine, recette de base : 14 sfenj ; 1 c. à s. de levure sèche, 500 g de farine, 1 c. à c. de sel, 400 ml d'eau tiède ; pâte très collante, presque une pâte à crêpes épaisse ; pétrissage de 10 min jusqu'à très élastique ; levée de 4 heures au chaud, jusqu'à tripler ; 6 cm d'huile chauffée à feu moyen-vif jusqu'à 180 °C ; morceau de la taille d'une prune, trou au centre, large anneau ; friture en retournant, jusqu'à croustillant et doré ; écumoire et grille garnie de papier absorbant ; sfenj non sucré, avec sucre, miel ou un œuf au plat ; à réchauffer s'il a refroidi"
  },
  {
   "name": "Morocco World News, Layla Dahamou (Taroudant), « Moroccan Cuisine: a recipe for Sefenj (Doughnuts) », 18 janvier 2013",
   "url": "https://www.moroccoworldnews.com/2013/01/146670/moroccan-cuisine-a-recipe-for-sefenj-doughnuts/",
   "used_for": "Source marocaine : pâte molle, élastique et collante (500 g de farine blanche, 15 g de levure, ½ c. à c. de sel, eau tiède) ; levée de 2 heures ou plus selon la température ; grande casserole profonde ; mains mouillées ou huilées ; trou au centre, anneau étiré ; doré clair ; égoutté sur papier ; sucre glace ; servi chaud avec le thé, au petit-déjeuner ou au goûter du soir ; échoppes de sfenj tôt le matin dans les médinas"
  },
  {
   "name": "Morocco World News, Safaa Kasraoui (Rabat), « Sfenj Donuts, an Unmissable Snack While Visiting Morocco », 26 août 2022",
   "url": "https://www.moroccoworldnews.com/2022/08/350985/sfenj-donuts-an-unmissable-snack-while-visiting-morocco",
   "used_for": "Source marocaine : levure laissée au moins 10 min dans l'eau tiède ; pâte lisse et collante mélangée à la cuillère en bois ; levée de 4 à 5 heures, jusqu'à tripler ; anneau façonné à la main ; sortir avec une fourchette, pas avec la main ; texture plus croustillante qu'un donut américain ; avec thé à la menthe, café ou boisson au lait, et une pincée de sucre"
  },
  {
   "name": "Bladi.net (« Les Marocains du monde »), « Sfenj ou beignets à l'huile », rubrique Pâtisseries marocaines, Said A., 30 octobre 2005, mise à jour le 8 mars 2021",
   "url": "https://www.bladi.net/recettes/sfenj-ou-beignets-a-l-huile.html",
   "used_for": "Source marocaine : 250 g de farine, levure, 1 c. à c. de sel, environ ¼ l d'eau ; pâte semi-liquide et visqueuse, au pétrin électrique ; morceau de la taille d'un œuf étiré en anneau avec les doigts des deux mains, ou pâte poussée avec deux cuillères ; variante au sirop de sucre et de miel ; salés, sucrés ou nature. Son conseil d'une huile « fumante » n'est pas suivi (voir les erreurs)"
  },
  {
   "name": "Hespress, Abdeljaouad El Khnifi (Chefchaouen), « هكذا كانت عناقيد \"السْفنجْ\" تلاحق صباحات المدينة العتيقة لشفشاون », vendredi 31 mai 2019",
   "url": "https://www.hespress.com/499007-499007.html",
   "used_for": "Source marocaine : graphie السْفنجْ ; échoppes de sfenj de la médina de Chefchaouen ; pâte préparée la nuit (levure, sel, farine tamisée, bien pétris) et laissée lever couverte ; friture dès l'aube ; beignets enfilés sur des lanières de feuille de palmier ; « sfenja matfiya » à l'œuf beldi ; huile d'olive, puis « huile roumi » à partir du milieu des années 1950 ; avec le thé à la menthe"
  },
  {
   "name": "Lalla Moulati (site marocain de cuisine et de mode pour les femmes), « سفنج مغربي مفشفش… », 22 mai 2020",
   "url": "https://www.lalamoulati.net/237462.html",
   "used_for": "Source marocaine : nom سفنج ; ingrédients d'un sfenj marocain (6 verres et demi de farine blanche, 3 verres d'eau tiède, 1 c. à s. de levure, 1 c. à c. de sucre, 1 c. à c. de sel, huile végétale de friture) ; méthode en vidéo, non regardée"
  },
  {
   "name": "Lalla Moulati, « السفنج برستيج بطريقة ممتازة وسهلة », 11 janvier 2021",
   "url": "https://www.lalamoulati.net/263743.html",
   "used_for": "Variante moderne « prestige » (œufs, lait tiède, beurre fondu, eau de fleur d'oranger)"
  },
  {
   "name": "Wikipédia (anglais), « Sfenj », consultée le 8 novembre 2026",
   "url": "https://en.wikipedia.org/wiki/Sfenj",
   "used_for": "Nom arabe سفنج (« éponge ») ; beignet du Maghreb, léger et spongieux ; nature, au sucre ou au miel ; tôt le matin ou en fin d'après-midi avec le thé à la menthe ou le café ; noms khfaf, ftayr, sfinz ; sfenj matifiyya, avec ou sans œuf ; photo des sfenj enfilés sur une feuille de palmier à Essaouira ; viande de tête et sfenj à Marrakech ; Hanoukka"
  },
  {
   "name": "Jewish Food Society, « Sfenj (Moroccan Yeasted Doughnut) », 15 janvier 2021, mise à jour le 8 juin 2023 (auteur non nommé sur la page)",
   "url": "https://www.jewishfoodsociety.org/recipes/sfenj-moroccan-yeasted-doughnut",
   "used_for": "Huile à 350 °F ; morceau de la taille d'un petit œuf, trou fait au pouce, anneau d'environ 10 cm ; à poser dans l'huile en l'éloignant de soi ; 3 à la fois ; 2 min puis 1 min 30 de l'autre côté ; pétrissage de 15 min dans le saladier ; égoutter sur papier ; variante au zeste d'orange, au miel et aux pistaches"
  },
  {
   "name": "Jewish Food Society, « Moroccan Sfenj », recette de Ruth et Gabriel Stulman (famille originaire de Rabat), 11 avril 2019, mise à jour le 21 août 2024",
   "url": "https://www.jewishfoodsociety.org/recipes/moroccan-sfenj",
   "used_for": "Pâte très lâche et collante ; huile à 350 °F au thermomètre, dans une casserole à bords hauts ; morceau de la taille d'un œuf ; grand trou, qui rétrécit à la friture ; 4 ou 5 à la fois, sans surcharger ; 1 à 2 min par face, retournés à l'écumoire ; servis chauds avec un thé à la menthe, au sucre, au sucre à la cannelle ou au miel"
  },
  {
   "name": "The Nosher (My Jewish Learning), Dikla Frances (blog One Sarcastic Baker), « Moroccan Sfenj Donuts Recipe », 24 décembre 2019",
   "url": "https://www.myjewishlearning.com/the-nosher/moroccan-sfenj-donuts-recipe/",
   "used_for": "Comparaison seulement : 500 g de farine, 2 c. à c. de levure, 1 c. à c. de sel, 360 ml d'eau et 2 jaunes d'œufs ; levée de 1 à 2 heures ; 15 pâtons ; environ 3 min par face ; sfenj très apprécié des juifs marocains, à Hanoukka. Sa température (340 à 400 °F) et son remplissage d'huile (du tiers à la moitié) ne sont pas retenus"
  },
  {
   "name": "London Fire Brigade (pompiers de Londres), « Deep fat fryers »",
   "url": "https://www.london-fire.gov.uk/safety/the-home/cooking/deep-fat-fryers/",
   "used_for": "Huile au tiers de la casserole au plus ; aliments secs, car l'eau et l'huile chaude font un mélange dangereux ; huile qui fume = trop chaude, couper le feu et laisser refroidir ; friteuse électrique avec contrôle automatique de la température, bien plus sûre (lu le 8 novembre 2026)"
  },
  {
   "name": "London Fire Brigade, « Pan fires »",
   "url": "https://www.london-fire.gov.uk/safety/the-home/cooking/pan-fires/",
   "used_for": "Feu de casserole : ne pas l'attaquer soi-même ni déplacer la casserole ; jamais d'eau ; couper le feu seulement sans danger ; sortir, fermer la porte, prévenir et appeler les pompiers"
  },
  {
   "name": "Gouvernement du Québec, « Prévenir les risques d'incendie lorsque vous cuisinez », mis à jour le 10 octobre 2025",
   "url": "https://www.quebec.ca/securite-situations-urgence/securite-incendie/prevenir-incendie/cuisine",
   "used_for": "Surveiller en tout temps, surtout avec l'huile ; poignées tournées vers l'intérieur ; couvercle à portée de main ; ne jamais frire dans une casserole, préférer une friteuse avec thermostat ; points de fumée (tournesol 210 °C) ; ne jamais laisser chauffer une huile qui fume ; feu : jamais d'eau, ne pas déplacer le récipient, poser un couvercle, couper les éléments, appeler les pompiers"
  },
  {
   "name": "USFA (U.S. Fire Administration, FEMA), « Cooking Fire Safety », page revue le 28 septembre 2026",
   "url": "https://www.usfa.fema.gov/prevention/home-fires/prevent-fires/cooking/",
   "used_for": "Rester près de la poêle et couper le feu si on quitte la cuisine ; fumée ou huile qui bout = couper le feu ; poignées vers l'arrière ; couvercle ou plaque à portée de main pour étouffer un feu"
  },
  {
   "name": "Cambridgeshire Fire & Rescue Service (pompiers, Royaume-Uni), « Chip pan »",
   "url": "https://www.cambsfire.gov.uk/home-safety/specific-safety-advice/chip-pan",
   "used_for": "Huile qui fume = trop chaude ; jamais plus d'un tiers d'huile ; ne jamais quitter la casserole des yeux, même quelques secondes ; aliments mouillés = l'huile bouillonne et déborde ; feu : jamais d'eau, ne pas déplacer la casserole, couper le feu si c'est sans danger sans se pencher au-dessus, sortir et appeler les pompiers"
  },
  {
   "name": "Choumicha (site officiel), page « Les recettes avec pour mot clé Sfenj » (copie web.archive.org du 1er décembre 2020) et fiche « Beignets » (copie du 27 janvier 2021)",
   "url": "https://web.archive.org/web/20210127122322/https://choumicha.ma/recette/863-beignets.html",
   "used_for": "Contre-vérification : Source marocaine que l'auteur n'avait pas pu lire, mais qui ne confirme pas la recette : sous le mot clé « Sfenj », Choumicha ne range que des « Beignets » classés « Cuisine du monde » (farine, lait, beurre, œuf, sucre, sucre vanillé, levure chimique et levure boulangère, pâte étalée, découpée à l'emporte-pièce, fourrée de confiture). Ce n'est pas le sfenj traditionnel : à ne pas citer comme recette de sfenj. Elle confirme seulement des gestes communs : pétrissage de 10 min, levée au tiède jusqu'à doubler, friture des deux côtés dans l'huile chaude, égouttage sur papier absorbant."
  },
  {
   "name": "My Moroccan Food, page « About »",
   "url": "https://www.mymoroccanfood.com/about",
   "used_for": "Contre-vérification : Biographie citée dans sources[0] : Nargisse Benkabbou a été élevée à Bruxelles dans une famille marocaine, a été cheffe exécutive de L'Mida Marrakech et a écrit « Casablanca: My Moroccan Food »."
  }
 ],
 "discrepancies": [
  "Eau, en pourcentage du poids de farine : 72 % (The Nosher, avec en plus 2 jaunes d'œufs), environ 75 % (Jewish Food Society 2021, en tasses), 80 % (My Moroccan Food), environ 100 % (Bladi.net), environ 125 % (Morocco World News 2022, en tasses), environ 133 % (Jewish Food Society, famille Stulman, en tasses) ; Morocco World News 2013 ne chiffre pas l'eau. Médiane : 90 %, mais 80 % si l'on garde seulement les recettes en grammes (calcul python). Retenu : 400 ml pour 500 g (My Moroccan Food), avec quelques cuillères de plus si la pâte ne colle pas.",
  "Levure, ramenée à 500 g de farine : 2 c. à c. (The Nosher), 3 (My Moroccan Food), 4 (Morocco World News 2022), environ 4,6 (Jewish Food Society 2021), 8 (famille Stulman) ; Morocco World News 2013 met 15 g sans préciser le type ; Lalla Moulati, 1 c. à s. pour 6 verres et demi de farine. Médiane : 4. Retenu : 1 c. à s. (3 c. à c.) de My Moroccan Food, car elle va avec sa levée de 4 heures ; Morocco World News 2022 fait lever 4 à 5 heures avec un peu plus de levure.",
  "Sel, ramené à 500 g de farine : 0,33 c. à c. (famille Stulman), 0,5 (Morocco World News 2013), environ 0,76 (Jewish Food Society 2021), 1 (My Moroccan Food, The Nosher), 2 (Bladi.net). Médiane : 0,88. Retenu : 1 c. à c.",
  "Sucre dans la pâte : aucun chez Morocco World News 2013 et Bladi.net ; Morocco World News 2022 ne le prévoit que « pour les gourmands » ; ¼ c. à c. pour activer la levure (My Moroccan Food), 1 c. à c. (Lalla Moulati), 1 c. à s. (The Nosher), 3 c. à s. (Jewish Food Society 2021), ½ tasse (famille Stulman). Retenu : sans sucre, comme la plupart des sources marocaines ; My Moroccan Food décrit le sfenj comme non sucré.",
  "Pétrissage : 10 min (My Moroccan Food), 15 min (Jewish Food Society 2021), au pétrin électrique (Bladi.net), simple mélange à la cuillère (Morocco World News 2022, famille Stulman). Retenu : au moins 10 minutes, à la main ou au robot.",
  "Levée : 30 à 60 min (famille Stulman), environ 1 heure (Jewish Food Society 2021), 1 à 2 heures plus 30 à 60 min pour les pâtons (The Nosher), 2 heures ou plus (Morocco World News 2013), 4 heures (My Moroccan Food), 4 à 5 heures (Morocco World News 2022), une nuit chez un sfenji de Chefchaouen, Mohamed El Hadri (Hespress) ; pas de durée chez Bladi.net. Retenu : 4 heures, jusqu'à ce que la pâte triple, comme My Moroccan Food et Morocco World News 2022 ; c'est aussi la médiane des sources marocaines.",
  "Température de l'huile : 180 °C (My Moroccan Food), 350 °F (Jewish Food Society, deux recettes), 340 à 400 °F (The Nosher), « fumante » (Bladi.net), « très chaude » (Morocco World News 2022). Calcul : 350 °F = 176,7 °C ; 340 à 400 °F = 171 à 204 °C. Retenu : 180 °C. Le conseil de Bladi.net est écarté : selon les pompiers et le gouvernement du Québec, une huile qui fume est trop chaude.",
  "Quantité d'huile : 6 cm de profondeur (My Moroccan Food) ; casserole remplie du tiers à la moitié (The Nosher) ; jamais plus d'un tiers (London Fire Brigade, pompiers de Cambridgeshire). Retenu : 6 cm, sans dépasser le tiers, donc une casserole d'au moins 18 cm de haut (calcul : 6 × 3).",
  "Friture : 2 min puis 1 min 30 (Jewish Food Society 2021), 1 à 2 min par face (famille Stulman), environ 3 min par face (The Nosher) ; My Moroccan Food et Morocco World News disent seulement « jusqu'à ce qu'il soit doré ». Retenu : 1 à 2 minutes par face, sans minuteur : le bon repère est la couleur.",
  "Mains : trempées dans l'eau chez My Moroccan Food, Morocco World News 2022 et les deux recettes de la Jewish Food Society ; dans l'eau ou huilées chez Morocco World News 2013. Retenu : mains huilées, par prudence, car l'eau qui tombe dans l'huile chaude la fait bouillonner (London Fire Brigade, pompiers de Cambridgeshire).",
  "Taille et nombre : morceau de la taille d'un œuf (Bladi.net, Jewish Food Society) ou d'une prune (My Moroccan Food) ; 14 sfenj (My Moroccan Food) ou 15 (The Nosher) pour 500 g de farine. Retenu : 14, soit environ 65 g de pâte chacun (calcul).",
  "Nombre par fournée : 3 (Jewish Food Society 2021), 4 ou 5 (famille Stulman). Retenu : 3 ou 4.",
  "Ingrédients écartés de la recette de base : jaunes d'œufs (The Nosher), zeste d'orange (Jewish Food Society 2021), œufs, lait, beurre et fleur d'oranger (Lalla Moulati, version « prestige »). Les sources marocaines classiques s'en tiennent à la farine, la levure, le sel et l'eau.",
  "Conversions : les tasses sont converties avec les équivalences de Taste of Maroc (1 tasse de farine blanche = 125 g ; 1 tasse d'eau = 250 ml), donc de façon approchée ; °F en °C par calcul python.",
  "Durées affichées : préparation de 25 min (10 min de levure, le mélange, 10 min de pétrissage) ; cuisson de 30 min (estimation : 4 ou 5 fournées d'environ 6 minutes, façonnage compris) ; repos de 240 min pour la levée.",
  "Contre-vérifiée le 8 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 8 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Choumicha : sa recette n'a pas pu être lue. Le 8 novembre 2026, web.archive.org a bloqué mes requêtes (erreur 429, « trafic de robot suspect ») et la recherche dans son index a échoué (erreur 502). Je n'ai pas contourné ce blocage.",
  "Taste of Maroc : aucune page sur le sfenj n'a été trouvée sur ce site. La recette de Christine Benlafquih publiée sur The Spruce Eats n'a pas été lue, car le robots.txt de ce site interdit l'accès aux robots de Claude.",
  "SNRT News et Yabiladi : leur robots.txt interdit l'accès à ClaudeBot ; non lus. Le360 et Femmes du Maroc : aucune recette de sfenj trouvée.",
  "Morocco World News 2013 : « 15 g baking yeast » sans préciser s'il s'agit de levure sèche ou fraîche ; l'eau n'est pas chiffrée.",
  "Lalla Moulati : méthodes en vidéo, non regardées ; quantités en « verres », dont le volume n'est pas précisé.",
  "Mains huilées plutôt que mouillées : choix de prudence, proposé par une seule recette (Morocco World News 2013) ; non testé avec cette pâte.",
  "Rendement (14 sfenj) et durées de préparation et de cuisson : non testés sur cette recette.",
  "Origine andalouse du sfenj : seulement Wikipédia, dans une section que Wikipédia signale elle-même comme peu sourcée ; non reprise.",
  "Jewish Food Society 2021 : l'auteur de la recette n'est pas nommé sur la page. The Nosher : origine de l'autrice non précisée ; sa recette, avec des jaunes d'œufs, ne sert qu'à comparer.",
  "Numéro des pompiers au Maroc : non vérifié sur une source officielle, donc non donné.",
  "Levure sèche active ou instantanée : les sources ne font pas la différence ; l'équivalence avec la levure fraîche n'a pas été vérifiée."
 ],
 "cuisine": "Marocaine",
 "rayon": "Douceurs",
 "pairs": [
  "the-menthe"
 ],
 "img_alt": "Sfenj en anneau, dorés et brillants, sur une assiette, à Marrakech",
 "img": "img/sfenj.jpg",
 "photo": {
  "author": "Jc wik m001",
  "license": "CC BY-SA 4.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Sfenj_in_Marrakesh_Morocco.jpg",
  "modified": "réduite"
 }
});
