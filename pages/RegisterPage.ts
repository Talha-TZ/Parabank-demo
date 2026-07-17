import { Page, expect, Locator } from '@playwright/test';

export class RegisterPage {
    // Assign Variables
    readonly page : Page;
    readonly firstNameInput : Locator;
    readonly lastNameInput : Locator;
    readonly addressInput : Locator;
    readonly cityInput : Locator;
    readonly stateInput : Locator;
    readonly zipcodeInput : Locator;
    readonly phoneInput : Locator;
    readonly SSNInput : Locator;

    readonly usernameInput : Locator;
    readonly passwordInput : Locator;
    readonly confirmPInput : Locator;

    readonly confirmBtn : Locator;







    constructor(page: Page) {
        
        // Initialize locators
        this.page = page;
        this.firstNameInput = page.locator("input[id='customer.firstName']");
        this.lastNameInput = page.locator(`//tr[td[contains(., 'Last Name:')]]//input[@type='text']`);
        this.addressInput = page.locator(`//tr[td[contains(., 'Address:')]]//input[@type='text']`) ;
        this.cityInput = page.locator(`//tr[td[contains(., 'City:')]]//input[@type='text']`) ;
        this.stateInput = page.locator(`//tr[td[contains(., 'State:')]]//input[@type='text']`) ;
        this.zipcodeInput = page.locator(`//tr[td[contains(., 'Zip Code:')]]//input[@type='text']`) ;
        this.phoneInput = page.locator(`//tr[td[contains(., 'Phone #:')]]//input[@type='text']`);
        this.SSNInput = page.locator(`//tr[td[contains(., 'SSN:')]]//input[@type='text']`) ;

        this.usernameInput = page.locator(`//tr[td[contains(., 'Username:')]]//input[@type='text']`) ;
        this.passwordInput = page.locator(`//tr[td[contains(., 'Password:')]]//input[@type='password']`);
        this.confirmPInput = page.locator(`//tr[td[contains(., 'Confirm:')]]//input[@type='password']`);

        this.confirmBtn = page.locator("//input[@value='Register']");
    }


    // Actions

    async fillCredentials(
        firstName : string,
        lastName : string,
        address : string,
        city : string,
        state: string,
        zipcode : string,
        phone : string,
        SSN : string,

    ){
        await this.firstNameInput.click();
        await this.firstNameInput.fill(firstName);

        await this.lastNameInput.fill(lastName);

        await this.addressInput.fill(address);

        await this.cityInput.fill(city);

        await this.stateInput.fill(state);

        await this.zipcodeInput.fill(zipcode);

        await this.phoneInput.fill(phone);

        await this.SSNInput.fill(SSN);


    }

    async fillusernamePWD(username : string, password : string, cpassword : string){
       
        await this.usernameInput.fill(username);

        await this.passwordInput.fill(password);

        await this.confirmPInput.fill(cpassword);
  
    }

    async register(){

        await this.confirmBtn.click();
    }


    



}