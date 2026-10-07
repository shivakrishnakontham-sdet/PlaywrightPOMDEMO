export class LoginPage1{
    constructor(Page){
         this.page = page;
        
            
    this.Username_tb = page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
    this.Password_tb =  page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
    this.Login_Btn =  page.getByRole('button', { name: ' Login' }).click();
     this.Logout_Btn = page.getByRole('link',{name: 'Logout'}).click();
    }
async GotoApplicationLoginpage(){
    await this.page.goto('https://the-internet.herokuapp.com/login');

}

async login(){

    await this.Username_tb.fill(username);
    await this.Password_tb.fill(password);
    await this.Login_Btn.click();

}
async Logout(){

    await this.Login_Btn.click();
}




}