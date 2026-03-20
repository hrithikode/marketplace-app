import { Response } from "express";
import { AuthRequest } from "../middleware/auth.middleware";
import { OrderService } from "../services/order.service";

export class OrderController {

  static async checkout(req: AuthRequest, res: Response) {

    try {

      const buyerId = req.user!.userId;
      const { paymentMethod } = req.body;

      const order = await OrderService.checkout(
        buyerId,
        paymentMethod
      );

      res.json(order);

    } catch (error: any) {

      res.status(400).json({ error: error.message });

    }

  }

  static async getOrders(req: AuthRequest, res: Response) {
    try {

      const buyerId = req.user!.userId;

      const orders = await OrderService.getOrders(buyerId);

      res.json(orders);

    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

}