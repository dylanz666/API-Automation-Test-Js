/**Created by Dylan*/
const deleteRequest = require('./site/delete');
const getRequest = require('./site/get');
const postRequest = require('./site/post');
const putRequest = require('./site/put');
const postWithUploadFile = require('./site/postWithUploadFile');
const commonDelete = require('./common/delete');
const commonGet = require('./common/get');
const commonPost = require('./common/post');
const commonPut = require('./common/put');

class Http {
    static async delete(apiPath, additionalHeader) {
        return await deleteRequest(apiPath, additionalHeader);
    }

    static async get(apiPath, additionalHeader) {
        return await getRequest(apiPath, additionalHeader);
    }

    static async post(apiPath, requestBody, additionalHeader) {
        return await postRequest(apiPath, requestBody, additionalHeader);
    }

    static async put(apiPath, requestBody, additionalHeader) {
        return await putRequest(apiPath, requestBody, additionalHeader);
    }

    static async getWithoutLoginSite(apiPath, header) {
        let url = urlBuilderUtil.buildUrl(apiPath);
        return await commonGet(url, header);
    }

    static async postWithUploadFile(apiPath, filePath, additionalHeader) {
        return await postWithUploadFile(apiPath, filePath, additionalHeader)
    }

    static async commonDelete(url, header) {
        return await commonDelete(url, header);
    }

    static async commonGet(url, header) {
        return await commonGet(url, header);
    }

    static async commonPost(url, requestBody, header) {
        return await commonPost(url, requestBody, header);
    }

    static async commonPut(url, requestBody, header) {
        return await commonPut(url, requestBody, header);
    }
}

module.exports = Http;