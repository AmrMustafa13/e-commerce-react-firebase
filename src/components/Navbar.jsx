import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import CartICon from "./CartIcon";
import CartDropdown from "./CartDropdown";
import { CartContext } from "../contexts/cartContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const { isCartOpen } = useContext(CartContext);

  const hanldeLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("Error signing out", error.message);
    }
  };

  return (
    <>
      <nav
        className="
        flex justify-between items-center h-16
        shadow-md px-4
          relative
        "
      >
        <Link to="/">
          <h1
            className="
          text-2xl
          font-bold
          text-gray-800
          "
          >
            Fashionex
          </h1>
        </Link>
        <ul
          className="
        flex items-center text-gray-800
        gap-4
        uppercase
        "
        >
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => {
                if (isActive) {
                  return { color: "red" };
                }
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              style={({ isActive }) => {
                if (isActive) {
                  return { color: "red" };
                }
              }}
            >
              Shop
            </NavLink>
          </li>
          {user ? (
            <li>
              <button onClick={hanldeLogout}>Sign Out</button>
            </li>
          ) : (
            <li>
              <NavLink to="/signin">Sign In</NavLink>
            </li>
          )}
          <li>
            <CartICon />
          </li>
        </ul>
        {isCartOpen && <CartDropdown />}
      </nav>
    </>
  );
};

export default Navbar;
