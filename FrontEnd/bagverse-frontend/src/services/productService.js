import API from "./api";

export const getProducts = () => {
  return API.get("/products");
};
