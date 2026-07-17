import { test, expect } from '@playwright/test';
import { APP_URL, VALID_USERNAME, VALID_PASSWORD } from '../utils/env';
import { HomePage } from '../pages/HomePage';
import { AccountServicesPage } from '../pages/AccountServicesPage';
import { AccountFlowPage } from '../pages/AccountFlowPage';

let homePage: HomePage;
let accountServicesPage: AccountServicesPage;
let accountFlowPage: AccountFlowPage;

const billPayScenarios = [
  { name: 'utility payment', payeeName: 'Contoso', amount: '10' },
  { name: 'subscription payment', payeeName: 'Acme', amount: '25' },
];

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  accountServicesPage = new AccountServicesPage(page);
  accountFlowPage = new AccountFlowPage(page);
  await page.goto(APP_URL);
  await homePage.login(VALID_USERNAME, VALID_PASSWORD);
});

test.describe('Bill Pay feature', () => {
  for (const scenario of billPayScenarios) {
    test(`loads bill pay with ${scenario.name}`, async ({ page }) => {
      await accountServicesPage.openBillPay();
      await expect(page).toHaveTitle(/ParaBank \| Bill Pay/);
      await expect(accountFlowPage.billPayPayeeNameInput).toBeVisible();
      await expect(accountFlowPage.billPayAmountInput).toBeVisible();
      await expect(accountFlowPage.billPaySubmitButton).toBeVisible();

      await accountFlowPage.billPayPayeeNameInput.fill(scenario.payeeName);
      await accountFlowPage.billPayAmountInput.fill(scenario.amount);

      await expect(accountFlowPage.billPayPayeeNameInput).toHaveValue(scenario.payeeName);
      await expect(accountFlowPage.billPayAmountInput).toHaveValue(scenario.amount);
    });
  }
});
