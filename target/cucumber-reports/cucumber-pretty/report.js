$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addToCart_Scenario.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon add to cart feature",
  "description": "",
  "id": "amazon-add-to-cart-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 217400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Amazon add Iphone to cart",
  "description": "",
  "id": "amazon-add-to-cart-feature;amazon-add-iphone-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@EndtoEnd"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on Amazon Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks on textbox and enter - Apple Iphone",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on a product under apple",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user adds the item to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "addToCartStepDefinition.user_is_on_Amazon_Home_page()"
});
formatter.result({
  "duration": 12443849800,
  "status": "passed"
});
formatter.match({
  "location": "addToCartStepDefinition.user_clicks_on_textbox_and_enter_Apple_Iphone()"
});
formatter.result({
  "duration": 74131800,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d86.0.4240.75)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-9H9FV2E\u0027, ip: \u0027192.168.112.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58659}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a8fcc05c98025422df1c8331dcd01154\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:836)\r\n\tat stepDefinitions.addToCartStepDefinition.user_clicks_on_textbox_and_enter_Apple_Iphone(addToCartStepDefinition.java:34)\r\n\tat ✽.Then user clicks on textbox and enter - Apple Iphone(addToCart_Scenario.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "addToCartStepDefinition.user_clicks_on_a_product_under_apple()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "addToCartStepDefinition.user_adds_the_item_to_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 98100,
  "status": "passed"
});
formatter.before({
  "duration": 92400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Amazon add Oneplus to cart",
  "description": "",
  "id": "amazon-add-to-cart-feature;amazon-add-oneplus-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@EndtoEnd"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on Amazon Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user clicks on textbox and enter - Oneplus",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on a product under Oneplus",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "user adds the item to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "addToCartStepDefinition.user_is_on_Amazon_Home_page()"
});
