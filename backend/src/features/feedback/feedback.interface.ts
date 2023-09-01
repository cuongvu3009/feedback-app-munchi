import { Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface IFeedbackDocument extends Document {
  _id: ObjectId;
  comment: string;
  emoji: string;
  tags: string[];
}
