import axios from "axios";
import type { Method } from "axios";

const config = {
  baseURL: "/",
  withCredentials: false,
};

export const instance = axios.create(config);

type FetchApiParams = {
  method: Method;
  url: string;
  body?: unknown;
};

export const fetchApi = ({ method, url, body }: FetchApiParams) => {
  return instance[method](url, body);
};
