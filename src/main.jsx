import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/authContext";
import { CategoriesContextProvider } from "./contexts/categoriesContext.jsx";
import { CartContextProvider } from "./contexts/cartContext.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./config/stripe.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CategoriesContextProvider>
          <CartContextProvider>
            <Elements stripe={stripePromise}>
              <App />
            </Elements>
          </CartContextProvider>
        </CategoriesContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
