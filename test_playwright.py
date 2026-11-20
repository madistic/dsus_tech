import os
from playwright.sync_api import sync_playwright

os.makedirs('screenshots', exist_ok=True)

with sync_playwright() as p:
    try:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1440, 'height': 900})
        
        logs = []
        page.on('console', lambda msg: logs.append(f"[{msg.type}] {msg.text}"))
        page.on('pageerror', lambda err: logs.append(f"[PAGE_ERROR] {err}"))

        # 1. Desktop Homepage
        page.goto('http://localhost:4173/', wait_until='networkidle')
        page.screenshot(path='screenshots/desktop_home.png', full_page=False)
        print("1. Desktop homepage screenshot saved.")

        # 2. Test Booking Modal
        page.click('button:has-text("Book Bay")')
        page.wait_for_timeout(500)
        page.screenshot(path='screenshots/modal_open.png', full_page=False)
        print("2. Modal screenshot saved.")

        # Close Modal
        page.keyboard.press('Escape')
        page.wait_for_timeout(300)

        # 3. Mobile Viewport
        page.set_viewport_size({'width': 390, 'height': 844})
        page.screenshot(path='screenshots/mobile_home.png', full_page=False)
        print("3. Mobile screenshot saved.")

        # 4. Navigate to About Page
        page.set_viewport_size({'width': 1440, 'height': 900})
        page.goto('http://localhost:4173/about', wait_until='networkidle')
        page.screenshot(path='screenshots/about_page.png', full_page=False)
        print("4. About page screenshot saved.")

        # 5. Navigate to Service Detail Page
        page.goto('http://localhost:4173/services/car-accessories-customization', wait_until='networkidle')
        page.screenshot(path='screenshots/service_detail.png', full_page=False)
        print("5. Service detail screenshot saved.")

        # 6. Navigate to Our Work / Gallery
        page.goto('http://localhost:4173/our-work', wait_until='networkidle')
        page.screenshot(path='screenshots/gallery_page.png', full_page=False)
        print("6. Gallery page screenshot saved.")

        # 7. Navigate to Contact Page
        page.goto('http://localhost:4173/contact', wait_until='networkidle')
        page.screenshot(path='screenshots/contact_page.png', full_page=False)
        print("7. Contact page screenshot saved.")

        browser.close()

        print("\n--- CONSOLE LOGS & ERRORS ---")
        if not logs:
            print("Zero console logs or errors detected. Perfect!")
        else:
            for l in logs:
                print(l)

    except Exception as e:
        print("Playwright Error:", e)
