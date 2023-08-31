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
exports.EntityShop = void 0;
const typeorm_1 = require("typeorm");
const EntityShoper_1 = require("./EntityShoper");
let EntityShop = class EntityShop {
};
exports.EntityShop = EntityShop;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    (0, typeorm_1.Generated)("uuid"),
    __metadata("design:type", String)
], EntityShop.prototype, "id_shop", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => EntityShoper_1.EntityShoper),
    (0, typeorm_1.JoinColumn)({ name: 'id_shopper', referencedColumnName: 'id_shopper' }),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], EntityShop.prototype, "id_shopper", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "datetime" }),
    __metadata("design:type", String)
], EntityShop.prototype, "date_shop", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, type: "double" }),
    __metadata("design:type", Number)
], EntityShop.prototype, "amount", void 0);
exports.EntityShop = EntityShop = __decorate([
    (0, typeorm_1.Entity)()
], EntityShop);
//# sourceMappingURL=EntityShop.js.map