import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: undefined, admin: false };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      const admin = payload.type === "admin" ? true : false;
      state.token = payload.token;
      state.admin = admin;
    },
    logout: (state, { payload }) => {
      state.token = "";
      state.admin = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
