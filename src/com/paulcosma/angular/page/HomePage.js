/* global require,element,by,browser,console,exports,module */
// imports
require('../page/Login.js');
require('../page/Register.js');// import next page used on return
var conf = require('../conf/chromeConf.js').config;

var HomePage = function () {
    "use strict";
    // Locators
    var homeButton = element(by.xpath("//*[@class='nav-link' and @routerlink='/']"));
    var signInButton = element(by.xpath("//*[@class='nav-link' and @routerlink='/login']"));
    var signUpButton = element(by.xpath("//*[@class='nav-link' and @routerlink='/register']"));

    // Methods
    /**
     * get HomePage
     * @returns {HomePage}
     */
    this.get = function () {
        console.log("baseURL = " + conf.baseUrl);
        browser.get(conf.baseUrl);
        var getAngularVersion = function() {
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
        return require('../page/Login.js');
    };

    /**
     * click on SignUp button. Register page will open
     * @returns {Login}
     */
    this.clickSignUpButton = function () {
        signUpButton.click();
        return require('../page/Register.js');
    };

};

// HomePage.prototype = headerFooter; // extend Header and Footer
module.exports = new HomePage();