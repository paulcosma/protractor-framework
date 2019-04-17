/* global protractor,describe,require,it,expect,element,by,browser */
describe('Protractor Calculator Demo App', function() {

    function getAngularVersion() {
        return window.angular.version.full;
    }

    it('should load from valid link', async function() {
        await browser.get('https://calculator.paulcosma.com/');
        console.log("Angular version = " +  await browser.executeScript(getAngularVersion));
        // debugger;
        await expect(browser.getCurrentUrl()).toEqual('https://calculator.paulcosma.com/');
    });

});