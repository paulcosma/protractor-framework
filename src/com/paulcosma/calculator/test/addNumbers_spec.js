/* global protractor,describe,require,it,expect,element,by,browser */
var env = require('../conf/environment.js');

describe('Calculator Operations', function() {

    var testParams = [
        {a: 1, b: 2, result: 3},
        {a: 2, b: 2, result: 5}
    ];

    testParams.forEach( function(testSpec) {
        it('add numbers test', async function() {
            console.log("Debug: line 13 a = " + testSpec.a);
            console.log("Debug: line 14 b = " + testSpec.b);
            console.log("Debug: line 15 result = " + testSpec.result);
            await browser.get(env.URL);
            console.log("Debug: line 17");
            await element(by.model("first")).sendKeys(testSpec.a);
            console.log("Debug: line 19");
            await element(by.model("second")).sendKeys(testSpec.b);
            await element(by.id("gobutton")).click();
            console.log("Debug: line 22 actual result = " + await element(by.css('h2.ng-binding')).getText());
            // previous console log using promises
            element(by.css('h2.ng-binding')).getText().then(function (value) {
                console.log("Debug: line 25 actual result promise = " + value);
            });
            expect(await element(by.css('h2.ng-binding')).getText()).toEqual(testSpec.result.toString());
            console.log("Debug: line 28");
            console.log("Debug line 29: a = " + testSpec.a);
            console.log("Debug line 30: b = " + testSpec.b);
            console.log("Debug line 31: result = " + testSpec.result);
        });
    });

});