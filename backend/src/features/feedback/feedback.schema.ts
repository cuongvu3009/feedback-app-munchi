import mongoose, { Schema } from "mongoose";

import { IFeedbackDocument } from "./feedback.interface";

const FeedbackSchema: Schema = new Schema(
  {
    emoji: { type: String, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IFeedbackDocument>("Feedback", FeedbackSchema);
