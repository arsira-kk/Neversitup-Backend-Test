import { Controller, Get, Param } from '@nestjs/common';
import { ProductmanagementService } from './productmanagement.service';

@Controller('productmanagement')
export class ProductmanagementController {
    constructor(private ProductService:ProductmanagementService){
    
    }

    @Get()
    getData(){
        return this.ProductService.getProduct();
    }

    @Get(':id')
    getDataByid(@Param ("id") id:number){
        return this.ProductService.getProductBYid(id);
    }


}
