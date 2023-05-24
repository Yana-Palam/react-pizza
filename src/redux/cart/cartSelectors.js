export const selectCartItems = (state) => state.cart.items;
export const selectCartItemById = (id) => (state) =>
  state.cart.items.find((item) => item.id === id);
export const selectTotalPrice = (state) => state.cart.totalPrice;
export const selectTotalItemsCount = (state) =>
  state.cart.items.reduce((totalCount, item) => {
    return totalCount + item.count;
  }, 0);
