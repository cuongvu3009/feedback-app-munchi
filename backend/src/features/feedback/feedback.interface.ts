import { Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface IFeedbackDocument extends Document {
  comment: string;
  emoji: string;
  tags: string[];
}
