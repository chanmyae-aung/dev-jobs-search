import { configureStore } from '@reduxjs/toolkit'
import darkReducer from '../redux/features/darkSlice'
import { authApi } from '../redux/api/authApi'
import authSlice from '../redux/features/authSlice'

export const store = configureStore({
  reducer: {
    dark: darkReducer,
    [authApi.reducerPath] : authApi.reducer,
    authSlice: authSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})