$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("addToCart_Scenario.feature");
formatter.feature({
  "line": 1,
  "name": "Amazon add to cart feature",
  "description": "",
  "id": "amazon-add-to-cart-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 224131,
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
  "duration": 122327803888,
  "status": "passed"
});
formatter.match({
  "location": "addToCartStepDefinition.user_clicks_on_textbox_and_enter_Apple_Iphone()"
});
formatter.result({
  "duration": 35420566942,
  "status": "passed"
});
formatter.match({
  "location": "addToCartStepDefinition.user_clicks_on_a_product_under_apple()"
});
formatter.result({
  "duration": 7039922121,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Apple iPhone 11 (128GB) - Black\"}\n  (Session info: chrome\u003d86.0.4240.75)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027MICROSOFT-PC\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\MICROS~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:50229}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2717c6d35c152a7644414429a98de0c8\n*** Element info: {Using\u003dlink text, value\u003dApple iPhone 11 (128GB) - Black}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:373)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.addToCartStepDefinition.user_clicks_on_a_product_under_apple(addToCartStepDefinition.java:42)\r\n\tat ✽.Then user clicks on a product under apple(addToCart_Scenario.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "addToCartStepDefinition.user_adds_the_item_to_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 161890,
  "status": "passed"
});
formatter.before({
  "duration": 90381,
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
formatter.result({
  "duration": 56435227488,
  "status": "passed"
});
formatter.match({
  "location": "addToCartStepDefinition.user_clicks_on_textbox_and_enter_Oneplus()"
});
formatter.result({
  "duration": 24181198097,
  "status": "passed"
});
formatter.match({
  "location": "addToCartStepDefinition.user_clicks_on_a_product_under_Oneplus()"
});
formatter.result({
  "duration": 2938803320,
  "status": "passed"
});
formatter.match({
  "location": "addToCartStepDefinition.user_adds_the_item_to_the_cart()"
});
formatter.result({
  "duration": 58306361808,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cinput id\u003d\"add-to-cart-button\" name\u003d\"submit.add-to-cart\" title\u003d\"Add to Shopping Cart\" data-hover\u003d\"Select \u003cb\u003e__dims__\u003c/b\u003e from the left\u003cbr\u003e to add to Shopping Cart\" class\u003d\"a-button-input attach-dss-atc\" type\u003d\"button\" value\u003d\"Add to Cart\" aria-labelledby\u003d\"submit.add-to-cart-announce\"\u003e is not clickable at point (1203, 483). Other element would receive the click: \u003cimg id\u003d\"detailImg\" src\u003d\"https://images-na.ssl-images-amazon.com/images/I/71sZ1HdUJoL._SL1500_.jpg\" style\u003d\"position: absolute; left: -857px; top: -708.094px;\"\u003e\n  (Session info: chrome\u003d86.0.4240.75)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027MICROSOFT-PC\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.75, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\MICROS~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:50413}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: aaeaa03d928ff239893c1ac75e0444f6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat stepDefinitions.addToCartStepDefinition.user_adds_the_item_to_the_cart(addToCartStepDefinition.java:104)\r\n\tat ✽.Then user adds the item to the cart(addToCart_Scenario.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 148649,
  "status": "passed"
});
formatter.before({
  "duration": 79125,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Amazon add Samsung to cart",
  "description": "",
  "id": "amazon-add-to-cart-feature;amazon-add-samsung-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@EndtoEnd"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "user is on Amazon Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user clicks on textbox and enter - Samsung",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "user clicks on a product under Samsung",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "user adds the item to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "addToCartStepDefinition.user_is_on_Amazon_Home_page()"
});
formatter.result({
  "duration": 21254015817,
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027MICROSOFT-PC\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:192)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:178)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepDefinitions.addToCartStepDefinition.user_is_on_Amazon_Home_page(addToCartStepDefinition.java:28)\r\n\tat ✽.Given user is on Amazon Home page(addToCart_Scenario.feature:19)\r\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:34722/status] to be available after 20251 ms\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\r\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:187)\r\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:178)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepDefinitions.addToCartStepDefinition.user_is_on_Amazon_Home_page(addToCartStepDefinition.java:28)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat MyRunner.TestRunner.feature(TestRunner.java:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:989)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:125)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:109)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:648)\r\n\tat org.testng.TestRunner.run(TestRunner.java:505)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:455)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:450)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:415)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:364)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:84)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1208)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1137)\r\n\tat org.testng.TestNG.runSuites(TestNG.java:1049)\r\n\tat org.testng.TestNG.run(TestNG.java:1017)\r\n\tat org.testng.remote.AbstractRemoteTestNG.run(AbstractRemoteTestNG.java:115)\r\n\tat org.testng.remote.RemoteTestNG.initAndRun(RemoteTestNG.java:251)\r\n\tat org.testng.remote.RemoteTestNG.main(RemoteTestNG.java:77)\r\nCaused by: java.util.concurrent.TimeoutException\r\n\tat java.util.concurrent.FutureTask.get(Unknown Source)\r\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:148)\r\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\r\n\t... 51 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "addToCartStepDefinition.user_clicks_on_textbox_and_enter_Samsung()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "addToCartStepDefinition.user_clicks_on_a_product_under_Samsung()"
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
  "duration": 136399,
  "status": "passed"
});
formatter.before({
  "duration": 154607,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Amazon add Honor to cart",
  "description": "",
  "id": "amazon-add-to-cart-feature;amazon-add-honor-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user is on Amazon Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user clicks on textbox and enter - Honor",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "user clicks on a product under Honor",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "user adds the item to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "addToCartStepDefinition.user_is_on_Amazon_Home_page()"
});
formatter.result({
  "duration": 85758175316,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d86.0.4240.75)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027MICROSOFT-PC\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x005DC013+3194899]\n\tOrdinal0 [0x004C6021+2056225]\n\tOrdinal0 [0x0035F608+587272]\n\tOrdinal0 [0x0035421D+541213]\n\tOrdinal0 [0x00353F34+540468]\n\tOrdinal0 [0x0035364A+538186]\n\tOrdinal0 [0x00352A6F+535151]\n\tOrdinal0 [0x00352E45+536133]\n\tOrdinal0 [0x003527A5+534437]\n\tOrdinal0 [0x0035BBC9+572361]\n\tOrdinal0 [0x00352754+534356]\n\tOrdinal0 [0x00353475+537717]\n\tOrdinal0 [0x00352A6F+535151]\n\tOrdinal0 [0x00352E45+536133]\n\tOrdinal0 [0x003527A5+534437]\n\tOrdinal0 [0x00359EFE+564990]\n\tOrdinal0 [0x00352754+534356]\n\tOrdinal0 [0x00353475+537717]\n\tOrdinal0 [0x00352A6F+535151]\n\tOrdinal0 [0x00352E45+536133]\n\tOrdinal0 [0x003527A5+534437]\n\tOrdinal0 [0x00358186+557446]\n\tOrdinal0 [0x00352754+534356]\n\tOrdinal0 [0x00353475+537717]\n\tOrdinal0 [0x00352A6F+535151]\n\tOrdinal0 [0x00352E45+536133]\n\tOrdinal0 [0x003527A5+534437]\n\tOrdinal0 [0x003574A7+554151]\n\tOrdinal0 [0x00352754+534356]\n\tOrdinal0 [0x00353475+537717]\n\tOrdinal0 [0x00352A6F+535151]\n\tOrdinal0 [0x00352E45+536133]\n\tOrdinal0 [0x003527A5+534437]\n\tOrdinal0 [0x0034F06C+520300]\n\tOrdinal0 [0x00352754+534356]\n\tOrdinal0 [0x003525BF+533951]\n\tOrdinal0 [0x003523D3+533459]\n\tOrdinal0 [0x00360620+591392]\n\tOrdinal0 [0x00302A0C+207372]\n\tOrdinal0 [0x00301D0D+204045]\n\tOrdinal0 [0x002FFC1B+195611]\n\tOrdinal0 [0x002E3B7F+80767]\n\tOrdinal0 [0x002E4B4E+84814]\n\tOrdinal0 [0x002E4AD9+84697]\n\tOrdinal0 [0x004DCE64+2149988]\n\tGetHandleVerifier [0x0074BE95+1400773]\n\tGetHandleVerifier [0x0074BB61+1399953]\n\tGetHandleVerifier [0x007531FA+1430314]\n\tGetHandleVerifier [0x0074C69F+1402831]\n\tOrdinal0 [0x004D3D61+2112865]\n\tOrdinal0 [0x004DE5CB+2155979]\n\tOrdinal0 [0x004DE6F5+2156277]\n\tOrdinal0 [0x004EF26E+2224750]\n\tBaseThreadInitThunk [0x765033AA+18]\n\tRtlInitializeExceptionChain [0x77949F72+99]\n\tRtlInitializeExceptionChain [0x77949F45+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepDefinitions.addToCartStepDefinition.user_is_on_Amazon_Home_page(addToCartStepDefinition.java:28)\r\n\tat ✽.Given user is on Amazon Home page(addToCart_Scenario.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "addToCartStepDefinition.user_clicks_on_textbox_and_enter_Honor()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "addToCartStepDefinition.user_clicks_on_a_product_under_Honor()"
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
  "duration": 125142,
  "status": "passed"
});
formatter.before({
  "duration": 151297,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Amazon add Redmi to cart",
  "description": "",
  "id": "amazon-add-to-cart-feature;amazon-add-redmi-to-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "user is on Amazon Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "user clicks on textbox and enter - Redmi",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "user clicks on a product under Redmi",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "user adds the item to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "addToCartStepDefinition.user_is_on_Amazon_Home_page()"
});
formatter.result({
  "duration": 83188051802,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d86.0.4240.75)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027MICROSOFT-PC\u0027, ip: \u0027192.168.1.7\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x005DC013+3194899]\n\tOrdinal0 [0x004C6021+2056225]\n\tOrdinal0 [0x0035F608+587272]\n\tOrdinal0 [0x0035421D+541213]\n\tOrdinal0 [0x00353F34+540468]\n\tOrdinal0 [0x0035364A+538186]\n\tOrdinal0 [0x00352A6F+535151]\n\tOrdinal0 [0x00352E45+536133]\n\tOrdinal0 [0x003527A5+534437]\n\tOrdinal0 [0x0035BBC9+572361]\n\tOrdinal0 [0x00352754+534356]\n\tOrdinal0 [0x00353475+537717]\n\tOrdinal0 [0x00352A6F+535151]\n\tOrdinal0 [0x00352E45+536133]\n\tOrdinal0 [0x003527A5+534437]\n\tOrdinal0 [0x00359EFE+564990]\n\tOrdinal0 [0x00352754+534356]\n\tOrdinal0 [0x00353475+537717]\n\tOrdinal0 [0x00352A6F+535151]\n\tOrdinal0 [0x00352E45+536133]\n\tOrdinal0 [0x003527A5+534437]\n\tOrdinal0 [0x00358186+557446]\n\tOrdinal0 [0x00352754+534356]\n\tOrdinal0 [0x00353475+537717]\n\tOrdinal0 [0x00352A6F+535151]\n\tOrdinal0 [0x00352E45+536133]\n\tOrdinal0 [0x003527A5+534437]\n\tOrdinal0 [0x003574A7+554151]\n\tOrdinal0 [0x00352754+534356]\n\tOrdinal0 [0x00353475+537717]\n\tOrdinal0 [0x00352A6F+535151]\n\tOrdinal0 [0x00352E45+536133]\n\tOrdinal0 [0x003527A5+534437]\n\tOrdinal0 [0x0034F06C+520300]\n\tOrdinal0 [0x00352754+534356]\n\tOrdinal0 [0x003525BF+533951]\n\tOrdinal0 [0x003523D3+533459]\n\tOrdinal0 [0x00360620+591392]\n\tOrdinal0 [0x00302A0C+207372]\n\tOrdinal0 [0x00301D0D+204045]\n\tOrdinal0 [0x002FFC1B+195611]\n\tOrdinal0 [0x002E3B7F+80767]\n\tOrdinal0 [0x002E4B4E+84814]\n\tOrdinal0 [0x002E4AD9+84697]\n\tOrdinal0 [0x004DCE64+2149988]\n\tGetHandleVerifier [0x0074BE95+1400773]\n\tGetHandleVerifier [0x0074BB61+1399953]\n\tGetHandleVerifier [0x007531FA+1430314]\n\tGetHandleVerifier [0x0074C69F+1402831]\n\tOrdinal0 [0x004D3D61+2112865]\n\tOrdinal0 [0x004DE5CB+2155979]\n\tOrdinal0 [0x004DE6F5+2156277]\n\tOrdinal0 [0x004EF26E+2224750]\n\tBaseThreadInitThunk [0x765033AA+18]\n\tRtlInitializeExceptionChain [0x77949F72+99]\n\tRtlInitializeExceptionChain [0x77949F45+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:209)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:132)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepDefinitions.addToCartStepDefinition.user_is_on_Amazon_Home_page(addToCartStepDefinition.java:28)\r\n\tat ✽.Given user is on Amazon Home page(addToCart_Scenario.feature:33)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "addToCartStepDefinition.user_clicks_on_textbox_and_enter_Redmi()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "addToCartStepDefinition.user_clicks_on_a_product_under_Redmi()"
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
  "duration": 419791,
  "status": "passed"
});
});