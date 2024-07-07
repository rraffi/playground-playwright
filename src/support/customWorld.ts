// src/support/customWorld.ts
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Page } from '@playwright/test';
import { HomePage } from '../pages/homePage';

export class CustomWorld extends World {
  page!: Page;
  homePage!: HomePage;

  async init(page: Page) {
    this.page = page;
    this.homePage = new HomePage(this.page);
  }
}

setWorldConstructor(CustomWorld);