/* Recette : Khobz, le pain marocain de la maison. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "khobz",
 "title": "Khobz, le pain marocain de la maison",
 "darija": "khobz (khobz dyal dar)",
 "arabic": "خبز الدار",
 "tagline": "Le pain rond de tous les jours, doré et croustillant dehors, moelleux dedans, qu'on déchire à la main pour saisir le tajine. Juste de la farine, de la levure, du sel et de l'eau tiède.",
 "category": "Pain",
 "occasion": "Tous les jours, à presque tous les repas",
 "region": "Tout le Maroc (le pain se dit aussi aghroum, aɣrum, en tachelhit) ; pains proches en Algérie et en Tunisie",
 "servings": 2,
 "servings_label": "pains",
 "time": {
  "prep": 20,
  "cook": 20,
  "rest": 75,
  "rest_label": "Levée"
 },
 "difficulty": "Facile",
 "equipment": [
  "Un grand saladier, ou une gsaa (la grande jatte traditionnelle)",
  "Une balance de cuisine et des cuillères à mesurer",
  "Une grande plaque de cuisson, ou une par pain si elle ne peut pas contenir deux disques de 27 à 30 cm (et du papier cuisson si tu veux)",
  "Deux ou trois torchons propres, plus une petite couverture s'il fait froid",
  "Une fourchette",
  "Un vaporisateur d'eau propre, ou un pinceau",
  "Une grille, ou un panier tapissé d'un torchon",
  "Une planche à pain, si tu fais cuire au four du quartier (ferran)"
 ],
 "ingredients": [
  {
   "group": "Pâte",
   "items": [
    {
     "id": "farine",
     "q": 500,
     "u": "g",
     "name": "de farine blanche (idéalement une farine à pain, riche en gluten)",
     "note": "plus un peu pour le plan de travail ; au Maroc : « force » ou « farine de blé » ; tu peux en remplacer une partie par de la semoule fine ou de la farine complète (voir les variantes)",
     "canon": "farine"
    },
    {
     "id": "sel",
     "q": 2,
     "u": "c. à c.",
     "name": "de sel",
     "canon": "sel"
    },
    {
     "id": "levure",
     "q": 1,
     "u": "c. à s.",
     "name": "de levure boulangère sèche",
     "note": "un peu plus que d'habitude, pour une seule levée rapide",
     "canon": "levure-boulangere"
    },
    {
     "id": "eau",
     "q": 315,
     "u": "ml",
     "name": "d'eau tiède, pas chaude",
     "note": "à ajuster selon la farine ; plus un peu pour humidifier les pains avant la cuisson",
     "canon": "eau"
    }
   ]
  },
  {
   "group": "Pour la plaque",
   "items": [
    {
     "id": "semoule",
     "q": null,
     "u": "",
     "name": "Semoule fine, pour saupoudrer la plaque",
     "note": "ou du papier cuisson, ou un peu d'huile",
     "canon": "semoule"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Préparer la plaque",
   "text": "Saupoudre de semoule fine une grande plaque de cuisson, ou une plaque par pain : aplati, chaque pain fera 27 à 30 cm de large. Tu peux aussi la tapisser de papier cuisson ou la huiler légèrement.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Mélanger la pâte",
   "text": "Dans un grand saladier, mélange {{farine}} de farine et {{sel}} de sel. Creuse un puits au centre et mets-y {{levure}} de levure. Verse dessus un peu des {{eau}} d'eau tiède et remue du bout des doigts pour la dissoudre. Ajoute le reste de l'eau petit à petit, en mélangeant à la main, jusqu'à rassembler la pâte.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Pétrir 10 minutes",
   "text": "Pétris 10 minutes, dans le saladier ou sur le plan de travail fariné. La pâte doit rester molle et souple, sans coller : si elle colle, ajoute un peu de farine ; si elle durcit, arrose-la d'un peu d'eau en pétrissant. Elle est prête quand elle est lisse et élastique.",
   "timer": {
    "min": 10,
    "label": "Pétrissage",
    "done": "Pâte lisse, souple et élastique ? Passe aux boules. Sinon, pétris encore jusqu'à 5 minutes."
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
   "title": "Former les boules",
   "text": "Partage la pâte en boules égales, une par pain, bien lisses sur le dessus. Pose-les sur la plaque, bien espacées : aplatie à 6 mm, chaque boule donnera un disque de 27 à 30 cm de large. Si deux disques de cette taille ne tiennent pas côte à côte sur ta plaque (il faut au moins 60 cm de long), mets une boule par plaque.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Repos sous un torchon",
   "text": "Couvre les boules d'un torchon propre et laisse-les reposer 10 à 15 minutes.",
   "timer": {
    "min": 15,
    "label": "Repos des boules",
    "done": "Les boules ont reposé : aplatis-les."
   }
  },
  {
   "phase": "Préparation",
   "title": "Aplatir en disques",
   "text": "Directement sur la plaque, aplatis chaque boule avec la paume, en partant du centre vers les bords. Forme un disque bien rond d'environ 6 mm d'épaisseur, égal partout.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Laisser lever",
   "text": "Couvre de nouveau d'un torchon et laisse lever environ 1 heure dans un endroit tiède, plus longtemps si la pièce est fraîche. S'il fait froid, ajoute une couche, ou une petite couverture. Pendant la levée, préchauffe le four à 220 °C : il doit être bien chaud pour le pain.",
   "timer": {
    "min": 60,
    "label": "Levée des pains",
    "done": "Appuie légèrement du bout du doigt : si le creux remonte lentement, c'est prêt. S'il remonte tout de suite, attends encore un peu ; s'il ne remonte pas du tout, la pâte a trop levé."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Piquer et humidifier",
   "text": "Quand le four est chaud, pique chaque pain à plusieurs endroits avec une fourchette : il ne gonflera pas. Vaporise ensuite un peu d'eau sur le dessus, ou passe un pinceau mouillé : la croûte sera plus croustillante.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Cuire 20 minutes",
   "text": "Enfourne pour environ 20 minutes. Si ton four colore plus d'un côté, tourne la plaque en cours de cuisson. Le khobz est cuit quand il est bien doré et sonne creux quand tu le tapotes.",
   "timer": {
    "min": 20,
    "label": "Cuisson des pains",
    "done": "Bien doré, et il sonne creux quand tu le tapotes ? Sors-le. Sinon, laisse-le encore quelques minutes, 25 minutes en tout au plus."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Ou au four du quartier",
   "text": "Pour le cuire au ferran, le four du quartier : dès l'étape des boules, pose les boules sur une planche à pain saupoudrée de semoule au lieu de la plaque, aplatis-les et laisse-les lever dessus sous un torchon, puis porte la planche au four. Le fournier (terrah) les cuit au feu de bois, environ 20 minutes. Il reconnaît de mémoire les pains de chaque famille, à l'ordre dans lequel il les a rangés, à la planche et au torchon.",
   "timer": null,
   "img": {
    "src": "img/etapes/ferran-marrakech.jpg",
    "alt": "Boulanger devant le four à bois, pains posés sur les planches, à Marrakech",
    "caption": "Le four du quartier, à Marrakech",
    "w": 1000,
    "h": 666,
    "credit": "Photo de l'étape « Ou au four du quartier » : Bernhard Holub, Wikimedia Commons, licence CC BY-SA 4.0 (réduite)."
   }
  },
  {
   "phase": "Service",
   "title": "Laisser tiédir",
   "text": "Sors les pains et laisse-les tiédir sur une grille, ou dans un panier tapissé d'un torchon.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Servir",
   "text": "Coupe le khobz en quartiers ou déchire-le à la main : il remplace la fourchette pour saisir le tajine, les salades ou le zaalouk. Au petit-déjeuner, sers-le chaud avec un peu d'huile d'olive et un thé à la menthe.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Conserver",
   "text": "Le khobz ne reste pas frais plus d'une journée. Ce que tu ne mangeras pas le jour même, congèle-le une fois complètement refroidi. Pour le servir, laisse-le décongeler quelques heures à température ambiante, puis réchauffe-le 5 à 8 minutes au four à 170 °C.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "La pâte doit être molle : souple et facile à pétrir, mais sans coller. Trop ferme, le pain sort dur et dense. Ajuste toujours l'eau ou la farine : chaque farine boit différemment, et même l'humidité de l'air compte.",
   "source": "Taste of Maroc (Christine Benlafquih), recette et réponses aux lecteurs"
  },
  {
   "text": "Pétris 10 à 15 minutes en arrosant la pâte d'un peu d'eau, jusqu'à ce qu'elle devienne souple et malléable.",
   "source": "Choumicha (pain de semoule, pain complet, pain aux graines de sésame)"
  },
  {
   "text": "Ni sucre ni huile, comme dans les pains de semoule et complet de Choumicha, qui n'ont que farine, levure, sel et eau.",
   "source": "Choumicha"
  },
  {
   "text": "L'eau doit être tiède, pas chaude ; froide, elle ralentit la levure.",
   "source": "Taste of Maroc ; MarocMama"
  },
  {
   "text": "Pas sûr de ta levure ? Délaye-la dans un peu d'eau tiède avec une pincée de sucre : elle doit mousser en 10 minutes. Sinon, change-la.",
   "source": "Taste of Maroc"
  },
  {
   "text": "Une seule levée suffit, une fois les pains aplatis : quelques minutes de repos en boules, puis environ 1 heure sous un torchon. Par temps froid, couvre de plusieurs couches ou d'une petite couverture, ou fais lever dans le four, juste la lampe allumée ; dans ce cas, sors les pains, le torchon et la couverture avant de préchauffer le four.",
   "source": "Taste of Maroc ; MarocMama"
  },
  {
   "text": "Pique le pain à la fourchette juste avant de l'enfourner, pour qu'il ne gonfle pas : un terrah de Casablanca le fait en enfournant chaque pain.",
   "source": "La Vie éco (four traditionnel de Sidi Bernoussi, Casablanca) ; Taste of Maroc ; MarocMama"
  },
  {
   "text": "Si tu préfères une entaille au couteau, reste léger : trop profonde, le pain monte trop à cet endroit. La fourchette, un pain plus plat ou un peu moins de levure évitent ce défaut.",
   "source": "Taste of Maroc"
  },
  {
   "text": "Humidifie le dessus juste avant d'enfourner, au vaporisateur ou au pinceau : la croûte sera plus croustillante.",
   "source": "Choumicha ; Taste of Maroc"
  },
  {
   "text": "Un four bien chaud, autour de 220 °C, et environ 20 minutes : au ferran aussi, le four doit être chaud pour le pain, et la cuisson dure environ 20 minutes.",
   "source": "Choumicha ; Taste of Maroc ; La Vie éco"
  },
  {
   "text": "Garde-le plat : beaucoup de Marocains préfèrent un khobz de 1,5 cm de haut au plus, et il dépasse rarement 3 cm.",
   "source": "Taste of Maroc"
  },
  {
   "text": "Le pain que tu ne mangeras pas le jour même se congèle : laisse-le d'abord refroidir complètement, puis réchauffe-le 5 à 8 minutes au four à 170 °C.",
   "source": "Taste of Maroc ; MarocMama (congélation)"
  },
  {
   "text": "Un repas de fête ou un ftour ? Précuis les pains la veille jusqu'à ce qu'ils colorent à peine, emballe-les bien, et termine la cuisson juste avant de servir.",
   "source": "Taste of Maroc"
  }
 ],
 "mistakes": [
  "Faire une pâte trop ferme : le pain sort dur et dense (Taste of Maroc).",
  "Prendre de l'eau chaude au lieu de tiède (Taste of Maroc), ou de l'eau froide, qui ralentit la levure (MarocMama).",
  "Prendre de la farine à levure incorporée : MarocMama la déconseille.",
  "Ajouter trop de farine en pétrissant : le pain devient sec (MarocMama).",
  "Pétrir trop peu, le pain est dense ; beaucoup trop, il devient dur (MarocMama).",
  "Oublier de piquer le pain : il gonfle (La Vie éco).",
  "Entailler trop profond : le pain monte trop à l'entaille (Taste of Maroc).",
  "Sortir le pain trop tôt : il doit être bien doré et sonner creux quand tu le tapotes (Taste of Maroc ; MarocMama).",
  "Le garder plusieurs jours à température ambiante : il ne reste pas frais plus d'une journée (Taste of Maroc).",
  "Jeter du pain : au Maroc, on ne le jette pas ; les restes servent à un autre plat ou sont donnés (Morocco World News)."
 ],
 "serving": "Le khobz accompagne presque tous les repas. On le coupe en quartiers ou on le déchire, et il remplace la fourchette et la cuillère pour saisir salades, tajines, sauces et ragoûts (Taste of Maroc ; Morocco World News) ; Nargisse Benkabbou rappelle qu'au Maroc le tajine se mange avec du pain (My Moroccan Food). Les quartiers s'ouvrent aussi en sandwich, garnis de viande grillée (Taste of Maroc). Au petit-déjeuner, on le mange chaud avec un peu d'huile d'olive et un thé à la menthe (Hespress). Le reste se garde enveloppé dans un torchon, dans une boîte à pain ou un sac (MarocMama), mais pas plus d'une journée : au-delà, congèle-le. Décongèle-le quelques heures à température ambiante et réchauffe-le 5 à 8 min au four à 170 °C (Taste of Maroc). MarocMama le réchauffe aussi à la poêle.",
 "variants": [
  "Khobz à la semoule (Choumicha) : 250 g de farine de blé dur supérieure et 500 g de semoule fine de blé dur, 1 c. à c. de sel, 20 g de levure boulangère, 50 cl d'eau tiède. La pâte lève jusqu'à doubler, on la tape pour chasser les bulles, on roule les boules dans 80 g de semoule fine, on les aplatit légèrement et on les laisse lever dans un endroit tiède ; vaporisées d'eau, elles cuisent 20 à 25 min à 220 °C.",
  "Petits pains à la semoule de Nargisse Benkabbou (My Moroccan Food), son pain marocain préféré : 280 g de farine, 300 g de semoule fine, 250 ml d'eau et 250 ml de lait tièdes (verse d'abord 300 ml, puis par cuillerées), 1 c. à s. de levure sèche, 2 c. à c. de sel, 2 c. à c. de sucre, 3 c. à s. d'huile d'olive ; 10 pains de 10 cm aplatis à 2 cm, levée 1 h, entaillés au couteau et saupoudrés de semoule, 18 à 20 min à 200 °C.",
  "Khobz complet (Choumicha) : 250 g de farine de blé tendre et 500 g de farine complète, 1 c. à c. de sel, 20 g de levure boulangère, 40 cl d'eau tiède ; boules roulées dans 80 g de farine complète, même méthode que le pain de semoule. Taste of Maroc conseille de débuter avec moitié farine complète, moitié farine blanche, et assez d'eau pour une pâte molle. Le pain complet se dit khobz zraa (Hespress ; Taste of Maroc).",
  "Khobz au sésame (Choumicha) : 750 g de farine de blé tendre, 1 c. à c. de sel, 1 c. à s. de sucre, 20 g de levure boulangère, 40 cl d'eau tiède ; après la première levée, boules roulées dans la farine, aplaties, badigeonnées d'eau au pinceau et couvertes de 80 g de graines de sésame, puis levée dans un endroit tiède et cuisson 20 à 25 min à 220 °C. Au Maroc, on préfère le sésame doré non décortiqué ; on peut aussi dorer le pain levé à l'œuf battu juste avant d'enfourner, puis le parsemer de sésame (Taste of Maroc).",
  "Khobz à l'anis : avec le cumin, l'anis est le parfum le plus courant du pain marocain (Morocco World News), et le khobz de la maison est parfois parfumé aux graines d'anis (Wikipédia). Une mère de famille de Beni Mellal ajoute à sa farine « un peu de jeljlane (sésame) et de nafaa » (Hespress). Aucune source lue ne donne la dose pour un khobz ; à titre indicatif seulement, Choumicha met 1 c. à s. d'anis pour 500 g de farine dans ses krichlat (brioches).",
  "Khobz des fêtes : enrichi d'œuf et de lait, et souvent parfumé à l'anis, au sésame ou au cumin ; au Maroc, il est plutôt réservé aux fêtes et aux grandes occasions (Taste of Maroc).",
  "Farines mélangées : remplace une partie, jusqu'à la moitié, de la farine blanche par de la semoule très fine (finot de blé dur), de la farine complète ou de la farine d'orge (Taste of Maroc). Les farines d'orge et d'avoine se mélangent en général à d'autres farines, sinon le pain est trop dense (Taste of Maroc). Autrefois, on moulait soi-même le blé ou l'orge à la meule (Hespress).",
  "Mie plus légère : laisse d'abord lever la pâte une heure ou plus dans un saladier huilé, avant de façonner (Taste of Maroc). C'est aussi la méthode de Choumicha : la pâte double, on la tape pour chasser les bulles, puis les pains lèvent une seconde fois.",
  "Plus de goût : moins de levure et une double levée longue (Taste of Maroc). Autrefois, on utilisait un levain maison, que certains boulangers marocains emploient encore (Taste of Maroc) ; à Laâyoune, un four traditionnel au bois fait son pain avec du levain, plusieurs farines, du sel et de l'eau (Le360).",
  "Batbout : en cours de cuisine, Christine Benlafquih garde parfois un peu de cette pâte pour montrer comment faire des batbout, petits pains cuits sur le feu (Taste of Maroc) ; Choumicha publie aussi une recette « Batbot ou pain metlouâ »."
 ],
 "sources": [
  {
   "name": "Taste of Maroc, Christine Benlafquih (fondatrice du site, installée de longue date au Maroc, à la tête de Taste of Casablanca, experte cuisine marocaine de The Spruce Eats de 2008 à 2016), « Moroccan Khobz Recipe – Basic Moroccan Bread Recipe », 8 août 2017, mis à jour le 11 décembre 2019",
   "url": "https://tasteofmaroc.com/moroccan-bread-khobz-recipe/",
   "used_for": "Base de la recette (version métrique du site : 500 g de farine, 315 ml d'eau tiède, 2 c. à c. de sel, 1 c. à s. de levure, 2 pains de 20 cm) ; puits pour la levure, pâte souple sans coller, repos de 10 à 15 min sous un torchon, pains aplatis à ¼ de pouce, levée d'environ 1 h et test du doigt, fourchette ou entaille, 225 °C environ 20 min, son creux, grille ou panier ; épaisseur (1,5 à 3 cm), ferran, noms berbères, farines en darija. Réponses de l'autrice aux lecteurs : khobz sans huile, croûte plus croustillante sans sucre ni huile et avec de l'eau au pinceau, pâte molle, couches ou couverture par temps froid, moins de levure par chaleur, entaille trop profonde, pain lourd si pas assez cuit, congélation et réchauffage (170 °C, 5 à 8 min), précuisson la veille, variantes (farines, sésame, levée longue, levain, khobz des fêtes, batbout), pains proches en Algérie et en Tunisie"
  },
  {
   "name": "Choumicha (Choumicha Chafay, site officiel choumicha.ma), « Pain de semoule », copie archivée du 7 décembre 2021",
   "url": "https://web.archive.org/web/20211207215354/https://choumicha.ma/recette/29-pain-de-semoule.html",
   "used_for": "Source marocaine : pétrissage de 10 à 15 min en arrosant d'eau jusqu'à une pâte souple et malléable, eau tiède ajoutée progressivement, pâte doublée puis tapée pour chasser les bulles, boules roulées dans la semoule, levée dans un endroit tiède, pains vaporisés d'eau, 220 °C pendant 20 à 25 min ; variante à la semoule"
  },
  {
   "name": "Choumicha, « Pain complet », copie archivée du 1er décembre 2021",
   "url": "https://web.archive.org/web/20211201005005/https://choumicha.ma/recette/33-pain-complet.html",
   "used_for": "Source marocaine : même méthode recoupée ; variante complète (proportions, boules roulées dans la farine complète)"
  },
  {
   "name": "Choumicha, « Pain aux graines de sésame », copie archivée du 30 novembre 2021",
   "url": "https://web.archive.org/web/20211130233418/https://choumicha.ma/recette/25-pain-aux-graines-de-sesame-2.html",
   "used_for": "Source marocaine : même méthode recoupée ; variante au sésame (disques badigeonnés d'eau au pinceau puis couverts de sésame avant la levée)"
  },
  {
   "name": "Choumicha, « Krichlat ou brioches traditionnelles », copie archivée du 27 novembre 2021",
   "url": "https://web.archive.org/web/20211127030516/https://choumicha.ma/recette/747-krichlat-ou-brioches-traditionnelles.html",
   "used_for": "Repère indicatif de dose d'anis (1 c. à s. pour 500 g de farine) dans des brioches, pas dans un khobz"
  },
  {
   "name": "My Moroccan Food, Nargisse Benkabbou (élevée à Bruxelles dans une famille marocaine, ancienne cheffe exécutive de L'Mida Marrakech, autrice de « Casablanca: My Moroccan Food »), « Moroccan Semolina Bread », 18 août 2015",
   "url": "https://www.mymoroccanfood.com/home/moroccan-semolina-bread-fig-and-tahini-pinwheel",
   "used_for": "Pain traditionnellement rond, assez fin sans être plat, doré et croustillant dehors, moelleux dedans ; au Maroc, le tajine se mange avec du pain ; espacer les boules ; variante de petits pains à la semoule (proportions, 10 min de pétrissage, 2 cm, levée 1 h, entaille, semoule, 200 °C 18 à 20 min)"
  },
  {
   "name": "MarocMama, Amanda Mouttaki (installée au Maroc), « Moroccan Bread Recipe: Traditional Khobz »",
   "url": "https://marocmama.com/khobz-moroccan-bread/",
   "used_for": "Recoupement de la méthode : eau ajoutée peu à peu, pétrissage de 8 à 10 min, repos de 15 min, disques de ¼ de pouce égaux partout aplatis du centre vers les bords, torchon, levée de 45 min, four préchauffé pendant la levée, pains piqués à la fourchette, 400 à 425 °F pendant 18 à 20 min, son creux ; erreurs (farine à levure incorporée, eau froide, trop de farine, pétrissage trop court ou trop long) ; conservation (torchon, boîte à pain ou sac, congélation, réchauffage au four ou à la poêle)"
  },
  {
   "name": "La Vie éco, Aziza Belouas, « Le four traditionnel, une activité ancestrale qui continue à jouer son rôle social », 10 février 2019",
   "url": "https://www.lavieeco.com/influences/societe/le-four-traditionnel-une-activite-ancestrale-qui-continue-a-jouer-son-role-social/",
   "used_for": "Source marocaine sur le ferran (Sidi Bernoussi, Casablanca) : planches à pain apportées par les femmes et les enfants, four au feu de bois, four chaud pour le pain, pain piqué à l'enfournement « afin d'éviter qu'il gonfle », cuisson d'environ 20 minutes (« 20 mm » dans le texte) par fournées de 50 pains, pains reconnus grâce à l'ordre de rangement"
  },
  {
   "name": "Hespress, Majida Ait Lkitawi, « لماذا استَعاضت المغربيات عن \"خُبز الدار\" بأرغِفة المخابز؟ », 24 février 2014",
   "url": "https://www.hespress.com/161365-161365.html",
   "used_for": "Source marocaine : nom « خبز الدار » ; la gsaa (« الكَصعة ») où l'on pétrit ; pain chaud du matin avec un peu d'huile d'olive et un thé à la menthe ; « jeljlane et nafaa » ajoutés à la farine ; pain complet « zraa » ; blé ou orge moulus autrefois à la meule"
  },
  {
   "name": "Le360, Ghania Djebbar et Said Bouchrit, « Vidéo. Quand les Marocaines mettent la main à la pâte pour faire leur pain », 17 avril 2020",
   "url": "https://fr.le360.ma/societe/video-quand-les-marocaines-mettent-la-main-a-la-pate-pour-faire-leur-pain-213457/",
   "used_for": "Source marocaine : la guessaâ (gsaa), jatte traditionnelle des maisons marocaines, distincte du pétrin en bois"
  },
  {
   "name": "Le360, Hamdi Yara, « Un héritage préservé: à Laâyoune, on sait encore pétrir le pain comme autrefois », 27 décembre 2021",
   "url": "https://fr.le360.ma/societe/un-heritage-preserve-a-laayoune-on-sait-encore-petrir-le-pain-comme-autrefois-252054/",
   "used_for": "Source marocaine : pain d'un four traditionnel au bois fait de levain, de plusieurs farines, de sel et d'eau (variante au levain)"
  },
  {
   "name": "Morocco World News, Clay et Ann Smith, « Flour and Water: A Path to Cultural Discovery », Rabat, 17 mars 2015",
   "url": "https://www.moroccoworldnews.com/2015/03/120168/flour-water-path-cultural-discovery/",
   "used_for": "Khobz rond mangé à presque tous les repas, 2,5 à 5 cm d'épaisseur ; anis et cumin, parfums les plus courants ; pâte portée au four commun, souvent sur la tête par un enfant ; pain déchiré en quartiers, qui sert de cuillère et de fourchette ; respect du pain, jamais jeté"
  },
  {
   "name": "Wikipédia (anglais), « Khobz el-dâr »",
   "url": "https://en.wikipedia.org/wiki/Khobz_el-d%C3%A2r",
   "used_for": "Noms et écriture arabe (خبز، خبز الدار) ; farine blanche mêlée de farine complète ou de semoule ; parfois parfumé à l'anis ; pâte préparée à la maison puis cuite au four commun"
  },
  {
   "name": "Lalla Moulati, « خبز الدار بطريقة بسيطة وناجحة كيجي مسفج وخفيف », 27 mai 2020",
   "url": "https://www.lalamoulati.net/238123.html",
   "used_for": "Consultée : écriture « خبز الدار » ; liste d'ingrédients seule, sans méthode, non retenue (voir non vérifié)"
  },
  {
   "name": "Reinhart Dozy, Supplément aux dictionnaires arabes, entrée « نفع » (via arabiclexicon.hawramani.com)",
   "url": "https://arabiclexicon.hawramani.com/%d9%86%d9%8e%d9%81%d9%92%d8%b9/?book=19",
   "used_for": "Sens du mot « nafaa » (anis ; aussi fenouil au Maghreb) : traduction laissée non confirmée"
  },
  {
   "name": "Taste of Maroc, Christine Benlafquih, « Moroccan Khobz Recipe – Basic Moroccan Bread Recipe », copies web.archive.org de juin 2019 à juillet 2026 (lien : copie du 16 juillet 2026) et flux de commentaires archivé",
   "url": "https://web.archive.org/web/20260716014746/https://tasteofmaroc.com/moroccan-bread-khobz-recipe/",
   "used_for": "Contre-vérification : La page en ligne refuse les lecteurs automatiques (erreur 403 « Blocked because of Malicious Activities » le 6 novembre 2026) ; 33 copies archivées et le flux des commentaires ont été lus. Ils confirment la version métrique (500 g de farine, 315 ml d'eau tiède, 2 c. à c. de sel, 2 c. à c. de sucre, 1 c. à s. de levure, 2 c. à s. d'huile), « 2 pains de 8 pouces », le pétrissage de 5 à 10 min, le repos de 10 à 15 min, les pains aplatis à ¼ de pouce, la levée d'environ 1 h et le test du doigt, 225 °C environ 20 min, le son creux, la grille ou le panier, kesra et agroum, la date (8 août 2017, mise à jour le 11 décembre 2019), et ces réponses de l'autrice : croûte plus croustillante sans sucre ni huile et avec de l'eau au pinceau, première levée en saladier huilé, entaille trop profonde et fourchette (23 juin 2019) ; un peu de pâte gardée en cours de cuisine pour montrer les batbout (13 novembre 2019) ; pains congelés une fois refroidis, décongelés quelques heures, réchauffés 5 à 8 min à 170 °C (5 décembre 2019) ; levée unique rapide, moins de levure par temps chaud, levée longue et levain (7 et 8 janvier 2020) ; farines en darija et en français, dont « force » et « farine de blé » (4 avril 2020) ; moitié farine complète, pâte molle sinon pain dur et dense (30 avril 2020) ; précuisson la veille (21 mai 2020) ; couches, petite couverture ou four lampe allumée (25 mai 2020) ; orge et avoine « usually » mélangées à d'autres farines (29 septembre 2020) ; huile facultative (21 novembre 2020) ; eau à ajuster selon la farine et l'humidité (30 décembre 2020) ; khobz enrichi des fêtes, pains proches en Algérie et en Tunisie (27 juillet 2021) ; eau chaude qui tue la levure, eau froide qui l'empêche d'agir, pâte ferme qui donne un pain plus dense (24 janvier 2023)."
  },
  {
   "name": "Al3omk (العمق المغربي), Ismail Tazarni (إسماعيل التزارني), « \"معلم فران الحومة\".. جندي يحرس فوهة نار رعت خبز المغاربة لقرون فخبا وهجها », 11 avril 2023",
   "url": "https://al3omk.com/833635.html",
   "used_for": "Contre-vérification : Source marocaine (four de quartier au bois de la médina de Salé) : la maîtresse de maison pose la planche à pain (« وصلة », wasla) sur le seuil et un passant la porte au four ; le maître du four reconnaît le pain de chaque famille et remet chaque pain sur sa propre wasla ; à ses débuts, il demandait aux clients la description de la wasla, du torchon (« المنديل ») et le nombre de pains ; il retarde l'enfournement d'une pâte qui n'a pas fini de lever ; sa pelle en bois s'appelle « المطرح »."
  },
  {
   "name": "Akhbarona (أخبارنا المغربية), dépêche de l'agence Anadolu, « الأفران التقليدية بمدن المغرب العتيقة… تقاوم حتى لا يخفت لهيب نارها », 5 novembre 2013",
   "url": "https://www.akhbarona.com/last/56442.html",
   "used_for": "Contre-vérification : Source marocaine (fours des vieilles médinas, témoignage d'une habitante de Salé) : les femmes préparent les pains le matin et un enfant porte le plateau au four du quartier, chauffé au bois ; le fournier, appelé ici « الفرارني » (« cuiseur de pain » en darija selon l'article), reconnaît les pains de chaque maison et les remet sur leur plateau ; la pelle en bois y est appelée « الطراح » ; 0,5 DH la cuisson d'un pain."
  },
  {
   "name": "Aujourd'hui le Maroc, « Le pain mellali, emblème d'une tradition culinaire », mars 2008",
   "url": "https://aujourdhui.ma/culture/le-pain-mellali-embleme-dune-tradition-culinaire-88752",
   "used_for": "Contre-vérification : Source marocaine (Beni Mellal, Tadla-Azilal) : les fours de quartier chauffent au bois et les habitants y portent leurs pains « après l'apprêt », le matin ou l'après-midi ; 50 centimes la cuisson d'un pain (en 2008)."
  },
  {
   "name": "Fez Guide (guide local de Fès), « The traditional Moroccan oven el Ferrane », 10 novembre 2019",
   "url": "https://www.fez-guide.com/the-traditional-moroccan-oven-el-ferrane/",
   "used_for": "Contre-vérification : Les clients apportent au ferrane des planches en bois (« wasla ») couvertes d'un tissu qui protège la pâte fraîche du soleil et de la poussière ; les employés reconnaissent la planche et le pain de chaque famille ; four au bois."
  },
  {
   "name": "Cooking with Alia, « 509- Khobz, Moroccan Bread / الخبز المغربي », 31 mai 2017, copie web.archive.org du 1er avril 2023",
   "url": "https://web.archive.org/web/20230401100237/https://www.cookingwithalia.com/509-khobz-moroccan-bread/",
   "used_for": "Contre-vérification : Recette de khobz d'une autrice qui présente la cuisine marocaine comme celle de son enfance : pétrissage d'environ 10 min jusqu'à une pâte lisse et élastique, pains aplatis du bout des doigts à environ 6 mm (¼ de pouce), torchon, pains piqués plusieurs fois à la fourchette, 200 °C environ 20 min ; 650 g de farine et de semoule fine pour 4 pains moyens (4 à 6 selon la taille voulue)."
  },
  {
   "name": "Wiktionary (anglais), « aɣrum »",
   "url": "https://en.wiktionary.org/wiki/a%C9%A3rum",
   "used_for": "Contre-vérification : aɣrum (ⴰⵖⵔⵓⵎ) veut dire « pain » en tachelhit, en tarifit et en senhaja de Srair : recoupe « agroum en tachelhit ». La page ne dit rien de « kesra »."
  },
  {
   "name": "King Arthur Baking, « How to tell if bread dough has risen enough » (22 août 2022)",
   "url": "https://www.kingarthurbaking.com/blog/2022/08/22/how-to-tell-if-bread-dough-has-risen-enough",
   "used_for": "Relecture : Test du doigt : si le creux remonte tout de suite, la pâte doit lever encore."
  },
  {
   "name": "The Perfect Loaf, « How to use the dough poke test »",
   "url": "https://www.theperfectloaf.com/how-to-use-the-dough-poke-test/",
   "used_for": "Relecture : Creux qui remonte vite : pas assez levé ; lentement : prêt ; pas du tout : trop levé."
  }
 ],
 "discrepancies": [
  "Farines : farine blanche seule chez Taste of Maroc (de préférence riche en gluten) et chez MarocMama (ou complète, ou moitié-moitié). Choumicha publie trois pains : semoule (500 g de semoule fine et 250 g de farine de blé dur), complet (500 g de farine complète et 250 g de farine de blé tendre) et sésame (750 g de farine de blé tendre). My Moroccan Food met un peu plus de semoule que de farine (300 g et 280 g). Wikipédia parle de farine blanche mêlée de farine complète ou de semoule, Morocco World News d'un pain surtout fait de semoule de blé dur. Retenu : farine blanche pour la base, comme Taste of Maroc et MarocMama, puisque chaque famille a son mélange ; les mélanges passent en variantes.",
  "Eau : 315 ml pour 500 g de farine (63 %) chez Taste of Maroc, avec 2 c. à s. d'huile ; chez Choumicha, 50 cl pour 750 g (67 %) dans le pain de semoule et 40 cl pour 750 g (53 %) dans les pains complet et au sésame, plus l'eau dont on arrose la pâte en pétrissant ; chez MarocMama, jusqu'à 2 tasses (environ 475 ml) pour un peu plus de 4 tasses de farine, sans forcément tout utiliser ; chez My Moroccan Food, 300 ml d'eau et de lait pour 580 g, puis par cuillerées. Retenu : 315 ml, à ajuster.",
  "Sel : 2 c. à c. pour environ 500 g de farine (Taste of Maroc, MarocMama), 2 c. à c. pour 580 g (My Moroccan Food), 1 c. à c. pour 750 g (Choumicha). Retenu : 2 c. à c.",
  "Levure : 1 c. à s. de levure sèche (Taste of Maroc, MarocMama, My Moroccan Food) ; 20 g de « levure boulangère », type non précisé, pour 750 g chez Choumicha. Taste of Maroc précise que sa dose est un peu plus forte que la proportion courante (2 ¼ c. à c. pour 4 tasses de farine), pour une seule levée rapide. Retenu : 1 c. à s.",
  "Sucre et huile : 2 c. à c. de sucre et 2 c. à s. d'huile chez Taste of Maroc ; 1 c. à c. de sucre et de l'huile travaillée à la main (jusqu'à ¼ de tasse) chez MarocMama ; 2 c. à c. de sucre et 3 c. à s. d'huile d'olive chez My Moroccan Food ; 1 c. à s. de sucre dans le pain au sésame de Choumicha, ni sucre ni huile dans ses pains de semoule et complet. Retenu : sans, comme les pains de semoule et complet de Choumicha.",
  "Pétrissage : 5 à 10 min (Taste of Maroc), 8 à 10 min (MarocMama), 10 min (My Moroccan Food), 10 à 15 min (Choumicha). Retenu : 10 min, prolongées jusqu'à 15 si la pâte n'est pas encore lisse.",
  "Levées : une seule levée, après avoir aplati les pains, chez Taste of Maroc (repos de 10 à 15 min, puis environ 1 h), MarocMama (repos de 15 min, puis 45 min) et My Moroccan Food (repos de 10 min, puis 1 h) ; deux levées chez Choumicha (pâte doublée, puis pains levés à nouveau, sans durée donnée). Retenu : repos de 15 min, puis environ 1 h de levée.",
  "Épaisseur : avant la levée, environ ¼ de pouce, soit 6 mm (Taste of Maroc, MarocMama), 2 cm pour les petits pains de My Moroccan Food, « légèrement aplaties » chez Choumicha. Pain cuit : 3 cm au plus et souvent 1,5 cm (Taste of Maroc), 2,5 à 5 cm (Morocco World News), environ un pouce pour le khobz el koucha (Wikipédia). Retenu : 6 mm avant la levée.",
  "Four : 225 °C (Taste of Maroc), 220 °C (Choumicha), 400 à 425 °F, soit environ 205 à 220 °C (MarocMama), 200 °C (My Moroccan Food). Retenu : 220 °C.",
  "Cuisson : environ 20 min (Taste of Maroc ; 20 min au ferran selon La Vie éco), 18 à 20 min (MarocMama, My Moroccan Food), 20 à 25 min (Choumicha). Retenu : 20 min, jusqu'à 25 si besoin.",
  "Dessus du pain : fourchette ou légère entaille au couteau (Taste of Maroc), fourchette (MarocMama), entaille au couteau et semoule (My Moroccan Food), simple vaporisation d'eau (Choumicha). Retenu : fourchette, puis un peu d'eau.",
  "Plaque : papier cuisson, huile, semoule ou semoule de maïs (Taste of Maroc) ; boules roulées dans la semoule ou la farine (Choumicha) ; plaque graissée ou chemisée (My Moroccan Food). Retenu : semoule fine.",
  "Nombre de pains : 2 pains de 8 pouces (20 cm) chez Taste of Maroc ; pâte partagée en 2 ou 3 et « 3-4 rounds » chez MarocMama ; 10 petits pains de 10 cm chez My Moroccan Food ; nombre non précisé chez Choumicha. Retenu : 2 pains, comme la base de Taste of Maroc ; aplatis à 6 mm comme chez Taste of Maroc, MarocMama et Cooking with Alia, ils font 27 à 30 cm de large (calcul sur environ 835 g de pâte), et non 20 cm : à 20 cm, chacun ferait 1,1 à 1,3 cm d'épaisseur avant la levée.",
  "Durées : Taste of Maroc indique 15 min de préparation, 1 h 15 de levée et 20 min de cuisson ; MarocMama 1 h 15 de préparation (levées comprises) et 20 min de cuisson. Retenu : 20 min de préparation (estimation, voir non vérifié), 1 h 15 de repos et de levée (15 + 60 min), 20 min de cuisson.",
  "Contre-vérifiée le 6 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 10 correction(s) appliquée(s). 1 correction(s) proposée(s) non retenue(s) : l'appli affiche désormais 315 ml, car elle arrondit à 5 ml près sous 500 ml",
  "Relue le 8 novembre 2026 pendant la traduction : 2 précision(s) apportée(s) après vérification des sources."
 ],
 "unverified": [
  "Choumicha : son site officiel ne répond pas (erreur 525 le 6 novembre 2026) ; ses recettes ont été lues sur les copies archivées de web.archive.org (fin 2021). Le type de levure de ses « 20 g de levure boulangère » (fraîche ou sèche) n'est pas précisé ; aucune équivalence levure fraîche / levure sèche n'est donnée ici.",
  "Taste of Maroc : les quantités sont celles de la version métrique du site (500 g, 315 ml) ; la version en tasses (1 ¼ tasse) ferait environ 296 ml d'eau. La base retire le sucre et l'huile de cette recette sur la foi des remarques de l'autrice ; aucune source ne donne la quantité d'eau exacte de la version sans huile : 315 ml gardés, à ajuster.",
  "Temps de préparation de 20 min : estimation à partir des étapes (10 min de pétrissage) ; Taste of Maroc compte 15 min avec 5 à 10 min de pétrissage.",
  "« Nafaa » (النافع), cité par Hespress : le dictionnaire de Dozy le traduit par anis, mais le donne aussi pour le fenouil au Maghreb ; la traduction exacte n'est pas confirmée, d'où le mot laissé tel quel.",
  "Dose d'anis dans un khobz : aucune source lue ne la donne.",
  "Marque des pains pour le ferran : aucune source marocaine trouvée ; le terrah de La Vie éco se fie à l'ordre dans lequel il range les pains, et le maître du four d'Al3omk reconnaît le pain de chaque famille, sa planche (wasla) et son torchon (mendil).",
  "Au ferran, qui pique les pains (la famille avant de partir, ou le terrah) : seul le terrah de La Vie éco est documenté, et il pique lui-même chaque pain en l'enfournant. Le torchon sur la planche est attesté par Fez Guide et Al3omk.",
  "La Vie éco écrit « 20 mm » pour la durée de cuisson au ferran : lu comme 20 minutes.",
  "Prix de cuisson au ferran : 1,50 DH le petit pain rond (« lgourssa ») en 2019 dans un four de Casablanca (La Vie éco) ; non repris, il a pu changer.",
  "Lalla Moulati : les pages khobz trouvées sont des vidéos sans texte ou une liste d'ingrédients sans méthode (version au lait, au beurre, au sucre et au sésame, sans eau indiquée) ; non utilisées.",
  "Femmes du Maroc : la recherche « khobz » sur leur site ne donne aucune recette ; non utilisée.",
  "Cooking with Alia (« 509- Khobz, Moroccan Bread ») : ancien site en erreur 503 ; recette lue lors de la contre-vérification sur la copie web.archive.org du 1er avril 2023 (pains aplatis à 6 mm, piqués à la fourchette, 200 °C environ 20 min).",
  "Gsaa : Le360 la décrit comme une jatte, distincte du pétrin en bois ; sa matière n'est pas précisée.",
  "Origine des auteurs : Christine Benlafquih (Taste of Maroc) vit au Maroc depuis longtemps et Amanda Mouttaki (MarocMama) y est installée, mais aucune n'est présentée comme marocaine ; les auteurs de l'article de Morocco World News ne sont pas présentés. Sources marocaines au sens strict : Choumicha, La Vie éco, Hespress, Le360 ; My Moroccan Food est tenu par une cheffe de famille marocaine élevée à Bruxelles.",
  "Retiré à la contre-vérification, faute d'avoir retrouvé la source exacte (réponses de l'autrice de Taste of Maroc aux lecteurs, absentes des copies archivées) : « beaucoup de Marocains font le khobz sans huile », « sans sucre ni huile la croûte est plus croustillante », « pas assez cuit, il reste lourd », la congélation « même pour le lendemain », moins de levure par temps chaud, et le passage du congélateur au four sous papier aluminium. « Kesra en tamazight », écrit par Taste of Maroc seule, a aussi été retiré."
 ],
 "cuisine": "Marocaine",
 "rayon": "Pains",
 "pairs": [
  "tajine-kefta-oeufs",
  "zaalouk",
  "tajine-agneau-pruneaux",
  "the-menthe"
 ],
 "pairs_label": "Avec le khobz",
 "img_alt": "Piles de khobz ronds sur un étal de Chefchaouen",
 "img": "img/khobz.jpg",
 "photo": {
  "author": "YoTuT from United States",
  "license": "CC BY 2.0",
  "license_url": "https://creativecommons.org/licenses/by/2.0",
  "page": "https://commons.wikimedia.org/wiki/File:Chefchaouen,_Morocco_(5410213344).jpg",
  "modified": "recadrée et réduite"
 }
});
