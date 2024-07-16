import { Page, Locator, expect } from '@playwright/test';
import { exact_email, exact_username, password_new, password_reset } from "../helper/util/credentials";

export default class FakeEmailPage {
  readonly page: Page;

  constructor(page: Page) {
      this.page = page;
  }

  private Elements = {
    mailinatorEmail_Field: '#search',
    mailinatorGoToNewEmail_Button: 'button:has-text("GO")',
    resetPasswordEmail_Link: '//td[contains(text(),"Reset Password")]',
    changePassword_Button: 'a:has-text("Accept Invitation")',
    resetPassword_Button: 'a:has-text("Reset Password")',
    frameId: 'html_msg_body',
    invitationEmail_Link: '//td[contains(text(),"payfac@exactpay")]',
    organizerSetupAccount_Button: '//a[text()="Setup Account"]',
    new_password: '#newPassword',
    confirm_new_password: '#confirmNewPassword',
    set_new_password_button: 'div:has-text("Set New Password")',
    message: 'a:has-text("Your password has been set successfully, Please login to access your account.")',
    logout: 'a:has-text("Logout")'
  }
  // ---Methods
  async openMailinator() {
    await this.page.goto("https://www.mailinator.com/");
  }
  async openUsersEmail(email) {
    await this.page.locator(this.Elements.mailinatorEmail_Field).fill(email);
    await this.page.waitForLoadState();
    await this.page.click(this.Elements.mailinatorGoToNewEmail_Button);
    await expect(
      this.page.locator("#global_loading_indicator")
    ).not.toBeVisible({ timeout: 40000 });
  }

  async openOrganizerInvitationEmail() {
    await this.page.locator(this.Elements.invitationEmail_Link).first().click();
  }

  async clickAcceptInvitation() {
    const iframeHandle = await this.page.$('iframe[name="html_msg_body"]');
    if (iframeHandle) {
        const frame = await iframeHandle.contentFrame();
            await frame.waitForSelector(this.Elements.changePassword_Button);
            const acceptButton = await frame.$(this.Elements.changePassword_Button);
            if (acceptButton) {
                await acceptButton.click();
            }
    }
  }

  async clickResetPassword() {
    const iframeHandle = await this.page.$('iframe[name="html_msg_body"]');
    if (iframeHandle) {
        const frame = await iframeHandle.contentFrame();
            await frame.waitForSelector(this.Elements.resetPassword_Button);
            const acceptButton = await frame.$(this.Elements.resetPassword_Button);
            if (acceptButton) {
                await acceptButton.click();
            }
    }
  }

  async enterNewPassword(){

    const newPagePromise = new Promise<Page>(resolve => {
      this.page.once('popup', resolve);
    })
    const newPage = await newPagePromise;
    await newPage.waitForSelector(this.Elements.new_password);
    await newPage.type(this.Elements.new_password, password_new);
    await newPage.type(this.Elements.confirm_new_password, password_new);
    await newPage.waitForSelector(this.Elements.set_new_password_button);
    await newPage.keyboard.press('Enter')
    await newPage.close();
  }

  async resetNewPassword(){

    const newPagePromise = new Promise<Page>(resolve => {
      this.page.once('popup', resolve);
    })
    const newPage = await newPagePromise;
    await newPage.waitForSelector(this.Elements.new_password);
    await newPage.type(this.Elements.new_password, password_reset);
    await newPage.type(this.Elements.confirm_new_password, password_reset);
    await newPage.waitForSelector(this.Elements.set_new_password_button);
    await newPage.keyboard.press('Enter');
    await newPage.close();
  }

  async resetNewPasswordInvalidData(){

    const newPagePromise = new Promise<Page>(resolve => {
      this.page.once('popup', resolve);
    })
    const newPage = await newPagePromise;
    await newPage.waitForSelector(this.Elements.new_password);
    await newPage.type(this.Elements.new_password, '1234');
    await newPage.type(this.Elements.confirm_new_password, '1234');
    await newPage.waitForSelector(this.Elements.set_new_password_button);
    await newPage.keyboard.press('Enter');
    await newPage.close();
  }

  async acceptInvitation(){
    await this.openUsersEmail(exact_email+'@mailinator.com');
    await this.openOrganizerInvitationEmail();
    await this.clickAcceptInvitation();
  }

  async resetPassword(){
    await this.openUsersEmail('exact123@mailinator.com');
    await this.openOrganizerInvitationEmail();
    await this.clickResetPassword();
  }

  async logoutUser() {
    await this.page.locator('div:nth-child(3) > .svg-inline--fa >> nth=0').click();
    await this.page.getByRole('link', {name: 'Logout'}).click;
    await this.page.waitForTimeout(5000);
  }

  async verifySuccessfullyInvitedUser(){
    // await expect(this.page.locator(this.Elements.message)).toBeVisible();
  }

  async verifySuccessfullyPasswordReset(){
    // await expect(this.page.locator(this.Elements.message)).toBeVisible();
  }

  async verifyInvalidPasswordReset(){
    // await expect(this.page.locator(this.Elements.message)).toBeVisible();
  }
}
