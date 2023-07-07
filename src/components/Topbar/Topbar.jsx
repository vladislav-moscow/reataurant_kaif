import { Link } from "react-router-dom";
import "./topbar.css";
import { useNavigate } from "react-router-dom";

const Topbar = ({ data }) => {
  const navigate = useNavigate();

  const navigateClick = (e) => {
    e.preventDefault();
    navigate(`/menu/${e.target.title}`);
  }

  return (
    <nav className="topbar__links">
      <div className="links">
        {data.map((elem) => (
          <li key={elem.title}>
            
            <h3 type="submit" onClick={navigateClick} title={elem.subTitle}>{elem.title}</h3>
            
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Topbar;
