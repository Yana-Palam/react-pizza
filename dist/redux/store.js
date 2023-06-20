"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppDispatch = exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const filtersSlice_1 = __importDefault(require("./filters/filtersSlice"));
const searchSlice_1 = __importDefault(require("./search/searchSlice"));
const cartSlice_1 = __importDefault(require("./cart/cartSlice"));
const pizzasSlice_1 = __importDefault(require("./pizzas/pizzasSlice"));
const react_redux_1 = require("react-redux");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        filters: filtersSlice_1.default,
        search: searchSlice_1.default,
        cart: cartSlice_1.default,
        pizzas: pizzasSlice_1.default,
    },
});
exports.useAppDispatch = react_redux_1.useDispatch;
//# sourceMappingURL=store.js.map