# Consignes : relire une traduction de « Recettes de la maison »

Tu relis la traduction d'une recette faite par un autre traducteur, en anglais (en), en arabe (ar) ou en russe (ru). Tu es un relecteur de niveau natif dans cette langue. L'application est un carnet de recettes pour téléphone, utilisé pendant la cuisine par une famille marocaine. Le but : aucune erreur de sens, de nombre ou de sécurité, et une langue naturelle et correcte. Une erreur sur une quantité, une température, une durée ou un avertissement peut gâcher un plat ou blesser quelqu'un.

## Ce que tu as
- Le texte source : `traductions/fr/<slug>.json` (« textes »).
- La traduction enregistrée : `traductions/<langue>/<slug>.json` (pour chaque clé : « fr », le français traduit, et « t », la traduction).
- Les règles de traduction, le glossaire et les titres imposés : `traductions/CONSIGNES.md`. Lis-les d'abord.
- Le rendu réel, pour 1 part, la recette et le double : `python3 -I outils/rendu.py <langue> <slug>` (depuis /Users/anchenni/claude/recettes-app). Les quantités recalculées y sont entre crochets.

## À vérifier, clé par clé
1. **Sens** : rien d'ajouté, d'enlevé ni de déformé. Quantités, températures, durées, tailles, ordre des gestes, avertissements de sécurité et d'allergie, noms des sources.
2. **Grammaire** : accords, cas (russe), genre et nombre (arabe), y compris dans le rendu pour 1 part et pour le double.
3. **Langue naturelle**, comme dans un bon livre de cuisine de cette langue ; termes du glossaire ; titres imposés ; même mot pour la même chose dans toute la recette.
4. **Typographie** de la langue : guillemets, ponctuation arabe (، ؛ ؟), tirets russes, chiffres 0-9.

## Corriger
- Écris dans ton dossier temporaire un fichier JSON {clé: nouveau texte} avec seulement les clés à changer, puis lance `python3 -I outils/traduction.py corriger <langue> <slug> <fichier>` : l'outil revalide tout avant d'enregistrer.
- Corrige ce qui est faux ou nettement maladroit ; ne réécris pas une phrase juste pour le plaisir.
- Si tu crois voir une erreur dans le **français**, ne la corrige pas dans la traduction : signale-la dans ta réponse finale.

## Règles de travail (obligatoires)
- Un seul appel d'outil à la fois ; aucun appel ne doit écrire ni afficher plus d'environ 2 500 caractères (lis les fichiers par morceaux, par exemple 30 clés à la fois).
- Garde un petit fichier de suivi dans ton dossier temporaire, pour reprendre si ton flux est coupé.
- Pas de recherche web, pas de panneau navigateur, aucun autre fichier de l'application à modifier.

## Réponse finale
Court résumé : pour chaque recette, le nombre de corrections et les plus importantes (avec la raison) ; les erreurs vues dans le français ; ce que tu n'as pas pu vérifier.
