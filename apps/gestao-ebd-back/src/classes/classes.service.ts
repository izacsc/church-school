import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClassDto } from './dto/create-class.dto';
import { UpdateClassDto } from './dto/update-class.dto';
import { Class, ClassDocument } from './schema/class.schema';
import { Student, StudentDocument } from '../students/schema/students.schema';

@Injectable()
export class ClassesService {
  constructor(
    @InjectModel(Class.name) private readonly classModel: Model<ClassDocument>,
    @InjectModel(Student.name)
    private readonly studentModel: Model<StudentDocument>
  ) {}

  create(createClassDto: CreateClassDto) {
    const createdClass = new this.classModel(createClassDto);
    return createdClass.save();
  }

  findAll() {
    return this.classModel.find().exec();
  }

  findOne(id: string) {
    return this.classModel.findById(id).exec();
  }

  update(id: string, updateClassDto: UpdateClassDto) {
    return this.classModel.findByIdAndUpdate(id, updateClassDto, { new: true }).exec();
  }

  remove(id: string) {
    console.log(id)
    return this.classModel.findByIdAndRemove(id).exec();
  }
}
