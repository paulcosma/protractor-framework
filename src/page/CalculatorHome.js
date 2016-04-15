require('../page/CalculatorResult.js'); // import next page used on return

var CalculatorHome = function () {
    // Locators
    var firstField = element(by.model('first'));
    var secondField = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var pageName = element(by.xpath('//h3'));

    // Methods
    // get Page
    this.get = function () {
        browser.get("http://juliemr.github.io/protractor-demo/");
    };

    // set Value for first field
    this.enterFirstFieldValue = function (value) {
        firstField.sendKeys(value);
    };

    // set Value for Second field
    this.enterSecondFieldValue = function (value) {
        secondField.sendKeys(value);
    };

    this.getPageName = function () {
        return pageName.getText();
    }

    // click on Go button
    this.clickGoButton = function () {
        goButton.click();
        return require('../page/CalculatorResult.js'); // this must be imported as well
    };

};

// I am able to export this page
module.exports = new CalculatorHome();