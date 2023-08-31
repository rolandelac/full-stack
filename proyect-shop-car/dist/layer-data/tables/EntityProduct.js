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
exports.EntityProduct = void 0;
const typeorm_1 = require("typeorm");
let EntityProduct = class EntityProduct {
};
exports.EntityProduct = EntityProduct;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, typeorm_1.Generated)("uuid"),
    __metadata("design:type", String)
], EntityProduct.prototype, "id_product", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], EntityProduct.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], EntityProduct.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], EntityProduct.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true, type: "datetime" }),
    __metadata("design:type", String)
], EntityProduct.prototype, "date_created", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Boolean)
], EntityProduct.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "double" }),
    __metadata("design:type", Boolean)
], EntityProduct.prototype, "amount", void 0);
exports.EntityProduct = EntityProduct = __decorate([
    (0, typeorm_1.Entity)()
], EntityProduct);
//# sourceMappingURL=EntityProduct.js.map