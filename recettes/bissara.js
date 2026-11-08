/* Recette : Bissara, soupe de fèves sèches. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "bissara",
 "title": "Bissara, soupe de fèves sèches",
 "darija": "Bissara (bayssar dans le Nord)",
 "arabic": "بيصارة",
 "tagline": "La purée-soupe de fèves du Nord : toute simple dans la marmite, irrésistible dans le bol avec l'huile d'olive, le cumin et le piment.",
 "category": "Soupe",
 "occasion": "Plat d'hiver, au petit-déjeuner, au déjeuner ou au dîner ; plat de rue très populaire, servi dès le matin ; parfois au ftour du Ramadan",
 "region": "Tout le Maroc, mais spécialité du Nord : Tanger, Tétouan, Chefchaouen et le pays Jbala, où on l'appelle aussi « bayssar »",
 "servings": 6,
 "servings_label": "personnes",
 "time": {
  "prep": 20,
  "cook": 75,
  "rest": 0
 },
 "difficulty": "Facile",
 "equipment": [
  "Grande marmite à fond épais",
  "Cuillère ou petite écumoire, pour retirer la mousse",
  "Mixeur plongeant (ou moulin à légumes, ou passoire fine)",
  "Cuillère en bois",
  "Louche",
  "Bols ou assiettes creuses"
 ],
 "ingredients": [
  {
   "group": "Bissara",
   "items": [
    {
     "id": "feves",
     "q": 350,
     "u": "g",
     "name": "de fèves sèches cassées et décortiquées",
     "note": "sans la peau. Favisme : lis l'encadré plus haut.",
     "canon": "feves-seches"
    },
    {
     "id": "ail",
     "q": 4,
     "u": "",
     "name": "gousse d'ail",
     "pl": "gousses d'ail",
     "note": "à éplucher, sans couper",
     "canon": "ail"
    },
    {
     "id": "eau",
     "q": 1.75,
     "u": "l",
     "name": "d'eau froide",
     "canon": "eau"
    },
    {
     "id": "huile",
     "q": 6,
     "u": "c. à s.",
     "name": "d'huile d'olive",
     "canon": "huile-olive"
    },
    {
     "id": "cumin",
     "q": 1.5,
     "u": "c. à c.",
     "name": "de cumin moulu",
     "canon": "cumin"
    },
    {
     "id": "paprika",
     "q": 1,
     "u": "c. à c.",
     "name": "de paprika doux",
     "canon": "paprika"
    },
    {
     "id": "sel",
     "q": 1,
     "u": "c. à c.",
     "name": "de sel",
     "note": "à rectifier à la fin",
     "canon": "sel"
    },
    {
     "id": "eau-chaude",
     "q": null,
     "u": "",
     "name": "eau chaude",
     "note": "pendant la cuisson et pour la texture, si besoin",
     "canon": "eau"
    }
   ]
  },
  {
   "group": "Pour servir",
   "items": [
    {
     "id": "huile-service",
     "q": null,
     "u": "",
     "name": "huile d'olive vierge extra",
     "note": "un bon filet par bol",
     "canon": "huile-olive"
    },
    {
     "id": "cumin-service",
     "q": null,
     "u": "",
     "name": "cumin moulu",
     "canon": "cumin"
    },
    {
     "id": "paprika-service",
     "q": null,
     "u": "",
     "name": "paprika",
     "canon": "paprika"
    },
    {
     "id": "piment",
     "q": null,
     "u": "",
     "name": "piment fort en poudre",
     "note": "facultatif, sur la table",
     "canon": "piment-cayenne"
    },
    {
     "id": "citron",
     "q": null,
     "u": "",
     "name": "citron",
     "note": "en quartiers, facultatif",
     "canon": "citron"
    },
    {
     "id": "khobz",
     "q": null,
     "u": "",
     "name": "khobz (pain marocain)",
     "note": "pour saucer",
     "canon": "khobz"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Trie et lave les fèves",
   "text": "Étale {{feves}} de fèves cassées sur un plateau. Retire les petits cailloux et les bouts de peau brune. Lave-les à l'eau, puis égoutte-les.",
   "timer": null,
   "tip": "Pas besoin de trempage avec des fèves cassées et décortiquées. Si tu les fais tremper une nuit, comme Taste of Maroc, les derniers bouts de peau se retirent plus facilement."
  },
  {
   "phase": "Préparation",
   "title": "Épluche l'ail",
   "text": "Épluche {{ail:full}}. Garde l'ail entier, sans le couper.",
   "timer": null,
   "tip": "Choumicha met l'ail en chemise, puis passe la purée à la passoire fine ; Nargisse Benkabbou (My Moroccan Food) le cuit aussi en chemise, puis l'épluche avant de l'écraser. Comme ici tu mixes, épluche-le avant."
  },
  {
   "phase": "Cuisson",
   "title": "Mets les fèves à cuire",
   "text": "Mets les fèves, l'ail et {{eau}} d'eau froide dans une grande marmite à fond épais. Porte à ébullition sur feu moyen.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Écume la mousse",
   "text": "Dès que ça bout, baisse le feu. Avec une cuillère, retire la mousse blanche qui monte à la surface, jusqu'à ce qu'il n'en reste presque plus.",
   "timer": null,
   "tip": "Choumicha écume pendant 10 à 15 minutes."
  },
  {
   "phase": "Cuisson",
   "title": "Laisse mijoter une heure",
   "text": "Couvre la marmite à moitié pour que ça ne déborde pas. Laisse cuire à feu doux pendant 1 heure, jusqu'à ce que les fèves soient fondantes. Remue de temps en temps en raclant le fond. Si le niveau baisse trop, ajoute un peu d'{{eau-chaude}}.",
   "timer": {
    "min": 60,
    "label": "Cuisson des fèves",
    "done": "Écrase une fève avec le dos d'une cuillère : elle doit s'écraser toute seule."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Vérifie la cuisson",
   "text": "Écrase une fève contre la paroi avec le dos d'une cuillère : elle doit s'écraser sans résistance. Si elle est encore ferme, ajoute un peu d'eau chaude et laisse cuire encore, en surveillant, jusqu'à ce qu'elle soit fondante.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Mixe en purée lisse",
   "text": "Retire la marmite du feu. Mixe les fèves et l'ail avec leur eau de cuisson au mixeur plongeant, jusqu'à obtenir une purée lisse et crémeuse.",
   "timer": null,
   "tip": "Sans mixeur, passe-les au moulin à légumes ou dans une passoire fine, comme on le faisait autrefois."
  },
  {
   "phase": "Cuisson",
   "title": "Assaisonne et ajoute l'huile",
   "text": "Remets la marmite sur feu doux. Ajoute {{cumin}} de cumin, {{paprika}} de paprika, {{sel}} de sel et {{huile}} d'huile d'olive. Laisse frémir 5 minutes en remuant avec une cuillère en bois, jusqu'à ce que l'huile soit bien mêlée à la purée.",
   "timer": {
    "min": 5,
    "label": "Assaisonnement",
    "done": "La purée doit être homogène et crémeuse. Règle maintenant la texture."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Règle la texture",
   "text": "Pour une soupe, ajoute de l'eau chaude petit à petit en remuant. Pour une purée à saucer avec le pain, garde-la plus épaisse. Goûte et rectifie le sel, sans trop en mettre : les condiments donneront du goût à table.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Sers bien chaud",
   "text": "Verse la bissara bien chaude dans des bols ou des assiettes creuses. Arrose chaque bol d'un bon filet d'{{huile-service}}, puis saupoudre de {{cumin-service}} et de {{paprika-service}}.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Pose les condiments sur la table",
   "text": "Mets sur la table du {{piment}}, de l'huile d'olive, du cumin et des quartiers de {{citron}} : chacun relève son bol à son goût. Sers avec du {{khobz}} ou du pain d'orge.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Prends des fèves sèches cassées et décortiquées, c'est-à-dire sans leur peau.",
   "source": "Choumicha (« fèves sèches cassées (sans la peau) ») ; Bladi.net ; Taste of Maroc ; Hespress (2011)"
  },
  {
   "text": "Avec des fèves cassées, le trempage n'est pas obligatoire : beaucoup de recettes marocaines les cuisent directement après les avoir lavées. Si tu les fais tremper une nuit, les derniers bouts de peau brune se retirent facilement.",
   "source": "Sans trempage : Choumicha, Lalla Moulati, Chhiwat, Morocco World News, Cooking with Alia (n° 858). Avec trempage : Taste of Maroc (qui parle des bouts de peau), My Moroccan Food, Cooking with Alia (n° 132)"
  },
  {
   "text": "Au début de la cuisson, retire la mousse blanche qui monte à la surface.",
   "source": "Choumicha ; Cooking with Alia ; Hespress (2011)"
  },
  {
   "text": "Couvre la marmite à moitié, ou laisse une petite ouverture : complètement couverte, elle déborde.",
   "source": "Choumicha ; Cooking with Alia (n° 132) ; Taste of Maroc cuit aussi à demi couvert"
  },
  {
   "text": "Les fèves doivent être fondantes avant de mixer : une fève doit s'écraser toute seule. Sinon, ajoute de l'eau chaude et prolonge la cuisson.",
   "source": "Choumicha (« jusqu'à ce que les fèves deviennent fondantes ») ; Morocco World News"
  },
  {
   "text": "Mets les épices et l'huile d'olive après avoir mixé, sur feu doux, et remue jusqu'à ce que la purée soit lisse et crémeuse.",
   "source": "Choumicha ; Hespress (2011) ; Cooking with Alia"
  },
  {
   "text": "Dans la marmite, la bissara reste simple. Son goût vient surtout de ce qu'on ajoute dans le bol : une bonne huile d'olive, du cumin, du paprika et du piment.",
   "source": "Taste of Maroc ; Choumicha ; Lalla Moulati (2020)"
  },
  {
   "text": "Choisis une bonne huile d'olive et, si tu peux, du cumin fraîchement moulu.",
   "source": "Taste of Maroc"
  },
  {
   "text": "C'est l'eau qui décide : plus liquide, la bissara se mange au bol, à la cuillère, comme dans la rue ; plus épaisse, elle se sauce avec le pain.",
   "source": "Taste of Maroc ; Cooking with Alia (n° 132) ; Bladi.net (« il faut que ça reste liquide »)"
  },
  {
   "text": "Autrefois, on laissait les fèves cuire des heures, puis on les passait au tamis ou au moulin. Le mixeur va plus vite et donne une purée plus lisse.",
   "source": "Taste of Maroc ; Choumicha passe toujours sa purée à la passoire fine"
  },
  {
   "text": "Dans le Nord, on la mange avec quelques olives et des morceaux d'oignon. Lalla Moulati la sert aussi avec du piment vert et du piment fort frit.",
   "source": "Hespress (2014, restaurant de Tanger) ; Lalla Moulati (2014) ; My Moroccan Food (oignon haché)"
  },
  {
   "text": "Pour réchauffer, mets la bissara à feu moyen-doux et remue souvent : elle brûle facilement. Laisse-la bien bouillonner avant de servir.",
   "source": "Taste of Maroc (feu moyen-doux, remuer souvent) ; USDA (les soupes se réchauffent jusqu'à pleine ébullition)"
  },
  {
   "text": "Mets les restes au réfrigérateur dans les 2 heures, en petites boîtes fermées pour qu'ils refroidissent vite, et mange-les dans les 3 jours.",
   "source": "ANSES (2 heures, 3 jours, petites portions) ; USDA (2 heures, 3 à 4 jours, petits récipients)"
  }
 ],
 "mistakes": [
  "Prendre des fèves fraîches ou surgelées : la bissara se fait avec des fèves sèches (Taste of Maroc ; Hespress).",
  "Couvrir complètement la marmite : l'eau déborde (Choumicha ; Cooking with Alia).",
  "Laisser cuire sans remuer ni surveiller l'eau : la purée attache au fond (Morocco World News ; Hespress ; Cooking with Alia).",
  "Mixer avant que les fèves soient fondantes (Choumicha ; Morocco World News).",
  "Trop saler dans la marmite : les condiments ajoutent du goût à table (Taste of Maroc).",
  "Réchauffer à feu vif sans remuer : la bissara brûle (Taste of Maroc).",
  "Laisser les restes plus de 2 heures à température ambiante (ANSES ; USDA)."
 ],
 "serving": "Bien chaude, en bol pour la soupe ou en assiette creuse pour la purée à saucer. Arrose d'huile d'olive et saupoudre de cumin et de paprika ; laisse sur la table du piment fort, du cumin, de l'huile d'olive et du citron ; sers avec du khobz ou du pain d'orge (Choumicha ; Taste of Maroc ; Hespress ; Sky News Arabia ; Bladi.net). Dans le Nord, on l'accompagne d'olives et d'oignon, parfois de poisson frit (Hespress 2011 et 2014 ; Taste of Maroc). Elle se mange au petit-déjeuner, au déjeuner ou au dîner (Hespress ; My Moroccan Food ; Taste of Maroc), surtout quand il fait froid (Hespress ; Le360 ; My Moroccan Food).",
 "variants": [
  "Bissara aux pois cassés, ou « bissara d'jelbana » (Hespress, 2011). Choumicha fait tremper les pois cassés une heure, puis les cuit avec oignon, ail, persil, coriandre, gingembre, curcuma et poivre. Taste of Maroc ne les fait pas tremper et ajoute de l'oignon.",
  "Un mélange de fèves et de pois cassés : My Moroccan Food ; Cooking with Alia (n° 858 : moitié-moitié, avec du piment en poudre dans la purée).",
  "Avec des légumes : tomate, potiron rouge et carotte ; dans le Nord et le Rif, navet et chou à la place. Un restaurateur de Larache n'en met pas, pour plaire à tout le monde (Hespress, 2011).",
  "Huile d'argan au lieu de l'huile d'olive, dans le Souss et l'Atlas (Hespress, 2011 ; Sky News Arabia, 2021).",
  "Ail pilé avec le sel au mortier, ajouté aux fèves cuites juste avant de mixer (Lalla Moulati, 2014).",
  "Huile à l'ail pour servir : chauffe doucement de l'huile d'olive avec de l'ail râpé et une pincée de sel, sans le brûler, puis verse-la sur la bissara (Morocco World News).",
  "Fèves grillées à sec quelques minutes dans une poêle chaude avant la cuisson, et une tomate mixée avec la purée (Lalla Moulati, 2018).",
  "Crème de fèves servie avec une salade de tomates, poivron grillé, oignon et olives vertes, assaisonnée de citron et de cumin (Choumicha)."
 ],
 "sources": [
  {
   "name": "Choumicha Chafay, « Bissara, purée de fèves » (choumicha.ma, recette n° 957), copie archivée du 3 octobre 2019",
   "url": "https://web.archive.org/web/20191003123634/https://www.choumicha.ma/recette/957-bissara.html",
   "used_for": "Source marocaine de référence : 400 g de fèves, 2 l d'eau, 6 gousses d'ail, 10 cl d'huile d'olive, 1 c. à thé de cumin, de paprika et de sel pour 8 ; pas de trempage ; feu moyen puis écume 10 à 15 min ; couvercle à moitié pour éviter le débordement ; feu doux jusqu'à ce que les fèves soient fondantes ; passoire fine ; épices et huile ajoutées sur feu doux jusqu'à une purée homogène ; service avec huile d'olive, paprika et cumin ; ail non épluché (réponse du site en commentaire, 22 avril 2016) ; noms « Baysar » et « Bayssar » ; 1 h 15 de cuisson."
  },
  {
   "name": "Choumicha, « Bissara \"purée de fèves sèches\" » (choumicha.ma, recette n° 343), copie archivée du 4 décembre 2012",
   "url": "https://web.archive.org/web/20121204165038/http://www.choumicha.ma:80/recettes/details/343/bissara-puree-de-feves-seches.html",
   "used_for": "350 g de fèves sèches cassées sans peau pour 6, 1,75 l d'eau, 3 gousses d'ail, 1 c. à thé de sel, 10 cl d'huile ; écume pendant 15 min environ ; cuisson à feu doux jusqu'à fondantes ; tamis très fin ; huile, sel et cumin ajoutés après, puis 5 à 10 min de frémissement en remuant à la cuillère en bois ; service avec cumin, piment rouge et huile ; 20 min de préparation."
  },
  {
   "name": "Choumicha, « Crème de fèves sèches aux légumes frais » (choumicha.ma, recette n° 995), copie archivée du 9 février 2025",
   "url": "https://web.archive.org/web/20250209181144/https://www.choumicha.ma/recette/995-creme-de-feves-seches-aux-legumes-frais.html",
   "used_for": "Fèves lavées et égouttées, sans trempage ; écume pendant les 15 premières minutes ; fèves écrasées puis passées au moulin à légumes ou à la passoire fine ; huile, sel et cumin incorporés sur feu doux jusqu'à une texture crémeuse ; variante servie avec une salade de légumes frais."
  },
  {
   "name": "Choumicha, « Purée de pois cassés » (choumicha.ma, recette n° 1498, mots clés Bissara et Jelbana), copie archivée du 15 décembre 2025",
   "url": "https://web.archive.org/web/20251215134834/https://choumicha.ma/recette/1498-puree-de-pois-casses.html",
   "used_for": "Variante aux pois cassés : trempage d'une heure, oignon, ail, bouquet de persil et coriandre, gingembre, curcuma, poivre, huile d'olive."
  },
  {
   "name": "Lalla Moulati, « بالخطوات المصورة تحضير البيصارة المغربية بالفول » (11 décembre 2014)",
   "url": "https://www.lalamoulati.net/8843.html",
   "used_for": "Site marocain. 500 g de fèves sèches triées et lavées, sans trempage ; ail pilé avec le sel ajouté aux fèves cuites ; mixage ; service dans un plat avec huile d'olive et cumin ; accompagnements : oignon, piment vert, olives, piment frit."
  },
  {
   "name": "Lalla Moulati, « طريقة بسيطة وجد سهلة لتحضير البيصارة المغربية في وقت وجيز » (8 janvier 2020)",
   "url": "https://www.lalamoulati.net/219329.html",
   "used_for": "500 g de fèves, 6 gousses d'ail, cumin, sel, paprika ; cuisson à feu doux ; huile d'olive ajoutée après mixage ; servie chaude avec huile d'olive, piment fort et cumin."
  },
  {
   "name": "Lalla Moulati, « عشاق البيصارة عندي ليكم واحد السر... » (28 décembre 2018)",
   "url": "https://www.lalamoulati.net/177286.html",
   "used_for": "Variante : fèves grillées à sec avant la cuisson et tomate mixée avec la purée ; plat d'hiver très demandé."
  },
  {
   "name": "Chhiwat.net, « بيصارة ساهلة و لذيذة », recette de Lamia (5 décembre 2013)",
   "url": "https://www.chhiwat.net/%D8%B4%D9%87%D9%8A%D9%88%D8%A7%D8%AA/%d8%a8%d9%8a%d8%b5%d8%a7%d8%b1%d8%a9-%d8%b3%d8%a7%d9%87%d9%84%d8%a9-%d9%88-%d9%84%d8%b0%d9%8a%d8%b0%d8%a9/",
   "used_for": "Site marocain de recettes. 500 g de fèves, 6 gousses d'ail, 1,5 l d'eau, cumin, paprika, sel pour 5 ; tout cuit puis mixé ; garni de piment en poudre et d'huile d'olive ; 60 min."
  },
  {
   "name": "Hespress, Yassine El Amari (Larache), « البيصارة.. سلاح المغاربة في ليالي الشتاء الباردة », 13 janvier 2011 (article repris d'Asharq Al-Awsat)",
   "url": "https://www.hespress.com/42028-42028.html",
   "used_for": "Média marocain. Fèves sèches concassées et décortiquées ; plat d'hiver servi chaud au déjeuner, au dîner ou au petit-déjeuner, avec du pain d'orge ou de blé ; 1 kg pour 8 personnes ; écume ; poivre, cumin et huile ajoutés après le mixage ; huile d'olive et cumin au service, citron facultatif ; argan dans le Souss et l'Atlas ; légumes (navet et chou dans le Nord et le Rif) ; bissara de pois cassés (« jelbana ») ; poisson frit à Larache."
  },
  {
   "name": "Hespress, Yassine El Achiri (agence Anadolu), « أكلة البيصَارَة.. وجبة أساسيّة لـ\"جبَالَة\" عند مقدَم الشتاء », 20 novembre 2014",
   "url": "https://www.hespress.com/195978-195978.html",
   "used_for": "Plat très consommé dans le Nord-Ouest ; les Jbala ont été les premiers connus pour la bissara ; à Tanger, servie chaude avec quelques olives et des morceaux d'oignon au déjeuner, seule au petit-déjeuner ; fèves décortiquées ou pois cassés."
  },
  {
   "name": "Le360, Said Kadry, « Vidéo. Tanger: la Bissara, cette soupe hivernale qui éveille l'appétit des Marocains (et même des non-Marocains) », 10 novembre 2020",
   "url": "https://fr.le360.ma/societe/video-tanger-la-bissara-cette-soupe-hivernale-qui-eveille-lappetit-des-marocains-et-meme-des-non-226979/",
   "used_for": "Média marocain. Spécialité très populaire dans le Nord (Tanger, Tétouan, Chefchaouen) et partout au Maroc ; appelée « bayssar » dans le Nord ; purée de fèves ou de pois secs plus ou moins épaisse, avec cumin, paprika et huile d'olive ; plat de l'approche de l'hiver."
  },
  {
   "name": "Bladi.net, recette « Bissara »",
   "url": "https://www.bladi.net/recettes/bissara.html",
   "used_for": "Site marocain. 250 g de fèves décortiquées et concassées, ail pelé, cuisson à l'autocuiseur 30 à 45 min ; purée qui doit rester liquide ; service avec huile d'olive, jus de citron, paprika et cumin."
  },
  {
   "name": "Bladi.net, Sébastien A., « La bissara marocaine, la soupe tendance de 2025 », 23 janvier 2025",
   "url": "https://www.bladi.net/bissara-marocaine-soupe-tendance-2025,112733.html",
   "used_for": "Ingrédients de base (fèves décortiquées ou pois cassés, huile d'olive, cumin, paprika, ail, parfois citron) ; servie au petit matin dans les souks et pendant le Ramadan (citation du journal Le Progrès)."
  },
  {
   "name": "Morocco World News, Safaa Kasraoui, « Bessara Soup, Morocco's Winter Warmer », 11 octobre 2022",
   "url": "https://www.moroccoworldnews.com/2022/10/40700/bessara-soup-moroccos-winter-warmer/",
   "used_for": "Média marocain. 500 g de fèves, sans trempage ; cuisson d'une heure à feu doux en remuant de temps en temps ; eau chaude si les fèves restent fermes ; test de la fève qui s'écrase ; texture réglée à l'eau chaude ; huile à l'ail pour servir ; cumin et paprika."
  },
  {
   "name": "Sky News Arabia, Asmaa Hassan (Marrakech), « المغاربة يواجهون البرد بـ\"البيصارة\" », 8 février 2021",
   "url": "https://www.skynewsarabia.com/varieties/1413673-%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D8%A9-%D9%8A%D9%88%D8%A7%D8%AC%D9%87%D9%88%D9%86-%D8%A7%D9%84%D8%A8%D8%B1%D8%AF-%D8%A8%D9%80%D8%A7%D9%84%D8%A8%D9%8A%D8%B5%D8%A7%D8%B1%D8%A9",
   "used_for": "Reportage à Marrakech : plat d'hiver dans tout le Maroc ; servie chaude avec du pain de blé ou d'orge, de l'huile d'olive, du piment fort et du cumin ; recette d'une Casablancaise (cuisson, mixage, puis cuisson en remuant) ; argan selon les régions ; légumes chez certains."
  },
  {
   "name": "Taste of Maroc, Christine Benlafquih, « Moroccan Dried Fava Bean Dip or Soup – Bessara (Bissara) », mise à jour du 13 janvier 2021 (copie archivée du 21 décembre 2025)",
   "url": "https://web.archive.org/web/20251221192418/https://tasteofmaroc.com/bessara-fava-bean-dip-or-soup/",
   "used_for": "Populaire surtout dans le Nord, seule ou avec du poisson ; plat de rue (photo à Chefchaouen) ; pour 6 : 12 oz (340 g) de fèves cassées, 6,5 tasses (1,54 l) d'eau, 1/3 de tasse (79 ml) d'huile, 6 à 7 gousses d'ail, 2 c. à c. de cumin et de paprika, 1,5 c. à c. de sel ; trempage de 8 h ; environ 1 h à demi couvert ; autrefois cuite des heures puis passée au tamis ou au moulin ; soupe ou purée selon l'eau ; goût doux relevé par les condiments (huile, cumin, cayenne ou harissa) ; bonne huile et cumin frais ; réchauffage doux en remuant ; 15 min de préparation et 1 h 15 de cuisson."
  },
  {
   "name": "My Moroccan Food, Nargisse Benkabbou, « Bissara – Split Peas and Fava Beans Dip », 18 février 2016",
   "url": "https://www.mymoroccanfood.com/home/bissara-split-peas-and-fava-beans-dip",
   "used_for": "Autrice marocaine. 400 g de fèves ou pois cassés trempés une nuit pour 4, 1 l d'eau, 4 gousses d'ail non épluchées puis écrasées, bicarbonate, épices et huile à mi-cuisson, 2 fois 20 min ; mixeur ou tamis ; servie chaude avec huile d'olive, paprika, cumin et oignon haché ; plat d'hiver mangé à toute heure, même au petit-déjeuner ; mélange fèves et pois."
  },
  {
   "name": "Cooking with Alia, « 132 – Bessara Recipe – Moroccan Fava Bean Dip »",
   "url": "https://www.cookingwithalia.com/bessara-moroccan-fava-bean-dip/",
   "used_for": "Cuisinière marocaine. 14 oz (397 g) de fèves cassées trempées une nuit, 7 tasses d'eau froide, 3 gousses d'ail ; environ 50 min ; mousse retirée ; couvercle laissé entrouvert pour éviter le débordement ; mixage avec l'ail, puis huile et épices ; texture réglée à l'eau chaude ; service avec huile d'olive, cumin, paprika, citron pour certains."
  },
  {
   "name": "Cooking with Alia, « Moroccan Fava Beans Soup (Bissara) / شوربة الفول المغربية (البصارة) » (n° 858)",
   "url": "https://www.cookingwithalia.com/858-moroccan-fava-beans-soup-bissara/",
   "used_for": "Sans trempage : 125 g de pois et 125 g de fèves, 1 l d'eau, 3 gousses d'ail ; écume à l'ébullition ; 45 min ; surveiller l'eau ; mixage ; cumin, piment et huile ajoutés après, puis 5 min sur feu moyen ; servie chaude avec pain et huile d'olive."
  },
  {
   "name": "MWN Lifestyle, Majda Bouzaroita, « 3 Alternatives to Harira for Ftour », 14 mars 2025",
   "url": "https://mwnlifestyle.com/2025/03/14/3-alternatives-to-harira-for-ftour/",
   "used_for": "Bissara proposée au ftour du Ramadan à la place de la harira, servie avec du khobz (source faible : recette générique, non reprise)."
  },
  {
   "name": "ANSES, « Éviter les toxi-infections alimentaires en confinement : les bonnes pratiques », 8 avril 2020",
   "url": "https://www.anses.fr/fr/actualite/eviter-toxi-infections-alimentaires-confinement-bonnes-pratiques",
   "used_for": "Source officielle (France) : plats maison pas plus de 2 h à température ambiante, consommés dans les 3 jours ; grandes quantités réparties en petites portions pour refroidir vite ; restes en boîte fermée ; réchauffer couvert jusqu'à ce que la vapeur s'échappe."
  },
  {
   "name": "USDA, Food Safety and Inspection Service, « Leftovers and Food Safety » (copie archivée du 3 novembre 2026)",
   "url": "https://web.archive.org/web/20261103202835/https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/leftovers-and-food-safety",
   "used_for": "Source officielle (États-Unis) : restes au réfrigérateur dans les 2 h ; 3 à 4 jours au réfrigérateur ; grande marmite de soupe répartie dans de petits récipients pour refroidir vite ; soupes réchauffées jusqu'à pleine ébullition (restes à 165 °F, soit 74 °C)."
  },
  {
   "name": "MedlinePlus (Bibliothèque nationale de médecine des États-Unis, NIH), encyclopédie médicale, « Glucose-6-phosphate dehydrogenase deficiency », révisée le 29 janvier 2026",
   "url": "https://medlineplus.gov/ency/article/000528.htm",
   "used_for": "Contre-vérification : Site officiel du gouvernement des États-Unis. La destruction des globules rouges peut être déclenchée par des infections, certains aliments (comme les fèves) et certains médicaments ; les personnes qui ont un déficit en G6PD doivent éviter strictement ce qui déclenche une crise ; dans de rares cas, une crise grave peut entraîner une insuffisance rénale ou la mort (page lue le 7 novembre 2026)."
  },
  {
   "name": "MedlinePlus Genetics (Bibliothèque nationale de médecine des États-Unis), « Glucose-6-phosphate dehydrogenase deficiency », mise à jour du 12 avril 2023",
   "url": "https://medlineplus.gov/genetics/condition/glucose-6-phosphate-dehydrogenase-deficiency/",
   "used_for": "Contre-vérification : Chez les personnes qui ont un déficit en G6PD, une anémie hémolytique peut survenir après avoir mangé des fèves ou respiré le pollen de la plante ; cette réaction s'appelle le favisme (page lue le 7 novembre 2026)."
  },
  {
   "name": "OMS, groupe de travail, « Glucose-6-phosphate dehydrogenase deficiency », Bulletin de l'Organisation mondiale de la santé, 1989, 67(6), p. 601-611 (résumé sur PubMed Central)",
   "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2491315/",
   "used_for": "Contre-vérification : Le déficit en G6PD peut provoquer des crises hémolytiques qui mettent la vie en danger, chez l'enfant et plus tard, par interaction avec certains médicaments et avec les fèves de l'alimentation ; ses complications peuvent en grande partie être évitées par l'éducation et l'information."
  },
  {
   "name": "Orphanet (INSERM), fiche ORPHA:362 « Déficit en glucose-6-phosphate déshydrogénase », copie archivée du 22 mai 2025",
   "url": "https://web.archive.org/web/20250522024536/https://www.orpha.net/fr/disease/detail/362",
   "used_for": "Contre-vérification : « Favisme » et « Déficit en G6PD » figurent comme synonymes de la fiche, maladie classée non rare en Europe (la page ne parle pas des fèves ; la page en direct est protégée par une vérification anti-robots, non contournée)."
  }
 ],
 "discrepancies": [
  "Trempage. Sans trempage : Choumicha (3 recettes), Lalla Moulati, Chhiwat, Morocco World News, Bladi.net (autocuiseur), Cooking with Alia n° 858 ; Hespress et Sky News Arabia décrivent une cuisson courte sans en parler. Une nuit de trempage : Taste of Maroc, My Moroccan Food, Cooking with Alia n° 132. Retenu : sans trempage, comme la majorité ; le trempage reste proposé en astuce.",
  "Fèves par personne : 50 g (Choumicha n° 957), 57 g (Taste of Maroc), 58 g (Choumicha n° 343), 62,5 g (Choumicha n° 995), 100 g (My Moroccan Food, Chhiwat), 125 g (Hespress : 1 kg pour 8). Médiane : 62,5 g. Retenu : 350 g pour 6, soit 58 g, la quantité de Choumicha n° 343, presque celle de Taste of Maroc (340 g pour 6).",
  "Eau : de 200 à 600 ml pour 100 g de fèves ; médiane 417 ml (450 ml pour les recettes sans trempage). Retenu : 1,75 l pour 350 g (500 ml pour 100 g), le rapport des deux bissaras de Choumicha, dont la recette suit la méthode et la dose de fèves (n° 343 : 1,75 l pour 350 g ; n° 957 : 2 l pour 400 g), puis eau chaude pour régler la texture. Morocco World News (« 6 large cups ») n'est pas compté : taille de tasse inconnue.",
  "Ail : de 0,6 à 2,4 gousses pour 100 g ; médiane 1 gousse, soit 3,5 pour 350 g, arrondi à 4. Choumicha le met en chemise (elle passe la purée au tamis), My Moroccan Food le cuit en chemise puis l'épluche ; Bladi.net l'épluche et Cooking with Alia le mixe avec les fèves. Retenu : épluché, puisque la recette se mixe.",
  "Huile d'olive dans la purée : de 4 à 80 ml pour 100 g ; médiane 25 ml, soit 87,5 ml pour 350 g, arrondi à 6 c. à s. (90 ml). Choumicha n° 343 : 100 ml pour 350 g ; Taste of Maroc : 79 ml pour 340 g.",
  "Épices et sel (médiane des quantités pour 100 g, recalculée pour 350 g) : cumin 0,4 c. à c., soit 1,4, arrondi à 1,5 c. à c. ; paprika 0,25, soit 0,88, arrondi à 1 c. à c. ; sel 0,25, soit 0,88, arrondi à 1 c. à c. (Choumicha n° 343 met 1 c. à thé pour 350 g). Morocco World News met 2 c. à s. de cumin pour 500 g, la valeur la plus haute.",
  "Moment des épices et de l'huile : après le mixage chez Choumicha, Hespress et Cooking with Alia, qui sont aussi les sources qui écument ; dès le début chez Taste of Maroc, Morocco World News, Lalla Moulati (2020), Chhiwat et Sky News Arabia ; à mi-cuisson chez My Moroccan Food. Pour les épices, la majorité les met avant de mixer ; retenu quand même la méthode de Choumicha, suivie aussi par Hespress (2011) et Cooking with Alia (n° 858) ; chez Choumicha (n° 995), la purée absorbe toute l'huile sur feu doux et prend une consistance crémeuse.",
  "Durée de cuisson : 30 min (Hespress, Sky News Arabia) à 2 h (Choumicha n° 343) ; environ 1 h chez Taste of Maroc et Morocco World News ; 1 h 15 de cuisson au total chez Choumicha n° 957 et Taste of Maroc. Retenu : 1 h à feu doux après l'écume, puis vérifier que les fèves s'écrasent. My Moroccan Food cuit 40 min avec 2 c. à c. de bicarbonate : non retenu, seule source à en mettre.",
  "Mixeur ou tamis : Choumicha passe la purée à la passoire fine ou au tamis ; Taste of Maroc, My Moroccan Food, Cooking with Alia, Lalla Moulati et Chhiwat mixent. Retenu : mixeur plongeant, avec le tamis ou le moulin en option.",
  "Garniture : paprika (Choumicha, My Moroccan Food, Cooking with Alia, Le360, Bladi.net, Morocco World News) ou piment fort (Taste of Maroc : cayenne ou harissa ; Lalla Moulati 2020 ; Sky News Arabia ; Chhiwat met de la « soudania », un piment en poudre dont la force n'a pas été confirmée). Choumicha n° 343 écrit « piment rouge » dans la liste et « paprika » dans la préparation. Retenu : paprika saupoudré, piment fort sur la table.",
  "Citron : jus de citron sur chaque assiette chez Bladi.net (1 citron dans la liste) ; facultatif chez Taste of Maroc (dans la purée), Cooking with Alia et Hespress ; absent chez Choumicha. Retenu : en quartiers, sur la table.",
  "Contre-vérifiée le 7 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 9 correction(s) appliquée(s).",
  "Relue le 8 novembre 2026 pendant la traduction : 1 précision(s) apportée(s) après vérification des sources."
 ],
 "unverified": [
  "Une source officielle française ou marocaine sur le favisme : la page du NHS sur le déficit en G6PD n'existe plus (erreur 404, aucune entrée G6PD dans son index de A à Z), la recherche du site de la Haute Autorité de santé a été refusée (erreur 403), celle du site du ministère de la Santé marocain renvoie une erreur, et la page d'Orphanet en direct est protégée par une vérification anti-robots. La mise en garde ajoutée à l'ingrédient « fèves » s'appuie sur MedlinePlus (Bibliothèque nationale de médecine des États-Unis) et sur un groupe de travail de l'OMS (1989).",
  "« Soudania » (Chhiwat, Lalla Moulati 2014) : c'est une poudre de piment, mais je n'ai pas pu confirmer si elle est forte ou douce. La recette dit « piment fort en poudre », d'après Taste of Maroc, Lalla Moulati (2020) et Sky News Arabia.",
  "Durée de l'écume (10 à 15 min) : seulement chez Choumicha ; laissée en astuce, sans minuteur.",
  "Fèves « beldi » (du pays) conseillées : seulement Hespress (2011).",
  "Astuce de Cooking with Alia (n° 132) pour des fèves entières : 5 à 10 min dans l'eau bouillante pour retirer la peau, puis une nuit de trempage. Une seule source.",
  "Affirmations de santé des articles (Hespress, Sky News Arabia, Morocco World News, Bladi.net) : écartées, faute de source officielle.",
  "Origine égyptienne très ancienne de la bissara (Allodocteurs) : vue seulement dans un extrait de moteur de recherche, page non lue, écartée.",
  "Bissara au ftour du Ramadan : seulement Bladi.net (qui cite le journal Le Progrès) et MWN Lifestyle, deux sources faibles ; gardé avec « parfois » dans l'occasion.",
  "Femmes du Maroc : aucune recette de bissara trouvée sur le site (recherche interne)."
 ],
 "cuisine": "Marocaine",
 "notes": [
  {
   "title": "Fèves et favisme (déficit en G6PD)",
   "text": "En cas de déficit en G6PD, les fèves peuvent provoquer une destruction des globules rouges (anémie hémolytique, appelée favisme), parfois grave : ne sers pas cette recette aux personnes concernées (MedlinePlus, Bibliothèque nationale de médecine des États-Unis ; OMS)."
  }
 ],
 "rayon": "Soupes",
 "pairs": [
  "khobz"
 ],
 "img_alt": "Bols de bissara arrosés d'huile d'olive et de cumin, avec olives et khobz",
 "img": "img/bissara.jpg",
 "photo": {
  "author": "Ruby Josephine Smith",
  "license": "CC BY-SA 4.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Bissara_Moroccan_split_pea_and_fava_bean_soup.jpg",
  "modified": "réduite"
 }
});
