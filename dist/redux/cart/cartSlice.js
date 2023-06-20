"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.minusItem = exports.plusItem = exports.clearItems = exports.removeItem = exports.addItem = exports.cartSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    items: [],
    totalPrice: 0,
};
exports.cartSlice = (0, toolkit_1.createSlice)({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const { payload } = action;
            const findItem = state.items.find((item) => payload.id === item.id);
            if (findItem) {
                findItem.count += 1;
            }
            else {
                state.items.push(Object.assign(Object.assign({}, payload), { count: 1 }));
            }
            state.totalPrice = state.items.reduce((sum, item) => {
                return sum + item.price * item.count;
            }, 0);
        },
        removeItem: (state, action) => {
            const { payload } = action;
            state.items = state.items.filter((item) => item.id !== payload);
            state.totalPrice = state.items.reduce((sum, item) => {
                return sum + item.price * item.count;
            }, 0);
        },
        clearItems: (state) => {
            state.items = [];
            state.totalPrice = 0;
        },
        plusItem: (state, action) => {
            const { payload } = action;
            const findItem = state.items.find((item) => payload === item.id);
            if (findItem) {
                findItem.count += 1;
            }
            state.totalPrice = state.items.reduce((sum, item) => {
                return sum + item.price * item.count;
            }, 0);
        },
        minusItem: (state, action) => {
            const { payload } = action;
            const findItem = state.items.find((item) => payload === item.id);
            if (findItem) {
                findItem.count -= 1;
            }
            state.totalPrice = state.items.reduce((sum, item) => {
                return sum + item.price * item.count;
            }, 0);
        },
    },
});
_a = exports.cartSlice.actions, exports.addItem = _a.addItem, exports.removeItem = _a.removeItem, exports.clearItems = _a.clearItems, exports.plusItem = _a.plusItem, exports.minusItem = _a.minusItem;
exports.default = exports.cartSlice.reducer;
//# sourceMappingURL=cartSlice.js.map