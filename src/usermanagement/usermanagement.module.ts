import { Module } from '@nestjs/common';
import { UsermanagementController } from './usermanagement.controller';
import { UsermanagementService } from './usermanagement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../authentication/authentication.entity';
import { Order } from 'src/ordermanagement/ordermanagement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users]),TypeOrmModule.forFeature([Order])],
  controllers: [UsermanagementController],
  providers: [UsermanagementService]
})
export class UsermanagementModule {}
