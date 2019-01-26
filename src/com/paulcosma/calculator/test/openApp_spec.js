/* global protractor,describe,require,it,expect,element,by,browser */
describe('Protractor Calculator Demo App', function() {

    function getAngularVersion() {
        return window.angular.version.full;
    }

    it('should load from valid link', function() {
        browser.get('https://calculator.paulcosma.com/');
        // browser.pause();
        browser.executeScript(getAngularVersion).then(function (version) {
            console.log("Angular version = " + version);
        });
        expect(browser.getCurrentUrl()).toEqual('https://calculator.paulcosma.com/');
    });


});