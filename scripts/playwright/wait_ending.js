async (page) => {
  for (let i = 0; i < 30; i++) {
    if (await page.locator('text=本次心智博弈评分').count()) return;
    await page.waitForFunction(
      () => document.body.innerText.includes('本次心智博弈评分') || !!document.querySelector('button.option-card:not([disabled])'),
      { timeout: 60000 },
    );
    if (await page.locator('text=本次心智博弈评分').count()) return;
    const choice = page.locator('button.option-card:not([disabled])').first();
    if (await choice.count()) {
      await choice.click();
    }
  }
}
