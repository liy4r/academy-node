import { Router } from "express";
import { MovieIdController, MoviesController } from "./controllers.ts";
export const movieRouter = Router();

movieRouter.get("/movies", MoviesController);
movieRouter.get("/id", MovieIdController);
