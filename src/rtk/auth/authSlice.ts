import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthToken } from '../../service/api'; // assuming client is defined in a separate file
import Cookies from 'js-cookie';


type PostsState = {
  login: [];
  status: 'idle' | 'loading' | 'success' | 'failed';
  error: string | null;
  isAuthanticated: boolean;
};

const initialState: PostsState = {
  login: [],
  status: 'idle',
  error: null,
  isAuthanticated:Cookies.get('token') ? true : false
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // omit existing reducers here
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthToken.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(fetchAuthToken.fulfilled, (state, action) => (
        action.payload.status==='success' && Cookies.set('token', action.payload.data, { expires: 1/24 }),
         {
        ...state,
        status: 'success',
        login: action.payload,
        isAuthanticated:true
        
      }))
      .addCase(fetchAuthToken.rejected, (state, action) => ({
        ...state,
        status: 'failed',
        error: action.error?.message ?? null,
      }));
  },
});

export default authSlice.reducer;