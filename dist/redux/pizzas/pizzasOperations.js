"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPizzas = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = __importDefault(require("axios"));
const BASE_URL = "https://644109d7792fe886a89c8d4e.mockapi.io/api/pizzas";
exports.fetchPizzas = (0, toolkit_1.createAsyncThunk)("pizzas/fetchItems", (params, { rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoryId, sortValue, searchValue } = params;
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const { sortProperty: sortBy, order } = sortValue;
    const search = searchValue && `&search=${searchValue}`;
    try {
        const { data } = yield axios_1.default.get(BASE_URL + `?${category}&sortBy=${sortBy}&order=${order}${search}`);
        return data;
    }
    catch (err) {
        const error = err;
        if (!error.response) {
            throw err;
        }
        return rejectWithValue(error.response.data);
    }
}));
//# sourceMappingURL=pizzasOperations.js.map