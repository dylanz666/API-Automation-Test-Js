# API-Automation-Test-Js
API automation test framework implemented by Node.js

# Installation

* __SoftWares that need to be installed initially__: Git,Nodejs(The nodejs version should later than v7.6.0).
* __Sync the code by__: git clone https://github.com/dylanzhang123456/API-Automation-Test-Js.git
* __Install devDependencies__: Go to the project and use the command below

```bash
    $ npm install
```

# Project structure

* __lib/asserts__: Some static source, such as .xlsx/.txt/.png/.jpg/.json and so on.
* __lib/commands__: The implements of common actions and exported as "I" object,the supported method can be found in Commands.js.
* __lib/config__: Configurations for each environment,exported in init.js as "conf" object.
* __lib/httpMethod__: The implements of calling APIs, including,exported as "http" object,the supported method can be found in Http.js.
* __lib/sql__: Centralization of sql, exported as sql in init.js.
* __lib/utils__: Some service to support test.

* __logs__: Saved logs that automatic created by log4js.
* __mochawesome-report__: Mochawesome report that automatic created by mochawesome.
* __test/path__: API path, divided by backend's resource name,the file and function name should start with test suite file name(not include 'Resource') and plus 'ApiPath',else you should require in your test suites by yourself.
* __test/spec__: Mocha test files' directories.
* __test/testData/./*.js__: Test data divided by env(The test data like test/testData/./*.js,
which file and function name should be the same with test suite file name,
else you should require in your test suites by yourself).
* __test/requestBody/./*.json__: Request Body, the file name should start with test suite file name(not include 'Resource') and plus 'RequestBody'.
* __test/Template.js__: A test suite template, you can copy this code to your new created suite and implement it.
* __init.js__: Execution files which will be executed before running mocha test.

# How to write a test or a test case
* __Create a test case in: test/spec/*/__
* __Add a test case code to the new case files,like__:
```bash

/**Created by Dylan*/
describe('Template', async function () {
    before(async function () {
        (await require(`${process.cwd()}/init`))(this);
        await I.login();
    });
    beforeEach(async function () {
        //Your beforeEach code
    });

    it("1.[Positive] ", async function () {
        //Your code for positive test case
    });
    it("2.[Negative] ", async function () {
        //Your code for negative test case
    });

    afterEach(async function () {
        //Your afterEach code
    });
    after(async function () {
        //Your after code
    });
});

```
* __If the I object cannot satisfy the developer, you can add a new one in__: commands/* and Commands.js.
* __If the http methods cannot satisfy the developer, you can add a new one in__: httpMethod/*/ and Http.js.


# How to create a case which need to get without login
```bash
    it("[Negative] Get XXX api without login BO should pass", async function () {
        let response = await http.getWithoutLoginBO(path.XXX);
        assert.equal(response.statusCode, 204);
    });
```
# How to mark happy/sad cases
* __Add a tag in every cases__: Use [Positive] for happy pass cases and [Negative] for sad cases.

* __Use the below command in the project__:
```bash
    $ npm test
```
# How to run specific case/cases/suite/suites
* __Add .only to describe or it in spec file,like__:
```bash
    describe.only('Template'...
```
```bash
    it.only('Template'...
```

# Retry and Run in parallel are supported in this framework
* __Configured in package.json, we will retry for 3 times when a case is failed__:
```bash
    "scripts": {
        "test": "mocha test/spec/*/*.js --reporter mochawesome --reporter-options jsonReport=true,shortScrFileNames=true --retries 3 --timeout=30000",
        "parallel":"mocha-parallel-tests test/spec/*/*.js --reporter mochawesome --reporter-options jsonReport=true,shortScrFileNames=true,multiReport=true --retries 3 --timeout=30000"
    }
```

# How to query data in oracle DB
* __Use the code like the one in below__:
```bash
    await queryDbUtil.queryDB(sql.UPDATE_IS_DEFAULT_TO_N_IN_BO_USER_ROLE_EXTENSION_BY_FIRST_NAME_LAST_NAME, firstName, lastName);
    await queryDbUtil.queryDB(sql.UPDATE_IS_DEFAULT_TO_Y_IN_BO_USER_ROLE_EXTENSION_BY_USER_ID, userRoleId);
```
* __Parameters Consuming__: The first one is the plain sql, the others are some parameters which will map to sql.

# How to map test data to api path/requestBody
* __Use node.js original format method from "util" module and exported as "STRING" object in init.js__
* __The code should be like__:
```bash
    STRING.format(path.xxx.yyy,"leadId",123123);
    body.XXX=STRING.format(body.XXX,"type","email")
```

# How to compare 2 Arrays
```bash
    let arr1 = [1,2,3,4,5,6];
    let arr2 = [2,3,5,1,6,4];
    assert.equal(arr1.sort().join(), arr2.sort().join());
```
* __assert include so many assertion methods that will helpful for you__: https://www.chaijs.com/api/assert/

# Integration with Jenkins
* __Jenkins Job__: TBD

# Specification
* __Feature branch__: The branch name should be like:feature/XXXX.
* __Push code__: Please push your code to your feature branch with message starts with your issue number.
* __Merge to master branch__: Please create pull request from your feature branch to master branch for team members
to do code review,after code reviewed,QA lead will merge code to master branch.
* __Add code__: Before coding,we should check current code to see whether we can use/refactor existed code or not.
* __Run your cases__:Please make sure your cases can be run in every environment including prod,
if you don't want to run in prod,please skip it in your test cases.
* __Sql name__:Please use suitable sql name in pageObject like:it should be all uppercase word,this is good for understanding.
* __Data centralization__: Please note that the config data/sql/api path/test data ara all centralized.
* __Spelling__:Please make sure the word you used is correct/suitable.

# Learn more
* __Mocha__:https://mochajs.org/
* __supertest__:https://github.com/visionmedia/supertest
* __mochawesome__: https://www.npmjs.com/package/mochawesome
* __log4js__:https://github.com/log4js-node/log4js-node
* __Chai__:https://www.npmjs.com/package/chai
* __Chai expect/should/assert__:http://www.chaijs.com/api/
* __util module official document__:https://nodejs.org/api/util.html#util_util
* __lodash__: https://www.lodashjs.com/
* __randomatic__: https://www.npmjs.com/package/randomatic
* __ES6 Tutorials__:http://es6.ruanyifeng.com/#README