import { Response } from "express";
import { prisma } from "../config/prisma";
import { AuthRequest } from "../middleware/auth.middleware";

export class ProductController {

  static async createProduct(req: AuthRequest, res: Response) {
    try {

      const { title, description, price, imageUrl } = req.body;

      const shop = await prisma.shop.findUnique({
        where: { ownerId: req.user!.userId }
      });

      if (!shop) {
        return res.status(400).json({
          error: "Create shop first"
        });
      }

      const product = await prisma.product.create({
        data: {
          title,
          description,
          price,
          imageUrl,
          shopId: shop.id
        }
      });

      res.status(201).json(product);

    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

}