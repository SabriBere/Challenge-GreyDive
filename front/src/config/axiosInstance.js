import axios from "axios";

const config = {
  baseURL: "/",
  withCredentials: false,
};

export const instance = axios.create(config);

export const fetchApi = ({ method, url, body }) => {
  return instance[method](url, body);
};
