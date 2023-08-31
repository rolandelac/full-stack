"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
class UtilDate {
    static datetimeFormat() {
        let dateTime = (0, moment_1.default)().utc();
        return dateTime.format('YYYY-MM-DD HH:mm:ss');
    }
}
exports.default = UtilDate;
//# sourceMappingURL=UtilDate.js.map