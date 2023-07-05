import React, { useEffect, useState } from "react";
import { Navbar } from "../../components";
import Topbar from "../../components/Topbar/Topbar";
import { Footer } from "../../container";
import images from "../../constants/images";
import axios from "axios";
import MenuItemMain from "../../components/Menuitem/MenuItemMain";

const Breakfast = () => {
  const [data, setData] = useState([]);
  const [breakfast, setBreakfast] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3001/titleMenu").then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/breakfast").then((res) => {
      setBreakfast(res.data);
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
          <Topbar data={data} />
          {breakfast.map((item) => (
            <MenuItemMain data={item} key={item.id}/>
          ))}
          
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Breakfast;
