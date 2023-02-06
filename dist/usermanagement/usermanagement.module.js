"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsermanagementModule = void 0;
const common_1 = require("@nestjs/common");
const usermanagement_controller_1 = require("./usermanagement.controller");
const usermanagement_service_1 = require("./usermanagement.service");
const typeorm_1 = require("@nestjs/typeorm");
const authentication_entity_1 = require("../authentication/authentication.entity");
const ordermanagement_entity_1 = require("../ordermanagement/ordermanagement.entity");
let UsermanagementModule = class UsermanagementModule {
};
UsermanagementModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([authentication_entity_1.Users]), typeorm_1.TypeOrmModule.forFeature([ordermanagement_entity_1.Order])],
        controllers: [usermanagement_controller_1.UsermanagementController],
        providers: [usermanagement_service_1.UsermanagementService]
    })
], UsermanagementModule);
exports.UsermanagementModule = UsermanagementModule;
//# sourceMappingURL=usermanagement.module.js.map