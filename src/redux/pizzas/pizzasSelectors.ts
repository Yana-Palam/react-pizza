import { RootState } from "../store";

export const selectPizzasItems = (state: RootState) => state.pizzas.items;
export const selectIsLoading = (state: RootState) => state.pizzas.isLoading;
export const selectError = (state: RootState) => state.pizzas.error;
