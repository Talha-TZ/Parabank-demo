# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomePage.spec.ts >> IncorrectPassword
- Location: tests\HomePage.spec.ts:41:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Press \"Enter\" to skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#main-container"
  - generic [ref=e4]:
    - banner [ref=e5]:
      - link "Practice Test Automation" [ref=e9] [cursor=pointer]:
        - /url: https://practicetestautomation.com/
        - img "Practice Test Automation" [ref=e10]
      - button "open menu" [ref=e13]:
        - generic [ref=e14]: open menu
        - img [ref=e15]
    - main [ref=e25]:
      - article [ref=e28]:
        - heading "Practice" [level=1] [ref=e30]
        - generic [ref=e31]:
          - separator [ref=e32]
          - generic [ref=e33]:
            - paragraph [ref=e35]:
              - link "Test Login Page" [ref=e36] [cursor=pointer]:
                - /url: https://practicetestautomation.com/practice-test-login/
            - paragraph [ref=e38]:
              - emphasis [ref=e39]: Simple login page where testers can execute positive and negative login test cases
          - separator [ref=e40]
          - generic [ref=e41]:
            - paragraph [ref=e43]:
              - link "Test Exceptions" [ref=e44] [cursor=pointer]:
                - /url: https://practicetestautomation.com/practice-test-exceptions/
            - paragraph [ref=e46]:
              - emphasis [ref=e47]: Page to reproduce the most common Selenium Exceptions.
          - separator [ref=e48]
          - generic [ref=e49]:
            - paragraph [ref=e51]:
              - link "Test Table" [ref=e52] [cursor=pointer]:
                - /url: https://practicetestautomation.com/practice-test-table/
            - paragraph [ref=e54]: Page to practice UI interactions and data validation with dynamic tables, filters, and sorting controls.
          - separator [ref=e55]
          - paragraph
    - contentinfo:
      - generic [ref=e57]:
        - text: © Copyright 2020
        - link "Practice Test Automation." [ref=e58] [cursor=pointer]:
          - /url: https://practicetestautomation.com/
        - text: All rights reserved |
        - link "Privacy Policy" [ref=e59] [cursor=pointer]:
          - /url: https://practicetestautomation.com/privacy-policy/
```

# Test source

```ts
  1  | ﻿
  2  | import { test, expect } from '@playwright/test';
  3  | import { APP_URL } from '../utils/env';
  4  | import { HomePage } from '../pages/HomePage';
  5  | import { env } from 'node:process';
  6  | 
  7  | let homePage: HomePage;
  8  | 
  9  | test.beforeEach(async ({ page }) => {
  10 |     homePage = new HomePage(page);   
  11 |      await page.goto(APP_URL);
  12 |     
  13 | });
  14 | 
  15 | 
  16 | test('CorrectData',async({page})=>{
  17 | 
  18 |     expect(await homePage.isHomePageExists()).toBe(true);
  19 | 
  20 |     await homePage.tillPageLoad();
  21 |     expect(page.url()).toContain('https://practicetestautomation.com/practice-test-login/');
  22 | 
  23 |     await homePage.enterDetails(env.VALID_USERNAME, env.VALID_PASSWORD);
  24 |     expect(page.url()).toContain('https://practicetestautomation.com/logged-in-successfully/');
  25 |     expect(await page.getByRole('heading', { name: 'Logged In Successfully' }).isVisible()).toBe(true);
  26 | 
  27 | });
  28 | 
  29 | test('IncorrectUsername',async({page})=>{
  30 |     expect(await homePage.isHomePageExists()).toBe(true);
  31 | 
  32 |     await homePage.tillPageLoad();
  33 |     expect(page.url()).toContain('https://practicetestautomation.com/practice-test-login/');
  34 | 
  35 |     await homePage.enterDetails(env.INVALID_USERNAME, env.VALID_PASSWORD);
  36 |     expect(await homePage.errorMessage.isVisible()).toBe(true);
  37 |     console.log(await homePage.errorMessage.textContent());
  38 | 
  39 | });
  40 | 
  41 | test('IncorrectPassword',async({page})=>{
> 42 |     expect(await homePage.isHomePageExists()).toBe(true);
     |                                               ^ Error: expect(received).toBe(expected) // Object.is equality
  43 | 
  44 |     await homePage.tillPageLoad();
  45 |     expect(page.url()).toContain('https://practicetestautomation.com/practice-test-login/');
  46 | 
  47 |     await homePage.enterDetails(env.VALID_USERNAME, env.INVALID_PASSWORD);
  48 |     expect(await homePage.errorMessage.isVisible()).toBe(true);
  49 |     console.log(await homePage.errorMessage.textContent());
  50 | 
  51 | });
  52 |  
  53 | 
  54 |  
  55 | 
  56 | 
  57 | 
```