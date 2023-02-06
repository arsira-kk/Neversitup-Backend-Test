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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdermanagementController = void 0;
const common_1 = require("@nestjs/common");
const ordermanagement_service_1 = require("./ordermanagement.service");
const common_2 = require("@nestjs/common");
const ordermanagement_createbuy_dto_1 = require("./ordermanagement.createbuy.dto");
let OrdermanagementController = class OrdermanagementController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    createOrder(createOrderDto) {
        return this.orderService.addOrder(createOrderDto);
    }
    cancelOrder(id) {
        return this.orderService.cancelOrder(id);
    }
    showOrder(id) {
        return this.orderService.GETOrder(id);
    }
};
__decorate([
    (0, common_2.Post)('createorder'),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ordermanagement_createbuy_dto_1.createOrderDto]),
    __metadata("design:returntype", void 0)
], OrdermanagementController.prototype, "createOrder", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdermanagementController.prototype, "cancelOrder", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_2.Body)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], OrdermanagementController.prototype, "showOrder", null);
OrdermanagementController = __decorate([
    (0, common_1.Controller)('ordermanagement'),
    __metadata("design:paramtypes", [ordermanagement_service_1.OrdermanagementService])
], OrdermanagementController);
exports.OrdermanagementController = OrdermanagementController;
//# sourceMappingURL=ordermanagement.controller.js.map