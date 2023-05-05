import { AppDispatch } from "../store";
import { api } from "../../api/api";
import { ArtworkType, FetchArtworksType } from "../../types/artworksType";
import {
  fetchArtworks as fetchArtworksAction,
  fetchArtworksError,
  fetchArtworksSuccess,
} from "../reducers/ArtworkSlice";

export const fetchArtworks = (props: FetchArtworksType) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(fetchArtworksAction());

      let makeUrl: string = `artworks/getArtworks?typeofartwork_id=${props.typeofartwork}`;
      makeUrl += props.style ? `&style_id=${props.style}` : "";
      makeUrl += props.query ? `&query=${props.query}` : "";

      const response = await api.get<ArtworkType[]>(makeUrl);
      dispatch(fetchArtworksSuccess(response.data));
    } catch (error) {
      dispatch(fetchArtworksError("Произошла ошибка"));
    }
  };
};
