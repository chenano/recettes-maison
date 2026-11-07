/* Recette : Lentilles à la marocaine, à l'agneau et aux légumes. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "lentilles",
 "title": "Lentilles à la marocaine, à l'agneau et aux légumes",
 "darija": "Adess bel lham (l'3des)",
 "arabic": "العدس باللحم",
 "tagline": "Les lentilles, plat d'hiver des familles marocaines, ici mijotées avec de l'agneau, des carottes et des pommes de terre, dans une sauce tomate au cumin et au paprika, à saucer avec du pain.",
 "category": "Plat",
 "occasion": "Plat familial du quotidien, surtout en hiver ; servi en plat principal, avec du pain (Morocco World News 2019 et 2020 ; blog Mamatkamal)",
 "region": "Tout le Maroc (Morocco World News 2019 : plat apprécié dans tout le pays en hiver)",
 "servings": 4,
 "servings_label": "personnes",
 "time": {
  "prep": 20,
  "cook": 110,
  "rest": 0
 },
 "difficulty": "Facile",
 "equipment": [
  "Grande cocotte ou marmite à fond épais, avec couvercle",
  "Passoire",
  "Râpe",
  "Une planche réservée à la viande crue, une autre pour les légumes et les herbes",
  "Couteau et éplucheur",
  "Bol d'eau froide, pour les pommes de terre",
  "Cuillère en bois"
 ],
 "ingredients": [
  {
   "group": "Viande",
   "items": [
    {
     "id": "agneau",
     "q": 300,
     "u": "g",
     "name": "d'agneau désossé (épaule ou collier)",
     "note": "halal ; en morceaux d'environ 3 cm, sans l'excès de gras",
     "canon": "agneau"
    },
    {
     "id": "huile",
     "q": 4,
     "u": "c. à s.",
     "name": "d'huile d'olive",
     "canon": "huile-olive"
    }
   ]
  },
  {
   "group": "Sauce",
   "items": [
    {
     "id": "oignon",
     "q": 1,
     "u": "",
     "name": "gros oignon",
     "pl": "gros oignons",
     "note": "à râper",
     "canon": "oignon"
    },
    {
     "id": "ail",
     "q": 3,
     "u": "",
     "name": "gousse d'ail",
     "pl": "gousses d'ail",
     "note": "à hacher finement",
     "canon": "ail"
    },
    {
     "id": "tomates",
     "q": 2,
     "u": "",
     "name": "tomate moyenne bien mûre",
     "pl": "tomates moyennes bien mûres",
     "note": "chair râpée, sans la peau",
     "canon": "tomate"
    },
    {
     "id": "concentre",
     "q": 1,
     "u": "c. à c.",
     "name": "de concentré de tomate",
     "canon": "concentre-tomate"
    },
    {
     "id": "paprika",
     "q": 1,
     "u": "c. à c.",
     "name": "de paprika doux",
     "canon": "paprika"
    },
    {
     "id": "cumin",
     "q": 1,
     "u": "c. à c.",
     "name": "de cumin moulu",
     "canon": "cumin"
    },
    {
     "id": "poivre",
     "q": 0.25,
     "u": "c. à c.",
     "name": "de poivre noir moulu",
     "canon": "poivre"
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
     "id": "cayenne",
     "q": null,
     "u": "",
     "name": "une pincée de piment de Cayenne",
     "note": "facultatif",
     "canon": "piment-cayenne"
    },
    {
     "id": "persil",
     "q": 1,
     "u": "c. à s.",
     "name": "de persil plat haché",
     "canon": "persil"
    },
    {
     "id": "coriandre",
     "q": 1,
     "u": "c. à s.",
     "name": "de coriandre fraîche hachée",
     "canon": "coriandre"
    },
    {
     "id": "eau",
     "q": 1,
     "u": "l",
     "name": "d'eau",
     "canon": "eau"
    },
    {
     "id": "eau-bouillante",
     "q": null,
     "u": "",
     "name": "un peu d'eau bouillante",
     "note": "seulement si la sauce réduit trop",
     "canon": "eau"
    }
   ]
  },
  {
   "group": "Lentilles et légumes",
   "items": [
    {
     "id": "lentilles",
     "q": 250,
     "u": "g",
     "name": "de lentilles vertes ou brunes",
     "note": "sèches ; pas de lentilles corail",
     "canon": "lentilles"
    },
    {
     "id": "carottes",
     "q": 2,
     "u": "",
     "name": "carotte moyenne",
     "pl": "carottes moyennes",
     "canon": "carotte"
    },
    {
     "id": "pommes-de-terre",
     "q": 2,
     "u": "",
     "name": "petite pomme de terre",
     "pl": "petites pommes de terre",
     "canon": "pomme-de-terre"
    }
   ]
  },
  {
   "group": "Pour servir",
   "items": [
    {
     "id": "citron",
     "q": 1,
     "u": "",
     "name": "citron",
     "pl": "citrons",
     "note": "facultatif",
     "canon": "citron"
    },
    {
     "id": "khobz",
     "q": null,
     "u": "",
     "name": "khobz (pain marocain)",
     "note": "pour saucer",
     "canon": "khobz"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Trie et lave les lentilles",
   "text": "Trie {{lentilles}} de lentilles pour retirer les petits cailloux. Lave-les dans une passoire et laisse-les égoutter.",
   "timer": null,
   "tip": "Pas besoin de trempage : les recettes avec viande de Choumicha et de My Moroccan Food mettent les lentilles sèches. Si tu les as fait tremper, elles cuiront plus vite : surveille-les. Sans trempage, les lentilles brunes du Maroc peuvent demander bien plus de 40 minutes (1 h 30 à 2 h à la marmite selon le blog Mamatkamal) : goûte-les avant d'ajouter les pommes de terre."
  },
  {
   "phase": "Préparation",
   "title": "Coupe l'agneau",
   "text": "Sur une planche réservée à la viande crue, retire l'excès de gras de {{agneau}} d'agneau et coupe-le en morceaux d'environ 3 cm.",
   "timer": null,
   "tip": "Garde une autre planche pour les légumes et les herbes (Anses)."
  },
  {
   "phase": "Préparation",
   "title": "Prépare oignon, tomates et ail",
   "text": "Râpe l'oignon ({{oignon:full}}). Coupe les tomates en deux ({{tomates:full}}), râpe la chair et jette la peau. Hache finement l'ail ({{ail:full}}).",
   "timer": null,
   "img": {
    "src": "img/etapes/tomate-rapee.jpg",
    "alt": "Tomate râpée sur une râpe",
    "caption": "Râper la tomate",
    "w": 1000,
    "h": 667,
    "credit": "Photo de l'étape « Prépare oignon, tomates et ail » : Another Pint Please..., Flickr, licence CC BY-NC-SA 2.0 (réduite)."
   }
  },
  {
   "phase": "Préparation",
   "title": "Hache les herbes",
   "text": "Lave le persil et la coriandre, sèche-les et hache-les finement : il te faut {{persil}} de persil et {{coriandre}} de coriandre.",
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
   "phase": "Préparation",
   "title": "Épluche les légumes",
   "text": "Épluche les carottes ({{carottes:full}}) et coupe-les en morceaux réguliers. Épluche les pommes de terre ({{pommes-de-terre:full}}), coupe-les en gros morceaux et garde-les dans un bol d'eau froide jusqu'au moment de les cuire.",
   "timer": null,
   "tip": "Ne coupe pas les pommes de terre trop petites : elles se déferaient dans la sauce (Cooking With Alia)."
  },
  {
   "phase": "Cuisson",
   "title": "Fais dorer l'agneau",
   "text": "Dans la cocotte, chauffe {{huile}} d'huile d'olive à feu moyen. Fais dorer les morceaux d'agneau 5 à 10 minutes, en les retournant pour qu'ils se colorent de tous les côtés.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Ajoute aromates et épices",
   "text": "Ajoute l'oignon râpé, l'ail, les tomates râpées et les herbes. Ajoute {{concentre}} de concentré de tomate, {{paprika}} de paprika, {{cumin}} de cumin, {{poivre}} de poivre, {{sel}} de sel et, si tu aimes, {{cayenne}}. Mélange et laisse revenir 5 minutes en remuant.",
   "timer": {
    "min": 5,
    "label": "Aromates et épices",
    "done": "Verse l'eau et porte à ébullition."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Fais mijoter la viande",
   "text": "Verse {{eau}} d'eau et porte à ébullition. Couvre, baisse le feu et laisse mijoter 45 minutes, jusqu'à ce que la viande commence à s'attendrir sans être encore fondante.",
   "timer": {
    "min": 45,
    "label": "Agneau à mi-cuisson",
    "done": "La viande commence à s'attendrir ? Ajoute les lentilles. Encore ferme : laisse-la jusqu'à 15 minutes de plus."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Ajoute lentilles et carottes",
   "text": "Ajoute les lentilles égouttées et les carottes, puis mélange. Le liquide doit couvrir les lentilles : sinon, ajoute {{eau-bouillante}}. Couvre et laisse mijoter 20 minutes à feu doux, en remuant de temps en temps, puis goûte les lentilles : elles doivent commencer à s'attendrir avant que tu ajoutes les pommes de terre.",
   "timer": {
    "min": 20,
    "label": "Lentilles et carottes",
    "done": "Goûte quelques lentilles : elles doivent commencer à s'attendrir. Si elles sont encore dures (les lentilles brunes peuvent être bien plus longues à cuire), prolonge la cuisson à couvert en goûtant régulièrement, et n'ajoute les pommes de terre qu'à ce moment-là."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Ajoute les pommes de terre",
   "text": "Égoutte les pommes de terre et enfonce-les dans la sauce. Couvre et laisse cuire 20 minutes, jusqu'à ce que les pommes de terre, les lentilles et la viande soient tendres. Remue doucement de temps en temps et ajoute un peu d'eau bouillante si la sauce attache.",
   "timer": {
    "min": 20,
    "label": "Pommes de terre",
    "done": "Pique une pomme de terre : elle doit être tendre. Sinon, prolonge de 5 minutes."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Ajuste sauce et assaisonnement",
   "text": "La sauce doit être onctueuse, ni sèche ni trop liquide. Si elle est trop liquide, laisse-la réduire quelques minutes sans couvercle. Goûte et rectifie le sel, le poivre et le cumin.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Sers bien chaud",
   "text": "Sers bien chaud, avec du {{khobz}} pour saucer et des quartiers de citron ({{citron:full}}) à presser dans l'assiette. Ceux qui aiment le piquant ajoutent un peu de harissa.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Range les restes",
   "text": "Ne laisse pas le plat plus de 2 heures à température ambiante : mets les restes au réfrigérateur dans une boîte fermée et mange-les dans les 3 jours. S'il y en a plus d'un litre, répartis-les en petites portions pour qu'ils refroidissent vite. Réchauffe à couvert jusqu'à ce que la vapeur s'échappe, avec un peu d'eau chaude si c'est trop épais.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Fais d'abord cuire l'agneau seul dans la sauce : les lentilles cuisent bien plus vite que la viande. Ajoute-les quand les morceaux commencent à s'attendrir, sans être encore fondants.",
   "source": "My Moroccan Food (viande « à mi-cuisson », environ 1 heure, avant les lentilles) ; Bladi (viande 40 minutes avant les lentilles) ; Choumicha (viande séchée 30 à 40 minutes avant les lentilles et les carottes)"
  },
  {
   "text": "Les carottes cuisent avec les lentilles ; les pommes de terre n'arrivent que 20 minutes avant la fin, sinon elles se défont.",
   "source": "Choumicha (carottes avec les lentilles ; patate douce et courge ajoutées pour les 20 à 25 dernières minutes) ; My Moroccan Food et Cooking With Alia (pommes de terre cuites 15 à 20 minutes dans la sauce)"
  },
  {
   "text": "Coupe les pommes de terre en gros morceaux, jamais trop petits, et garde-les dans l'eau froide en attendant de les cuire.",
   "source": "Cooking With Alia (tajine de bœuf aux pommes de terre, n° 201) ; Bladi (légumes « en gros morceaux »)"
  },
  {
   "text": "Râpe l'oignon et les tomates. Pour la tomate, râpe la chair et jette la peau.",
   "source": "Morocco World News 2019 (oignon et tomates râpés) ; Cooking With Alia n° 462 (chair râpée, peau jetée) ; My Moroccan Food (tomates râpées) ; blog Mamatkamal"
  },
  {
   "text": "Trie toujours les lentilles avant de les laver : il reste parfois de petits cailloux.",
   "source": "Bladi ; blog Mamatkamal"
  },
  {
   "text": "Prends des lentilles vertes ou brunes. Les lentilles corail tournent en bouillie dans ce plat.",
   "source": "MarocMama (la recette « ne marche pas » avec des lentilles corail) ; lentilles vertes chez My Moroccan Food, brunes chez Cooking With Alia et Morocco World News"
  },
  {
   "text": "Il doit toujours rester de la sauce. Si elle réduit trop avant la fin, ajoute un peu d'eau bouillante, pas de l'eau froide.",
   "source": "Cooking With Alia n° 094 ; Choumicha (« un peu d'eau bouillante si nécessaire ») ; blog Mamatkamal (eau chaude)"
  },
  {
   "text": "À la fin, la sauce doit être onctueuse, pas aqueuse : au besoin, fais-la réduire quelques minutes à découvert.",
   "source": "Blog Mamatkamal (sauce « pas trop liquide ») ; Choumicha (laisser réduire la sauce pour un jus onctueux)"
  },
  {
   "text": "Goûte en fin de cuisson et rectifie le sel, le poivre et le cumin.",
   "source": "Cooking With Alia n° 094 et n° 462 ; My Moroccan Food (« sel, ou plus selon le goût »)"
  },
  {
   "text": "Sers avec du citron à presser dans l'assiette.",
   "source": "Bladi (jus de citron au service) ; blog Mamatkamal (citron en fin de cuisson) ; My Moroccan Food (quartiers de citron, version sans viande)"
  },
  {
   "text": "Le trempage n'est pas obligatoire : les versions avec viande mettent les lentilles sèches. Trempées (1 heure à une nuit), elles cuisent plus vite.",
   "source": "Choumicha et My Moroccan Food (sans trempage) ; Morocco World News 2019 et 2020, Cooking With Alia n° 094 et n° 462 (avec trempage)"
  },
  {
   "text": "Au Maroc, on mange l'adess avec du pain : on prend les lentilles avec un morceau de khobz, ou à la cuillère.",
   "source": "Morocco World News 2020 ; Morocco World News 2019 ; My Moroccan Food"
  },
  {
   "text": "Coupe la viande crue sur une planche à part, et ne la réutilise pas pour les herbes ou les légumes.",
   "source": "Anses (une planche pour la viande crue, une autre pour les produits cuits et les légumes propres)"
  }
 ],
 "mistakes": [
  "Mettre les lentilles avec l'agneau cru : la viande doit d'abord cuire seule jusqu'à commencer à s'attendrir, car elle cuit bien plus longtemps que les lentilles (My Moroccan Food : environ 1 heure, puis 40 minutes pour les lentilles ; Choumicha et Bladi cuisent aussi la viande d'abord).",
  "Ajouter les pommes de terre en même temps que les lentilles, ou les couper trop petites : elles se défont (Cooking With Alia ; Choumicha et My Moroccan Food ajoutent ces légumes en fin de cuisson).",
  "Prendre des lentilles corail (MarocMama).",
  "Laisser la sauce sécher et attacher au fond (Cooking With Alia ; Choumicha).",
  "Rallonger avec de l'eau froide : Choumicha ajoute de l'eau bouillante, le blog Mamatkamal de l'eau chaude.",
  "Servir une sauce trop liquide (blog Mamatkamal ; Choumicha la fait réduire).",
  "Couper l'agneau cru et les herbes sur la même planche (Anses).",
  "Laisser les restes plus de 2 heures à température ambiante, ou les garder plus de 3 jours au réfrigérateur (Anses)."
 ],
 "serving": "Bien chaud, en plat principal, avec du khobz pour saucer, ou à la cuillère (Morocco World News 2019 et 2020 ; My Moroccan Food ; Cooking With Alia). À côté : des quartiers de citron (Bladi ; blog Mamatkamal ; My Moroccan Food) et, pour ceux qui aiment, de la harissa ou du piment fort (My Moroccan Food ; blog Mamatkamal).",
 "variants": [
  "Au bœuf : même méthode avec des morceaux de bœuf halal (blog Mamatkamal : 200 g de bœuf pour 350 g de lentilles ; Bladi met 300 g de « viande rouge » pour 300 g de lentilles).",
  "Sans viande (Morocco World News 2019 : seuls certains y ajoutent de petits morceaux de viande) : oignon, tomate, ail, paprika, cumin, herbes et huile d'olive ; 35 à 40 minutes à la casserole (Cooking With Alia n° 094 et n° 462 ; My Moroccan Food), ou 25 à 35 minutes à l'autocuiseur (Choumicha ; Morocco World News 2019 et 2020).",
  "À la viande séchée (gueddid) et aux carottes : Choumicha dessale le gueddid 15 minutes dans l'eau, le cuit 30 à 40 minutes, puis ajoute lentilles et carottes. Avec du khlii (viande confite), elle l'ajoute seulement en fin de cuisson.",
  "Au gueddid, à la patate douce et à la courge : Choumicha ajoute ces légumes après 30 minutes de cuisson des lentilles, puis cuit encore 20 à 25 minutes.",
  "Au smen : Bladi parfume la viande au smen et à la cannelle, puis arrose le plat d'un mélange chaud de persil, de jus de citron et de smen.",
  "À la courge et aux échalotes : My Moroccan Food remplace l'oignon par des échalotes et ajoute de la courge en fin de cuisson.",
  "Avec un peu de riz en fin de cuisson, pour une version plus proche de la soupe (Bladi).",
  "Avec du vinaigre blanc au service (Choumicha), ou des sardines grillées à côté (Morocco World News 2020).",
  "Plus épicé : certaines familles ajoutent du gingembre (Morocco World News 2019 et 2020) ou du curcuma (Cooking With Alia n° 094 ; Morocco World News 2020)."
 ],
 "sources": [
  {
   "name": "My Moroccan Food (Nargisse Benkabbou), « Lentil Stew with Lamb, Pumpkin and Shallots », 10 octobre 2017",
   "url": "https://www.mymoroccanfood.com/home/lentil-stew-with-lamb-pumpkin-and-shallots",
   "used_for": "Version à l'agneau : 300 g d'agneau désossé (épaule, collier) en morceaux de 3 cm, dégraissé, pour 250 g de lentilles vertes (4 à 6 personnes) ; viande dorée 5 à 10 minutes dans 4 c. à s. d'huile d'olive, puis mijotée environ 1 heure jusqu'à « mi-cuisson » (elle commence à s'attendrir) ; lentilles ajoutées ensuite avec de l'eau à hauteur, environ 40 minutes ; courge en fin de cuisson ; tomates râpées, paprika, cumin, sel, pincée de Cayenne facultative ; ajouter de l'eau si tout s'évapore ; service avec pain, coriandre et harissa."
  },
  {
   "name": "My Moroccan Food (Nargisse Benkabbou), « Vegan Lentil Stew » (fiche « Vegetarian Lentil Stew »), 5 novembre 2015",
   "url": "https://www.mymoroccanfood.com/home/vegetarian-lentil-stew",
   "used_for": "Version sans viande, plat d'enfance de l'autrice : lentilles vertes non trempées, 35 à 40 minutes à petit feu ; eau à ajouter si elle s'évapore ; coriandre et quartiers de citron au service."
  },
  {
   "name": "My Moroccan Food (Nargisse Benkabbou), « Lamb, Potatoes and Olives Tagine », 22 mars 2017",
   "url": "https://www.mymoroccanfood.com/home/lamb-potatoes-and-olives-tagine",
   "used_for": "Pommes de terre ajoutées quand la viande est presque cuite, enfoncées dans le liquide, environ 20 minutes à couvert."
  },
  {
   "name": "Choumicha Chafay, « Lentilles à la viande séchée et aux carottes », choumicha.ma (site hors ligne, copie archivée du 8 mai 2026)",
   "url": "https://web.archive.org/web/20260508112657/https://www.choumicha.ma/recette/1001-lentilles-a-la-viande-sechee-et-aux-carottes.html",
   "used_for": "6 personnes : 350 g de lentilles, 2 carottes grattées « en morceaux réguliers », 3 gousses d'ail, 1 tomate, 1 c. à thé de concentré, 1 c. à thé de cumin et de piment doux, huile d'olive et de tournesol, persil et coriandre, 1,5 l d'eau ; viande cuite 30 à 40 minutes à couvert et à feu doux avant d'ajouter lentilles et carottes ; eau bouillante si nécessaire ; pas de trempage ; khlii ajouté en fin de cuisson."
  },
  {
   "name": "Choumicha Chafay, « Lentilles à la viande séchée, patate douce et citrouille », choumicha.ma (copie archivée du 20 mai 2026)",
   "url": "https://web.archive.org/web/20260520222051/https://www.choumicha.ma/recette/1039-lentilles-a-la-viande-sechee-patate-douce-et-citrouille.html",
   "used_for": "Légumes (patate douce, courge) ajoutés après 30 minutes de cuisson des lentilles, puis 20 à 25 minutes ; 350 g de lentilles pour 6 personnes ; 4 c. à s. d'huile d'olive ; cumin et paprika."
  },
  {
   "name": "Choumicha Chafay, « Lentilles et aiguillettes de poulet », choumicha.ma (copie archivée du 21 janvier 2013)",
   "url": "https://web.archive.org/web/20130121133753/http://www.choumicha.ma/recettes/details/342/lentilles-et-aiguillettes-de-poulet.html",
   "used_for": "Lentilles pour 4 personnes : 350 g, 1 l d'eau, 3 gousses d'ail, cumin, piment doux, sel ; 25 à 30 minutes à l'autocuiseur ; sauce réduite jusqu'à un jus « onctueux » ; lentilles servies avec du vinaigre blanc."
  },
  {
   "name": "Cooking With Alia, « 094 – Moroccan Lentils »",
   "url": "https://www.cookingwithalia.com/moroccan-lentils/",
   "used_for": "Version sans viande : lentilles trempées quelques heures ; oignon, tomate, concentré, ail et épices revenus 5 minutes ; 30 + 10 minutes de cuisson ; « il doit toujours rester de la sauce » ; goûter et rectifier sel, poivre et cumin ; 1 c. à s. de persil et 1 c. à s. de coriandre."
  },
  {
   "name": "Cooking With Alia, « 462 – Moroccan Lentils Soup / العدس على الطريقة المغربية »",
   "url": "https://www.cookingwithalia.com/462-moroccan-lentils-soup/",
   "used_for": "250 g de lentilles brunes pour 4, trempées une nuit ; tomate coupée, chair râpée et peau jetée ; 1 l d'eau bouillante ; 10 + 30 minutes ; servi chaud avec du pain."
  },
  {
   "name": "Cooking With Alia, « 201 – Moroccan Beef Tajine with Potatoes Recipe »",
   "url": "https://www.cookingwithalia.com/moroccan-beef-tajine-with-potatoes/",
   "used_for": "Viande en morceaux cuite 45 minutes à 1 heure ; pommes de terre en morceaux moyens (trop petits, ils tournent en purée), gardées dans l'eau froide, cuites 15 à 20 minutes dans la sauce."
  },
  {
   "name": "Morocco World News, Layla Dahamou, « How to Make Moroccan Lentils », 3 novembre 2019",
   "url": "https://www.moroccoworldnews.com/2019/11/285866/how-to-make-moroccan-lentils/",
   "used_for": "Plat apprécié dans tout le pays en hiver ; certains ajoutent de petits morceaux de viande ; 250 g de lentilles brunes trempées ; oignon et tomates râpés revenus 5 minutes ; 1 c. à c. de cumin, de paprika et de sel, ½ c. à c. de gingembre et de poivre ; ¼ de tasse d'huile d'olive ; 1 l d'eau, 35 minutes à l'autocuiseur ; servi chaud avec du pain."
  },
  {
   "name": "Morocco World News, Safaa Kasraoui, « Easy Recipe for Cooking Lentils the Moroccan Way », 11 octobre 2020",
   "url": "https://www.moroccoworldnews.com/2020/10/65516/easy-recipe-for-cooking-lentils-the-moroccan-way/",
   "used_for": "Plat principal de nombreuses familles marocaines ; trempage d'une nuit (astuce de sa mère) ; viande blanche ou rouge en option ; gingembre et curcuma ; 30 minutes à l'autocuiseur ; mangé avec du pain ou à la cuillère ; sardines grillées à côté."
  },
  {
   "name": "Bladi.net, recettes de cuisine marocaine, « Soupe au lentilles » (non datée)",
   "url": "https://www.bladi.net/recettes/soupe-au-lentilles.html",
   "used_for": "300 g de viande rouge en gros dés pour 300 g de lentilles ; viande revenue 10 minutes avec oignon râpé, smen, sel, poivre et cannelle, puis 30 minutes dans l'eau avant les lentilles ; lentilles triées (petits cailloux) et lavées ; finition persil, citron et smen ; jus de citron au service."
  },
  {
   "name": "Bladi.net, recettes de cuisine marocaine, « Soupe aux lentilles » (non datée)",
   "url": "https://www.bladi.net/recettes/soupe-aux-lentilles.html",
   "used_for": "Veau et os à moelle, lentilles, 1 pomme de terre et 1 carotte coupées en dés et ajoutées après les lentilles, cuites jusqu'à ce que les légumes soient tendres."
  },
  {
   "name": "Bladi.net, recettes de cuisine marocaine, « Tajine aux pommes de terre et carottes » (non datée)",
   "url": "https://www.bladi.net/recettes/tajine-aux-pommes-de-terre-et-carottes.html",
   "used_for": "Pommes de terre et carottes coupées « en gros morceaux », ajoutées après 30 minutes de cuisson de l'agneau en cocotte-minute, puis une quinzaine de minutes à couvert."
  },
  {
   "name": "Blog When Food Meets Culture (Mamatkamal), « العدس / Lentils with beef / Lentilles au boeuf! », janvier 2010",
   "url": "https://moroccancuisinemarocaine.blogspot.com/2010/01/moroccan-lentils-la3dass-with-beef.html",
   "used_for": "« La3dass », plat d'hiver marocain ; 200 g de bœuf pour 350 g de lentilles brunes ; trier et laver les lentilles ; viande dorée, oignon râpé, ail haché, tomates râpées ; eau chaude au besoin ; sauce épaisse « pas trop liquide » ; citron et piments forts en fin de cuisson ; servi avec du pain ; lentilles brunes du Maroc : 1 h 30 à 2 h à la marmite, 35 à 40 minutes à l'autocuiseur."
  },
  {
   "name": "MarocMama (Amanda Mouttaki), « Moroccan Lentil Instant Pot Recipe »",
   "url": "https://marocmama.com/moroccan-lentil-instant-pot-recipe/",
   "used_for": "La recette d'origine n'a pas de légumes (les carottes sont un ajout) ; lentilles brunes, la recette « ne marche pas » avec des lentilles corail ; trempage facultatif de 2 heures à une nuit."
  },
  {
   "name": "Anses, « Éviter les toxi-infections alimentaires en confinement : les bonnes pratiques », 8 avril 2020",
   "url": "https://www.anses.fr/fr/actualite/eviter-toxi-infections-alimentaires-confinement-bonnes-pratiques",
   "used_for": "Règles officielles : plat cuisiné maison au réfrigérateur dans les 2 heures, à consommer dans les 3 jours, en petites portions au-delà d'un litre ; restes en boîte fermée ; réchauffer à couvert jusqu'à ce que la vapeur s'échappe ; une planche pour la viande crue, une autre pour les légumes ; laver les légumes à l'eau potable."
  },
  {
   "name": "Choumicha Chafay, choumicha.ma, « Les recettes avec pour mot clé lentilles » (copie archivée du 14 octobre 2025), et page du mot-clé « Lentille » (copie du 18 janvier 2021)",
   "url": "https://web.archive.org/web/20251014072733/https://www.choumicha.ma/recipes/lentilles.html",
   "used_for": "Contre-vérification : Le site de Choumicha ne classe que cinq recettes sous « lentilles » : lentilles à la viande séchée et aux carottes, lentilles à la viande séchée, patate douce et citrouille, salade de lentilles et œufs pochés, soupe de lentilles au saucisson sec de bœuf, velouté de lentilles au khliâ ; la page « Lentille » n'en ajoute aucune. Relues : la soupe au saucisson et le velouté au khliâ n'ont ni agneau ni pommes de terre (les carottes du velouté sont dans des mini-briouates servies à part) ; la salade est aux œufs pochés. Aucune ne réunit agneau, pommes de terre et carottes : la recette de l'appli est bien une reconstitution, comme l'écrit l'auteur."
  }
 ],
 "discrepancies": [
  "Recette reconstituée : aucune source lue ne donne exactement « agneau + lentilles + pommes de terre + carottes ». La méthode assemble My Moroccan Food (agneau puis lentilles), Choumicha (carottes cuites avec les lentilles, patate douce ajoutée en fin de cuisson), Bladi (viande, lentilles, pomme de terre et carotte) et My Moroccan Food et Cooking With Alia (temps de cuisson des pommes de terre).",
  "Quantité d'agneau : 300 g chez My Moroccan Food (pour 250 g de lentilles) et 300 g de « viande rouge » chez Bladi (pour 300 g) ; 200 g de bœuf pour 350 g chez Mamatkamal. Ramené à 250 g de lentilles : de 143 à 300 g (médiane 250 g). Retenu : 300 g, la valeur écrite par deux sources ; tu peux descendre à 250 g.",
  "Cuisson de la viande avant les lentilles : 10 + 30 minutes chez Bladi, 5 à 10 minutes puis environ 1 heure chez My Moroccan Food, 30 à 40 minutes chez Choumicha (viande séchée), 45 minutes à 1 heure chez Cooking With Alia (tajine de bœuf). Retenu : dorer 5 à 10 minutes, 5 minutes avec les aromates, puis 45 minutes à couvert, avec le repère de My Moroccan Food (la viande commence à s'attendrir).",
  "Cuisson des lentilles : environ 40 minutes chez My Moroccan Food (lentilles vertes, sans trempage) et chez Cooking With Alia (lentilles trempées), 35 à 40 chez My Moroccan Food (sans viande), 30 puis 20 à 25 minutes chez Choumicha (sans trempage), 10 minutes de blanchiment puis 30 minutes chez Bladi ; le blog Mamatkamal compte 1 h 30 à 2 h pour les lentilles brunes du Maroc à la marmite, et Morocco World News 2020 rappelle que le temps dépend des lentilles. Retenu : environ 40 minutes, comme la version à l'agneau de My Moroccan Food (lentilles vertes), avec un contrôle des lentilles avant d'ajouter les pommes de terre.",
  "Moment des pommes de terre : 20 minutes chez My Moroccan Food, 15 à 20 chez Cooking With Alia, une quinzaine chez Bladi (en cocotte-minute), 20 à 25 pour la patate douce chez Choumicha. Retenu : 20 minutes (médiane arrondie). Elles entrent donc 20 minutes après les lentilles (40 − 20), ou plus tard si les lentilles sont encore dures : ce « 20 minutes » est un calcul, pas une valeur lue dans une source.",
  "Quantité de légumes : Choumicha met 2 carottes pour 350 g de lentilles (soit 1,4 pour 250 g) ; Bladi 1 pomme de terre et 1 carotte pour un verre de lentilles ; Choumicha 400 g de patate douce et de courge pour 350 g, My Moroccan Food 400 g de courge pour 250 g. Retenu : 2 carottes (le chiffre de Choumicha) et 2 petites pommes de terre, un peu au-dessus des sources pour la version « aux légumes » demandée.",
  "Trempage des lentilles : oui chez Morocco World News (1 heure à une nuit), Cooking With Alia (quelques heures, une nuit) et MarocMama (facultatif) ; non chez Choumicha, My Moroccan Food et Mamatkamal ; Bladi les blanchit 10 minutes. Retenu : sans trempage, comme les versions avec viande.",
  "Eau : environ 1 l pour 250 g de lentilles chez Choumicha (1,5 l pour 350 g), Cooking With Alia n° 462 et Morocco World News 2019 ; My Moroccan Food 500 à 550 ml en deux fois ; Mamatkamal très peu, complété au besoin. Retenu : 1 l, plus de l'eau bouillante si besoin, puis réduction si la sauce est trop liquide.",
  "Cumin : 1 c. à c. chez Choumicha (pour 350 g), My Moroccan Food, Morocco World News 2019 et Mamatkamal ; ½ chez Cooking With Alia. Ramené à 250 g, la médiane est de ¾ c. à c. Retenu : 1 c. à c. (valeur majoritaire, celle de la version à l'agneau) ; réduis à ¾ si tu le veux plus discret.",
  "Poivre : ¼ c. à c. chez Cooking With Alia et Bladi, ½ chez Morocco World News 2019 et 2020 (médiane ramenée à 250 g : 0,37). Retenu : ¼ c. à c., à rectifier en fin de cuisson.",
  "Huile d'olive : 4 c. à s. chez My Moroccan Food (agneau), Morocco World News 2019, Choumicha (patate douce) et Mamatkamal ; 2 à 3 chez Cooking With Alia et Choumicha (poulet), 1 seule chez Morocco World News 2020 (avec 2 c. à s. d'huile de cuisson). Retenu : 4 c. à s., la quantité de la version à l'agneau.",
  "Tomates : 1 chez Choumicha, Cooking With Alia n° 462 et Morocco World News 2020 ; 2 chez My Moroccan Food et Morocco World News 2019 ; 4 à 5 chez Mamatkamal (médiane ramenée à 250 g : 1,5). Retenu : 2 tomates moyennes.",
  "Gingembre et curcuma : seulement chez Morocco World News, Cooking With Alia et MarocMama (1 c. à c. de curcuma) ; absents chez Choumicha, My Moroccan Food, Mamatkamal et Bladi. Non retenus dans la recette, cités en variante.",
  "Herbes : au début avec la sauce (Morocco World News 2019, Cooking With Alia n° 462, Mamatkamal, Choumicha avec les lentilles) ou 10 minutes avant la fin (Cooking With Alia n° 094). Retenu : au début, comme la majorité.",
  "Sel : au début chez My Moroccan Food, Cooking With Alia, Choumicha et Morocco World News ; Mamatkamal conseille de ne mettre ni citron ni trop de sel pendant la cuisson des lentilles, et de saler à la fin. Retenu : au début, puis rectifié en fin de cuisson.",
  "Conservation : la règle de l'Anses (2 heures, 3 jours) est retenue.",
  "Contre-vérifiée le 7 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 13 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Version à l'agneau à l'autocuiseur : aucune source ne donne de temps, elle n'est donc pas proposée.",
  "Poids exact d'une « petite pomme de terre » ou d'une « carotte moyenne » : non vérifié ; les quantités restent à la pièce.",
  "Durée de conservation au congélateur : les pages officielles USDA FSIS et FoodSafety.gov refusent l'accès (erreur 403, non contournée) ; aucune durée n'est donnée.",
  "Lalla Moulati publie une astuce pour que les lentilles et la loubia « ne fassent pas mal au ventre » : c'est une affirmation de santé sans source officielle, elle n'est pas reprise.",
  "Recherches : Lalla Moulati (seulement des astuces, aucune recette d'adess à la viande), Femmes du Maroc (aucune recette de lentilles mijotées), Le360 et Hespress (rien trouvé avant que la limite de recherche web, partagée entre les agents, soit atteinte). Ces sites n'ont pas pu être fouillés davantage.",
  "Le blog Du bocal à l'assiette (lentilles marocaines à la viande) a été écarté : sa liste d'ingrédients est incohérente (carottes en double)."
 ],
 "cuisine": "Marocaine",
 "rayon": "Plats",
 "pairs": [
  "khobz"
 ],
 "img_alt": "Lentilles aux pommes de terre et aux carottes dans un plat décoré, photographiées au Maroc",
 "img": "img/lentilles.jpg",
 "photo": {
  "author": "Lucyin",
  "license": "CC BY-SA 4.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Plat_lintiles.JPG",
  "modified": "réduite"
 }
});
