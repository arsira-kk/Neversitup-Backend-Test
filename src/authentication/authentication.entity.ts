import { Order } from 'src/ordermanagement/ordermanagement.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    fname: string;

    @Column()
    lname: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @OneToMany(() => Order, (Order: Order) => Order.user_id)
    public Order: Order[];


}


