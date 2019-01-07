/* global protractor,describe,require,it,expect,element,by,browser */
describe('Protractor Demo App', function() {
    it('should load from valid link', function() {
        browser.get('https://calculator.paulcosma.com/');
        expect(browser.getCurrentUrl()).toEqual('https://calculator.paulcosma.com/');
    });
});