import { api as sApi } from "./server";
import { api as cApi } from "./client";

const getApiCient = () => {
  if (typeof window !== "undefined") {
    return cApi;
  }
  return sApi;
};

export default getApiCient;
