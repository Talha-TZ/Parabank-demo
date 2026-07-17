import { Page, expect, Locator } from '@playwright/test';

export class HomePage {
    // Assign Variables
    readonly page : Page;
    readonly homeBtn : Locator;
    readonly aboutusBtn : Locator;
    readonly contactusBtn : Locator;

    readonly registerBtn : Locator;
    readonly forgotLoginInfoBtn : Locator;
    readonly loginBtn : Locator;

    readonly usernameInput : Locator;
    readonly passwordInput : Locator;

    readonly accountsOverviewBtn : Locator;
    readonly openNewAccountBtn : Locator;
    readonly transferFundsBtn : Locator;
    readonly billPayBtn : Locator;
    readonly findTransactionsBtn : Locator;
    readonly updateContactInfoBtn : Locator;
    readonly requestLoanBtn : Locator;
    readonly logoutBtn : Locator;





    constructor(page: Page) {
        
        // Initialize locators
        this.page = page;
        this.homeBtn = page.getByRole('link', { name: 'home', exact: true });
        this.aboutusBtn = page.getByRole('link', { name: 'about', exact: true }) ;
        this.contactusBtn = page.getByRole('link', { name: 'contact', exact: true }) ;
        
        this.registerBtn = page.getByRole('link', { name: 'Register' }) ;
        this.forgotLoginInfoBtn = page.getByRole('link', { name: 'Forgot login info?' }) ;
        this.loginBtn = page.getByRole('button', { name: 'Log In' });

        this.usernameInput = page.locator('[name="username"]') ;
        this.passwordInput = page.locator('[name="password"]');

        this.accountsOverviewBtn = page.getByRole('link', { name: 'Accounts Overview' });
        this.openNewAccountBtn = page.getByRole('link', { name: 'Open New Account' });
        this.transferFundsBtn = page.getByRole('link', { name: 'Transfer Funds' });
        this.billPayBtn = page.getByRole('link', { name: 'Bill Pay' });
        this.findTransactionsBtn = page.getByRole('link', { name: 'Find Transactions' });
        this.updateContactInfoBtn = page.getByRole('link', { name: 'Update Contact Info' });
        this.requestLoanBtn = page.getByRole('link', { name: 'Request Loan' });
        this.logoutBtn = page.getByRole('link', { name: 'Log Out' });


    }


    // Actions

    async isHomePageExists() {

        let title:string = await this.page.title();
        if(title=="ParaBank | Welcome | Online Banking")
        {
            console.log("Home page is displayed");
            return true;
        }
        return false;
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();
    }

    



}