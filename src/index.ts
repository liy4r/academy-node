import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import { typeDefs } from "./apolloserver.ts";
import { resolvers } from "./apolloserver.ts";
import jwt from "jsonwebtoken";

export interface IContext {
  user: {
    firstname: string;
  };
}

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();
  server.applyMiddleware({ app: app as any });

  await mongoose.connect(
    "mongodb+srv://bdulguun0114_db_user:OlHZy1HYJMaF8pIc@hicheel.widh6hu.mongodb.net/sample_mflix"
  );
  console.log("MongoDB connected");

  app.listen({ port: 4000 }, () =>
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
