import axios, { AxiosRequestHeaders } from "axios";

const instance = axios.create({
  baseURL: "/api",
});

export const api = {
  get: <T>(url: string, params?: object, headers?: AxiosRequestHeaders) => {
    return instance.get(url, {
      params,
      headers,
    });
  },
};
