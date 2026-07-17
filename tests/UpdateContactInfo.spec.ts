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

test.describe('Update Contact Info feature', () => {
  test('opens the profile update page and shows the update form', async ({ page }) => {
    await accountServicesPage.openUpdateContactInfo();
    await expect(page).toHaveTitle(/ParaBank \| Update Profile/);
    await expect(page.getByRole('button', { name: 'Update Profile' })).toBeVisible();
  });
});
