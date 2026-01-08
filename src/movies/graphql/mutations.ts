import { Comments, Movies, Users } from "../db/models.ts";
import { type IMovie } from "../types/movies.ts";
import { type IUser } from "../types/user.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { type IContext } from "../../index.ts";
import { type IComment } from "../types/comment.ts";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET || "secret";

export const movieMutations = {
  addMovie: async (
    _root: any,
    { input }: { input: IMovie },
    { user }: IContext
  ) => {
    console.log(user);
    if (!user) {
      return "Authorization found";
    }

    const movie = await Movies.insertOne({
      userId: user._id,
      title: input.title,
    });

    return "Success";
  },
};

export const userMutation = {
  addUser: async (_root: undefined, { input }: { input: IUser }) => {
    const { name, email, password } = input;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Users.insertOne({
      name,
      email,
      password: hashedPassword,
    });
    return user;
  },
};

export const usersMutation = {
  userLogin: async (_root: any, { input }: { input: IUser }) => {
    const { email, password } = input;
    const user = await Users.findOne({ email });
    if (!user) {
      return "Not found";
    } else {
      const data = await bcrypt.compare(password, user.password);
      if (!data) {
        return "Password or email wrong";
      } else {
        const token = jwt.sign(
          {
            name: user.name,
            email: user.email,
          },
          SECRET_KEY,
          { expiresIn: "1h" }
        );
        return {
          message: "Login successful",
          token,
        };
      }
    }
  },
};
export const commentMutation = {
  addComment: async (
    _root: any,
    { input }: { input: IComment },
    { user }: IContext
  ) => {
    console.log(user);
    if (!user) {
      return "Authorization found";
    }

    const movie = await Comments.insertOne({
      email: user.email,
      name: user.name,
      text: input.text,
      movie_id: input.movie_id,
    });

    return movie;
  },
};
