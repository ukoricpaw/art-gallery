import React from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import NewArtwork from "./NewArtwork";
import UserProfileComponent from "../components/UserProfileComponents/UserProfileComponent";
import styles from "../styles/userProfile.module.css";
import UserArtworks from "../components/UserProfileComponents/UserArtworks";

const UserProfile = () => {
  const { loading, error, user } = useAppSelector((state) => state.UserReducer);

  if (loading) {
    return (
      <div className="mainContent">
        <></>
      </div>
    );
  }
  if (error) {
    return (
      <div className="mainContent">
        <div className={styles.ownContent}>{error}</div>
      </div>
    );
  }

  return (
    <div className="mainContent">
      <div className={styles.ownContent}>
        <UserProfileComponent />
        <NewArtwork />
      </div>
      <UserArtworks data={user.artworks} />
    </div>
  );
};

export default UserProfile;
