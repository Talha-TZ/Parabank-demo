import { Page } from '@playwright/test';

export async function fillBillPayForm(
  page: Page,
  payeeName: string,
  address: string,
  city: string,
  state: string,
  zipCode: string,
  phone: string,
  accountNumber: string,
  amount: string
) {
  await page.locator('input[name="payee.name"]').fill(payeeName);
  await page.locator('input[name="payee.address.street"]').fill(address);
  await page.locator('input[name="payee.address.city"]').fill(city);
  await page.locator('input[name="payee.address.state"]').fill(state);
  await page.locator('input[name="payee.address.zipCode"]').fill(zipCode);
  await page.locator('input[name="payee.phoneNumber"]').fill(phone);
  await page.locator('input[name="payee.accountNumber"]').fill(accountNumber);
  await page.locator('input[name="amount"]').fill(amount);
}

export async function submitBillPayment(page: Page) {
  await page.getByRole('button', { name: 'Send Payment' }).click();
}
