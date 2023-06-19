import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/authContext";
import { ProductsContextProvider } from "./contexts/productsContext.jsx";
import { CartContextProvider } from "./contexts/cartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ProductsContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ProductsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
