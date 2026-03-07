import { Router } from "express";
import { CartController } from "../controllers/cart.controller";
import { authenticate, authorize } from "../middleware/auth.middleware";

const router = Router();

router.post("/add", authenticate, authorize("BUYER"), CartController.addToCart);
router.get("/", authenticate, authorize("BUYER"), CartController.getCart);
router.delete("/item/:id", authenticate, authorize("BUYER"), CartController.removeItem);

export default router;