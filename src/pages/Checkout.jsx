import React, { useContext } from "react";
import { CartContext } from "../contexts/cartContext";
import PaymentForm from "../components/PaymentForm";

const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    decreaseItemQuantity,
    removeItemFromCart,
    cartTotal,
  } = useContext(CartContext);

  return (
    <div
      className="
      container
      mx-auto
      p-4
      flex
      flex-col
      justify-center
      items-center
      text-center
    "
    >
      <table
        className="
        table-auto
        w-full
      "
      >
        <thead
          className="
        border-b-2
        border-gray-500
        "
        >
          <tr>
            <th
              className="
            pb-2
            "
            >
              Product
            </th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cartItem) => (
            <tr key={cartItem.id}>
              <td>
                <img
                  src={cartItem.imageUrl}
                  alt={cartItem.name}
                  className="
                w-20
                h-20
                object-cover
                rounded
                mx-auto
                "
                />
              </td>
              <td>{cartItem.name}</td>
              <td>
                <button
                  onClick={() => decreaseItemQuantity(cartItem)}
                  className="
                mr-2
                
                "
                >
                  &#10094;
                </button>
                {cartItem.quantity}
                <button
                  onClick={() => addItemToCart(cartItem)}
                  className="
                ml-2
                "
                >
                  &#10095;
                </button>
              </td>
              <td>${cartItem.price}</td>
              <td>
                <button onClick={() => removeItemFromCart(cartItem)}>
                  &#10005;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">
              <PaymentForm />
              <button
                className="
              bg-gray-900
              text-white
              px-4
              py-2
              rounded
              hover:bg-gray-800
              transition  
              duration-300
              ease-in-out
              "
              >
                Checkout
              </button>
            </td>
            <td>
              <span
                className="
              font-bold
              text-2xl
              "
              >
                Total: ${cartTotal}
              </span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Checkout;
