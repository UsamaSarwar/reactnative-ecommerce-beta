import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  ids: [],
  selectedID: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const i = state.ids.indexOf(payload._id);
      if (i != -1) {
        state.items[i].quantity++;
      } else {
        payload.quantity = 1;
        state.ids.push(payload._id);
        state.items.push(payload);
      }
    },
    removeFromCart: (state, { payload }) => {
      const i = state.ids.indexOf(payload);
      if (i != -1) {
        if (state.items[i].quantity > 1) {
          state.items[i].quantity--;
        } else {
          state.items.pop(i);
          state.ids.pop(i);
        }
      }
    },
    clearCart: (state, { payload }) => {
      state.items = [];
      state.ids = [];
    },
    selectItem: (state, { payload }) => {
      state.selectedID = payload;
    },
    clearSelectedItem: (state, { payload }) => {
      state.selectedID = "";
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  selectItem,
  clearSelectedItem,
} = cartSlice.actions;

export default cartSlice.reducer;
