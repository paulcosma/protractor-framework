/* global protractor,describe,require,it,expect,element,by,browser */
describe('Protractor Demo App', function() {
    it('should load from valid link', function() {
        console.log("This will be printed 1st");
        browser.get('https://calculator.paulcosma.com/').then(function(){
            console.log("This will be printed 3rd");
            }
        );
        expect(browser.getCurrentUrl()).toEqual('https://calculator.paulcosma.com/');
        console.log("This will be printed 2nd");
    });
});