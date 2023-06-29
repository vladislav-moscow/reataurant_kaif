import './menuMain.css'
import { Navbar } from "../../components";
import Topbar from "../../components/Topbar/Topbar";
import { Footer } from '../../container';

const MenuMain = () => {
  return (
    <div className="app__menu">
      <Navbar />
      <Topbar />
      <Footer />
    </div>
  );
};

export default MenuMain;
