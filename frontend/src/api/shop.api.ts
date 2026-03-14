import { api } from "./axios";

export const getShops = () => {
  return api.get("/shops");
};

export const getShopProducts = (shopId: string) => {
  return api.get(`/shops/${shopId}/products`);
};
