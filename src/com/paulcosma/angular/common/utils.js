/* global require,element,by,browser,console,exports,module,protractor */

// imports

var utils = function () {
    "use strict";

    /**
     * Get Current date by format YYYY MM DD HH MM SS
     * @returns {string}
     */
    this.getDate = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var hh = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var ms = today.getMilliseconds();

        var yyyy = today.getFullYear();
        var yy = yyyy.toString().substr(2, 2);
        if (mm < 10) {
            mm = '0' + mm;
        }
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (hh < 10) {
            hh = '0' + hh;
        }
        if (m < 10) {
            m = '0' + m;
        }
        if (s < 10) {
            s = '0' + s;
        }
        var stringResult = "" + yyyy + mm + dd + hh + m + s + ms; // "" + to add strings not numbers
        return stringResult;
    };

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    this.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

};

module.exports = new utils();