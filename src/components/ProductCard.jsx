import React from "react";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div
      className="
        flex flex-col
        items-center
        justify-center
        p-4
        bg-gray-100
        rounded-md
        shadow-md
        hover:shadow-lg
        transition
        duration-300
        ease-in-out
    "
    >
      <img
        src={imageUrl}
        alt={name}
        className="
        w-full
        h-64
        object-cover
        mb-4
      "
      />
      <div
        className="
        flex flex-row
        items-center
        justify-between
        w-full
      "
      >
        <span
          className="
            text-gray-700
            text-xl
            mb-2
        "
        >
          {name}
        </span>
        <span
          className="
            text-gray-700
            text-xl
            mb-2     
        "
        >
          ${price}
        </span>
      </div>
      <button
        className="
        bg-blue-500
        hover:bg-blue-700
        text-white
        font-bold
        py-2
        px-4
        rounded
        focus:outline-none
        focus:shadow-outline
        transition
        duration-300
        ease-in-out
      "
      >
        Add to card
      </button>
    </div>
  );
};

export default ProductCard;
