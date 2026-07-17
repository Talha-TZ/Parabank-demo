import { Page } from '@playwright/test';

export async function openAccountPage(page: Page) {
  await page.getByRole('link', { name: 'Open New Account' }).click();
}

export async function chooseAccountType(page: Page, accountType: string) {
  await page.locator('select#type').selectOption(accountType);
}
