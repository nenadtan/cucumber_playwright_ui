import { Given, When, Then } from '@cucumber/cucumber';
import { pages } from "../hooks/pageInstances";

When('I select Forgot your password link on Login page', async () => {
  await pages.forgotPasswordPage.clickForgotPasswordLink();
});

Then('I should be redirected to the Forgot Password page', async () => {
  await pages.forgotPasswordPage.verifyForgotPasswordPage()
});

Given('I am on Forgot Password page', async () => {
  await pages.forgotPasswordPage.navigateToForgotPasswordPage();
});

When('I enter a valid username on Forgot Password page', async () => {
  await pages.forgotPasswordPage.enterUsername('Admin');
});

When('I enter an invalid usernameon on Forgot Password page', async () => {
  await pages.forgotPasswordPage.enterUsername('invalidUser');
});

When('I leave the username field blank on Forgot Password page', async () => {
  await pages.forgotPasswordPage.enterUsername('');
});

When('I click on the "Reset Password" button', async () => {
  await pages.forgotPasswordPage.clickResetPasswordButton();
});

Then('I should see a success message for Forgot Password saying {string}', async (message) => {
  await pages.forgotPasswordPage.verifyForgotPasswordMailIsSuccessfullySentMessage(message);
});

Then('I should see an error message for Forgot Password saying {string}', async (errorMessage) => {
  await pages.forgotPasswordPage.verifyForgotPasswordErrorMessageForRequaredField(errorMessage)
});
