import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StaffModule } from '../staff/staff.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from '../students/students.module';
import { AttendanceModule } from '../attendance/attendance.module';
import { ClassesModule } from '../classes/classes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGODB_URI
    ),
    AttendanceModule,
    ClassesModule,
    StaffModule,
    StudentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
