# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomePage.spec.ts >> IncorrectUsername
- Location: tests\HomePage.spec.ts:29:5

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Press \"Enter\" to skip to content" [ref=e2] [cursor=pointer]:
    - /url: "#main-container"
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - navigation
      - link "Practice Test Automation" [ref=e10] [cursor=pointer]:
        - /url: https://practicetestautomation.com/
        - img "Practice Test Automation" [ref=e11]
      - navigation [ref=e16]:
        - navigation [ref=e17]:
          - list [ref=e18]:
            - listitem [ref=e19]:
              - link "Home" [ref=e20] [cursor=pointer]:
                - /url: https://practicetestautomation.com/
            - listitem [ref=e21]:
              - link "Practice" [ref=e22] [cursor=pointer]:
                - /url: https://practicetestautomation.com/practice/
            - listitem [ref=e23]:
              - link "Courses" [ref=e24] [cursor=pointer]:
                - /url: https://practicetestautomation.com/courses/
            - listitem [ref=e25]:
              - link "AI Workshop" [ref=e26] [cursor=pointer]:
                - /url: https://practicetestautomation.com/workshop
            - listitem [ref=e27]:
              - link "Blog" [ref=e28] [cursor=pointer]:
                - /url: https://practicetestautomation.com/blog/
            - listitem [ref=e29]:
              - link "Contact" [ref=e30] [cursor=pointer]:
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
            - textbox "Username" [ref=e39]
          - generic [ref=e40]:
            - text: Password
            - textbox "Password" [ref=e41]
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
        - link "Practice Test Automation." [ref=e74] [cursor=pointer]:
          - /url: https://practicetestautomation.com/
        - text: All rights reserved |
        - link "Privacy Policy" [ref=e75] [cursor=pointer]:
          - /url: https://practicetestautomation.com/privacy-policy/
```

# Test source

```ts
  1  | import { Page, expect, Locator } from '@playwright/test';
  2  | 
  3  | export class HomePage {
  4  |     // Assign Variables
  5  |     readonly page : Page;
  6  |     readonly practiceBtn: Locator;
  7  |     readonly testBtn: Locator;
  8  |     readonly usernameInput: Locator;
  9  |     readonly passwordInput: Locator;
  10 |     readonly submitBtn: Locator;
  11 |     readonly errorMessage: Locator;
  12 | 
  13 | 
  14 | 
  15 | 
  16 |     constructor(page: Page) {
  17 |         
  18 |         // Initialize locators
  19 |         this.page = page;
  20 |         this.practiceBtn = page.locator('a:has-text("PRACTICE")').nth(0);
  21 |         this.testBtn = page.getByRole('link', { name: 'Test Login Page' });
  22 |         this.usernameInput = page.getByRole('textbox', { name: 'Username' })
  23 |         this.passwordInput = page.getByRole('textbox', { name: 'Password' })
  24 |         this.submitBtn  = page.getByRole('button', { name: 'Submit' });
  25 |         this.errorMessage = page.locator('#error');
  26 | 
  27 |     }
  28 | 
  29 | 
  30 |     // Actions
  31 | 
  32 |     async isHomePageExists() {
  33 | 
  34 |         let title:string = await this.page.title();
  35 |         if(title=="Practice Test Automation | Learn Selenium WebDriver")
  36 |         {
  37 |             console.log("Home page is displayed");
  38 |             return true;
  39 |         }
  40 |         return false;
  41 |     }
  42 | 
  43 |     async tillPageLoad() {
  44 |         await this.practiceBtn.click();
  45 |         await this.testBtn.click();
  46 |         
  47 |     }
  48 |     async enterDetails(username: string, password: string) {
> 49 |         await this.usernameInput.fill(username);
     |                                  ^ Error: locator.fill: value: expected string, got undefined
  50 |         await this.passwordInput.fill(password);
  51 |         await this.submitBtn.click();
  52 |     }
  53 | 
  54 | 
  55 | 
  56 | 
  57 | 
  58 | 
  59 | }
```