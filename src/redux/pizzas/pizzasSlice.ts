import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzas } from "./pizzasOperations";

export type Pizza = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  sizes: number[];
  types: number[];
};

interface PizzaSliceState {
  items: Pizza[];
  isLoading: boolean;
  error: any;
}

const initialState: PizzaSliceState = {
  items: [],
  isLoading: false,
  error: null,
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      const { payload } = action;
      state.items = payload;
      state.isLoading = false;
      state.error = false;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      const { payload } = action;
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export default pizzasSlice.reducer;
