import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/crown.svg";
import { AuthContext } from "../contexts/authContext";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { user } = useContext(AuthContext);

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
          {user ? (
            <li>
              <button onClick={hanldeLogout}>Sign Out</button>
            </li>
          ) : (
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
