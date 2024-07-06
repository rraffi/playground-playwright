import { test, expect, BrowserContext, BrowserType } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test("search for 'test'", async ({ page, browser }) => {
  await page.goto('https://playwright.dev');

  const userAgent = await page.evaluate(() => navigator.userAgent);
  console.log('User Agent:', userAgent)
  await page.getByLabel('Search').click();
  
  const searchDocsBox = page.getByPlaceholder('Search docs');
  await searchDocsBox.click();
  await searchDocsBox.fill('test');
  await expect(page.getByRole('link', { name: 'Writing tests'})).toBeVisible(); 
});