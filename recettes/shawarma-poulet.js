/* Recette : Chawarma de poulet au four. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "shawarma-poulet",
 "title": "Chawarma de poulet au four",
 "darija": "",
 "arabic": "شاورما الدجاج",
 "tagline": "Le sandwich des rues du Liban, fait à la maison sans broche : du poulet mariné toute une nuit, rôti au four, roulé dans un pain libanais avec la toum, la sauce à l'ail.",
 "category": "Sandwich",
 "occasion": "Au Liban, le chawarma se mange au restaurant et dans les snacks de rue ; Hadia Zebib a mis au point cette version au four pour le faire à la maison, sans broche verticale (Hadia's Lebanese Cuisine ; Mama's Lebanese Kitchen). C'est l'un des plats de rue les plus connus au monde (Wikipédia en anglais et en arabe).",
 "region": "Levant (Liban, Syrie, Palestine, Jordanie). Le chawarma est né au Levant sous l'Empire ottoman, de la même technique de broche verticale que le döner turc (Wikipédia en anglais ; Wikipédia en arabe pour l'origine au Levant, sous les Ottomans). Son nom viendrait du turc « çevirme », qui veut dire « tourner » (Wikipédia ; Hadia's Lebanese Cuisine). Ce n'est pas un plat marocain.",
 "servings": 4,
 "servings_label": "sandwichs",
 "time": {
  "prep": 30,
  "cook": 45,
  "rest": 720,
  "rest_label": "Marinade"
 },
 "difficulty": "Moyen",
 "equipment": [
  "Une planche et un couteau réservés à la viande crue (FSA)",
  "Un grand saladier avec un couvercle ou du film alimentaire",
  "Un grand plat à four, d'environ 23 x 33 cm (The Matbakh)",
  "Un thermomètre de cuisson : le seul moyen d'être sûr que le poulet est cuit (Alphafoodie ; Santé Canada)",
  "Un robot mixeur ou un mini-hachoir, pour la toum",
  "Un bocal propre avec son couvercle, pour garder la toum",
  "Une presse à panini ou une poêle, pour griller les sandwichs (facultatif)"
 ],
 "ingredients": [
  {
   "group": "Le poulet et sa marinade",
   "items": [
    {
     "id": "poulet",
     "q": 700,
     "u": "g",
     "name": "de hauts de cuisse de poulet halal, désossés et sans peau",
     "note": "ou des blancs, ou un mélange des deux",
     "canon": "poulet"
    },
    {
     "id": "oignon",
     "q": 1,
     "u": "",
     "name": "oignon moyen",
     "pl": "oignons moyens",
     "note": "à émincer",
     "canon": "oignon"
    },
    {
     "id": "ail",
     "q": 4,
     "u": "",
     "name": "gousse d'ail",
     "pl": "gousses d'ail",
     "note": "à écraser",
     "canon": "ail"
    },
    {
     "id": "yaourt",
     "q": 4,
     "u": "c. à s.",
     "name": "de yaourt nature",
     "canon": "yaourt"
    },
    {
     "id": "citron",
     "q": 5,
     "u": "c. à s.",
     "name": "de jus de citron frais",
     "note": "pas de jus en bouteille",
     "canon": "citron"
    },
    {
     "id": "vinaigre",
     "q": 2,
     "u": "c. à s.",
     "name": "de vinaigre blanc",
     "note": "ou autant de jus de citron",
     "canon": "vinaigre"
    },
    {
     "id": "huile",
     "q": 3,
     "u": "c. à s.",
     "name": "d'huile d'olive",
     "note": "ou de tournesol",
     "canon": "huile-olive"
    },
    {
     "id": "sel",
     "q": 0.75,
     "u": "c. à c.",
     "name": "de sel fin",
     "canon": "sel"
    },
    {
     "id": "paprika",
     "q": 1.5,
     "u": "c. à c.",
     "name": "de paprika",
     "canon": "paprika"
    },
    {
     "id": "coriandre-moulue",
     "q": 1,
     "u": "c. à c.",
     "name": "de coriandre en poudre",
     "canon": "coriandre-moulue"
    },
    {
     "id": "poivre",
     "q": 1,
     "u": "c. à c.",
     "name": "de poivre blanc moulu",
     "note": "ou noir",
     "canon": "poivre"
    },
    {
     "id": "cardamome",
     "q": 0.25,
     "u": "c. à c.",
     "name": "de cardamome en poudre",
     "canon": "cardamome"
    },
    {
     "id": "gingembre",
     "q": 0.25,
     "u": "c. à c.",
     "name": "de gingembre en poudre",
     "canon": "gingembre"
    },
    {
     "id": "cannelle",
     "q": 0.25,
     "u": "c. à c.",
     "name": "de cannelle en poudre",
     "canon": "cannelle"
    },
    {
     "id": "muscade",
     "q": 0.125,
     "u": "c. à c.",
     "name": "de noix de muscade râpée",
     "canon": "noix-de-muscade"
    }
   ]
  },
  {
   "group": "La toum (sauce à l'ail)",
   "items": [
    {
     "id": "ail-toum",
     "q": 1,
     "u": "",
     "name": "tête d'ail",
     "pl": "têtes d'ail",
     "note": "bien fraîche, sans germe vert",
     "canon": "ail"
    },
    {
     "id": "sel-toum",
     "q": 0.25,
     "u": "c. à c.",
     "name": "de sel fin",
     "canon": "sel"
    },
    {
     "id": "huile-toum",
     "q": 160,
     "u": "ml",
     "name": "d'huile neutre (tournesol)",
     "note": "pas d'huile d'olive",
     "canon": "huile"
    },
    {
     "id": "citron-toum",
     "q": 1.5,
     "u": "c. à s.",
     "name": "de jus de citron frais",
     "canon": "citron"
    }
   ]
  },
  {
   "group": "Pour servir",
   "items": [
    {
     "id": "pain",
     "q": 4,
     "u": "",
     "name": "pain libanais (pain arabe fin)",
     "pl": "pains libanais (pains arabes fins)",
     "note": "ou des pains pita ; contient du gluten (blé)",
     "canon": "pain-pita"
    },
    {
     "id": "cornichons",
     "q": null,
     "u": "",
     "name": "cornichons au sel",
     "note": "en fines tranches",
     "canon": "cornichons"
    },
    {
     "id": "frites",
     "q": null,
     "u": "",
     "name": "frites",
     "note": "à faire avec la recette des frites de l'application",
     "recipe": "frites",
     "canon": "pomme-de-terre"
    },
    {
     "id": "laitue",
     "q": null,
     "u": "",
     "name": "feuilles de laitue romaine",
     "note": "lavées, en lanières",
     "canon": "laitue"
    },
    {
     "id": "tomates",
     "q": null,
     "u": "",
     "name": "tomates",
     "note": "en rondelles ; facultatif",
     "canon": "tomate"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Coupe le poulet",
   "text": "Lave-toi les mains. Sur une planche réservée à la viande crue, coupe {{poulet}} de poulet en fines lanières, d'environ 1 cm d'épaisseur. Ne lave pas le poulet.",
   "timer": null,
   "tip": "Laver le poulet cru projette les bactéries sur les mains, le plan de travail et les ustensiles (FSA). Tu peux aussi demander au boucher de le couper en fines tranches (Gulf News)."
  },
  {
   "phase": "Préparation",
   "title": "Prépare l'ail et l'oignon",
   "text": "Écrase {{ail:full}}. Épluche et émince finement {{oignon:full}}.",
   "timer": null,
   "img": {
    "src": "img/etapes/oignon-emince.jpg",
    "alt": "Oignon émincé et ail écrasé sur une planche",
    "caption": "Émincer l'oignon",
    "w": 1000,
    "h": 750,
    "credit": "Photo de l'étape « Prépare l'ail et l'oignon » : jchristin, Flickr, licence CC BY 2.0 (réduite)."
   }
  },
  {
   "phase": "Préparation",
   "title": "Prépare la marinade",
   "text": "Dans un grand saladier, mets {{yaourt}} de yaourt, {{citron}} de jus de citron, {{vinaigre}} de vinaigre, {{huile}} d'huile et l'ail écrasé. Ajoute {{sel}} de sel, {{paprika}} de paprika, {{coriandre-moulue}} de coriandre en poudre, {{poivre}} de poivre, {{cardamome}} de cardamome, {{gingembre}} de gingembre, {{cannelle}} de cannelle et {{muscade}} de muscade. Fouette jusqu'à ce que la marinade soit bien lisse.",
   "timer": null,
   "tip": "Une marinade de chawarma, c'est un acide (citron, vinaigre), une huile et des épices (Hadia's Lebanese Cuisine). Le citron, le vinaigre et le yaourt attendrissent le poulet (Hadia's Lebanese Cuisine ; Alphafoodie)."
  },
  {
   "phase": "Préparation",
   "title": "Fais mariner une nuit",
   "text": "Ajoute le poulet et l'oignon dans la marinade, et mélange pour bien enrober chaque morceau. Couvre et mets au réfrigérateur au moins 6 heures, idéalement toute une nuit, mais pas plus de 24 heures.",
   "timer": null,
   "tip": "Toujours au réfrigérateur, jamais sur le plan de travail (Santé Canada). Pose le saladier bien couvert en bas du réfrigérateur, pour que rien ne coule sur les autres aliments (FSA)."
  },
  {
   "phase": "Préparation",
   "title": "Écrase l'ail de la toum",
   "text": "Prépare la toum pendant que le poulet marine, ou la veille. Sépare et épluche les gousses de {{ail-toum:full}}. Mets-les dans le robot avec {{sel-toum}} de sel. Mixe 10 à 20 secondes, arrête et racle les bords. Recommence trois ou quatre fois, jusqu'à obtenir une pâte.",
   "timer": null,
   "tip": "Prends de l'ail ferme, sans germe vert : il donne un goût amer (Hadia's Lebanese Cuisine ; Alphafoodie). Attention : dans un grand robot, Mama's Lebanese Kitchen conseille au moins 3 têtes d'ail, car les grandes lames attrapent mal une petite quantité."
  },
  {
   "phase": "Préparation",
   "title": "Monte la toum",
   "text": "Remets le robot en marche et ne l'arrête plus. Verse {{huile-toum}} d'huile en filet très fin, petit à petit. Garde à côté {{citron-toum}} de jus de citron. Quand l'ail devient crémeux, alterne : un peu d'huile, puis un peu de jus de citron, jusqu'à tout utiliser. Compte environ 10 minutes.",
   "timer": null,
   "tip": "Va très lentement : si l'huile coule trop vite, la sauce tranche et redevient liquide (Mama's Lebanese Kitchen ; Alphafoodie ; Hadia's Lebanese Cuisine). Huile neutre seulement : l'huile d'olive a un goût trop fort et rend la toum moins blanche (Hadia's Lebanese Cuisine ; Mama's Lebanese Kitchen ; Alphafoodie)."
  },
  {
   "phase": "Préparation",
   "title": "Garde la toum au frais",
   "text": "Mets la toum dans un bocal propre et fermé, au réfrigérateur. Elle va raffermir au froid.",
   "timer": null,
   "tip": "Hadia la trouve encore meilleure quelques heures plus tard, ou le lendemain. Garde-la toujours au froid, à 4 °C ou moins, jamais à température ambiante. Mange-la dans les 4 jours : c'est le délai le plus prudent, celui du NCHFP américain pour l'ail dans l'huile ; Santé Canada donne une semaine au plus."
  },
  {
   "phase": "Cuisson",
   "title": "Préchauffe le four et étale le poulet",
   "text": "Préchauffe le four à 220 °C. Verse le poulet, l'oignon et toute la marinade dans un grand plat à four. Étale bien, en une seule couche.",
   "timer": null,
   "tip": "Hadia fait cuire le reste de la marinade avec le poulet. Laisse un peu d'espace entre les morceaux : ils rôtissent et grillent au lieu de cuire à la vapeur (Alphafoodie)."
  },
  {
   "phase": "Cuisson",
   "title": "Fais rôtir",
   "text": "Enfourne pour 40 minutes environ. À mi-cuisson, remue le poulet une fois.",
   "timer": {
    "min": 40,
    "label": "Poulet au four",
    "done": "Vérifie la cuisson du poulet."
   },
   "tip": "Le temps dépend du four et de la quantité : 40 à 45 minutes chez The Matbakh, environ 50 minutes chez Hadia pour 1 kg, 25 à 30 minutes chez Alphafoodie pour une petite quantité étalée sur une plaque. C'est la cuisson à cœur qui compte : vérifie-la à l'étape suivante."
  },
  {
   "phase": "Cuisson",
   "title": "Vérifie la cuisson",
   "text": "Plante un thermomètre au cœur du morceau le plus épais : il doit indiquer au moins 74 °C. Sans thermomètre, coupe le plus gros morceau : la viande doit être fumante, sans trace de rose, et le jus doit être clair. Sinon, remets au four quelques minutes et vérifie encore.",
   "timer": null,
   "tip": "74 °C pour les morceaux de volaille (Santé Canada ; Alphafoodie). Sans thermomètre : chair fumante, plus rose, jus clair (FSA)."
  },
  {
   "phase": "Cuisson",
   "title": "Fais griller sous le gril",
   "text": "Allume le gril du four et compte 2 minutes, en surveillant : les bords doivent griller sans brûler. Si besoin, laisse une minute de plus au plus.",
   "timer": {
    "min": 2,
    "label": "Gril",
    "done": "Les bords sont dorés ? Sors le plat. Sinon, une minute de plus au plus."
   },
   "tip": "Hadia et Alphafoodie passent le plat 2 à 3 minutes sous le gril, pour des bords plus grillés et plus colorés."
  },
  {
   "phase": "Cuisson",
   "title": "Émince le poulet",
   "text": "Laisse reposer le poulet quelques minutes, puis coupe-le en fines lamelles.",
   "timer": null,
   "tip": "Le repos garde le poulet juteux (Alphafoodie). Mama's Lebanese Kitchen l'effiloche finement."
  },
  {
   "phase": "Service",
   "title": "Garnis les pains",
   "text": "Étale une bonne couche de toum sur {{pain:full}}. Ajoute le poulet, des {{cornichons}}, des {{frites}}, quelques {{laitue}} et, si tu veux, des {{tomates}}.",
   "timer": null,
   "tip": "Au Liban, le chawarma de poulet se mange avec la toum. Hadia déconseille d'y ajouter de la mayonnaise, du yaourt à l'ail ou une autre sauce : ils peuvent atténuer le goût des autres ingrédients."
  },
  {
   "phase": "Service",
   "title": "Roule, fais griller et sers",
   "text": "Roule chaque sandwich bien serré. Si tu veux, passe-le dans une presse à panini, une poêle ou le four, jusqu'à ce qu'il soit doré et croustillant. Sers aussitôt.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Range les restes",
   "text": "Mets les restes de poulet au réfrigérateur dans les 2 heures, et mange-les dans les 2 jours. Réchauffe-les une seule fois, jusqu'à ce qu'ils soient fumants à cœur.",
   "timer": null,
   "tip": "Santé Canada indique 74 °C pour réchauffer les restes ; la FSA demande qu'ils soient fumants partout, et réchauffés une seule fois."
  }
 ],
 "secrets": [
  {
   "text": "Prends des hauts de cuisse : un peu plus gras, ils restent juteux. Le blanc marche aussi, mais il sèche vite s'il cuit trop.",
   "source": "Alphafoodie (Samira Kazan) ; Gulf News, avec le restaurant libanais Zahrat Lebnan ; Mama's Lebanese Kitchen (75 % de blanc et 25 % de cuisse)"
  },
  {
   "text": "Coupe le poulet en fines lanières : la marinade touche plus de surface, et chaque bouchée a plus de goût.",
   "source": "Alphafoodie ; Mama's Lebanese Kitchen ; Gulf News (Zahrat Lebnan)"
  },
  {
   "text": "Une marinade de chawarma a trois parties : un acide (citron, vinaigre), une huile et les épices.",
   "source": "Hadia's Lebanese Cuisine ; Gulf News (Zahrat Lebnan : citron, vinaigre de cidre, huile d'olive, épices) ; Alphafoodie"
  },
  {
   "text": "Laisse mariner longtemps, toujours au réfrigérateur : une nuit chez Mama's Lebanese Kitchen, de 6 à 24 heures chez Hadia, et jamais plus de 24 heures.",
   "source": "Mama's Lebanese Kitchen ; Hadia's Lebanese Cuisine ; Alphafoodie (24 heures au plus)"
  },
  {
   "text": "Un four bien chaud, à 220 °C, puis 2 à 3 minutes sous le gril pour griller les bords.",
   "source": "Hadia's Lebanese Cuisine ; Alphafoodie ; The Matbakh (220 °C)"
  },
  {
   "text": "La toum est la sauce du chawarma de poulet ; le tarator, la sauce au tahini, va avec le chawarma de viande et les falafels.",
   "source": "Hadia's Lebanese Cuisine ; Wikipédia en anglais et en arabe"
  },
  {
   "text": "Pour la toum, verse l'huile en filet très fin, robot en marche, et alterne avec le citron : c'est une émulsion, comme une mayonnaise.",
   "source": "Mama's Lebanese Kitchen ; Alphafoodie ; Hadia's Lebanese Cuisine"
  },
  {
   "text": "Huile neutre pour la toum, jamais d'huile d'olive.",
   "source": "Hadia's Lebanese Cuisine ; Mama's Lebanese Kitchen ; Alphafoodie"
  },
  {
   "text": "Ail frais et ferme, sans germe vert, pour une toum qui n'est pas amère.",
   "source": "Hadia's Lebanese Cuisine ; Alphafoodie"
  },
  {
   "text": "Autrefois, la toum se faisait au mortier : l'ail pilé avec le sel, puis l'huile ajoutée par toutes petites quantités, pendant 30 à 40 minutes, avec quelques gouttes de citron.",
   "source": "Mama's Lebanese Kitchen"
  },
  {
   "text": "Si ta toum tranche, ne la jette pas : Mama's Lebanese Kitchen s'en sert comme marinade pour du poulet grillé ; Alphafoodie recommence avec un peu d'ail et y ajoute peu à peu la sauce ratée.",
   "source": "Mama's Lebanese Kitchen ; Alphafoodie"
  },
  {
   "text": "Roule le sandwich bien serré et passe-le à la presse ou au four : il devient croustillant.",
   "source": "Hadia's Lebanese Cuisine ; Alphafoodie (à la poêle)"
  },
  {
   "text": "Un thermomètre est le seul moyen d'être sûr que le poulet est cuit (74 °C), sans le dessécher.",
   "source": "Alphafoodie ; Santé Canada"
  },
  {
   "text": "Prends des cornichons au sel, à la libanaise.",
   "source": "Mama's Lebanese Kitchen (« salty cucumber pickles ») ; Hadia's Lebanese Cuisine (pickles en fines tranches)"
  }
 ],
 "mistakes": [
  "Laver le poulet cru : l'eau projette les bactéries sur les mains, le plan de travail et les ustensiles (FSA).",
  "Laisser mariner sur le plan de travail : la marinade se fait au réfrigérateur (Santé Canada).",
  "Verser sur le poulet cuit de la marinade qui a touché la viande crue (Santé Canada).",
  "Trop cuire le blanc de poulet : il devient sec (Mama's Lebanese Kitchen ; Alphafoodie).",
  "Se fier à la couleur seule : vérifie 74 °C au cœur avec un thermomètre (Alphafoodie ; Santé Canada).",
  "Verser l'huile trop vite dans la toum : elle tranche (Mama's Lebanese Kitchen ; Alphafoodie ; Hadia's Lebanese Cuisine).",
  "Faire la toum à l'huile d'olive : goût trop fort, couleur moins blanche (Hadia's Lebanese Cuisine ; Mama's Lebanese Kitchen ; Alphafoodie).",
  "Prendre de l'ail germé : la toum devient amère (Hadia's Lebanese Cuisine ; Alphafoodie).",
  "Garder la toum à température ambiante, ou trop longtemps au réfrigérateur (Santé Canada ; NCHFP).",
  "Servir le chawarma de poulet avec de la mayonnaise ou du yaourt à l'ail : au Liban, c'est la toum (Hadia's Lebanese Cuisine).",
  "Laisser les restes plus de 2 heures hors du réfrigérateur, ou les réchauffer plus d'une fois (FSA)."
 ],
 "serving": "Dans un pain libanais, un pain arabe fin ou un pain saj : une bonne couche de toum, le poulet, des cornichons au sel, des frites et de la laitue romaine, puis le sandwich roulé serré et passé à la presse ou au four (Hadia's Lebanese Cuisine ; Mama's Lebanese Kitchen ; Alphafoodie ; The Matbakh). Au Proche-Orient, le chawarma de poulet se sert avec la sauce à l'ail, des frites et des pickles (Wikipédia en anglais et en arabe). Mama's Lebanese Kitchen ajoute des tomates grillées, Alphafoodie des tomates fraîches. Il se mange aussi en assiette, avec du riz, des salades et du houmous (Alphafoodie ; The Matbakh, avec du riz aux vermicelles). Pour les frites, suis la recette de l'application. Restes de poulet : au réfrigérateur dans les 2 heures, à manger dans les 2 jours, réchauffés une seule fois jusqu'à être fumants à cœur (FSA ; Santé Canada : 74 °C). Toum : au réfrigérateur, à manger dans les 4 jours (NCHFP), une semaine au plus (Santé Canada).",
 "variants": [
  "Avec la sauce au tahini (tarator) à la place de la toum. Hadia précise que ce n'est pas la sauce traditionnelle du chawarma de poulet : elle va plutôt avec le chawarma de viande et les falafels (Hadia's Lebanese Cuisine ; Wikipédia en anglais).",
  "La toum « facile » de Hadia : on y ajoute une crème de fécule de maïs cuite et refroidie, qui la rend plus facile à réussir (Hadia's Lebanese Cuisine).",
  "À la poêle : 12 à 15 minutes à feu moyen-vif, par petites quantités (Alphafoodie).",
  "À la friteuse à air : 10 à 14 minutes à 205 °C (400 °F), en secouant à mi-cuisson (Alphafoodie).",
  "Au grill à panini : environ 15 minutes à feu moyen. Mama's Lebanese Kitchen préfère cette méthode, qui garde le poulet plus juteux que le four.",
  "Avec des tomates et un oignon en tranches, cuits dans le plat avec le poulet (The Matbakh).",
  "Façon Zahrat Lebnan, restaurant libanais d'Abou Dhabi : poulet mariné 4 à 6 heures, cuit 2 heures à couvert entre 130 et 150 °C, puis effiloché ; environ 100 g par pain, avec une sauce au tahini, des tomates grillées, des frites, du cerfeuil ou du persil et de la coriandre (Gulf News).",
  "Sandwich croustillant d'Alphafoodie : des chips dans le sandwich, l'extérieur badigeonné d'huile d'olive, de pâte de piment et d'un peu de mélasse de grenade, puis grillé à la poêle.",
  "Chawarma de viande à la libanaise (bœuf ou agneau halal) : avec le tarator, des tomates, du persil, de l'oignon au sumac et des pickles (Taste of Beirut ; Hadia's Lebanese Cuisine).",
  "En Syrie, le chawarma se sert surtout avec la sauce à l'ail ; en Palestine, avec du sumac, des oignons et du tahini (Wikipédia en anglais).",
  "Dans certains restaurants libanais, une salade de chou à la mayonnaise remplace les frites (Mama's Lebanese Kitchen)."
 ],
 "sources": [
  {
   "name": "Hadia's Lebanese Cuisine (Hadia Zebib, qui a grandi dans une famille libanaise), « Easy Oven Chicken Shawarma Recipe (Smoky Flavor) », 28 septembre 2022",
   "url": "https://hadiaslebanesecuisine.com/blog/smoky-chicken-shawarma/",
   "used_for": "Chawarma de poulet au four pour 4 : 1 kg de blancs ou de hauts de cuisse en lanières de 3 cm ; marinade : ⅓ tasse de yaourt entier, 8 gousses d'ail, 1 c. à c. rase de concentré de tomate, ⅓ tasse d'huile de tournesol, jus d'1 citron et d'1 orange, 1 c. à s. de vinaigre blanc ou rouge, 1 c. à s. de sel, 1 c. à s. de paprika, 1 c. à c. de cumin, ¼ c. à c. de cardamome, ½ c. à c. de gingembre, ¼ c. à c. de cannelle, ¼ c. à c. de muscade, ½ c. à s. de poivre blanc, oignon et ail en poudre, ½ c. à s. de coriandre, fécule ; marinade = acide + huile + épices, l'acide et le yaourt attendrissent ; 6 à 24 heures au réfrigérateur ; four à 220 °C, environ 50 minutes avec toute la marinade, puis 2 à 3 minutes sous le gril ; la toum est la sauce du chawarma de poulet, pas le tarator ni la mayonnaise ; pain arabe ou saj, toum, poulet, pickles, frites, romaine, roulé serré puis passé à la presse ou au four."
  },
  {
   "name": "Hadia's Lebanese Cuisine, « Easy Toum Recipe (Authentic Lebanese Garlic Sauce) », 2 avril 2022",
   "url": "https://hadiaslebanesecuisine.com/blog/easy-toum-recipe-authentic-lebanese-garlic-sauce-hadias-cuisine/",
   "used_for": "Toum classique = ail, citron, sel et huile ; version plus facile avec une crème de fécule de maïs cuite et refroidie (12 gousses, 150 ml d'huile, 3 c. à s. de citron) ; ail frais sans germe vert ; huile neutre, pas d'olive ; huile versée lentement en filet, robot en marche ; meilleure après quelques heures ou le lendemain ; au réfrigérateur, en boîte fermée, une semaine au plus."
  },
  {
   "name": "Mama's Lebanese Kitchen (Edgard, recettes de sa mère Esperance, du Nord du Liban), « Chicken Shawarma Recipe: How to Make Shawarma at Home », 27 février 2011",
   "url": "https://mamaslebanesekitchen.com/poultry/chicken-shawarma-recipe-garlic/",
   "used_for": "Pour 6 pains : 2,5 livres (1 134 g) de poulet en tranches d'½ pouce (1,3 cm) ; marinade : ½ tasse de citron, 2 c. à s. de sauce tomate, 4 c. à s. de yaourt, 3 c. à s. de vinaigre blanc, 1 tête d'ail, 2 c. à s. d'huile d'olive, 1 c. à c. de sel, origan, 1 c. à c. de paprika, ½ c. à c. de gingembre, ¼ c. à c. de muscade ; une nuit au réfrigérateur ; mélange de 75 % de blanc et 25 % de cuisse ; ne pas trop cuire ; cuisson au grill à panini, environ 15 minutes, le four étant jugé plus desséchant ; poulet effiloché ; 1 c. à c. de toum par pain, cornichons au sel, tomates grillées, frites ; salade de chou à la mayonnaise dans certains restaurants."
  },
  {
   "name": "Mama's Lebanese Kitchen, « Toum: The Recipe for the World's Strongest Lebanese Garlic Sauce », 29 janvier 2011",
   "url": "https://mamaslebanesekitchen.com/dips/lebanese-garlic-dip/",
   "used_for": "3 têtes d'ail, 4 tasses (946 ml) d'huile neutre, ½ tasse de citron, 1 c. à c. de sel, pour 20 ; ingrédients à température ambiante ; au moins 3 têtes d'ail dans un grand robot ; ail et sel mixés 10 à 20 secondes, bords raclés, 3 à 4 fois ; huile en filet très fin, robot en marche, en alternant avec le citron ; 8 à 10 minutes ; huiles neutres plutôt que l'olive (moins forte, toum plus blanche) ; autrefois au mortier pendant 30 à 40 minutes ; blanc d'œuf cru possible mais non utilisé ; sauce ratée utilisée comme marinade ; toum servie avec le chawarma de poulet."
  },
  {
   "name": "Alphafoodie (Samira Kazan, qui a grandi au Sud-Liban), « Authentic Chicken Shawarma (3 Easy Ways) », 4 mars 2026",
   "url": "https://www.alphafoodie.com/lebanese-chicken-shawarma/",
   "used_for": "Pour 4 : 1 livre (454 g) de hauts de cuisse ou de blancs en fines lanières ; ⅓ tasse d'huile d'olive, ½ tasse de yaourt, 2 c. à s. de citron, 1 oignon émincé, 2 c. à c. d'ail en poudre, 1 c. à c. de paprika, 1 c. à c. de cardamome, ½ c. à c. de sel, de poivre noir, de coriandre, de gingembre et de poivre blanc ; au moins 30 minutes, 2 heures idéalement, 24 heures au plus au réfrigérateur ; four à 425 °F (220 °C), une couche sur plaque, 25 à 30 minutes en remuant à mi-cuisson, puis 2 à 3 minutes sous le gril ; cuit à 165 °F (74 °C) ; repos de quelques minutes ; ne pas serrer les morceaux ; thermomètre ; poêle 12 à 15 minutes ; friteuse à air 400 °F (205 °C) 10 à 14 minutes ; pain avec toum, tomates, laitue, cornichons, frites ; version croustillante ; assiette avec riz, salades, houmous."
  },
  {
   "name": "Alphafoodie, « Lebanese Garlic Sauce (Toum) », 15 novembre 2024",
   "url": "https://www.alphafoodie.com/lebanese-garlic-sauce/",
   "used_for": "1 tasse de gousses (3 à 4 têtes), 2 tasses d'huile neutre (pas d'olive), ⅓ tasse de citron, 1 c. à c. de sel, glaçons, pour environ 3 tasses ; ail ferme sans germe ; huile ajoutée très lentement, en alternant avec le citron ; environ 10 minutes ; raffermit en 15 à 20 minutes au froid ; 5 à 7 jours au réfrigérateur ; sauce ratée reprise avec un peu d'ail ; toum servie avec le chawarma de poulet."
  },
  {
   "name": "The Matbakh (Lily Guidry, à moitié libanaise, Texas), « Sheet Pan Lebanese Chicken Shawarma », mis à jour le 14 mai 2026",
   "url": "https://thematbakh.com/lebanese-chicken-shawarma/",
   "used_for": "Pour 8 : 3 livres (1 361 g) de poulet en fines lanières, 6 gousses d'ail, 6 c. à s. de vinaigre, épices à chawarma, tomates et oignon ; four à 425 °F (220 °C), plat de 9 x 13 pouces (23 x 33 cm), 40 à 45 minutes en remuant à mi-cuisson ; jus de citron possible à la place du vinaigre ; toum indispensable, faite pendant la cuisson ; pain libanais, toum, poulet, frites, pickles ; riz aux vermicelles ; le chawarma de bœuf se sert plutôt avec la sauce au tahini. Source de la diaspora, utilisée en appui."
  },
  {
   "name": "Gulf News (Sharon Benjamin), « In the mood for shawarma? Make it at home with this recipe, no equipment needed », 27 janvier 2022, recette du restaurant libanais Zahrat Lebnan (Abou Dhabi, 1983)",
   "url": "https://gulfnews.com/food/in-the-mood-for-shawarma-make-it-at-home-with-this-recipe-no-equipment-needed-1.1642691726093",
   "used_for": "Cuisse plus grasse, meilleure pour le chawarma ; viande coupée finement par le boucher ; 1 kg pour 6 à 8 sandwichs ; marinade : 5 gousses d'ail, ½ tasse de citron, ¼ tasse de vinaigre de cidre, ¼ tasse d'huile d'olive, 1 c. à c. de sel, ½ c. à c. de cardamome, de cannelle et de muscade, ¼ c. à c. de gingembre, clou de girofle, thym, piment ; poulet mariné 4 à 6 heures au réfrigérateur ; cuisson à couvert 2 heures entre 130 et 150 °C ; environ 100 g de viande par pain ; sauce au tahini, tomates grillées, frites, herbes."
  },
  {
   "name": "Taste of Beirut (Joumana Accad, née et élevée à Beyrouth), « Beef shawarma sandwich », 21 août 2009, et « Shawarma sandwich », 3 novembre 2015 ; copies Wayback Machine de 2020 et 2016 (site fermé)",
   "url": "https://web.archive.org/web/20201025055745/https://www.tasteofbeirut.com/shawarma-sandwich/",
   "used_for": "Chawarma de viande au Liban : servi dans le pain pita avec le tarator, des tomates, du persil, des pickles de concombre et de navet, de l'oignon au sumac ; marinade au vinaigre de vin rouge (non retenu). Deuxième page : https://web.archive.org/web/20160325072041/http://www.tasteofbeirut.com/shawarma-sandwich-2/"
  },
  {
   "name": "Wikipédia (anglais), « Shawarma »",
   "url": "https://en.wikipedia.org/wiki/Shawarma",
   "used_for": "Né au Levant sous l'Empire ottoman ; nom venu du turc « çevirme » ; au Proche-Orient, chawarma de poulet servi avec la sauce à l'ail, des frites et des pickles ; toum (ail, huile, citron, blanc d'œuf ou fécule) avec le poulet, tarator avec le bœuf ; en Syrie, sauce à l'ail ; en Palestine, sumac, oignons et tahini."
  },
  {
   "name": "Wikipédia (arabe), « شاورما »",
   "url": "https://ar.wikipedia.org/wiki/%D8%B4%D8%A7%D9%88%D8%B1%D9%85%D8%A7",
   "used_for": "Nom arabe « شاورما الدجاج » ; né au Levant sous l'Empire ottoman ; servi avec la sauce à l'ail (الثومية), des frites et des pickles ; le tarator va avec la viande."
  },
  {
   "name": "Wikipédia (français), « Chawarma »",
   "url": "https://fr.wikipedia.org/wiki/Chawarma",
   "used_for": "Orthographe française « chawarma » ; plat libanais, syrien, palestinien, égyptien et jordanien, en sandwich avec une crème d'ail ; marinade au vinaigre de vin rouge épicé (non retenue)."
  },
  {
   "name": "Santé Canada, « Températures de cuisson sécuritaires », publiée le 4 juin 2024",
   "url": "https://www.canada.ca/fr/sante-canada/services/conseils-generaux-salubrite/temperatures-securitaires-cuisson-interne.html",
   "used_for": "Morceaux de volaille : 74 °C (165 °F) à cœur ; restes réchauffés à 74 °C ; thermomètre planté dans la partie la plus épaisse, jusqu'au centre ; vérifier chaque morceau."
  },
  {
   "name": "Santé Canada, « Conseils sur la salubrité des aliments cuits au barbecue », 15 août 2019",
   "url": "https://www.canada.ca/fr/sante-canada/services/conseils-generaux-salubrite/conseils-salubrite-aliments-cuits-barbecue.html",
   "used_for": "Faire mariner la viande au réfrigérateur, pas sur le plan de travail ; ne pas mettre sur la viande cuite une marinade qui a touché la viande crue."
  },
  {
   "name": "Santé Canada, « Conseils sur la salubrité des légumes et des fines herbes conservés dans l'huile », 8 février 2013",
   "url": "https://www.canada.ca/fr/sante-canada/services/salubrite-legumes-et-fruits/conseils-salubrite-legumes-et-fines-herbes-conserves-huile.html",
   "used_for": "Légumes et herbes (dont l'ail) dans l'huile : toujours au réfrigérateur, à 4 °C ou moins, jamais à température ambiante ; à utiliser dans la semaine."
  },
  {
   "name": "National Center for Home Food Preservation (Université de Géorgie, États-Unis), « Freezing Garlic-In-Oil »",
   "url": "https://nchfp.uga.edu/how/freeze/vegetable/freezing-garlic-in-oil/",
   "used_for": "L'ail dans l'huile gardé à température ambiante présente un risque de botulisme ; à préparer frais, à garder au réfrigérateur à 4 °C (40 °F) ou moins, 4 jours au plus."
  },
  {
   "name": "GOV.UK (Food Standards Agency), « Cooking your food »",
   "url": "https://www.gov.uk/government/publications/cooking-your-food/cooking-your-food",
   "used_for": "La volaille doit être cuite à cœur : chair fumante, sans rose, jus clair, ou 70 °C pendant 2 minutes au centre ; restes au réfrigérateur dans les 2 heures, mangés dans les 48 heures, réchauffés une seule fois jusqu'à être fumants."
  },
  {
   "name": "GOV.UK (Food Standards Agency), « Campylobacter »",
   "url": "https://www.gov.uk/government/publications/campylobacter/campylobacter",
   "used_for": "Ne jamais laver le poulet cru (l'eau projette les bactéries sur les mains, les surfaces et les ustensiles) ; éviter les contacts entre cru et cuit ; viande crue en boîte fermée en bas du réfrigérateur ; se laver les mains."
  },
  {
   "name": "GOV.UK (Food Standards Agency), « How to chill, freeze and defrost food safely », 18 décembre 2017",
   "url": "https://www.gov.uk/government/publications/how-to-chill-freeze-and-defrost-food-safely/how-to-chill-freeze-and-defrost-food-safely",
   "used_for": "Réfrigérateur entre 0 et 5 °C ; viande crue rangée en bas, dans un récipient fermé ; viande cuite refroidie puis mise au froid dans les 1 à 2 heures ; restes mangés dans les 2 jours."
  },
  {
   "name": "The Mediterranean Dish (Suzy Karadsheh, qui a grandi à Port-Saïd, en Égypte), « Chicken Shawarma », 16 octobre 2017",
   "url": "https://www.themediterraneandish.com/chicken-shawarma-recipe/",
   "used_for": "Contre-vérification : Hauts de cuisse désossés, coupés en fines lamelles ; marinade avec oignon émincé, jus de citron et huile, au réfrigérateur 3 heures ou une nuit ; four à 425 °F (220 °C), en une seule couche, environ 30 minutes ; passage bref sous le gril à la fin, en surveillant. Version « méditerranéenne » servie avec une sauce au tahini ou un tzatziki, et non avec la toum : utilisée seulement pour la technique. robots.txt : aucun blocage."
  }
 ],
 "discrepancies": [
  "Cuisson : au four (Hadia, Alphafoodie, The Matbakh), au grill à panini (Mama's Lebanese Kitchen, qui juge le four plus desséchant), ou à couvert, 2 heures à 130-150 °C (Zahrat Lebnan). Retenu : le four à 220 °C, comme demandé, avec le gril à la fin et le contrôle de la température à cœur.",
  "Temps au four à 220 °C : 25 à 30 minutes (Alphafoodie, 454 g en une couche sur une plaque), 40 à 45 minutes (The Matbakh, 1 361 g dans un plat de 23 x 33 cm), environ 50 minutes (Hadia, 1 kg avec toute la marinade). Retenu : 40 minutes environ pour 700 g dans un grand plat, puis vérification à 74 °C. Le minuteur de 40 minutes sert de premier contrôle : il n'y a pas de durée unique commune à deux sources.",
  "Quantité de poulet : de 113 à 250 g cru par sandwich ou par personne (médiane 170 g, calcul python3 -I). Retenu : 700 g pour 4 sandwichs (175 g chacun), proche de The Matbakh (170 g) et de Zahrat Lebnan (167 g pour 6 sandwichs, qui compte environ 100 g de viande cuite par pain).",
  "Marinade, ramenée à 700 g de poulet (calculs python3 -I) : citron, médiane 73 ml, retenu 5 c. à s. (74 ml ; Mama's Lebanese Kitchen 73 ml, Zahrat Lebnan 83 ml) ; vinaigre, médiane 34 ml, retenu 2 c. à s. (30 ml ; Mama's 27 ml, Zahrat Lebnan 41 ml) ; yaourt, médiane 55 ml, retenu 4 c. à s. (59 ml ; Hadia 55 ml) ; huile, médiane 48 ml, retenu 3 c. à s. (44 ml ; Zahrat Lebnan 41 ml, Hadia 55 ml) ; ail, médiane 3,5 gousses, retenu 4 ; sel, médiane 0,74 c. à c., retenu ¾ (Zahrat Lebnan 0,70, Alphafoodie 0,77).",
  "Épices pour 700 g : paprika, médiane 1,54 c. à c., retenu 1½ (Alphafoodie) ; coriandre en poudre et poivre blanc, médiane 0,91 c. à c. (Hadia 1,05, Alphafoodie 0,77), retenu 1 ; gingembre, médiane 0,33, retenu ¼ (Mama's 0,31, Hadia 0,35) ; cardamome, de 0,17 (Hadia) à 1,54 (Alphafoodie), médiane 0,35 (Zahrat Lebnan), retenu ¼ ; cannelle, 0,17 (Hadia) et 0,35 (Zahrat Lebnan), retenu ¼ ; muscade, médiane 0,17, retenu ⅛ (Mama's 0,15, Hadia 0,17). Les valeurs sont arrondies à la cuillère la plus proche, dans l'écart des sources.",
  "Ingrédients d'une seule source, non retenus : jus d'orange, fécule de maïs, oignon et ail en poudre (Hadia) ; origan (Mama's) ; thym, clou de girofle et piment (Zahrat Lebnan) ; mélange d'épices à chawarma du commerce (The Matbakh). Tomate : sauce tomate (Mama's), concentré (Hadia) ou tomates fraîches cuites avec le poulet (The Matbakh) : pas de forme commune, la tomate est mise en garniture facultative et en variante.",
  "Vinaigre : vinaigre blanc (Mama's Lebanese Kitchen), blanc ou rouge (Hadia), vinaigre de cidre (Zahrat Lebnan), vinaigre de vin rouge (Taste of Beirut pour le bœuf ; Wikipédia en français). Retenu : vinaigre blanc ; ou autant de jus de citron, comme le propose The Matbakh, pour qui préfère éviter le vinaigre.",
  "Durée de la marinade : une nuit (Mama's Lebanese Kitchen), 6 à 24 heures (Hadia), 4 à 6 heures (Zahrat Lebnan), 30 minutes à 24 heures (Alphafoodie), quelques minutes à une nuit (The Matbakh). Retenu : au moins 6 heures, idéalement une nuit, 24 heures au plus.",
  "Épaisseur des lanières : ½ pouce, soit 1,3 cm (Mama's Lebanese Kitchen), « fines » (Alphafoodie, The Matbakh), 3 cm (Hadia). Retenu : environ 1 cm.",
  "Cuisson à cœur : 74 °C (Santé Canada ; Alphafoodie : 165 °F) ou 70 °C pendant 2 minutes, 75 °C pendant 30 secondes (FSA). Retenu : 74 °C, la valeur la plus simple à contrôler.",
  "Sauce : toum (Hadia, Mama's Lebanese Kitchen, Alphafoodie, The Matbakh ; Wikipédia) ou sauce au tahini (Zahrat Lebnan, pour le poulet comme pour la viande). Retenu : la toum ; le tarator est en variante.",
  "Toum, méthode : classique (Mama's Lebanese Kitchen, Alphafoodie) ou liée à la fécule de maïs (Hadia) ; ingrédients à température ambiante (Mama's) ou très froids, avec ail congelé et glaçons (Alphafoodie). Retenu : la méthode classique, sans glaçons ni fécule ; la version de Hadia est en variante. Le blanc d'œuf cru (évoqué par Mama's et par Wikipédia) n'est pas retenu.",
  "Toum, quantités : les sources font de grandes quantités (Mama's : 3 têtes d'ail pour 4 tasses d'huile et 20 portions ; Alphafoodie : 3 à 4 têtes pour 2 tasses d'huile, environ 3 tasses de sauce). Retenu : une petite quantité pour 4 sandwichs, 160 ml d'huile, avec les proportions des sources ramenées à cette quantité : ail 0,5 tête (Mama's) à 1 à 1,35 tête (Alphafoodie), retenu 1 tête ; citron 20 ml (Mama's) à 27 ml (Alphafoodie), retenu 1½ c. à s. (22 ml) ; sel 0,17 à 0,34 c. à c., retenu ¼. D'après le rendement d'Alphafoodie, cela fait environ 240 ml de toum.",
  "Conservation de la toum : 1 semaine (Hadia), 5 à 7 jours (Alphafoodie), 1 semaine au plus pour l'ail dans l'huile (Santé Canada), 4 jours au plus (NCHFP). Retenu : 4 jours, la règle la plus prudente.",
  "Garniture : cornichons et frites (presque toutes les sources), laitue romaine (Hadia, Alphafoodie), tomates fraîches (Alphafoodie) ou grillées (Mama's Lebanese Kitchen, Zahrat Lebnan). Quantités laissées au goût : seule Mama's Lebanese Kitchen les chiffre.",
  "Origine du nom : du turc « çevirme », tourner (Wikipédia ; Hadia) ; Joumana Accad le rattache au verbe arabe « shawa », griller (Taste of Beirut). Retenu : Wikipédia et Hadia, avec « viendrait ».",
  "Fumage au charbon de bois (morceau de charbon allumé et ghee, posés sur le poulet cuit et couverts une minute, chez Hadia) : étape facultative non reprise, faute d'avoir vérifié ses risques auprès d'une source officielle.",
  "Conversions faites avec python3 -I : 1 livre = 453,6 g ; 2,5 livres = 1 134 g ; 3 livres = 1 360,8 g ; ½ tasse = 118,3 ml ; ⅓ tasse = 78,9 ml ; ¼ tasse = 59,1 ml ; 4 tasses = 946,4 ml ; 1 c. à s. = 14,8 ml ; 425 °F = 218,3 °C ; 430 °F = 221,1 °C ; 165 °F = 73,9 °C ; 270 à 300 °F = 132 à 149 °C ; 9 x 13 pouces = 22,9 x 33 cm.",
  "Halal : poulet halal ; aucun alcool ; pas de vinaigre de vin (voir plus haut).",
  "Contre-vérifiée le 8 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 9 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Nom en darija : aucune source marocaine écrite en lettres latines trouvée ; laissé vide. La recherche « شاورما » sur Lalla Moulati n'a donné aucun article, et Wikipédia en darija n'a pas de page « شاورما ».",
  "Statut halal des différents vinaigres : non vérifié auprès d'une source religieuse ; le jus de citron est proposé à la place (The Matbakh).",
  "Temps de préparation (30 minutes, toum comprise) : estimation ; les sources donnent 10 à 15 minutes pour le poulet et environ 10 minutes pour la toum.",
  "Temps de cuisson pour 700 g dans un plat : estimé entre les sources (25 à 50 minutes selon la quantité et le plat) ; d'où le contrôle à 74 °C.",
  "Rendement d'une petite toum (environ 240 ml) : calculé d'après Alphafoodie, non testé ; une petite quantité peut mal prendre dans un grand robot (Mama's Lebanese Kitchen).",
  "Nombre de gousses dans une tête d'ail : variable, non chiffré.",
  "Chef in Disguise (Sawsan Abu Farha) : page de contrôle anti-robots (erreur 403), non utilisé. FSIS (ministère américain de l'Agriculture) et foodsafety.gov : erreur 403, non utilisés ; Santé Canada et la FSA les remplacent. La page de Williams-Sonoma (chawarma de Yumna Jawad) n'a pas répondu.",
  "Taste of Beirut : pas de recette de chawarma de poulet retrouvée ; l'index de la Wayback Machine répondait par des erreurs 503 et 504.",
  "Livre « Lebanon » d'Anissa Helou (2026), qui contient un chawarma : non consulté.",
  "Cornichons au sel et pains libanais vendus au Maroc : non vérifié."
 ],
 "cuisine": "Libanaise",
 "rayon": "D'ailleurs",
 "pairs": [
  "frites"
 ],
 "img_alt": "Chawarma de poulet roulé dans un pain lavash et coupé en deux, avec de la roquette",
 "img": "img/shawarma-poulet.jpg",
 "photo": {
  "author": "Andy Li",
  "license": "CC0",
  "license_url": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
  "page": "https://commons.wikimedia.org/wiki/File:Handmade_Chicken_Shawarma_Wrap_-_Lavash.jpg",
  "modified": "réduite"
 }
});
