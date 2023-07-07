import "./menuItemMain.css";

const MenuItemMain = ({ data }) => {
  return (
    <div className="menuItem">
      <img src={data.image} alt="" className="menuItem-img" />
      <h2 className="menuItem-title">{data.title}</h2>
      <div className="menuItem-price">{data.price} ₽</div>
    </div>
  );
};

export default MenuItemMain;
