import { configureStore } from "@reduxjs/toolkit";

import filtersReducer from "./filters/filtersSlice";
import searchReducer from "./search/searchSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    search: searchReducer,
  },
});
