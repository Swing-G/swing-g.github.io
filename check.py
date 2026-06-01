# -*- coding: utf-8 -*-
from playwright.sync_api import sync_playwright
import sys
sys.stdout.reconfigure(encoding='utf-8')

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('http://localhost:8765')
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(5000)

    # Check landing layout
    terminal_w = page.locator('.terminal-window').evaluate('el => el.offsetWidth')
    content_w = page.locator('.landing-content').evaluate('el => el.offsetWidth')
    print(f"Terminal width: {terminal_w}px, Content width: {content_w}px")

    # Scroll to projects
    nav = page.locator('.nav-item')
    for i in range(nav.count()):
        label = nav.nth(i).locator('.nav-label').text_content()
        if label == '项目':
            nav.nth(i).click()
            break
    page.wait_for_timeout(1500)

    # Check project grid
    cards = page.locator('.bento-card')
    card_count = cards.count()
    print(f"Project cards: {card_count}")

    # Check screen height
    project_screen = page.locator('#projects')
    screen_h = project_screen.evaluate('el => el.offsetHeight')
    vh = page.evaluate('() => window.innerHeight')
    print(f"Project screen height: {screen_h}px, viewport: {vh}px")

    # Take screenshots
    page.screenshot(path='D:/Java/Java_Projects/introduction/swing-g.github.io/v-landing.png')
    print("Landing screenshot saved")

    page.screenshot(path='D:/Java/Java_Projects/introduction/swing-g.github.io/v-projects.png', full_page=True)
    print("Full page screenshot saved")

    browser.close()
    print("Done")
