/* global require,element,by,browser,console,exports,module */
// imports
require('./Login.pageObject.js'); // import next page used on return

let Login = function () {
    "use strict";
    // Locators
    let emailField = element(by.xpath("//*[@formcontrolname='email']"));
    let passwordField = element(by.css('[formcontrolname="password"]'));
    let signInButton = element(by.css('.btn[type="submit"]'));

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
        return require('./YourFeed.pageObject.js');
    };

};

module.exports = new Login();