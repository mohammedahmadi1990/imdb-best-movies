import React, { useState } from "react";
import MovieList from "./components/MovieList/MovieList";

const MoviesPage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <MovieList onMovieSelect={handleMovieSelect} />
    </div>
  );
};

export default MoviesPage;
