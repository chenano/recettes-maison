/* Recette : Tajine de poulet aux citrons confits et aux olives. Sources et vérification dans le champ sources / discrepancies. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
 "slug": "tajine-poulet-citron-olives",
 "title": "Tajine de poulet aux citrons confits et aux olives",
 "darija": "Djaj mqualli bel hamd marqad w zitoun",
 "arabic": "دجاج مقلي بالحامض المرقد والزيتون",
 "tagline": "Un poulet fondant au safran et au gingembre, nappé d'oignons fondus en sauce, relevé de citron confit et d'olives.",
 "category": "Tajine",
 "occasion": "Repas de famille, invités et fêtes",
 "region": "Tout le Maroc (plat national), cuisson m'qalli",
 "servings": 4,
 "servings_label": "personnes",
 "time": {
  "prep": 25,
  "cook": 95,
  "rest": 120
 },
 "difficulty": "Moyen",
 "equipment": [
  "Cocotte à fond épais avec couvercle, ou tajine en terre",
  "Diffuseur de chaleur (pour le tajine en terre, hors gaz)",
  "Grand saladier",
  "Petit bol",
  "Petite casserole",
  "Spatule en bois",
  "Papier aluminium"
 ],
 "ingredients": [
  {
   "group": "Poulet et marinade",
   "items": [
    {
     "id": "poulet",
     "q": 1,
     "u": "",
     "name": "poulet halal, fermier (beldi) de préférence",
     "note": "environ 1,5 kg, coupé en 4 à 6 morceaux",
     "pl": "poulets halal, fermiers (beldi) de préférence"
    },
    {
     "id": "safran",
     "q": 1,
     "u": "pincée",
     "name": "de pistils de safran",
     "note": "une pincée généreuse ; Choumicha en compte 8 pistils"
    },
    {
     "id": "eau-safran",
     "q": 60,
     "u": "ml",
     "name": "d'eau chaude, pour infuser le safran"
    },
    {
     "id": "sel",
     "q": 1,
     "u": "c. à c.",
     "name": "de sel fin",
     "note": "à rectifier à la fin : le citron confit et les olives salent déjà"
    },
    {
     "id": "gingembre",
     "q": 1,
     "u": "c. à c.",
     "name": "de gingembre moulu",
     "note": "bien bombée"
    },
    {
     "id": "curcuma",
     "q": 1,
     "u": "c. à c.",
     "name": "de curcuma"
    },
    {
     "id": "poivre",
     "q": null,
     "u": "",
     "name": "poivre noir ou blanc moulu, selon le goût"
    },
    {
     "id": "smen",
     "q": 1,
     "u": "c. à c.",
     "name": "de smen (beurre rance marocain)",
     "note": "ou du beurre ; facultatif"
    },
    {
     "id": "ail",
     "q": 2,
     "u": "",
     "name": "gousse d'ail, écrasée ou râpée",
     "pl": "gousses d'ail, écrasées ou râpées"
    },
    {
     "id": "jus-citron",
     "q": 2,
     "u": "c. à s.",
     "name": "de jus de citron frais"
    },
    {
     "id": "herbes",
     "q": 4,
     "u": "c. à s.",
     "name": "de coriandre et de persil frais hachés"
    }
   ]
  },
  {
   "group": "Cuisson",
   "items": [
    {
     "id": "oignons",
     "q": 3,
     "u": "",
     "name": "oignon moyen (jaune, blanc ou rouge)",
     "note": "hachés finement",
     "pl": "oignons moyens (jaunes, blancs ou rouges)"
    },
    {
     "id": "eau-depart",
     "q": 60,
     "u": "ml",
     "name": "d'eau, pour le départ de cuisson"
    },
    {
     "id": "huile",
     "q": 60,
     "u": "ml",
     "name": "d'huile : moitié huile d'olive, moitié huile neutre"
    },
    {
     "id": "eau-chaude",
     "q": 240,
     "u": "ml",
     "name": "d'eau chaude",
     "note": "le liquide doit arriver à peu près aux deux tiers du poulet"
    }
   ]
  },
  {
   "group": "Citron confit et olives",
   "items": [
    {
     "id": "citron-confit",
     "q": 1,
     "u": "",
     "name": "citron confit",
     "note": "l'écorce seulement, en fines lanières",
     "pl": "citrons confits"
    },
    {
     "id": "olives",
     "q": 150,
     "u": "g",
     "name": "d'olives vertes ou violettes de bonne qualité",
     "note": "dénoyautées ou non"
    }
   ]
  }
 ],
 "steps": [
  {
   "phase": "Préparation",
   "title": "Fais infuser le safran",
   "text": "Mets {{safran}} de safran dans un petit bol avec {{eau-safran}} d'eau chaude. Laisse infuser 10 min.",
   "timer": {
    "min": 10,
    "label": "Infusion du safran",
    "done": "Le safran a infusé : prépare la marinade."
   }
  },
  {
   "phase": "Préparation",
   "title": "Prépare la marinade",
   "text": "Verse l'eau safranée dans un grand saladier et ajoute {{sel}} de sel, {{gingembre}} de gingembre, {{curcuma}} de curcuma, le poivre et {{smen}} de smen. Ajoute {{ail:full}}, {{jus-citron}} de jus de citron et {{herbes}} de coriandre et persil hachés, puis mélange bien.",
   "timer": null
  },
  {
   "phase": "Préparation",
   "title": "Fais mariner le poulet",
   "text": "Coupe le poulet en 4 à 6 morceaux. Enrobe chaque morceau de marinade en frottant bien, jusque sous la peau. Couvre et laisse au frais au moins 1 h, idéalement 2 h ou toute une nuit.",
   "timer": {
    "min": 120,
    "label": "Marinade du poulet",
    "done": "La marinade est prête : passe à la cuisson."
   }
  },
  {
   "phase": "Préparation",
   "title": "Prépare oignons, citron confit et olives",
   "text": "Pendant la marinade, hache finement {{oignons:full}}. Retire la pulpe de {{citron-confit:full}} et coupe l'écorce en fines lanières. Rince {{olives}} d'olives ; si elles viennent d'une boîte, elles sont plus salées : blanchis-les 10 min dans l'eau bouillante, puis égoutte-les.",
   "timer": {
    "min": 10,
    "label": "Olives en boîte à blanchir",
    "done": "Égoutte les olives et mets-les de côté."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Départ à cru, sans huile",
   "text": "Mets le poulet et toute sa marinade dans une cocotte à fond épais avec les oignons et {{eau-depart}} d'eau. Laisse frémir 10 à 15 min à feu moyen en retournant les morceaux de temps en temps. C'est prêt quand l'eau s'est presque évaporée et que le poulet a changé de couleur sur toutes ses faces. Au tajine en terre, pose-le sur un diffuseur si tu n'as pas le gaz et ne dépasse pas le feu moyen.",
   "timer": {
    "min": 15,
    "label": "Départ à cru",
    "done": "L'eau a presque disparu et le poulet a changé de couleur partout ? Passe à l'étape suivante."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Ajoute l'huile et l'eau chaude",
   "text": "Ajoute {{huile}} d'huile et {{eau-chaude}} d'eau chaude : le liquide doit arriver à peu près aux deux tiers du poulet, complète un peu si besoin. Au tajine en terre, mets moins d'eau qu'en cocotte.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Laisse mijoter à couvert",
   "text": "Couvre et laisse mijoter à feu doux à moyen-doux environ 50 min, en vérifiant souvent que rien n'attache au fond. Le poulet est prêt quand il est tendre au toucher et que le liquide a bien réduit. Un poulet beldi, comme la cuisson au tajine en terre, demande nettement plus de temps.",
   "timer": {
    "min": 50,
    "label": "Mijotage du poulet",
    "done": "Le poulet est-il tendre au toucher ? Sinon, laisse cuire encore et vérifie régulièrement."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Sors le poulet",
   "text": "Retire délicatement les morceaux de poulet et garde-les au chaud sous une feuille de papier aluminium, sans jeter le jus qui s'en écoule. Au tajine en terre, laisse plutôt le poulet en place et verse la sauce dans une petite casserole pour la réduire à part.",
   "timer": null
  },
  {
   "phase": "Cuisson",
   "title": "Réduis la sauce aux oignons",
   "text": "Fais réduire la sauce à feu moyen environ 20 min, en remuant souvent et en écrasant les oignons à la spatule. C'est prêt quand on ne reconnaît plus les oignons : la sauce est épaisse, soyeuse et commence à se séparer de l'huile. Garde un peu de liquide et, si ça attache, ajoute un peu d'eau.",
   "timer": {
    "min": 20,
    "label": "Réduction de la sauce",
    "done": "Les oignons ont fondu et la sauce se sépare de l'huile ? Sinon, continue quelques minutes en remuant."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Ajoute olives et citron confit",
   "text": "Ajoute les olives et les lanières de citron confit dans la sauce et laisse cuire 10 min à feu moyen-doux. Goûte et rectifie le sel seulement maintenant. Si la sauce devient trop citronnée, retire les lanières et garde-les pour le décor.",
   "timer": {
    "min": 10,
    "label": "Olives et citron confit",
    "done": "Goûte la sauce et rectifie le sel."
   }
  },
  {
   "phase": "Cuisson",
   "title": "Fais dorer le poulet dans la sauce",
   "text": "Remets les morceaux de poulet dans la cocotte, à feu moyen. Retourne-les plusieurs fois dans l'huile qui s'est séparée de la sauce, jusqu'à ce qu'ils soient bien chauds et dorés. Au tajine, reverse simplement la sauce réduite autour du poulet.",
   "timer": null
  },
  {
   "phase": "Service",
   "title": "Dresse et sers bien chaud",
   "text": "Verse la sauce dans le plat de service, pose le poulet dessus et nappe-le de sauce aux oignons. Décore avec les olives et les lanières de citron confit, puis sers bien chaud avec du pain. Au tajine, pose-le directement au centre de la table.",
   "timer": null
  }
 ],
 "secrets": [
  {
   "text": "Le m'qalli repose sur deux épices maîtresses, le safran et le gingembre, et se reconnaît à sa sauce jaune.",
   "source": "Taste of Maroc (Nada Kiffa), Cooking Styles and Sauces in Moroccan Cuisine"
  },
  {
   "text": "Fais d'abord infuser le safran une dizaine de minutes dans un peu d'eau chaude, puis mélange-y sel, curcuma, gingembre, poivre et smen : c'est la base de la marinade.",
   "source": "Taste of Maroc (Nada Kiffa)"
  },
  {
   "text": "Laisse mariner au moins 1 h, idéalement 2 h ou une nuit au frais, en faisant pénétrer la marinade jusque sous la peau.",
   "source": "Choumicha ; Taste of Maroc (Nada Kiffa)"
  },
  {
   "text": "Départ « à cru » : le poulet cuit d'abord 10 à 15 min dans sa marinade avec les oignons et un fond d'eau, à feu moyen. L'huile et l'eau chaude ne viennent qu'ensuite, quand l'eau s'est presque évaporée et que la viande a changé de couleur.",
   "source": "Taste of Maroc (Nada Kiffa)"
  },
  {
   "text": "Ne diminue pas l'huile : avec moins d'huile, la sauce aux oignons risque de ne pas atteindre sa texture épaisse. Utilise un mélange d'huile d'olive et d'huile neutre.",
   "source": "Taste of Maroc (Nada Kiffa) ; Choumicha"
  },
  {
   "text": "Pour la sauce aux oignons (daghmira), réduis patiemment en remuant et en écrasant les oignons à la spatule, jusqu'à ce qu'on ne les reconnaisse plus et que la sauce, soyeuse, se sépare de l'huile.",
   "source": "Taste of Maroc (Nada Kiffa ; Christine Benlafquih)"
  },
  {
   "text": "Sors le poulet, couvert, pendant que la sauce réduit, et remets-le seulement à la fin. Garde quand même un peu de liquide : la sauce ne doit pas finir à sec.",
   "source": "Taste of Maroc (Nada Kiffa) ; My Moroccan Food (Nargisse Benkabbou)"
  },
  {
   "text": "Le dernier geste donne son nom au plat : on remet le poulet cuit dans l'huile qui s'est séparée de la sauce et on le fait dorer à feu moyen ; il reste moelleux à l'intérieur.",
   "source": "Taste of Maroc (Nada Kiffa)"
  },
  {
   "text": "Prends du citron confit, jamais du citron frais à sa place : c'est le seul moyen d'avoir le goût traditionnel. Si la sauce devient trop citronnée, retire les morceaux de citron confit dès que le goût te plaît et garde-les pour le décor.",
   "source": "Taste of Maroc (Christine Benlafquih)"
  },
  {
   "text": "Les olives entrent à la toute fin, ou seulement en décor. Si elles viennent d'une boîte, blanchis-les 10 min dans l'eau bouillante, car elles sont plus salées.",
   "source": "Taste of Maroc (Nada Kiffa)"
  },
  {
   "text": "Sale avec prudence avant d'ajouter le citron confit et les olives, qui salent beaucoup la sauce, puis rectifie à la fin.",
   "source": "Taste of Maroc (Christine Benlafquih ; Nada Kiffa)"
  },
  {
   "text": "L'ail doit rester discret : 1 à 2 gousses par poulet suffisent.",
   "source": "Taste of Maroc (Nada Kiffa, réponse à un commentaire)"
  },
  {
   "text": "Dans les familles marocaines, on nettoie le poulet (on retire les amas de graisse sous la peau), puis on le laisse au moins 30 min dans une saumure d'eau froide, de sel, de citron et d'un peu de vinaigre blanc, avant de le rincer et de le mariner. Bladi le sale simplement et le laisse dégorger 2 h. Nettoie ensuite soigneusement tout ce qui a touché le poulet cru. Les autorités sanitaires déconseillent toutefois de rincer la volaille crue, car les éclaboussures propagent les bactéries : si tu gardes ce geste, fais-le sans éclabousser et nettoie évier et plan de travail juste après.",
   "source": "Taste of Maroc (Nada Kiffa), Cleaning and Brining Chicken the Moroccan Way ; Bladi.net"
  },
  {
   "text": "Un poulet fermier (beldi) demande plus de cuisson qu'un poulet d'élevage : fie-toi à la tendreté au toucher, pas seulement à la minuterie.",
   "source": "Taste of Maroc (Christine Benlafquih ; Nada Kiffa)"
  },
  {
   "text": "Au tajine en terre : diffuseur obligatoire si tu ne cuisines pas au gaz, feu moyen jusqu'au frémissement (ça peut prendre 15 min ou plus), puis feu moyen-doux. Il faut moins d'eau qu'en cocotte et nettement plus de temps.",
   "source": "Taste of Maroc (Christine Benlafquih ; Nada Kiffa)"
  },
  {
   "text": "Au tajine, si la sauce reste trop liquide en fin de cuisson, verse-la dans une petite casserole pour la réduire à part, puis remets-la dans le tajine.",
   "source": "Taste of Maroc (Christine Benlafquih)"
  }
 ],
 "mistakes": [
  "Saler comme d'habitude dès le départ : le citron confit et les olives salent déjà beaucoup la sauce.",
  "Diminuer l'huile pour alléger : la sauce aux oignons n'épaissit pas et ne devient pas soyeuse.",
  "Laisser attacher le fond : surveille la cocotte pendant le mijotage et la réduction, remue et ajoute un peu d'eau si ça accroche.",
  "Réduire la sauce complètement à sec : il doit rester un peu de liquide.",
  "Remplacer le citron confit par du citron frais : on perd le goût traditionnel.",
  "Mettre des olives en boîte sans les blanchir : la sauce devient trop salée.",
  "Forcer sur l'ail : il doit rester en arrière-plan.",
  "Poser un tajine en terre directement sur une plaque électrique ou vitrocéramique, sans diffuseur.",
  "Sortir trop tôt un poulet beldi : il lui faut plus de cuisson qu'un poulet d'élevage."
 ],
 "serving": "Bien chaud, sur un plat ou directement dans le tajine posé au centre de la table : la sauce au fond, le poulet dessus, nappé de sauce aux oignons et décoré d'olives et de lanières de citron confit. Au Maroc, les tajines se mangent traditionnellement à la main, avec des morceaux de pain marocain pour attraper le poulet et la sauce ; il peut aussi s'accompagner de riz ou de couscous, et certains le servent avec des frites posées dessus ou autour.",
 "variants": [
  "Daghmira plus épaisse (version de fête) : fais cuire le poulet avec un seul oignon, retire-le une fois cuit, puis fais fondre les deux autres oignons hachés dans la sauce jusqu'à obtenir une pâte soyeuse qui se sépare de l'huile (Taste of Maroc).",
  "Aux foies de volaille : blanchis les foies 10 à 15 min, puis fais-les cuire dans la sauce pendant qu'elle réduit ; laisse-les entiers ou écrase-les dans la sauce pour une texture plus riche (Taste of Maroc ; My Moroccan Food).",
  "Plus citronnée : ajoute la pulpe finement hachée d'un demi-citron confit avec les oignons (Taste of Maroc) ; Choumicha met un demi-citron confit en petits dés dans la marinade. La mère de Nargisse Benkabbou trouve que la pulpe rend le plat trop acide.",
  "Poulet entier (Choumicha, « Poulet M'Qalli aux olives rouges ») : poulet fermier entier frotté jusque sous la peau d'une marinade d'oignon, ail, coriandre, persil, citron confit, jus de citron, smen, épices et huile, puis bridé et cuit à couvert à feu doux ; les olives rouges vont dans la sauce pendant qu'elle réduit.",
  "Version de Choumicha « Poulet au safran, coriandre et citron confit » : l'oignon émincé revient 5 min dans l'huile à feu doux avant le poulet, la marinade contient de la coriandre sèche en poudre, et des olives vertes concassées (m'slalla) dénoyautées cuisent avec le poulet jusqu'à la fin.",
  "Doré au four : badigeonne le poulet cuit d'un peu d'huile de la sauce et fais-le dorer environ 20 min à 200 °C en le retournant ; un poulet entier peut demander jusqu'à 30 min (Taste of Maroc).",
  "Rôti (Christine Benlafquih, Taste of Maroc) : poulet entier mariné une nuit puis rôti à 160 °C pendant 2 h 30 à 3 h ; la sauce d'oignons émincés cuit à part 1 à 2 h, puis reçoit le jus de cuisson, le citron confit et les olives pendant 5 à 10 min.",
  "Version à deux poulets beldis entiers (Bladi.net) : oignons en lamelles, ail, safran, gingembre, jus de citron et un verre d'eau, à couvert à feu moyen ; l'écorce de citron confit et les olives vertes finissent 5 min à feu doux.",
  "Adaptations anglophones de Paula Wolfert (Sunset, Zarela) : oignon râpé, paprika et cumin dans la marinade, bouillon de volaille, cuisson plus courte ou au four ; non retenues car absentes des sources marocaines consultées."
 ],
 "sources": [
  {
   "name": "Choumicha (Choumicha Chafay) – Poulet au safran, coriandre et citron confit (copie archivée du 13/12/2024)",
   "url": "https://web.archive.org/web/20241213050523/https://www.choumicha.ma/recette/123-poulet-au-safran-coriandre-et-citron-confit.html",
   "used_for": "Proportions pour un poulet de 1,5 kg (gingembre, curcuma, safran, sel, smen, jus de citron, olives 150 g), marinade de 2 h, mélange huile d'olive et huile de table, écorce de citron confit en fines lanières, temps de préparation et de cuisson."
  },
  {
   "name": "Choumicha (Choumicha Chafay) – Poulet M'Qalli aux olives rouges (copie archivée du 14/10/2024)",
   "url": "https://web.archive.org/web/20241014124518/https://www.choumicha.ma/recette/691-poulet-mqalli-aux-olives-rouges.html",
   "used_for": "Version m'qalli : poulet fermier, 4 c. à s. de coriandre et persil, marinade jusque sous la peau, cuisson à couvert à feu doux, poulet retiré puis sauce réduite avec les olives, service décoré d'olives et de lanières de citron confit."
  },
  {
   "name": "Choumicha – الدجاج المقلي بالزيتون الأحمر, version arabe (copie archivée du 21/01/2021)",
   "url": "https://web.archive.org/web/20210121195431/https://choumicha.ma/ar/recette/692-%D8%A7%D9%84%D8%AF%D8%AC%D8%A7%D8%AC-%D9%85%D9%82%D9%84%D9%8A-%D8%A8%D8%A7%D9%84%D8%B2%D9%8A%D8%AA%D9%88%D9%86-%D9%84%D8%A3%D8%AD%D9%85%D8%B1.html",
   "used_for": "Graphie arabe « دجاج مقلي » et « الحامض »."
  },
  {
   "name": "Taste of Maroc – Nada Kiffa, Classic Moroccan Chicken with Preserved Lemon, Olives, and Daghmira (Onion Sauce)",
   "url": "https://tasteofmaroc.com/moroccan-chicken-with-preserved-lemon-olives-daghmira/",
   "used_for": "Recette de référence (4 personnes) : infusion du safran, marinade, départ à cru, quantités d'huile, d'eau et d'oignons, réduction en daghmira, doré final qui donne son nom au m'qalli, olives et citron confit, cuisson possible au tajine, service."
  },
  {
   "name": "Taste of Maroc – Nada Kiffa, Moroccan M'qualli of Chicken or Quails with Pears",
   "url": "https://tasteofmaroc.com/moroccan-chicken-with-pears/",
   "used_for": "Méthode m'qalli en cocotte ou au tajine, moins d'eau au tajine, ne pas réduire l'huile, réduction des oignons en 20 min environ, marinade au frais, repas mangé à la main avec du pain."
  },
  {
   "name": "Taste of Maroc – Nada Kiffa, Cooking Styles and Sauces in Moroccan Cuisine",
   "url": "https://tasteofmaroc.com/cooking-styles-sauces-moroccan-cuisine/",
   "used_for": "Définition du m'qalli : safran et gingembre, sauce jaune, mélange d'huiles, touche de smen."
  },
  {
   "name": "Taste of Maroc – Nada Kiffa, Cleaning and Brining Chicken the Moroccan Way",
   "url": "https://tasteofmaroc.com/cleaning-brining-chicken-moroccan-way/",
   "used_for": "Nettoyage et saumure du poulet, poulet beldi ou roumi, hygiène du plan de travail."
  },
  {
   "name": "Taste of Maroc – Christine Benlafquih, Moroccan Roasted Chicken with Preserved Lemon, Olives and Onion Sauce",
   "url": "https://tasteofmaroc.com/roast-chicken-with-preserved-lemon-and-olives/",
   "used_for": "Oignons réduits jusqu'à se séparer de l'huile, sel avant le citron et les olives, citron confit indispensable, retrait du citron si trop citronné, poulet fermier plus long à cuire, variante rôtie."
  },
  {
   "name": "Taste of Maroc – Christine Benlafquih, Moroccan Lamb or Beef Tagine with Cabbage",
   "url": "https://tasteofmaroc.com/moroccan-cabbage-tagine/",
   "used_for": "Tajine en terre : diffuseur hors gaz, feu moyen puis moyen-doux, frémissement en 15 min ou plus, cuisson bien plus longue qu'en cocotte."
  },
  {
   "name": "Taste of Maroc – Christine Benlafquih, Classic Moroccan Fish Tagine with Chermoula and Vegetables",
   "url": "https://tasteofmaroc.com/moroccan-fish-tagine-with-chermoula-and-vegetables/",
   "used_for": "Tajine en terre : diffuseur hors gaz, réduction de l'excès de sauce dans une petite casserole."
  },
  {
   "name": "My Moroccan Food – Nargisse Benkabbou, Chicken, Preserved Lemon and Olives Tagine – Chicken Mkalli",
   "url": "https://www.mymoroccanfood.com/home/chicken-preserved-lemon-and-olives-tagine-chicken-mkalli",
   "used_for": "Durées (mijotage 50 min, réduction 20 min, olives et citron 10 min), 240 ml d'eau, 150 g d'olives, garder un peu de liquide, foie écrasé dans la sauce, pulpe jugée trop acide, service avec pain, riz, couscous ou frites."
  },
  {
   "name": "My Moroccan Food – page « About » (Nargisse Benkabbou)",
   "url": "https://www.mymoroccanfood.com/about",
   "used_for": "Profil de l'autrice : élevée à Bruxelles dans une famille marocaine, ancienne cheffe exécutive de L'Mida à Marrakech, autrice de Casablanca: My Moroccan Food."
  },
  {
   "name": "Bladi.net – Poulet M'qalli aux olives et citrons confits",
   "url": "https://www.bladi.net/recettes/poulet-m-qalli-aux-olives-et-citrons-confits.html",
   "used_for": "Recoupement : poulets fermiers beldis, poulet salé et dégorgé 2 h, olives et écorce de citron confit ajoutées en fin de cuisson."
  },
  {
   "name": "Sunset – Paula Wolfert, Chicken with Preserved Meyer Lemon and Olives (adapté de The Food of Morocco)",
   "url": "https://www.sunset.com/recipe/chicken-preserved-meyer-lemon-olives",
   "used_for": "Comparaison anglophone : oignon râpé, paprika, cumin, bouillon, cuisson au four (non retenu)."
  },
  {
   "name": "Zarela – Chicken Tagine with Preserved Lemons and Green Olives (adapté de Paula Wolfert, Couscous and Other Good Food from Morocco)",
   "url": "https://zarela.com/recipes/chicken-tagine-with-preserved-lemons-and-green-olives/",
   "used_for": "Comparaison anglophone : oignon râpé, safran grillé, bouillon (non retenu) ; rinçage des olives."
  },
  {
   "name": "Sayidaty – وصفات مغربية بلمسات ناعمة من قلب العاصمة المغربية الرباط",
   "url": "https://www.sayidaty.net/node/1750921",
   "used_for": "Graphie arabe « ليمون مرقد » (citron confit) dans une recette de Rabat."
  },
  {
   "name": "Royal Mansour Marrakech, « Chicken tajine with preserved lemons by chef Karim Benbaba », 5 mai 2020",
   "url": "https://royalmansour.com/en/blog/chicken-tajine-with-preserved-lemons-by-chef-karim-benbaba",
   "used_for": "Contre-vérification : Marinade au jus de citron frais (3 cl), safran, curcuma, gingembre, 2 gousses d'ail et herbes, 4 h au frais ; oignon cuit avec la marinade et un verre d'eau, puis poulet 1 h à couvert à feu doux ; poulet retiré, sauce réduite jusqu'à être sirupeuse ; olives vertes et écorce de citron confit en julienne ajoutées à la fin ; servi chaud."
  },
  {
   "name": "Yalalla (site féminin marocain, « عالم المرأة بعيون مغربية »), « الدجاج مدغمر ومحمر على طريقة الافراح بعصير الحامض و الهريسة »",
   "url": "https://yalalla.com/%D8%A7%D9%84%D8%AF%D8%AC%D8%A7%D8%AC-%D9%85%D8%AF%D8%BA%D9%85%D8%B1-%D9%88%D9%85%D8%AD%D9%85%D8%B1-%D8%B9%D9%84%D9%89-%D8%B7%D8%B1%D9%8A%D9%82%D8%A9-%D8%A7%D9%84%D8%A7%D9%81%D8%B1%D8%A7%D8%AD-%D8%A8/",
   "used_for": "Contre-vérification : Poulet mariné la veille au frais (jus de citron, citron confit, safran, ail, coriandre et persil), cuit avec beaucoup d'oignons, gingembre et curcuma ; sauce épaissie à feu doux ; servi avec olives et citron confit. Nomme le citron confit « حامضة مصيرة », autre nom marocain à côté de « مرقد »."
  },
  {
   "name": "Morocco World News, Layla Dahamou, « Moroccan Cuisine: How to Make Preserved Lemons », 2013",
   "url": "https://www.moroccoworldnews.com/2013/01/147056/moroccan-cuisine-how-to-make-preserved-lemons/",
   "used_for": "Contre-vérification : « Known as Lhamd Marakad or Mssiyar » : la graphie « hamd marqad » du champ darija est plausible."
  },
  {
   "name": "Santé Canada, « Conseils sur la salubrité de la volaille »",
   "url": "https://www.canada.ca/fr/sante-canada/services/salubrite-viandes-volailles-poissons-et-fruits-mer/conseils-salubrite-volaille.html",
   "used_for": "Contre-vérification : « Ne rincez jamais la volaille avant la cuisson, car les bactéries peuvent se propager » partout où l'eau éclabousse ; 74 °C à cœur pour les morceaux."
  }
 ],
 "discrepancies": [
  "Coupe des oignons : hachés finement (Taste of Maroc, My Moroccan Food), émincés (Choumicha), en lamelles (Bladi), râpés (adaptations de Paula Wolfert). Retenu : hachés finement, la forme la plus citée par les sources marocaines pour une sauce qui fond.",
  "Quantité d'oignons pour un poulet : 1 oignon ou 80 g (Choumicha), 3 oignons moyens (Taste of Maroc), 4 gros oignons d'environ 800 g (My Moroccan Food). Retenu : 3 oignons moyens, car la sauce qui fond (daghmira) demande beaucoup d'oignon.",
  "Ordre de cuisson : départ à cru avec un fond d'eau, puis huile et eau chaude (Taste of Maroc) ; tout ensemble avec l'huile dans la marinade (Choumicha, M'Qalli) ; tout ensemble sans matière grasse indiquée (Bladi) ; oignon d'abord revenu dans l'huile (Choumicha, poulet au safran ; My Moroccan Food). Retenu : le départ à cru de Taste of Maroc ; Choumicha (M'Qalli) et Bladi mettent eux aussi tout dans la marmite dès le départ, sans faire revenir l'oignon.",
  "Citron confit : écorce seule (Choumicha poulet au safran, Bladi, My Moroccan Food qui jette la pulpe), pulpe dans la sauce et écorce en décor (Taste of Maroc), citron en dés dans la marinade (Choumicha, M'Qalli). Retenu : écorce en lanières, pulpe en variante. Quantité : de ¼ de citron (Choumicha) à 2 citrons (My Moroccan Food) ; retenu 1 citron, comme Taste of Maroc et Bladi (1 par poulet).",
  "Olives : vertes (Choumicha poulet au safran, Bladi), rouges ou violettes (Choumicha M'Qalli, My Moroccan Food), au choix (Taste of Maroc). Moment : en fin de cuisson (Taste of Maroc, My Moroccan Food, Bladi, Choumicha M'Qalli) ou dès la mi-cuisson (Choumicha poulet au safran). Retenu : les 10 dernières minutes. Quantité : 100 à 150 g selon les sources ; retenu 150 g (Choumicha, My Moroccan Food).",
  "Huile : 8 cl (Choumicha), ¼ de tasse américaine soit environ 59 ml (Taste of Maroc), 2 c. à s. (My Moroccan Food). Retenu : 60 ml, en mélange huile d'olive et huile neutre comme chez Choumicha et Taste of Maroc.",
  "Eau : 15 cl (Choumicha), 240 ml (My Moroccan Food), un verre (Bladi), de quoi couvrir les deux tiers à trois quarts du poulet (Taste of Maroc). Retenu : 240 ml, à compléter jusqu'aux deux tiers du poulet si besoin.",
  "Marinade : 2 h (Choumicha), au moins 1 h ou une nuit (Taste of Maroc), aucune (My Moroccan Food). Retenu : 2 h au frais.",
  "Jus de citron frais : dans la marinade (Choumicha), dans la cuisson (Bladi), en option dans la sauce (Taste of Maroc), absent (My Moroccan Food). Retenu : 2 c. à s. dans la marinade (Choumicha).",
  "Herbes : 4 c. à s. de coriandre et persil (Choumicha M'Qalli ; option chez Taste of Maroc), 1 c. à s. (recette de base de Taste of Maroc), gros bouquet de coriandre retiré après cuisson (My Moroccan Food), aucune (Bladi). Retenu : 4 c. à s. hachées.",
  "Épices : le curcuma est présent partout sauf chez Bladi ; le smen seulement chez Choumicha et Taste of Maroc ; le poivre chez Taste of Maroc et My Moroccan Food ; la coriandre sèche en poudre seulement chez Choumicha (poulet au safran). Taste of Maroc met 2 c. à c. de gingembre et 2 de curcuma (moitié dans la marinade, moitié dans la sauce) ; retenu 1 c. à c. de chaque, comme Choumicha et My Moroccan Food.",
  "Safran : infusé 10 min dans l'eau chaude (Taste of Maroc, Nada Kiffa), séché puis émietté (Taste of Maroc, Christine Benlafquih), grillé puis moulu (Zarela d'après Paula Wolfert), ajouté tel quel (Choumicha). Retenu : l'infusion.",
  "Poulet en morceaux (Choumicha poulet au safran, Taste of Maroc, My Moroccan Food) ou entier (Choumicha M'Qalli, Bladi). Retenu : en morceaux.",
  "Finition : Taste of Maroc fait dorer le poulet cuit dans l'huile séparée de la sauce (ou au four) ; My Moroccan Food le réchauffe simplement dans la sauce ; Choumicha et Bladi le nappent de sauce. Retenu : réchauffer le poulet dans la sauce en le retournant dans l'huile jusqu'à ce qu'il dore, ce qui concilie ces gestes.",
  "Temps de cuisson : 45 min (Choumicha poulet au safran), 1 h (Choumicha M'Qalli), 1 h 15 (Taste of Maroc), environ 1 h 40 à 1 h 45 en additionnant les étapes de My Moroccan Food. Retenu : 95 min en cocotte, somme des étapes chronométrées (15 + 50 + 20 + 10 min), plus le temps de dorer le poulet, que les sources ne chiffrent pas.",
  "Préparation : 15 min (Taste of Maroc), 25 min d'après Choumicha (1 h 10 au total moins 45 min de cuisson). Retenu : 25 min.",
  "Unités : Taste of Maroc donne des mesures américaines, converties par calcul : 3,3 lb ≈ 1,5 kg ; ¼ de tasse ≈ 59 ml, arrondi à 60 ml.",
  "Adaptations de Paula Wolfert (Sunset, Zarela) : oignon râpé, paprika, cumin, bouillon de volaille, cuisson courte ou au four. Non retenues, car absentes des sources marocaines.",
  "Contre-vérifiée le 6 novembre 2026 par une seconde recherche indépendante : verdict « conforme avec corrections », 2 correction(s) appliquée(s)."
 ],
 "unverified": [
  "Le site de Choumicha (choumicha.ma) répondait par une erreur HTTP 525 le 06/11/2026 : ses recettes ont été lues sur des copies archivées (Wayback Machine, 2021 et 2024). Leur contenu actuel n'a pas pu être revérifié.",
  "Graphie arabe complète « دجاج مقلي بالحامض المرقد والزيتون » : l'expression entière n'a été trouvée dans aucune source. « دجاج مقلي » et « الحامض » viennent de Choumicha, « ليمون مرقد » de Sayidaty (Rabat) ; Choumicha écrit plutôt « الحامض المصبر » pour le citron confit.",
  "Durée précise de cuisson au tajine en terre pour ce plat : aucune source ne la donne ; Taste of Maroc dit seulement qu'un tajine en terre demande nettement plus de temps qu'une cocotte.",
  "Temps supplémentaire précis pour un poulet beldi : aucune source ne le chiffre.",
  "Durée du doré final du poulet : aucune source ne la chiffre ; elle n'est pas comptée dans les 95 min de cuisson.",
  "Origine spécifiquement fassie du plat : non confirmée. Taste of Maroc le présente comme un plat national ; son autrice Nada Kiffa a des racines fassies.",
  "Poids des « oignons moyens » de Taste of Maroc : non précisé (My Moroccan Food utilise 4 gros oignons, environ 800 g).",
  "Équivalence entre « 8 pistils » (Choumicha) et « une pincée généreuse » de safran (Taste of Maroc) : non confirmée.",
  "Les 240 ml d'eau (My Moroccan Food) peuvent ne pas suffire à atteindre les deux tiers du poulet selon la taille de la cocotte : seul le repère de hauteur de Taste of Maroc est donné.",
  "Recette de Fatéma Hal : introuvable en ligne, non utilisée.",
  "Textes originaux des livres de Paula Wolfert : non consultés ; seules deux adaptations publiées (Sunset, Zarela) ont été lues.",
  "Recette de Christine Benlafquih sur The Spruce Eats : site inaccessible à l'outil de recherche, non consultée.",
  "Amour de cuisine : non consulté."
 ],
 "cuisine": "Marocaine",
 "img": "img/tajine-poulet.jpg",
 "photo": {
  "author": "Foodista",
  "license": "CC BY 2.0",
  "license_url": "https://creativecommons.org/licenses/by/2.0",
  "page": "https://commons.wikimedia.org/wiki/File:Moroccan_food-Chicken_tagine_with_preserved_lemons_and_olives-01.jpg",
  "modified": "réduite"
 }
});
