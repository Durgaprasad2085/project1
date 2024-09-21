import React, { useEffect, useState } from 'react';

function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieSearches = ['load of rings', 'inception', 'harry potter', 'avatar', 'dark knight'];

    
    Promise.all(
      movieSearches.map((searchTerm) =>
        fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=73eb6157`)
          .then((res) => res.json())
          .then((json) => json.Search || []) 
      )
    )
      .then((results) => {
       
        const allMovies = results.flat();
        setMovies(allMovies);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">TopRated Movies</h1>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.Poster} className="col-md-3 my-4 text-center">
            <div className="card" style={{ width: '18rem', border: '2px solid black' }}>
              <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">{movie.Year}</p>
                <h6 className="card-text">{movie.imdbID}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopRated;


