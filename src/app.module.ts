import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { UsermanagementModule } from './usermanagement/usermanagement.module';
import { OrdermanagementModule } from './ordermanagement/ordermanagement.module';
import { ProductmanagementModule } from './productmanagement/productmanagement.module';








@Module({
  imports: [ AuthenticationModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'demo_nest',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  }), UsermanagementModule, OrdermanagementModule, ProductmanagementModule],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
