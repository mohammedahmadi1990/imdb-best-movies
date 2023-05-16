import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <tr>
      <td>
        <img src={movie.Poster_Link} alt={movie.Series_Title} />
      </td>
      <td>{movie.Series_Title}</td>
      <td>{movie.Released_Year}</td>
      <td>{movie.IMDB_Rating}</td>
      <td>{movie.Overview}</td>
      <td>{movie.Director}</td>
      <td>
        {movie.Star1}, {movie.Star2}, {movie.Star3}, {movie.Star4}
      </td>
      <td>{movie.No_of_Votes}</td>
      <td>{movie.Gross}</td>
    </tr>
  );
};

export default MovieItem;
