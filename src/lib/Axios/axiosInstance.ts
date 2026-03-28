import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://round10-backend-fitness.huma-volve.com",
  timeout: 10000 
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;
