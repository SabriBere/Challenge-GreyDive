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
  console.log("ID recibido:", id);

  const res = await fetchApi({
    method: "get",
    url: `/api/clientes/${id}`,
  });

  console.log("Respuesta:", res.data);

  return res.data.data;
};
