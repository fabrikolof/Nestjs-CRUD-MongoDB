import { Schema } from 'mongoose';

export const TaskSchema = new Schema({
  //Esto no es typescript, es la biblioteca de mongoose
  title: String,
  description: String,
  done: Boolean,
});
