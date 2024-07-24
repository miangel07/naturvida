import conexionApi from "@/utils/conexion.Api";
import { useQuery } from "@tanstack/react-query";

const Cliente = async () => {
  const api = conexionApi();
  try {
    const { data } = await api.get("clientes");
    return data.data;
  } catch (error) {}
};

export function useClienteQuery() {
  return useQuery({
    queryKey: ["cliente"],
    queryFn: Cliente,

  });
}
export const ClientePost = async (data) => {
  const api = conexionApi();
  try {
    const response = await api.post("clientes", data);
    console.log(response);
    return response.data.message;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Error al realizar la solicitud");
  }
};
