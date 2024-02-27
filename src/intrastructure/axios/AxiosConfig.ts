import axios from "axios";

export const AxiosApp = axios.create({
  baseURL: "https://application-desktop-backend.onrender.com/",
});
