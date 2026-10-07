
import{test, expect, chromium} from '@playwright/test';
import { LoginPage1 } from '../pages/login1';
test('test1', async({page})=> {

const Login = new LoginPage1(page);
    Login.GotoApplicationLoginpage();
    Login.LoginPage1('tomsmith','SuperSecretPassword');
    Login.Logout();

    
})








/*     await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
    await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
    await page.getByRole('button', { name: ' Login' }).click();
    await page.getByRole('link',{name: 'Logout'}).click(); */


