/* global require,element,by,browser,console,exports,module */
// imports
require('../page/Login.js'); // import next page used on return

var YourFeed = function () {
    "use strict";
    // Locators
    var articlePreview = element.all(by.css(".app-article-preview")).get(1);

    // Methods
    this.getArticlePreviewText = function () {
        articlePreview.getText().then(function (text) {
            console.log("Debug: Article preview text = " + text);
        });
        return articlePreview.getText();
    };
};

module.exports = new YourFeed();