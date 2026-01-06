import {
  movieTypesDefs,
  movieQueryTypeDefs,
  movieMutationTypeDefs,
  signUpTypeDefs,
} from "./movies/graphql/schema.ts";
import { movieQueries } from "./movies/graphql/queries.ts";
import { movieMutations, userMutation } from "./movies/graphql/mutations.ts";

export const typeDefs = `
  ${movieTypesDefs}

  type Query {
    ${movieQueryTypeDefs}
  }

  type Mutation {
    ${movieMutationTypeDefs}
  }
    type Mutation{
    ${signUpTypeDefs}
    }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
export const resolvers = {
  Query: { ...movieQueries },
  Mutation: {
    ...movieMutations,
    ...userMutation,
  },
};
