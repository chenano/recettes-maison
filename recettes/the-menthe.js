/* Recette : Thé à la menthe marocain. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "the-menthe",
 "title": "Thé à la menthe marocain",
 "darija": "Atay b nanaa",
 "arabic": "أتاي بالنعناع",
 "tagline": "Le thé vert à la menthe des familles marocaines : on garde le premier jet, on rince le thé, puis on le verse de haut pour la mousse.",
 "category": "Boisson",
 "occasion": "Tous les jours, à toute heure : c'est la boisson de l'hospitalité, la première chose qu'on prépare pour accueillir un invité.",
 "region": "Tout le Maroc (boisson nationale) ; les herbes changent avec les saisons.",
 "servings": 6,
 "servings_label": "verres",
 "time": {
  "prep": 5,
  "cook": 10,
  "rest": 0
 },
 "difficulty": "Facile",
 "equipment": [
  "Théière marocaine (berrad) qui supporte le feu, ou une bouilloire qui va sur le feu",
  "Bouilloire pour faire bouillir l'eau",
  "Petits verres à thé, plus un verre pour garder le premier jet",
  "Plateau (sinia)",
  "Torchon en coton pour tenir l'anse brûlante",
  "Petite passoire, si tu prépares le thé dans une bouilloire",
  "Petit marteau pour casser le pain de sucre (facultatif)"
 ],
 "ingredients": [
  {
   "group": "Thé à la menthe",
   "items": [
    {
     "id": "the",
     "q": 1,
     "u": "c. à s.",
     "name": "de thé vert de Chine gunpowder",
     "note": "bien remplie ; thé roulé en petits grains. À défaut, du chunmee",
     "canon": "the-vert"
    },
    {
     "id": "menthe",
     "q": 1,
     "u": "botte",
     "name": "de menthe fraîche (nanaa)",
     "note": "une grosse botte de menthe verte, tiges comprises",
     "canon": "menthe"
    },
    {
     "id": "sucre",
     "q": 3,
     "u": "c. à s.",
     "name": "de sucre",
     "note": "idéalement en morceaux cassés d'un pain de sucre ; à ajuster après avoir goûté",
     "canon": "sucre"
    }
   ]
  },
  {
   "group": "Eau bouillante",
   "items": [
    {
     "id": "eau-premier-jet",
     "q": 120,
     "u": "ml",
     "name": "d'eau bouillante, pour le premier jet",
     "canon": "eau"
    },
    {
     "id": "eau-rincage",
     "q": 120,
     "u": "ml",
     "name": "d'eau bouillante, pour rincer le thé",
     "canon": "eau"
    },
    {
     "id": "eau",
     "q": 600,
     "u": "ml",
     "name": "d'eau bouillante, pour remplir la théière",
     "note": "selon ta théière : environ aux trois quarts, jamais jusqu'au bord",
     "canon": "eau"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Fais bouillir l'eau et lave la menthe",
   "text": "Fais bouillir toute l'eau de la liste dans une bouilloire. Pendant ce temps, lave délicatement {{menthe}} de menthe et égoutte-la.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Le premier jet : garde l'esprit du thé",
   "text": "Mets {{the}} de thé vert dans la théière et verse dessus {{eau-premier-jet}} d'eau bouillante. Laisse infuser 1 minute, puis verse ce premier jet dans un verre et garde-le de côté : c'est l'esprit du thé, ne le jette pas.",
   "timer": {
    "min": 1,
    "label": "Premier jet",
    "done": "Verse le premier jet dans un verre et garde-le."
   }
  },
  {
   "phase": "Préparation",
   "title": "Rince le thé et jette cette eau",
   "text": "Verse {{eau-rincage}} d'eau bouillante sur les feuilles et fais tourner la théière deux ou trois fois. Jette cette eau, plus foncée, par le bec : elle emporte l'amertume et la poussière, et les feuilles restent dans la théière.",
   "timer": null
  },
  {
   "phase": "Infusion",
   "title": "Ajoute la menthe, le sucre et le premier jet",
   "text": "Tasse la menthe dans la théière, tiges comprises, et ajoute {{sucre}} de sucre. Reverse le premier jet, puis complète avec {{eau}} d'eau bouillante, sans remplir jusqu'au bord. La menthe doit être entièrement sous l'eau.",
   "timer": null
  },
  {
   "phase": "Infusion",
   "title": "Porte doucement à ébullition",
   "text": "Pose la théière sur feu doux à moyen et laisse-la monter lentement jusqu'à l'ébullition : de la vapeur s'échappe de la théière. Retire-la aussitôt du feu, en tenant l'anse avec un torchon, car elle est brûlante.",
   "timer": null
  },
  {
   "phase": "Infusion",
   "title": "Mélange en versant et reversant",
   "text": "Remplis un verre de thé et reverse-le dans la théière. Recommence 2 ou 3 fois : le sucre fond et les saveurs se mélangent.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Goûte et rectifie le sucre",
   "text": "Verse un fond de verre et goûte. S'il manque du sucre, ajoutes-en, puis refais un aller-retour entre le verre et la théière.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Sers de haut pour la mousse",
   "text": "Verse le thé dans les petits verres en levant haut la théière, d'un geste régulier : plus tu verses de haut, plus il mousse. Cette mousse doit occuper environ un quart du verre. Sers très chaud.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Garde le premier jet : cette première eau, versée sur le thé et laissée 1 minute, est « l'esprit du thé », la plus parfumée. Mets-la de côté dans un verre, elle retourne ensuite dans la théière.",
   "source": "Cooking with Alia (« spirit of the tea », nom employé au Maroc selon elle) ; My Moroccan Food (« essence », « ne la jette pas ») ; Royal Mansour (« premier essentiel retenu »)"
  },
  {
   "text": "C'est la deuxième eau, celle du rinçage, qu'on jette : elle lave les feuilles, retire une partie de l'amertume et la poussière, et ressort plus foncée.",
   "source": "Cooking with Alia, My Moroccan Food et Royal Mansour (deuxième eau jetée, plus foncée chez Alia) ; Al Jazeera (Hend Aklaw) et Moroccan Zest (le rinçage retire l'amertume, les goûts forts et la poussière)"
  },
  {
   "text": "Laisse le thé monter doucement à ébullition, sur feu doux à moyen : c'est ce qui donne au thé et à la menthe le temps d'infuser.",
   "source": "My Moroccan Food ; Cooking with Alia ; Morocco World News"
  },
  {
   "text": "Sois généreux avec la menthe et tasse-la, en pliant les tiges s'il le faut, mais garde-la sous l'eau : à l'air, elle peut rendre le thé amer.",
   "source": "Moroccan Zest"
  },
  {
   "text": "Mélange en versant un verre de thé et en le reversant dans la théière, plusieurs fois, puis goûte et rectifie le sucre avant de servir.",
   "source": "Cooking with Alia (2 à 3 fois) ; Al Jazeera (3 ou 4 verres, on goûte puis on ajoute du sucre)"
  },
  {
   "text": "Verse de haut : plus la théière est haute, plus il y a de mousse. Cette mousse occupe environ un quart du verre ; le chroniqueur marocain Najib Refaif la compare, en plaisantant, à une « rozza » (un turban).",
   "source": "La Vie Éco (Najib Refaif, pour l'image de la « rozza ») ; Moroccan Zest ; Al Jazeera ; Cooking with Alia"
  },
  {
   "text": "Le sucre vient d'un pain de sucre, cassé au petit marteau ou avec le fond d'un verre ; les connaisseurs le préfèrent aux briques de sucre.",
   "source": "Maroc.ma (dépêche MAP) ; Morocco World News"
  },
  {
   "text": "Le thé se prépare devant les invités, traditionnellement par le maître de maison, avec plus de verres que d'invités sur le plateau.",
   "source": "Royal Mansour ; Al Jazeera ; Moroccan Zest"
  },
  {
   "text": "La base est un thé vert de Chine roulé en petits grains, le gunpowder.",
   "source": "My Moroccan Food ; Moroccan Zest ; Morocco World News ; Maroc.ma (« souvent de type Gunpowder »)"
  }
 ],
 "mistakes": [
  "Jeter le premier jet : c'est l'esprit du thé, il doit retourner dans la théière.",
  "Oublier le rinçage : le thé reste amer et garde sa poussière.",
  "Laisser des tiges de menthe hors de l'eau : le thé peut devenir amer.",
  "Remplir la théière jusqu'au bord : laisse environ 2,5 cm de vide.",
  "Chauffer à feu vif : le thé doit monter doucement à ébullition.",
  "Laisser bouillir longtemps : plus le thé bout, plus il est fort et chargé en caféine.",
  "Servir dans des tasses : le thé marocain se boit dans de petits verres.",
  "Verser de trop près : c'est la hauteur qui fait la mousse."
 ],
 "serving": "Sers très chaud, dans de petits verres et non dans des tasses, posés sur un plateau (sinia) autour de la théière (berrad) ; prévois plus de verres que d'invités. Traditionnellement, c'est le maître de maison qui prépare le thé devant ses invités. Les feuilles restent dans la théière : on sert au moins trois verres, chacun plus fort que le précédent ; un dicton dit que le premier est doux comme la vie, le deuxième fort comme l'amour, le dernier amer comme la mort ; il en existe une autre version, où le premier est amer comme la vie et le dernier apaisant comme la mort. Pour plus d'arôme, glisse un peu de menthe fraîche dans chaque verre. Avec des cornes de gazelle, des ghriba ou des briouates aux amandes, ou simplement du pain et des olives.",
 "variants": [
  "Chiba (absinthe, la plante) en hiver : d'octobre à avril, elle remplace la menthe quand il fait froid et que la menthe est moins bonne ; dans les cafés, on la sert à part et chacun l'ajoute dans son verre. Goût nettement plus amer. Mets-en peu : l'absinthe contient de la thuyone, réputée neurotoxique ; l'Agence européenne des médicaments la réserve aux adultes et la déconseille pendant la grossesse et l'allaitement, ainsi qu'en cas de maladie du foie ou des voies biliaires ou d'allergie aux astéracées — Hespress (dépêche Anadolu) ; Agence européenne des médicaments ; aussi Al Jazeera, Moroccan Zest, Morocco World News, Wikipédia.",
  "Louiza (verveine citronnelle), à la place de la menthe ou avec elle — Al Jazeera ; Morocco World News ; la verveine aussi chez My Moroccan Food et Moroccan Zest.",
  "Zaatar en hiver, à la place de la menthe — Hespress (dépêche Anadolu) ; Asharq cite aussi le « أتاي بالزعتر ».",
  "Menthe pouliot et absinthe quand il fait froid, réputées réchauffantes ; pour l'absinthe, mêmes précautions que pour la chiba — Moroccan Zest ; Agence européenne des médicaments. Pour la menthe pouliot pendant la grossesse, demande l'avis d'un professionnel de santé : son huile a servi autrefois à provoquer l'avortement (Agence européenne des médicaments, déclaration sur la pulégone).",
  "Fleur d'oranger : de l'eau de fleur d'oranger ajoutée hors du feu — Moroccan Zest ; Al Jazeera cite aussi les fleurs d'agrumes (« زهر الليمون ») à la place de la menthe.",
  "Géranium, thym sauvage ou sauge à la place de la menthe — Morocco World News ; le géranium aussi chez My Moroccan Food.",
  "Pour les fêtes (fiançailles, mariages) : boutons de rose, verveine et cannelle — Moroccan Zest."
 ],
 "sources": [
  {
   "name": "My Moroccan Food — Nargisse Benkabbou, « Moroccan Mint Tea » (30 avril 2015)",
   "url": "https://www.mymoroccanfood.com/home/2015/4/27/moroccan-mint-tea",
   "used_for": "Cheffe élevée à Bruxelles dans une famille marocaine, ancienne cheffe exécutive de L'Mida Marrakech. Recette : 1 c. à c. bombée de gunpowder, 7 brins de menthe, 3 c. à s. de sucre, 500 ml d'eau (pour 400 ml de thé) ; premier jet gardé (« essence », « ne la jette pas »), deuxième eau jetée, montée lente à ébullition sur feu moyen-doux, vapeur, sucre remué à la grande cuillère, feuille de menthe dans le verre ; verveine et géranium ; accompagnements (cornes de gazelle, ghriba, briouates)."
  },
  {
   "name": "Cooking with Alia — « 444 – Moroccan Mint Tea / الشاي المغربي بالنعناع » (non daté)",
   "url": "https://www.cookingwithalia.com/444-moroccan-mint-tea-2/",
   "used_for": "Site d'une cuisinière qui a grandi avec la cuisine marocaine. 3 c. à c. de thé (gunpowder ou chun mee), grosse poignée de menthe, 3 c. à s. de sucre ; premier jet gardé (« spirit of the tea », nom employé au Maroc selon elle), deuxième eau jetée et plus foncée, théière aux trois quarts, ébullition à feu doux, menthe et sucre hors du feu, 2 à 3 allers-retours verre-théière, service de haut pour la mousse."
  },
  {
   "name": "Moroccan Zest — Safaa, « Moroccan Mint Tea Recipe » (29 mai 2018, mise à jour le 7 août 2024)",
   "url": "https://moroccanzest.com/authentic-moroccan-mint-tea-recipe/",
   "used_for": "Blog d'une Marocaine. 1 c. à s. de gunpowder, 4 branches de menthe verte, 2 c. à s. de sucre, 3 tasses d'eau pour 4 personnes ; un seul rinçage, jeté par le bec (enlève les goûts forts) ; 2,5 cm de vide ; ébullition 1 à 3 min puis 1 à 2 min avec la menthe ; menthe sous l'eau ; torchon pour l'anse ; plus on verse haut, plus il mousse ; au moins trois verres et proverbe ; menthe pouliot et absinthe par temps froid ; rose, verveine et cannelle pour les fêtes ; fleur d'oranger ; préparé par le chef de famille, sur un plateau d'argent."
  },
  {
   "name": "Royal Mansour Marrakech — Chef Barman, « Le thé à la menthe ou l'art de vivre à la marocaine » (3 mai 2020)",
   "url": "https://www.royalmansour.com/blog/le-the-a-la-menthe-ou-lart-de-vivre-a-la-marocaine/",
   "used_for": "Recette du palace : 1 c. à s. de thé vert, 1 bouquet de menthe délicatement lavé, jusqu'à 2 grands morceaux de sucre ; premier jet gardé dans un verre (« premier essentiel retenu »), second rinçage jeté (« éliminez le résidu obtenu »), servi très chaud ; préparé par le chef de famille devant les invités ; boisson nationale et de l'hospitalité, à toute heure."
  },
  {
   "name": "Bladi.net (Les Marocains du monde) — « Thé à la menthe » (non daté)",
   "url": "https://www.bladi.net/the-a-la-menthe.html",
   "used_for": "Recette marocaine courte : 1 cuillère à soupe bien remplie de thé vert chinois, 1 botte de menthe lavée, sucre au goût ; un seul rinçage, jeté ; quelques minutes sur le feu seulement si on aime le thé fort."
  },
  {
   "name": "Al Jazeera (Midan) — Hend Aklaw, « من الشاي إلى الأتاي.. كيف أبدع المغاربة مشروبهم السحري؟ » (28 juillet 2019, mis à jour le 23 mai 2022), repris par le site marocain Al3omk",
   "url": "https://www.aljazeera.net/midan/2019/7/28/%D9%85%D9%86-%D8%A7%D9%84%D8%B4%D8%A7%D9%8A-%D8%A5%D9%84%D9%89-%D8%A7%D9%84%D8%A3%D8%AA%D8%A7%D9%8A-%D9%83%D9%8A%D9%81-%D8%A3%D8%A8%D8%AF%D8%B9-%D8%A7%D9%84%D9%85%D8%BA%D8%A7%D8%B1%D8%A8%D8%A9",
   "used_for": "Rituel : plus de verres que d'invités sur le plateau d'argent autour du براد, boîtes « الربايع » (thé, sucre, menthe), préparateur appelé « مقيم », souvent le chef de famille ; thé lavé pour réduire l'amertume et ôter la poussière ; sucre, eau bouillante, feu jusqu'à ébullition puis menthe ; on goûte, on ajoute du sucre, 3 ou 4 verres reversés ; versé de haut, mousse sur environ un quart du verre ; chiba, louiza ou fleurs d'agrumes à la place de la menthe ; histoire du pain de sucre."
  },
  {
   "name": "Morocco World News — Juliette Owen-Jones, « Making Moroccan Tea: What and How » (20 mai 2019)",
   "url": "https://www.moroccoworldnews.com/2019/05/80173/how-to-mint-tea/",
   "used_for": "Média marocain. Pain de sucre préféré aux briques, cassé avec le fond d'un verre ; premier jet gardé (« spirit » ou essence), feu moyen-doux jusqu'à l'ébullition ; berrad, sinia, verres et non tasses ; herbes : géranium sauvage, thym sauvage, sauge, absinthe, verveine citronnelle. Sa méthode reprend de près celle de My Moroccan Food : elle n'est pas comptée comme un recoupement indépendant pour le premier jet. Page lisible par WebFetch, refusée (403) à une requête curl simple."
  },
  {
   "name": "La Vie Éco — Najib Refaif, « Thé vert et mousse blanche » (4 octobre 2010)",
   "url": "https://www.lavieeco.com/idees/the-vert-et-mousse-blanche-17672/",
   "used_for": "Chronique marocaine : l'auteur ajoute, en précisant que c'est lui qui le dit « pour faire mousser », que le verseur fait une « rozza » (un turban) avec la mousse ; thé versé de haut au-dessus des verres ; botte de menthe fraîche, petits verres, plateaux d'argent ; « lkhobz wa'tay » (pain et thé) avec des olives."
  },
  {
   "name": "Hespress (dépêche Anadolu) — Khawla Ahbibi, « المغرب البلد الوحيد بالعالم الذي يُنكه الشاي بنبتة الشيبة » (27 novembre 2014)",
   "url": "https://www.hespress.com/%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%A8%D9%84%D8%AF-%D8%A7%D9%84%D9%88%D8%AD%D9%8A%D8%AF-%D8%A8%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85-%D8%A7%D9%84%D8%B0%D9%8A-%D9%8A%D9%8F%D9%86%D9%83-196930.html",
   "used_for": "La chiba apparaît d'octobre à avril et remplace la menthe quand il fait froid et que la menthe est moins bonne ; dans les cafés, elle est servie à part dans le verre, sans cuire avec le thé ; sa substance amère devient dangereuse concentrée en huile. Page lisible par WebFetch, refusée (403) à une requête curl simple."
  },
  {
   "name": "Hespress (dépêche Anadolu) — Sara Ait Khorssa, « النعناع المغربي.. معطر لكؤوس الشاي ومطفئ لظمأ العطشى » (9 août 2014)",
   "url": "https://hespress.com/%D8%A7%D9%84%D9%86%D8%B9%D9%86%D8%A7%D8%B9-%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8%D9%8A-%D9%85%D8%B9%D8%B7%D8%B1-%D9%84%D9%83%D8%A4%D9%88%D8%B3-%D8%A7%D9%84%D8%B4%D8%A7%D9%8A-%D9%88%D9%85%D8%B7%D9%81-182249.html",
   "used_for": "La menthe accompagne le thé toute l'année ; en hiver, on la remplace par la chiba ou des feuilles de zaatar. Page lisible par WebFetch, refusée (403) à une requête curl simple."
  },
  {
   "name": "Maroc.ma, portail national du Maroc (dépêche MAP) — « Thé vert à la menthe, l'incarnation d'un métissage culturel entre la Chine et le Maroc » (28 janvier 2026)",
   "url": "https://www.maroc.ma/fr/actualites/vert-la-menthe-lincarnation-dun-metissage-culturel-entre-la-chine-et-le-maroc",
   "used_for": "Thé « souvent de type Gunpowder » ; étapes : rinçage des feuilles, pains de sucre cassés au petit marteau, versement en hauteur ; « couronne de mousse » (citation d'Edmond Amran El Maleh)."
  },
  {
   "name": "Asharq (الشرق) — Ali Abbas, reportage à Marrakech, « الشاي \"الأتاي\" في المغرب.. مشروب الثقافات المتنوعة » (6 mars 2024)",
   "url": "https://asharq.com/culture/81982/%D8%A7%D9%84%D8%B4%D8%A7%D9%8A%D8%A7%D9%84%D8%A3%D8%AA%D8%A7%D9%8A-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8-%D9%85%D8%B4%D8%B1%D9%88%D8%A8-%D8%A7%D9%84%D8%AB%D9%82%D8%A7%D9%81%D8%A7%D8%AA-%D8%A7%D9%84%D9%85%D8%AA%D9%86%D9%88%D8%B9%D8%A9/",
   "used_for": "Graphie « أتاي بالنعناع » ; variantes au zaatar, à la chiba et aux mélanges d'herbes par temps froid ; thé versé de haut pour une mousse crémeuse."
  },
  {
   "name": "Wikipédia (en) — « Maghrebi mint tea »",
   "url": "https://en.wikipedia.org/wiki/Maghrebi_mint_tea",
   "used_for": "Goût nettement amer de la chiba. Seule mention de la marjolaine parmi les herbes d'hiver, avec renvoi au Washington Post (2014), page inaccessible : marjolaine non retenue."
  },
  {
   "name": "Agence européenne des médicaments (EMA, HMPC), « European Union herbal monograph on Artemisia absinthium L., herba », EMA/HMPC/751490/2016, révision du 30 mai 2017 (corrigendum de mars 2020)",
   "url": "https://www.ema.europa.eu/en/documents/herbal-monograph/final-european-union-herbal-monograph-artemisia-absinthium-l-herba_en.pdf",
   "used_for": "Contre-vérification : Absinthe (Artemisia absinthium) : la thuyone est réputée neurotoxique et stimule l'utérus ; usage déconseillé pendant la grossesse et l'allaitement ; usage non établi avant 18 ans ; contre-indiquée en cas d'allergie aux astéracées, d'obstruction des voies biliaires, de cholangite ou de maladie du foie ; dose adulte en tisane : 1 à 1,5 g par tasse de 150 ml, 2 à 3 g par jour ; apport de thuyone à garder sous 6 mg par jour."
  },
  {
   "name": "Agence européenne des médicaments, page « Absinthii herba » (résumé pour le public)",
   "url": "https://www.ema.europa.eu/en/medicines/herbal/absinthii-herba",
   "used_for": "Contre-vérification : Les préparations d'absinthe ne doivent être utilisées que chez l'adulte ; contre-indications : allergie aux astéracées, obstruction des voies biliaires, cholangite, maladie du foie."
  },
  {
   "name": "Aujourd'hui le Maroc, « Thé : Source de plaisir et de convivialité sociale », octobre 2010",
   "url": "https://aujourdhui.ma/culture/the-source-de-plaisir-et-de-convivialite-sociale-91932",
   "used_for": "Contre-vérification : Source marocaine : le thé, associé à la menthe ou à d'autres plantes, symbolise l'hospitalité ; servi bien chaud toute la journée ; offert à l'hôte pour lui souhaiter la bienvenue ; traditionnellement une affaire d'hommes, avec la nuance d'une habitante de Boujdour pour qui la mère le prépare aussi."
  },
  {
   "name": "Al3omk (العمق), « الشاي الصحراوي… قواعد تحضير تختزل في جيمات ثلاث », 23 décembre 2016",
   "url": "https://al3omk.com/70793.html",
   "used_for": "Contre-vérification : Thé sahraoui (sud du Maroc) : la mousse y est appelée « الكشكوشة » (kachkoucha), pas « rozza » ; on boit trois théières, la première forte, la deuxième modérée, la troisième douce : l'inverse du « chacun plus fort que le précédent » de Moroccan Zest, ce qui montre que l'ordre des trois verres dépend de la tradition."
  },
  {
   "name": "Al3omk (العمق), reprise de l'article d'Al Jazeera « من الشاي إلى الأتاي.. كيف أبدع المغاربة مشروبهم السحري؟ »",
   "url": "https://al3omk.com/442513.html",
   "used_for": "Contre-vérification : Confirme la reprise de l'article de Hend Aklaw par un site marocain : rinçage du thé contre l'amertume et la poussière, eau de rinçage versée dans un verre, préparateur appelé « مقيم », dégustation puis ajout de sucre, 3 ou 4 verres reversés, mousse sur environ un quart du verre."
  },
  {
   "name": "Agence européenne des médicaments (HMPC), « Public statement on the use of herbal medicinal products containing pulegone and menthofuran », révision 1",
   "url": "https://www.ema.europa.eu/en/documents/scientific-guideline/public-statement-use-herbal-medicinal-products-containing-pulegone-and-menthofuran-revision-1_en.pdf",
   "used_for": "L'huile de menthe pouliot a servi autrefois à provoquer les règles et l'avortement, et n'est plus utilisée ; aucune recommandation propre à la feuille en infusion (lu le 6 novembre 2026)."
  }
 ],
 "discrepancies": [
  "Premier jet : My Moroccan Food, Cooking with Alia, Royal Mansour et Morocco World News le gardent (« esprit » ou « essence » du thé) et jettent seulement la deuxième eau ; Moroccan Zest et Bladi font un seul rinçage, jeté ; Al Jazeera verse l'eau de lavage dans un verre sans dire si on la boit. Retenu : la pratique majoritaire, on garde le premier jet.",
  "Moment de la menthe : avant la chauffe, avec le sucre (My Moroccan Food, Morocco World News, Royal Mansour, Bladi) ; après l'ébullition (Cooking with Alia, hors du feu ; Al Jazeera) ; Moroccan Zest fait bouillir 1 à 3 min, ajoute la menthe et prolonge 1 à 2 min. Retenu : avant la chauffe.",
  "Ébullition : juste porter à ébullition, doucement (My Moroccan Food, Cooking with Alia, Morocco World News, Al Jazeera) ; Moroccan Zest fait bouillir 2 à 5 min au total ; Bladi laisse quelques minutes sur le feu seulement si on aime le thé fort.",
  "Mélange : allers-retours entre verre et théière (Cooking with Alia : 2 à 3 ; Al Jazeera : 3 ou 4 verres) ; My Moroccan Food remue à la grande cuillère.",
  "Sucre : 3 c. à s. (My Moroccan Food, Cooking with Alia), 2 c. à s. (Moroccan Zest), jusqu'à 2 grands morceaux (Royal Mansour), au goût (Bladi). Ramené à la base retenue (720 ml dans la théière), My Moroccan Food équivaut à environ 5,7 c. à s. et Moroccan Zest à environ 3 c. à s. (calculs refaits). Retenu : 3 c. à s., à ajuster après avoir goûté.",
  "Thé : 1 c. à s. pour une théière chez Royal Mansour, Moroccan Zest, Bladi (« bien remplie ») et Cooking with Alia (3 c. à c.) ; My Moroccan Food met 1 c. à c. bombée pour 500 ml d'eau.",
  "Volumes : aucune source ne donne la contenance de la théière. Premier jet et rinçage : une demi-tasse (environ 120 ml) chez My Moroccan Food et Morocco World News, une tasse (environ 240 ml) chez Cooking with Alia et pour le rinçage de Moroccan Zest ; Al Jazeera et Bladi disent « un peu d'eau ». La base de 6 verres (120 ml de premier jet et 600 ml d'eau dans la théière) est un calcul : Moroccan Zest compte 3 tasses d'eau pour 4 personnes, My Moroccan Food 500 ml d'eau pour 400 ml de thé.",
  "« Chaara » : la demande en fait le gunpowder, mais aucune source solide lue ne le confirme ; des fiches marchandes vues en résultats de recherche (« Sultan 4011 Chaara ») le présentent comme un chunmee, un autre thé vert de Chine, en feuilles torsadées et non en grains. Le mot n'est donc pas employé dans la recette.",
  "Durées (5 min de préparation, 10 min de cuisson) : estimations ; seule Moroccan Zest annonce un temps (moins de 10 minutes).",
  "Contre-vérifiée le 6 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 7 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Le mot darija « roh » pour le premier jet : aucune source lue ne l'écrit ; elles disent « spirit of the tea » (Cooking with Alia, qui précise que c'est le nom employé au Maroc), « essence » (My Moroccan Food), « premier essentiel retenu » (Royal Mansour). La recette dit donc « l'esprit du thé ».",
  "« Chaara » = gunpowder : non confirmé. La fiche marchande (hanouty.ca) n'a pas pu être ouverte (refus 429) ; parmi les pages lues, seul un commentaire de lecteur sous une vidéo Hespress (2013), et non un article, décrit « الشعرة » comme un thé fin et plus léger.",
  "Marjolaine : seule Wikipédia (en) la cite parmi les herbes d'hiver, en renvoyant au Washington Post (2014), page inaccessible (refus 403) ; non retenue dans les variantes.",
  "« Kissan » (verres) : aucun texte lu n'emploie ce mot ; non utilisé. La théière est écrite « berrad », comme chez Morocco World News.",
  "Royal Mansour écrit « Faites revenir le thé deux fois avant de servir » : sens ambigu (allers-retours entre verre et théière, ou remise sur le feu) ; non utilisé.",
  "Pages non lues (refus d'accès ou outil bloqué) : Taste of Maroc (403), Saveur (403), Peace Corps (403), Washington Post (403), Aujourd'hui le Maroc (403), MAP Express (403), Alimentarium (403) ; les copies web.archive.org sont inaccessibles à l'outil. Choumicha et Femmes du Maroc : aucune recette de thé trouvée ; Lalla Moulati : seul un article sur une recette sahraouie, vu en résultat de recherche et non ouvert.",
  "Contenance d'un verre à thé marocain : non trouvée ; le nombre de verres (6) est approximatif."
 ],
 "cuisine": "Marocaine",
 "rayon": "Boissons",
 "pairs": [
  "harcha",
  "msemen"
 ],
 "pairs_label": "Avec le thé",
 "img_alt": "Théières marocaines et verre de thé à la menthe sur un plateau",
 "img": "img/the-menthe.jpg",
 "photo": {
  "author": "Munfarid1",
  "license": "CC BY-SA 4.0",
  "license_url": "https://creativecommons.org/licenses/by-sa/4.0",
  "page": "https://commons.wikimedia.org/wiki/File:Moroccan_mint_tea_on_a_traditional_tray.jpg",
  "modified": "réduite"
 }
});
