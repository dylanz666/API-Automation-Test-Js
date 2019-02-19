/**Created by Dylan*/
module.exports = async function (apiPath, additionalHeader) {
    let url = urlBuilderUtil.buildUrl(apiPath);
    try {
        let headers = {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9",
            "Connection": "keep-alive"
        };
        headers = Object.assign({}, headers, additionalHeader);

        ctx.XRequestBy ? headers["X-Requested-By"] = ctx.XRequestBy : null;
        (ctx.JSESSIONID && ctx.ehiCookie) ? headers["Cookie"] = `JSESSIONID=${ctx.JSESSIONID}; ehiCookie=${ctx.ehiCookie}` : null;

        let res = await request(url)
            .delete('')
            .set(headers);
        await logger.info('[ DELETE ]:', url);
        return res;
    } catch (e) {
        await logger.error('[ DELETE ]:', url, `error message:`, e);
    }
};