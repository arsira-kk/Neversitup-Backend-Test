import { AuthenticationService } from './authentication.service';
import { createUserDto } from './authentication.create.dto';
export declare class AuthenticationController {
    private AuthenticationService;
    constructor(AuthenticationService: AuthenticationService);
    login(username: string, password: string): Promise<{
        id: number;
        username: string;
        fname: string;
        lname: string;
        email: string;
        phone: string;
        Order: import("../ordermanagement/ordermanagement.entity").Order[];
    }>;
    AddUsers(createUserDto: createUserDto): Promise<"Duplicate username" | (createUserDto & import("./authentication.entity").Users)>;
}
