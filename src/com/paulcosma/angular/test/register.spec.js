/* global protractor,describe,require,it,expect,element,by,browser */
'use strict';
let utils = require('../common/utils.js');

describe('Register tests suite', function() {

    let homePage = require('../page/HomePage.pageObject.js');

    it('register user', function() {
        let user = "u" + utils.getDate().substr(3, 12);
        let userName = homePage
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