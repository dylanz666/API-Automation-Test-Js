/**Created by Dylan*/
class MochaHookUtil {
    static getTestData(file) {
        let fileName = path.basename(file, '.js');
        let testDataFileName = fileName.replace('Resource', 'TestData');
        return testData[testDataFileName] || {}
    }

    static getRequestBody(file) {
        let fileName = path.basename(file, '.js');
        let requestBodyFileName = fileName.replace('Resource', 'RequestBody');
        return requestBody[requestBodyFileName] || {};
    }

    static getApiPath(file) {
        let fileName = path.basename(file, '.js');
        let apiPathFileName = fileName.replace('Resource', 'ApiPath');
        return apiPath[apiPathFileName] || {};
    }

    static skipForEnv(_this, _env) {
        if (_env && env === _env) {
            _this.skip();
        }
    }

    static async init(_this, _env) {
        let file = _this.test.file;
        global.data = this.getTestData(file);
        global.body = this.getRequestBody(file);
        global.paths = this.getApiPath(file);
        this.skipForEnv(_this, _env);
    }
}

module.exports = MochaHookUtil;