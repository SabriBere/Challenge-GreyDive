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
  try {
    return await instance.request({
      method,
      url,
      data: body,
    });
  } catch (error: any) {
    console.log("ERROR STATUS:", error.response?.status);
    console.log("ERROR DATA:", error.response?.data);
    console.log("ERROR URL:", error.config?.url);
    throw error;
  }
};
