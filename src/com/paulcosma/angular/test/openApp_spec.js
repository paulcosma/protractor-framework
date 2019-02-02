/* global protractor,describe,require,it,expect,element,by,browser */
'use strict';
var env = require('../conf/environment.js');

xdescribe('Protractor Angular Demo App', function() {

    function getAngularVersion() {
        return window.getAllAngularRootElements()[0].attributes["ng-version"];
    }

    it('should load from valid link', function() {
        browser.get(env.URL);
        // browser.pause();
        browser.executeScript(getAngularVersion).then(function (version) {
            console.log("Angular version = " + JSON.stringify(require('util').inspect(version.value)));
        });
        expect(browser.getCurrentUrl()).toEqual('https://angular.paulcosma.com/');
    });

});