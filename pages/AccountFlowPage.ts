import { Locator, Page } from '@playwright/test';

export class AccountFlowPage {
  readonly page: Page;

  readonly newAccountTypeSelect: Locator;
  readonly openNewAccountButton: Locator;
  readonly fromAccountSelect: Locator;
  readonly toAccountSelect: Locator;
  readonly transferAmountInput: Locator;
  readonly transferButton: Locator;
  readonly billPayPayeeNameInput: Locator;
  readonly billPayAddressInput: Locator;
  readonly billPayCityInput: Locator;
  readonly billPayStateInput: Locator;
  readonly billPayZipcodeInput: Locator;
  readonly billPayPhoneInput: Locator;
  readonly billPayAccountInput: Locator;
  readonly billPayAmountInput: Locator;
  readonly billPaySubmitButton: Locator;
  readonly loanAmountInput: Locator;
  readonly loanDownPaymentInput: Locator;
  readonly loanFromAccountSelect: Locator;
  readonly loanApplyButton: Locator;
  readonly transactionIdInput: Locator;
  readonly findTransactionButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.newAccountTypeSelect = page.locator('select#type');
    this.openNewAccountButton = page.getByRole('button', { name: 'Open New Account' });

    this.fromAccountSelect = page.locator('select#fromAccountId');
    this.toAccountSelect = page.locator('select#toAccountId');
    this.transferAmountInput = page.locator('input#amount');
    this.transferButton = page.getByRole('button', { name: 'Transfer' });

    this.billPayPayeeNameInput = page.locator('input[name="payee.name"]');
    this.billPayAddressInput = page.locator('input[name="payee.address.street"]');
    this.billPayCityInput = page.locator('input[name="payee.address.city"]');
    this.billPayStateInput = page.locator('input[name="payee.address.state"]');
    this.billPayZipcodeInput = page.locator('input[name="payee.address.zipCode"]');
    this.billPayPhoneInput = page.locator('input[name="payee.phoneNumber"]');
    this.billPayAccountInput = page.locator('input[name="payee.accountNumber"]');
    this.billPayAmountInput = page.locator('input[name="amount"]');
    this.billPaySubmitButton = page.getByRole('button', { name: 'Send Payment' });

    this.loanAmountInput = page.locator('input[name="amount"]');
    this.loanDownPaymentInput = page.locator('input[name="downPayment"]');
    this.loanFromAccountSelect = page.locator('select#fromAccountId');
    this.loanApplyButton = page.getByRole('button', { name: 'Apply Now' });

    this.transactionIdInput = page.locator('input#criteria.amount');
    this.findTransactionButton = page.getByRole('button', { name: 'Find Transactions' });
  }
}
