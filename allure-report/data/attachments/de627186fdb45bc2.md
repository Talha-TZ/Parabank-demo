# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: RegisterPage.spec.ts >> registers a new user and reaches the account overview when the live site accepts the username
- Location: tests\RegisterPage.spec.ts:22:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('[name="username"]')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('[name="username"]')

```

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- paragraph: Welcome Isabell Dylan
- heading "Account Services" [level=2]
- list:
  - listitem:
    - link "Open New Account":
      - /url: openaccount.htm
  - listitem:
    - link "Accounts Overview":
      - /url: overview.htm
  - listitem:
    - link "Transfer Funds":
      - /url: transfer.htm
  - listitem:
    - link "Bill Pay":
      - /url: billpay.htm
  - listitem:
    - link "Find Transactions":
      - /url: findtrans.htm
  - listitem:
    - link "Update Contact Info":
      - /url: updateprofile.htm
  - listitem:
    - link "Request Loan":
      - /url: requestloan.htm
  - listitem:
    - link "Log Out":
      - /url: logout.htm
- heading "Welcome Lou77_260621" [level=1]
- paragraph: Your account was created successfully. You are now logged in.
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
```

# Test source

```ts
  1   | 
  2   | import { test, expect } from '@playwright/test';
  3   | import { APP_URL } from '../utils/env';
  4   | import { RandomDataUtil } from '../utils/randomDataGenerator';
  5   | //import { VALID_USERNAME} from '../utils/env';
  6   | //import { VALID_PASSWORD } from '../utils/env';
  7   | import { HomePage } from '../pages/HomePage';
  8   | import { RegisterPage } from '../pages/RegisterPage';
  9   | import { env } from 'node:process';
  10  | 
  11  | let homePage: HomePage;
  12  | let registerPage : RegisterPage;
  13  | 
  14  | test.beforeEach(async ({ page }) => {
  15  |     homePage = new HomePage(page);  
  16  |     registerPage = new RegisterPage(page);
  17  |      await page.goto(APP_URL);
  18  |     
  19  | });
  20  | 
  21  | 
  22  | test('registers a new user and reaches the account overview when the live site accepts the username',async({page})=>{
  23  | 
  24  |      await expect(homePage.registerBtn).toBeVisible();
  25  |      await homePage.registerBtn.click();
  26  | 
  27  |      await expect(page).toHaveURL(/register/);
  28  |      await expect(registerPage.firstNameInput).toBeVisible();
  29  |      await expect(registerPage.confirmBtn).toBeVisible();
  30  |      await page.waitForTimeout(5000);
  31  |      
  32  |      const firstName = RandomDataUtil.getFirstName();
  33  |      const lastName = RandomDataUtil.getMiddleName();
  34  |      const address = RandomDataUtil.getRandomAddress();
  35  |      const city = RandomDataUtil.getRandomCity();
  36  |      const state = RandomDataUtil.getRandomState();
  37  |      const zipCode = RandomDataUtil.getZipCode();
  38  |      const phoneNumber = RandomDataUtil.getPhoneNumber();
  39  |      const ssn = RandomDataUtil.getRandomNumeric(7);
  40  | 
  41  |      await registerPage.fillCredentials(
  42  |         firstName,
  43  |         lastName,
  44  |         address,
  45  |         city,
  46  |         state,
  47  |         zipCode,
  48  |         phoneNumber,
  49  |         ssn
  50  |      );
  51  | 
  52  |      await expect(registerPage.firstNameInput).toHaveValue(firstName);
  53  |      await expect(registerPage.lastNameInput).toHaveValue(lastName);
  54  |      await expect(registerPage.addressInput).toHaveValue(address);
  55  |      await expect(registerPage.cityInput).toHaveValue(city);
  56  |      await expect(registerPage.stateInput).toHaveValue(state);
  57  |      await expect(registerPage.zipcodeInput).toHaveValue(zipCode);
  58  |      await expect(registerPage.phoneInput).toHaveValue(phoneNumber);
  59  |      await expect(registerPage.SSNInput).toHaveValue(ssn);
  60  | 
  61  |      await page.waitForTimeout(2000);
  62  |      const user = `${RandomDataUtil.getUsername()}_${Date.now().toString().slice(-6)}`;
  63  |      const pwd = RandomDataUtil.getPassword();
  64  | 
  65  |      await registerPage.fillusernamePWD(user , pwd , pwd);
  66  | 
  67  |      await expect(registerPage.usernameInput).toHaveValue(user);
  68  |      await expect(registerPage.passwordInput).toHaveValue(pwd);
  69  |      await expect(registerPage.confirmPInput).toHaveValue(pwd);
  70  | 
  71  |      await page.waitForTimeout(3000);
  72  | 
  73  |      await registerPage.register();
  74  |      await page.waitForTimeout(2000);
  75  | 
  76  |      const registrationBodyText = await page.locator('body').textContent();
  77  | 
  78  |      if (registrationBodyText?.match(/This username already exists/i)) {
  79  |          await expect(page.locator('body')).toContainText(/This username already exists/i);
  80  |          console.log('Registration was rejected by the live site because the generated username already exists.');
  81  |          return;
  82  |      }
  83  | 
  84  |      await expect(page.locator('body')).toContainText(/Welcome|Account Services|Customer Created/);
  85  | 
> 86  |      await expect(homePage.usernameInput).toBeVisible();
      |                                           ^ Error: expect(locator).toBeVisible() failed
  87  |      await homePage.login(user, pwd);
  88  | 
  89  |      await expect(page).toHaveURL(/overview|accounts/i);
  90  |      await expect(page.getByRole('link', { name: 'Accounts Overview' })).toBeVisible();
  91  |      await expect(page.getByRole('link', { name: 'Open New Account' })).toBeVisible();
  92  |      await expect(page.getByRole('link', { name: 'Transfer Funds' })).toBeVisible();
  93  | 
  94  |      console.log("First Name = " + firstName + "   |   Last Name = " + lastName);
  95  |      console.log("User Name = " + user + "   |   Password = " + pwd);
  96  | 
  97  | 
  98  | 
  99  | 
  100 | });
  101 | 
```