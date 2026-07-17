import { Page } from '@playwright/test';

export async function openFindTransactions(page: Page) {
  await page.getByRole('link', { name: 'Find Transactions' }).click();
}

export async function searchTransactionById(page: Page, transactionId: string) {
  await page.locator('input#criteria.amount').fill(transactionId);
  await page.getByRole('button', { name: 'Find Transactions' }).click();
}
