$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechfiosLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Techfios login functionality Validation",
  "description": "",
  "id": "techfios-login-functionality-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginFeature"
    },
    {
      "line": 1,
      "name": "@Smoke"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "1 User should be able to Login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@TFScenario1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on \"Signin\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on dashboardpage",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"Bank \u0026 cash\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"New Account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User should land on \"\u003caccounts\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters on \"\u003caccountTitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters on \"\u003cdescription\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters on \"\u003cinitialBalance\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters on \"\u003caccountnNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters on \"\u003ccontactPerson\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters on \"\u003cphoneNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User enters on \"\u003cinternetBankingURL\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on \"Submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "techfios-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountnNumber",
        "contactPerson",
        "phoneNumber",
        "internetBankingURL"
      ],
      "line": 26,
      "id": "techfios-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "banking",
        "saving",
        "3000",
        "42545289",
        "sana",
        "8086564355",
        "https://www.pncbank.com/"
      ],
      "line": 27,
      "id": "techfios-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7169270100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "1 User should be able to Login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@TFScenario1"
    },
    {
      "line": 1,
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks on \"Signin\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should land on dashboardpage",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on \"Bank \u0026 cash\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks on \"New Account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User should land on \"\u003caccounts\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User enters on \"banking\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User enters on \"saving\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User enters on \"3000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User enters on \"42545289\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User enters on \"sana\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User enters on \"8086564355\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User enters on \"https://www.pncbank.com/\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User clicks on \"Submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TechFiosStepDefinitios.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 5210729600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "TechFiosStepDefinitios.user_enters_username_as_(String)"
});
formatter.result({
  "duration": 3596596000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 25
    }
  ],
  "location": "TechFiosStepDefinitios.user_enters_password_as(String)"
});
formatter.result({
  "duration": 3261755800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Signin",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_clicks_on(String)"
});
formatter.result({
  "duration": 9153958900,
  "status": "passed"
});
formatter.match({
  "location": "TechFiosStepDefinitios.user_should_land_on_dashboardpage()"
});
formatter.result({
  "duration": 863941700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bank \u0026 cash",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_clicks_on(String)"
});
formatter.result({
  "duration": 3329739600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Account",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_clicks_on(String)"
});
formatter.result({
  "duration": 4077035400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003caccounts\u003e",
      "offset": 21
    }
  ],
  "location": "TechFiosStepDefinitios.user_should_land_on(String)"
});
formatter.result({
  "duration": 35739500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "banking",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_Enters(String)"
});
formatter.result({
  "duration": 207900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saving",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_Enters(String)"
});
formatter.result({
  "duration": 165800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_Enters(String)"
});
formatter.result({
  "duration": 187100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "42545289",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_Enters(String)"
});
formatter.result({
  "duration": 161200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sana",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_Enters(String)"
});
formatter.result({
  "duration": 199000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8086564355",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_Enters(String)"
});
formatter.result({
  "duration": 159700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.pncbank.com/",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_Enters(String)"
});
formatter.result({
  "duration": 197900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Submit",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_clicks_on(String)"
});
formatter.result({
  "duration": 161600,
  "status": "passed"
});
formatter.match({
  "location": "TechFiosStepDefinitios.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 904800,
  "error_message": "java.lang.NullPointerException\r\n\tat pages.BankAndCash.validatecreatedAcount(BankAndCash.java:82)\r\n\tat steps.TechFiosStepDefinitios.user_should_be_able_to_validate_account_created_successfully(TechFiosStepDefinitios.java:154)\r\n\tat ✽.Then User should be able to validate account created successfully(features/TechfiosLogin.feature:22)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1145400200,
  "status": "passed"
});
});