import "./index.css";

import App from "./App";
//	stripe
import { Elements } from "@stripe/react-stripe-js";
import { FeedbackProvider } from "./context/FeedbackContext";
import React from "react";
import ReactDOM from "react-dom/client";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.REACT_APP_PUBLIC_STRIPE_KEY as string
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <FeedbackProvider>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </FeedbackProvider>
  </React.StrictMode>
);
