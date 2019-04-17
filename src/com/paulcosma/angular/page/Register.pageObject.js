/* global require,element,by,browser,console,exports,module */
// imports
require('./Login.pageObject.js'); // import next page used on return

let Register = function () {
    "use strict";
    // Locators
    let usernameField = element(by.css("[ng-reflect-name='username']"));
    let emailField = element(by.css("[ng-reflect-name='email']"));
    let passwordField = element(by.css("[ng-reflect-name='password']"));
    let signUpButton = element(by.css('.btn[type="submit"]'));

    // Methods
    this.enterUsername = function (user) {
        usernameField.clear();
        usernameField.sendKeys(user);
        usernameField.getAttribute("value").then(function (readFieldValue) {
            console.log("Debug: Username typed in username Register field = " + readFieldValue);
        });
        return this;
    };

    this.enterEmail = function (email) {
        emailField.clear();
        emailField.sendKeys(email);
        emailField.getAttribute("value").then(function (readFieldValue) {
            console.log("Debug: Email typed in email Register field = " + readFieldValue);
        });
        return this;
    };

    this.enterPassword = function (password) {
        passwordField.clear();
        passwordField.sendKeys(password);
        return this;
    };

    this.clickSignUpButton = function () {
        signUpButton.click();
        return require('./YourFeed.pageObject.js');
    };

};

module.exports = new Register();