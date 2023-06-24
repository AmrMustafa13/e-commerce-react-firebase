import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import CROWN_ICON from "../assets/crown.svg";
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
        shadow-md font-mono px-4
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          {user ? (
            <li>
              <button onClick={hanldeLogout}>Sign Out</button>
            </li>
          ) : (
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          )}
          <li>
            <CartICon />
          </li>
        </ul>
        {isCartOpen && <CartDropdown />}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
