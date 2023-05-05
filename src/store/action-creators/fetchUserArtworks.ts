import { AppDispatch } from "../store";
import { setUser, setUserError, setUserSuccess } from "../reducers/UserSlice";
import { api } from "../../api/api";
import { userPayloadType } from "../../types/userType";
import {
  fetchUserArtworksError,
  fetchUserArtworksSuccess,
} from "../reducers/UserSlice";

export const fetchUserArtworks = (profileObj: userPayloadType) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setUser());
      const response = await api.get<userPayloadType>(`users/${profileObj.id}`);
      dispatch(fetchUserArtworksSuccess(response.data.artworks));
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: response.data.id,
          name: profileObj.name,
          email: profileObj.email,
          imageUrl: profileObj.imageUrl,
          artworks: response.data.artworks,
        })
      );
    } catch (error) {
      dispatch(fetchUserArtworksError("Ошибка с загрузкой"));
    }
  };
};
