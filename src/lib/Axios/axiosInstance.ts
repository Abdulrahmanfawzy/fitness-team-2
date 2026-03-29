import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://round10-backend-fitness.huma-volve.com",
  timeout: 10000 ,
  headers: {
    "Content-Type": "application/json"
  }
});

axiosInstance.interceptors.request.use((config) => {
  const token = "28|DdJp6h0iL2CMdOpZRzUtk7WdMFt3pD9zyT9e9mPL972bf56c";
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosInstance;
