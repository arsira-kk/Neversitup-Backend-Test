import { Users } from './authentication.entity';
import { Repository } from 'typeorm';
import { createUserDto } from './authentication.create.dto';
export declare class AuthenticationService {
    private usersRepository;
    constructor(usersRepository: Repository<Users>);
    registerArray: Users[];
    adduserregister(username: string, password: string, fname: string, lname: string, email: string, phone: string): void;
    creaetUser(createUserDto: createUserDto): Promise<"Duplicate username" | (createUserDto & Users)>;
    auth(username: string, password: string): Promise<{
        id: number;
        username: string;
        fname: string;
        lname: string;
        email: string;
        phone: string;
        Order: import("../ordermanagement/ordermanagement.entity").Order[];
    }>;
}
