import { configureStore } from "@reduxjs/toolkit";

import filtersReducer from "./filters/filtersSlice";
import searchReducer from "./search/searchSlice";
import cartReducer from "./cart/cartSlice";
import pizzasReducer from "./pizzas/pizzasSlice";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    search: searchReducer,
    cart: cartReducer,
    pizzas: pizzasReducer,
  },
});
