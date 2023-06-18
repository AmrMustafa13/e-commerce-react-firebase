import React, { useReducer } from "react";
import { db, auth } from "../config/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { INITIAL_STATE, formReducer } from "../reducers/formReducer.js";

const Signup = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const { displayName, email, password, confirmPassword } = state;

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const userRef = doc(db, "users", res.user.uid);
      const docSnap = await getDoc(userRef);
      if (!docSnap.exists()) {
        const createdAt = new Date();
        try {
          await setDoc(userRef, {
            displayName,
            email,
            createdAt,
          });
        } catch (error) {
          console.log("Error creating user", error.message);
        }
      }
    } catch (error) {
      console.log("Error creating user", error.message);
    }
    dispatch({ type: "CLEAR_FORM" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FORM", payload: { name, value } });
  };

  return (
    <form
      onSubmit={handleSignup}
      className="
    flex flex-col 
    absolute top-1/2 left-1/2
    transform
    -translate-x-1/2 -translate-y-1/2
    gap-4
    sm:w-96
    "
    >
      <input
        type="text"
        placeholder="Full Name"
        value={displayName}
        required
        onChange={handleChange}
        name="displayName"
        className="
        p-2
        border-2 border-gray-300
        rounded-md
        focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        required
        onChange={handleChange}
        name="email"
        className="
        p-2    
        border-2 border-gray-300
        rounded-md
        focus:outline-none focus:ring-2 focus:ring-gray-400
        "
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        required
        onChange={handleChange}
        name="password"
        className="
        p-2    
        border-2 border-gray-300
        rounded-md
        focus:outline-none focus:ring-2 focus:ring-gray-400
        "
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        required
        onChange={handleChange}
        name="confirmPassword"
        className="
        p-2
        border-2 border-gray-300
        rounded-md
        focus:outline-none focus:ring-2 focus:ring-gray-400
        "
      />
      <button
        type="submit"
        className="
        p-2
        bg-gray-800
            text-white
            rounded-md
            tracking-wider
            shadow-lg
            hover:bg-gray-700
            transition
            duration-500
            ease-in-out
            cursor-pointer
      "
      >
        Signup
      </button>
      <span>
        Already have an account?{" "}
        <Link
          to="/signin"
          className="
        text-blue-500
        hover:text-blue-700
        transition
        duration-500
        ease-in-out
        "
        >
          Signin
        </Link>
      </span>
    </form>
  );
};

export default Signup;
