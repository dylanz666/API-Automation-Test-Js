/**Created by Dylan*/
module.exports = async function (apiPath, additionalHeader) {
    let url = urlBuilderUtil.buildUrl(apiPath);
    try {
        let headers = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9",
            "Connection": "keep-alive",
            "Host": "www.apiopen.top",
            "Upgrade-Insecure-Requests":"1"
        };
        headers = Object.assign({}, headers, additionalHeader);

        let res = await request(url)
            .get('')
            .set(headers);
        await logger.info('[ GET ]:', url);
        return res;
    } catch (e) {
        await logger.error('[ GET ]:', url, `error message:`, e);
    }
};