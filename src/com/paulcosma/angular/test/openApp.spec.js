/* global protractor,describe,require,it,expect,element,by,browser */
'use strict';

describe('Protractor Angular Demo App', function() {

    let homePage = require('../page/HomePage.pageObject.js');

    it('should load from valid link', function() {
        homePage
            .get();
        expect(browser.getCurrentUrl()).toEqual('http://angular.paulcosma.com/');
    });

});