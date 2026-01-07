import {
  movieTypesDefs,
  movieQueryTypeDefs,
  movieMutationTypeDefs,
  userQueryTypeDefs,
  userTypeDefs,
  userMutationTypeDefs,
  usersMutationTypeDefs,
} from "./movies/graphql/schema.ts";
import { movieQueries, userQueries } from "./movies/graphql/queries.ts";
import {
  movieMutations,
  userMutation,
  usersMutation,
} from "./movies/graphql/mutations.ts";

export const typeDefs = `
  ${movieTypesDefs}
  ${userTypeDefs}

  type Query {
    ${movieQueryTypeDefs}
    ${userQueryTypeDefs}
  }

  type Mutation {
    ${movieMutationTypeDefs}
    ${userMutationTypeDefs}
    ${usersMutationTypeDefs}
  }
`;

export const resolvers = {
  Query: { ...movieQueries, ...userQueries },
  Mutation: {
    ...movieMutations,
    ...userMutation,
    ...usersMutation,
  },
};
