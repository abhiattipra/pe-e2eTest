class appPageObjects {

  //******************LOGIN PAGE*******************
  get username() {
    return $('//input[@pe-qa-input="control.email"]');
  }

  get password() {
    return $(`//input[@pe-qa-input-password="control.plainPassword"]`);
  }

  get loginButton() {
    return $('//div[text()="Login"]');
  }
  
  //***PROFILE SELECT PAGE***
  get selectUser() {
    return $(".mat-card-logo-wrapper");
  }

  //****BUSINESS DASHBOARD PAGE***
  get topLeftAppButton() {
    return $('//button[@data-pe-navbar-link="apps"]');
  }
  
//***APP SELECTOR PAGE***
  get shopIcon() {
    return $('//div[@data-pe-app="shop"]');
  }
 //***AQA SHOP PAGE***
 
  // shadowDom-Root canvas element
  get canvas() {
    return $("pe-editor-canvas");
  }
  get addThemeButton() {
    return $('//mat-card-content[@data-pe-themes="add"]');
  }
  get themeMenu() {
    return $('//button[@data-pe-navbar-link="themes"]');
  }
  get addTextWidgetButton() {
    return $('//button[@pe-qa-builder="text"]');
  }
  get shadowTextArea() {
    return "div > pe-editor-element-anchors > svg";
  }
  get shadowTextField() {
    return $("//*[pe-editor-text-decorator/peb-text-editor/div]");
  }
  get topRightCloseButton() {
    return $('//button[@data-pe-navbar-link="close"]');
  }
}
module.exports = new appPageObjects();
