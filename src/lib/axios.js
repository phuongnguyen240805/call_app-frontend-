import axios from "axios";

const BASE_URL = "https://call-app-wheat.vercel.app/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});
