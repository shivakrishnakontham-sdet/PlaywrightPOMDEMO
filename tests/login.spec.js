//Author: Shivakrishna
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('test', async ({ page }) => {
    const Login = new LoginPage(page);
    
    console.log('Test case Execution Started');
        await Login.gotoLoginPage();
        await Login.login('tomsmith', 'SuperSecretPassword!');
        await Login.logout();

    console.log('Login test is passed');
    console.log('Test case Execution Ended');
    });

/*   await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
    await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
    await page.getByRole('button', { name: ' Login' }).click();
    await page.getByRole('link',{name: 'Logout'}).click();
   */



