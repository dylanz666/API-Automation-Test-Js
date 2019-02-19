/**Created by Dylan*/
class urlBuilderUtil {
    static buildUrl(apiPath) {
        return `${conf.origin}${apiPath}`;
    }
}

module.exports = urlBuilderUtil;