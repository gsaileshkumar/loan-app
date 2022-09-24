import axios, { AxiosRequestHeaders } from "axios";

const instance = axios.create({
  baseURL: "/api",
});

export const api = {
  get: (url: string, params?: object, headers?: AxiosRequestHeaders) => {
    return instance.get(url, {
      params,
      headers,
    });
  },
  post: (url: string, body?: object) => {
    return instance.post(url, body);
  },
};
