import conexionApi from "@/utils/conexion.Api";
import { useQuery } from "@tanstack/react-query";
const facturas = async () => {
    const getToken = () => {
        return localStorage.getItem('token');
    };
    const token = getToken();

    const api = conexionApi(token);
    try {
        const { data } = await api.get("facturas");
        return data
    } catch (error) {
        console.error(error);
    }
}

export const useFacturasQuery = () => {
    return useQuery({
        queryKey: ["facturas"],
        queryFn: facturas,
    });
}

export const FacturaPost = async (data) => {
    const getToken = () => {
        return localStorage.getItem('token');
    };
    const token = getToken();

    const api = conexionApi(token);
    try {
        const response = await api.post("facturas", data);
        console.log(response);
        return response.data.message;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message);
        }
    }
}

export const FacturaDelete = async (data) => {
    const getToken = () => {
        return localStorage.getItem('token');
    };
    const token = getToken();

    const api = conexionApi(token);
    try {
        const response = await api.delete(`facturas/${data}`);
        console.log(response.data.message);
        return response.data.message;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message);
        }
    }
}

export const FacturaPut = async (data) => {
    const getToken = () => {
        return localStorage.getItem('token');
    };
    const token = getToken();

    const api = conexionApi(token);
    try {
        const response = await api.put(`facturas/${data.id}`, data);
        console.log(response.data.message);
        return response.data.message;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message);
        }
    }
}
