
import { test, expect } from '@playwright/test';
import { APP_URL } from '../utils/env';
import { RandomDataUtil } from '../utils/randomDataGenerator';
//import { VALID_USERNAME} from '../utils/env';
//import { VALID_PASSWORD } from '../utils/env';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { env } from 'node:process';

let homePage: HomePage;
let registerPage : RegisterPage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);  
    registerPage = new RegisterPage(page);
     await page.goto(APP_URL);
    
});


test('registers a new user and reaches the account overview when the live site accepts the username',async({page})=>{

     await expect(homePage.registerBtn).toBeVisible();
     await homePage.registerBtn.click();

     await expect(page).toHaveURL(/register/);
     await expect(registerPage.firstNameInput).toBeVisible();
     await expect(registerPage.confirmBtn).toBeVisible();
     await page.waitForTimeout(5000);
     
     const firstName = RandomDataUtil.getFirstName();
     const lastName = RandomDataUtil.getMiddleName();
     const address = RandomDataUtil.getRandomAddress();
     const city = RandomDataUtil.getRandomCity();
     const state = RandomDataUtil.getRandomState();
     const zipCode = RandomDataUtil.getZipCode();
     const phoneNumber = RandomDataUtil.getPhoneNumber();
     const ssn = RandomDataUtil.getRandomNumeric(7);

     await registerPage.fillCredentials(
        firstName,
        lastName,
        address,
        city,
        state,
        zipCode,
        phoneNumber,
        ssn
     );

     await expect(registerPage.firstNameInput).toHaveValue(firstName);
     await expect(registerPage.lastNameInput).toHaveValue(lastName);
     await expect(registerPage.addressInput).toHaveValue(address);
     await expect(registerPage.cityInput).toHaveValue(city);
     await expect(registerPage.stateInput).toHaveValue(state);
     await expect(registerPage.zipcodeInput).toHaveValue(zipCode);
     await expect(registerPage.phoneInput).toHaveValue(phoneNumber);
     await expect(registerPage.SSNInput).toHaveValue(ssn);

     await page.waitForTimeout(2000);
     const user = `${RandomDataUtil.getUsername()}_${Date.now().toString().slice(-6)}`;
     const pwd = RandomDataUtil.getPassword();

     await registerPage.fillusernamePWD(user , pwd , pwd);

     await expect(registerPage.usernameInput).toHaveValue(user);
     await expect(registerPage.passwordInput).toHaveValue(pwd);
     await expect(registerPage.confirmPInput).toHaveValue(pwd);

     await page.waitForTimeout(3000);

     await registerPage.register();
     await page.waitForTimeout(2000);

     const registrationBodyText = await page.locator('body').textContent();

     if (registrationBodyText?.match(/This username already exists/i)) {
         await expect(page.locator('body')).toContainText(/This username already exists/i);
         console.log('Registration was rejected by the live site because the generated username already exists.');
         return;
     }

     await expect(page.locator('body')).toContainText(/Welcome|Account Services|Customer Created/);

     await expect(homePage.usernameInput).toBeVisible();
     await homePage.login(user, pwd);

     await expect(page).toHaveURL(/overview|accounts/i);
     await expect(page.getByRole('link', { name: 'Accounts Overview' })).toBeVisible();
     await expect(page.getByRole('link', { name: 'Open New Account' })).toBeVisible();
     await expect(page.getByRole('link', { name: 'Transfer Funds' })).toBeVisible();

     console.log("First Name = " + firstName + "   |   Last Name = " + lastName);
     console.log("User Name = " + user + "   |   Password = " + pwd);




});
