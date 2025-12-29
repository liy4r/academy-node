import { Router } from "express";
import {
  InsertMovieController,
  MoviesController,
  UpdateRatingController,
  UpdateGenreController,
  DeleteMovieController,
  ImdbRatingIncreaseController,
} from "./controllers.ts";
export const movieRouter = Router();

movieRouter.get("/movies", MoviesController);
movieRouter.post("/newMovie", InsertMovieController);
movieRouter.post("/rating/:id", UpdateRatingController);
movieRouter.post("/genre/:title", UpdateGenreController);
movieRouter.delete("/deleteone", DeleteMovieController);
movieRouter.post("/ratingmany", ImdbRatingIncreaseController);
