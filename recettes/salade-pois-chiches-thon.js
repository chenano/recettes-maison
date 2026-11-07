/* Recette : Salade de pois chiches au thon. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "salade-pois-chiches-thon",
 "title": "Salade de pois chiches au thon",
 "darija": "Chlada d l-hommos b t-ton",
 "arabic": "سلطة الحمص بالتونة",
 "tagline": "Pois chiches, thon, tomates cerises et oignon rouge, au citron et à l'huile d'olive : la salade italienne sans cuisson, prête en un quart d'heure.",
 "category": "Rapide",
 "occasion": "Repas froid express, midi ou soir, quand on n'a pas envie de cuisiner ni d'allumer le feu ; elle s'emporte facilement au travail ou en balade (Il Cucchiaio d'Argento ; Donna Moderna ; Le dolcezze di mamma Nenè).",
 "region": "Italie : l'« insalata di ceci e tonno », salade familiale surtout servie l'été. Les recettes italiennes y mettent volontiers de l'oignon rouge de Tropea (Cotto in un click ; La cucina di Loredana ; Le dolcezze di mamma Nenè).",
 "servings": 4,
 "servings_label": "personnes",
 "time": {
  "prep": 15,
  "cook": 0,
  "rest": 0
 },
 "difficulty": "Facile",
 "equipment": [
  "Ouvre-boîte",
  "Passoire",
  "Grand saladier",
  "Deux petits bols",
  "Planche et couteau bien aiguisé",
  "Presse-agrumes (facultatif)",
  "Fourchette"
 ],
 "ingredients": [
  {
   "group": "Salade",
   "items": [
    {
     "id": "pois-chiches",
     "q": 400,
     "u": "g",
     "name": "de pois chiches cuits",
     "note": "en conserve ; poids égoutté",
     "canon": "pois-chiches"
    },
    {
     "id": "thon",
     "q": 160,
     "u": "g",
     "name": "de thon en conserve, à l'huile d'olive ou au naturel",
     "note": "poids égoutté",
     "canon": "thon"
    },
    {
     "id": "tomates-cerises",
     "q": 200,
     "u": "g",
     "name": "de tomates cerises",
     "canon": "tomate"
    },
    {
     "id": "oignon-rouge",
     "q": 1,
     "u": "",
     "name": "petit oignon rouge",
     "pl": "petits oignons rouges",
     "canon": "oignon-rouge"
    },
    {
     "id": "eau",
     "q": null,
     "u": "",
     "name": "eau froide",
     "note": "pour faire tremper l'oignon",
     "canon": "eau"
    },
    {
     "id": "basilic",
     "q": null,
     "u": "",
     "name": "feuilles de basilic frais",
     "note": "facultatif ; ou du persil plat",
     "canon": "basilic"
    }
   ]
  },
  {
   "group": "Assaisonnement",
   "items": [
    {
     "id": "citron",
     "q": 1,
     "u": "",
     "name": "citron",
     "pl": "citrons",
     "note": "pour le jus",
     "canon": "citron"
    },
    {
     "id": "huile-olive",
     "q": 4,
     "u": "c. à s.",
     "name": "d'huile d'olive vierge extra",
     "canon": "huile-olive"
    },
    {
     "id": "origan",
     "q": null,
     "u": "",
     "name": "origan séché",
     "note": "selon le goût",
     "canon": "origan"
    },
    {
     "id": "sel",
     "q": null,
     "u": "",
     "name": "sel",
     "note": "selon le goût",
     "canon": "sel"
    },
    {
     "id": "poivre",
     "q": null,
     "u": "",
     "name": "poivre noir",
     "note": "selon le goût",
     "canon": "poivre"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Presse le citron",
   "text": "Presse {{citron:full}} et verse le jus dans un petit bol.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Émince l'oignon",
   "text": "Pèle et coupe en tranches très fines {{oignon-rouge:full}}.",
   "timer": null,
   "img": {
    "src": "img/etapes/oignon-emince.jpg",
    "alt": "Oignon émincé et ail écrasé sur une planche",
    "caption": "Émincer l'oignon",
    "w": 1000,
    "h": 750,
    "credit": "Photo de l'étape « Émince l'oignon » : jchristin, Flickr, licence CC BY 2.0 (réduite)."
   }
  },
  {
   "phase": "Préparation",
   "title": "Adoucis l'oignon",
   "text": "Mets les tranches d'oignon dans un autre petit bol, couvre d'{{eau}} et ajoute un peu du jus de citron. Laisse tremper 5 à 10 minutes, le temps de préparer le reste : l'oignon devient plus doux et reste croquant.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Rince les pois chiches",
   "text": "Verse les pois chiches en conserve dans une passoire. Rince-les sous l'eau froide du robinet et laisse-les bien égoutter : il t'en faut {{pois-chiches}}.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Coupe les tomates",
   "text": "Lave {{tomates-cerises}} de tomates cerises. Coupe-les en deux, ou en quatre si elles sont grosses.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Émiette le thon",
   "text": "Égoutte le thon : il t'en faut {{thon}}. Émiette-le grossièrement à la fourchette, en gardant des morceaux.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Prépare la sauce",
   "text": "Ajoute au reste du jus de citron {{huile-olive}} d'huile d'olive, du {{sel}} et du {{poivre}}. Fouette à la fourchette.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Assemble la salade",
   "text": "Égoutte l'oignon. Dans le saladier, mets les pois chiches, les tomates, l'oignon et le thon.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Assaisonne",
   "text": "Verse la sauce sur la salade, parsème d'{{origan}} et mélange délicatement.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Goûte et sers",
   "text": "Goûte, puis ajoute un peu de sel, de poivre ou de citron si besoin. Parsème de {{basilic}} déchirées et sers tout de suite, ou laisse 30 minutes au frigo pour que les saveurs se mélangent.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Rince bien les pois chiches en conserve, pour enlever le liquide et le sel de la boîte.",
   "source": "Cookist (Silvia Ferrau) ; Chez Bibia ; Donna Moderna ; Le dolcezze di mamma Nenè"
  },
  {
   "text": "Tranche l'oignon rouge très fin, puis fais-le tremper quelques minutes dans de l'eau citronnée : il perd son piquant et reste croquant.",
   "source": "Il Cucchiaio d'Argento (insalata di fagioli e tonno : oignon « in acqua acidulata per una decina di minuti ») ; Cotto in un click (oignon mariné 5 minutes, devenu doux, rose et croquant)"
  },
  {
   "text": "Thon à l'huile : mélange-le avec le reste avant d'assaisonner. Thon au naturel : assaisonne d'abord pois chiches et tomates, et ajoute le thon après.",
   "source": "Il Cucchiaio d'Argento"
  },
  {
   "text": "Choisis un bon thon en filets ; Cookist conseille le thon à l'huile en bocal de verre.",
   "source": "Il Cucchiaio d'Argento ; Cookist (Elpidio)"
  },
  {
   "text": "Émiette le thon grossièrement, à la fourchette : il doit rester en morceaux.",
   "source": "Chez Bibia ; Cotto in un click"
  },
  {
   "text": "La cucina di Loredana retire le jus et les graines des tomates avant de les mettre dans la salade.",
   "source": "La cucina di Loredana"
  },
  {
   "text": "Elle est encore meilleure après 30 minutes au frigo, le temps que les saveurs se mélangent ; mais elle se mange aussi tout de suite.",
   "source": "Le dolcezze di mamma Nenè ; Cotto in un click ; Misya (insalata di fagioli e tonno)"
  },
  {
   "text": "Si elle a passé du temps au frigo, sors-la 5 minutes avant de servir.",
   "source": "Donna Moderna"
  },
  {
   "text": "Pour du croquant, ajoute du céleri en rondelles ou du fenouil en dés ; mamma Nenè propose aussi le concombre.",
   "source": "Donna Moderna ; Le dolcezze di mamma Nenè"
  },
  {
   "text": "En Italie, ce sont l'origan et le basilic qui parfument cette salade.",
   "source": "Il Cucchiaio d'Argento (origan frais) ; Cookist (origan séché et basilic) ; Donna Moderna (origan et basilic) ; Chez Bibia, La cucina di Loredana, Le dolcezze di mamma Nenè (basilic)"
  },
  {
   "text": "Ne sois pas avare d'huile d'olive vierge extra : Donna Moderna parle d'« un generoso filo ».",
   "source": "Donna Moderna"
  },
  {
   "text": "Pas d'oignon rouge ? Prends une cébette, une échalote ou de la ciboulette.",
   "source": "Le dolcezze di mamma Nenè"
  }
 ],
 "mistakes": [
  "Garder le reste de thon dans la boîte ouverte : vide-la dans un bol ou un autre récipient et mets-le au frigo, car l'étain de la boîte ouverte peut passer plus vite dans l'aliment (Food Standards Agency, Royaume-Uni).",
  "Utiliser une boîte visiblement bombée, profondément cabossée, ou rouillée à cause d'une bosse : n'en mange pas le contenu ; une petite bosse peu profonde, sans autre dégât, ne pose pas de problème (Food Standards Agency).",
  "Mettre l'oignon cru sans le faire tremper : il est plus piquant et plus lourd (Cotto in un click).",
  "Laisser les pois chiches mal égouttés : ils doivent perdre toute l'eau de la boîte (Donna Moderna ; Cookist).",
  "Garder la salade plus longtemps que le lendemain : au frigo, dans une boîte fermée, une journée au plus (Cookist ; La cucina di Loredana).",
  "Pour une femme enceinte, dépasser 4 boîtes moyennes de thon par semaine (environ 140 g égouttés chacune), à cause de polluants comme le mercure (NHS, Royaume-Uni)."
 ],
 "serving": "Sers-la froide, en plat unique ou en entrée (Cookist ; Donna Moderna). Donna Moderna la sert dans de petits bols, avec des feuilles de basilic et des croûtons de pain poêlés ; Misya sert sa salade de haricots au thon avec un quartier de citron.",
 "variants": [
  "Version du Cucchiaio d'Argento : pois chiches, tomates cerises, thon et origan frais, avec seulement huile d'olive, sel et poivre, sans oignon ni citron.",
  "Version de Cookist : pois chiches, tomates cerises, thon à l'huile, origan séché et basilic, sans oignon ni citron.",
  "Version de Donna Moderna : sans tomates, avec jus de citron, origan et basilic, et un peu de céleri si tu veux ; 2 heures au frigo, puis croûtons de pain poêlés au service.",
  "Version riche d'Agrodolce : maïs, olives de Gaeta, cerneaux de noix, tomates séchées et ciboulette.",
  "Version de La cucina di Loredana : avec concombre en fines rondelles, olives noires et basilic.",
  "Avec œufs durs et roquette (Cucina facile con Elena ; Rita amor di cucina) : compte environ 10 minutes pour cuire les œufs (Cucina facile con Elena).",
  "Au vinaigre de cidre à la place du citron (Chez Bibia ; Cotto in un click).",
  "Avec des haricots blancs à la place des pois chiches : l'« insalata di fagioli e tonno », avec cébette, jus de citron et persil (Il Cucchiaio d'Argento ; Misya).",
  "Avec du persil à la place du basilic, comme dans l'insalata di ceci de Misya ou l'insalata di fagioli e tonno (Il Cucchiaio d'Argento ; Misya).",
  "Autre poisson : maquereau au naturel ou saumon fumé à la place du thon (Donna Moderna ; Cookist pour le saumon fumé). Si tu es enceinte, le NHS demande de cuire le saumon fumé jusqu'à ce qu'il soit fumant, à cause de la listeria, et de ne pas dépasser 2 portions par semaine de poisson gras comme le maquereau."
 ],
 "sources": [
  {
   "name": "Il Cucchiaio d'Argento (Editoriale Domus), « Insalata di ceci e tonno », 7 juin 2024",
   "url": "https://www.cucchiaio.it/ricetta/insalata-ceci-e-tonno/",
   "used_for": "Recette de référence italienne pour 4, prête en 10 minutes : 460 g de pois chiches cuits, 10 tomates cerises, 120 g de thon, origan frais, huile d'olive, sel, poivre ; pois chiches rincés, tomates coupées en deux ou en quatre ; ordre différent selon thon à l'huile ou au naturel ; bon thon en filets ; repas rapide quand on n'a pas envie de cuisiner."
  },
  {
   "name": "Cookist, Elpidio, « Insalata di ceci », 4 août 2025",
   "url": "https://www.cookist.it/la-ricetta-insalata-di-ceci/",
   "used_for": "Pour 4 en 10 minutes : 500 g de pois chiches précuits, 200 g de tomates cerises, 120 g de thon à l'huile, origan séché, basilic, huile d'olive, sel, poivre ; rinçage à l'eau froide ; thon de qualité en bocal de verre ; conservation 1 jour au plus au frigo ; saumon fumé en variante."
  },
  {
   "name": "Donna Moderna, « Ricetta: insalata di ceci e tonno », 3 novembre 2020 (copie archivée du 12 septembre 2025 : le site refuse les robots, erreur 403)",
   "url": "https://web.archive.org/web/20250912095342/https://ricette.donnamoderna.com/ricetta-insalata-di-ceci-e-tonno-187285",
   "used_for": "400 g de pois chiches précuits, 200 g de thon, 1 citron, céleri en option, origan, basilic, huile d'olive « généreuse » ; pois chiches bien égouttés puis rincés ; 2 heures au frigo, sortie 5 minutes avant ; céleri ou fenouil pour le croquant ; variantes (oignon, tomates, maïs, olives, maquereau) ; 2 jours au frigo en boîte hermétique."
  },
  {
   "name": "Agrodolce, « Insalata di ceci e tonno », 31 mai 2017 (copie archivée du 13 octobre 2025 : le site refuse les robots, erreur 403)",
   "url": "https://web.archive.org/web/20251013212110/https://www.agrodolce.it/ricette/insalata-ceci-tonno",
   "used_for": "Version riche pour 4 en 15 minutes : 300 g de pois chiches, 200 g de thon à l'huile, maïs, olives de Gaeta, noix, tomates séchées, ciboulette."
  },
  {
   "name": "Il Cucchiaio d'Argento, « Insalata di fagioli e tonno », 7 août 2023",
   "url": "https://www.cucchiaio.it/ricetta/insalata-di-fagioli-e-tonno/",
   "used_for": "La salade sœur aux haricots : cébette de Tropea en rondelles trempée une dizaine de minutes dans de l'eau acidulée, jus d'½ citron, persil ; meilleure préparée quelques heures à l'avance."
  },
  {
   "name": "Misya (Flavia Imperatore), « Insalata di fagioli e tonno », 19 juillet 2012 (mise à jour le 5 mai 2022)",
   "url": "https://www.misya.info/ricetta/insalata-di-fagioli-e-tonno.htm",
   "used_for": "Recette familiale (« mia nonna e mia mamma ») : 160 g de thon pour 4, cébette, persil, sel, huile, au moins 30 minutes au frigo, servie avec un quartier de citron."
  },
  {
   "name": "Misya (Flavia Imperatore), « Insalata di ceci », 17 mai 2017 (mise à jour le 30 septembre 2018)",
   "url": "https://www.misya.info/ricetta/insalata-di-ceci.htm",
   "used_for": "Salade de pois chiches sans thon : 300 g de pois chiches pour 4, oignon de Tropea en rondelles, persil, olives : appui pour la variante au persil."
  },
  {
   "name": "Cookist, Silvia Ferrau, « Insalata di ceci, tonno e patate », 19 juin 2024",
   "url": "https://www.cookist.it/insalata-di-ceci-e-tonno/",
   "used_for": "Rincer les pois chiches pour enlever le sel et l'eau de la boîte ; laisser égoutter le thon quelques minutes."
  },
  {
   "name": "Cotto in un click (blog GialloZafferano), « Insalata di ceci, tonno e cipolla », 17 juillet 2026",
   "url": "https://blog.giallozafferano.it/cottoinunclick/ricetta-insalata-di-ceci-tonno-e-cipolla/",
   "used_for": "Pour 1 : 150 g de pois chiches, 100 g de thon, ½ oignon rouge de Tropea, 15 g d'huile ; oignon très fin mariné 5 minutes (vinaigre de cidre et sel) contre la lourdeur de l'oignon cru ; thon émietté à la fourchette ; meilleure après une demi-heure au frigo ; 1 à 2 jours au plus en boîte fermée."
  },
  {
   "name": "Chez Bibia (blog GialloZafferano), « Insalata di ceci e tonno », 25 mai 2018",
   "url": "https://blog.giallozafferano.it/chezbibia/insalata-di-ceci-e-tonno/",
   "used_for": "Pour 4 : 350 g de pois chiches, 160 g de thon à l'huile, 200 g de tomates cerises, olives, basilic, vinaigre de cidre ; pois chiches rincés à l'eau froide ; thon émietté grossièrement."
  },
  {
   "name": "La cucina di Loredana (blog GialloZafferano), « Insalata di ceci e tonno », 7 juillet 2021",
   "url": "https://blog.giallozafferano.it/lacucinadiloredana/insalata-di-ceci-e-tonno/",
   "used_for": "Pour 4 : 250 g de pois chiches, 160 g de thon, 150 g d'oignon rouge de Tropea, 250 g de tomates cerises épépinées, concombre, olives, basilic, 4 à 5 c. à s. d'huile ; se garde un jour au frigo."
  },
  {
   "name": "Le dolcezze di mamma Nenè (blog GialloZafferano), « Insalata di ceci con tonno e pomodorini », 11 mai 2026",
   "url": "https://blog.giallozafferano.it/ledolcezzedimammanene/insalata-di-ceci-con-tonno/",
   "used_for": "Pour 4 : 250 g de pois chiches et 160 g de thon (poids égouttés), 20 tomates cerises, 2 oignons de Tropea, 20 g d'huile, basilic ; rincer les pois chiches ; meilleure après 30 minutes au frigo ; oignon remplaçable par cébette, échalote ou ciboulette ; céleri ou concombre pour le croquant ; plat sans cuisson à emporter."
  },
  {
   "name": "Rita amor di cucina (blog GialloZafferano), « Insalata di ceci e tonno », 30 juin 2026",
   "url": "https://blog.giallozafferano.it/ritaamordicucina/insalata-di-ceci-e-tonno/",
   "used_for": "Pour 4 : 400 g de pois chiches, 150 g de thon égoutté, 50 g d'oignon rouge mariné au vinaigre, 20 g d'huile, œuf dur, olives, roquette, basilic, origan."
  },
  {
   "name": "Forno e fornelli (blog GialloZafferano), « Insalata di ceci e tonno », 9 juillet 2020",
   "url": "https://blog.giallozafferano.it/fornoefornelli/insalata-di-ceci-e-tonno/",
   "used_for": "Pour 2 : 250 g de pois chiches, 50 g de thon, 10 tomates cerises, 20 g d'oignon rouge, 40 g d'huile : données pour les médianes."
  },
  {
   "name": "Cucina facile con Elena (blog GialloZafferano), « Insalata di ceci al tonno », 17 mai 2019 (mise à jour le 29 juin 2023)",
   "url": "https://blog.giallozafferano.it/cucinafacileconelena/insalata-di-ceci-al-tonno/",
   "used_for": "Pour 4 : 150 g de thon égoutté, 3 c. à s. d'huile, jus de citron, sel, poivre ; variante aux œufs durs (environ 10 minutes de cuisson) et roquette."
  },
  {
   "name": "NHS (Royaume-Uni), « Foods to avoid in pregnancy », page revue le 15 juin 2026",
   "url": "https://www.nhs.uk/pregnancy/keeping-well/foods-to-avoid/",
   "used_for": "Femme enceinte : pas plus de 4 boîtes de thon par semaine, à cause des polluants comme le mercure."
  },
  {
   "name": "Food Standards Agency (Royaume-Uni), GOV.UK, « Home food fact checker », mis à jour le 21 août 2026",
   "url": "https://www.gov.uk/government/publications/home-food-fact-checker/home-food-fact-checker",
   "used_for": "Ne pas garder un aliment dans une boîte de conserve ouverte : le transvaser et le mettre au frigo ; boîtes bombées ou très cabossées à éviter."
  },
  {
   "name": "USDA FoodData Central (API officielle) : huile d'olive (FDC 171413) ; oignon cru (FDC 170000)",
   "url": "https://api.nal.usda.gov/fdc/v1/food/171413?api_key=DEMO_KEY",
   "used_for": "Conversions : 1 c. à s. d'huile d'olive = 13,5 g ; un petit oignon = 70 g (fiche 170000 lue par la même API)."
  },
  {
   "name": "NHS (Royaume-Uni), « Fish and shellfish », page revue le 26 juin 2026",
   "url": "https://www.nhs.uk/live-well/eat-well/food-types/fish-and-shellfish-nutrition/",
   "used_for": "Contre-vérification : Pour une femme enceinte ou qui essaie de l'être : pas plus de 4 boîtes de thon ou 2 steaks de thon par semaine, car le thon contient plus de mercure que les autres poissons ; ces chiffres valent pour une boîte moyenne d'environ 140 g égouttés ; aucune limite pendant l'allaitement."
  },
  {
   "name": "Lalla Moulati (site marocain), « سلطة الحمص », recette publiée le 9 décembre 2015",
   "url": "https://www.lalamoulati.net/29747.html",
   "used_for": "Contre-vérification : Le nom arabe « سلطة الحمص » (salade de pois chiches) est employé par un site marocain ; seul le nom a été vérifié, pas la recette."
  }
 ],
 "discrepancies": [
  "Pois chiches pour 4 (9 recettes) : 250, 250, 300, 350, 400, 460, 500, 500 et 600 g. Médiane retenue : 400 g. Forno e fornelli (250 g pour 2) ne dit pas si le poids est cuit ou sec ; sans elle, la médiane serait 375 g.",
  "Thon pour 4 (10 recettes) : de 100 g (Forno e fornelli) à 400 g (Cotto in un click), le plus souvent 120 à 200 g. Médiane 155 g, arrondie à 160 g, la quantité de Chez Bibia, La cucina di Loredana et mamma Nenè. Seules Rita amor di cucina, mamma Nenè et Elena précisent que c'est le poids égoutté.",
  "Tomates cerises : 10 pièces (Cucchiaio), 20 pièces (mamma Nenè), 200 g (Cookist, Chez Bibia), 250 g (Loredana). Retenu : 200 g.",
  "Oignon rouge pour 4 : 40 g (Forno e fornelli), 50 g (Rita amor di cucina), 150 g (Loredana) ; en pièces : 1 oignon (Misya, salade sans thon), 2 oignons (mamma Nenè, Cotto in un click). Retenu : 1 petit oignon (70 g selon l'USDA), entre la médiane en grammes (50 g) et les recettes en pièces.",
  "Huile d'olive pour 4 : 1,5 c. à s. (Rita amor di cucina, mamma Nenè : 20 g), 3 (Elena), 4,4 (Cotto in un click), 4 à 5 (Loredana), 5,9 (Forno e fornelli) ; « q.b. » ailleurs. Médiane 3,7 : retenu 4 c. à s.",
  "Acidité : jus de citron (Donna Moderna 1 citron, Elena 1 citron, Cucchiaio et Misya pour la version aux haricots), vinaigre de cidre (Chez Bibia, Cotto in un click), rien (Cucchiaio et Cookist pour les pois chiches). Retenu : 1 citron (médiane des recettes au citron), le vinaigre est en variante.",
  "Oignon adouci : eau acidulée une dizaine de minutes (Cucchiaio, version aux haricots), vinaigre et sel 5 minutes (Cotto in un click), eau et vinaigre au moins une heure (Rita amor di cucina). Retenu : 5 à 10 minutes dans de l'eau froide citronnée ; pas de minuteur, faute de durée commune.",
  "Rinçage des pois chiches : eau froide (Chez Bibia ; Cookist « acqua corrente fredda »), eau chaude (Donna Moderna). Retenu : eau froide.",
  "Herbes : origan et basilic dans les salades de pois chiches au thon ; persil dans les salades de haricots au thon (Cucchiaio, Misya) et dans l'insalata di ceci de Misya. Retenu : origan et basilic, persil en variante.",
  "Conservation : 1 jour (Cookist, La cucina di Loredana), 1 à 2 jours (Cotto in un click), 2 jours (Donna Moderna, Le dolcezze di mamma Nenè, Rita amor di cucina, Forno e fornelli), 2 à 3 jours (Cucina facile con Elena). Retenu : jusqu'au lendemain, le plus prudent.",
  "Contre-vérifiée le 7 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 6 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Noms en darija et en arabe : traduction descriptive (« salade de pois chiches au thon »), pas un nom établi trouvé dans une source.",
  "Le site principal de GialloZafferano n'a pas de recette éditoriale de cette salade dans les pages trouvées : seuls des blogs de son réseau ont été lus.",
  "La Cucina Italiana n'est pas accessible à l'outil de recherche ; Fatto in casa da Benedetta refuse les robots (403) : non lus.",
  "Buonissimo (« Insalata di ceci e tonno ») a été écarté : la page dit avoir été rédigée avec l'aide de l'intelligence artificielle.",
  "Aucune source italienne institutionnelle (par exemple l'Accademia Italiana della Cucina) n'a été consultée pour dire que la recette est « classique » ; elle est présentée comme un grand classique par plusieurs magazines et blogs italiens.",
  "Pour le Cucchiaio d'Argento, Cookist, Donna Moderna et Agrodolce, on ne sait pas si le poids du thon est net ou égoutté.",
  "Disponibilité au Maroc du basilic frais et de l'oignon rouge : non vérifiée sur une source."
 ],
 "cuisine": "Italienne",
 "rayon": "D'ailleurs",
 "rayons": [
  "D'ailleurs",
  "Salades"
 ],
 "img_alt": "Salade de pois chiches au thon (photo d'une version avec carotte et fromage)",
 "img": "img/salade-pois-chiches-thon.jpg",
 "photo": {
  "author": "laurenhcraig",
  "license": "CC BY-NC 2.0",
  "license_url": "https://creativecommons.org/licenses/by-nc/2.0/",
  "page": "https://www.flickr.com/photos/68917691@N08/9194950488",
  "modified": "réduite"
 }
});
