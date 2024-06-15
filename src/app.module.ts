import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { ContactInfo } from './entities/contact-infor.entity';
import { Task } from './entities/task.entity';
import { Meeting } from './entities/meeting.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'typeorm_relations',
      entities: [Employee, ContactInfo, Task, Meeting],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Employee, Task, ContactInfo, Meeting])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
