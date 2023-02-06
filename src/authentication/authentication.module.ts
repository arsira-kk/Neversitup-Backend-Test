import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationController } from './authentication.controller';
import { Users } from './authentication.entity';
import { AuthenticationService } from './authentication.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [AuthenticationController],
  providers: [AuthenticationService]
})
export class AuthenticationModule {}
