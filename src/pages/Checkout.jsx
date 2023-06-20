import React, { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    decreaseItemQuantity,
    removeItemFromCart,
    cartTotal,
  } = useContext(CartContext);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
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
                <img src={cartItem.imageUrl} alt={cartItem.name} />
              </td>
              <td>{cartItem.name}</td>
              <td>
                <button onClick={() => decreaseItemQuantity(cartItem)}>
                  &#10094;
                </button>
                {cartItem.quantity}
                <button onClick={() => addItemToCart(cartItem)}>
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
            <td colSpan="5">
              <button>Checkout</button>
            </td>
            <td>
              <span>Total: ${cartTotal}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Checkout;
