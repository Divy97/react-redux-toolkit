import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "space-between",
      }}
    >
      <span className="logo">Redux TOOLKIT</span>
      <div>
        <Link to="/" className="navLink">
          Home
        </Link>
        <Link to="/cart" className="navLink">
          Cart
        </Link>
        <span className="cartCount">Cart items : 0</span>
      </div>
    </div>
  );
};

export default Navbar;
