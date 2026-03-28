import API from "./api";

export const addToCart = (cartData) => {
  return API.post("/cart/add", cartData);
};
