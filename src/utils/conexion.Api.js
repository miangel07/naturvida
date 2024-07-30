import axios from 'axios';

const conexionApi = (token) => {
 
  const api = axios.create({
    baseURL: "http://localhost:3000/api/",
    headers: {
      'Content-Type': 'application/json',
      'token': `${token}`
    }
  });

  return api;
};

export default conexionApi;
