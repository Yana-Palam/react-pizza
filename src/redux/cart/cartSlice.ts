import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CartItem = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  type: string;
  size: number;
  count: number;
};
interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const { payload } = action;
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
    removeItem: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.items = state.items.filter((item) => item.id !== payload);
      state.totalPrice = state.items.reduce((sum, item) => {
        return sum + item.price * item.count;
      }, 0);
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    plusItem: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      const findItem = state.items.find((item) => payload === item.id);

      if (findItem) {
        findItem.count += 1;
      }

      state.totalPrice = state.items.reduce((sum, item) => {
        return sum + item.price * item.count;
      }, 0);
    },
    minusItem: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      const findItem = state.items.find((item) => payload === item.id);
      if (findItem) {
        findItem.count -= 1;
      }
      state.totalPrice = state.items.reduce((sum, item) => {
        return sum + item.price * item.count;
      }, 0);
    },
  },
});

export const { addItem, removeItem, clearItems, plusItem, minusItem } =
  cartSlice.actions;

export default cartSlice.reducer;
