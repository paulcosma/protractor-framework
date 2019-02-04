/* global protractor,describe,require,it,expect,element,by,browser */
'use strict';
var env = require('../conf/environment.js');

describe('Protractor Angular Demo App', function() {

    var homePage = require('../page/HomePage.js');

    it('should load from valid link', function() {
        homePage
            .get();
        expect(browser.getCurrentUrl()).toEqual('http://angular.paulcosma.com/');
    });

});