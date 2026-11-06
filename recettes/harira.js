/* Recette : Harira marocaine traditionnelle. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "harira",
 "title": "Harira marocaine traditionnelle",
 "darija": "Hrira",
 "arabic": "الحريرة",
 "tagline": "La soupe du ftour, soyeuse comme son nom (harir, la soie) : tomates, lentilles, pois chiches et herbes fraîches, liée à la tadouira.",
 "category": "Soupe",
 "occasion": "Ftour du Ramadan, servie chaque jour à la rupture du jeûne ; toute l'année en entrée ou en dîner léger, et lors des rassemblements de famille",
 "region": "Tout le Maroc ; version douce sans carvi ni piment de la Jamaïque, comme la harira fassia (Fès)",
 "servings": 6,
 "servings_label": "personnes",
 "time": {
  "prep": 45,
  "cook": 90,
  "rest": 720
 },
 "difficulty": "Moyen",
 "equipment": [
  "Grande marmite à fond épais (6 l environ) ou cocotte-minute",
  "Casserole pour pocher les tomates",
  "Mixeur ou moulin à légumes",
  "Râpe",
  "Fouet et bol",
  "Passoire fine",
  "Torchon propre (pour peler les pois chiches)",
  "Louche"
 ],
 "ingredients": [
  {
   "group": "Bouillon",
   "items": [
    {
     "id": "viande",
     "q": 250,
     "u": "g",
     "name": "d'agneau ou de bœuf",
     "note": "halal, coupé en dés d'environ 1 cm"
    },
    {
     "id": "huile",
     "q": 2,
     "u": "c. à s.",
     "name": "d'huile d'olive ou de tournesol"
    },
    {
     "id": "smen",
     "q": 2,
     "u": "c. à c.",
     "name": "de smen (beurre rance marocain)",
     "note": "facultatif, mais il apporte un goût particulier"
    },
    {
     "id": "oignon",
     "q": 1,
     "u": "",
     "name": "gros oignon",
     "pl": "gros oignons"
    },
    {
     "id": "celeri",
     "q": 1,
     "u": "",
     "name": "branche de céleri avec ses feuilles",
     "note": "au Maroc, on prend un céleri à feuilles fines, proche du céleri chinois : une petite botte",
     "pl": "branches de céleri avec leurs feuilles"
    },
    {
     "id": "persil",
     "q": 1,
     "u": "botte",
     "name": "de persil plat",
     "note": "petite botte"
    },
    {
     "id": "coriandre",
     "q": 1,
     "u": "botte",
     "name": "de coriandre fraîche",
     "note": "petite botte"
    },
    {
     "id": "pois-chiches",
     "q": 100,
     "u": "g",
     "name": "de pois chiches secs",
     "note": "à faire tremper la veille"
    },
    {
     "id": "lentilles",
     "q": 100,
     "u": "g",
     "name": "de lentilles vertes ou brunes"
    },
    {
     "id": "tomates",
     "q": 600,
     "u": "g",
     "name": "de tomates bien mûres"
    },
    {
     "id": "concentre",
     "q": 1,
     "u": "c. à s.",
     "name": "de concentré de tomate",
     "note": "bombée"
    },
    {
     "id": "gingembre",
     "q": 1,
     "u": "c. à c.",
     "name": "de gingembre en poudre",
     "note": "pas de gingembre frais"
    },
    {
     "id": "curcuma",
     "q": 0.5,
     "u": "c. à c.",
     "name": "de curcuma"
    },
    {
     "id": "poivre",
     "q": 0.5,
     "u": "c. à c.",
     "name": "de poivre noir moulu"
    },
    {
     "id": "cannelle",
     "q": 1,
     "u": "pincée",
     "name": "de cannelle en poudre",
     "note": "facultatif"
    },
    {
     "id": "sel",
     "q": 2,
     "u": "c. à c.",
     "name": "de sel",
     "note": "à rectifier en fin de cuisson"
    },
    {
     "id": "eau",
     "q": 2,
     "u": "l",
     "name": "d'eau"
    }
   ]
  },
  {
   "group": "Tadouira (liaison)",
   "items": [
    {
     "id": "farine",
     "q": 80,
     "u": "g",
     "name": "de farine blanche",
     "note": "pas de farine complète"
    },
    {
     "id": "eau-tadouira",
     "q": 200,
     "u": "ml",
     "name": "d'eau"
    },
    {
     "id": "concentre-tadouira",
     "q": 1,
     "u": "c. à s.",
     "name": "de concentré de tomate",
     "note": "bombée"
    }
   ]
  },
  {
   "group": "Finition et service",
   "items": [
    {
     "id": "vermicelles",
     "q": 35,
     "u": "g",
     "name": "de vermicelles fins",
     "note": "ou de spaghettis fins cassés"
    },
    {
     "id": "coriandre-fin",
     "q": 2,
     "u": "c. à s.",
     "name": "de coriandre hachée",
     "note": "à prélever sur la botte"
    },
    {
     "id": "citron",
     "q": 1,
     "u": "",
     "name": "citron, en quartiers",
     "pl": "citrons, en quartiers"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "La veille : fais tremper les pois chiches",
   "text": "Rince les pois chiches ({{pois-chiches}}) et couvre-les largement d'eau. Laisse-les tremper toute la nuit.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Pèle les pois chiches, trie les lentilles",
   "text": "Égoutte les pois chiches, puis frotte-les vigoureusement dans un torchon pour détacher leur peau et retire les peaux. Trie les lentilles ({{lentilles}}) pour enlever les petits cailloux, puis rince-les.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Prépare la tadouira à l'avance",
   "text": "Fouette la farine ({{farine}}) avec l'eau ({{eau-tadouira}}) jusqu'à obtenir un mélange parfaitement lisse. Passe-le dans une passoire fine, couvre et laisse reposer jusqu'au moment de lier la soupe, quelques heures si tu peux.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Réduis les tomates en purée",
   "text": "Poche les tomates ({{tomates}}) 5 minutes dans une casserole d'eau frémissante, puis pèle-les. Mixe-les en purée lisse, ou passe-les au moulin à légumes pour retirer aussi les pépins.",
   "timer": {
    "min": 5,
    "label": "Tomates pochées",
    "done": "Sors les tomates : la peau doit se détacher facilement."
   }
  },
  {
   "phase": "Préparation",
   "title": "Râpe, hache et coupe",
   "text": "Râpe {{oignon:full}}. Hache très finement {{celeri:full}}, le persil ({{persil}}) et la coriandre ({{coriandre}}) en retirant les grosses tiges, et mets de côté un peu de coriandre hachée ({{coriandre-fin}}) pour la fin. Coupe la viande ({{viande}}) en dés d'environ 1 cm.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Saisis la viande",
   "text": "Dans la grande marmite, chauffe l'huile ({{huile}}) à feu moyen. Fais revenir la viande en remuant, jusqu'à ce qu'elle change de couleur.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Fais revenir aromates et épices",
   "text": "Ajoute l'oignon râpé, les herbes hachées, les pois chiches pelés, les lentilles, la purée de tomates et le concentré ({{concentre}}). Ajoute le gingembre ({{gingembre}}), le curcuma ({{curcuma}}), le poivre ({{poivre}}), la cannelle ({{cannelle}}), le sel ({{sel}}) et le smen ({{smen}}). Laisse revenir 10 minutes à feu doux, en remuant de temps en temps.",
   "timer": {
    "min": 10,
    "label": "Aromates à feu doux",
    "done": "Verse l'eau et porte à ébullition."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Mouille et laisse cuire",
   "text": "Verse l'eau ({{eau}}) et porte à ébullition à feu vif. Couvre et laisse cuire 1 heure à feu moyen, en remuant de temps en temps, jusqu'à ce que les pois chiches soient tendres. En cocotte-minute, compte 20 à 30 minutes après la mise sous pression.",
   "timer": {
    "min": 60,
    "label": "Cuisson du bouillon",
    "done": "Goûte un pois chiche : s'il est tendre, passe à la tadouira. Sinon, prolonge un peu la cuisson."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Lie avec la tadouira",
   "text": "Fouette le concentré de tomate ({{concentre-tadouira}}) dans la tadouira. Monte le feu pour que la soupe bouille, puis verse la tadouira petit à petit en remuant sans arrêt. Arrête-toi dès que la harira est veloutée et soyeuse, sans être épaisse : tu n'auras peut-être pas besoin de tout. Si elle est trop épaisse, ajoute un peu d'eau bouillante.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Ajoute les vermicelles",
   "text": "Dès que la soupe bout de nouveau, ajoute les vermicelles ({{vermicelles}}) en remuant. Laisse mijoter à feu moyen en remuant régulièrement, et retire l'écume à la cuillère. C'est prêt quand les vermicelles sont tendres et que l'écume de la tadouira a disparu.",
   "timer": {
    "min": 5,
    "label": "Vermicelles",
    "done": "Vermicelles tendres et plus d'écume ? Sinon, laisse encore 2 ou 3 minutes."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Goûte et parfume",
   "text": "Goûte et rectifie le sel et le poivre. Ajoute la coriandre mise de côté et laisse frémir 5 minutes, puis coupe le feu.",
   "timer": {
    "min": 5,
    "label": "Dernier frémissement",
    "done": "Coupe le feu : ta harira est prête."
   }
  },
  {
   "phase": "Service",
   "title": "Sers bien chaud",
   "text": "Sers la harira bien chaude dans des bols, avec {{citron:full}}, à presser au dernier moment. Pose à côté des dattes, des chebakia et des œufs durs à tremper dans un peu de sel et de cumin.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Les restes",
   "text": "En refroidissant, une peau se forme : remue-la simplement dans la soupe. Réchauffe à feu doux ou moyen en remuant souvent pour que les lentilles n'attachent pas, et détends avec un peu d'eau bouillante si besoin. Elle se garde 3 jours au réfrigérateur, dans une boîte hermétique.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Pèle les pois chiches après le trempage, en les frottant vigoureusement dans un torchon : toutes les recettes marocaines consultées les veulent sans peau.",
   "source": "Taste of Maroc ; Gâteau et cuisine Rachida ; Royal Mansour (chef Karim Ben Baba) ; Choumicha (Gulf News) ; Morocco World News"
  },
  {
   "text": "Gingembre en poudre seulement : le gingembre frais n'est pas traditionnel dans les plats mijotés marocains.",
   "source": "Taste of Maroc"
  },
  {
   "text": "Pas de ras el hanout : la harira traditionnelle n'en contient pas, même dans la version de Choumicha.",
   "source": "Gâteau et cuisine Rachida"
  },
  {
   "text": "Choisis des tomates bien mûres : elles donnent la belle couleur et un goût plus intense.",
   "source": "Gâteau et cuisine Rachida ; Taste of Maroc"
  },
  {
   "text": "Au Maroc, la harira se fait avec un céleri à feuilles fines, proche du céleri chinois ; Choumicha n'en garde que les feuilles.",
   "source": "Taste of Maroc ; Choumicha (Gulf News)"
  },
  {
   "text": "Prépare la tadouira à l'avance : bien fouettée, passée dans une passoire fine et reposée quelques heures, elle ne fait pas de grumeaux.",
   "source": "Gâteau et cuisine Rachida ; Taste of Maroc"
  },
  {
   "text": "Verse la tadouira petit à petit dans une soupe qui bout franchement, en remuant sans arrêt.",
   "source": "Gâteau et cuisine Rachida ; Taste of Maroc"
  },
  {
   "text": "Tout est dans le dosage de la tadouira : arrête-toi quand la harira est soyeuse comme une crème. Elle doit être veloutée, pas épaisse.",
   "source": "Gâteau et cuisine Rachida ; Taste of Maroc ; Bladi.net"
  },
  {
   "text": "Après la liaison, laisse mijoter jusqu'à ce que l'écume formée par la tadouira ait disparu.",
   "source": "Gâteau et cuisine Rachida ; Taste of Maroc"
  },
  {
   "text": "Un peu de coriandre fraîche en fin de cuisson réveille le parfum ; Choumicha y ajoute toujours aussi un peu de céleri et de smen.",
   "source": "Choumicha (La Libre Belgique, 2014) ; Gâteau et cuisine Rachida"
  },
  {
   "text": "Le smen (beurre rance) est facultatif, mais il donne une saveur particulière.",
   "source": "Gâteau et cuisine Rachida ; Taste of Maroc"
  },
  {
   "text": "La harira est encore meilleure le lendemain, une fois que les saveurs se sont mariées.",
   "source": "Choumicha (Gulf News)"
  },
  {
   "text": "Si tu prévois des restes, prends des spaghettis fins cassés : le vermicelle gonfle dans la soupe.",
   "source": "Gâteau et cuisine Rachida"
  },
  {
   "text": "Pour congeler, fais-le avant la tadouira et, si possible, avant les vermicelles.",
   "source": "Taste of Maroc ; Gâteau et cuisine Rachida"
  }
 ],
 "mistakes": [
  "Verser la tadouira d'un coup ou sans remuer : elle fait des grumeaux.",
  "Lier une soupe qui ne bout pas assez fort : elle doit reprendre vite l'ébullition.",
  "Mettre toute la tadouira sans regarder la texture : la harira doit rester veloutée, pas épaisse.",
  "Couper le feu avant que l'écume de la tadouira ait disparu.",
  "Garder la peau des pois chiches.",
  "Ajouter du ras el hanout ou du gingembre frais.",
  "Prendre de la farine complète pour la tadouira.",
  "Réchauffer à feu vif sans remuer : les lentilles attachent et brûlent.",
  "Congeler la harira une fois liée à la tadouira."
 ],
 "serving": "Au ftour du Ramadan, la harira se sert bien chaude dès la rupture du jeûne, chaque jour du mois. Chacun presse un quartier de citron dans son bol. Autour : des dattes (ou des figues sèches), des chebakia, des œufs durs à tremper dans du sel et du cumin, et souvent du msemen, des briouates ou du pain maison. Hors Ramadan, elle se sert en entrée, en dîner léger ou lors des rassemblements de famille.",
 "variants": [
  "Riz au lieu des vermicelles : ajoute-le dans le bouillon environ 30 minutes avant la liaison (15 minutes en cocotte-minute) — Taste of Maroc.",
  "Harira fassia (Fès) : la moins épicée, sans carvi (karwiya) ni piment de la Jamaïque ; c'est le profil de cette recette — Gâteau et cuisine Rachida.",
  "Harira oujdia (Oujda) : préparée avec un levain pétri la veille et beaucoup de persil, de coriandre et de céleri (Aujourd'hui le Maroc, repris par Yabiladi) ; selon Rachida, très parfumée au carvi et au piment de la Jamaïque, et certaines familles ajoutent des fèves sèches aux pois chiches — Gâteau et cuisine Rachida.",
  "Harira bidaouia (Casablanca) : on y ajoute le plus souvent un œuf battu après la tadouira (Gâteau et cuisine Rachida) ; certaines familles lient même la harira aux œufs à la place de la tadouira (Taste of Maroc).",
  "Tadouira à l'ancienne, fermentée : au levain chez les grands-mères, ce qui rendait la harira plus digeste et légèrement acidulée (Gâteau et cuisine Rachida), ou avec de la levure et 1 à 2 jours de fermentation (Taste of Maroc).",
  "Liaison à la fécule de maïs délayée dans de l'eau : version du Royal Mansour, et solution sans gluten selon Taste of Maroc.",
  "Un peu de safran dans le bouillon : Royal Mansour, Morocco World News (2021), Le Courrier de l'Atlas.",
  "Quelques os à soupe ajoutés au bouillon (facultatif) — Taste of Maroc.",
  "Version de Choumicha publiée par Gulf News : épices « harira » à parts égales (curcuma, cumin, gingembre, cannelle, poivre noir) avec une pointe de cayenne, et le smen ajouté tout à la fin.",
  "Sans viande : une version végétarienne existe, la viande apportant surtout du goût — Taste of Maroc ; Morocco World News (2021)."
 ],
 "sources": [
  {
   "name": "Taste of Maroc — Christine Benlafquih, « Harira Recipe - Moroccan Tomato Soup with Chickpeas and Lentils » (publiée le 10 mai 2017, mise à jour le 27 janvier 2022)",
   "url": "https://tasteofmaroc.com/moroccan-harira-soup-recipe/",
   "used_for": "Site de cuisine marocaine. Recette de référence pour 6 personnes : ordre des étapes, pois chiches pelés, oignon râpé, tomates passées, gingembre en poudre, céleri à feuilles, tadouira (préparée à l'avance, versée en remuant, texture soyeuse, écume), réchauffage, congélation, service (dattes, chebakia, citron), variantes (riz, œufs, tadouira à la levure, fécule, os, sans viande)."
  },
  {
   "name": "Gâteau et cuisine Rachida — « Recette harira marocaine (soupe ramadan) » (28 février 2025)",
   "url": "https://gateauetcuisinerachida.com/recette-harira-soupe-marocaine/",
   "used_for": "Blog d'une auteure qui se dit marocaine. Quantités métriques, tadouira (repos, passoire fine, concentré, feu vif, dosage, écume), ordre tadouira puis vermicelles, coriandre en fin de cuisson, pas de ras el hanout, versions fassia, oujdia et bidaouia, levain des grands-mères, farine complète déconseillée, conservation, service."
  },
  {
   "name": "Choumicha Chafay (cheffe marocaine) — « Make Moroccan Harira Soup at home from scratch with this recipe », Gulf News (mis à jour le 4 février 2022)",
   "url": "https://gulfnews.com/food/guide-cooking/make-moroccan-harira-soup-at-home-from-scratch-with-this-recipe-1.1643034208068",
   "used_for": "Feuilles de céleri seulement, pois chiches pelés, liaison tomate-farine-eau, coriandre, céleri et smen en fin de cuisson, meilleure le lendemain, service avec chebakia et pain ; épices de sa version."
  },
  {
   "name": "La Libre Belgique — « Maroc : la soupe du ramadan », Julie Chaudier et Christophe Lamfalussy (1er août 2014), propos de Choumicha",
   "url": "https://www.lalibre.be/international/2014/08/01/maroc-la-soupe-du-ramadan-IM4YTK3TMJHWVDCQKYV6TNSKDU/",
   "used_for": "Citations de Choumicha : base herbes, légumineuses, viande et tomate ; harira à l'agneau ; coriandre, céleri et smen ajoutés en fin de cuisson ; servie chaque jour au ftour, en entrée et lors des rassemblements de famille."
  },
  {
   "name": "Royal Mansour Marrakech — « The Moroccan harira recipe by Chef Karim Benbaba », La Grande Table Marocaine (28 avril 2020)",
   "url": "https://www.royalmansour.com/en/blog/the-moroccan-harira-recipe-by-chef-karim-benbaba/",
   "used_for": "Recette de chef pour 6 (borne haute des quantités) : viande saisie puis aromates, 1 h à feu doux, liaison puis vermicelles 3 min, viande en dés de 1 cm, service avec dattes et chebakia ; variantes fécule et safran."
  },
  {
   "name": "Al3omk (العمق) — « 10 أطعمة رئيسية على مائدة الإفطار عند المغاربة », نجلاء بن حمو (19 juin 2016)",
   "url": "https://al3omk.com/110120.html",
   "used_for": "Site d'information marocain (direction de publication à Rabat). Table du ftour au Maroc : œufs durs avec un peu de sel et de cumin, dattes, chebakia, msemen et baghrir, briouates."
  },
  {
   "name": "Morocco World News — « Moroccan Cuisine: Recipe for Harira Soup », Nihale Zahhaf (19 février 2021)",
   "url": "https://www.moroccoworldnews.com/2021/02/61591/moroccan-cuisine-recipe-for-harira-soup/",
   "used_for": "Comparaison : pois chiches pelés, farine ajoutée avant les vermicelles, safran, version sans viande."
  },
  {
   "name": "Morocco World News — « How to Cook Like a Moroccan Mum: Harira in Lockdown », Madeleine Handaji (26 avril 2020)",
   "url": "https://www.moroccoworldnews.com/2020/04/300559/how-to-cook-like-a-moroccan-mum-harira-in-lockdown/",
   "used_for": "Comparaison : cocotte-minute en deux temps, lentilles en second, pois chiches pelés, liaison farine-eau versée en remuant sans arrêt."
  },
  {
   "name": "Bladi.net — « Tédouira »",
   "url": "https://www.bladi.net/recettes/tedouira.html",
   "used_for": "Portail marocain (Marocains du monde). Texture : « La harira doit être veloutée et non épaisse »."
  },
  {
   "name": "Yabiladi — article sur le livre de Fatéma Hal « Ramadan, la cuisine du partage » (Bruno Caussé, repris du Monde)",
   "url": "https://www.yabiladi.com/article-culture-613.html",
   "used_for": "Temps de Fatéma Hal (30 min de préparation, 2 h de cuisson), recette tenue de sa mère Mansouria, harira servie au coucher du soleil."
  },
  {
   "name": "Amour de cuisine — « Authentic Moroccan Harira Soup » (17 janvier 2026, mise à jour le 18 mai 2026)",
   "url": "https://www.amourdecuisine.fr/en/article-authentic-moroccan-harira-soup.html",
   "used_for": "Comparaison des quantités pour 6 et de l'ordre des étapes (origine de l'auteure non indiquée)."
  },
  {
   "name": "Le Courrier de l'Atlas — « Recettes du ramadan : harira marocaine » (24 mai 2018)",
   "url": "https://www.lecourrierdelatlas.com/recettes-du-ramadan-harira-marocaine-19863/",
   "used_for": "Comparaison des quantités (10 personnes), liaison avant les vermicelles, safran."
  },
  {
   "name": "Wikipédia (fr) — Harira",
   "url": "https://fr.wikipedia.org/wiki/Harira",
   "used_for": "Nom « Hrira » (ḥrīra) ; service : dattes, œufs durs, chebakia, citron."
  },
  {
   "name": "Wikipedia (en) — Harira",
   "url": "https://en.wikipedia.org/wiki/Harira",
   "used_for": "Nom arabe « الحريرة »."
  },
  {
   "name": "Sayidaty, Salma Dardaf, « الحريرة المغربية حاضرة في موائد رمضان », 24 juillet 2013 (liste d'une cuisinière marocaine)",
   "url": "https://www.sayidaty.net/node/79039",
   "used_for": "Contre-vérification : Agneau en petits morceaux, tomates mixées, pois chiches trempés, lentilles, coriandre et céleri, oignon, vermicelles fins, concentré de tomate, smen, poivre noir, gingembre, huile, eau et farine pour lier ; ni ras el hanout ni gingembre frais. Liste seule, sans étapes."
  },
  {
   "name": "Yabiladi, reprise d'Aujourd'hui le Maroc (Ali Kharroubi), « Traditions ramadanesques : Oujda : une fête de tous les jours »",
   "url": "https://www.yabiladi.com/article-ramadan-8.html",
   "used_for": "Contre-vérification : À Oujda, la harira commence par un levain pétri la veille (variante de tadouira fermentée) et contient beaucoup de persil, de coriandre et de céleri ; servie juste après l'appel du Maghreb avec des dattes. Ne cite ni carvi ni piment de la Jamaïque."
  },
  {
   "name": "Yabiladi (en), Jazia El Hammari, « Is Harira truly Moroccan? », 27 mai 2017",
   "url": "https://en.yabiladi.com/articles/details/188829",
   "used_for": "Contre-vérification : Rôle central de la tadouira (« all of harïra is in the tadwira », Abdelhaï Diouri), citron pressé au service, recettes différentes selon familles et régions."
  },
  {
   "name": "La langue française, dictionnaire, « cubèbe »",
   "url": "https://www.lalanguefrancaise.com/dictionnaire/definition/cubebe",
   "used_for": "Contre-vérification : Le cubèbe vient « de l'arabe كبابة, kabāba » : kababa désigne le poivre cubèbe."
  },
  {
   "name": "Zette Guinaudeau-Franc, Traditional Moroccan Cooking: Recipes from Fez, « Spices in Ras el Hanout » (ckbk)",
   "url": "https://app.ckbk.com/section/trad59138c06s001ss001/spices-in-ras-el-hanout",
   "used_for": "Contre-vérification : « Four spices: nouioura, pimento from the West Indies » : à Fès, le piment de la Jamaïque se dit nouioura."
  }
 ],
 "discrepancies": [
  "Méthode des quantités : chaque source ramenée à 6 personnes, puis médiane arrondie. Les chiffres aberrants de la recette de Choumicha dans Gulf News (400 ml d'eau, 3 500 g de purée de tomate, oignons listés mais jamais utilisés) sont écartés.",
  "Viande pour 6 : de 150 g (Amour de cuisine) à 900 g (Royal Mansour, version de palace) ; médiane 207 g. Retenu 250 g : les 227 g de Taste of Maroc arrondis, et le poids de base de Rachida et de Morocco World News.",
  "Légumineuses : rapport pois chiches / lentilles d'environ 5 pour 1 (Rachida) à 1 pour 2 (Taste of Maroc, en poignées) ; rapport médian 1 pour 1 et total médian d'environ 180 g pour 6. Retenu 100 g de chaque.",
  "Tomates pour 6 : de 450 g (Rachida ramené à 6, Amour de cuisine) à 907 g (Taste of Maroc) ; médiane 600 g, retenue.",
  "Eau totale pour 6 : d'environ 1 l (Le Courrier de l'Atlas) à 4,2 l (Royal Mansour) ; médiane 2 l. Retenu 2 l pour le bouillon et 200 ml pour la tadouira.",
  "Tadouira : 25 g de farine (Amour de cuisine), 75 g pour 6 chez Rachida, 1 tasse chez Taste of Maroc ; Royal Mansour lie à la fécule de maïs, Choumicha (Gulf News) avec un mélange tomate-farine-eau, Morocco World News 2021 ajoute la farine directement. Retenu 80 g de farine dans 200 ml d'eau (rapport de Rachida), à verser selon la texture.",
  "Ordre liaison / vermicelles : tadouira d'abord chez Rachida, Royal Mansour, Choumicha, Morocco World News 2021 et Le Courrier de l'Atlas ; vermicelles d'abord chez Taste of Maroc, Morocco World News 2020 et Amour de cuisine. Retenu : tadouira puis vermicelles (majorité).",
  "Lentilles et tomates : revenues 10 min avec les aromates chez Rachida ; ajoutées avec l'eau chez Royal Mansour ; lentilles après une première cuisson des pois chiches chez Taste of Maroc et Morocco World News 2020. Retenu : méthode de Rachida.",
  "Smen : au début avec les épices (Taste of Maroc, Rachida) ou tout à la fin (Choumicha) ; de 0,5 c. à c. (Amour de cuisine) à environ 4 c. à c. (Choumicha ramené à 6). Retenu 2 c. à c. au début (médiane 1,9) ; le geste de Choumicha est cité dans les secrets.",
  "Épices : gingembre, poivre et curcuma partout ; cannelle facultative (Taste of Maroc, Rachida) ; Choumicha (Gulf News) ajoute cumin et cayenne ; safran chez Royal Mansour, Morocco World News 2021 et Le Courrier de l'Atlas. Gingembre : 1 c. à s. pour 6 chez Taste of Maroc contre 0,5 à 0,9 c. à c. ailleurs ; retenu 1 c. à c. (médiane 0,8).",
  "Concentré de tomate : moitié dans la tadouira chez Rachida (et tomate dans la liaison de Choumicha), tout dans le bouillon chez Taste of Maroc. Retenu moitié-moitié, 2 c. à s. bombées au total (40 g selon l'équivalence de Rachida), entre les 30 g de Rachida ramenés à 6 et les 3 c. à s. de Taste of Maroc ou les 50 g de Royal Mansour.",
  "Cuisson du bouillon : 1 h (Rachida, Royal Mansour), 1 h 30 (Morocco World News 2021), 2 h (Fatéma Hal selon Yabiladi ; Le Courrier de l'Atlas), 50-60 min puis 90 min en marmite chez Taste of Maroc. Retenu 1 h, à prolonger tant que les pois chiches ne sont pas tendres.",
  "Temps de cuisson affiché 1 h 30 (durée totale de la fiche de Rachida ; durée de cuisson en cocotte-minute chez Taste of Maroc) : 80 min de minuteurs, plus environ 10 min pour saisir la viande et attendre l'ébullition (estimation).",
  "Fin de cuisson après la coriandre : « juste avant de retirer du feu » dans le texte de Rachida, « une dizaine de minutes » dans sa fiche. Retenu 5 min.",
  "Vermicelles : 3 min (Royal Mansour), « quelques minutes » (Taste of Maroc), « jusqu'à cuisson » (Rachida) ; minuteur de 5 min avec vérification. Quantité médiane 34 g, retenu 35 g.",
  "Trempage : « la veille » ou « une nuit » (Taste of Maroc, Rachida, Morocco World News 2020) ou 24 h, lentilles comprises (Royal Mansour). time.rest = 720 min par convention (une nuit d'environ 12 h).",
  "Préparation : 10 min (Choumicha, Gulf News), 30 min (Fatéma Hal ; Le Courrier de l'Atlas), 45 min (Taste of Maroc). Retenu 45 min, qui comprend l'épluchage des pois chiches et des tomates.",
  "Étymologie : « soie » selon Taste of Maroc ; Wikipédia (fr) traduit harir par « velouté » ; selon La Libre (Abdelhaï Diouri), le mot désignait peut-être à l'origine le roux qui lie la soupe.",
  "Contre-vérifiée le 6 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 2 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Conseils de Fatéma Hal dans son entretien à TelQuel (2021) : carvi ajouté dans les 5 dernières minutes, levain, préférence pour la harira d'Oujda. Vus seulement dans un résumé de moteur de recherche ; la page refuse l'accès (erreur 403). Non utilisés.",
  "Recette complète de Fatéma Hal (livre « Ramadan, la cuisine du partage ») : non consultée ; seuls ses temps (30 min de préparation, 2 h de cuisson) sont connus, par Yabiladi qui reprend Le Monde.",
  "Recettes de harira du site officiel de Choumicha (choumicha.ma) et son conseil « la harira ne doit pas ressembler à un flan » : site inaccessible le 6 novembre 2026 (erreur 525), vus seulement en résumé de recherche. Non utilisés.",
  "Article de 2M sur la harira (citron et dattes) : page inaccessible (erreur 403).",
  "Recette de Paula Wolfert : texte non accessible en ligne, non utilisée.",
  "Nationalité du chef Karim Ben Baba : non indiquée par les sources (formé à Casablanca, chef au Royal Mansour de Marrakech).",
  "Auteure de Gâteau et cuisine Rachida : seul le prénom est donné ; elle se dit marocaine dans un commentaire du 19 février 2024.",
  "Origine de l'auteure d'Amour de cuisine : non indiquée sur la page de la recette.",
  "Poids d'une « petite botte » d'herbes et d'une « poignée » de légumineuses (Taste of Maroc) : non convertis en grammes.",
  "Nom darija avec l'article (« l-ḥrira ») : non confirmé ; « Hrira » vient de Wikipédia (fr).",
  "Morocco World News : pages lues le 6 novembre 2026 avec l'outil de lecture web, mais elles renvoient une erreur 403 à une simple requête automatique ; le lien peut demander un vrai navigateur.",
  "« Bab Al Mansour », cité dans l'article de Choumicha (Gulf News) : non identifié."
 ],
 "cuisine": "Marocaine",
 "img": "img/harira.jpg",
 "photo": {
  "author": "Atiqa ezahiri",
  "license": "CC BY-SA 4.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/4.0",
  "page": "https://commons.wikimedia.org/wiki/File:%D8%B4%D9%88%D8%B1%D8%A8%D8%A9_%D8%A7%D9%84%D8%AD%D8%B1%D9%8A%D8%B1%D8%A9_%D9%88%D8%A7%D9%84%D8%AA%D9%85%D8%B1_-_%D9%88%D8%AC%D8%A8%D8%A9_%D9%85%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9_%D8%AA%D9%82%D9%84%D9%8A%D8%AF%D9%8A%D8%A9.jpg",
  "modified": "réduite"
 }
});
