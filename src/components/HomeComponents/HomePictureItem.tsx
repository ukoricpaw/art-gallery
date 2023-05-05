interface HomePictureItemInterface {
  imgClass: string;
  url: string;
  name: string;
}

function HomePictureItem(details: HomePictureItemInterface) {
  return (
    <>
      <img
        className={details.imgClass}
        src={details.url}
        title="picture"
        alt="mainPicture"
      />
      <p className="picture-title">{details.name}</p>
    </>
  );
}

export default HomePictureItem;
