import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { createUserDto } from './authentication.create.dto'


@Controller('authentication')
export class AuthenticationController {

    constructor(private AuthenticationService:AuthenticationService){
    
    }
    
    @Post("login")
    login(@Body("username") username:string, @Body("password") password:string ){
        return this.AuthenticationService.auth(username,password)
        // return this.AuthenticationService.getData()
    }
    
    @Post("register")
    AddUsers(@Body() createUserDto:createUserDto){
        return this.AuthenticationService.creaetUser(createUserDto);
    }


}
