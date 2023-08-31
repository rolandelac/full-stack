"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_swagger_decorator_1 = require("koa-swagger-decorator");
const protected_1 = __importDefault(require("./protected"));
const router = new koa_swagger_decorator_1.SwaggerRouter();
router.use(protected_1.default.routes());
exports.default = router;
//# sourceMappingURL=ProtectedRoutes.js.map