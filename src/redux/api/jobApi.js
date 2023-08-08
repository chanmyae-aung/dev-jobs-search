import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://159.223.80.82/api/v1" }),
  tagTypes: ["job"],
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: ({ token, currentPage }) => ({
        url: `/job?page=${currentPage}`,
        headers: {
          "app-id": "1f90ed2c-919c-43d1-907a-0002db4ea8df",
          "app-secret":
            "1f16c8c2-7d12-403c-a7d8-74f91cf763c5f9d2e216-5a8e-4c4d-9903-d6f1347a93cc",
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["job"],
    }),
    getDetail: builder.query({
      query: ({ id, token }) => ({
        url: `/job/${id}`,
        headers: {
          "app-id": "1f90ed2c-919c-43d1-907a-0002db4ea8df",
          "app-secret":
            "1f16c8c2-7d12-403c-a7d8-74f91cf763c5f9d2e216-5a8e-4c4d-9903-d6f1347a93cc",
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
          "app-id": "1f90ed2c-919c-43d1-907a-0002db4ea8df",
          "app-secret":
            "1f16c8c2-7d12-403c-a7d8-74f91cf763c5f9d2e216-5a8e-4c4d-9903-d6f1347a93cc",
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["job"],
    }),
    apply: builder.mutation({
      query: ({applyData, token}) => ({
        url: "/apply",
        method: "POST",
        body: applyData,
        headers: {
          "app-id": "1f90ed2c-919c-43d1-907a-0002db4ea8df",
          "app-secret":
            "1f16c8c2-7d12-403c-a7d8-74f91cf763c5f9d2e216-5a8e-4c4d-9903-d6f1347a93cc",
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
