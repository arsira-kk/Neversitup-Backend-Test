import { Injectable } from '@nestjs/common';
import {  Users } from './authentication.entity';
import { v1 as uuid }  from 'uuid';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import {createUserDto} from './authentication.create.dto'




@Injectable()
export class AuthenticationService {
    constructor(
       
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
      ) {}

    registerArray: Users[] = []
    adduserregister(username:string,password:string,fname:string,lname:string,email:string,phone:string){
        const reg = new Users();
        reg.id = uuid();
        reg.username = username;
        reg.password = password;
        reg.fname = fname;
        reg.lname = lname;
        reg.email = email;
        reg.phone = phone;


        this.registerArray.push(reg);
    }


    async creaetUser(createUserDto:createUserDto){

       // const tem =  this.usersRepository.findBy({username:createUserDto.username});
        const tem = this.usersRepository.countBy({username:createUserDto.username});
        const test = await tem;
        if (test>=1){
            return  "Duplicate username" 
        }else{return this.usersRepository.save(createUserDto); }
        

       
    }
    
    async auth(username:string,password:string){

        const tem = await this.usersRepository.findOneBy({username});
        
        if (tem && tem.password === password) {
            const { password, ...result } = tem;
            return result;
            //return "logingSucess";
          }
          return null;
          //return "can't login";


        
    }

  

}
