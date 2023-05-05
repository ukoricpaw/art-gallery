import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { userState, userPayloadType } from "../../types/userType";
import { ArtworkType } from "../../types/artworksType";

const initialState: userState = {
  user: { id: null, name: "", email: "", imageUrl: "", artworks: [] },
  isAuth: false,
  loading: false,
  error: null,
  artworksGetError: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(state) {
      state.loading = true;
    },
    setUserSuccess(state, action: PayloadAction<userPayloadType>) {
      state.loading = false;
      state.isAuth = true;
      state.user = action.payload;
    },
    setUserError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.isAuth = false;
      state.error = action.payload;
    },
    setUserLogout(state) {
      state.loading = false;
      state.isAuth = false;
    },
    fetchUserArtworksSuccess(state, action: PayloadAction<ArtworkType[]>) {
      state.loading = false;
      state.user.artworks = action.payload;
    },
    fetchUserArtworksError(state, action: PayloadAction<string>) {
      state.artworksGetError = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setUser,
  setUserSuccess,
  setUserError,
  setUserLogout,
  fetchUserArtworksError,
  fetchUserArtworksSuccess,
} = userSlice.actions;

export default userSlice.reducer;
