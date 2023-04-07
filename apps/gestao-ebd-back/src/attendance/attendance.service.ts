import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
import { Attendance, AttendanceDocument } from './schema/attendance.schema';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectModel(Attendance.name)
    private readonly attendanceModel: Model<AttendanceDocument>
  ) {}

  create(createAttendanceDto: CreateAttendanceDto) {
    const createdAttendance = new this.attendanceModel(createAttendanceDto);
    return createdAttendance.save()
  }

  findAll() {
    return this.attendanceModel.find().exec();
  }

  findOne(id: string) {
    return this.attendanceModel.findById(id).exec();
  }

  update(id: string, updateAttendanceDto: UpdateAttendanceDto) {
    return this.attendanceModel
      .findByIdAndUpdate(id, updateAttendanceDto, { new: true })
      .exec()
  }

  remove(id: string) {
    return this.attendanceModel
      .findByIdAndRemove(id)
      .exec()
  }
}
