import { test, expect } from '@playwright/test';
import { APP_URL, VALID_USERNAME, VALID_PASSWORD } from '../utils/env';
import { HomePage } from '../pages/HomePage';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto(APP_URL);
});

test('Login and open account dashboard basics', async ({ page }) => {
    await expect(homePage.usernameInput).toBeVisible();
    await expect(homePage.passwordInput).toBeVisible();

    await homePage.login(VALID_USERNAME, VALID_PASSWORD);

    await expect(page.getByRole('link', { name: 'Accounts Overview' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Open New Account' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Transfer Funds' })).toBeVisible();
});

test('Open New Account page loads from account area', async ({ page }) => {
    await homePage.login(VALID_USERNAME, VALID_PASSWORD);

    await page.getByRole('link', { name: 'Open New Account' }).click();

    await expect(page).toHaveTitle(/ParaBank \| Open Account/);
    await expect(page.getByRole('button', { name: 'Open New Account' })).toBeVisible();
});
