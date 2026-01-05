import React from "react";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark ">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Woodora
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/Products">
                Products
              </NavLink>
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
              <NavLink className="nav-link ms-4" to="/Cart">
                <BsCart3 className="fs-3" />
              </NavLink>

           
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
