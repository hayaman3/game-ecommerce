import axios from "axios";

const API_BASE_URL = "https://api.rawg.io/api/game";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};
