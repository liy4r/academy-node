import {
  movieTypesDefs,
  movieQueryTypeDefs,
  movieMutationTypeDefs,
  userQueryTypeDefs,
  userTypeDefs,
  userMutationTypeDefs,
  usersMutationTypeDefs,
  commentMutationTypeDefs,
  commentTypeDefs,
} from "./movies/graphql/schema.ts";
import { movieQueries, userQueries } from "./movies/graphql/queries.ts";
import {
  commentMutation,
  movieMutations,
  userMutation,
  usersMutation,
} from "./movies/graphql/mutations.ts";

export const typeDefs = `
  ${movieTypesDefs}
  ${userTypeDefs}
  ${commentTypeDefs}

  type Query {
    ${movieQueryTypeDefs}
    ${userQueryTypeDefs}
  }

  type Mutation {
    ${movieMutationTypeDefs}
    ${userMutationTypeDefs}
    ${usersMutationTypeDefs}
    ${commentMutationTypeDefs}
  }
`;

export const resolvers = {
  Query: { ...movieQueries, ...userQueries },
  Mutation: {
    ...movieMutations,
    ...userMutation,
    ...usersMutation,
    ...commentMutation,
  },
};
