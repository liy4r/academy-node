import { Request, Response } from "express";
import { Movies } from "./models.ts";

export const MoviesController = async (req: Request, res: Response) => {
  const movie = await Movies.findOne({ title: "aaaaa" });
  res.send(movie);
};
export const InsertMovieController = async (req: Request, res: Response) => {
  const movie = await Movies.insertOne(req.body);
  res.send(movie);
};
export const UpdateRatingController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { incRating } = req.body;
  const movie = await Movies.updateOne(
    { id },
    {
      $inc: {
        "imdb.rating": Number(incRating),
      },
    }
  );
  res.send(movie);
};
export const UpdateGenreController = async (req: Request, res: Response) => {
  const { newGenre } = req.body;
  const { id } = req.params;
  const result = await Movies.updateOne(
    { id },
    {
      $addToSet: {
        genres: newGenre,
      },
    }
  );
  res.send(result);
};
export const DeleteMovieController = async (req: Request, res: Response) => {
  const result = await Movies.deleteOne(req.body);
  res.send(result);
};
export const ImdbRatingIncreaseController = async (
  req: Request,
  res: Response
) => {
  const { incRating } = req.body;
  // const result = await Movies.updateMany(
  //   {
  //     year: { $gte: 2015 },
  //   },
  //   { $push: { "imdb.rating": incRating } }
  // );

  const result = await Movies.updateMany(
    { year: { $gte: 2015 } },
    {
      $inc: {
        "imdb.rating": incRating,
      },
    }
  );
  res.send(result);
};
