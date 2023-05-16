import React, { useState } from "react";
import axios from "axios";

const MovieForm = ({ movie }) => {
  const [title, setTitle] = useState(movie ? movie.title : "");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (movie) {
      // Update movie
      await axios.put(`http://localhost:5000/movies/${movie._id}`, { title });
    } else {
      // Create movie
      await axios.post("http://localhost:5000/movies", { title });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default MovieForm;
