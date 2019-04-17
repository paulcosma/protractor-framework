/* global require,element,by,browser,console,exports,module */
// imports
require('./Login.pageObject.js');
require('./Register.pageObject.js');// import next page used on return
let conf = require('../conf/chrome.conf.js').config;

let HomePage = function () {
    "use strict";
    // Locators
    let homeButton = element(by.xpath("//*[@class='nav-link' and @routerlink='/']"));
    let signInButton = element(by.xpath("//*[@class='nav-link' and @routerlink='/login']"));
    let signUpButton = element(by.xpath("//*[@class='nav-link' and @routerlink='/register']"));

    // Methods
    /**
     * get HomePage
     * @returns {HomePage}
     */
    this.get = function () {
        console.log("baseURL = " + conf.baseUrl);
        browser.get(conf.baseUrl);
        let getAngularVersion = function() {
            return window.getAllAngularRootElements()[0].attributes["ng-version"];
        };
        browser.executeScript(getAngularVersion).then(function (version) {
            console.log("Angular version = " + JSON.stringify(require('util').inspect(version.value)));
        });
        return this;
    };

    /**
     * click on SignIn button. Login page will open
     * @returns {HomePage}
     */
    this.clickSignInButton = function () {
        signInButton.click();
        return require('./Login.pageObject.js');
    };

    /**
     * click on SignUp button. Register page will open
     * @returns {Login}
     */
    this.clickSignUpButton = function () {
        signUpButton.click();
        return require('./Register.pageObject.js');
    };

};

// HomePage.prototype = headerFooter; // extend Header and Footer
module.exports = new HomePage();