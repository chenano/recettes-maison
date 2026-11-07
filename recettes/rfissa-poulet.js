/* Recette : Rfissa au poulet, lentilles et fenugrec. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "rfissa-poulet",
 "title": "Rfissa au poulet, lentilles et fenugrec",
 "darija": "rfissa bel djaj",
 "arabic": "رفيسة بالدجاج",
 "tagline": "Des lanières de msemen fumantes, imbibées d'un bouillon au fenugrec et au ras el hanout, sous un poulet tendre, des lentilles et des oignons fondus : le plat de fête qu'on offre à la jeune maman.",
 "category": "Plat",
 "occasion": "Naissances (surtout le troisième jour après l'accouchement), baptêmes, repas de famille et soirées de ramadan",
 "region": "Maroc (nombreuses versions familiales ; bormache à Meknès)",
 "servings": 6,
 "servings_label": "personnes",
 "time": {
  "prep": 25,
  "cook": 150,
  "rest": 360,
  "rest_label": "Trempage"
 },
 "difficulty": "Moyen",
 "equipment": [
  "Un bol pour le trempage du fenugrec",
  "Une grande marmite à fond épais avec couvercle",
  "Un couscoussier, pour réchauffer les msemen à la vapeur",
  "Un carré de mousseline (ou d'étamine) et de la ficelle, si tu veux enfermer le fenugrec",
  "Une louche et une écumoire",
  "Un grand plat de service rond",
  "Un ou deux bols pour le bouillon servi à part"
 ],
 "ingredients": [
  {
   "group": "Poulet et sauce aux oignons",
   "items": [
    {
     "id": "poulet",
     "q": 1.8,
     "u": "kg",
     "name": "de poulet entier halal, beldi (fermier) si possible",
     "note": "entier ou coupé en quatre ; un poulet beldi demande environ 1 h de cuisson de plus",
     "canon": "poulet"
    },
    {
     "id": "oignons",
     "q": 3,
     "u": "",
     "name": "gros oignon",
     "pl": "gros oignons",
     "note": "à émincer finement",
     "canon": "oignon"
    },
    {
     "id": "huile",
     "q": 6,
     "u": "c. à s.",
     "name": "d'huile d'olive",
     "canon": "huile-olive"
    },
    {
     "id": "smen",
     "q": 1,
     "u": "c. à c.",
     "name": "de smen (beurre rance marocain)",
     "note": "ou du beurre",
     "canon": "smen"
    },
    {
     "id": "gingembre",
     "q": 2,
     "u": "c. à c.",
     "name": "de gingembre moulu",
     "canon": "gingembre"
    },
    {
     "id": "curcuma",
     "q": 1.5,
     "u": "c. à c.",
     "name": "de curcuma",
     "canon": "curcuma"
    },
    {
     "id": "ras-el-hanout",
     "q": 1,
     "u": "c. à c.",
     "name": "de ras el hanout",
     "note": "frais, acheté chez un épicier de confiance",
     "canon": "ras-el-hanout"
    },
    {
     "id": "poivre",
     "q": 0.75,
     "u": "c. à c.",
     "name": "de poivre noir moulu",
     "canon": "poivre"
    },
    {
     "id": "safran",
     "q": 1,
     "u": "pincée",
     "name": "de pistils de safran",
     "note": "environ 15 pistils",
     "canon": "safran"
    },
    {
     "id": "sel",
     "q": null,
     "u": "",
     "name": "Sel, selon le goût",
     "note": "repère : environ 1½ c. à c. en tout ; rectifie à la fin",
     "canon": "sel"
    }
   ]
  },
  {
   "group": "Bouillon, fenugrec et lentilles",
   "items": [
    {
     "id": "fenugrec",
     "q": 3,
     "u": "c. à s.",
     "name": "de graines de fenugrec (helba)",
     "note": "à faire tremper la veille",
     "canon": "fenugrec"
    },
    {
     "id": "persil",
     "q": 0.5,
     "u": "botte",
     "name": "de persil plat",
     "canon": "persil"
    },
    {
     "id": "coriandre",
     "q": 0.5,
     "u": "botte",
     "name": "de coriandre fraîche",
     "canon": "coriandre"
    },
    {
     "id": "eau",
     "q": 1.5,
     "u": "l",
     "name": "d'eau",
     "note": "plus un peu d'eau chaude si le bouillon baisse",
     "canon": "eau"
    },
    {
     "id": "lentilles",
     "q": 150,
     "u": "g",
     "name": "de lentilles vertes ou brunes",
     "note": "pas de lentilles corail : elles se défont",
     "canon": "lentilles"
    }
   ]
  },
  {
   "group": "Pour finir et servir",
   "items": [
    {
     "id": "smen-fin",
     "q": 1.5,
     "u": "c. à c.",
     "name": "de smen, pour finir",
     "note": "ou du beurre",
     "canon": "smen"
    },
    {
     "id": "msemen",
     "q": 12,
     "u": "",
     "name": "msemen",
     "pl": "msemen",
     "note": "une fournée de la recette du msemen de l'application, soit 2 par personne",
     "canon": "msemen",
     "recipe": "msemen"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "La veille : fais tremper le fenugrec",
   "text": "Mets {{fenugrec}} de graines de fenugrec dans un bol et couvre-les largement d'eau froide. Laisse tremper toute la nuit, ou au moins 6 h : les graines ramollissent et deviennent moins fortes. Tu as oublié ? Verse de l'eau bouillante dessus et attends 1 à 2 h.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Prépare les msemen à l'avance",
   "text": "Prépare {{msemen:full}} avec la recette du msemen de l'application, sans la dernière étape au miel et au beurre, la veille ou pendant que le poulet mijote. Dès la sortie de la poêle, encore chauds, déchire-les en lanières de la taille d'une bouchée. Une fois froides, garde les lanières dans un sac ; si tu les fais plus d'un jour à l'avance, congèle-les.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Émince, hache, rince",
   "text": "Émince finement {{oignons:full}}. Hache finement {{persil}} de persil et {{coriandre}} de coriandre. Rince {{lentilles}} de lentilles et égoutte-les. Égoutte le fenugrec ; si tu veux, noue-le dans un carré de mousseline pour pouvoir le retirer au moment de servir.",
   "timer": null,
   "img": {
    "src": "img/etapes/hacher-persil.jpg",
    "alt": "Persil haché au couteau sur une planche",
    "caption": "Hacher les herbes",
    "w": 803,
    "h": 1000,
    "credit": "Photo de l'étape « Émince, hache, rince » : katerha, Wikimedia Commons, licence CC BY 2.0 (réduite)."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Mets tout dans la marmite",
   "text": "Dans une grande marmite, mets {{poulet}} de poulet, entier ou coupé en quatre, avec les oignons, {{huile}} d'huile d'olive et {{smen}} de smen. Ajoute {{gingembre}} de gingembre, {{curcuma}} de curcuma, {{ras-el-hanout}} de ras el hanout, {{poivre}} de poivre, {{safran}} de safran émietté et un peu de sel. Remue pour bien enrober le poulet d'épices.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Laisse la sauce se former",
   "text": "Couvre et laisse cuire à feu moyen 20 min, en remuant de temps en temps. C'est prêt quand les oignons ont ramolli et qu'une sauce épaisse s'est formée.",
   "timer": {
    "min": 20,
    "label": "Sauce aux oignons",
    "done": "Une sauce épaisse s'est formée ? Ajoute l'eau et le fenugrec."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Ajoute l'eau et le fenugrec",
   "text": "Ajoute le fenugrec égoutté, les herbes hachées et {{eau}} d'eau. Porte à ébullition, puis couvre et baisse à feu moyen-doux. Poulet beldi : laisse mijoter 1 h avant d'ajouter les lentilles. Poulet standard : ajoute les lentilles tout de suite et passe à l'étape suivante.",
   "timer": {
    "min": 60,
    "label": "Poulet beldi, 1re heure",
    "done": "Ajoute les lentilles : c'est l'étape suivante."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Ajoute les lentilles et laisse mijoter",
   "text": "Ajoute les lentilles, couvre et laisse mijoter à feu moyen-doux environ 1 h, jusqu'à ce que les lentilles et le poulet soient bien tendres. À mi-cuisson, goûte le bouillon et rajoute de l'eau chaude s'il a trop baissé : il doit en rester beaucoup. Si le poulet est cuit avant les lentilles, sors-le et mets-le de côté, couvert.",
   "timer": {
    "min": 60,
    "label": "Lentilles",
    "done": "Goûte une lentille : elle doit être tendre. Sinon, prolonge la cuisson."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Rectifie et finis au smen",
   "text": "Goûte le bouillon : il doit être très parfumé. Rectifie le sel, puis ajoute {{smen-fin}} de smen et fais tourner la marmite pour le fondre dans le bouillon. Si tu avais sorti le poulet, remets-le quelques minutes pour le réchauffer.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Réchauffe les msemen à la vapeur",
   "text": "Porte à ébullition de l'eau dans le bas du couscoussier. Mets les lanières de msemen dans le haut et laisse-les chauffer à la vapeur 10 min, jusqu'à ce qu'elles soient brûlantes et souples.",
   "timer": {
    "min": 10,
    "label": "Msemen à la vapeur",
    "done": "Les lanières sont brûlantes et souples : dresse tout de suite."
   }
  },
  {
   "phase": "Service",
   "title": "Dresse la rfissa",
   "text": "Étale les lanières chaudes dans un grand plat rond, en couche épaisse : on ne doit plus voir le fond. Arrose-les de quelques louches de bouillon, puis pose le poulet au centre, entier ou en morceaux. Répartis dessus les lentilles et les oignons à l'écumoire, puis verse presque tout le bouillon en gardant un ou deux bols à part.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Sers très chaud",
   "text": "Si tu as noué le fenugrec dans la mousseline, verse les graines dans un petit bol pour les amateurs. Pose le plat au milieu de la table et sers aussitôt, très chaud, avec les bols de bouillon : chacun mange de son côté du plat, à la main ou à la cuillère.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Fais tremper le fenugrec toute la nuit, ou au moins 6 h : les graines ramollissent et perdent une partie de leur force. Oublié ? Couvre-les d'eau bouillante et attends 1 à 2 h.",
   "source": "Taste of Maroc ; Paula Wolfert (au moins 4 h dans l'eau tiède)"
  },
  {
   "text": "Enferme le fenugrec dans un petit sac de tissu (la « kemmoussa ») : il parfume le bouillon sans qu'on croque les graines, et tu les sers à part pour les amateurs.",
   "source": "Barlamane (Hajja Fatima, cuisinière de fêtes à Casablanca) ; Choumicha ; Taste of Maroc"
  },
  {
   "text": "Le bouillon épais et parfumé (« mdaghmar ») vient des oignons : mets-en beaucoup et laisse-les cuire longtemps à feu doux, jusqu'à ce qu'ils fondent comme une crème.",
   "source": "Barlamane (Hajja Fatima)"
  },
  {
   "text": "Prends un ras el hanout frais, acheté chez un épicier de confiance : c'est « l'âme » de la rfissa. Pour tante Aïcha, de Beni Mellal, il fait « monter le plat de dix crans ».",
   "source": "Barlamane (Hajja Fatima) ; Paula Wolfert (recette de tante Aïcha)"
  },
  {
   "text": "Prévois un bouillon abondant : les msemen en boivent beaucoup. Rajoute de l'eau chaude en cours de cuisson s'il baisse, goûte-le (il doit être très parfumé) et garde-en un ou deux bols pour servir à part.",
   "source": "Taste of Maroc ; MarocMama ; Paula Wolfert ; Lalla Moulati"
  },
  {
   "text": "Déchire les msemen encore chauds, puis réchauffe les lanières 10 min à la vapeur du couscoussier juste avant de servir : elles deviennent brûlantes et souples, prêtes à boire le bouillon.",
   "source": "Taste of Maroc ; Paula Wolfert ; Choumicha"
  },
  {
   "text": "Un poulet beldi a plus de goût et tient mieux la longue cuisson. Avec un poulet standard, sors-le du bouillon dès qu'il est cuit pour qu'il ne se défasse pas.",
   "source": "Barlamane (Hajja Fatima) ; Taste of Maroc"
  },
  {
   "text": "Termine par une cuillère de smen en faisant tourner la marmite : sans lui, ceux qui connaissent le plat sentent la différence.",
   "source": "Taste of Maroc ; Choumicha"
  }
 ],
 "mistakes": [
  "Mettre le fenugrec sans trempage si tu le veux doux : les graines restent plus dures et plus fortes (Taste of Maroc). Le trempage n'est pas obligatoire pour autant : Choumicha, Lalla Moulati et Bladi.net s'en passent.",
  "Prendre des lentilles corail : elles se défont et disparaissent dans la sauce. Prends des vertes ou des brunes.",
  "Être avare de bouillon : la rfissa doit rester bien arrosée, car les msemen en absorbent beaucoup.",
  "Laisser un poulet standard dans la marmite une fois cuit, si les lentilles ne le sont pas encore : il finit par se défaire.",
  "Attendre que les msemen refroidissent pour les déchirer : fais-le dès la sortie de la poêle.",
  "Prendre un ras el hanout éventé : c'est lui qui donne son parfum au bouillon.",
  "Être avare de msemen : il en faut assez pour couvrir tout le fond du plat.",
  "Servir tiède : la rfissa se mange très chaude, msemen compris."
 ],
 "serving": "Sers la rfissa très chaude, dans un grand plat rond posé au milieu de la table : chacun mange de son côté, à la main ou à la cuillère (Taste of Maroc). Garde un ou deux bols de bouillon à part, et les graines de fenugrec dans un petit bol pour ceux qui aiment. C'est le plat qu'on offre à la jeune maman, surtout le troisième jour après la naissance, et qu'on partage en famille (Le360, Taste of Maroc).",
 "variants": [
  "Au trid à la place des msemen : feuilles de pâte très fines, cuites sans les colorer, puis découpées en lanières (Choumicha, « pâte à rfissa » ; Bladi.net ; Lalla Moulati). Selon Hajja Fatima (Barlamane), le trid doit être fin comme du papier et bien défait, pour boire le bouillon sans devenir pâteux.",
  "Rfissa medhoussa sur de la harcha émiettée, ou treda sur du pain rassis coupé en dés (Taste of Maroc) ; MarocMama confirme aussi le pain déchiré, en réponse à une lectrice qui avait pris une baguette.",
  "Msakhen à la place du ras el hanout, surtout par temps froid car il est plus relevé : 1½ c. à s. de msakhen pour 1 c. à s. de ras el hanout chez Taste of Maroc ; Lalla Moulati laisse aussi le choix.",
  "Bormache, la version de Meknès : beaucoup d'ail, des herbes séchées (zaatar, fliou, merseta), du piment de Cayenne et des tomates ; les lentilles y sont facultatives (Taste of Maroc, recette de Jameela Khiyati).",
  "Avec de l'ail (4 à 6 gousses dans la marinade et une tête entière dans le bouillon) et, en hiver, une tasse de fèves sèches (Lalla Moulati).",
  "Marinade la veille : poulet, oignons, huile et épices mélangés dans la marmite et gardés au frais toute la nuit (au moins 6 h), puis cuisson directe (Taste of Maroc ; Lalla Moulati).",
  "Oignons en deux temps : un oignon râpé au début et les autres émincés avec les lentilles (Paula Wolfert) ; Lalla Moulati met 2 oignons hachés au début et 4 émincés quand le poulet a pris couleur.",
  "Lentilles cuites à part : couvertes d'eau et cuites jusqu'à évaporation, puis mijotées 10 min avec une louche de sauce (Choumicha).",
  "Poulet doré quelques minutes au four ou sous le gril avant de servir (Taste of Maroc ; Bladi.net) ; pour un poulet servi entier, Taste of Maroc le finit au four à 230 °C.",
  "Sans couscoussier : arrose les lanières d'un peu d'eau, couvre-les et réchauffe-les au micro-ondes (Taste of Maroc)."
 ],
 "sources": [
  {
   "name": "Choumicha (Choumicha Chafay), « Rfissa au poulet », site officiel choumicha.ma, copie archivée du 29 novembre 2023",
   "url": "https://web.archive.org/web/20231129211908/https://www.choumicha.ma/recette/337-r-fissa-au-poulet.html",
   "used_for": "Source marocaine. Recette pour 4 : poulet de 1,2 kg, 2 gros oignons émincés, 10 pistils de safran, gingembre, curcuma, poivre, 4 c. à s. d'huile, 1 l d'eau, 100 g de lentilles, smen au début et à la fin ; fenugrec dans un sachet de mousseline ; pâte réchauffée à la vapeur du couscoussier ; service très chaud ; plat classé « Baptême »."
  },
  {
   "name": "Choumicha, « Préparation de la pâte à Rfissa », copie archivée du 11 décembre 2023",
   "url": "https://web.archive.org/web/20231211040021/https://choumicha.ma/recette/335-preparation-de-la-pate-a-r-fissa.html",
   "used_for": "Quantité de pâte : 500 g de farine pour 4 personnes ; feuilles découpées aux ciseaux ou émiettées."
  },
  {
   "name": "Lalla Moulati (مطبخ لالة مولاتي), « طريقة تحضير الرفيسة المغربية بالصور للمبتدئين » (la rfissa marocaine en photos, pour débutantes), 9 février 2017",
   "url": "https://www.lalamoulati.net/57567.html",
   "used_for": "Source marocaine (en arabe). Poulet beldi conseillé, 1/4 de tasse de fenugrec, 1 c. à c. de ras el hanout ou de msakhen, 2 l d'eau, quantité de bouillon à surveiller pendant la cuisson, dressage (bouillon sur les lanières, puis lentilles, oignons et fenugrec), variantes ail et fèves."
  },
  {
   "name": "Barlamane.com, « Les secrets de la table marocaine (7) : la rfissa, plat de la générosité des soirées de ramadan », 12 mars 2026 (en arabe)",
   "url": "https://barlamane.com/%D8%A3%D8%B3%D8%B1%D8%A7%D8%B1-%D8%A7%D9%84%D9%85%D8%A7%D8%A6%D8%AF%D8%A9-%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9-7-%D8%A7%D9%84%D8%B1%D9%81%D9%8A%D8%B3%D8%A9-%D8%B7%D8%A8%D9%82-%D8%A7/",
   "used_for": "Média marocain. Secrets de Hajja Fatima, « dada » (cuisinière de fêtes) à Casablanca : poulet beldi, oignons fondus à feu très doux pour un bouillon épais, fenugrec en kemmoussa, ras el hanout frais ; trid fin comme du papier. Avis de l'historien Rachid Habbaba (université Ibn Tofail) : lentilles et fenugrec, ajout marocain au tharid, en ont fait le plat de la jeune maman ; soirées de ramadan."
  },
  {
   "name": "Le360 (édition arabe), « La rfissa marocaine, deuxième meilleur plat de poulet au monde pour novembre 2025 », 26 novembre 2025",
   "url": "https://ar.le360.ma/culture/HNO7WY5ND5CKLC64G6TDERVFHE/",
   "used_for": "Média marocain. Ingrédients de base (poulet, oignons, lentilles, safran, gingembre, fenugrec, sur msemen ou trid) ; servie aux naissances, surtout le troisième jour, et mangée en commun autour d'un grand plat."
  },
  {
   "name": "Bladi.net, « Rfissa ou trid »",
   "url": "https://www.bladi.net/recettes/rfissa-ou-trid.html",
   "used_for": "Portail marocain. Recoupement des proportions (1/2 c. à c. de gingembre et de ras el hanout, 1/2 verre à thé de fenugrec, 1 verre à thé de lentilles pour un poulet), feuilles réchauffées au couscoussier, poulet doré au four, plat rond bien arrosé."
  },
  {
   "name": "Taste of Maroc (Christine Benlafquih, Casablanca), « Moroccan Chicken Rfissa – Trid with Chicken and Lentils », mise à jour du 17 mars 2022, copie archivée du 7 décembre 2025",
   "url": "https://web.archive.org/web/20251207074840/https://tasteofmaroc.com/moroccan-chicken-rfissa/",
   "used_for": "Recette la plus détaillée, pour 6 : fenugrec trempé la veille (ou 1 à 2 h à l'eau bouillante), sauce aux oignons 15 à 20 min à couvert, durées pour poulet beldi et poulet standard, beaucoup de bouillon et bols à part, smen à la fin, vapeur 10 min, 1 fournée et demie de msemen, troisième jour après la naissance, variantes."
  },
  {
   "name": "Taste of Maroc, « Moroccan Bormache Recipe – Meknes Style Rfissa », copie archivée du 7 décembre 2025",
   "url": "https://web.archive.org/web/20251207064711/http://tasteofmaroc.com/moroccan-bormache-recipe-meknes-style-rfissa/",
   "used_for": "Variante de Meknès ; confirme que fenugrec, safran, gingembre et ras el hanout sont les épices habituelles de la rfissa."
  },
  {
   "name": "Taste of Maroc, « Msemen Recipe », copie archivée du 22 décembre 2025",
   "url": "https://web.archive.org/web/20251222011641/https://tasteofmaroc.com/msemen-recipe/",
   "used_for": "Rendement de sa fournée de msemen (environ 20 msemen de 10 cm avec 3½ tasses de farine et ½ tasse de semoule), pour comparer les quantités."
  },
  {
   "name": "Paula Wolfert, The Food of Morocco (Bloomsbury), recette de tante Aïcha de Beni Mellal, reprise par Gourmet Traveller le 23 octobre 2012",
   "url": "https://www.gourmettraveller.com.au/recipe/mains/msemmen-with-rfissa-11219/",
   "used_for": "Référence anglophone, pour 8 : fenugrec trempé au moins 4 h à l'eau tiède, 300 g de lentilles, ras el hanout qui « fait monter le plat de dix crans », msemmen déchirés chauds puis réchauffés 10 min à la vapeur, lentilles à l'écumoire, reste du bouillon servi à part."
  },
  {
   "name": "MarocMama (Amanda Mouttaki), « The Mothers' Meal: Rfisa », 2012, mis à jour en 2019",
   "url": "https://marocmama.com/the-mothers-meal-rfisa/",
   "used_for": "Quantité de msemen (6 à 10 selon leur taille, pour 6 à 8 personnes ; on ne doit plus voir le fond du plat), plat qui doit rester bien arrosé, lentilles brunes plutôt que corail."
  },
  {
   "name": "Morocco World News (Layla Dahamou), « Moroccan Cuisine: “Rfissa” Chicken Sauce », 4 mai 2012",
   "url": "https://www.moroccoworldnews.com/2012/05/152601/moroccan-cuisine-rfissa-chicken-sauce/",
   "used_for": "Contre-vérification : Média marocain, non cité par l'auteur : la rfissa est préparée traditionnellement pour la femme qui vient d'accoucher et servie lors des visites entre femmes ; gros poulet, 4 oignons émincés, gingembre, curcuma, poivre, ras el hanout, ail, huile d'olive, ¼ de tasse de fenugrec, lentilles, 1,5 l d'eau ; servie sur du trid découpé."
  },
  {
   "name": "Morocco World News (Safaa Kasraoui), « Moroccan Cuisine: Recipe for Rfissa, Savory Chicken With Lentils », 29 août 2020",
   "url": "https://www.moroccoworldnews.com/2020/08/66905/moroccan-cuisine-recipe-for-rfissa-savory-chicken-with-lentils/",
   "used_for": "Contre-vérification : Recette pour 4 à 5 : poulet, 2 gros oignons, gingembre, curcuma, fenugrec (sans trempage), lentilles, smen, ail, persil, 1 l d'eau (autocuiseur 45 min) ; msemen coupés en morceaux et réchauffés à la vapeur ; poulet au centre, lentilles et ail posés à l'écumoire dessus et autour, puis la sauce."
  },
  {
   "name": "Lalla Moulati, « الرفيسة التقليدية برستيج بالدجاج البلدي » (la rfissa traditionnelle au poulet beldi), 18 février 2022",
   "url": "https://www.lalamoulati.net/312784.html",
   "used_for": "Contre-vérification : Deuxième recette marocaine en arabe : poulet beldi, oignon, safran, poivre noir, lentilles et fèves, huile d'olive, smen, coriandre et persil ; trid étiré jusqu'à être presque transparent puis cuit à la poêle sans huile ; dressage : trid en bouchées, poulet au centre, lentilles dessus et autour, le tout arrosé de bouillon."
  },
  {
   "name": "Hibapress (édition française), « Dans une ambiance et des traditions marocaines.. Shorouk Al-Chalouti célèbre la « veille du Rafisa » pour célébrer sa naissance à Dubaï », 16 octobre 2024",
   "url": "https://fr.hibapress.com/news-139880.html",
   "used_for": "Contre-vérification : Média marocain : la « 3chiya Rfissa » (soirée de la rfissa) fête la naissance d'un enfant après l'accouchement, dans le cadre de l'aqiqa : confirme les occasions naissance et baptême."
  },
  {
   "name": "NCCIH (National Institutes of Health, États-Unis), « Fenugreek: Usefulness and Safety »",
   "url": "https://www.nccih.nih.gov/health/fenugreek",
   "used_for": "Contre-vérification : Sécurité : le fenugrec est jugé sûr pour les adultes et les enfants aux quantités habituelles des aliments ; au-delà, il est déconseillé pendant la grossesse ; allergies possibles ; on sait peu de chose des fortes doses pendant l'allaitement. Les 3 c. à s. pour 6 de la recette sont une dose culinaire, et la recette n'avance aucun bienfait santé."
  }
 ],
 "discrepancies": [
  "Méthode : quantités ramenées à 6 personnes à partir des trois recettes qui donnent un nombre de parts (Taste of Maroc pour 6, Choumicha pour 4, Paula Wolfert pour 8), en retenant la valeur du milieu ; Lalla Moulati, Bladi.net et MarocMama servent de recoupement. Conversions approchées : 1 tasse ≈ 237 ml, 1 tasse de lentilles ≈ 190 g.",
  "Poulet : 1 gros poulet pour 6 sans poids précis (Taste of Maroc), 1,2 kg pour 4 (Choumicha), 1,8 kg pour 8 (Paula Wolfert) : retenu 1,8 kg pour 6.",
  "Oignons : 3 gros pour 6 (Taste of Maroc), 2 gros pour 4 (Choumicha), 5 gros pour 8 (Paula Wolfert), 6 chez Lalla Moulati : retenu 3 gros oignons, tous émincés et mis au début.",
  "Fenugrec : 4 c. à s. pour 6 (Taste of Maroc), 4 c. à s. pour 8 (Paula Wolfert), 1/4 de tasse, soit 4 c. à s. (Lalla Moulati), 1/2 verre à thé (Bladi.net), 1 c. à s. pour 4 « pour les amateurs » (Choumicha) : retenu 3 c. à s. pour 6.",
  "Trempage du fenugrec : une nuit ou au moins 6 h à l'eau froide (Taste of Maroc), au moins 4 h à l'eau tiède (Paula Wolfert) ; Choumicha, Lalla Moulati et Bladi.net le mettent sans trempage. Retenu le trempage, qui ramollit les graines et atténue leur force selon Taste of Maroc.",
  "Ras el hanout : 1 c. à s. (Taste of Maroc), 1 c. à c., ou du msakhen (Lalla Moulati), 1/2 c. à c. (Paula Wolfert, Bladi.net), aucun chez Choumicha : retenu 1 c. à c., valeur du milieu des recettes qui en mettent.",
  "Lentilles : environ 100 g pour 6 (Taste of Maroc, 1/2 tasse), 100 g pour 4 (Choumicha), 300 g pour 8 (Paula Wolfert), 2 tasses (Lalla Moulati), 1 verre à thé (Bladi.net) : retenu 150 g.",
  "Eau : environ 1,06 l pour 6 (Taste of Maroc, qui dit en mettre souvent moitié plus), 1 l pour 4 (Choumicha), 80 ml puis 3,75 l pour 8 (Paula Wolfert), 2 l (Lalla Moulati), 1/2 l (Bladi.net) : retenu 1,5 l, plus de l'eau chaude si besoin.",
  "Gingembre : 1½ c. à s. pour 6 (Taste of Maroc), 1 c. à c. bombée pour 4 (Choumicha), ¾ c. à s. pour 8 (Paula Wolfert) : retenu 2 c. à c. Curcuma : 1½ c. à c. pour 6 (Taste of Maroc), 1 c. à c. pour 4 (Choumicha), ¾ c. à s. pour 8 (Paula Wolfert) : retenu 1½ c. à c. Poivre : 1 c. à s. pour 6 (Taste of Maroc), ½ c. à c. pour 4 (Choumicha), 1 c. à c. pour 8 (Paula Wolfert) : retenu ¾ c. à c.",
  "Safran : 10 pistils pour 4 (Choumicha), 1½ c. à c. de pistils pour 6 (Taste of Maroc), ½ cuillère de safran ou de curcuma (Lalla Moulati), aucun chez Paula Wolfert : retenu 1 pincée, soit environ 15 pistils.",
  "Huile : 1/2 tasse d'huile d'olive pour 6, soit 8 c. à s. (Taste of Maroc), 4 c. à s. pour 4 (Choumicha), 4 c. à s. pour 8 (Paula Wolfert) : retenu 6 c. à s., d'olive comme chez Taste of Maroc, Paula Wolfert et Lalla Moulati.",
  "Smen : 1 c. à c. au début et 1 c. à c. à la fin pour 4 (Choumicha), 1½ c. à c. à la fin pour 6 (Taste of Maroc), 1 c. à c. de ghee en cours de cuisson pour 8 (Paula Wolfert), 1 à 2 c. à s. dans la marinade (Lalla Moulati) : retenu 1 c. à c. au début et 1½ c. à c. à la fin.",
  "Marinade : la veille chez Taste of Maroc (au moins 6 h) et Lalla Moulati ; aucune chez Choumicha, Paula Wolfert et Bladi.net : recette sans marinade, marinade proposée en variante.",
  "Lentilles : ajoutées après 1 h avec un poulet beldi et dès le début avec un poulet standard (Taste of Maroc), après environ 35 min (Paula Wolfert), dès le début (Lalla Moulati, Bladi.net) ou cuites à part (Choumicha) : retenu le schéma de Taste of Maroc. Leur trempage (une nuit chez Taste of Maroc, 30 min chez Paula Wolfert) n'est pas retenu : Choumicha, Lalla Moulati et Bladi.net ne les font pas tremper.",
  "Cuisson : 15 à 20 min, puis 1 h, puis 1 h avec un poulet beldi, ou 15 à 20 min puis 1 h avec un poulet standard (Taste of Maroc) ; 45 min annoncées par Choumicha ; 10 + 25 + 20 à 25 min chez Paula Wolfert ; au moins 1 h chez Lalla Moulati, 1 h chez Bladi.net. Temps affiché pour un poulet beldi, vapeur comprise (2 h 30) ; compte environ 1 h de moins avec un poulet standard.",
  "Herbes : hachées (Taste of Maroc) ou en bouquet (Choumicha ; Paula Wolfert les ficelle) : retenu hachées, pour ne rien avoir à retirer.",
  "Msemen : 1 fournée et demie de sa recette pour 6 chez Taste of Maroc (environ 780 g de farine et de semoule) ; 500 g de farine pour 4 chez Choumicha (environ 750 g pour 6) ; 16 msemmen faits avec 410 g de farines pour 8 chez Paula Wolfert (environ 310 g pour 6) ; 6 à 10 msemen pour 6 à 8 chez MarocMama ; 500 g de farine par poulet chez Bladi.net. Retenu : une fournée de la recette du msemen de l'application (12 msemen, 600 g de farine et de semoule), proche de la valeur du milieu.",
  "Temps de préparation : 25 min hors msemen, estimés pour émincer, hacher, mesurer et dresser ; Taste of Maroc annonce 1 h et Choumicha 45 min (1 h 30 au total moins 45 min de cuisson), sans dire si la pâte est comprise. Repos : 6 h, la durée minimale de trempage du fenugrec chez Taste of Maroc.",
  "Taste of Maroc et Choumicha ont été lus sur des copies archivées (web.archive.org) : le 6 novembre 2026, le site de Taste of Maroc refusait l'accès automatique (erreur 403) et celui de Choumicha était hors ligne (erreur 525).",
  "Contre-vérifiée le 6 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 4 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Les bienfaits du fenugrec pour la jeune maman (récupération, montée de lait) : croyance traditionnelle rapportée par Taste of Maroc, Barlamane et MarocMama, non vérifiée sur le plan médical ; elle n'est citée que comme tradition.",
  "Faire bouillir le fenugrec 5 min pour lui retirer son amertume : vu seulement dans un résumé de résultats de recherche (blogs français), page non ouverte.",
  "Fenugrec moulu à la place des graines : Taste of Maroc ne l'a jamais essayé (elle propose de commencer par ½ à 1 c. à c.) et aucune autre source ne le confirme.",
  "Région d'origine précise de la rfissa : aucune source consultée ne la donne ; toutes la présentent comme un plat marocain."
 ],
 "cuisine": "Marocaine",
 "rayon": "Plats",
 "img": "img/rfissa.jpg",
 "photo": {
  "author": "مصطفى ملو",
  "license": "CC BY-SA 4.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/4.0",
  "page": "https://commons.wikimedia.org/wiki/File:ERrfisa.jpg",
  "modified": "réduite"
 }
});
