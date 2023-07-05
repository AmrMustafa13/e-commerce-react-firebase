import React from "react";
import CategoriesGrid from "../components/CategoriesGrid";
import Slider from "../components/Slider";
import Shop from "./Shop";

const Home = () => {
  return (
    <div className="text-center">
      <Slider />
      <CategoriesGrid />
      <Shop />
    </div>
  );
};

export default Home;
