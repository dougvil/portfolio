import { createSlice } from '@reduxjs/toolkit';
import type { InitialState } from './auth.types';

const initialState: InitialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
