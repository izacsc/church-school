import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { AttendanceSchema } from './schema/attendance.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Attendance', schema: AttendanceSchema }]),
  ],
  controllers: [AttendanceController],
  providers: [AttendanceService]
})
export class AttendanceModule {}
