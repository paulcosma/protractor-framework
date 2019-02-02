/* global protractor,describe,require,it,expect,element,by,browser */
'use strict';
var env = require('../conf/environment.js');

describe('Protractor Angular Demo App', function() {

       it('should load from valid link', function() {
        browser.get(env.URL);
        element(by.xpath("//*[@routerlink='/login']")).click();
        // browser.pause();
        // expect(browser.getCurrentUrl()).toEqual('https://angular.paulcosma.com/');
    });

});