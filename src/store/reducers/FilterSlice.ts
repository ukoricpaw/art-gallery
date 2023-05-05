import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterStateType {
  filterStyles: number[];
  "1": boolean;
  "2": boolean;
  "3": boolean;
  "4": boolean;
  "5": boolean;
}

const FilterState: FilterStateType = {
  filterStyles: [],
  "1": false,
  "2": false,
  "3": false,
  "4": false,
  "5": false,
};

export type ActionFilterType = 1 | 2 | 3 | 4 | 5;

const filterSlice = createSlice({
  name: "filterSlice",
  initialState: FilterState,
  reducers: {
    addFilter(state, action: PayloadAction<ActionFilterType>) {
      state.filterStyles.push(action.payload);
      state[action.payload] = true;
    },
    removeFilter(state, action: PayloadAction<ActionFilterType>) {
      state.filterStyles = state.filterStyles.filter(
        (el) => el !== action.payload
      );
      state[action.payload] = false;
    },
    clearFilter(state) {
      state.filterStyles = [];
      state[1] = false;
      state[2] = false;
      state[3] = false;
      state[4] = false;
      state[5] = false;
    },
  },
});

export const { addFilter, removeFilter, clearFilter } = filterSlice.actions;
export default filterSlice.reducer;
