import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/customWorld'
// Declare the type for `this` globally within this module
declare module '@cucumber/cucumber' {
  interface IWorld extends CustomWorld {}
}

Given('I open Playwright website', async function () {
  await this.homePage.navigate();
});

When('I click on the Get Started link', async function () {
  await this.homePage.clickGetStartedLink();
});

Then('I should see the Installation heading', async function () {
  await expect(this.page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});