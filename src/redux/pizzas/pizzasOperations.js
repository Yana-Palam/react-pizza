import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://644109d7792fe886a89c8d4e.mockapi.io/api/pizzas";

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchItems",
  async ({ categoryId, sortValue, searchValue }, { rejectWithValue }) => {
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const { sortProperty: sortBy, order } = sortValue;
    const search = searchValue && `&search=${searchValue}`;

    try {
      const { data } = await axios.get(
        BASE_URL + `?${category}&sortBy=${sortBy}&order=${order}${search}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
