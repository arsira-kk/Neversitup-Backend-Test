import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './productmanagement.entity';

@Injectable()
export class ProductmanagementService {
    constructor(
    @InjectRepository(Product)
    private ProductRepository: Repository<Product>,
  ) {}

        getProduct(){
            return this.ProductRepository.find();
        }

        getProductBYid(id:number){
            return this.ProductRepository.findOneBy({id:id});
        }
    
}
