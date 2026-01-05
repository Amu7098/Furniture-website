import React from "react";
import { NavLink } from "react-router-dom";


function Banner() {
  return (
    <div className="banner d-flex align-items-center justify-content-center">
      <div className="banner-text text-center text-white">
        <h1 className="banner-title mb-3">
          Crafted for Comfort. Built to Last
        </h1>
        <h2 className="banner-subtitle mb-4">
          Premium furniture at honest prices
        </h2>
        <NavLink to="/Products" className="btn btn-dark btn-lg shop-btn">
          Shop Now
        </NavLink>
      </div>
    </div>
  );
}

export default Banner;
