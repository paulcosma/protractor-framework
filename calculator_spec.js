describe ('test the calculator demo site', function () {
    it ('test input field', function () {
       browser.get("http://juliemr.github.io/protractor-demo/");

        element(by.model("first")).sendKeys("1");
        element(by.model("second")).sendKeys("2");
        //browser.pause(); //Enter c to move the test forward by one task. Enter repl to enter interactive mode,  exit by pressing Ctrl-C
        //browser.debugger(); run test in debug mode with protractor debug conf.js
        element(by.id("gobutton")).click();
        var resultBinding  = element(by.binding('latest'));
        //  element(resultBinding).getText().then(function (text) {
        //     console.log(text);
        // });
        expect(resultBinding.getText()).toEqual('3');
    });
});