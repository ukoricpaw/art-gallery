import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  input: string;
}

const SearchState: SearchState = {
  input: "",
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: SearchState,
  reducers: {
    changeInput(state, action: PayloadAction<string>) {
      state.input = action.payload
        ? action.payload[0]?.toUpperCase() + action.payload?.substring(1)
        : "";
    },
  },
});

export const { changeInput } = searchSlice.actions;
export default searchSlice.reducer;
