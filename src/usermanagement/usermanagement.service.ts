import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {  Users } from '../authentication/authentication.entity';
import { Order } from 'src/ordermanagement/ordermanagement.entity';

@Injectable()
export class UsermanagementService {
    constructor(
       
        @InjectRepository(Users)
        private useRepository: Repository<Users>,
        @InjectRepository(Order)
        private OrderRepository: Repository<Order>


      ) {}

     async findByUser(username:string){
        const tem = await this.useRepository.findOneBy({username});
        return tem
      }

     async getorder(user_id:number){
        const tem = await this.OrderRepository.findBy({user_id});
        return tem
      }

     

}
