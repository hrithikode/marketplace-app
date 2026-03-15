import { prisma } from "../config/prisma";

export class OrderService {

  static async checkout(buyerId: string, paymentMethod: "ONLINE" | "COD") {

    const cart = await prisma.cart.findUnique({
      where: { buyerId },
      include: { items: true }
    });

    if (!cart || cart.items.length === 0) {
      throw new Error("Cart is empty");
    }

    const order = await prisma.order.create({
      data: {
        buyerId,
        paymentMethod
      }
    });

    for (const item of cart.items) {

      await prisma.orderItem.create({
        data: {
          orderId: order.id,
          productId: item.productId,
          quantity: item.quantity,
          price: item.price
        }
      });

    }

    await prisma.cartItem.deleteMany({
      where: { cartId: cart.id }
    });

    return order;

  }

}