/* global protractor,describe,require,it,expect,element,by,browser */
var env = require('../conf/environment.js');

describe('Calculator Operations', function() {

    var testParams = [
        {a: 1, b: 2, result: 3},
        {a: 2, b: 2, result: 5}
    ];

    testParams.forEach(function(testSpec) {
        it('add numbers test', function() {
            console.log("Debug: a = " + testSpec.a);
            console.log("Debug: b = " + testSpec.b);
            console.log("Debug: result = " + testSpec.result);
            browser.get(env.URL);
            element(by.model("first")).sendKeys(testSpec.a);
            element(by.model("second")).sendKeys(testSpec.b);
            element(by.id("gobutton")).click();
            element(by.css('.ng-binding')).getText().then(function (result) {
               console.log("Debug: actual result = " + result)
            });
            expect(element(by.css('.ng-binding')).getText()).toEqual(testSpec.result.toString());
        });
    });

});