import { ProductmanagementService } from './productmanagement.service';
export declare class ProductmanagementController {
    private ProductService;
    constructor(ProductService: ProductmanagementService);
    getData(): Promise<import("./productmanagement.entity").Product[]>;
    getDataByid(id: number): Promise<import("./productmanagement.entity").Product>;
}
