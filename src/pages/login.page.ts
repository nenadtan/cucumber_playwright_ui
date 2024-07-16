import { Page, Locator, expect } from '@playwright/test';
import { exact_email, password_new } from "../helper/util/credentials";
import { testData } from "../helper/util/data/testData";

export default class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    
    private Elements = {
        email: '#email',
 	    password: '#password',
	    email_input: 'ihossain+merchant_Sandbox-KBF-Test-01172024-1@exactpay.com',
	    password_input: 'Password1',
	    login_button: 'div:has-text("Log In") >> nth=5',
        new_password: '#newPassword',
        confirm_new_password: '#confirmNewPassword',
        set_new_password_button: 'deiv:has=text("Set New Password")',
        message: 'a:has-text("Your password has been set successfully, Please login to access your account.")',
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

   
}
