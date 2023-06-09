import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SortType = {
  name: string;
  sortProperty: "rating" | "title" | "price";
  order: "desc" | "asc";
};

export interface FilterSliceState {
  categoryId: number;
  sort: SortType;
}

const initialState: FilterSliceState = {
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
    setCategoryId: (state, action: PayloadAction<number>) => {
      const { payload } = action;
      state.categoryId = payload;
    },
    setSortValue: (state, action: PayloadAction<SortType>) => {
      const {
        payload: { name, sortProperty, order },
      } = action;
      state.sort.name = name;
      state.sort.sortProperty = sortProperty;
      state.sort.order = order;
    },
    setFilters: (state, action: PayloadAction<FilterSliceState>) => {
      const {
        payload: { categoryId, sort },
      } = action;
      state.categoryId = Number(categoryId);
      state.sort.name = sort.name;
      state.sort.sortProperty = sort.sortProperty;
      state.sort.order = sort.order;
    },
  },
});

export const { setCategoryId, setSortValue, setFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
