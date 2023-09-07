import { Document } from "mongoose";

export interface IFeedbackDocument extends Document {
  businessSlug: string;

  emoji_service: string;
  comment_service: string;
  tags_service: string[];

  emoji_order: string;
  comment_order: string;
  tags_order: string[];
}
