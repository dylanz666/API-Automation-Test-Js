/**Created by Dylan*/
class QueryDbUtil {
    static async getDBConnection() {
        let dbName, url, connections, DBConnectionId, res;
        dbName = conf.dbName;
        url = conf.getDbConnectionUrl;

        try {
            res = await request(url)
                .get("")
                .set("Accept", "application/json")
                .set("Accept-Encoding", "gzip, deflate")
                .set("Accept-Language", "en-US,en;q=0.9")
                .set("Cache-Control", "no-cache")
                .set("Connection", "keep-alive")
                .set("Content-Type", "application/json")
                .set("Expires", "-1")
                .expect(200)
                .expect(function (res) {
                    if (res.body.error) {
                        throw new Error(res.body.error);
                    }
                });
            connections = res.body.connections.filter(function (item) {
                return item.name === dbName;
            });
            DBConnectionId = connections[0]['_id'];

            await logger.info(`Get DB connectionId on:${env},db name:${dbName}`);
            await logger.info(`>>>Get DB connectionId return connectionId:${DBConnectionId}.`);
            return DBConnectionId;
        } catch (e) {
            await logger.error(`>>>Fail to get DB connectionId on:${env},error message:${e}`);
        }
    }

    static async queryDB(sqlText, ...params) {
        let url, requestBody, res, queryResult, isSelect;
        url = conf.queryDbUrl;
        for (let i = 0; i < params.length; i++) {
            sqlText = STRING.format(sqlText, params[i]);
        }
        requestBody = {
            "connectionId": DBConnectionId,
            "cacheKey": "bov2api",
            "queryText": sqlText
        };

        try {
            res = await request(url)
                .post("")
                .set("Accept", "application/json")
                .set("Accept-Encoding", "gzip, deflate")
                .set("Accept-Language", "en-US,en;q=0.9")
                .set("Cache-Control", "no-cache")
                .set("Connection", "keep-alive")
                .set("Content-Type", "application/json")
                .set("Expires", "-1")
                .send(requestBody)
                .expect(200)
                .expect(function (res) {
                    if (res.body.error) {
                        throw new Error(res.body.error);
                    }
                });
            isSelect = sqlText.toLowerCase().startsWith('select');
            queryResult = isSelect ? res.body.queryResult.rows : [];

            await logger.info(`Query DB on:${env} with sql:${sqlText}.`);
            await logger.info(">>>Query DB return:");
            await logger.info(queryResult);
            return queryResult;
        } catch (e) {
            await logger.error(`>>>Fail to query DB with sql:${sqlText},error message ${e}.`);
        }
    }
}

module.exports = QueryDbUtil;