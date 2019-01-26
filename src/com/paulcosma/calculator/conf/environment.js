/* global require,element,by,browser,console,exports,module */
/**
 * this will define the Environment
 *
 * use:
 * "-integ" for Integration environment
 * "-test" for Test environment
 */
var ENV = process.env.NODE_ENV || '';

// Application: "calculator", "angular"
var APP = "calculator";

// or local, on project folder '../../../../../node_modules/'
var npmNodeModulesPath = '../../../../../node_modules/';

module.exports = {
    APP_NAME: APP,

    // Application full URL
    URL: "https://" + APP + ENV + ".paulcosma.com",

    NPM_NODE_MODULES_PATH: npmNodeModulesPath,
};