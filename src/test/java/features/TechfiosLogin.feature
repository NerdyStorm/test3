@LoginFeature @Smoke
Feature: Techfios login functionality Validation

  # @TFScenario1
  # Scenario: User should be able to Login with valid credentials
  #   Given User is on techfios login page
  #   When User enters username as "demo@techfios.com"
  #   When User enters password as "abc123"
  #   And User clicks on "Signin"
  #   Then User should land on "dashboardpage"
  #   Then User clicks on "Bank & cash"
  #   Then User clicks on "New Account"
  #   Then User should land on "accounts"
  #   Then User enters on "accountTitle"
  #   Then User enters on "description"
  #   Then User enters on "initialBalance"
  #   Then User enters on "accountNumber"
  #   Then User enters on "contactPerson"
  #   Then User enters on "phoneNumber"
  #   And User enters on "internetBankingURL"
  #   And User clicks on "Submit"
  #   Then User should be able to validate account created successfully



  @TFScenario1
  Scenario Outline: User should be able to Login with valid credentials
    Given User is on techfios login page
    When User enters username as "<username>"
    When User enters password as "<password>"
    And User clicks on "<Signin>"
    Then User should land on "<dashboardpage>"
    Then User clicks on "<Bank&cash>"
    Then User clicks on "<NewAccount>"
    Then User should land on "<accounts>"
    Then User enters on "<accountTitle>"
    Then User enters on "<description>"
    Then User enters on "<initialBalance>"
    Then User enters on "<accountNumber>"
    Then User enters on "<contactPerson>"
    Then User enters on "<phoneNumber>"
    And User enters on "<internetBankingURL>"
    And User clicks on "<Submit>"
    Then User should be able to validate account created successfully


    Examples:
      | username          | password | Signin | dashboardpage | Bank&cash | NewAccount | accounts | accountTitle | description | initialBalance | accountNumber | contactPerson | phoneNumber | internetBankingURL | Submit |
      | demo@techfios.com | abc123   | Signin | dashboardpage | Bank&cash | NewAccount | accounts | accountTitle | description | initialBalance | accountNumber | contactPerson | phoneNumber | internetBankingURL | Submit |
