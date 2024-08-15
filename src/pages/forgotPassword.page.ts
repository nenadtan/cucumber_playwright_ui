import { Page, Locator, expect } from '@playwright/test';

export default class ForgotPasswordPage {
  readonly page: Page;

  constructor(page: Page) {
      this.page = page;
  }

  private Elements = {
    header: "h1:has-text('Reporting') >> nth=1",
    users_invites: "a:has-text('Users & Invites')",
    user_name_filed: "div:has-text('Israt Hossain')",
    logout: "a:has-text('Logout')",
    reporting: "a:has-text('Reporting')",
    forgot_password: "p:has-text('Forgot your password? ')",
    username_message: 'span:has-text("Required")',
    successfull_message: 'h6:has-text("Reset Password link sent successfully")',
  }

  async clickForgotPasswordLink() {
    await this.page.click(this.Elements.forgot_password);
  }

  async navigateToForgotPasswordPage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
  }

  async enterUsername(username: string) {
    await this.page.fill('input[name="username"]', username);
  }

  async clickResetPasswordButton() {
    await this.page.click('button[type="submit"]');
  }

  async getSuccessMessage() {
    return await this.page.textContent('.oxd-text.oxd-text--p.oxd-alert-content-text');
  }

  async getErrorMessage() {
    return await this.page.textContent('.oxd-alert-content-text');
  }

  async verifyForgotPasswordErrorMessageForRequaredField(errorMessage) {
    expect(this.Elements.username_message).toContain(errorMessage);
  }

  async verifyForgotPasswordMailIsSuccessfullySentMessage(message) {
    expect(this.Elements.successfull_message).toContain(message);
  }

  async verifyForgotPasswordPage() {
    await expect(this.page).toHaveURL(/auth\/requestPasswordResetCode/);
  }
  
}
