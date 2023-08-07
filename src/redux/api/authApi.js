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
          "app-id": "7dacc261-c441-4e28-a541-5571d6e7f153",
          "app-secret":
            "2265cffc-1f7e-4520-8ab6-f839087548c95bde7c11-2793-4576-8c3b-465f392d0aac",
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
          "app-id": "7dacc261-c441-4e28-a541-5571d6e7f153",
          "app-secret":
            "2265cffc-1f7e-4520-8ab6-f839087548c95bde7c11-2793-4576-8c3b-465f392d0aac",
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
          "app-id": "7dacc261-c441-4e28-a541-5571d6e7f153",
          "app-secret":
            "2265cffc-1f7e-4520-8ab6-f839087548c95bde7c11-2793-4576-8c3b-465f392d0aac",
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
          "app-id": "7dacc261-c441-4e28-a541-5571d6e7f153",
          "app-secret":
            "2265cffc-1f7e-4520-8ab6-f839087548c95bde7c11-2793-4576-8c3b-465f392d0aac",
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
          "app-id": "7dacc261-c441-4e28-a541-5571d6e7f153",
          "app-secret":
            "2265cffc-1f7e-4520-8ab6-f839087548c95bde7c11-2793-4576-8c3b-465f392d0aac",
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
          "app-id": "7dacc261-c441-4e28-a541-5571d6e7f153",
          "app-secret":
            "2265cffc-1f7e-4520-8ab6-f839087548c95bde7c11-2793-4576-8c3b-465f392d0aac",
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
          "app-id": "7dacc261-c441-4e28-a541-5571d6e7f153",
          "app-secret":
            "2265cffc-1f7e-4520-8ab6-f839087548c95bde7c11-2793-4576-8c3b-465f392d0aac",
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
          "app-id": "7dacc261-c441-4e28-a541-5571d6e7f153",
          "app-secret":
            "2265cffc-1f7e-4520-8ab6-f839087548c95bde7c11-2793-4576-8c3b-465f392d0aac",
        },
      }),
      invalidatesTags: ["auth"],
    }),
    getUserProfile: builder.query({
      query: (token) => ({
        url: "/profile",
        headers: {
          "app-id": "7dacc261-c441-4e28-a541-5571d6e7f153",
          "app-secret":
            "2265cffc-1f7e-4520-8ab6-f839087548c95bde7c11-2793-4576-8c3b-465f392d0aac",
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
