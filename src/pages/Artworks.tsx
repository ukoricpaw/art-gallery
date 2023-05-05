import React, { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchArtworks } from "../store/action-creators/fetchArtworks";
import ArtworkCard from "../components/singleArtwork/ArtworkCard";
import { changeInput } from "../store/reducers/SearchSlice";
import Checkbox from "../components/FormComponents/CheckBox";
import { clearFilter } from "../store/reducers/FilterSlice";

const Artworks: React.FC = () => {
  let { id } = useParams();

  const ref = useRef<HTMLButtonElement>(null);

  const dispatch = useAppDispatch();

  const { artworks, isLoading, error } = useAppSelector(
    (state) => state.ArtworkReducer
  );
  const { input } = useAppSelector((state) => state.SearchReducer);

  const { filterStyles } = useAppSelector((state) => state.FilterReducer);

  useEffect(() => {
    if (id) dispatch(fetchArtworks({ typeofartwork: parseInt(id) }));
    return () => {
      dispatch(clearFilter());
    };
  }, [id]);

  const listener = (event: KeyboardEvent) => {
    if (
      event.key === "Enter" &&
      (filterStyles.length > 0 || input.length > 0)
    ) {
      ref.current?.click();
    }
    if (
      event.key === "Enter" &&
      !filterStyles.length &&
      !input.length &&
      !artworks.length
    ) {
      ref.current?.click();
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", listener);
    return () => {
      window.removeEventListener("keyup", listener);
    };
  }, [ref.current]);

  const searchArtworks = () => {
    if (id)
      dispatch(
        fetchArtworks({
          typeofartwork: parseInt(id),
          style: filterStyles.join(","),
          query: input,
        })
      );
  };

  if (isLoading) {
    return <main className="mainContent"> </main>;
  }

  if (error) {
    return <main className="mainContent">{error}</main>;
  }

  return (
    <main className="mainContent">
      <div className="artworksMainWrapper">
        <Checkbox requestFunction={searchArtworks} />
        <div className="artworksPageWrapper">
          <div className="inputArtworkPage">
            <div>
              <input
                onChange={(event) => dispatch(changeInput(event.target.value))}
                className="inputSearch"
                placeholder="Search"
                value={input}
              />
              <button
                ref={ref}
                onClick={() => searchArtworks()}
                style={{ marginLeft: "10px" }}
                className="submit-btn"
              >
                Найти
              </button>
            </div>
          </div>
          <div className="artworks-wrapper">
            {artworks.length !== 0 ? (
              artworks.map((artwork) => (
                <Link key={artwork.id} to={`/singleartwork/${artwork.id}`}>
                  <ArtworkCard artwork={artwork} />
                </Link>
              ))
            ) : (
              <div className="noartworksDiv">There are no artworks</div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Artworks;
