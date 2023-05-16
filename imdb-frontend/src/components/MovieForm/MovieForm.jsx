import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MovieForm.css";

const MovieForm = ({ movie, refreshMovies, onMovieChange }) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [overview, setOverview] = useState("");
  const [director, setDirector] = useState("");
  const [star1, setStar1] = useState("");
  const [star2, setStar2] = useState("");
  const [star3, setStar3] = useState("");
  const [star4, setStar4] = useState("");
  const [notification, setNotification] = useState({ type: "", message: "" });

  useEffect(() => {
    if (movie) {
      setTitle(movie.Series_Title);
      setYear(movie.Released_Year);
      setRating(movie.IMDB_Rating);
      setOverview(movie.Overview);
      setDirector(movie.Director);
      setStar1(movie.Star1);
      setStar2(movie.Star2);
      setStar3(movie.Star3);
      setStar4(movie.Star4);
    }
  }, [movie]);

  const showNotification = (type, message) => {
    setNotification({ type, message });

    setTimeout(() => {
      setNotification({ type: "", message: "" });
    }, 5000);
  };

  const handleDelete = async () => {
    if (movie) {
      // Delete movie
      await axios.delete(`http://localhost:5000/movies/${movie._id}`);
      refreshMovies();
      onMovieChange(null); // Clear the selected movie
      showNotification("success", "Movie deleted successfully!");
    }
  };

  const handleCreate = async (event) => {
    event.preventDefault();

    const movieData = {
      Series_Title: title,
      Released_Year: year,
      IMDB_Rating: rating,
      Overview: overview,
      Director: director,
      Star1: star1,
      Star2: star2,
      Star3: star3,
      Star4: star4,
    };

    // Create movie
    const response = await axios.post(
      "http://localhost:5000/movies",
      movieData
    );

    refreshMovies();
    onMovieChange(response.data); // Update with the new movie
    showNotification("success", "Movie created successfully!");
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    const movieData = {
      Series_Title: title,
      Released_Year: year,
      IMDB_Rating: rating,
      Overview: overview,
      Director: director,
      Star1: star1,
      Star2: star2,
      Star3: star3,
      Star4: star4,
    };

    if (movie) {
      // Update movie
      const response = await axios.patch(
        `http://localhost:5000/movies/${movie._id}`,
        movieData
      );
      refreshMovies();
      onMovieChange(response.data); // Update with the new movie details
      showNotification("success", "Movie updated successfully!");
    }
  };

  return (
    <>
      <h1>TOP 1000 IMDB MOVIES</h1>
      {notification.message && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      <form className="movie-form">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          Released Year:
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>

        <label>
          IMDB Rating:
          <input
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>

        <label>
          Overview:
          <input
            type="text"
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
          />
        </label>

        <label>
          Director:
          <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </label>

        <label>
          Star 1:
          <input
            type="text"
            value={star1}
            onChange={(e) => setStar1(e.target.value)}
          />
        </label>

        <label>
          Star 2:
          <input
            type="text"
            value={star2}
            onChange={(e) => setStar2(e.target.value)}
          />
        </label>

        <label>
          Star 3:
          <input
            type="text"
            value={star3}
            onChange={(e) => setStar3(e.target.value)}
          />
        </label>

        <label>
          Star 4:
          <input
            type="text"
            value={star4}
            onChange={(e) => setStar4(e.target.value)}
          />
        </label>
        <div className="actionBtns">
          <button className="createBtn" onClick={handleCreate}>
            Create
          </button>
          <button
            className="updateBtn"
            onClick={handleUpdate}
            disabled={!movie}
          >
            Update
          </button>
          <button
            className="deleteBtn"
            onClick={handleDelete}
            disabled={!movie}
          >
            Delete
          </button>
        </div>
      </form>
    </>
  );
};

export default MovieForm;
