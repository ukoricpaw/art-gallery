import headerimage from "../../images/pictures/img3.akspic.ru-krug-abstrakciya-kosmos-figura-fraktalnoe_iskusstvo-2560x1600.jpg";

export default function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-title-container">
          <h1 className="header-title">художественная галерея</h1>
          <p className="header-info">оригинальные произведения искусства</p>
        </div>
        <div className="image-container">
          <img className="header-image" src={headerimage} />
        </div>
      </div>
    </header>
  );
}
