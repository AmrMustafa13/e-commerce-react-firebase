import React, { useContext } from "react";
import { ProductsContext } from "../contexts/productsContext";
import ProductsGrid from "../components/ProductsGrid";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <ProductsGrid products={products} />
    </div>
  );
};

export default Shop;
