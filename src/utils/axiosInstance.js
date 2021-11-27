import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://argus-backendzedd.herokuapp.com/api",
  //baseURL: 'http://192.168.43.24:8000/api',
});

export default axiosInstance;
