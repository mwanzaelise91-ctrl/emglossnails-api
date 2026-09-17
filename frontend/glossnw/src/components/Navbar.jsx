import React from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <Link to="/about" className="navbar-logo">
        💅
        <span>
          EM<span>Gloss</span>Nails
        </span>
      </Link>

      {/* NAVIGATION */}
      <div className="navbar-links">

        <Link to="/home">
          Home
        </Link>

        <Link to="/browse">
          Browse
        </Link>

        <Link to="/booking">
          Booking
        </Link>

      </div>

      {/* CART + CHECKOUT + PROFILE */}
      <div className="navbar-icons">

        {/* CART */}
        <Link
          to="/cart"
          className="navbar-icon"
          title="Shopping Cart"
        >
          🛒
        </Link>

        {/* CHECKOUT */}
        <Link
          to="/checkout"
          className="navbar-icon"
          title="Checkout"
        >
          💳
        </Link>

        {/* PROFILE */}
        <Link
          to="/profile"
          className="navbar-icon"
          title="Profile"
        >
          👤
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;