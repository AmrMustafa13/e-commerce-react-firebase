import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const CategoryRow = ({ category }) => {
  return (
    <div className="mb-8">
      <Link
        to={`/shop/${category.title.toLowerCase()}`}
        className="
          text-2xl
          font-bold
          text-gray-800
          uppercase
          mb-4
          inline-block
          hover:text-red-500
          transition
          duration-500
          ease-in-out
        "
      >
        {category.title}
      </Link>
      <div
        className="grid grid-cols-2 gap-4 lg:grid-cols-4
      "
      >
        {category.items.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryRow;
