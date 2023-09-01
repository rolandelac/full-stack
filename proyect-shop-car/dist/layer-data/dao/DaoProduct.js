"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = require("../../Database");
const EntityProduct_1 = require("../tables/EntityProduct");
class DaoProduct {
    static async save(entity) {
        let result = await Database_1.instanceDatabase.manager
            .getRepository(EntityProduct_1.EntityProduct)
            .save(entity);
        return result;
    }
    static async getAll() {
        return await Database_1.instanceDatabase.manager.getRepository(EntityProduct_1.EntityProduct).find({
            where: {}
        });
    }
    static async update(name, id_product) {
        await Database_1.instanceDatabase.manager
            .getRepository(EntityProduct_1.EntityProduct)
            .update({
            name: name
        }, {
            id_product: id_product
        });
    }
    static async delete(entity) {
        await Database_1.instanceDatabase.manager
            .getRepository(EntityProduct_1.EntityProduct)
            .delete(entity);
    }
}
exports.default = DaoProduct;
//# sourceMappingURL=DaoProduct.js.map