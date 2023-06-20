import { createContext, useState } from "react";

const addCartItem = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  decreaseItemQuantity: () => {},
  removeItemFromCart: () => {},
  cartTotal: 0,
});

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems, item));
  };

  const decreaseItemQuantity = (item) => {
    if (item.quantity === 1) {
      removeItemFromCart(item);
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const removeItemFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const cartCount = cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  );

  const cartTotal = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
    0
  );

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    decreaseItemQuantity,
    removeItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
