import { configureStore } from '@reduxjs/toolkit'
import darkReducer from '../redux/features/darkSlice'
import { authApi } from '../redux/api/authApi'
import authSlice from '../redux/features/authSlice'
import { jobApi } from '../redux/api/jobApi'
import jobSlice from '../redux/features/jobSlice'

export const store = configureStore({
  reducer: {
    dark: darkReducer,
    [authApi.reducerPath] : authApi.reducer,
    authSlice: authSlice,
    [jobApi.reducerPath]: jobApi.reducer,
    jobSlice: jobSlice

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, jobApi.middleware),
})