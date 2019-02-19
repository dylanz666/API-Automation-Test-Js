/**Created by Dylan*/
describe('Template', async function () {
    before(async function () {
        (await require(`${process.cwd()}/init`))(this);
        await I.login();
    });
    beforeEach(async function () {
        //Your beforeEach code
    });

    it("1.[Positive] ", async function () {
        //Your code for positive test case
    });
    it("2.[Negative] ", async function () {
        //Your code for negative test case
    });

    afterEach(async function () {
        //Your afterEach code
    });
    after(async function () {
        //Your after code
    });
});