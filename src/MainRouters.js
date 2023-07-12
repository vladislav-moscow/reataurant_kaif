import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/MenuMain";
import Breakfast from "./pages/Menu/Breakfast";
import Snacks from "./pages/Menu/Snacks";
import Salad from "./pages/Menu/Salad";
import Soups from "./pages/Menu/Soups";
import Hotdishes from "./pages/Menu/Hotdishes";
import Sidedishes from "./pages/Menu/Sidedishes";
import Asia from "./pages/Menu/Asia";
import Pizza from "./pages/Menu/Pizza";
import Dessert from "./pages/Menu/Dessert";
import Drink from "./pages/Menu/Drink";

const MainRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/breakfast" element={<Breakfast />} />
      <Route path="/menu/snacks" element={<Snacks />} />
      <Route path="/menu/salads" element={<Salad />} />
      <Route path="/menu/soup" element={<Soups />} />
      <Route path="/menu/hotdishes" element={<Hotdishes />} />
      <Route path="/menu/sidedishes" element={<Sidedishes />} />
      <Route path="/menu/asia" element={<Asia />} />
      <Route path="/menu/pizza" element={<Pizza />} />
      <Route path="/menu/desserts" element={<Dessert />} />
      <Route path="/menu/drinks" element={<Drink />} />
    </Routes>
  );
};

export default MainRouters;
