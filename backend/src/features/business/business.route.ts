import BusinessController from "./business.controller";
import { Router } from "express";

const router = Router();
// get all business
router.get("/", BusinessController.getAllBusinesses);
// create 1 business
router.post("/", BusinessController.createBusiness);
// get 1 business by id
router.get("/:id", BusinessController.getBusinessById);
// update 1 business by id
router.put("/:id", BusinessController.updateBusiness);
// delete 1 business by id
router.delete("/:id", BusinessController.deleteBusiness);

export default router;
