import { createContext, useState, useEffect } from "react";
import { query, getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesContextProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      setIsLoading(true);
      const querySnapshot = await getDocs(query(collection(db, "categories")));
      const categories = querySnapshot.docs.map((doc) => doc.data());
      setCategories(categories);
      setIsLoading(false);
    };

    getCategories();
  }, []);

  const value = {
    categories,
    isLoading,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
