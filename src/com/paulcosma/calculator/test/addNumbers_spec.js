/* global protractor,describe,require,it,expect,element,by,browser */
var env = require('../conf/environment.js');

describe('Calculator Operations', function() {

    var testParams = [
        {a: 1, b: 2, result: 3},
        {a: 2, b: 2, result: 5}
    ];

    testParams.forEach( function(testSpec) {
        it('add numbers test', async function() {
            console.log("Debug: a = " + testSpec.a);
            console.log("Debug: b = " + testSpec.b);
            console.log("Debug: result = " + testSpec.result);
            await browser.get(env.URL);
            await element(by.model("first")).sendKeys(testSpec.a);
            await element(by.model("second")).sendKeys(testSpec.b);
            await element(by.id("gobutton")).click();
            console.log("Debug: actual result = " + await element(by.css('.ng-binding')).getText());
            expect(await element(by.css('.ng-binding')).getText()).toEqual(testSpec.result.toString());
        });
    });

});