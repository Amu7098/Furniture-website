import React from "react";
import { NavLink } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-text">
        <h1>Crafted for Comfort. Built to Last</h1>
        <h2>Premium furniture at honest prices</h2>
        <button class="btn btn-dark">
          <NavLink to="/Products" className="btn btn-dark ">
            Shop Now
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Banner;
