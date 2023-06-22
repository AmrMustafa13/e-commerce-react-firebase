import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const CategoryRow = ({ category }) => {
  return (
    <div>
      <Link
        to={`/shop/${category.title.toLowerCase()}`}
        className="text-2xl font-bold text-center my-8"
      >
        {category.title}
      </Link>

      <div className="grid grid-cols-4 gap-4">
        {category.items.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryRow;
