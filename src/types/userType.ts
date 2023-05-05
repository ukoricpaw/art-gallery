import { ArtworkType } from "./artworksType";

export interface userState {
  user: userPayloadType;
  isAuth: boolean;
  loading: boolean;
  error: null | string;
  artworksGetError: null | string;
}

export interface userPayloadType {
  id: number | null;
  name: string;
  email: string;
  imageUrl: string;
  picture?: string;
  artworks: ArtworkType[];
}

const initialState: userState = {
  user: { id: 0, name: "", email: "", imageUrl: "", artworks: [] },
  isAuth: false,
  loading: false,
  error: null,
  artworksGetError: null,
};
