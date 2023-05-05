import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchArtworks } from "../../store/action-creators/fetchArtworks";
import HomePicturesList from "./HomePicturesList";

const HomeContent: FC = () => {
  const { artworks, isLoading, error } = useAppSelector(
    (state) => state.ArtworkReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArtworks({ typeofartwork: 1 }));
  }, []);

  if (isLoading) {
    return <main className="mainContent">Loading</main>;
  }

  if (error) {
    return <main className="mainContent">{error}</main>;
  }

  return (
    <main className="mainContent">
      <div className="mainWrapper">
        <p className="mainTitle">новые работы</p>
        <HomePicturesList arts={artworks} />
        <section className="about-section">
          <div className="about-section-wrapper">
            <h2 className="about-title">О нас</h2>
            <p className="about-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomeContent;
