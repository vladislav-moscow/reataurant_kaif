import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./topbar.css";

const Topbar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/titleMenu").then((res) => {
      setData(res.data);
    });
  }, []);

  const navigateClick = (e) => {
    e.preventDefault();
    navigate(`/menu/${e.target.title}`);
  }

  return (
    <nav className="topbar__links">
      <div className="topbar__links-box">
        {data.map((elem) => (
          <li key={elem.title}>
            <h3 className="topbar__links-link" type="submit" onClick={navigateClick} title={elem.subTitle}>{elem.title}</h3>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Topbar;
