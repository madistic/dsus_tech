from playwright.sync_api import sync_playwright
import os
import shutil

os.makedirs('screenshots', exist_ok=True)
artifact_dir = r'C:\Users\khano\.gemini\antigravity\brain\f5794eae-7bda-4ad2-9b7a-4d8fbdcd13c9'

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(viewport={'width': 1440, 'height': 900})
    page = context.new_page()

    # Clear sessionStorage to ensure preloader runs
    page.goto('http://localhost:4173/')
    page.evaluate('sessionStorage.clear()')
    page.reload()

    # 1. Capture during preloader animation at ~600ms
    page.wait_for_timeout(600)
    page.screenshot(path='screenshots/preloader_active.png')
    print('Captured preloader_active.png')

    # 2. Capture near completion at ~1600ms
    page.wait_for_timeout(1000)
    page.screenshot(path='screenshots/preloader_progress.png')
    print('Captured preloader_progress.png')

    # 3. Wait for preloader exit and homepage reveal at ~3000ms
    page.wait_for_timeout(1400)
    page.screenshot(path='screenshots/homepage_revealed.png')
    print('Captured homepage_revealed.png')

    # 4. Mobile preloader test
    mobile_context = browser.new_context(viewport={'width': 390, 'height': 844})
    mobile_page = mobile_context.new_page()
    mobile_page.goto('http://localhost:4173/')
    mobile_page.evaluate('sessionStorage.clear()')
    mobile_page.reload()
    mobile_page.wait_for_timeout(800)
    mobile_page.screenshot(path='screenshots/mobile_preloader.png')
    print('Captured mobile_preloader.png')

    browser.close()

# Copy to artifact dir
for f in ['preloader_active.png', 'preloader_progress.png', 'homepage_revealed.png', 'mobile_preloader.png']:
    src = os.path.join('screenshots', f)
    if os.path.exists(src):
        shutil.copy(src, os.path.join(artifact_dir, f))
        print(f'Copied {f} to artifact directory')
