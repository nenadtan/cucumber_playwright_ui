import { Given, When, Then } from "@cucumber/cucumber";
import { pages } from "../hooks/pageInstances";

Given('I am on the LinkedIn Login page', {timeout: 100000}, async function () {
  await pages.loginPage.navigateToLoginPage()
});

When('I login as an User', {timeout: 100000}, async function () {

});

Then('I should see my Profile', {timeout: 100000}, async function () {

});
