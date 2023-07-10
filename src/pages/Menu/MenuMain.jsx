import { useEffect, useState } from "react";
import axios from 'axios';

import images from "../../constants/images";

import './menuMain.css';

import { Footer } from '../../container';
import { Navbar } from "../../components";
import MenuTitle from "../../components/Menuitem/MenuTitle";
import Topbar from "../../components/Topbar/Topbar";


const MenuMain = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/titleMenu").then((res) => {
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
          <Topbar />
          <MenuTitle data = {data} />
        </div>
      
      <Footer />
    </div>
  );
};

export default MenuMain;
