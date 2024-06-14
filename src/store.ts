// store.ts
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './rtk/auth/authSlice';

 export const store = configureStore({
  reducer: {
    auth:authSlice
  },
});

export type AppDispatch = typeof store.dispatch;