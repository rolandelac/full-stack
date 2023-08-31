"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_swagger_decorator_1 = require("koa-swagger-decorator");
const unprotected_1 = __importDefault(require("./unprotected"));
const router = new koa_swagger_decorator_1.SwaggerRouter();
router.use(unprotected_1.default.routes());
exports.default = router;
//# sourceMappingURL=UnProtectedRoutes.js.map