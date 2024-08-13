import { useQuery } from "@tanstack/react-query";
import conexionApi from "@/utils/conexion.Api";

const listarFactura = async () => {
    const getToken = () => {
        return localStorage.getItem('token');
    };
    const token = getToken();

    const api = conexionApi(token);
    try {
        const { data } = await api.get("facturas/listarFactura");
        return data
    } catch (error) {
        console.error(error);
    }
}

export const useListarFacturaQuery = () => {
    return useQuery({
        queryKey: ["listarFactura"],
        queryFn: listarFactura,
    });
}

export const listarfecha = async (data) => {
    const getToken = () => {
        return localStorage.getItem('token');
    };
    const token = getToken();

    const api = conexionApi(token);
    try {
        const response = await api.post("detalle/listarFecha", data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}

export const useListarFechaQuery = () => {
    return useQuery({
        queryKey: ["listarFecha"],
        queryFn: listarfecha,
    });
}

export const listarDetalle = async () => {
    const getToken = () => {
        return localStorage.getItem('token');
    };
    const token = getToken();

    const api = conexionApi(token);
    try {
        const { data } = await api.get("detalle/listarDetalle");

        return data
    } catch (error) {
        console.error(error);
    }
}

export const useListarDetalleQuery = () => {
    return useQuery({
        queryKey: ["listarDetalle"],
        queryFn: listarDetalle,
    });
}
export const vendedorProducto = async (data) => {
    const getToken = () => {
        return localStorage.getItem('token');
    };
    const token = getToken();
    const api = conexionApi(token);
    try {

        const response = await api.post("detalle/vendedorProducto", data);
        return response.data
    } catch (error) {
        console.error(error);
    }
}



