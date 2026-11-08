/* Recette : Salade marocaine. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "salade-marocaine",
 "title": "Salade marocaine",
 "darija": "Chlada",
 "arabic": "شلاضة",
 "tagline": "Tomates, concombre et oignon coupés tout petits, persil, citron, huile d'olive et une pointe de cumin : la salade fraîche, sans cuisson, qui accompagne beaucoup de plats au Maroc.",
 "category": "Rapide",
 "occasion": "Tous les jours, en entrée (Wikipédia FR, Cuisine marocaine) ou à côté d'un tajine, de grillades ou de poisson (My Moroccan Food ; MarocMama). Prête en 20 minutes, sans cuisson (Cooking With Alia ; Choumicha).",
 "region": "Tout le Maroc : pour My Moroccan Food, c'est la salade la plus courante et la plus simple de la cuisine marocaine.",
 "servings": 4,
 "servings_label": "personnes",
 "time": {
  "prep": 20,
  "cook": 0,
  "rest": 0
 },
 "difficulty": "Facile",
 "equipment": [
  "Planche et couteau bien aiguisé",
  "Brosse à légumes propre, pour le concombre",
  "Torchon propre ou papier absorbant",
  "Saladier",
  "Petit bol, pour la sauce",
  "Presse-agrumes (facultatif)",
  "Grand emporte-pièce (facultatif, pour la présentation)"
 ],
 "ingredients": [
  {
   "group": "Légumes et herbes",
   "items": [
    {
     "id": "tomates",
     "q": 4,
     "u": "",
     "name": "tomate moyenne",
     "pl": "tomates moyennes",
     "canon": "tomate"
    },
    {
     "id": "concombre",
     "q": 1,
     "u": "",
     "name": "concombre",
     "pl": "concombres",
     "canon": "concombre"
    },
    {
     "id": "oignon",
     "q": 1,
     "u": "",
     "name": "petit oignon",
     "pl": "petits oignons",
     "canon": "oignon"
    },
    {
     "id": "persil",
     "q": 2,
     "u": "c. à s.",
     "name": "de persil plat haché",
     "note": "ou de coriandre fraîche",
     "canon": "persil"
    }
   ]
  },
  {
   "group": "Sauce",
   "items": [
    {
     "id": "huile",
     "q": 2,
     "u": "c. à s.",
     "name": "d'huile d'olive",
     "canon": "huile-olive"
    },
    {
     "id": "citron",
     "q": 2,
     "u": "c. à s.",
     "name": "de jus de citron",
     "note": "un citron donne environ 3 c. à s. de jus",
     "canon": "citron"
    },
    {
     "id": "sel",
     "q": 0.5,
     "u": "c. à c.",
     "name": "de sel",
     "note": "à ajuster en goûtant",
     "canon": "sel"
    },
    {
     "id": "cumin",
     "q": 0.25,
     "u": "c. à c.",
     "name": "de cumin moulu",
     "canon": "cumin"
    },
    {
     "id": "poivre",
     "q": null,
     "u": "",
     "name": "poivre noir moulu, selon le goût",
     "canon": "poivre"
    }
   ]
  },
  {
   "group": "Service",
   "items": [
    {
     "id": "khobz",
     "q": null,
     "u": "",
     "name": "pain (khobz)",
     "note": "pour accompagner",
     "canon": "khobz"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Lave les légumes",
   "text": "Lave-toi les mains au savon. Rince {{tomates:full}}, {{concombre:full}} et le persil sous l'eau courante, sans savon. Frotte le concombre avec une brosse propre, puis sèche le tout avec un torchon propre.",
   "timer": null,
   "tip": "Les légumes et les herbes qui se mangent crus doivent être lavés soigneusement (Anses). Pas de savon ni de produit vaisselle : les légumes peuvent l'absorber (FDA)."
  },
  {
   "phase": "Préparation",
   "title": "Coupe les tomates",
   "text": "Coupe chaque tomate en deux, retire les graines, puis coupe la chair en petits dés d'environ ½ cm.",
   "timer": null,
   "tip": "Garde la peau, comme Cooking With Alia. Choumicha, elle, pèle ses tomates (salades 627 et 629)."
  },
  {
   "phase": "Préparation",
   "title": "Coupe le concombre",
   "text": "Coupe chaque concombre en deux dans la longueur, retire les graines, puis coupe-le en petits dés de la même taille.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Hache l'oignon",
   "text": "Épluche et hache très finement {{oignon:full}}.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Hache le persil",
   "text": "Effeuille le persil et hache-le finement : il en faut {{persil}} pour la salade.",
   "timer": null,
   "img": {
    "src": "img/etapes/hacher-persil.jpg",
    "alt": "Persil haché au couteau sur une planche",
    "caption": "Hacher les herbes",
    "w": 803,
    "h": 1000,
    "credit": "Photo de l'étape « Hache le persil » : katerha, Wikimedia Commons, licence CC BY 2.0 (réduite)."
   }
  },
  {
   "phase": "Préparation",
   "title": "Réunis les légumes",
   "text": "Mets les tomates, le concombre, l'oignon et le persil dans un saladier. Garde-le au réfrigérateur jusqu'au moment de servir.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Prépare la sauce",
   "text": "Dans un petit bol, mélange {{huile}} d'huile d'olive, {{citron}} de jus de citron, {{sel}} de sel, {{cumin}} de cumin et du {{poivre}}.",
   "timer": null,
   "tip": "Lalla Moulati garde sa sauce au réfrigérateur, à part, jusqu'au service."
  },
  {
   "phase": "Service",
   "title": "Assaisonne au dernier moment",
   "text": "Juste avant de servir, verse la sauce sur les légumes et mélange bien.",
   "timer": null,
   "tip": "Salée trop tôt, la salade rend son eau (Choumicha)."
  },
  {
   "phase": "Service",
   "title": "Goûte et rectifie",
   "text": "Goûte et ajuste le sel, le citron ou le cumin.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Sers bien frais",
   "text": "Sers tout de suite, bien frais, avec du {{khobz}}, à côté d'un tajine, de grillades ou de poisson.",
   "timer": null,
   "tip": "Pour une jolie assiette, tasse la salade dans un grand emporte-pièce posé sur l'assiette, puis retire-le doucement (Cooking With Alia)."
  }
 ],
 "secrets": [
  {
   "text": "Le secret, c'est la taille : coupe tout très petit, pour avoir un peu de chaque légume dans chaque bouchée.",
   "source": "Cooking With Alia (recettes 208 et 543)"
  },
  {
   "text": "Vise des petits dés réguliers d'environ ½ cm, et un oignon haché encore plus fin.",
   "source": "My Moroccan Food (dés de ½ cm) ; Cooking With Alia, Lalla Moulati (2019) et MarocMama (oignon très fin)"
  },
  {
   "text": "Garde seulement la chair : retire les graines des tomates, et celles du concombre.",
   "source": "My Moroccan Food (tomates et concombre) ; MarocMama et Choumicha (tomates)"
  },
  {
   "text": "Sel et citron au tout dernier moment : sinon les tomates rendent leur eau.",
   "source": "Choumicha, Salade de tomates et de poivrons"
  },
  {
   "text": "Prépare la sauce à part et garde-la au frais jusqu'au service. Servie sans sauce, la salade qui reste se recycle facilement, en omelette par exemple.",
   "source": "Lalla Moulati (2019) ; Choumicha, conseil « حول السلطة »"
  },
  {
   "text": "Le jus de citron plutôt que le vinaigre, si tu en as.",
   "source": "Lalla Moulati (2019) ; citron chez My Moroccan Food et Cooking With Alia"
  },
  {
   "text": "Une pointe de cumin dans la sauce, comme chez Cooking With Alia, Choumicha et Lalla Moulati.",
   "source": "Cooking With Alia (recette 208) ; Choumicha, Salade de tomates et de poivrons ; Lalla Moulati (2019)"
  },
  {
   "text": "De bonnes tomates, c'est la clé : la salade ne vaut que ce que valent ses légumes.",
   "source": "MarocMama"
  },
  {
   "text": "Tomates pas assez sucrées ? Nargisse Benkabbou ajoute une cuillère à café de miel pour équilibrer l'acidité.",
   "source": "My Moroccan Food"
  },
  {
   "text": "Persil ou coriandre : les deux se font au Maroc.",
   "source": "Persil : My Moroccan Food, Choumicha ; coriandre : Cooking With Alia"
  },
  {
   "text": "Un peu d'écorce de citron confit hachée (sans la pulpe) parfume la salade.",
   "source": "Cooking With Alia (recette 208, facultatif) ; Choumicha (salades de tomates au citron confit)"
  },
  {
   "text": "Au Maroc, elle accompagne surtout les tajines, les grillades et le poisson.",
   "source": "My Moroccan Food ; MarocMama"
  }
 ],
 "mistakes": [
  "Saler la salade longtemps à l'avance : les tomates rendent leur eau (Choumicha).",
  "Couper les légumes trop gros (Cooking With Alia).",
  "Laver les légumes au savon ou au produit vaisselle (FDA).",
  "Couper les légumes sur la planche de la viande crue sans l'avoir lavée (Anses).",
  "Laisser la salade plus de 2 heures à température ambiante (Anses)."
 ],
 "serving": "Bien fraîche, en entrée (Wikipédia FR, Cuisine marocaine) ou à côté du plat : tajine, grillades ou poisson (My Moroccan Food ; MarocMama), avec du pain (Cooking With Alia). Au Maroc, plusieurs salades sont souvent posées sur la table avec le plat principal (Wikipédia FR, Cuisine marocaine).",
 "variants": [
  "Salade marocaine de Choumicha : 4 tomates, 1 oignon, 1 poivron vert en petits morceaux, persil, huile d'olive, vinaigre ou jus de citron, sel ; sans concombre, servie avec des brochettes de kefta.",
  "Chlada aux poivrons grillés de Lalla Moulati (2019) : poivrons rouge, vert et jaune grillés et pelés, 4 tomates, un petit oignon, olives vertes et noires, maïs si tu veux ; sauce au citron (ou au vinaigre), huile d'olive, sel, cumin et un peu de poivre.",
  "Salade de tomates au citron confit de Choumicha : tomates pelées, épépinées et concassées, écorce de citron confit, persil, une gousse d'ail, huile d'olive et sel.",
  "Tomate et oignon seulement, au vinaigre et à l'huile d'olive : la salade qui accompagne le poisson chez MarocMama.",
  "Coriandre à la place du persil, et un peu d'écorce de citron confit (Cooking With Alia, recette 208)."
 ],
 "sources": [
  {
   "name": "My Moroccan Food (Nargisse Benkabbou), « Moroccan Tomato and Cucumber Salad », 11 juin 2015 (modifiée le 17 août 2023)",
   "url": "https://www.mymoroccanfood.com/home/moroccan-tomato-and-cucumber-salad",
   "used_for": "Recette pour 4 : 1 gros oignon (200 g) finement haché, 6 tomates moyennes (400 g) et 1 concombre moyen (400 g) épépinés, en dés de ½ cm, 2 c. à s. d'huile d'olive, 2 c. à s. de persil haché, 1 c. à s. de jus de citron, sel, poivre ; tout mélanger et garder au frais jusqu'au service ; miel si les tomates manquent de douceur ; salade marocaine la plus courante et la plus simple, servie à côté des tajines et des grillades."
  },
  {
   "name": "Cooking With Alia, « 208 – Moroccan Tomato Cucumber Salad Recipe » (date non affichée ; plan du site : 14 septembre 2022)",
   "url": "https://www.cookingwithalia.com/moroccan-tomato-cucumber-salad/",
   "used_for": "300 g de tomates, 1 concombre, 1 petit oignon jaune doux, 2 c. à s. de coriandre, jus d'1 citron (au goût), écorce d'¼ de citron confit (facultatif), 1 c. à s. d'huile d'olive, ½ c. à c. de sel, ¼ c. à c. de poivre noir, ¼ c. à c. de cumin ; le secret est de couper très petit ; tomates avec la peau ; goûter et rectifier ; servir avec du pain ; présentation à l'emporte-pièce."
  },
  {
   "name": "Cooking With Alia, « Tomato Cucumber Salad / سلطة الطماطم والخيار » (recette 543 ; date non affichée ; plan du site : 14 septembre 2022)",
   "url": "https://www.cookingwithalia.com/543-tomato-cucumber-salad/",
   "used_for": "20 minutes ; 300 g de tomates, 1 petit concombre, 1 petit oignon, un petit bouquet de coriandre, jus d'¼ de citron, 1 c. à s. d'huile, ¼ c. à c. de sel et de poivre ; couper très petit ; servir froid."
  },
  {
   "name": "Choumicha (Choumicha Chafay), « Brochettes de Kefta et sa salade marocaine », site officiel (copie archivée du 10 avril 2026 ; le site est hors ligne)",
   "url": "https://web.archive.org/web/20260410191558/https://www.choumicha.ma/recette/467-brochettes-de-kefta-et-sa-salade-marocaine.html",
   "used_for": "« Salade marocaine » pour 4 : 4 tomates concassées, 1 oignon émincé, 1 poivron vert en petits morceaux, persil émincé, filet d'huile d'olive, filet de vinaigre ou de jus de citron, sel ; servie avec des brochettes de kefta (variante au poivron)."
  },
  {
   "name": "Choumicha, « أسياخ (قطبان) اللحم المفروم المشوية مرفوقة بالسلطة المغربية », version arabe de la même recette (copie archivée du 12 août 2014)",
   "url": "https://web.archive.org/web/20140812024855/http://www.choumicha.ma/ar/%D9%85%D8%B7%D8%A8%D8%AE/%D8%A3%D8%B3%D9%8A%D8%A7%D8%AE-%D9%82%D8%B7%D8%A8%D8%A7%D9%86-%D8%A7%D9%84%D9%84%D8%AD%D9%85-%D8%A7%D9%84%D9%85%D9%81%D8%B1%D9%88%D9%85-%D8%A7%D9%84%D9%85%D8%B4%D9%88%D9%8A%D8%A9-%D9%85%D8%B1%D9%81%D9%88%D9%82%D8%A9-%D8%A8%D8%A7%D9%84%D8%B3%D9%84%D8%B7%D8%A9-%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9.html",
   "used_for": "Nom arabe « السلطة المغربية » et mêmes ingrédients, pour 4 personnes : vérification croisée."
  },
  {
   "name": "Choumicha, « Salade de tomates et de poivrons », site officiel (copie archivée du 8 mai 2026)",
   "url": "https://web.archive.org/web/20260508111833/https://www.choumicha.ma/recette/629-salade-de-tomates-et-de-poivrons.html",
   "used_for": "Pour 4 : 4 tomates épépinées et concassées, 2 poivrons verts grillés, 1 petit oignon finement émincé, ¼ c. à c. de cumin, sel, 4 c. à s. d'huile, 3 c. à s. de jus de citron ou de vinaigre ; conseil : ajouter sel, citron et vinaigre au dernier moment, juste avant de servir, pour que les légumes ne rendent pas leur eau ; temps total 20 min."
  },
  {
   "name": "Choumicha, « Salade de tomates au citron », site officiel (copie archivée du 8 juin 2026)",
   "url": "https://web.archive.org/web/20260608121157/https://choumicha.ma/recette/627-salade-de-tomates-au-citron.html",
   "used_for": "Pour 4 : 4 grosses tomates pelées, épépinées et concassées, écorce d'½ citron confit, 1 c. à s. de persil, sel, 4 c. à s. d'huile d'olive, 1 gousse d'ail ; servie froide ; temps total 20 min, sans cuisson (variante au citron confit)."
  },
  {
   "name": "Choumicha, « Brochettes de kefta, salades de légumes et velouté de petits pois », site officiel (copie archivée du 17 juin 2026)",
   "url": "https://web.archive.org/web/20260617064508/https://choumicha.ma/recette/771-brochettes-de-kefta-salades-de-legumes-et-veloute-de-petits-pois.html",
   "used_for": "Salade de tomates au citron confit pour 4 : 2 tomates et 1 poivron vert grillés puis pelés, épépinés et coupés en petits dés, 1 petit oignon nouveau, 2 c. à s. de persil, écorce d'¼ de citron confit, 2 c. à s. d'huile d'olive, 2 c. à s. de vinaigre, sel ; servie fraîche."
  },
  {
   "name": "Choumicha, conseil « حول السلطة » (À propos de la salade), version arabe du site (copie archivée du 19 août 2016)",
   "url": "https://web.archive.org/web/20160819093249/http://www.choumicha.ma/ar/astuces/%D8%AD%D9%88%D9%84-%D8%A7%D9%84%D8%B3%D9%84%D8%B7%D8%A9.html",
   "used_for": "Servir les salades froides sans leur sauce, pour pouvoir réutiliser les restes (omelette, gratin)."
  },
  {
   "name": "Lalla Moulati, « ألذ شلاظة مغربية كتحضرها الوليدة ديالي… », 6 novembre 2019, rubrique Cuisine marocaine",
   "url": "https://www.lalamoulati.net/210957.html",
   "used_for": "« Chlada » marocaine de sa mère : poivrons rouge, vert et jaune grillés, 4 tomates en dés, petit oignon en très petits dés, maïs, olives ; sauce à part (vinaigre ou jus de citron, mieux le citron), huile d'olive, sel, cumin, un peu de poivre, gardée au réfrigérateur jusqu'au service."
  },
  {
   "name": "Lalla Moulati, « أروع أطباق السلطات المغربية الخاصة بالضيوف », 4 octobre 2017",
   "url": "https://www.lalamoulati.net/85716.html",
   "used_for": "La « chlada » marocaine figure parmi les salades les plus connues de la cuisine marocaine, avec le zaalouk."
  },
  {
   "name": "Lalla Moulati, « سلطة مغربية », 10 novembre 2014, rubrique Jus et entrées marocaines",
   "url": "https://www.lalamoulati.net/5518.html",
   "used_for": "Écart de vocabulaire : sur ce site, « سلطة مغربية » désigne aussi une salade composée (riz, thon, maïs, légumes, œuf dur)."
  },
  {
   "name": "MarocMama (Amanda Mouttaki, Américaine mariée à un Marocain et installée au Maroc), « Moroccan Tomato and Onion Salad », 21 mai 2013 (modifiée le 22 septembre 2022)",
   "url": "https://marocmama.com/tomato-and-onion-salad/",
   "used_for": "Source d'appoint : de bonnes tomates sont la clé ; tomates épépinées ; oignon coupé très fin ; 3 c. à s. d'huile d'olive, 1½ c. à s. de vinaigre blanc, ½ c. à c. de sel ; servie froide ou à température ambiante, surtout avec le poisson."
  },
  {
   "name": "Wikipédia (fr), « Cuisine marocaine », consulté le 7 novembre 2026",
   "url": "https://fr.wikipedia.org/wiki/Cuisine_marocaine",
   "used_for": "La salade marocaine fait partie des plats typiques ; dans la plupart des maisons, la table porte plusieurs salades (dont tomates et concombres) avec le tajine ou le couscous (référence : Fes Cooking and Cultural Tours, archive 2013)."
  },
  {
   "name": "Anses, « Fiche de description de danger microbiologique transmissible par les aliments : Escherichia coli producteurs de shigatoxines (STEC) / entérohémorragiques (EHEC) », saisine 2024-MPEX-0031, juillet 2024",
   "url": "https://www.anses.fr/sites/default/files/Fiche-EHEC-2024-MPEX-0031.pdf",
   "used_for": "Recommandation aux consommateurs : laver soigneusement, ou éplucher si possible, les légumes, les fruits et les herbes aromatiques qui seront mangés crus ; se laver les mains avant de préparer les repas."
  },
  {
   "name": "Anses, « Fiche de description de danger biologique transmissible par les aliments : Toxoplasma gondii », saisine 2016-SA-0271, mai 2021",
   "url": "https://www.anses.fr/system/files/BIORISK2016SA0271Fi.pdf",
   "used_for": "Femmes enceintes et personnes immunodéprimées non immunisées : lavage soigneux des crudités."
  },
  {
   "name": "Anses, « Conseils d'hygiène dans la cuisine : dix gestes simples pour prévenir les risques microbiologiques », 24 décembre 2020",
   "url": "https://www.anses.fr/fr/article/conseils-dhygiene-cuisine-dix-gestes-simples-prevenir-risques-microbiologiques",
   "used_for": "Se laver les mains au savon avant et pendant la préparation ; une planche pour la viande et le poisson crus, une autre pour les légumes propres ; pas plus de 2 heures à température ambiante avant le réfrigérateur ; 4 °C dans la zone la plus froide."
  },
  {
   "name": "Anses, « En cuisine, le meilleur ingrédient, c'est l'hygiène ! », article du 11 mai 2026",
   "url": "https://www.anses.fr/fr/content/en-cuisine-le-meilleur-ingredient-c-est-l-hygiene",
   "used_for": "Contamination croisée : planche réservée à la viande ou au poisson crus, une autre pour les légumes propres, ou planche bien lavée entre deux ; réfrigérer dans les 2 heures."
  },
  {
   "name": "FDA (États-Unis), « Selecting and Serving Produce Safely », contenu à jour au 5 mars 2024",
   "url": "https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-produce-safely",
   "used_for": "Se laver les mains avant ; laver les légumes sous l'eau courante, sans savon, sans détergent ni produit de lavage ; brosser les légumes fermes comme le concombre ; sécher avec un torchon propre ou du papier absorbant ; retirer les parties abîmées."
  },
  {
   "name": "USDA FoodData Central, fiches 167747 « Lemon juice, raw », 170457 « Tomatoes, red, ripe, raw », 168409 « Cucumber, with peel, raw » et 170000 « Onions, raw » (données SR Legacy lues par l'API officielle)",
   "url": "https://api.nal.usda.gov/fdc/v1/food/167747?api_key=DEMO_KEY",
   "used_for": "Conversions : jus d'1 citron = 48 g, 1 tasse = 244 g, donc 1 c. à s. ≈ 15,25 g et 1 citron ≈ 3,15 c. à s. ; tomate moyenne 123 g ; concombre 301 g ; petit oignon 70 g (fiches lues aux adresses https://api.nal.usda.gov/fdc/v1/food/170457?api_key=DEMO_KEY, https://api.nal.usda.gov/fdc/v1/food/168409?api_key=DEMO_KEY et https://api.nal.usda.gov/fdc/v1/food/170000?api_key=DEMO_KEY). Sert à comparer les doses de citron des sources (médiane)."
  },
  {
   "name": "Lalla Moulati, « شلاضة مكتخطاش طبلتي فالصيف كولشي كيحماق عليها… », 30 juillet 2020, rubrique Cuisine de Lalla Moulati",
   "url": "https://www.lalamoulati.net/245874.html",
   "used_for": "Contre-vérification : La graphie « شلاضة » (avec ض), celle du champ arabic, est employée par ce site marocain, à côté de « شلاظة » (avec ظ, articles de 2017 et 2019). Le mot y désigne une salade en général : ici pommes de terre, maïs et thon. La salade tomates-concombre-oignon est donc une « chlada » parmi d'autres ; Lalla Moulati (2017) parle de « سلطة الشلاظة المغربية » parmi les salades marocaines les plus connues."
  }
 ],
 "discrepancies": [
  "Nom : chez Choumicha, la « salade marocaine » (السلطة المغربية) se fait avec tomates, oignon et poivron vert ; chez Lalla Moulati, « سلطة مغربية » désigne aussi des salades composées (riz, thon, pommes de terre) et sa « chlada » est aux poivrons grillés ; My Moroccan Food et Cooking With Alia appellent salade marocaine la version tomates, concombre et oignon. Retenu cette dernière, comme demandé ; les autres en variantes.",
  "Tomates : 4 pour 4 personnes chez Choumicha (trois recettes) et 4 chez Lalla Moulati ; 6 tomates moyennes pesant 400 g en tout chez My Moroccan Food ; 300 g chez Cooking With Alia ; 2 grosses chez MarocMama. Retenu 4 tomates moyennes.",
  "Oignon : petit chez Cooking With Alia (deux recettes), Choumicha (salade de tomates et de poivrons) et Lalla Moulati ; un oignon chez Choumicha (salade marocaine) ; un gros (200 g) chez My Moroccan Food ; un demi-oignon doux chez MarocMama. Retenu un petit oignon (majorité).",
  "Huile, en c. à s. : 1 (Cooking With Alia, deux recettes), 2 (My Moroccan Food ; Choumicha 771), 3 (MarocMama), 4 (Choumicha 627 et 629). Médiane : 2 c. à s. ; 3,5 si l'on ne garde que les recettes relues données pour 4 (My Moroccan Food 2, MarocMama 3, Choumicha 627 et 629 4), car Cooking With Alia ne donne pas de nombre de parts. Retenu 2 c. à s. d'huile d'olive, la dose de My Moroccan Food, seule recette tomates-concombre-oignon-persil donnée pour 4. Cooking With Alia (543) utilise une huile végétale et Choumicha (629) une « huile » sans précision ; les autres, de l'huile d'olive.",
  "Acidité, en c. à s. : citron 1 (My Moroccan Food), jus d'1 citron soit environ 3,15 (Cooking With Alia 208), jus d'¼ de citron soit environ 0,8 (Cooking With Alia 543), citron ou vinaigre 3 (Choumicha 629), vinaigre 2 (Choumicha 771), vinaigre 1½ (MarocMama). Médiane du citron seul : 2,0 ; médiane de tout : 1,75. Retenu 2 c. à s. de jus de citron, à ajuster.",
  "Herbes : persil chez My Moroccan Food (2 c. à s.) et Choumicha (2 c. à s. dans la recette 771) ; coriandre chez Cooking With Alia (2 c. à s. dans la recette 208). Retenu 2 c. à s. de persil, coriandre en remplacement.",
  "Moment de l'assaisonnement : au dernier moment chez Choumicha et sauce à part chez Lalla Moulati ; tout mélangé puis gardé au frais chez My Moroccan Food. Retenu l'assaisonnement au dernier moment (deux sources sur trois).",
  "Peau des tomates : gardée chez Cooking With Alia, ôtée chez Choumicha (recettes 627 et 629). Retenu la peau gardée, plus rapide ; pelage en astuce.",
  "Sel : ½ c. à c. (Cooking With Alia 208 ; MarocMama), ¼ (Cooking With Alia 543), au goût (My Moroccan Food, Choumicha). Retenu ½ c. à c. Poivre : ¼ c. à c. chez Cooking With Alia, au goût chez My Moroccan Food, « un peu » chez Lalla Moulati : laissé au goût.",
  "Cumin : ¼ c. à c. chez Cooking With Alia (208) et Choumicha (629), sans dose chez Lalla Moulati ; absent chez My Moroccan Food et MarocMama. Retenu ¼ c. à c.",
  "Contre-vérifiée le 7 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 6 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Faut-il éplucher le concombre ? Aucune source de la salade ne le dit ; la FDA rappelle seulement de le laver même s'il est épluché.",
  "Combien de temps garder les restes : aucune durée officielle trouvée pour une salade crue faite maison ; seule la règle des 2 heures avant le réfrigérateur est sourcée (Anses).",
  "Dates des recettes Cooking With Alia : non affichées sur les pages ; seule la date du plan du site (14 septembre 2022) est connue.",
  "MarocMama (Amanda Mouttaki) est américaine, installée au Maroc : source d'appoint, non comptée parmi les sources marocaines.",
  "Aucune recette de cette salade trouvée sur Bladi.net, Femmes du Maroc, Le360 (rubrique lifestyle) ni dans les copies d'archive de Taste of Maroc.",
  "Lalla Moulati : pas de recette chiffrée de la salade tomates-concombre-oignon ; seulement sa chlada aux poivrons grillés et des salades composées.",
  "Un article de Lalla Moulati (12 février 2019) affirme que ranger tomates et concombre ensemble produit une substance toxique : affirmation de santé sans source officielle, non retenue.",
  "Aucune variante régionale sourcée trouvée.",
  "Menthe : aucune source lue ne l'utilise dans cette salade."
 ],
 "cuisine": "Marocaine",
 "rayon": "Salades",
 "pairs": [
  "khobz"
 ],
 "img_alt": "Tomates, concombre et persil coupés en petits dés dans un saladier (photo d'une salade arabe, très proche)",
 "img": "img/salade-marocaine.jpg",
 "photo": {
  "author": "Basel15 at English Wikipedia",
  "license": "Public domain",
  "license_url": "",
  "page": "https://commons.wikimedia.org/wiki/File:Arabsalad.jpg",
  "modified": "réduite"
 }
});
