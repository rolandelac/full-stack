"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceDatabase = void 0;
const typeorm_1 = require("typeorm");
const debugTs = false;
const isLogDb = true;
const instanceDatabase = new typeorm_1.DataSource({
    name: 'project_shop_car',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'project_shop_car',
    entities: [
        debugTs ? 'src/layer-data/tables/*.ts' : 'dist/layer-data/tables/*.js'
    ],
    timezone: 'Z',
    synchronize: true,
    logging: isLogDb,
    extra: {
        connectionLimit: 2048
    }
});
exports.instanceDatabase = instanceDatabase;
//# sourceMappingURL=Database.js.map