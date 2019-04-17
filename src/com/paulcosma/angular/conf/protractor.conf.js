/* global require,element,by,browser,console,exports,Promise */
let env = require('./environment.js');
const HtmlScreenshotReporter = require(env.NPM_NODE_MODULES_PATH + 'protractor-jasmine2-screenshot-reporter');
let reporter = new HtmlScreenshotReporter({
    cleanDestination: true,
    showSummary: true,
    showConfiguration: true,
    reportOnlyFailedSpecs: false,
    captureOnlyFailedSpecs: true,
    reportTitle: "REPORT",
    dest: 'test-output/screenshots',
    filename: 'report.html'
});

//Base configuration file.
exports.config = {
    SELENIUM_PROMISE_MANAGER: true,

    //If true, Protractor will connect directly to the browser Drivers.
    directConnect: true,

    //Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--start-maximized']
        },
        //Change consolidateAll to false if shardTestFiles = true (in order for reports to display all tests)
        'shardTestFiles': true,
        'maxInstances': 1
    },

    //If true, protractor will restart the browser between each test.
    //CAUTION: Restarting browsers will cause your tests to slow down drastically.
    restartBrowserBetweenTests: false,

    //A base URL for application under test.
    baseUrl: env.URL,

    //The timeout in milliseconds for each script run on the browser.
    allScriptsTimeout: 1800000,

    //How long to wait for a page to load.
    getPageTimeout: 300000,

    //Framework to use. Jasmine is recommended.
    framework: 'jasmine2',

    //We are going to use suites instead of specs
    //Spec patterns are relative to the location of this config.
    //specs: ['../test/*.spec.js'],

    //Run with command line parameter. (e.g.: --suite=smoke,allTests)
    //When run without a command line parameter, all suites will run
    suites: {
        allTests: [
            '../test/*.spec.js'
        ]
    },
    //Use a specific suite by default instead of all suites.
    //Run by default all tests if no suite parameters is specified as parameter
    // suite: ['../test/*.spec.js'],

    //Options to be passed to Jasmine.
    jasmineNodeOpts: {
        //If true, display spec names.
        isVerbose: true,
        //If true, print colors to the terminal.
        showColors: true,
        //If true, include stack traces in failures.
        includeStackTrace: true,
        //Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 1800000,
        //Function called to print jasmine results.
        print: function () {
        }
        //If set, only execute specs whose names match the pattern, which is internally compiled to a RegExp.
        // grep: 'pattern',
        //Inverts 'grep' matches
        // invertGrep: false
    },

    //Setup the report before any tests start
    beforeLaunch: function () {
        'use strict';
        return new Promise(function (resolve) {
            reporter.beforeLaunch(resolve);
        });
    },

    //Login, go to Start page and add Jasmine reports
    onPrepare: function () {
        'use strict';
        //Assign the test reporter to each running instance
        jasmine.getEnv().addReporter(reporter);
        var SpecReporter = require(env.NPM_NODE_MODULES_PATH + 'jasmine-spec-reporter').SpecReporter;
        //Add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({
                displayStacktrace: 'all',
                colors: {
                    success: 'green',
                    failure: 'red',
                    pending: 'yellow'
                }
            }
        ));
        var jasmineReporters = require(env.NPM_NODE_MODULES_PATH + 'jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            savePath: 'test-output',
            //Change to false if shardTestFiles is true
            consolidateAll: false
        }));
        //Get stacktrace on which line the expectation failed or an error happened
        jasmine.getEnv().addReporter(new jasmineReporters.TerminalReporter({
            verbosity: 3,
            color: true,
            showStack: true
        }));
        //Add Allure Reporter
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'test-output/allure-results'
        }));
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
        //Maximize browser size before tests
        browser.driver.manage().window().maximize();
    },

    //Close the report after all tests finish
    afterLaunch: function (exitCode) {
        'use strict';
        return new Promise(function (resolve) {
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};
