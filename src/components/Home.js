import React, { useEffect, useState } from 'react';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const homeSearches = ['avengers', 'batman', 'spiderman', 'star wars', 'lord of the rings'];
    Promise.all(
      homeSearches.map((searchTerm) =>
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
      <h1 className="text-center my-4">Home/Popular Movies</h1>
      <div className="row">
        {movies.map((item) => (
          <div key={item.imdbID} className="col-md-3 my-4 text-center">
            <div className="card" style={{ width: '18rem', border: '2px solid black' }}>
              <img src={item.Poster} className="card-img-top" alt={item.Title} />
              <div className="card-body">
                <h5 className="card-title">{item.Title}</h5>
                <p className="card-text">{item.Year}</p>
                <h6 className="card-text">{item.imdbID}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;


