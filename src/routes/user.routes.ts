import { Router } from "express";
import { authenticate, authorize, AuthRequest } from "../middleware/auth.middleware";

const router = Router();

router.get("/me", authenticate, (req: AuthRequest, res) => {
  res.json({ user: req.user });
});

router.get("/seller-test", authenticate, authorize("SELLER"), (req, res) => {
  res.json({ message: "Seller only route works" });
});
export default router;