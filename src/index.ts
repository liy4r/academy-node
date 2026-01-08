import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { typeDefs, resolvers } from "./apolloserver.ts";
import { Users } from "./movies/db/models.ts";
import * as dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET || "secret";

mongoose
  .connect(
    "mongodb+srv://bdulguun0114_db_user:OlHZy1HYJMaF8pIc@hicheel.widh6hu.mongodb.net/sample_mflix"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

export interface IContext {
  user: any | null;
}

const server = new ApolloServer<IContext>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req }) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return { user: null };

    try {
      const token = authHeader.replace("Bearer ", "");
      const decoded: any = jwt.verify(token, SECRET_KEY);

      const userDetail = await Users.findOne({ email: decoded.email });

      return { user: userDetail };
    } catch {
      return { user: null };
    }
  },
});

console.log(`🚀 Server ready at: ${url}`);
