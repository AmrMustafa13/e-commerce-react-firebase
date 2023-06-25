import React from "react";
import CategoryItem from "./CategoryItem";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
  },
  {
    id: 4,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
  },
];

const CategoriesGrid = () => {
  return (
    <div
      className="
        grid grid-cols-2
        md:grid-cols-3
        gap-4
        p-4
    "
    >
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesGrid;
