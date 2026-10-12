# -*- coding: utf-8 -*-
import os, re, subprocess, urllib

url = "https://www.akelia.fr/"
user_agent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15"

base_dir = "test_accueil_akelia"
assets_dir = os.path.join(base_dir, "assets")
if not os.path.exists(assets_dir):
    os.makedirs(assets_dir)

print("\n--- ETAPE 1 : Aspiration du code source de l'accueil ---")
p = subprocess.Popen(["curl", "-s", "-L", "-A", user_agent, url], stdout=subprocess.PIPE)
html, _ = p.communicate()

if not html:
    print("Erreur: Impossible de recuperer la page d'accueil.")
    exit(1)

print("\n--- ETAPE 2 : Nettoyage de la securite (SRI/CORS) ---")
# C'est ici que l'on supprime les verrous qui bloquent le CSS sur ton Mac !
html = re.sub(r'\s+integrity="[^"]+"', '', html)
html = re.sub(r'\s+crossorigin="[^"]+"', '', html)
print("Verrous de securite supprimes avec succes.")

print("\n--- ETAPE 3 : Chasse aux CSS, JS et Images ---")
assets_to_download = set()

for match in re.findall(r'<link[^>]+href=["\']([^"\']+)["\']', html):
    if '.css' in match:
        assets_to_download.add(match)

for match in re.findall(r'<script[^>]+src=["\']([^"\']+)["\']', html):
    assets_to_download.add(match)

cdn_pattern = r'(?:https?:)?//[a-zA-Z0-9.-]*(?:website-files\.com|cloudfront\.net)[^"\'\s<>,()]+'
for match in re.findall(cdn_pattern, html):
    assets_to_download.add(match)

print("%d liens trouves. Debut du telechargement..." % len(assets_to_download))

success = 0
for asset in assets_to_download:
    if not asset.startswith('http') and not asset.startswith('//'):
        continue
        
    full_url = asset if asset.startswith('http') else "https:" + asset
    raw_name = urllib.unquote(full_url.split('/')[-1]).split('?')[0]
    if not raw_name: continue
    
    safe_name = re.sub(r'[^a-zA-Z0-9_.-]', '_', raw_name)
    if '.css' in asset and not safe_name.endswith('.css'):
        safe_name += '.css'
        
    local_path = os.path.join(assets_dir, safe_name)
    
    if not os.path.exists(local_path):
        subprocess.Popen(["curl", "-s", "-L", "-A", user_agent, "-o", local_path, full_url]).wait()
        
    if os.path.exists(local_path) and os.path.getsize(local_path) > 10:
        success += 1
        html = html.replace(asset, "./assets/" + safe_name)

print("\n--- ETAPE 4 : Sauvegarde de la page ---")
html_path = os.path.join(base_dir, "index.html")
with open(html_path, "w") as f:
    f.write(html)

print("Termine ! Ouvre 'test_accueil_akelia/index.html'.")
