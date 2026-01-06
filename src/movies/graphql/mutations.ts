import { Movies } from "../db/models.ts";
import { type IMovie } from "../types/movies.ts";
import { type Iusers } from "../types/user.ts";
import { users } from "../db/models.ts";

export const movieMutations = {
  addMovie: async (_root: any, { input }: { input: IMovie }) => {
    const movie = await Movies.insertOne({});

    return "Success";
  },
};

export const userMutation = {
  signUp: async (_root: any, { input }: { input: Iusers }) => {
    const user = await users.insertOne({});
    return "a";
  },
};
