import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  return (
    <div
      className="
            flex flex-col
            items-center
            justify-center
            h-64
            bg-gray-200
            rounded-md
            shadow-lg
            overflow-hidden
        "
    >
      <div className="overflow-hidden w-full h-full">
        <img
          src={category.imageUrl}
          alt={category.title}
          className="
                w-full
                h-full
                object-cover
                object-center
                transition
                duration-500
                ease-in-out
                transform
                hover:-translate-y-1
                hover:scale-110
            "
        />
      </div>
      <h2
        className="
            text-xl
            font-bold
            text-gray-800
            uppercase
            mt-2
            mb-1
        "
      >
        {category.title}
      </h2>
      <span
        className="
            bg-gray-800
            text-white
            px-4
            py-2
            mb-2
            rounded-md
            text-sm
            font-semibold
            tracking-wider
            shadow-lg
            hover:bg-gray-700
            transition
            duration-500
            ease-in-out
            cursor-pointer
      "
      >
        <Link to={`/shop/${category.title}`}>Show Collections</Link>
      </span>
    </div>
  );
};

export default CategoryItem;
