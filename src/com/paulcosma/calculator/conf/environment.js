/* global require,element,by,browser,console,exports,module */
/**
 * this will define the Environment
 *
 * use:
 * "-integ" for Integration environment
 * "-test" for Test environment
 */
// var ENV = process.env.NODE_ENV || '';
var ENV = '';

// Application: "calculator", "angular"
var APP = "calculator";

// NPM node_modules path: Ubuntu14 = '/usr/local/lib/node_modules/', '/usr/lib/node_modules/', Windows: 'C:/Users/<user>/AppData/Roaming/npm/node_modules/'
// or local, on project folder '../../../../../node_modules/'
var npmNodeModulesPath = '../../../../../node_modules/';

module.exports = {
    APP_NAME: APP,

    // Application full URL
    URL: "https://" + APP + ENV + ".paulcosma.com",

    // NPM path is different on Windows VM and Linux VM
    NPM_NODE_MODULES_PATH: npmNodeModulesPath
};