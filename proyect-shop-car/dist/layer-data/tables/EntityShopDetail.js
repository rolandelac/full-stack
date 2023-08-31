"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityShopDetail = void 0;
const typeorm_1 = require("typeorm");
const EntityShop_1 = require("./EntityShop");
const EntityProduct_1 = require("./EntityProduct");
let EntityShopDetail = class EntityShopDetail {
};
exports.EntityShopDetail = EntityShopDetail;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, typeorm_1.Generated)("uuid"),
    __metadata("design:type", String)
], EntityShopDetail.prototype, "id_shop_detail", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => EntityShop_1.EntityShop),
    (0, typeorm_1.JoinColumn)({ name: 'id_shop', referencedColumnName: 'id_shop' }),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], EntityShopDetail.prototype, "id_shop", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => EntityProduct_1.EntityProduct),
    (0, typeorm_1.JoinColumn)({ name: 'id_product', referencedColumnName: 'id_product' }),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], EntityShopDetail.prototype, "id_product", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "int" }),
    __metadata("design:type", Number)
], EntityShopDetail.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "double" }),
    __metadata("design:type", Number)
], EntityShopDetail.prototype, "amount", void 0);
exports.EntityShopDetail = EntityShopDetail = __decorate([
    (0, typeorm_1.Entity)()
], EntityShopDetail);
//# sourceMappingURL=EntityShopDetail.js.map