import styles from "../../styles/singlePage.module.css";
import { FC } from "react";
import { ArtworkType } from "../../types/artworksType";

interface SingleArtworkComponentInterface {
  art: ArtworkType;
}
const SingleArtworkComponent: FC<SingleArtworkComponentInterface> = ({
  art,
}) => {
  return (
    <div className={styles.artworkCard}>
      <div className={styles.artworkImg}>
        <img alt="artwork_img" className={styles.artwork_img} src={art.url} />
      </div>
      <div className={styles.description}>
        <p className={styles.name}>{art.name}</p>
        <p className={styles.price}>
          <span className={styles.priceTitle}>Цена:</span>
          {Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "USD",
          }).format(art.price)}
        </p>
        <p className={styles.size}>
          <span className={styles.sizeTitle}>Размер: </span>
          {art.size}
        </p>
        <p className={styles.quality}>
          <span className={styles.qualityTitle}>Качество: </span>
          {art.quality}
        </p>
        <p className={styles.copyright}>Copyright The Artist</p>
      </div>
    </div>
  );
};

export default SingleArtworkComponent;
