import { Document, Schema, model } from "mongoose";
export interface IComments extends Document {
  name: string;
  email: string;
}
