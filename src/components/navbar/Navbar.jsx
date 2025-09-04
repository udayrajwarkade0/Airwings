import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__logo">AIRwings</div>
      <ul className="nav__links">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/about">About</Link>
        </li>
        <li className="link">
          <Link to="/offers">Offers</Link>
        </li>
        <li className="link">
          <Link to="/seats">Seats</Link>
        </li>
        <li className="link">
          <Link to="/destinations">Destinations</Link>
        </li>
      </ul>
      <button className="btn">Contact</button>
    </nav>
  );
};

export default Navbar;
