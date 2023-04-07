import { PartialType } from '@nestjs/mapped-types';
import { CreateClassDto } from './create-class.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateClassDto extends PartialType(CreateClassDto) {
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public teacherId: string;

  @IsNotEmpty()
  public studentIds: string[];
}
