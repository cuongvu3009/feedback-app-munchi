import "dotenv/config";

import connectDB from "./db/connectDB";
import cors from "cors";
import express from "express";
import feedbackRoutes from "./feedback/feedback.route";
import stripeRoutes from "./stripe/stripe.route";

connectDB(process.env.MONGO_URI as string);

const app = express();
const PORT = process.env.PORT || 5000;

//	middleware
app.use(cors());
app.use(express.json());

//	routes
app.use("/feedback", feedbackRoutes);
app.use("/payment", stripeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
