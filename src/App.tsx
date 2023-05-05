import React, { FC, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { setUserSuccess } from "./store/reducers/UserSlice";
import "./styles/general/general.css";
import { PublicElements, PrivateElements } from "./routes/RouteTypes";
import NavBar from "./components/general/NavBar";
import Footer from "./components/general/Footer";
import "./styles/mainPageStyles/main.css";
import "./styles/general/header.css";
import "./styles/general/footer.css";
import "./styles/general/artworkcard.css";
import "./styles/formArtwork.css";

const App: FC = () => {
  const isAuth = useAppSelector((state) => state.UserReducer.isAuth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const history = useLocation();

  useEffect(() => {
    const localUser = localStorage.getItem("user");
    if (localUser) {
      dispatch(setUserSuccess(JSON.parse(localUser)));
      navigate(history.pathname);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="OwnWrapper">
      {isAuth ? (
        <>
          <NavBar />
          <Routes>
            {PrivateElements.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                Component={route.component}
              />
            ))}
            <Route
              path="*"
              element={<main className="mainContent">Not found</main>}
            />
          </Routes>
          <Footer />
        </>
      ) : (
        <Routes>
          {PublicElements.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              Component={route.component}
            />
          ))}
        </Routes>
      )}
    </div>
  );
};

export default App;
