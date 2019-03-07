/* global require,element,by,browser,console,exports,module */
// imports
require('../page/Login.js'); // import next page used on return

var Register = function () {
    "use strict";
    // Locators
    var usernameField = element(by.css("[ng-reflect-name='username']"));
    var emailField = element(by.css("[ng-reflect-name='email']"));
    var passwordField = element(by.css("[ng-reflect-name='password']"));
    var signUpButton = element(by.css('.btn[type="submit"]'));

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
        return require('../page/YourFeed.js');
    };

};

module.exports = new Register();