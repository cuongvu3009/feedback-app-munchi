import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useState } from "react";

import FeedbackContext from "../context/FeedbackContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CheckoutForm: React.FC = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const { selectedTip } = useContext(FeedbackContext);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { token, error } = await stripe.createToken(cardElement!);

    if (error) {
      console.error(error);
    } else {
      try {
        if (selectedTip) {
          await axios.post("/charge", {
            amount: selectedTip * 100, // Amount in cents, must *100
            token: token.id,
          });
          navigate("/endfeedback");
        }
      } catch (error) {
        console.error("There was an issue with the payment", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <CardElement className="card-element" />
      <button type="submit" className="submit-button" disabled={!stripe}>
        Tip €{selectedTip}
      </button>
    </form>
  );
};

export default CheckoutForm;
