async (page) => {
  for (let i = 0; i < 4; i++) {
    await page.waitForFunction(() => !!document.querySelector('button.option-card:not([disabled])'), { timeout: 60000 });
    await page.locator('button.option-card:not([disabled])').first().click();
  }
  await page.waitForFunction(
    () => !!document.querySelector('button.option-card:not([disabled])') && !document.body.innerText.includes('对方正在输入…'),
    { timeout: 60000 },
  );
}
