import { createContext, useState, useEffect } from "react";
import PRODUCTS_DATA from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS_DATA);

  const value = {
    products,
  };

  useEffect(() => {
    setProducts(PRODUCTS_DATA);
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
