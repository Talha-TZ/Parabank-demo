import { test, expect } from '@playwright/test';
import { APP_URL, VALID_USERNAME, VALID_PASSWORD, INVALID_USERNAME, INVALID_PASSWORD } from '../utils/env';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { AccountServicesPage } from '../pages/AccountServicesPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';

let homePage: HomePage;
let registerPage: RegisterPage;
let accountServicesPage: AccountServicesPage;

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  registerPage = new RegisterPage(page);
  accountServicesPage = new AccountServicesPage(page);
  await page.goto(APP_URL);
});

test.describe('ParaBank advanced coverage', () => {
  test('register page loads and accepts entry into all required fields', async ({ page }) => {
    await homePage.registerBtn.click();
    await expect(page).toHaveURL(/register/);
    await expect(registerPage.firstNameInput).toBeVisible();
    await expect(registerPage.lastNameInput).toBeVisible();
    await expect(registerPage.addressInput).toBeVisible();
    await expect(registerPage.cityInput).toBeVisible();
    await expect(registerPage.stateInput).toBeVisible();
    await expect(registerPage.zipcodeInput).toBeVisible();
    await expect(registerPage.phoneInput).toBeVisible();
    await expect(registerPage.SSNInput).toBeVisible();
    await expect(registerPage.usernameInput).toBeVisible();
    await expect(registerPage.passwordInput).toBeVisible();
    await expect(registerPage.confirmPInput).toBeVisible();
    await expect(registerPage.confirmBtn).toBeVisible();

    const firstName = RandomDataUtil.getFirstName();
    const lastName = RandomDataUtil.getMiddleName();
    const address = RandomDataUtil.getRandomAddress();
    const city = RandomDataUtil.getRandomCity();
    const state = RandomDataUtil.getRandomState();
    const zipCode = RandomDataUtil.getZipCode();
    const phoneNumber = RandomDataUtil.getPhoneNumber();
    const ssn = RandomDataUtil.getRandomNumeric(7);
    const username = `${RandomDataUtil.getUsername()}_${Date.now().toString().slice(-4)}`;
    const password = RandomDataUtil.getPassword();

    await registerPage.fillCredentials(firstName, lastName, address, city, state, zipCode, phoneNumber, ssn);
    await registerPage.fillusernamePWD(username, password, password);

    await expect(registerPage.firstNameInput).toHaveValue(firstName);
    await expect(registerPage.lastNameInput).toHaveValue(lastName);
    await expect(registerPage.addressInput).toHaveValue(address);
    await expect(registerPage.cityInput).toHaveValue(city);
    await expect(registerPage.stateInput).toHaveValue(state);
    await expect(registerPage.zipcodeInput).toHaveValue(zipCode);
    await expect(registerPage.phoneInput).toHaveValue(phoneNumber);
    await expect(registerPage.SSNInput).toHaveValue(ssn);
    await expect(registerPage.usernameInput).toHaveValue(username);
    await expect(registerPage.passwordInput).toHaveValue(password);
    await expect(registerPage.confirmPInput).toHaveValue(password);
  });

  test('logs in with valid credentials and reaches the overview page', async ({ page }) => {
    await homePage.login(VALID_USERNAME, VALID_PASSWORD);

    await expect(page).toHaveURL(/overview|accounts/i);
    await expect(accountServicesPage.accountsOverviewBtn).toBeVisible();
    await expect(accountServicesPage.openNewAccountBtn).toBeVisible();
    await expect(accountServicesPage.transferFundsBtn).toBeVisible();
  });

  test('shows invalid login error message for wrong credentials', async ({ page }) => {
    await homePage.login(INVALID_USERNAME, INVALID_PASSWORD);

    await expect(page.locator('body')).toContainText(/Invalid|Error|Please try again/i);
    await expect(page).toHaveURL(/parabank/);
  });

  test('opens all main account services pages from the dashboard', async ({ page }) => {
    await homePage.login(VALID_USERNAME, VALID_PASSWORD);

    await accountServicesPage.openNewAccount();
    await expect(page).toHaveTitle(/ParaBank \| Open Account/);
    await expect(page.getByRole('button', { name: 'Open New Account' })).toBeVisible();

    await accountServicesPage.openTransferFunds();
    await expect(page).toHaveTitle(/ParaBank \| Transfer Funds/);
    await expect(page.getByRole('button', { name: 'Transfer' })).toBeVisible();

    await accountServicesPage.openBillPay();
    await expect(page).toHaveTitle(/ParaBank \| Bill Pay/);
    await expect(page.getByRole('button', { name: 'Send Payment' })).toBeVisible();

    await accountServicesPage.openFindTransactions();
    await expect(page).toHaveTitle(/ParaBank \| Find Transactions/);
    await expect(page.locator('#findById')).toBeVisible();

    await accountServicesPage.openUpdateContactInfo();
    await expect(page).toHaveTitle(/ParaBank \| Update Profile/);
    await expect(page.getByRole('button', { name: 'Update Profile' })).toBeVisible();

    await accountServicesPage.openRequestLoan();
    await expect(page).toHaveTitle(/ParaBank \| Loan Request/);
    await expect(page.getByRole('button', { name: 'Apply Now' })).toBeVisible();

    await accountServicesPage.openAccountsOverview();
    await expect(page).toHaveTitle(/ParaBank \| Accounts Overview/);
  });

  test('uses the site navigation links to reach the contact page', async ({ page }) => {
    await page.getByRole('link', { name: 'Contact Us' }).click();

    await expect(page).toHaveTitle(/ParaBank \| Customer Care/);
    await expect(page.getByRole('button', { name: 'Send to Customer Care' })).toBeVisible();
  });

  test('logs the user out and returns to the homepage', async ({ page }) => {
    await homePage.login(VALID_USERNAME, VALID_PASSWORD);
    await accountServicesPage.logout();

    await expect(page).toHaveTitle(/ParaBank \| Welcome \| Online Banking/);
    await expect(homePage.loginBtn).toBeVisible();
  });
});
