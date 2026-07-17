# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HomePage.spec.ts >> CorrectData
- Location: tests\HomePage.spec.ts:16:5

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
      - article [ref=e34]:
        - heading "Hello" [level=1] [ref=e36]
        - generic [ref=e37]:
          - figure [ref=e39]:
            - img "Dmitry Shyshkin, your Selenium WebDriver instructor" [ref=e40]
          - paragraph [ref=e41]:
            - strong [ref=e42]: Welcome to Practice Test Automation!
          - paragraph [ref=e43]: I’m Dmitry Shyshkin, your guide on the path to a thriving QA career. Effortlessly master Selenium WebDriver and test automation to enhance your skills and increase your earnings.
          - paragraph [ref=e44]:
            - strong [ref=e45]: Experience and Expertise
          - paragraph [ref=e46]: As a Principal Software Development Engineer in Test, I bring over a decade of experience in automating Web UI, API, and Mobile tests using tools like Selenium WebDriver, Appium, Postman, RestAssured, and more. I began my journey as a manual QA engineer and quickly developed a passion for test automation. Having served as the lead test automation expert in various projects, I’m confident in my ability to help you excel in test automation.
          - paragraph [ref=e47]:
            - strong [ref=e48]: Beyond Test Automation
          - paragraph [ref=e49]: Not only have I automated tests, but I’ve also applied automation to job searches and even finding cheaper flights! Now, I’m eager to share this passion and knowledge with you.
          - paragraph [ref=e50]:
            - strong [ref=e51]: Courses and Achievements
          - paragraph [ref=e52]:
            - text: In 2017, I started sharing my test automation expertise through video courses, beginning with a Selenium WebDriver tutorial on YouTube. Today, I offer
            - link "nine courses with over 100,000 students" [ref=e53] [cursor=pointer]:
              - /url: https://practicetestautomation.com/courses/
            - text: ", including a"
            - strong [ref=e54]:
              - link "BestSeller XPath course" [ref=e55] [cursor=pointer]:
                - /url: https://www.udemy.com/course/xpath-locators-for-selenium/?referralCode=ACB28329B5AC2333DDCC
            - text: and a
            - strong [ref=e56]:
              - link "HighestRated Selenium course" [ref=e57] [cursor=pointer]:
                - /url: https://www.udemy.com/course/selenium-for-beginners/?referralCode=A21BE51035C15406EFA4
            - text: . With a 4.7 out of 5 instructor rating, I’m grateful to every student who has joined me on this journey.
          - paragraph [ref=e58]:
            - strong [ref=e59]: A Resourceful Website
          - paragraph [ref=e60]:
            - text: This website was carefully crafted to host a
            - strong [ref=e61]:
              - link "diverse selection of articles, standalone lectures, tips, and examples" [ref=e62] [cursor=pointer]:
                - /url: https://practicetestautomation.com/blog/
            - text: for those interested in test automation. Moreover, with a
            - strong [ref=e63]:
              - link "practical platform" [ref=e64] [cursor=pointer]:
                - /url: https://practicetestautomation.com/practice/
            - text: already established, test automation beginners can easily put their skills into practice.
          - paragraph [ref=e65]:
            - strong [ref=e66]: Looking Ahead
          - paragraph [ref=e67]: As we look ahead, I’m thrilled about the future of Practice Test Automation and delighted to have you on board!
          - paragraph [ref=e68]:
            - strong [ref=e69]: Explore and Learn
          - paragraph [ref=e70]:
            - text: Please be sure to visit our
            - strong [ref=e71]:
              - link "BLOG" [ref=e72] [cursor=pointer]:
                - /url: https://practicetestautomation.com/blog/
            - text: for engaging articles, speeches, and tutorials, and don’t miss our
            - link "COURSES" [ref=e73] [cursor=pointer]:
              - /url: https://practicetestautomation.com/courses/
              - strong [ref=e74]: COURSES
            - text: ", designed to enrich your learning experience."
          - paragraph
          - generic [ref=e76]:
            - heading "Get a FREE XPath cheat sheet by Signing Up for our newsletter" [level=6] [ref=e80]
            - generic [ref=e82]:
              - textbox "Name *" [ref=e85]
              - textbox "Email Address *" [ref=e88]
            - button "Get XPath cheat sheet" [ref=e90]
            - paragraph [ref=e91]:
              - emphasis [ref=e92]:
                - generic [ref=e93]:
                  - text: We don’t spam! Read more in our
                  - link "privacy policy" [ref=e94] [cursor=pointer]:
                    - /url: https://practicetestautomation.com/privacy-policy/
    - contentinfo:
      - generic [ref=e96]:
        - text: © Copyright 2020
        - link "Practice Test Automation." [ref=e97] [cursor=pointer]:
          - /url: https://practicetestautomation.com/
        - text: All rights reserved |
        - link "Privacy Policy" [ref=e98] [cursor=pointer]:
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
> 18 |     expect(await homePage.isHomePageExists()).toBe(true);
     |                                               ^ Error: expect(received).toBe(expected) // Object.is equality
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