import { IsNotEmpty } from 'class-validator';

export class CreateAttendanceDto {
  @IsNotEmpty()
  public classId: string;

  @IsNotEmpty()
  public date: string;

  @IsNotEmpty()
  public teacher: string;

  @IsNotEmpty()
  public studentIds: string[];

  @IsNotEmpty()
  public visitors: string[];

  @IsNotEmpty()
  public classNotes: string;
}
