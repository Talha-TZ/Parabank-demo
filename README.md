# ParaBank Playwright Automation Suite

This workspace contains a Playwright + TypeScript automation suite for the public ParaBank demo site.

## What the suite covers

- Home page and site navigation smoke checks
- Registration flow
- Login and dashboard access
- Open New Account flow
- Transfer Funds flow
- Bill Pay flow
- Find Transactions flow
- Update Contact Info flow
- Request Loan page behavior check
- Basic account-services navigation coverage

## Prerequisites

- Node.js installed
- Dependencies installed with:

```bash
npm install
```

## Run the suite

From the project root:

```bash
npm test
```

Run in headed mode:

```bash
npm run test:headed
```

Run only the Chromium project:

```bash
npm run test:chromium
```

Run with a simple line reporter:

```bash
npm run test:report
```

## Notes

- The suite is configured for one worker to keep the live-site flow stable.
- Reports are generated in HTML and Allure formats.
- Some live-site registration cases may be rejected by ParaBank if the generated username already exists.
