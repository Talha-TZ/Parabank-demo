import { test, expect } from '@playwright/test';
import { APP_URL, VALID_USERNAME, VALID_PASSWORD } from '../utils/env';
import { HomePage } from '../pages/HomePage';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto(APP_URL);
    await homePage.login(VALID_USERNAME, VALID_PASSWORD);
});

test('Account services menu basics', async ({ page }) => {
    await expect(page).toHaveTitle(/ParaBank \| Accounts Overview/);
    await expect(homePage.openNewAccountBtn).toBeVisible();
    await expect(homePage.accountsOverviewBtn).toBeVisible();
    await expect(homePage.transferFundsBtn).toBeVisible();
    await expect(homePage.billPayBtn).toBeVisible();
    await expect(homePage.findTransactionsBtn).toBeVisible();
    await expect(homePage.updateContactInfoBtn).toBeVisible();
    await expect(homePage.requestLoanBtn).toBeVisible();
    await expect(homePage.logoutBtn).toBeVisible();
});

test('Open New Account page loads', async ({ page }) => {
    await homePage.openNewAccountBtn.click();
    await expect(page).toHaveTitle(/ParaBank \| Open Account/);
    await expect(page.getByRole('button', { name: 'Open New Account' })).toBeVisible();
});

test('Transfer Funds page loads', async ({ page }) => {
    await homePage.transferFundsBtn.click();
    await expect(page).toHaveTitle(/ParaBank \| Transfer Funds/);
    await expect(page.getByRole('button', { name: 'Transfer' })).toBeVisible();
});

test('Bill Pay page loads', async ({ page }) => {
    await homePage.billPayBtn.click();
    await expect(page).toHaveTitle(/ParaBank \| Bill Pay/);
    await expect(page.getByRole('button', { name: 'Send Payment' })).toBeVisible();
});

test('Find Transactions page loads', async ({ page }) => {
    await homePage.findTransactionsBtn.click();
    await expect(page).toHaveTitle(/ParaBank \| Find Transactions/);
    await expect(page.locator('#findById')).toBeVisible();
});

test('Update Contact Info page loads', async ({ page }) => {
    await homePage.updateContactInfoBtn.click();
    await expect(page).toHaveTitle(/ParaBank \| Update Profile/);
    await expect(page.getByRole('button', { name: 'Update Profile' })).toBeVisible();
});

test('Request Loan page loads', async ({ page }) => {
    await homePage.requestLoanBtn.click();
    await expect(page).toHaveTitle(/ParaBank \| Loan Request/);
    await expect(page.getByRole('button', { name: 'Apply Now' })).toBeVisible();
});

test('Logout returns to home page', async ({ page }) => {
    await homePage.logoutBtn.click();
    await expect(page).toHaveTitle(/ParaBank \| Welcome \| Online Banking/);
    await expect(page.getByRole('button', { name: 'Log In' })).toBeVisible();
});
