import React, { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

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
        {cartItems.length !== 0 ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <div className="text-center">Your cart is empty</div>
        )}
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
        onClick={() => navigate("/checkout")}
      >
        GO TO CHECKOUT
      </button>
    </div>
  );
};

export default CartDropdown;
