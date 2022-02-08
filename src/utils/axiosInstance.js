import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.argussecurityservices.ca/api",
});

export default axiosInstance;
