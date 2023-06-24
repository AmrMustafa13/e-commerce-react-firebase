import React from "react";
import CategoriesGrid from "../components/CategoriesGrid";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="text-center">
      <Slider />
      <button
        className="
        bg-gray-800
        text-white
        text-2xl
        px-4
        py-2
        mt-4
        rounded-md
        font-semibold
        tracking-wider
        shadow-lg
        hover:bg-gray-700
        
      "
      >
        <Link to="/shop">Go to Shop</Link>
      </button>
      <CategoriesGrid />
    </div>
  );
};

export default Home;
