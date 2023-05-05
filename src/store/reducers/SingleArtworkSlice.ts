import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArtworkType } from "../../types/artworksType";

interface SingleArtworkState {
  data: ArtworkType;
  isLoading: boolean;
  error: string | null;
}

const initialState: SingleArtworkState = {
  data: {} as ArtworkType,
  isLoading: true,
  error: null,
};

const SingleArtworkSlice = createSlice({
  name: "SingleArtworkSlice",
  initialState,
  reducers: {
    FetchSingleArtwork(state) {
      state.isLoading = true;
    },
    FetchSingleArtworkWithSuccess(state, action: PayloadAction<ArtworkType>) {
      state.isLoading = false;
      state.data = action.payload;
    },
    FetchSingleArtworkWithError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  FetchSingleArtwork,
  FetchSingleArtworkWithError,
  FetchSingleArtworkWithSuccess,
} = SingleArtworkSlice.actions;
export default SingleArtworkSlice.reducer;
