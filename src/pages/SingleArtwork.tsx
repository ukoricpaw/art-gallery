import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { FC } from "react";
import { fetchSingleArtwork } from "../store/action-creators/fetchSingleArtwork";
import SingleArtworkComponent from "../components/singleArtwork/SingleArtworkComponent";

const SingleArtwork: FC = () => {
  const dispatch = useAppDispatch();

  const { data, isLoading, error } = useAppSelector(
    (state) => state.SingleArtworkReducer
  );
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleArtwork(Number(id)));
  }, []);

  if (isLoading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mainContent">
      <SingleArtworkComponent art={data} />
    </div>
  );
};
export default SingleArtwork;
