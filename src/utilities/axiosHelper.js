import axios from "axios";
const baseUrl = 3002;

export const axiosInstance = axios.create({
  baseURL: `${baseUrl}/api`,
  //baseURL: `/api`,
  withCredentials: true,
});
axios.defaults.headers.post["Content-Type"] = "application/json";
