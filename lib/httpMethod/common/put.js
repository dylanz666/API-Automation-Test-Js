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
            .put('')
            .set(headers)
            .send(requestBody);
        await logger.info('[ PUT ]:', url);
        return res;
    } catch (e) {
        await logger.error('[ PUT ]:', url, `error message:`, e);
    }
};