/* global require,element,by,browser,console,exports,module */
require('../page/CalculatorResult.js'); // import next page used on return

var CalculatorHome = function () {
    'use strict';
    // Locators
    var firstField = element(by.model('first'));
    var secondField = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var pageName = element(by.xpath('//h3'));

    // Methods
    /**
     * get Page
     */
    this.get = function () {
        browser.get("http://juliemr.github.io/protractor-demo/");
        return this;
    };

    /**
     * set Value for first field
     * @param value for the first field
     */
    this.enterFirstFieldValue = function (value) {
        firstField.sendKeys(value);
        return this;
    };

    /**
     * set Value for Second field
     * @param value for the second field
     */
    this.enterSecondFieldValue = function (value) {
        secondField.sendKeys(value);
        return this;
    };

    /**
     * get then Page Name displayed on top of the page
     * @returns Page Name text{webdriver.promise.Promise<string[]>|webdriver.promise.Promise<string>}
     */
    this.getPageName = function () {
        return pageName.getText();
    };

    /**
     * click on Go button
     * @returns {CalculatorResult}
     */
    this.clickGoButton = function () {
        goButton.click();
        return require('../page/CalculatorResult.js'); // this must be imported as well
    };

};

// I am able to export this page
module.exports = new CalculatorHome();