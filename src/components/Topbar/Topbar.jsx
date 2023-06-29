import axios from "axios";
import images from "../../constants/images";

import "./topbar.css";
import { useEffect, useState } from "react";

const Topbar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/titleMenu").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="topbar">
      <div className="topbar__video">
        <div className="topbar__videoBackground">
          <video preload="auto" playsInline autoPlay muted >
            <source src={images.video} type="video/mp4"/>
          </video>
        </div>
      </div>
      <nav className="topbar__links">
        <div className="links">
          {data.map((elem) => (
            <li>
              <a href="!#" className="link">
                {elem.title}
              </a>
            </li>
          ))}
        </div>
      </nav>
      <div className="menuu">
        {data.map((elem) => (
          <div key={elem.title} className="titleMenu">
            <img src={elem.image} alt="" className="title-img" />
            <h2 className="titlet">{elem.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
