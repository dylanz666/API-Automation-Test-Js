/**Created by Dylan*/
module.exports = async function (url, header) {
    try {
        let headers = header ? header : {
                "Accept": "application/json, text/plain, */*",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "en-US,en;q=0.9",
                "Connection": "keep-alive"
            };

        let res = await request(url)
            .get('')
            .set(headers);
        await logger.info('[ GET ]:', url);
        return res;
    } catch (e) {
        await logger.error('[ GET ]:', url, `error message:`, e);
    }
};