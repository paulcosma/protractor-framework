/* global protractor,describe,require,it,expect,element,by,browser */
'use strict';

describe('Protractor Angular Demo App', function() {

    let homePage = require('../page/HomePage.pageObject.js');

    it('login and verify articles', function() {
        let article = homePage
            .get()
            .clickSignInButton()
            .enterEmail("workshop@protractor.org")
            .enterPassword("protractorworkshop")
            .clickSignInButton()
            .getArticlePreviewText();
        expect(article).toEqual('No articles are here... yet.');
    });

});