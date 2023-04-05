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
    setFilters: (state, { payload: { categoryId, sort } }) => {
      state.categoryId = Number(categoryId);
      state.sort.name = sort.name;
      state.sort.sortProperty = sort.sortProperty;
      state.sort.order = sort.order;
    },
  },
});

export const { setCategoryId, setSortValue, setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
