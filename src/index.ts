import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { movieRouter } from "./movies/routes.ts";
// import { commentRouter } from "./comments/routes.ts";

// Express app
const app = express();
app.use(bodyParser.json());

app.use("/movie", movieRouter);
// app.use("/comments", commentRouter);

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://enkhtuvshinej_db_user:7aLod5Z9aBfk23pu@backend-lesson.pfxqeun.mongodb.net/sample_mflix?appName=backend-lesson"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err: Error) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(3000, () => console.log("Server running on port 3000"));
