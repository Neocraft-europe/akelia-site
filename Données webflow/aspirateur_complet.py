# -*- coding: utf-8 -*-
import os, re, subprocess, urllib

user_agent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15"
base_dir = "akelia_site_complet"
assets_dir = os.path.join(base_dir, "assets")

if not os.path.exists(assets_dir):
    os.makedirs(assets_dir)

print("Lecture de listeURL.txt...")
try:
    with open('listeURL.txt', 'r') as f:
        urls = [line.strip() for line in f if line.strip().startswith('http')]
except IOError:
    print("Erreur : Le fichier listeURL.txt est introuvable.")
    exit(1)

for i, url in enumerate(urls, 1):
    print("\n[%d/%d] Traitement de : %s" % (i, len(urls), url))
    
    # Creation d'un nom de fichier propre selon l'URL (ex: post_mon-article.html)
    path = url.replace("https://www.akelia.fr", "").strip("/")
    if not path:
        page_name = "index.html"
    else:
        page_name = path.replace("/", "_") + ".html"
        
    p = subprocess.Popen(["curl", "-s", "-L", "-A", user_agent, url], stdout=subprocess.PIPE)
    html, _ = p.communicate()
    
    if not html:
        print("  -> Erreur: Impossible de lire la page.")
        continue
        
    # Nettoyage des verrous de securite
    html = re.sub(r'\s+integrity="[^"]+"', '', html)
    html = re.sub(r'\s+crossorigin="[^"]+"', '', html)
    
    assets_to_download = set()
    
    for match in re.findall(r'<link[^>]+href=["\']([^"\']+)["\']', html):
        if '.css' in match: assets_to_download.add(match)
    for match in re.findall(r'<script[^>]+src=["\']([^"\']+)["\']', html):
        assets_to_download.add(match)
        
    cdn_pattern = r'(?:https?:)?//[a-zA-Z0-9.-]*(?:website-files\.com|cloudfront\.net)[^"\'\s<>,()]+'
    for match in re.findall(cdn_pattern, html):
        assets_to_download.add(match)
        
    success = 0
    for asset in assets_to_download:
        if not asset.startswith('http') and not asset.startswith('//'): continue
        
        full_url = asset if asset.startswith('http') else "https:" + asset
        raw_name = urllib.unquote(full_url.split('/')[-1]).split('?')[0]
        if not raw_name: continue
        
        safe_name = re.sub(r'[^a-zA-Z0-9_.-]', '_', raw_name)
        if '.css' in asset and not safe_name.endswith('.css'): safe_name += '.css'
        local_path = os.path.join(assets_dir, safe_name)
        
        # Telechargement s'il n'est pas deja sur le disque
        if not os.path.exists(local_path):
            subprocess.Popen(["curl", "-s", "-L", "-A", user_agent, "-o", local_path, full_url]).wait()
            
        if os.path.exists(local_path) and os.path.getsize(local_path) > 10:
            success += 1
            html = html.replace(asset, "./assets/" + safe_name)
            
    # Sauvegarde de la page HTML
    html_path = os.path.join(base_dir, page_name)
    with open(html_path, "w") as f:
        f.write(html)
        
    print("  -> OK : %s (%d assets integres)" % (page_name, success))

print("\nTERMINE ! Le site complet a ete extrait dans le dossier 'akelia_site_complet'.")
