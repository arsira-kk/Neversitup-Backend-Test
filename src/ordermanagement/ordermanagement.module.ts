import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdermanagementController } from './ordermanagement.controller';
import { Order } from './ordermanagement.entity';
import { OrdermanagementService } from './ordermanagement.service';


@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  controllers: [OrdermanagementController],
  providers: [OrdermanagementService]
})
export class OrdermanagementModule {}
