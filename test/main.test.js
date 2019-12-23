appPageObjects = require("../pages/main.page");

describe("User can login", function() {
  it("Open https://commerceos.staging.devpayever.com", () => {
    browser.url("/");
  });

  it("Login with valid credentials", () => {
    appPageObjects.username.waitForDisplayed();
    appPageObjects.username.setValue("aqa@payever.org");
    appPageObjects.password.waitForDisplayed();
    appPageObjects.password.setValue("Aqacool123!");
    appPageObjects.loginButton.click();
  });
});

describe("Shop app can be opened", () => {
  it("Open business dashboard", () => {
    appPageObjects.selectUser.click();
  });
  it("Click on Apps in the left top bar", () => {
    appPageObjects.topLeftAppButton.click();
  });
  it("Open shop app", () => {
    appPageObjects.shopIcon.click();
  });
});
describe("New theme can be created", () => {
  it("Click Themes in the top bar", () => {
    appPageObjects.themeMenu.click();
  });
  it("Click Add Theme", () => {
    appPageObjects.addThemeButton.waitForExist(15000);
    appPageObjects.addThemeButton.waitForDisplayed();
    appPageObjects.addThemeButton.click();
  });
});

describe("Text widget is added and contains provided text *This test is completed*", () => {
  it("Opens AQA shop", () => {
    appPageObjects.addTextWidgetButton.waitForDisplayed();
  });
  it("Click text widget icon in the nav bar", () => {
    appPageObjects.addTextWidgetButton.click();
  });
  it("Click text widget on canvas", () => {
    appPageObjects.canvas.shadow$(appPageObjects.shadowTextArea).click();
  });
  it("Assign text widget: *This test is completed*", () => {
    appPageObjects.shadowTextField.keys("This test is completed");
    browser.pause(2000); // just to hold page to show success criteria
  });
});

describe("Shop app can be closed", () => {
  it("Click Close in the right top bar", () => {
    appPageObjects.topRightCloseButton.click();
    console.log("Succesfully passed the test scenario");
    browser.pause(2000); // just to hold page to show success criteria
  });
});
