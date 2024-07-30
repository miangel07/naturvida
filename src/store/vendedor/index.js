import { useQuery } from "@tanstack/react-query";
import conexionApi from "@/utils/conexion.Api";

const vendedor = async () => {
    const getToken = () => {
        return localStorage.getItem('token');
    };
    const token = getToken();

    const api = conexionApi(token);
    try {
        const { data } = await api.get("vendedor")
        return data
    } catch (error) {
        console.error(error);
    }
}

export const useVendedorQuery = () => {
    return useQuery({
        queryKey: ["vendedor"],
        queryFn: vendedor,
    });
}
