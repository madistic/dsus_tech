import urllib.request
from bs4 import BeautifulSoup
import re
import json

pages = ['galllery/', 'about/', 'services/', 'contact/', 'blogs/', 'faq/']
results = {}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

for page in pages:
    url = f'https://dsusvip.ae/{page}'
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        soup = BeautifulSoup(html, 'html.parser')
        
        # Extract title
        title = soup.title.string if soup.title else ''
        
        # Extract images
        imgs = []
        for img in soup.find_all('img'):
            src = img.get('src', '')
            alt = img.get('alt', '')
            if 'uploads' in src:
                imgs.append({'src': src.split('/')[-1], 'alt': alt})
        
        # Extract headers and paragraphs
        texts = []
        for el in soup.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li']):
            t = el.get_text(strip=True)
            if len(t) > 25 and t not in texts:
                texts.append(t)
                
        results[page] = {
            'title': title,
            'images': imgs,
            'sample_texts': texts[:20]
        }
        print(f"Done {page}: {len(imgs)} images, {len(texts)} text blocks")
    except Exception as e:
        print(f"Error {page}: {e}")

# Fetch blog posts
blog_urls = [
    'https://dsusvip.ae/the-importance-of-regular-car-maintenance/',
    'https://dsusvip.ae/the-roadmap-to-reliability-essential-car-care-tips/',
    'https://dsusvip.ae/from-garage-to-glory-transform-your-vehicles-health/',
    'https://dsusvip.ae/decoding-the-check-engine-light-and-engine-diagnostics/'
]
blog_data = []
for bu in blog_urls:
    try:
        req = urllib.request.Request(bu, headers=headers)
        html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
        soup = BeautifulSoup(html, 'html.parser')
        h1 = soup.find('h1')
        title = h1.get_text(strip=True) if h1 else (soup.title.string if soup.title else '')
        content_div = soup.find('div', class_=re.compile(r'entry-content|post-content|content'))
        content_text = content_div.get_text(strip=True)[:500] if content_div else ''
        featured_img = ''
        for img in soup.find_all('img'):
            if 'uploads' in img.get('src', '') and not 'logo' in img.get('src', ''):
                featured_img = img.get('src', '').split('/')[-1]
                break
        blog_data.append({
            'url': bu,
            'title': title,
            'img': featured_img,
            'excerpt': content_text[:200]
        })
        print(f"Blog post parsed: {title}")
    except Exception as e:
        print(f"Blog error {bu}: {e}")

with open('scraped_site_summary.json', 'w', encoding='utf-8') as f:
    json.dump({'pages': results, 'blogs': blog_data}, f, indent=2)

print("Saved scraped_site_summary.json successfully!")
