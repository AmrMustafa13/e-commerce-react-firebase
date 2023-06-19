import React from "react";

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  return (
    <li
      className="
        flex
        flex-row
        items-center
        justify-between
        w-full
        bg-gray-100
        rounded-md
        shadow-md
        hover:shadow-lg
        transition
        duration-300
        ease-in-out
        p-4
        gap-4
        
    "
    >
      <img
        src={imageUrl}
        alt={name}
        className="
        w-16
        h-16
        object-cover
      "
      />
      <div
        className="
        flex
        flex-col
        items-start
        justify-center
        gap-1
      "
      >
        <span
          className="
            text-gray-700
            text-sm
            mb-2
        "
        >
          {name}
        </span>
        <span
          className="
            text-gray-700
            text-sm
            mb-2
        "
        >
          {quantity} x ${price}
        </span>
      </div>
    </li>
  );
};

export default CartItem;
