import React, { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  return (
    <div
      className="
      relative
      cursor-pointer
      "
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <FaShoppingCart className="text-gray-800 text-xl" />
      <span
        className="
        absolute
        -top-2
        -right-2
        bg-red-500
        text-white
        w-4
        h-4
        rounded-full
        flex
        items-center
        justify-center
        font-bold
        text-xs
        "
      >
        {cartCount}
      </span>
    </div>
  );
};

export default CartIcon;
