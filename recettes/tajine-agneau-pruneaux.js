/* Recette : Tajine d'agneau aux pruneaux et aux amandes. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "tajine-agneau-pruneaux",
 "title": "Tajine d'agneau aux pruneaux et aux amandes",
 "darija": "Lham bel barkouk",
 "arabic": "اللحم بالبرقوق",
 "tagline": "Un agneau fondant au safran et au gingembre dans sa sauce aux oignons, couronné de pruneaux caramélisés à la cannelle, d'amandes frites et de sésame grillé.",
 "category": "Tajine",
 "occasion": "Fêtes et mariages, Aïd al-Adha, réceptions, ftour du Ramadan",
 "region": "Maroc, plat phare de la cuisine marocaine",
 "servings": 6,
 "servings_label": "personnes",
 "time": {
  "prep": 20,
  "cook": 115,
  "rest": 0
 },
 "difficulty": "Moyen",
 "equipment": [
  "Grande cocotte à fond épais avec couvercle, ou tajine en terre vernissé sur diffuseur de chaleur",
  "Tajine de service ou plat creux",
  "Petite casserole avec couvercle (pruneaux)",
  "Petite poêle (amandes, puis sésame)",
  "Petit bol et saladier",
  "Ficelle de cuisine",
  "Écumoire et papier absorbant"
 ],
 "ingredients": [
  {
   "group": "Viande et sauce",
   "items": [
    {
     "id": "viande",
     "q": 1.5,
     "u": "kg",
     "name": "d'agneau halal (épaule ou collier, avec os)",
     "note": "en gros morceaux ; Choumicha prend de l'épaule ou du gigot, My Moroccan Food de l'épaule, du collier ou des souris",
     "canon": "agneau"
    },
    {
     "id": "oignons",
     "q": 3,
     "u": "",
     "name": "oignon moyen",
     "pl": "oignons moyens",
     "note": "à hacher finement, ou à râper",
     "canon": "oignon"
    },
    {
     "id": "ail",
     "q": 3,
     "u": "",
     "name": "gousse d'ail",
     "pl": "gousses d'ail",
     "canon": "ail"
    },
    {
     "id": "huile",
     "q": 6,
     "u": "c. à s.",
     "name": "d'huile d'olive ou d'huile neutre",
     "canon": "huile-olive"
    },
    {
     "id": "smen",
     "q": 1.5,
     "u": "c. à c.",
     "name": "de smen",
     "note": "facultatif ; c'est la touche de Choumicha",
     "canon": "smen"
    },
    {
     "id": "gingembre",
     "q": 1.5,
     "u": "c. à c.",
     "name": "de gingembre moulu",
     "canon": "gingembre"
    },
    {
     "id": "poivre",
     "q": 0.75,
     "u": "c. à c.",
     "name": "de poivre noir moulu",
     "canon": "poivre"
    },
    {
     "id": "sel",
     "q": 1.25,
     "u": "c. à c.",
     "name": "de sel fin",
     "note": "à rectifier en fin de cuisson",
     "canon": "sel"
    },
    {
     "id": "safran",
     "q": 1,
     "u": "pincée",
     "name": "de pistils de safran",
     "note": "Choumicha en compte 8 pour 1 kg de viande",
     "canon": "safran"
    },
    {
     "id": "eau-safran",
     "q": 60,
     "u": "ml",
     "name": "d'eau tiède, pour le safran",
     "canon": "eau"
    },
    {
     "id": "cannelle-baton",
     "q": 2,
     "u": "",
     "name": "bâton de cannelle",
     "pl": "bâtons de cannelle",
     "canon": "cannelle"
    },
    {
     "id": "coriandre",
     "q": 0.5,
     "u": "botte",
     "name": "de coriandre fraîche",
     "canon": "coriandre"
    },
    {
     "id": "persil",
     "q": 0.5,
     "u": "botte",
     "name": "de persil frais",
     "canon": "persil"
    },
    {
     "id": "eau",
     "q": 500,
     "u": "ml",
     "name": "d'eau chaude",
     "note": "jamais froide ; rajoutes-en un peu en cours de cuisson si la viande n'est plus à moitié couverte",
     "canon": "eau"
    }
   ]
  },
  {
   "group": "Pruneaux caramélisés",
   "items": [
    {
     "id": "pruneaux",
     "q": 500,
     "u": "g",
     "name": "de pruneaux secs",
     "note": "Choumicha les dénoyaute",
     "canon": "pruneaux"
    },
    {
     "id": "beurre",
     "q": 30,
     "u": "g",
     "name": "de beurre",
     "canon": "beurre"
    },
    {
     "id": "sucre",
     "q": 5,
     "u": "c. à s.",
     "name": "de sucre semoule (ou de miel)",
     "note": "un peu moins si tu le veux moins sucré",
     "canon": "sucre"
    },
    {
     "id": "cannelle-moulue",
     "q": 1.5,
     "u": "c. à c.",
     "name": "de cannelle moulue",
     "canon": "cannelle"
    }
   ]
  },
  {
   "group": "Décoration",
   "items": [
    {
     "id": "amandes",
     "q": 100,
     "u": "g",
     "name": "d'amandes mondées (sans peau)",
     "canon": "amandes"
    },
    {
     "id": "huile-friture",
     "q": null,
     "u": "",
     "name": "huile pour frire les amandes",
     "pl": "huile pour frire les amandes",
     "canon": "huile"
    },
    {
     "id": "sesame",
     "q": 3,
     "u": "c. à s.",
     "name": "de graines de sésame",
     "canon": "sesame"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Fais infuser le safran",
   "text": "Mets {{safran}} de pistils de safran dans un petit bol avec {{eau-safran}} d'eau tiède. Laisse infuser 10 min pendant que tu prépares le reste.",
   "timer": {
    "min": 10,
    "label": "Infusion du safran",
    "done": "Le safran a infusé : garde le bol à portée de main."
   }
  },
  {
   "phase": "Préparation",
   "title": "Prépare oignons, ail et bouquet",
   "text": "Hache finement ou râpe {{oignons:full}}, et écrase {{ail:full}}. Ficelle ensemble {{coriandre}} de coriandre et {{persil}} de persil en un petit bouquet. Si le boucher ne l'a pas fait, coupe la viande en gros morceaux en gardant les os.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Fais revenir la viande dans les épices",
   "text": "Dans une grande cocotte à fond épais, à feu moyen-doux, mets {{huile}} d'huile, {{smen}} de smen, les oignons, l'ail, {{gingembre}} de gingembre, {{poivre}} de poivre, {{sel}} de sel, {{cannelle-baton:full}} et l'eau safranée. Mélange, ajoute {{viande}} d'agneau et fais revenir le tout 5 à 10 min en remuant souvent : la viande doit se colorer de tous côtés, sans brûler.",
   "timer": {
    "min": 10,
    "label": "Viande revenue",
    "done": "La viande est colorée de tous côtés : verse l'eau chaude."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Mouille et laisse mijoter 1 h",
   "text": "Verse {{eau}} d'eau chaude, jamais froide : la viande doit être à peu près à moitié couverte, complète un peu si besoin. Pose le bouquet d'herbes dessus et porte à ébullition. Couvre, baisse à feu doux et laisse mijoter 1 h en remuant de temps en temps.",
   "timer": {
    "min": 60,
    "label": "Mijotage : 1re heure",
    "done": "1 h de mijotage : prélève de la sauce pour les pruneaux."
   }
  },
  {
   "phase": "Préparation",
   "title": "Pendant ce temps, fais gonfler les pruneaux",
   "text": "Rince {{pruneaux}} de pruneaux, couvre-les d'eau bouillante et laisse-les gonfler 15 min. Égoutte-les.",
   "timer": {
    "min": 15,
    "label": "Trempage des pruneaux",
    "done": "Égoutte les pruneaux et garde-les de côté."
   }
  },
  {
   "phase": "Préparation",
   "title": "Fais frire les amandes",
   "text": "Chauffe un fond d'huile dans une petite poêle, à feu moyen. Fais-y frire {{amandes}} d'amandes mondées en remuant sans arrêt, jusqu'à ce qu'elles soient bien dorées. Égoutte-les sur du papier absorbant.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Fais griller le sésame",
   "text": "Essuie la poêle et fais-y griller à sec {{sesame}} de graines de sésame, à feu moyen-doux, en remuant, juste jusqu'à ce qu'elles blondissent. Verse-les aussitôt dans un bol.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Prélève de la sauce pour les pruneaux",
   "text": "Au bout d'une heure de mijotage, verse environ un quart de la sauce de la cocotte dans une petite casserole. S'il ne reste presque plus de sauce, rajoute un peu d'eau chaude dans la cocotte. Recouvre et laisse la viande mijoter encore 30 min à feu doux.",
   "timer": {
    "min": 30,
    "label": "Fin du mijotage",
    "done": "Vérifie : la viande doit se détacher de l'os ; sinon, prolonge de 15 min."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Cuis les pruneaux dans la sauce",
   "text": "Ajoute {{beurre}} de beurre dans la petite casserole et fais-le fondre à feu moyen. Ajoute les pruneaux égouttés, couvre et laisse cuire 10 min, jusqu'à ce qu'ils soient tendres.",
   "timer": {
    "min": 10,
    "label": "Pruneaux dans la sauce",
    "done": "Les pruneaux sont tendres : ajoute le sucre et la cannelle."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Caramélise les pruneaux",
   "text": "Ajoute {{sucre}} de sucre (ou de miel) et {{cannelle-moulue}} de cannelle moulue, puis mélange délicatement pour ne pas écraser les pruneaux. Couvre et laisse confire 10 min à feu doux : ils doivent être brillants, dans un sirop épais. Si le sirop reste liquide, découvre et laisse réduire quelques minutes. Garde au chaud.",
   "timer": {
    "min": 10,
    "label": "Pruneaux caramélisés",
    "done": "Sirop épais, pruneaux brillants : garde-les au chaud."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Fais réduire la sauce de la viande",
   "text": "Quand la viande se détache de l'os, retire le bouquet d'herbes. Si la sauce est encore liquide, fais-la réduire à découvert 10 à 15 min à feu moyen-doux, en remuant de temps en temps : elle doit être épaisse, avec des oignons fondus. Goûte et rectifie le sel. Pendant ce temps, réchauffe le plat de service au four chaud éteint, ou remplis-le d'eau chaude puis vide-le.",
   "timer": {
    "min": 15,
    "label": "Réduction de la sauce",
    "done": "La sauce est épaisse : passe au service."
   }
  },
  {
   "phase": "Service",
   "title": "Dresse et sers",
   "text": "Dispose la viande dans le plat chaud et garnis-la des pruneaux. Mélange la sauce de la viande avec un peu de sirop des pruneaux et nappe-en la viande. Parsème d'amandes frites et de graines de sésame grillées. Sers aussitôt, au centre de la table, avec du pain.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Fais cuire les pruneaux à part, pas dans la cocotte : ils caramélisent mieux et le plat ne vire pas au brun-noir.",
   "source": "My Moroccan Food (Nargisse Benkabbou) ; cuisson à part aussi chez Choumicha, Bladi, Cooking with Alia, Morocco World News et Femmes du Maroc"
  },
  {
   "text": "Confis les pruneaux dans un peu de sauce prélevée sur la viande, avec du beurre, puis le sucre ou le miel et la cannelle, jusqu'à un sirop épais.",
   "source": "Cooking with Alia ; Morocco World News ; Bladi (« deux louches de sauce ») ; My Moroccan Food (sauce prélevée au bout d'1 h)"
  },
  {
   "text": "Fais d'abord gonfler les pruneaux dans l'eau bouillante pour les attendrir.",
   "source": "Cooking with Alia (15 min) ; My Moroccan Food (5 min) ; Bladi (pruneaux « gonflés dans l'eau »)"
  },
  {
   "text": "Fais infuser les pistils de safran 10 min dans un peu d'eau tiède avant de les verser dans la cocotte.",
   "source": "Cooking with Alia"
  },
  {
   "text": "Ajoute une cuillerée de smen avec les épices de la viande.",
   "source": "Choumicha"
  },
  {
   "text": "Pose sur la viande un bouquet ficelé de coriandre et de persil, et retire-le avant de servir.",
   "source": "Choumicha (bouquet persil-coriandre) ; My Moroccan Food (bouquet de coriandre ficelé)"
  },
  {
   "text": "Pendant la cuisson, mouille toujours avec de l'eau chaude, jamais froide, et garde la viande à moitié couverte : rajoute un peu d'eau chaude si la sauce attache.",
   "source": "Choumicha (conseil donné pour le tajine en terre) ; Cooking with Alia (viande à moitié couverte) ; My Moroccan Food (eau ajoutée si ça attache)"
  },
  {
   "text": "La sauce est prête quand elle a réduit et qu'elle est épaisse, liée par les oignons fondus.",
   "source": "Choumicha (« sauce réduite ») ; Cooking with Alia (« sauce épaisse ») ; My Moroccan Food (beaucoup d'oignons pour une sauce épaisse)"
  },
  {
   "text": "Pour une sauce plus épaisse et plus abondante, mets plus d'oignons : My Moroccan Food en met 800 g pour 1,2 kg de viande.",
   "source": "My Moroccan Food"
  },
  {
   "text": "Avant de napper, mélange la sauce de la viande avec un peu du sirop des pruneaux.",
   "source": "Choumicha"
  },
  {
   "text": "Amandes mondées frites dans l'huile puis égouttées ; sésame grillé légèrement, à sec.",
   "source": "Bladi ; Femmes du Maroc (amandes « émondées et frites ») ; Cooking with Alia (amandes frites)"
  },
  {
   "text": "Choisis un morceau qui supporte une longue cuisson, avec os : épaule, collier ou souris d'agneau.",
   "source": "My Moroccan Food ; Choumicha (épaule ou gigot) ; Bladi (épaule)"
  },
  {
   "text": "Le tajine en terre décoré sert surtout au service : réchauffe-le avant d'y dresser la viande cuite à la cocotte.",
   "source": "Choumicha (fiche du tajine en terre : le tajine décoré est réservé au service et réchauffé avant de dresser)"
  },
  {
   "text": "Le tajine de service émaillé et décoré ne va jamais sur le feu : réchauffe-le avant de dresser, au four chaud éteint ou avec de l'eau chaude.",
   "source": "Choumicha (conseils sur le tajine)"
  }
 ],
 "mistakes": [
  "Cuire les pruneaux dans la cocotte avec la viande si tu les veux bien caramélisés : ils caramélisent moins bien et le plat brunit (My Moroccan Food). Les cuire avec la viande n'est pas une faute pour autant : My Moroccan Food précise qu'il n'y a rien de mal à le faire, et la recette « Tajine d'agneau aux pruneaux » de Bladi.net les ajoute à la viande.",
  "Mouiller en cours de cuisson avec de l'eau froide : toujours de l'eau chaude (Choumicha, conseil donné pour le tajine en terre).",
  "Laisser la sauce s'assécher : la viande attache. Rajoute un peu d'eau chaude dès qu'il n'en reste presque plus (My Moroccan Food, Cooking with Alia).",
  "Arrêter la cuisson trop tôt : la viande doit se détacher facilement de l'os (My Moroccan Food).",
  "Brusquer les pruneaux en fin de cuisson : mélange-les délicatement (Cooking with Alia).",
  "Trop griller le sésame : il doit juste blondir (Bladi : « griller légèrement »).",
  "Mettre un tajine en terre sur un feu vif : il peut se fissurer. Toujours à feu doux, avec un diffuseur sur le gaz (Choumicha).",
  "Poser sur le feu le tajine émaillé et décoré : il sert seulement au service (Choumicha)."
 ],
 "serving": "Bien chaud, dans un tajine de service réchauffé ou un plat creux posé au centre de la table pour être partagé : la viande nappée de sa sauce mêlée d'un peu de sirop, les pruneaux caramélisés dessus, puis les amandes frites et le sésame grillé. Avec du pain pour saucer (Morocco World News) ; My Moroccan Food propose aussi du couscous.",
 "variants": [
  "Bœuf : jarret ou collier de bœuf, même méthode ; prolonge le mijotage jusqu'à ce que la viande soit fondante (Cooking with Alia : 1 à 2 h selon le morceau ; My Moroccan Food, Femmes du Maroc, Morocco World News).",
  "Autocuiseur : Bladi cuit l'épaule 20 min sous pression, puis termine environ 15 min en remuant ; Morocco World News compte 40 min pour le bœuf, puis fait réduire la sauce à découvert.",
  "Au miel : My Moroccan Food et Cooking with Alia caramélisent les pruneaux au miel plutôt qu'au sucre ; Morocco World News mélange sucre et miel.",
  "Pruneaux et abricots : Femmes du Maroc (abricots secs) et la cheffe Asmaa Alami (Le360) associent pruneaux et abricots caramélisés ; Femmes du Maroc ajoute aussi des coings ou des pommes caramélisés.",
  "Épices en plus : une pincée de ras el hanout (Choumicha, Cooking with Alia) ou un peu de curcuma (My Moroccan Food, Morocco World News, Cooking with Alia).",
  "Amandes grillées plutôt que frites (Choumicha, My Moroccan Food), ou amandes effilées (Le360).",
  "Cuisson entière au tajine en terre vernissé : sur le gaz avec un diffuseur, toujours à feu doux ; tapisse le fond de tiges de persil et de coriandre ou de rondelles d'oignon pour que rien n'attache (Choumicha)."
 ],
 "sources": [
  {
   "name": "Choumicha (Choumicha Chafay) – « Tajine d'agneau aux pruneaux », choumicha.ma, copie archivée du 10/07/2026 (site hors ligne)",
   "url": "https://web.archive.org/web/20260710205720/https://www.choumicha.ma/recette/1056-tajine-dagneau-aux-pruneaux.html",
   "used_for": "Recette marocaine de base pour 4 : épaule ou gigot, gingembre, poivre, safran, 2 bâtons de cannelle, ras el hanout, smen, bouquet persil-coriandre, feu doux 1 h 30 ; pruneaux confits à part (sucre, beurre, cannelle) ; nappage sauce et sirop ; amandes et sésame ; classée « Pour recevoir » et « Aid Al Adha »."
  },
  {
   "name": "Choumicha – « Le Tajine » (conseils d'utilisation), choumicha.ma, copie archivée du 21/05/2026",
   "url": "https://web.archive.org/web/20260521083203/https://choumicha.ma/produits-de-saisons/le-tajine.html",
   "used_for": "Tajine en terre : feu doux, diffuseur sur le gaz, fond tapissé d'herbes ou d'oignon, toujours mouiller à chaud ; tajine décoré réservé au service et réchauffé avant de dresser."
  },
  {
   "name": "My Moroccan Food (Nargisse Benkabbou) – « Lamb Tagine with Prunes », 02/02/2016",
   "url": "https://www.mymoroccanfood.com/home/lamb-tagine-with-prunes",
   "used_for": "Pruneaux cuits à part pour bien caraméliser sans noircir la sauce ; sauce prélevée au bout d'1 h ; eau ajoutée si ça attache ; beaucoup d'oignons pour une sauce épaisse ; morceaux (souris, épaule, collier) ; 2 h de mijotage ; variante au miel."
  },
  {
   "name": "Morocco World News (Layla Dahamou) – « Moroccan Cuisine: a Recipe for Beef Meat with Prunes », 16/02/2013",
   "url": "https://www.moroccoworldnews.com/2013/02/145374/moroccan-cuisine-a-recipe-for-beef-meat-with-prunes/",
   "used_for": "Plat servi traditionnellement aux mariages et grandes occasions ; bœuf ou agneau ; pruneaux mijotés puis glacés avec sauce, beurre, cannelle, sucre et miel ; autocuiseur 40 min ; sésame."
  },
  {
   "name": "Femmes du Maroc (La rédaction) – « Tajine de bœuf aux fruits frais et fruits secs », 21/06/2025",
   "url": "https://femmesdumaroc.com/plaisirs/food-drink/tajine-de-boeuf-aux-fruits-frais-et-fruits-secs",
   "used_for": "Variante bœuf (jarret) ; viande revenue avec oignons, safran, gingembre, cannelle et herbes ; pruneaux et abricots confits à part ; amandes émondées et frites."
  },
  {
   "name": "Bladi.net – « Tajine de viande aux pruneaux » (recette non signée)",
   "url": "https://www.bladi.net/recettes/tajine-de-viande-aux-pruneaux.html",
   "used_for": "Proportions pour 1,5 kg d'épaule (500 g de pruneaux, 100 g d'amandes) ; pruneaux cuits dans deux louches de sauce avec sucre et cannelle ; amandes mondées frites et égouttées ; sésame grillé légèrement à sec ; autocuiseur."
  },
  {
   "name": "Cooking with Alia – « 413 – Beef Tagine with Prunes / طاجين اللحم بالبرقوق »",
   "url": "https://www.cookingwithalia.com/413-beef-tagine-with-prunes/",
   "used_for": "Safran infusé 10 min ; oignons râpés ; viande toujours à moitié couverte, 1 à 2 h ; pruneaux trempés 15 min puis cuits dans beurre et sauce, avec miel et cannelle, jusqu'au sirop épais ; amandes frites et sésame ; nom arabe du plat."
  },
  {
   "name": "Le360 (La Rédaction) – « À l'heure du Ftour : le tagine aux pruneaux, l'incontournable de la cuisine marocaine », 25/02/2026",
   "url": "https://fr.le360.ma/lifestyle/a-lheure-du-ftour-le-tagine-aux-pruneaux-lincontournable-de-la-cuisine-marocaine_LG6OX7FZGBEUFLJVRWLXTD6U3M/",
   "used_for": "« Plat phare de la gastronomie marocaine », au ftour du Ramadan ; variante de la cheffe Asmaa Alami avec abricots caramélisés et amandes effilées."
  },
  {
   "name": "Bladi.net (Bouchra Fadel) – « La cuisine marocaine, un élément de joie et un régal des sens », 25/05/2004",
   "url": "https://www.bladi.net/la-cuisine-marocaine-un-element-de-joie-et-un-regal-des-sens.html",
   "used_for": "Recoupement des mariages : au mariage marocain, les viandes garnies, l'agneau en particulier, avec pruneaux, amandes et raisins secs sont servies aux invités."
  },
  {
   "name": "Femmes du Maroc – « Casablanca à l'heure du ftour : nos tables coups de cœur », 20/02/2026",
   "url": "https://femmesdumaroc.com/plaisirs/food-drink/casablanca-a-lheure-du-ftour-nos-tables-coups-de-coeur",
   "used_for": "Recoupement du Ramadan : tajine de bœuf aux pruneaux et aux amandes au menu d'un ftour."
  },
  {
   "name": "Lalla Moulati (مطبخ لالة مولاتي), « طاجين اللحم بالبرقوق بطريقة ماما » (tajine de viande aux pruneaux à la façon de maman), 25 février 2021",
   "url": "https://www.lalamoulati.net/270316.html",
   "used_for": "Contre-vérification : Source marocaine en arabe, non citée par l'auteur : nom arabe « طاجين اللحم بالبرقوق » ; 1 kg de viande en gros cubes revenue avec gingembre, curcuma, poivre, safran et cannelle, puis oignons et ail ; mouillée à l'eau bouillante et cuite à feu doux jusqu'à ce qu'elle soit tendre ; pruneaux cuits à part avec bâtons de cannelle, beurre et sucre (2 c. à s. pour 250 g) ; dressage : viande, pruneaux et leur sirop, amandes mondées grillées, sésame grillé."
  },
  {
   "name": "Lalla Moulati, « شهيوات عيد الأضحى: اللحم بالبرقوق واللوز » (plats de l'Aïd al-Adha : viande aux pruneaux et aux amandes), 25 juin 2023",
   "url": "https://www.lalamoulati.net/373674.html",
   "used_for": "Contre-vérification : Plat présenté comme un plat de l'Aïd al-Adha ; viande prise dans l'épaule ; safran trempé dans un verre d'eau chaude ; gingembre, curcuma, poivre, cannelle, smen et oignons (la page ne donne que les ingrédients)."
  },
  {
   "name": "Lalla Moulati, « شهيوات عيد الأضحى: جبت ليك طريقة المحترفات فتحضير اللحم بالبرقوق … بالمذاق ديال الأعراس » (plats de l'Aïd al-Adha : la viande aux pruneaux au goût des mariages), 28 juin 2023",
   "url": "https://www.lalamoulati.net/374119.html",
   "used_for": "Contre-vérification : Plat de l'Aïd al-Adha et des mariages : la page présente « le secret de la viande aux pruneaux des mariages » pour les fêtes marocaines (recette en vidéo, quantités non lues)."
  },
  {
   "name": "Lalla Moulati, « شهيوات عيد الأضحى: اللحم بالبرقوق والمشماش معسل بالطريقة المراكشية » (viande aux pruneaux et aux abricots, à la marrakchie), 25 juin 2023",
   "url": "https://www.lalamoulati.net/373690.html",
   "used_for": "Contre-vérification : Variante pruneaux et abricots, présentée comme un plat propre à l'Aïd al-Adha dont on ne peut se passer (recette en vidéo, quantités non lues)."
  },
  {
   "name": "Yabiladi (Fatima Az Zahra El Boukhari), « Le mariage marocain : entre traditions et touches de modernité », 20 mars 2012",
   "url": "https://www.yabiladi.com/articles/details/9510/mariage-marocain-entre-traditions-touches",
   "used_for": "Contre-vérification : Média marocain : le dîner de mariage se compose en général d'une pastilla, d'un plat de viande (tajine aux pruneaux, méchoui ou poulet aux olives) et d'un dessert."
  },
  {
   "name": "Bladi.net, « Tajine d'agneau aux pruneaux » (recette non signée, datée du 30 octobre 2005)",
   "url": "https://www.bladi.net/recettes/tajine-d-agneau-aux-pruneaux.html",
   "used_for": "Contre-vérification : Deuxième recette marocaine de Bladi, non citée : épaule d'agneau, 400 g de pruneaux pour 1,2 kg (333 g par kilo, le rapport retenu), 40 cl d'eau (333 ml par kilo), 1 h de frémissement, miel et cannelle, amandes mondées dorées à l'huile. Elle cuit les pruneaux dans la cocotte : la cuisson commune existe aussi dans une source marocaine."
  }
 ],
 "discrepancies": [
  "Saisir ou non : My Moroccan Food saisit la viande seule à feu vif avant les oignons ; Femmes du Maroc la fait revenir avec oignons et épices « jusqu'à ce que la viande soit bien caramélisée », Cooking with Alia quelques minutes jusqu'à coloration, Choumicha 2 min à feu doux ; Bladi met tout à cru dans l'autocuiseur. Retenu : 5 à 10 min avec oignons et épices, sans saisir à part.",
  "Liquide des pruneaux : sauce de la viande chez Bladi, My Moroccan Food, Cooking with Alia et Morocco World News ; eau chez Choumicha (25 cl pour 500 g) et Femmes du Maroc. Retenu : la sauce (majorité), plus le nappage sauce et sirop de Choumicha.",
  "Sucre ou miel : sucre chez Choumicha, Bladi et Femmes du Maroc ; miel chez My Moroccan Food et Cooking with Alia ; les deux chez Morocco World News. Ramenée à 500 g de pruneaux, la dose va de 3 à 6 c. à s. chez Choumicha, Bladi, My Moroccan Food, Cooking with Alia et Morocco World News (médiane 5) ; Femmes du Maroc, bien plus sucrée, en met environ 165 g (100 g pour 300 g de pruneaux), soit une douzaine de c. à s. Retenu : 5 c. à s. de sucre, miel en variante.",
  "Amandes : frites chez Bladi, Femmes du Maroc et Cooking with Alia ; grillées chez Choumicha et My Moroccan Food ; effilées chez Le360. Retenu : entières, mondées et frites.",
  "Pruneaux : de 250 g par kilo de viande (Morocco World News, My Moroccan Food) à 500 g par kilo (Choumicha), médiane d'environ 320 g ; Femmes du Maroc, qui ajoute autant d'abricots secs, n'en met qu'environ 90 g par kilo (300 g pour 3,3 kg). Retenu : 500 g pour 1,5 kg, comme Bladi.",
  "Eau : 350 ml pour 1 kg chez Choumicha, 320 ml pour 1,2 kg chez My Moroccan Food (médiane d'environ 330 ml par kilo sur 4 recettes en cocotte) ; Cooking with Alia couvre presque la viande. Retenu : 500 ml pour 1,5 kg, en rajoutant de l'eau chaude si besoin.",
  "Curcuma (My Moroccan Food, Morocco World News, Cooking with Alia) et ras el hanout (Choumicha, Cooking with Alia en option) : chacun absent de la majorité des recettes, donc passés en variante.",
  "Moment des pruneaux : toutes les sources lisibles les cuisent à part. Retenu : à part.",
  "Choumicha ajoute 1 c. à c. de sel au sirop des pruneaux ; aucune autre source ne le fait. Non retenu.",
  "Bladi saupoudre aussi la viande de 2 c. à s. de sucre et ajoute un deuxième oignon émincé en fin de cuisson : seule source à le faire, non retenu.",
  "Durée en cocotte : 1 h 30 (Choumicha), 1 à 2 h (Cooking with Alia), 2 h (My Moroccan Food). Retenu : 1 h 30 de mijotage, prolongé tant que la viande ne se détache pas de l'os, puis réduction.",
  "Contre-vérifiée le 6 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 10 correction(s) appliquée(s).",
  "Relue le 8 novembre 2026 pendant la traduction : 1 précision(s) apportée(s) après vérification des sources."
 ],
 "unverified": [
  "Eau de fleur d'oranger : seule la recette « Agneau aux pruneaux et aux amandes » de Bladi.net en met (1 c. à s. dans le liquide de cuisson), une recette atypique sans oignons ni autre épice que la cannelle, avec 1 tasse de sucre (https://www.bladi.net/recettes/agneau-aux-pruneaux-et-aux-amandes.html). Aucune des sources retenues n'en utilise : non retenue.",
  "Œuf en décoration : Morocco World News propose de « mettre un œuf » sur le plat, sans préciser sa cuisson ; non retenu.",
  "Aïd al-Adha : classement de Choumicha (catégorie « Aid Al Adha »), recoupé par la contre-vérification : Lalla Moulati publie en juin 2023 plusieurs recettes d'اللحم بالبرقوق sous le titre « شهيوات عيد الأضحى » (plats de l'Aïd al-Adha). Morocco World News publie pour l'Aïd al-Adha une recette voisine, aux abricots et à l'ananas plutôt qu'aux pruneaux (https://www.moroccoworldnews.com/2019/08/77990/eid-al-adha-caramlized-lamb/).",
  "Durée et quantité d'eau pour une cuisson entière au tajine en terre, et durée précise pour le bœuf en cocotte : non données par les sources.",
  "Nom en darija : la graphie « Lham bel barkouk » vient de la demande, aucune page ouverte ne l'écrit ainsi ; le nom arabe اللحم بالبرقوق est confirmé par Cooking with Alia (« طاجين اللحم بالبرقوق »).",
  "Site de Choumicha hors ligne (erreur 525) : ses deux pages ont été lues sur les copies archivées de web.archive.org.",
  "Le360 : la recette de la cheffe Asmaa Alami est en vidéo ; seul le texte d'introduction a été lu, sans les quantités.",
  "Taste of Maroc (page refusée, erreur 403) et Royal Mansour (aucune recette de ce plat trouvée en recherche) n'ont pas pu être consultés. Lalla Moulati, introuvable lors de la rédaction, a été lue par la contre-vérification : recettes d'اللحم بالبرقوق de 2021 et 2023.",
  "Grantourismo (recette de Terence Carter) : son fichier robots.txt interdit tout le site aux robots d'Anthropic (relu le 8 novembre 2026). La source est retirée, avec ce qui ne reposait que sur elle : la cuisson en cocotte puis le service dans le tajine en terre, la sauce « sirupeuse » et l'idée que le couscous serait toujours un plat à part."
 ],
 "cuisine": "Marocaine",
 "rayon": "Tajines",
 "pairs": [
  "khobz"
 ],
 "img_alt": "Tajine aux pruneaux et aux amandes, dans son plat en terre",
 "img": "img/tajine-pruneaux.jpg",
 "photo": {
  "author": "Iron Bishop",
  "license": "CC BY-SA 3.0",
  "license_url": "http://creativecommons.org/licenses/by-sa/3.0/",
  "page": "https://commons.wikimedia.org/wiki/File:IB_tajine_03.jpg",
  "modified": "réduite"
 }
});
