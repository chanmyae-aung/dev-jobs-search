import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://159.223.80.82/api/v1" }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/mail/register",
        method: "POST",
        body: userData,
        headers: {
          "app-id": "1f90ed2c-919c-43d1-907a-0002db4ea8df",
          "app-secret":
            "1f16c8c2-7d12-403c-a7d8-74f91cf763c5f9d2e216-5a8e-4c4d-9903-d6f1347a93cc",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["auth"],
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "/mail/login",
        method: "POST",
        body: user,
        headers: {
          "app-id": "1f90ed2c-919c-43d1-907a-0002db4ea8df",
          "app-secret":
            "1f16c8c2-7d12-403c-a7d8-74f91cf763c5f9d2e216-5a8e-4c4d-9903-d6f1347a93cc",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["auth"],
    }),
    logout: builder.mutation({
      query: (token) => ({
        url: "/logout",
        method: "POST",
        headers: {
          "app-id": "1f90ed2c-919c-43d1-907a-0002db4ea8df",
          "app-secret":
            "1f16c8c2-7d12-403c-a7d8-74f91cf763c5f9d2e216-5a8e-4c4d-9903-d6f1347a93cc",
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["auth"],
    }),
    otpConfirm: builder.mutation({
      query: (code) => ({
        url: "/otp",
        method: "POST",
        body: code,
        headers: {
          "app-id": "1f90ed2c-919c-43d1-907a-0002db4ea8df",
          "app-secret":
            "1f16c8c2-7d12-403c-a7d8-74f91cf763c5f9d2e216-5a8e-4c4d-9903-d6f1347a93cc",
        },
      }),
      invalidatesTags: ["auth"],
    }),
    resend: builder.mutation({
      query: (code) => ({
        url: "/otp/resend",
        method: "POST",
        body: code,
        headers: {
          "app-id": "1f90ed2c-919c-43d1-907a-0002db4ea8df",
          "app-secret":
            "1f16c8c2-7d12-403c-a7d8-74f91cf763c5f9d2e216-5a8e-4c4d-9903-d6f1347a93cc",
        },
      }),
      invalidatesTags: ["auth"],
    }),
    forgot: builder.mutation({
      query: (email) => ({
        url: "/forget",
        method: "POST",
        body: email,
        headers: {
          "app-id": "1f90ed2c-919c-43d1-907a-0002db4ea8df",
          "app-secret":
            "1f16c8c2-7d12-403c-a7d8-74f91cf763c5f9d2e216-5a8e-4c4d-9903-d6f1347a93cc",
        },
      }),
      invalidatesTags: ["auth"],
    }),
    forgotCode: builder.mutation({
      query: (code) => ({
        url: "/forget/confirm",
        method: "POST",
        body: code,
        headers: {
          "app-id": "1f90ed2c-919c-43d1-907a-0002db4ea8df",
          "app-secret":
            "1f16c8c2-7d12-403c-a7d8-74f91cf763c5f9d2e216-5a8e-4c4d-9903-d6f1347a93cc",
        },
      }),
      invalidatesTags: ["auth"],
    }),
    changePassword: builder.mutation({
      query: (changeData) => ({
        url: "/password/change",
        method: "POST",
        body: changeData,
        headers: {
          "app-id": "1f90ed2c-919c-43d1-907a-0002db4ea8df",
          "app-secret":
            "1f16c8c2-7d12-403c-a7d8-74f91cf763c5f9d2e216-5a8e-4c4d-9903-d6f1347a93cc",
        },
      }),
      invalidatesTags: ["auth"],
    }),
    getUserProfile: builder.query({
      query: (token) => ({
        url: "/profile",
        headers: {
          "app-id": "1f90ed2c-919c-43d1-907a-0002db4ea8df",
          "app-secret":
            "1f16c8c2-7d12-403c-a7d8-74f91cf763c5f9d2e216-5a8e-4c4d-9903-d6f1347a93cc",
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["auth"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useOtpConfirmMutation,
  useResendMutation,
  useChangePasswordMutation,
  useForgotMutation,
  useForgotCodeMutation,
  useGetUserProfileQuery,
} = authApi;
