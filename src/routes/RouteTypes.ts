import Home from "../pages/Home";
import Artworks from "../pages/Artworks";
import UserProfile from "../pages/UserProfile";
import SingleArtwork from "../pages/SingleArtwork";
import Login from "../components/Login";

interface RouteType {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export const PrivateElements: RouteType[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/artwork/:id",
    component: Artworks,
  },
  {
    path: "/userProfile",
    component: UserProfile,
  },
  {
    path: "/singleartwork/:id",
    component: SingleArtwork,
  },
];

export const PublicElements: RouteType[] = [
  {
    path: "/login",
    component: Login,
  },
];
