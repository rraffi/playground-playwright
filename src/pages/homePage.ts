import { BasePage } from './basePage';
import { Locator, Page } from '@playwright/test';

export class HomePage extends BasePage {
    readonly getStartedLink: Locator;

    constructor(page: Page) {
        super(page)
        this.getStartedLink = this.page.getByRole('link', { name: 'Get Started' });
    }
    
    async navigate() {
        await this.page.goto('https://playwright.dev');
        const userAgent = await this.page.evaluate(() => navigator.userAgent);
  console.log('User Agent:', userAgent)
    }

    async clickGetStartedLink() {
        await this.getStartedLink.click();
    }
}