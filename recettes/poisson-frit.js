/* Recette : Poisson frit à la marocaine. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "poisson-frit",
 "title": "Poisson frit à la marocaine",
 "darija": "Hout mqli",
 "arabic": "الحوت المقلي",
 "tagline": "Des sardines collées deux par deux avec une chermoula à l'ail, au cumin et au paprika, des filets de merlan marinés, farinés puis frits jusqu'à ce qu'ils soient bien dorés. Avec du citron, c'est la friture de la maison.",
 "category": "Poisson",
 "occasion": "En entrée, ou en plat avec des légumineuses et des salades pour un déjeuner complet (Taste of Maroc) ; au f'tour du ramadan à El Jadida, où les fritures de poissons sont au menu (Hespress)",
 "region": "Tout le Maroc, surtout les villes côtières. La sardine est le poisson le plus abondant des côtes marocaines (Choumicha) et le merlan un choix très courant (Taste of Maroc). Les sardines farcies frites se vendent aussi dans la rue loin de la mer, parfois seulement certains jours, par exemple à Jemaa el-Fna à Marrakech et dans la médina de Fès (Taste of Maroc).",
 "servings": 4,
 "servings_label": "personnes",
 "time": {
  "prep": 25,
  "cook": 20,
  "rest": 30,
  "rest_label": "Marinade"
 },
 "difficulty": "Moyen",
 "equipment": [
  "Planche à découper et petit couteau",
  "Passoire et papier absorbant",
  "Mortier et pilon (ou mixeur)",
  "Bol et plat creux pour la marinade, avec un film ou un couvercle",
  "Assiette creuse pour la farine",
  "Friteuse électrique à thermostat, ou grande poêle profonde à bords hauts",
  "Couvercle à la taille de la poêle, toujours à portée de main",
  "Écumoire ou pince",
  "Thermomètre de cuisson (facultatif)"
 ],
 "ingredients": [
  {
   "group": "Poisson",
   "items": [
    {
     "id": "sardines",
     "q": 500,
     "u": "g",
     "name": "de sardines fraîches",
     "note": "petites de préférence ; à écailler, vider et ouvrir en deux (étape 1)",
     "canon": "sardine"
    },
    {
     "id": "merlans",
     "q": 500,
     "u": "g",
     "name": "de merlans",
     "note": "à écailler, vider et lever en filets (étape 2), ou déjà en filets chez le poissonnier",
     "canon": "merlan"
    }
   ]
  },
  {
   "group": "Chermoula",
   "items": [
    {
     "id": "persil",
     "q": 0.5,
     "u": "botte",
     "name": "de persil plat",
     "note": "finement haché",
     "canon": "persil"
    },
    {
     "id": "coriandre",
     "q": 0.5,
     "u": "botte",
     "name": "de coriandre fraîche",
     "note": "finement hachée",
     "canon": "coriandre"
    },
    {
     "id": "ail",
     "q": 4,
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
     "id": "cumin",
     "q": 1.5,
     "u": "c. à c.",
     "name": "de cumin moulu",
     "canon": "cumin"
    },
    {
     "id": "paprika",
     "q": 1.5,
     "u": "c. à c.",
     "name": "de paprika doux (piment doux)",
     "canon": "paprika"
    },
    {
     "id": "citron-jus",
     "q": 1,
     "u": "",
     "name": "citron",
     "pl": "citrons",
     "note": "pour le jus ; ou du vinaigre, comme Choumicha",
     "canon": "citron"
    },
    {
     "id": "piment-fort",
     "q": null,
     "u": "",
     "name": "piment fort en poudre",
     "note": "facultatif ; Choumicha en met 1 c. à c. pour 1 kg de poisson",
     "canon": "piment-cayenne"
    }
   ]
  },
  {
   "group": "Friture",
   "items": [
    {
     "id": "farine",
     "q": null,
     "u": "",
     "name": "farine",
     "note": "pour enrober ; Choumicha en prévoit 100 g pour 1 kg de poisson",
     "canon": "farine"
    },
    {
     "id": "semoule",
     "q": null,
     "u": "",
     "name": "semoule fine",
     "note": "facultatif, à mélanger à la farine",
     "canon": "semoule"
    },
    {
     "id": "huile",
     "q": null,
     "u": "",
     "name": "huile de friture",
     "note": "assez pour couvrir au moins la moitié de l'épaisseur du poisson",
     "canon": "huile"
    }
   ]
  },
  {
   "group": "Service",
   "items": [
    {
     "id": "citron-service",
     "q": 1,
     "u": "",
     "name": "citron",
     "pl": "citrons",
     "note": "en quartiers ou en tranches",
     "canon": "citron"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Écaille et vide les sardines",
   "text": "Sous un filet d'eau froide, écaille {{sardines}} de sardines. Coupe la tête, vide le ventre, puis retire l'arête centrale : chaque sardine s'ouvre à plat, en deux filets qui tiennent par le dos. Tu peux aussi demander au poissonnier de le faire.",
   "timer": null,
   "tip": "Choisis des sardines brillantes et fermes, avec leurs écailles et des branchies bien rouges, à l'odeur fraîche et légère, jamais forte ni d'ammoniaque."
  },
  {
   "phase": "Préparation",
   "title": "Prépare les merlans",
   "text": "Écaille {{merlans}} de merlans et vide-les. Coupe la tête et lève les filets, ou demande au poissonnier de le faire.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Rince et sèche le poisson",
   "text": "Rince rapidement tout le poisson à l'eau froide et laisse-le égoutter dans une passoire. Sèche-le bien avec du papier absorbant. Lave-toi ensuite les mains au savon pendant au moins 20 secondes, puis lave la planche et le couteau à l'eau chaude savonneuse.",
   "timer": null,
   "tip": "Un poisson bien sec, c'est plus sûr : l'eau fait bouillonner l'huile chaude, qui peut déborder."
  },
  {
   "phase": "Préparation",
   "title": "Pile l'ail et les herbes",
   "text": "Hache très finement {{persil}} de persil et {{coriandre}} de coriandre. Au mortier, écrase {{ail:full}} avec {{sel}} de sel. Ajoute les herbes et pile encore un peu.",
   "timer": null,
   "tip": "Hache bien les herbes avant de les piler, sinon la chermoula fait des fils. Pas de mortier ? Un mixeur fait l'affaire.",
   "img": {
    "src": "img/etapes/hacher-persil.jpg",
    "alt": "Persil haché au couteau sur une planche",
    "caption": "Hacher les herbes",
    "w": 803,
    "h": 1000,
    "credit": "Photo de l'étape « Pile l'ail et les herbes » : katerha, Wikimedia Commons, licence CC BY 2.0 (réduite)."
   }
  },
  {
   "phase": "Préparation",
   "title": "Termine la chermoula",
   "text": "Mets la pâte dans un bol. Ajoute {{cumin}} de cumin, {{paprika}} de paprika et le jus de {{citron-jus:full}}. Mélange bien. Si tu aimes le piquant, ajoute un peu de {{piment-fort}}.",
   "timer": null,
   "tip": "Avant de toucher le poisson cru, mets un peu de chermoula de côté dans un petit bol : elle servira de sauce à table ou dans un sandwich."
  },
  {
   "phase": "Préparation",
   "title": "Colle les sardines deux par deux",
   "text": "Pose une sardine ouverte, peau dessous. Étale une bonne couche de chermoula sur la chair, puis couvre avec une deuxième sardine, peau dessus. Presse doucement. Continue avec les autres.",
   "timer": null,
   "tip": "Il reste une sardine seule ? Garnis-la de chermoula et replie-la sur elle-même."
  },
  {
   "phase": "Préparation",
   "title": "Enrobe les merlans",
   "text": "Étale de la chermoula sur les filets de merlan et referme-les sur eux-mêmes. Frotte aussi l'extérieur des sardines avec le reste de la chermoula.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Laisse mariner au frais",
   "text": "Couvre et mets au réfrigérateur au moins 30 minutes. Taste of Maroc laisse mariner au moins 2 heures.",
   "timer": {
    "min": 30,
    "label": "Marinade",
    "done": "La marinade est prête. Passe à la friture."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Prépare la poêle",
   "text": "Prends une friteuse à thermostat ou une grande poêle profonde à bords hauts. Verse assez d'{{huile}} pour couvrir au moins la moitié de l'épaisseur du poisson, sans jamais remplir à plus d'un tiers de la hauteur. Garde un couvercle de la bonne taille à portée de main.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Fais chauffer l'huile",
   "text": "Chauffe l'huile progressivement, à feu moyen. Elle doit être bien chaude mais ne jamais fumer : si elle fume, baisse le feu et attends qu'elle refroidisse un peu. Avec une friteuse ou un thermomètre, ne dépasse pas 180 °C. À partir de maintenant, ne quitte plus la poêle des yeux.",
   "timer": null,
   "tip": "Si l'huile prend feu : ne jette jamais d'eau. Glisse le couvercle sur la poêle, coupe le feu si tu peux le faire sans danger, ne déplace pas la poêle et laisse le couvercle jusqu'à ce qu'elle ait refroidi. Appelle sans attendre les pompiers, même si le feu semble éteint. Si le feu ne s'éteint pas ou s'étend, fais sortir tout le monde, ferme la porte de la cuisine et ne rentre pas."
  },
  {
   "phase": "Cuisson",
   "title": "Farine le poisson",
   "text": "Sors le poisson de la marinade et laisse-le égoutter. Juste avant de le frire, passe chaque morceau dans la {{farine}}, des deux côtés. Tu peux mélanger un peu de {{semoule}} à la farine.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Fais frire la première face",
   "text": "Pose délicatement quelques morceaux dans l'huile, sans les serrer. Laisse frire environ 3 minutes, jusqu'à ce que le dessous soit bien doré.",
   "timer": {
    "min": 3,
    "label": "Première face",
    "done": "Retourne les morceaux avec une pince ou une écumoire."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Retourne et finis la cuisson",
   "text": "Retourne les morceaux et laisse frire encore environ 3 minutes. C'est cuit quand c'est bien doré et que la chair se détache facilement à la fourchette.",
   "timer": {
    "min": 3,
    "label": "Deuxième face",
    "done": "Bien doré des deux côtés ? Sors le poisson de l'huile."
   },
   "tip": "Avec un thermomètre à sonde, le poisson est cuit à 63 °C à cœur."
  },
  {
   "phase": "Cuisson",
   "title": "Égoutte et continue",
   "text": "Sors le poisson avec l'écumoire et pose-le sur du papier absorbant. Retire les débris qui flottent dans l'huile, puis fais frire la fournée suivante de la même façon. À la fin, éteins le feu.",
   "timer": null,
   "tip": "Une huile devenue brune ou noire, épaisse, qui mousse ou qui fume est abîmée : ne la réutilise pas, et ne la verse jamais dans l'évier.",
   "img": {
    "src": "img/etapes/sardines-friture.jpg",
    "alt": "Sardines frites et dorées, posées sur du papier absorbant",
    "caption": "Égoutter sur du papier absorbant",
    "w": 1000,
    "h": 669,
    "credit": "Photo de l'étape « Égoutte et continue » : formalfallacy @ Dublin (Victor), Flickr, licence CC BY-NC-SA 2.0 (réduite)."
   }
  },
  {
   "phase": "Service",
   "title": "Sers chaud",
   "text": "Sers tout de suite, avec {{citron-service:full}} en quartiers, une salade verte et des olives.",
   "timer": null,
   "tip": "Ne laisse pas le poisson frit plus de 2 heures hors du réfrigérateur, ou plus d'1 heure s'il fait plus de 32 °C."
  }
 ],
 "secrets": [
  {
   "text": "Choisis des sardines de moins de 15 cm : plus la sardine est petite, plus sa chair est délicieuse. Elles doivent être brillantes, fermes, garder leurs écailles, avec des branchies rouge carmin et humides.",
   "source": "Choumicha, « La sardine, un trésor de bienfaits » ; Taste of Maroc (Nada Kiffa) : les petites sardines fraîches sont idéales"
  },
  {
   "text": "Un poisson frais sent frais et léger, jamais fort, aigre ou l'ammoniaque. Ses yeux sont clairs et brillants, et sa chair ferme reprend sa forme quand tu appuies dessus.",
   "source": "FDA, « Selecting and Serving Fresh and Frozen Seafood Safely » ; Choumicha (sardines brillantes et fermes, branchies rouges)"
  },
  {
   "text": "La sardine est très fragile : cuisine-la le jour de l'achat. Au besoin, garde-la 24 heures au plus au réfrigérateur, écaillée, vidée, rincée, essuyée et couverte d'un film, dans un réfrigérateur à 4 °C ou moins.",
   "source": "Choumicha (24 h maximum, le jour même de préférence) ; FDA (produits de la mer gardés à 40 °F, soit 4 °C, ou moins)"
  },
  {
   "text": "Les deux sardines collées par la chermoula s'appellent « mzeouej » (mariées), « machrouk » (associées) ou « ʿachiq w maʿchouq » (les amoureux).",
   "source": "Taste of Maroc (Nada Kiffa, native de Casablanca) ; SBS (Ellie Bouhadana) : « mzeouejim », qui veut dire « mariés »"
  },
  {
   "text": "La vraie chermoula se fait avec des herbes fraîches et de l'ail, pas avec un mélange sec du commerce.",
   "source": "Taste of Maroc (Nada Kiffa) ; toutes les recettes marocaines lues (Choumicha, Bladi, Cooking With Alia) utilisent des herbes fraîches"
  },
  {
   "text": "Pour le poisson, on aime une chermoula citronnée.",
   "source": "Taste of Maroc (Nada Kiffa et Christine Benlafquih) ; Bladi (jus de citron dans « Sardines farcies », « Poisson frits » et « Chermoula pour le poisson » ; sa reprise de la recette de Choumicha est au vinaigre) ; Lalla Moulati (jus de citron, avec un peu de vinaigre, dans sa chermoula pour le poisson)"
  },
  {
   "text": "Pile d'abord l'ail avec le sel, puis ajoute les herbes bien hachées : hachées grossièrement, elles donnent une chermoula qui fait des fils.",
   "source": "Taste of Maroc (Nada Kiffa) ; Bladi, « Chermoula pour le poisson » (coriandre pilée au mortier avec le gros sel et l'ail) ; Choumicha (herbes émincées)"
  },
  {
   "text": "Garde un peu de chermoula propre, mise de côté avant de toucher le poisson cru, pour la servir en sauce : jamais celle qui a touché le poisson cru.",
   "source": "Taste of Maroc (Nada Kiffa aime en garder un peu de côté pour servir avec les grillades, poisson compris, surtout l'été) ; FDA (éviter que les bactéries du poisson cru passent aux aliments prêts à manger)"
  },
  {
   "text": "Égoutte et sèche bien le poisson avant la friture : l'eau fait bouillonner et déborder l'huile.",
   "source": "SFDA (Autorité saoudienne des aliments et des médicaments) ; pompiers du Cambridgeshire ; Taste of Maroc et Choumicha (poisson essuyé, séché)"
  },
  {
   "text": "Farine le poisson juste avant de le plonger dans l'huile.",
   "source": "Choumicha (« passer les poissons dans la farine et les plonger dans un bain d'huile chaude ») ; Taste of Maroc (sortir de la marinade, enrober, frire)"
  },
  {
   "text": "Fais frire par petites quantités, sans serrer les morceaux.",
   "source": "SBS (Ellie Bouhadana) : par fournées, sans surcharger la poêle ; Bladi, « Beignets de sardines » : par séries de quatre"
  },
  {
   "text": "Chauffe l'huile progressivement, à feu moyen, puis garde-la bien chaude sans fumée.",
   "source": "Bladi, « Merlans frits » (bain d'huile chauffé à feu moyen) ; SFDA (chauffer lentement, sans atteindre le point de fumée) ; Cooking With Alia (feu baissé une fois l'huile chaude)"
  },
  {
   "text": "Change l'huile dès qu'elle devient brune ou noire. Une huile foncée, épaisse, qui mousse, qui fume ou qui sent le rance est abîmée. Ne la verse pas dans l'évier.",
   "source": "SFDA ; SCAV de Genève, « Information sur les huiles de friture »"
  },
  {
   "text": "Au Maroc, le poisson frit se sert souvent avec des haricots blancs à la tomate ou des salades fraîches (concombre, tomate, oignon), ou avec une salade verte, du citron et des olives m'chermlines.",
   "source": "Taste of Maroc (Nada Kiffa) ; Choumicha, « Friture de poissons m'chermel »"
  }
 ],
 "mistakes": [
  "Jeter de l'eau sur de l'huile en feu : ça provoque une explosion de flammes. Glisse un couvercle sur la poêle, coupe le feu si tu peux le faire sans danger, ne déplace pas la poêle et laisse le couvercle jusqu'à ce qu'elle ait refroidi ; appelle sans attendre les pompiers, même si le feu semble éteint, et si le feu continue, fais sortir tout le monde et ferme la porte (USFA ; gouvernement du Québec ; pompiers du Cambridgeshire ; comté du Warwickshire).",
  "Continuer à chauffer une huile qui fume : baisse le feu et laisse-la refroidir avant d'y mettre le poisson (gouvernement du Québec ; pompiers du Cambridgeshire ; SFDA).",
  "Remplir la poêle à plus d'un tiers d'huile (pompiers du Cambridgeshire ; comté du Warwickshire).",
  "Quitter la poêle des yeux pendant la friture, même quelques secondes (pompiers du Cambridgeshire ; comté du Warwickshire ; gouvernement du Québec).",
  "Mettre dans l'huile un poisson mouillé ou plein de marinade liquide : l'huile bouillonne et peut déborder (SFDA ; pompiers du Cambridgeshire).",
  "Serrer trop de morceaux dans la poêle (SBS ; Bladi).",
  "Hacher grossièrement les herbes : la chermoula fait des fils (Taste of Maroc ; Choumicha utilise des herbes émincées).",
  "Servir en sauce une chermoula qui a touché le poisson cru (FDA ; Taste of Maroc).",
  "Acheter un poisson qui sent fort, aigre ou l'ammoniaque, ou des sardines ternes et molles (FDA ; Choumicha).",
  "Laisser le poisson frit plus de 2 heures hors du réfrigérateur, ou plus d'1 heure s'il fait plus de 32 °C (FDA)."
 ],
 "serving": "Sers le poisson chaud, aussitôt égoutté : les sardines se mangent de préférence chaudes, avec des tranches de citron (Bladi) ; Cooking With Alia les sert tout de suite, avec un filet de jus de citron. Taste of Maroc les sert aussi tièdes ou à température ambiante, sur un lit de persil ou de salade, avec des quartiers de citron et de la harissa, à côté de haricots blancs à la tomate ou d'une salade concombre-tomate-oignon. Choumicha accompagne sa friture d'une salade verte, de tranches de citron et d'olives m'chermlines. Ne laisse pas le poisson plus de 2 heures hors du réfrigérateur (FDA).",
 "variants": [
  "Seulement des sardines farcies : c'est le grand classique de la rue (Taste of Maroc ; Bladi, « Sardines farcies »).",
  "Une seule sardine garnie de chermoula et repliée sur elle-même, au lieu de deux sardines collées (Taste of Maroc).",
  "Merlans entiers : écaillés, vidés, farcis de chermoula, passés dans la farine tamisée et frits quelques minutes en les retournant, servis avec des quartiers de citron (Bladi, « Merlans frits »).",
  "Chinchard entier enduit de marinade (persil, ail, cumin, paprika, citron) dehors et un peu dedans, puis fariné et frit (Bladi, « Poisson frits »).",
  "Chermoula au vinaigre au lieu du citron (Choumicha), ou plus piquante avec du piment fort (Choumicha) ou de la harissa (Taste of Maroc).",
  "Chermoula à l'huile d'olive (Taste of Maroc ; Cooking With Alia ; Bladi, « Chermoula pour le poisson »).",
  "Chermoula du Nord : avec du thym, du poivre noir et beaucoup de persil plat (Taste of Maroc).",
  "Chermoula au citron confit (SBS, Ellie Bouhadana ; Taste of Maroc, en option).",
  "Enrobage farine et semoule (SBS, Ellie Bouhadana) ou farine et farine de blé dur (Taste of Maroc).",
  "Beignets de sardines : sardines nettoyées, sans tête ni arête centrale, trempées dans une pâte (œuf, farine, huile, eau glacée) et frites 5 minutes par séries de quatre (Bladi).",
  "À El Jadida, les fritures de poissons font partie du f'tour du ramadan (Hespress, 2021)."
 ],
 "sources": [
  {
   "name": "Choumicha (Choumicha Chafay), « Friture de poissons m'chermel » (site officiel, hors ligne ; copie archivée du 10 juillet 2026)",
   "url": "https://web.archive.org/web/20260710200559/https://www.choumicha.ma/recette/143-friture-de-poissons-m-chermel.html",
   "used_for": "Recette de base : 500 g de sardines et 500 g de merlans en filets pour 4 personnes ; chermoula (1 botte de persil, 1 botte de coriandre, 4 gousses d'ail, 2 c. à c. de piment doux, 1 c. à c. de piment fort, 2 c. à c. de cumin, 1 c. à c. de sel, 4 c. à s. de vinaigre) ; sardines collées deux par deux, merlans enduits et refermés ; 100 g de farine, bain d'huile chaude, friture jusqu'à dorure, égouttage sur papier absorbant ; 20 min de cuisson, 50 min en tout ; service avec salade verte, tranches de citron et olives m'chermlines."
  },
  {
   "name": "Choumicha, « La sardine, un trésor de bienfaits » (copie archivée du 21 mai 2026)",
   "url": "https://web.archive.org/web/20260521074224/https://choumicha.ma/produits-de-saisons/la-sardine-un-tresor-de-bienfaits.html",
   "used_for": "Sardine, poisson le plus abondant des côtes marocaines ; choisir des sardines de moins de 15 cm, brillantes, fermes, avec leurs écailles, branchies rouge carmin et humides ; sardine écaillée, vidée, étêtée, rincée rapidement, essuyée, gardée 24 h au plus au réfrigérateur dans un plat filmé, à consommer de préférence le jour même. Les affirmations de santé de la page ne sont pas reprises."
  },
  {
   "name": "Taste of Maroc, Nada Kiffa (native de Casablanca), « Moroccan Stuffed Fried Sardines with Chermoula », mise à jour du 24 octobre 2017 (site qui refuse les robots, erreur 403 ; copie archivée du 5 août 2026)",
   "url": "https://web.archive.org/web/20260805192917/https://tasteofmaroc.com/moroccan-stuffed-sardines/",
   "used_for": "Plat de rue classique, vendu aussi à Jemaa el-Fna et dans la médina de Fès ; noms mzeouej, machrouk, ʿachiq w maʿchouq ; petites sardines fraîches ; 1 kg de sardines écaillées, sans arête et ouvertes pour 6 portions ; 1 tasse de chermoula ; marinade d'au moins 2 h au réfrigérateur ; enrobage farine (375 g) et farine de blé dur (190 g) ; friture peu profonde ou profonde environ 3 min par face ; égouttage ; service chaud, tiède ou à température ambiante avec citron, harissa, haricots blancs, salades ; 15 min de préparation, 20 min de cuisson."
  },
  {
   "name": "Taste of Maroc, Nada Kiffa, « Chermoula Recipe – Moroccan Marinade of Herbs and Spices », mise à jour du 17 février 2020 (copie archivée du 27 août 2026)",
   "url": "https://web.archive.org/web/20260827184612/https://tasteofmaroc.com/moroccan-chermoula-recipe/",
   "used_for": "Chermoula authentique aux herbes fraîches et à l'ail ; coriandre et persil (rapport de 4:1 à 4:3), cumin, paprika doux, ail, sel, citron ou vinaigre, huile d'olive ; citronnée pour le poisson ; ail pilé avec le sel puis herbes bien hachées (sinon elle fait des fils) ; mortier ou mixeur ; version piquante à la cayenne ou à la harissa ; version du Nord au thym et au poivre ; une semaine au réfrigérateur ; en commentaire, Nada Kiffa garde un peu de chermoula pour servir avec le poisson grillé."
  },
  {
   "name": "Taste of Maroc, Christine Benlafquih (fondatrice, résidente de longue date au Maroc, à la tête d'une entreprise de visites culinaires à Casablanca), « Moroccan Sardine Balls Recipe – Fish Meatballs in Tomato Sauce », mise à jour du 13 octobre 2020 (copie archivée du 11 mai 2026)",
   "url": "https://web.archive.org/web/20260511111912/https://tasteofmaroc.com/moroccan-sardine-fish-balls-in-tomato-sauce/",
   "used_for": "Sardines bon marché et abondantes au Maroc ; merlan, autre choix populaire ; demander au poissonnier de lever les filets."
  },
  {
   "name": "Taste of Maroc, Nada Kiffa, « Mchermel in Moroccan Cooking », mise à jour du 31 octobre 2017 (copie archivée du 16 juillet 2026)",
   "url": "https://web.archive.org/web/20260716005432/https://tasteofmaroc.com/mchermel-moroccan-cooking/",
   "used_for": "Sens du mot « m'chermel » (mariné), présent dans le titre de la recette de Choumicha."
  },
  {
   "name": "Bladi.net, « Sardines farcies » (recette marocaine, sans auteur)",
   "url": "https://www.bladi.net/sardines-farcies.html",
   "used_for": "1 kg de sardines fraîches ; gratter, vider, nettoyer, bien laver, ôter la tête et l'arête centrale, laisser égoutter ouvertes ; farce ½ bouquet de persil, ½ bouquet de coriandre, 3 gousses d'ail, 1 c. à c. de cumin, 1 c. à c. de paprika, jus d'1 citron, sel ; sardines collées ventre contre ventre, farinées des deux côtés, frites dans l'huile bien chaude ; à manger chaudes avec des tranches de citron (2 citrons en tout)."
  },
  {
   "name": "Bladi.net, « Merlans frits »",
   "url": "https://www.bladi.net/merlans-frits.html",
   "used_for": "1,5 kg de petits merlans écaillés, vidés, lavés ; bain d'huile chauffé à feu moyen ; farcis de chermoula, passés dans la farine tamisée, frits quelques minutes en les retournant jusqu'à dorure ; égouttés ; 2 gros citrons en quartiers."
  },
  {
   "name": "Bladi.net, « Poisson frits »",
   "url": "https://www.bladi.net/poisson-frits.html",
   "used_for": "1 kg de chinchard ; marinade 1 bouquet de persil, 3 gousses d'ail, jus d'1 citron, 1 c. à c. de cumin, 1 c. à c. de paprika, sel ; poisson enduit dehors et un peu dedans, fariné, frit dans l'huile chaude."
  },
  {
   "name": "Bladi.net, « Chermoula pour le poisson »",
   "url": "https://www.bladi.net/recettes/chermoula-pour-le-poisson.html",
   "used_for": "Coriandre pilée au mortier avec le gros sel et l'ail ; piment doux, piment fort, cumin, jus de citron, eau, huile d'olive ; marinade au frais au moins 30 minutes ; petites pièces farinées et frites dans l'huile chaude."
  },
  {
   "name": "Bladi.net, « Beignets de sardines »",
   "url": "https://www.bladi.net/beignets-de-sardines.html",
   "used_for": "Sardines nettoyées sous un filet d'eau froide, sans tête ni arête centrale, épongées ; friture par séries de quatre, 5 minutes ; variante en pâte à frire."
  },
  {
   "name": "Bladi.net, « Friture de poissons m'chermel »",
   "url": "https://www.bladi.net/friture-de-poissons-m-chermel.html",
   "used_for": "Reprise de la recette de Choumicha (mêmes quantités, 6 gousses d'ail) : lue pour contrôle, pas comptée comme source indépendante."
  },
  {
   "name": "Cooking With Alia, « 064 – Moroccan Sardines with Charmoula » (Alia partage « la cuisine marocaine de son enfance », page À propos)",
   "url": "http://www.cookingwithalia.com/moroccan-sardines-with-charmoula/",
   "used_for": "Sardines ouvertes collées deux par deux avec la chermoula (persil, coriandre, citron, huile d'olive, ail, cumin, paprika, sel, poivre) ; huile chauffée 5 min à feu vif puis feu baissé ; farine des deux côtés ; 5 min par face ; égouttage sur papier ; service immédiat avec du citron."
  },
  {
   "name": "SBS Food, Ellie Bouhadana (The Cook Up with Adam Liaw), « Moroccan Stuffed Sardines », 28 novembre 2023",
   "url": "https://www.sbs.com.au/food/the-cook-up-with-adam-liaw/recipe/moroccan-stuffed-sardines/20a8iwequ",
   "used_for": "Nom « mzeouejim » (mariés) ; 1 c. à s. de chermoula par paire, pressée ; enrobage farine et semoule fine (« semolina flour ») ; friture peu profonde 2 min par face, par fournées sans surcharger ; service avec tomate râpée et citron."
  },
  {
   "name": "SBS Food, Hassan M'Souli (chef marocain), « Moroccan Sardines », 25 juin 2015",
   "url": "https://www.sbs.com.au/food/recipes/moroccan-sardines",
   "used_for": "Filets collés avec une farce aux herbes et épices, farinés, poêlés dans 2 c. à s. d'huile d'olive environ 1 min par face (donnée prise en compte dans les écarts)."
  },
  {
   "name": "Hespress FR, Zoubida Senoussi, « Par région, voici les traditions culinaires marocaines du ramadan », 16 avril 2021",
   "url": "https://fr.hespress.com/198966-par-region-voici-les-traditions-culinaires-marocaines-du-ramadan.html",
   "used_for": "Fritures de poissons au f'tour à El Jadida ; poisson prisé pendant le ramadan à Casablanca et Agadir."
  },
  {
   "name": "Hespress FR, Mohamed Jaouad El Kanabi, « Crise et prix du poisson : l'océan déserte les assiettes », 6 septembre 2024",
   "url": "https://fr.hespress.com/384961-crise-et-prix-du-poisson-locean-deserte-les-assiettes.html",
   "used_for": "Sardine, merlan et thon : variétés autrefois omniprésentes dans l'alimentation des Marocains."
  },
  {
   "name": "Al Jazeera, Meryem Taidi, « الأجود عالميا.. سردين المغرب ثروة اقتصادية وثقافة غذاء », 21 février 2021",
   "url": "https://www.aljazeera.net/ebusiness/2021/2/21/%D8%A7%D9%84%D8%A3%D8%AC%D9%88%D8%AF-%D8%B9%D8%A7%D9%84%D9%85%D9%8A%D8%A7-%D8%B3%D8%B1%D8%AF%D9%8A%D9%86-%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D8%AB%D8%B1%D9%88%D8%A9",
   "used_for": "Sardine, poisson de base des marchés marocains ; petits poissons pélagiques (sardine, anchois, maquereau…) : plus de 80 % des captures. Le texte ne parle pas de friture."
  },
  {
   "name": "FDA (États-Unis), « Selecting and Serving Fresh and Frozen Seafood Safely », contenu à jour au 5 mars 2024",
   "url": "https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely",
   "used_for": "Signes de fraîcheur (odeur, yeux, chair ferme, branchies rouges) ; achat au froid ou sur glace ; conservation 2 jours au plus à 40 °F (4 °C) ; mains lavées 20 s au savon, planche et ustensiles à l'eau chaude savonneuse ; cuisson à 145 °F (63 °C) à cœur ou chair qui se détache facilement à la fourchette ; jamais plus de 2 h hors du réfrigérateur, 1 h au-dessus de 90 °F (32 °C)."
  },
  {
   "name": "SFDA (Autorité saoudienne des aliments et des médicaments), « نصائح عند قلي السمك » (Conseils pour frire le poisson), 24 décembre 2019, mise à jour du 21 juillet 2024",
   "url": "https://www.sfda.gov.sa/ar/awarenessarticle/78124",
   "used_for": "Huile au moins à mi-hauteur de l'épaisseur du poisson ; chauffer lentement sans atteindre le point de fumée ; bien égoutter l'eau du poisson et le poser avec précaution ; poêle à bords hauts, chauffage électrique préférable ; retirer les débris ; huile changée si elle brunit ou noircit ; arrêter la friture et couper le feu si l'huile mousse ou bouillonne ; huiles de friture citées : coton, soja, tournesol."
  },
  {
   "name": "SCAV de Genève (Service de la consommation et des affaires vétérinaires), « Information sur les huiles de friture », fiche du 6 mai 2020",
   "url": "https://www.ge.ch/document/20680/telecharger",
   "used_for": "Bain de friture jamais au-dessus de 180 °C ; signes d'une huile abîmée (brun foncé, épaisse, mousse, fumée, rance) ; ne pas verser l'huile usagée dans les canalisations ; huiles conseillées pour les friteuses professionnelles (arachide, huiles spéciales)."
  },
  {
   "name": "Goodman Fielder Food Service (fournisseur d'huiles pour la restauration, Australie), « A guide to deep frying »",
   "url": "https://gffoodservice.com.au/?p=6230",
   "used_for": "Poisson frais frit à 180 °C (2 à 4 minutes en grande friture) : deuxième source pour le plafond de 180 °C ; thermomètre conseillé."
  },
  {
   "name": "Gouvernement du Québec, « Prévenir les risques d'incendie lorsque vous cuisinez », mise à jour du 10 octobre 2025",
   "url": "https://www.quebec.ca/securite-situations-urgence/securite-incendie/prevenir-incendie/cuisine",
   "used_for": "Surveiller en tout temps ; couvercle toujours à portée de main ; friteuse à thermostat plutôt qu'une casserole ; ne jamais continuer à chauffer une huile qui fume ; jamais d'eau sur un feu d'huile ; ne pas déplacer le récipient ; couvercle, éléments coupés, appel aux pompiers ; points de fumée des huiles."
  },
  {
   "name": "Cambridgeshire Fire & Rescue Service (pompiers, Royaume-Uni), « Chip pan »",
   "url": "https://www.cambsfire.gov.uk/home-safety/specific-safety-advice/chip-pan",
   "used_for": "Huile qui fume = trop chaude ; jamais plus d'un tiers d'huile ; ne jamais quitter la poêle des yeux ; aliments secs (sinon l'huile déborde) ; jamais d'eau ; ne pas déplacer la poêle ; couper le feu seulement sans danger ; laisser refroidir ; appeler les pompiers."
  },
  {
   "name": "Warwickshire County Council (Royaume-Uni), « Chip pan fire warning for Warwickshire residents », 4 février 2022",
   "url": "https://www.warwickshire.gov.uk/news/article/2736/chip-pan-fire-warning-for-warwickshire-residents",
   "used_for": "Jamais plus d'un tiers d'huile ; ne pas laisser la poêle sans surveillance ; ne pas la déplacer ; couper le feu seulement sans danger ; jamais d'eau."
  },
  {
   "name": "USFA (FEMA, États-Unis), « Pictograph: Cook Top Fire Safety Tips », revu le 8 septembre 2021",
   "url": "https://www.usfa.fema.gov/gallery/pictographs/pictograph34.html",
   "used_for": "Couvercle toujours à portée de main ; sur un petit feu de poêle, glisser le couvercle, couper le feu, ne pas déplacer la poêle, laisser le couvercle jusqu'au refroidissement."
  },
  {
   "name": "Lalla Moulati (lalamoulati.net, Maroc), « سردين معمر بحشوة ساهلة ومقلي مقرمش وجد شهي » (sardines farcies frites et croustillantes), 16 novembre 2017",
   "url": "https://www.lalamoulati.net/93278.html",
   "used_for": "Contre-vérification : Source marocaine trouvée par la recherche interne du site : sardines nettoyées et lavées, farcies d'un mélange de poivron, sel, poivre, citron, coriandre, paprika, harissa, concentré de tomate et huile d'olive, passées dans la farine, frites dans une huile bien chaude, servies avec des rondelles de citron. Elles n'y sont pas collées deux par deux. Nom arabe des sardines farcies : « سردين معمر »."
  },
  {
   "name": "Lalla Moulati, « إلى بغيتي الحوت المقلي يجيك بنين ومرمل بلا ما يشرب الزيت دخلي تشوفي الحل » (poisson frit qui ne boit pas l'huile), 27 décembre 2020",
   "url": "https://www.lalamoulati.net/262031.html",
   "used_for": "Contre-vérification : Le nom « الحوت المقلي » (poisson frit) est employé par ce site marocain ; poisson lavé et nettoyé, frotté de citron, de cumin et de sel, mariné couvert au réfrigérateur, passé dans la farine, plongé dans l'huile chaude jusqu'à ce qu'il soit doré, servi chaud."
  },
  {
   "name": "Lalla Moulati, « طريقتي الجديدة فتحضير السردين مقلي كيجي مقمرش وبنين ولي ذاقو كيحماق عليه » (sardines frites croustillantes), 7 novembre 2023",
   "url": "https://www.lalamoulati.net/357794.html",
   "used_for": "Contre-vérification : Sardines écaillées, vidées, tête et queue coupées ; marinade dedans et dehors ; farine ; huile chauffée à feu vif ; 2 minutes par face jusqu'à ce qu'elles soient dorées. Repère de durée proche des 2 à 3 min par face de SBS et de Taste of Maroc. Cette version contient de la menthe et se sert avec de la tahina, ce qu'aucune autre source marocaine lue ne fait : elle n'est citée que pour la durée."
  },
  {
   "name": "Lalla Moulati, « ها شرمولة الحوت لي مبقيتش نبدلها ولا نستغنى عليها كتعطيه بنة تخلي لي كلاه عندي يحماق عليه » (chermoula pour le poisson), 25 mai 2021",
   "url": "https://www.lalamoulati.net/278754.html",
   "used_for": "Contre-vérification : Chermoula pour le poisson au jus de citron (avec une cuillère de vinaigre), persil, coriandre, ail, cumin, paprika, sel et huile d'olive : confirme la chermoula citronnée pour le poisson. Pas de quantités."
  }
 ],
 "discrepancies": [
  "Quantité de poisson : Choumicha écrit « 500 g de sardines en filets » et « 500 g de merlans en filets » pour 4 personnes, sans préciser si c'est le poids des filets ou du poisson entier ; Bladi (sardines farcies, chinchard) et Taste of Maroc partent de 1 kg de poisson entier (6 portions chez Taste of Maroc). Retenu : 1 kg de poisson entier (500 g de sardines + 500 g de merlans) pour 4 personnes : les poids de Choumicha, comptés en poisson entier comme chez Bladi et Taste of Maroc (Taste of Maroc précise en commentaire que son kilo de sardines perd un peu de poids au nettoyage).",
  "Herbes pour 1 kg de poisson : 1 botte de persil + 1 botte de coriandre (Choumicha), ½ + ½ bouquet (Bladi, sardines farcies), 1 bouquet de persil seul (Bladi, chinchard), 3 tasses de coriandre + 1 tasse de persil (Taste of Maroc, mesure non convertible en bottes). Retenu : la médiane, une botte en tout, moitié persil, moitié coriandre (proportion de Choumicha et de Bladi).",
  "Ail : 4 gousses (Choumicha ; 6 dans la reprise de Bladi), 3 (Bladi, deux recettes), 6 à 8 (Taste of Maroc). Médiane 3,5 : retenu 4, la valeur de Choumicha.",
  "Cumin et paprika pour 1 kg de poisson : 2 c. à c. (Choumicha), 1 c. à c. (Bladi, deux recettes), 1 c. à s., soit 3 c. à c. (Taste of Maroc). Retenu : la médiane, 1 c. à c. et demie de chacun (calcul fait avec python).",
  "Acide : 4 c. à s. de vinaigre (Choumicha), jus d'1 citron (Bladi, deux recettes), 5 c. à s. de jus de citron (Taste of Maroc, en option mais conseillé pour le poisson). Retenu : le jus d'1 citron (majorité), le vinaigre en remplacement.",
  "Huile dans la chermoula : aucune (Choumicha ; Bladi, deux recettes), 4 c. à s. d'huile d'olive (Taste of Maroc), 1 c. à s. pour 6 sardines (Cooking With Alia). Retenu : sans huile (médiane et majorité) ; l'huile d'olive passe en variante.",
  "Piment fort : 1 c. à c. pour 1 kg (Choumicha), ½ c. à c. (Bladi, « Chermoula pour le poisson », sans poids de poisson), absent des autres recettes. Retenu : facultatif.",
  "Marinade : pas de durée (Choumicha), au moins 30 min au frais (Bladi), au moins 2 h au réfrigérateur (Taste of Maroc). Retenu : la médiane des trois (0 min chez Choumicha, qui farine et frit sans attendre ; 30 min ; 2 h), soit 30 min au minimum ; les 2 h de Taste of Maroc sont citées dans l'étape.",
  "Enrobage : farine seule (Choumicha, Bladi, Cooking With Alia, Hassan M'Souli sur SBS) ; farine (375 g) + farine de blé dur (190 g) pour 1 kg (Taste of Maroc) ; farine + semoule fine, « semolina flour » (Ellie Bouhadana sur SBS). Retenu : farine, avec semoule fine en option. Taste of Maroc parle de « durum flour » (farine de blé dur) et SBS de « semolina flour » (semoule fine) : ce n'est pas tout à fait le même produit.",
  "Durée de friture des sardines collées : environ 2 min par face (SBS, Ellie Bouhadana), environ 3 min (Taste of Maroc), 5 min (Cooking With Alia) ; 1 min chez Hassan M'Souli (SBS), qui les poêle dans 2 c. à s. d'huile seulement ; Choumicha et Bladi disent « jusqu'à ce qu'ils soient dorés ». Retenu : la médiane des trois fritures comparables, environ 3 min par face, à confirmer à la couleur et à la fourchette.",
  "Feu : bain d'huile à feu moyen (Bladi, merlans), feu vif 5 min puis baissé (Cooking With Alia), chauffer lentement (SFDA), huile « bien chaude » (Bladi, sardines farcies). Retenu : chauffer progressivement à feu moyen, huile bien chaude mais sans fumée.",
  "Température chiffrée : aucune source marocaine lue n'en donne. SCAV de Genève : jamais plus de 180 °C ; Goodman Fielder : 180 °C pour le poisson frais. Retenu : 180 °C au maximum, seulement avec une friteuse ou un thermomètre ; sinon, la règle « bien chaude mais sans fumée ».",
  "Type d'huile : la SFDA cite le tournesol, le soja et le coton comme huiles de friture ; le SCAV de Genève, dans une fiche pour les friteuses professionnelles utilisées longtemps, écrit que les huiles de tournesol, de soja et de colza « ne doivent pas être utilisées » et recommande l'arachide ou des huiles spéciales ; les recettes marocaines disent seulement « huile de friture » ou « bain d'huile ». Retenu : « huile de friture », sans trancher davantage.",
  "Récipient : le gouvernement du Québec dit de ne jamais frire dans une casserole et conseille une friteuse à thermostat ; la SFDA conseille une poêle à bords hauts et préfère un chauffage électrique à la flamme ; les recettes marocaines font un bain d'huile à la poêle. Retenu : friteuse à thermostat si tu en as une, sinon grande poêle profonde à bords hauts, remplie au tiers au plus. Feu d'huile : l'USFA et le gouvernement du Québec disent de glisser un couvercle sur la poêle et de couper le feu ; les pompiers du Cambridgeshire disent au contraire de ne pas tenter d'éteindre le feu soi-même. Le Québec, le Cambridgeshire et le Warwickshire disent de ne jamais jeter d'eau et d'appeler les pompiers (le Québec, même si le feu semble éteint) ; les quatre disent de ne pas déplacer la poêle. Retenu : couvercle et feu coupé si c'est sans danger, et appel immédiat aux pompiers.",
  "Temps de préparation : 15 min (Taste of Maroc, sardines achetées déjà nettoyées) et 30 min (Choumicha). Retenu : la médiane, 22,5 min, arrondie à 25 min ; nettoyer soi-même le poisson entier peut prendre plus longtemps.",
  "Temps de cuisson : 20 min chez Choumicha et chez Taste of Maroc. Retenu : 20 min.",
  "Portions pour 1 kg : 4 personnes (Choumicha), 6 (Taste of Maroc). Retenu : 4.",
  "Citron de service : 1 citron pour 1 kg (Bladi, sardines farcies), 2 gros pour 1,5 kg (Bladi, merlans) ; Choumicha et Taste of Maroc n'en chiffrent pas. Retenu : 1 citron.",
  "Bladi.net publie aussi « Friture de poissons m'chermel » : c'est la recette de Choumicha (mêmes quantités, sauf 6 gousses d'ail au lieu de 4). Elle n'est pas comptée comme source indépendante.",
  "Contre-vérifiée le 7 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 14 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Lalla Moulati, lue à la contre-vérification par la recherche interne du site : sa recette « سردين معمر بحشوة ساهلة ومقلي مقرمش وجد شهي » (16 novembre 2017) farcit des sardines d'un mélange de poivron, sel, poivre, citron, coriandre, paprika, harissa, concentré de tomate et huile d'olive, les farine, les frit dans une huile bien chaude et les sert avec des rondelles de citron, sans les coller deux par deux ; une autre recette de sardines farcies frites (7 novembre 2023) les frit 2 minutes par face ; le site emploie « الحوت المقلي » pour le poisson frit. Aucune de ces pages ne donne de quantités de chermoula comparables à celles retenues.",
  "Anchois : c'est un des petits poissons les plus pêchés au Maroc (Al Jazeera), et Choumicha a une « tagra aux anchois », mais aucune recette marocaine lue ne fait frire des anchois. Ils ne sont donc pas proposés.",
  "Noms des poissons en darija (sardine, merlan, chinchard…) : non vérifiés, donc non donnés.",
  "Geste pour retirer l'arête centrale à la main et pour lever les filets de merlan : les sources disent seulement « ôter la tête et l'arête centrale » ou « en filets », sans décrire le geste. D'où le conseil de demander au poissonnier (que donne aussi Taste of Maroc).",
  "Rendement du poisson entier en filets (perte de poids au nettoyage) : non chiffré par les sources.",
  "Quantité de farine : seule Choumicha la chiffre (100 g pour 1 kg de poisson) ; Taste of Maroc en prévoit beaucoup plus. La farine est donc donnée « pour enrober », sans quantité.",
  "Test de l'huile sans thermomètre (morceau de pain, pincée de farine) : aucune source lue ; non mis dans la recette.",
  "Durée de conservation des restes de poisson frit et façon de les réchauffer : les pages officielles foodsafety.gov et FSIS (USDA) ont refusé l'accès (erreur 403). Seule la règle des 2 heures de la FDA est donnée.",
  "Numéro des pompiers au Maroc : non vérifié ; la recette dit seulement « appelle les pompiers ».",
  "Conseils de la SFDA lus mais non recoupés, donc laissés de côté : ne pas utiliser de poêle en cuivre ; ne pas frire d'autres aliments dans l'huile du poisson.",
  "La FDA écrit « The flesh is clear and separates easily with a fork » ; le sens exact de « clear » n'est pas évident. La recette garde seulement « la chair se détache facilement à la fourchette ».",
  "Pages refusées ou indisponibles, non contournées : TelQuel (403), FSIS de l'USDA (403), foodsafety.gov (403), Gusto TV (403), Medium (403), Echo du Mardi (503). tasteofmaroc.com (403) et choumicha.ma (525) ont été lus sur web.archive.org, comme demandé."
 ],
 "cuisine": "Marocaine",
 "rayon": "Poissons",
 "pairs": [
  "sandwich-poisson"
 ],
 "pairs_label": "En sandwich",
 "img_alt": "Sardines frites, farinées, disposées en rosace avec du citron",
 "img": "img/poisson-frit.jpg",
 "photo": {
  "author": "E4024",
  "license": "CC BY-SA 4.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Sardalya_tava.jpg",
  "modified": "réduite"
 }
});
