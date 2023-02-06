import { InjectRepository } from '@nestjs/typeorm';
import {   Repository } from 'typeorm';
import { Order } from './ordermanagement.entity';
import { Injectable } from '@nestjs/common';
import { createOrderDto } from './ordermanagement.createbuy.dto'
import { Users } from 'src/authentication/authentication.entity';
import { Product } from 'src/productmanagement/productmanagement.entity';




@Injectable()
export class OrdermanagementService {
    constructor(
        @InjectRepository(Order)
        private OrderRepository: Repository<Order>

      ) {}

     addOrder(createOrderDto:createOrderDto){
        return this.OrderRepository.save(createOrderDto); 

     }

   async cancelOrder(id:number){


      return  this.OrderRepository.update(id,{status:"C"}); 

   }

   async GETOrder(id:number){
      const tem = await this.OrderRepository.createQueryBuilder('Order')
      .where("Order.user_id = :name", { name: id })
      .getMany(); 
      return tem
   //return await this.OrderRepository.findBy( {user_id:id});





   }



}
