@smoke @regression
Feature: Login to LinkedIn
  As a user
  I want to be able to login to LinkedIn
  So that I can use this platform

  Rule: Login to LinkedIn via Google SSO

    Scenario: User can login to LinkedID via Google SSO
      Given I am on the LinkedIn Login page
      When I login as an User
      Then I should see my Profile
      