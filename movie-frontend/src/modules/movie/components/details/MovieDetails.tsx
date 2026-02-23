import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { IMovie } from "../../types";
import { Calendar } from "lucide-react";

export const defaultPoster =
  "https://www.plex.tv/wp-content/uploads/2025/03/Watch-Free-Hero-2048x1152-1.png";

export const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchMovie = async () => {
      try {
        const res = await fetch(`http://localhost:3000/movie/movies/${id}`);
        if (!res.ok) throw new Error("Movie not found");
        const data: IMovie = await res.json();
        setMovie(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <h1>Loading...</h1>;
  if (error || !movie) return <h1>{error || "Movie not found"}</h1>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={movie.poster || defaultPoster}
        alt={movie.title}
        className="w-full rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <p className="mb-2">{movie.plot}</p>
      <span className="flex gap-2 items-center text-gray-400">
        <Calendar className="size-4" />
        {movie.year}
      </span>
    </div>
  );
};
