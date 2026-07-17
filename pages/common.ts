import { Page } from '@playwright/test';

export async function openApp(page: Page, url: string) {
  await page.goto(url);
}

export async function waitForPageTitle(page: Page, titlePattern: RegExp) {
  await page.waitForFunction((pattern) => {
    const regex = new RegExp(pattern);
    return regex.test(document.title);
  }, titlePattern.toString());
}
