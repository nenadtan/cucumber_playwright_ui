import { Page } from "@playwright/test";
import FakeEmailPage from '../pages/fakeEmail.page';
import LoginPage from '../pages/login.page';
import HomePage from "../pages/home.page";
import ForgotPasswordPage from "../pages/forgotPassword.page";

/**
 * @exports instances of the pages required in the tests
 */
let fakeEmailPage: FakeEmailPage;
let loginPage: LoginPage;
let homePage: HomePage;
let forgotPasswordPage: ForgotPasswordPage;

export const pages = {
	fakeEmailPage,
	loginPage,
	homePage,
	forgotPasswordPage,
};

export async function createObjectModelPages (page: Page) {
	pages.fakeEmailPage = new FakeEmailPage(page);
	pages.loginPage = new LoginPage(page);
	pages.homePage = new HomePage(page);
	pages. forgotPasswordPage= new ForgotPasswordPage(page);
}
