import { fetchApi } from "../config/axiosInstance";
import type { Test } from "../types/test";

export const getTests = async (): Promise<Test[]> => {
  const res = await fetchApi({
    method: "get",
    url: "/api/clientes/",
  });

  return res.data.data.rows;
};

export const getClientById = async (id: string): Promise<Test> => {

  const res = await fetchApi({
    method: "get",
    url: `/api/clientes/${id}`,
  });

  return res.data.data;
};
