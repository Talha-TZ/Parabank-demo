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

test.describe('Find Transactions feature', () => {
  test('opens the find transactions page and displays the search form', async ({ page }) => {
    await accountServicesPage.openFindTransactions();
    await expect(page).toHaveTitle(/ParaBank \| Find Transactions/);
    await expect(page.locator('#findById')).toBeVisible();
  });
});
