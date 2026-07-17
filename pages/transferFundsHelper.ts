import { Page } from '@playwright/test';

export async function fillTransferForm(page: Page, fromAccount: string, toAccount: string, amount: string) {
  await page.locator('select#fromAccountId').selectOption(fromAccount);
  await page.locator('select#toAccountId').selectOption(toAccount);
  await page.locator('input#amount').fill(amount);
}

export async function submitTransfer(page: Page) {
  await page.getByRole('button', { name: 'Transfer' }).click();
}
