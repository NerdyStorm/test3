$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TechfiosLogin.feature");
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
formatter.before({
  "duration": 2332104900,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "# @TFScenario1"
    },
    {
      "line": 5,
      "value": "# Scenario Outline:1 User should be able to Login with valid credentials"
    },
    {
      "line": 6,
      "value": "#   Given User is on techfios login page"
    },
    {
      "line": 7,
      "value": "#   When User enters username as \"\u003cusername\u003e\""
    },
    {
      "line": 8,
      "value": "#   When User enters password as \"\u003cpassword\u003e\""
    },
    {
      "line": 9,
      "value": "#   And User clicks on \"Signin\""
    },
    {
      "line": 10,
      "value": "#   Then User should land on \"dashboardpage\""
    },
    {
      "line": 11,
      "value": "#   Then User clicks on \"Bank \u0026 cash\""
    },
    {
      "line": 12,
      "value": "#   Then User clicks on \"New Account\""
    },
    {
      "line": 13,
      "value": "#   Then User should land on \"accounts\""
    },
    {
      "line": 14,
      "value": "#   Then User enters on \"\u003caccountTitle\u003e\""
    },
    {
      "line": 15,
      "value": "#   Then User enters on \"\u003cdescription\u003e\""
    },
    {
      "line": 16,
      "value": "#   Then User enters on \"\u003cinitialBalance\u003e\""
    },
    {
      "line": 17,
      "value": "#   Then User enters on \"\u003caccountnNumber\u003e\""
    },
    {
      "line": 18,
      "value": "#   Then User enters on \"\u003ccontactPerson\u003e\""
    },
    {
      "line": 19,
      "value": "#   Then User enters on \"\u003cphoneNumber\u003e\""
    },
    {
      "line": 20,
      "value": "#   And User enters on \"\u003cinternetBankingURL\u003e\""
    },
    {
      "line": 21,
      "value": "#   And User clicks on \"Submit\""
    },
    {
      "line": 22,
      "value": "#   Then User should be able to validate account created successfully"
    },
    {
      "line": 25,
      "value": "#   Examples:"
    },
    {
      "line": 26,
      "value": "#     | username          | password | accountTitle | description | initialBalance | accountnNumber | contactPerson | phoneNumber | internetBankingURL       |"
    },
    {
      "line": 27,
      "value": "#     | demo@techfios.com | abc123   | banking      | saving      | 3000           | 42545289       | sana          | 8086564355  | https://www.pncbank.com/ |"
    }
  ],
  "line": 30,
  "name": "1 User should be able to Login with valid credentials",
  "description": "",
  "id": "techfios-login-functionality-validation;1-user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@TFScenario1"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User is on techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "User enters password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "User clicks on \"Signin\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User should land on \"dashboardpage\"",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User clicks on \"Bank \u0026 cash\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "User clicks on \"New Account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "User should land on \"accounts\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User enters on \"accountTitle\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User enters on \"description\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "User enters on \"initialBalance\"",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "User enters on \"accountnNumber\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "User enters on \"contactPerson\"",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User enters on \"phoneNumber\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "User enters on \"internetBankingURL\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User clicks on \"Submit\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TechFiosStepDefinitios.user_is_on_techfios_login_page()"
});
formatter.result({
  "duration": 961966500,
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
  "duration": 163706900,
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
  "duration": 103695700,
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
  "duration": 2407982600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dashboardpage",
      "offset": 21
    }
  ],
  "location": "TechFiosStepDefinitios.user_should_land_on(String)"
});
formatter.result({
  "duration": 37085800,
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
  "duration": 111925600,
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
  "duration": 617644700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accounts",
      "offset": 21
    }
  ],
  "location": "TechFiosStepDefinitios.user_should_land_on(String)"
});
formatter.result({
  "duration": 10232700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountTitle",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_Enters(String)"
});
formatter.result({
  "duration": 61892500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_Enters(String)"
});
formatter.result({
  "duration": 57550400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "initialBalance",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_Enters(String)"
});
formatter.result({
  "duration": 57299400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "accountnNumber",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_Enters(String)"
});
formatter.result({
  "duration": 99000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contactPerson",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_Enters(String)"
});
formatter.result({
  "duration": 54820700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "phoneNumber",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_Enters(String)"
});
formatter.result({
  "duration": 58933100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "internetBankingURL",
      "offset": 16
    }
  ],
  "location": "TechFiosStepDefinitios.user_Enters(String)"
});
formatter.result({
  "duration": 60130100,
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
  "duration": 1049234300,
  "status": "passed"
});
formatter.match({
  "location": "TechFiosStepDefinitios.user_should_be_able_to_validate()"
});
formatter.result({
  "duration": 21000,
  "status": "passed"
});
});