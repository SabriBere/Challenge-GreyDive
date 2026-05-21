import { fetchApi } from "../config/axiosInstance";

export const getTests = async () => {
  const res = await fetchApi({
    method: "get",
    url: "/api/clientes/",
  });

  return res.data.data.rows;
};

export const getTestById = async (id) => {
  const res = await fetchApi({
    method: "get",
    url: `/api/clientes/${id}`,
  });

  return res.data.data;
};
