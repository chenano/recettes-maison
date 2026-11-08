"""Écrit window.PHOTOS : les crédits de chaque photo de plat (img/) et de geste (img/etapes/), par chemin.
L'appli s'en sert pour composer les crédits dans la langue choisie. Appelé par build.sh.
« modified », calculé d'après la taille de l'original (orig_size) : « non modifiée » si le fichier a la même taille,
« réduite » s'il a les mêmes proportions (à 1 % près), sinon « recadrée et réduite ». Sans orig_size : rien (l'appli dit « réduite »)."""
import json, os, re, subprocess

APP = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def taille(p):
    out = subprocess.run(["sips", "-g", "pixelWidth", "-g", "pixelHeight", p], capture_output=True, text=True).stdout
    w, h = re.findall(r"pixel(?:Width|Height): (\d+)", out)
    return f"{w}x{h}"


def modification(fichier, orig):
    """Même règle que set_step_img dans outils/integrer.py."""
    t = taille(fichier)
    if t == orig:
        return "non modifiée"
    (w, h), (ow, oh) = (map(int, t.split("x")), map(int, orig.split("x")))
    return "réduite" if abs(w / h - ow / oh) <= 0.01 * (ow / oh) else "recadrée et réduite"


m = {}
for fichier, base in (("img/credits.json", "img/"), ("img/etapes/credits.json", "img/etapes/")):
    p = os.path.join(APP, fichier)
    if not os.path.exists(p):
        continue
    for c in json.load(open(p, encoding="utf-8")):
        e = {k: c.get(k, "") for k in ("author", "license", "license_url", "page")}
        img = os.path.join(APP, base + c["file"])
        if c.get("orig_size") and os.path.exists(img):
            e["modified"] = modification(img, c["orig_size"])
        m[base + c["file"]] = e
print("window.PHOTOS = " + json.dumps(m, ensure_ascii=False, separators=(",", ":")) + ";")
