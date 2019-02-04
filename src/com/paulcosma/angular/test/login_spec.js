/* global protractor,describe,require,it,expect,element,by,browser */
'use strict';
var env = require('../conf/environment.js');

describe('Protractor Angular Demo App', function() {

    var homePage = require('../page/HomePage.js');

    it('login and verify articles', function() {
        var article = homePage
            .get()
            .clickSignInButton()
            .enterEmail("workshop@protractor.org")
            .enterPassword("protractorworkshop")
            .clickSignInButton()
            .getArticlePreviewText();
        expect(article).toEqual('No articles are here... yet.');
    });

});