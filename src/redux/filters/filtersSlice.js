import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "популярністю (за зменшенням)",
    sortProperty: "rating",
    order: "desc",
  },
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId: (state, { payload }) => {
      state.categoryId = payload;
    },
    setSortValue: (state, { payload: { name, sortProperty, order } }) => {
      state.sort.name = name;
      state.sort.sortProperty = sortProperty;
      state.sort.order = order;
    },
  },
});

export const { setCategoryId, setSortValue } = filtersSlice.actions;

export default filtersSlice.reducer;
