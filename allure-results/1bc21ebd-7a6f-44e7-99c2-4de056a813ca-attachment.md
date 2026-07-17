# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomePage.spec.ts >> CorrectData
- Location: tests\HomePage.spec.ts:16:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "https://practicetestautomation.com/logged-in-successfully/"
Received string:    "https://practicetestautomation.com/practice-test-login/"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Press \"Enter\" to skip to content" [ref=e2]:
    - /url: "#main-container"
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - navigation
      - link "Practice Test Automation" [ref=e10]:
        - /url: https://practicetestautomation.com/
        - img "Practice Test Automation" [ref=e11]
      - navigation [ref=e16]:
        - navigation [ref=e17]:
          - list [ref=e18]:
            - listitem [ref=e19]:
              - link "Home" [ref=e20]:
                - /url: https://practicetestautomation.com/
            - listitem [ref=e21]:
              - link "Practice" [ref=e22]:
                - /url: https://practicetestautomation.com/practice/
            - listitem [ref=e23]:
              - link "Courses" [ref=e24]:
                - /url: https://practicetestautomation.com/courses/
            - listitem [ref=e25]:
              - link "AI Workshop" [ref=e26]:
                - /url: https://practicetestautomation.com/workshop
            - listitem [ref=e27]:
              - link "Blog" [ref=e28]:
                - /url: https://practicetestautomation.com/blog/
            - listitem [ref=e29]:
              - link "Contact" [ref=e30]:
                - /url: https://practicetestautomation.com/contact/
    - main [ref=e31]:
      - generic [ref=e32]:
        - heading "Test login" [level=2] [ref=e33]
        - list [ref=e34]:
          - listitem [ref=e35]: This is a simple Login page. Students can use this page to practice writing simple positive and negative LogIn tests. Login functionality is something that most of the test automation engineers need to automate.
          - listitem [ref=e36]:
            - text: "Use next credentials to execute Login:"
            - text: "Username: student"
            - text: "Password: Password123"
        - generic [ref=e37]:
          - generic [ref=e38]:
            - text: Username
            - textbox "Username" [ref=e39]: student
          - generic [ref=e40]:
            - text: Password
            - textbox "Password" [ref=e41]: Password123
          - button "Submit" [ref=e42] [cursor=pointer]
        - generic [ref=e43]: Your username is invalid!
        - separator [ref=e44]
        - 'heading "Test case 1: Positive LogIn test" [level=5] [ref=e45]'
        - list [ref=e46]:
          - listitem [ref=e47]: Open page
          - listitem [ref=e48]: Type username student into Username field
          - listitem [ref=e49]: Type password Password123 into Password field
          - listitem [ref=e50]: Push Submit button
          - listitem [ref=e51]: Verify new page URL contains practicetestautomation.com/logged-in-successfully/
          - listitem [ref=e52]: Verify new page contains expected text ('Congratulations' or 'successfully logged in')
          - listitem [ref=e53]: Verify button Log out is displayed on the new page
        - separator [ref=e54]
        - 'heading "Test case 2: Negative username test" [level=5] [ref=e55]'
        - list [ref=e56]:
          - listitem [ref=e57]: Open page
          - listitem [ref=e58]: Type username incorrectUser into Username field
          - listitem [ref=e59]: Type password Password123 into Password field
          - listitem [ref=e60]: Push Submit button
          - listitem [ref=e61]: Verify error message is displayed
          - listitem [ref=e62]: Verify error message text is Your username is invalid!
        - separator [ref=e63]
        - 'heading "Test case 3: Negative password test" [level=5] [ref=e64]'
        - list [ref=e65]:
          - listitem [ref=e66]: Open page
          - listitem [ref=e67]: Type username student into Username field
          - listitem [ref=e68]: Type password incorrectPassword into Password field
          - listitem [ref=e69]: Push Submit button
          - listitem [ref=e70]: Verify error message is displayed
          - listitem [ref=e71]: Verify error message text is Your password is invalid!
    - contentinfo:
      - generic [ref=e73]:
        - text: © Copyright 2020
        - link "Practice Test Automation." [ref=e74]:
          - /url: https://practicetestautomation.com/
        - text: All rights reserved |
        - link "Privacy Policy" [ref=e75]:
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
> 24 |     expect(page.url()).toContain('https://practicetestautomation.com/logged-in-successfully/');
     |                        ^ Error: expect(received).toContain(expected) // indexOf
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
  42 |     expect(await homePage.isHomePageExists()).toBe(true);
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