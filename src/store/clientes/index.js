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
    queryKey: ['cliente'],
    queryFn: Cliente,
  });
}
