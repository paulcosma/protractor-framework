/* global require,element,by,browser,console,exports,Promise */
let protractorConf = require('./protractor.conf.js').config;

//Chrome configuration file.
exports.config = {
    SELENIUM_PROMISE_MANAGER: protractorConf.SELENIUM_PROMISE_MANAGER,
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--start-maximized']
        },
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