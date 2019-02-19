/**Created by Dylan*/
module.exports = async function (apiPath, requestBody, additionalHeader) {
    let url = urlBuilderUtil.buildUrl(apiPath);
    try {
        let headers = {
            "Accept": "application/json, text/plain, */*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "en-US,en;q=0.9",
            "Connection": "keep-alive",
            "Content-Type": "application/json"
        };
        headers = Object.assign({}, headers, additionalHeader);

        ctx.XRequestBy ? headers["X-Requested-By"] = ctx.XRequestBy : null;
        (ctx.JSESSIONID && ctx.ehiCookie) ? headers["Cookie"] = `JSESSIONID=${ctx.JSESSIONID}; ehiCookie=${ctx.ehiCookie}` : null;

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