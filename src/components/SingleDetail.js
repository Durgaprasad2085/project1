import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function SingleDetail() {
  const { id} = useParams(); // Get the `id` from the URL (imdbID)
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = 'darkslategrey';
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=73eb6157`)
      .then((res) => res.json())
      .then((json) => setMovie(json))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-4">
          <img 
            src={movie.Poster !== "N/A" ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'} 
            alt={movie.Title} 
            className="img-fluid"
          />
        </div>
        <div className="col-md-8">
          <h1>{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleDetail;

