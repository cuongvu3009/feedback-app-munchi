import mongoose, { Schema } from "mongoose";

import { IBusinessDocument } from "./business.interface";

const BusinessSchema: Schema = new Schema(
  {
    businessName: {
      type: String,
      required: true,
    },
    businessID: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IBusinessDocument>("Business", BusinessSchema);
