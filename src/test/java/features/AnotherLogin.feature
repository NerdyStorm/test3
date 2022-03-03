@AnotherLogin @Smoke
Feature: Techfios Another login functionality Validation

Background:
Given User is on techfios login page

  @AnotherScenario1
  Scenario:1 User should be able to Login with invalid credentials
  When User enters username as "demo@techfios.com"
  When User enters password as "abc123"
  And user clicks on signin button
  Then User should land on dashboard page
  
  #Scenario:2 User should not be able to Login with invalid credentials
  #When User enters username as "demo2@techfios.com"
  #When User enters password as "abc123"
  #And user clicks on signin button
  #Then User should land on dashboard page
  #
  #Scenario:3 User should not be able to Login with invalid credentials
  #When User enters username as "demo@techfios.com"
  #When User enters password as "abc124"
  #And user clicks on signin button
  #Then User should land on dashboard page
