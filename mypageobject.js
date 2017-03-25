/* global require,element,by,browser,console,exports,module */
// file mypageobject.js
exports.addressInput =
    element(by.css('.form'))
        .element(by.model('address'));