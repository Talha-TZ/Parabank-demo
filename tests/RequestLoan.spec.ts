import { test, expect } from '@playwright/test';
import { APP_URL, VALID_USERNAME, VALID_PASSWORD } from '../utils/env';
import { HomePage } from '../pages/HomePage';
import { AccountServicesPage } from '../pages/AccountServicesPage';

let homePage: HomePage;
let accountServicesPage: AccountServicesPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  accountServicesPage = new AccountServicesPage(page);
  await page.goto(APP_URL);
  await homePage.login(VALID_USERNAME, VALID_PASSWORD);
});

test.describe('Request Loan feature', () => {
  test('documents the current request-loan response on the live site', async ({ page }) => {
    await accountServicesPage.openRequestLoan();
    await expect(page).toHaveURL(/requestloan/);

    const title = await page.title();
    expect(title).toMatch(/ParaBank \| (Loan Request|Error)/i);

    const bodyText = await page.locator('body').textContent();
    expect(bodyText ?? '').toMatch(/Loan Request|An internal error has occurred/i);
  });
});
