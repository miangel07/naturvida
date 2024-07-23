import axios from "axios";
import conexionApi from "@/utils/conexion.Api";

export const login = async (data) => {
  const api =conexionApi()
  try {
    const response = await api.post("login", data);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else if (error.request) {
      throw new Error("No se recibió respuesta del servidor");
    } else {
      throw new Error("Error al realizar la solicitud");
    }
  }
};
