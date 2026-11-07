/* Recette : Zaalouk d'aubergines. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "zaalouk",
 "title": "Zaalouk d'aubergines",
 "darija": "Zaâlouk",
 "arabic": "زعلوك",
 "tagline": "Des aubergines grillées au goût fumé, écrasées dans une sauce tomate à l'ail, au cumin et au paprika, puis cuites jusqu'à ce que tout épaississe. Tiède ou froid, avec du pain.",
 "category": "Salade",
 "occasion": "Salade cuite du quotidien, servie en entrée ou à côté des plats principaux, avec du pain",
 "region": "Tout le Maroc ; la recette change d'une région et d'une famille à l'autre (My Moroccan Food)",
 "servings": 4,
 "servings_label": "personnes",
 "time": {
  "prep": 20,
  "cook": 50,
  "rest": 0
 },
 "difficulty": "Facile",
 "equipment": [
  "Gazinière ou gril (sinon, four avec fonction gril et plaque couverte de papier aluminium)",
  "Sac en plastique propre",
  "Grande sauteuse profonde",
  "Cuillère en bois",
  "Grand saladier et fourchette",
  "Éplucheur à dents ou râpe, pour les tomates",
  "Presse-ail, ou mortier et pilon"
 ],
 "ingredients": [
  {
   "group": "Aubergines",
   "items": [
    {
     "id": "aubergines",
     "q": 1,
     "u": "kg",
     "name": "d'aubergines",
     "note": "entières, avec la peau et la queue",
     "canon": "aubergine"
    }
   ]
  },
  {
   "group": "Sauce tomate",
   "items": [
    {
     "id": "tomates",
     "q": 500,
     "u": "g",
     "name": "de tomates bien mûres",
     "note": "tendres et bien rouges",
     "canon": "tomate"
    },
    {
     "id": "huile",
     "q": 4,
     "u": "c. à s.",
     "name": "d'huile d'olive",
     "canon": "huile-olive"
    },
    {
     "id": "ail",
     "q": 4,
     "u": "",
     "name": "gousse d'ail",
     "pl": "gousses d'ail",
     "canon": "ail"
    },
    {
     "id": "paprika",
     "q": 2,
     "u": "c. à c.",
     "name": "de paprika doux",
     "canon": "paprika"
    },
    {
     "id": "cumin",
     "q": 2,
     "u": "c. à c.",
     "name": "de cumin moulu",
     "canon": "cumin"
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
     "id": "coriandre",
     "q": 4,
     "u": "c. à s.",
     "name": "de coriandre fraîche hachée",
     "canon": "coriandre"
    },
    {
     "id": "persil",
     "q": 4,
     "u": "c. à s.",
     "name": "de persil plat haché",
     "canon": "persil"
    },
    {
     "id": "eau",
     "q": null,
     "u": "",
     "name": "eau",
     "note": "seulement si la sauce attache",
     "canon": "eau"
    }
   ]
  },
  {
   "group": "Finition et service",
   "items": [
    {
     "id": "citron-jus",
     "q": 0.5,
     "u": "",
     "name": "citron",
     "pl": "citrons",
     "note": "pour le jus",
     "canon": "citron"
    },
    {
     "id": "citron-service",
     "q": 0.5,
     "u": "",
     "name": "citron",
     "pl": "citrons",
     "note": "en quartiers, pour servir",
     "canon": "citron"
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
     "id": "herbes-service",
     "q": null,
     "u": "",
     "name": "coriandre ou persil haché",
     "note": "pour décorer",
     "canon": "coriandre"
    },
    {
     "id": "khobz",
     "q": null,
     "u": "",
     "name": "khobz (pain marocain)",
     "note": "pour prendre le zaalouk",
     "canon": "khobz"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Prépare tomates, ail et herbes",
   "text": "Pèle {{tomates}} de tomates (un éplucheur à dents aide), épépine-les et coupe-les en tout petits dés. Plus simple : coupe-les en deux, râpe la chair et jette la peau. Pèle et écrase {{ail:full}} au presse-ail ou au pilon. Lave et hache finement la coriandre et le persil, et garde-en un peu pour servir.",
   "timer": null,
   "img": {
    "src": "img/etapes/hacher-persil.jpg",
    "alt": "Persil haché au couteau sur une planche",
    "caption": "Hacher les herbes",
    "w": 803,
    "h": 1000,
    "credit": "Photo de l'étape « Prépare tomates, ail et herbes » : katerha, Wikimedia Commons, licence CC BY 2.0 (réduite)."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Grille les aubergines",
   "text": "Pose {{aubergines}} d'aubergines entières, avec la peau et la queue, directement sur la flamme du gaz à feu moyen, ou sur un gril. Retourne-les de temps en temps, jusqu'à ce que la peau soit noircie partout et la chair très molle. Sans gaz : coupe-les en deux dans la longueur, pose-les peau vers le haut sur une plaque couverte d'aluminium et passe-les 20 à 25 minutes sous le gril du four, au plus près de la résistance.",
   "timer": {
    "min": 15,
    "label": "Aubergines sur la flamme",
    "done": "Peau noircie partout et chair très molle ? Sinon, laisse-les encore quelques minutes en les retournant. Au four, compte 20 à 25 minutes en tout."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Enferme-les dans un sac",
   "text": "Glisse les aubergines encore chaudes dans un sac en plastique, ferme-le et laisse-les tiédir pendant que tu fais la sauce. La peau brûlée s'enlèvera ensuite très facilement. Ne les passe pas sous l'eau : elles perdraient leur goût et la peau s'enlèverait moins bien.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Fais fondre les tomates en sauce",
   "text": "Dans une grande sauteuse profonde, à feu moyen, mets les tomates, l'ail, {{huile}} d'huile d'olive, {{paprika}} de paprika, {{cumin}} de cumin et {{sel}} de sel. Ajoute {{coriandre}} de coriandre et {{persil}} de persil hachés. Laisse cuire en remuant souvent, jusqu'à ce que les tomates fondent en une sauce épaisse. Si ça attache, ajoute un peu d'{{eau}}.",
   "timer": {
    "min": 15,
    "label": "Sauce tomate",
    "done": "Les tomates doivent avoir fondu en une sauce épaisse. Sinon, prolonge de quelques minutes."
   }
  },
  {
   "phase": "Préparation",
   "title": "Pèle et écrase les aubergines",
   "text": "Sors les aubergines du sac. Gratte doucement la peau brûlée et coupe la queue ; pour des moitiés passées au four, récupère simplement la chair à la cuillère. Mets la chair dans un grand saladier et écrase-la à la fourchette jusqu'à obtenir une pâte.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Fais réduire le zaalouk",
   "text": "Verse l'aubergine écrasée dans la sauce et mélange bien. Laisse cuire à feu moyen en remuant régulièrement et en raclant le fond, et écrase au dos de la cuillère les morceaux restés fermes. C'est prêt quand le mélange est épais et qu'il ne reste plus de jus.",
   "timer": {
    "min": 15,
    "label": "Réduction",
    "done": "Le zaalouk doit être épais, sans jus au fond. Sinon, prolonge en remuant ; baisse le feu s'il attache."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Ajoute le citron",
   "text": "Presse {{citron-jus:full}} et verse le jus dans le zaalouk. Mélange et laisse cuire encore 2 minutes. Goûte, rectifie le sel, puis retire du feu.",
   "timer": {
    "min": 2,
    "label": "Citron",
    "done": "Goûte, rectifie le sel et retire du feu."
   }
  },
  {
   "phase": "Service",
   "title": "Sers tiède ou froid",
   "text": "Étale le zaalouk dans un plat peu profond et sers-le tiède ou froid. Arrose d'un filet d'{{huile-service}} et parsème de {{herbes-service}}. Pose autour les quartiers de {{citron-service:full}}. Chacun le prend avec des morceaux de {{khobz}}, qui servent de couverts.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Le zaalouk a le goût de la chermoula : cumin, paprika, ail, coriandre, persil et huile d'olive. Plus tu mets de tomates, plus il faut assaisonner.",
   "source": "Taste of Maroc (Christine Benlafquih, qui tient ce rapprochement de l'autrice culinaire marocaine Nada Kiffa) ; Choumicha assaisonne son zaalouk avec un mélange d'épices pour chermoula"
  },
  {
   "text": "Grille les aubergines entières jusqu'à ce que la peau soit noircie partout : c'est ce qui donne au zaalouk son goût fumé.",
   "source": "Cooking With Alia (zaalouk n° 689) ; Taste of Maroc"
  },
  {
   "text": "Enferme les aubergines grillées quelques instants dans un sac en plastique : la peau brûlée s'enlève ensuite très facilement.",
   "source": "Lalla Moulati, « الزعلوك بطريقة جديدة » (10 novembre 2014)"
  },
  {
   "text": "Ne passe jamais les aubergines grillées sous l'eau : elles perdent leur saveur, et la peau s'enlève moins bien.",
   "source": "Lalla Moulati : « زعلوك بالدنجال مشوي » (13 août 2016) pour la saveur, « الزعلوك بطريقة جديدة » (2014) pour la peau"
  },
  {
   "text": "Choisis des tomates mûres, tendres et bien rouges : les tomates fermes fondent moins bien en sauce et peuvent être plus acides.",
   "source": "Taste of Maroc ; Cooking With Alia, recette de Ch'hiwatine (tomates « super red »)"
  },
  {
   "text": "Fais d'abord fondre les tomates en sauce épaisse avec l'huile, l'ail, les épices et les herbes, et ajoute seulement ensuite l'aubergine.",
   "source": "Taste of Maroc ; Lalla Moulati (2014) ; Cooking With Alia (n° 689) ; Choumicha"
  },
  {
   "text": "Prends une grande sauteuse profonde plutôt qu'une petite casserole : avec plus de surface, le liquide s'évapore plus vite.",
   "source": "Taste of Maroc"
  },
  {
   "text": "La texture est une affaire de goût, du zaalouk en morceaux à la purée : écrase bien à la fourchette pour une pâte, moins pour garder des morceaux.",
   "source": "Taste of Maroc ; Lalla Moulati (2014, écrasé à la fourchette)"
  },
  {
   "text": "Un peu de jus de citron en fin de cuisson réveille le goût. Fatéma Hal met le jus d'un demi-citron dans la poêle et sert l'autre moitié en quartiers.",
   "source": "Taste of Maroc ; Fatéma Hal (fiche recette Gaggenau)"
  },
  {
   "text": "Trop acide ? Une toute petite pointe de sucre ou de miel corrige, mais vas-y doucement : mieux vaut un zaalouk un peu acide que trop sucré.",
   "source": "Taste of Maroc"
  },
  {
   "text": "Le khobz sert de couverts : comme beaucoup de salades marocaines, le zaalouk se mange en le prenant avec des morceaux de pain.",
   "source": "Taste of Maroc"
  },
  {
   "text": "Mets-le au réfrigérateur dans les 2 heures qui suivent la cuisson, dans une boîte fermée : il se garde ainsi 3 jours. Au congélateur, il se garde 2 à 3 mois. Décongèle-le au réfrigérateur, réchauffe-le à la poêle pour réduire l'excès de liquide, rectifie l'assaisonnement et ne le recongèle pas.",
   "source": "Anses (plats cuisinés maison : au réfrigérateur dans les 2 heures, à consommer dans les 3 jours, décongélation au réfrigérateur, pas de recongélation) ; My Moroccan Food (jusqu'à 4 jours) ; Taste of Maroc (2 à 3 mois au congélateur, réchauffage à la poêle)"
  }
 ],
 "mistakes": [
  "Rincer les aubergines grillées sous l'eau : elles perdent leur goût et la peau s'enlève moins bien (Lalla Moulati).",
  "Prendre des tomates fermes ou pas assez mûres : elles fondent moins bien et peuvent rendre le zaalouk acide (Taste of Maroc).",
  "Arrêter la cuisson trop tôt : le zaalouk doit être épais, sans jus (Cooking With Alia, My Moroccan Food, Lalla Moulati).",
  "Le laisser attacher : remue souvent, racle le fond et baisse le feu si besoin (Taste of Maroc, My Moroccan Food).",
  "Forcer sur le citron : avec les tomates pas mûres, c'est ce qui rend un zaalouk trop acide (Taste of Maroc).",
  "Rattraper l'acidité avec trop de sucre : mieux vaut un peu acide que trop sucré (Taste of Maroc).",
  "Croire que le paprika fumé ou l'ail rôti font partie de la recette traditionnelle : ni l'un ni l'autre n'est traditionnel, même si Christine Benlafquih trouve que le paprika fumé peut très bien aller dans le zaalouk et y ajoute parfois de l'ail rôti (Taste of Maroc).",
  "Oublier de goûter à la fin pour rectifier le sel (Taste of Maroc, My Moroccan Food)."
 ],
 "serving": "Sers le zaalouk tiède, froid ou à température ambiante (Taste of Maroc ; Choumicha : tiède ou froid ; Cooking With Alia : chaud ou froid, avec du pain). Il se mange en entrée (Morocco World News ; El Fenn) ou à côté des plats principaux, en le prenant avec du khobz, qui sert de couverts (Taste of Maroc). Arrose-le d'un filet d'huile d'olive et parsème-le de coriandre ou de persil (Taste of Maroc, My Moroccan Food). Fatéma Hal le sert avec des quartiers de citron et des olives noires.",
 "variants": [
  "Méthode familiale tout dans la marmite (la belle-mère de Christine Benlafquih, la mère de Nargisse Benkabbou) : aubergines pelées, en gardant si tu veux quelques bandes de peau pour la couleur, coupées et cuites avec les tomates, l'huile, l'ail, les épices et les herbes, plus un fond d'eau (¼ à ⅓ de tasse, soit environ 60 à 80 ml, chez Taste of Maroc ; pas d'eau chez My Moroccan Food), à couvert à feu moyen ou moyen-doux 25 à 35 minutes, puis à découvert en écrasant jusqu'à évaporation du liquide (Taste of Maroc ; My Moroccan Food).",
  "Aubergines bouillies (Cooking With Alia, épisode 47) : pelées en entier ou à moitié, coupées en dés, cuites 20 à 30 minutes à l'eau salée, égouttées et pressées à la cuillère pour chasser toute l'eau, puis cuites 30 minutes à feu moyen avec les tomates, l'huile, l'ail et les épices en écrasant à la cuillère en bois ; 1 c. à c. de vinaigre dans les 5 dernières minutes.",
  "Aubergines à la vapeur : citées par Taste of Maroc parmi les façons de faire, et par Fiona Dunlop (The North African Kitchen), qui présente la version vapeur d'une cuisinière, Aicha, comme plus légère. Méthode détaillée non lue.",
  "Aubergines frites (Choumicha) : rondelles de 1 cm salées et mises à dégorger, rincées, pressées et épongées, frites puis hachées grossièrement ; sauce de tomates pelées et épépinées avec 1 c. à thé de concentré de tomate, 10 cl d'eau, ail et épices pour chermoula, 8 à 10 minutes à couvert à feu doux ; aubergines ajoutées 3 minutes, puis coriandre. Fiona Dunlop présente la version frite comme la façon traditionnelle.",
  "Version de Ch'hiwatine (sur Cooking With Alia) : aubergines pelées en partie, coupées en tranches, salées et frites ; tomates réduites seules en pâte épaisse ; un demi-poivron rouge grillé, cumin, sel et ail ; 10 à 15 minutes en remuant sans arrêt.",
  "Au four (Fatéma Hal) : aubergines grillées une quarantaine de minutes sur une plaque au four, pelées, coupées en dés et écrasées, puis cuites 30 minutes à la poêle avec tous les autres ingrédients et le jus d'un demi-citron.",
  "Vinaigre au lieu du citron : 1 c. à c. dans les 5 dernières minutes (Cooking With Alia, épisode 47), 1 c. à s. de vinaigre ou de jus de citron pendant 2 minutes (n° 689), ou un demi-verre ajouté hors du feu (Lalla Moulati, 2016).",
  "Un peu de piquant : Cayenne ou piments entiers au goût (Taste of Maroc), 1 c. à c. de piment moulu (Cooking With Alia, n° 689), ½ c. à c. de piment fort (Lalla Moulati, 2014).",
  "Poivre noir : ¼ c. à c. (Cooking With Alia, épisode 47) ou ½ c. à c. (Fatéma Hal).",
  "Plus rouge et plus saucé : 2 à 3 tomates par aubergine, comme la belle-mère de Christine Benlafquih, ou une cuillerée de concentré de tomate (Taste of Maroc ; Choumicha).",
  "Avec un ou deux poivrons grillés, à mi-chemin de la taktouka (Taste of Maroc), ou avec des courgettes et des poivrons rouges (My Moroccan Food).",
  "Zaalouk « à la nouvelle manière » : 100 g d'olives dénoyautées et un demi-citron confit, ajoutés après l'aubergine en continuant de remuer, puis cuisson jusqu'à ce que le zaalouk soit bien réduit (Lalla Moulati, 2014).",
  "Tomates râpées au lieu d'être pelées et coupées (Cooking With Alia, n° 689 ; Fiona Dunlop appelle la tomate râpée une technique marocaine classique)."
 ],
 "sources": [
  {
   "name": "Taste of Maroc (Christine Benlafquih), « Moroccan Zaalouk Recipe – Eggplant and Tomato Salad or Dip », mise à jour du 7 mars 2021 (copie archivée du 9 janvier 2026)",
   "url": "https://web.archive.org/web/20260109103840/https://tasteofmaroc.com/moroccan-zaalouk-recipe/",
   "used_for": "Méthode aux aubergines rôties (sauce d'abord, chair ajoutée et écrasée à la fourchette ou au dos de cuillère, citron en fin de cuisson) et méthode familiale en une marmite (sa belle-mère) ; proportions d'épices, d'huile et d'herbes ; 20 min de préparation et 40 de cuisson pour 4 ; profil « chermoula » (d'après Nada Kiffa) ; façons de cuire l'aubergine (bouillie, vapeur, rôtie, peau en partie gardée) ; tomates mûres, grande sauteuse, sucre ou miel si trop acide, paprika fumé et ail rôti non traditionnels, khobz qui sert de couverts, service, conservation. Autrice : résidente de longue date au Maroc, rédactrice fondatrice de Taste of Maroc et propriétaire de Taste of Casablanca, entreprise de visites gourmandes et d'activités culinaires à Casablanca."
  },
  {
   "name": "My Moroccan Food (Nargisse Benkabbou), « Zaalouk – Moroccan Aubergine Salad », 2 avril 2015",
   "url": "https://www.mymoroccanfood.com/home/2015/3/22/zaalouk",
   "used_for": "Recette de sa mère (aubergines crues cuites dans la sauce, à couvert puis à découvert jusqu'à évaporation, écrasées au presse-purée ou à la cuillère en bois) ; recette qui change d'une région et d'une famille à l'autre ; service tiède ou à température ambiante avec huile d'olive et coriandre ; 4 jours au réfrigérateur ; variante courgettes et poivrons rouges."
  },
  {
   "name": "My Moroccan Food (Nargisse Benkabbou), « Zaalouk Dip », 17 octobre 2022",
   "url": "https://www.mymoroccanfood.com/home/2022/10/17/zaalouk-dip",
   "used_for": "Même méthode avec les poids (600 g d'aubergines, 320 g de tomates), 2 c. à c. de paprika et de cumin, trois bandes de peau retirées sur chaque aubergine, service dans un plat peu profond."
  },
  {
   "name": "Cooking With Alia, « Eggplant Zaalouk (Moroccan Dip) / زعلوك الباذنجان » (n° 689)",
   "url": "https://www.cookingwithalia.com/689-eggplant-zaalouk/",
   "used_for": "Aubergines entières grillées 10 à 15 min sur la flamme à feu moyen en les retournant, peau grattée doucement, queue coupée ; sauce tomate à feu moyen ; aubergine cuite environ 15 min en remuant jusqu'à épaississement ; vinaigre ou citron 2 min ; tomates râpées ; service chaud ou froid avec du pain."
  },
  {
   "name": "Cooking With Alia, « 047 – Zaalouk – Moroccan Eggplant Salad »",
   "url": "https://www.cookingwithalia.com/zaalouk-moroccan-eggplant-salad-episode-47/",
   "used_for": "Variante bouillie (20 à 30 min à l'eau salée, aubergine pressée, 30 min de cuisson en écrasant à la cuillère en bois, vinaigre dans les 5 dernières minutes) ; ¼ de tasse de persil et de coriandre ; service chaud ou froid avec du pain."
  },
  {
   "name": "Cooking With Alia, « 172 – Zaalouk Recipe – Recipe courtesy of Ch'hiwatine »",
   "url": "https://www.cookingwithalia.com/zaalouk-recipe-courtesy-of-chhiwatin/",
   "used_for": "Variante frite (aubergines pelées en partie), tomates « super red » réduites en pâte épaisse, demi-poivron rouge, service tiède ou froid avec du pain."
  },
  {
   "name": "Choumicha (Choumicha Chafay), site officiel, « Zaâlouk d'aubergines » (copie archivée du 5 décembre 2024)",
   "url": "https://web.archive.org/web/20241205045718/https://choumicha.ma/recette/463-zaalouk-d-aubergines.html",
   "used_for": "Variante frite (rondelles dégorgées, rincées, pressées, frites, hachées), sauce tomate avec concentré, eau et épices pour chermoula, aubergines puis coriandre ; 4 personnes, 40 min de cuisson, 1 h au total ; service tiède ou froid ; graphie « Zaâlouk »."
  },
  {
   "name": "Lalla Moulati, « الزعلوك بطريقة جديدة » (zaalouk à la nouvelle manière), 10 novembre 2014",
   "url": "https://www.lalamoulati.net/653.html",
   "used_for": "Aubergines grillées de tous côtés puis enfermées dans un sac pour peler facilement, pas d'eau sur l'aubergine ; tomates pelées, épépinées, en tout petits dés ; sauce à feu moyen jusqu'à ce qu'elle soit épaisse, eau si besoin ; chair écrasée à la fourchette dans un grand saladier ; 1 kg d'aubergines pour 500 g de tomates ; variante olives et citron confit ; service chaud ou froid."
  },
  {
   "name": "Lalla Moulati, « زعلوك بالدنجال مشوي » (zaalouk d'aubergines grillées), 13 août 2016",
   "url": "https://www.lalamoulati.net/44772.html",
   "used_for": "Aubergines grillées à ne pas laver pour garder leur saveur ; coriandre, persil, ail, cumin, paprika ; vinaigre hors du feu ; service tiède."
  },
  {
   "name": "Fatéma Hal, « Zaalouk d'Aubergines », fiche recette de la marque Gaggenau (PDF)",
   "url": "https://media3.gaggenau.com/Documents/19499715_Gaggenau_Zaalouk_Aubergines.pdf",
   "used_for": "Recette de cheffe marocaine pour 4 : 1 kg d'aubergines grillées au four une quarantaine de minutes, peau et queue retirées, dés écrasés ; 250 g de tomates épépinées ; ail pilé ; 1 botte de coriandre et 1 botte de persil plat ; jus d'un demi-citron ; 30 min à la poêle ; service avec quartiers de citron et olives noires."
  },
  {
   "name": "Wikipédia (fr), « Fatéma Hal »",
   "url": "https://fr.wikipedia.org/wiki/Fat%C3%A9ma_Hal",
   "used_for": "Vérification : cheffe cuisinière marocaine née à Oujda en 1952, a ouvert le restaurant Mansouria à Paris en 1984, autrice du « Grand Livre de la cuisine marocaine » (2005)."
  },
  {
   "name": "Fiona Dunlop, The North African Kitchen, « Mashed aubergine, tomato and garlic salad » (Zaalouk aux tomates), aperçu ckbk",
   "url": "https://app.ckbk.com/recipe/nort67121c01s001ss002r003/mashed-aubergine-tomato-and-garlic-salad",
   "used_for": "Introduction seule : zaalouk traditionnellement fait d'aubergines frites selon l'autrice, version vapeur plus légère d'Aicha, tomate râpée « technique marocaine classique », zaalouk mangé tiède ou froid."
  },
  {
   "name": "Wikipédia (en), « Zaalouk »",
   "url": "https://en.wikipedia.org/wiki/Zaalouk",
   "used_for": "Graphie en arabe marocain (زعلوك) ; description générale : aubergine grillée, mêlée aux tomates, épices et ail."
  },
  {
   "name": "My Moroccan Food, page « About »",
   "url": "https://www.mymoroccanfood.com/about",
   "used_for": "Vérification : Nargisse Benkabbou a grandi à Bruxelles dans une famille marocaine, ancienne cheffe exécutive de L'Mida à Marrakech, autrice de « Casablanca: My Moroccan Food »."
  },
  {
   "name": "Cooking With Alia, page « About »",
   "url": "https://www.cookingwithalia.com/about/",
   "used_for": "Vérification : Alia partage la cuisine marocaine avec laquelle elle a grandi."
  },
  {
   "name": "Femmes du Maroc (magazine marocain), « Zaâlouk d'aubergines », La rédaction, 23 mai 2023",
   "url": "https://femmesdumaroc.com/plaisirs/food-drink/zaalouk-daubergines",
   "used_for": "Contre-vérification : Graphie darija « Zaâlouk » (aussi employée par d'autres autrices du magazine en 2017 et 2018). Aubergines grillées sur un grill à charbon en les retournant, puis mises à suer quelques minutes dans un sac de congélation avant de retirer la peau carbonisée ; sauce de tomates pelées et épépinées cuite d'abord (à couvert, 8 à 10 min), aubergines ajoutées ensuite (10 min), coriandre à la fin ; assaisonnement aux épices pour charmoula ; servi tiède ou frais, à midi comme le soir. Pour 10 à 12 portions, avec une moitié d'aubergines frites : le passage sur la friture et la sauce reprend presque mot pour mot la recette de Choumicha ; la partie grillée et le sac sont propres à ce texte."
  },
  {
   "name": "Femmes du Maroc, « La recette : Sardines marinées et zaalouk » (chef Richard Meyniel), 17 avril 2023",
   "url": "https://femmesdumaroc.com/plaisirs/food-drink/la-recette-sardines-marinees-et-zaalouk",
   "used_for": "Contre-vérification : Aubergines entières cuites sur le charbon : la peau brûle et la chair prend un goût fumé ; zaâlouk sans tomate (aubergine, oignon, persil, huile d'olive), ce qui confirme la description de la recette dans les écarts entre sources."
  },
  {
   "name": "Morocco World News, Layla Dahamou (Taroudant), « Moroccan Cuisine: Recipe for Zaaluk Salad (eggplant salad) », 17 septembre 2012",
   "url": "https://www.moroccoworldnews.com/2012/09/149688/moroccan-cuisine-recipe-for-zaaluk-salad-eggplant-salad/",
   "used_for": "Contre-vérification : Les familles marocaines le servent en entrée avec les plats principaux (tajine, marqa), le plus souvent froid, parfois chaud, avec du pain ; sauce d'abord (tomates pelées, ail, persil, épices, huile d'olive), puis aubergine bouillie et écrasée, cuite jusqu'à être presque sèche ; 4 gousses d'ail et 4 c. à s. d'huile d'olive, comme la recette ; décor de citron et d'olives."
  },
  {
   "name": "Morocco World News, Safaa Kasraoui (Rabat), « Morocco's Zaalouk, a Flavorful Side Dish or Main Course », 12 mai 2023",
   "url": "https://www.moroccoworldnews.com/2023/05/33613/moroccos-zaalouk-a-flavorful-side-dish-or-main-course/",
   "used_for": "Contre-vérification : Le zaalouk fait partie des entrées des repas en famille au Maroc ; le goût fumé vient des aubergines non pelées grillées sur le feu, qu'on laisse tiédir avant de les peler ; tomates, aubergines, persil, ail, paprika, cumin, sel, huile d'olive."
  },
  {
   "name": "Bladi.net, « Zaalouk ou salade aux aubergines et aux tomates », 30 octobre 2005",
   "url": "https://www.bladi.net/recettes/zaalouk-ou-salade-aux-aubergines-et-aux-tomates.html",
   "used_for": "Contre-vérification : 1 kg d'aubergines pour 500 g de tomates (même rapport que la recette) ; piment doux (paprika), cumin, ail, huile d'olive, jus de citron ; tomates mondées cuites d'abord avec les épices, aubergines ajoutées ensuite, écrasées en remuant jusqu'à évaporation complète de l'eau (15 à 20 min) ; assaisonnement rectifié au jus de citron ; olives noires et citron confit. Aubergines bouillies (non grillées)."
  },
  {
   "name": "El Fenn (hôtel-restaurant de la médina de Marrakech), « Ultra Smoky Zaalouk », 27 novembre 2022",
   "url": "https://el-fenn.com/ultra-smoky-zaalouk/",
   "used_for": "Contre-vérification : Aubergines posées directement sur la flamme du gaz jusqu'à être très noircies et tendres, puis enfermées dans un sac en plastique ou en papier, fermé sans serrer, pour qu'elles continuent de cuire, et pelées une fois tièdes ; 2 c. à c. de cumin, 2 c. à c. de paprika et ¼ de tasse (4 c. à s.) d'huile d'olive, comme la recette ; les salades marocaines ouvrent les repas de fête, servi en entrée (pour 4 à 6 personnes) à température ambiante ; 3 à 4 jours au réfrigérateur."
  },
  {
   "name": "Anses (Agence nationale de sécurité sanitaire de l'alimentation), « Éviter les toxi-infections alimentaires en confinement : les bonnes pratiques », 8 avril 2020",
   "url": "https://www.anses.fr/fr/actualite/eviter-toxi-infections-alimentaires-confinement-bonnes-pratiques",
   "used_for": "Contre-vérification : Les plats cuisinés à la maison ne doivent pas rester plus de 2 heures à température ambiante avant d'être mangés ou mis au réfrigérateur, et doivent être consommés dans les 3 jours ; restes en boîtes fermées ou sous film ; décongélation au réfrigérateur, au micro-ondes ou directement par la cuisson ou le réchauffage, puis consommation rapide (pas plus de trois jours) sans recongeler ; laver soigneusement les fruits et légumes à l'eau potable."
  },
  {
   "name": "USDA FSIS, « Leftovers and Food Safety » (copie archivée du 3 novembre 2026)",
   "url": "https://web.archive.org/web/20261103202835/https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety",
   "used_for": "Contre-vérification : Restes : au réfrigérateur dans les 2 heures, 3 à 4 jours au réfrigérateur, 3 à 4 mois au congélateur pour la qualité ; décongélation sûre au réfrigérateur, à l'eau froide ou au micro-ondes, ou réchauffage direct sans décongeler. Le site en direct refuse l'outil (403)."
  },
  {
   "name": "FoodSafety.gov (gouvernement américain), « Cold Food Storage Chart » (copie archivée du 21 octobre 2026)",
   "url": "https://web.archive.org/web/20261021170207/https://www.foodsafety.gov/food-safety-charts/cold-food-storage-charts",
   "used_for": "Contre-vérification : Soupes et plats mijotés aux légumes : 3 à 4 jours au réfrigérateur, 2 à 3 mois au congélateur, ce qui recoupe les 2 à 3 mois de Taste of Maroc. Le site en direct refuse l'outil (403)."
  }
 ],
 "discrepancies": [
  "Cuisson des aubergines, la plus grande différence entre les recettes selon Taste of Maroc : grillées ou rôties (Cooking With Alia n° 689 ; Lalla Moulati 2014 et 2016 ; Fatéma Hal, au four ; méthode préférée de Taste of Maroc ; description de Wikipédia), crues directement dans la sauce (belle-mère de Christine Benlafquih ; mère de Nargisse Benkabbou), bouillies (Cooking With Alia, épisode 47), à la vapeur (citée par Taste of Maroc et Fiona Dunlop), frites (Choumicha ; Ch'hiwatine ; « traditionnelle » selon Fiona Dunlop). Retenu : grillées, la méthode la plus fréquente dans les sources lues (4 des 6 sources principales) ; les autres sont dans les variantes.",
  "Tomates : pelées, épépinées et coupées (Taste of Maroc, Lalla Moulati 2014, Choumicha), épépinées et coupées sans que la peau soit mentionnée (Fatéma Hal ; My Moroccan Food), pelées et coupées (Cooking With Alia, épisode 47) ou râpées sans la peau (Cooking With Alia n° 689). Retenu : pelées, épépinées et en dés, râpées en option.",
  "Rapport tomates/aubergines : 250 g pour 1 kg (Fatéma Hal), 500 g pour 1 kg (Lalla Moulati 2014), 320 g pour 600 g (My Moroccan Food 2022), poids égal (Cooking With Alia, épisode 47 : 1 livre de chaque, environ 450 g), 2 à 3 tomates par aubergine (belle-mère de Christine Benlafquih). Retenu : 500 g de tomates pour 1 kg d'aubergines.",
  "Aubergines pour 4 personnes : 1 kg (Fatéma Hal), 2 grosses ou 3 moyennes (Taste of Maroc), 2 grosses (My Moroccan Food), 4 (Choumicha). Retenu : 1 kg.",
  "Épices : paprika de ½ c. à c. (Fatéma Hal) à 1 c. à s. (Lalla Moulati 2014) ; cumin de ½ c. à c. (Fatéma Hal ; My Moroccan Food 2015) à 1 c. à s. (Lalla Moulati 2014). Retenu : 2 c. à c. de chaque, comme Taste of Maroc et My Moroccan Food 2022.",
  "Ail : 1 gousse (Choumicha), 2 (Fatéma Hal ; Cooking With Alia n° 689 ; My Moroccan Food 2015), 3 (My Moroccan Food 2022), 6 (Taste of Maroc ; Lalla Moulati 2014). Retenu : 4 gousses, au milieu de la fourchette, à ajuster selon ton goût.",
  "Herbes : 1 c. à s. en tout (My Moroccan Food 2015 et Cooking With Alia n° 689, coriandre seule ; Lalla Moulati 2014, persil et coriandre), 2 c. à s. de chaque (Taste of Maroc), ¼ de tasse (4 c. à s.) de chaque (Cooking With Alia, épisode 47), 1 botte de chaque (Fatéma Hal). Retenu : 4 c. à s. de chaque, plus un peu au service.",
  "Moment des herbes : dès le début avec les tomates (Taste of Maroc, Lalla Moulati 2014, Cooking With Alia n° 689, Fatéma Hal, My Moroccan Food) ou à la fin (Choumicha). Retenu : au début.",
  "Huile d'olive : de 1 à 2 c. à s. (Cooking With Alia, épisode 47) ou 2 c. à s. (My Moroccan Food 2015) à un demi-verre à thé (Lalla Moulati 2014) ; 4 c. à s. chez Taste of Maroc, 5 chez Fatéma Hal. Retenu : 4 c. à s., plus un filet au service.",
  "Acidité : jus de citron (Fatéma Hal, un demi-citron ; facultatif chez Taste of Maroc), vinaigre (Cooking With Alia, épisode 47 ; Lalla Moulati 2016), l'un ou l'autre (Cooking With Alia n° 689), aucun (My Moroccan Food, Choumicha). Retenu : le jus d'un demi-citron.",
  "Moment du citron : avec l'aubergine (Fatéma Hal, au début des 30 minutes ; Taste of Maroc, à l'ajout de l'aubergine, ou « en fin de cuisson » dans son introduction) ou tout à la fin, 2 minutes (Cooking With Alia n° 689, pour le vinaigre ou le citron). Retenu : à la fin, 2 minutes.",
  "Cuisson après l'ajout de l'aubergine : 3 minutes (Choumicha, aubergines frites), 5 à 10 minutes ou plus pour un zaalouk plus sec (Taste of Maroc), environ 15 minutes (Cooking With Alia n° 689), 30 minutes en cuisant tout ensemble (Fatéma Hal). Retenu : 15 minutes, jusqu'à ce que ce soit épais.",
  "Temps de grillage : 10 à 15 minutes sur la flamme (Cooking With Alia n° 689), 20 à 25 minutes sous le gril du four pour des moitiés (Taste of Maroc), une quarantaine de minutes au four (Fatéma Hal). Retenu : 15 minutes sur la flamme, avec le gril du four en solution de repli.",
  "Température de service : tiède ou froid (Choumicha), chaud ou froid (Cooking With Alia, Lalla Moulati 2014), tiède (Lalla Moulati 2016), tiède ou à température ambiante (My Moroccan Food 2015), tiède, froid ou à température ambiante (Taste of Maroc). Retenu : tiède ou froid.",
  "Choumicha assaisonne avec un mélange d'épices du commerce (épices Dar Choumicha pour chermoula) dont la composition n'est pas donnée : ses quantités d'épices ne sont pas comparables aux autres.",
  "Fatéma Hal : sa recette a été lue sur une fiche de la marque d'électroménager Gaggenau qui la lui attribue, pas dans un de ses livres.",
  "Femmes du Maroc : la recette du chef Richard Meyniel (17 avril 2023) est un zaalouk sans tomate, servi avec des sardines marinées ; écartée, car ce n'est pas le zaalouk familial. Le magazine publie aussi un « Zaâlouk d'aubergines » (23 mai 2023, pour 10 à 12 portions), lu lors de la contre-vérification : aubergines en partie frites, en partie grillées au charbon puis mises à suer quelques minutes dans un sac de congélation, sauce tomate aux épices pour charmoula, 10 minutes de cuisson ensemble, servi tiède ou frais.",
  "Lalla Moulati, recette du 5 octobre 2017 (aubergines frites à l'huile de maïs, citron) : non utilisée, car elle présente le zaalouk comme préparé dans tout le monde arabe (Palestine, Syrie, Liban, Irak), ce qu'aucune autre source lue ne dit.",
  "Contre-vérifiée le 6 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 16 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Écraser les aubergines au pilon : aucune source lue ne le fait (fourchette, cuillère en bois, presse-purée ou dos de cuillère). Seul l'ail est « pilé » chez Fatéma Hal, donc le pilon n'est proposé que pour l'ail.",
  "Cuisson à la vapeur : seulement mentionnée par Taste of Maroc et par Fiona Dunlop, dont la méthode est réservée aux abonnés de ckbk ; durée et façon de faire non vérifiées, donc pas détaillées.",
  "Affirmation de Fiona Dunlop selon laquelle le zaalouk se fait traditionnellement avec des aubergines frites : seule son introduction est lisible, et aucune autre source lue ne le dit.",
  "Temps dans le sac : Lalla Moulati écrit seulement d'attendre un peu ; aucune durée précise, donc pas de minuteur pour cette étape.",
  "Origine de la belle-mère de Christine Benlafquih : non précisée sur la page ; sa méthode est seulement présentée comme celle de sa famille.",
  "Paula Wolfert (The Food of Morocco, p. 93) : recette non lue ; seul un résumé de moteur de recherche citant Time Out (aubergine grillée, tomates, ail, jus de citron) a été vu.",
  "Sens du mot « zaalouk » (« purée » selon un résumé de moteur de recherche) : aucune source fiable lue ne l'explique.",
  "Graphie darija « Zaâlouk » : celle du site de Choumicha, recoupée lors de la contre-vérification par Femmes du Maroc (« Zaâlouk d'aubergines », 23 mai 2023, et d'autres articles du magazine en 2017 et 2018).",
  "choumicha.ma était inaccessible le 2026-11-06 (erreur 525) : recette lue sur la copie archivée du 5 décembre 2024. tasteofmaroc.com a bloqué la lecture directe (pare-feu, erreur 403) : page lue sur la copie archivée du 9 janvier 2026 ; la version en ligne pourrait avoir changé depuis."
 ],
 "cuisine": "Marocaine",
 "rayon": "Salades",
 "pairs": [
  "khobz"
 ],
 "img": "img/zaalouk.jpg",
 "photo": {
  "author": "Tamorlan",
  "license": "CC BY-SA 3.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/3.0",
  "page": "https://commons.wikimedia.org/wiki/File:Zaalouk-01.JPG",
  "modified": "réduite"
 }
});
