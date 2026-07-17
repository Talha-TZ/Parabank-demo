import { Page } from '@playwright/test';

export async function goToContactPage(page: Page) {
  await page.getByRole('link', { name: 'Contact Us' }).click();
}

export async function goToAccountsOverview(page: Page) {
  await page.getByRole('link', { name: 'Accounts Overview' }).click();
}
