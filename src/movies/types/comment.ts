import { Document } from "mongoose";

export interface IComment {
  name: String;
  email: String;
  movie_id: String;
  text: String;
  date?: Date;
}
export interface ICommentDocument extends IComment, Document {}
