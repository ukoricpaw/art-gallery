import React, { FC } from "react";
import styles from "../../styles/userProfile.module.css";
import { useAppSelector } from "../../hooks/reduxHooks";
import UserArtworks from "./UserArtworks";
const UserProfileComponent: FC = () => {
  const user = useAppSelector((state) => state.UserReducer.user);

  return (
    <div className={styles.userProfile}>
      <div className={styles.userProfileImageContainer}>
        <img
          className={styles.userImage}
          src={user.imageUrl}
          alt="userImage"
          loading="lazy"
        />
      </div>
      <h2 className={styles.userName}>{user.name}</h2>
      <p className={styles.email}>{user.email}</p>
    </div>
  );
};

export default UserProfileComponent;
