
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, JoinTable, ManyToMany, Index, OneToMany } from 'typeorm';

@Entity()
export class Order{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Index()
    @JoinColumn()
    @Column()
    user_id: number;

    @Index()
    @JoinColumn()
    @Column()
    product_id: number;

    @Column()
    amount: number;

    @Column()
    status: string;

    @Column()
    order_price: number;

    



}