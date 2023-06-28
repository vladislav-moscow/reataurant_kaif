import images from "../../constants/images";

import "./topbar.css";

const Topbar = () => {
  const titleMenu = [
    'Завтрак',
    'Закуски',
    'Салаты',
    'Супы',
    'Горячее',
    'Пицца',
    'Гарниры',
    'Азия',
    'Десерты',
    'Напитки',
  ];
  return (
    <div className="topbar">
      <div className="topbar__video">
        <div className="topbar__videoBackground">
          <video preload="auto" playsInline autoPlay loop muted>
            <source src={images.video} type="video/mp4" />
          </video>
        </div>
      </div>
      <nav className="topbar__links">
        {titleMenu.map((elem) => (
          <li>
            <a href="!#">{elem}</a>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default Topbar;
