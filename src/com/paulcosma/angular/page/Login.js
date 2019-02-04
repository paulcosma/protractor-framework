/* global require,element,by,browser,console,exports,module */
// imports
require('../page/Login.js'); // import next page used on return

var Login = function () {
    "use strict";
    // Locators
    var emailField = element(by.xpath("//*[@formcontrolname='email']"));
    var passwordField = element(by.css('[formcontrolname="password"]'));
    var signInButton = element(by.css('.btn[type="submit"]'));

    // Methods
    this.enterEmail = function (email) {
        emailField.clear();
        emailField.sendKeys(email);
        // log email typed in email field
        emailField.getAttribute("value").then(function (readFieldValue) {
            console.log("Debug: Email typed in email login field = " + readFieldValue);
        });
        return this;
    };

    this.enterPassword = function (password) {
        passwordField.clear();
        passwordField.sendKeys(password);
        return this;
    };

    this.clickSignInButton = function () {
        signInButton.click();
        return require('../page/YourFeed.js');
    };

};

module.exports = new Login();