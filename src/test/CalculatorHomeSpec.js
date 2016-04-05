describe ('test the calculator demo site', function () {

    // import page object page
    var calculatorHome  = require('/src/page/*Home.js');

    it ('test input field', function () {
        // use next line instead of import
        //var calculatorHome = new CalculatorHome();

        calculatorHome.get();
        calculatorHome.enterFirstFieldValue('1');
        calculatorHome.enterSecondFieldValue('2');
        calculatorHome.clickGoButton();

        // log the text of an element
        var resultBinding  = element(by.binding('latest'));
        resultBinding.getText().then(function(text) {
            console.log("Result:= " + text);
        });
        expect(resultBinding.getText()).toEqual('3');
    });

        // Ignore test using XIT
        xit ('test input field', function () {
            browser.get("http://juliemr.github.io/protractor-demo/");

            element(by.model("first")).sendKeys("1");
            element(by.model("second")).sendKeys("2");
            //browser.pause(); // Enter c to move the test forward by one task. Enter repl to enter interactive mode,  exit by pressing Ctrl-C
            //browser.debugger(); // run test in debug mode with protractor debug conf.js
            element(by.id("gobutton")).click();
            // log the text of an element
            var resultBinding  = element(by.binding('latest'));
            resultBinding.getText().then(function(text) {
                console.log("Result:= " + text);
            });
            expect(resultBinding.getText()).toEqual('3');

    });
});