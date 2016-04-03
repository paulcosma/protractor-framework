describe ('test the calculator demo site', function () {
    it ('test input field', function () {
       browser.get("http://juliemr.github.io/protractor-demo/");

        element(by.model("first")).sendKeys("1");
        element(by.model("second")).sendKeys("2");
        element(by.id("gobutton")).click();
        var resultBinding  = element(by.binding('latest'));
        //  element(resultBinding).getText().then(function (text) {
        //     console.log(text);
        // });
        expect(resultBinding.getText()).toEqual('3');
    });
});