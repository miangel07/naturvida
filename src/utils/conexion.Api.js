import axios from "axios";

const conexionApi = () => {
  const Api = axios.create({
    baseURL: " http://localhost:3000/api/",
  });
  return Api;
};

export default conexionApi;
