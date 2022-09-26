import axios, { AxiosRequestHeaders } from "axios";

const instance = axios.create({
  baseURL: `${process.env.BACKEND_URL}/api`,
});

export const api = {
  get: (url: string, params?: object, headers?: AxiosRequestHeaders) => {
    return instance.get(url, {
      params,
      headers,
    });
  },
  post: (url: string, data?: object) => {
    return instance.post(url, data);
  },
};
