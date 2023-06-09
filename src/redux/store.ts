import { configureStore } from "@reduxjs/toolkit";

import filtersReducer from "./filters/filtersSlice";
import searchReducer from "./search/searchSlice";
import cartReducer from "./cart/cartSlice";
import pizzasReducer from "./pizzas/pizzasSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    search: searchReducer,
    cart: cartReducer,
    pizzas: pizzasReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
