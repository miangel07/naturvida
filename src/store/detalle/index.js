import conexionApi from "@/utils/conexion.Api";

export const detallePost = async (data) => {
    const getToken = () => {
        return localStorage.getItem('token');
    };
    const token = getToken();

    const api = conexionApi(token);
    try {
        const response = await api.post("detalle", data);
        
        return response;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message);
        }
    }
}