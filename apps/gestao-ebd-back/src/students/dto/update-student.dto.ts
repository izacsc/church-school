import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  @IsOptional()
  public birthday: string;

}
