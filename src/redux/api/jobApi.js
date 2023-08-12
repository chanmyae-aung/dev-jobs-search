import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { appId, appSecret } from "../../constant/authKey";

export const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://159.223.80.82/api/v1" }),
  tagTypes: ["job"],
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: ({ token, currentPage }) => ({
        url: `/job?page=${currentPage}`,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["job"],
    }),
    getDetail: builder.query({
      query: ({ id, token }) => ({
        url: `/job/${id}`,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["job"],
    }),
    searchJobs: builder.mutation({
      query: ({ searchData, token }) => ({
        url: `/job`,
        method: "POST",
        body: searchData,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["job"],
    }),
    apply: builder.mutation({
      query: ({ applyData, token }) => ({
        url: "/apply",
        method: "POST",
        body: applyData,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["job"],
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetDetailQuery,
  useSearchJobsMutation,
  useApplyMutation,
} = jobApi;
