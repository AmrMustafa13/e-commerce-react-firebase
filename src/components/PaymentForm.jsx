import React, { useState, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { CartContext } from "../contexts/cartContext";
import { AuthContext } from "../contexts/authContext";
import Spinner from "./Spinner";
import { toast } from "react-toastify";

const PaymentForm = () => {
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);

  const { cartTotal } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsPaymentLoading(true);

    const response = await fetch("/.netlify/functions/createPaymentIntent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: cartTotal * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: user ? user.displayName : "Guest",
        },
      },
    });

    setIsPaymentLoading(false);

    if (paymentResult.error) {
      toast.error(paymentResult.error.message);
    }

    if (paymentResult.paymentIntent.status === "succeeded") {
      toast.success("Payment successful!");
    }
  };

  return (
    <form
      onSubmit={handlePayment}
      className="
    w-full
    max-w-sm
    mx-auto
    bg-gray-100
    shadow-md
    rounded
    px-8
    pt-6
    pb-8
    mb-4
    "
    >
      <CardElement />
      <button
        type="submit"
        className="
              bg-gray-900
              text-white
              py-2
              rounded
              hover:bg-gray-800
              transition  
              duration-300
              ease-in-out
              mb-4
              w-full
              h-14
              flex
              justify-center
              items-center
              "
        disabled={isPaymentLoading}
      >
        {isPaymentLoading ? <Spinner /> : "Pay Now"}
      </button>
    </form>
  );
};

export default PaymentForm;
