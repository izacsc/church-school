
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument,Types } from 'mongoose';
import { Student } from '../../students/schema/students.schema';

export type ClassDocument = HydratedDocument<Class>;

@Schema()
export class Class {
  @Prop()
  name: string;

  @Prop()
  teacherId: string;

  @Prop()
  studentIds: string[]
}

export const ClassSchema = SchemaFactory.createForClass(Class);
