import React, { useEffect, useState } from "react";
import { Navbar } from "../../components";
import Topbar from "../../components/Topbar/Topbar";
import { Footer } from "../../container";
import images from "../../constants/images";
import axios from "axios";
import MenuItemMain from "../../components/Menuitem/MenuItemMain";

const Breakfast = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/breakfast").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
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
          <Topbar />
          <h3 className="app__menu-title">Завтраки</h3>
          <div className="menuItem__cart">
            {data.map((item) => (
              <MenuItemMain data={item} key={item.id} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Breakfast;
