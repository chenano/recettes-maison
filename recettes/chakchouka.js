/* Recette : Chakchouka à la marocaine. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "chakchouka",
 "title": "Chakchouka à la marocaine",
 "darija": "Chakchouka",
 "arabic": "شكشوكة",
 "tagline": "Des poivrons verts grillés et des tomates mijotés à l'ail, au cumin et au paprika, avec des œufs cuits dessus. On la mange bien chaude, dans la poêle, avec du pain.",
 "category": "Plat",
 "occasion": "Petit-déjeuner, dîner ou plat simple (vite fait avec des poivrons crus) ; Rachida la dit aussi très appréciée pendant le Ramadan. Sans œufs, elle se sert en salade cuite.",
 "region": "Tout le Maghreb. Au Maroc, le nom désigne la poêlée de poivrons verts et de tomates à l'ail, mangée seule en salade cuite ou chaude avec des œufs (Wikipédia FR, section Maroc ; forum Yabiladi).",
 "servings": 4,
 "servings_label": "personnes",
 "time": {
  "prep": 25,
  "cook": 25,
  "rest": 0
 },
 "difficulty": "Facile",
 "equipment": [
  "Gazinière (sinon, four en position gril et une plaque)",
  "Sac en plastique propre (type sac de congélation)",
  "Grande poêle profonde avec couvercle",
  "Râpe",
  "Planche et couteau",
  "Cuillère en bois"
 ],
 "ingredients": [
  {
   "group": "Légumes",
   "items": [
    {
     "id": "poivrons",
     "q": 3,
     "u": "",
     "name": "poivron vert",
     "pl": "poivrons verts",
     "note": "à griller sans les couper",
     "round": "up",
     "canon": "poivron-vert"
    },
    {
     "id": "tomates",
     "q": 400,
     "u": "g",
     "name": "de tomates bien mûres",
     "note": "à râper",
     "canon": "tomate"
    },
    {
     "id": "oignon",
     "q": 1,
     "u": "",
     "name": "oignon",
     "pl": "oignons",
     "note": "à hacher",
     "canon": "oignon"
    },
    {
     "id": "ail",
     "q": 2,
     "u": "",
     "name": "gousse d'ail",
     "pl": "gousses d'ail",
     "note": "à hacher",
     "canon": "ail"
    }
   ]
  },
  {
   "group": "Cuisson et épices",
   "items": [
    {
     "id": "huile",
     "q": 3,
     "u": "c. à s.",
     "name": "d'huile d'olive",
     "canon": "huile-olive"
    },
    {
     "id": "sel",
     "q": 1,
     "u": "c. à c.",
     "name": "de sel",
     "note": "à ajuster en goûtant",
     "canon": "sel"
    },
    {
     "id": "paprika",
     "q": 1,
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
     "id": "poivre",
     "q": 1,
     "u": "pincée",
     "name": "de poivre noir moulu",
     "canon": "poivre"
    }
   ]
  },
  {
   "group": "Œufs et service",
   "items": [
    {
     "id": "oeufs",
     "q": 4,
     "u": "",
     "name": "œuf",
     "pl": "œufs",
     "note": "un par personne",
     "canon": "oeuf"
    },
    {
     "id": "persil",
     "q": 2,
     "u": "c. à s.",
     "name": "de persil plat haché",
     "note": "ou de coriandre",
     "canon": "persil"
    },
    {
     "id": "huile-service",
     "q": null,
     "u": "",
     "name": "huile d'olive",
     "note": "un filet, pour servir",
     "canon": "huile-olive"
    },
    {
     "id": "khobz",
     "q": null,
     "u": "",
     "name": "pain (khobz)",
     "note": "pour saucer",
     "canon": "khobz"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Grille les poivrons",
   "text": "Grille {{poivrons:full}} directement sur la flamme du gaz, en tournant souvent, jusqu'à ce que la peau soit noircie de tous les côtés. Sans gaz, utilise le gril du four, sur une plaque, en tournant régulièrement.",
   "timer": null,
   "tip": "Rachida les grille aussi au four, en position gril, à 200 °C."
  },
  {
   "phase": "Préparation",
   "title": "Enferme-les dans un sac",
   "text": "Glisse les poivrons encore chauds dans un sac en plastique, ferme-le et attends 15 minutes. La vapeur décolle la peau.",
   "timer": {
    "min": 15,
    "label": "Poivrons dans le sac",
    "done": "Les poivrons ont tiédi : tu peux les peler."
   }
  },
  {
   "phase": "Préparation",
   "title": "Pèle et coupe les poivrons",
   "text": "Retire la peau brûlée avec les doigts, sans passer les poivrons sous l'eau. Enlève la queue et les graines, puis coupe la chair en petits dés.",
   "timer": null,
   "tip": "Rince-toi les mains plutôt que les poivrons : ils gardent leur goût fumé."
  },
  {
   "phase": "Préparation",
   "title": "Prépare tomates, oignon, ail et persil",
   "text": "Coupe {{tomates}} de tomates en deux et râpe la chair ; jette la peau. Hache {{oignon:full}} et {{ail:full}}. Lave et hache le persil.",
   "timer": null,
   "tip": "Tu peux aussi peler les tomates, les épépiner et les couper en petits dés, comme Rachida.",
   "img": {
    "src": "img/etapes/tomate-rapee.jpg",
    "alt": "Tomate râpée sur une râpe",
    "caption": "Râper la tomate",
    "w": 1000,
    "h": 667,
    "credit": "Photo de l'étape « Prépare tomates, oignon, ail et persil » : Another Pint Please..., Flickr, licence CC BY-NC-SA 2.0 (réduite)."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Fais fondre l'oignon",
   "text": "Dans une grande poêle profonde, chauffe {{huile}} d'huile d'olive à feu doux. Ajoute l'oignon et remue jusqu'à ce qu'il devienne translucide.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Ajoute l'ail et les poivrons",
   "text": "Ajoute l'ail et remue quelques secondes, sans le laisser dorer. Ajoute les dés de poivrons et remue 1 minute.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Assaisonne",
   "text": "Ajoute {{sel}} de sel, {{paprika}} de paprika, {{cumin}} de cumin et {{poivre}} de poivre noir. Mélange bien.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Fais mijoter les tomates",
   "text": "Ajoute les tomates râpées et mélange. Laisse mijoter à feu doux, en remuant souvent pour que rien n'attache, jusqu'à obtenir une compotée épaisse, presque sans jus. Goûte et rectifie le sel.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Casse les œufs",
   "text": "Fais un petit creux dans la sauce pour chaque œuf. Casse {{oeufs:full}} dedans, comme pour des œufs au plat.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Couvre et laisse prendre",
   "text": "Couvre la poêle et laisse cuire à feu doux environ 5 minutes, jusqu'à ce que les blancs soient bien pris. Pour un jaune bien cuit, laisse 2 à 3 minutes de plus, jusqu'à ce qu'il soit ferme.",
   "timer": {
    "min": 5,
    "label": "Œufs à couvert",
    "done": "Les blancs sont-ils bien pris ? Pour un jaune ferme, compte encore 2 à 3 minutes."
   },
   "tip": "La FDA conseille de cuire les œufs jusqu'à ce que le jaune et le blanc soient fermes. Fais-le toujours pour les enfants, les personnes âgées, les femmes enceintes et les personnes fragiles : ce sont eux qui risquent le plus une salmonellose grave (FDA)."
  },
  {
   "phase": "Service",
   "title": "Sers aussitôt",
   "text": "Retire du feu. Parsème de {{persil}} de persil haché et arrose d'un filet d'{{huile-service}}. Sers tout de suite dans la poêle, avec du {{khobz}} pour saucer.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Au Maroc, on préfère les poivrons grillés, pour leur goût fumé. Pressé ? Coupe-les crus en petits dés et fais-les fondre avec l'oignon : ça marche aussi.",
   "source": "Rachida (Gâteau et cuisine Rachida) ; forum Yabiladi (2006) pour les deux façons ; Lalla Moulati (2019) pour les poivrons crus"
  },
  {
   "text": "Enferme les poivrons grillés encore chauds dans un sac fermé : la vapeur décolle la peau, qui s'enlève ensuite très facilement.",
   "source": "Rachida (15 min) ; Cooking With Alia (15 à 20 min) ; Lalla Moulati (taktouka, 2014 et 2019) ; MarocMama (méthode de sa belle-mère)"
  },
  {
   "text": "Ne passe pas les poivrons grillés sous l'eau : pèle-les à sec pour garder le goût fumé, et rince-toi plutôt les mains.",
   "source": "Chef Brahim Sakroune dans Femmes du Maroc (2023) ; Lalla Moulati (taktouka, 2014 et 2019)"
  },
  {
   "text": "Coupe les tomates en deux et râpe la chair en jetant la peau : c'est rapide, et la sauce n'a pas de peaux.",
   "source": "Lalla Moulati (tomates râpées, 2019) ; Cooking With Alia (taktouka : chair râpée, peau jetée)"
  },
  {
   "text": "L'ail ne doit pas dorer : quelques secondes dans l'huile suffisent pour la parfumer.",
   "source": "Rachida"
  },
  {
   "text": "Avant les œufs, la sauce doit devenir une compotée épaisse. Remue souvent pour qu'elle n'attache pas.",
   "source": "Rachida ; Lalla Moulati (2019 : laisser le mélange épaissir)"
  },
  {
   "text": "Casse chaque œuf dans un petit creux de la sauce : il cuit à la surface, comme un œuf au plat.",
   "source": "Rachida ; Wikipédia FR (section Maroc : œufs au plat cuits à la surface)"
  },
  {
   "text": "Le couvercle cuit le dessus des œufs : environ 5 minutes pour un jaune encore coulant, un peu plus pour un jaune ferme.",
   "source": "MarocMama (5 min à couvert, jaune coulant) ; Rachida (couvrir pour un jaune bien cuit) ; Lalla Moulati (2019 : environ 8 min à couvert)"
  },
  {
   "text": "Sers dans la poêle, bien chaud, et mange-la à la main avec du pain, à la marocaine.",
   "source": "Rachida ; Lalla Moulati (2019 : servir aussitôt)"
  },
  {
   "text": "Ne la confonds pas avec la taktouka : c'est le même duo poivrons et tomates, mais en salade cuite, sans œufs, servie tiède ou froide. Pour My Moroccan Food, ce sont deux plats différents.",
   "source": "My Moroccan Food (2016) ; Cooking With Alia ; Choumicha (Tektouka marqa) ; Lalla Moulati (taktouka, 2014 et 2019) ; MarocMama ; Rachida"
  },
  {
   "text": "Le plat marocain de tous les jours aux œufs et à la tomate porte un autre nom : « bid w maticha » (œufs et tomates).",
   "source": "Wikipedia EN (Shakshouka) ; Lalla Moulati (2018 : « البيض ومطيشة », que « tout le monde sait cuisiner ») ; Hespress (2012 : beaucoup de Marocaines s'y tournent pour le dîner)"
  },
  {
   "text": "Tomates pas assez douces ? My Moroccan Food ajoute une demi-cuillère à café de sucre à sa taktouka, et la supprime quand les tomates sont bien sucrées, comme au Maroc.",
   "source": "My Moroccan Food (taktouka, 2016)"
  },
  {
   "text": "Les restes : au réfrigérateur dans les 2 heures, dans une boîte peu profonde, et à manger dans les 3 jours (la FDA va jusqu'à 3 à 4 jours). Réchauffe-les jusqu'à 74 °C (165 °F).",
   "source": "FDA, « What You Need to Know About Egg Safety » ; Anses, « Eviter les toxi-infections alimentaires en confinement : les bonnes pratiques » (8 avril 2020)"
  }
 ],
 "mistakes": [
  "Rincer les poivrons grillés sous l'eau : ils perdent leur goût fumé (chef Brahim Sakroune, Femmes du Maroc ; Lalla Moulati).",
  "Casser les œufs dans une sauce encore liquide : attends qu'elle soit épaisse (Rachida ; Lalla Moulati).",
  "Laisser attacher la sauce : remue souvent, à feu doux (Rachida).",
  "Servir un jaune coulant à un enfant, une personne âgée, une femme enceinte ou une personne fragile : cuis le jaune et le blanc jusqu'à ce qu'ils soient fermes (FDA).",
  "Laisser les restes plus de 2 heures hors du réfrigérateur (FDA)."
 ],
 "serving": "Sers la chakchouka aux œufs bien chaude, dans la poêle, dès la fin de la cuisson, avec du pain pour saucer (Lalla Moulati 2019 ; Rachida). Elle se mange au petit-déjeuner (Lalla Moulati 2019 ; Rachida) ou en plat principal (Rachida). Sans œufs, sers-la tiède ou froide, en salade cuite, comme une taktouka (Wikipédia FR ; chef Brahim Sakroune dans Femmes du Maroc).",
 "variants": [
  "Sans œufs, en salade cuite : arrête-toi après la compotée et sers tiède ou froid. Au Maroc, certains l'appellent alors aussi taktouka (forum Yabiladi, 2006 : « chekchouka ou taktouka » ; « salade cuite » selon Wikipédia FR ; « salade chakchouka tiède » du chef Brahim Sakroune, Femmes du Maroc, 2023).",
  "Poivrons crus, plus rapide : coupe-les en petits dés et fais-les fondre avec l'oignon jusqu'à ce qu'ils soient tendres, puis ajoute l'ail et les épices (Lalla Moulati, 2019 ; forum Yabiladi, 2006).",
  "Œufs brouillés : verse les œufs battus sur la sauce et remue jusqu'à ce qu'ils soient cuits (Lalla Moulati, 2014, avec seulement oignon et tomates ; Rachida cite aussi les œufs légèrement brouillés).",
  "Avec du concentré de tomate : Lalla Moulati (2019) en met 2 c. à s. pour 400 g de tomates râpées.",
  "Poivrons de couleurs : rouges, verts et jaunes mélangés (Rachida ; chef Brahim Sakroune). Choumicha met un poivron vert et un rouge dans sa tektouka.",
  "Plus relevée : un piment, du piment d'Espelette ou de l'harissa (Rachida) ; une pincée de piment de Cayenne (My Moroccan Food, taktouka).",
  "Sans oignon : seulement poivrons, tomates, ail et épices, comme chez plusieurs internautes de Yabiladi (2006 ; d'autres y mettent de l'oignon) et le chef Brahim Sakroune (2023) ; Rachida propose aussi de l'essayer sans oignon."
 ],
 "sources": [
  {
   "name": "Lalla Moulati, « قدمي لعائلتك طبق الشكشوكة اللذيذ على طاولة الفطور » (la chakchouka au petit-déjeuner), 11 mars 2019, rubrique « شهيوات عالمية » (recettes internationales)",
   "url": "https://www.lalamoulati.net/187421.html",
   "used_for": "Recette chiffrée sur un site marocain : 2 c. à s. d'huile d'olive, 1 oignon, 3 poivrons verts crus, 1 c. à c. de sel, 1 c. à c. d'ail écrasé, 1 c. à c. de cumin, 1 c. à c. de « فلفل », 400 g de tomates râpées, 2 c. à s. de concentré, 6 œufs, 1 pincée de poivre noir, 2 c. à s. de persil ; poêle profonde ; oignon et poivrons fondus, ail et épices, tomates jusqu'à épaississement, œufs à couvert environ 8 min, persil, service immédiat. Classée parmi les recettes internationales."
  },
  {
   "name": "Lalla Moulati, « الشكشوكة », 10 novembre 2014, rubrique « شهيوات الطبخ المغربي » (cuisine marocaine)",
   "url": "https://www.lalamoulati.net/2386.html",
   "used_for": "Autre sens du mot au Maroc : oignon revenu, tomates, puis œufs battus remués jusqu'à cuisson, sel et poivre ; sans poivrons ni quantités. Variante aux œufs brouillés."
  },
  {
   "name": "Femmes du Maroc, « Ris de veau aux poivrons Chakchouka », recette du chef Brahim Sakroune (Fairmont Taghazout Bay), 28 juin 2023",
   "url": "https://femmesdumaroc.com/plaisirs/food-drink/ris-de-veau-aux-poivrons-chakchouka",
   "used_for": "« Chakchouka de poivrons » sans œufs, servie en salade tiède : poivrons grillés, pelés sans rinçage pour garder le goût fumé, ail doré dans l'huile d'olive, tomates pelées réduites en purée, poivrons ajoutés, cuisson douce jusqu'à sauce consistante."
  },
  {
   "name": "Forum Yabiladi, fil « Comment fait-on Checkchouka???? », messages du 4 mai 2006 (internautes marocains, anonymes)",
   "url": "https://www.yabiladi.com/forum/comment-fait-on-checkchouka-54-1097456.html",
   "used_for": "Usage du nom : « chekchouka ou taktouka » ; version crue (piments verts en dés, huile d'olive, ail, tomates, sel, cumin, paprika) et version aux poivrons grillés mise en sac, préférée par trois internautes ; sans œufs."
  },
  {
   "name": "Gâteau et cuisine Rachida, « Best Shakshuka Recipe (Authentic and Easy) », 14 juin 2025, mis à jour le 12 juillet 2025 (cuisine indiquée : algérienne et marocaine)",
   "url": "https://gateauetcuisinerachida.com/en/best-shakshuka-recipe-authentic-and-easy/",
   "used_for": "Recette pour 4 : 1 oignon, 3 poivrons verts grillés, 2 tomates mûres, 3 gousses d'ail, 5 c. à s. d'huile d'olive (dont 1 pour finir), 1 c. à c. de paprika doux, 1 c. à c. de cumin, sel, poivre, 4 œufs, persil ; 25 min de préparation ; sac 15 min ; ail quelques secondes sans dorer, oignon translucide à feu doux, poivrons 1 min, compotée en remuant, un creux par œuf, environ 5 min, couvrir pour un jaune cuit ; service immédiat dans la poêle avec du pain ; « au Maroc, on préfère les poivrons grillés » ; ressemble à la taktouka, qui n'a pas d'œufs ; appréciée au Ramadan."
  },
  {
   "name": "My Moroccan Food (Nargisse Benkabbou), « Taktouka – Green Peppers and Tomatoes Moroccan Salad », 29 juin 2016",
   "url": "https://www.mymoroccanfood.com/home/taktouka",
   "used_for": "Différence : shakshuka et taktouka sont « deux plats différents » ; la taktouka est une salade ou tartinade (poivrons verts grillés, tomates, ail, huile d'olive), servie tiède ou froide, sans œufs ; 3 c. à s. d'huile, ail (1 c. à c., environ 2 gousses), 1 c. à c. de paprika, pincée de Cayenne, ½ c. à c. de sucre si les tomates manquent de douceur."
  },
  {
   "name": "Cooking With Alia, « 125 – Taktouka – Cooked Salad with Tomatoes and Roasted Green Peppers », 25 février 2015",
   "url": "https://www.cookingwithalia.com/taktouka-cooked-salad-with-tomatoes-and-roasted-green-peppers/",
   "used_for": "Taktouka : tomates râpées (peau jetée), poivrons grillés sur la flamme puis 15 à 20 min sous film, 1 c. à c. de sel, de paprika et de cumin, 2 c. à s. d'huile d'olive, 3 gousses d'ail ; salade cuite servie tiède ou froide avec du pain."
  },
  {
   "name": "Cooking With Alia, « 440 – Taktouka – Pepper & Tomato Dip », 19 juin 2016",
   "url": "https://www.cookingwithalia.com/440-taktouka-pepper-tomato-dip/",
   "used_for": "Taktouka : poivron grillé, 5 min en sac, 2 gousses d'ail ; servie tiède ou chaude avec du pain."
  },
  {
   "name": "Cooking With Alia, « 176 – Shakshouka (Egg Dish) – Saudi Arabia Recipe », rubrique International Recipes",
   "url": "https://www.cookingwithalia.com/shakshouka-egg-dish-saudi-arabia-recipe-episode-176/",
   "used_for": "Seulement le classement : la shakshouka aux œufs y est rangée parmi les recettes internationales (vidéo, sans texte)."
  },
  {
   "name": "Choumicha (Choumicha Chafay), « Tektouka marqa », site officiel (copie archivée du 22 juillet 2026)",
   "url": "https://web.archive.org/web/20260722090934/https://www.choumicha.ma/recette/465-tektouka-marqa.html",
   "used_for": "Taktouka de Choumicha (rubriques Saveurs du Maroc, Légumes, Salades) : 4 grosses tomates, 3 c. à s. d'huile d'olive et 1 de tournesol, 1 gousse d'ail, 1 poivron vert et 1 rouge grillés, 1 c. à c. de sel, épices pour chermoula, coriandre ; servie tiède ou froide ; 4 personnes."
  },
  {
   "name": "Lalla Moulati, « التكتوكة بالفلفل », 10 novembre 2014",
   "url": "https://www.lalamoulati.net/3552.html",
   "used_for": "Taktouka : poivrons grillés, mis en sac, pelés sans être lavés ; tomates réduites à feu doux jusqu'à évaporation de l'eau ; servie chaude ou froide."
  },
  {
   "name": "Lalla Moulati, « طريقة عمل التكتوكة بالفلافل كتجي بنينة », 3 avril 2019",
   "url": "https://www.lalamoulati.net/190612.html",
   "used_for": "Taktouka : 4 poivrons verts grillés, mis en sac, pelés sans les laver (on se lave les mains) ; 2 ou 3 gousses d'ail ; 1 c. à c. de paprika et de cumin ; servie chaude ou froide."
  },
  {
   "name": "MarocMama (Amanda Mouttaki, Américaine installée au Maroc), « Taktouka – Green Pepper and Tomato Salad », recette du 29 avril 2019",
   "url": "https://marocmama.com/taktouka-green-pepper-and-tomato-salad/",
   "used_for": "Taktouka en salade cuite servie fraîche ou à température ambiante ; poivrons grillés sur la flamme et mis en sac, méthode de sa belle-mère marocaine."
  },
  {
   "name": "MarocMama (Amanda Mouttaki), « Crunchy Shakshuka Recipe You'll Love », 10 avril 2023",
   "url": "https://marocmama.com/shakshuka-recipe/",
   "used_for": "Cuisson des œufs : un creux par œuf, à couvert, à feu doux, 5 min pour un blanc pris et un jaune coulant."
  },
  {
   "name": "Lalla Moulati, « البيض ومطيشة كولشي كيعرف يطيبو... », 29 décembre 2018",
   "url": "https://www.lalamoulati.net/177424.html",
   "used_for": "« Bid w maticha » (œufs et tomates), plat que « tout le monde sait cuisiner »."
  },
  {
   "name": "Wikipédia (fr), « Chakchouka »",
   "url": "https://fr.wikipedia.org/wiki/Chakchouka",
   "used_for": "Section Maroc (sans référence) : souvent avec du poivron vert en petits morceaux et de l'ail ; servie seule en salade cuite, ou chaude avec des œufs au plat cuits à la surface."
  },
  {
   "name": "Wikipedia (en), « Shakshouka »",
   "url": "https://en.wikipedia.org/wiki/Shakshouka",
   "used_for": "Au Maroc, plat appelé « bīḍ w-maṭiša » (œufs et tomate)."
  },
  {
   "name": "Wikipedia (en), « Taktouka »",
   "url": "https://en.wikipedia.org/wiki/Taktouka",
   "used_for": "Taktouka : plat marocain de tomates, poivrons, ail, paprika et huile d'olive, servi en accompagnement, tiède ou froid, avec du pain."
  },
  {
   "name": "FDA (États-Unis), « What You Need to Know About Egg Safety », contenu à jour au 5 mars 2024",
   "url": "https://www.fda.gov/food/buy-store-serve-safe-food/what-you-need-know-about-egg-safety",
   "used_for": "Sécurité : jaune et blanc cuits fermes, personnes à risque (enfants, personnes âgées, femmes enceintes, immunité faible), pas plus de 2 h hors du réfrigérateur, restes en récipients peu profonds, 3 à 4 jours au frais, réchauffage à 165 °F (74 °C)."
  },
  {
   "name": "Cooking With Alia (Alia, cuisinière marocaine), « 894 – Fancy Chekchouka / شكشوكة », 30 avril 2021",
   "url": "https://www.cookingwithalia.com/894-fancy-chekchouka/",
   "used_for": "Contre-vérification : Une cuisinière marocaine appelle « chekchouka » (شكشوكة) le plat chaud aux œufs, cette fois sans le ranger parmi les recettes internationales : oignon et ail 5 min jusqu'à ce que l'oignon soit translucide, poivron vert cru en dés 2 min, tomate (et une sauce du commerce) 5 min, un creux par œuf, puis à couvert 3 à 5 min jusqu'à ce que les œufs soient cuits ; 4 œufs, 2 c. à s. d'huile d'olive, persil ; servie chaude."
  },
  {
   "name": "Hespress (journal marocain), Fatima Zahra Zaïm, « وداعا \"البيض ومطيشة\" » (Adieu « bid w maticha »), 16 octobre 2012",
   "url": "https://www.hespress.com/%D9%88%D8%AF%D8%A7%D8%B9%D8%A7-%D8%A7%D9%84%D8%A8%D9%8A%D8%B6-%D9%88%D9%85%D8%B7%D9%8A%D8%B4%D8%A9-104064.html",
   "used_for": "Contre-vérification : Pour régler la question du dîner, beaucoup de Marocaines se tournent vers « البيض ومطيشة » (œufs et tomates), plat auquel les Marocains sont très attachés selon l'autrice : c'est bien le plat de tous les jours, sous ce nom. Article cité par Wikipedia EN (Shakshouka)."
  },
  {
   "name": "Bladi.net (site marocain), « Taktouka », rubrique Les entrées des recettes de cuisine marocaine",
   "url": "https://www.bladi.net/recettes/taktouka.html",
   "used_for": "Contre-vérification : Taktouka sans œufs : 3 poivrons grillés sur le feu, pelés, épépinés et coupés en petits morceaux, 3 tomates pelées et épépinées, 2 gousses d'ail, persil et coriandre, 1 c. à c. de piment doux, 1 c. à c. de cumin, huile d'olive ; servie tiède avec du pain. La recherche interne de Bladi ne donne aucune recette de chakchouka."
  },
  {
   "name": "FDA (États-Unis), « Safe Food Handling », contenu à jour au 5 mars 2024",
   "url": "https://www.fda.gov/food/buy-store-serve-safe-food/safe-food-handling",
   "used_for": "Contre-vérification : Seconde page de la FDA : cuire les œufs jusqu'à ce que le jaune et le blanc soient fermes (conseil donné à tous), plats aux œufs à 160 °F (71 °C), réfrigération dans les 2 heures, fruits et légumes rincés sous l'eau du robinet."
  },
  {
   "name": "Anses (France), « Eviter les toxi-infections alimentaires en confinement : les bonnes pratiques », 8 avril 2020",
   "url": "https://www.anses.fr/fr/actualite/eviter-toxi-infections-alimentaires-confinement-bonnes-pratiques",
   "used_for": "Contre-vérification : Les plats cuisinés à la maison ne doivent pas rester plus de 2 heures à température ambiante et se consomment dans les 3 jours ; les fruits et légumes se lavent minutieusement à l'eau potable ; on se lave les mains avant et après avoir manipulé des aliments crus."
  }
 ],
 "discrepancies": [
  "Sens du mot au Maroc : pour certains, « chakchouka » est la salade cuite sans œufs, comme la taktouka (forum Yabiladi 2006 ; chef Brahim Sakroune 2023 ; Wikipédia FR) ; pour d'autres, c'est le plat chaud aux œufs, distinct de la taktouka (My Moroccan Food ; Rachida ; Lalla Moulati 2019) ; Lalla Moulati (2014) appelle même ainsi des œufs brouillés à l'oignon et à la tomate, sans poivrons. Retenu : le plat chaud aux œufs (les deux recettes chiffrées), la salade sans œufs en variante.",
  "Sur deux sites marocains, la chakchouka aux œufs est rangée parmi les recettes internationales (Lalla Moulati 2019 ; Cooking With Alia, « Saudi Arabia Recipe »). Cooking With Alia publie toutefois en 2021 une « Fancy Chekchouka » aux œufs, sans cette étiquette.",
  "Poivrons grillés (Rachida : « préférés au Maroc » ; chef Brahim Sakroune ; trois internautes de Yabiladi) ou crus (Lalla Moulati 2019 ; un internaute de Yabiladi) : retenu grillés (majorité), crus en variante.",
  "Tomates : 400 g râpées plus 2 c. à s. de concentré (Lalla Moulati 2019) ; 2 tomates mûres, sans poids (Rachida). Retenu 400 g, seule quantité pesée, sans concentré, comme Rachida et les taktouka marocaines (My Moroccan Food, Choumicha, Lalla Moulati, MarocMama ; seule Cooking With Alia en met 1 c. à s.).",
  "Huile d'olive : 2 c. à s. (Lalla Moulati 2019) ; 4 c. à s. plus 1 pour finir (Rachida). Retenu 3 c. à s. (valeur médiane, la même que My Moroccan Food et Choumicha pour la taktouka) plus un filet au service.",
  "Ail : 1 c. à c. d'ail écrasé, soit environ 2 gousses selon l'équivalence de My Moroccan Food (Lalla Moulati 2019) ; 3 gousses (Rachida). Dans les taktouka : 2 (My Moroccan Food ; Cooking With Alia 440), 2 ou 3 (Lalla Moulati 2019), 3 (Cooking With Alia 125), 1 (Choumicha ; MarocMama). Retenu 2 gousses (médiane).",
  "Œufs : 4 pour 4 personnes (Rachida) ; 6, sans nombre de parts (Lalla Moulati 2019). Retenu un œuf par personne.",
  "Cuisson des œufs : environ 5 min (Rachida ; MarocMama, à couvert) ; environ 8 min à couvert (Lalla Moulati 2019). Retenu 5 min, plus 2 à 3 min pour un jaune ferme.",
  "Ordre ail et oignon : Rachida met l'ail d'abord, quelques secondes, puis l'oignon ; Lalla Moulati fait fondre oignon et poivrons, puis ajoute l'ail. Retenu l'ordre de Lalla Moulati, l'ail ne restant que quelques secondes avant les poivrons, pour qu'il ne dore pas (conseil de Rachida).",
  "Ail : Rachida le fait revenir quelques secondes sans le laisser dorer ; le chef Brahim Sakroune le fait dorer légèrement. Retenu : sans dorer (Rachida), puisqu'il ne reste que quelques secondes avant les poivrons.",
  "Temps dans le sac : 15 min (Rachida) ; 15 à 20 min (Cooking With Alia 125) ; 5 min (Cooking With Alia 440) ; « quelques minutes » (Lalla Moulati). Retenu 15 min.",
  "Persil : 2 c. à s. (Lalla Moulati 2019) ; « pour décorer », sans quantité (Rachida). Retenu 2 c. à s.",
  "Contre-vérifiée le 7 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 11 correction(s) appliquée(s).",
  "Relue le 8 novembre 2026 pendant la traduction : 2 précision(s) apportée(s) après vérification des sources."
 ],
 "unverified": [
  "Aucune source ne mesure quelle version est la plus courante au Maroc ; le choix (poivrons grillés, oignon, œufs) suit la majorité des sources lues.",
  "Temps de cuisson (25 min) : estimation. Rachida donne seulement 25 min de préparation, Lalla Moulati seulement les 8 min des œufs.",
  "Poids des tomates : les 400 g viennent de la seule Lalla Moulati (2019) ; Rachida dit « 2 tomates mûres », sans poids.",
  "Le mot « فلفل » (1 c. à c.) de Lalla Moulati 2019 est ambigu (paprika ou poivre) ; le paprika est confirmé par Rachida et par les taktouka marocaines (My Moroccan Food, Cooking With Alia, Lalla Moulati 2019).",
  "Variété de poivron la plus utilisée (poivron vert ou piment vert doux long) : non tranchée. Rachida parle de poivrons verts, Lalla Moulati de « فليفلة خضراء ».",
  "L'origine de Rachida (Maroc ou Algérie) n'est pas confirmée ; sa recette est classée cuisine algérienne et marocaine.",
  "Le paragraphe Maroc de Wikipédia FR n'a pas de référence ; les messages du forum Yabiladi sont anonymes.",
  "Recherche limitée : le quota de recherches web a été épuisé en cours de travail. Bladi.net (page vide pour les robots) et Kifache (protection Cloudflare) étaient inaccessibles et n'ont pas été contournés. Aucune page de chakchouka parmi les adresses archivées de choumicha.ma (seulement sa taktouka, « Tektouka marqa »).",
  "La vidéo « Shakshouka – Saudi Arabia Recipe » de Cooking With Alia n'a pas de texte : contenu non vu."
 ],
 "cuisine": "Marocaine",
 "rayon": "Plats",
 "pairs": [
  "khobz"
 ],
 "img_alt": "Œufs cuits dans une poêle en fonte sur des poivrons et des tomates, avec du persil",
 "img": "img/chakchouka.jpg",
 "photo": {
  "author": "Calliopejen1",
  "license": "CC BY-SA 3.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/3.0",
  "page": "https://commons.wikimedia.org/wiki/File:Shakshuka_by_Calliopejen1.jpg",
  "modified": "réduite"
 }
});
