/* global require,element,by,browser,console,exports,module */
describe('test the calculator demo site', function () {
    'use strict';
    // import page object page
    var calculatorHome = require('../page/CalculatorHome.js');
    var calculatorResult = require('../page/CalculatorResult.js');

    // beforeEach(function(){
    //     calculatorHome.get();
    //     });

    it('test input field', function () {
        // use next line instead of import
        //var calculatorHome = new CalculatorHome();

        calculatorResult = calculatorHome
            .get()
            .enterFirstFieldValue('1')
            .enterSecondFieldValue('2')
            .clickGoButton();
        //browser.pause(); // Enter c to move the test forward by one task. Enter repl to enter interactive mode and send WebDriver commands to your browser, exit by pressing Ctrl-C
        //browser.debugger(); // run test in debug mode
        expect(calculatorResult.getResultText()).toEqual('3');
        // calculatorResult.getResultText().then(function(value){
        //     expect(value).toEqual('3');
        // });
    });

    // Ignore test using XIT
    xit('test input field', function () {
        browser.get("http://juliemr.github.io/protractor-demo/");

        element(by.model("first")).sendKeys("1");
        element(by.model("second")).sendKeys("2");
        element(by.id("gobutton")).click();
        // log the text of an element
        var resultBinding = element(by.binding('latest'));
        resultBinding.getText().then(function (text) {
            console.log("Result:= " + text);
        });
        expect(resultBinding.getText()).toEqual('3');
    });

});