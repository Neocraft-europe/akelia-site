# -*- coding: utf-8 -*-
import os, re

base_dir = "akelia_site_complet"

if not os.path.exists(base_dir):
    print("Erreur : Le dossier 'akelia_site_complet' est introuvable.")
    exit(1)

html_files = [f for f in os.listdir(base_dir) if f.endswith(".html")]
print("%d fichiers HTML trouves pour la reparation des liens." % len(html_files))

success = 0
for filename in html_files:
    filepath = os.path.join(base_dir, filename)
    
    with open(filepath, 'r') as f:
        html = f.read()

    # 1. Remplacer les liens stricts de l'accueil
    html = html.replace('href="https://www.akelia.fr/"', 'href="index.html"')
    html = html.replace('href="https://www.akelia.fr"', 'href="index.html"')
    html = re.sub(r'href=["\']/["\']', 'href="index.html"', html)

    # 2. Remplacer les liens absolus (https://www.akelia.fr/...) par les noms locaux (ex: post_mon-article.html)
    def replace_absolute(match):
        path = match.group(1).strip('/')
        return 'href="' + path.replace('/', '_') + '.html"'
    html = re.sub(r'href=["\']https://www\.akelia\.fr/([^"\']+)["\']', replace_absolute, html)
    
    # 3. Remplacer les liens relatifs (ex: /post/mon-article) par les noms locaux
    def replace_relative(match):
        path = match.group(1).strip('/')
        # On ignore les liens vers les dossiers d'assets ou les fichiers techniques (css, js, jpg, png, etc.)
        if path.startswith('assets') or path.startswith('cdn-cgi') or '.' in path[-5:]:
            return match.group(0)
        return 'href="' + path.replace('/', '_') + '.html"'
    html = re.sub(r'href=["\']/([^"\']+)["\']', replace_relative, html)

    # Sauvegarder les modifications
    with open(filepath, 'w') as f:
        f.write(html)
        
    success += 1

print("Reparation terminee ! %d fichiers mis a jour." % success)
