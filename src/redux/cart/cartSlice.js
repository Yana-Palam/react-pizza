import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, { payload }) => {
      state.items = payload;
    },
  },
});

export const { setItems } = cartSlice.actions;

export default cartSlice.reducer;
