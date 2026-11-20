import urllib.request
import os

os.makedirs('public/assets/services', exist_ok=True)
os.makedirs('public/assets/hero', exist_ok=True)

# Curated high-resolution automotive photography URLs (Unsplash direct high-res IDs)
curated = {
    # Hero: Ultra high-end dark cinematic supercar reveal
    'public/assets/hero/hero-supercar-cinematic.jpg': 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2400&q=85',
    'public/assets/hero/hero-workshop-dark.jpg': 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=2400&q=85',
    
    # 1. Car Accessories & Customization (PPF / Detailing / Ceramic Coating / Wraps)
    'public/assets/services/ppf-detailing-wrap.jpg': 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1600&q=80',
    'public/assets/services/bodykit-customization.jpg': 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1600&q=80',
    
    # 2. Multimedia & Infotainment (Cockpit screen, CarPlay, sound system)
    'public/assets/services/multimedia-carplay-screen.jpg': 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80',
    'public/assets/services/sound-system-installation.jpg': 'https://images.unsplash.com/photo-1558441719-74e84b80695d?auto=format&fit=crop&w=1600&q=80',
    
    # 3. Auto Electronics Repair (ECU diagnostics, precision wiring, diagnostics console)
    'public/assets/services/ecu-electronics-diagnostics.jpg': 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1600&q=80',
    'public/assets/services/auto-electric-wiring.jpg': 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=80',
    
    # 4. Upholstery & Interior (Bespoke Nappa leather, diamond stitch, Alcantara)
    'public/assets/services/luxury-interior-leather.jpg': 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80',
    'public/assets/services/alcantara-steering-trim.jpg': 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    
    # 5. Mechanical Services (Engine bay, carbon ceramic brakes, transmission)
    'public/assets/services/mechanical-engine-bay.jpg': 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=80',
    'public/assets/services/performance-brakes-suspension.jpg': 'https://images.unsplash.com/photo-1600793575654-910699b5e4d4?auto=format&fit=crop&w=1600&q=80',
    
    # 6. Lighting Solutions (Laser LED headlights, starlight ceiling, ambient illumination)
    'public/assets/services/laser-headlight-retrofit.jpg': 'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1600&q=80',
    'public/assets/services/starlight-ambient-roof.jpg': 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
    
    # Before & After pairs
    'public/assets/projects/before-paint.jpg': 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80',
    'public/assets/projects/after-paint.jpg': 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
}

headers = {'User-Agent': 'Mozilla/5.0'}

for path, url in curated.items():
    if not os.path.exists(path):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=12) as resp:
                with open(path, 'wb') as f:
                    f.write(resp.read())
            print(f"Downloaded: {path}")
        except Exception as e:
            print(f"Failed {path}: {e}")

print("Curated imagery download complete.")
