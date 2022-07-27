import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: undefined, admin: false };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      const admin = payload.type === "admin" ? true : false;
      state = { token: payload.token, admin: admin };
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
