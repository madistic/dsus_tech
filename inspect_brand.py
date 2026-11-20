import urllib.request
import re
import os
from bs4 import BeautifulSoup
from PIL import Image

print("--- ANALYZING LOGO ASSETS ---")
for fn in [
    'cropped-c-removebg-preview.png',
    'cropped-IMG-20251227-WA0073.jpg-Photoroom-e1784482926833.png',
    'Untitled-design-9-Photoroom.png',
    'Untitled-design-8.png'
]:
    p = os.path.join('scraped_assets', fn)
    if os.path.exists(p):
        im = Image.open(p)
        print(f"{fn}: size={im.size}, mode={im.mode}")

# Let's inspect Facebook and Instagram links
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'}

print("\n--- ANALYZING CONTACT & TEXT FROM LIVE SITE ---")
with open('dsus_raw.html', 'r', encoding='utf-8') as f:
    soup = BeautifulSoup(f.read(), 'html.parser')

# Get all text blocks
text_snippets = []
for p in soup.find_all(['h1', 'h2', 'h3', 'h4', 'p', 'span', 'li']):
    t = p.get_text(strip=True)
    if len(t) > 20 and t not in text_snippets:
        text_snippets.append(t)

print("Found text snippets:", len(text_snippets))
for s in text_snippets[:30]:
    print(" - ", s)
