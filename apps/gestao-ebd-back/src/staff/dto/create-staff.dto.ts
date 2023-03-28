import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStaffDto {
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public role: string;

  @IsNotEmpty()
  @IsOptional()
  public class?: string;
}
