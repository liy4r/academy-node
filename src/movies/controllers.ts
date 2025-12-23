import { Request, Response } from "express";
import { Movies } from "./models.ts";

export const MoviesController = async (req: Request, res: Response) => {
  const movie = await Movies.findOne({});
  res.send(movie);
};
export const MovieIdController = async (req: Request, res: Response) => {
  const movie = await Movies.findOne({ title: "The Great Train Robbery" });
  res.send(movie);
};
