import { Response } from "express";
import { prisma } from "../config/prisma";
import { AuthRequest } from "../middleware/auth.middleware";

export class ShopController {

  static async createShop(req: AuthRequest, res: Response) {
    try {

      const { name, address, latitude, longitude } = req.body;

      const existingShop = await prisma.shop.findUnique({
        where: { ownerId: req.user!.userId }
      });

      if (existingShop) {
        return res.status(400).json({
          error: "Seller already has a shop"
        });
      }

      const shop = await prisma.shop.create({
        data: {
          name,
          address,
          latitude,
          longitude,
          ownerId: req.user!.userId
        }
      });

      res.status(201).json(shop);

    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

}