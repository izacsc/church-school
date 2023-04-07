import { IsNotEmpty } from 'class-validator';

export class CreateClassDto {
    @IsNotEmpty()
    public name: string;

    @IsNotEmpty()
    public teacherId: string;

    @IsNotEmpty()
    public studentIds: string[];

  }

