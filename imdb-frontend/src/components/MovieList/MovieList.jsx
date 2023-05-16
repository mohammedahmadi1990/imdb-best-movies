import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieItem from "../MovieItem/MovieItem";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const fetchMovies = async (page) => {
    const response = await axios.get(
      `http://localhost:5000/movies?page=${page}`
    );
    setMovies(response.data.data);
    setTotalPages(Math.ceil(response.data.total / response.data.pageSize));
  };

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Poster</th>
              <th>Title</th>
              <th>Released Year</th>
              <th>IMDB Rating</th>
              <th>Overview</th>
              <th>Director</th>
              <th>Stars</th>
              <th>No. of Votes</th>
              <th>Gross</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <MovieItem key={movie._id} movie={movie} />
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MovieList;
