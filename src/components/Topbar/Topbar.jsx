import "./topbar.css";

const Topbar = ({ data }) => {
  return (
      <nav className="topbar__links">
        <div className="links">
          {data.map((elem) => (
            <li key={elem.title}>
              <a href="!#" className="link">
                {elem.title}
              </a>
            </li>
          ))}
        </div>
      </nav>
  );
};

export default Topbar;
