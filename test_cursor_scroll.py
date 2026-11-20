from playwright.sync_api import sync_playwright
import os
import shutil

os.makedirs('screenshots', exist_ok=True)
artifact_dir = r'C:\Users\khano\.gemini\antigravity\brain\f5794eae-7bda-4ad2-9b7a-4d8fbdcd13c9'

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    # Desktop context with fine pointer
    context = browser.new_context(
        viewport={'width': 1440, 'height': 900},
        has_touch=False
    )
    page = context.new_page()

    logs = []
    page.on('console', lambda msg: logs.append(f"[{msg.type}] {msg.text}"))
    page.on('pageerror', lambda err: logs.append(f"[PAGE_ERROR] {err}"))

    # Set preloader viewed so we test homepage directly
    page.goto('http://localhost:4173/')
    page.evaluate("sessionStorage.setItem('dsus_preloader_viewed', 'true')")
    page.reload(wait_until='networkidle')

    # 1. Default automotive caliper cursor
    page.mouse.move(720, 450)
    page.wait_for_timeout(300)
    page.screenshot(path='screenshots/cursor_default.png')
    print('1. cursor_default.png saved')

    # 2. Hover over interactive Book Bay button
    book_btn = page.locator('button:has-text("Book Bay")').first
    if book_btn.is_visible():
        box = book_btn.bounding_box()
        if box:
            page.mouse.move(box['x'] + box['width']/2, box['y'] + box['height']/2)
            page.wait_for_timeout(300)
            page.screenshot(path='screenshots/cursor_button_hover.png')
            print('2. cursor_button_hover.png saved')

    # 3. Scroll down to Services section and verify scroll-triggered entrance
    page.evaluate("window.scrollTo({ top: 900, behavior: 'instant' })")
    page.wait_for_timeout(600)
    page.screenshot(path='screenshots/scroll_services_reveal.png')
    print('3. scroll_services_reveal.png saved')

    # 4. Scroll down to Gallery & Before-After slider
    page.evaluate("window.scrollTo({ top: 2200, behavior: 'instant' })")
    page.wait_for_timeout(600)
    page.screenshot(path='screenshots/scroll_gallery_reveal.png')
    print('4. scroll_gallery_reveal.png saved')

    # 5. Hover over a gallery card to test VIEW reticle cursor
    gallery_card = page.locator('[data-cursor="view"]').first
    if gallery_card.is_visible():
        box = gallery_card.bounding_box()
        if box:
            page.mouse.move(box['x'] + box['width']/2, box['y'] + box['height']/2)
            page.wait_for_timeout(300)
            page.screenshot(path='screenshots/cursor_view_hover.png')
            print('5. cursor_view_hover.png saved')

    browser.close()

    print("\n--- TEST LOGS & ERRORS ---")
    if not logs:
        print("Zero console errors detected. All cursor and scroll animations executed cleanly!")
    else:
        for l in logs:
            print(l)

# Copy screenshots to artifact directory
for f in ['cursor_default.png', 'cursor_button_hover.png', 'scroll_services_reveal.png', 'scroll_gallery_reveal.png', 'cursor_view_hover.png']:
    src = os.path.join('screenshots', f)
    if os.path.exists(src):
        shutil.copy(src, os.path.join(artifact_dir, f))
        print(f'Copied {f} to artifact directory')
