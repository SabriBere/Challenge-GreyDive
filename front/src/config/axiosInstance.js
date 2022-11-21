import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production" ? "/" : "http://localhost:3000/";

const config = {
  baseURL,
  withCredentials: false,
};

export const instance = axios.create(config);

export const fetchApi = ({ method, url, body }) => {
  return instance[method](url, body);
};