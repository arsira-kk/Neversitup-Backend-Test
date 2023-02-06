import { Repository } from 'typeorm';
import { Order } from './ordermanagement.entity';
import { createOrderDto } from './ordermanagement.createbuy.dto';
export declare class OrdermanagementService {
    private OrderRepository;
    constructor(OrderRepository: Repository<Order>);
    addOrder(createOrderDto: createOrderDto): Promise<createOrderDto & Order>;
    cancelOrder(id: number): Promise<import("typeorm").UpdateResult>;
    GETOrder(id: number): Promise<Order[]>;
}
