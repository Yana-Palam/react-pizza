"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFilters = exports.setSortValue = exports.setCategoryId = exports.filtersSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    categoryId: 0,
    sort: {
        name: "популярністю (за зменшенням)",
        sortProperty: "rating",
        order: "desc",
    },
};
exports.filtersSlice = (0, toolkit_1.createSlice)({
    name: "filters",
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            const { payload } = action;
            state.categoryId = payload;
        },
        setSortValue: (state, action) => {
            const { payload: { name, sortProperty, order }, } = action;
            state.sort.name = name;
            state.sort.sortProperty = sortProperty;
            state.sort.order = order;
        },
        setFilters: (state, action) => {
            const { payload: { categoryId, sort }, } = action;
            state.categoryId = Number(categoryId);
            state.sort.name = sort.name;
            state.sort.sortProperty = sort.sortProperty;
            state.sort.order = sort.order;
        },
    },
});
_a = exports.filtersSlice.actions, exports.setCategoryId = _a.setCategoryId, exports.setSortValue = _a.setSortValue, exports.setFilters = _a.setFilters;
exports.default = exports.filtersSlice.reducer;
//# sourceMappingURL=filtersSlice.js.map