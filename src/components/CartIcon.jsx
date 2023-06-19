import React, { useContext } from "react";
import CART_ICON from "../assets/shopping-bag.svg";
import { CartContext } from "../contexts/cartContext";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  return (
    <div
      className="
        flex
        items-center
        justify-center
        w-10
        h-10
        bg-gray-100
        rounded-full
        cursor-pointer
        hover:bg-gray-200
        transition
        duration-300
        ease-in-out
        relative
    "
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <img
        src={CART_ICON}
        alt="Cart Icon"
        className="
        w-6
        h-6
        absolute
        top-1/2
        left-1/2
        transform
        -translate-x-1/2
        -translate-y-1/2

      "
      />
      <span
        className="
        absolute
        text-sm
        top-1/2
        left-1/2
        transform
        -translate-x-1/2
        -translate-y-1/2
        "
      >
        {cartCount}
      </span>
    </div>
  );
};

export default CartIcon;
