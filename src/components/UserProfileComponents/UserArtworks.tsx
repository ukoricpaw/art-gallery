import React, { FC } from "react";
import styles from "../../styles/userProfile.module.css";
import ArtworkCard from "../singleArtwork/ArtworkCard";
import { ArtworkType } from "../../types/artworksType";
import { Link } from "react-router-dom";

interface userArtworksType {
  data: ArtworkType[];
}

const UserArtworks: FC<userArtworksType> = ({ data }) => {
  return (
    <div className={styles.artworksWrapper}>
      <h3 className={styles.titleUserArtworks}>Мои работы:</h3>
      <div className={styles.userArtworks}>
        {data ? (
          data.map((artwork) => (
            <Link key={artwork.id} to={`/singleartwork/${artwork.id}`}>
              <ArtworkCard artwork={artwork} />
            </Link>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>У вас пока нет работ</p>
        )}
      </div>
    </div>
  );
};

export default UserArtworks;
