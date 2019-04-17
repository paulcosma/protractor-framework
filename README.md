### How to configure project and run tests on local/remote environment:
- Download and install [NodeJS](https://nodejs.org/en/download/) LTS
- Clone project [repository](https://git.accesa.eu/tau-poc/imc-lms-poc)
- Setup testing environment with
 ```
 npm run setup
 ```
- Run tests with command
 ```
 npm run test
 ```
Run all tests using npm:
```
npm run all-tests
```
Run a specific test:
```
node node_modules/protractor/bin/protractor src/com/paulcosma/angular/conf/chrome.conf.js --grep="register user"
```
#### Run all tests on Chrome or Firefox
```
npm run chrome
npm run firefox
npm run firefoxWin7
npm run ie11
```
### Generate Allure reports
```
npm run allure
```

Protractor Changelog:
https://github.com/angular/protractor/blob/master/CHANGELOG.md
