import { api } from "./axios";

export const addToCart = (data: {
  productId: string;
  quantity: number;
}) => {
  return api.post("/cart/add", data);
};

export const getCart = () => {
  return api.get("/cart");
};

export const removeCartItem = (id: string) => {
  return api.delete(`/cart/item/${id}`);
};
