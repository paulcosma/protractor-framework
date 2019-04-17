/* global require,element,by,browser,console,exports,module */
// imports
require('./Login.pageObject.js'); // import next page used on return

let YourFeed = function () {
    "use strict";
    // Locators
    let articlePreview = element.all(by.css(".app-article-preview")).get(1);
    let userName = element(by.xpath("//*[contains(@ng-reflect-router-link,'profile')]"));

    // Methods
    this.getArticlePreviewText = function () {
        articlePreview.getText().then(function (text) {
            console.log("Debug: Article preview text = " + text);
        });
        return articlePreview.getText();
    };

    this.getUsername = function () {
        userName.getText().then(function (text) {
            console.log("Debug: Username = " + text);
        });
        return userName.getText();
    };
};

module.exports = new YourFeed();