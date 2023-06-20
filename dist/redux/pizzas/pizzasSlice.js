"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pizzasSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const pizzasOperations_1 = require("./pizzasOperations");
const initialState = {
    items: [],
    isLoading: false,
    error: null,
};
exports.pizzasSlice = (0, toolkit_1.createSlice)({
    name: "pizzas",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(pizzasOperations_1.fetchPizzas.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        });
        builder.addCase(pizzasOperations_1.fetchPizzas.fulfilled, (state, action) => {
            const { payload } = action;
            state.items = payload;
            state.isLoading = false;
            state.error = false;
        });
        builder.addCase(pizzasOperations_1.fetchPizzas.rejected, (state, action) => {
            const { payload } = action;
            state.isLoading = false;
            state.error = payload;
        });
    },
});
exports.default = exports.pizzasSlice.reducer;
//# sourceMappingURL=pizzasSlice.js.map