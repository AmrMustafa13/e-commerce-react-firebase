import React, { useContext } from "react";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import SingleCategory from "./pages/SingleCategory";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./contexts/authContext";
import { Navigate } from "react-router-dom";

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<SingleCategory />} />
        <Route
          path="/checkout"
          element={user ? <Checkout /> : <Navigate to="/signin" />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/signin"
          element={user ? <Navigate to="/" /> : <Signin />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default App;
