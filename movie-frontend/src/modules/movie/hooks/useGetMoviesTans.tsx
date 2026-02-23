import { useQuery } from "@tanstack/react-query";

import type { IMovie } from "../types";

export const useGetMoviesTans = (genre?: string) => {
  const { data, isLoading, isError } = useQuery<IMovie[]>({
    queryKey: ["movies", genre],
    queryFn: async () => {
      return fetch(
        `http://localhost:3001/movie/movies?genre=${genre || ""}`,
      ).then((res) => {
        return res.json();
      });
    },
  });

  return { movies: data, loading: isLoading, isError };
};
