/* eslint-disable jsx-a11y/alt-text */
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";
import images from "../../constants/images";
import "./footer.css";

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">связаться с нами</h1>
        <p className="p__opensans">г. Москва, ул. Большая Дмитровка, 13</p>
        <p className="p__opensans">+7 (495) 266-69-66</p>
        <p className="p__opensans">+7 (968) 555-12-30</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo_main} alt="footer_logo" />
        <p className="p__opensans">
          &quot;Лучший способ найти себя - это потерять себя в служении
          другим.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Время работы</h1>
        <p className="p__opensans">Понедельник-Пятница:</p>
        <p className="p__opensans">12:00 - 00:00</p>
        <p className="p__opensans">Суббота-Воскресенье:</p>
        <p className="p__opensans">12:00 - 02:00</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Kaif. Все права защищены.</p>
    </div>
  </div>
);

export default Footer;
