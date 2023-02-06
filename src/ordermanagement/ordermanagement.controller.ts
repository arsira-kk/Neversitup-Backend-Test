import { Controller, Get, Param, Patch, Put } from '@nestjs/common';
import { OrdermanagementService } from "./ordermanagement.service";
import { Body, Post } from '@nestjs/common';
import { createOrderDto } from './ordermanagement.createbuy.dto';


@Controller('ordermanagement')
export class OrdermanagementController {
    constructor(private orderService:OrdermanagementService){
    
    }

    @Post('createorder')
    createOrder(@Body() createOrderDto:createOrderDto){
      return this.orderService.addOrder(createOrderDto)
    }


    @Patch(':id')
    cancelOrder(@Param("id") id:number){
        return this.orderService.cancelOrder(id)
    }


    @Get()
    showOrder(@Body("id") id:number){
      return this.orderService.GETOrder(id)
    }

}
