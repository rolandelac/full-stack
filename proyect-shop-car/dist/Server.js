"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const cors_1 = __importDefault(require("@koa/cors"));
const Database_1 = require("./Database");
const UtilLog_1 = __importDefault(require("./UtilLog"));
const UnProtectedRoutes_1 = __importDefault(require("./layer-presentation/UnProtectedRoutes"));
//import ProtectedRoutes from "./layer-presentation/ProtectedRoutes"
const app = new koa_1.default();
const main = async () => {
    UtilLog_1.default.logInfo(`############## START APPLICATION ---------->`);
    try {
        // Init databases
        await Database_1.instanceDatabase.initialize();
        UtilLog_1.default.logSuccess(`# database [last - reader] = successfully`);
        // Enable cors with default options
        app.use((0, cors_1.default)());
        // Logger middleware
        app.use(UtilLog_1.default.logMiddleware());
        // Enable bodyParser with default options
        app.use((0, koa_bodyparser_1.default)());
        // unprotected routes
        app
            .use(UnProtectedRoutes_1.default.routes())
            .use(UnProtectedRoutes_1.default.allowedMethods());
        app.listen(3000);
        UtilLog_1.default.logSuccess(`# application start port = 3000`);
    }
    catch (exception) {
        UtilLog_1.default.logInfo(`# error main detail = ${exception}`);
        UtilLog_1.default.logError(`# error main = ${exception.message}`);
    }
};
main();
//# sourceMappingURL=Server.js.map