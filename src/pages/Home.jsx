import React from "react";
import CategoriesGrid from "../components/CategoriesGrid";
import { Link } from "react-router-dom";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="text-center">
      <Slider />
      <CategoriesGrid />
    </div>
  );
};

export default Home;
