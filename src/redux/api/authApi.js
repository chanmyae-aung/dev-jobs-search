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
          "app-id": "14a19ca6-1920-4643-b691-0540f2e2ca77",
          "app-secret":
            "77f7d282-9a43-4754-955e-a6af9d6241c62945223c-ed31-4721-b96a-e7401ac65e0d",
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
          "app-id": "14a19ca6-1920-4643-b691-0540f2e2ca77",
          "app-secret":
            "77f7d282-9a43-4754-955e-a6af9d6241c62945223c-ed31-4721-b96a-e7401ac65e0d",
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
          "app-id": "14a19ca6-1920-4643-b691-0540f2e2ca77",
          "app-secret":
            "77f7d282-9a43-4754-955e-a6af9d6241c62945223c-ed31-4721-b96a-e7401ac65e0d",
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
          "app-id": "14a19ca6-1920-4643-b691-0540f2e2ca77",
          "app-secret":
            "77f7d282-9a43-4754-955e-a6af9d6241c62945223c-ed31-4721-b96a-e7401ac65e0d",
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
          "app-id": "14a19ca6-1920-4643-b691-0540f2e2ca77",
          "app-secret":
            "77f7d282-9a43-4754-955e-a6af9d6241c62945223c-ed31-4721-b96a-e7401ac65e0d",
        },
      }),
      invalidatesTags: ["auth"],
    }),
    changePassword: builder.mutation({
      query: (code) => ({
        url: "/password/change",
        method: "POST",
        body: code,
        headers: {
          "app-id": "14a19ca6-1920-4643-b691-0540f2e2ca77",
          "app-secret":
            "77f7d282-9a43-4754-955e-a6af9d6241c62945223c-ed31-4721-b96a-e7401ac65e0d",
        },
      }),
      invalidatesTags: ["auth"],
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
} = authApi;
