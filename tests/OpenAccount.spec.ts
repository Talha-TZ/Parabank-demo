import { test, expect } from '@playwright/test';
import { APP_URL, VALID_USERNAME, VALID_PASSWORD } from '../utils/env';
import { HomePage } from '../pages/HomePage';
import { AccountServicesPage } from '../pages/AccountServicesPage';
import { AccountFlowPage } from '../pages/AccountFlowPage';

let homePage: HomePage;
let accountServicesPage: AccountServicesPage;
let accountFlowPage: AccountFlowPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  accountServicesPage = new AccountServicesPage(page);
  accountFlowPage = new AccountFlowPage(page);
  await page.goto(APP_URL);
  await homePage.login(VALID_USERNAME, VALID_PASSWORD);
});

test.describe('Open Account feature', () => {
  test('loads the open account page and shows the account creation form', async ({ page }) => {
    await accountServicesPage.openNewAccount();
    await expect(page).toHaveTitle(/ParaBank \| Open Account/);
    await expect(accountFlowPage.newAccountTypeSelect).toBeVisible();
    await expect(accountFlowPage.openNewAccountButton).toBeVisible();
  });
});
