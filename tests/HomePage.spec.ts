
import { test, expect } from '@playwright/test';
import { APP_URL } from '../utils/env';
//import { VALID_USERNAME} from '../utils/env';
//import { VALID_PASSWORD } from '../utils/env';
import { HomePage } from '../pages/HomePage';
import { env } from 'node:process';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);  
     await page.goto(APP_URL);
    
});


test('home page loads and exposes the main login/register entry points',async({page})=>{

     await expect(await homePage.isHomePageExists()).toBeTruthy();


});
