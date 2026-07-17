# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomePage.spec.ts >> Inventory
- Location: tests\HomePage.spec.ts:16:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
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
  16 | test('Inventory',async({page})=>{
  17 | 
> 18 |     expect(await homePage.isHomePageExists()).toBe(true);
     |                                               ^ Error: expect(received).toBe(expected) // Object.is equality
  19 | 
  20 |     await homePage.getItemDescription();
  21 | 
  22 | });
  23 | 
```