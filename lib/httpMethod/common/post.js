/**Created by Dylan*/
module.exports = async function (url, requestBody, header) {
    try {
        let headers = header ? header : {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9",
            "Connection": "keep-alive"
        };

        let res = await request(url)
            .post('')
            .set(headers)
            .send(requestBody);
        await logger.info('[ POST ]:', url);
        return res;
    } catch (e) {
        await logger.error('[ POST ]:', url, `error message:`, e);
    }
};