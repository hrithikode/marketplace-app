import { api } from "./axios";

export const getProductsByShop = (shopId: string) => {
  return api.get(`/shops/${shopId}/products`);
};
