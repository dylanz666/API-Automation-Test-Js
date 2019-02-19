/**
 * Created by dylanz on 2019/2/17.
 */
describe('pingResource', async function () {
    before(async function () {
        (await require(`${process.cwd()}/init`))(this);
        await I.login();
    });

    it("1.[Positive] Get ping API should pass", async function () {
        let response = await httpRequest.get(paths.pingPath);
        assert.equal(response.statusCode, 200);
    });
    it("2.[Negative] ", async function () {
        //TBD
    });
});