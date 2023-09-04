import { Document } from "mongoose";
import { ObjectId } from "mongodb";

export interface IBusinessDocument extends Document {
  _id: ObjectId;
  businessID: string;
  businessName: string;
  phone: string;
  email: string;
  address: string;
}
