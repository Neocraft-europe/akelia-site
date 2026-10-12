# -*- coding: utf-8 -*-
import os
import re
import urlparse
import urllib
import subprocess

txt_file = 'listeURL.txt'
output_dir = 'images_akelia'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

print("Lecture du fichier " + txt_file + "...")
with open(txt_file, 'r') as f:
    page_urls = [line.strip() for line in f if line.strip().startswith('http')]

print("%d pages a analyser." % len(page_urls))
image_urls = set()
user_agent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Safari/605.1.15"

for i, page_url in enumerate(page_urls, 1):
    cmd = ["curl", "-s", "-L", "-A", user_agent, page_url]
    p = subprocess.Popen(cmd, stdout=subprocess.PIPE)
    html, _ = p.communicate()
    
    found = re.findall(r'https://cdn\.prod\.website-files\.com/[^"\'\s<>]+', html)
    for img in found:
        image_urls.add(img)
        
    if found:
        print("[%d/%d] OK : %d images sur %s" % (i, len(page_urls), len(found), page_url.split('/')[-1] or 'accueil'))
    else:
        print("[%d/%d] Bloque ou sans image : %s" % (i, len(page_urls), page_url.split('/')[-1] or 'accueil'))

print("\nTotal d'images uniques trouvees : %d" % len(image_urls))

success = 0
for idx, img_url in enumerate(image_urls, 1):
    parsed = urlparse.urlparse(img_url)
    filename = os.path.basename(parsed.path)
    filename = urllib.unquote(filename).decode('utf-8', 'ignore').encode('utf-8')
    filepath = os.path.join(output_dir, filename)
    
    if not os.path.exists(filepath):
        cmd = ["curl", "-s", "-L", "-A", user_agent, "-o", filepath, img_url]
        subprocess.Popen(cmd).wait()
        
    print("[%d/%d] Telecharge : %s" % (idx, len(image_urls), filename))
    success += 1

print("\nTermine ! %d/%d images dans le dossier '%s'." % (success, len(image_urls), output_dir))
