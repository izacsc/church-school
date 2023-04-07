
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StaffDocument = HydratedDocument<Staff>;

@Schema()
export class Staff {
  @Prop()
  name: string;

  @Prop()
  birthday: string;

  @Prop()
  role: string;

  @Prop()
  classId: string;
}

export const StaffSchema = SchemaFactory.createForClass(Staff);
