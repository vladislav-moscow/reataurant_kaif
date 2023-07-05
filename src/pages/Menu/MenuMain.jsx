import './menuMain.css'
import { Navbar } from "../../components";
import Topbar from "../../components/Topbar/Topbar";
import { Footer } from '../../container';
import { useEffect, useState } from "react";
import MenuTitle from "../../components/Menuitem/MenuTitle";
import axios from 'axios';
import images from "../../constants/images";


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
          <Topbar data = {data} />
          <MenuTitle data = {data} />
        </div>
      
      <Footer />
    </div>
  );
};

export default MenuMain;
