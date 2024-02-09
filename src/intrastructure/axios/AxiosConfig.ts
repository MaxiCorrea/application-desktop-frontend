import axios from "axios";

export const AxiosApp = axios.create({
  baseURL: process.env.REACT_APP_URL_APP_API,
});
