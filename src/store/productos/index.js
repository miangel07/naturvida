import conexionApi from "@/utils/conexion.Api";
import { useQuery } from "@tanstack/react-query";

const Producto = async () => {
  const api = conexionApi();
  try {
    const { data } = await api.get("productos");
    return data;
  } catch (error) {
    console.error(error)
  }
};

export const useProductoQuery = () => {
  return useQuery({
    queryKey: ["productos"],
    queryFn: Producto,
  });
};

export const ProductoPost = async (data) => {
  const api = conexionApi();
  try {
    const response = await api.post("productos", data);
    console.log(response);
    return response.data.message;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Error al realizar la solicitud");
  }
};
export const ProductoDelete = async (data) => {
  const api = conexionApi();
  console.log(data);
  try {
    const response = await api.delete(`productos/${data}`);
    console.log(response.data.message);
    return response.data.message;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Error al realizar la solicitud");
  }
};
export const ProductoPut = async (data) => {
  const api = conexionApi();
  console.log(data);
  try {
    const response = await api.put(`productos/${data.id}`, data);
    console.log(response.data.message);
    return response.data.message;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Error al realizar la solicitud");
  }
};
