import { useGetMovies } from "../hooks/useMovies.tsx";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";

const defaultPoster =
  "https://www.plex.tv/wp-content/uploads/2025/03/Watch-Free-Hero-2048x1152-1.png";

export const AllMovies = () => {
  const { movies, loading } = useGetMovies();

  if (loading) {
    return <h1>Unshij bn</h1>;
  }

  return (
    <>
      {movies?.map((movie) => {
        return (
          <div className="grid grid-cols-7 gap-2">
            {movies.map((movie) => (
              <Card key={movie._id} className="w-64 flex flex-col h-full">
                <img
                  src={movie.poster || defaultPoster}
                  className="h-64 w-full object-cover"
                />

                <CardHeader>{movie.title}</CardHeader>

                <CardContent className="flex-1">{movie.plot}</CardContent>

                <CardFooter className="mt-auto">
                  <Button variant="outline" size="sm" className="w-full">
                    Visit
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        );
      })}
    </>
  );
};
