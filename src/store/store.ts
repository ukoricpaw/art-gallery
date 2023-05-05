import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ArtworkReducer from "./reducers/ArtworkSlice";
import SearchReducer from "./reducers/SearchSlice";
import FilterReducer from "./reducers/FilterSlice";
import FormReducer from "./reducers/FormSlice";
import UserReducer from "./reducers/UserSlice";
import SingleArtworkReducer from "./reducers/SingleArtworkSlice";

const rootReducer = combineReducers({
  ArtworkReducer,
  SearchReducer,
  FilterReducer,
  FormReducer,
  UserReducer,
  SingleArtworkReducer,
});

export const getStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof getStore>;
export type AppDispatch = AppStore["dispatch"];
