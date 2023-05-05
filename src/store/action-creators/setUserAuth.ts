import { AppDispatch } from "../store";
import { setUser, setUserError, setUserSuccess } from "../reducers/UserSlice";
import { api } from "../../api/api";
import { userPayloadType } from "../../types/userType";

export const setUserAuth = (profileObj: userPayloadType) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setUser());
      let response = await api.get<userPayloadType>(
        `users/byEmail?email=${profileObj.email}`
      );
      if (!response.data) {
        await api.post(`/users`, {
          username: profileObj.name,
          email: profileObj.email,
          activities: [],
        });
        response = await api.get<userPayloadType>(
          `users/byEmail?email=${profileObj.email}`
        );
      }
      dispatch(
        setUserSuccess({
          id: response.data.id,
          name: profileObj.name,
          email: profileObj.email,
          imageUrl: profileObj.imageUrl,
          artworks: response.data.artworks,
        })
      );
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
      dispatch(setUserError("Ошибка с авторизацией"));
    }
  };
};
