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
          "app-id": "7dacc261-c441-4e28-a541-5571d6e7f153",
          "app-secret":
            "2265cffc-1f7e-4520-8ab6-f839087548c95bde7c11-2793-4576-8c3b-465f392d0aac",
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["job"],
    }),
    getDetail: builder.query({
      query: ({ id, token }) => ({
        url: `/job/${id}`,
        headers: {
          "app-id": "7dacc261-c441-4e28-a541-5571d6e7f153",
          "app-secret":
            "2265cffc-1f7e-4520-8ab6-f839087548c95bde7c11-2793-4576-8c3b-465f392d0aac",
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["job"],
    }),
  }),
});

export const { useGetJobsQuery, useGetDetailQuery } = jobApi;
