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
            .delete('')
            .set(headers);
        await logger.info('[ DELETE ]:', url);
        return res;
    } catch (e) {
        await logger.error('[ DELETE ]:', url, `error message:`, e);
    }
};