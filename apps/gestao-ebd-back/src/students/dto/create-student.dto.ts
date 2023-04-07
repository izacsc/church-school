import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  @IsOptional()
  public birthday: string;

}
