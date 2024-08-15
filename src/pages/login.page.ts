import { Page, Locator, expect } from '@playwright/test';

export default class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    private Elements = {
        username: 'input[name="username"]',
 	    password: 'input[name="password"]',
	    email_input: 'ihossain+merchant_Sandbox-KBF-Test-01172024-1@exactpay.com',
	    password_input: 'Password1',
	    login_button: 'button[type="submit"]',
        new_password: '#newPassword',
        confirm_new_password: '#confirmNewPassword',
        set_new_password_button: 'deiv:has=text("Set New Password")',
        username_message: 'span:has-text("Required") >> nth=0',
        password_message: 'span:has-text("Required") >> nth=1',
        login_button_new: 'div:has-text("Log In")',
        login_button_new_header: 'div:has-text("Accept Invitation")',
        forgot_password: 'div:has-text("Forgot Password") >> nth=5',
        error_login_message: 'p:has-text("Sorry, but it seems that email or password are incorrect. Please try again.")',
        users_invites: "a:has-text('Users & Invites')",
        logout: "a:has-text('Logout')",

    }

    async navigateToLoginPage() {
        await this.page.goto(process.env.BASEURL);
        // await this.page.pause();
        // If the user is loged, logout the user
    }

    async login(username, password) {
        await this.page.locator(this.Elements.username).fill(username);
        await this.page.locator(this.Elements.password).fill(password);
        await this.page.locator(this.Elements.login_button).click();
        await this.page.waitForTimeout(2000);
    }

    async veerifyLoginErrorMessage(errorMessage) {
        const error = await this.page.textContent('.oxd-alert-content-text');
        expect(error).toContain(errorMessage);
    }

    async veerifyLoginErrorMessageForRequaredField(errorMessage) {
        expect(this.Elements.username_message).toContain(errorMessage);
    }
   
}
