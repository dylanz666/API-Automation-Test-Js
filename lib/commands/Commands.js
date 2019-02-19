/**
 * Created by dylanz on 2019/2/17.
 */
const loginSite = require('./login');

class Commands {
    static async login() {
        await loginSite();
    }
}

module.exports = Commands;