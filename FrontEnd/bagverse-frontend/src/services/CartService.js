import API from "./api";

export const addToCart = (data) => {
  return API.post("/cart/add", data);
};

export const getCartByUser = (userId) => {
  return API.get(`/cart/user/${userId}`);
};

export const removeFromCart = (id) => {
  return API.delete(`/cart/${id}`);
};
