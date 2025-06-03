(async () => {
  /* ---------- tweakables ---------- */
  // helper → resolve after a random time in the given range (ms)
  const randDelay = (min, max) =>
        new Promise(r => setTimeout(r, Math.floor(Math.random() * (max - min + 1)) + min));

  const stepPx   = 1200;   // how far to scroll each loop
  const waitMin  = 900,  waitMax  = 1800;  // pause after scrolling
  const stuckMax = 3;      // how many “no‑new‑posts” loops before reload
  /* -------------------------------- */

  const processed = new WeakSet();   // remember menus we’ve handled

  async function processVisible() {
    const menus = [...document.querySelectorAll(
      'button.feed-shared-control-menu__trigger'
    )].filter(btn => !processed.has(btn));

    for (const btn of menus) {
      processed.add(btn);
      btn.click();
      await randDelay(200, 450);          // ⏱ dropdown render

      // first element whose visible text starts with “Unfollow”
      const unfollow = [...document.querySelectorAll('span,div,a')]
        .find(el => /^unfollow/i.test(el.innerText.trim()));
      if (unfollow) {
        unfollow.click();
        await randDelay(400, 850);        // ⏱ LinkedIn processes
      }

      // close dropdown (click somewhere safe)
      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      await randDelay(150, 300);          // ⏱ tiny pause
    }
    return menus.length;
  }

  let stuck = 0;
  while (true) {
    const newCount = await processVisible();

    // try to load more posts
    const prevHeight = document.body.scrollHeight;
    window.scrollBy(0, stepPx);
    await randDelay(waitMin, waitMax);

    const atBottom   = document.body.scrollHeight === prevHeight;
    const nothingNew = newCount === 0;

    stuck = (atBottom && nothingNew) ? stuck + 1 : 0;

    if (stuck >= stuckMax) {
      console.log('🔄 Reloading for a fresh batch…');
      window.scrollTo(0, 0);
      location.reload();
      await new Promise(r => addEventListener('load', r, { once: true }));
      await randDelay(1500, 2500);        // ⏱ let feed settle
      stuck = 0;
    }
  }
})();
