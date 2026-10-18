import os
import sys
import time
from playwright.sync_api import sync_playwright

ARTIFACT_DIR = "/Users/locnguyen/.gemini/antigravity/brain/549231de-0192-4e5f-b2fd-f75f8e71d3c8"
BASE_URL = "http://localhost:3333"

def main():
    print("🚀 Running Comprehensive Mobile Playwright Test Suite over HTTP...")
    console_errors = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Mobile viewport: iPhone 13/14 (390 x 844) with touch enabled
        context = browser.new_context(
            viewport={"width": 390, "height": 844},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1",
            has_touch=True,
            is_mobile=True,
        )
        page = context.new_page()

        page.on("console", lambda msg: console_errors.append(f"[Console Error] {msg.text}") if msg.type == "error" else None)
        page.on("pageerror", lambda err: console_errors.append(f"[Page Error] {err}"))

        # ---------------------------------------------------------
        # TEST 1: redseal-testting-mvdmso9v
        # ---------------------------------------------------------
        print("\n--- TEST 1: redseal-testting-mvdmso9v ---")
        url1 = f"{BASE_URL}/submissions/redseal-testting-mvdmso9v/index.html"
        page.goto(url1, wait_until="load")
        page.wait_for_timeout(600)

        cover_el = page.locator("#cover")
        is_cover_visible = cover_el.is_visible()
        is_locked = page.evaluate("() => document.documentElement.classList.contains('locked')")
        print(f"[Test 1] Cover visible: {is_cover_visible}, HTML locked: {is_locked}")
        assert is_cover_visible, "Cover must be visible initially!"
        assert is_locked, "HTML must have locked class initially!"
        page.screenshot(path=os.path.join(ARTIFACT_DIR, "final_test1_sealed_cover.png"))

        # Tap sealed envelope
        open_btn = page.locator(".env-btn")
        open_btn.click()
        print("[Test 1] Clicked envelope, waiting for opening animation...")
        page.wait_for_timeout(1800)

        is_cover_hidden = page.evaluate("() => { const c = document.getElementById('cover'); return !c || c.hidden || getComputedStyle(c).display === 'none'; }")
        is_unlocked = page.evaluate("() => !document.documentElement.classList.contains('locked')")
        has_hero = page.locator(".rs-hero").is_visible()
        print(f"[Test 1] Cover hidden: {is_cover_hidden}, HTML unlocked: {is_unlocked}, Hero header visible: {has_hero}")
        assert is_cover_hidden, "Cover must be hidden after opening!"
        assert is_unlocked, "Locked class must be removed after opening!"
        assert has_hero, "Announcement hero header must be visible inside invitation!"
        page.screenshot(path=os.path.join(ARTIFACT_DIR, "final_test1_opened_hero.png"))

        # Test scroll through page
        page.evaluate("() => window.scrollBy({ top: 1200, behavior: 'instant' })")
        page.wait_for_timeout(400)
        page.screenshot(path=os.path.join(ARTIFACT_DIR, "final_test1_scrolled_events.png"))

        # Test guestbook and ensure no trapped scroll
        page.evaluate("() => { const gb = document.querySelector('#guestbook, .m-guestbook, .rs-wishes'); if (gb) gb.scrollIntoView(); }")
        page.wait_for_timeout(400)

        gb_overflow = page.evaluate("""() => {
            const wishes = document.querySelector('.rs-wishes, .wish-list');
            if (!wishes) return 'none';
            const s = window.getComputedStyle(wishes);
            return `${s.maxHeight} / ${s.overflowY}`;
        }""")
        print(f"[Test 1] Guestbook style (max-height / overflow-y): {gb_overflow}")
        assert "auto" not in gb_overflow and "scroll" not in gb_overflow, f"Guestbook has scroll trap: {gb_overflow}"
        page.screenshot(path=os.path.join(ARTIFACT_DIR, "final_test1_guestbook_not_trapped.png"))
        print("[Test 1] PASSED ✅")

        # ---------------------------------------------------------
        # TEST 2: redseal-thiep-hong-hoang-gia-mvdmp1hv
        # ---------------------------------------------------------
        print("\n--- TEST 2: redseal-thiep-hong-hoang-gia-mvdmp1hv ---")
        url2 = f"{BASE_URL}/submissions/redseal-thiep-hong-hoang-gia-mvdmp1hv/index.html"
        page.goto(url2, wait_until="load")
        page.wait_for_timeout(600)

        assert page.locator("#cover").is_visible(), "Test 2: Cover must be visible initially!"
        page.locator(".env-btn").click()
        page.wait_for_timeout(1800)

        is_cover_hidden2 = page.evaluate("() => { const c = document.getElementById('cover'); return !c || c.hidden || getComputedStyle(c).display === 'none'; }")
        assert is_cover_hidden2, "Test 2: Cover must be hidden after opening!"
        page.screenshot(path=os.path.join(ARTIFACT_DIR, "final_test2_opened.png"))
        print("[Test 2] PASSED ✅")

        # ---------------------------------------------------------
        # TEST 3: customize.html?style=redseal Editor & Standalone Exporter
        # ---------------------------------------------------------
        print("\n--- TEST 3: Editor customize.html?style=redseal ---")
        url3 = f"{BASE_URL}/everafter_UI_UX_edit/customize.html?style=redseal"
        page.goto(url3, wait_until="load")
        page.wait_for_timeout(3500)

        mobile_bar = page.locator(".preview .bar")
        submit_btn = page.locator("#btnSubmitGit")
        assert mobile_bar.is_visible(), "Editor mobile action bar must be visible!"
        assert submit_btn.is_visible(), "Primary CTA #btnSubmitGit must be visible on mobile!"
        page.screenshot(path=os.path.join(ARTIFACT_DIR, "final_test3_editor_mobile_view.png"))

        standalone_eval = page.evaluate("""() => {
            if (typeof window.buildStandaloneHtml !== 'function') return { error: 'buildStandaloneHtml not found' };
            const html = window.buildStandaloneHtml();
            if (!html) return { error: 'buildStandaloneHtml returned null' };
            return {
                length: html.length,
                hasCover: html.includes('id="cover"') && html.includes('rs-cover'),
                hasHero: html.includes('rs-hero'),
                hasGuard: html.includes('ea-guard-style'),
                isLocked: html.includes('class="') && html.includes('locked'),
                hasLoadError: html.includes('load-error'),
                hasEmptyTokenBug: html.includes("classList.remove('locked', '')") || html.includes('classList.remove("locked", "")')
            };
        }""")
        print("[Test 3] Standalone exporter evaluation:", standalone_eval)
        assert standalone_eval.get("hasCover"), "Exported HTML must include #cover.rs-cover!"
        assert standalone_eval.get("hasHero"), "Exported HTML must include .rs-hero!"
        assert standalone_eval.get("hasGuard"), "Exported HTML must include ea-guard-style!"
        assert standalone_eval.get("isLocked"), "Exported HTML must include locked class on root!"
        assert not standalone_eval.get("hasLoadError"), "Exported HTML must not have load-error!"
        assert not standalone_eval.get("hasEmptyTokenBug"), "Exported HTML must not have empty token bug!"
        print("[Test 3] PASSED ✅")

        # ---------------------------------------------------------
        # TEST 4: moonlight template
        # ---------------------------------------------------------
        print("\n--- TEST 4: Moonlight template ---")
        url4 = f"{BASE_URL}/submissions/moonlight-test-123-mv7qsawr/index.html"
        page.goto(url4, wait_until="load")
        page.wait_for_timeout(600)

        assert page.locator("#cover").is_visible(), "Moonlight cover must be visible initially!"
        page.locator("#cover .open-btn").click()
        page.wait_for_timeout(3600)

        is_ml_hidden = page.evaluate("() => { const c = document.getElementById('cover'); return !c || c.hidden || getComputedStyle(c).display === 'none'; }")
        assert is_ml_hidden, "Moonlight cover must be hidden after animation!"
        page.screenshot(path=os.path.join(ARTIFACT_DIR, "final_test4_moonlight_opened.png"))
        print("[Test 4] PASSED ✅")

        browser.close()

    print("\n==============================================")
    print(f"Total Console / Page Errors: {len(console_errors)}")
    if console_errors:
        for err in console_errors:
            print("  ", err)
        raise RuntimeError("Test suite had console/page errors!")
    print("🏆 ALL TESTS COMPLETED SUCCESSFULLY WITH 0 ERRORS!")
    print("==============================================")

if __name__ == "__main__":
    main()
