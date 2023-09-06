import { Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface IFeedbackDocument extends Document {
  businessID: string;
  emoji_service: string;
  comment_service: string;
  tags_service: string[];
  emoji_order: string;
  comment_order: string;
  tags_order: string[];
}
