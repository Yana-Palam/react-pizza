import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzas } from "./pizzasOperations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  extraReducers: ({ addCase }) => {
    addCase(fetchPizzas.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    });
    addCase(fetchPizzas.fulfilled, (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
      state.error = false;
    });
    addCase(fetchPizzas.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const { setPizzas } = pizzasSlice.actions;

export default pizzasSlice.reducer;
