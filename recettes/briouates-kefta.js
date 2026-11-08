/* Recette : Briouates à la kefta. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "briouates-kefta",
 "title": "Briouates à la kefta",
 "darija": "briwat bel kefta",
 "arabic": "بريوات بالكفتة",
 "tagline": "De petits triangles de feuilles de brick croustillants, farcis de kefta aux herbes, au cumin et à la cannelle, liée aux œufs : un classique marocain, à saupoudrer de sucre glace si tu aimes le sucré-salé.",
 "category": "Entrée",
 "occasion": "Ftour du ramadan (Femmes du Maroc ; Choumicha, rubrique Ramadan) et réceptions (Choumicha, rubriques « Pour recevoir » et « Recettes de fêtes »).",
 "region": "Maroc. My Moroccan Food la dit « classique au Maroc ». Aucune source lue ne donne de région d'origine précise.",
 "servings": 80,
 "servings_label": "pièces",
 "time": {
  "prep": 60,
  "cook": 45,
  "rest": 0
 },
 "difficulty": "Moyen",
 "equipment": [
  "Une planche et un couteau",
  "Une grande poêle et une cuillère en bois",
  "Un bol et une fourchette pour les œufs",
  "Un grand plat pour laisser refroidir la farce",
  "Un torchon propre, légèrement humide, pour couvrir les feuilles",
  "Une plaque couverte de papier sulfurisé",
  "Un pinceau ou une petite cuillère pour le jaune d'œuf",
  "Une friteuse électrique à thermostat (le plus sûr), ou une casserole profonde",
  "Un couvercle à la taille de la casserole, toujours à portée de main",
  "Une écumoire et du papier absorbant"
 ],
 "ingredients": [
  {
   "group": "La farce",
   "items": [
    {
     "id": "huile",
     "q": 2,
     "u": "c. à s.",
     "name": "d'huile (ou de beurre)",
     "canon": "huile"
    },
    {
     "id": "oignon",
     "q": 1,
     "u": "",
     "name": "oignon moyen",
     "pl": "oignons moyens",
     "note": "à hacher finement",
     "canon": "oignon"
    },
    {
     "id": "viande",
     "q": 500,
     "u": "g",
     "name": "de viande hachée halal (bœuf ou agneau)",
     "canon": "boeuf-hache"
    },
    {
     "id": "persil",
     "q": 2,
     "u": "c. à s.",
     "name": "de persil plat haché",
     "canon": "persil"
    },
    {
     "id": "coriandre",
     "q": 2,
     "u": "c. à s.",
     "name": "de coriandre fraîche hachée",
     "canon": "coriandre"
    },
    {
     "id": "paprika",
     "q": 1.5,
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
     "id": "cannelle",
     "q": 1.5,
     "u": "c. à c.",
     "name": "de cannelle moulue",
     "canon": "cannelle"
    },
    {
     "id": "sel",
     "q": 1,
     "u": "c. à c.",
     "name": "de sel fin",
     "canon": "sel"
    },
    {
     "id": "poivre",
     "q": 0.75,
     "u": "c. à c.",
     "name": "de poivre noir moulu",
     "canon": "poivre"
    },
    {
     "id": "oeufs",
     "q": 3,
     "u": "",
     "name": "œuf",
     "pl": "œufs",
     "canon": "oeuf"
    }
   ]
  },
  {
   "group": "Pliage et friture",
   "items": [
    {
     "id": "feuilles",
     "q": 1,
     "u": "kg",
     "name": "de feuilles de brick (ou de warqa)",
     "canon": "warqa"
    },
    {
     "id": "jaune",
     "q": 1,
     "u": "",
     "name": "jaune d'œuf",
     "pl": "jaunes d'œufs",
     "note": "pour coller ; prends un jaune entier, même pour une petite fournée",
     "round": "up",
     "canon": "oeuf"
    },
    {
     "id": "huile-friture",
     "q": null,
     "u": "",
     "name": "huile végétale de friture",
     "note": "casserole remplie au tiers de sa hauteur au plus",
     "canon": "huile"
    }
   ]
  },
  {
   "group": "Pour servir (facultatif)",
   "items": [
    {
     "id": "sucre-glace",
     "q": null,
     "u": "",
     "name": "sucre glace",
     "note": "si tu aimes le sucré-salé",
     "canon": "sucre-glace"
    },
    {
     "id": "cannelle-service",
     "q": null,
     "u": "",
     "name": "cannelle moulue",
     "note": "avec le sucre glace",
     "canon": "cannelle"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Hache l'oignon et les herbes",
   "text": "Épluche et hache finement {{oignon:full}}. Lave le persil et la coriandre, sèche-les bien, puis hache-les : il te faut {{persil}} de persil et {{coriandre}} de coriandre.",
   "timer": null,
   "img": {
    "src": "img/etapes/hacher-persil.jpg",
    "alt": "Persil haché au couteau sur une planche",
    "caption": "Hacher les herbes",
    "w": 803,
    "h": 1000,
    "credit": "Photo de l'étape « Hache l'oignon et les herbes » : katerha, Wikimedia Commons, licence CC BY 2.0 (réduite)."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Fais revenir l'oignon",
   "text": "Dans une grande poêle, chauffe {{huile}} d'huile (ou de beurre) à feu moyen. Ajoute l'oignon et fais-le revenir en remuant, jusqu'à ce qu'il devienne translucide.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Ajoute la viande et les épices",
   "text": "Ajoute {{viande}} de viande hachée, les herbes, {{paprika}} de paprika, {{cumin}} de cumin, {{cannelle}} de cannelle, {{sel}} de sel et {{poivre}} de poivre.",
   "timer": null,
   "tip": "Si tu as touché la viande crue, lave-toi les mains à l'eau et au savon (Anses)."
  },
  {
   "phase": "Cuisson",
   "title": "Émiette et cuis la viande",
   "text": "Écrase la viande avec la cuillère en bois pour bien l'émietter. Laisse cuire en remuant, jusqu'à ce que tout le liquide de la viande se soit évaporé.",
   "timer": null,
   "tip": "Choumicha cuit sa viande 5 minutes, My Moroccan Food environ 7 minutes. S'il reste du liquide, égoutte la viande : la farce ne doit pas être mouillée (My Moroccan Food)."
  },
  {
   "phase": "Cuisson",
   "title": "Vérifie la cuisson de la viande",
   "text": "Regarde bien : il ne doit plus rester aucun morceau rose. Toute la viande doit être brune, et de la vapeur doit s'en dégager quand tu la remues. Sinon, prolonge la cuisson de quelques minutes.",
   "timer": null,
   "tip": "La viande hachée doit être cuite jusqu'au centre (FSA, agence sanitaire britannique), surtout pour les jeunes enfants, les femmes enceintes et les personnes immunodéprimées (Anses)."
  },
  {
   "phase": "Cuisson",
   "title": "Ajoute les œufs",
   "text": "Bats {{oeufs:full}} à la fourchette. Baisse le feu. Verse les œufs battus peu à peu sur la viande (pour une petite fournée, bats un œuf entier et n'en verse que la part indiquée) et remue sans arrêt, jusqu'à ce qu'ils soient bien cuits, sans partie liquide.",
   "timer": null,
   "tip": "Femmes du Maroc laisse d'abord prendre les œufs, puis mélange toute la farce. My Moroccan Food les brouille à part dans un peu de beurre, puis les mêle à la viande."
  },
  {
   "phase": "Préparation",
   "title": "Laisse refroidir la farce",
   "text": "Verse la farce dans un grand plat et laisse-la refroidir complètement avant de plier les briouates.",
   "timer": null,
   "tip": "Si tu ne plies pas les briouates dans les 2 heures, couvre la farce et mets-la au frigo (Anses ; FSA)."
  },
  {
   "phase": "Préparation",
   "title": "Prépare les feuilles",
   "text": "Coupe chaque feuille de brick en deux ({{feuilles}} en tout). Garde-les sous un torchon propre, légèrement humide, pour qu'elles ne sèchent pas.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Forme une bande",
   "text": "Prends une demi-feuille. Rabats le côté arrondi vers le centre, pour obtenir une bande rectangulaire.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Garnis et plie en triangle",
   "text": "Pose environ 2 cuillères à café de farce (un peu plus d'une demi-cuillère à soupe) à un bout de la bande : avec cette dose, la farce suffit pour toutes les pièces. Rabats un coin sur la farce pour former un triangle. Plie ensuite le triangle sur lui-même, une fois vers la droite, une fois vers la gauche, jusqu'au bout de la bande. La farce doit être bien enfermée.",
   "timer": null,
   "tip": "Quatre ou cinq plis suffisent : trop de couches de feuille, c'est inutile (Taste of Maroc)."
  },
  {
   "phase": "Préparation",
   "title": "Colle la briouate",
   "text": "Coupe ce qui dépasse de la feuille. Bats {{jaune:full}}, mets-en un peu sur le bord, puis rentre ce bord sous le pli. Pose la briouate sur la plaque. Plie toutes les autres de la même façon.",
   "timer": null,
   "tip": "Choumicha colle ses briouates au blanc d'œuf."
  },
  {
   "phase": "Cuisson",
   "title": "Chauffe l'huile",
   "text": "Prends une friteuse à thermostat ou une casserole profonde. Verse l'{{huile-friture}} : jamais plus d'un tiers de la hauteur. Pose un couvercle de la bonne taille à portée de main. Chauffe à feu moyen : l'huile doit être bien chaude, mais ne jamais fumer. À partir de maintenant, ne la quitte plus des yeux.",
   "timer": null,
   "tip": "Si l'huile fume, coupe le feu et laisse-la refroidir (London Fire Brigade). Si elle prend feu : jamais d'eau, ne déplace pas la casserole, pose vite le couvercle et coupe le feu si tu peux, puis appelle les pompiers (gouvernement du Québec)."
  },
  {
   "phase": "Cuisson",
   "title": "Fais frire les briouates",
   "text": "Fais frire quelques briouates à la fois, sans les serrer. Retourne-les, jusqu'à ce qu'elles soient bien dorées des deux côtés. Sors-les avec l'écumoire et pose-les sur du papier absorbant. Continue avec les autres, puis éteins le feu.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Sers chaud",
   "text": "Sers les briouates bien chaudes. Si tu aimes le sucré-salé, saupoudre-les de {{sucre-glace}} et de {{cannelle-service}}, ou pose-les en couronne autour d'une petite soucoupe de sucre glace mêlé de cannelle.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Cuis toujours la farce avant de plier les briouates.",
   "source": "Choumicha n° 131 et 1330 ; Bladi.net ; Femmes du Maroc ; My Moroccan Food ; Lalla Moulati n° 30191"
  },
  {
   "text": "Émiette bien la viande à la cuillère pendant la cuisson, pour une farce fine.",
   "source": "Bladi.net ; My Moroccan Food ; Lalla Moulati n° 30191 et 14937"
  },
  {
   "text": "Laisse le liquide de la viande s'évaporer, ou égoutte-le : la farce ne doit pas être mouillée.",
   "source": "Bladi.net ; Femmes du Maroc ; My Moroccan Food"
  },
  {
   "text": "La farce classique est liée aux œufs, cuits avec la viande.",
   "source": "Bladi.net ; Femmes du Maroc ; My Moroccan Food"
  },
  {
   "text": "La cannelle et le cumin parfument la farce, avec le persil et la coriandre.",
   "source": "Bladi.net ; Femmes du Maroc ; My Moroccan Food (cannelle avec sa kefta au cumin, au persil et à la coriandre)"
  },
  {
   "text": "Laisse refroidir la farce avant de la mettre dans les feuilles.",
   "source": "Choumicha n° 131 et 1330 ; Lalla Moulati n° 196443 et 14937 ; Bladi.net (cigares)"
  },
  {
   "text": "Garde les feuilles sous un linge humide pendant le pliage, sinon elles sèchent.",
   "source": "My Moroccan Food ; Bladi.net (cigares)"
  },
  {
   "text": "Une demi-feuille, côtés rabattus vers le centre, et un peu de farce : environ 2 cuillères à café par pièce.",
   "source": "Femmes du Maroc ; Bladi.net"
  },
  {
   "text": "Plie en triangle, une fois à droite, une fois à gauche, puis colle le bout et rentre-le sous le pli.",
   "source": "Choumicha n° 493 ; Taste of Maroc (Christine Benlafquih) ; My Moroccan Food"
  },
  {
   "text": "Un peu de jaune d'œuf suffit pour coller la briouate.",
   "source": "Femmes du Maroc ; Taste of Maroc ; Choumicha, elle, prend du blanc d'œuf"
  },
  {
   "text": "Traditionnellement, on les fait frire ; au four, elles sont bonnes aussi.",
   "source": "My Moroccan Food ; Choumicha n° 477 ; Lalla Moulati n° 30191"
  },
  {
   "text": "Sers-les bien chaudes, avec du sucre glace et de la cannelle si tu aimes le sucré-salé.",
   "source": "Bladi.net ; Femmes du Maroc ; My Moroccan Food"
  }
 ],
 "mistakes": [
  "Plier les briouates avec une viande encore rose : la viande hachée doit être cuite jusqu'au centre (FSA ; Anses).",
  "Garder du liquide dans la farce : elle devient mouillée (My Moroccan Food).",
  "Mettre la farce chaude dans les feuilles : laisse-la refroidir avant (Choumicha ; Lalla Moulati).",
  "Laisser les feuilles à l'air pendant le pliage : elles sèchent (My Moroccan Food ; Bladi.net).",
  "Utiliser pour la farce cuite le plat ou la planche de la viande crue (Anses).",
  "Laisser la farce ou les briouates plus de 2 heures à température ambiante avant de les mettre au frigo (Anses ; FSA).",
  "Remplir la casserole de plus d'un tiers d'huile, ou laisser l'huile fumer (London Fire Brigade).",
  "Jeter de l'eau sur de l'huile en feu, ou déplacer la casserole en flammes (gouvernement du Québec).",
  "Quitter la cuisine pendant la friture (gouvernement du Québec)."
 ],
 "serving": "Sers les briouates bien chaudes (Choumicha ; Bladi.net ; Femmes du Maroc). Bladi.net les pose en couronne autour d'une soucoupe de sucre glace et de cannelle ; Femmes du Maroc les saupoudre de cannelle et de sucre glace ; My Moroccan Food les sert sur de la menthe hachée, avec beaucoup de sucre glace et de cannelle. Elles se servent au ftour du ramadan (Femmes du Maroc) et aux réceptions (Choumicha). Restes : au frigo dans les 2 heures, à manger dans les 48 heures ; réchauffe-les une seule fois, jusqu'à ce qu'elles soient brûlantes au centre (FSA). Ton frigo doit être à 4 °C dans sa zone la plus froide (Anses).",
 "variants": [
  "Au four : My Moroccan Food beurre des rectangles de filo, les dore au jaune d'œuf et les cuit 20 à 25 minutes à 180 °C. Lalla Moulati (n° 30191) cuit ses cigares sur une plaque huilée, jusqu'à ce qu'ils soient dorés dessus et dessous.",
  "En cigares, roulés au lieu d'être pliés en triangle (Choumicha n° 1330 ; Bladi.net ; Lalla Moulati n° 30191).",
  "Sans œufs, plus relevée : Choumicha (n° 1330) poche d'abord la viande 15 minutes dans de l'eau au laurier, la hache de nouveau avec ail et coriandre, puis la cuit à la poêle avec paprika, piment fort, cumin, sel et un peu de vinaigre. Lalla Moulati (n° 30191) met ail, herbes, poivre et paprika.",
  "Au cheddar, à l'aneth et au piment vert (Choumicha n° 131, republiée par Femmes du Maroc). Si tu veux être strict sur le halal, prends un fromage à coagulant microbien, sans présure animale.",
  "Avec des olives coupées (Lalla Moulati n° 14937), ou avec des vermicelles chinois et des champignons noirs (Lalla Moulati n° 196443).",
  "Aux abricots secs et aux amandes (Choumicha n° 477) : agneau, gingembre, muscade, abricots trempés dans du jus d'orange et pâte d'amandes ; au four, ou frites.",
  "Avec du curcuma, du safran et un peu de sucre dans la farce (Femmes du Maroc).",
  "Grandes briouates : 3 c. à s. de farce dans des rectangles de filo de 10 x 30 cm, environ 15 pièces pour 450 g de viande (My Moroccan Food).",
  "Sans warqa : double épaisseur de pâte filo épaisse, ou feuilles de rouleaux de printemps à base de farine, collées avec un peu d'eau (Taste of Maroc)."
 ],
 "sources": [
  {
   "name": "Choumicha (Choumicha Chafay), « Briouates de viande hachée au fromage Cheddar » (n° 131), copie Wayback Machine du 14 juin 2026",
   "url": "https://web.archive.org/web/20260614095555/https://choumicha.ma/recette/131-briouates-de-viande-hachee-au-fromage-cheddar.html",
   "used_for": "Source marocaine : 350 g de viande, ½ c. à c. de sel, ¼ de poivre ; viande cuite 5 min à feu moyen puis refroidie ; bandes, pliage à droite et à gauche en triangle ; blanc d'œuf ; bain d'huile chaude jusqu'à doré ; papier absorbant ; servir bien chaud ; rubriques Ramadan et « Pour recevoir » ; variante au cheddar."
  },
  {
   "name": "Choumicha, « Technique de pliage des briouates » (n° 493), copie Wayback Machine du 14 juin 2026",
   "url": "https://web.archive.org/web/20260614094551/https://choumicha.ma/recette/493-technique-de-pliage-des-briouates.html",
   "used_for": "Demi-feuille pliée en bande, farce en haut, pointe rabattue, triangle à gauche puis à droite, excédent coupé, bord au blanc d'œuf rentré sous le pli."
  },
  {
   "name": "Choumicha, « Cigares à la viande hachée » (n° 1330), copie Wayback Machine du 15 juillet 2026",
   "url": "https://web.archive.org/web/20260715074540/https://choumicha.ma/recette/1330-cigares-a-la-viande-hachee.html",
   "used_for": "600 g de viande, 1 c. à c. de paprika, ½ de piment fort, 1 de cumin, 1 de sel, 3 c. à s. d'huile ; viande pochée puis poêlée 10 à 15 min ; farce refroidie ; bain d'huile chaude ; servir aussitôt (variante en cigares)."
  },
  {
   "name": "Choumicha, « Briouates de kefta aux abricots secs » (n° 477), copie Wayback Machine du 10 juillet 2026",
   "url": "https://web.archive.org/web/20260710201750/https://www.choumicha.ma/recette/477-briouates-de-kefta-aux-abricots-secs.html",
   "used_for": "200 g d'agneau, ½ c. à c. de sel et de poivre ; viande cuite 5 min à feu vif ; au four ou frites ; rubriques Ramadan, fêtes et « Pour recevoir » (variante)."
  },
  {
   "name": "Bladi.net, « Briouats à la viande hachée »",
   "url": "https://www.bladi.net/recettes/briouats-a-la-viande-hachee.html",
   "used_for": "Source marocaine : 500 g de viande, 1 oignon, persil, coriandre, 1 c. à c. de cumin, 2 de piment doux, 2 de cannelle, 4 œufs, 1 kg de feuilles ; viande écrasée à la cuillère jusqu'à évaporation du liquide ; œufs à feu doux ; demi-feuille en bande, 1 c. à s. de farce, triangle ; huile très chaude ; écumoire, papier absorbant ; servir chaud autour d'une soucoupe de sucre glace et de cannelle."
  },
  {
   "name": "Bladi.net, « Briouats à la viande hachée » (n° 447)",
   "url": "https://www.bladi.net/recettes/briouats-a-la-viande-hachee-447.html",
   "used_for": "150 g de viande, oignon, persil, 2 œufs ; bandes, 1 c. à s. de farce, triangles frits jusqu'à doré."
  },
  {
   "name": "Bladi.net, « Cigares au kefta »",
   "url": "https://www.bladi.net/recettes/cigares-au-kefta.html",
   "used_for": "750 g de viande, 2 c. à c. de cannelle, 5 œufs cuits dans la viande ; farce refroidie ; feuilles sous un linge humide ; cigares au four (variante)."
  },
  {
   "name": "Femmes du Maroc, La rédaction, « Briouates viande hachée de ma grand-mère », 25 mars 2024 (recette de L'Atelier des Saveurs)",
   "url": "https://femmesdumaroc.com/plaisirs/food-drink/briouates-viande-hachee-de-ma-grand-mere",
   "used_for": "Source marocaine : 80 briouates avec 500 g de viande et 1 kg de feuilles de brick ; 2 oignons, herbes, cumin, curcuma, cannelle, safran, sucre ; oignon translucide ; eau évaporée ; 3 œufs dans la farce, 1 pour coller ; demi-feuille, côté arrondi rabattu, 1 bonne c. à s. de farce, triangle, jaune d'œuf ; frites ; servies chaudes avec cannelle et sucre glace ; ftour du ramadan."
  },
  {
   "name": "Femmes du Maroc, « Briouates à la viande hachée et fromage Cheddar », 23 mars 2023",
   "url": "https://femmesdumaroc.com/plaisirs/food-drink/briouates-a-la-viande-hachee-et-fromage-cheddar",
   "used_for": "Republie la recette n° 131 de Choumicha : non comptée comme source indépendante."
  },
  {
   "name": "My Moroccan Food (Nargisse Benkabbou), « Classic Kefta Briouate », 25 janvier 2017",
   "url": "https://www.mymoroccanfood.com/home/classic-kefta-briouate",
   "used_for": "Source marocaine : classique au Maroc, traditionnellement frite ; 450 g de kefta, 2 c. à c. de cannelle, 3 œufs brouillés bien cuits, sel, poivre ; viande émiettée environ 7 min, liquide égoutté ; filo sous un torchon humide ; triangle droite-gauche ; variante au four 180 °C, 20 à 25 min ; sucre glace, cannelle, menthe."
  },
  {
   "name": "My Moroccan Food, « Kefta - Moroccan minced meat », 26 mars 2015 (la kefta utilisée dans ses briouates)",
   "url": "https://www.mymoroccanfood.com/home/kefta-moroccan-minced-meat-55678",
   "used_for": "Pour 450 g : 1 oignon moyen, 2 c. à s. de persil, 2 de coriandre, 2 c. à c. de paprika, 1 de cumin, 1 de sel, ½ de poivre."
  },
  {
   "name": "Lalla Moulati, « بريوات بالكفتة » (n° 196443), 25 mai 2019",
   "url": "https://www.lalamoulati.net/196443.html",
   "used_for": "Source marocaine : nom arabe ; oignon revenu, kefta, herbes, épices cuites ; farce refroidie ; briouates frites."
  },
  {
   "name": "Lalla Moulati, « بريوات بالكفتة مطحونة » (n° 30191), 15 décembre 2015",
   "url": "https://www.lalamoulati.net/30191.html",
   "used_for": "½ kg de kefta, 4 gousses d'ail, herbes, 1 c. à c. de poivre, ½ de paprika ; viande dorée en petits grains ; cigares au four (variante)."
  },
  {
   "name": "Lalla Moulati, « 9 أنواع من البريوات المغربية » (n° 14937), 13 mars 2015",
   "url": "https://www.lalamoulati.net/14937.html",
   "used_for": "Briouates à la kefta et aux olives : oignon, cumin, gingembre, safran, persil ; viande écrasée pour l'émietter, cuite jusqu'au bout ; farce refroidie avant de farcir."
  },
  {
   "name": "Taste of Maroc (Christine Benlafquih), « Almond Briouat Recipe », mise à jour du 8 juillet 2020, copie Wayback Machine du 24 juillet 2026 (le site répond 403)",
   "url": "https://web.archive.org/web/20260724053918/https://tasteofmaroc.com/almond-briouat-recipe/",
   "used_for": "Pliage en triangle à droite puis à gauche, 4 ou 5 plis suffisent, excédent coupé, jaune d'œuf sur le rabat rentré dans le pli ; friture par fournées à feu moyen en retournant ; warqa = feuille de brick ; filo double ou feuilles de rouleaux de printemps en remplacement."
  },
  {
   "name": "Cooking With Alia (Alia Al Kasimi), « Grilled Kefta / كفتة مشوية » (n° 664)",
   "url": "https://www.cookingwithalia.com/664-grilled-kefta/",
   "used_for": "Kefta marocaine : 2 c. à s. de persil et 2 de coriandre pour 500 g de viande (recoupe la dose des herbes)."
  },
  {
   "name": "Wikipédia (anglais), « Briouat », consultée le 8 novembre 2026",
   "url": "https://en.wikipedia.org/wiki/Briouat",
   "used_for": "Nom arabe « بريوات » et forme « briwat » ; briouates salées de viande, en triangle ou en cylindre, frites ou au four, parfois saupoudrées de sucre glace."
  },
  {
   "name": "FSA (Food Standards Agency, Royaume-Uni), « Cooking your food », GOV.UK, publié le 18 décembre 2017",
   "url": "https://www.gov.uk/government/publications/cooking-your-food/cooking-your-food",
   "used_for": "Viande hachée cuite jusqu'au centre ; sans thermomètre : vapeur et couleur qui brunit ; restes au frigo dans les 2 heures, mangés dans les 48 heures, réchauffés une seule fois jusqu'à être brûlants."
  },
  {
   "name": "Anses, « Conseils d'hygiène dans la cuisine : dix gestes simples pour prévenir les risques microbiologiques », consultée le 8 novembre 2026",
   "url": "https://www.anses.fr/fr/article/conseils-dhygiene-cuisine-dix-gestes-simples-prevenir-risques-microbiologiques",
   "used_for": "Mains lavées à l'eau et au savon ; planches et plats séparés pour le cru et le cuit ; pas plus de 2 heures à température ambiante ; frigo à 4 °C ; viande hachée bien cuite à cœur pour les jeunes enfants, les femmes enceintes et les personnes immunodéprimées."
  },
  {
   "name": "London Fire Brigade (pompiers de Londres), « Deep fat fryers », consultée le 8 novembre 2026",
   "url": "https://www.london-fire.gov.uk/safety/the-home/cooking/deep-fat-fryers/",
   "used_for": "Casserole remplie au tiers au plus ; huile qui fume = trop chaude, couper le feu et laisser refroidir ; friteuse électrique à thermostat, plus sûre."
  },
  {
   "name": "Gouvernement du Québec, « Prévenir les risques d'incendie lorsque vous cuisinez », mis à jour le 10 octobre 2025",
   "url": "https://www.quebec.ca/securite-situations-urgence/securite-incendie/prevenir-incendie/cuisine",
   "used_for": "Surveiller l'huile ; couvercle à portée de main ; friteuse à thermostat ; feu d'huile : jamais d'eau, ne pas déplacer, couvercle, couper les éléments si possible, appeler les pompiers."
  }
 ],
 "discrepancies": [
  "Deux styles : farce liée aux œufs, à la cannelle, servie avec du sucre glace (Bladi.net ; Femmes du Maroc ; My Moroccan Food), ou farce sans œufs, plus relevée (Choumicha n° 131 et 1330 ; Lalla Moulati). Retenu : le premier, le seul chiffré par trois sources pour 450 à 500 g de viande. Le sucre glace reste facultatif.",
  "Valeurs ramenées à 500 g de viande, calculs faits avec python3 -I. Oignon : 1,1 (My Moroccan Food), 1 (Bladi.net), 2 (Femmes du Maroc) : retenu 1 (médiane 1,1). Œufs dans la farce : 4 (Bladi.net, dont un peu pour coller), 3 (Femmes du Maroc), 3,3 (My Moroccan Food) : retenu 3 (médiane 3,3), plus 1 jaune pour coller.",
  "Cumin : 1,1 (My Moroccan Food), 1 (Bladi.net), 1 (Femmes du Maroc), 0,8 (Choumicha n° 1330) : retenu 1 c. à c. (médiane 1,0). Paprika : 2,2 (My Moroccan Food), 2 (Bladi.net), 0,8 (Choumicha n° 1330), 0,5 (Lalla Moulati n° 30191) : retenu 1 ½ c. à c. (médiane 1,4).",
  "Cannelle : 2 (Bladi.net), 1 (Femmes du Maroc), 2,2 (My Moroccan Food), 1,3 (Bladi.net, cigares) ; par auteur, médiane 1,7 : retenu 1 ½ c. à c.",
  "Sel : 1,1 (My Moroccan Food), 0,8 (Choumicha n° 1330), 0,7 (n° 131), 1,25 (n° 477), 3 (Bladi.net, avec 100 g de graisse) : retenu 1 c. à c. (médiane 1,1). Poivre : 0,56 (My Moroccan Food), 0,8 (Choumicha, moyenne de ses deux recettes), 1 (Lalla Moulati n° 30191) : retenu ¾ c. à c. (médiane 0,8).",
  "Herbes : 2 c. à s. de persil et 2 de coriandre pour 450 g (My Moroccan Food) et pour 500 g (Cooking With Alia, kefta n° 664) ; 1,1 c. à s. de persil (Bladi.net n° 447). Bladi.net (un verre de chaque) et Femmes du Maroc (un verre à thé des deux) en mettent plus, en verres non convertibles. Retenu : 2 c. à s. de chaque (médiane 2).",
  "Matière grasse pour la farce : 1,1 c. à s. (My Moroccan Food), 1,4 (Choumicha n° 131), 2,5 (n° 1330), 2 (Lalla Moulati n° 30191) ; Bladi.net met 100 g de beurre. Retenu : 2 c. à s. (médiane 1,7, arrondie), huile ou beurre.",
  "Bladi.net ajoute 100 g de graisse de rognon de mouton : non retenue (une seule source).",
  "Feuilles : 1 kg pour 500 g de viande (Bladi.net ; Femmes du Maroc), coupées en deux, 1 c. à s. de farce par demi-feuille (les deux). Nombre : 80 pièces chez Femmes du Maroc, seule à le chiffrer pour ce style ; My Moroccan Food fait 15 grandes briouates de 3 c. à s. avec 450 g, soit environ 50 c. à s. de farce pour 500 g : pour 80 pièces, il faut environ 2 c. à c. par pièce, pas une bonne c. à s. (calcul python3 -I). Choumicha compte 24 cigares pour 600 g (n° 1330, 12 feuilles coupées en deux) et 12 briouates pour 200 g d'agneau (n° 477, 12 bandes de filo) ; Bladi.net (cigares) met 1 c. à c. par pièce.",
  "Cuisson de la viande : 5 min (Choumicha n° 131 et 477), environ 7 min (My Moroccan Food), 10 à 15 min (Bladi.net, cigares), « jusqu'à évaporation du liquide » (Bladi.net ; Femmes du Maroc). Pas de minuteur : on juge à la couleur, sans rose, et au liquide évaporé (FSA).",
  "Œufs : remués à feu doux jusqu'à bien cuits (Bladi.net ; My Moroccan Food : « fully cooked ») ; Femmes du Maroc les laisse « prendre légèrement », Bladi.net (cigares) jusqu'à crémeux. Retenu : bien cuits.",
  "Collage : jaune d'œuf (Femmes du Maroc ; Taste of Maroc), blanc d'œuf (Choumicha), œuf battu (Bladi.net). Retenu : le jaune.",
  "Friture : aucune source ne chiffre la température ni la durée pour des briouates à la viande ; Bladi.net dit « huile très chaude », Taste of Maroc « feu moyen » (briouates aux amandes, 5 à 7 min). Pas de température ni de minuteur : on juge à la couleur.",
  "Four : 180 °C, 20 à 25 min (My Moroccan Food) ; 150 °C, 25 à 30 min (Bladi.net, cigares) : non confirmé, donné en variante.",
  "Contre-vérifiée le 8 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 6 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Temps (60 min de préparation, 45 min de cuisson) : estimations pour 80 pièces ; Choumicha donne 40 à 50 minutes pour 8 à 12 personnes, Femmes du Maroc et Bladi.net ne donnent pas de temps. Le temps de refroidissement de la farce n'est chiffré par aucune source (« rest » = 0).",
  "Nombre de pièces (80) : une seule source, Femmes du Maroc.",
  "Nom darija « briwat bel kefta » : translittération du titre arabe de Lalla Moulati (« بريوات بالكفتة ») ; « briwat » est donné par Wikipédia et dans les mots-clés de Choumicha.",
  "Région d'origine : aucune source lue ne la donne.",
  "Température et durée de friture : aucune source ne les chiffre pour des briouates à la viande ; pas de minuteur.",
  "Conservation des briouates crues au frigo ou au congélateur : non vérifiée (Taste of Maroc parle seulement des briouates aux amandes).",
  "Lalla Moulati : recettes n° 71938, 63260, 52605, 39754 et 2638 (kefta avec pommes de terre, riz, champignons, légumes, aubergine) non lues.",
  "Cooking With Alia : aucune briouate à la kefta trouvée ; seule sa kefta grillée (n° 664) sert, pour la dose des herbes.",
  "Taste of Maroc : site en 403 (pare-feu) ; seule la recette des briouates aux amandes, lue sur sa copie Wayback, sert pour le pliage et la friture. Chhiwat.com non consulté : son robots.txt interdit tous les robots.",
  "Numéro des pompiers au Maroc : non vérifié ; la recette dit seulement « appelle les pompiers »."
 ],
 "cuisine": "Marocaine",
 "rayon": "Plats",
 "serv_step": 20,
 "img_alt": "Briouates pliées en triangle et dorées, sur une assiette blanche (la photo ne précise pas leur garniture)",
 "img": "img/briouates-kefta.jpg",
 "photo": {
  "author": "Christian Muise",
  "license": "CC BY-SA 2.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/2.0",
  "page": "https://commons.wikimedia.org/wiki/File:Briouat_(cropped).jpg",
  "modified": "réduite"
 }
});
