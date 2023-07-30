import { configureStore } from '@reduxjs/toolkit'
import darkReducer from '../redux/features/darkSlice'

export const store = configureStore({
  reducer: {
    dark: darkReducer
  },
})