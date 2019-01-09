/* global protractor,describe,require,it,expect,element,by,browser */
var env = require('../conf/environment.js');

fdescribe('Calculator SUM', function() {

    function getAngularVersion() {
        return window.angular.version.full;
    }

    var testParams = [
        {a: 1, b: 2, result: 3},
        {a: 2, b: 2, result: 4}
    ];

    testParams.forEach(function(testSpec) {
        it('Sum test', function() {
            console.log("VACA " + testSpec.a);
            browser.get(env.URL);
            browser.executeScript(getAngularVersion).then(function (version) {
                console.log("Angular version = " + version);
            });
            element(by.model("first")).sendKeys(testSpec.a);
            element(by.model("second")).sendKeys(testSpec.b);
            element(by.id("gobutton")).click();
            (element(by.css('.ng-binding')).getText()).then(function (result) {
               console.log("VACA" + result)
            });
            expect(element(by.css('.ng-binding')).getText(), testSpec.result)
        });
    });

});