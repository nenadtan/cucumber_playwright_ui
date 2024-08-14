import { Given, When, Then } from '@cucumber/cucumber';
import { pages } from "../hooks/pageInstances";
import { invalid_username } from "../helper/util/credentials";

Given('I am on the OrangeHRM login page', async () => {
  await pages.loginPage.navigateToLoginPage();
});

When('I Login with a valid username and passsword', async () => {
  await pages.loginPage.login(process.env.USERNAME, process.env.PASSWORD)
});

When('I Login with an invalid username and a valid password', async () => {
  await pages.loginPage.login(invalid_username, process.env.PASSWORD)
});

When('I Login with an blank username and a blank password', async () => {
  await pages.loginPage.login('', '')
});

When('I Login with a valid username and a blank password', async () => {
  await pages.loginPage.login(process.env.USERNAME, '')
});

Then('I should be redirected to the dashboard', async () => {
  await pages.homePage.verifyHomePage()
});

Then('I should see an error message saying {string}', async (errorMessage) => {
  await pages.loginPage.veerifyLoginErrorMessage(errorMessage)
});

Then('I should see an error message saying {string} for username and password', async (errorMessage) => {
  await pages.loginPage.veerifyLoginErrorMessageForRequaredField(errorMessage)
});
