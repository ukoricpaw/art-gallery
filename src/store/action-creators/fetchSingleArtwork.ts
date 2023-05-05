import { AppDispatch } from "../store";
import { api } from "../../api/api";
import {
  FetchSingleArtwork,
  FetchSingleArtworkWithError,
  FetchSingleArtworkWithSuccess,
} from "../reducers/SingleArtworkSlice";
import { ArtworkType } from "../../types/artworksType";

export const fetchSingleArtwork = (props: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(FetchSingleArtwork());

      let makeUrl: string = `artworks/${props}`;

      const response = await api.get<ArtworkType>(makeUrl);
      dispatch(FetchSingleArtworkWithSuccess(response.data));
    } catch (error) {
      dispatch(FetchSingleArtworkWithError("Произошла ошибка"));
    }
  };
};
