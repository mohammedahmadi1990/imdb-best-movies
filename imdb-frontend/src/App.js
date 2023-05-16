import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import MovieForm from "./components/MovieForm/MovieForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/create" element={<MovieForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
