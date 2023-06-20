"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectTotalItemsCount = exports.selectTotalPrice = exports.selectCartItemById = exports.selectCartItems = void 0;
const selectCartItems = (state) => state.cart.items;
exports.selectCartItems = selectCartItems;
const selectCartItemById = (id) => (state) => state.cart.items.find((item) => item.id === id);
exports.selectCartItemById = selectCartItemById;
const selectTotalPrice = (state) => state.cart.totalPrice;
exports.selectTotalPrice = selectTotalPrice;
const selectTotalItemsCount = (state) => state.cart.items.reduce((totalCount, item) => {
    return totalCount + item.count;
}, 0);
exports.selectTotalItemsCount = selectTotalItemsCount;
//# sourceMappingURL=cartSelectors.js.map