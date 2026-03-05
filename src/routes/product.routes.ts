import { Router } from "express";
import { ProductController } from "../controllers/product.controller";
import { authenticate, authorize } from "../middleware/auth.middleware";

const router = Router();

router.post(
  "/",
  authenticate,
  authorize("SELLER"),
  ProductController.createProduct
);

export default router;