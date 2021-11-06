import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/navbar.scss";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Link to="/" className="nav-item">
        Home
      </Link>
      <span className="divider-line" />
      <Link to="/favourite" className="nav-item">
        Favourite
      </Link>
    </div>
  );
};

export default Navbar;
