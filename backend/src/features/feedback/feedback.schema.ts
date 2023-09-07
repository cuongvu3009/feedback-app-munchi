import mongoose, { Schema } from "mongoose";

import { IFeedbackDocument } from "./feedback.interface";

const FeedbackSchema: Schema = new Schema(
  {
    businessSlug: { type: String, required: true },
    emoji_service: { type: String, required: true },
    comment_service: { type: String },
    tags_service: { type: Array },
    emoji_order: { type: String, required: true },
    comment_order: { type: String },
    tags_order: { type: Array },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IFeedbackDocument>("Feedback", FeedbackSchema);
