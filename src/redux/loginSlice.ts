import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserRowType, userData } from "../constants/data"

export interface AuthState {
    user: UserRowType | null;
  }
  
  const initialState: AuthState = {
    user: null,
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      loginUser(state, action: PayloadAction<UserRowType>) {
        state.user = action.payload;
      },
      logoutUser(state) {
        state.user = null;
      },
    },
  });
  
  export const { loginUser, logoutUser } = authSlice.actions;
  
  export default authSlice.reducer;