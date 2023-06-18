import React from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/crown.svg";

const Navbar = () => {
  return (
    <>
      <nav
        className="
        flex justify-between items-center h-16
        shadow-md font-mono px-4"
      >
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <ul
          className="
        flex items-center text-gray-800
        gap-4
        uppercase
        "
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/signin">Signin</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
