import { Body, Controller, Get } from '@nestjs/common';
import { UsermanagementService } from './usermanagement.service'

@Controller('usermanagement')
export class UsermanagementController {
    constructor(private UsermanagementService:UsermanagementService){
    
    }

    @Get()
    getProfile(@Body("username") username:string){
        return this.UsermanagementService.findByUser(username);
    }

    @Get('orderhistory')
    getOrder(@Body("user_id") user_id:number){
        return this.UsermanagementService.getorder(user_id);
    }

}
