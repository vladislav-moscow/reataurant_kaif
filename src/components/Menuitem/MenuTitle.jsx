import { Link } from "react-router-dom";

import './menuTitle.css';

const MenuTitle = ({ data }) => {
  return (
    <div className="menu__title">
      {data.map((elem) => (
        <Link to={elem.subTitle} key={elem.title}>
          <div className="menu__title-box">
            <img src={elem.image} alt="" className="menu__title-img" />
            <h2 className="menu__title-title">{elem.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuTitle;
