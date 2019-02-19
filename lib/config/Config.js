/**Created by Dylan*/
class Config {
    constructor() {
        this.Env = env;
    }

    getEnv() {
        return this.Env;
    }

    setConfig() {
        let Env = this.getEnv();
        this.config = require(`./${Env}`);
    }

    getConfig() {
        this.setConfig();
        return this.config;
    }
}

module.exports = Config;