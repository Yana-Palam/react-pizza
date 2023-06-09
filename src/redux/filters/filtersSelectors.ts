import { RootState } from "../store";

export const selectCategoryId = (state: RootState) => state.filters.categoryId;
export const selectSort = (state: RootState) => state.filters.sort;
