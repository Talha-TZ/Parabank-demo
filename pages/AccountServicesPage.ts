import { Locator, Page } from '@playwright/test';

export class AccountServicesPage {
  readonly page: Page;

  readonly accountsOverviewBtn: Locator;
  readonly openNewAccountBtn: Locator;
  readonly transferFundsBtn: Locator;
  readonly billPayBtn: Locator;
  readonly findTransactionsBtn: Locator;
  readonly updateContactInfoBtn: Locator;
  readonly requestLoanBtn: Locator;
  readonly logoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.accountsOverviewBtn = page.getByRole('link', { name: 'Accounts Overview' });
    this.openNewAccountBtn = page.getByRole('link', { name: 'Open New Account' });
    this.transferFundsBtn = page.getByRole('link', { name: 'Transfer Funds' });
    this.billPayBtn = page.getByRole('link', { name: 'Bill Pay' });
    this.findTransactionsBtn = page.getByRole('link', { name: 'Find Transactions' });
    this.updateContactInfoBtn = page.getByRole('link', { name: 'Update Contact Info' });
    this.requestLoanBtn = page.getByRole('link', { name: 'Request Loan' });
    this.logoutBtn = page.getByRole('link', { name: 'Log Out' });
  }

  async openAccountsOverview() {
    await this.accountsOverviewBtn.click();
  }

  async openNewAccount() {
    await this.openNewAccountBtn.click();
  }

  async openTransferFunds() {
    await this.transferFundsBtn.click();
  }

  async openBillPay() {
    await this.billPayBtn.click();
  }

  async openFindTransactions() {
    await this.findTransactionsBtn.click();
  }

  async openUpdateContactInfo() {
    await this.updateContactInfoBtn.click();
  }

  async openRequestLoan() {
    await this.requestLoanBtn.click();
  }

  async logout() {
    await this.logoutBtn.click();
  }
}
