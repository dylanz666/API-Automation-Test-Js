/**Created by Dylan*/
const log4js = require('log4js');
const ti = new Date();
const partialFileName = `${ti.getFullYear()}${ti.getMonth() + 1}`;
log4js.configure({
    appenders: {
        logger: {
            type: 'file',
            filename: `${process.cwd()}/logs/logger.${partialFileName}.log`
        }
    },
    categories: {
        default: {
            appenders: ['logger'],
            level: 'info'
        }
    }
});
const log = log4js.getLogger('logger');

class logger {
    static info(...logInfo) {
        console.log(`[${new Date().toLocaleString()}] [INFO]`, ...logInfo);
        log.info(...logInfo);
    }

    static error(...logInfo) {
        console.log(`[${new Date().toLocaleString()}] [ERROR]`, ...logInfo);
        log.error(...logInfo);
    }

    static warn(...logInfo) {
        console.log(`[${new Date().toLocaleString()}] [WARN]`, ...logInfo);
        log.warn(...logInfo);
    }

    static fatal(...logInfo) {
        console.log(`[${new Date().toLocaleString()}] [FATAL]`, ...logInfo);
        log.fatal(...logInfo);
    }

    static trace(...logInfo) {
        console.log(`[${new Date().toLocaleString()}] [TRACE]`, ...logInfo);
        log.trace(...logInfo);
    }

    static debug(...logInfo) {
        console.log(`[${new Date().toLocaleString()}] [DEBUG]`, ...logInfo);
        log.debug(...logInfo);
    }
}

module.exports = logger;