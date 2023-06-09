import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchSliceState {
  value: string;
}

const initialState: SearchSliceState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      const { payload } = action;
      state.value = payload;
    },
  },
});

export const { setSearchValue } = searchSlice.actions;

export default searchSlice.reducer;
