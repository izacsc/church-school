import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AttendanceDocument = HydratedDocument<Attendance>;

@Schema()
export class Attendance {
  @Prop()
  date: string;

  @Prop()
  teacher: string;

  @Prop()
  studentIds: string[];

  @Prop()
  visitors: string[];

  @Prop()
  classNotes: string;
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);
