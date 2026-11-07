/* Recette : Rghayef farcis à l'oignon et au khlii. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "rghayef",
 "title": "Rghayef farcis à l'oignon et au khlii",
 "darija": "rghayef m'ammrin (singulier : rghifa)",
 "arabic": "رغايف معمرين",
 "tagline": "Des galettes feuilletées fourrées d'oignons fondants, de persil et de khlii, dorées à la poêle et servies brûlantes avec le thé.",
 "category": "Pain",
 "occasion": "Petit-déjeuner, goûter, ftour du ramadan",
 "region": "Tout le Maroc ; à Fès, le msemmen au khlii fait partie des gourmandises du ftour",
 "servings": 12,
 "servings_label": "galettes",
 "time": {
  "prep": 60,
  "cook": 30,
  "rest": 15
 },
 "difficulty": "Moyen",
 "equipment": [
  "Une sauteuse avec couvercle, pour la farce",
  "Une cuillère en bois",
  "Une grande assiette, pour refroidir la farce",
  "Un grand saladier (ou une gsaa)",
  "Une balance de cuisine",
  "Un grand plan de travail lisse (ou un grand plateau)",
  "Deux plateaux huilés : un pour les pâtons, un pour les galettes farcies",
  "Trois bols : huile, beurre-huile, semoule",
  "Un pinceau",
  "Du film alimentaire ou un torchon propre",
  "Une grande poêle à fond épais",
  "Une spatule"
 ],
 "ingredients": [
  {
   "group": "Farce",
   "items": [
    {
     "id": "huile-farce",
     "q": 4,
     "u": "c. à s.",
     "name": "d'huile de table (ou d'huile d'olive)",
     "canon": "huile-olive"
    },
    {
     "id": "oignons",
     "q": 4,
     "u": "",
     "name": "gros oignon",
     "pl": "gros oignons",
     "note": "à émincer très finement",
     "canon": "oignon"
    },
    {
     "id": "khlii",
     "q": 100,
     "u": "g",
     "name": "de khlii (viande séchée confite)",
     "note": "de viande halal (bœuf ou chameau le plus souvent, parfois agneau ou mouton) et de graisse halal, ou conservé dans l'huile d'olive seule ; émietté ou haché finement",
     "canon": "khlii"
    },
    {
     "id": "persil",
     "q": 1,
     "u": "botte",
     "name": "de persil plat",
     "note": "finement ciselé",
     "canon": "persil"
    },
    {
     "id": "paprika",
     "q": 2,
     "u": "c. à c.",
     "name": "de paprika doux (piment rouge doux)",
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
     "q": 0.5,
     "u": "c. à c.",
     "name": "de poivre noir moulu",
     "canon": "poivre"
    },
    {
     "id": "piment",
     "q": null,
     "u": "",
     "name": "piment fort moulu",
     "note": "facultatif, selon ton goût",
     "canon": "piment-cayenne"
    },
    {
     "id": "sel-farce",
     "q": null,
     "u": "",
     "name": "sel",
     "note": "selon le goût ; goûte d'abord, le khlii est déjà assaisonné",
     "canon": "sel"
    }
   ]
  },
  {
   "group": "Pâte",
   "items": [
    {
     "id": "farine",
     "q": 375,
     "u": "g",
     "name": "de farine blanche (T45 ou T55)",
     "canon": "farine"
    },
    {
     "id": "semoule",
     "q": 190,
     "u": "g",
     "name": "de semoule fine",
     "canon": "semoule"
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
     "q": 320,
     "u": "ml",
     "name": "d'eau tiède",
     "note": "environ : verse-la petit à petit, il en faut de 280 à 360 ml selon ta farine",
     "canon": "eau"
    }
   ]
  },
  {
   "group": "Pour façonner",
   "items": [
    {
     "id": "huile-faconnage",
     "q": null,
     "u": "",
     "name": "huile neutre (tournesol)",
     "note": "pour le plan de travail, les mains et les pâtons",
     "canon": "huile"
    },
    {
     "id": "beurre",
     "q": 60,
     "u": "g",
     "name": "de beurre, fondu",
     "canon": "beurre"
    },
    {
     "id": "huile-beurre",
     "q": 4,
     "u": "c. à s.",
     "name": "d'huile neutre, à mélanger au beurre fondu",
     "canon": "huile"
    },
    {
     "id": "semoule-faconnage",
     "q": 6,
     "u": "c. à s.",
     "name": "de semoule fine, à saupoudrer",
     "canon": "semoule"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Fondre les oignons",
   "text": "Dans une sauteuse, fais chauffer {{huile-farce}} d'huile à feu moyen. Ajoute l'oignon émincé ({{oignons:full}}), couvre et laisse cuire 10 minutes en remuant de temps en temps, jusqu'à ce qu'il soit tendre et translucide.",
   "timer": {
    "min": 10,
    "label": "Oignons",
    "done": "L'oignon est-il tendre et translucide ? Sinon, prolonge de quelques minutes."
   }
  },
  {
   "phase": "Préparation",
   "title": "Ajouter khlii, persil et épices",
   "text": "Ajoute {{khlii}} de khlii émietté, {{persil}} de persil ciselé, {{paprika}} de paprika, {{cumin}} de cumin, {{poivre}} de poivre et, si tu aimes, un peu de {{piment}}. Laisse cuire 5 minutes à découvert, en remuant, jusqu'à ce qu'il ne reste plus de liquide.",
   "timer": {
    "min": 5,
    "label": "Farce",
    "done": "S'il reste du liquide, laisse-le s'évaporer, puis coupe le feu."
   }
  },
  {
   "phase": "Préparation",
   "title": "Goûter et refroidir",
   "text": "Goûte la farce et ajoute du {{sel-farce}} seulement si besoin : le khlii est déjà assaisonné. Étale-la dans une grande assiette et laisse-la refroidir complètement : chaude, elle abîme la pâte. Si tu la prépares à l'avance, mets-la au réfrigérateur dans les 2 heures.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Mélanger la pâte",
   "text": "Dans un grand saladier, mélange {{farine}} de farine, {{semoule}} de semoule fine et {{sel}} de sel. Verse {{eau}} d'eau tiède petit à petit, en mélangeant à la main, jusqu'à former une boule souple. Si elle colle, ajoute un peu de farine ; si elle est sèche, un peu d'eau.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Pétrir 10 minutes",
   "text": "Pétris pendant 10 minutes, jusqu'à ce que la pâte soit lisse, souple et élastique, et ne colle plus.",
   "timer": {
    "min": 10,
    "label": "Pétrissage",
    "done": "Touche la pâte : si elle n'est pas lisse et élastique, pétris encore un peu."
   },
   "img": {
    "src": "img/etapes/petrir.jpg",
    "alt": "Mains qui pétrissent une pâte",
    "caption": "Pétrir la pâte",
    "w": 1000,
    "h": 668,
    "credit": "Photo de l'étape « Pétrir 10 minutes » : Shixart1985, Wikimedia Commons, licence CC BY 2.0 (réduite)."
   }
  },
  {
   "phase": "Préparation",
   "title": "Former les pâtons",
   "text": "Huile tes mains et un plateau. Partage la pâte en boules d'environ 75 g, une par galette. Roule-les dans l'huile, pose-les sur le plateau sans qu'elles se touchent, couvre et laisse reposer 15 minutes.",
   "timer": {
    "min": 15,
    "label": "Repos des pâtons",
    "done": "Les pâtons ont reposé : tu peux étirer et farcir."
   }
  },
  {
   "phase": "Préparation",
   "title": "Préparer ton poste",
   "text": "Pendant le repos, mélange {{beurre}} de beurre fondu avec {{huile-beurre}} d'huile. Mets à portée de main ce mélange, un bol d'{{huile-faconnage}}, {{semoule-faconnage}} de semoule fine et la farce froide. Huile largement ton plan de travail.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Étirer très fin",
   "text": "Pose un pâton sur le plan huilé. Mains huilées, étire-le du bout des doigts, du centre vers les bords, jusqu'à un disque très fin d'environ 28 cm. Remets de l'huile si la pâte accroche.",
   "timer": null,
   "img": {
    "src": "img/msemen-etaler.jpg",
    "alt": "Mains huilées qui étalent une pâte très fine, au Maroc (ici pour des msemen)",
    "caption": "Étirer du bout des doigts",
    "w": 1200,
    "h": 1200,
    "credit": "Photo de l'étape « Étirer très fin » : Mounir Neddi, Wikimedia Commons, licence CC BY-SA 4.0 (réduite)."
   }
  },
  {
   "phase": "Préparation",
   "title": "Badigeonner et garnir",
   "text": "Badigeonne le disque de mélange beurre-huile et saupoudre-le d'un peu de semoule. Pose au centre 1 à 2 cuillerées à soupe de farce, en laissant les bords libres : la farce doit suffire pour toutes les galettes.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Fermer en carré",
   "text": "Rabats trois côtés de la pâte sur la farce, puis le quatrième par-dessus en l'étirant un peu : ce dernier pli, sans farce, renforce la galette et l'empêche de s'ouvrir. Pose le carré fermé sur le second plateau huilé et recommence avec les autres pâtons.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Chauffer la poêle",
   "text": "Fais chauffer une grande poêle à fond épais à feu moyen-vif, puis huile-la légèrement.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Aplatir doucement",
   "text": "Mains huilées, aplatis le premier carré du bout des doigts, sans percer la pâte, jusqu'à environ 12 à 15 cm de côté. La farce doit rester bien enfermée.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Cuire en retournant",
   "text": "Dépose la galette dans la poêle et retourne-la plusieurs fois, jusqu'à ce qu'elle soit bien dorée et croustillante des deux côtés. Si elle colore trop vite, baisse un peu le feu : la pâte doit cuire jusqu'au centre.",
   "timer": null,
   "img": {
    "src": "img/msemen-cuisson.jpg",
    "alt": "Galettes feuilletées carrées qui dorent sur une grande plaque",
    "caption": "Cuire jusqu'à ce qu'elles soient bien dorées",
    "w": 1200,
    "h": 900,
    "credit": "Photo de l'étape « Cuire en retournant » : Popo le Chien, Wikimedia Commons, licence CC0 (réduite)."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Continuer avec les autres",
   "text": "Pose la galette cuite sur une planche ou une grille, et continue avec les autres carrés, en les aplatissant au fur et à mesure.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Servir brûlant",
   "text": "Sers les rghayef bien chauds, avec un thé.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Au Maroc, on appelle rghayef m'ammrin (« farcis ») les galettes feuilletées farcies : au khlii, à la viande hachée, aux légumes ou à la graisse épicée.",
   "source": "Wikipédia (fr), « Msemen » ; Lalla Moulati (« رغايف معمرين ») ; Morocco World News 2013 (« Msemen Maamer »)"
  },
  {
   "text": "Farce bien froide : chaude, elle abîme la pâte et rend le pliage difficile.",
   "source": "My Moroccan Food (Nargisse Benkabbou) ; Choumicha, Morocco World News et Cooking with Alia (farce refroidie avant de garnir)"
  },
  {
   "text": "Farce bien sèche : laisse évaporer tout le liquide avant de couper le feu.",
   "source": "Choumicha (« jusqu'à évaporation de l'eau de végétation ») ; My Moroccan Food (« until all liquids have evaporated »)"
  },
  {
   "text": "Ne mets pas trop de farce et garde les bords libres, pour pouvoir bien fermer la galette.",
   "source": "My Moroccan Food ; Choumicha (1 c. à s. de farce au milieu de chaque r'ghifa)"
  },
  {
   "text": "Le dernier pli, sans farce, renforce la galette et l'empêche de s'ouvrir et de perdre sa farce à la cuisson.",
   "source": "Choumicha, conseils pour réussir les r'ghaifs ; Bladi.net (« tirer le quatrième bord pour renforcer la pâte fragile au niveau de la farce »)"
  },
  {
   "text": "Pétris bien la pâte et respecte le repos : elle devient élastique et malléable, donc plus facile à feuilleter.",
   "source": "Choumicha, conseils pour réussir les r'ghaifs"
  },
  {
   "text": "Huile les pâtons pour qu'ils ne forment pas de croûte.",
   "source": "Choumicha, conseils pour les r'ghaifs feuilletées"
  },
  {
   "text": "Le khlii, c'est du gueddid (viande séchée au soleil, le plus souvent de bœuf ou de chameau, parfois d'agneau ou de mouton) confit longuement dans du suif de bœuf et de l'huile d'olive ; au marché, il se vend dans un mélange de graisse et d'huile, ou dans l'huile d'olive seule. Une fois le pot ouvert, garde-le au réfrigérateur ou au congélateur.",
   "source": "Taste of Maroc, « Moroccan Preserved Meat – Khlii or Khlea »"
  },
  {
   "text": "La farce se prépare jusqu'à 2 jours à l'avance, au réfrigérateur.",
   "source": "My Moroccan Food ; l'Anses recommande de consommer les plats cuisinés maison dans les 3 jours"
  },
  {
   "text": "Pendant la cuisson, presse les bords avec une spatule pour qu'ils cuisent bien.",
   "source": "Cooking with Alia"
  },
  {
   "text": "Pour congeler les galettes : cuis-les à moitié, laisse-les refroidir et emballe-les une par une. Le jour venu, mets-les 15 minutes au réfrigérateur, puis finis la cuisson au four, jusqu'à ce qu'elles soient dorées et très chaudes.",
   "source": "Choumicha, conseils pour réussir les r'ghaifs ; l'Anses admet de décongeler directement par la cuisson ou le réchauffage"
  },
  {
   "text": "À Fès, Guinaudeau a vu porter les rghaif au four du quartier, comme le pain : épais d'environ un pouce, luisants de graisse et rougis au piment, mangés chauds avec le thé du matin.",
   "source": "Z. Guinaudeau-Franc, Traditional Moroccan Cooking: Recipes from Fez"
  }
 ],
 "mistakes": [
  "Farcir avec une farce encore chaude : la pâte s'abîme (My Moroccan Food).",
  "Laisser du liquide dans la farce (Choumicha ; My Moroccan Food).",
  "Saler la farce sans goûter : le khlii est déjà assaisonné (Taste of Maroc, recette du khlii : sel, ail, cumin et coriandre dans la graisse).",
  "Mettre trop de farce, ou jusqu'aux bords : elle doit rester enfermée dans la pâte (My Moroccan Food).",
  "Percer la pâte en aplatissant le carré : la farce s'échappe (My Moroccan Food : aplatir « sans casser la pâte »).",
  "Négliger le pétrissage ou le repos : la pâte manque d'élasticité et se feuillette mal (Choumicha).",
  "Laisser la farce ou les galettes plus de 2 heures à température ambiante avant de les mettre au réfrigérateur (Anses).",
  "Cuire sur un feu trop fort : la galette dore avant que la pâte ne cuise au centre (Taste of Maroc, pour les galettes feuilletées ; MarocMama ; Cooking with Alia : cuire jusqu'à ce que « le centre soit cuit »)."
 ],
 "serving": "Bien chauds, au petit-déjeuner ou au goûter, avec un thé (Morocco World News 2013 : « Serve hot with tea » ; Guinaudeau : mangés chauds avec le thé du petit-déjeuner ; Choumicha : « Servir les r'ghaifs chaudes »). On les sert aussi au ftour du ramadan : Choumicha range la moitié de ses r'ghaifs (5 recettes sur 10, dont celle à la viande hachée et aux légumes) dans « Ramadan », et Femmes du Maroc cite le msemmen au khlii parmi les gourmandises du ftour à Fès. Les restes vont au réfrigérateur dans les 2 heures, se mangent dans les 3 jours et se réchauffent jusqu'à être très chauds à cœur, à la poêle ou au four (Anses).",
 "variants": [
  "À la viande hachée (rghayef à la kefta) : fais revenir les oignons, puis ajoute la viande hachée halal, les herbes et les épices, et cuis la viande complètement avant de farcir (Choumicha, « R'ghaifs à la viande hachée et aux oignons » : 300 g de viande, 4 oignons, persil, coriandre, paprika, sel et poivre pour 500 g de pâte ; My Moroccan Food : 200 g de bœuf haché, 4 gros oignons et 4 poivrons pour 12 ; Morocco World News 2013 ; Cooking with Alia).",
  "À la graisse de bœuf halal (chehma) au lieu du khlii : Bladi.net met « 1 verre de gras de bœuf ou de khlii », ajouté à l'oignon adouci et cuit 5 minutes en remuant, comme le khlii ici ; à Fès, Guinaudeau décrit une farce de graisse de mouton ou de bœuf hachée, relevée de piment rouge doux et fort, cuite juste assez pour que la graisse commence à fondre, mais ces rghaif cuisaient ensuite au four du quartier.",
  "Khlii étalé sur toute la feuille, puis pliée en carré comme un msemen : 1 c. à s. de khlii par galette et de la semoule mêlée d'un peu de levure chimique (Cooking with Alia, « Msemmen with Khlii »).",
  "Aux oignons et aux œufs : 6 oignons, persil, cannelle, gingembre, poivre, curcuma et 4 œufs brouillés dans la farce ; servis saupoudrés de sucre glace et de cannelle (Choumicha).",
  "Aux légumes et à l'agneau haché halal : poivrons, carottes et courgettes râpées, tomate, coriandre et épices, cuits jusqu'à évaporation de l'eau et jusqu'à ce que la viande soit bien cuite (Choumicha ; Anses). Choumicha propose aussi des r'ghaifs aux épinards et aux crevettes, ou aux épinards et aux fromages (fromage à coagulant microbien, sans présure animale, si tu veux être strict).",
  "Au four : sur une plaque tapissée de papier cuisson, dorés à l'œuf battu, à 180 °C jusqu'à ce qu'ils soient dorés (Choumicha), ou 18 à 20 minutes à 200 °C (My Moroccan Food) ; badigeonne-les d'huile en cours de cuisson pour la couleur et le croustillant (Choumicha).",
  "Sucrés : r'ghaifs farcis d'amandes, de sucre et de cannelle, frits puis trempés dans le miel et parsemés de sésame, pour le ramadan et l'Aïd el-Fitr (Choumicha) ; Lalla Moulati publie aussi des « رغايف معسلة » (rghayef au miel) pour le ramadan, et des rghayef de Meknès aux amandes parmi les gâteaux de l'Aïd."
 ],
 "sources": [
  {
   "name": "Choumicha (Choumicha Chafay), site officiel, « R'ghaifs farcis à la viande hachée » (recette n° 257), copie web.archive.org du 1er août 2015",
   "url": "https://web.archive.org/web/20150801030214/http://www.choumicha.ma:80/recette/257-r-ghaifs-farcis-a-la-viande-hachee.html",
   "used_for": "Source marocaine primaire : pâte à r'ghaifs (500 g de farine, 1/2 c. à c. de sel, 25 cl d'eau tiède, pétrissage de 10 à 15 min), feuilletage huile et beurre fondu, farce (150 g de viande, 2 oignons, coriandre, 2 c. à c. de paprika et piment fort, 2 c. à c. de cumin, 5 cl d'huile d'olive) refroidie, 1 c. à s. de farce au centre, côtés repliés, cuisson au four à 180 °C"
  },
  {
   "name": "Choumicha, « R'ghaifs à la viande hachée et aux oignons » (n° 497), copie web.archive.org du 25 juillet 2015",
   "url": "https://web.archive.org/web/20150725014952/http://www.choumicha.ma:80/recette/497-rghaifs-a-la-viande-hachee-et-aux-oignons.html",
   "used_for": "Quantités de farce (300 g de viande, 4 oignons, 4 c. à s. d'huile, persil, coriandre, 1 c. à c. de paprika, 1 c. à c. de sel, 1/2 c. à c. de poivre) pour 500 g de pâte ; huile et beurre fondu mélangés ; « r'ghifa (crêpe) » ; farce au milieu, côtés rabattus ; four à 180 °C ; temps (30 min de cuisson, 1 h en tout)"
  },
  {
   "name": "Choumicha, « R'ghaifs aux oignons et aux œufs » (n° 501), copie web.archive.org du 21 juin 2015",
   "url": "https://web.archive.org/web/20150621034639/http://www.choumicha.ma:80/recette/501-rghaifs-aux-oignons-et-aux-oeufs.html",
   "used_for": "Farce à l'oignon (6 oignons, 4 c. à s. d'huile, 1 bouquet de persil, poivre, sel) ; variante aux œufs ; service au sucre glace et à la cannelle"
  },
  {
   "name": "Choumicha, « R'ghaifs farcies à la viande hachée et aux légumes » (n° 111), copie web.archive.org du 20 mai 2015",
   "url": "https://web.archive.org/web/20150520033351/http://www.choumicha.ma:80/recette/111-r-ghaifs-farcies-a-la-viande-hachee-et-aux-legumes.html",
   "used_for": "Farce cuite « jusqu'à évaporation de l'eau de végétation », refroidie ; 1/4 c. à c. de piment fort ; pâte à r'ghaifs (farine fine de blé dur, sel, eau tiède, 10 à 15 min de pétrissage, 10 min de repos) ; catégorie Ramadan ; 45 min de préparation et 30 min de cuisson"
  },
  {
   "name": "Choumicha, « R'ghaifs aux amandes » (n° 75), copie web.archive.org du 19 juillet 2015",
   "url": "https://web.archive.org/web/20150719052431/http://www.choumicha.ma:80/recette/75-r-ghaifs-aux-amandes.html",
   "used_for": "Sens sucré du mot : r'ghaifs farcis aux amandes, frits, trempés dans le miel (Ramadan, Aïd el-Fitr)"
  },
  {
   "name": "Choumicha, « Pour des R'ghaifs farcies aux épinards et aux fromages réussies » (conseils), copie web.archive.org du 2 décembre 2020",
   "url": "https://web.archive.org/web/20201202164056/https://choumicha.ma/astuces/pour-des-r-ghaifs-farcies-aux-epinards-et-aux-fromages-reussies.html",
   "used_for": "Bien pétrir, repos indispensable, huile ou graisse au pinceau en cours de cuisson au four, congélation après demi-cuisson, dernière feuille sans farce pour renforcer la r'ghifa"
  },
  {
   "name": "Choumicha, « Pour des R'ghaifs feuilletées à la confiture réussies » (conseils), copie web.archive.org du 6 mars 2021",
   "url": "https://web.archive.org/web/20210306055156/https://choumicha.ma/astuces/pour-des-rghaifs-feuilletees-a-la-confiture-reussies.html",
   "used_for": "Pâtons huilés pour éviter la croûte ; feuilletage à l'huile ou au beurre fondu"
  },
  {
   "name": "Bladi.net, « Rghaifs aux oignons »",
   "url": "https://www.bladi.net/recettes/rghaifs-aux-oignons.html",
   "used_for": "Source marocaine : farce (1 kg d'oignons coupés très fins, 1 bon bouquet de persil, sel, 1 petite cuillère de cumin, 1 c. à s. de piment rouge, 1 pincée de poivre, 1/2 verre à thé d'huile, 1 verre de gras de bœuf ou de khlii) ; oignon adouci à couvert, puis 5 min de cuisson ; beurre fondu et huile à parts égales avec un peu de semoule ; 2 c. à s. de farce au milieu, trois bords fermés, quatrième bord tiré pour renforcer"
  },
  {
   "name": "Bladi.net, « M'semmen »",
   "url": "https://www.bladi.net/recettes/m-semmen.html",
   "used_for": "Farce donnée en exemple, à côté des amandes pilées et du sucre : oignon, persil, morceaux de viande boucanée (khlii) et épices"
  },
  {
   "name": "Cooking with Alia (site d'Alia, qui y présente « la cuisine marocaine de son enfance », page À propos), « Msemmen with Khlii / مسمن بالخليع » (n° 941, 24 octobre 2021)",
   "url": "https://www.cookingwithalia.com/941-msemmen-with-khlii/",
   "used_for": "Source marocaine : pâte (375 g de farine, 190 g de semoule fine, 1 c. à c. de sel, 360 ml d'eau tiède, pétrissage de 5 à 10 min, repos de 15 min puis pâtons de 70 g reposés 15 min), 100 g de khlii, disque de 28 cm, galette aplatie à 12 cm, poêle chauffée puis huilée, feu moyen-vif, retourner plusieurs fois, bords pressés à la spatule"
  },
  {
   "name": "Cooking with Alia, « Msemmen with Ground Beef / مسمن باللحم المفروم » (n° 939, 23 octobre 2021)",
   "url": "https://www.cookingwithalia.com/939-msemmen-with-ground-beef/",
   "used_for": "Farce à la viande (150 g de bœuf, oignon cuit 5 min, poivrons et épices cuits 5 min, refroidie), 2 c. à s. de farce par galette"
  },
  {
   "name": "My Moroccan Food, Nargisse Benkabbou, « Stuffed Msemen (Rghaif) – Stuffed Moroccan Flatbread », 15 juillet 2015",
   "url": "https://www.mymoroccanfood.com/home/stuffed-msemen-rghaeif-stuffed-moroccan-flatbread",
   "used_for": "Source marocaine : « msemen, aussi appelé rghaif » ; farce de sa mère pour 12 (4 gros oignons, 3 c. à s. de persil, 2 c. à c. de paprika doux, 1 c. à c. de cumin, piment de Cayenne facultatif, 200 g de bœuf haché), oignons 10 min à couvert, liquides évaporés, farce à préparer jusqu'à 2 jours avant et à ne pas utiliser chaude ; 2 à 3 c. à s. de farce sans toucher les bords ; côtés repliés pour enfermer la farce ; aplatir sans casser la pâte ; 15 cm de côté ; « traditionnellement cuits un par un à la poêle », ou 18 à 20 min au four à 200 °C ; levure facultative"
  },
  {
   "name": "Morocco World News, Layla Dahamou (Taroudant), « Moroccan Cuisine: Recipe for Stuffed Msemen », 28 janvier 2013",
   "url": "https://www.moroccoworldnews.com/2013/01/146197/moroccan-cuisine-recipe-for-stuffed-msemen/",
   "used_for": "« Appelé aussi rghaif ou mlawi par certains Marocains » ; « Msemen Maamer » ; farce refroidie, 1 c. à s. au milieu, bords rabattus en carré, aplati jusqu'à presque doubler, poêle à feu moyen-vif, retourné régulièrement, servi chaud avec le thé ; 1/2 c. à c. de poivre, oignons 10 min"
  },
  {
   "name": "Morocco World News, Constance Renton, « The Fuel of Ramadan: Favourite Moroccan Dishes », 9 juin 2017",
   "url": "https://www.moroccoworldnews.com/2017/06/98982/fuel-ramadan-favourite-moroccan-dishes/",
   "used_for": "« Carrées ou rondes, les galettes marocaines, appelées aussi rghaif » ; msemen à la kefta ou à l'oignon"
  },
  {
   "name": "Morocco World News, Maddy Raven, « A Very Moroccan Ramadan: Harira, Dates and Chebakia Galore », 31 mai 2019",
   "url": "https://www.moroccoworldnews.com/2019/05/80275/moroccan-ramadan-harira-dates-chebakia/",
   "used_for": "Le meloui « aussi appelé rghaif »"
  },
  {
   "name": "Taste of Maroc, Christine Benlafquih, « Basic Msemen Recipe – Square Moroccan Pancakes », copie web.archive.org du 21 avril 2026",
   "url": "https://web.archive.org/web/20260421041328/http://tasteofmaroc.com/msemen-recipe/",
   "used_for": "Le msemen, « parfois appelé rghaif », fait avec de la « pâte à rghaif »"
  },
  {
   "name": "Taste of Maroc, « Moroccan Preserved Meat – Khlii or Khlea », copie web.archive.org du 4 octobre 2026",
   "url": "https://web.archive.org/web/20261004063757/https://tasteofmaroc.com/moroccan-preserved-meat-khlii-khlea/",
   "used_for": "Ce qu'est le khlii (gueddid confit dans la graisse et l'huile d'olive), son usage dans les galettes feuilletées, assaisonnement (sel, ail, cumin, coriandre), pot ouvert au réfrigérateur ou au congélateur"
  },
  {
   "name": "Zette Guinaudeau-Franc, Traditional Moroccan Cooking: Recipes from Fez (éd. anglaise 1995), recette « Rghaif », extrait public sur ckbk",
   "url": "https://app.ckbk.com/recipe/trad59138c15s001r001/rghaif",
   "used_for": "À Fès : rghaif portés au four du quartier comme le pain, épais d'environ un pouce, luisants de graisse, colorés au piment rouge, mangés chauds avec le thé du petit-déjeuner ; farce de graisse de mouton ou de bœuf hachée et de piment rouge doux et fort, cuite jusqu'à ce que la graisse commence à fondre"
  },
  {
   "name": "Lalla Moulati, recherche « رغايف » sur le site et recettes du 8 mars 2023, du 11 mars 2023 et du 18 avril 2023",
   "url": "https://www.lalamoulati.net/359267.html",
   "used_for": "Usage du mot : « رغايف معمرين » (farcis) et rghayef sucrés au miel (« الوصفة الأصلية للرغايف المعسلين », 11 mars 2023) ; rghayef de Meknès aux amandes (https://www.lalamoulati.net/364587.html) ; « رغايف معسلة » (https://www.lalamoulati.net/358886.html) ; listes d'ingrédients seulement, vidéos non vues"
  },
  {
   "name": "MarocMama, Amanda Mouttaki (Américaine installée au Maroc), « Rghaif Stuffed Msemmen Recipe »",
   "url": "https://marocmama.com/rghaif-stuffed-bread/",
   "used_for": "Le rghaif, version salée et farcie du msemmen, souvent vendu dans la rue et « chargé d'oignons » ; 45 min de préparation et 30 min de cuisson pour 10 à 12 ; poêle légèrement huilée ; farce crue non retenue (voir « discrepancies »)"
  },
  {
   "name": "Femmes du Maroc, « Nos ftours du ramadan par région », 14 juin 2016",
   "url": "https://femmesdumaroc.com/archives/nos-ftours-du-ramadan-par-region",
   "used_for": "À Fès, « msemmen au khlii » parmi les gourmandises du ftour"
  },
  {
   "name": "Wikipédia (français), « Msemen »",
   "url": "https://fr.wikipedia.org/wiki/Msemen",
   "used_for": "« Rghayf (rghaïf) ou rghayef » parmi les noms marocains ; msemmen ou rghayef farcis au khlii, à la viande hachée, aux légumes, à la graisse épicée : « rghayef mâamrine » (section signalée comme insuffisamment sourcée)"
  },
  {
   "name": "Wikipédia (anglais), « Msemmen » (la page « Rghaif » y renvoie)",
   "url": "https://en.wikipedia.org/wiki/Msemmen",
   "used_for": "« Msemmen (مسمن) ou rghaif (رغايف) », peut être farci de khlea"
  },
  {
   "name": "Anses, « Eviter les toxi-infections alimentaires en confinement : les bonnes pratiques », 8 avril 2020",
   "url": "https://www.anses.fr/fr/actualite/eviter-toxi-infections-alimentaires-confinement-bonnes-pratiques",
   "used_for": "Sécurité : plats cuisinés maison au réfrigérateur dans les 2 heures et consommés dans les 3 jours ; décongélation au réfrigérateur ou directement par la cuisson ; réchauffer jusqu'à ce que la vapeur s'échappe ; 70 °C à cœur"
  },
  {
   "name": "Lalla Moulati, « المسمن او الرغايف معمرين بالكفتة و الفرماج – شهيوات رمضان », 22 mai 2018",
   "url": "https://www.lalamoulati.net/133425.html",
   "used_for": "Contre-vérification : Le nom « رغايف معمرين » pour des galettes farcies, le msemen appelé aussi rghayef (« المسمن او الرغايف ») et leur place parmi les plats du ramadan."
  },
  {
   "name": "Lalla Moulati, « رغايف معمرين بحشوة هائلة كيجيو رائعين فمائدة رمضان… », 28 avril 2019",
   "url": "https://www.lalamoulati.net/192911.html",
   "used_for": "Contre-vérification : « رغايف معمرين » (rghayef farcis) servis à la table du ramadan."
  },
  {
   "name": "Lalla Moulati, « رغيفة فالمقلاة بحشوة اقتصادية… », 2 septembre 2022",
   "url": "https://www.lalamoulati.net/339448.html",
   "used_for": "Contre-vérification : Le singulier « رغيفة » (rghifa), écrit aussi dans d'autres titres du site ; seconde source après le « r'ghifa » de Choumicha."
  },
  {
   "name": "Choumicha, « R'ghaifs au four feuilletés aux épinards et aux fromages » (n° 843), copie web.archive.org du 3 juillet 2016",
   "url": "https://web.archive.org/web/20160703053659/http://www.choumicha.ma:80/recette/843-rghaifs-au-four-feuilletes-aux-epinards-et-aux-fromages.html",
   "used_for": "Contre-vérification : R'ghaifs farcis classés dans « Ramadan » ; farce refroidie avant de garnir ; boules huilées."
  },
  {
   "name": "Choumicha, « R'ghaifs feuilletées à la confiture » (n° 847), copie web.archive.org du 2 juillet 2015",
   "url": "https://web.archive.org/web/20150702182843/http://www.choumicha.ma:80/recette/847-rghaifs-feuilletees-a-la-confiture.html",
   "used_for": "Contre-vérification : R'ghaifs garnis de confiture d'abricots, classés dans « Ramadan » : le mot désigne aussi des galettes garnies sucrées."
  },
  {
   "name": "Choumicha, « R'ghaifs aux épinards et aux crevettes » (n° 499), copie web.archive.org du 2 août 2017",
   "url": "https://web.archive.org/web/20170802133340/http://www.choumicha.ma/recette/499-rghaifs-aux-epinards-et-aux-crevettes.html",
   "used_for": "Contre-vérification : Farce refroidie, « r'ghifa (crêpe) », 1 c. à s. de farce au milieu, côtés rabattus, four préchauffé à 180 °C ; recette non classée dans « Ramadan »."
  },
  {
   "name": "Morocco World News, Layla Dahamou, « Moroccan Cuisine: Recipe for stuffed Msemen », 28 janvier 2013, copie web.archive.org du 19 août 2025",
   "url": "https://web.archive.org/web/20250819055013/https://www.moroccoworldnews.com/2013/01/146197/moroccan-cuisine-recipe-for-stuffed-msemen/",
   "used_for": "Contre-vérification : Texte exact de l'article (le site refuse curl avec une erreur 403) : « known also to some Moroccans as Rghaif or Mlawi », « Msemen Maamer, (Stuffed msemen) », « Let the stuff cool », « 1 tbsp of the stuff in the middle », « medium high heat », « Flip it regularly », « Serve hot with tea in breakfast or for evening snack »."
  }
 ],
 "discrepancies": [
  "Ce que veut dire « rghayef » (رغايف) : le mot n'a pas un seul sens au Maroc. (1) Un autre nom du msemen : Taste of Maroc (« msemen ou parfois rghaif »), My Moroccan Food (« msemen, aussi appelé rghaif »), Wikipédia en anglais. (2) Le nom de toute la famille des galettes feuilletées, carrées ou rondes : Morocco World News 2017 (« carrées ou rondes… appelées aussi rghaif ») et 2019 (le meloui « aussi appelé rghaif »), Taste of Maroc (« pâte à rghaif »). (3) Surtout les galettes farcies, « rghayef m'ammrin » : sur choumicha.ma, les dix recettes dont le titre contient « r'ghaifs » ont toutes une garniture, salée ou sucrée (viande hachée, oignons, légumes, crevettes, fromages, amandes, confiture, chocolat ; cinq lues en entier), comme les « رغايف معمرين » de Lalla Moulati, le « Msemen Maamer » de Morocco World News, les rghaifs aux oignons de Bladi.net, le rghaif de la rue « chargé d'oignons » de MarocMama et les rghaif de Fès décrits par Guinaudeau. (4) Des pâtisseries sucrées : r'ghaifs aux amandes frits et trempés dans le miel (Choumicha), « رغايف معسلة » au miel et rghayef de Meknès aux amandes, gâteau de l'Aïd (Lalla Moulati). Choix retenu : la version farcie salée, distincte du msemen (carré nature, déjà dans l'application) et du malwi (rond, roulé en spirale).",
  "Farce : oignon, persil et khlii (Bladi.net, « Rghaifs aux oignons », avec « gras de bœuf ou khlii », et « M'semmen » : oignon, persil, khlii et épices ; khlii seul chez Cooking with Alia et dans le m'laoui de Choumicha ; msemmen au khlii à Fès selon Femmes du Maroc ; khlii cité par Wikipédia), viande hachée (Choumicha n° 257 et 497, My Moroccan Food, Morocco World News 2013, Cooking with Alia n° 939, MarocMama), graisse épicée (Guinaudeau, Bladi.net). Retenu : oignon, persil et khlii ; la viande hachée et la graisse sont en variantes.",
  "Fermeture : farce au centre puis bords rabattus pour l'enfermer (Choumicha n° 257, 497 et 501, Bladi.net, My Moroccan Food, Morocco World News 2013 : 4 sources indépendantes), ou farce étalée sur toute la feuille puis pliée comme un msemen (Cooking with Alia, MarocMama ; le m'laoui au khlii de Choumicha se fait aussi ainsi). Retenu : farce au centre, bords rabattus.",
  "Cuisson : à la poêle (Morocco World News 2013, Cooking with Alia, MarocMama ; « traditionnellement » selon My Moroccan Food) ou au four (Choumicha à 180 °C ; My Moroccan Food 18 à 20 min à 200 °C ; Bladi.net, plaque allant au four ; Guinaudeau, four du quartier à Fès). Retenu : la poêle, comme le msemen et le malwi ; le four est en variante.",
  "Feu : moyen-vif (Morocco World News 2013 ; Cooking with Alia, après avoir chauffé à feu vif) ou moyen (MarocMama). Retenu : moyen-vif, en baissant si la galette colore trop vite.",
  "Pâte : farine et semoule fine 2 pour 1 (Cooking with Alia, 375 g et 190 g ; 2,5 pour 1 chez Morocco World News ; environ 4 pour 1 chez MarocMama), farine seule (Choumicha n° 257, My Moroccan Food), farine fine de blé dur seule (Choumicha n° 111), moitié « farine de blé », moitié farine blanche (Bladi.net). Retenu : 375 g de farine et 190 g de semoule fine (Cooking with Alia), même proportion que le malwi.",
  "Eau, ramenée à 565 g de farine et semoule (calcul python3) : 360 ml (Cooking with Alia), 353 ml (My Moroccan Food), 286 ml (Morocco World News), 283 ml (Choumicha n° 257). Retenu : 320 ml, médiane, à verser petit à petit.",
  "Sel de la pâte, ramené à 565 g : 1 c. à c. (Cooking with Alia), 1,4 (My Moroccan Food), 1,6 (Morocco World News), 0,6 (Choumicha). Médiane 1,2 ; retenu 1 c. à c., car la farce au khlii est déjà salée.",
  "Levure : aucune chez Choumicha, Cooking with Alia et My Moroccan Food (qui la dit facultative, sans vraie différence) ; un peu chez Bladi.net, Morocco World News et MarocMama. Retenu : sans levure.",
  "Repos : 5 min (Bladi.net) et 10 min (Choumicha n° 111) pour la pâte entière, avant de la diviser ; pour les pâtons, 15 min après 15 min de repos de la pâte (Cooking with Alia), 30 min (My Moroccan Food). Retenu : 15 min.",
  "Taille : pâtons de 70 g (Cooking with Alia) ; boules de 7 cm pour 12 galettes de 15 cm (My Moroccan Food) ; « grosseur d'un œuf » (Bladi.net). Avec cette pâte (environ 890 g, calcul), 12 pâtons d'environ 75 g. Disque étiré : 28 cm (Cooking with Alia). Galette aplatie : 12 cm (Cooking with Alia) à 15 cm (My Moroccan Food).",
  "Quantités de farce ramenées à 12 galettes (calcul python3 ; le nombre de galettes de Choumicha est estimé à environ 10 d'après ses abaisses de 2 mm coupées en carrés de 15 cm) : oignons 4 gros (My Moroccan Food), 4,8 (Choumicha n° 497), 7,2 (Choumicha n° 501), 0,9 (Cooking with Alia) : retenu 4 gros ; khlii 90 g (Cooking with Alia) et 120 g (Choumicha, m'laoui) : retenu 100 g ; huile 4 c. à s. (Choumicha n° 497 et 501), 2 (My Moroccan Food), 1/2 verre à thé (Bladi.net) : retenu 4 c. à s. ; persil 1 bouquet (Bladi.net, Choumicha n° 501) ; cumin 1 c. à c. (My Moroccan Food pour 4 oignons, Bladi.net pour 1 kg d'oignons) ; paprika 2 c. à c. (My Moroccan Food, Choumicha n° 257 ; Bladi.net : 1 c. à s. pour 1 kg d'oignons) ; poivre 1/2 c. à c. (Choumicha n° 497, Morocco World News ; une pincée chez Bladi.net, 1 c. à c. chez Choumicha n° 501) ; piment fort selon le goût (Guinaudeau ; facultatif chez My Moroccan Food ; 1/4 c. à c. chez Choumicha n° 111).",
  "Farce par galette : 1 c. à s. (Choumicha, Morocco World News, Cooking with Alia pour le khlii seul), 2 c. à s. (Bladi.net, farce aux oignons ; Cooking with Alia pour la viande), 2 à 3 c. à s. (My Moroccan Food, farce riche en oignons). Médiane, une valeur par source : 1 c. à s. ; mais les deux farces les plus proches de celle-ci, riches en oignons, en demandent 2 à 3. Retenu : 1 à 2 c. à s., en répartissant toute la farce entre les galettes.",
  "Beurre et huile pour façonner : à parts égales (Choumicha : 100 g de beurre et 10 cl d'huile ; Bladi.net : « moitié-moitié »). Beurre : 1/4 de tasse, environ 57 g (Morocco World News, MarocMama), 100 g pour 500 g de pâte (Choumicha). Retenu : 60 g de beurre et 4 c. à s. d'huile. Semoule : 6 c. à s. (Cooking with Alia), 1/2 tasse (MarocMama), 2 c. à s. (Bladi.net) : retenu 6 c. à s.",
  "MarocMama met la viande crue dans la farce et compte sur la cuisson de la galette : non retenu. Pour la sécurité, la farce est entièrement cuite avant de garnir, comme chez Choumicha, My Moroccan Food, Morocco World News et Cooking with Alia ; l'Anses indique que 70 °C à cœur élimine la majorité des microbes pathogènes.",
  "Durées affichées : préparation de 60 min : 45 min chez MarocMama, dont la farce est crue et mixée, plus les 15 min de cuisson de la farce (minuteurs de 10 et 5 min) ; Choumicha n° 111 annonce aussi 45 min, pour des r'ghaifs cuits au four ; cuisson de 30 min (Choumicha n° 497 et 111 ; MarocMama) ; repos de 15 min pour les pâtons. Le refroidissement de la farce se fait pendant le pétrissage et le repos.",
  "Contre-vérifiée le 7 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 13 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Durée de cuisson d'une galette à la poêle : seule Cooking with Alia donne un chiffre (3 min par face, en retournant plusieurs fois) ; pas de minuteur pour cette étape.",
  "Poids d'un « gros oignon » : aucune source ne le donne ; Bladi.net compte 1 kg d'oignons pour une quantité de pâte donnée en « bols » de taille inconnue.",
  "Quantité de farce obtenue : 12 galettes à 1 à 2 c. à s. demandent environ 180 à 360 ml de farce ; le volume réel des oignons cuits n'a pas été mesuré, d'où la consigne de répartir toute la farce.",
  "Guinaudeau : seul l'extrait public de ckbk a été lu ; la liste de la farce s'arrête au troisième ingrédient et la méthode s'arrête au pétrissage. La date de l'édition française d'origine n'a pas été vérifiée.",
  "Lalla Moulati : pages vues seulement pour leurs titres et listes d'ingrédients ; les méthodes sont en vidéo, non vues.",
  "Wikipédia (fr) : la section sur les noms marocains est signalée comme insuffisamment sourcée ; elle ne sert qu'en recoupement.",
  "Le singulier « rghifa » : écrit par Choumicha (« r'ghifa (crêpe) ») et, en arabe, par Lalla Moulati (« رغيفة ») ; son usage selon les régions n'a pas été vérifié.",
  "Sens du mot selon les régions (par exemple « msemen appelé rghaif dans certaines régions ») : non vérifié région par région ; Hespress et Le360 n'ont pas pu être consultés sur ce point. La recherche web a été arrêtée par la limite de 200 recherches par tour, partagée entre les agents.",
  "Choumicha, n° 497 : la recette demande « 500 g de pâte à r'ghaifs » sans dire combien de galettes ; le nombre (environ 10) est estimé par calcul.",
  "Halal : selon Taste of Maroc, le gueddid du khlii est le plus souvent de bœuf ou de chameau, parfois d'agneau ou de mouton, et il est confit dans du suif de bœuf et de l'huile d'olive, ou conservé dans l'huile d'olive seule ; aucune source lue ne dit si le khlii vendu en France est certifié halal : vérifie l'étiquette (viande et graisse) ou demande au boucher."
 ],
 "cuisine": "Marocaine",
 "rayon": "Pains",
 "pairs": [
  "the-menthe"
 ],
 "img_alt": "Assortiment de rghayef carrés, dorés à la poêle (la farce ne se voit pas sur la photo)",
 "img": "img/rghayef.jpg",
 "photo": {
  "author": "Indif",
  "license": "CC BY-SA 3.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/3.0",
  "page": "https://commons.wikimedia.org/wiki/File:Msemmen-Ghrayef.jpg",
  "modified": "réduite"
 }
});
