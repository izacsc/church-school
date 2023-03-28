import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Staff, StaffDocument } from './schema/staff.schema';

@Injectable()
export class StaffService {
  constructor(
    @InjectModel(Staff.name) private readonly staffModel: Model<StaffDocument>
  ) {}

  create(createStaffDto: CreateStaffDto) {
    const createdStaff = new this.staffModel(createStaffDto);
    return createdStaff.save();
  }

  findAll() {
    return this.staffModel.find().exec();
  }

  findOne(id: string) {
    return this.staffModel.findById(id).exec();
  }

  update(id: string, updateStaffDto: UpdateStaffDto) {
    return this.staffModel.findByIdAndUpdate(id, updateStaffDto, { new: true }).exec();
  }

  remove(id: string) {
    console.log(id)
    return this.staffModel.findByIdAndRemove(id).exec();
  }
}
