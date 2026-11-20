import urllib.request
import sys

base_url = 'http://localhost:4173'

endpoints = [
    '/',
    '/about',
    '/services',
    '/services/car-accessories-customization',
    '/services/multimedia-infotainment',
    '/services/auto-electronics-repair',
    '/services/upholstery-interior',
    '/services/mechanical-services',
    '/services/lighting-solutions',
    '/our-work',
    '/blog',
    '/blog/protecting-car-paint-dubai-extreme-heat-ppf-ceramic',
    '/contact',
    '/robots.txt',
    '/sitemap.xml',
    '/assets/logo/dsus-badge.png',
    '/assets/workshop/workshop-main-bay.jpg',
    '/assets/services/ppf-detailing-wrap.jpg',
]

print("=== CHECKING ENDPOINTS & ASSETS ===")
failures = []
for ep in endpoints:
    url = base_url + ep
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req, timeout=3)
        print(f"[{res.status}] {ep:50} -> OK ({len(res.read())} bytes)")
    except Exception as e:
        print(f"[FAIL] {ep:50} -> {e}")
        failures.append((ep, str(e)))

if failures:
    print(f"\n{len(failures)} failures detected!")
    sys.exit(1)
else:
    print("\nALL ENDPOINTS & ASSETS VERIFIED WITH 200 OK!")
