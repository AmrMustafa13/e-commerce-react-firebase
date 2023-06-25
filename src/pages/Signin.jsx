import React, { useReducer } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../config/firebase.js";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import { INITIAL_STATE, formReducer } from "../reducers/formReducer.js";
import { toast } from "react-toastify";

const Signin = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const { email, password } = state;

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      toast.error(error.message.substring(10));
    }
    dispatch({ type: "CLEAR_FORM" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FORM", payload: { name, value } });
  };

  const handleGoogleSignin = async (e) => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider);
    const userRef = doc(db, "users", res.user.uid);
    const docSnap = await getDoc(userRef);
    if (!docSnap.exists()) {
      const createdAt = new Date();
      const { displayName, email } = res.user;
      try {
        await setDoc(userRef, {
          displayName,
          email,
          createdAt,
        });
      } catch (error) {
        toast.error(error.message.substring(10));
      }
    }
    return userRef;
  };

  return (
    <form
      onSubmit={handleSignin}
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
        type="email"
        placeholder="Email"
        value={email}
        required
        name="email"
        onChange={handleChange}
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
        name="password"
        onChange={handleChange}
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
        Signin
      </button>
      <div className="self-center">
        <GoogleButton onClick={handleGoogleSignin} />
      </div>
      <span>
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="
    text-blue-500
    hover:text-blue-700
    transition
    duration-500
    ease-in-out
        "
        >
          Signup
        </Link>
      </span>
    </form>
  );
};

export default Signin;
