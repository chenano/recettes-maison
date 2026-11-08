/* Recette : Falafels aux pois chiches. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "falafel",
 "title": "Falafels aux pois chiches",
 "darija": "",
 "arabic": "فلافل",
 "tagline": "Les boulettes croustillantes des rues du Liban, de Syrie et de Palestine : des pois chiches trempés, jamais cuits, des herbes fraîches et du cumin, dans un pain pita avec la sauce au tahini.",
 "category": "Sandwich",
 "occasion": "Cuisine de rue au Liban, aussi populaire que le chawarma : chaque quartier de Beyrouth a ses adresses (Taste of Beirut). En mezzé, avec du houmous et du taboulé (The Matbakh ; recettelibanaise.com). Plat sans viande, mangé pendant le carême par les chrétiens arabes, et parfois servi à l'iftar pendant le ramadan (Wikipédia en anglais). En Égypte, la ta'ameya se mange surtout au petit déjeuner (Wikipédia en arabe et en français).",
 "region": "Proche-Orient. Au Liban, en Syrie, en Palestine et en Jordanie, les falafels se font aux pois chiches, ou avec un mélange de pois chiches et de fèves ; en Égypte, la ta'ameya se fait aux fèves (Wikipédia en anglais et en arabe ; Mama's Lebanese Kitchen). Le plat vient très probablement d'Égypte (Wikipédia en français et en anglais ; Taste of Beirut). Ce n'est pas un plat marocain.",
 "servings": 4,
 "servings_label": "sandwichs",
 "time": {
  "prep": 30,
  "cook": 20,
  "rest": 750,
  "rest_label": "Trempage"
 },
 "difficulty": "Moyen",
 "equipment": [
  "Un grand saladier pour le trempage : les pois chiches doublent, voire triplent de volume (Alphafoodie)",
  "Une passoire et un torchon propre",
  "Un robot mixeur, ou un hachoir à viande avec la grille fine (Anissa Helou ; Taste of Beirut)",
  "Une friteuse électrique avec thermostat : c'est le plus sûr (London Fire Brigade ; gouvernement du Québec)",
  "À défaut : une casserole profonde, remplie au tiers au plus, et un thermomètre de cuisson (London Fire Brigade). Le gouvernement du Québec, lui, déconseille de frire dans une casserole : la friteuse à thermostat reste le meilleur choix",
  "Un couvercle assez grand pour couvrir la friteuse ou la casserole, toujours à portée de main",
  "Une écumoire et du papier absorbant",
  "Deux cuillères à soupe, ou un moule à falafels (aaleb)",
  "Un bol et un fouet pour la sauce"
 ],
 "ingredients": [
  {
   "group": "Les falafels",
   "items": [
    {
     "id": "pois-chiches",
     "q": 250,
     "u": "g",
     "name": "de pois chiches secs",
     "note": "ni en conserve, ni cuits",
     "canon": "pois-chiches"
    },
    {
     "id": "oignon",
     "q": 0.5,
     "u": "",
     "name": "oignon moyen",
     "pl": "oignons moyens",
     "note": "à éplucher",
     "canon": "oignon"
    },
    {
     "id": "ail",
     "q": 2,
     "u": "",
     "name": "gousse d'ail",
     "pl": "gousses d'ail",
     "note": "à éplucher",
     "canon": "ail"
    },
    {
     "id": "persil",
     "q": 50,
     "u": "g",
     "name": "de persil plat",
     "note": "sans les grosses tiges",
     "canon": "persil"
    },
    {
     "id": "coriandre",
     "q": 40,
     "u": "g",
     "name": "de coriandre fraîche",
     "note": "sans les grosses tiges",
     "canon": "coriandre"
    },
    {
     "id": "cumin",
     "q": 0.75,
     "u": "c. à c.",
     "name": "de cumin en poudre",
     "canon": "cumin"
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
     "q": 0.25,
     "u": "c. à c.",
     "name": "de poivre noir moulu",
     "canon": "poivre"
    },
    {
     "id": "sel",
     "q": 0.75,
     "u": "c. à c.",
     "name": "de sel fin",
     "canon": "sel"
    },
    {
     "id": "piment",
     "q": null,
     "u": "",
     "name": "piment de Cayenne",
     "note": "facultatif, selon ton goût",
     "canon": "piment-cayenne"
    },
    {
     "id": "bicarbonate",
     "q": 0.5,
     "u": "c. à c.",
     "name": "de bicarbonate de soude",
     "note": "à ajouter juste avant la friture",
     "canon": "bicarbonate"
    },
    {
     "id": "sesame",
     "q": 2,
     "u": "c. à s.",
     "name": "de graines de sésame",
     "note": "facultatif ; le sésame est un allergène (règlement UE 1169/2011)",
     "canon": "sesame"
    }
   ]
  },
  {
   "group": "Pour la friture",
   "items": [
    {
     "id": "huile",
     "q": null,
     "u": "",
     "name": "huile de tournesol (ou une autre huile neutre)",
     "note": "assez pour que les falafels baignent",
     "canon": "huile"
    }
   ]
  },
  {
   "group": "La sauce au tahini (tarator)",
   "items": [
    {
     "id": "tahini",
     "q": 5,
     "u": "c. à s.",
     "name": "de tahini (crème de sésame)",
     "note": "bien remué dans son pot ; allergène : sésame",
     "canon": "tahini"
    },
    {
     "id": "citron-sauce",
     "q": 2,
     "u": "c. à s.",
     "name": "de jus de citron frais",
     "canon": "citron"
    },
    {
     "id": "eau",
     "q": 3,
     "u": "c. à s.",
     "name": "d'eau",
     "note": "un peu plus si la sauce est trop épaisse",
     "canon": "eau"
    },
    {
     "id": "ail-sauce",
     "q": 1,
     "u": "",
     "name": "petite gousse d'ail",
     "pl": "petites gousses d'ail",
     "note": "à écraser",
     "canon": "ail"
    },
    {
     "id": "sel-sauce",
     "q": null,
     "u": "",
     "name": "sel",
     "note": "selon le goût",
     "canon": "sel"
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
     "name": "pain pita (pain libanais)",
     "pl": "pains pita (pains libanais)",
     "note": "contient du gluten (blé)",
     "canon": "pain-pita"
    },
    {
     "id": "tomates",
     "q": null,
     "u": "",
     "name": "tomates",
     "note": "en rondelles",
     "canon": "tomate"
    },
    {
     "id": "persil-service",
     "q": null,
     "u": "",
     "name": "persil plat",
     "note": "lavé et haché",
     "canon": "persil"
    },
    {
     "id": "cornichons",
     "q": null,
     "u": "",
     "name": "cornichons au sel (ou navets roses marinés)",
     "note": "en tranches",
     "canon": "cornichons"
    },
    {
     "id": "laitue",
     "q": null,
     "u": "",
     "name": "feuilles de laitue",
     "note": "facultatif",
     "canon": "laitue"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Fais tremper les pois chiches",
   "text": "Trie {{pois-chiches}} de pois chiches secs et retire les petits cailloux, puis rince-les. Mets-les dans un grand saladier et couvre-les largement d'eau froide : ils vont doubler, voire tripler de volume. Laisse-les tremper au moins 12 heures, et jusqu'à 24 heures.",
   "timer": null,
   "tip": "Ne les fais jamais cuire, et ne prends pas de pois chiches en conserve : trop mous, les falafels se défont dans l'huile (Wikipédia en anglais ; Alphafoodie ; The Matbakh ; The Mediterranean Dish)."
  },
  {
   "phase": "Préparation",
   "title": "Égoutte et sèche les pois chiches",
   "text": "Égoutte les pois chiches et rince-les à l'eau fraîche. Étale-les sur un torchon propre et sèche-les bien : la pâte doit être la plus sèche possible.",
   "timer": null,
   "tip": "Taste of Beirut, recettelibanaise.com et The Matbakh insistent : les pois chiches doivent être secs. Et l'eau avec l'huile chaude fait un mélange dangereux (London Fire Brigade)."
  },
  {
   "phase": "Préparation",
   "title": "Lave et sèche les herbes",
   "text": "Lave {{persil}} de persil et {{coriandre}} de coriandre fraîche. Sèche-les bien dans un torchon propre, puis coupe les grosses tiges.",
   "timer": null,
   "tip": "Ce sont les herbes qui rendent l'intérieur vert ; sans herbes, il reste jaune (Alphafoodie ; Wikipédia en anglais)."
  },
  {
   "phase": "Préparation",
   "title": "Hache l'oignon et l'ail",
   "text": "Épluche et coupe en morceaux {{oignon:full}}. Épluche {{ail:full}}. Mixe l'oignon et l'ail dans le robot jusqu'à ce qu'ils soient hachés fin.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Mixe les pois chiches",
   "text": "Ajoute les pois chiches dans le robot. Mixe par à-coups, en raclant les bords de temps en temps, jusqu'à obtenir une pâte fine qui colle un peu. Elle doit rester légèrement granuleuse : pas de purée lisse.",
   "timer": null,
   "tip": "Mama's Lebanese Kitchen mixe les pois chiches jusqu'à ce qu'ils ressemblent à de la chapelure ; Samira Kazan (Alphafoodie) veut une pâte épaisse et un peu granuleuse."
  },
  {
   "phase": "Préparation",
   "title": "Ajoute les herbes",
   "text": "Ajoute le persil et la coriandre. Mixe encore quelques secondes, juste assez pour que la pâte devienne verte.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Assaisonne la pâte",
   "text": "Verse la pâte dans un saladier. Ajoute {{cumin}} de cumin, {{coriandre-moulue}} de coriandre en poudre, {{poivre}} de poivre, {{sel}} de sel et, si tu aimes, un peu de {{piment}}. Mélange bien avec une cuillère.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Laisse reposer au frais",
   "text": "Couvre le saladier et mets-le au réfrigérateur au moins 30 minutes. La pâte va raffermir : elle sera plus facile à façonner.",
   "timer": {
    "min": 30,
    "label": "Repos de la pâte",
    "done": "La pâte est prête. Chauffe l'huile."
   },
   "tip": "Samira Kazan (Alphafoodie) et Anissa Helou la laissent 30 minutes au frais ; The Matbakh et recettelibanaise.com, 1 heure."
  },
  {
   "phase": "Préparation",
   "title": "Prépare la sauce au tahini",
   "text": "Pendant le repos, écrase {{ail-sauce:full}} avec un peu de {{sel-sauce}}. Remue bien le tahini dans son pot, puis verse {{tahini}} de tahini dans un bol. Ajoute l'ail écrasé, {{citron-sauce}} de jus de citron et {{eau}} d'eau, en fouettant. La sauce épaissit d'abord : continue de fouetter, elle redevient lisse. Elle doit être crémeuse ; ajoute un peu d'eau si elle est trop épaisse, et sale à ton goût.",
   "timer": null,
   "tip": "Hadia la garde au réfrigérateur dans un bocal en verre bien propre, et la remue avant de servir."
  },
  {
   "phase": "Cuisson",
   "title": "Chauffe l'huile à 180 °C",
   "text": "Remplis la friteuse d'{{huile}} comme l'indique sa notice et règle-la sur 180 °C. Sans friteuse, prends une casserole profonde : remplis-la au tiers au plus et vérifie la température avec un thermomètre de cuisson. Garde un couvercle à portée de main. À partir de maintenant, ne quitte plus l'huile des yeux.",
   "timer": null,
   "tip": "Sans thermomètre : plonge un petit morceau de pain dans l'huile ; s'il grésille et que l'huile bouillonne autour, elle est prête (Anissa Helou ; Taste of Beirut). Si l'huile fume, elle est trop chaude : coupe le feu et laisse-la refroidir (London Fire Brigade). Si l'huile prend feu : jamais d'eau, et ne déplace pas le récipient. Si tu peux le faire sans danger, coupe le feu et pose sur le récipient un couvercle de la bonne taille (gouvernement du Québec). Puis sors de la pièce, ferme la porte et appelle les pompiers, même si le feu semble éteint (London Fire Brigade ; gouvernement du Québec)."
  },
  {
   "phase": "Cuisson",
   "title": "Ajoute le bicarbonate",
   "text": "Sors la pâte du réfrigérateur. Juste avant de façonner les falafels, ajoute {{bicarbonate}} de bicarbonate et mélange bien.",
   "timer": null,
   "tip": "Ajouté au dernier moment, le bicarbonate rend les falafels plus légers (Alphafoodie ; Taste of Beirut). Mama's Lebanese Kitchen, Anissa Helou et recettelibanaise.com l'ajoutent aussi juste avant la friture."
  },
  {
   "phase": "Cuisson",
   "title": "Façonne les falafels",
   "text": "Prends une cuillère à soupe bien pleine de pâte et forme une boulette ou un petit palet : à la main, avec deux cuillères, ou avec un moule à falafels. Si tu veux, parsème-les de {{sesame}} de graines de sésame.",
   "timer": null,
   "tip": "Le moule à falafels s'appelle « aaleb » ; on le trouve dans les épiceries orientales (Taste of Beirut ; Wikipédia en anglais). Si la pâte est trop collante, Mama's Lebanese Kitchen ajoute un peu de farine."
  },
  {
   "phase": "Cuisson",
   "title": "Fais frire",
   "text": "Glisse doucement quelques falafels dans l'huile chaude, sans trop en mettre à la fois. Fais-les frire environ 4 minutes, en les retournant, jusqu'à ce qu'ils soient bien dorés et croustillants.",
   "timer": {
    "min": 4,
    "label": "Friture des falafels",
    "done": "Bien dorés ? Sors-les. Sinon, laisse-les encore un peu."
   },
   "tip": "recettelibanaise.com les sort quand ils remontent à la surface. Une huile trop chaude les brûle (Alphafoodie).",
   "img": {
    "src": "img/etapes/falafel-friture.jpg",
    "alt": "Falafels qui frient dans une grande poêle d'huile, à Alep (Syrie)",
    "caption": "La friture des falafels",
    "w": 1280,
    "h": 960,
    "credit": "Photo de l'étape « Fais frire » : Preacher lad, Wikimedia Commons, licence CC BY-SA 4.0 (réduite)."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Égoutte et continue",
   "text": "Sors les falafels avec une écumoire et pose-les sur du papier absorbant. Fais cuire le reste de la pâte de la même façon, par petites fournées. À la fin, éteins la friteuse.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Garnis les pains et sers",
   "text": "Ouvre {{pain:full}}. Dans chaque pain, écrase légèrement trois ou quatre falafels chauds. Ajoute de la sauce au tahini, des {{tomates}}, du {{persil-service}}, des {{cornichons}} et, si tu veux, quelques {{laitue}}. Roule et sers tout de suite.",
   "timer": null,
   "tip": "Restes : au réfrigérateur dans les 2 heures, à manger dans les 2 jours. Réchauffe-les une seule fois, jusqu'à ce qu'ils soient bien chauds à cœur (FSA)."
  }
 ],
 "secrets": [
  {
   "text": "Des pois chiches secs, trempés, jamais cuits : cuits ou en conserve, ils font une pâte trop molle et les falafels se défont dans l'huile.",
   "source": "Wikipédia en anglais ; Alphafoodie (Samira Kazan) ; The Matbakh"
  },
  {
   "text": "Un long trempage : au moins 12 heures, jusqu'à 24 heures, dans beaucoup d'eau froide.",
   "source": "Alphafoodie ; Taste of Beirut ; recettelibanaise.com ; Mama's Lebanese Kitchen ; Gulf News (cheffe Salam Dakkak)"
  },
  {
   "text": "Sèche bien les pois chiches et les herbes : une pâte mouillée se tient mal.",
   "source": "Taste of Beirut ; recettelibanaise.com ; The Matbakh ; Mama's Lebanese Kitchen (herbes égouttées)"
  },
  {
   "text": "Le bicarbonate s'ajoute à la toute fin, juste avant de façonner : il rend les falafels légers.",
   "source": "Alphafoodie ; Taste of Beirut ; Mama's Lebanese Kitchen ; Anissa Helou ; recettelibanaise.com"
  },
  {
   "text": "Un repos au frais raffermit la pâte : elle se façonne mieux.",
   "source": "Alphafoodie ; Anissa Helou ; The Matbakh ; recettelibanaise.com"
  },
  {
   "text": "Une huile à 180 °C. Sans thermomètre, un petit morceau de pain doit y grésiller, entouré de bulles.",
   "source": "Alphafoodie (180 °C) ; Anissa Helou et Taste of Beirut (test du pain)"
  },
  {
   "text": "Peu de falafels à la fois dans l'huile, pour qu'ils dorent bien.",
   "source": "Alphafoodie ; Anissa Helou"
  },
  {
   "text": "Le moule à falafels (aaleb) donne des falafels réguliers ; deux cuillères ou les mains marchent aussi.",
   "source": "Taste of Beirut ; Mama's Lebanese Kitchen ; Anissa Helou ; Wikipédia en anglais"
  },
  {
   "text": "Des graines de sésame sur les falafels avant la friture, pour le croquant : c'est facultatif.",
   "source": "Alphafoodie ; The Matbakh ; Taste of Beirut"
  },
  {
   "text": "Au Liban, les falafels sont toujours arrosés de tarator, la sauce au tahini.",
   "source": "The Matbakh ; Hadia's Lebanese Cuisine"
  },
  {
   "text": "Quand on ajoute le citron et l'eau, le tahini épaissit d'abord, puis redevient lisse : continue de fouetter.",
   "source": "Hadia's Lebanese Cuisine ; Anissa Helou"
  },
  {
   "text": "Tu peux congeler la pâte crue, sans le bicarbonate. Fais-la décongeler au réfrigérateur, puis ajoute le bicarbonate juste avant la friture.",
   "source": "Mama's Lebanese Kitchen (congélation) ; Alphafoodie (décongélation au réfrigérateur) ; The Matbakh (bicarbonate après décongélation)"
  }
 ],
 "mistakes": [
  "Prendre des pois chiches en conserve ou cuits : la pâte se défait dans l'huile (Wikipédia en anglais ; Alphafoodie ; The Matbakh).",
  "Mettre des pois chiches ou des herbes encore mouillés : la pâte est trop molle (Taste of Beirut ; recettelibanaise.com), et l'eau fait un mélange dangereux avec l'huile chaude (London Fire Brigade).",
  "Mixer jusqu'à obtenir une purée lisse : Mama's Lebanese Kitchen et Alphafoodie gardent une pâte un peu granuleuse.",
  "Ajouter le bicarbonate trop tôt : il marche mieux à la dernière minute (Alphafoodie).",
  "Mettre trop de falafels à la fois dans l'huile (Alphafoodie ; Anissa Helou).",
  "Faire chauffer l'huile trop fort : les falafels brûlent (Alphafoodie). Si l'huile fume, coupe le feu (London Fire Brigade ; gouvernement du Québec).",
  "Sortir les falafels avant qu'ils soient bien dorés : la pâte est faite de pois chiches crus, seulement trempés (Wikipédia en anglais). La FSA britannique rappelle que les haricots crus ou pas assez cuits peuvent être à risque, surtout les haricots rouges.",
  "Remplir une casserole d'huile à plus d'un tiers (London Fire Brigade).",
  "Laisser l'huile chaude sans surveillance (gouvernement du Québec).",
  "Jeter de l'eau sur un feu d'huile, ou déplacer le récipient en flammes (gouvernement du Québec ; London Fire Brigade)."
 ],
 "serving": "Sers les falafels bien chauds (Anissa Helou ; Dima Al Sharif). Au Liban, dans un pain libanais ou un pita, avec la sauce au tahini (tarator), des tomates, du persil et des pickles de concombre et de navet (Mama's Lebanese Kitchen ; Anissa Helou ; recettelibanaise.com ; The Matbakh). Mama's Lebanese Kitchen écrase trois ou quatre falafels le long du pain et ajoute une sauce piquante si on aime ; Samira Kazan (Alphafoodie) en met trois, avec concombre, laitue et oignon. En mezzé, avec du houmous et du taboulé, qui est dans l'application (The Matbakh ; recettelibanaise.com). En Syrie, avec une sauce au yaourt et au tahini ou un houmous, des tomates, des pickles de concombre et de navet et du persil (Wikipédia en arabe), qui ajoute un peu de sumac et de sésame sur les falafels après la friture. Restes : au réfrigérateur dans les 2 heures, à manger dans les 2 jours, et réchauffés une seule fois, jusqu'à être bien chauds à cœur (FSA).",
 "variants": [
  "Façon libanaise, avec un mélange de pois chiches et de fèves sèches décortiquées (Wikipédia en arabe) : moitié-moitié chez recettelibanaise.com et The Matbakh ; plus de fèves que de pois chiches chez Mama's Lebanese Kitchen (qui les fait tremper séparément), Anissa Helou et Taste of Beirut (d'après May Bsisu).",
  "Ta'ameya égyptienne : seulement des fèves sèches décortiquées et concassées, trempées une journée entière, mixées avec beaucoup de verdure (poireau, persil, coriandre), de l'oignon, de l'ail, du piment, du cumin et de la coriandre en poudre (Sada El Balad, recette du chef Nehad El Gendy ; Wikipédia en anglais ; Mama's Lebanese Kitchen). En Égypte, on la mange au petit déjeuner, avec le foul (Wikipédia en arabe). Attention : les personnes qui ont un déficit en G6PD (favisme) doivent éviter les fèves, même cuites (Singapore Food Agency).",
  "Façon syrienne : aux pois chiches seuls, avec un peu de sumac et de sésame sur les falafels après la friture (Wikipédia en arabe).",
  "Avec de la menthe fraîche (recettelibanaise.com ; Dima Al Sharif), ou avec du poivron vert et un piment vert (Dima Al Sharif, cuisine palestinienne).",
  "Avec un peu de levure chimique en plus du bicarbonate (Taste of Beirut ; recettelibanaise.com ; Dima Al Sharif).",
  "Avec du piment de la Jamaïque (Anissa Helou ; Taste of Beirut ; The Matbakh).",
  "Avec un peu de bicarbonate dans l'eau de trempage (Anissa Helou ; Wikipédia en anglais).",
  "Falafels farcis d'oignon et de sumac, une façon palestinienne (Wikipédia en anglais).",
  "Au four : plus légers, mais moins croustillants (recettelibanaise.com). Mama's Lebanese Kitchen les cuit sur une plaque légèrement huilée, 7 à 10 minutes à 204 °C (400 °F). The Matbakh les arrose d'un filet d'huile et les cuit 4 à 5 minutes à 232 °C (450 °F), en bas du four."
 ],
 "sources": [
  {
   "name": "Alphafoodie (Samira Kazan, qui a grandi au Sud-Liban), « Authentic Falafel Recipe (My Family's Famous Restaurant Version) », 12 mai 2025",
   "url": "https://www.alphafoodie.com/authentic-falafel-recipe/",
   "used_for": "Recette du restaurant familial au Liban, aux pois chiches seuls : 1 livre (454 g) de pois chiches secs pour 25 boulettes, 1 oignon moyen, 2 gousses d'ail, 1 tasse de coriandre, 1 tasse de persil, 1 c. à s. de coriandre en poudre, ½ c. à s. de cumin, ¼ c. à s. de poivre noir, piment, cannelle facultative, 1 c. à c. de sel, ½ c. à s. de bicarbonate juste avant la friture, sésame facultatif ; trempage d'une nuit, 12 à 24 heures (les pois chiches doublent ou triplent) ; jamais de conserve ; pâte épaisse et un peu granuleuse, pas une purée ; au moins 30 minutes au frais ; environ 3 c. à s. de pâte par boulette ; huile à 180 °C (350 °F) ; 3 à 4 minutes par face ; ne pas surcharger ; huile trop chaude = falafels brûlés ; papier absorbant ; 3 falafels par pain avec tomates, concombre, laitue, oignon, persil, pickles et sauce au tahini (½ tasse de tahini, 3 c. à s. de citron, 2 gousses d'ail, ¼ c. à c. de cumin, ½ c. à c. de sel, 4 c. à s. d'eau) ; pâte congelée puis décongelée au réfrigérateur ; intérieur jaune sans herbes."
  },
  {
   "name": "Alphafoodie, page « About Alphafoodie »",
   "url": "https://www.alphafoodie.com/about-alphafoodie/",
   "used_for": "Vérification : l'autrice cuisine les plats libanais avec lesquels elle a grandi, au Sud-Liban."
  },
  {
   "name": "Gulf News (Dubaï), cheffe Salam Dakkak, « Vegan recipe for Palestinian falafel », mis à jour le 25 avril 2022",
   "url": "https://gulfnews.com/food/cooking-cuisines/vegan-recipe-for-palestinian-falafel-1.1650614487713",
   "used_for": "Falafels palestiniens aux pois chiches seuls, en grammes : 1 kg de pois chiches, 26 g d'ail, 110 g d'oignon, 30 g de coriandre en poudre, 150 g de coriandre fraîche, 200 g de persil, 45 g de sel, 5 g de poivre noir, 10 g de cumin, 4 g de bicarbonate, pour 35 à 40 falafels ; trempage d'une nuit ; friture ; moule à falafels ou boulettes."
  },
  {
   "name": "Gulfood, page de la cheffe Salam Daqqaq (Dakkak) ; The National, « Culture Bites: Palestinian-Jordanian chef Salam Dakkak gets to the heart of Levantine cuisine »",
   "url": "https://www.gulfood.com/speakers/salam-daqqaq",
   "used_for": "Vérification : cheffe d'origine palestinienne (palestino-jordanienne selon The National), propriétaire de Bait Maryam à Dubaï. Deuxième page : https://www.thenationalnews.com/video/8Y09nupU/culture-bites-palestinian-jordanian-chef-salam-dakkak-gets-to-the-heart-of-levantine-cuisine/"
  },
  {
   "name": "The Mediterranean Dish (Suzy Karadsheh, qui a grandi à Port-Saïd, en Égypte), « How to Make Falafel », 6 février 2020",
   "url": "https://www.themediterraneandish.com/how-to-make-falafel/",
   "used_for": "Ajoutée à la contre-vérification, à la place d'Olive magazine (son robots.txt interdit ClaudeBot) : pois chiches secs, jamais en conserve ni cuits, sinon les falafels se désagrègent dans l'huile chaude ; trempage de 18 à 24 heures ; au moins 1 heure au réfrigérateur ; levure chimique et sésame juste avant la friture ; friture de 3 à 5 minutes, sans surcharger ; servis chauds, en pita avec une sauce au tahini."
  },
  {
   "name": "London Fire Brigade, « Pan fires »",
   "url": "https://www.london-fire.gov.uk/safety/the-home/cooking/pan-fires/",
   "used_for": "Feu de casserole : ne pas l'attaquer soi-même ni déplacer la casserole, jamais d'eau, couper le feu si c'est sans danger, quitter la pièce, fermer la porte et appeler les secours. Remplace la page de Country & Townhouse, qui ne servait qu'à présenter Imad Alarnab."
  },
  {
   "name": "Mama's Lebanese Kitchen (Edgard, recettes de sa mère Esperance, du Nord du Liban), « Lebanese Falafel Recipe From Scratch », 23 janvier 2011",
   "url": "https://mamaslebanesekitchen.com/mezza/falafel-from-scratch/",
   "used_for": "Version familiale libanaise aux fèves et pois chiches (1 livre de fèves décortiquées et ¾ de livre de pois chiches, soit 794 g, pour 8) ; selon un ami palestinien, en Palestine et chez la plupart des Libanais, falafels aux pois chiches seuls ; en Égypte, aux fèves seules (« Toh'miyya ») ; trempage d'une nuit ; mixage jusqu'à l'aspect de chapelure ; herbes égouttées ; farine si la pâte est trop collante ; bicarbonate juste avant la friture ; moule, cuillère à glace ou deux cuillères ; friture jusqu'à doré et croustillant ; sésame facultatif ; au four à 400 °F (204 °C) 7 à 10 minutes ; 3 ou 4 falafels écrasés le long d'un pain pita, avec persil, sauce au tahini, tomates, pickles de concombre et de navet, sauce piquante facultative ; pâte congelée quelques semaines."
  },
  {
   "name": "Gulf News, cheffe Anissa Helou, « Recipe for Mediterranean falafel with tahini dip », mis à jour le 25 avril 2022",
   "url": "https://gulfnews.com/food/cooking-cuisines/recipe-for-mediterranean-falafel-with-tahini-dip-1.1650617436574",
   "used_for": "100 g de pois chiches et 200 g de fèves trempés une nuit (avec du bicarbonate), 5 gousses d'ail, 1 petit oignon, 50 g de coriandre fraîche sans les grosses tiges, 1 c. à c. de cumin, 1 c. à c. de piment de la Jamaïque, ¼ c. à c. de poivre noir, ⅛ c. à c. de piment de Cayenne, ½ c. à c. de bicarbonate dans la pâte et ½ c. à c. juste avant la friture ; 30 minutes de repos au frais ; test du morceau de pain ; ne pas surcharger ; environ 15 boulettes, 3 à 4 minutes jusqu'à bien dorées ; papier absorbant ; sauce : 100 ml de tahini, jus d'un citron, 60 ml d'eau, 1 petite gousse d'ail, sel ; la sauce épaissit puis redevient fluide ; servis chauds avec pickles (de préférence navets roses), tomates et persil plat."
  },
  {
   "name": "Anissa Helou, page « About »",
   "url": "http://anissas.com/about/",
   "used_for": "Vérification : née à Beyrouth d'un père syrien et d'une mère libanaise, autrice de « Lebanese Cuisine » (1994)."
  },
  {
   "name": "Taste of Beirut (Joumana Accad, née et élevée à Beyrouth), « Falafel sandwiches », 30 août 2009, d'après « The Arab Table » de May S. Bsisu ; copie Wayback Machine du 18 septembre 2017 (site fermé)",
   "url": "https://web.archive.org/web/20170918215823/http://www.tasteofbeirut.com/falafel-sandwiches/",
   "used_for": "Au Liban, aussi populaire que le chawarma, chaque quartier de Beyrouth a ses adresses ; dans le monde arabe, on admet que le falafel vient d'Égypte (ta'amiyah) ; mélange de fèves et de pois chiches (363 g) pour 25 falafels ; tri des petits cailloux ; trempage de 12 à 18 heures ; pois chiches bien séchés ; hachoir à viande ou robot ; bicarbonate et levure chimique juste avant la friture, pour des falafels légers ; huile à 375 °F (191 °C) ou test du pain ; falafels trempés dans le sésame ; environ 5 minutes ; moule « aaleb al-falafel »."
  },
  {
   "name": "recettelibanaise.com, « Falafel »",
   "url": "https://www.recettelibanaise.com/falafel/",
   "used_for": "Pour 8 : 500 g de pois chiches et 500 g de fèves trempés 12 heures, essuyés avec un linge ; 2 oignons, 4 gousses d'ail, persil, coriandre, menthe, 1 c. à c. de cumin, 1 c. à c. de coriandre en poudre, paprika, 1 c. à s. de sel ; repos d'1 heure au réfrigérateur ; bicarbonate et levure chimique juste avant la friture ; boulettes de la grosseur d'une noix ; huile à environ 170 °C ; sortis quand ils flottent ; au four, moins croustillants ; sandwich au pain libanais avec tomates, concombres, cornichons, persil et tarator ; mezzé avec houmous et taboulé ; variantes à la menthe ou au piment."
  },
  {
   "name": "The Matbakh (Lily Guidry, libano-américaine ; recette signée Mariam Nabbout), « Lebanese Falafel », mis à jour le 13 mai 2026",
   "url": "https://thematbakh.com/lebanese-falafel-patties/",
   "used_for": "Pois chiches seuls, trempés 24 heures, séchés ; jamais de pois chiches cuits, sinon les falafels se défont ; au moins 1 heure au frais ; au Liban, toujours avec le tarator ; en mezzé avec houmous ; sésame facultatif ; au four à 450 °F (232 °C) 4 à 5 minutes ; pâte congelée sans bicarbonate, ajouté après décongélation (réponse de l'autrice à une lectrice). Source de la diaspora, utilisée en appui."
  },
  {
   "name": "House & Home (Canada), « Dima Al Sharif's Falafel », 28 février 2017, d'après son livre « Plated Heirlooms »",
   "url": "https://houseandhome.com/food/dima-al-sharifs-falafel/",
   "used_for": "Recette palestinienne : pois chiches et fèves, menthe, persil, poivron vert, piment vert facultatif, cumin, coriandre, levure chimique et bicarbonate ; frits jusqu'à bruns et croustillants ; servis chauds avec sauce au tahini, tomates et pain pita. Cette version fait cuire les légumineuses après le trempage : point non retenu (voir les écarts)."
  },
  {
   "name": "Hadia's Lebanese Cuisine (Hadia Zebib), « Taratour, Lemon Tahini Sauce », 29 mai 2023",
   "url": "https://hadiaslebanesecuisine.com/blog/taratour-lemon-tahini-sauce/",
   "used_for": "Tarator pour falafels et chawarma de viande : ½ tasse de tahini, ⅓ tasse d'eau, 3 c. à s. de jus de citron, 1 gousse d'ail écrasée avec une pincée de sel, sel ; bien remuer le tahini ; la sauce épaissit puis redevient lisse ; crémeuse, eau en plus si besoin ; gardée au réfrigérateur dans un bocal en verre propre."
  },
  {
   "name": "Sada El Balad (Égypte), Reham Kadry, « بطرق مختلفة.. تحضير الطعمية بخطوات بسيطة », recettes du chef Nehad El Gendy, 18 juin 2019",
   "url": "https://www.elbalad.news/3868591",
   "used_for": "Ta'ameya égyptienne : 1 kg de fèves concassées trempées une journée entière, poireau (kurrat), céleri, oignons, une tête d'ail, piment fort, sel, cumin, coriandre en poudre et autres épices, menthe séchée ; pâte hachée puis congelée en sachets."
  },
  {
   "name": "Wikipédia (anglais), « Falafel »",
   "url": "https://en.wikipedia.org/wiki/Falafel",
   "used_for": "Fèves en Égypte, pois chiches ou mélange au Levant ; pois chiches jamais cuits avant (sinon les falafels se défont et il faut de la farine), trempés une nuit, parfois avec du bicarbonate ; cumin et coriandre ; fèves mixées avec poireau, persil, coriandre ; moule « aleb » ; intérieur vert ou beige ; sésame parfois ; pain pita, tomates, laitue, concombre, sauce au tahini ; carême des chrétiens arabes et iftar ; nom « ta'miyya » en Égypte ; origine probable en Égypte ; falafels palestiniens farcis au sumac et à l'oignon."
  },
  {
   "name": "Wikipédia (arabe), « فلافل »",
   "url": "https://ar.wikipedia.org/wiki/%D9%81%D9%84%D8%A7%D9%81%D9%84",
   "used_for": "Nom arabe « فلافل », « طعمية » en Égypte ; fèves en Égypte, pois chiches au Levant, mélange au Liban ; en Syrie, pois chiches seuls, sumac et sésame après la friture, sandwich avec sauce yaourt-tahini ou houmous, tomates, pickles de concombre et de navet, persil ; trempage d'environ 12 heures ; en Égypte, petit déjeuner avec le foul, pickles et radis vert."
  },
  {
   "name": "Wikipédia (français), « Falafel », modifié le 1er novembre 2026",
   "url": "https://fr.wikipedia.org/wiki/Falafel",
   "used_for": "Noms « falafel » et « ta'miyya » ; origine probable en Égypte ; sandwich au pain pita avec crudités et tarator ; en Égypte, falafels aux fèves, mangés dès le petit déjeuner."
  },
  {
   "name": "Arabi Post (عربي بوست), « منها المصرية بالفول والسورية بالحمص... ألذّ وصفات الفلافل », 11 mars 2024",
   "url": "https://arabicpost.net/%d9%84%d8%a7%d9%8a%d9%81-%d8%b3%d8%aa%d8%a7%d9%8a%d9%84/2024/03/11/%d8%b7%d8%b1%d9%8a%d9%82%d8%a9-%d8%a7%d9%84%d9%81%d9%84%d8%a7%d9%81%d9%84/",
   "used_for": "Recoupement des noms : « falafel » au Levant, aux pois chiches ; « ta'ameya » en Égypte, aux fèves. Ses recettes reprennent des sites étrangers : non utilisées pour les quantités."
  },
  {
   "name": "London Fire Brigade, « Deep fat fryers » et « Pan fires »",
   "url": "https://www.london-fire.gov.uk/safety/the-home/cooking/deep-fat-fryers/",
   "used_for": "Casserole jamais remplie à plus d'un tiers ; aliments secs (l'huile et l'eau, un mélange dangereux) ; huile qui fume = trop chaude, couper le feu et laisser refroidir ; friteuse électrique à thermostat, bien plus sûre ; en cas de feu : ne pas déplacer la casserole, jamais d'eau, couper le feu si c'est sans danger, sortir, fermer la porte et appeler les secours. Deuxième page : https://www.london-fire.gov.uk/safety/the-home/cooking/pan-fires/"
  },
  {
   "name": "Gouvernement du Québec, « Prévenir les risques d'incendie lorsque vous cuisinez »",
   "url": "https://www.quebec.ca/securite-situations-urgence/securite-incendie/prevenir-incendie/cuisine",
   "used_for": "Surveiller en tout temps l'huile ; couvercle à portée de main ; friteuse munie d'un thermostat ; ne jamais laisser chauffer une huile qui fume ; jamais d'eau sur un feu d'huile ; couvercle de taille adaptée ; appeler les pompiers même si le feu semble éteint ; ne jamais utiliser une casserole pour frire."
  },
  {
   "name": "GOV.UK (Food Standards Agency), « Cooking your food » et « Home food fact checker » (mis à jour le 21 août 2026)",
   "url": "https://www.gov.uk/government/publications/cooking-your-food/cooking-your-food",
   "used_for": "Restes au réfrigérateur dans les 2 heures, mangés dans les 48 heures, réchauffés une seule fois jusqu'à être fumants ; laver fruits et légumes avant de les manger ; légumineuses crues ou mal cuites à risque, surtout les haricots rouges. Deuxième page : https://www.gov.uk/government/publications/home-food-fact-checker/home-food-fact-checker"
  },
  {
   "name": "Règlement (UE) n° 1169/2011, annexe II, version consolidée du 1er janvier 2018, EUR-Lex",
   "url": "https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:02011R1169-20180101",
   "used_for": "Les graines de sésame et produits à base de sésame (donc le tahini), ainsi que le blé (gluten), font partie des allergènes à signaler."
  },
  {
   "name": "Singapore Food Agency, « The Arch Enemy of G6PD-Deficient Individuals – Fava Beans », Soon Fang Min, 29 août 2023",
   "url": "https://www.sfa.gov.sg/food-safety-tips/food-risk-concerns/risk-at-a-glance/the-arch-enemy-of-g6pd-deficient-individuals-fava-beans",
   "used_for": "Pour la variante aux fèves : les fèves peuvent déclencher le favisme chez les personnes qui ont un déficit en G6PD ; les composés en cause résistent à la cuisson ; éviter les fèves et le contact avec les autres aliments."
  }
 ],
 "discrepancies": [
  "Légumineuses : pois chiches seuls (Alphafoodie, Salam Dakkak, The Matbakh, The Mediterranean Dish ; Wikipédia pour la Palestine et la Syrie) ou mélange avec des fèves (Mama's Lebanese Kitchen, Anissa Helou, Taste of Beirut, recettelibanaise.com, Dima Al Sharif ; Wikipédia en arabe pour le Liban). Retenu : pois chiches seuls, comme demandé ; le mélange est donné en variante.",
  "Pois chiches cuits ou crus : la page de House & Home (recette de Dima Al Sharif) fait cuire les légumineuses après le trempage ; toutes les autres sources les utilisent crues, seulement trempées, et Wikipédia et The Matbakh expliquent que cuites, elles font des falafels qui se défont. Retenu : crus.",
  "Quantité : de 50 à 125 g de légumineuses sèches par personne selon les sources (médiane d'environ 66 g, calcul python3 -I). Retenu : 250 g pour 4 sandwichs (62,5 g chacun), dans la fourchette d'Anissa Helou (50 à 75 g), près de The Matbakh (57 g). D'après les rapports des sources, cela donne environ 9 à 17 falafels selon leur taille (environ 14 d'après Alphafoodie).",
  "Toutes les quantités ont été ramenées à 1 kg de légumineuses sèches, puis à 250 g (calculs python3 -I). Oignon : médiane 0,55 oignon moyen pour 250 g ; retenu ½ (Alphafoodie et The Matbakh 0,55 ; recettelibanaise.com 0,5).",
  "Ail : deux groupes, environ 1 gousse pour 250 g (Alphafoodie, The Matbakh, recettelibanaise.com) ou 3 à 4 (Mama's Lebanese Kitchen 3,2 ; Anissa Helou 4,2). Médiane 1,1 : retenu 2 gousses, entre les deux groupes.",
  "Herbes : seules Salam Dakkak et Anissa Helou les donnent en grammes. Coriandre fraîche : 37,5 g et 41,7 g pour 250 g, retenu 40 g. Persil : 50 g d'après Salam Dakkak ; Alphafoodie met autant de persil que de coriandre (1 tasse de chaque). Anissa Helou ne met que de la coriandre, The Matbakh que du persil, recettelibanaise.com ajoute de la menthe. Les tasses d'herbes n'ont pas été converties en grammes.",
  "Cumin : médiane 0,62 c. à c. pour 250 g ; retenu ¾ c. à c. (Taste of Beirut 0,69 ; Alphafoodie et Anissa Helou 0,83). Coriandre en poudre : médiane 0,81 ; retenu 1 c. à c. (Mama's Lebanese Kitchen 0,94). Poivre noir : médiane 0,31 ; retenu ¼ c. à c. (Anissa Helou 0,21 ; Alphafoodie 0,41). Les grammes d'épices de Salam Dakkak n'ont pas été convertis en cuillères.",
  "Sel : deux groupes, environ ½ c. à c. pour 250 g (Alphafoodie, The Matbakh) ou 2 c. à c. (Mama's Lebanese Kitchen, Taste of Beirut ; Salam Dakkak 45 g par kg). Médiane : ¾ c. à c. (recettelibanaise.com), retenu.",
  "Bicarbonate dans la pâte : de 0,12 à 0,83 c. à c. pour 250 g (médiane 0,69) ; retenu ½ c. à c. Anissa Helou et Wikipédia en mettent aussi parfois dans l'eau de trempage. Levure chimique en plus chez Taste of Beirut, recettelibanaise.com et Dima Al Sharif, et seule chez The Matbakh : non retenue (absente chez Alphafoodie, Salam Dakkak, Mama's Lebanese Kitchen et Anissa Helou).",
  "Farine : Mama's Lebanese Kitchen et The Matbakh en mettent 2 c. à s. ; les autres recettes lues n'en mettent pas. Retenu : sans farine, avec le conseil de Mama's Lebanese Kitchen d'en ajouter un peu si la pâte colle trop.",
  "Texture : pâte un peu granuleuse (Mama's Lebanese Kitchen, Alphafoodie) ou fine et lisse (Anissa Helou, recettelibanaise.com). Retenu : pâte fine qui colle un peu, sans aller jusqu'à la purée.",
  "Repos au frais : 30 minutes (Alphafoodie, Anissa Helou), 1 heure (The Matbakh, recettelibanaise.com), aucun (Salam Dakkak). Retenu : au moins 30 minutes, avec minuteur.",
  "Température de l'huile : 170 °C (recettelibanaise.com), 180 °C (Alphafoodie), 191 °C (375 °F, Taste of Beirut). Retenu : 180 °C, la médiane.",
  "Durée de friture : 3 à 4 minutes (Anissa Helou), 3 à 5 minutes (The Mediterranean Dish), environ 5 minutes (Taste of Beirut), 3 à 4 minutes par face (Alphafoodie). Retenu : environ 4 minutes, jusqu'à bien dorés, avec minuteur.",
  "Sésame : dans la pâte juste avant la friture (The Mediterranean Dish, 2 c. à s.), parsemé avant la friture (Alphafoodie, The Matbakh), falafels trempés dedans (Taste of Beirut) ou roulés dedans à la sortie de l'huile (Mama's Lebanese Kitchen). Retenu : 2 c. à s. parsemées avant la friture, facultatif (Alphafoodie : environ 2,2 c. à s. pour 250 g).",
  "Sauce au tahini, ramenée à 250 g de pois chiches : tahini 83 ml (Anissa Helou) et 65 ml (Alphafoodie), retenu 5 c. à s. (74 ml). Citron : ⅜ du volume de tahini chez Hadia et chez Alphafoodie, soit 2 c. à s. Eau : 0,5 à 0,67 fois le tahini (Alphafoodie, Anissa Helou, Hadia), soit 3 c. à s. Ail : 1 petite gousse (Hadia ; Anissa Helou). La sauce de Mama's Lebanese Kitchen (2 c. à s. de tahini pour 1 tasse de citron) semble contenir une erreur : non utilisée.",
  "Conversions faites avec python3 -I : 1 livre = 453,6 g ; ¾ livre = 340,2 g ; 4 onces = 113,4 g ; ½ tasse = 118,3 ml ; ⅓ tasse = 78,9 ml ; 1 c. à s. = 14,8 ml ; 350 °F = 176,7 °C ; 375 °F = 190,6 °C ; 400 °F = 204,4 °C ; 450 °F = 232,2 °C.",
  "Piment : une pincée de Cayenne (Taste of Beirut), ⅛ c. à c. pour 300 g de légumineuses (Anissa Helou), ½ c. à c. de piment en poudre facultative pour 794 g (Mama's Lebanese Kitchen), ¼ c. à s. pour 454 g (Alphafoodie), un piment vert (Dima Al Sharif). Laissé facultatif et selon le goût.",
  "Halal : recette sans viande ni alcool ; huile 100 % végétale.",
  "Contre-vérifiée le 8 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 34 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Nom en darija : aucune source marocaine écrite en lettres latines trouvée ; laissé vide. La recherche « فلافل » sur Lalla Moulati n'a donné aucun article ; Wikipédia en darija n'a pas de page « فلافل ».",
  "Chef in Disguise (Sawsan Abu Farha) : page de contrôle anti-robots (erreur 403), non utilisé.",
  "Palestine in a Dish : son robots.txt interdit les robots « anthropic-ai » et « Claude-Web ». La page a été téléchargée par erreur avant ce contrôle, puis effacée sans être lue ni utilisée.",
  "Al Dostor (dostor.org, recette égyptienne de ta'ameya) : robots.txt interdit ClaudeBot et anthropic-ai ; non utilisé. The World's 50 Best (portrait de Salam Dakkak) : robots.txt interdit Claude-SearchBot ; non utilisé. NPR (article d'août 2026 sur la ta'ameya) : connexion impossible, non lu. Olive magazine (falafel syrien d'Imad Alarnab) : son robots.txt interdit ClaudeBot ; la source a été retirée à la contre-vérification, avec ce qui ne reposait que sur elle.",
  "Livres de Reem Kassis (« The Palestinian Table »), Yasmin Khan (« Zaitoun ») et Fadi Kattan (« Bethlehem ») : vus seulement dans des extraits de moteur de recherche, non lus, donc non utilisés.",
  "Nombre de falafels obtenus (environ 9 à 17 pour 250 g, selon leur taille) : estimé d'après les rapports des sources, non testé.",
  "Temps de préparation (30 min) et de cuisson (20 min) : estimations ; les sources vont de 15 minutes à 1 heure de préparation, et de 5 à 20 minutes de cuisson.",
  "Poids des herbes données en tasses : non converti en grammes (la densité des herbes varie).",
  "Mama's Lebanese Kitchen propose de goûter la pâte crue pour l'assaisonnement : non repris, faute de source officielle sur les pois chiches crus.",
  "Durée de conservation de la pâte crue au réfrigérateur (Alphafoodie : jusqu'à 4 jours) : pas de source officielle trouvée ; seule la congélation est conseillée.",
  "Trempage à température ambiante : aucune règle officielle trouvée sur ce point.",
  "Variété de pickles : les sources parlent de pickles de concombre et de navet salés ; les produits vendus au Maroc n'ont pas été vérifiés.",
  "Quota de recherche web : disponible pendant ce travail, mais l'index de la Wayback Machine a souvent répondu par des erreurs 503 et 504 ; d'autres pages de Taste of Beirut n'ont pas pu être cherchées."
 ],
 "cuisine": "Levantine",
 "rayon": "D'ailleurs",
 "img_alt": "Falafels dorés, alignés",
 "img": "img/falafel.jpg",
 "photo": {
  "author": "Popo le Chien",
  "license": "CC BY-SA 3.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/3.0",
  "page": "https://commons.wikimedia.org/wiki/File:Falafels_2.jpg",
  "modified": "réduite"
 }
});
