# Cucumber (BDD) + Playwright (Typescript) framework

### Cucumber
Cucumber is a tool for running automated tests written in plain language. It's widely used for behavior-driven development (BDD). Key features include:
- Gherkin Syntax: Allows you to write test cases in plain English, making them readable for non-technical stakeholders.
- Integration: Works well with various programming languages and testing frameworks.
- Step Definitions: Links Gherkin steps to code that performs the testing actions.

### Playwright
Playwright is a powerful tool for end-to-end testing of web applications that uses TypeScript. It supports multiple browsers and offers features like:
- Cross-browser Testing: Works with Chromium, Firefox, and WebKit.
- Headless Mode: Runs tests in headless browsers for faster execution.
- Auto-wait: Automatically waits for elements to be ready before performing actions, reducing flakiness.
- Multi-page and Multi-tab Testing: Can handle complex web applications.

### TypeScript
Playwright TypeScript is a powerful superset of JavaScript that adds optional static typing, making it easier to catch errors before runtime. By combining these two tools, we can create more reliable and maintainable tests.

## Features

1. Report with screenshots, videos & logs
2. Execute tests on multiple environments
3. Parallel execution
4. Rerun only failed features
5. Retry failed tests on CI
6. Github Actions integrated with downloadable report
7. Page object model

## Project structure

- .github -> yml file to execute the tests in GitHub Actions
- src -> Contains all the features & Typescript code
- test-results -> Contains all the reports related file

## Reports

1. Mutilple Cucumber Report
2. Default Cucumber report
3. Logs
4. Screenshots of failure
5. Test videos of failure
6. Trace of failure

## Get Started

### Setup:

1. Clone or download the project
2. Extract and open in the VS-Code
3. Install `node` if not already present
4. `npm i` to install the dependencies
   - `npm audit fix - force` if necessary
5. `npx playwright install` to install the browsers
6. `npm install -g typescript` to install typescript if missing
7. `E=[environment] T=[tag] npm run test` to execute the tests over Environments and different Tags
   - [environment] : 'qa', 'dev', or 'sandbox'
   - [tag] : '@regression', '@search' etc..
   For example: `E=qa T=@regression npm run test` to run all tests over QA environment with tag '@regression'

### Run tests over GitHub Actions:

   `E=[ENV] T=[TAGS] xvfb-run npm run test` to execute the tests on GitHub Actions over Environments and different Tags
   - Enter ENV parametar :  'qa', 'dev', or 'sandbox'
   - Enter TAGS parameter : '@regression', '@search' etc..
   For example: `E=qa T=@regression xvfb-run npm run test` to run all tests on GitHub Actions over QA environment with tag '@regression'

### Running in Playwright Inspector and Recording mode:
   
   Insert line `await this.page.pause()` in steps.ts file or page.ts file in line where you want to make a break point.
   `E=[environment] T=[tag] npm run test` to run tests with Inspector over Environments and different Tags
   - [environment] : 'qa', 'dev', or 'sandbox'
   - [tag] : '@qa', '@test' etc..
   - Test will stop in place where `await this.page.pause()` is placed and you will be able to Inspect and Record.
   For example: E=qa T=@qa npm run test to run test over QA environment with specific tag in Playwright Inspector.
   For more information see [link](https://playwright.dev/docs/debug)

### Running in Debug mode:

   Configure `launch.json` file on path `.vscode/launch.json`
   In "arg" section define:
   - "--tags"
   - "`@tag`" : '@qa', '@smoke' etc..
   In "env" section define:
   - "`ENV`":  'qa', 'dev', 'sandbox' etc..
   On the left side on the Visual Studio Code, go to `Run and Debug` icon.
   - Add break point by clicking on the red circle on the left side of line
   - Click on green Play button on the top on side bar with text `Debug Cucumber`
   - Test will be run in Debug mode and stops on break point


