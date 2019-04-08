/* global protractor,describe,require,it,expect,element,by,browser */
'use strict';
var env = require('../conf/environment.js');
var utils = require('../common/utils.js');

describe('Register tests suite', function() {

    var homePage = require('../page/HomePage.js');

    it('register user', function() {
        var user = "u" + utils.getDate().substr(3, 12);
        var userName = homePage
            .get()
            .clickSignUpButton()
            .enterUsername(user)
            .enterEmail(user + "@protractor.org")
            .enterPassword("protractorworkshop")
            .clickSignUpButton()
            .getUsername();
        expect(userName).toEqual(user);
    });

});