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
  "name": "User should land on \"dashboardpage\"",
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
  "name": "User should land on \"accounts\"",
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
  "duration": 4832675001,
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
  "name": "User should land on \"dashboardpage\"",
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
  "name": "User should land on \"accounts\"",
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
  "duration": 4714929899,
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
  "duration": 3256178601,
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
  "duration": 3142360700,
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
  "duration": 17531710700,
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
  "duration": 43240500,
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
  "duration": 3066447700,
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
  "duration": 5104534300,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d98.0.4758.102)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-5S5PDPE\u0027, ip: \u0027192.168.1.93\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\Kevadia\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:57840}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f929db4b3697bcb09e06e149641f653f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat pages.BankAndCash.clicksOnNewAccount(BankAndCash.java:50)\r\n\tat steps.TechFiosStepDefinitios.user_clicks_on(TechFiosStepDefinitios.java:81)\r\n\tat ✽.Then User clicks on \"New Account\"(features/TechfiosLogin.feature:12)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "TechFiosStepDefinitios.user_should_be_able_to_validate()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 868545100,
  "status": "passed"
});
});