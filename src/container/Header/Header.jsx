import { SubHeading } from "../../components";
import images from "../../constants/images";
import "./header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Ищите новый вкус" />
      <h1 className="app__header-h1">Ключ к изысканной кухне</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
      Еда состоит в том, чтобы быть счастливым; за столом, где мы, вероятно, проводим наши самые счастливые моменты.{" "}
      </p>
      <button type="button" className="custom__button">
        Изучить меню
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
