import axios from "axios";

const axiosInstance = axios.create({
<<<<<<< HEAD
  baseURL: "https://argus-backendzedd.herokuapp.com/api",
  //baseURL: 'http://192.168.43.25:8000/api',
=======
  baseURL: 'https://argus-backendzedd.herokuapp.com/api',
  // baseURL: 'http://192.168.43.24:8000/api',
>>>>>>> 6b1b50f416f0f7ecd48b2312a9d6e518af3ad4bc
});

export default axiosInstance;
