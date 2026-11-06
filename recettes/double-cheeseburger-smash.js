/* Recette : Double cheeseburger smash (version halal). Format décrit dans README.md. */
window.RECETTES = window.RECETTES || [];
window.RECETTES.push({
  slug: "double-cheeseburger-smash",
  cuisine: "Américaine",
  title: "Double cheeseburger smash",
  darija: "", arabic: "",
  tagline: "Des boules de bœuf écrasées très fines dans une poêle brûlante : une croûte bien grillée, du cheddar fondu, un pain moelleux. La vraie recette américaine, en version halal.",
  rayon: "D'ailleurs",
  category: "Burger", occasion: "Repas rapide, entre amis", region: "États-Unis",
  servings: 2, servings_label: "burgers",
  time: { prep: 20, cook: 15, rest: 0 }, time_note: "Temps estimés à partir des étapes.",
  difficulty: "Facile",
  img: "img/burger.jpg",
  photo: { author: "JIP", license: "CC BY-SA 4.0", license_url: "https://creativecommons.org/licenses/by-sa/4.0", page: "https://commons.wikimedia.org/wiki/File:Cali_Smash_Burger.jpg", modified: "recadrée et réduite" },
  equipment: [
    "Une poêle épaisse en fonte ou en inox, ou une plancha. Pas d'antiadhésif : il n'est pas fait pour le feu vif.",
    "Une spatule en métal, large et rigide.",
    "Du papier cuisson, en carrés d'environ 20 cm.",
    "Une balance de cuisine.",
    "Une planche et un couteau bien aiguisé.",
    "Un bol, une cuillère à soupe et une cuillère à café.",
    "Du papier absorbant."
  ],
  notes: [
    { title: "La règle d'or", text: "Du bœuf, du sel, du poivre. Pas d'œuf, pas de chapelure, pas d'oignon ni d'épices dans la viande : sinon c'est une kefta, pas un burger." },
    { title: "Chez le boucher (halal)", items: [
      "Demande du paleron ou de la basse côte, hachés devant toi le jour même.",
      "Nature : sans oignon, sans persil, sans épices.",
      "Environ 20 % de gras. Si le morceau est trop maigre, demande-lui d'ajouter du gras de bœuf (chehma) : c'est ce gras qui rend le burger juteux.",
      "Pas de bacon : le cheeseburger classique n'en a pas besoin.",
      "Si tu veux être strict : fromage avec mention halal ou « coagulant microbien » (pas de présure animale), et pain sans alcool dans la liste des ingrédients."
    ] },
    { title: "Le montage, de bas en haut", items: [
      "Pain du bas, face grillée, avec 1 c. à soupe de sauce.",
      "1 feuille de salade pliée.",
      "1 tranche de tomate de 5 mm.",
      "Le premier steak avec son cheddar, puis le deuxième.",
      "2 rondelles fines d'oignon.",
      "4 lamelles de cornichon.",
      "Pain du haut, face grillée, avec 1 c. à soupe de sauce."
    ] }
  ],
  ingredients: [
    { group: "Viande", items: [
      { id: "boeuf", canon: "boeuf-hache", q: 320, u: "g", name: "de bœuf haché, environ 20 % de gras", note: "2 boules de 80 g par burger" } ] },
    { group: "Pain et fromage", items: [
      { id: "pains", canon: "pain-burger", q: 2, u: "", name: "pain à burger moelleux au sésame (ou brioché)", pl: "pains à burger moelleux au sésame (ou briochés)" },
      { id: "cheddar", canon: "cheddar", q: 4, u: "", name: "tranche de cheddar spécial burger (celui qui fond bien)", pl: "tranches de cheddar spécial burger (celui qui fond bien)" } ] },
    { group: "Légumes", items: [
      { id: "oignon", canon: "oignon", q: 1, u: "", fixed: true, name: "oignon blanc", note: "2 rondelles fines par burger" },
      { id: "salade", canon: "laitue", q: 1, u: "", fixed: true, name: "laitue iceberg, ou romaine", note: "1 feuille par burger" },
      { id: "tomate", canon: "tomate", q: 1, u: "", round: "up", name: "tomate ronde, mûre mais bien ferme", pl: "tomates rondes, mûres mais bien fermes", note: "1 tranche par burger, 2 bonnes tranches par tomate" },
      { id: "cornichons", canon: "cornichons", q: 1, u: "", fixed: true, name: "bocal de cornichons", note: "pour la sauce et la garniture" } ] },
    { group: "Sauce", items: [
      { id: "mayo", canon: "mayonnaise", q: 2, u: "c. à s.", name: "de mayonnaise" },
      { id: "ketchup", canon: "ketchup", q: 1, u: "c. à s.", name: "de ketchup" },
      { id: "moutarde", canon: "moutarde", q: 0.5, u: "c. à c.", name: "de moutarde" },
      { id: "corn-haches", canon: "cornichons", q: 1, u: "c. à s.", name: "de cornichons hachés très fin" },
      { id: "paprika", canon: "paprika", q: 0.25, u: "c. à c.", name: "de paprika doux" } ] },
    { group: "Le reste", items: [
      { id: "beurre", canon: "beurre", q: 10, u: "g", name: "de beurre, pour les pains" },
      { id: "huile", canon: "huile", q: null, u: "", name: "Un filet d'huile neutre (tournesol)" },
      { id: "sel-poivre", canon: "poivre", q: null, u: "", name: "Sel fin et poivre noir du moulin" } ] }
  ],
  steps: [
    { phase: "Préparation", title: "La sauce", text: [
      "Hache des cornichons très fin, en dés de 2 à 3 mm, jusqu'à en avoir {{corn-haches}}.",
      "Mets dans un bol {{mayo}} de mayonnaise, {{ketchup}} de ketchup, {{moutarde}} de moutarde, les cornichons hachés et {{paprika}} de paprika doux.",
      "Mélange jusqu'à ce que la couleur soit uniforme, sans traces blanches ni rouges.",
      "Couvre et mets au frigo : elle repose pendant que tu prépares le reste."],
      tip: { l: "Bon à savoir", t: "Toutes les cuillères sont rases. Version express : ketchup et moutarde, le duo classique." } },
    { phase: "Préparation", title: "L'oignon", text: [
      "Épluche l'oignon blanc et coupe 2 rondelles très fines (2 mm) par burger, au milieu de l'oignon, là où elles sont les plus larges.",
      "Sépare chaque rondelle en anneaux.",
      "Trop fort pour toi ? Laisse les anneaux 10 min dans un bol d'eau froide, puis sèche-les bien dans du papier absorbant.",
      "Garde le reste de l'oignon pour une autre recette."],
      timer: { min: 10, label: "Trempage de l'oignon", done: "Égoutte l'oignon et sèche-le bien." } },
    { phase: "Préparation", title: "La salade", text: [
      "Détache 1 feuille d'iceberg (ou de romaine) par burger.",
      "Lave-les, puis sèche-les à fond avec du papier absorbant : une salade mouillée ramollit le pain.",
      "Plie chaque feuille à la taille du pain et garde-les au frais."] },
    { phase: "Préparation", title: "La tomate", text: [
      "Prends {{tomate:full}}.",
      "Coupe 1 tranche d'environ 5 mm par burger, au milieu de la tomate, là où les tranches sont les plus larges (2 bonnes tranches par tomate).",
      "Garde le reste pour une salade."] },
    { phase: "Préparation", title: "Les cornichons", text: [
      "Coupe 4 fines lamelles dans la longueur par burger, soit 1 à 2 cornichons selon leur taille.",
      "Tu peux aussi les couper en rondelles.",
      "Pose-les sur du papier absorbant."] },
    { phase: "Préparation", title: "Les boules de viande", text: [
      "Pèse des boules de 80 g, 2 par burger, soit {{boeuf}} en tout. Sans balance, coupe la viande en parts égales.",
      "Roule-les sans tasser, juste assez pour qu'elles tiennent.",
      "Pas de sel, pas d'épices.",
      "Pose-les sur une assiette et garde-les au frigo jusqu'au moment de cuire.",
      "Lave-toi les mains."] },
    { phase: "Préparation", title: "Le poste de cuisson", text: [
      "À côté de la poêle : le sel fin, le poivre, la spatule et des carrés de papier cuisson.",
      "Sors les tranches de cheddar de leur emballage ({{cheddar}}).",
      "Ouvre les pains en deux.",
      "Garde à portée de main la sauce, la salade, la tomate, l'oignon et les cornichons."],
      tip: { l: "Pourquoi ?", t: "Une fournée ne dure que 3 à 4 minutes : tout doit être prêt avant d'allumer le feu." } },
    { phase: "Cuisson", title: "Toaster les pains", dur: "1 min", text: [
      "Poêle à feu moyen.",
      "Étale {{beurre}} de beurre sur les faces coupées (5 g par pain).",
      "Pose les moitiés face coupée contre la poêle pendant environ 1 min, jusqu'à ce qu'elles soient dorées.",
      "Réserve-les face grillée vers le haut.",
      "Essuie la poêle avec du papier absorbant bien plié, car elle est chaude : à feu vif, le beurre brûlerait."],
      timer: { min: 1, label: "Pains", done: "Faces dorées ? Retire les pains." } },
    { phase: "Cuisson", title: "Garnir les pains", text: [
      "Sur chaque pain du bas : 1 c. à soupe de sauce étalée jusqu'aux bords, 1 feuille de salade, puis 1 tranche de tomate.",
      "Sur chaque pain du haut : 1 c. à soupe de sauce.",
      "Les steaks iront directement dessus en sortant de la poêle."],
      tip: { l: "Bon à savoir", t: "Il restera un petit fond de sauce, c'est normal." } },
    { phase: "Cuisson", title: "Chauffer la poêle", dur: "3 à 4 min", text: [
      "Feu vif, poêle vide, pendant 3 à 4 min.",
      "Allume la hotte ou ouvre la fenêtre : ça va fumer.",
      "Juste avant de poser la viande, ajoute un filet d'huile neutre.",
      "C'est prêt quand l'huile ondule et fume légèrement."],
      timer: { min: 4, label: "Préchauffage", done: "La poêle est très chaude : ajoute l'huile." },
      tip: { l: "Attention", t: "Pas de poêle antiadhésive : elle n'est pas faite pour le feu vif." } },
    { phase: "Cuisson", title: "Écraser", text: [
      "Sors du frigo les boules que tu vas cuire.",
      "Pose 1 ou 2 boules dans la poêle, bien espacées. Une fois écrasé, chaque steak fait 13 à 14 cm de large : ils ne doivent pas se toucher. Sur une plancha, tu peux en faire plus.",
      "Pose un carré de papier cuisson sur la boule et écrase fort avec la spatule, tout de suite. Appuie avec l'autre main sur la spatule, ou avec le fond d'une casserole.",
      "Vise environ 0,5 cm d'épaisseur, un peu plus large que le pain : le steak rétrécit à la cuisson.",
      "Retire le papier. Ensuite, on n'appuie plus jamais."],
      tip: { l: "Pourquoi une seule fois ?", t: "Si tu appuies plus tard, le jus sort du steak." } },
    { phase: "Cuisson", title: "Saler et poivrer", text: [
      "Tout de suite après avoir écrasé : une bonne pincée de sel fin, lâchée d'une vingtaine de centimètres de haut pour couvrir jusqu'aux bords.",
      "Puis 1 ou 2 tours de moulin à poivre.",
      "Une seule face suffit : le steak est très fin.",
      "Si tu cuis en plusieurs fournées, assaisonne chaque steak au moment où tu l'écrases."],
      tip: { l: "Pourquoi pas avant ?", t: "Le sel mélangé à la viande crue dissout certaines protéines, qui se collent entre elles : le steak devient serré et élastique comme une saucisse." } },
    { phase: "Cuisson", title: "Cuire la première face", dur: "2 min", text: [
      "Ne touche à rien pendant environ 2 min.",
      "C'est prêt à retourner quand les bords sont brun foncé et croustillants, et que le dessus devient gris sur le pourtour."],
      timer: { min: 2, label: "Première face", done: "Bords bien bruns ? Retourne les steaks." } },
    { phase: "Cuisson", title: "Retourner et ajouter le cheddar", dur: "30 s à 1 min", text: [
      "Glisse la spatule sous le steak en raclant fort le fond de la poêle : la croûte doit rester collée au steak.",
      "Retourne-le.",
      "Tu l'aimes plus salé ? Mets une petite pincée de sel sur cette face.",
      "Pose tout de suite 1 tranche de cheddar sur chaque steak.",
      "Laisse 30 s à 1 min, jusqu'à ce que le fromage fonde. À cette épaisseur, le steak est cuit à cœur."],
      timer: { min: 0.75, label: "Fromage", done: "Le fromage a fondu ? Sors les steaks." } },
    { phase: "Service", title: "Monter le burger", text: [
      "Pose le premier steak-fromage sur un pain du bas garni, puis le deuxième par-dessus.",
      "Ajoute 2 rondelles d'oignon, puis 4 lamelles de cornichon.",
      "Ferme avec le pain du haut, face sauce vers le bas.",
      "Mange tout de suite."] },
    { phase: "Service", title: "Fournée suivante", text: [
      "S'il reste des boules : racle la poêle avec la spatule pour enlever les restes collés, sinon ils brûlent.",
      "Remets un filet d'huile et attends qu'elle fume légèrement.",
      "Reprends à l'étape « Écraser », jusqu'à ce que tous les steaks soient cuits."], jump: 10 }
  ],
  secrets: [
    { text: "On n'écrase qu'une fois, tout de suite après avoir posé la boule : après, le jus s'en va." },
    { text: "On sale seulement le dessus, juste après avoir écrasé, jamais la viande crue à l'avance." },
    { text: "Une poêle en fonte très chaude, sans antiadhésif : c'est la croûte qui fait le goût." },
    { text: "On racle fort sous le steak au moment de le retourner, pour garder toute la croûte." },
    { text: "Le gras du bœuf (environ 20 %) fait le burger juteux : demande-le à ton boucher." }
  ],
  mistakes: [
    "Saler la viande à l'avance : elle devient élastique comme une saucisse.",
    "Appuyer encore sur le steak : on n'écrase qu'une fois, au début, sinon le jus s'en va.",
    "Mettre trop de steaks à la fois : la poêle refroidit et la viande bout au lieu de griller.",
    "Une poêle pas assez chaude : pas de croûte.",
    "Une salade mal séchée : le pain devient mou.",
    "Attendre avant de manger : un smash burger se mange tout de suite."
  ],
  serving: "Tout de suite, dès que le burger est monté.",
  variants: [],
  sources: [],
  discrepancies: [],
  unverified: []
});
