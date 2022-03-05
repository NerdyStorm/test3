@LoginFeature @Smoke
Feature: Techfios login functionality Validation

  @TFScenario1
  Scenario: User should be able to Login with valid credentials
    Given User is on techfios login page
    When User enters username as "demo@techfios.com"
    When User enters password as "abc123"
    And User clicks on "Signin"
    Then User should land on "dashboardpage"
    Then User clicks on "Bank & cash"
    Then User clicks on "New Account"
    Then User should land on "accounts"
    Then User enters on "accountTitle"
    Then User enters on "description"
    Then User enters on "initialBalance"
    Then User enters on "accountNumber"
    Then User enters on "contactPerson"
    Then User enters on "phoneNumber"
    And User enters on "internetBankingURL"
    And User clicks on "Submit"
    Then User should be able to validate account created successfully




  #@TFScenario1
   #Scenario Outline:1 User should be able to Login with valid credentials
     #Given User is on techfios login page
     #When User enters username as "<username>"
     #When User enters password as "<password>"
     #And User clicks on "Signin"
     #Then User should land on "dashboardpage"
     #Then User clicks on "Bank & cash"
     #Then User clicks on "New Account"
     #Then User should land on "accounts"
     #Then User enters on "<accountTitle>"
     #Then User enters on "<description>"
     #Then User enters on "<initialBalance>"
     #Then User enters on "<accountnNumber>"
     #Then User enters on "<contactPerson>"
     #Then User enters on "<phoneNumber>"
     #And User enters on "<internetBankingURL>"
     #And User clicks on "Submit"
     #Then User should be able to validate account created successfully
#
#
     #Examples:
       #| username          | password | accountTitle | description | initialBalance | accountnNumber | contactPerson | phoneNumber | internetBankingURL       |
       #| demo@techfios.com | abc123   | banking      | saving      | 3000           | 42545289       | sana          | 8086564355  | https://www.pncbank.com/ |
#
#
