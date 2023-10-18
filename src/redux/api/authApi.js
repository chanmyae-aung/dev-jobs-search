import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { appId, appSecret, baseUrl } from "../../constant/authKey";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: "/mail/register",
        method: "POST",
        body: userData,
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
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
          "app-id": appId,
          "app-secret": appSecret,
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
          "app-id": appId,
          "app-secret": appSecret,
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
          "app-id": appId,
          "app-secret": appSecret,
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
          "app-id": appId,
          "app-secret": appSecret,
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
          "app-id": appId,
          "app-secret": appSecret,
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
          "app-id": appId,
          "app-secret": appSecret,
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
          "app-id": appId,
          "app-secret": appSecret,
        },
      }),
      invalidatesTags: ["auth"],
    }),
    getUserProfile: builder.query({
      query: (token) => ({
        url: "/profile",
        headers: {
          "app-id": appId,
          "app-secret": appSecret,
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
