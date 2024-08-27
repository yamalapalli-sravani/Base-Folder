import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../../Axios/AxiosBaseQuery";

const CounterApi = createApi({
  reducerPath: "CounterAPi",
  baseQuery: axiosBaseQuery({
    baseUrl: "",
  }),
  endpoints: (builder) => ({
    getPostByName: builder.query({
      query: () => ({
        url: "/example",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPostByNameQuery } = CounterApi;

export default CounterApi;
