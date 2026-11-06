/* Recette : Msemen, crêpes feuilletées carrées. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "msemen",
 "title": "Msemen, crêpes feuilletées carrées",
 "darija": "msemen (aussi rghaïf)",
 "arabic": "مسمن",
 "tagline": "Des carrés feuilletés à la main, légèrement croustillants dehors et moelleux dedans, à tremper tout chauds dans le miel et le beurre fondu.",
 "category": "Pain et crêpes",
 "occasion": "Petit-déjeuner, goûter avec le thé, ftour du ramadan",
 "region": "Maroc (aussi en Algérie et en Tunisie)",
 "servings": 12,
 "servings_label": "msemen",
 "time": {
  "prep": 45,
  "cook": 60,
  "rest": 30
 },
 "difficulty": "Moyen",
 "equipment": [
  "Un grand saladier",
  "Une balance de cuisine",
  "Un grand plan de travail lisse (granit, inox) ou un grand plateau",
  "Un plateau ou une plaque, huilé, pour les pâtons et les carrés",
  "Trois bols : huile, beurre-huile, semoule",
  "Un pinceau",
  "Du film alimentaire",
  "Une grande poêle à fond épais (fonte) ou antiadhésive, ou une plaque de cuisson",
  "Une grille"
 ],
 "ingredients": [
  {
   "group": "Pâte",
   "items": [
    {
     "id": "farine",
     "q": 500,
     "u": "g",
     "name": "de farine blanche (T45 ou T55)",
     "canon": "farine"
    },
    {
     "id": "semoule",
     "q": 100,
     "u": "g",
     "name": "de semoule fine de blé dur",
     "note": "ou semoule extra-fine, ou farine de blé dur",
     "canon": "semoule"
    },
    {
     "id": "sel",
     "q": 1.5,
     "u": "c. à c.",
     "name": "de sel fin",
     "note": "1 à 2 c. à c. selon les sources",
     "canon": "sel"
    },
    {
     "id": "eau",
     "q": 400,
     "u": "ml",
     "name": "d'eau tiède",
     "note": "à verser petit à petit, ajuste selon ta farine",
     "canon": "eau"
    }
   ]
  },
  {
   "group": "Pour feuilleter",
   "items": [
    {
     "id": "huile-faconnage",
     "q": 250,
     "u": "ml",
     "name": "d'huile neutre (tournesol ou colza), pour le plan de travail, les mains et les pâtons",
     "note": "environ ; la pâte ne l'absorbe pas, il en restera",
     "canon": "huile"
    },
    {
     "id": "beurre",
     "q": 85,
     "u": "g",
     "name": "de beurre, fondu",
     "note": "doux ou demi-sel",
     "canon": "beurre"
    },
    {
     "id": "huile-melange",
     "q": 6,
     "u": "c. à s.",
     "name": "d'huile neutre, à mélanger au beurre fondu",
     "canon": "huile"
    },
    {
     "id": "semoule-pliage",
     "q": 4,
     "u": "c. à s.",
     "name": "de semoule fine, à saupoudrer entre les couches",
     "note": "environ 1 c. à c. par msemen",
     "canon": "semoule"
    }
   ]
  },
  {
   "group": "Pour servir",
   "items": [
    {
     "id": "miel",
     "q": null,
     "u": "",
     "name": "Miel, autant que de beurre",
     "note": "à parts égales avec le beurre",
     "canon": "miel"
    },
    {
     "id": "beurre-service",
     "q": null,
     "u": "",
     "name": "Beurre doux, autant que de miel",
     "canon": "beurre"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Mélanger la pâte",
   "text": "Dans un grand saladier, mélange {{farine}} de farine, {{semoule}} de semoule fine et {{sel}} de sel. Verse {{eau}} d'eau tiède petit à petit, en mélangeant à la main, jusqu'à former une boule. Si la pâte colle, ajoute un peu de farine ; si elle est sèche, un peu d'eau.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Pétrir longtemps",
   "text": "Pétris pendant 15 minutes : écrase la pâte avec la paume ou le poing, replie-la, recommence. Elle est prête quand elle est lisse, souple et élastique, et ne colle plus aux doigts. Ne raccourcis pas : c'est ce pétrissage qui permet d'étaler la pâte très fin.",
   "timer": {
    "min": 15,
    "label": "Pétrissage",
    "done": "Touche la pâte : si elle n'est pas encore lisse, souple et élastique, pétris encore quelques minutes."
   }
  },
  {
   "phase": "Préparation",
   "title": "Former les pâtons",
   "text": "Huile tes mains et un grand plateau. Partage la pâte en boules égales d'environ 85 g, une par msemen, bien lisses sur le dessus. Roule-les dans l'huile, pose-les sur le plateau sans qu'elles se touchent, couvre de film et laisse reposer 15 minutes.",
   "timer": {
    "min": 15,
    "label": "Repos des pâtons",
    "done": "Les pâtons sont détendus : tu peux commencer à étaler."
   }
  },
  {
   "phase": "Préparation",
   "title": "Préparer ton poste",
   "text": "Pendant le repos, mélange {{beurre}} de beurre fondu avec {{huile-melange}} d'huile. Mets à portée de main ce mélange, un bol avec {{huile-faconnage}} d'huile et un bol avec {{semoule-pliage}} de semoule. Huile largement ton plan de travail et tes mains.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Étaler très fin",
   "text": "Trempe un pâton dans l'huile et pose-le au centre du plan de travail. Étire-le du centre vers les bords, du bout des doigts, par petits gestes rapides, jusqu'à un disque d'environ 25 cm, si fin qu'on voit presque le plan de travail à travers. Quelques petits trous ne sont pas graves. Va vite, sinon la pâte sèche.",
   "timer": null,
   "img": {
    "src": "img/msemen-etaler.jpg",
    "alt": "Mains qui étirent la pâte à msemen sur un plan huilé",
    "credit": "Photo de l'étape « Étaler très fin » : Mounir Neddi, Wikimedia Commons, licence CC BY-SA 4.0 (réduite)."
   }
  },
  {
   "phase": "Préparation",
   "title": "Premier pliage",
   "text": "Badigeonne tout le disque de mélange beurre-huile et saupoudre-le légèrement de semoule. Rabats un bord jusqu'au centre, puis le bord opposé par-dessus : tu obtiens une longue bande.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Plier en carré",
   "text": "Badigeonne la bande de beurre-huile et saupoudre-la de semoule. Rabats une extrémité jusqu'au centre, puis l'autre par-dessus : tu obtiens un carré d'environ 8 cm. Pose-le sur le plateau huilé et recommence avec les autres pâtons, en retenant l'ordre.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Laisser reposer les carrés",
   "text": "Couvre les carrés de film et laisse-les se détendre au moins 15 minutes. S'ils résistent quand tu les aplatis, laisse-les reposer encore un peu au lieu de forcer.",
   "timer": {
    "min": 15,
    "label": "Repos des carrés",
    "done": "Les carrés ont reposé : fais chauffer la poêle."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Chauffer la poêle",
   "text": "Fais chauffer une grande poêle à fond épais à feu moyen. Elle est prête quand une goutte d'eau grésille et s'évapore presque aussitôt. Huile-la légèrement, au pinceau ou avec du papier absorbant.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Aplatir au double",
   "text": "Prends le premier carré plié et pose-le sur le plan de travail huilé. Mains huilées, tapote-le fermement jusqu'à environ 18 cm de côté, un peu plus du double du carré plié, en gardant la forme carrée. Ne le travaille pas trop, sinon les couches se soudent.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Cuire en retournant",
   "text": "Dépose-le dans la poêle chaude et retourne-le plusieurs fois, environ 5 minutes en tout. Il est prêt quand il est doré et croustillant dehors, et bien cuit au centre. S'il colore trop vite, baisse un peu le feu : sinon le centre reste cru. Si ta poêle est grande, cuis-en deux à la fois.",
   "timer": {
    "min": 5,
    "label": "Cuisson d'un msemen",
    "done": "Doré et croustillant des deux côtés ? Sors-le sur la grille."
   },
   "img": {
    "src": "img/msemen-cuisson.jpg",
    "alt": "Msemen en train de cuire sur une grande plaque",
    "credit": "Photo de l'étape « Cuire en retournant » : Popo le Chien, Wikimedia Commons, licence CC0 (réduite)."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Séparer les couches",
   "text": "Pose le msemen sur une grille. Après 1 à 2 minutes, prends-le par deux bords opposés et fais-le plier d'avant en arrière quelques secondes, comme une balançoire : les couches se décollent. Continue avec les autres carrés, dans l'ordre où tu les as pliés.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Miel, beurre et thé",
   "text": "Dans une poêle, chauffe le miel et le beurre à parts égales. Dès que le mélange commence à frémir, coupe le feu. Trempe chaque msemen chaud des deux côtés, puis sers tout de suite avec un thé à la menthe.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Le vrai secret, c'est le pétrissage : au moins 15 minutes, jusqu'à pouvoir étaler la pâte si fin qu'on voit le plan de travail à travers.",
   "source": "Gâteau et cuisine Rachida"
  },
  {
   "text": "Mets de la semoule fine avec la farine : sans elle, le msemen reste élastique en bouche après cuisson.",
   "source": "Gâteau et cuisine Rachida"
  },
  {
   "text": "La semoule saupoudrée entre les couches les garde séparées pendant la cuisson.",
   "source": "Morocco World News (Layla Dahamou) ; MarocMama"
  },
  {
   "text": "Sois généreux avec l'huile pour étaler : elle n'est pas absorbée par la pâte, et un msemen bien fait n'est pas gras.",
   "source": "Taste of Maroc (Christine Benlafquih)"
  },
  {
   "text": "Laisse reposer les pâtons, puis les carrés : si la pâte résiste à l'étirement, attends encore un peu au lieu de forcer.",
   "source": "The Hot Bread Kitchen Cookbook (via The Splendid Table)"
  },
  {
   "text": "Étale vite : sinon la pâte sèche et risque de se déchirer.",
   "source": "My Moroccan Food (Nargisse Benkabbou)"
  },
  {
   "text": "Feu moyen, pas plus : trop chaud, le msemen colore trop vite, le centre reste cru et les couches se séparent mal.",
   "source": "Taste of Maroc (Christine Benlafquih)"
  },
  {
   "text": "Une à deux minutes après la cuisson, fais « balancer » le msemen tenu par deux bords opposés : les couches se décollent.",
   "source": "Taste of Maroc (Christine Benlafquih)"
  },
  {
   "text": "Cuis les carrés dans l'ordre où tu les as pliés.",
   "source": "Taste of Maroc ; The Hot Bread Kitchen Cookbook"
  }
 ],
 "mistakes": [
  "Verser toute l'eau d'un coup : la pâte devient très collante et ne se pétrit plus (My Moroccan Food).",
  "Écourter le pétrissage : c'est lui qui permet d'étaler très fin (Rachida).",
  "Être avare de beurre et de semoule au pliage : les couches ne se séparent pas (Taste of Maroc).",
  "Cuire sur un feu trop vif : dehors trop coloré, centre cru (Taste of Maroc).",
  "Forcer une pâte qui résiste au lieu de la laisser reposer un peu plus (Hot Bread Kitchen).",
  "Empiler les msemen pendant que tu les étires : ils collent entre eux (Hot Bread Kitchen).",
  "Trop travailler le carré en l'aplatissant : les couches se soudent (MarocMama).",
  "Laisser lever la pâte si tu as mis de la levure (Rachida)."
 ],
 "serving": "Bien chaud, trempé des deux côtés dans un sirop chaud de miel et de beurre à parts égales : c'est la façon la plus traditionnelle selon Taste of Maroc. Ou simplement arrosé de miel et de beurre fondu, avec un thé à la menthe (Rachida, Pâtisserie GATÔ). Au petit-déjeuner, au goûter et sur la table du ftour pendant le ramadan. Il se mange aussi nature ou avec de la confiture. Une fois refroidis, les msemen se congèlent bien : réchauffe-les sans les décongeler, à la poêle à feu moyen-doux, ou sur une grille au four à 180 °C (Taste of Maroc).",
 "variants": [
  "Msemen farci (rghaïf) : la farce se pose sur le disque étalé avant de plier. Farce classique : oignon, persil, khlii (viande séchée confite) et épices (Bladi.net).",
  "Rghaïf aux oignons : beaucoup d'oignons émincés très fin, un gros bouquet de persil, sel, cumin, piment rouge et une pincée de poivre, revenus dans l'huile avec de la graisse de bœuf ou du khlii ; environ 2 c. à s. de farce au centre du disque, puis on referme la pâte autour (Bladi.net).",
  "Farce à la viande hachée : viande hachée, oignon, poivrons, persil, cumin et paprika, cuits puis refroidis avant de farcir (Morocco World News ; My Moroccan Food, version de sa mère). Traditionnellement cuits un par un à la poêle, ils peuvent aussi aller au four (My Moroccan Food).",
  "Farce sucrée : amandes pilées et sucre (Bladi.net).",
  "Avec une pincée de levure boulangère ajoutée à la fin du pétrissage, sans laisser lever : msemen plus moelleux tout en restant croustillants (Rachida). Taste of Maroc et Morocco World News n'en mettent que 1/4 de c. à c. pour toute la pâte.",
  "Un peu de levure chimique mélangée à la semoule qu'on saupoudre entre les couches (Rachida ; Pâtisserie GATÔ).",
  "Plus de semoule dans la pâte : moitié farine, moitié semoule (My Moroccan Food, Pâtisserie GATÔ, Kookmutsjes), voire plus de semoule que de farine (Paula Wolfert) ; Taste of Maroc trouve la texture plus grossière avec moitié-moitié.",
  "Encore plus feuilleté : enveloppe un carré plié dans un second disque de pâte très fine, puis replie en carré (Rachida ; Pâtisserie GATÔ).",
  "Rfissa : les msemen cuits sont déchirés chauds, réchauffés à la vapeur, puis nappés de poulet, de lentilles et de bouillon ; plat des grandes occasions (Paula Wolfert).",
  "Meloui : le cousin rond du msemen, roulé en spirale (Taste of Maroc)."
 ],
 "sources": [
  {
   "name": "Taste of Maroc, Christine Benlafquih (basée à Casablanca, experte cuisine marocaine de The Spruce Eats de 2008 à 2016)",
   "url": "https://tasteofmaroc.com/msemen-recipe/",
   "used_for": "Étalage très fin à l'huile, pliage, ordre de cuisson, feu moyen, astuce du balancement, sirop miel-beurre, congélation ; position sur la levure (« sans levure ou à peine levée »)"
  },
  {
   "name": "Morocco World News, Layla Dahamou, Taroudant (2012)",
   "url": "https://www.moroccoworldnews.com/2012/06/151488/moroccan-cuisine-recipe-for-msemen/",
   "used_for": "Source marocaine : proportions, pétrissage de 10 min, rôle de la semoule entre les couches, carré aplati au double, service avec miel et thé"
  },
  {
   "name": "Morocco World News, Layla Dahamou (2019, même autrice)",
   "url": "https://www.moroccoworldnews.com/2019/11/75375/how-to-make-moroccan-msemen/",
   "used_for": "Comparaison des proportions et des repos (10 + 10 min), huile généreuse à chaque étape"
  },
  {
   "name": "Morocco World News, Layla Dahamou (2013), msemen farcis",
   "url": "https://www.moroccoworldnews.com/2013/01/146197/moroccan-cuisine-recipe-for-stuffed-msemen/",
   "used_for": "Variante farcie à la viande hachée, oignon, poivrons, persil et épices"
  },
  {
   "name": "My Moroccan Food, Nargisse Benkabbou (famille marocaine, ancienne cheffe exécutive de L'Mida Marrakech, autrice de « Casablanca: My Moroccan Food »)",
   "url": "https://www.mymoroccanfood.com/home/msemen-rghaeif",
   "used_for": "Source marocaine : pâte sans levure, pétrissage de 15 min, repos de 30 min, étaler vite, eau ajoutée peu à peu"
  },
  {
   "name": "My Moroccan Food, msemen farcis",
   "url": "https://www.mymoroccanfood.com/home/stuffed-msemen-rghaeif-stuffed-moroccan-flatbread",
   "used_for": "Variante farcie (recette de sa mère), levure facultative sans vraie différence, cuisson traditionnelle à la poêle"
  },
  {
   "name": "The Hot Bread Kitchen Cookbook (Jessamyn Waldman Rodriguez), recette apprise de Bouchra, boulangère venue du Maroc ; via The Splendid Table",
   "url": "https://www.splendidtable.org/story/2019/01/13/msmen",
   "used_for": "Proportions de base (500 g de farine, 100 g de semoule, 400 g d'eau, 12 msemen de 18 cm, pâtons de 85 g), mélange beurre fondu-huile, repos des carrés, disque de 25 cm presque translucide, test de la goutte d'eau, ne pas empiler"
  },
  {
   "name": "Paula Wolfert, The Food of Morocco (Bloomsbury) ; via Gourmet Traveller",
   "url": "https://www.gourmettraveller.com.au/recipe/mains/msemmen-with-rfissa-11219/",
   "used_for": "Référence anglophone : pâte sans levure très souple, étalage très fin, bords rabattus au centre, feu moyen en retournant plusieurs fois, variante rfissa"
  },
  {
   "name": "Gâteau et cuisine Rachida",
   "url": "https://gateauetcuisinerachida.com/recette-msemens-inratables/",
   "used_for": "Pétrissage d'au moins 15 min et test du plan de travail visible, rôle de la semoule, levure facultative sans laisser lever, pliage en rectangle puis en carré, repos d'une quinzaine de minutes, service miel, beurre fondu et thé à la menthe, ftour"
  },
  {
   "name": "Pâtisserie GATÔ (Guéliz, Maroc)",
   "url": "https://patisseriegato.ma/best-moroccan-msemen-recipe/?lang=en",
   "used_for": "Source marocaine : pétrissage d'au moins 20 min, pâte sans levure, étalage semi-transparent, service miel, beurre fondu et thé à la menthe"
  },
  {
   "name": "El Fenn (hôtel, médina de Marrakech)",
   "url": "https://el-fenn.com/msemen-pancake-recipe/",
   "used_for": "Feu moyen, environ 5 min par msemen en retournant souvent, petits trous sans importance, forme carrée gardée à l'aplatissage"
  },
  {
   "name": "MarocMama, Amanda Mouttaki",
   "url": "https://marocmama.com/msemmen/",
   "used_for": "Durées de préparation et de cuisson (45 et 30 min pour 10 à 12 msemen), ne pas trop travailler le carré, rôle de la semoule, repos des carrés"
  },
  {
   "name": "Kookmutsjes, Najat",
   "url": "https://kookmutsjes.com/en/recipe/msmen-rghaif-moroccan-pancakes/",
   "used_for": "Décompte de la levure (sans levure) et proportions moitié-moitié"
  },
  {
   "name": "Bladi.net, M'semmen",
   "url": "https://www.bladi.net/recettes/m-semmen.html",
   "used_for": "Farce oignon, persil, khlii et épices ; farce amandes-sucre ; carré de 8 cm ; décompte de la levure (sans levure)"
  },
  {
   "name": "Bladi.net, Rghaifs aux oignons",
   "url": "https://www.bladi.net/recettes/rghaifs-aux-oignons.html",
   "used_for": "Détail de la farce aux oignons (persil, cumin, piment rouge, poivre, graisse de bœuf ou khlii) ; décompte de la levure (1/2 c. à c.)"
  },
  {
   "name": "Wikipédia (anglais), Msemmen",
   "url": "https://en.wikipedia.org/wiki/Msemmen",
   "used_for": "Noms et écriture arabe (مسمن, رغايف), farce au khlii"
  },
  {
   "name": "Lalla Moulati, « مسمن بالسميدة هشيش و مورق بالصور », 15 juin 2015",
   "url": "https://www.lalamoulati.net/21423.html",
   "used_for": "Contre-vérification : Pétrissage énergique (« السميد يحتاج للدلك الجيد ») ; pâtons puis carrés reposés 5 à 10 min ; beurre fondu et huile à parts égales ; semoule (avec un peu de levure chimique) saupoudrée entre les couches ; pliage en carré ; cuisson à feu plutôt doux en retournant. Version toute semoule, avec lait en poudre et levure : différente de la base retenue."
  },
  {
   "name": "Afrik.com, « Les Mssemens, une délicieuse tradition culinaire du Maghreb »",
   "url": "https://www.afrik.com/les-mssemens-une-delicieuse-tradition-culinaire-du-maghreb",
   "used_for": "Contre-vérification : Nom « rghaïf au Maroc », plaque traditionnelle « ferrah », pâte de farine, semoule fine, eau et sel (levure parfois), pétrie jusqu'à être souple et élastique. Média panafricain, pas marocain."
  },
  {
   "name": "La langue française, dictionnaire, « msemen »",
   "url": "https://www.lalanguefrancaise.com/dictionnaire/definition/msemen",
   "used_for": "Contre-vérification : « Crêpe marocaine fine, confectionnée à base de farine et de semoule »."
  }
 ],
 "discrepancies": [
  "Levure : les sources se partagent. Sans levure : My Moroccan Food, Paula Wolfert, Hot Bread Kitchen, Pâtisserie GATÔ (levure chimique seulement), Kookmutsjes, Bladi.net (M'semmen). Un peu de levure : Taste of Maroc (1/4 c. à c.), Morocco World News (1/4 c. à c.), El Fenn (1/8 c. à c.), MarocMama (1 c. à c.), Bladi.net (rghaïfs aux oignons, 1/2 c. à c.), Rachida (une pincée, « facultatif »). Taste of Maroc écrit que la pâte peut être « sans levure ou à peine levée », et My Moroccan Food n'a pas vu de vraie différence. Bilan : 8 sources sur 12 se passent de levure ou la disent facultative, et aucune ne laisse lever la pâte. Choix retenu : sans levure ; la pincée de levure reste une variante.",
  "Farine et semoule : la plupart mettent beaucoup plus de farine que de semoule (Hot Bread Kitchen 500 g / 100 g, El Fenn 220 g / 45 g, Taste of Maroc et MarocMama 3½ tasses / ½ tasse, Rachida 500 g / 150 g, Morocco World News 500 g / 200 g en 2012 et 500 g / 250 g en 2019). Moitié-moitié chez My Moroccan Food, Pâtisserie GATÔ et Kookmutsjes ; plus de semoule que de farine chez Paula Wolfert (225 g / 185 g). Retenu : 500 g / 100 g (Hot Bread Kitchen), proche d'El Fenn.",
  "Pétrissage : 10 min à la main (Morocco World News, El Fenn, MarocMama), 15 min (My Moroccan Food ; « au moins 15 minutes » chez Rachida), « au moins 20 minutes » (Pâtisserie GATÔ), 8 min au batteur (Hot Bread Kitchen). Retenu : 15 min à la main, plus si la pâte n'est pas encore lisse et élastique.",
  "Repos des pâtons : 10 à 15 min (Taste of Maroc), 10 min (El Fenn, Pâtisserie GATÔ, Morocco World News 2019), 30 min (My Moroccan Food, Hot Bread Kitchen). Repos des carrés : au moins 15 min (Hot Bread Kitchen), une quinzaine de minutes (Rachida), 10 à 15 min (MarocMama). Retenu : 15 min, puis 15 min.",
  "Pliage : toutes les sources plient en deux temps pour obtenir un carré à plusieurs couches, en trois « comme une lettre » (Taste of Maroc, El Fenn, MarocMama, Rachida) ou bords rabattus jusqu'au centre (Paula Wolfert, Morocco World News, My Moroccan Food, Hot Bread Kitchen). Retenu : un bord au centre, l'autre par-dessus, deux fois (Rachida, Hot Bread Kitchen).",
  "Matière grasse entre les couches : beurre très mou en noisettes (Taste of Maroc, Morocco World News), beurre clarifié (Paula Wolfert), beurre fondu mêlé d'huile (Hot Bread Kitchen, My Moroccan Food, Rachida, Pâtisserie GATÔ). Retenu : beurre fondu et huile, quantités de Hot Bread Kitchen.",
  "Feu : moyen (Taste of Maroc, Paula Wolfert, El Fenn, Morocco World News 2019, Pâtisserie GATÔ, MarocMama) ou moyen-vif (Morocco World News 2012, My Moroccan Food, Hot Bread Kitchen, Kookmutsjes). Retenu : moyen.",
  "Durée de cuisson : environ 5 min par msemen (El Fenn), 2 à 3 min par face (Hot Bread Kitchen) ; les autres sources ne donnent pas de durée. Retenu : environ 5 min en tout, en retournant plusieurs fois.",
  "Sucre et huile dans la pâte : du sucre chez Taste of Maroc, El Fenn, MarocMama et Morocco World News 2019, mais pas chez Hot Bread Kitchen, My Moroccan Food, Paula Wolfert, Rachida, Morocco World News 2012, Pâtisserie GATÔ, Kookmutsjes et Bladi.net : retenu sans sucre. Un peu d'huile dans la pâte chez Hot Bread Kitchen (2 c. à c.) et My Moroccan Food (2 c. à s.), pas chez la plupart des autres : retenu sans huile dans la pâte.",
  "Sel : Hot Bread Kitchen indique 1,5 c. à c. de sel casher, plus grossier que le sel fin. Retenu : 1,5 c. à c. de sel fin, dans la fourchette des autres sources (1 c. à c. pour 650 g de farine et semoule chez Rachida, 2 c. à c. pour 700 g chez Morocco World News).",
  "Taille : de 10 cm (Taste of Maroc, My Moroccan Food) à 23 cm (Kookmutsjes). Retenu : le format Hot Bread Kitchen, 12 pâtons de 85 g pour des carrés d'environ 18 cm.",
  "Durées affichées : préparation (45 min) et cuisson (30 min) reprises de MarocMama pour 10 à 12 msemen ; repos = 15 min pour les pâtons + 15 min pour les carrés.",
  "Contre-vérifiée le 6 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 3 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Recette de Choumicha : choumicha.com est un nom de domaine à vendre et choumicha.ma renvoie une erreur serveur ; aucune page fiable reprenant sa recette n'a été trouvée.",
  "Fatéma Hal : la seule recette trouvée à son nom (fiche Gaggenau « Rghaïfs galettes feuilletées aux oignons et aux poivrons ») se fait avec des feuilles de brick, pas avec la pâte traditionnelle ; non utilisée.",
  "Amour de cuisine : aucune page msemen de ce site n'est sortie dans les recherches ; non consultée.",
  "Recette NYT Cooking « Msemen (Moroccan Flatbreads) » : page inaccessible.",
  "Paula Wolfert : recette lue dans la reprise de Gourmet Traveller, « reproduite avec de légères modifications de style », pas dans le livre lui-même.",
  "Origine de Rachida (Gâteau et cuisine Rachida) et de Najat (Kookmutsjes) : non indiquée sur leurs pages ; elles ne sont pas comptées parmi les sources marocaines.",
  "Pâtisserie GATÔ : la page dit « Guéliz » sans nommer la ville, et elle est en partie confuse (elle appelle « yeast » la levure chimique) ; seuls les points clairs ont été utilisés.",
  "Quantités de miel et de beurre pour le service : aucune source n'en donne ; seulement « à parts égales » (Taste of Maroc).",
  "Équivalence entre le sel casher de Hot Bread Kitchen et le sel fin : non vérifiée.",
  "Durées totales de préparation et de cuisson : estimations de MarocMama, non chronométrées sur cette recette.",
  "Hot Bread Kitchen : dans le livre, la pâte se pétrit au batteur et s'étire sur papier cuisson ; le pétrissage à la main (15 min) et l'étirage sur plan huilé viennent des autres sources."
 ],
 "cuisine": "Marocaine",
 "rayon": "Pains",
 "pairs": [
  "the-menthe"
 ],
 "img": "img/msemen.jpg",
 "photo": {
  "author": "Popo le Chien",
  "license": "CC0",
  "license_url": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
  "page": "https://commons.wikimedia.org/wiki/File:Msemmen.jpg",
  "modified": "réduite"
 }
});
