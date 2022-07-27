import { createSlice } from "@reduxjs/toolkit";

const initialState = { target: 0, valid: 0, error: false };

export const validationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    init: (state, { payload }) => {
      state.target = payload;
    },
    setValid: (state, { payload }) => {
      state.valid = state.valid + 1;
    },
    setInvalid: (state, { payload }) => {
      const value = Math.max(0, state.valid - 1);
      state.valid = value;
    },
    resetValidation: (state, { payload }) => {
      state.target = 0;
      state.valid = 0;
      state.error = false;
    },
    toggleError: (state, { payload }) => {
      state.error = !state.error;
    },
  },
});

export const { init, setInvalid, setValid, resetValidation, toggleError } =
  validationSlice.actions;

export default validationSlice.reducer;
