import { Repository } from 'typeorm';
import { Product } from './productmanagement.entity';
export declare class ProductmanagementService {
    private ProductRepository;
    constructor(ProductRepository: Repository<Product>);
    getProduct(): Promise<Product[]>;
    getProductBYid(id: number): Promise<Product>;
}
