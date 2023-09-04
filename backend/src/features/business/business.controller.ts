import { Request, Response } from "express";

import BusinessService from "./business.service";
import { IBusinessDocument } from "./business.interface";

class BusinessController {
  static async getAllBusinesses(req: Request, res: Response) {
    try {
      const businesses = await BusinessService.getAllBusinesses();
      res.status(200).json(businesses);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async createBusiness(req: Request, res: Response) {
    try {
      const {
        businessID,
        businessName,
        phone,
        email,
        address,
      }: IBusinessDocument = req.body;

      // Create and save the business
      const newBusiness = await BusinessService.createBusiness(
        businessID,
        businessName,
        phone,
        email,
        address
      );

      return res.status(201).json(newBusiness);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async getBusinessById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const business = await BusinessService.getOneBusinessById(id);

      if (!business) {
        return res.status(404).json({ message: "Business not found" });
      }

      return res.json(business);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async deleteBusiness(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const business = await BusinessService.getOneBusinessById(id);

      if (business) {
        const deletedBusiness = await BusinessService.deleteBusiness(id);
        return res.json(deletedBusiness);
      } else {
        return res.status(404).json({ message: "Business not found" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  static async updateBusiness(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const { businessName, phone, email, address } = req.body;

      const business = await BusinessService.getOneBusinessById(id);

      if (business) {
        const updatedBusiness = await BusinessService.updateBusiness(
          id,
          businessName,
          phone,
          email,
          address
        );
        return res.json(updatedBusiness);
      } else {
        return res.status(404).json({ message: "Business not found" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

export default BusinessController;
