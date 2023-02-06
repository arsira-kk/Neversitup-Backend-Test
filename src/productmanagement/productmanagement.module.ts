import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductmanagementController } from './productmanagement.controller';
import { ProductmanagementService } from './productmanagement.service';
import { Product } from './productmanagement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductmanagementController],
  providers: [ProductmanagementService]
})
export class ProductmanagementModule {}
