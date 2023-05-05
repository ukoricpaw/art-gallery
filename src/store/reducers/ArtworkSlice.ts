import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArtworkType } from "../../types/artworksType";

interface ArtworkState {
  artworks: ArtworkType[];
  isLoading: boolean;
  error: null | string;
}

const initialState: ArtworkState = {
  artworks: [],
  isLoading: false,
  error: null,
};

const ArtworkSlice = createSlice({
  name: "ArtworkSlice",
  initialState,
  reducers: {
    fetchArtworks(state) {
      state.isLoading = true;
    },
    fetchArtworksSuccess(state, action: PayloadAction<ArtworkType[]>) {
      state.isLoading = false;
      state.artworks = action.payload;
      state.error = null;
    },
    fetchArtworksError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchArtworks, fetchArtworksSuccess, fetchArtworksError } =
  ArtworkSlice.actions;

export default ArtworkSlice.reducer;
