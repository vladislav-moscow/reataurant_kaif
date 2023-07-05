import React from "react";

const MenuItemMain = ({ data }) => {
  return (
    <div className="app-menuItem">
      <div className="menuItem">
        <img src={data.image} alt="" className="menuItem-img" />
        <h2 className="menuItem-title">{data.title}</h2>
        <div className="menuItem price">{data.price} ₽</div>
      </div>
    </div>
  );
};

export default MenuItemMain;
