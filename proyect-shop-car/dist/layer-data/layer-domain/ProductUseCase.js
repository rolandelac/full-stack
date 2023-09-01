"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ModelProduct_1 = require("./model/ModelProduct");
const DaoProduct_1 = __importDefault(require("../dao/DaoProduct"));
class ProductUseCase {
    static async getAll(context) {
        let list = [];
        let entities = await DaoProduct_1.default.getAll();
        for (let entity of entities) {
            list.push(new ModelProduct_1.ModelProduct(entity.id_product, entity.name, entity.color, entity.description, entity.date_created, entity.amount));
        }
        return list;
    }
}
exports.default = ProductUseCase;
//# sourceMappingURL=ProductUseCase.js.map