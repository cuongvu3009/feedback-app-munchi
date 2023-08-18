import { Router } from "express";
import { StripeController } from "./stripe.controller";

const router = Router();

router.post("/", StripeController.charge);

export default router;
