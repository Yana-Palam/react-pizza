import { RootState } from "../store";

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((item) => item.id === id);
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
export const selectTotalItemsCount = (state: RootState) =>
  state.cart.items.reduce((totalCount: number, item) => {
    return totalCount + item.count;
  }, 0);
