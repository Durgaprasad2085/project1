import React from "react";

function Product({ movies }) {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {movies.map((movie) => {
            return (
              <>
                <div key={movie.id} className="col-md-3 my-4 text-center  ">
                  <div
                    className="card"
                    style={{ width: "18 rem", border: "2px solid black" }}
                  >
                    <div>
                      {" "}
                      <img
                        src={movie.Poster}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>

                    <div className="card-body">
                      <h5 className="card-title">{movie.Title}</h5>
                      <p className="card-text">{movie.Year}</p>
                      <h6 className="card-text">{movie.imdbID}</h6>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Product;

