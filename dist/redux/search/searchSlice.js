"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setSearchValue = exports.searchSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    value: "",
};
exports.searchSlice = (0, toolkit_1.createSlice)({
    name: "search",
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            const { payload } = action;
            state.value = payload;
        },
    },
});
exports.setSearchValue = exports.searchSlice.actions.setSearchValue;
exports.default = exports.searchSlice.reducer;
//# sourceMappingURL=searchSlice.js.map