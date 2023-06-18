import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
