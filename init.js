/**Created by Dylan*/
module.exports = async function (_this) {
    //import 3rd part modules
    global.fs = require('fs');
    global.path = require('path');
    global.STRING = global.SQL = require('util');
    global.moment = require('moment');
    global.expect = require('chai').expect;
    global.assert = require('chai').assert;
    global.request = require("supertest");

    //import env config
    global.env = process.env.NODE_ENV ? (process.env.NODE_ENV).toLowerCase() : "qa";
    global.decryptionKey = process.env.decryptionKey || "automationTest";

    //import classes
    global.logger = require('./lib/utils/Logger');
    global.I = require('./lib/commands/Commands');
    global.conf = (new (require("./lib/config/Config"))()).getConfig();
    global.httpRequest = require('./lib/httpMethod/Http');
    global.desUtil = require('./lib/utils/DesUtil');
    global.dateUtil = require('./lib/utils/DateUtil');
    global.queryDbUtil = require('./lib/utils/QueryDbUtil');
    global.randomUtil = require('./lib/utils/RandomUtil');
    global.mochaHookUtil = require('./lib/utils/MochaHookUtil');
    global.urlBuilderUtil = require('./lib/utils/UrlBuilderUtil');
    global.excelUtil = require('./lib/utils/ExcelUtil');
    //global.DBConnectionId = env !== 'pr' ? await queryDbUtil.getDBConnection() : null;

    //import test data
    global.sql = require("./lib/sql/index");
    global.testData = require('./test/testData/index');
    global.requestBody = require('./test/requestBody/index');
    global.apiPath = require('./test/apiPath/index');

    await logger.info("********************START*TESTING********************");
    await mochaHookUtil.init(_this);
};