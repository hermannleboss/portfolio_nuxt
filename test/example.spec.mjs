import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  /*
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');*/
});
