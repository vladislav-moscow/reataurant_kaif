/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo_main} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <Link to={`/`}>
          <li className="p__opensans">
            <a>Главная</a>
          </li>
        </Link>

        <li className="p__opensans">
          <a href="#about">О Нас</a>
        </li>
        <Link to={`/menu`}>
          <li className="p__opensans">
            <a>Меню</a>
          </li>
        </Link>
        <li className="p__opensans">
          <a href="#awards">Награды</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Контакты</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Вход / Регистрация
        </a>
        <div />
        <a href="/" className="p__opensans">
          Заказ столика
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Главная
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  О Нас
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Меню
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  Награды
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
