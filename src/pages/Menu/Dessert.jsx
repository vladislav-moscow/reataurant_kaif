import { useEffect, useState } from "react";
import axios from "axios";

import { Footer } from "../../container";
import { Navbar } from "../../components";
import { images } from "../../constants";

import Topbar from "../../components/Topbar/Topbar";
import MenuItemMain from "../../components/Menuitem/MenuItemMain";

const Dessert = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/dessert").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="app__menu">
      <Navbar />
      <div className="app__menu-topbar">
        <div className="topbar__video">
          <div className="topbar__videoBackground">
            <video preload="auto" playsInline autoPlay muted>
              <source src={images.video} type="video/mp4" />
            </video>
          </div>
        </div>
        <Topbar data={data} />
        <h3 className="app__menu-title">Десерты</h3>
        <div className="menuItem__cart">
          {data.map((item) => (
            <MenuItemMain data={item} key={item.id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dessert;
