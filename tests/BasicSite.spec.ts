import { test, expect } from '@playwright/test';
import { APP_URL } from '../utils/env';

const baseUrl = APP_URL.replace(/index\.htm.*$/, '');

test.describe('Basic ParaBank site smoke tests', () => {

    test('Home page loads', async ({ page }) => {
        await page.goto(APP_URL);

        await expect(page).toHaveTitle(/ParaBank \| Welcome \| Online Banking/);
        await expect(page.getByRole('link', { name: 'Register' })).toBeVisible();
    });

    test('About page loads', async ({ page }) => {
        await page.goto(`${baseUrl}about.htm`);

        await expect(page).toHaveTitle(/ParaBank \| About Us/);
        await expect(page.getByRole('heading', { name: 'ParaSoft Demo Website' })).toBeVisible();
    });

    test('Services page loads', async ({ page }) => {
        await page.goto(`${baseUrl}services.htm`);

        await expect(page).toHaveTitle(/ParaBank \| Services/);
        await expect(page.getByText('Available Bookstore SOAP services:')).toBeVisible();
    });

    test('Contact page loads', async ({ page }) => {
        await page.goto(`${baseUrl}contact.htm`);

        await expect(page).toHaveTitle(/ParaBank \| Customer Care/);
        await expect(page.getByRole('button', { name: 'Send to Customer Care' })).toBeVisible();
    });
});
