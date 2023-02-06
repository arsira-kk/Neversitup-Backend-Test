import { OrdermanagementService } from "./ordermanagement.service";
import { createOrderDto } from './ordermanagement.createbuy.dto';
export declare class OrdermanagementController {
    private orderService;
    constructor(orderService: OrdermanagementService);
    createOrder(createOrderDto: createOrderDto): Promise<createOrderDto & import("./ordermanagement.entity").Order>;
    cancelOrder(id: number): Promise<import("typeorm").UpdateResult>;
    showOrder(id: number): Promise<import("./ordermanagement.entity").Order[]>;
}
