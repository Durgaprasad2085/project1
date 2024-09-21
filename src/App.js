import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/Home";
import TopRated from "./components/TopRated";
import UpComing from "./components/UpComing";
import SingleDetail from "./components/SingleDetail";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (search) {
      fetch(`https://omdbapi.com/?s=${search}&apikey=73eb6157`)
        .then((res) => res.json())
        .then((json) => {
          if (json.Search) {
            setMovies(json.Search);
          } else {
            setMovies([]);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Router>
        <Navbar
          search={search}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
        />
        <Routes>
          <Route path="/" element={<Product movies={movies} />} />
          <Route path="/HOME" element={<Home />} />
          <Route path="/UpComing" element={<UpComing />} />
          <Route path="/TopRated" element={<TopRated />} />
          <Route path="/movie/:id" element={<SingleDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
