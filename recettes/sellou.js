/* Recette : Sellou, la douceur du ramadan. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "sellou",
 "title": "Sellou, la douceur du ramadan",
 "darija": "sellou ; on dit aussi slilou ou sfouf",
 "arabic": "سلّو (السفوف)",
 "tagline": "De la farine grillée, des amandes frites et du sésame grillé, moulus puis liés au beurre, avec de la cannelle et de l'anis. On le prépare pour le ramadan et on le garde en boîte.",
 "category": "Douceur",
 "occasion": "Ramadan (au ftour ou après les tarawih), naissances, mariages et fêtes de famille",
 "region": "Tout le Maroc, où on lui donne plusieurs noms (Al3omk) ; le rapport amandes, sésame et farine (1:1:1) suit la version de Fès décrite par Taste of Maroc ; les autres quantités viennent de la comparaison des recettes lues",
 "servings": 1,
 "servings_label": "fournées",
 "time": {
  "prep": 60,
  "cook": 60,
  "rest": 60,
  "rest_label": "Beurre au frais"
 },
 "difficulty": "Moyen",
 "equipment": [
  "Un four et un grand plat à four (ou une grande plaque à rôtir)",
  "Une grande poêle à fond épais",
  "Une poêle profonde ou une sauteuse pour frire les amandes",
  "Une écumoire et du papier absorbant",
  "Une petite casserole, pour clarifier le beurre",
  "Un robot mixeur puissant",
  "Un tamis fin",
  "Un très grand saladier ou une bassine",
  "Un mortier et un pilon (ou le dos d'une cuillère), pour le mastic",
  "Des boîtes hermétiques"
 ],
 "ingredients": [
  {
   "group": "Base",
   "items": [
    {
     "id": "farine",
     "q": 500,
     "u": "g",
     "name": "de farine blanche ordinaire",
     "canon": "farine"
    },
    {
     "id": "amandes",
     "q": 500,
     "u": "g",
     "name": "d'amandes mondées (blanchies et pelées)",
     "note": "une fois frites, garde-en une petite poignée pour le décor",
     "canon": "amandes"
    },
    {
     "id": "huile-friture",
     "q": null,
     "u": "",
     "name": "Huile de table, pour frire les amandes",
     "canon": "huile"
    },
    {
     "id": "sesame",
     "q": 500,
     "u": "g",
     "name": "de graines de sésame",
     "note": "garde deux petites poignées de graines entières : une pour le mélange, une pour le décor",
     "canon": "sesame"
    },
    {
     "id": "sucre-glace",
     "q": 125,
     "u": "g",
     "name": "de sucre glace",
     "note": "selon ton goût : goûte et ajuste",
     "canon": "sucre-glace"
    },
    {
     "id": "cannelle",
     "q": 1,
     "u": "c. à s.",
     "name": "de cannelle moulue",
     "canon": "cannelle"
    },
    {
     "id": "anis",
     "q": 1,
     "u": "c. à s.",
     "name": "d'anis vert moulu",
     "note": "nom marocain non confirmé : « النافع » selon Al3omk et Lalla Moulati, « الحبة الحلوة » selon Wikipédia en arabe",
     "canon": "anis"
    },
    {
     "id": "sel",
     "q": 0.5,
     "u": "c. à c.",
     "name": "de sel fin",
     "canon": "sel"
    },
    {
     "id": "mastic",
     "q": 0.25,
     "u": "c. à c.",
     "name": "de mastic en grains (meska, « المسكة الحرة »)",
     "note": "facultatif",
     "canon": "mastic"
    },
    {
     "id": "sucre-mastic",
     "q": null,
     "u": "",
     "name": "Un peu de sucre semoule, pour piler le mastic",
     "canon": "sucre"
    },
    {
     "id": "muscade",
     "q": null,
     "u": "",
     "name": "Un peu de noix de muscade râpée (facultatif)",
     "canon": "noix-de-muscade"
    },
    {
     "id": "beurre",
     "q": 250,
     "u": "g",
     "name": "de beurre doux",
     "note": "à clarifier ; c'est un maximum, tu n'en utiliseras peut-être pas tout",
     "canon": "beurre"
    }
   ]
  },
  {
   "group": "Décor",
   "items": [
    {
     "id": "sucre-glace-decor",
     "q": null,
     "u": "",
     "name": "Un peu de sucre glace",
     "canon": "sucre-glace"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Clarifier le beurre",
   "text": "Fais fondre {{beurre}} de beurre doux à feu doux, dans une petite casserole. Laisse chauffer jusqu'à ce que le petit-lait se dépose au fond et que de l'écume se forme dessus. Retire toute l'écume avec une cuillère.",
   "timer": null,
   "tip": "Pas le temps ? Taste of Maroc a aussi fait son sellou avec du ghee (beurre clarifié) du commerce."
  },
  {
   "phase": "Préparation",
   "title": "Laisser durcir le beurre au frais",
   "text": "Mets la casserole au réfrigérateur au moins 1 heure, ou une nuit. Le beurre durcit. Sors le bloc de beurre et jette le liquide blanc resté dessous. Garde ce beurre clarifié au frais pendant que tu prépares le reste.",
   "timer": null,
   "tip": "Taste of Maroc explique qu'enlever tout le petit-lait aide le sellou à rester frais et à ne pas se gâter."
  },
  {
   "phase": "Préparation",
   "title": "Griller la farine",
   "text": "Préchauffe le four à 200 °C. Étale {{farine}} de farine dans un grand plat à four. Enfourne 30 minutes et remue toutes les 5 minutes, jusqu'à une couleur dorée, claire à moyenne. Elle ne doit pas brûler.",
   "timer": {
    "min": 30,
    "label": "Farine au four",
    "done": "La farine est dorée, claire à moyenne ? Sors-la. Sinon, laisse-la encore quelques minutes, en remuant."
   },
   "tip": "Choumicha la fait dorer à 160 °C, en la remuant de temps en temps ; Cooking with Alia la laisse environ 45 minutes à 200 °C, jusqu'à une couleur brune."
  },
  {
   "phase": "Préparation",
   "title": "Tamiser la farine",
   "text": "Laisse refroidir la farine grillée. Tamise-la plusieurs fois. Écrase les petites boules dans le tamis avec une cuillère, et jette celles qui ne passent pas.",
   "timer": null,
   "tip": "Prends ton temps : pour Taste of Maroc, une farine bien tamisée est très importante pour le sellou."
  },
  {
   "phase": "Préparation",
   "title": "Griller le sésame",
   "text": "Mets {{sesame}} de sésame dans une grande poêle sèche, à feu moyen, en plusieurs fois si ta poêle est petite. Remue sans arrêt, jusqu'à ce que les graines soient un peu plus foncées, croquantes, et sentent bon le grillé. Laisse refroidir.",
   "timer": null,
   "tip": "Au four, Taste of Maroc grille le sésame à 200 °C pendant 15 à 20 minutes, en remuant de temps en temps. Si les graines sont sales, lave-les et sèche-les bien avant (Taste of Maroc)."
  },
  {
   "phase": "Préparation",
   "title": "Frire les amandes",
   "text": "Verse un fond d'huile d'environ 1 cm dans une poêle profonde, à feu moyen. Quand l'huile est chaude, fais frire {{amandes}} d'amandes mondées, en plusieurs fois, en remuant sans arrêt, jusqu'à une couleur dorée, claire à moyenne. Sors-les aussitôt avec l'écumoire et pose-les sur du papier absorbant : elles foncent encore en refroidissant. Laisse-les refroidir complètement.",
   "timer": null,
   "tip": "Pour tester l'huile, plonges-y une amande : de petites bulles doivent monter autour (Cooking with Alia). Si les amandes colorent en moins de 5 minutes, l'huile est trop chaude : baisse le feu (Taste of Maroc)."
  },
  {
   "phase": "Préparation",
   "title": "Piler le mastic",
   "text": "Si tu en mets, pile {{mastic}} de grains de mastic avec un peu de sucre semoule, au mortier ou avec le dos d'une cuillère, jusqu'à obtenir une poudre fine.",
   "timer": null,
   "tip": "Le sucre empêche le mastic de coller à la cuillère (Taste of Maroc)."
  },
  {
   "phase": "Préparation",
   "title": "Mélanger les ingrédients secs",
   "text": "Dans un très grand saladier, tamise ensemble la farine grillée, {{sucre-glace}} de sucre glace, {{cannelle}} de cannelle, {{anis}} d'anis moulu, {{sel}} de sel et le mastic pilé. Ajoute un peu de muscade râpée, si tu en mets. Mélange avec les mains.",
   "timer": null,
   "tip": null
  },
  {
   "phase": "Préparation",
   "title": "Moudre le sésame",
   "text": "Garde deux petites poignées de sésame entier. Mixe le reste au robot, en plusieurs fois, jusqu'à obtenir presque une pâte. Verse le sésame moulu dans le saladier, avec une des poignées de graines entières. Garde l'autre poignée pour le décor.",
   "timer": null,
   "tip": null
  },
  {
   "phase": "Préparation",
   "title": "Moudre les amandes",
   "text": "Garde une petite poignée d'amandes frites pour le décor. Mixe la moitié du reste en pâte lisse, et l'autre moitié en poudre. Ajoute les deux au saladier.",
   "timer": null,
   "tip": "Pour plus de croquant, concasse grossièrement quelques amandes frites et ajoute-les au mélange (Taste of Maroc ; Choumicha)."
  },
  {
   "phase": "Préparation",
   "title": "Mélanger longuement à la main",
   "text": "Mélange tout avec les mains pendant 10 minutes, en frottant le mélange entre tes paumes, jusqu'à ce qu'il ne reste aucune boule ni grumeau. Goûte, et ajoute un peu de sucre glace, de cannelle ou d'anis si tu veux.",
   "timer": {
    "min": 10,
    "label": "Mélange à la main",
    "done": "Plus aucun grumeau ? Goûte et ajuste, puis passe au beurre."
   },
   "tip": null
  },
  {
   "phase": "Préparation",
   "title": "Ajouter le beurre peu à peu",
   "text": "Fais fondre le beurre clarifié à feu très doux. Verse-le peu à peu sur le mélange, en pétrissant après chaque ajout. Arrête-toi quand le sellou brille et tient quand tu le presses : ferme, mais souple. Tu n'utiliseras peut-être pas tout le beurre.",
   "timer": null,
   "tip": "Avec moins de beurre, le sellou reste plus poudreux. Taste of Maroc le préfère assez humide pour le presser et le manger à la main."
  },
  {
   "phase": "Préparation",
   "title": "Pétrir 5 minutes",
   "text": "Pétris encore 5 minutes, jusqu'à obtenir un mélange bien homogène.",
   "timer": {
    "min": 5,
    "label": "Pétrissage",
    "done": "Le sellou est homogène ? Mets-le en boîte."
   },
   "tip": null
  },
  {
   "phase": "Service",
   "title": "Refroidir avant de fermer",
   "text": "Mets le sellou dans des boîtes hermétiques. Laisse-le refroidir complètement, sans couvercle, pendant plusieurs heures. Ferme ensuite les boîtes.",
   "timer": null,
   "tip": "Morocco World News le laisse une nuit dans le saladier avant de le mettre en boîte."
  },
  {
   "phase": "Service",
   "title": "Dresser et servir",
   "text": "Pour servir, dresse le sellou en petit dôme sur une assiette. Saupoudre-le d'un peu de sucre glace, puis décore avec les amandes frites et le sésame gardés. Sers-le avec le thé.",
   "timer": null,
   "tip": "Tu peux aussi le presser en petites boules ou en carrés (Taste of Maroc ; Cooking with Alia)."
  }
 ],
 "secrets": [
  {
   "text": "Autant d'amandes et de sésame que de farine, en poids : c'est la version de Fès. N'augmente pas la farine : ce sont les amandes et le sésame en bonne quantité qui font un bon sellou maison.",
   "source": "Taste of Maroc ; même rapport chez Cooking with Alia (n° 777), Lalla Moulati (n° 359492) et Wikipédia en arabe"
  },
  {
   "text": "Remue souvent la farine pendant qu'elle grille, et ne la laisse pas brûler.",
   "source": "Taste of Maroc (toutes les 5 minutes) ; Choumicha ; Cooking with Alia"
  },
  {
   "text": "Tamise plusieurs fois la farine grillée et prends ton temps : c'est très important pour le sellou.",
   "source": "Taste of Maroc ; Choumicha et Cooking with Alia tamisent aussi"
  },
  {
   "text": "Clarifie le beurre et enlève tout le petit-lait : c'est important pour que le sellou reste frais et ne se gâte pas.",
   "source": "Taste of Maroc ; Morocco World News, Cooking with Alia et Lalla Moulati clarifient aussi le beurre"
  },
  {
   "text": "La façon traditionnelle est de frire les amandes. Les griller au four est possible, mais c'est moins traditionnel.",
   "source": "Taste of Maroc ; Bladi.net, Cooking with Alia, Lalla Moulati et Wikipédia en arabe les font frire ; Choumicha les grille au four"
  },
  {
   "text": "Sors les amandes de l'huile dès qu'elles sont dorées : elles continuent de foncer en refroidissant.",
   "source": "Taste of Maroc ; Cooking with Alia"
  },
  {
   "text": "Mixe le sésame presque en pâte, mais garde quelques graines entières dans le mélange.",
   "source": "Taste of Maroc ; Wikipédia en arabe met aussi des graines entières dans le mélange ; Morocco World News met une demi-tasse de sésame de côté, sans dire à quoi elle sert"
  },
  {
   "text": "Mixe une partie des amandes en pâte lisse et l'autre en poudre ; quelques amandes concassées ajoutent du croquant.",
   "source": "Taste of Maroc ; Choumicha (200 g d'amandes concassées en plus, pour 500 g de farine)"
  },
  {
   "text": "Pile le mastic avec un peu de sucre : il ne colle plus à la cuillère.",
   "source": "Taste of Maroc ; Cooking with Alia pile aussi la gomme avec du sucre"
  },
  {
   "text": "Mélange longuement à la main, au moins 10 minutes, en frottant entre tes paumes, avant d'ajouter le beurre.",
   "source": "Taste of Maroc ; Choumicha pétrit 10 à 15 minutes"
  },
  {
   "text": "Goûte avant d'ajouter le beurre, et ajuste le sucre, la cannelle ou l'anis : chaque famille a son goût.",
   "source": "Taste of Maroc ; Cooking with Alia"
  },
  {
   "text": "Ajoute le beurre peu à peu, juste ce qu'il faut : le sellou doit briller et rester souple.",
   "source": "Taste of Maroc ; Choumicha incorpore le beurre en pétrissant"
  },
  {
   "text": "Laisse le sellou refroidir complètement avant de fermer la boîte.",
   "source": "Taste of Maroc ; Morocco World News (une nuit dans le saladier)"
  },
  {
   "text": "Si l'huile remonte à la surface, surtout quand il fait chaud, c'est normal : remélange avant de servir.",
   "source": "Taste of Maroc"
  }
 ],
 "mistakes": [
  "Laisser brûler la farine au four : remue-la souvent (Taste of Maroc ; Choumicha ; Cooking with Alia).",
  "Mettre plus de farine que d'amandes et de sésame : le goût des fruits secs s'efface (Taste of Maroc).",
  "Oublier de tamiser la farine grillée : il reste des boules (Taste of Maroc ; Cooking with Alia).",
  "Laisser les amandes trop longtemps dans l'huile : elles foncent encore après (Taste of Maroc ; Cooking with Alia).",
  "Garder le petit-lait dans le beurre clarifié (Taste of Maroc ; Morocco World News).",
  "Verser tout le beurre d'un coup : ajoute-le peu à peu (Taste of Maroc ; Choumicha).",
  "Fermer la boîte quand le sellou est encore chaud (Taste of Maroc ; Morocco World News).",
  "Pour la variante au miel : ne pas en donner à un bébé de moins d'un an, à cause du risque de botulisme infantile (NHS, service de santé britannique). Et pas d'amandes entières, comme celles du décor, avant 5 ans : un enfant peut s'étouffer avec (NHS)."
 ],
 "serving": "Dresse-le en petit dôme ou en cône sur une assiette, saupoudré de sucre glace et décoré d'amandes frites et de sésame grillé (Taste of Maroc ; Bladi.net ; Cooking with Alia). On le mange à la cuillère, avec du thé ou du café (Morocco World News ; Al3omk, qui le sert avec le thé, souvent après les tarawih ; Wikipédia en arabe). Pendant le ramadan, on le sert aussi au ftour (Taste of Maroc ; Morocco World News). Tu peux aussi le presser en petites boules ou en carrés, dans des caissettes (Taste of Maroc ; Cooking with Alia). Conservation, dans des boîtes hermétiques : Taste of Maroc le garde plusieurs mois à température ambiante et jusqu'à un an au congélateur ; Cooking with Alia le garde au réfrigérateur, jusqu'à un mois, et le sort avant de servir pour qu'il revienne à température ambiante. Si tu ne comptes pas le finir en un ou deux mois, congèles-en une partie (Taste of Maroc).",
 "variants": [
  "Version de Choumicha, moins riche en fruits secs et plus sucrée : 500 g de farine dorée au four à 160 °C, 250 g d'amandes grillées au four, 250 g de sésame, 400 g de sucre glace, ½ c. à s. d'anis moulu, 1 c. à s. de cannelle, ½ c. à c. de sel, ¼ c. à c. de mastic, 260 g de beurre fondu. Le sésame est moulu chaud avec la moitié du sucre glace, les amandes avec le reste. Le sellou est tassé sur 2 cm dans un moule, gardé 2 heures au réfrigérateur, puis coupé en losanges (Choumicha).",
  "Avec cacahuètes, anis et fenouil : 1 kg de farine, 500 g de sésame, 500 g d'amandes, 500 g de cacahuètes grillées, 2 c. à s. de graines d'anis et 2 c. à s. de graines de fenouil, grillées puis moulues, 1 c. à s. de cannelle, 200 g de sucre glace, ½ tasse de miel, 125 g de beurre clarifié et de l'huile chauffée puis refroidie (Morocco World News). Les cacahuètes reviennent aussi chez Lalla Moulati (n° 360164), Cooking with Alia (n° 146) et Wikipédia en arabe.",
  "Au miel : Taste of Maroc remplace le sucre glace par du miel et met alors moins de beurre ; Wikipédia en arabe et Cooking with Alia mettent aussi du miel. Pas de miel pour un bébé de moins d'un an (NHS).",
  "À l'huile : un peu de l'huile de friture des amandes à la place du beurre clarifié (Taste of Maroc), ou en plus du beurre (Lalla Moulati n° 359492 : ¾ de verre de chaque), ou de l'huile d'olive au lieu du beurre (Taste of Maroc ; Lalla Moulati n° 359364, un verre d'huile d'olive pour 1 kg de farine).",
  "Version de Bladi.net : 1 kg de farine, 750 g de sésame, 500 g d'amandes frites, 500 g de sucre glace, 3 c. à s. de cannelle, 1 c. à s. de gomme (« masqua horra »), du beurre fondu et de l'huile ; le sellou est dressé en pyramide (Bladi.net).",
  "Version de Cooking with Alia (n° 777) : 500 g de farine grillée environ 45 minutes à 200 °C, 500 g d'amandes frites, 500 g de sésame, 1 c. à c. de muscade, 300 g de beurre clarifié, sucre glace et miel au goût.",
  "Autres parfums : graines de lin grillées (Lalla Moulati n° 359492), cardamome (Cooking with Alia n° 146), muscade (Cooking with Alia ; Lalla Moulati).",
  "À la farine complète, au miel et à l'huile d'olive ou d'argan (Taste of Maroc ; Cooking with Alia n° 495). Sans gluten : une farine sans gluten grillée et de l'huile d'argan (Taste of Maroc).",
  "Zmita (ou zomita) : une douceur proche, avec de la farine d'orge, du millet, des graines de lin et des herbes (Taste of Maroc)."
 ],
 "sources": [
  {
   "name": "Choumicha (Choumicha Chafay, cheffe marocaine), « Sellou », recette n° 159, choumicha.ma, rubrique Saveurs du Maroc, Ramadan, non datée ; site hors ligne, copie web.archive.org du 17 janvier 2026",
   "url": "https://web.archive.org/web/20260117193710/https://choumicha.ma/recette/159-sellou.html",
   "used_for": "Source marocaine : 500 g de farine, 250 g d'amandes mondées, 250 g de sésame, ½ c. à s. d'anis moulu, 1 c. à s. de cannelle, ½ c. à c. de sel, ¼ c. à c. de « mastic (gomme arabique) », 260 g de beurre fondu, 400 g de sucre glace ; farine dorée au four à 160 °C en remuant, refroidie et tamisée avec les épices ; sésame et amandes grillés au four et moulus avec le sucre ; pétrir 10 à 15 min, puis 5 min avec le beurre ; tassé, 2 h au froid, losanges ; amandes concassées pour le croquant ; mots clés Selou, Sfouf, Zemmita"
  },
  {
   "name": "Taste of Maroc, Christine Benlafquih (installée de longue date au Maroc), « Sellou Recipe – Sfouf or Zmita », mise à jour du 18 mars 2022 ; le site refuse les robots (403), copie web.archive.org du 14 décembre 2025",
   "url": "https://web.archive.org/web/20251214160115/https://tasteofmaroc.com/moroccan-sellou-recipe/",
   "used_for": "Version de Fès 1:1:1 (1 kg d'amandes, 1 kg de sésame, 1 kg de farine, 270 g de sucre glace, 4 c. à s. de cannelle, 2 c. à s. d'anis, ¼ c. à c. de sel, ¼ c. à c. de mastic facultatif, 455 g de beurre clarifié) ; ne pas augmenter la farine ; farine à 200 °C, 30 min ou plus, remuée toutes les 5 min, tamisée plusieurs fois ; sésame à la poêle ou au four ; amandes frites, retirées dorées ; mélange à la main 10 min ; beurre ajouté peu à peu ; refroidir avant de fermer ; conservation ; Ramadan et naissances ; noms sfouf et zmita"
  },
  {
   "name": "Bladi.net (« Les Marocains du monde »), « Sellou ou zmitta », rubrique Pâtisseries marocaines, sans auteur ni date",
   "url": "https://www.bladi.net/recettes/sellou-ou-zmitta.html",
   "used_for": "Source marocaine : 1 kg de farine grillée au four, 750 g de sésame grillé et mixé, 500 g d'amandes mondées et frites, 3 c. à s. de cannelle, 500 g de sucre glace, 1 c. à s. de « gomme arabique (masqua horra) », beurre fondu et huile ; quelques amandes gardées pour le décor ; pyramide, sucre glace et amandes"
  },
  {
   "name": "Morocco World News (Rabat), Layla Dahamou, « How to Make Moroccan Sellou », 1er décembre 2019 (le site bloque les robots : page de contrôle Cloudflare, erreur 403 ; copie web.archive.org du 19 janvier 2021, à l'ancienne adresse de l'article, n° 287931)",
   "url": "https://web.archive.org/web/20210119093203/https://www.moroccoworldnews.com/2019/12/287931/how-to-make-moroccan-sellou/",
   "used_for": "Source marocaine : 1 kg de farine, 500 g de sésame, 500 g d'amandes, 500 g de cacahuètes, 2 c. à s. de graines d'anis et 2 de fenouil, 1 c. à s. de cannelle, 200 g de sucre glace, 125 g de beurre clarifié, huile, ½ tasse de miel, ½ c. à c. de sel, ½ c. à c. de « gomme arabique » facultative ; farine tamisée ; sésame et amandes en partie gardés entiers ; repos d'une nuit avant la boîte ; Ramadan, fêtes et naissances ; noms zmita et seffouf"
  },
  {
   "name": "Cooking with Alia, « Sellou, the Moroccan Energy Mix / سلو », épisode n° 777, non datée",
   "url": "https://www.cookingwithalia.com/777-sellou-the-moroccan-energy-mix/",
   "used_for": "Rapport 1:1:1 (500 g de farine, 500 g d'amandes frites, 500 g de sésame), 1 à 2 c. à s. d'anis et de cannelle, 1 c. à c. de muscade, ½ c. à c. de sel, 300 g de beurre clarifié, 1 c. à c. de gomme facultative (dite plus bas « mastic ») ; farine à 200 °C, remuée toutes les 10 min, environ 45 min ; sésame à la poêle ; pétrir 5 min ; dôme ou boules"
  },
  {
   "name": "Cooking with Alia, « Sellou (Sfouf) Recipe – Ramadan Special », épisode n° 146, non datée",
   "url": "https://www.cookingwithalia.com/sellou-sfouf-unique-moroccan-sweet/",
   "used_for": "Farine environ 30 min à 350 °F (177 °C), remuée toutes les 5 min, puis tamisée ; ¼ c. à c. de mastic pour 200 g de farine ; cacahuètes et cardamome en option ; conservation au réfrigérateur jusqu'à 1 mois ; dôme, sucre glace et amandes"
  },
  {
   "name": "Cooking with Alia, « Sellou – Moroccan Energy Mix / سلو أو السفوف – حلوى مغربية », épisode n° 495 (2017 selon Wikipédia)",
   "url": "https://www.cookingwithalia.com/495-sellou-moroccan-energy-mix/",
   "used_for": "Nom arabe « سلو أو السفوف » ; farine à 200 °C pendant 45 min, remuée toutes les 10 min ; gomme pilée avec du sucre ; version à la farine complète, au miel et à l'huile d'olive"
  },
  {
   "name": "Lalla Moulati (magazine féminin marocain en ligne), « شهيوات رمضان:سفوف أو سلو رمضاني على الطريقة التقليدية », 7 mars 2023",
   "url": "https://www.lalamoulati.net/358757.html",
   "used_for": "Source marocaine (liste d'ingrédients seulement) : pour 1 kg de farine, 600 g de sésame, 500 g d'amandes, النافع, حبة حلاوة, cannelle, 1,5 g de « المسكة الحرة », 300 g de beurre, 160 g de sucre glace, muscade, sel"
  },
  {
   "name": "Lalla Moulati, « شهيوات رمضان:سلو أو سفوف على حقو وطريقو », 13 mars 2023",
   "url": "https://www.lalamoulati.net/359492.html",
   "used_for": "Source marocaine (liste d'ingrédients) : 500 g de farine grillée, 500 g de sésame grillé, 500 g d'amandes mondées et frites (rapport 1:1:1), 1 c. à s. de نافع et 1 de حبة حلاوة, ½ c. à s. de cannelle, beurre « مطبوخة » (cuit, clarifié) et huile de friture des amandes, sucre glace, 3 grains de « المسكة الحرة », muscade, sel, graines de lin"
  },
  {
   "name": "Lalla Moulati, « شهيوات رمضان:سلو أو السفوف بمقادير بسيطة », 12 mars 2023",
   "url": "https://www.lalamoulati.net/359364.html",
   "used_for": "Source marocaine (liste) : 1 kg de farine, 1,25 kg de sésame, 1,25 kg d'amandes, 2 c. à s. de cannelle, نافع et حبة حلاوة, مسكة حرة, ½ muscade, 250 g de sucre glace, un verre d'huile d'olive"
  },
  {
   "name": "Lalla Moulati, « شهيوات رمضان: أروع وألذ سفوف أو سلو », 17 mars 2023",
   "url": "https://www.lalamoulati.net/360164.html",
   "used_for": "Source marocaine (liste) : gloses de la page « نافع أو (ينسون) » (anis) et « حبة حلاوة أو (حب الشبت) » ; cacahuètes ; huile d'olive et huile végétale"
  },
  {
   "name": "Al3omk (média marocain), dépêche de l'agence Anadolu, « “سَلُّو” .. حلوى لا تخلو منها مائدة مغربية بين التراويح والقيام », 1er juin 2017",
   "url": "https://al3omk.com/181840.html",
   "used_for": "Source marocaine : noms سَلُّو, السَفُّوفْ, التَّقَاوْت et الزَّمِّيتَة selon les régions ; Ramadan, mariages et fêtes de naissance (العقيقة) ; farine grillée, amandes, sésame, « النافع (اليانسون) » (anis), « المستكة الحرة », huile et beurre ; servi avec le thé, souvent après les tarawih, décoré d'amandes frites"
  },
  {
   "name": "Wikipédia (en), « Sellou »",
   "url": "https://en.wikipedia.org/wiki/Sellou",
   "used_for": "Nom arabe سلّو (səllu), autres noms slilou et sfouf ; farine grillée, beurre, miel, amandes, sésame ; plat important du ramadan au Maroc"
  },
  {
   "name": "Wikipédia (fr), « Sellou »",
   "url": "https://fr.wikipedia.org/wiki/Sellou",
   "used_for": "سَلُّو, slilou, sfouf (سْفُوف) ; anis et fenouil cités parmi les épices ; ramadan, mariages et naissances"
  },
  {
   "name": "Wikipédia (ar), « سلو »",
   "url": "https://ar.wikipedia.org/wiki/%D8%B3%D9%84%D9%88",
   "used_for": "Nom سليلو ; recette 1:1:1 (1 kg de farine, de sésame et d'amandes frites) ; « المسكة الحرة (مستكة) » pilée avec le النافع ; sucre glace pour le décor ; servi avec le thé"
  },
  {
   "name": "Taste of Maroc, Nada Kiffa, « Moroccan Almond Macaroon – Mlewza or Ghrieba d'ellouz », mise à jour du 24 octobre 2017 ; copie web.archive.org du 15 juin 2026",
   "url": "https://web.archive.org/web/20260615073957/https://tasteofmaroc.com/moroccan-almond-macaroon-mlewza/",
   "used_for": "Le mastic (meska) est une résine du lentisque (Pistacia lentiscus), à ne pas confondre avec la gomme arabique"
  },
  {
   "name": "NHS (service de santé publique britannique), « Foods to avoid giving babies and young children », page revue le 18 février 2026",
   "url": "https://www.nhs.uk/baby/weaning-and-feeding/foods-to-avoid-giving-babies-and-young-children/",
   "used_for": "Pas de miel avant l'âge d'un an (risque de botulisme infantile)"
  },
  {
   "name": "Cooking with Alia, « Almond Paste / عجينة اللوز », n° 692, non datée",
   "url": "https://www.cookingwithalia.com/692-almond-paste/",
   "used_for": "Friture des amandes mondées : huile testée avec une amande (petites bulles), amandes retirées dès qu'elles sont dorées, car elles foncent encore ; la meska y est appelée « Arabic gum »"
  },
  {
   "name": "Wikipédia (fr), « Mastic (résine) »",
   "url": "https://fr.wikipedia.org/wiki/Mastic_(r%C3%A9sine)",
   "used_for": "Contre-vérification : Le mastic est un exsudat du lentisque (Pistacia lentiscus), une résine appelée à tort gomme, employée en pâtisserie et en confiserie : c'est bien la meska (« المسكة الحرة ») des recettes marocaines."
  },
  {
   "name": "Wikipédia (fr), « Gomme arabique »",
   "url": "https://fr.wikipedia.org/wiki/Gomme_arabique",
   "used_for": "Contre-vérification : La gomme arabique (E414) est un exsudat d'arbres du genre Acacia : un autre produit que le mastic. Le choix du mastic par la recette est juste ; Choumicha, Bladi.net, Morocco World News et Cooking with Alia emploient le mot « gomme arabique » à tort."
  },
  {
   "name": "Wikipédia (ar), « يانسون »",
   "url": "https://ar.wikipedia.org/wiki/%D9%8A%D8%A7%D9%86%D8%B3%D9%88%D9%86",
   "used_for": "Contre-vérification : Page de l'anis vert (Pimpinella anisum) : elle dit qu'au Maroc on l'appelle « الحبة الحلوة », ce qui contredit Al3omk et Lalla Moulati (« النافع ») : le nom marocain de l'anis n'est pas sûr."
  },
  {
   "name": "Le360 (média marocain), Leïla Driss, « Ch'hiwates light: 3 recettes de sellou sans farine, sans beurre ou sans sucre à faire chez soi », 10 mai 2018",
   "url": "https://fr.le360.ma/lifestyle/chhiwates-light-3-recettes-de-sellou-sans-farine-sans-beurre-ou-sans-sucre-a-faire-chez-soi-164918/",
   "used_for": "Contre-vérification : Source marocaine (versions allégées seulement) : farine dorée au four puis tamisée, amandes et sésame grillés, anis, et une très petite dose de mastic, appelé lui aussi « gomme arabique » (2 grains ou ¼ c. à c.)."
  },
  {
   "name": "Femmes du Maroc, « Sellou diet », recette de la Dr Imane Slaoui, 30 mai 2019",
   "url": "https://femmesdumaroc.com/archives/sellou-diet",
   "used_for": "Contre-vérification : Source marocaine (version allégée, au son d'avoine) : autant de sésame que d'amandes (1 kg de chaque) ; l'anis et la « hebet hlawa » y sont deux épices différentes ; la « meska hourra », dite aussi « gomme arabique », se met en petite quantité, car elle peut donner de l'amertume."
  }
 ],
 "discrepancies": [
  "Proportions, ramenées à 500 g de farine (calcul) : amandes 200 g (Lalla Moulati n° 360164), 250 g (Choumicha, Bladi.net, Morocco World News, Lalla Moulati n° 358757), 312 g (Cooking with Alia n° 146), 500 g (Taste of Maroc, Cooking with Alia n° 777 et n° 495, Lalla Moulati n° 359492, Wikipédia en arabe), 625 g (Lalla Moulati n° 359364). Médiane 406 g ; valeur la plus fréquente 500 g ; avec une seule recette par auteur, médiane 375 g et égalité entre 250 et 500 g. Sésame : de 250 à 625 g, médiane 450 g, valeur la plus fréquente 500 g. Retenu : 500 g de chaque, le rapport 1:1:1 que Taste of Maroc décrit comme la version de Fès, en conseillant de ne pas augmenter la farine. La version avec moitié moins de fruits secs (Choumicha) est en variante.",
  "Sucre glace pour 500 g de farine (calcul) : 45 g plus du miel (Cooking with Alia n° 777), 80 g (Lalla Moulati n° 358757), 100 g (Morocco World News, plus du miel ; Lalla Moulati n° 360164), 125 g (Lalla Moulati n° 359364), 135 g (Taste of Maroc), 187 g plus du miel (Cooking with Alia n° 146), 250 g (Bladi.net), 400 g (Choumicha). Médiane : 125 g. Retenu : 125 g, à ajuster au goût comme le conseillent Taste of Maroc et Cooking with Alia.",
  "Beurre pour 500 g de farine (calcul) : 62 g avec beaucoup d'huile (Morocco World News), 150 g (Lalla Moulati n° 358757), 227 g (Taste of Maroc), 250 g (Wikipédia en arabe), 260 g (Choumicha), 282 g (Cooking with Alia n° 146), 300 g (Cooking with Alia n° 777), 375 g avec de l'huile (Bladi.net). Médiane : 255 g. Retenu : 250 g au plus, ajoutés peu à peu (Taste of Maroc). Beurre clarifié chez Taste of Maroc, Morocco World News, Cooking with Alia (n° 777) et Lalla Moulati (n° 359492) ; simplement fondu chez Choumicha, Bladi.net et Wikipédia en arabe. Retenu : clarifié.",
  "Cannelle pour 500 g de farine (calcul) : de ½ c. à s. (Morocco World News ; Lalla Moulati n° 359492 ; Wikipédia en arabe) à environ 2,7 c. à s. (Lalla Moulati n° 358757 : 20 g, conversion approximative à 7,5 g la cuillère). Médiane : 1 c. à s. Retenu : 1 c. à s. (Choumicha ; Lalla Moulati n° 359364).",
  "Sel pour 500 g de farine : ⅛ c. à c. (Taste of Maroc), ¼ (Morocco World News), ½ (Choumicha ; Cooking with Alia n° 777), « un peu » (Lalla Moulati ; Wikipédia en arabe). Médiane 0,375 ; valeur la plus fréquente ½. Retenu : ½ c. à c.",
  "Anis et fenouil : anis seul chez Choumicha (½ c. à s. pour 500 g de farine), Taste of Maroc (1 c. à s.) et Cooking with Alia (1 à 2 c. à s.) ; anis et fenouil chez Morocco World News (1 c. à s. de chaque pour 500 g de farine, calcul) et Wikipédia (fr). Les recettes en arabe mettent souvent deux graines : « النافع », que Al3omk et Lalla Moulati (n° 360164) traduisent par anis (يانسون), et « حبة حلاوة », que Lalla Moulati (n° 360164) traduit par graines d'aneth (حب الشبت). Médiane pour l'anis : 1 c. à s. Retenu : 1 c. à s. d'anis vert moulu ; le fenouil reste en variante, une seule source le chiffre.",
  "Mastic ou gomme arabique : Bladi.net et Morocco World News écrivent « gomme arabique », Choumicha « mastic (gomme arabique) », Cooking with Alia emploie les deux mots, Taste of Maroc et Wikipédia en arabe écrivent mastic (« المسكة الحرة (مستكة) »). Taste of Maroc (Nada Kiffa) précise que la meska est le mastic, une résine du lentisque, à ne pas confondre avec la gomme arabique. Retenu : le mastic, facultatif (Taste of Maroc ; Morocco World News). Quantité pour 500 g de farine : ⅛ c. à c. (Taste of Maroc), ¼ (Choumicha ; Morocco World News), environ ⅝ (Cooking with Alia n° 146), 1 (Cooking with Alia n° 777), 1½ (Bladi.net) ; médiane 0,44, valeur la plus fréquente ¼. Retenu : ¼ c. à c.",
  "Muscade : absente chez Choumicha, Taste of Maroc, Bladi.net et Morocco World News ; présente chez Cooking with Alia (1 c. à c. pour 500 g de farine), Lalla Moulati (de ¼ à ½ noix pour 1 kg de farine) et Wikipédia en arabe (« un peu »). Retenu : facultative, sans quantité chiffrée.",
  "Farine : 160 °C (Choumicha), 350 °F soit 177 °C (Cooking with Alia n° 146, calcul), 200 °C (Taste of Maroc ; Cooking with Alia n° 777 et n° 495). Durée : environ 20 min (Morocco World News, sans température), 30 min (Taste of Maroc, « ou plus » ; Cooking with Alia n° 146 ; fiche de Choumicha), environ 45 min (Cooking with Alia n° 777 et n° 495). Retenu : 200 °C et 30 minutes (médiane), en remuant toutes les 5 minutes ; la couleur décide.",
  "Amandes : frites (Taste of Maroc ; Bladi.net ; Cooking with Alia n° 777 ; Lalla Moulati n° 359492 ; Wikipédia en arabe), grillées au four (Choumicha), poêlées à sec (Morocco World News). Retenu : frites. Friture de 5 à 10 min (Taste of Maroc) ou « quelques minutes » (Cooking with Alia) : pas de minuteur, la couleur décide.",
  "Sésame : au four à 200 °C, 15 à 20 min (Taste of Maroc), ou à la poêle sèche, environ 5 min (Cooking with Alia n° 777), 20 à 30 min à feu moyen-doux (Cooking with Alia n° 146), environ 10 min (Morocco World News). Retenu : la poêle à feu moyen, avec les signes de cuisson de Taste of Maroc, sans minuteur.",
  "Quantité de base : la fiche de Choumicha indique « 1 personne », ce qui n'a pas de sens ici ; Taste of Maroc obtient environ 4 quarts (environ 3,8 litres, conversion) avec 1 kg de chaque. Retenu : 1 fournée = 500 g de farine ; pour une grande provision de ramadan, choisis 2 fournées.",
  "Conversions (python3) : 2,2 livres = 998 g, soit 1 kg sur la carte métrique de Taste of Maroc ; 1 livre = 454 g (455 g sur la carte) ; ½ pouce d'huile = 1,3 cm, écrit « environ 1 cm » ; 350 °F = 177 °C.",
  "Contre-vérifiée le 8 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 12 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Temps estimés : 60 min de préparation et 60 min de cuisson (Cooking with Alia affiche 2 heures ; Choumicha compte 30 min de cuisson et 3 h 30 en tout, dont 2 h au froid ; Taste of Maroc compte 1 h 30 de mélange, sans les préparatifs). Difficulté « Moyen » : estimation.",
  "Poids de sellou obtenu pour une fournée : aucune source ne le donne.",
  "Identité de « حبة حلاوة » : une seule traduction lue (graines d'aneth, Lalla Moulati n° 360164) ; le lien avec le fenouil de Morocco World News et de Wikipédia (fr) n'est pas confirmé.",
  "Nom « النافع » pour l'anis : traduit ainsi par deux sources (Al3omk ; Lalla Moulati n° 360164) ; aucune transcription en lettres latines lue ; Wikipédia en arabe (page « يانسون ») dit au contraire qu'au Maroc l'anis s'appelle « الحبة الحلوة ».",
  "Morocco World News : le site bloque les robots ; l'article a été relu sur sa copie web.archive.org du 19 janvier 2021, qui confirme les quantités. La quantité d'huile vraiment mélangée au sellou n'est pas précisée (1 litre listé).",
  "Lalla Moulati : les quatre pages ne donnent que la liste des ingrédients, reprise de chaînes YouTube, sans méthode. « زبدة مطبوخة » est lu comme du beurre cuit, c'est-à-dire clarifié (interprétation).",
  "Conservation : plusieurs mois à température ambiante selon Taste of Maroc seulement ; Cooking with Alia conseille le réfrigérateur, jusqu'à 1 mois.",
  "Affirmations sur la valeur nutritive ou l'énergie du sellou (Wikipédia fr, Al3omk, Taste of Maroc, titres de Cooking with Alia) : non reprises, faute de source officielle.",
  "Origine berbère et mention par al-Idrissi (Wikipédia en arabe et en français) : non vérifiées, non reprises.",
  "SNRT News : non lu, son robots.txt interdit les robots d'Anthropic. Hespress : non lu, le site bloque les robots. Le360 n'a que des recettes de sellou allégées (voir la source ajoutée).",
  "Graphie « slilou » : lue en lettres latines seulement dans Wikipédia (en, fr) ; « سليلو » dans Wikipédia (ar)."
 ],
 "cuisine": "Marocaine",
 "rayon": "Douceurs",
 "pairs": [
  "the-menthe"
 ],
 "img_alt": "Sellou moulé en dôme et décoré d'amandes, une part coupée",
 "img": "img/sellou.jpg",
 "photo": {
  "author": "Najwa210",
  "license": "CC BY-SA 4.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Selou.jpg",
  "modified": "réduite"
 }
});
