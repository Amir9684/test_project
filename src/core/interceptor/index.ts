import axios, { AxiosResponse } from "axios";

const baseURL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL,
});

const onSuccess = (res: AxiosResponse) => {
  return res.data;
};

const onError = (err: Error) => {
  console.log(err);
};

api.interceptors.response.use(onSuccess, onError);

export { api };
