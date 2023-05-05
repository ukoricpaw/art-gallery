import React from "react";
import { Link } from "react-router-dom";
import HomePictureItem from "./HomePictureItem";
import { ArtworkType } from "../../types/artworksType";

interface HomePictureList {
  arts: ArtworkType[];
}

const HomePicturesList = (props: HomePictureList) => {
  return (
    <div className="pic-container">
      <div className="firstpicture__upSection">
        <Link to={`singleartwork/${props.arts[props.arts.length - 1]?.id}`}>
          <HomePictureItem
            imgClass="firstPicture-img"
            url={props.arts[props.arts.length - 1]?.url}
            name={props.arts[props.arts.length - 1]?.name}
          />
        </Link>
      </div>
      <div className="secondpicture__upSection">
        <Link to={`singleartwork/${props.arts[props.arts.length - 2]?.id}`}>
          <HomePictureItem
            imgClass="secondPicture-img"
            url={props.arts[props.arts.length - 2]?.url}
            name={props.arts[props.arts.length - 2]?.name}
          />
        </Link>
      </div>
      <div className="picture__downSection1">
        <Link to={`singleartwork/${props.arts[props.arts.length - 3]?.id}`}>
          <HomePictureItem
            imgClass="picture-down-img"
            url={props.arts[props.arts.length - 3]?.url}
            name={props.arts[props.arts.length - 3]?.name}
          />
        </Link>
      </div>
      <div className="picture__downSection2">
        <Link to={`singleartwork/${props.arts[props.arts.length - 4]?.id}`}>
          <HomePictureItem
            imgClass="picture-down-img"
            url={props.arts[props.arts.length - 4]?.url}
            name={props.arts[props.arts.length - 4]?.name}
          />
        </Link>
      </div>
      <div className="picture__downSection3">
        <Link to={`singleartwork/${props.arts[props.arts.length - 5]?.id}`}>
          <HomePictureItem
            imgClass="picture-down-img"
            url={props.arts[props.arts.length - 5]?.url}
            name={props.arts[props.arts.length - 5]?.name}
          />
        </Link>
      </div>
    </div>
  );
};

export default HomePicturesList;
