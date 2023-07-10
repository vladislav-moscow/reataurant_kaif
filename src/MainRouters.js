import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/MenuMain";
import Breakfast from "./pages/Menu/Breakfast";
import Snacks from "./pages/Menu/Snacks";
import Salad from "./pages/Menu/Salad";
import Soups from "./pages/Menu/Soups";

const MainRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/menu/breakfast" element={<Breakfast />} />
      <Route path="/menu/snacks" element={<Snacks />} />
      <Route path="/menu/salads" element={<Salad />} />
      <Route path="/menu/soup" element={<Soups />} />
    </Routes>
  );
};

export default MainRouters;
