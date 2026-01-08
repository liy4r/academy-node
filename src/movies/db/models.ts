import { Schema, model } from "mongoose";
import {
  type ITomatoesDocument,
  type IMoviesDocument,
} from "../types/movies.ts";
import { type IUserDocument } from "../types/user.ts";
import { type ICommentDocument } from "../types/comment.ts";

const TomatoesSchema: Schema<ITomatoesDocument> = new Schema(
  {
    viewer: {
      rating: { type: Number },
      numReviews: { type: Number },
      meter: { type: Number },
    },
    critic: {
      rating: { type: Number },
      numReviews: { type: Number },
      meter: { type: Number },
    },
    rotten: Number,
    lastUpdated: Date,
  },
  { _id: false }
);

const MovieSchema: Schema<IMoviesDocument> = new Schema({
  userId: { type: String, required: true },
  plot: { type: String },
  genre: { type: [String] },
  title: { type: String, required: true },
  year: { type: Number },
  runtime: { type: Number },
  cast: { type: [String] },
  poster: { type: String },
  fullpolt: { type: String },
  relased: { type: Date, default: new Date() },
  languages: { type: [String] },
  directors: { type: [String] },

  awards: [
    {
      wins: { type: Number },
      nominations: { type: Number },
      text: { type: String },
    },
  ],
  tomatoes: TomatoesSchema,
});

const UserSchema: Schema<IUserDocument> = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
});

const CommentSchema: Schema<ICommentDocument> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  movie_id: { type: String, required: true },
  text: { type: String, required: true },
  date: { type: Date, default: new Date() },
});

export const Comments = model<ICommentDocument>("comment", CommentSchema);

export const Movies = model<IMoviesDocument>("movies", MovieSchema);

export const Users = model<IUserDocument>("user", UserSchema);
