import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";
import ProductCard from "../components/ProductCard";
import Spinner from "../components/Spinner";

const SingleCategory = () => {
  const { category } = useParams();
  const [categoryData, setCategoryData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCategory = async () => {
      setIsLoading(true);
      const docRef = doc(db, "categories", category);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setCategoryData(docSnap.data());
      } else {
        console.log("No such document!");
      }
      setIsLoading(false);
    };

    getCategory();
  }, [category]);

  return (
    <div className="mb-8">
      {isLoading ? (
        <div
          className="flex
         justify-center
         items-center
         mt-4
         "
        >
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-center my-8">
            {categoryData.title}
          </h1>
          <div className="grid grid-cols-4 gap-4">
            {categoryData.items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleCategory;
