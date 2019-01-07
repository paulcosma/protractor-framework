describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.driver.manage().window().maximize();
        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});