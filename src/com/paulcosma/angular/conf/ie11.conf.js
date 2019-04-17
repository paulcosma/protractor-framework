/* global require,element,by,browser,console,exports,Promise */
let protractorConf = require('./protractor.conf.js').config;

//IE11 configuration file.
//https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver
//http://elgalu.github.io/2014/run-protractor-against-internet-explorer-vm/
exports.config = {
    SELENIUM_PROMISE_MANAGER: protractorConf.SELENIUM_PROMISE_MANAGER,
    directConnect: false,
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    seleniumArgs: ['-Dwebdriver.ie.driver=node_modules/protractor/selenium/IEDriverServer3.141.5.exe'],
    capabilities: {
        'browserName': 'internet explorer',
        'version': '11',
        'shardTestFiles': true,
        'maxInstances': 1
    },
    restartBrowserBetweenTests: protractorConf.restartBrowserBetweenTests,
    baseUrl: protractorConf.baseUrl,
    allScriptsTimeout: protractorConf.allScriptsTimeout,
    getPageTimeout: protractorConf.getPageTimeout,
    framework: protractorConf.framework,
    suites: protractorConf.suites,
    jasmineNodeOpts: protractorConf.jasmineNodeOpts,
    beforeLaunch: protractorConf.beforeLaunch,
    onPrepare: protractorConf.onPrepare,
    afterLaunch: protractorConf.afterLaunch
};