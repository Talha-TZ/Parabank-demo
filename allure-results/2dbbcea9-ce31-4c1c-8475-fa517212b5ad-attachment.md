# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomePage.spec.ts >> Inventory
- Location: tests\HomePage.spec.ts:19:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "https://www.saucedemo.com/inventory.html"
Received: "https://www.saucedemo.com/"
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - generic [ref=e10]:
        - textbox "Username" [ref=e11]: env.VALID_USERNAME
        - img [ref=e12]
      - generic [ref=e14]:
        - textbox "Password" [ref=e15]: env.VALID_PASSWORD
        - img [ref=e16]
      - 'heading "Epic sadface: Username and password do not match any user in this service" [level=3] [ref=e19]':
        - button [ref=e20] [cursor=pointer]:
          - img [ref=e21]
        - text: "Epic sadface: Username and password do not match any user in this service"
      - button "Login" [active] [ref=e23] [cursor=pointer]
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "Accepted usernames are:" [level=4] [ref=e27]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e28]:
        - heading "Password for all users:" [level=4] [ref=e29]
        - text: secret_sauce
```

# Test source

```ts
  1  | ﻿
  2  | import { test, expect } from '@playwright/test';
  3  | import { APP_URL } from '../utils/env';
  4  | import { HomePage } from '../pages/HomePage';
  5  | import { LoginPage } from '../pages/LoginPage';
  6  | import { env } from 'node:process';
  7  | 
  8  | let homePage: HomePage;
  9  | let loginPage: LoginPage;
  10 | 
  11 | test.beforeEach(async ({ page }) => {
  12 |     homePage = new HomePage(page); 
  13 |     loginPage = new LoginPage(page);  
  14 |      await page.goto(APP_URL);
  15 |     
  16 | });
  17 | 
  18 | 
  19 | test('Inventory',async({page})=>{
  20 | 
  21 |     //expect(await homePage.isHomePageExists()).toBe(true);
  22 |         await loginPage.login('env.VALID_USERNAME', 'env.VALID_PASSWORD');
> 23 |         expect(page.url()).toBe('https://www.saucedemo.com/inventory.html');
     |                            ^ Error: expect(received).toBe(expected) // Object.is equality
  24 |     await homePage.getItemDescription();
  25 | 
  26 | });
  27 | 
```