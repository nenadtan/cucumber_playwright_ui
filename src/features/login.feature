@qa @regression
Feature: Login Functionality

  As a user of OrangeHRM
  I want to be able to log in with valid credentials
  So that I can access the HR management system

  Background: I am on the OrangeHRM login page
    Given I am on the OrangeHRM login page

  Scenario: Successful login with valid credentials
    When I Login with a valid username and passsword
    Then I should be redirected to the dashboard

  Rule: Negative Scenarios for Login functionality

    Scenario: Unsuccessful login with invalid credentials
      When I Login with an invalid username and a valid password
      Then I should see an error message saying "Invalid credentials"

    Scenario: Unsuccessful login with blank credentials
      When I Login with an blank username and a blank password
      Then I should see an error message saying "Required" for username and password
