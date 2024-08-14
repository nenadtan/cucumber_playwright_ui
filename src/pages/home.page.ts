import { Page, Locator, expect } from '@playwright/test';

export default class HomePage {
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
  }

  async verifyHomePage() {
    await expect(this.page).toHaveURL(/dashboard/);
  }

  async checkHeader() {
      await this.page.locator(this.Elements.header).isVisible()
  }

  async verifyVisibilityOfUsersAndInvites() {
    await expect(this.page.locator(this.Elements.users_invites)).toBeVisible({ timeout: 400000 });
    await this.logoutUser()
  }

  async openUsersAndInvites() {
    await this.page.waitForLoadState();
    await this.page.locator(this.Elements.users_invites).click();
    await expect(
      this.page.locator("#global_loading_indicator")
    ).not.toBeVisible({ timeout: 4000 });
  }

  async logoutUser() {
    await this.page.locator('div:nth-child(3) > .svg-inline--fa >> nth=0').click()
    await this.page.locator(this.Elements.logout).click()
    await this.page.waitForTimeout(5000);
  }

  async openReporting() {
    await this.page.waitForLoadState();
    await this.page.locator(this.Elements.reporting).click();
    await expect(
      this.page.locator("#global_loading_indicator")
    ).not.toBeVisible({ timeout: 4000 });
  }
}
