import Business from "./business.schema";
import { IBusinessDocument } from "./business.interface";

class BusinessService {
  static async getAllBusinesses(): Promise<IBusinessDocument[]> {
    return Business.find().exec();
  }

  static async createBusiness(
    businessID: string,
    businessName: string,
    phone: string,
    email: string,
    address: string
  ): Promise<IBusinessDocument> {
    const business = new Business({
      businessID,
      businessName,
      phone,
      email,
      address,
    });
    return await business.save();
  }

  static async getOneBusinessById(
    id: string
  ): Promise<IBusinessDocument | null> {
    return await Business.findById(id).exec();
  }

  static async getOneBusinessByBusinessId(
    businessID: string
  ): Promise<IBusinessDocument | IBusinessDocument[] | null> {
    return await Business.find({ businessID }).exec();
  }

  static async deleteBusiness(id: string): Promise<IBusinessDocument | null> {
    return await Business.findByIdAndDelete(id).exec()!;
  }

  static async updateBusiness(
    id: string,
    businessName: string,
    phone: string,
    email: string,
    address: string
  ): Promise<IBusinessDocument | null> {
    return await Business.findByIdAndUpdate(
      id,
      { businessName, phone, email, address },
      { new: true } // Return the updated document
    ).exec();
  }
}

export default BusinessService;
