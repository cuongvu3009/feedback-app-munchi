import mongoose, { Schema } from "mongoose";

import { IFeedbackDocument } from "./feedback.interface";

const FeedbackSchema: Schema = new Schema(
  {
    businessID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Business", // Reference to the Business model
    },
    emoji: { type: String, required: true },
    comment: { type: String },
    tags: { type: Array },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IFeedbackDocument>("Feedback", FeedbackSchema);
