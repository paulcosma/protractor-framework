/* global protractor,describe,require,it,expect,element,by,browser */
var env = require('../conf/environment.js');
xdescribe('Protractor Cl Demo App', function() {
    it('load from valid link', async function() {
        await browser.get(env.URL);
        await expect(browser.getCurrentUrl()).toEqual('https://calculator.paulcosma.com/');
    });
});