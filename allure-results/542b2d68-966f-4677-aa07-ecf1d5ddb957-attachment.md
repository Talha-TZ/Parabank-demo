# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndtoEnd.spec.ts >> EndtoEnd
- Location: tests\EndtoEnd.spec.ts:25:5

# Error details

```
TypeError: received is not iterable
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
      - generic [ref=e15]: "Checkout: Complete!"
    - generic [ref=e16]:
      - img "Pony Express" [ref=e17]
      - heading "Thank you for your order!" [level=2] [ref=e18]
      - generic [ref=e19]: Your order has been dispatched, and will arrive just as fast as the pony can get there!
      - generic [ref=e20]:
        - button "Back Home" [ref=e21] [cursor=pointer]
        - button "Generate PDF order" [ref=e22] [cursor=pointer]
  - contentinfo [ref=e23]:
    - list [ref=e24]:
      - listitem [ref=e25]:
        - link "Twitter" [ref=e26] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e27]:
        - link "Facebook" [ref=e28] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e29]:
        - link "LinkedIn" [ref=e30] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e31]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | import { APP_URL } from '../utils/env';
  4  | import { VALID_USERNAME} from '../utils/env';
  5  | import { VALID_PASSWORD } from '../utils/env';
  6  | import { HomePage } from '../pages/HomePage';
  7  | import { LoginPage } from '../pages/LoginPage';
  8  | import { env } from 'node:process';
  9  | import { CheckoutPage } from '../pages/CheckoutPage';
  10 | import { RandomDataUtil } from '../utils/randomDataGenerator';
  11 | 
  12 | let homePage: HomePage;
  13 | let loginPage: LoginPage;
  14 | let checkoutPage: CheckoutPage;
  15 | 
  16 | test.beforeEach(async ({ page }) => {
  17 |     homePage = new HomePage(page);
  18 |     loginPage = new LoginPage(page); 
  19 |     checkoutPage = new CheckoutPage(page);  
  20 |      await page.goto(APP_URL);
  21 |     
  22 | });
  23 | 
  24 | 
  25 | test('EndtoEnd',async({page})=>{
  26 | 
  27 |     expect(await homePage.isHomePageExists()).toBe(true);
  28 | 
  29 |     await loginPage.login(VALID_USERNAME,VALID_PASSWORD);
  30 | 
  31 |     await page.waitForTimeout(2000);
  32 | 
  33 |     await homePage.getItemDescription();
  34 |     
  35 |     await homePage.addItemToCartandprint();
  36 |     await page.waitForTimeout(2000);
  37 | 
  38 |     await homePage.pressCheckoutBtn();
  39 | 
  40 |     //let firstname = RandomDataUtil.getFirstName();
  41 | 
  42 |     await checkoutPage.checkoutDataFill(RandomDataUtil.getFirstName(), RandomDataUtil.getMiddleName(), RandomDataUtil.getZipCode());
  43 |     await page.waitForTimeout(2000);
  44 | 
  45 |     await checkoutPage.checkoutDataContainerData();
  46 |     await page.waitForTimeout(2000);
  47 | 
  48 |     await checkoutPage.clickFinishBtn();
> 49 |     expect(page.textContent).toContain("Thank you for your order!");
     |                              ^ TypeError: received is not iterable
  50 | 
  51 | 
  52 | 
  53 | 
  54 |     
  55 | 
  56 | });
  57 | 
  58 | 
  59 |  
  60 | 
  61 |  
  62 | 
  63 | 
  64 | 
```