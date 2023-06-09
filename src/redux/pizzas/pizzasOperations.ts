import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Pizza } from "./pizzasSlice";

const BASE_URL = "https://644109d7792fe886a89c8d4e.mockapi.io/api/pizzas";

export type SortType = {
  name: string;
  sortProperty: "rating" | "title" | "price";
  order: "desc" | "asc";
};

type FetchPizzasArgs = {
  categoryId: number;
  sortValue: SortType;
  searchValue: string;
};

type KnownError = {
  errorMessage: string;
};

export const fetchPizzas = createAsyncThunk(
  "pizzas/fetchItems",
  async (params: FetchPizzasArgs, { rejectWithValue }) => {
    const { categoryId, sortValue, searchValue } = params;
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const { sortProperty: sortBy, order } = sortValue;
    const search = searchValue && `&search=${searchValue}`;

    try {
      const { data } = await axios.get<Pizza[]>(
        BASE_URL + `?${category}&sortBy=${sortBy}&order=${order}${search}`
      );
      return data;
    } catch (err) {
      const error = err as AxiosError<KnownError>;
      if (!error.response) {
        throw err;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
