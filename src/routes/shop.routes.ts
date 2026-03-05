import { Router } from "express";
import { ShopController } from "../controllers/shop.controller";
import { authenticate, authorize } from "../middleware/auth.middleware";

const router = Router();

router.post(
  "/",
  authenticate,
  authorize("SELLER"),
  ShopController.createShop
);

export default router;