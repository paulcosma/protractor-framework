var CalculatorHome = function(){
    // Locators
    var firstField = element(by.model('first'));
    var secondField = elemnt(by.model('second'));
    var goButton = element(by.id)('gobutton');

    // Methods
    // get Page
    this.get = function () {
        browser.get('http://juliemr.github.io/protractor-demo/');
    }

    // set Value for first field
    this.enterFirstFieldValue = function (value) {
        firstField.clear();
        firstField.sendKeys(value);
    }

    // set Value for Second field
    this.enterSecondFieldValue = function (value) {
        secondField.clear();
        secondField.sendKeys(value);
    }

    // click on Go button
    this.clickGoButton = function(){
        goButton.click();
    }

};

// I am able to export this page
module.export = new CalculatorHome();
