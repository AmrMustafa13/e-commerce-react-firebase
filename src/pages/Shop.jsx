import React, { useContext } from "react";
import { CategoriesContext } from "../contexts/categoriesContext";
import CategoryRow from "../components/CategoryRow";

const Shop = () => {
  const { categories, isLoading } = useContext(CategoriesContext);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center my-8">Shop</h1>
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          categories.map((category) => (
            <CategoryRow key={category.title} category={category} />
          ))
        )}
      </div>
    </>
  );
};

export default Shop;
