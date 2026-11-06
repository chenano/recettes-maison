/* Recette : Harcha, galettes de semoule à la poêle. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "harcha",
 "title": "Harcha, galettes de semoule à la poêle",
 "darija": "harcha (aussi harsha)",
 "arabic": "حرشة",
 "tagline": "Des galettes de semoule sablées, cuites à sec à la poêle, légèrement croustillantes dehors et moelleuses dedans, à manger tièdes avec du miel et du beurre.",
 "category": "Pain",
 "occasion": "Petit-déjeuner, goûter avec le thé, ftour du ramadan",
 "region": "Maroc ; aussi en Algérie (origine discutée : le Moyen Atlas selon Wikipédia en anglais, l'Algérie selon Wikipédia en français)",
 "servings": 10,
 "servings_label": "harchas",
 "time": {
  "prep": 15,
  "cook": 30,
  "rest": 20
 },
 "difficulty": "Facile",
 "equipment": [
  "Un grand saladier",
  "Une balance de cuisine et un verre doseur",
  "Un torchon propre ou du film pour couvrir la pâte",
  "Une assiette creuse pour la semoule d'enrobage",
  "Une grande poêle à fond épais (fonte) ou antiadhésive",
  "Une spatule plate",
  "Une petite casserole pour le sirop miel-beurre",
  "Un couteau bien aiguisé"
 ],
 "ingredients": [
  {
   "group": "Pâte",
   "items": [
    {
     "id": "semoule",
     "q": 500,
     "u": "g",
     "name": "de semoule fine de blé dur",
     "note": "c'est elle qui donne la texture sablée : ne la remplace pas",
     "canon": "semoule"
    },
    {
     "id": "sucre",
     "q": 6,
     "u": "c. à s.",
     "name": "de sucre en poudre",
     "note": "tu peux en mettre moins : d'autres recettes n'en mettent que 2 c. à s. pour 500 g de semoule",
     "canon": "sucre"
    },
    {
     "id": "levure-chimique",
     "q": 2,
     "u": "c. à c.",
     "name": "de levure chimique",
     "canon": "levure-chimique"
    },
    {
     "id": "sel",
     "q": 0.5,
     "u": "c. à c.",
     "name": "de sel fin",
     "canon": "sel"
    },
    {
     "id": "beurre",
     "q": 150,
     "u": "g",
     "name": "de beurre doux, bien mou",
     "note": "à température ambiante",
     "canon": "beurre"
    },
    {
     "id": "lait",
     "q": 200,
     "u": "ml",
     "name": "de lait",
     "note": "environ : ajoute-le petit à petit, la quantité dépend de ta semoule",
     "canon": "lait"
    }
   ]
  },
  {
   "group": "Pour enrober",
   "items": [
    {
     "id": "semoule-enrobage",
     "q": 4,
     "u": "c. à s.",
     "name": "de semoule fine ou moyenne",
     "note": "environ",
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
     "name": "Miel",
     "pl": "Miel",
     "note": "à parts égales avec le beurre, pour le sirop",
     "canon": "miel"
    },
    {
     "id": "beurre-service",
     "q": null,
     "u": "",
     "name": "Beurre",
     "pl": "Beurre",
     "note": "à parts égales avec le miel",
     "canon": "beurre"
    },
    {
     "id": "fleur-oranger",
     "q": null,
     "u": "",
     "name": "Quelques gouttes d'eau de fleur d'oranger",
     "pl": "Quelques gouttes d'eau de fleur d'oranger",
     "note": "facultatif, dans le sirop",
     "canon": "fleur-oranger"
    },
    {
     "id": "jben",
     "q": null,
     "u": "",
     "name": "Jben (fromage frais marocain)",
     "pl": "Jben (fromage frais marocain)",
     "note": "facultatif",
     "canon": "jben"
    },
    {
     "id": "confiture",
     "q": null,
     "u": "",
     "name": "Confiture",
     "pl": "Confiture",
     "note": "facultatif",
     "canon": "confiture"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Mélanger les ingrédients secs",
   "text": "Dans un grand saladier, mélange {{semoule}} de semoule fine, {{sucre}} de sucre, {{levure-chimique}} de levure chimique et {{sel}} de sel.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Sabler avec le beurre",
   "text": "Ajoute {{beurre}} de beurre bien mou. Frotte le mélange entre tes paumes jusqu'à ce que toute la semoule soit humide et que chaque grain soit enrobé de beurre : c'est ce geste qui rend la harcha sablée et légère.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Ajouter le lait petit à petit",
   "text": "Verse la moitié des {{lait}} de lait et mélange. Ajoute le reste petit à petit, juste jusqu'à obtenir une pâte qui se tient : selon ta semoule, il en faudra un peu plus ou un peu moins. Ne pétris pas, rassemble seulement : si la pâte colle un peu, c'est normal.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Laisser gonfler la semoule",
   "text": "Couvre le saladier et laisse reposer 20 minutes. La semoule boit le lait et gonfle : la pâte devient plus sèche. Si elle s'effrite, ajoute un filet de lait.",
   "timer": {
    "min": 20,
    "label": "Repos de la pâte",
    "done": "La semoule a gonflé. Si la pâte s'effrite, ajoute un filet de lait, puis façonne les galettes."
   }
  },
  {
   "phase": "Préparation",
   "title": "Façonner les galettes",
   "text": "Partage la pâte en boules égales, une par harcha. Aplatis chaque boule à la main en un disque d'environ 10 cm de diamètre et de 1 cm d'épaisseur. Pas plus épais : sinon la cuisson n'est pas homogène.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Rouler dans la semoule",
   "text": "Verse {{semoule-enrobage}} de semoule dans une assiette creuse. Pose chaque galette dedans puis retourne-la, pour enrober les deux faces : c'est ce qui donnera une croûte croustillante.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Chauffer la poêle à sec",
   "text": "Chauffe une grande poêle à fond épais (fonte) ou antiadhésive à feu moyen, sans matière grasse. Quand elle est chaude, baisse à feu doux ou moyen-doux. C'est très important : à feu trop fort, la harcha brûle dehors et reste crue dedans.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Cuire la première face",
   "text": "Dépose une première fournée de galettes dans la poêle chaude. Laisse cuire environ 5 minutes sans y toucher, jusqu'à ce que le dessous soit bien doré.",
   "timer": {
    "min": 5,
    "label": "Première face",
    "done": "Soulève un bord avec la spatule : si le dessous est bien doré, retourne les galettes. Sinon, laisse encore un peu."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Retourner délicatement",
   "text": "Retourne-les délicatement avec une spatule plate, car elles sont friables, et cuis l'autre face environ 5 minutes. Elles sont prêtes quand les deux faces sont dorées et qu'elles paraissent sèches sous le doigt. Si elles colorent trop vite, baisse le feu. Entre deux fournées, essuie la poêle pour que la semoule tombée ne brûle pas et ne colle pas aux galettes, puis cuis les suivantes de la même façon.",
   "timer": {
    "min": 5,
    "label": "Deuxième face",
    "done": "Dorées des deux côtés et sèches sous le doigt ? Sors-les et passe à la fournée suivante."
   }
  },
  {
   "phase": "Service",
   "title": "Préparer le sirop miel-beurre",
   "text": "Dans une petite casserole, fais fondre ensemble du miel et du beurre, à parts égales. Ajoute quelques gouttes de fleur d'oranger si tu aimes. C'est le nappage traditionnel de la harcha au Maroc.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Servir tiède",
   "text": "Laisse tiédir un peu les harchas, puis ouvre-les en deux avec un couteau bien aiguisé si tu veux les garnir : trop chaudes, elles s'émiettent. Sers-les tièdes, nappées de sirop miel-beurre ou garnies de jben ou de confiture, avec un thé à la menthe.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Sable d'abord : frotte la semoule et le beurre entre tes paumes jusqu'à ce que chaque grain soit enrobé de gras, avant de mettre le lait. C'est ce qui donne la texture friable et légère.",
   "source": "Amour de cuisine (Soulef Zaoui) ; My Moroccan Food (Nargisse Benkabbou) ; Milk Street (le gras ajouté avant le liquide limite le gluten)"
  },
  {
   "text": "Ici, le beurre est mou, comme chez My Moroccan Food et Bladi.net : selon Milk Street, le beurre fondu donne une texture un peu plus lourde et plus grasse. Choumicha et Amour de cuisine utilisent pourtant du beurre fondu mêlé d'huile : c'est un choix, pas une règle.",
   "source": "My Moroccan Food et Bladi.net (beurre mou) ; Milk Street ; Choumicha et Amour de cuisine (beurre fondu et huile)"
  },
  {
   "text": "Verse le lait en plusieurs fois : la quantité dépend de ta semoule. Arrête-toi dès que la pâte se tient.",
   "source": "My Moroccan Food ; Morocco World News (liquide versé petit à petit)"
  },
  {
   "text": "Ne pétris pas, rassemble juste la pâte : pétrir active le gluten et durcit les harchas. Une pâte un peu collante, c'est normal.",
   "source": "Amour de cuisine"
  },
  {
   "text": "Ne saute pas le repos : il faut 20 minutes pour que la semoule boive le lait et gonfle. Une pâte bien reposée donne des harchas moelleuses, pas friables.",
   "source": "My Moroccan Food (20 min) ; Amour de cuisine (20 à 30 min)"
  },
  {
   "text": "Après le repos, la pâte est plus sèche, c'est normal. Si elle s'effrite, ajoute un filet de lait.",
   "source": "Cooking with Alia"
  },
  {
   "text": "Enrobe les deux faces de semoule avant la cuisson : c'est ce qui rend la croûte croustillante.",
   "source": "My Moroccan Food ; recette de Paula Wolfert décrite par Milk Street"
  },
  {
   "text": "1 cm d'épaisseur, pas plus, pour une cuisson homogène. Plus fine, la harcha est croustillante ; plus épaisse, elle est moelleuse.",
   "source": "My Moroccan Food, Bladi.net et Amour de cuisine (1 cm) ; Cooking with Alia (fine ou épaisse)"
  },
  {
   "text": "Cuis à sec, sans matière grasse dans la poêle.",
   "source": "Bladi.net (« poêle sèche ») ; Julie Andrieu (« sans matière grasse »)"
  },
  {
   "text": "Feu doux à moyen-doux : préchauffe la poêle à feu moyen, puis baisse avant d'y poser les galettes. Sinon elles brûlent dehors et restent crues dedans.",
   "source": "Cooking with Alia ; My Moroccan Food (feu moyen-doux) ; Bladi.net (feu doux)"
  },
  {
   "text": "Retourne-la délicatement, avec une spatule plate, quand le dessous est bien doré : elle est friable. La harcha est cuite quand elle est dorée des deux côtés et sèche sous le doigt.",
   "source": "Amour de cuisine (retourner délicatement) ; Choumicha (spatule plate) ; Cooking with Alia"
  },
  {
   "text": "Laisse-la tiédir avant de l'ouvrir, avec un couteau bien aiguisé : trop chaude, elle s'émiette.",
   "source": "Cooking with Alia"
  },
  {
   "text": "Le nappage traditionnel, c'est un sirop de miel et de beurre fondus à parts égales, avec quelques gouttes de fleur d'oranger si tu veux.",
   "source": "My Moroccan Food"
  }
 ],
 "mistakes": [
  "Verser tout le lait d'un coup : selon la semoule, il en faut plus ou moins (My Moroccan Food ; Morocco World News).",
  "Pétrir la pâte comme un pain : ça active le gluten et durcit les harchas (Amour de cuisine).",
  "Sauter le repos : la semoule n'a pas le temps de boire le lait (My Moroccan Food ; Amour de cuisine).",
  "Faire des galettes de plus de 1 cm : la cuisson n'est plus homogène (Amour de cuisine).",
  "Oublier l'enrobage de semoule : c'est lui qui donne la croûte croustillante (My Moroccan Food).",
  "Cuire à feu vif : la harcha brûle dehors et reste crue dedans (Cooking with Alia).",
  "L'ouvrir encore brûlante ou avec un couteau qui coupe mal : elle s'émiette (Cooking with Alia).",
  "Remplacer la semoule par autre chose : la recette ne marche qu'avec de la semoule (Cooking with Alia)."
 ],
 "serving": "Tiède, quand elle est légèrement croustillante dehors et moelleuse dedans (Bladi.net ; My Moroccan Food). Le nappage traditionnel au Maroc est un sirop de miel et de beurre fondus à parts égales, avec quelques gouttes de fleur d'oranger si tu veux (My Moroccan Food). Tu peux aussi l'ouvrir en deux et la garnir de fromage, de confiture ou de miel (Cooking with Alia), par exemple de jben, le fromage frais marocain (Morocco World News). Avec un thé à la menthe (Wikipédia ; Amour de cuisine) ou un verre de lait (Morocco World News), au petit-déjeuner, au goûter ou au ftour du ramadan (My Moroccan Food ; Wikipédia ; Hespress). Elle se garde 1 à 2 jours dans un torchon propre : réchauffe-la quelques secondes à la poêle (Amour de cuisine).",
 "variants": [
  "Beurre et huile : Amour de cuisine met 100 ml de beurre fondu et 50 ml d'huile pour 500 g de semoule ; Julie Andrieu 40 g de beurre fondu et 1 c. à s. d'huile pour 250 g ; Morocco World News ½ tasse de chaque pour ½ kg.",
  "À l'eau et sans levure, la plus simple : 400 g de semoule fine, 100 g de beurre ramolli, 50 g de sucre, ½ c. à c. de sel et ¾ de verre d'eau ; galettes de 1 cm cuites à feu doux sur poêle sèche, 5 à 10 min par face (Bladi.net).",
  "Plus croquante : moitié semoule fine, moitié semoule moyenne dans la pâte (Amour de cuisine).",
  "Une seule grande harcha : pâte plus souple (20 cl de lait pour 250 g de semoule) étalée à la main mouillée dans la poêle chaude saupoudrée de semoule moyenne, sur 1 cm au plus, semoule moyenne dessus, 8 à 10 min par face (Julie Andrieu). Wikipédia parle de harchas grandes comme un pneu de camion ; à Fès, Christopher Kimball en a mangé une presque aussi large qu'un tajine (Milk Street).",
  "Au four : pâte à l'huile et au lait chaud, un peu coulante, étalée dans une poêle froide beurrée et bien saupoudrée de semoule, semoule et petits morceaux de beurre dessus, puis enfournée ; ni température ni durée données (Lalla Moulati, qui l'attribue à Choumicha).",
  "Farcie : pâte à la levure fraîche (beurre et huile, lait et eau, repos de 30 min) ; chaque boule est creusée, garnie de jben, d'olives noires et de thym, refermée, aplatie puis dorée à la poêle (Morocco World News).",
  "Salée au zaatar et aux olives : sans sucre, avec 3 c. à s. de zaatar, 2 c. à s. d'olives noires hachées et 1 c. à c. de sel pour 250 g de semoule (My Moroccan Food). Nargisse Benkabbou la dit aussi sucrée ou salée, parfumée ou fourrée de fruits secs, de viande ou d'herbes.",
  "Au babeurre ou au yaourt : dans le Rif, du babeurre ou du yaourt allongé d'eau remplace le lait (Wikipédia) ; Milk Street fait sa version au yaourt.",
  "Avec une pincée de levure boulangère en plus de la levure chimique (Amour de cuisine).",
  "Aux graines de fenouil concassées, au cumin, à la coriandre ou aux herbes séchées (Julie Andrieu).",
  "À Khénifra, la harcha du ftour se distingue : elle est préparée avec des plantes médicinales (Hespress).",
  "En sandwich, fourrée de fromage ou de viande confite (Wikipédia)."
 ],
 "sources": [
  {
   "name": "My Moroccan Food, Nargisse Benkabbou, « Plain Harcha + Zaatar and Black Olive Harcha », 5 novembre 2018 (élevée à Bruxelles dans une famille marocaine, ancienne cheffe exécutive de L'Mida Marrakech, autrice de « Casablanca: My Moroccan Food »)",
   "url": "https://www.mymoroccanfood.com/home/plain-harcha-zaatar-and-black-olive-harcha",
   "used_for": "Recette retenue, doublée : 250 g de semoule, 3 c. à s. de sucre, 1 c. à c. de levure chimique, ¼ c. à c. de sel, 75 g de beurre mou, 100 ml de lait ajouté peu à peu ; repos de 20 min ; disques de 1 cm ; enrobage de semoule pour le croustillant ; feu moyen-doux, 5 min par face ; sirop miel-beurre traditionnel ; variante zaatar-olives"
  },
  {
   "name": "Bladi.net (« Les Marocains du monde »), « Harcha ou galettes de semoules », rubrique Pâtisseries marocaines, sans auteur ni date",
   "url": "https://www.bladi.net/recettes/harcha-ou-galettes-de-semoules.html",
   "used_for": "Source marocaine : version à l'eau sans levure, beurre ramolli, galettes de 1 cm, feu doux sur poêle sèche, 5 à 10 min par face, dégustée tiède"
  },
  {
   "name": "Morocco World News (bureau à Rabat), Safaa Kasraoui, « Take a Bite of Morocco's Delicious Pan-Fried 'Harcha' », 8 mai 2020",
   "url": "https://www.moroccoworldnews.com/2020/05/70005/take-a-bite-of-moroccos-delicious-pan-fried-harcha/",
   "used_for": "Source marocaine : liquide versé petit à petit ; variante farcie au jben, aux olives et au thym, à la levure fraîche avec repos de 30 min ; servie à l'iftar, au shour ou au petit-déjeuner avec un thé à la menthe ou du lait"
  },
  {
   "name": "Hespress FR, Zoubida Senoussi, « Par région, voici les traditions culinaires marocaines du ramadan », 16 avril 2021",
   "url": "https://fr.hespress.com/198966-par-region-voici-les-traditions-culinaires-marocaines-du-ramadan.html",
   "used_for": "Source marocaine : harcha du ftour à Tanger et à Khénifra, où elle est préparée avec des plantes médicinales"
  },
  {
   "name": "Lalla Moulati (magazine féminin marocain en ligne), « جبت ليك من عند شميشة طريقة الحرشةبالحليب كتجي غزالة تحضر فالحين كتليق لضياف الغفلة », 15 janvier 2019",
   "url": "https://www.lalamoulati.net/179906.html",
   "used_for": "Source marocaine : graphie حرشة ; variante d'une grande harcha au four, attribuée à Choumicha (attribution non vérifiée)"
  },
  {
   "name": "Amour de cuisine, Soulef Zaoui, « Harcha marocaine au lait-galette de semoule au lait », 27 février 2025",
   "url": "https://www.amourdecuisine.fr/article-harcha-au-lait-galette-de-semoule-au-lait.html",
   "used_for": "Sablage grain par grain, ne pas pétrir, pâte un peu collante normale, repos couvert de 20 à 30 min pour que la semoule gonfle, 1 cm au plus, 10 cm de diamètre, feu moyen-doux, retourner une fois, 4 c. à s. de semoule pour la cuisson, service et conservation ; variantes beurre-huile, semoule moitié moyenne, pincée de levure boulangère"
  },
  {
   "name": "Cooking with Alia, « 310 – Harcha – Moroccan Semolina Bread / حرشا », 2016 (autrice qui dit avoir grandi avec la cuisine marocaine)",
   "url": "https://www.cookingwithalia.com/310-harcha-moroccan-semolina-bread/",
   "used_for": "Préchauffer à feu moyen puis baisser à feu doux, sinon la harcha brûle dehors et reste crue dedans ; 5 min par face ; signes de cuisson (dorée, sèche sous le doigt) ; pâte plus sèche après le repos ; fine = croustillante, épaisse = moelleuse ; laisser tiédir avant de couper ; garnitures ; ne pas remplacer la semoule"
  },
  {
   "name": "Julie Andrieu, « Harcha, galette de semoule marocaine »",
   "url": "https://www.julieandrieu.com/recettes/harcha",
   "used_for": "Poêle en fonte ou antiadhésive préchauffée à feu moyen, sans matière grasse ; semoule moyenne dessous et dessus ; variante en une grande galette de 1 cm, 8 à 10 min par face ; graines et herbes ; service beurre et miel"
  },
  {
   "name": "Christopher Kimball's Milk Street, « Harcha: The Moroccan English Muffin », 2 avril 2018 (décrit aussi la recette de Paula Wolfert, The Food of Morocco)",
   "url": "https://www.177milkstreet.com/stories/harcha-the-moroccan-english-muffin",
   "used_for": "Gras ajouté avant le liquide pour limiter le gluten ; beurre fondu jugé plus lourd et plus gras ; enrobage de semoule chez Paula Wolfert ; harcha servie à Fès avec miel ou confiture et thé à la menthe ; variante au yaourt"
  },
  {
   "name": "Wikipédia (en), « Harcha »",
   "url": "https://en.wikipedia.org/wiki/Harcha",
   "used_for": "Nom arabe حرشة ; origine attribuée au Moyen Atlas ; aussi en Algérie ; servie avec miel, beurre et thé à la menthe au petit-déjeuner ou au goûter, et pendant le ramadan ; babeurre ou yaourt dans le Rif ; en sandwich"
  },
  {
   "name": "Choumicha (site officiel choumicha.ma), « Harcha au lait / Galettes de semoule au lait », copie web.archive.org du 28 juin 2014",
   "url": "https://web.archive.org/web/20140628043026/http://www.choumicha.ma/fr/cuisine/harcha-au-lait-galettes-de-semoule-au-lait.html",
   "used_for": "Contre-vérification : Source marocaine primaire (choumicha.ma ne répond plus : erreur 525 le 6 novembre 2026). Pour 250 g de semoule fine : 8 cl d'huile et de beurre fondu mélangés, 7 g de levure chimique, 1 pincée de levure boulangère, 1 c. à c. de sel, 1 c. à s. de sucre, 20 cl de lait, 2 c. à s. de semoule pour la cuisson ; semoule frottée avec la matière grasse pour en enrober chaque grain, mélange rapide sans travailler la pâte, repos de 20 à 30 min pour que la semoule absorbe le lait, poêle à fond épais saupoudrée de semoule, environ 2 min avant de retourner à la spatule, poêle essuyée entre deux galettes, service avec du miel. Les proportions d'Amour de cuisine sont celles-ci doublées, sauf le lait (25 cl au lieu de 40 cl)."
  },
  {
   "name": "Choumicha, astuces « Pour des Harchas au lait réussies », copie web.archive.org du 20 juin 2025",
   "url": "https://web.archive.org/web/20250620140025/https://www.choumicha.ma/astuces/pour-des-harchas-au-lait-reussies.html",
   "used_for": "Contre-vérification : Ne pas travailler la pâte, seulement la mélanger et laisser la semoule absorber le lait ; passer la pâte dans la semoule avant de la mettre dans la poêle ; essuyer la poêle entre les cuissons pour que la semoule ne brûle pas et ne colle pas ; retourner les galettes avec une spatule plate car elles sont très friables ; pluriel « Harchas »."
  },
  {
   "name": "Choumicha, « Harcha à l'anis au four », copie web.archive.org du 5 octobre 2015",
   "url": "https://web.archive.org/web/20151005210512/http://www.choumicha.ma/recette/895-harcha-a-l-anis-au-four.html",
   "used_for": "Contre-vérification : Seule harcha au four trouvée chez Choumicha : petites pièces passées dans la semoule moyenne, cuites sur une plaque au four à 150 °C. Elle ne correspond pas à la grande harcha au four que Lalla Moulati attribue à Choumicha : cette attribution reste non confirmée."
  },
  {
   "name": "Wikipédia (fr), « Harcha »",
   "url": "https://fr.wikipedia.org/wiki/Harcha",
   "used_for": "Contre-vérification : Contredit l'origine « Moyen Atlas » présentée comme acquise : la dit originaire d'Algérie et introduite à Fès par des boulangers tlemcéniens pendant la colonisation (d'après les Archives marocaines de 1907), présente dans le Moyen Atlas puis répandue dans tout le Maroc (d'après Paula Wolfert). Confirme aussi : harcha grande comme un pneu de camion vendue dans la rue, babeurre ou yaourt dilué dans le Rif, service avec thé à la menthe et miel, consommation pendant le ramadan, texture friable."
  },
  {
   "name": "Wikipédia en darija marocaine (ary), « حرشة »",
   "url": "https://ary.wikipedia.org/wiki/%D8%AD%D8%B1%D8%B4%D8%A9",
   "used_for": "Contre-vérification : Graphie حرشة ; dit la harcha originaire du Moyen Atlas, mais avec les mêmes références que la version anglaise (pas un recoupement indépendant) ; galette de semoule cuite à la poêle, vendue partout, mangée au petit-déjeuner avec du thé ou du café."
  },
  {
   "name": "Christopher Kimball's Milk Street, recette « Moroccan Semolina Flatbreads (Harcha) »",
   "url": "https://www.177milkstreet.com/recipes/moroccan-semolina-flatbreads-harcha",
   "used_for": "Contre-vérification : Rendement : 256 g de semoule pour 8 petites galettes épaisses (de la taille d'un muffin anglais d'après l'article de Milk Street). Recoupe le calcul selon lequel 500 g de semoule donnent nettement plus de 8 galettes de 10 cm (pâte différente, à l'eau bouillante et au yaourt)."
  }
 ],
 "discrepancies": [
  "Semoule : fine dans la pâte chez Bladi.net, Morocco World News, Amour de cuisine et Julie Andrieu ; My Moroccan Food et Cooking with Alia écrivent seulement « semolina ». La semoule moyenne sert à saupoudrer (Julie Andrieu) ou, moitié-moitié avec la fine, à rendre la pâte plus croquante (Amour de cuisine). Retenu : fine dans la pâte, fine ou moyenne pour l'enrobage.",
  "Matière grasse : beurre seul chez My Moroccan Food (75 g mou pour 250 g de semoule), Cooking with Alia (100 g fondu pour 250 g) et Bladi.net (100 g ramolli pour 400 g) ; beurre et huile chez Amour de cuisine, Julie Andrieu et Morocco World News ; surtout de l'huile chez Lalla Moulati. Milk Street préfère du beurre froid coupé à la fourchette et trouve le beurre fondu plus lourd et plus gras. Retenu : beurre mou, dose de My Moroccan Food.",
  "Liquide : lait (My Moroccan Food, Cooking with Alia, Amour de cuisine, Julie Andrieu, Lalla Moulati), eau (Bladi.net), lait et eau (Morocco World News), yaourt (Milk Street), babeurre ou yaourt dans le Rif (Wikipédia). Retenu : lait.",
  "Levure : levure chimique presque partout (1 c. à c. pour 250 g chez My Moroccan Food, ¾ c. à c. chez Cooking with Alia, ½ sachet chez Julie Andrieu, 14 g pour 500 g chez Amour de cuisine, qui ajoute une pincée de levure boulangère) ; aucune chez Bladi.net ; levure fraîche chez Morocco World News. Retenu : levure chimique, dose de My Moroccan Food.",
  "Sucre, ramené à 250 g de semoule : 3 c. à s. (My Moroccan Food), environ 31 g (Bladi.net : 50 g pour 400 g), 2 c. à s. (Cooking with Alia), 1 c. à s. (Julie Andrieu ; Amour de cuisine : 2 c. à s. pour 500 g). Retenu : My Moroccan Food, la plus sucrée avec Bladi.net ; tu peux en mettre moins.",
  "Sel, ramené à 250 g de semoule : ¼ c. à c. (My Moroccan Food, Cooking with Alia), environ ⅓ c. à c. (Bladi.net : ½ c. à c. pour 400 g), 1 c. à c. (Julie Andrieu ; Amour de cuisine : 2 c. à c. pour 500 g). Retenu : My Moroccan Food.",
  "Repos : aucun (Bladi.net, Julie Andrieu), 5 min (Cooking with Alia), 10 min (Milk Street, semoule mouillée d'eau chaude), 20 min (My Moroccan Food), 20 à 30 min (Amour de cuisine), 30 min (Morocco World News, pâte à la levure fraîche). Retenu : 20 min.",
  "Épaisseur et taille : 1 cm chez My Moroccan Food, Bladi.net et Amour de cuisine, 1 cm au plus chez Julie Andrieu, ¼ de pouce (environ 6 mm) ou un peu plus chez Cooking with Alia ; 5 cm de diamètre chez My Moroccan Food (16 pour 250 g de semoule), 10 cm chez Amour de cuisine, une seule grande chez Julie Andrieu. Retenu : 1 cm, et 10 galettes de 10 cm pour 500 g (calcul du volume de la pâte ; avec 8 boules, des galettes de 10 cm auraient 1,2 à 1,3 cm d'épaisseur).",
  "Feu et durée : feu doux, 5 à 10 min par face (Bladi.net) ; feu moyen-doux, 5 min ou plus par face (My Moroccan Food) ; préchauffage à feu moyen puis feu doux, 5 min par face (Cooking with Alia) ; feu moyen et 2 min avant de retourner dans la recette d'Amour de cuisine, mais feu moyen-doux dans ses astuces ; feu moyen, 8 à 10 min par face pour une grande galette (Julie Andrieu) ; feu moyen, 2 min par face à la poêle antiadhésive (Milk Street, version au yaourt). Retenu : feu doux à moyen-doux, environ 5 min par face.",
  "Enrobage de semoule : oui chez My Moroccan Food, chez Paula Wolfert (d'après Milk Street) et chez Julie Andrieu (semoule moyenne dessous et dessus) ; Amour de cuisine saupoudre le plan de travail et prévoit 4 c. à s. de semoule « pour la cuisson », à saupoudrer sur la poêle ; Choumicha saupoudre la poêle et passe la pâte dans la semoule ; Milk Street l'a supprimé pour une finition plus lisse. Retenu : enrobage des deux faces.",
  "Poêle : sèche chez Bladi.net et Julie Andrieu ; beurrée et saupoudrée de semoule pour la version au four de Lalla Moulati. Retenu : poêle sèche.",
  "Contre-vérifiée le 6 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 17 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Choumicha : choumicha.ma ne répond plus (erreur 525, testé le 6 novembre 2026), mais des copies de web.archive.org de sa recette « Harcha au lait / Galettes de semoule au lait » et de ses astuces ont été lues : semoule enrobée d'huile et de beurre fondu, pâte mélangée sans être travaillée, repos de 20 à 30 min pour que la semoule absorbe le lait, poêle saupoudrée de semoule et essuyée entre deux galettes, retournement à la spatule plate. Amour de cuisine reprend ses proportions doublées, sauf le lait (25 cl au lieu de 40 cl). La grande harcha au four que Lalla Moulati lui attribue n'a pas été retrouvée : la « harcha à l'anis au four » de Choumicha est différente (petites pièces sur une plaque, four à 150 °C).",
  "Taste of Maroc (Christine Benlafquih) : toutes ses pages refusent l'outil (erreur 403), et sa recette sur The Spruce Eats n'est pas accessible : non utilisée.",
  "SNRT News (« Recette facile : mini harcha marocaine ») : page refusée (erreur 403), non lue.",
  "Le360 et Femmes du Maroc : aucune recette de harcha trouvée ; la recherche du site Femmes du Maroc ne renvoie qu'un article sans rapport.",
  "Lalla Moulati : la plupart de ses recettes de harcha sont des versions modernes (à l'orange, à l'œuf, au four) ou des vidéos sans texte ; une seule a servi, pour la variante au four.",
  "Origine : Wikipédia en anglais et en darija la disent née dans le Moyen Atlas, avec les mêmes références (livres de Paula Wolfert, de Nargisse Benkabbou et deux guides de voyage, non consultés) ; Wikipédia en français la dit venue d'Algérie avec des boulangers tlemcéniens installés à Fès (d'après les Archives marocaines de 1907, que la version anglaise rattache à un autre pain, le khobz el harcha) ; aucune source marocaine lue ne parle de l'origine.",
  "Cooking with Alia : l'autrice écrit « I share the Moroccan food I grew up with », sans nom complet ni nationalité ; pas comptée parmi les sources marocaines.",
  "Amour de cuisine (Soulef Zaoui) : blog de cuisine algérienne et du monde ; recette classée marocaine par le blog, pas comptée parmi les sources marocaines.",
  "Nombre de galettes : 10 disques de 10 cm sur 1 cm, calculés d'après le volume de la pâte (environ 940 g, au moins 750 cm³, pour 78,5 cm³ par disque) ; le rendement affiché par My Moroccan Food (16 disques de 5 cm sur 1 cm pour 250 g) ne tient pas physiquement (il supposerait une pâte de densité 1,5) ; la taille est celle d'Amour de cuisine ; ce nombre n'a pas été testé en cuisine.",
  "Durées : préparation de 15 min reprise de la fiche d'Amour de cuisine ; cuisson de 30 min estimée (3 fournées d'environ 10 min, selon la taille de ta poêle) ; non chronométrées sur cette recette.",
  "Quantités de miel et de beurre pour le service : aucune source ne les donne, seulement « à parts égales » (My Moroccan Food).",
  "Semoule d'enrobage : My Moroccan Food n'en donne pas la quantité ; les 4 c. à s. viennent d'Amour de cuisine, qui les prévoit « pour la cuisson », à saupoudrer sur la poêle (Choumicha : 2 c. à s. pour 250 g de semoule).",
  "Sens du mot harcha (« rugueuse ») : lu seulement sur le blog Mes Inspirations Culinaires, non recoupé.",
  "Bladi.net : recette sans auteur ni date ; volume du « verre » d'eau non précisé.",
  "Paula Wolfert (The Food of Morocco) : sa recette n'est connue ici que par le résumé de Milk Street ; le livre n'a pas été consulté."
 ],
 "cuisine": "Marocaine",
 "rayon": "Pains",
 "pairs": [
  "the-menthe"
 ],
 "img": "img/harcha.jpg",
 "photo": {
  "author": "Tamorlan",
  "license": "CC BY-SA 3.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/3.0",
  "page": "https://commons.wikimedia.org/wiki/File:Harcha_(Homemade).jpg",
  "modified": "réduite"
 }
});
