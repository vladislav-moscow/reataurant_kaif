import { Link } from "react-router-dom";

const MenuTitle = ({ data }) => {
  return (
    <div className="menuu">
      {data.map((elem) => (
        <Link to={elem.subTitle} key={elem.title}>
          <div className="titleMenu">
            <img src={elem.image} alt="" className="title-img" />
            <h2 className="titlet">{elem.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuTitle;
