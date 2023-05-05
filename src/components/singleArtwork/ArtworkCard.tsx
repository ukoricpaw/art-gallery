import React, { FC } from "react";
import { ArtworkType } from "../../types/artworksType";

interface ArtworkCardType {
  artwork: ArtworkType;
}
const ArtworkCard: FC<ArtworkCardType> = ({ artwork }) => {
  return (
    <div className="artworkCard">
      <div className="artwork-img">
        <img alt="artwork_img" className="artwork-img__url" src={artwork.url} />
      </div>
      <div className="artwork-description">
        <p className="artwork-name">{artwork.name}</p>
        <p className="artwork-price">Цена: {artwork.price} $</p>
        <p className="artwork-size">
          <span>Размер: </span>
          {artwork.size}
        </p>
        <p className="artwork-quality">
          <span>Качество: </span>
          {artwork.quality}
        </p>
      </div>
    </div>
  );
};

export default React.memo(ArtworkCard);
