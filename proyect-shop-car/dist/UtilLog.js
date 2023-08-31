"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UtilDate_1 = __importDefault(require("./UtilDate"));
const colors_1 = __importDefault(require("colors"));
const uuidv4_1 = require("uuidv4");
colors_1.default.enable();
class UtilLog {
    static logError(message, ctx = null) {
        if (ctx != null) {
            let requestId = ctx.get('X-Request-Id');
            console.log(`${UtilDate_1.default.datetimeFormat()} [${LogLevel.ERROR}]: [${requestId}] ${message}`.red);
        }
        else {
            console.log(`${UtilDate_1.default.datetimeFormat()} [${LogLevel.ERROR}]: ${message}`.red);
        }
    }
    static logSuccess(message, ctx = null) {
        if (ctx != null) {
            let requestId = ctx.get('X-Request-Id');
            console.log(`${UtilDate_1.default.datetimeFormat()} [${LogLevel.SUCCESS}]: [${requestId}] ${message}`.green);
        }
        else {
            console.log(`${UtilDate_1.default.datetimeFormat()} [${LogLevel.SUCCESS}]: ${message}`.green);
        }
    }
    static logInfo(message, ctx = null) {
        if (ctx != null) {
            let requestId = ctx.get('X-Request-Id');
            console.log(`${UtilDate_1.default.datetimeFormat()} [${LogLevel.INFO}]: [${requestId}] ${message}`.white);
        }
        else {
            console.log(`${UtilDate_1.default.datetimeFormat()} [${LogLevel.INFO}]: ${message}`.white);
        }
    }
    static logWarn(message, ctx = null) {
        if (ctx != null) {
            let requestId = ctx.get('X-Request-Id');
            console.log(`${UtilDate_1.default.datetimeFormat()} [${LogLevel.WARNING}]: [${requestId}] ${message}`.yellow);
        }
        else {
            console.log(`${UtilDate_1.default.datetimeFormat()} [${LogLevel.WARNING}]: ${message}`.yellow);
        }
    }
    static logMiddleware() {
        return async (ctx, next) => {
            let uuid_ = (0, uuidv4_1.uuid)();
            let headerRequestId = ctx.get('X-Request-Id');
            let requestId = headerRequestId;
            if (requestId == '') {
                ctx.set('X-Request-Id', uuid_);
                requestId = uuid_;
            }
            const start = new Date().getTime();
            await next();
            const ms = new Date().getTime() - start;
            const message = `${ctx.method} ${ctx.originalUrl} ${ctx.status} ${ms}ms`;
            if (ctx.status >= 500) {
                UtilLog.logError(`[${requestId}] # ${message}`);
                if (ctx.method != 'GET') {
                    UtilLog.logError(`[${requestId}] # request = ${JSON.stringify(ctx.request.body)}`);
                }
                UtilLog.logError(`[${requestId}] # response = ${JSON.stringify(ctx.response.body)}`);
            }
            else if (ctx.status >= 400) {
                UtilLog.logWarn(`[${requestId}] # ${message}`);
                if (ctx.method != 'GET') {
                    UtilLog.logWarn(`[${requestId}] # request = ${JSON.stringify(ctx.request.body)}`);
                }
                UtilLog.logWarn(`[${requestId}] # response = ${JSON.stringify(ctx.response.body)}`);
            }
            else {
                UtilLog.logInfo(`[${requestId}] # ${message}`);
                if (ctx.method != 'GET') {
                    UtilLog.logInfo(`[${requestId}] # request = ${JSON.stringify(ctx.request.body)}`);
                }
                UtilLog.logInfo(`[${requestId}] # response = ${JSON.stringify(ctx.response.body)}`);
            }
        };
    }
}
exports.default = UtilLog;
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "INFO___";
    LogLevel["ERROR"] = "ERROR__";
    LogLevel["WARNING"] = "WARNING";
    LogLevel["SUCCESS"] = "SUCCESS";
})(LogLevel || (LogLevel = {}));
//# sourceMappingURL=UtilLog.js.map