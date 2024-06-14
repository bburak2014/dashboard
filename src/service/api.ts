// api.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoginCredentials, RegisterCredentials } from './types';


export const fetchAuthToken = createAsyncThunk(
  'auth/fetchAuthToken',
  async ({ credentials, mode }: { credentials: LoginCredentials | RegisterCredentials, mode:string }) => {
    const body = JSON.stringify(credentials); // Stringify the object correctly
    const url = `https://study.logiper.com/auth/${mode}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });
    return response.json();
  }
);