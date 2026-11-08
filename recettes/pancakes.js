/* Recette : Pancakes américains moelleux. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "pancakes",
 "title": "Pancakes américains moelleux",
 "darija": "",
 "arabic": "بان كيك",
 "tagline": "Épais, moelleux et dorés : les pancakes du petit-déjeuner américain, servis en pile avec du beurre et du sirop d'érable ou du miel.",
 "category": "Pain et crêpes",
 "occasion": "Petit-déjeuner ou brunch : aux États-Unis, les pancakes sont un plat du matin, servis en pile de deux ou trois (Wikipédia).",
 "region": "États-Unis (et Canada) ; on les appelle aussi hotcakes, griddlecakes ou flapjacks (Wikipédia). En français, on dit parfois « crêpes américaines » (Wikipédia, d'après l'Office québécois de la langue française).",
 "servings": 16,
 "servings_label": "pancakes",
 "time": {
  "prep": 10,
  "cook": 20,
  "rest": 5,
  "rest_label": "Repos"
 },
 "difficulty": "Facile",
 "equipment": [
  "Une balance de cuisine, un verre doseur et des cuillères à mesurer",
  "Deux bols, un grand et un moyen",
  "Un fouet et une spatule souple",
  "Une petite casserole, pour faire fondre le beurre",
  "Une grande poêle antiadhésive, ou une plaque de cuisson",
  "Une petite louche, ou une cuillère doseuse de 4 c. à s. (60 ml)",
  "Une large spatule plate, pour retourner les pancakes",
  "Du papier absorbant, pour graisser la poêle",
  "Une plaque de four, pour garder les pancakes au chaud"
 ],
 "ingredients": [
  {
   "group": "Pâte",
   "items": [
    {
     "id": "farine",
     "q": 240,
     "u": "g",
     "name": "de farine de blé",
     "note": "farine blanche ordinaire",
     "canon": "farine"
    },
    {
     "id": "sucre",
     "q": 2,
     "u": "c. à s.",
     "name": "de sucre en poudre",
     "canon": "sucre"
    },
    {
     "id": "levure",
     "q": 4,
     "u": "c. à c.",
     "name": "de levure chimique",
     "note": "bien fraîche, non périmée",
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
     "id": "oeufs",
     "q": 2,
     "u": "",
     "name": "œuf",
     "pl": "œufs",
     "note": "à température ambiante si possible",
     "canon": "oeuf"
    },
    {
     "id": "lait",
     "q": 355,
     "u": "ml",
     "name": "de lait",
     "canon": "lait"
    },
    {
     "id": "beurre",
     "q": 56,
     "u": "g",
     "name": "de beurre",
     "note": "à faire fondre puis à laisser tiédir (4 c. à s. pour 16 pancakes) ; ou le même volume d'huile neutre",
     "canon": "beurre"
    }
   ]
  },
  {
   "group": "Pour la cuisson",
   "items": [
    {
     "id": "huile",
     "q": null,
     "u": "",
     "name": "huile neutre",
     "note": "ou un peu de beurre, pour graisser la poêle",
     "canon": "huile"
    }
   ]
  },
  {
   "group": "Pour servir",
   "items": [
    {
     "id": "beurre-service",
     "q": null,
     "u": "",
     "name": "beurre",
     "canon": "beurre"
    },
    {
     "id": "sirop-erable",
     "q": null,
     "u": "",
     "name": "sirop d'érable",
     "canon": "sirop-erable"
    },
    {
     "id": "miel",
     "q": null,
     "u": "",
     "name": "miel",
     "note": "ou de la confiture",
     "canon": "miel"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Fais fondre le beurre",
   "text": "Fais fondre {{beurre}} de beurre dans une petite casserole, à feu doux. Retire du feu et laisse tiédir.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Mélange les ingrédients secs",
   "text": "Dans le grand bol, mélange au fouet {{farine}} de farine, {{sucre}} de sucre, {{levure}} de levure chimique et {{sel}} de sel.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Mélange les liquides",
   "text": "Dans l'autre bol, bats {{oeufs:full}} au fouet. Ajoute {{lait}} de lait, puis le beurre fondu tiède, et mélange bien.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Réunis sans trop mélanger",
   "text": "Verse les liquides sur les ingrédients secs. Mélange à la spatule, juste assez pour humidifier toute la farine. La pâte doit rester épaisse, avec quelques petits grumeaux.",
   "timer": null,
   "tip": "Trop mélangée, la pâte donne des pancakes durs et compacts (Betty Crocker, Taste of Home). Si elle est trop épaisse pour couler, ajoute un peu de lait, cuillère par cuillère (Betty Crocker, Land O'Lakes)."
  },
  {
   "phase": "Préparation",
   "title": "Laisse reposer 5 minutes",
   "text": "Laisse reposer la pâte 5 minutes. Pendant ce temps, chauffe la poêle.",
   "timer": {
    "min": 5,
    "label": "Repos de la pâte",
    "done": "La pâte a reposé : vérifie que la poêle est bien chaude."
   },
   "tip": "Le repos hydrate la farine, détend le gluten et laisse la levure commencer à agir : les pancakes sont plus tendres et plus gonflés (Taste of Home). King Arthur laisse même reposer sa pâte 15 minutes."
  },
  {
   "phase": "Cuisson",
   "title": "Chauffe la poêle à feu moyen",
   "text": "Chauffe une grande poêle antiadhésive (ou une plaque) à feu moyen. Elle est prête quand quelques gouttes d'eau y dansent et grésillent.",
   "timer": null,
   "tip": "Sur une plaque électrique réglable : environ 175 à 190 °C (350 °F pour King Arthur et Land O'Lakes, 375 °F pour Betty Crocker)."
  },
  {
   "phase": "Cuisson",
   "title": "Graisse légèrement la poêle",
   "text": "Graisse légèrement la poêle avec un papier absorbant imbibé d'un peu d'{{huile}} ou de beurre. Essuie l'excès.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Verse la pâte",
   "text": "Pour chaque pancake, verse environ 4 cuillères à soupe de pâte (une petite louche). Laisse de l'espace entre les pancakes.",
   "timer": null,
   "tip": "Cela fait environ 60 ml de pâte par pancake (King Arthur, Taste of Home, Land O'Lakes). Des pancakes de même taille cuisent dans le même temps (Betty Crocker)."
  },
  {
   "phase": "Cuisson",
   "title": "Cuis le premier côté",
   "text": "Laisse cuire environ 2 minutes, jusqu'à ce que des bulles se forment et éclatent sur le dessus, que le bord paraisse sec et que le dessous soit doré.",
   "timer": {
    "min": 2,
    "label": "Premier côté",
    "done": "Des bulles éclatent et le bord est sec ? Retourne les pancakes."
   },
   "tip": "Soulève un bord avec la spatule : s'il se détache sans casser et que le dessous est doré, tu peux retourner (Betty Crocker)."
  },
  {
   "phase": "Cuisson",
   "title": "Retourne et termine la cuisson",
   "text": "Retourne chaque pancake d'un geste vif, puis pose-le doucement. Laisse cuire encore 1 à 2 minutes, jusqu'à ce que le second côté soit doré.",
   "timer": null,
   "tip": "Posé doucement, le pancake garde son air et reste gonflé. Bien cuit, il reprend sa forme quand on appuie dessus du doigt ; en cas de doute, coupe-en un (King Arthur)."
  },
  {
   "phase": "Cuisson",
   "title": "Garde-les au chaud",
   "text": "Pose les pancakes cuits sur une plaque, en une seule couche, dans le four allumé à sa température la plus basse.",
   "timer": null,
   "tip": "King Arthur indique environ 200 °F (93 °C), Taste of Home 250 °F (121 °C). Refroidis, les pancakes retombent un peu (King Arthur)."
  },
  {
   "phase": "Cuisson",
   "title": "Continue jusqu'à la fin de la pâte",
   "text": "Regraisse légèrement la poêle et recommence jusqu'à la fin de la pâte. Si les pancakes brunissent trop vite alors que le centre reste cru, baisse un peu le feu.",
   "timer": null,
   "tip": "Le premier pancake rate souvent, quand la poêle n'est pas encore assez chaude : fais un essai avec une petite cuillerée de pâte (Taste of Home)."
  },
  {
   "phase": "Service",
   "title": "Sers en pile",
   "text": "Sers les pancakes bien chauds, en pile de deux ou trois, avec un morceau de {{beurre-service}} et du {{sirop-erable}}, ou du {{miel}}.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Ne mélange pas trop : quelques grumeaux, c'est normal. Une pâte trop travaillée donne des pancakes durs.",
   "source": "Betty Crocker ; Taste of Home ; King Arthur"
  },
  {
   "text": "Un court repos hydrate la farine, détend le gluten et laisse la levure commencer à agir : les pancakes sont plus tendres et plus gonflés.",
   "source": "Taste of Home (5 minutes) ; Betty Crocker (5 à 10 minutes) ; King Arthur (15 minutes)"
  },
  {
   "text": "Un œuf pour 120 g de farine : c'est la règle de King Arthur pour des pancakes bien gonflés, et la dose de Betty Crocker, Taste of Home et Land O'Lakes.",
   "source": "King Arthur (blog) ; Betty Crocker ; Taste of Home ; Land O'Lakes"
  },
  {
   "text": "Teste la poêle avec quelques gouttes d'eau : si elles dansent et grésillent, elle est prête.",
   "source": "King Arthur ; Betty Crocker ; Land O'Lakes"
  },
  {
   "text": "Trop chaude, la poêle brunit le dehors et laisse le cœur cru ; pas assez chaude, les pancakes ne gonflent pas.",
   "source": "Betty Crocker ; King Arthur (cuisson à feu moyen-doux une fois la pâte versée, dans son blog)"
  },
  {
   "text": "Le bon moment pour retourner : des bulles éclatent sur le dessus et laissent de petits trous, et le bord paraît sec.",
   "source": "Betty Crocker ; Taste of Home ; Land O'Lakes ; Fannie Farmer"
  },
  {
   "text": "Retourne d'un geste vif, puis pose le pancake doucement : l'air reste dedans et le rend moelleux.",
   "source": "King Arthur (blog)"
  },
  {
   "text": "Environ 4 c. à s. de pâte (60 ml) par pancake, toujours la même dose : ils ont tous la même taille et cuisent ensemble.",
   "source": "King Arthur ; Taste of Home ; Land O'Lakes ; Betty Crocker"
  },
  {
   "text": "Utilise une levure chimique fraîche, non périmée : c'est elle qui fait lever les pancakes.",
   "source": "Betty Crocker ; Taste of Home (la levure rend les pancakes tendres et gonflés)"
  },
  {
   "text": "Le babeurre réagit avec le bicarbonate et rend les pancakes encore plus légers : beaucoup de restaurants américains en mettent, selon Betty Crocker.",
   "source": "Betty Crocker ; King Arthur ; Wikipédia (le buttermilk pancake est courant aux États-Unis)"
  },
  {
   "text": "Pour servir tout le monde en même temps, garde les pancakes au four tiède, en une seule couche sur une plaque.",
   "source": "King Arthur ; Taste of Home"
  },
  {
   "text": "Aux États-Unis, on les mange au petit-déjeuner, en pile, avec du beurre et du sirop d'érable. Fannie Farmer le conseillait déjà dans son livre de cuisine (édition de 1910).",
   "source": "Wikipédia ; Fannie Farmer, Boston Cooking-School Cook Book ; King Arthur ; Taste of Home"
  }
 ],
 "mistakes": [
  "Trop mélanger la pâte : les pancakes deviennent durs et compacts (Betty Crocker ; Taste of Home ; King Arthur).",
  "Une poêle trop chaude ou pas assez chaude : dehors brun et dedans cru, ou pancakes plats (Betty Crocker).",
  "Retourner trop tôt, avant que les bulles éclatent et que le bord soit sec (Betty Crocker ; Taste of Home ; Fannie Farmer).",
  "Laisser retomber le pancake brutalement en le retournant : l'air s'échappe et il s'aplatit (King Arthur).",
  "Utiliser une levure chimique éventée ou périmée : les pancakes lèvent mal (Betty Crocker).",
  "Goûter la pâte crue : la farine et les œufs crus peuvent contenir des bactéries (FDA, agence sanitaire américaine).",
  "Mettre de l'extrait de vanille : aux États-Unis, il contient au moins 35 % d'alcool (eCFR, règlement américain) ; prends plutôt du sucre vanillé ou de la vanille en poudre, que la même réglementation définit comme de la vanille moulue (ou son oléorésine) mélangée à du sucre ou à un autre support, sans alcool parmi les ingrédients (norme américaine)."
 ],
 "serving": "Bien chauds, en pile de deux ou trois, avec du beurre et du sirop d'érable (Wikipédia ; Fannie Farmer ; King Arthur ; Taste of Home). Autres garnitures classiques : miel, confiture, fruits, sucre glace ou crème fouettée (Wikipédia ; Taste of Home). Aux États-Unis, on les sert souvent avec des œufs (Wikipédia). Restes : la FDA demande de ne pas laisser les plats aux œufs plus de 2 heures hors du réfrigérateur, ou plus d'1 heure s'il fait plus de 32 °C (90 °F). Laisse refroidir les pancakes, puis garde-les dans une boîte hermétique au réfrigérateur 3 jours au plus (Taste of Home ; Food Hero, de l'université d'État de l'Oregon, dit 2 jours ; la FDA, 3 à 4 jours pour les plats aux œufs). Ils se congèlent jusqu'à 3 mois, séparés par du papier cuisson (Taste of Home ; Betty Crocker dit plutôt 1 à 2 mois) ; King Arthur précise qu'on peut les congeler le jour même. Réchauffe-les au four à environ 175 °C (350 °F), 5 minutes s'ils sortent du réfrigérateur et 10 minutes s'ils sont congelés (Taste of Home), ou au micro-ondes (Betty Crocker), jusqu'à ce qu'ils soient bien chauds à cœur (FDA : 74 °C pour les plats aux œufs).",
 "variants": [
  "Au babeurre, la recette de King Arthur : 240 g de farine, 35 g de sucre (3 c. à s.), 1 c. à c. de levure chimique, 1 c. à c. de bicarbonate de soude, ½ c. à c. de sel, 1 gros œuf, environ 475 ml de babeurre (454 g) et 28 g de beurre fondu (2 c. à s.) ; repos de 15 minutes ; 14 à 16 pancakes d'environ 10 cm. King Arthur ajoute en option de l'extrait de vanille : remplace-le par du sucre vanillé ou de la vanille en poudre.",
  "Babeurre à la place du lait, version Betty Crocker : pour 120 g de farine, environ 235 ml de babeurre au lieu d'environ 175 ml de lait, 1 c. à c. de levure chimique au lieu de 3, et ½ c. à c. de bicarbonate de soude.",
  "Sans babeurre sous la main : mets 1 c. à s. de vinaigre ou de jus de citron dans un verre doseur, complète avec du lait jusqu'à environ 235 ml et laisse reposer 5 minutes (Land O'Lakes). King Arthur propose aussi un mélange d'un tiers de yaourt grec nature et de deux tiers de lait.",
  "Extra moelleux : sépare les œufs, mets les jaunes dans les liquides, bats les blancs en neige (King Arthur en ajoute un de plus) et incorpore-les délicatement juste avant la cuisson (King Arthur).",
  "Aux myrtilles : incorpore délicatement des myrtilles fraîches, ou surgelées puis décongelées (Land O'Lakes : environ 235 ml de myrtilles pour 120 g de farine). Iowa State University conseille de décongeler et d'égoutter les myrtilles surgelées, puis d'y mélanger un peu de farine (2 c. à c. pour sa recette).",
  "À la farine complète : Betty Crocker accepte la farine complète à la place de la farine blanche ; Iowa State University en fait des pancakes aux myrtilles au lait écrémé, cuits à feu moyen-doux, environ 4 minutes puis 3 minutes.",
  "À l'ancienne, au lait aigre (Fannie Farmer, Boston Cooking-School Cook Book) : 300 g de farine, ½ c. à c. de sel, 1 ¼ c. à c. de bicarbonate, environ 475 ml de lait aigre et 1 œuf, sans sucre ni beurre ; servis avec du beurre et du sirop d'érable.",
  "Très hauts, dans des cercles : King Arthur verse environ 80 ml de pâte dans des cercles à muffins anglais d'environ 10 cm graissés, puis cuit environ 1 minute à feu moyen et 4 à 5 minutes à feu doux avant de retourner.",
  "À l'huile : Betty Crocker et King Arthur acceptent l'huile neutre à la place du beurre fondu.",
  "Parfum vanille : King Arthur met en option 1 ½ c. à c. d'extrait de vanille, qui contient de l'alcool (au moins 35 % selon la norme américaine). Prends à la place du sucre vanillé ou de la vanille en poudre, selon le goût (aucune source ne donne la dose)."
 ],
 "sources": [
  {
   "name": "King Arthur Baking (Charlotte Rutledge), « Buttermilk Pancakes », mise à jour le 27 octobre 2025",
   "url": "https://www.kingarthurbaking.com/recipes/buttermilk-pancakes-recipe",
   "used_for": "2 cups (240 g) de farine, 3 c. à s. (35 g) de sucre, 1 c. à c. de levure chimique, 1 c. à c. de bicarbonate, ½ c. à c. de sel, 1 gros œuf, 2 cups (454 g) de babeurre, 2 c. à s. (28 g) de beurre fondu ou d'huile, extrait de vanille en option ; 14 à 16 pancakes de 10 cm ; 10 minutes de travail, 45 minutes au total ; quelques grumeaux acceptés ; repos de 15 minutes ; poêle à feu moyen ou plaque à 350 °F, une goutte d'eau doit y glisser ; graisser au beurre ou à l'huile ; 1/4 de cup de pâte ; 1 à 2 minutes jusqu'aux bulles et au dessous doré, puis 1 à 2 minutes ; servir aussitôt ou garder au four tiède ; restes congelés le jour même et réchauffés à 250 °F ; substitut du babeurre au yaourt grec et au lait ; blancs battus en neige pour des pancakes extra moelleux."
  },
  {
   "name": "King Arthur Baking (Kye Ameden), « How to make fluffy pancakes », 21 janvier 2019",
   "url": "https://www.kingarthurbaking.com/blog/2019/01/21/how-to-make-fluffy-pancakes",
   "used_for": "Un œuf par cup de farine ; ne pas trop mélanger ; blancs battus et incorporés ; plaque à 325-350 °F ou poêle préchauffée 3 à 5 minutes, puis feu moyen-doux (275-300 °F) une fois la pâte versée ; portions de 1/4 de cup ; retourner d'un geste vif quand le dessous est doré, poser doucement pour garder l'air ; pancake cuit : il reprend sa forme sous le doigt, on peut en couper un ; cercles de 10 cm et 1/3 de cup de pâte, 4 à 5 minutes à feu doux ; garder au chaud en une seule couche au four, vers 200 °F."
  },
  {
   "name": "King Arthur Baking, « Ingredient Weight Chart » (tableau des poids des ingrédients)",
   "url": "https://www.kingarthurbaking.com/learn/ingredient-weight-chart",
   "used_for": "Conversions : 1 cup de farine tout usage = 120 g ; 8 c. à s. de beurre (1/2 cup) = 113 g ; 1 cup de babeurre ou de lait = 227 g ; 1 cup de sucre = 198 g ; 1 gros œuf = 50 g ; 1 c. à c. de levure chimique = 4 g."
  },
  {
   "name": "Betty Crocker Kitchens (General Mills), « Fluffy Homemade Pancakes », publiée le 12 décembre 2000, modifiée le 20 novembre 2024",
   "url": "https://www.bettycrocker.com/recipes/fluffy-homemade-pancakes/77a89da1-fd56-494b-874a-55f9195c1413",
   "used_for": "1 œuf, 1 cup de farine, 1 c. à s. de sucre, 3 c. à c. de levure chimique, 1/4 de c. à c. de sel, 3/4 de cup de lait, 2 c. à s. d'huile ou de beurre fondu ; 9 pancakes ; 15 minutes ; pâte un peu grumeleuse, ne pas trop mélanger (pancakes durs), un peu de lait en plus pour une pâte plus fine ; plaque à feu moyen-vif (375 °F), test des gouttes d'eau qui sautent ; un peu moins de 1/4 de cup par pancake, des cercles de même taille ; 2 à 3 minutes jusqu'aux bulles et au bord sec, puis retourner ; bulles qui éclatent, bord qui se décolle sans casser ; repos de 5 à 10 minutes ; trop chaud : brun dehors et cru dedans, pas assez : pas de levée ; levure et bicarbonate frais ; variante au babeurre (1 cup de babeurre, 1 c. à c. de levure, 1/2 c. à c. de bicarbonate) ; farine complète ; réchauffage au micro-ondes."
  },
  {
   "name": "Taste of Home, « Pancakes » (recette d'Eugene Presley, testée par la Test Kitchen de Taste of Home), mise à jour le 17 juillet 2024",
   "url": "https://www.tasteofhome.com/recipes/fluffy-pancakes/",
   "used_for": "1 cup de farine, 1 c. à s. de sucre, 2 c. à c. de levure chimique, 1/2 c. à c. de sel, 1 gros œuf à température ambiante, 3/4 de cup de lait demi-écrémé, 1/4 de cup de graisse végétale ou de beurre fondu ; 8 pancakes ; 15 minutes ; mélanger juste assez ; repos d'environ 5 minutes (hydratation, gluten détendu, levure activée) ; 1/4 de cup sur une plaque chaude graissée ; retourner quand le dessous est doré et que les bulles éclatent ; pancake d'essai ; garder au chaud au four à 250 °F ; 3 jours au réfrigérateur en boîte hermétique, 3 mois au congélateur avec du papier cuisson ; réchauffage au four à 350 °F, 5 minutes (réfrigérateur) ou 10 minutes (congélateur)."
  },
  {
   "name": "Land O'Lakes (coopérative laitière américaine), « Favorite Buttermilk Pancakes », 4 février 2025",
   "url": "https://www.landolakes.com/recipe/7578/favorite-buttermilk-pancakes/",
   "used_for": "1 cup de farine, 1 cup de babeurre, 1 gros œuf, 3 c. à s. de beurre fondu, 2 c. à s. de sucre, 2 c. à c. de levure chimique, 1/4 de c. à c. de sel ; 8 pancakes ; pâte épaisse, 1 à 2 c. à s. de lait si elle l'est trop ; plaque légèrement graissée à 350 °F, gouttes d'eau qui grésillent ; 1/4 de cup étalé en cercle de 10 cm ; 2 à 3 minutes jusqu'aux bulles, puis 1 à 2 minutes ; servi avec du beurre et du sirop ; babeurre remplacé par 1 c. à s. de vinaigre ou de jus de citron et du lait jusqu'à 1 cup, 5 minutes ; variante aux myrtilles (1 cup)."
  },
  {
   "name": "Fannie Merritt Farmer, The Boston Cooking-School Cook Book (impression de 1910, copyright 1896-1906), Project Gutenberg n° 65061",
   "url": "https://www.gutenberg.org/ebooks/65061",
   "used_for": "Sour Milk Griddle-cakes : 2 ½ cups de farine, ½ c. à c. de sel, 2 cups de lait aigre, 1 ¼ c. à c. de bicarbonate, 1 œuf ; par cuillerées sur une plaque chaude graissée, retourner quand ils sont gonflés, pleins de bulles et cuits sur les bords ; servis avec du beurre et du sirop d'érable. Sweet Milk Griddle-cakes : 3 cups de farine, 1 ½ c. à s. de levure chimique, 1 c. à c. de sel, 1/4 de cup de sucre, 2 cups de lait, 1 œuf, 2 c. à s. de beurre fondu. Texte : https://www.gutenberg.org/cache/epub/65061/pg65061.txt"
  },
  {
   "name": "Iowa State University Extension and Outreach, Spend Smart Eat Smart, « Blueberry Pancakes », publiée le 19 septembre 2017, modifiée le 14 juin 2024",
   "url": "https://spendsmart.extension.iastate.edu/recipe/blueberry-pancakes/",
   "used_for": "Pancakes aux myrtilles à la farine complète et au lait écrémé : 1/4 de cup de pâte par pancake, poêle à feu moyen-doux, environ 4 minutes jusqu'aux bulles et au bord un peu sec, puis environ 3 minutes ; myrtilles surgelées décongelées, égouttées, avec 2 c. à c. de farine complète (variantes seulement)."
  },
  {
   "name": "Wikipedia (anglais), article « Pancake », section « United States and Canada », consulté le 8 novembre 2026",
   "url": "https://en.wikipedia.org/wiki/Pancake",
   "used_for": "Aussi appelés hotcakes, griddlecakes ou flapjacks ; plat du petit-déjeuner, en pile de deux ou trois, avec du sirop d'érable et du beurre, souvent avec des œufs ; autres garnitures : confiture, fruits, miel, sucre glace, crème fouettée ; pâte épaisse avec œufs, farine, lait et levure chimique ; le buttermilk pancake est courant aux États-Unis."
  },
  {
   "name": "Wikipédia (français), article « Pancake », consulté le 8 novembre 2026",
   "url": "https://fr.wikipedia.org/wiki/Pancake",
   "used_for": "Aussi appelé « crêpe américaine » (Office québécois de la langue française) ; crêpe épaisse de petit diamètre, épaissie par un agent levant ; servie au petit-déjeuner en Amérique du Nord, avec sirop d'érable, confiture, miel ou beurre."
  },
  {
   "name": "Wikipédia (arabe), article « فطيرة محلاة », consulté le 8 novembre 2026",
   "url": "https://ar.wikipedia.org/wiki/%D9%81%D8%B7%D9%8A%D8%B1%D8%A9_%D9%85%D8%AD%D9%84%D8%A7%D8%A9",
   "used_for": "Noms arabes du pancake : « الفطيرة المحلاة », « البنكيكة » ; ses références emploient « بان كيك »."
  },
  {
   "name": "Mawdoo3 (encyclopédie en ligne en arabe), « طريقة البان كيك الأمريكي »",
   "url": "https://mawdoo3.com/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%A7%D9%84%D8%A8%D8%A7%D9%86_%D9%83%D9%8A%D9%83_%D8%A7%D9%84%D8%A3%D9%85%D8%B1%D9%8A%D9%83%D9%8A",
   "used_for": "Nom arabe « البان كيك » pour le pancake américain (titre de l'article)."
  },
  {
   "name": "FDA (agence sanitaire américaine), « Handling Flour Safely: What You Need to Know », contenu à jour au 5 mars 2024 (relue directement le 8 novembre 2026 par la contre-vérification : la page répond normalement)",
   "url": "https://www.fda.gov/food/buy-store-serve-safe-food/handling-flour-safely-what-you-need-know",
   "used_for": "Ne jamais manger ni goûter une farine, une pâte ou une pâte liquide crues (Salmonella, E. coli ; œufs crus) ; seule la cuisson rend ces aliments sûrs ; se laver les mains à l'eau et au savon."
  },
  {
   "name": "FDA, « What You Need to Know About Egg Safety », contenu à jour au 5 mars 2024 (relue directement le 8 novembre 2026 par la contre-vérification : la page répond normalement)",
   "url": "https://www.fda.gov/food/buy-store-serve-safe-food/what-you-need-know-about-egg-safety",
   "used_for": "Plats aux œufs : pas plus de 2 heures hors du réfrigérateur (1 heure au-dessus de 90 °F), restes à consommer sous 3 à 4 jours, réchauffés à 165 °F (74 °C, conversion calculée) ; œufs gardés au réfrigérateur à 40 °F ou moins."
  },
  {
   "name": "eCFR (règlement fédéral américain), 21 CFR 169.175 « Vanilla extract »",
   "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-169/subpart-B/section-169.175",
   "used_for": "L'extrait de vanille contient au moins 35 % d'alcool éthylique en volume : d'où son remplacement par du sucre vanillé ou de la vanille en poudre."
  },
  {
   "name": "NIST (institut américain des normes), « Metric Kitchen: Cooking Measurement Equivalencies », mise à jour le 29 avril 2026, et « Approximate Conversions from U.S. Customary Measures to Metric », mise à jour le 6 février 2026",
   "url": "https://www.nist.gov/pml/owm/metric-si/metric-kitchen/metric-kitchen-cooking-measurement-equivalencies",
   "used_for": "Équivalences pour la cuisine : 1 c. à c. = 5 ml, 1 c. à s. = 15 ml, 1/4 de cup = 60 ml, 3/4 de cup = 180 ml, 1 cup = 240 ml ; valeurs précises : 1 teaspoon = 4,93 ml, 1 tablespoon = 14,79 ml, 1 fluid ounce = 29,57 ml (https://www.nist.gov/pml/owm/metric-si/unit-conversion/approximate-conversions-us-customary-measures-metric)."
  },
  {
   "name": "Food Hero (Oregon State University Extension), « Favorite Pancakes (with eggs) » (lue le 8 novembre 2026)",
   "url": "https://foodhero.org/recipes/favorite-pancakes-eggs",
   "used_for": "Contre-vérification : Source universitaire américaine non citée, proportions proches de celles retenues : 1 ¼ cup de farine, 1 c. à s. de levure chimique, 1 c. à s. de sucre, ¼ c. à c. de sel, 1 œuf, 1 cup de lait, 2 c. à s. d'huile ; 8 pancakes de 4 pouces ; feu moyen-vif ou 350 °F, gouttes d'eau qui sautillent ; environ ¼ de cup par pancake ; retourner quand des bulles montent et que le bord paraît sec ; se laver les mains ; restes au réfrigérateur 2 jours au plus."
  },
  {
   "name": "eCFR, 21 CFR 101.9 (b)(5)(viii), étiquetage nutritionnel (lu le 8 novembre 2026)",
   "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-101/subpart-A/section-101.9",
   "used_for": "Contre-vérification : Seconde source officielle des arrondis de cuisine : « a teaspoon means 5 milliliters (mL), a tablespoon means 15 mL, a cup means 240 mL, 1 fl oz means 30 mL, and 1 oz in weight means 28 g »."
  },
  {
   "name": "eCFR, 21 CFR 169.179 « Vanilla powder » (lu le 8 novembre 2026)",
   "url": "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-B/part-169/subpart-B/section-169.179",
   "used_for": "Contre-vérification : La vanille en poudre est de la vanille moulue ou de l'oléorésine de vanille mélangée à du sucre (ou dextrose, lactose, amidon…) ; avec du sucre, elle peut s'appeler « vanilla sugar ». Aucun alcool parmi les ingrédients : appuie le remplacement de l'extrait par du sucre vanillé ou de la vanille en poudre."
  },
  {
   "name": "Gold Medal (General Mills), « Gold Medal All Purpose Flour », page produit (lue le 8 novembre 2026)",
   "url": "https://www.goldmedalflour.com/products/all-purpose-flour",
   "used_for": "Contre-vérification : Farine des recettes Betty Crocker : portion de 1/4 de cup = 30 g, soit 120 g la cup, farine versée à la cuillère puis arasée ; la même page compte aussi « 3 1/3 cups of flour per pound », soit environ 136 g la cup (calcul python)."
  },
  {
   "name": "Santé publique France, « Syndrome hémolytique et urémique pédiatrique : les mesures de prévention face aux risques de l'été », 19 juillet 2022 (lu le 8 novembre 2026)",
   "url": "https://www.santepubliquefrance.fr/les-actualites/syndrome-hemolytique-et-uremique-pediatrique-les-mesures-de-prevention-face-aux-risques-de-lete",
   "used_for": "Contre-vérification : Source officielle française qui recoupe la FDA : « Les préparations à base de farine (pizza/pâte à cookies/gâteau/tarte/crêpe...) ne doivent pas être consommées crues ou peu cuites » ; restes rapidement au réfrigérateur et bien réchauffés."
  },
  {
   "name": "LalaMoulati (site marocain de cuisine), recherche interne « بان كيك » (lue le 8 novembre 2026)",
   "url": "https://www.lalamoulati.net/?s=%D8%A8%D8%A7%D9%86+%D9%83%D9%8A%D9%83",
   "used_for": "Contre-vérification : Source marocaine pour le nom arabe : titres « بان كيك », « البان كيك », « بان كيك بلفريز وكريم فريش »."
  }
 ],
 "discrepancies": [
  "Conversions (python3 -I) : 1 cup américaine = 8 fl oz = 236,6 ml (NIST : 29,57 ml par fl oz ; le NIST arrondit à 240 ml pour la cuisine) ; 1 tablespoon = 14,8 ml et 1 teaspoon = 4,9 ml, soit 1,4 % de moins que la c. à s. de 15 ml et la c. à c. de 5 ml : les cuillères sont reprises telles quelles. Farine : 1 cup = 120 g (King Arthur ; sa recette dit 240 g pour 2 cups, son blog 241 g). Lait : 1 ½ cup = 354,9 ml, arrondi à 355 ml (360 ml avec l'arrondi du NIST). Beurre : 4 c. à s. = 56 g (King Arthur : 28 g pour 2 c. à s. ; 113 g pour 8 c. à s.). Portion : 1/4 de cup = 59 ml, soit 4 c. à s. (environ 60 ml). Variantes, arrondies à 5 ml près : 1 cup = 235 ml, 3/4 de cup = 175 ml, 2 cups = 475 ml ; 1/3 de cup = 79 ml, soit environ 80 ml ; 2 ½ cups de farine = 300 g.",
  "Lait ou babeurre : Betty Crocker, Taste of Home et la recette « sweet milk » de Fannie Farmer utilisent du lait ; King Arthur, Land O'Lakes et la recette « sour milk » de Fannie Farmer du babeurre ou du lait aigre. Retenu : le lait, plus facile à trouver ; le babeurre est donné en variante.",
  "Proportions par cup de farine (calcul python) : sucre 1 c. à s. (Betty Crocker, Taste of Home), 1 ⅓ (Fannie Farmer), 1 ½ (King Arthur), 2 (Land O'Lakes) ; retenu 1 c. à s., médiane des recettes au lait. Levure chimique : 3 c. à c. (Betty Crocker), 2 (Taste of Home, Land O'Lakes), 1 ½ (Fannie Farmer) ; retenu 2, médiane des recettes sans bicarbonate. Sel : 1/4 de c. à c. (Betty Crocker, Land O'Lakes, King Arthur), 1/3 (Fannie Farmer), 1/2 (Taste of Home) ; retenu 1/4, médiane et majorité.",
  "Œufs : 1 par cup de farine (Betty Crocker, Taste of Home, Land O'Lakes, règle du blog King Arthur) ; 1/2 (recette King Arthur), 1/3 (Fannie Farmer). Retenu : 1 par cup, soit 2.",
  "Lait : 3/4 de cup par cup de farine (Betty Crocker, Taste of Home), 2/3 (Fannie Farmer). Retenu : 3/4, soit 355 ml pour 2 cups. Le blog King Arthur en fait une règle pour toute recette : autant de liquide que de farine en volume (le double en poids) ; Food Hero met 4/5 de cup de lait par cup de farine. La pâte retenue est donc un peu plus épaisse : si elle ne coule pas, ajoute un peu de lait (Betty Crocker, Land O'Lakes).",
  "Beurre : 1 c. à s. par cup (King Arthur), 2 (Betty Crocker), 3 (Land O'Lakes), 4 (Taste of Home), 2/3 (Fannie Farmer). Retenu : 2 c. à s. par cup, médiane des recettes au lait (la médiane de toutes les recettes est 1,5), soit 56 g pour 2 cups.",
  "Repos : aucun (Land O'Lakes ; Fannie Farmer dit même de cuire tout de suite, sinon il faut plus de levure), environ 5 minutes (Taste of Home), 5 à 10 minutes (Betty Crocker), 15 minutes (King Arthur). Retenu : 5 minutes.",
  "Chaleur : plaque à 350 °F (King Arthur, Land O'Lakes) ou 375 °F (Betty Crocker), soit 177 et 191 °C (calcul python) ; poêle à feu moyen (recette King Arthur) ou moyen-vif (Betty Crocker) ; le blog King Arthur préchauffe fort puis baisse à feu moyen-doux. Retenu : feu moyen, avec le test des gouttes d'eau (King Arthur, Betty Crocker, Land O'Lakes).",
  "Premier côté : 1 à 2 minutes (King Arthur), 2 à 3 minutes (Betty Crocker, Land O'Lakes), environ 4 minutes à feu moyen-doux (Iowa State, farine complète). Retenu : environ 2 minutes, durée commune à King Arthur, Betty Crocker et Land O'Lakes, avec les signes visuels. Second côté : 1 à 2 minutes (King Arthur, Land O'Lakes).",
  "Rendement : 8 pancakes par cup de farine (Taste of Home, Land O'Lakes), 9 (Betty Crocker), 7 à 8 (King Arthur : 14 à 16 pour 2 cups). Retenu : 16 pancakes pour 2 cups (médiane : 8 par cup).",
  "Four pour garder au chaud : environ 200 °F, soit 93 °C (blog King Arthur) ou 250 °F, soit 121 °C (Taste of Home) ; les deux valeurs sont données.",
  "Temps : 10 minutes de préparation (King Arthur, Land O'Lakes) ; 20 minutes de cuisson, déduites des temps de King Arthur (45 minutes au total, moins 10 minutes de travail et 15 de repos) ; 5 minutes de repos.",
  "Halal : l'extrait de vanille en option chez King Arthur (au moins 35 % d'alcool selon l'eCFR) n'est pas repris ; sucre vanillé ou vanille en poudre en variante. La graisse végétale (shortening) de Taste of Home est remplacée par le beurre, comme le propose la recette. Le bacon et les saucisses cités par Wikipédia pour le service ne sont pas repris.",
  "Nom arabe : « بان كيك » (Mawdoo3 ; références de Wikipédia en arabe) ; le titre de l'article de Wikipédia en arabe est « فطيرة محلاة ».",
  "Contre-vérifiée le 8 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 13 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Nom en darija : aucun trouvé dans une source marocaine, laissé vide. Le nom arabe vient de Mawdoo3 (site jordanien) et de Wikipédia en arabe ; le site marocain LalaMoulati emploie aussi « بان كيك » et « البان كيك » dans ses titres de recettes (contre-vérification). Dans le corpus de darija DODa, « pancakes » traduit le baghrir ou le msemen, pas le pancake américain.",
  "Équivalence entre la baking powder américaine et la levure chimique vendue au Maroc ou en France : non vérifiée.",
  "Équivalence entre la farine tout usage américaine (King Arthur : 11,7 % de protéines) et les farines marocaines ou françaises : non vérifiée. King Arthur prévient qu'une farine moins riche en protéines peut demander un peu plus de farine.",
  "Poids d'une cup de farine : 120 g chez King Arthur et sur l'étiquette de la farine Gold Medal, celle des recettes Betty Crocker (1/4 de cup = 30 g, farine versée à la cuillère puis arasée) ; mais Gold Medal compte aussi 3 1/3 cups par livre, soit environ 136 g la cup : le poids dépend de la façon de remplir la tasse. Les données de l'USDA n'ont pas été consultées.",
  "Disponibilité au Maroc du babeurre et du sirop d'érable : non vérifiée.",
  "Durée de conservation des pancakes au réfrigérateur : 3 jours chez Taste of Home, 2 jours chez Food Hero (université d'État de l'Oregon), 3 à 4 jours pour les plats aux œufs selon la FDA ; aucune source officielle propre aux pancakes.",
  "Dose de sucre vanillé ou de vanille en poudre pour remplacer l'extrait de vanille : aucune source ne la donne.",
  "Sites non consultés : Allrecipes, Martha Stewart, Simply Recipes, Serious Eats, Bon Appétit, Epicurious et NYT Cooking (leur robots.txt interdit Claude) ; Food Network, Food.com, FSIS et FoodSafety.gov (USDA), CDC (erreur 403) ; MyPlate (USDA), adresse introuvable.",
  "FDA : lors de la recherche, le téléchargement direct des deux pages tombait sur une page de détection d'abus et elles ont été lues par un autre outil ; à la contre-vérification du 8 novembre 2026, elles ont répondu normalement (code 200, robots.txt sans interdiction) et tout ce qui leur est attribué a été confirmé."
 ],
 "cuisine": "Américaine",
 "rayon": "D'ailleurs",
 "rayons": [
  "D'ailleurs",
  "Douceurs"
 ],
 "img_alt": "Pile de pancakes américains nappés de sirop d'érable",
 "img": "img/pancakes.jpg",
 "photo": {
  "author": "Brandon0504",
  "license": "CC BY-SA 4.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/4.0",
  "page": "https://commons.wikimedia.org/wiki/File:WS_East_Didsbury_American_style_pancakes.jpg",
  "modified": "réduite"
 }
});
