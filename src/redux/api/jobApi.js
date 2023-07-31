import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://159.223.80.82/api/v1" }),
  tagTypes: ["job"],
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: (token) => ({
        url: "/job",
        headers: {
          "app-id": "14a19ca6-1920-4643-b691-0540f2e2ca77",
          "app-secret":
            "77f7d282-9a43-4754-955e-a6af9d6241c62945223c-ed31-4721-b96a-e7401ac65e0d",
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["job"],
    }),
    getDetail: builder.query({
      query: ({ id, token }) => ({
        url: `/job/${id}`,
        headers: {
          "app-id": "14a19ca6-1920-4643-b691-0540f2e2ca77",
          "app-secret":
            "77f7d282-9a43-4754-955e-a6af9d6241c62945223c-ed31-4721-b96a-e7401ac65e0d",
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["job"],
    }),
  }),
});

export const { useGetJobsQuery, useGetDetailQuery } = jobApi;
