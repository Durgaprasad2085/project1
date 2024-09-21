import React from "react";
import { Link } from "react-router-dom";

function Navbar({ search, onSearchChange, onSearchSubmit }) {
  return (
    <>
      <header className="sticky-top">
        {" "}
        <div className="con">
          <div className="item">MovieDb</div>
          <Link to="/Home" className="item">
            Home
          </Link>
          <Link to="/TopRated" className="item">
            TopRated
          </Link>
          <Link to="/UpComing" className="item">
            Upcoming
          </Link>
          <Link to="/movie/:id" className="item">
            SingleDetail
          </Link>
          <Link to="/" className="item">
            <form onSubmit={onSearchSubmit}>
              <input
                type="text"
                value={search}
                onChange={onSearchChange}
                placeholder="Search movies..."
              />
              <button type="submit">Search</button>
            </form>
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;

;
