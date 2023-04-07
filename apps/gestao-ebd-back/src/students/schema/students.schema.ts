
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Class } from '../../classes/schema/class.schema';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  @Prop()
  name: string;

  @Prop()
  birthday: string;

}

export const StudentSchema = SchemaFactory.createForClass(Student);
