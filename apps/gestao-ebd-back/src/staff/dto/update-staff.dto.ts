import { PartialType } from '@nestjs/mapped-types';
import { CreateStaffDto } from './create-staff.dto';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateStaffDto extends PartialType(CreateStaffDto) {
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public role: string;

  @IsNotEmpty()
  @IsOptional()
  public class?: string;
}
