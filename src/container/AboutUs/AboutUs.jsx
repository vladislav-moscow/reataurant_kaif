import images from "../../constants/images";
import "./aboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.logo_main} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">О Нас</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          KAIF PROVENANCE - ИМЕНИТЫЙ РЕСТОРАН, КОТОРЫЙ НАХОДИТСЯ В САМОМ СЕРДЦЕ
          ИСТОРИЧЕСКОЙ МОСКВЫ. ЭТО КОЛЛАБОРАЦИЯ СТИЛЯ, НЕВЕРОЯТНОГО ВКУСА И
          ВЫСОКИХ СТАНДАРТОВ СЕРВИСА.
        </p>
        <button type="button" className="custom__button">
          Узнать больше
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Наша история</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          АВТОРСКАЯ КУХНЯ И БЕЗГРАНИЧНАЯ КОЛЛЕКЦИЯ КОКТЕЙЛЕЙ МЕСТО, ГДЕ ИНТЕРЬЕР
          ПРОРАБОТАН ДО МЕЛОЧЕЙ, РАСТВОРЯЕТ В СВОЕЙ АТМОСФЕРЕ И ОТКРЫВАЕТ ДВЕРЬ
          В МИР НЕВЕРОЯТНЫХ ВКУСОВ.
        </p>
        <button type="button" className="custom__button">
          Узнать больше
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
