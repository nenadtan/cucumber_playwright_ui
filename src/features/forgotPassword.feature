@qa @regression
Feature: Forgot Password Functionality

  As a user of OrangeHRM
  I want to be able to reset my password if I forget it
  So that I can regain access to my account
  The OrangeHRM (https://opensource-demo.orangehrmlive.com/) demo site is designed as a public-facing demo environment,
  so it doesn't send real emails for actions like "Forgot your password?" since it's not connected to an actual email system.
  Instead, it may simulate the process by showing success messages, but it won't actually send a password reset email.
    
  Scenario: Navigating to the Forgot Password page
    Given I am on the OrangeHRM login page
    When I click on the "Forgot your password?" link
    Then I should be redirected to the Forgot Password page

  Scenario: Reset password with a valid username
    Given I am on the Forgot Password page
    When I enter a valid username
    And I click on the "Reset Password" button
    Then I should see a success message for Forgot Password saying "Reset Password link sent successfully"

  Scenario: Attempt to reset password with a blank username
    Given I am on the Forgot Password page
    When I leave the username field blank
    And I click on the "Reset Password" button
    Then I should see an error message for Forgot Password saying "Required"
