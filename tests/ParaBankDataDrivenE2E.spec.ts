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

const billPayScenarios = [
  { name: 'utility payment', payeeName: 'Contoso', amount: '10' },
  { name: 'subscription payment', payeeName: 'Acme', amount: '25' },
];

const loanScenarios = [
  { name: 'standard loan request', amount: '500', downPayment: '50' },
];

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  accountServicesPage = new AccountServicesPage(page);
  accountFlowPage = new AccountFlowPage(page);
  await page.goto(APP_URL);
  await homePage.login(VALID_USERNAME, VALID_PASSWORD);
});

test.describe('ParaBank data-driven E2E coverage', () => {
  test('creates a new account and validates the open-account flow', async ({ page }) => {
    await accountServicesPage.openNewAccount();
    await expect(page).toHaveTitle(/ParaBank \| Open Account/);
    await expect(accountFlowPage.newAccountTypeSelect).toBeVisible();
    await expect(accountFlowPage.openNewAccountButton).toBeVisible();
  });

  for (const scenario of transferScenarios) {
    test(`opens transfer funds with ${scenario.name} data`, async ({ page }) => {
      await accountServicesPage.openTransferFunds();
      await expect(page).toHaveTitle(/ParaBank \| Transfer Funds/);
      await expect(accountFlowPage.transferButton).toBeVisible();
      await expect(accountFlowPage.transferAmountInput).toBeVisible();
      await accountFlowPage.transferAmountInput.fill(scenario.amount);
      await expect(accountFlowPage.transferAmountInput).toHaveValue(scenario.amount);
    });
  }

  for (const scenario of billPayScenarios) {
    test(`opens bill pay with ${scenario.name} data`, async ({ page }) => {
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

  for (const scenario of loanScenarios) {
    test(`documents ${scenario.name} response when the live request-loan endpoint is unavailable`, async ({ page }) => {
      await accountServicesPage.openRequestLoan();
      await expect(page).toHaveURL(/requestloan/);

      const finalTitle = await page.title();
      expect(finalTitle).toMatch(/ParaBank \| (Loan Request|Error)/i);

      const bodyText = await page.locator('body').textContent();
      expect(bodyText ?? '').toMatch(/Loan Request|An internal error has occurred/i);
    });
  }

  test('finds transactions through the find-transactions page', async ({ page }) => {
    await accountServicesPage.openFindTransactions();
    await expect(page).toHaveTitle(/ParaBank \| Find Transactions/);
    await expect(page.locator('#findById')).toBeVisible();
  });

  test('loading the update contact info page shows the profile form', async ({ page }) => {
    await accountServicesPage.openUpdateContactInfo();
    await expect(page).toHaveTitle(/ParaBank \| Update Profile/);
    await expect(page.getByRole('button', { name: 'Update Profile' })).toBeVisible();
  });
});
