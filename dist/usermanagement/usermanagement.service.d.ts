import { Repository } from 'typeorm';
import { Users } from '../authentication/authentication.entity';
import { Order } from 'src/ordermanagement/ordermanagement.entity';
export declare class UsermanagementService {
    private useRepository;
    private OrderRepository;
    constructor(useRepository: Repository<Users>, OrderRepository: Repository<Order>);
    findByUser(username: string): Promise<Users>;
    getorder(user_id: number): Promise<Order[]>;
}
