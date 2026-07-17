import { Page } from '@playwright/test';

export async function login(page: Page, username: string, password: string) {
  await page.locator('[name="username"]').fill(username);
  await page.locator('[name="password"]').fill(password);
  await page.getByRole('button', { name: 'Log In' }).click();
}
