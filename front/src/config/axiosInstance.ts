import axios, { Method } from "axios";

type FetchApiParams = {
  method: Method;
  url: string;
  body?: unknown;
};

const config = {
  baseURL: "/",
  withCredentials: false,
};

export const instance = axios.create(config);

export const fetchApi = async ({ method, url, body }: FetchApiParams) => {
  return await instance.request({
    method,
    url,
    data: body,
  });
};
