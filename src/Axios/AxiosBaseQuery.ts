import axios, { AxiosError } from "axios";
import { BaseQueryFn } from "@reduxjs/toolkit/query/react";

// Define the base query function
const axiosBaseQuery =
  ({
    baseUrl,
  }: {
    baseUrl: string;
  }): BaseQueryFn<
    { url: string; method?: string; data?: any; params?: any; headers?: any },
    unknown,
    AxiosError
  > =>
  async ({ url, method = "GET", data, params, headers }): Promise<any> => {
    try {
      const response = await axios({
        url: `${baseUrl}${url}`,
        method,
        data,
        params,
        headers,
      });

      return { data: response.data };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        error: {
          status: axiosError.response?.status,
          message: axiosError.message,
          data: axiosError.response?.data,
        },
      };
    }
  };

export default axiosBaseQuery;
