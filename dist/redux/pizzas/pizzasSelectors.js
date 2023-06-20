"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectError = exports.selectIsLoading = exports.selectPizzasItems = void 0;
const selectPizzasItems = (state) => state.pizzas.items;
exports.selectPizzasItems = selectPizzasItems;
const selectIsLoading = (state) => state.pizzas.isLoading;
exports.selectIsLoading = selectIsLoading;
const selectError = (state) => state.pizzas.error;
exports.selectError = selectError;
//# sourceMappingURL=pizzasSelectors.js.map