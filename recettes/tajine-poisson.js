/* Recette : Tajine de poisson à la chermoula. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "tajine-poisson",
 "title": "Tajine de poisson à la chermoula",
 "darija": "Tajine l'hout bel chermoula",
 "arabic": "طاجين الحوت بالشرمولة",
 "tagline": "Du poisson mariné dans une chermoula bien citronnée, cuit doucement sur un lit de carottes, de pommes de terre et de tomates, avec poivrons, olives et citron confit.",
 "category": "Poisson",
 "occasion": "Plat à partager, seul ou avec des salades",
 "region": "Tout le Maroc ; dans le Nord (Tanger, Tétouan), le poisson cuit aussi dans une tagra",
 "servings": 4,
 "servings_label": "personnes",
 "time": {
  "prep": 30,
  "cook": 35,
  "rest": 30,
  "rest_label": "Marinade"
 },
 "difficulty": "Facile",
 "equipment": [
  "Grand tajine en terre avec son couvercle, ou sauteuse profonde avec couvercle",
  "Diffuseur de chaleur (pour le tajine en terre, hors gaz)",
  "Mortier et pilon, ou hachoir",
  "Plat creux avec couvercle ou film, pour la marinade",
  "Petit bol",
  "Planche et couteau réservés au poisson cru",
  "Papier absorbant",
  "Petite casserole (pour réduire la sauce si besoin)"
 ],
 "ingredients": [
  {
   "group": "Poisson",
   "items": [
    {
     "id": "poisson",
     "q": 700,
     "u": "g",
     "name": "de poisson à chair ferme (loup, dorade, pageot, maigre ou congre)",
     "note": "écaillé, vidé et coupé en darnes épaisses ; ou un poisson entier",
     "canon": "poisson"
    }
   ]
  },
  {
   "group": "Chermoula",
   "items": [
    {
     "id": "coriandre",
     "q": 0.5,
     "u": "botte",
     "name": "de coriandre fraîche",
     "note": "les feuilles pour la chermoula, les tiges pour le fond du tajine",
     "canon": "coriandre"
    },
    {
     "id": "ail",
     "q": 3,
     "u": "",
     "name": "gousse d'ail",
     "pl": "gousses d'ail",
     "note": "à peler",
     "canon": "ail"
    },
    {
     "id": "sel",
     "q": 1,
     "u": "c. à c.",
     "name": "de sel",
     "canon": "sel"
    },
    {
     "id": "paprika",
     "q": 1.5,
     "u": "c. à c.",
     "name": "de paprika doux (piment doux en poudre)",
     "canon": "paprika"
    },
    {
     "id": "cumin",
     "q": 1.5,
     "u": "c. à c.",
     "name": "de cumin moulu",
     "canon": "cumin"
    },
    {
     "id": "piment",
     "q": 0.25,
     "u": "c. à c.",
     "name": "de piment fort en poudre (cayenne), facultatif",
     "canon": "piment-cayenne"
    },
    {
     "id": "jus-citron",
     "q": 3,
     "u": "c. à s.",
     "name": "de jus de citron frais",
     "canon": "citron"
    },
    {
     "id": "huile-chermoula",
     "q": 3,
     "u": "c. à s.",
     "name": "d'huile d'olive",
     "canon": "huile-olive"
    }
   ]
  },
  {
   "group": "Lit de légumes et garniture",
   "items": [
    {
     "id": "huile-fond",
     "q": 2,
     "u": "c. à s.",
     "name": "d'huile d'olive, pour le fond",
     "canon": "huile-olive"
    },
    {
     "id": "celeri",
     "q": null,
     "u": "",
     "name": "branches de céleri ou petites brochettes en bois",
     "note": "facultatif : seulement si les tiges de coriandre ne suffisent pas à couvrir le fond",
     "canon": "celeri"
    },
    {
     "id": "carottes",
     "q": 3,
     "u": "",
     "name": "carotte",
     "pl": "carottes",
     "note": "à peler et couper en bâtonnets de 0,5 cm",
     "canon": "carotte"
    },
    {
     "id": "pommes-de-terre",
     "q": 2,
     "u": "",
     "name": "grosse pomme de terre",
     "pl": "grosses pommes de terre",
     "note": "environ 200 g pièce ; à peler et couper en rondelles de 0,5 cm",
     "canon": "pomme-de-terre"
    },
    {
     "id": "tomates",
     "q": 2,
     "u": "",
     "name": "grosse tomate mûre",
     "pl": "grosses tomates mûres",
     "note": "à couper en rondelles",
     "canon": "tomate"
    },
    {
     "id": "poivrons",
     "q": 2,
     "u": "",
     "name": "poivron (vert, rouge ou jaune)",
     "pl": "poivrons (verts, rouges ou jaunes)",
     "note": "à épépiner et couper en fines lanières ; un poivron rouge adoucit le plat",
     "canon": "poivron"
    },
    {
     "id": "poivre",
     "q": null,
     "u": "",
     "name": "poivre noir moulu, selon le goût",
     "canon": "poivre"
    },
    {
     "id": "piment-vert",
     "q": 1,
     "u": "",
     "name": "piment vert piquant",
     "pl": "piments verts piquants",
     "note": "facultatif ; à poser entier",
     "canon": "piment-vert"
    },
    {
     "id": "citron-rondelles",
     "q": null,
     "u": "",
     "name": "quelques rondelles de citron frais",
     "canon": "citron"
    },
    {
     "id": "olives",
     "q": 90,
     "u": "g",
     "name": "d'olives vertes ou rouges",
     "canon": "olives"
    },
    {
     "id": "citron-confit",
     "q": 0.5,
     "u": "",
     "name": "citron confit",
     "pl": "citrons confits",
     "note": "à couper en quartiers, sans les pépins",
     "canon": "citron-confit"
    },
    {
     "id": "eau",
     "q": 3,
     "u": "c. à s.",
     "name": "d'eau",
     "canon": "eau"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Choisis un poisson bien frais",
   "text": "Prends {{poisson:full}}. Il doit sentir frais et doux, jamais fort, aigre ou l'ammoniaque. Entier, il a l'œil clair et brillant, les ouïes rouges et une chair ferme qui reprend sa forme quand tu appuies dessus. Demande au poissonnier de l'écailler, de le vider et de le couper en darnes épaisses.",
   "timer": null,
   "tip": "Garde-le dans la partie la plus froide du réfrigérateur (4 °C) et cuisine-le dans les 2 jours ; sinon, congèle-le. Surgelé, fais-le décongeler une nuit au réfrigérateur (FDA ; ANSES)."
  },
  {
   "phase": "Préparation",
   "title": "Rince et sèche le poisson",
   "text": "Rince les darnes à l'eau froide, égoutte-les, puis sèche-les avec du papier absorbant. Lave-toi ensuite les mains au savon pendant 20 secondes, puis la planche, le couteau et le plan de travail à l'eau chaude savonneuse.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Pile la chermoula",
   "text": "Lave et effeuille {{coriandre:full}} : hache finement les feuilles et garde les tiges. Au mortier, pile {{ail:full}} avec {{sel}} de sel, puis ajoute la coriandre hachée et pile encore. Mélange avec {{paprika}} de paprika doux, {{cumin}} de cumin, {{piment}} de piment fort si tu aimes, {{jus-citron}} de jus de citron et {{huile-chermoula}} d'huile d'olive. Si la chermoula est trop épaisse, détends-la avec un peu d'eau.",
   "timer": null,
   "tip": "Hache bien la coriandre avant de la piler, sinon la chermoula devient filandreuse. Sans mortier, un hachoir ou un mixeur fait l'affaire."
  },
  {
   "phase": "Préparation",
   "title": "Mets la moitié de la chermoula de côté",
   "text": "Avant de toucher le poisson, verse la moitié de la chermoula dans un petit bol : elle servira aux légumes. Couvre-la et garde-la au réfrigérateur.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Fais mariner le poisson",
   "text": "Enrobe bien chaque darne avec l'autre moitié de la chermoula. Couvre et laisse mariner au réfrigérateur au moins 30 min, et jusqu'à 2 h si tu as le temps.",
   "timer": {
    "min": 30,
    "label": "Marinade du poisson",
    "done": "Le poisson a mariné 30 min : tu peux monter le tajine, ou le laisser jusqu'à 2 h au frais."
   },
   "tip": "Ne laisse pas le poisson cru mariner hors du réfrigérateur."
  },
  {
   "phase": "Préparation",
   "title": "Coupe les légumes",
   "text": "Pendant la marinade, lave les légumes et le citron frais à l'eau potable. Pèle {{carottes:full}}, puis coupe en bâtonnets de 0,5 cm. Pèle {{pommes-de-terre:full}}, puis coupe en rondelles de 0,5 cm, pas plus épaisses. Coupe {{tomates:full}} en rondelles et {{poivrons:full}} en fines lanières, sans les graines. Coupe {{citron-confit:full}} en quartiers, sans les pépins.",
   "timer": null,
   "tip": "Des rondelles trop épaisses cuisent trop lentement : le poisson sécherait avant qu'elles soient tendres."
  },
  {
   "phase": "Cuisson",
   "title": "Tapisse le fond du tajine",
   "text": "Verse {{huile-fond}} d'huile d'olive au fond du tajine. Pose dessus les tiges de coriandre en croisillons ; s'il en manque, complète avec quelques {{celeri}}. Ce lit empêche le reste de toucher le fond, d'attacher et de brûler.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Monte le lit de carottes et de pommes de terre",
   "text": "Étale les bâtonnets de carottes sur les tiges, puis couvre-les avec les rondelles de pommes de terre. Saupoudre de {{poivre}}, mais ne sale pas : le citron confit et les olives saleront le plat.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Ajoute les tomates et la chermoula gardée",
   "text": "Couvre les pommes de terre avec les rondelles de tomates, puis étale dessus la chermoula que tu as mise de côté.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Pose le poisson et la garniture",
   "text": "Dispose les darnes et leur marinade sur les tomates. Couvre-les de lanières de poivron, puis ajoute {{piment-vert:full}} si tu veux et {{citron-rondelles}}. Répartis {{olives}} d'olives et les quartiers de citron confit tout autour.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Ajoute l'eau et mets sur le feu",
   "text": "Verse {{eau}} d'eau dans le tajine et couvre. Pose-le sur feu moyen-doux et laisse le frémissement venir doucement. Sans gaz, mets toujours un diffuseur sous un tajine en terre.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Laisse cuire à couvert",
   "text": "Laisse cuire 30 min à couvert, puis vérifie : les pommes de terre doivent être tendres et le poisson doit se détacher facilement à la fourchette. Sinon, poursuis à feu doux et vérifie souvent. Au tajine en terre, c'est plus long : Taste of Maroc compte environ 1 h de frémissement.",
   "timer": {
    "min": 30,
    "label": "Cuisson du tajine",
    "done": "Pommes de terre tendres et poisson qui se détache à la fourchette ? Sinon, prolonge à feu doux et vérifie souvent."
   },
   "tip": "Avec un thermomètre, le cœur du poisson doit atteindre 70 °C (Santé Canada)."
  },
  {
   "phase": "Cuisson",
   "title": "Ajuste la sauce",
   "text": "La sauce doit être réduite et épaisse. S'il y en a trop, verse-la délicatement dans une petite casserole, fais-la réduire, puis reverse-la sur le poisson. Goûte et ajoute du sel seulement si besoin.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Sers dans le tajine",
   "text": "Sers bien chaud ou tiède, directement dans le tajine posé au centre de la table. Chacun mange de son côté, avec du pain marocain.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Range vite les restes",
   "text": "Ne laisse pas le tajine plus de 2 h à température ambiante, ni plus d'1 h s'il fait plus de 32 °C. Mets les restes dans une boîte fermée au réfrigérateur et mange-les dans les 3 jours. Réchauffe-les à couvert jusqu'à ce que la vapeur s'échappe et que ce soit bien chaud à cœur (74 °C).",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Protège le fond : Choumicha tapisse le tajine de tiges de coriandre ou de brochettes en bois, Bladi pose des branches de coriandre en quadrillage, Lalla Moulati un peu de persil et de légumes, et Taste of Maroc des bâtonnets de céleri ou de petites brochettes. Rien ne touche le fond, rien n'attache.",
   "source": "Choumicha ; Bladi.net ; Lalla Moulati ; Taste of Maroc (Christine Benlafquih)"
  },
  {
   "text": "Les carottes forment le premier étage du lit, sous les pommes de terre ; chez Cooking with Alia et Lalla Moulati, elles sont posées directement au fond du tajine.",
   "source": "Taste of Maroc (Christine Benlafquih) ; Cooking with Alia ; Lalla Moulati"
  },
  {
   "text": "Moitié-moitié : une moitié de la chermoula marine le poisson, l'autre parfume les légumes. Mets-la de côté avant de toucher le poisson cru.",
   "source": "Taste of Maroc (Christine Benlafquih) ; Choumicha ; My Moroccan Food (Nargisse Benkabbou) ; Lalla Moulati"
  },
  {
   "text": "La meilleure chermoula se fait au mortier : pile d'abord l'ail avec le sel, puis ajoute les herbes bien hachées et les épices.",
   "source": "Taste of Maroc (Nada Kiffa) ; Bladi.net"
  },
  {
   "text": "Pour le poisson, on aime une chermoula bien citronnée. Choumicha, elle, met du vinaigre.",
   "source": "Taste of Maroc (Nada Kiffa) ; Choumicha"
  },
  {
   "text": "Coupe les pommes de terre finement (0,5 cm) : trop épaisses, elles demandent plus de cuisson et le poisson sèche avant qu'elles soient tendres.",
   "source": "My Moroccan Food (Nargisse Benkabbou) ; Taste of Maroc (Christine Benlafquih)"
  },
  {
   "text": "Au Maroc, on prend un poisson ferme et épais : maigre, loup, dorade ou pageot, congre. Les sardines ou les merlans entiers conviennent aussi. Le congre est gras mais a peu d'arêtes, et il rend de l'eau en cuisant : avec lui, tu peux te passer d'eau.",
   "source": "Taste of Maroc (Christine Benlafquih) ; Bladi.net ; Choumicha"
  },
  {
   "text": "Avec des filets fins ou de petits poissons, fais d'abord cuire les légumes à moitié, puis pose le poisson dessus pour finir la cuisson.",
   "source": "Taste of Maroc (Christine Benlafquih, réponse à une lectrice) ; My Moroccan Food (version rapide)"
  },
  {
   "text": "Pour une cuisson courte, Choumicha met de petites pommes de terre déjà cuites à l'eau ; Akhbarona les fait légèrement blanchir avant de les mettre sous le poisson.",
   "source": "Choumicha ; Akhbarona"
  },
  {
   "text": "Le citron confit sale beaucoup : s'il cuit dès le début, ne sale pas les légumes. Taste of Maroc préfère souvent l'ajouter à la fin, quelques minutes, juste le temps de le chauffer.",
   "source": "Taste of Maroc (Christine Benlafquih)"
  },
  {
   "text": "Trop de sauce à la fin ? Verse-la dans une petite casserole, fais-la réduire, puis remets-la : la sauce doit être épaisse.",
   "source": "Taste of Maroc (Christine Benlafquih) ; Bladi.net"
  },
  {
   "text": "Au tajine en terre, hors gaz, le diffuseur est obligatoire, et la cuisson est plus longue qu'en sauteuse.",
   "source": "Taste of Maroc (Christine Benlafquih)"
  },
  {
   "text": "Ne cuis pas trop le poisson : sa chair doit rester juteuse. Adapte le temps à son poids.",
   "source": "Choumicha"
  },
  {
   "text": "Avec un poisson entier, enduis aussi l'intérieur de chermoula et incise le dos pour qu'elle pénètre.",
   "source": "Bladi.net ; Choumicha ; Akhbarona"
  }
 ],
 "mistakes": [
  "Cuisiner un poisson qui sent fort, aigre ou l'ammoniaque : il n'est plus frais, ne le mange pas (FDA).",
  "Faire mariner le poisson cru hors du réfrigérateur (Taste of Maroc ; Bladi.net ; My Moroccan Food ; MarocMama).",
  "Toucher le poisson cru avant d'avoir mis de côté la chermoula des légumes (Taste of Maroc).",
  "Couper les pommes de terre trop épaisses : le poisson sèche avant qu'elles soient cuites (My Moroccan Food).",
  "Oublier le lit de tiges ou de carottes au fond : les légumes attachent et brûlent (Taste of Maroc ; Choumicha ; Lalla Moulati).",
  "Saler les légumes alors que le citron confit cuit avec eux (Taste of Maroc).",
  "Poser un tajine en terre sur une plaque électrique ou vitrocéramique sans diffuseur (Taste of Maroc).",
  "Trop cuire le poisson : il devient sec (Choumicha).",
  "Laisser le plat plus de 2 h à température ambiante avant de le mettre au froid, ou plus d'1 h s'il fait plus de 32 °C (FDA ; ANSES)."
 ],
 "serving": "Bien chaud ou tiède (Bladi.net), directement dans le tajine posé au centre de la table : chacun mange de son côté avec du pain marocain, en plat unique ou avec des salades (Taste of Maroc). Cooking with Alia le sert avec du pain croustillant ; My Moroccan Food sert son tajine de sardines avec du pain ou du couscous.",
 "variants": [
  "Nord du Maroc : à Tanger et à Tétouan, beaucoup de plats de poisson cuisent dans une tagra, un plat ovale en terre poreuse non vernissée, fait par des potiers près de l'oued Laou, sur la braise ou au four du boulanger ; elle laisse l'humidité s'évaporer lentement et donne au poisson un goût de terre ; Paula Wolfert y superpose pommes de terre, carottes, tomates, poivron rouge et sardines, met la tagra dans le four, l'allume à 180 °C et cuit 1 h ; à la sortie, elle la pose sur du bois ou un torchon plié pour éviter qu'elle se fende, et laisse reposer 30 min. La plupart des tagras n'ont pas de couvercle : couvre-la de papier aluminium sans serrer (Paula Wolfert ; Taste of Maroc).",
  "Au four : poisson entier sur un lit de pommes de terre en fines rondelles, tomates, poivrons grillés et piments, environ 40 min à four moyen-chaud en arrosant à mi-cuisson (Bladi.net) ; Choumicha cuit un poisson de 700 g 25 min à 170 °C puis le laisse reposer 15 à 20 min dans le four éteint ; My Moroccan Food cuit ses sardines 30 à 35 min à 200 °C sous papier aluminium.",
  "Poisson entier farci de chermoula, posé sur des pommes de terre, des carottes et des tomates en rondelles, couvert de poivrons : la version traditionnelle décrite par Nargisse Benkabbou (My Moroccan Food).",
  "Tajine de poisson safrané : darnes de loup marinées 1 h dans une chermoula au safran, au smen et au poivre blanc, posées sur des branches de coriandre avec olives vertes et citron confit, sans légumes, 20 à 25 min sur le charbon (Bladi.net).",
  "Pageot aux olives m'slalla : oignons et tomates au fond, laurier, olives vertes m'slalla et écorce de citron confit, chermoula au vinaigre, 45 min au four à 180 °C ou sur le charbon (Choumicha).",
  "Tajine d'espadon : cubes d'espadon, carottes et chou en julienne, petites pommes de terre déjà cuites, tomates cerises et olives, 20 à 25 min à feu moyen (Choumicha).",
  "Darnes de congre farinées et dorées, puis mijotées avec oignons, poivron rouge, tomates, thym et laurier (Choumicha).",
  "Aux oignons et raisins secs : morceaux de congre avec beaucoup d'oignons émincés, raisins secs, safran, gingembre, curcuma et cannelle, 40 min à feu moyen (Cooking with Alia).",
  "Tajine de boulettes de sardines (kefta) en sauce tomate, fini avec citron confit et olives vertes (Cooking with Alia) ; Taste of Maroc le dit apprécié dans tout le Maroc, surtout sur la côte, où le poisson abonde.",
  "Lit d'oignons émincés au fond, qui caramélisent pendant la cuisson (Taste of Maroc ; Choumicha pour le pageot).",
  "Épices en plus : gingembre et curcuma sur les légumes, safran dans la chermoula (Taste of Maroc) ; harissa à la place du piment (Choumicha, Lalla Moulati, My Moroccan Food) ; une feuille de laurier (Cooking with Alia ; Choumicha) ; un peu de concentré de tomate (Cooking with Alia) ou de sauce tomate (Lalla Moulati) dans la chermoula.",
  "Chermoula au citron confit, cuite 5 min à feu doux avec herbes, ail, piment doux, cumin, vinaigre et huile ; elle se garde une semaine au frais en bocal fermé (Choumicha)."
 ],
 "sources": [
  {
   "name": "Taste of Maroc – Christine Benlafquih, Classic Moroccan Fish Tagine with Chermoula and Vegetables (mise à jour le 13/01/2021), copie archivée du 15/05/2026",
   "url": "https://web.archive.org/web/20260515221748/https://tasteofmaroc.com/moroccan-fish-tagine-with-chermoula-and-vegetables/",
   "used_for": "Recette de référence (6 portions) : poissons utilisés au Maroc, chermoula, moitié réservée aux légumes, marinade au frais, ordre des couches, bâtonnets et rondelles de 0,5 cm, fond protégé (oignons, céleri ou brochettes), eau, feu moyen-doux, diffuseur, environ 1 h de frémissement, sauce épaisse réduite à part, citron confit salé, congre, tagra du Nord, service dans le tajine avec du pain."
  },
  {
   "name": "Taste of Maroc – Nada Kiffa, Chermoula Recipe – Moroccan Marinade of Herbs and Spices (mise à jour le 17/02/2020), copie archivée du 27/08/2026",
   "url": "https://web.archive.org/web/20260827184612/https://tasteofmaroc.com/moroccan-chermoula-recipe/",
   "used_for": "Composition de la chermoula, chermoula citronnée pour le poisson, méthode au mortier (ail et sel d'abord, herbes bien hachées), conservation au frais."
  },
  {
   "name": "Taste of Maroc – Christine Benlafquih, Moroccan Sardine Balls Recipe – Fish Meatballs in Tomato Sauce, copie archivée du 11/05/2026",
   "url": "https://web.archive.org/web/20260511111912/https://tasteofmaroc.com/moroccan-sardine-fish-balls-in-tomato-sauce/",
   "used_for": "Variante : boulettes de sardines en sauce tomate, appréciées dans tout le Maroc et surtout sur la côte."
  },
  {
   "name": "Choumicha – Tajine d'espadon aux légumes (4 personnes), copie archivée du 11/01/2016",
   "url": "https://web.archive.org/web/20160111013358/http://www.choumicha.ma:80/recette/539-tajine-d-espadon-aux-legumes.html",
   "used_for": "Fond tapissé de tiges de coriandre ou de brochettes en bois, moitié de la chermoula pour le poisson et moitié pour les légumes, 500 g de poisson pour 4, pommes de terre déjà cuites, olives, 20 à 25 min à feu moyen."
  },
  {
   "name": "Choumicha – Pageot aux olives vertes M'slalla (4 personnes), copie archivée du 08/07/2015",
   "url": "https://web.archive.org/web/20150708192513/http://www.choumicha.ma:80/recette/191-pageot-aux-olives-vertes-m-sllala.html",
   "used_for": "Chermoula de poisson chiffrée (cumin, paprika, ail, herbes, vinaigre, huile) pour 1 kg, marinade d'une demi-heure, oignons au fond, laurier, citron confit et olives dès le départ, four à 180 °C 45 min ou charbon."
  },
  {
   "name": "Choumicha – Poisson au four M'chermel (4 personnes), copie archivée du 11/01/2016",
   "url": "https://web.archive.org/web/20160111150047/http://www.choumicha.ma:80/recette/405-poisson-au-four-m-chermel.html",
   "used_for": "Poisson entier de 700 g pour 4, botte de coriandre effeuillée, chermoula à l'intérieur du poisson, pommes de terre cuites, olives, 25 min à 170 °C puis repos, ne pas trop cuire le poisson."
  },
  {
   "name": "Choumicha – Friture de poissons m'chermel (6 personnes), copie archivée du 27/07/2015",
   "url": "https://web.archive.org/web/20150727015824/http://www.choumicha.ma:80/recette/143-friture-de-poissons-m-chermel.html",
   "used_for": "Proportions de chermoula pour 1 kg de poisson (persil, coriandre, ail, piment doux, piment fort, cumin, sel, vinaigre)."
  },
  {
   "name": "Choumicha – Chermoula au citron confit, copie archivée du 17/01/2017",
   "url": "https://web.archive.org/web/20170117031536/http://www.choumicha.ma/recette/1461-chermoula-au-citron-confit.html",
   "used_for": "Variante de chermoula au citron confit, cuite 5 min, conservation une semaine au frais."
  },
  {
   "name": "Choumicha – Tajine de darnes de congre (4 personnes), copie archivée du 23/01/2013",
   "url": "https://web.archive.org/web/20130123020920/http://www.choumicha.ma:80/recettes/details/241/tajine-de-darnes-de-congre-.html",
   "used_for": "Congre en darnes ; variante farinée et dorée puis mijotée aux tomates, poivron, thym et laurier."
  },
  {
   "name": "Bladi.net – Tajine de poisson safrané",
   "url": "https://www.bladi.net/recettes/tajine-de-poisson-safrane.html",
   "used_for": "Loup en darnes, marinade d'1 h, branches de coriandre en quadrillage au fond, olives vertes et citron confit dès le départ, 20 à 25 min sur le charbon, service chaud ou tiède."
  },
  {
   "name": "Bladi.net – Tajine de Poissons au four",
   "url": "https://www.bladi.net/recettes/tajine-de-poissons-au-four.html",
   "used_for": "Poissons (alose, loup, daurade, pageot), dos incisé, marinade de 2 h, pommes de terre en fines rondelles au fond, poivrons, piments verts, citron, 40 min au four, sauce réduite à part."
  },
  {
   "name": "Bladi.net – Chermoula pour le poisson",
   "url": "https://www.bladi.net/recettes/chermoula-pour-le-poisson.html",
   "used_for": "Chermoula pilée au mortier (coriandre, gros sel, ail), piment doux, piment fort, cumin, citron, eau, huile d'olive ; au moins une demi-heure au frais ; cuisson possible en tajine."
  },
  {
   "name": "Cooking with Alia – 439, Fish Tagine With Vegetables / طاجين السمك بالخضر",
   "url": "https://www.cookingwithalia.com/439-fish-tagine-with-vegetables/",
   "used_for": "Carottes au fond, tomates, chermoula sur les légumes, poisson dessus, 20 min à feu moyen à couvert puis olives et laurier 10 min (30 min en tout), service avec du pain."
  },
  {
   "name": "Cooking with Alia – 855, Chermoula / الشرمولة",
   "url": "https://www.cookingwithalia.com/855-chermoula-%d8%a7%d9%84%d8%b4%d8%b1%d9%85%d9%88%d9%84%d8%a9/",
   "used_for": "Recoupement de la chermoula (coriandre, ail, paprika, cumin, piment, sel, huile d'olive, citron, eau ou eau safranée), conservation 5 jours au frais."
  },
  {
   "name": "Cooking with Alia – 448, Fish Tagine with Onions and Raisins / طاجين سمك بالبصل والزبيب",
   "url": "https://www.cookingwithalia.com/448-fish-tagine-onions-raisins/",
   "used_for": "Variante au congre, aux oignons et aux raisins secs, 40 min à feu moyen."
  },
  {
   "name": "Cooking with Alia – 447, Tagine Sardine Kefta / طاجين كفتة السردين",
   "url": "https://www.cookingwithalia.com/447-tagine-sardine-kefta/",
   "used_for": "Variante aux boulettes de sardines en sauce tomate, citron confit et olives vertes en fin de cuisson."
  },
  {
   "name": "My Moroccan Food – Nargisse Benkabbou, Chermoula – Moroccan Condiment (20/05/2015)",
   "url": "https://www.mymoroccanfood.com/home/chermoula-moroccan-marinade",
   "used_for": "Chermoula (huile d'olive, ail, coriandre, citron, paprika, cumin, sel, cayenne et safran facultatifs) ; persil possible à la place de la coriandre ; 5 jours au frais."
  },
  {
   "name": "My Moroccan Food – Nargisse Benkabbou, Oven Baked Fish with Chermoula and Preserved Lemon – Moroccan Fish Tagine (20/05/2015)",
   "url": "https://www.mymoroccanfood.com/home/oven-baked-fish-with-chermoula-and-preserved-lemon-moroccan-fish-tagine",
   "used_for": "Description de la version traditionnelle (poisson entier farci de chermoula sur pommes de terre, carottes et tomates, poivrons dessus), 4 filets de 200 g pour 4, un poivron rouge pour la douceur."
  },
  {
   "name": "My Moroccan Food – Nargisse Benkabbou, Sardine Tagine (17/08/2016)",
   "url": "https://www.mymoroccanfood.com/home/sardine-tagine-with-charmoula",
   "used_for": "Moitié de la chermoula pour le poisson, légumes en rondelles, rondelles de pommes de terre fines sinon le poisson sèche, 30 à 35 min à 200 °C, service avec pain ou couscous."
  },
  {
   "name": "My Moroccan Food – Nargisse Benkabbou, Quick Fish Tagine with Chermoula (22/11/2016)",
   "url": "https://www.mymoroccanfood.com/home/quick-fish-tagine-with-chermoula",
   "used_for": "Grand poisson entier (dorade) dans la version traditionnelle ; légumes précuits avant des filets fins ; harissa à la place du cayenne."
  },
  {
   "name": "Lalla Moulati – طاجين الحوت (10/11/2014)",
   "url": "https://www.lalamoulati.net/amp/3512.html",
   "used_for": "Nom « طاجين الحوت », rondelles de carottes (خيزو) au fond sous le poisson, chermoula au citron et aux huiles, sauce tomate, poivrons et olives."
  },
  {
   "name": "Lalla Moulati – طاجين الحوت سهل ولذيذ بزاف بالصور (29/07/2015 ; même texte le 03/10/2016, article 48650)",
   "url": "https://www.lalamoulati.net/amp/23772.html",
   "used_for": "Moitié de la chermoula pour le poisson, persil et légumes au fond pour que rien n'attache, carottes puis pommes de terre, 30 min à feu doux à couvert, olives à la fin."
  },
  {
   "name": "Lalla Moulati – طاجين الحوت بالشرمولة (08/09/2023)",
   "url": "https://www.lalamoulati.net/amp/350248.html",
   "used_for": "Nom « طاجين الحوت بالشرمولة », poisson lavé et séché, chermoula chiffrée pour 1 kg (ail, cumin, paprika, sel, poivre), un peu d'eau, version au four 45 min."
  },
  {
   "name": "Akhbarona (أخبارنا المغربية) – سمكة معمرة على الطريقة المغربية (11/09/2019)",
   "url": "https://www.akhbarona.com/woman/280112.html",
   "used_for": "« شرمولة الحوت », poisson frotté de chermoula dedans et dehors, pommes de terre en rondelles légèrement blanchies sous le poisson, citron confit et olives rouges."
  },
  {
   "name": "Paula Wolfert, The Food of Morocco (Bloomsbury, 2012) – Tagra of fresh sardines with pepper oil, sur lovefood.com",
   "url": "https://www.lovefood.com/recipes/59870/tagra-of-fresh-sardines-with-pepper-oil-recipe",
   "used_for": "Tagra : plat en terre du nord du Maroc, cuisson au four du boulanger ; couches de légumes et de sardines, 1 h à 180 °C, précautions pour ne pas fendre la terre."
  },
  {
   "name": "Paula Wolfert, Mediterranean Clay Pot Cooking – Tangier-Style Fresh Sardines with Charmoula, sur ckbk",
   "url": "https://app.ckbk.com/recipe/medi76331c03s001r002/tangier-style-fresh-sardines-with-charmoula",
   "used_for": "Tagra de Tanger et Tétouan : plat ovale en terre poreuse non vernissée, fait près de l'oued Laou, pour cuire le poisson sur la braise ou au four du boulanger ; évaporation lente et goût de terre (introduction seulement, la recette n'est pas visible)."
  },
  {
   "name": "FDA (États-Unis) – Selecting and Serving Fresh and Frozen Seafood Safely (contenu à jour au 05/03/2024)",
   "url": "https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely",
   "used_for": "Signes de fraîcheur, conservation au froid et délai de 2 jours, lavage des mains et des ustensiles, cuisson (chair qui se détache à la fourchette, 145 °F), odeurs à rejeter, pas plus de 2 h hors du réfrigérateur."
  },
  {
   "name": "Santé Canada – Températures sécuritaires de cuisson interne (publiée le 04/06/2024)",
   "url": "https://www.canada.ca/fr/sante-canada/services/conseils-generaux-salubrite/temperatures-securitaires-cuisson-interne.html",
   "used_for": "Poisson : 70 °C à cœur ; restes réchauffés : 74 °C."
  },
  {
   "name": "ANSES – Comment éviter les toxi-infections alimentaires : les bonnes pratiques (08/04/2020)",
   "url": "https://www.anses.fr/fr/actualite/eviter-toxi-infections-alimentaires-confinement-bonnes-pratiques",
   "used_for": "Poisson dans la zone la plus froide du réfrigérateur (4 °C), planche réservée au poisson cru, restes : pas plus de 2 h à température ambiante, boîte fermée, à manger dans les 3 jours, réchauffage couvert jusqu'à la vapeur."
  },
  {
   "name": "MarocMama – Amanda Mouttaki (Marrakech), « Casablanca Fish Tajine », 14/04/2013, mise à jour le 19/06/2020",
   "url": "https://marocmama.com/%d8%a7%d9%84%d8%af%d8%a7%d8%b1-%d8%a7%d9%84%d8%a8%d9%8a%d8%b6%d8%a7%d8%a1-fish-tajine-for-sundaysupper/",
   "used_for": "Contre-vérification : Recette de tajine de poisson de Casablanca pour 4 (1 lb, soit 454 g, de poisson blanc épais) : chermoula au mortier (persil, ail et sel pilés d'abord, puis cumin, paprika et jus de citron, détendue d'un peu d'eau) ; poisson enrobé puis mis au réfrigérateur « 30 minutes - 2 hours » ; carottes rangées au fond, puis poisson, tomates en rondelles et poivron vert ; ¼ de tasse d'eau versée sur les bords ; tajine en terre non vernissé à feu doux, 20 à 30 min puis 20 min, en vérifiant le niveau d'eau ; cuit quand le poisson s'effeuille, que la sauce est épaisse et que les légumes sont tendres ; une cocotte à fond épais convient, avec un peu plus de liquide ; servi avec du pain et des salades marocaines."
  },
  {
   "name": "Femmes du Maroc – « Tajine de lotte à la chermoula », recette du chef Hachem Oulhous (Selman Marrakech), 08/05/2020",
   "url": "https://femmesdumaroc.com/archives/tajine-de-lotte-a-la-chermoula",
   "used_for": "Contre-vérification : Chermoula très citronnée pour le poisson (jus de 3 citrons pour 800 g de lotte, avec persil, ail, cumin, gingembre, curcuma, huile d'olive et un peu d'eau) ; poisson mariné « quelques heures » ; si le poisson est cuit avant que la sauce ait réduit, on fait réduire la sauce à part."
  },
  {
   "name": "Femmes du Maroc – « Tajine de loup bar et gambas », recette du chef Marwan (Dar El Kaid, Casablanca), 06/03/2026",
   "url": "https://femmesdumaroc.com/plaisirs/food-drink/tajine-de-loup-bar-et-gambas",
   "used_for": "Contre-vérification : Le loup se cuisine en tajine au Maroc ; chermoula citronnée (3 citrons pour 600 g de loup, coriandre, persil, cumin, ail, un demi-verre d'eau) ; cuisson à couvert à feu doux."
  },
  {
   "name": "Lalla Moulati – « هاكيفاش تحضري طاجين الحوت بطريقة ناجحة » (09/11/2023)",
   "url": "https://www.lalamoulati.net/amp/387122.html",
   "used_for": "Contre-vérification : Moitié de la chermoula (herbes, ail, citron, paprika, cumin) étalée sur le poisson ; morceaux de carotte rangés au fond du tajine, puis tomates en rondelles et poivrons, poisson dessus ; cuisson à feu doux ; servi chaud, décoré d'olives vertes et de rondelles de citron."
  },
  {
   "name": "Bladi.net – « Poisson au four » (22/09/2005)",
   "url": "https://www.bladi.net/recettes/poisson-au-four.html",
   "used_for": "Contre-vérification : Le poisson (des darnes de saumon) est enduit de la moitié de la chermoula (persil, ail, cumin, paprika, jus de citron, huile d'olive) ; pommes de terre et carottes précuites 10 min à l'eau salée puis posées en rondelles sous le poisson ; le reste de chermoula, délayé dans de l'eau, arrose le plat."
  },
  {
   "name": "Choumicha – « Chorba bel hout », copie archivée du 20/08/2017",
   "url": "https://web.archive.org/web/20170820233602/http://www.choumicha.ma/recette/157-chorba-bel-hout.html",
   "used_for": "Contre-vérification : Graphie marocaine en lettres latines du mot « hout » (الحوت, le poisson) et de « bel » (بال) dans un titre de recette, avec les mots-clés « Poisson, Hout, bel »."
  }
 ],
 "discrepancies": [
  "Méthode : quand les sources divergent, une valeur par autrice ou auteur (médiane de ses recettes), puis la médiane de ces valeurs ; calculs refaits avec python3.",
  "Poisson : 165 g par personne (Taste of Maroc, 35 oz ≈ 992 g pour 6), 171 g (médiane des quatre recettes de Choumicha, de 125 à 250 g), 225 g (My Moroccan Food). Médiane 171 g, soit 683 g pour 4 : retenu 700 g.",
  "Quantités de chermoula, rapportées à 1 kg de poisson puis à 700 g : ail, médiane 3,5 gousses, arrondie à 3 (Taste of Maroc et Choumicha donnent 2,8) ; cumin 1,57 → 1½ c. à c. ; paprika 1,41 → 1½ c. à c. ; piment fort 0,19 → ¼ c. à c., facultatif ; sel 1,05 → 1 c. à c. ; jus de citron ou vinaigre 2,8 → 3 c. à s. ; huile d'olive en tout 4,7 → 5 c. à s. : 3 dans la chermoula et 2 au fond du tajine, comme Taste of Maroc et Lalla Moulati (article 3512) sur le feu ; au four, Choumicha et Bladi versent cette huile sur le dessus. Eau versée dans le tajine : 3 c. à s. (contre-vérification : médiane 3,3 c. à s. pour 700 g ; Taste of Maroc verse ¼ à ½ tasse pour 992 g, soit 2,8 à 5,6 c. à s.).",
  "Herbes : de 2 à 6 c. à s. pour 1 kg chez Choumicha (tajines), Cooking with Alia et Lalla Moulati, contre une à deux bottes chez Taste of Maroc, My Moroccan Food, Bladi et Choumicha (friture, poisson au four). Médiane 0,78 botte par kg (une grosse botte = 2 tasses, soit 32 c. à s., selon Taste of Maroc), d'où ½ botte pour 700 g. Coriandre seule chez Taste of Maroc, Bladi et My Moroccan Food ; coriandre et persil chez Choumicha, Cooking with Alia et Lalla Moulati : retenu la coriandre.",
  "Acide : citron chez Taste of Maroc, Bladi, Cooking with Alia, My Moroccan Food et Lalla Moulati ; vinaigre chez Choumicha. Retenu le citron (majorité).",
  "Marinade : 10 min (Cooking with Alia), 30 min (Choumicha ; « au moins » chez Bladi), 1 h (Bladi, tajine safrané), 2 h (Bladi, au four) et « au moins 2 h ou une nuit » (Taste of Maroc). Médiane 45 min, durée qu'aucune source ne donne : retenu « au moins 30 min, jusqu'à 2 h », deux bornes données chacune par deux sources ; le minuteur sonne à 30 min.",
  "Fond du tajine : oignons (Taste of Maroc ; Choumicha pour le pageot), tiges de coriandre ou brochettes (Choumicha), branches de coriandre (Bladi), céleri ou brochettes (Taste of Maroc), persil et légumes (Lalla Moulati), carottes (Cooking with Alia ; Lalla Moulati). Retenu : tiges de coriandre, puis carottes ; les oignons passent en variante.",
  "Pommes de terre crues en rondelles (Taste of Maroc, Cooking with Alia, Lalla Moulati, My Moroccan Food, Bladi) ou déjà cuites (Choumicha ; légèrement blanchies chez Akhbarona). Retenu : crues, en rondelles de 0,5 cm (majorité) ; la précuisson est donnée en astuce.",
  "Légumes pour 4 (médianes par source) : pommes de terre 2,47 → 2 grosses (environ 400 g, comme My Moroccan Food) ; carottes 3,15 → 3 ; tomates 2,5 → 2 grosses (comme Choumicha) ; poivrons 2,1 → 2 ; citron confit 0,58 → ½ ; olives 92 g → 90 g (Choumicha 50 à 100 g, Bladi 150 g pour 850 g de loup).",
  "Moment du citron confit : dès le départ (Choumicha, Bladi, My Moroccan Food) ou à la fin (Taste of Maroc). Retenu dès le départ (majorité), sans saler les légumes, comme Taste of Maroc le demande dans ce cas.",
  "Moment des olives : dès le départ (Taste of Maroc, Choumicha, Bladi) ou dans les dernières minutes (Cooking with Alia, Lalla Moulati). Retenu dès le départ. Couleur : vertes (Choumicha, Bladi, Cooking with Alia), rouges ou vertes (Taste of Maroc), rouges (Akhbarona) : « vertes ou rouges ».",
  "Cuisson sur le feu avec légumes crus : 30 min à feu moyen (Cooking with Alia), 30 min à feu doux puis quelques minutes (Lalla Moulati), environ 1 h de frémissement à feu moyen-doux après une montée lente au tajine en terre (Taste of Maroc, 1 h 30 sur sa fiche). Médiane 35 min (temps de cuisson affiché) ; minuteur à 30 min puis vérification, avec la durée de Taste of Maroc pour le tajine en terre. Choumicha et Bladi (20 à 25 min) n'ont pas de pommes de terre crues.",
  "Feu : moyen-doux à moyen (Taste of Maroc), moyen (Cooking with Alia, Choumicha), doux (Lalla Moulati) : retenu moyen-doux.",
  "Épices facultatives non retenues dans la recette de base, car absentes de la majorité des sources : gingembre (Taste of Maroc, Cooking with Alia, Lalla Moulati), curcuma (Taste of Maroc), safran (Taste of Maroc et My Moroccan Food en option, Lalla Moulati, Bladi), concentré ou sauce tomate (Cooking with Alia, Lalla Moulati), harissa (Choumicha, Lalla Moulati, My Moroccan Food), laurier (Cooking with Alia, Choumicha). Elles sont en variantes.",
  "Température à cœur du poisson : 145 °F, soit 62,8 °C (FDA), contre 70 °C (Santé Canada). Retenu 70 °C, la valeur la plus prudente, d'une source officielle en français.",
  "Restes : à manger dans les 3 jours (ANSES) ; Santé Canada donne 2 à 4 jours, mais pour la volaille. Retenu 3 jours (ANSES). Réchauffage : jusqu'à la vapeur (ANSES) et 74 °C (Santé Canada).",
  "Préparation : 30 min (Taste of Maroc) et 15 à 35 min selon les recettes de Choumicha (médiane 25 min). Retenu 30 min.",
  "Conversions faites avec python3 : 35 oz = 992 g ; ⅓ tasse = 79 ml ≈ 5,3 c. à s. ; ¼ à ½ tasse = 59 à 118 ml ; ¼ de pouce = 0,64 cm, que Taste of Maroc écrit lui-même 0,5 cm ; 145 °F = 62,8 °C ; 40 °F = 4,4 °C ; 165 °F = 73,9 °C ; 158 °F = 70 °C.",
  "Contre-vérifiée le 7 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 8 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Variante propre à la côte atlantique (Safi, Essaouira, El Jadida, Agadir) : aucune des sources lues ne la décrit. Seul Taste of Maroc dit que les boulettes de sardines sont surtout appréciées sur la côte.",
  "Tanger et Tétouan pour la tagra : une seule autrice les cite (Paula Wolfert, Mediterranean Clay Pot Cooking) ; Taste of Maroc parle seulement du nord du Maroc.",
  "Choumicha, vidéo « طاجين سمك الذئب مع شرمولة الفول والقوق » (tajine de loup à la chermoula, aux fèves et aux artichauts) : seule la page vidéo archivée, avec le titre, a été trouvée ; la recette n'a pas pu être lue.",
  "Bladi.net, « Tajine de lotte aux oignons et raisins secs » : titre vu dans les recettes similaires, recette non lue.",
  "Noonpresse, « طاجين الحوت والخضر » : la page ne s'affiche qu'avec JavaScript (redirection), non lue.",
  "FSIS (USDA) et foodsafety.gov : accès refusé (erreur 403), non consultés et non contournés ; remplacés par la FDA, Santé Canada et l'ANSES.",
  "Santé Canada (canada.ca) ne répondait pas à la lecture directe : la page a été lue deux fois avec l'outil de lecture web, avec les mêmes valeurs (poisson 70 °C, restes 74 °C).",
  "Durée exacte au tajine en terre avec des rondelles de 0,5 cm : une seule source la donne (Taste of Maroc, environ 1 h de frémissement) ; elle dépend du feu et du tajine.",
  "Poids d'une « botte » de coriandre : variable ; environ 120 g selon Cooking with Alia, et une grosse botte donne environ 2 tasses hachées selon Taste of Maroc.",
  "« Tajine l'hout bel chermoula » : simple transcription en lettres latines du titre arabe de Lalla Moulati (طاجين الحوت بالشرمولة) ; aucune source ne donne cette graphie.",
  "Le quota de recherches web a été épuisé pendant la mission. Avant cela, les recherches sur Femmes du Maroc, Le360, Hespress, Chhiwat et Morocco World News n'avaient trouvé aucune recette de tajine de poisson ; ces sites n'ont pas pu être fouillés davantage.",
  "Choumicha (choumicha.ma) est hors ligne et tasteofmaroc.com refuse les robots : leurs pages ont été lues sur des copies archivées (Wayback Machine, 2013 à 2026) ; leur contenu actuel n'a pas pu être revérifié.",
  "Paula Wolfert : livres originaux non consultés ; seuls la recette publiée sur lovefood.com et l'extrait de ckbk ont été lus.",
  "Le texte des articles 23772 et 48650 de Lalla Moulati est identique, comme celui des articles 350248 et 204530 : ils comptent pour une seule source."
 ],
 "cuisine": "Marocaine",
 "rayon": "Poissons",
 "rayons": [
  "Poissons",
  "Tajines"
 ],
 "pairs": [
  "khobz",
  "zaalouk"
 ],
 "img_alt": "Tajine de poisson aux pommes de terre et aux olives vertes, en sauce tomate",
 "img": "img/tajine-poisson.jpg",
 "photo": {
  "author": "Girl Interrupted Eating",
  "license": "CC BY 2.0",
  "license_url": "https://creativecommons.org/licenses/by/2.0/",
  "page": "https://www.flickr.com/photos/35468144810@N01/8054109056",
  "modified": "non modifiée"
 }
});
