import os
import shutil
from PIL import Image

os.makedirs('public/assets/logo', exist_ok=True)
os.makedirs('public/assets/workshop', exist_ok=True)
os.makedirs('public/assets/projects', exist_ok=True)
os.makedirs('public/assets/services', exist_ok=True)

# Copy logos
if os.path.exists('scraped_assets/cropped-c-removebg-preview.png'):
    shutil.copy('scraped_assets/cropped-c-removebg-preview.png', 'public/assets/logo/dsus-badge.png')
if os.path.exists('scraped_assets/cropped-IMG-20251227-WA0073.jpg-Photoroom-e1784482926833.png'):
    shutil.copy('scraped_assets/cropped-IMG-20251227-WA0073.jpg-Photoroom-e1784482926833.png', 'public/assets/logo/dsus-logo-full.png')
if os.path.exists('scraped_assets/Untitled-design-8.png'):
    shutil.copy('scraped_assets/Untitled-design-8.png', 'public/assets/logo/dsus-hero-emblem.png')

# Map workshop images with clean names
workshop_mapping = {
    'IMG_7147.JPG-scaled.jpeg': 'public/assets/workshop/workshop-main-bay.jpg',
    'IMG_7148.JPG-scaled.jpeg': 'public/assets/workshop/workshop-detailing-lift.jpg',
    'IMG_7149.JPG-scaled.jpeg': 'public/assets/workshop/workshop-customization-bay.jpg',
    'IMG_7152.JPG-scaled.jpeg': 'public/assets/workshop/workshop-tech-diagnostics.jpg',
    'IMG_7153.JPG-scaled.jpeg': 'public/assets/workshop/workshop-care-center.jpg',
    'IMG_1134-scaled.jpg': 'public/assets/projects/mercedes-interior-upgrade.jpg',
    'IMG_1961-scaled.jpg': 'public/assets/projects/custom-leather-craftsmanship.jpg',
    'IMG_2897-scaled.jpg': 'public/assets/projects/range-rover-lighting-mod.jpg',
    'IMG_7146.JPG-scaled.jpeg': 'public/assets/projects/supercar-detailing-bay.jpg',
    'IMG_7150.JPG-scaled.jpeg': 'public/assets/projects/electronics-harness-repair.jpg',
    'IMG_7159.JPG-scaled.jpeg': 'public/assets/projects/bespoke-starlight-craft.jpg'
}

for src_name, dest_path in workshop_mapping.items():
    p = os.path.join('scraped_assets', src_name)
    if os.path.exists(p):
        shutil.copy(p, dest_path)
        print(f"Copied {src_name} -> {dest_path}")

print("Asset organization complete!")
