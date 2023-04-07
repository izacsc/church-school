import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student, StudentDocument } from './schema/students.schema';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name)
    private readonly studentModel: Model<StudentDocument>
  ) {}

  create(createStudentDto: CreateStudentDto) {
    const createdStudent = new this.studentModel(createStudentDto);
    return createdStudent.save()
  }

  findAll() {
    return this.studentModel.find().exec();
  }

  findOne(id: string) {
    return this.studentModel.findById(id).exec();
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.studentModel
      .findByIdAndUpdate(id, updateStudentDto, { new: true })
      .exec()
  }

  remove(id: string) {
    return this.studentModel
      .findByIdAndRemove(id)
      .exec()
  }
}
