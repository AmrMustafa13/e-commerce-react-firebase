import React from "react";
import CategoriesGrid from "../components/CategoriesGrid";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center py-4">
      <button
        className="
        bg-gray-800
        text-white
        text-2xl
        px-4
        py-2
        mb-2
        rounded-md
        font-semibold
        tracking-wider
        shadow-lg
        hover:bg-gray-700
        
      "
      >
        <Link to="/shop">Shop Now</Link>
      </button>
      <CategoriesGrid />
    </div>
  );
};

export default Home;
