"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdermanagementModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ordermanagement_controller_1 = require("./ordermanagement.controller");
const ordermanagement_entity_1 = require("./ordermanagement.entity");
const ordermanagement_service_1 = require("./ordermanagement.service");
let OrdermanagementModule = class OrdermanagementModule {
};
OrdermanagementModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ordermanagement_entity_1.Order])],
        controllers: [ordermanagement_controller_1.OrdermanagementController],
        providers: [ordermanagement_service_1.OrdermanagementService]
    })
], OrdermanagementModule);
exports.OrdermanagementModule = OrdermanagementModule;
//# sourceMappingURL=ordermanagement.module.js.map