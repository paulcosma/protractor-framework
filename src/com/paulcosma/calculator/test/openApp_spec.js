/* global protractor,describe,require,it,expect,element,by,browser */
describe('Protractor Calculator Demo App', function() {

    function getAngularVersion() {
        return window.angular.version.full;
    }

    function getBrowserConsoleErrors() {
        var deferred = protractor.promise.defer(); // promise
        browser.manage().logs().get('browser').then(function (browserLogs) {
            // browserLogs is an array of objects with level and message fields
            var result = '';
            browserLogs.forEach(function (log) {
                if (log.level.value > 900) { // it's an error log
                    console.log('\n Browser console errors = ' + log.message);
                    console.log('\n Browser console log = ' + require('util').inspect(log));
                    result += JSON.stringify(require('util').inspect(log));
                }
            });
            deferred.fulfill(result);
        });
        return deferred.promise;
    }

    afterEach(function () {
        getBrowserConsoleErrors();
    });

    it('should load from valid link', function() {
        browser.get('https://calculator.paulcosma.com/');
        // browser.pause();
        browser.executeScript(getAngularVersion).then(function (version) {
            console.log("Angular version = " + version);
        });
        expect(browser.getCurrentUrl()).toEqual('https://calculator.paulcosma.com/');
    });

});