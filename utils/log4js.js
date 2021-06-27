/**
 * log4js 日志存储
 */

//依赖
const log4js = require("log4js")

//levels 日志级别常量
const LogLevels = {
    "trace": log4js.levels.TRACE,
    "debug": log4js.levels.DEBUG,
    "info": log4js.levels.INFO,
    "warn": log4js.levels.WARN,
    "error": log4js.levels.ERROR,
    "fatal": log4js.levels.FATAL
}

//追加器
log4js.configure({
    appenders: {
        console: {type: "console"},
        info: {
            type: "file",
            filename: "logs/all-logs.log",
            pattern: "yyyy-MM-dd.log",
            compress: true,
            encoding: "utf-8",
            alwaysIncludePattern: true
        },
        error: {
            type: "dateFile",
            filename: "logs/error-log",
            pattern: "yyyy-MM-dd.log",
            alwaysIncludePattern: true //设置文件名称为filename+pattern
        }
    },
    categories: {
        default: {
            appenders: ['console'],
            level: "debug"
        },
        info: {
            appenders: ["info", "console"],
            level: "info"
        },
        error: {
            appenders: ['error', 'console'],
            level: "error"
        }
    }
})

function getLogger(logger) {
    return log4js.getLogger(logger)
}

/**
 * 日志输出 level为debug
 * @param {string} content  输出内容
 */
exports.debug = (content) => {
    let logger = getLogger('debug')
    logger.level = LogLevels.debug
    logger.debug(content)
}

/**
 * 日志输出 level为error
 * @param {string} content  输出内容
 */
exports.error = (content) => {
    let logger = getLogger('error')
    logger.level = LogLevels.error
    logger.error(content)
}

/**
 * 日志输出 level为info
 * @param {string} content  输出内容
 */
exports.info = (content) => {
    let logger = getLogger('info')
    logger.level = LogLevels.info
    logger.info(content)
}