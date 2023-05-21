import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addItem: (state, { payload }) => {
    //   state.items.push(payload);
    // state.totalPrice = state.items.reduce((sum, item) => {
    //   return sum + item.price;
    // }, 0);
    // },
    addItem: (state, { payload }) => {
      const findItem = state.items.find((item) => payload.id === item.id);

      if (findItem) {
        findItem.count += 1;
      } else {
        state.items.push({ ...payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, item) => {
        return sum + item.price * item.count;
      }, 0);
    },
    removeItem: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload);
      state.totalPrice = state.items.reduce((sum, item) => {
        return sum + item.price * item.count;
      }, 0);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    plusItem: (state, { payload }) => {
      const findItem = state.items.find((item) => payload === item.id);
      findItem.count += 1;
      state.totalPrice = state.items.reduce((sum, item) => {
        return sum + item.price * item.count;
      }, 0);
    },
    minusItem: (state, { payload }) => {
      const findItem = state.items.find((item) => payload === item.id);
      findItem.count -= 1;
      state.totalPrice = state.items.reduce((sum, item) => {
        return sum + item.price * item.count;
      }, 0);
    },
  },
});

export const { addItem, removeItem, clearItems, plusItem, minusItem } =
  cartSlice.actions;

export default cartSlice.reducer;
