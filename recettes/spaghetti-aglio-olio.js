/* Recette : Spaghetti aglio, olio e peperoncino. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "spaghetti-aglio-olio",
 "title": "Spaghetti aglio, olio e peperoncino",
 "darija": "",
 "arabic": "معكرونة الثوم بالزيت",
 "tagline": "Des spaghettis enrobés d'huile d'olive parfumée à l'ail à peine blond et au piment : le grand classique napolitain, prêt pendant que les pâtes cuisent.",
 "category": "Rapide",
 "occasion": "Dîner express des soirs de fatigue, avec des ingrédients qu'on a toujours à la maison (Turismo Roma) ; Antonio Carluccio en fait même un plat de minuit",
 "region": "Italie. Attribué par tradition au Latium, il est né à Naples et en Campanie selon Turismo Roma et Reporter Gourmet ; l'origine reste discutée entre la Toscane, Naples et Rome (Dissapore)",
 "servings": 4,
 "servings_label": "personnes",
 "time": {
  "prep": 5,
  "cook": 20,
  "rest": 0
 },
 "difficulty": "Facile",
 "equipment": [
  "Une grande casserole avec son couvercle, pour beaucoup d'eau",
  "Une grande poêle ou une sauteuse, assez large pour y faire sauter les pâtes",
  "Une passoire, ou une pince à pâtes pour sortir les spaghettis de l'eau",
  "Un bol, pour garder un peu d'eau de cuisson",
  "Une planche et un petit couteau bien aiguisé"
 ],
 "ingredients": [
  {
   "group": "Pâtes",
   "items": [
    {
     "id": "spaghetti",
     "q": 400,
     "u": "g",
     "name": "de spaghettis",
     "note": "ou de vermicelles ou de linguine",
     "canon": "spaghetti"
    },
    {
     "id": "eau",
     "q": null,
     "u": "",
     "name": "eau",
     "note": "une grande casserole, pour cuire les pâtes",
     "canon": "eau"
    },
    {
     "id": "sel",
     "q": null,
     "u": "",
     "name": "sel",
     "note": "pour l'eau des pâtes : c'est le seul sel de la recette",
     "canon": "sel"
    }
   ]
  },
  {
   "group": "Sauce",
   "items": [
    {
     "id": "huile",
     "q": 8,
     "u": "c. à s.",
     "name": "d'huile d'olive vierge extra",
     "note": "de bonne qualité : c'est elle, la sauce",
     "canon": "huile-olive"
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
     "id": "piment",
     "q": 1,
     "u": "",
     "name": "piment rouge fort",
     "pl": "piments rouges forts",
     "note": "frais de préférence, sinon sec",
     "canon": "piment-cayenne"
    },
    {
     "id": "persil",
     "q": null,
     "u": "",
     "name": "persil plat",
     "note": "selon le goût, facultatif",
     "canon": "persil"
    },
    {
     "id": "eau-cuisson",
     "q": null,
     "u": "",
     "name": "eau de cuisson des pâtes",
     "note": "quelques cuillerées, prises dans la casserole",
     "canon": "eau"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Mets l'eau à chauffer",
   "text": "Remplis une grande casserole d'{{eau}}, couvre-la et porte-la à ébullition.",
   "timer": null,
   "tip": "Le couvercle fait économiser de l'énergie pendant que l'eau chauffe (étude des pastiers italiens d'Unione Italiana Food, citée par Il Giornale del Cibo)."
  },
  {
   "phase": "Préparation",
   "title": "Taille l'ail",
   "text": "Pèle {{ail:full}}. Coupe chaque gousse en deux dans la longueur, retire le germe du centre, puis taille-les en fines lamelles.",
   "timer": null,
   "tip": "Tu n'aimes pas croquer l'ail ? Garde les gousses coupées en deux et retire-les de la poêle avant d'y mettre les pâtes, comme le fait Dissapore."
  },
  {
   "phase": "Préparation",
   "title": "Prépare le piment",
   "text": "Fends {{piment:full}} dans la longueur, retire les graines et taille la chair en fines lanières.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Hache le persil",
   "text": "Si tu en mets, hache finement le {{persil}} et garde-en un peu à part pour le service.",
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
   "phase": "Cuisson",
   "title": "Lance les pâtes",
   "text": "Quand l'eau bout, sale-la bien avec le {{sel}}, puis plonge {{spaghetti}} de spaghettis. Regarde le temps de cuisson indiqué sur le paquet : tu les égoutteras un peu avant, bien al dente.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Fais blondir l'ail à feu doux",
   "text": "Pendant que les pâtes cuisent, verse {{huile}} d'huile d'olive dans la grande poêle. Ajoute l'ail et le piment, puis chauffe à feu doux. Laisse l'ail cuire tout doucement jusqu'à ce qu'il soit à peine blond : il ne doit jamais brunir.",
   "timer": null,
   "tip": "Autre façon (Turismo Roma, Dissapore, Giorgio Locatelli) : mets le piment seulement quand l'ail commence à blondir."
  },
  {
   "phase": "Cuisson",
   "title": "Arrête la cuisson de l'ail",
   "text": "Dès que l'ail est blond, retire la poêle du feu et verse quelques cuillerées d'{{eau-cuisson}}, prises dans la casserole. Cela arrête la cuisson de l'ail et allonge l'huile en sauce.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Garde un peu d'eau",
   "text": "Juste avant d'égoutter, puise encore un peu d'eau de cuisson dans un bol et garde-la à côté.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Égoutte les pâtes al dente",
   "text": "Égoutte les spaghettis encore bien al dente, ou sors-les de l'eau avec une pince.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Fais sauter pâtes et sauce",
   "text": "Remets la poêle sur le feu et verses-y les spaghettis. Mélange vivement avec la pince, en ajoutant un peu d'eau de cuisson si c'est sec, jusqu'à ce que les pâtes soient bien enrobées.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Ajoute le persil et sers",
   "text": "Hors du feu, ajoute presque tout le persil, si tu en mets, et mélange. Sers aussitôt, bien chaud, avec le reste du persil par-dessus.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "L'ail doit cuire tout doucement et seulement blondir, sans jamais brunir ni brûler.",
   "source": "Turismo Roma, Dissapore, Giorgio Locatelli ; Antonio Carluccio le veut même sans aucune couleur"
  },
  {
   "text": "Dès que l'ail est blond, quelques cuillerées d'eau des pâtes versées dans l'huile arrêtent sa cuisson et allongent l'huile en sauce.",
   "source": "Turismo Roma, Giorgio Locatelli"
  },
  {
   "text": "Prends cette eau au dernier moment : en fin de cuisson, elle est plus riche en amidon. Elle allège l'huile tout en lui donnant une consistance de sauce.",
   "source": "Turismo Roma"
  },
  {
   "text": "Pas de sel dans la poêle : l'eau des pâtes, bien salée, assaisonne toute la sauce.",
   "source": "Turismo Roma (aucun autre sel n'est prévu) ; Dissapore (sel seulement pour l'eau des spaghettis)"
  },
  {
   "text": "Égoutte les pâtes un peu avant la fin du temps du paquet : elles finissent de cuire dans la poêle, avec la sauce.",
   "source": "Dissapore (une minute avant la fin), Turismo Roma"
  },
  {
   "text": "La sauce se fait pendant que les pâtes cuisent : elle ne demande que quelques minutes.",
   "source": "Antonio Carluccio (pas plus de 5 minutes), Turismo Roma"
  },
  {
   "text": "L'huile d'olive, c'est la sauce : prends une vierge extra de bonne qualité, au goût bien marqué.",
   "source": "Dissapore (conseils de Piero Palanti, du guide Extravoglio), Giorgio Locatelli, Turismo Roma"
  },
  {
   "text": "Pas de fromage : Antonio Carluccio n'en met pas, et ni Turismo Roma ni les deux recettes de Dissapore n'en prévoient.",
   "source": "Antonio Carluccio (Great Italian Chefs), Turismo Roma, Dissapore"
  },
  {
   "text": "Retire le germe de l'ail. Pour un goût plus doux, laisse les gousses entières ou en deux et retire-les avant d'ajouter les pâtes.",
   "source": "Dissapore (ses deux recettes)"
  },
  {
   "text": "Les tiges de persil hachées très fin, ajoutées avec le piment, parfument l'huile ; les feuilles se mettent à la fin, hors du feu.",
   "source": "Turismo Roma"
  },
  {
   "text": "Spaghettis, vermicelles ou linguine : il faut une pâte longue, ni trop épaisse ni trop large.",
   "source": "Turismo Roma ; Dissapore (d'après le gastronome Carnacina)"
  },
  {
   "text": "C'est un plat pauvre de Naples : selon Turismo Roma, on le faisait quand on ne pouvait pas s'offrir les palourdes.",
   "source": "Turismo Roma ; Reporter Gourmet (article sur Giorgio Locatelli) le rapproche lui aussi des vermicelles aux palourdes"
  }
 ],
 "mistakes": [
  "Laisser brunir ou brûler l'ail (Turismo Roma, Dissapore, Giorgio Locatelli).",
  "Chauffer trop fort : l'ail cuit à feu doux (Turismo Roma, Antonio Carluccio).",
  "Trop cuire les pâtes : égoutte-les al dente, elles finissent dans la poêle (Dissapore, Turismo Roma).",
  "Jeter toute l'eau de cuisson : garde-en un peu pour lier la sauce (Dissapore, Giorgio Locatelli).",
  "Saler la sauce alors que l'eau des pâtes l'assaisonne déjà (Turismo Roma).",
  "Faire attendre le plat : il se mange dès qu'il est prêt (Turismo Roma, Giorgio Locatelli)."
 ],
 "serving": "Tout de suite, bien chaud, avec un peu de persil cru par-dessus (Turismo Roma, Dissapore). Giorgio Locatelli conseille une salade verte à côté (Reporter Gourmet). S'il en reste, mets les restes au réfrigérateur dans les 2 heures (1 heure s'il fait plus de 32 °C) et réchauffe-les à cœur, jusqu'à 74 °C (FDA, agence sanitaire américaine ; Anses pour les 2 heures).",
 "variants": [
  "À l'anchois : fais fondre des filets d'anchois hachés dans l'huile avec l'ail ; Antonio Carluccio en met 4 pour 4 personnes (Great Italian Chefs). Dissapore cite aussi les olives.",
  "Avec de la chapelure (pangrattato), un ajout « pas rare » selon Dissapore.",
  "Sans persil : seulement l'ail, l'huile et le piment, comme Antonio Carluccio et Giorgio Locatelli ; Dissapore (2022) le juge « pas nécessaire ».",
  "Aux crevettes rouges et au persil (suggestion de Great Italian Chefs autour de la recette d'Antonio Carluccio).",
  "Au fromage râpé, comme Giorgio Locatelli (parmesan ou grana padano). Attention : le parmesan (parmigiano reggiano) et le grana padano se font toujours avec de la présure de veau, exigée par leurs cahiers des charges ; si tu veux être strict, prends un autre fromage à pâte dure fait avec un coagulant microbien, sans présure animale."
 ],
 "sources": [
  {
   "name": "Dissapore, Rossella Di Bidino, « Spaghetti aglio olio e peperoncino: la ricetta perfetta », 14 janvier 2017",
   "url": "https://www.dissapore.com/ricette/spaghetti-aglio-olio-e-peperoncino-la-ricetta-perfetta/",
   "used_for": "Pour 4 : 400 g de spaghettis, 6 à 8 c. à s. d'huile vierge extra, 2 gousses d'ail, 1 bouquet de persil, 2 piments frais, sel seulement pour l'eau. Germe de l'ail retiré, piments épépinés en lanières ; ail à feu moyen sans jamais brûler, piment quand l'ail commence à dorer, ail retiré ; pâtes al dente, une louche d'eau de cuisson, persil, une partie crue sur les assiettes. Formats spaghetti, vermicelles, linguine (Carnacina) ; anchois, olives, chapelure ; huile de caractère (Piero Palanti) ; origine disputée entre Toscane, Naples et Rome."
  },
  {
   "name": "Dissapore, fiche « Spaghetti aglio olio e peperoncino », 7 juillet 2022 (mise à jour le 24 août 2022)",
   "url": "https://www.dissapore.com/ricette/spaghetti-aglio-olio-e-peperoncino/",
   "used_for": "Pour 4 : 400 g de spaghettis, 8 c. à s. d'huile vierge extra, 1 gousse d'ail sans germe, 1 piment sec, 1 bouquet de persil ; ail et piment frits jusqu'à ce que l'ail soit doré puis retirés ; pâtes égouttées une minute avant la fin, une louche d'eau gardée, sautées avec l'eau et le persil ; 5 min de préparation, 10 de cuisson."
  },
  {
   "name": "Turismo Roma (portail officiel du tourisme de la Ville de Rome), « Spaghetti aglio, olio e peperoncino », consulté le 6 novembre 2026",
   "url": "https://www.turismoroma.it/it/page/spaghetti-aglio-olio-e-peperoncino-0",
   "used_for": "Origine : Campanie et Naples, plat pauvre fait à la place des pâtes aux palourdes. 360 g de pâtes longues (spaghettis, vermicelles ou linguine, portions non précisées), 4 gousses d'ail en quatre, piment de préférence frais, persil, 8 c. à s. (environ 100 ml) d'huile vierge extra. Ail à feu très doux pendant la cuisson des pâtes ; dès qu'il dore, piment et tiges de persil hachées, 2 minutes ; hors du feu, feuilles de persil et 4 c. à s. (environ 60 ml) d'eau des pâtes pour arrêter la cuisson ; pas d'autre sel ; eau prise au dernier moment, plus riche en amidon ; pâtes al dente sautées une demi-minute ; servir tout de suite. Ingrédients toujours à la maison."
  },
  {
   "name": "Great Italian Chefs, Antonio Carluccio, « Spaghetti aglio, olio e peperoncino », extrait de son livre Pasta (Quadrille), publié sur le site le 22 novembre 2016",
   "url": "https://www.greatitalianchefs.com/recipes/spaghetti-aglio-olio-e-peperoncino-recipe",
   "used_for": "Pour 4 : 450 g de spaghettis, 60 ml d'huile d'olive, 6 gousses hachées, 1 piment rouge, 4 filets d'anchois ou 1 c. à c. de colatura (facultatif), sel. Ail et piment frits doucement sans brunir ; sauce prête en moins de 5 minutes, pendant la cuisson des pâtes ; pâtes sorties à la pince et mélangées à la sauce ; pas de fromage ; plat de minuit ; suggestion crevettes rouges et persil."
  },
  {
   "name": "Reporter Gourmet, Alessandra Meldolesi, « Spaghetti Aglio e Olio according to Giorgio Locatelli: The Chef's Winning Recipe », 5 novembre 2023 (recette du livre Made at Home)",
   "url": "https://reportergourmet.com/en/news/6060-spaghetti-aglio-e-olio-according-to-giorgio-locatelli-the-chef-s-winning-recipe",
   "used_for": "Pour 4 : 500 g de spaghettis, 1 piment, 4 gousses en lamelles d'environ 1 mm, 200 ml d'huile vierge extra, parmesan ou grana râpé. Ail dans l'huile froide, chauffé sans brûler, à peine coloré, puis le piment ; hors du feu, deux cuillerées d'eau des pâtes ; pâtes al dente sautées, plus d'eau si c'est sec ; servir tout de suite. Origine campanienne, plat proche des vermicelles aux palourdes ; salade verte à côté."
  },
  {
   "name": "Il Giornale del Cibo, Alessia Rossi, « Cottura della pasta sostenibile: 3 accorgimenti alla portata di tutti », 28 juillet 2022",
   "url": "https://www.ilgiornaledelcibo.it/cottura-pasta-sostenibile/",
   "used_for": "Couvercle pendant la mise à ébullition : jusqu'à 6 % d'énergie en moins (étude des pastiers d'Unione Italiana Food). Cite aussi la proportion classique d'un litre d'eau pour 100 g de pâtes (non reprise en quantité)."
  },
  {
   "name": "FDA (agence sanitaire américaine), « Safe Food Handling », contenu à jour au 5 mars 2024",
   "url": "https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling",
   "used_for": "Mettre les plats cuisinés au réfrigérateur dans les 2 heures ; réchauffer les restes à 165 °F (74 °C, conversion calculée)."
  },
  {
   "name": "Wikipédia en arabe, article « معكرونة الثوم بالزيت » (lié à l'article anglais « Spaghetti aglio e olio »), consulté le 7 novembre 2026",
   "url": "https://ar.wikipedia.org/wiki/%D9%85%D8%B9%D9%83%D8%B1%D9%88%D9%86%D8%A9_%D8%A7%D9%84%D8%AB%D9%88%D9%85_%D8%A8%D8%A7%D9%84%D8%B2%D9%8A%D8%AA",
   "used_for": "Nom arabe du plat. L'article place son origine dans les Abruzzes (voir discrepancies)."
  },
  {
   "name": "Anses (Agence nationale de sécurité sanitaire de l'alimentation), « Conseils d'hygiène dans la cuisine : dix gestes simples pour prévenir les risques microbiologiques », article du 24 décembre 2020, lu le 7 novembre 2026",
   "url": "https://www.anses.fr/fr/article/conseils-dhygiene-cuisine-dix-gestes-simples-prevenir-risques-microbiologiques",
   "used_for": "Contre-vérification : Source officielle française qui recoupe la FDA : « ne pas conserver les aliments plus de 2 heures à température ambiante avant réfrigération » ; garder 4 °C dans la zone la plus froide du réfrigérateur."
  },
  {
   "name": "Consorzio Tutela Grana Padano (site officiel du consortium), page « Ingredienti », lue le 7 novembre 2026",
   "url": "https://www.granapadano.it/it-it/larte-del-saper-fare/il-prodotto-iconico/ingredienti",
   "used_for": "Contre-vérification : Le grana padano AOP se fait avec du lait, du sel, de la présure et du lysozyme ; « comme le veut le cahier des charges », la présure est extraite de la caillette du veau. Il n'existe donc pas de grana padano à coagulant microbien."
  },
  {
   "name": "Wikipedia (anglais), article « Parmigiano Reggiano », lu le 7 novembre 2026",
   "url": "https://en.wikipedia.org/wiki/Parmigiano_Reggiano",
   "used_for": "Contre-vérification : Le parmigiano reggiano est caillé à la présure de veau ; d'après le cahier des charges de l'AOP (note 26 de l'article), seuls le petit-lait de la veille et la présure de veau sont permis. Source secondaire : le site du consortium du parmigiano reggiano ne s'affiche qu'en JavaScript et n'a pas pu être lu."
  }
 ],
 "discrepancies": [
  "Pâtes pour 4 : 360 g (Turismo Roma, portions non précisées), 400 g (Dissapore, deux recettes), 450 g (Carluccio), 500 g (Locatelli). Retenu : 400 g, valeur la plus fréquente et médiane.",
  "Ail : de 1 à 6 gousses pour 4. Ramenée à 400 g de pâtes, la médiane des cinq recettes lues est de 3,2 gousses (contre-vérification, calcul python). Retenu : 3 gousses.",
  "Huile : de 60 ml pour 450 g (Carluccio) à 200 ml pour 500 g (Locatelli) ; 6 à 8 c. à s. (Dissapore 2017) ; 8 c. à s. (Dissapore 2022, Turismo Roma). Ramenée à 400 g de pâtes, la médiane est de 120 ml, soit 8 c. à s.",
  "Piment : 1 pour 4 dans cinq recettes, 2 chez Dissapore (2017), non chiffré chez Turismo Roma. Frais pour Turismo Roma (de préférence), Dissapore 2017, Carluccio et Locatelli ; sec pour Dissapore 2022. Retenu : 1 piment, frais de préférence. La photo de la banque (piments secs, clé piment-cayenne) convient aux deux.",
  "Coupe de l'ail : lamelles (Locatelli, environ 1 mm), quartiers (Turismo Roma), haché fin (Carluccio), demi-gousses retirées ensuite (Dissapore). Retenu : lamelles.",
  "Couleur de l'ail : blond ou à peine doré (Turismo Roma, Dissapore, Locatelli) ; aucune couleur (Carluccio). Retenu : à peine blond, jamais brun.",
  "Moment du piment : avec l'ail dès le début (Dissapore 2022 ; Carluccio) ou quand l'ail commence à dorer (Turismo Roma, Dissapore 2017, Locatelli). Retenu : dès le début, plus simple ; l'autre façon, un peu plus suivie, est donnée en astuce.",
  "Eau de cuisson dans la sauce : 4 c. à s. (Turismo Roma), deux cuillerées puis plus si besoin (Locatelli), une louche (Dissapore). Quantité laissée libre : « quelques cuillerées », plus si c'est sec.",
  "Persil : présent (Dissapore 2017 ; Turismo Roma), « pas nécessaire » (Dissapore 2022), absent (Carluccio ; Locatelli). Retenu : facultatif.",
  "Finition : pâtes sautées dans la poêle (Turismo Roma, Dissapore, Locatelli, Carluccio). Retenu : la poêle.",
  "Fromage : aucun dans six recettes ; parmesan ou grana chez Locatelli. Retenu : sans fromage, le fromage passe en variante.",
  "Origine : Naples et la Campanie (Turismo Roma ; Reporter Gourmet, article sur Giorgio Locatelli) ; disputée entre Toscane, Naples et Rome (Dissapore) ; les Abruzzes (Wikipédia en arabe). Retenu : Naples, en signalant le débat.",
  "Temps : Dissapore compte 5 min de préparation et 10 de cuisson, Carluccio 10 min au total, sans le temps de porter l'eau à ébullition. J'ai mis 5 + 20 min pour l'inclure (estimation).",
  "Le vin blanc que Locatelli conseille avec ce plat est écarté (halal).",
  "Contre-vérifiée le 7 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 5 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Serious Eats, Giallo Zafferano, La Cucina Italiana, Il Cucchiaio d'Argento et Gambero Rosso n'ont pas été lus : ils refusent l'accès aux agents d'IA (erreurs 402 ou 403, ou interdiction dans leur fichier robots.txt). Ils ne sont pas utilisés.",
  "Nom en darija : aucun trouvé dans une source, laissé vide.",
  "Quantité de sel par litre d'eau : aucune source lue ne la chiffre (« eau abondante et salée »).",
  "Volume d'eau : seul Il Giornale del Cibo cite la proportion classique d'un litre pour 100 g de pâtes ; pas de deuxième source, donc pas de quantité.",
  "Temps de préparation et de cuisson : estimation (voir discrepancies) ; le temps de cuisson des pâtes dépend du paquet, d'où l'absence de minuteur.",
  "Disponibilité des ingrédients au Maroc : non vérifiée par une source.",
  "Accademia Italiana della Cucina : son fichier robots.txt interdit aux robots ses pages de recettes (relu le 7 novembre 2026). Ses deux recettes ont donc été retirées des sources, avec ce qui ne reposait que sur elles (variantes au poivre noir et « à la romaine », « Rome a sa version ») ; les quantités retenues restent justifiées sans elles (contre-vérification)."
 ],
 "cuisine": "Italienne",
 "rayon": "D'ailleurs",
 "img_alt": "Spaghetti à l'ail, à l'huile d'olive et au piment rouge, avec du persil",
 "img": "img/spaghetti-aglio-olio.jpg",
 "photo": {
  "author": "Bairuilong",
  "license": "CC BY-SA 4.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Spaghetti_aglio_e_olio_KB.jpg",
  "modified": "réduite"
 }
});
