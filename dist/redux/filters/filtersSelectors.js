"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectSort = exports.selectCategoryId = void 0;
const selectCategoryId = (state) => state.filters.categoryId;
exports.selectCategoryId = selectCategoryId;
const selectSort = (state) => state.filters.sort;
exports.selectSort = selectSort;
//# sourceMappingURL=filtersSelectors.js.map