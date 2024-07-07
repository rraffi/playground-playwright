import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser, BrowserType } from '@playwright/test';
import { CustomWorld } from './customWorld';

let browser: Browser;

setDefaultTimeout(30 * 1000);

Before(async function (this: CustomWorld) {
  // browser = await chromium.launch({ headless: false });

  browser = await chromium.launch({
    headless: false,
    channel: 'chrome', // Using the Chrome channel
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', // Path to local Chrome
  });
  const page = await browser.newPage();
  await this.init(page); // properly initialize the page and HomePage
});

After(async function () {
  await browser.close();
});