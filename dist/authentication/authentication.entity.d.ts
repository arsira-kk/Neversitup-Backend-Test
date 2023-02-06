import { Order } from 'src/ordermanagement/ordermanagement.entity';
export declare class Users {
    id: number;
    username: string;
    password: string;
    fname: string;
    lname: string;
    email: string;
    phone: string;
    Order: Order[];
}
