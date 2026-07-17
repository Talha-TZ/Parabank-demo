# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: RegisterPage.spec.ts >> Register User
- Location: tests\RegisterPage.spec.ts:22:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('#customer.firstName')

```

# Test source

```ts
  1  | import { Page, expect, Locator } from '@playwright/test';
  2  | 
  3  | export class RegisterPage {
  4  |     // Assign Variables
  5  |     readonly page : Page;
  6  |     readonly firstNameInput : Locator;
  7  |     readonly lastNameInput : Locator;
  8  |     readonly addressInput : Locator;
  9  |     readonly cityInput : Locator;
  10 |     readonly stateInput : Locator;
  11 |     readonly zipcodeInput : Locator;
  12 |     readonly phoneInput : Locator;
  13 |     readonly SSNInput : Locator;
  14 | 
  15 |     readonly usernameInput : Locator;
  16 |     readonly passwordInput : Locator;
  17 |     readonly confirmPInput : Locator;
  18 | 
  19 |     readonly confirmBtn : Locator;
  20 | 
  21 | 
  22 | 
  23 | 
  24 | 
  25 | 
  26 | 
  27 |     constructor(page: Page) {
  28 |         
  29 |         // Initialize locators
  30 |         this.page = page;
  31 |         this.firstNameInput = page.locator('#customer\.firstName') ;
  32 |         this.lastNameInput = page.locator('#customer\.lastName');
  33 |         this.addressInput = page.locator('#customer\.address\.street') ;
  34 |         this.cityInput = page.locator('#customer\.address\.city') ;
  35 |         this.stateInput = page.locator('#customer\.address\.state') ;
  36 |         this.zipcodeInput = page.locator('#customer\.address\.zipCode') ;
  37 |         this.phoneInput = page.locator('#customer\.phoneNumber');
  38 |         this.SSNInput = page.locator('#customer\.ssn') ;
  39 | 
  40 |         this.usernameInput = page.locator('#customer\.username') ;
  41 |         this.passwordInput = page.locator('#customer\.password');
  42 |         this.confirmPInput = page.locator('#repeatedPassword');
  43 | 
  44 |         this.confirmBtn = page.locator("//input[@value='Register']");
  45 |     }
  46 | 
  47 | 
  48 |     // Actions
  49 | 
  50 |     async fillCredentials(
  51 |         firstName : string,
  52 |         lastName : string,
  53 |         address : string,
  54 |         city : string,
  55 |         state: string,
  56 |         zipcode : string,
  57 |         phone : string,
  58 |         SSN : string,
  59 | 
  60 |     ){
> 61 |         this.firstNameInput.fill(firstName);
     |                             ^ Error: locator.fill: Test ended.
  62 |         this.lastNameInput.fill(lastName);
  63 |         this.addressInput.fill(address);
  64 |         this.cityInput.fill(city);
  65 |         this.stateInput.fill(state);
  66 |         this.zipcodeInput.fill(zipcode);
  67 |         this.phoneInput.fill(phone);
  68 |         this.SSNInput.fill(SSN);
  69 | 
  70 |     }
  71 | 
  72 |     async fillusernamePWD(username : string, password : string, cpassword : string){
  73 |        
  74 |         this.usernameInput.fill(username);
  75 |         this.passwordInput.fill(password);
  76 |         this.confirmPInput.fill(cpassword);
  77 |     }
  78 | 
  79 |     async register(){
  80 | 
  81 |         this.confirmBtn.click();
  82 |     }
  83 | 
  84 | 
  85 |     
  86 | 
  87 | 
  88 | 
  89 | }
```