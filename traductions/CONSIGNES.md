# Consignes : traduire une recette de « Recettes de la maison »

L'application (dossier /Users/anchenni/claude/recettes-app) est un carnet de recettes pour téléphone, utilisé par une famille marocaine pendant qu'elle cuisine. On peut maintenant la lire en français, en anglais (en), en arabe (ar) et en russe (ru). Le français est la langue source. Une erreur de traduction sur une quantité, une température, une durée ou un avertissement de sécurité peut gâcher un plat ou blesser quelqu'un : la fidélité passe avant tout.

## Ce que tu reçois
- `traductions/fr/<slug>.json` :
  - « textes » : {clé: texte français}, tous les textes à traduire ;
  - « _ingredients » : pour chaque ingrédient (id), sa quantité q (nombre, ou null), son unité u et son nom français.
- La recette complète, pour le contexte : `recettes/<slug>.js`.

Le dossier de vérification (sources, écarts entre sources, points non vérifiés) reste en français : il n'est pas dans « textes ».

## Ce que tu écris
1. Un fichier JSON pur dans ton dossier temporaire : {clé: traduction}. Il a exactement les clés de « textes », plus les formes du pluriel des ingrédients comptés (voir plus bas).
2. Contrôle-le : `python3 -I outils/traduction.py valider <langue> <fichier> <slug>`, lancé depuis /Users/anchenni/claude/recettes-app. Corrige toutes les ERREURS. Lis les avertissements et corrige ceux qui sont de vraies fautes.
3. Enregistre-le : `python3 -I outils/traduction.py importer <langue> <fichier> <slug>`. Il écrit `traductions/<langue>/<slug>.json`. Ne modifie aucun autre fichier de l'application.

## Règles de travail (obligatoires)
- Un seul appel d'outil à la fois. Aucun appel ne doit écrire ni afficher plus d'environ 2 500 caractères : écris chaque traduction en plusieurs fichiers partiels (<slug>.p1.json, <slug>.p2.json…, de 8 à 15 clés chacun), puis assemble-les avec un petit script python3 -I avant de valider. Une écriture plus longue fait planter ton flux.
- Garde un petit fichier de suivi dans ton dossier temporaire, pour reprendre facilement si ton flux est coupé.
- Arabe : 1 et 2 peuvent s'écrire sans chiffre quand la grammaire le demande (« ساعة »، « ساعتان »، « دقيقتان ») ; le contrôle l'accepte. Les autres nombres restent en chiffres.
- Russe : « щепотка » est féminin ; pour une pincée, mets la quantité entre parenthèses (« чёрный перец ({{poivre}}) »).

## Règles communes
1. **Fidélité.** Traduis le sens exact. N'ajoute, n'enlève et ne change aucun fait : quantités, températures, durées, tailles, nombres, noms des sources, avertissements de sécurité et d'allergie. Si tu crois voir une erreur dans le français, ne la corrige pas dans la traduction : signale-la dans ta réponse finale.
2. **Nombres.** Garde chaque nombre tel quel, en chiffres 0-9, y compris en arabe (jamais ٠١٢٣). Ne convertis rien : les °C restent des °C, les grammes des grammes.
3. **Repères `{{id}}` et `{{id:full}}`.** Ne touche jamais à l'id.
   - `{{id}}` affiche la quantité recalculée selon le nombre de personnes, avec son unité : « 250 g », « 2 ст. л. », ou seulement « 3 » pour un ingrédient compté à la pièce.
   - `{{id:full}}` affiche la quantité, puis le nom de l'ingrédient (ta traduction de « name », ou la forme du pluriel qui convient).
   - Garde chaque repère dont l'ingrédient a une quantité chiffrée. Tu peux passer de `{{id}}` à `{{id:full}}`, ou l'inverse, quand la grammaire de ta langue l'exige (voir les règles par langue). Pour un ingrédient sans quantité (q null), le repère affiche seulement son nom : tu peux le remplacer par le mot lui-même si la phrase se lit mieux.
   - Ne mets jamais de quantité chiffrée en dur à la place d'un repère : l'utilisateur choisit le nombre de personnes, dès 1.
4. **Noms propres** (personnes, sites, livres, institutions, marques) : garde-les tels qu'ils sont écrits, en lettres latines (Choumicha, Lalla Moulati, Bladi.net, Chef Simon, London Fire Brigade…).
5. **Plats et ingrédients marocains** : suis le glossaire ci-dessous. Une courte explication entre parenthèses n'est permise que si le glossaire la donne, à la première mention dans la recette.
6. **Titres des recettes** : utilise ceux de la liste plus bas.
7. **Style** : phrases courtes et claires, comme dans un bon livre de cuisine. Le titre d'une étape est à l'impératif. Le texte doit se lire naturellement pour 1 personne comme pour 8.
8. Guillemets : anglais “ ”, russe « », arabe « ». Pas de balise HTML, pas de Markdown.

## Anglais (en)
- Anglais britannique : aubergine, courgette, coriander, chickpeas, minced beef, plain flour, caster sugar, icing sugar, frying pan, hob, tomato purée ; orthographe britannique (colour, flavour).
- Impératif : « Slice the onion ».
- Unités dans le texte : g, kg, ml, l, tbsp, tsp, °C, cm, min, h.
- « name » d'un ingrédient avec unité : le nom seul, sans « of » (« plain flour », « olive oil ») : l'appli affiche « 250 g plain flour ».
- Ingrédient compté à la pièce : « name » au singulier et « pl » au pluriel (« onion » / « onions »). L'appli met le pluriel au-delà de 1.

## Arabe (ar)
- Arabe standard moderne, simple et clair, lisible par une famille marocaine. Pour les plats et ingrédients marocains, le glossaire donne le nom à employer.
- Impératif au masculin singulier, comme dans les recettes arabes : قطّع، أضف، اخلط، اترك.
- Chiffres 0-9. Unités dans le texte : غ، كغ، مل، ل، ملعقة كبيرة، ملعقة صغيرة، سم ; températures : « 180 درجة مئوية » ; durées : « 10 دقائق »، « 15 دقيقة »، « ساعة »، « ساعتان ».
- Ponctuation arabe : « ، » « ؛ » « ؟ ».
- Ingrédient avec unité : « name » = le nom tel qu'il se lit après « quantité unité » : « دقيق »، « زيت الزيتون ». Dans les étapes, préfère « {{farine}} من الدقيق ».
- Ingrédient compté à la pièce : « name » au singulier (بصلة), « pl » au pluriel (بصلات). L'appli emploie « pl » de 3 à 10, et le singulier pour 1, 2 et à partir de 11 (« 2 بصلة »، « 3 بصلات »، « 12 بصلة ») : c'est l'usage courant des recettes arabes. Dans une étape, tu peux écrire « {{oignons:full}} » ou « البصل ({{oignons}}) ».
- Le champ « darija » : écris les noms en darija en lettres arabes (le champ « arabic » de la recette donne souvent la graphie). Si une graphie n'est pas sûre, garde le mot en lettres latines entre parenthèses.

## Russe (ru)
- Russe standard. Impératif de politesse, comme dans les recettes russes : Нарежьте, Добавьте, Перемешайте.
- Unités dans le texte : г, кг, мл, л, ст. л., ч. л., °C, см, мин, ч. Virgule décimale. Typographie russe : « ёлочки », tiret —.
- Ingrédient **avec unité** (g, kg, ml, l, c. à s., c. à c., pincée, botte) : « name » au **génitif**, car l'appli l'affiche toujours après « quantité unité » : « 250 г муки », « 2 ст. л. оливкового масла », « 1 щепотка соли ».
- Ingrédient **compté à la pièce** (q chiffré, sans unité ; marqué « formes » dans « _ingredients ») : trois formes.
  - « name » : nominatif singulier (луковица, яйцо, лимон), pour 1, 21, 31…
  - « pl » : génitif singulier (луковицы, яйца, лимона), pour 2, 3, 4 et les fractions (1½).
  - « pl5 » : génitif pluriel (луковиц, яиц, лимонов), pour 5 à 20.
- Ingrédient **sans quantité** (q null) : « name » au nominatif ; il s'affiche seul (« соль по вкусу »).
- Dans les étapes : `{{id:full}}` convient partout pour un ingrédient avec unité (« Добавьте {{farine:full}} » → « Добавьте 250 г муки »). Pour un ingrédient compté, n'emploie `{{id:full}}` que si le nom est masculin ou neutre, inanimé, et sujet ou complément direct (« Добавьте {{oeufs:full}} » → « Добавьте 3 яйца ») ; sinon, écris le nom au bon cas suivi du nombre : « Нарежьте луковицы ({{oignons}} шт.) ».

## Glossaire (fr → en / ar / ru)
| Français | Anglais | Arabe | Russe |
|---|---|---|---|
| khobz | khobz (Moroccan bread) | خبز الدار | хобз (марокканский хлеб) |
| msemen | msemen | المسمن | мсемен |
| malwi, meloui | malwi | الملوي | мальви |
| harcha | harcha | الحرشة | харша |
| baghrir | baghrir | البغرير | багрир |
| rghayef | rghayef | الرغايف | ргаиф |
| tajine (plat et récipient) | tagine | الطاجين | таджин |
| couscoussier | couscoussier (couscous steamer) | الكسكاس | кускусница |
| couscous | couscous | الكسكس | кускус |
| smen | smen (aged salted butter) | السمن البلدي | смен (выдержанное солёное масло) |
| khlii | khlii (preserved dried meat) | الخليع | хлии (вяленое мясо в жиру) |
| ras el hanout | ras el hanout | رأس الحانوت | рас-эль-ханут |
| warqa | warqa (thin pastry sheets) | الورقة (ورقة البسطيلة) | варка (тончайшие листы теста) |
| feuilles de brick | brick pastry sheets | ورق البريك | листы теста брик |
| jben | jben (fresh cheese) | الجبن الطري | жбен (свежий сыр) |
| chermoula | chermoula | الشرمولة | чермула |
| harissa | harissa | الهريسة | харисса |
| citron confit | preserved lemon | الليمون المخلل (الحامض المصيّر) | солёный лимон |
| eau de fleur d'oranger | orange blossom water | ماء الزهر | вода из цветков апельсина |
| fenugrec | fenugreek | الحلبة | пажитник |
| nigelle | nigella seeds | حبة البركة (السانوج) | чернушка (нигелла) |
| gingembre en poudre | ground ginger | الزنجبيل المطحون (سكينجبير) | молотый имбирь |
| curcuma | turmeric | الكركم (الخرقوم) | куркума |
| cumin | cumin | الكمون | кумин (зира) |
| paprika doux | sweet paprika | الفلفل الأحمر الحلو (التحميرة) | сладкая паприка |
| coriandre fraîche | fresh coriander | الكزبرة | кинза |
| persil plat | flat-leaf parsley | البقدونس | петрушка |
| semoule fine / moyenne (blé dur) | fine / medium semolina | السميد الرقيق / المتوسط | мелкая / средняя семолина (крупка из твёрдой пшеницы) |
| farine | plain flour | الدقيق | пшеничная мука |
| levure boulangère | yeast | خميرة الخبز | дрожжи |
| levure chimique | baking powder | الخميرة الكيميائية | разрыхлитель |
| huile de table, huile neutre | neutral oil (sunflower) | زيت المائدة | растительное масло |
| sucre glace | icing sugar | السكر الناعم (سكر الحلويات) | сахарная пудра |
| thé vert gunpowder | gunpowder green tea | الشاي الأخضر (أتاي) | зелёный чай ганпаудер |
| fèves sèches | dried fava beans | الفول اليابس | сушёные бобы фава |
| pois chiches | chickpeas | الحمص | нут |
| haricots blancs | white beans | الفاصوليا البيضاء (اللوبيا) | белая фасоль |
| concentré de tomate | tomato purée | مركز الطماطم | томатная паста |
| cocotte-minute | pressure cooker | طنجرة الضغط | скороварка |
| feu doux / moyen / vif | low / medium / high heat | نار هادئة / متوسطة / قوية | слабый / средний / сильный огонь |
| c. à s. / c. à c. | tbsp / tsp | ملعقة كبيرة / ملعقة صغيرة | ст. л. / ч. л. |
| pincée / botte | pinch / bunch | رشة / حزمة | щепотка / пучок |
| Aïd al-Adha | Eid al-Adha | عيد الأضحى | Курбан-байрам |
| ftour (rupture du jeûne) | iftar | الفطور | ифтар |
| darija | Darija (Moroccan Arabic) | الدارجة | дарижа (марокканский арабский) |
| Fès / Marrakech / Tanger / Tétouan | Fez / Marrakesh / Tangier / Tetouan | فاس / مراكش / طنجة / تطوان | Фес / Марракеш / Танжер / Тетуан |
| halal | halal | حلال | халяль |
| batbout | batbout | البطبوط | батбут |
| sfenj | sfenj | السفنج | сфендж |
| sellou (sfouf, slilou) | sellou | السلّو | селлу |
| ghriba | ghriba | الغريبة | гриба |
| seffa | seffa | السفة | сеффа |
| mrouzia | mrouzia | المروزية | мрузия |
| briouate | briouat | البريوة (البريوات) | бриуат |
| maakouda | maakouda | المعقودة | маакуда |
| taktouka | taktouka | التكتوكة | тактука |
| meska, mastic | mastic | المسكة الحرة | мастика |
| tahini | tahini | الطحينة | тахини |
| toum | toum (garlic sauce) | الثومية | тум (чесночный соус) |
| kasuri methi | kasuri methi (dried fenugreek leaves) | الحلبة المجففة (كاسوري ميتي) | касури мети (сушёный пажитник) |
| garam masala | garam masala | غرام ماسالا | гарам масала |
| ghee | ghee | السمن الهندي (غي) | гхи |
| cuisson dum (à l'étouffée) | dum (sealed slow cooking) | الطهي بطريقة الدم (على نار هادئة في قدر محكم) | дам (томление в закрытой посуде) |

## Titres des recettes
| slug | en | ar | ru |
|---|---|---|---|
| baghrir | Baghrir, thousand-hole pancakes | البغرير، فطائر الألف ثقب | Багрир, блинчики «тысяча дырочек» |
| bid-maticha | Moroccan eggs in tomato | البيض بالطماطم على الطريقة المغربية | Яйца с помидорами по-мароккански |
| bissara | Bissara, dried fava bean soup | البيصارة، حساء الفول اليابس | Биссара, суп из сушёных бобов |
| cake-marocain | Moroccan milk cake, a teatime meskouta | الكيك المغربي بالحليب، مسكوتة اللمجة | Марокканский кекс на молоке (мескута) |
| chakchouka | Moroccan-style chakchouka | الشكشوكة على الطريقة المغربية | Шакшука по-мароккански |
| couscous-sept-legumes | Seven-vegetable couscous | الكسكس بسبع خضار | Кускус с семью овощами |
| dchicha | Dchicha, barley and tomato soup | الدشيشة، حساء الشعير بالطماطم | Дшиша, ячменный суп с томатами |
| double-cheeseburger-smash | Double smash cheeseburger | دبل تشيز برغر سماش | Двойной смэш-чизбургер |
| escalopes-poulet-panees | Breaded chicken escalopes | إسكالوب الدجاج المقرمش (بانيه) | Куриные эскалопы в панировке |
| frites | Homemade fries | البطاطس المقلية المنزلية | Домашний картофель фри |
| harcha | Harcha, pan-cooked semolina flatbreads | الحرشة، فطائر السميد في المقلاة | Харша, лепёшки из семолины на сковороде |
| harira | Traditional Moroccan harira | الحريرة المغربية التقليدية | Традиционная марокканская харира |
| kefta-poele | Pan-fried kefta | الكفتة في المقلاة | Кефта на сковороде |
| khobz | Khobz, Moroccan homemade bread | خبز الدار المغربي | Хобз, домашний марокканский хлеб |
| lentilles | Moroccan lentils with lamb and vegetables | العدس على الطريقة المغربية باللحم والخضر | Чечевица по-мароккански с бараниной и овощами |
| loubia | Loubia, Moroccan white beans | اللوبيا، الفاصوليا البيضاء على الطريقة المغربية | Лубия, белая фасоль по-мароккански |
| malwi | Malwi (meloui), spiral layered flatbreads | الملوي، فطائر مورّقة ملفوفة | Мальви (мелуи), слоёные лепёшки-спирали |
| maqarouna | Moroccan-style macaroni | المقرونة على الطريقة المغربية | Макароны по-мароккански |
| msemen | Msemen, square layered flatbreads | المسمن، فطائر مورّقة مربعة | Мсемен, квадратные слоёные лепёшки |
| omelette | Rolled omelette with fines herbes | عجة ملفوفة بالأعشاب | Омлет-рулет с травами |
| pastilla-poulet | Chicken and almond pastilla (Fez style) | بسطيلة الدجاج باللوز على الطريقة الفاسية | Пастилья с курицей и миндалём (по-фесски) |
| pates-thon-tomate | Tuna and tomato pasta | معكرونة بالتونة والطماطم | Паста с тунцом и томатами |
| poisson-frit | Moroccan fried fish | السمك المقلي على الطريقة المغربية | Жареная рыба по-мароккански |
| poulet-creme-champignons | Chicken strips with cream and mushrooms | شرائح الدجاج بالقشدة والفطر | Курица со сливками и грибами |
| rfissa-poulet | Chicken rfissa with lentils and fenugreek | الرفيسة بالدجاج والعدس والحلبة | Рфиса с курицей, чечевицей и пажитником |
| rghayef | Rghayef stuffed with onion and khlii | الرغايف المعمّرة بالبصل والخليع | Ргаиф с начинкой из лука и хлии |
| riz-saute-oeufs | Egg fried rice | الأرز المقلي بالبيض | Жареный рис с яйцом |
| salade-marocaine | Moroccan salad | السلطة المغربية | Марокканский салат |
| salade-pois-chiches-thon | Chickpea and tuna salad | سلطة الحمص بالتونة | Салат из нута с тунцом |
| sandwich-poisson | Sardine sandwich with chermoula | سندويتش السردين بالشرمولة | Сэндвич с сардинами и чермулой |
| soupe-lentilles-corail | Turkish red lentil soup | شوربة العدس الأحمر على الطريقة التركية | Турецкий суп из красной чечевицы |
| spaghetti-aglio-olio | Spaghetti aglio, olio e peperoncino | سباغيتي بالثوم وزيت الزيتون والفلفل الحار | Спагетти альо, олио э пеперончино |
| taboule | Lebanese tabbouleh | التبولة اللبنانية | Ливанский табуле |
| tajine-agneau-pruneaux | Lamb tagine with prunes and almonds | طاجين اللحم بالبرقوق واللوز | Таджин из баранины с черносливом и миндалём |
| tajine-kefta-oeufs | Kefta tagine with eggs | طاجين الكفتة بالبيض | Таджин из кефты с яйцами |
| tajine-poisson | Fish tagine with chermoula | طاجين السمك بالشرمولة | Рыбный таджин с чермулой |
| tajine-poulet-citron-olives | Chicken tagine with preserved lemons and olives | طاجين الدجاج بالليمون المخلل والزيتون | Таджин из курицы с солёными лимонами и оливками |
| the-menthe | Moroccan mint tea | الشاي المغربي بالنعناع | Марокканский мятный чай |
| zaalouk | Aubergine zaalouk | زعلوك الباذنجان | Заалук из баклажанов |
| batbout | Batbout, Moroccan pan-cooked breads | البطبوط، خبز مغربي في المقلاة | Батбут, марокканские лепёшки на сковороде |
| sfenj | Sfenj, Moroccan ring doughnuts | السفنج، فطائر مغربية مقلية على شكل حلقة | Сфендж, марокканские пончики-кольца |
| crepes | Sweet wheat crêpes | الكريب الحلو بدقيق القمح | Сладкие пшеничные блины |
| pancakes | Fluffy American pancakes | البان كيك الأمريكي الهش | Пышные американские панкейки |
| sellou | Sellou, the Ramadan sweet | السلّو، حلوى رمضان | Селлу, сладость Рамадана |
| ghriba | Almond ghriba, crackled with icing sugar | غريبة اللوز المشقّقة بالسكر الناعم | Миндальная гриба в сахарной пудре |
| seffa-medfouna | Seffa medfouna with chicken and angel hair vermicelli | السفة المدفونة بالدجاج وشعرية الشعر الرقيقة | Сеффа медфуна с курицей и тонкой вермишелью |
| mrouzia | Mrouzia: slow-cooked lamb with honey, raisins and almonds | المروزية: لحم الغنم المطهو ببطء بالعسل والزبيب واللوز | Мрузия: томлёная баранина с мёдом, изюмом и миндалём |
| tajine-petits-pois-artichauts | Meat tagine with peas and artichokes | طاجين اللحم بالجلبانة والقوق | Таджин из мяса с горошком и артишоками |
| taktouka | Taktouka | التكتوكة | Тактука |
| hachis-parmentier | Hachis parmentier (French cottage pie) | هاشي بارمنتييه (طبق البطاطس باللحم المفروم) | Аши пармантье (запеканка с фаршем) |
| gratin-dauphinois | Gratin dauphinois | غراتان الدوفينوا | Гратен дофинуа |
| falafel | Chickpea falafel | فلافل الحمص | Фалафель из нута |
| shawarma-poulet | Oven-baked chicken shawarma | شاورما الدجاج في الفرن | Куриная шаурма в духовке |
| butter-chicken | Butter chicken (murgh makhani) | دجاج بالزبدة (مرغ مخني) | Баттер чикен (мург макхани) |
| biryani-poulet | Hyderabadi chicken biryani | برياني الدجاج على طريقة حيدر آباد | Бирьяни с курицей по-хайдарабадски |
| maakouda | Maakouda (potato fritters) | المعقودة (أقراص البطاطا المقلية) | Маакуда (картофельные оладьи во фритюре) |
| briouates-kefta | Kefta briouats | البريوات بالكفتة | Бриуаты с кефтой |
| tortilla-espagnole | Spanish tortilla (tortilla de patatas) | التورتيا الإسبانية (عجة البطاطا) | Испанская тортилья (картофельный омлет) |
| houmous | Lebanese hummus (hummus bi tahini) | الحمص بالطحينة على الطريقة اللبنانية | Ливанский хумус (хумус би тахини) |

## Réponse finale
Court résumé : recettes traduites et importées, choix de traduction délicats, erreurs que tu crois avoir vues dans le français (sans les avoir corrigées), et ce que tu n'as pas pu faire.
