import React from "react";
import { CartContext } from "../contexts/cartContext";

const CartDropdown = () => {
  return (
    <div
      className="absolute
    w-64
    h-64
    bg-white
    top-16
    right-4
    rounded-md
    shadow-md
    z-10
    p-4
    border-2
    border-gray-200
    "
    >
      <ul
        className="
        flex
        flex-col
        gap-2
        h-48    
        w-full
        overflow-y-scroll
        scrollbar-hide
      "
      >
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <button
        className="
        w-full
        h-10
        bg-gray-800
        text-white
        rounded-md
        shadow-md
        hover:shadow-lg
        transition
        duration-300
        ease-in-out
        "
      >
        Checkout
      </button>
    </div>
  );
};

export default CartDropdown;
