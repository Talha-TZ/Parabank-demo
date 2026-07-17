import { test, expect } from '@playwright/test';
import { APP_URL, VALID_USERNAME, VALID_PASSWORD } from '../utils/env';
import { HomePage } from '../pages/HomePage';
import { AccountServicesPage } from '../pages/AccountServicesPage';
import { AccountFlowPage } from '../pages/AccountFlowPage';

let homePage: HomePage;
let accountServicesPage: AccountServicesPage;
let accountFlowPage: AccountFlowPage;

const transferScenarios = [
  { name: 'small transfer', amount: '1' },
  { name: 'medium transfer', amount: '25' },
  { name: 'large transfer', amount: '100' },
];

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  accountServicesPage = new AccountServicesPage(page);
  accountFlowPage = new AccountFlowPage(page);
  await page.goto(APP_URL);
  await homePage.login(VALID_USERNAME, VALID_PASSWORD);
});

test.describe('Transfer Funds feature', () => {
  for (const scenario of transferScenarios) {
    test(`loads the transfer form with ${scenario.name} data`, async ({ page }) => {
      await accountServicesPage.openTransferFunds();
      await expect(page).toHaveTitle(/ParaBank \| Transfer Funds/);
      await expect(accountFlowPage.fromAccountSelect).toBeVisible();
      await expect(accountFlowPage.toAccountSelect).toBeVisible();
      await expect(accountFlowPage.transferAmountInput).toBeVisible();
      await expect(accountFlowPage.transferButton).toBeVisible();

      await accountFlowPage.transferAmountInput.fill(scenario.amount);
      await expect(accountFlowPage.transferAmountInput).toHaveValue(scenario.amount);
    });
  }
});
