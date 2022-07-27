import { createSlice } from "@reduxjs/toolkit";

const initialState = { res: {}, req: {} };

export const apiSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    setReq: (state, { payload }) => {
      state.req = {
        ...state.req,
        [payload.property]: payload.value,
      };
    },
    setRes: (state, { payload }) => {
      state.res = payload;
    },
    resetApi: (state, { payload }) => {
      state.res = {};
      state.req = {};
    },
  },
});

export const { setReq, setRes, resetApi } = apiSlice.actions;

export default apiSlice.reducer;
