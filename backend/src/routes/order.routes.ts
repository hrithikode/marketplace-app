import { Router } from "express";
import { OrderController } from "../controllers/order.controllers";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post("/checkout", authenticate, OrderController.checkout);

export default router;